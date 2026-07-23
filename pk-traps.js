// ============================================================
// PEARSON KILLER — pk-traps.js
// Sistema de Clasificación de Trampas Pearson VUE
// Versión 1.0
//
// Propósito: Clasificar cada pregunta según el tipo de trampa
// que usa, para que el sistema pueda:
//   1. Registrar QUÉ trampa confundió al estudiante
//   2. Enseñar a reconocer ese patrón de trampa
//   3. Generar más preguntas del tipo de trampa donde más falla
// ============================================================

const PK_TRAMPAS = {

  // ══════════════════════════════════════════════════
  // CATÁLOGO DE TIPOS DE TRAMPA
  // ══════════════════════════════════════════════════

  TIPOS: {

    "EXCEPTO": {
      codigo: "EXCEPTO",
      nombre: "Trampa EXCEPTO / A MENOS QUE",
      descripcion: "La pregunta pide la opción que NO pertenece. Todas las demás opciones son correctas.",
      señales: ["EXCEPTO", "A MENOS QUE", "con excepción de", "todo lo siguiente EXCEPTO", "todas las siguientes son correctas EXCEPTO"],
      estrategia: "Lee todas las opciones. Identifica cuál NO pertenece a la misma categoría que las demás.",
      ejemplo: "Todo lo siguiente es requerido para un contrato válido EXCEPTO:"
    },

    "CUAL_NO": {
      codigo: "CUAL_NO",
      nombre: "Trampa ¿Cuál NO? / ¿Cuál NO es correcto?",
      descripcion: "La pregunta pide identificar la afirmación FALSA entre varias verdaderas.",
      señales: ["¿Cuál NO es", "¿Cuál NO constituye", "¿Cuál NO está", "¿Cuál es INCORRECTO", "¿Cuál es FALSO", "¿Cuál afirmación es INCORRECTA"],
      estrategia: "Verifica cada opción como verdadera o falsa. La respuesta es la FALSA.",
      ejemplo: "¿Cuál de las siguientes afirmaciones sobre el período de gracia es INCORRECTA?"
    },

    "SINONIMOS": {
      codigo: "SINONIMOS",
      nombre: "Trampa de Sinónimos",
      descripcion: "El concepto se describe con palabras diferentes a las que el estudiante memorizó.",
      señales: ["El concepto aparece con vocabulario diferente", "Términos técnicos alternativos", "Descripciones en lugar de nombres"],
      estrategia: "Identifica el CONCEPTO detrás de las palabras, no la palabra en sí.",
      ejemplo: "El 'proceso de evaluación y selección de riesgos' (en lugar de 'suscripción')"
    },

    "NUMEROS_FECHAS": {
      codigo: "NUMEROS_FECHAS",
      nombre: "Trampa de Números y Fechas",
      descripcion: "La pregunta prueba un número o fecha específico con opciones similares que podrían confundir.",
      señales: ["¿Cuántos días", "¿Cuántos meses", "¿Cuántos años", "¿Cuánto tiempo", "¿A qué edad"],
      estrategia: "Memoriza los números clave: Free Look Vida=14, Anualidades=14. Gracia Vida=31, Salud Mensual=10. COBRA=18/36. Incontestabilidad=2 años. Antedatación=6 meses.",
      ejemplo: "¿Cuántos días tiene el período de examen gratuito para una póliza de vida en Florida?"
    },

    "PRIMERO": {
      codigo: "PRIMERO",
      nombre: "Trampa PRIMERO / MÁS APROPIADO",
      descripcion: "Pregunta sobre el orden correcto de acciones o cuál es el paso más apropiado.",
      señales: ["PRIMERO", "el PRIMER paso", "antes de", "¿qué debe hacer PRIMERO", "MÁS APROPIADO", "lo MÁS importante primero"],
      estrategia: "Piensa en el proceso correcto. El orden importa. Generalmente el primer paso es el más preventivo o regulatorio.",
      ejemplo: "Antes de recomendar una anualidad, ¿qué debe hacer PRIMERO el agente?"
    },

    "CASI_IDENTICAS": {
      codigo: "CASI_IDENTICAS",
      nombre: "Trampa de Respuestas Casi Idénticas",
      descripcion: "Dos o más opciones son muy similares con una pequeña diferencia que cambia completamente el significado.",
      señales: ["Opciones con una sola palabra diferente", "Opciones que invierten conceptos", "Diferencias sutiles en cantidad o tiempo"],
      estrategia: "Lee CADA PALABRA de cada opción. La diferencia está en los detalles. Busca el elemento que hace una opción más precisa.",
      ejemplo: "Vida→Anualidad vs Anualidad→Vida en el intercambio 1035 (una es legal, la otra no)"
    },

    "SIEMPRE_NUNCA": {
      codigo: "SIEMPRE_NUNCA",
      nombre: "Trampa de Absolutos (SIEMPRE / NUNCA / TODOS / NINGUNO)",
      descripcion: "Las palabras absolutas generalmente indican que la opción es INCORRECTA porque casi nada en seguros es absoluto.",
      señales: ["SIEMPRE", "NUNCA", "TODOS", "NINGUNO", "en TODOS los casos", "bajo NINGUNA circunstancia", "sin excepción"],
      estrategia: "Desconfía de los absolutos. Pregúntate: ¿existe ALGUNA excepción? Si la respuesta es sí, esa opción probablemente es incorrecta.",
      ejemplo: "'Las anualidades SIEMPRE son apropiadas para personas mayores' — INCORRECTO, hay que evaluar la idoneidad"
    },

    "INVERSIONES": {
      codigo: "INVERSIONES",
      nombre: "Trampa de Inversión de Conceptos",
      descripcion: "La opción correcta y una incorrecta tienen los conceptos intercambiados.",
      señales: ["Definiciones intercambiadas", "Roles invertidos", "Conceptos opuestos presentados al revés"],
      estrategia: "Verifica cada definición. Recuerda: Twisting=diferente compañía, Churning=misma compañía. Vinculante=incondicional, Condicional=requiere asegurabilidad.",
      ejemplo: "Confundir quién asume el riesgo en Defined Benefit vs Defined Contribution"
    },

    "EXCEPCION_LEGAL": {
      codigo: "EXCEPCION_LEGAL",
      nombre: "Trampa de Excepción Legal",
      descripcion: "La regla general tiene una excepción importante que cambia la respuesta.",
      señales: ["¿Cuál es la excepción", "¿En qué caso NO aplica", "¿Cuándo NO es válido"],
      estrategia: "Conoce las excepciones más importantes: Fraude=excepción a incontestabilidad. Emergencias=excepción a EPO. Gobierno/Iglesias=excepciones a ERISA.",
      ejemplo: "La incontestabilidad protege EXCEPTO en casos de fraude intencional"
    },

    "QUIEN_PAGA": {
      codigo: "QUIEN_PAGA",
      nombre: "Trampa de ¿Quién Paga / Quién es Beneficiario?",
      descripcion: "La pregunta prueba quién tiene cada rol en una situación específica.",
      señales: ["¿Quién paga la prima", "¿Quién es el beneficiario", "¿Quién asume el riesgo", "¿A quién pertenece"],
      estrategia: "En Key Person: la EMPRESA paga Y es beneficiaria. En Credit Life: el ACREEDOR es beneficiario. En COBRA: el EMPLEADO paga 102%.",
      ejemplo: "En el seguro de persona clave, ¿quién paga la prima y quién es el beneficiario?"
    },

    "PROCEDIMIENTO": {
      codigo: "PROCEDIMIENTO",
      nombre: "Trampa de Procedimiento / Proceso",
      descripcion: "La pregunta prueba el procedimiento correcto: pasos, plazos, notificaciones requeridas.",
      señales: ["¿Qué debe hacer", "¿Cuál es el procedimiento", "¿Cómo se maneja", "¿En qué orden"],
      estrategia: "Conoce los procedimientos clave: Reemplazo=notificar en 3 días hábiles. FCRA=notificar al solicitante. Idoneidad=analizar ANTES de recomendar.",
      ejemplo: "Al reemplazar una póliza, ¿cuál es el procedimiento correcto?"
    },

    "MAS_MENOS": {
      codigo: "MAS_MENOS",
      nombre: "Trampa de MÁS / MENOS / MAYOR / MENOR",
      descripcion: "La pregunta usa comparativos que requieren conocer cuál opción tiene más ventaja, mayor cobertura, menor costo, etc.",
      señales: ["MÁS apropiado", "MENOS probable", "MAYOR cobertura", "MENOR costo", "MEJOR opción", "PEOR consecuencia"],
      estrategia: "Compara cada opción en términos del atributo preguntado. No busques la 'correcta' — busca la 'más correcta'.",
      ejemplo: "¿Cuál plan ofrece la MAYOR flexibilidad para ver especialistas?"
    },

    "ESCENARIO": {
      codigo: "ESCENARIO",
      nombre: "Trampa de Escenario / Situación Específica",
      descripcion: "La pregunta presenta un caso concreto y el estudiante debe aplicar el concepto a esa situación específica.",
      señales: ["Pedro tiene...", "María, de 68 años...", "Un asegurado que...", "En el caso de..."],
      estrategia: "Identifica los detalles clave del escenario: edad, tipo de póliza, tiempo transcurrido, monto. Aplica la regla correcta a esos datos específicos.",
      ejemplo: "Rosa, de 68 años, devuelve su anualidad 25 días después de comprarla..."
    },

    "VIOLACION": {
      codigo: "VIOLACION",
      nombre: "Trampa de ¿Cuál es la Violación? / ¿Qué es Ilegal?",
      descripcion: "La pregunta pide identificar cuál opción constituye una violación legal o ética.",
      señales: ["¿Cuál constituye una violación", "¿Cuál sería ilegal", "¿Cuál viola", "¿Cuál no está permitido"],
      estrategia: "Conoce las prácticas ilegales: Twisting, Churning, Rebating, Tergiversación, Venta no idónea, Antedata excesiva.",
      ejemplo: "¿Cuál de las siguientes prácticas constituye una violación de las leyes de Florida?"
    }
  },

  // ══════════════════════════════════════════════════
  // REGISTRO DE ERRORES DEL ESTUDIANTE
  // Formato para almacenar en localStorage
  // ══════════════════════════════════════════════════

  FORMATO_ERROR: {
    timestamp: null,           // fecha/hora del error
    sesion_id: null,           // ID de la sesión de estudio
    concepto_id: null,         // ID del concepto (ej: "susc_001")
    area: null,                // área temática
    nivel: null,               // nivel de dificultad (1-5)
    tipo_trampa: null,         // código del tipo de trampa
    opcion_elegida: null,      // índice de la opción elegida (0-3)
    opcion_correcta: null,     // índice de la opción correcta (0-3)
    texto_opcion_elegida: null,// texto de lo que eligió
    texto_opcion_correcta: null,// texto de la correcta
    pregunta: null             // texto de la pregunta (primeros 100 chars)
  },

  // ══════════════════════════════════════════════════
  // MENSAJES DE RETROALIMENTACIÓN POR TIPO DE TRAMPA
  // Se muestran DESPUÉS de responder incorrectamente
  // ══════════════════════════════════════════════════

  MENSAJES_FEEDBACK: {
    "EXCEPTO": "⚠️ TRAMPA EXCEPTO: Esta pregunta pedía la opción que NO pertenece. Cuando veas 'EXCEPTO' o 'A MENOS QUE', recuerda que debes buscar la excepción, no la regla.",
    "CUAL_NO": "⚠️ TRAMPA ¿CUÁL NO?: Esta pregunta pedía la afirmación FALSA. Cuando veas '¿Cuál NO?', verifica cada opción como verdadera o falsa — la respuesta es la única falsa.",
    "SINONIMOS": "⚠️ TRAMPA DE SINÓNIMOS: El concepto apareció con palabras diferentes. Pearson VUE frecuentemente usa vocabulario distinto para el mismo concepto. Aprende el concepto, no la frase exacta.",
    "NUMEROS_FECHAS": "⚠️ TRAMPA DE NÚMEROS: Esta pregunta probó un número o fecha específico. Memoriza los números clave del examen 2-15 — son puntos fáciles si los tienes claros.",
    "PRIMERO": "⚠️ TRAMPA PRIMERO: Esta pregunta preguntó sobre el orden correcto. Piensa en el proceso completo y cuál paso DEBE ocurrir antes que los demás.",
    "CASI_IDENTICAS": "⚠️ TRAMPA DE RESPUESTAS SIMILARES: Dos opciones eran muy parecidas. Lee CADA PALABRA — la diferencia está en los detalles. Una sola palabra puede cambiar completamente el significado.",
    "SIEMPRE_NUNCA": "⚠️ TRAMPA DE ABSOLUTOS: Las palabras 'SIEMPRE' y 'NUNCA' son señales de alerta. En seguros casi nada es absoluto — siempre hay excepciones. Desconfía de los absolutos.",
    "INVERSIONES": "⚠️ TRAMPA DE INVERSIÓN: Los conceptos estaban intercambiados. Verifica cada definición cuidadosamente — Pearson VUE frecuentemente invierte conceptos relacionados.",
    "EXCEPCION_LEGAL": "⚠️ TRAMPA DE EXCEPCIÓN: Esta pregunta probó una excepción a la regla general. Conoce las excepciones más importantes: fraude intencional, planes gubernamentales, surplus lines, etc.",
    "QUIEN_PAGA": "⚠️ TRAMPA DE ROLES: Esta pregunta probó quién tiene qué rol. En Key Person, en COBRA, en Buy-Sell — los roles de cada parte son específicos y frecuentemente se intercambian en el examen.",
    "PROCEDIMIENTO": "⚠️ TRAMPA DE PROCEDIMIENTO: Esta pregunta probó el proceso correcto. Conoce los plazos y pasos obligatorios: 3 días hábiles de reemplazo, 60 días para elegir COBRA, analizar idoneidad ANTES de recomendar.",
    "MAS_MENOS": "⚠️ TRAMPA COMPARATIVA: Esta pregunta usó un comparativo (MÁS/MENOS/MEJOR). No busques la opción 'correcta' — busca la 'más correcta' según el atributo que compara.",
    "ESCENARIO": "⚠️ TRAMPA DE ESCENARIO: Esta pregunta presentó un caso específico. Identifica los datos clave (edad, tiempo, tipo de producto) y aplica la regla correcta a esos datos.",
    "VIOLACION": "⚠️ TRAMPA DE VIOLACIÓN: Esta pregunta pedía identificar una práctica ilegal. Conoce las diferencias entre Twisting (diferente compañía), Churning (misma compañía), Rebating (descuento ilegal) y venta no idónea."
  },

  // ══════════════════════════════════════════════════
  // ESTADÍSTICAS DE ERRORES POR TRAMPA
  // Función para calcular qué trampas confunden más
  // ══════════════════════════════════════════════════

  calcularDebilidades: function(errores) {
    const conteo = {};
    errores.forEach(e => {
      if (e.tipo_trampa) {
        if (!conteo[e.tipo_trampa]) conteo[e.tipo_trampa] = { total: 0, nombre: '' };
        conteo[e.tipo_trampa].total++;
        conteo[e.tipo_trampa].nombre = PK_TRAMPAS.TIPOS[e.tipo_trampa]?.nombre || e.tipo_trampa;
      }
    });
    return Object.entries(conteo)
      .sort((a, b) => b[1].total - a[1].total)
      .map(([codigo, data]) => ({ codigo, ...data }));
  },

  // ══════════════════════════════════════════════════
  // TIPS RÁPIDOS PARA EL EXAMEN
  // Se muestran al inicio de cada sesión
  // ══════════════════════════════════════════════════

  TIPS_RAPIDOS: [
    "💡 Cuando veas EXCEPTO → busca la opción que NO pertenece",
    "💡 Cuando veas SIEMPRE o NUNCA → desconfía, casi siempre hay una excepción",
    "💡 Free Look VIDA=14 días. ANUALIDADES=14 días",
    "💡 Período de gracia VIDA=31 días. SALUD mensual=10 días. SALUD semanal=7 días",
    "💡 Incontestabilidad=2 años. Única excepción: FRAUDE INTENCIONAL",
    "💡 Twisting=diferente compañía. Churning=misma compañía",
    "💡 Recibo CONDICIONAL=cubre si hubiera calificado. VINCULANTE=cubre sin condición",
    "💡 1035: Anualidad→Vida NO está permitido",
    "💡 COBRA: 20+ empleados. Estándar=18 meses. Divorcio/muerte=36 meses",
    "💡 ERISA NO aplica a planes del gobierno NI a planes de iglesias",
    "💡 En Key Person: la EMPRESA paga la prima Y es la beneficiaria",
    "💡 Roth IRA: SIN RMDs de por vida. Traditional IRA: RMDs desde los 73",
    "💡 HMO=requiere referido. PPO=sin referido, dentro y fuera de red. EPO=sin referido, solo dentro de red",
    "💡 Idoneidad SIEMPRE se evalúa ANTES de hacer la recomendación",
    "💡 Antedatación máximo=6 MESES. Más = violación regulatoria",
    "💡 Las ambigüedades en contratos de adhesión SIEMPRE favorecen al asegurado",
    "💡 SEP-IRA: solo el EMPLEADOR contribuye. SIMPLE IRA: empleado Y empleador contribuyen",
    "💡 HSA: triple exención fiscal. Requiere HDHP. Los fondos se acumulan.",
    "💡 FSA: 'úsala o piérdela'. Los fondos NO se acumulan de año en año.",
    "💡 Medicare Parte A=hospitalización (sin prima). Parte B=médico (con prima). Parte D=medicamentos."
  ]

}; // fin PK_TRAMPAS

// ============================================================
// Exportar para uso del motor principal
// ============================================================
if (typeof module !== 'undefined') module.exports = { PK_TRAMPAS };

if (typeof window !== 'undefined') window.PK_TRAMPAS = PK_TRAMPAS;
