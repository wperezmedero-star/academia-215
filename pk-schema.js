// ============================================================
// PEARSON KILLER — pk-schema.js
// FASE 1: Infraestructura — Modelo de Datos Normalizado
// v1.1 — Corregido según instrucciones de William (14/07/2026):
//   1) 'intermediate' NUNCA entra a modo exam automáticamente.
//   2) 'killer_ready' solo es CANDIDATA a killer/exam; el modo
//      exam exige además human_review_status === 'approved'.
//   3) Se agrega human_review_status: pending | approved | rejected.
//   4) puedeEntrarAExamen() es la única fuente de verdad para el
//      gate de examen — no basta con leer 'category'.
//   5) Se agrega tipo_cognitivo: memoria_directa | comparacion_
//      conceptual | escenario_aplicado | escenario_avanzado.
//   6) El auditor NO declara killer_ready "verificado" solo por
//      longitud + palabra decisiva + explicaciones completas.
//      Esos 6 checks solo producen una CANDIDATURA MECÁNICA.
//      Los 8 criterios cualitativos de verdad (principio oculto,
//      dos distractores tentadores, etc.) quedan marcados como
//      NO AUTOMATIZABLES y exigen revisión humana antes de que
//      cualquier pregunta se considere killer_ready en firme.
//
// Este archivo sigue sin borrar ni reescribir preguntas. Solo
// añade metadatos y funciones de clasificación/consulta.
// ============================================================

// ---- Categorías de calidad (auditoría Fase 1.5) ----
const PK_CATEGORIAS = {
  BASIC_ONLY:        "basic_only",        // reconocimiento directo, tema revelado
  INTERMEDIATE:       "intermediate",      // cumple algunos criterios killer, no todos
  KILLER_READY:        "killer_ready",      // CANDIDATA mecánica — requiere revisión humana para ser definitiva
  REWRITE_REQUIRED:  "rewrite_required",  // tiene datos útiles pero necesita reescritura
  RETIRED:            "retired"             // obsoleta / duplicada / incorrecta / huérfana
};

// ---- Modos permitidos por pregunta ----
const PK_MODOS = {
  TRAINING_BASIC:        "training_basic",
  TRAINING_INTERMEDIATE: "training_intermediate",
  KILLER:                "killer",
  EXAM:                  "exam"
};

// ---- Estado de revisión humana (regla 3) ----
const PK_HUMAN_REVIEW_STATUS = {
  PENDING:  "pending",
  APPROVED: "approved",
  REJECTED: "rejected"
};

// ---- Tipo cognitivo de la pregunta (regla 5) ----
const PK_TIPO_COGNITIVO = {
  MEMORIA_DIRECTA:        "memoria_directa",         // ¿Qué es X? / definición pura
  COMPARACION_CONCEPTUAL: "comparacion_conceptual",  // X vs Y / diferencia entre...
  ESCENARIO_APLICADO:     "escenario_aplicado",      // caso corto, un solo dato a aplicar
  ESCENARIO_AVANZADO:     "escenario_avanzado"       // caso largo, EXCEPTO/varias afirmaciones, info irrelevante
};

// ---- Los 8 criterios cualitativos reales de "killer_ready" (regla 6) ----
// 'automatizable:false' significa que el heurístico NO puede
// verificarlo con confianza — siempre se marca pendiente de
// revisión humana, sin importar qué tan bien puntúe la pregunta
// en los checks mecánicos.
const PK_CRITERIOS_CUALITATIVOS = [
  { id: "principio_oculto",              label: "El principio realmente está oculto (no reconocimiento directo)", automatizable: false },
  { id: "dos_respuestas_tentadoras",     label: "Existen al menos dos respuestas tentadoras",                     automatizable: false },
  { id: "una_sola_mejor_respuesta",      label: "Hay una sola mejor respuesta defendible",                        automatizable: false },
  { id: "info_relevante_e_irrelevante",  label: "El escenario mezcla información relevante e irrelevante",        automatizable: false },
  { id: "distractor_condicional",        label: "Al menos un distractor sería correcto si cambiara un dato",      automatizable: false },
  { id: "ausencia_ambiguedad",           label: "La pregunta no es ambigua",                                      automatizable: false },
  { id: "escenario_profesional_real",    label: "El escenario es profesional y realista (no forzado)",            automatizable: false },
  { id: "explicacion_individual_4",      label: "Cada una de las 4 opciones tiene explicación individual",        automatizable: true  }
];

// ---- Palabras decisivas reconocidas (español, estilo Pearson) ----
const PK_PALABRAS_DECISIVAS = [
  "primero", "principalmente", "normalmente", "excepto", "except",
  "mejor", "más apropiada", "más correcta", "menos correcta",
  "menos apropiada", "generalmente", "usualmente", "siempre", "nunca",
  "único", "solo si", "únicamente", "más probable", "menos probable",
  "mayor probabilidad", "más razonable"
];

// ---- Modelo normalizado de UNA variante de pregunta ----
function crearPreguntaNormalizada(datos) {
  return {
    id: datos.id,
    area_blueprint: datos.area_blueprint || null,
    subtema: datos.subtema || null,
    principio_principal: datos.principio_principal || datos.concepto || "",
    conceptos_secundarios: datos.conceptos_secundarios || [],
    dificultad: datos.nivel || datos.dificultad || 1,
    tipo_pregunta: datos.tipo_pregunta || inferirTipoPregunta(datos.q || ""),
    tipo_cognitivo: datos.tipo_cognitivo || null,
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
    veces_usada: 0,
    aciertos: 0,
    intentos: 0,
    tiempo_promedio_ms: 0,
    // --- Auditoría de calidad ---
    category: datos.category || null,
    human_review_status: PK_HUMAN_REVIEW_STATUS.PENDING, // regla 3 — SIEMPRE arranca pendiente
    allowed_modes: []  // se calcula con calcularAllowedModes(), nunca a mano
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
// REGLA 5 — Clasificador de tipo cognitivo
// Distingue memoria_directa / comparacion_conceptual /
// escenario_aplicado / escenario_avanzado. Es heurístico, igual
// que el resto del auditor — sirve para orientar la reescritura,
// no como verdad absoluta.
// ============================================================
function clasificarTipoCognitivo(variante) {
  const q = variante.q || "";
  const qLower = q.toLowerCase();
  const tieneSujetoEscenario = /\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{0,15}\s+(tiene|es|queda|compra|decide|solicita|firma|recibe|paga|cambia|sufre|fallece|pregunta|dice|le dice|contrata|renuncia)\b/.test(q);
  const marcadoresComparacion = ["diferencia entre", " vs ", " vs.", "a diferencia de", "mientras que",
    "por otro lado", "en cambio", "se diferencia de"];
  const esComparacion = marcadoresComparacion.some(m => qLower.includes(m));
  const esExcepto = qLower.includes("excepto");
  const tieneListaNumerada = /\b[1-5]\.\s|\bI\.\s|\bII\.\s/.test(q);
  const esLarga = q.length >= 220;
  const tienePalabraDecisiva = !!detectarPalabraDecisiva(q);

  if (tieneSujetoEscenario && (esExcepto || tieneListaNumerada || (esLarga && tienePalabraDecisiva))) {
    return PK_TIPO_COGNITIVO.ESCENARIO_AVANZADO;
  }
  if (tieneSujetoEscenario) {
    return PK_TIPO_COGNITIVO.ESCENARIO_APLICADO;
  }
  if (esComparacion) {
    return PK_TIPO_COGNITIVO.COMPARACION_CONCEPTUAL;
  }
  return PK_TIPO_COGNITIVO.MEMORIA_DIRECTA;
}

// ============================================================
// REGLA 4 — Única fuente de verdad para el gate de examen
// ============================================================
function puedeEntrarAExamen(category, human_review_status) {
  return category === PK_CATEGORIAS.KILLER_READY
      && human_review_status === PK_HUMAN_REVIEW_STATUS.APPROVED;
}

// ============================================================
// REGLAS 1 y 2 — allowed_modes se CALCULA, nunca se asigna a mano
// 'intermediate' jamás incluye 'exam'. 'killer_ready' incluye
// 'killer' de forma automática (modo de entrenamiento intensivo),
// pero 'exam' solo se añade si ya fue aprobada por un humano.
// ============================================================
function calcularAllowedModes(category, human_review_status) {
  const M = PK_MODOS;
  switch (category) {
    case PK_CATEGORIAS.RETIRED:
      return [];
    case PK_CATEGORIAS.BASIC_ONLY:
      return [M.TRAINING_BASIC];
    case PK_CATEGORIAS.REWRITE_REQUIRED:
      return [M.TRAINING_BASIC];
    case PK_CATEGORIAS.INTERMEDIATE:
      // Regla 1 — nunca 'exam' aquí, pase lo que pase con human_review_status
      return [M.TRAINING_BASIC, M.TRAINING_INTERMEDIATE];
    case PK_CATEGORIAS.KILLER_READY: {
      const modos = [M.TRAINING_BASIC, M.TRAINING_INTERMEDIATE, M.KILLER];
      if (puedeEntrarAExamen(category, human_review_status)) modos.push(M.EXAM);
      return modos;
    }
    default:
      return [M.TRAINING_BASIC];
  }
}

// ============================================================
// VALIDADOR DE CALIDAD — checklist MECÁNICO (regla 6)
// Estos 6 checks son los ÚNICOS que el software puede verificar
// con confianza razonable. Producen, cuando mucho, una CANDIDATURA
// a killer_ready — nunca una confirmación. La confirmación real
// depende de los 8 criterios cualitativos de PK_CRITERIOS_CUALITATIVOS,
// que siempre quedan marcados 'requiere_revision_humana: true'
// (salvo el único automatizable: explicación individual de las 4 opciones).
// ============================================================
function auditarPregunta(variante, conceptoNombre) {
  const q = variante.q || "";
  const o = variante.o || [];
  const correcto = variante.correcto || "";
  const incorrectos = variante.incorrectos || [];

  const checks = {};

  const conceptoLimpio = (conceptoNombre || "").split("(")[0].split("—")[0].trim().toLowerCase();
  checks.titulo_no_revela = conceptoLimpio.length > 6
    ? !q.toLowerCase().includes(conceptoLimpio)
    : true;

  const tieneSujetoEscenario = /\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{0,15}\s+(tiene|es|queda|compra|decide|solicita|firma|recibe|paga|cambia|sufre|fallece|pregunta|dice|le dice)\b/.test(q);
  checks.tiene_escenario = q.length >= 140 && tieneSujetoEscenario;

  checks.tiene_palabra_decisiva = !!detectarPalabraDecisiva(q);

  const opcionesPlausibles = o.length === 4 && o.every(op => (op || "").split(" ").length >= 3);
  checks.opciones_plausibles = opcionesPlausibles;

  checks.explicacion_completa = correcto.length >= 60 && incorrectos.length === 3
    && incorrectos.every(i => (i || "").length >= 20);

  checks.distractor_identificado = !!(variante.trampa && variante.trampa.length >= 20);

  const puntos = Object.values(checks).filter(Boolean).length;
  const total = Object.keys(checks).length; // 6

  // --- Categoría mecánica (candidatura, no verdad final) ---
  let category;
  if (puntos === total) {
    category = PK_CATEGORIAS.KILLER_READY; // CANDIDATA — ver criterios cualitativos abajo
  } else if (puntos >= 4) {
    category = PK_CATEGORIAS.INTERMEDIATE;
  } else if (checks.explicacion_completa && checks.opciones_plausibles) {
    category = PK_CATEGORIAS.REWRITE_REQUIRED;
  } else if (!checks.explicacion_completa) {
    category = PK_CATEGORIAS.BASIC_ONLY;
  } else {
    category = PK_CATEGORIAS.REWRITE_REQUIRED;
  }

  // human_review_status SIEMPRE arranca pendiente — el auditor
  // automático no tiene autoridad para aprobar nada (regla 2 y 6).
  const human_review_status = PK_HUMAN_REVIEW_STATUS.PENDING;
  const allowed_modes = calcularAllowedModes(category, human_review_status);
  const tipo_cognitivo = clasificarTipoCognitivo(variante);

  // --- Criterios cualitativos: estado de verificación ---
  const criterios_cualitativos = PK_CRITERIOS_CUALITATIVOS.map(c => {
    if (c.id === "explicacion_individual_4") {
      // Único automatizable: ¿hay 3 incorrectos con texto sustancial
      // además de la explicación de la correcta?
      const cumplido = checks.explicacion_completa;
      return { ...c, requiere_revision_humana: false, valor_automatico: cumplido };
    }
    return { ...c, requiere_revision_humana: true, valor_automatico: null };
  });

  return {
    category,                 // candidatura mecánica, NO confirmación
    tipo_cognitivo,            // regla 5
    human_review_status,       // regla 3 — siempre 'pending' desde el auditor
    allowed_modes,             // reglas 1, 2 y 4 aplicadas
    puede_entrar_a_examen: puedeEntrarAExamen(category, human_review_status), // siempre false hasta revisión humana
    checks,                    // los 6 checks mecánicos
    criterios_cualitativos,    // los 8 criterios reales — 7 pendientes de humano por diseño
    score: puntos + "/" + total
  };
}

if (typeof module !== 'undefined') {
  module.exports = {
    PK_CATEGORIAS, PK_MODOS, PK_HUMAN_REVIEW_STATUS, PK_TIPO_COGNITIVO,
    PK_CRITERIOS_CUALITATIVOS, PK_PALABRAS_DECISIVAS,
    crearPreguntaNormalizada, auditarPregunta, detectarPalabraDecisiva,
    inferirTipoPregunta, clasificarTipoCognitivo, calcularAllowedModes, puedeEntrarAExamen
  };
}
if (typeof window !== 'undefined') {
  window.PK_SCHEMA = {
    PK_CATEGORIAS, PK_MODOS, PK_HUMAN_REVIEW_STATUS, PK_TIPO_COGNITIVO,
    PK_CRITERIOS_CUALITATIVOS, PK_PALABRAS_DECISIVAS,
    crearPreguntaNormalizada, auditarPregunta, detectarPalabraDecisiva,
    inferirTipoPregunta, clasificarTipoCognitivo, calcularAllowedModes, puedeEntrarAExamen
  };
}
