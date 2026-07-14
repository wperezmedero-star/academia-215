// ============================================================
// PEARSON KILLER — pk-schema.js
// FASE 1: Infraestructura — Modelo de Datos Normalizado
//
// Este archivo define CÓMO debe lucir una pregunta de calidad
// "Killer Pearson" y provee herramientas para:
//   1) Validar preguntas nuevas contra el checklist de calidad.
//   2) Adaptar (sin destruir) las preguntas del banco actual al
//      nuevo modelo, agregando los campos de clasificación que
//      pide la auditoría de Fase 1.5, SIN romper compatibilidad
//      con pearson-killer.html ni con pk-loader.js.
//
// IMPORTANTE: este archivo NO borra ni reescribe preguntas.
// Solo añade metadatos. El motor de quiz sigue leyendo los
// campos antiguos (q, o, a, correcto, incorrectos, trampa,
// tipo_trampa, nivel) exactamente como siempre.
// ============================================================

// ---- Categorías de calidad (auditoría Fase 1.5) ----
const PK_CATEGORIAS = {
  BASIC_ONLY:        "basic_only",        // reconocimiento directo, tema revelado
  INTERMEDIATE:       "intermediate",      // cumple algunos criterios killer, no todos
  KILLER_READY:        "killer_ready",      // cumple el checklist completo
  REWRITE_REQUIRED:  "rewrite_required",  // tiene datos útiles pero necesita reescritura
  RETIRED:            "retired"             // obsoleta / duplicada / incorrecta
};

// ---- Modos permitidos por pregunta ----
const PK_MODOS = {
  TRAINING_BASIC:        "training_basic",
  TRAINING_INTERMEDIATE: "training_intermediate",
  KILLER:                "killer",
  EXAM:                  "exam"
};

// ---- Palabras decisivas reconocidas (español, estilo Pearson) ----
const PK_PALABRAS_DECISIVAS = [
  "primero", "principalmente", "normalmente", "excepto", "except",
  "mejor", "más apropiada", "más correcta", "menos correcta",
  "menos apropiada", "generalmente", "usualmente", "siempre", "nunca",
  "único", "solo si", "únicamente"
];

// ---- Modelo normalizado de UNA variante de pregunta ----
// (Documentación viva — no es una clase forzada, es la forma
// que debe tener el objeto final una vez enriquecido.)
function crearPreguntaNormalizada(datos) {
  return {
    id: datos.id,                                   // heredado del concepto + índice de variante
    area_blueprint: datos.area_blueprint || null,    // id de PK_BLUEPRINT.areas
    subtema: datos.subtema || null,                  // uno de los subtemas del área
    principio_principal: datos.principio_principal || datos.concepto || "",
    conceptos_secundarios: datos.conceptos_secundarios || [],
    dificultad: datos.nivel || datos.dificultad || 1, // 1-5, reusa 'nivel' ya existente
    tipo_pregunta: datos.tipo_pregunta || inferirTipoPregunta(datos.q || ""),
    palabra_decisiva: datos.palabra_decisiva || detectarPalabraDecisiva(datos.q || ""),
    dato_relevante: datos.dato_relevante || null,
    pregunta: datos.q,
    opciones: datos.o,
    respuesta_correcta_idx: datos.a,
    distractores: (datos.incorrectos || []).map(txt => ({ texto: txt })),
    explicacion_completa: datos.correcto || "",
    trampa_principal: datos.trampa || "",
    tipo_trampa: datos.tipo_trampa || null,
    sinonimos: datos.sinonimos || [],
    error_comun: datos.error_comun || datos.trampa || "",
    fecha_creacion: datos.fecha_creacion || null,
    // --- Campos de uso/telemetría (los llena pk-storage.js en vivo) ---
    veces_usada: 0,
    aciertos: 0,
    intentos: 0,
    tiempo_promedio_ms: 0,
    // --- Campos de la auditoría de calidad (Fase 1.5) ---
    category: datos.category || null,
    allowed_modes: datos.allowed_modes || []
  };
}

function inferirTipoPregunta(textoPregunta) {
  const t = (textoPregunta || "").toUpperCase();
  if (t.includes("EXCEPTO")) return "excepto";
  if (t.includes("¿CUÁL NO") || t.includes("CUAL NO")) return "cual_no";
  if (t.includes("MEJOR") || t.includes("MÁS APROPIAD")) return "mejor_opcion";
  if (t.includes("PRIMERO") || t.includes("QUÉ DEBE HACER")) return "primer_paso";
  if (t.includes("FALSA") || t.includes("INCORRECTA")) return "afirmacion_falsa";
  return "directa";
}

function detectarPalabraDecisiva(textoPregunta) {
  const t = (textoPregunta || "").toLowerCase();
  for (const palabra of PK_PALABRAS_DECISIVAS) {
    if (t.includes(palabra)) return palabra;
  }
  return null;
}

// ============================================================
// VALIDADOR DE CALIDAD — Checklist automatizable de William
// Devuelve { category, allowed_modes, checks, score }
// Los 10 puntos de control que NO son automatizables al 100%
// (ej. "¿hay dos respuestas igualmente defendibles?") se
// aproximan con heurísticas y quedan marcadas como 'revisar'
// cuando el heurístico no puede decidir con confianza.
// ============================================================
function auditarPregunta(variante, conceptoNombre) {
  const q = variante.q || "";
  const o = variante.o || [];
  const correcto = variante.correcto || "";
  const incorrectos = variante.incorrectos || [];

  const checks = {};

  // 1) ¿El título/encabezado revela el tema? -> aproximamos viendo si
  //    el nombre exacto del concepto aparece dentro del texto de la pregunta.
  const conceptoLimpio = (conceptoNombre || "").split("(")[0].split("—")[0].trim().toLowerCase();
  checks.titulo_no_revela = conceptoLimpio.length > 6
    ? !q.toLowerCase().includes(conceptoLimpio)
    : true;

  // 2) Longitud/complejidad como proxy de "escenario profesional"
  //    (un escenario real casi siempre pasa de 140 caracteres y
  //    suele tener un sujeto con inicial mayúscula seguido de verbo,
  //    convención que hemos usado: "R tiene...", "M queda...", etc.)
  const tieneSujetoEscenario = /\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{0,15}\s+(tiene|es|queda|compra|decide|solicita|firma|recibe|paga|cambia|sufre|fallece|pregunta|dice|le dice)\b/.test(q);
  checks.tiene_escenario = q.length >= 140 && tieneSujetoEscenario;

  // 3) Palabra decisiva presente
  checks.tiene_palabra_decisiva = !!detectarPalabraDecisiva(q);

  // 4) Cuatro opciones con plausibilidad razonable (ninguna opción
  //    de una sola palabra, que delataría reconocimiento directo)
  const opcionesPlausibles = o.length === 4 && o.every(op => (op || "").split(" ").length >= 3);
  checks.opciones_plausibles = opcionesPlausibles;

  // 5) Explicación completa: existe explicación de la correcta Y
  //    de las 3 incorrectas, con contenido sustancial
  checks.explicacion_completa = correcto.length >= 60 && incorrectos.length === 3
    && incorrectos.every(i => (i || "").length >= 20);

  // 6) Trampa/distractor principal identificado explícitamente
  checks.distractor_identificado = !!(variante.trampa && variante.trampa.length >= 20);

  // ---- Puntaje y categoría resultante ----
  const puntos = Object.values(checks).filter(Boolean).length;
  const total = Object.keys(checks).length; // 6

  let category;
  let allowed_modes;

  if (puntos === total) {
    category = PK_CATEGORIAS.KILLER_READY;
    allowed_modes = [PK_MODOS.TRAINING_BASIC, PK_MODOS.TRAINING_INTERMEDIATE, PK_MODOS.KILLER, PK_MODOS.EXAM];
  } else if (puntos >= 4) {
    category = PK_CATEGORIAS.INTERMEDIATE;
    allowed_modes = [PK_MODOS.TRAINING_BASIC, PK_MODOS.TRAINING_INTERMEDIATE, PK_MODOS.EXAM];
  } else if (checks.explicacion_completa && checks.opciones_plausibles) {
    // Tiene la base correcta (explicación + opciones) pero le falta
    // el envoltorio de escenario/palabra decisiva -> se puede arreglar
    category = PK_CATEGORIAS.REWRITE_REQUIRED;
    allowed_modes = [PK_MODOS.TRAINING_BASIC];
  } else if (!checks.explicacion_completa) {
    // Sin explicación sustancial -> solo sirve como recall básico
    category = PK_CATEGORIAS.BASIC_ONLY;
    allowed_modes = [PK_MODOS.TRAINING_BASIC];
  } else {
    category = PK_CATEGORIAS.REWRITE_REQUIRED;
    allowed_modes = [PK_MODOS.TRAINING_BASIC];
  }

  return { category, allowed_modes, checks, score: puntos + "/" + total };
}

if (typeof module !== 'undefined') {
  module.exports = {
    PK_CATEGORIAS, PK_MODOS, PK_PALABRAS_DECISIVAS,
    crearPreguntaNormalizada, auditarPregunta, detectarPalabraDecisiva, inferirTipoPregunta
  };
}
if (typeof window !== 'undefined') {
  window.PK_SCHEMA = {
    PK_CATEGORIAS, PK_MODOS, PK_PALABRAS_DECISIVAS,
    crearPreguntaNormalizada, auditarPregunta, detectarPalabraDecisiva, inferirTipoPregunta
  };
}
