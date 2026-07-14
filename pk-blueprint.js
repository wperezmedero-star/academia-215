// ============================================================
// PEARSON KILLER — pk-blueprint.js
// FASE 1: Infraestructura — Matriz Oficial de Cobertura
//
// Este archivo NO contiene preguntas. Es el mapa de control:
// define las 11 áreas oficiales del examen 2-15 Florida, sus
// subtemas prioritarios, y el peso relativo que cada área tiene
// en el examen real y en las prioridades de estudio de William
// (basado en sus 3 intentos: 56, 65, 68 — faltaron 3 puntos).
//
// Uso futuro: el motor adaptativo (Fase 3) consulta este archivo
// para decidir qué área/subtema reforzar. El auditor de calidad
// (Fase 1.5) lo usa para verificar cobertura real vs. cobertura
// necesaria. NADA en este archivo debe romper el banco actual.
// ============================================================

const PK_BLUEPRINT = {
  version: "1.0",
  fecha_creacion: "2026-07-14",

  // Las 11 áreas oficiales tal como las pidió William.
  // 'peso_examen_pct' es aproximado, basado en la distribución
  // real de las hojas de resultado de Pearson VUE (secciones I-IX
  // de vida/salud + las dos secciones de estatutos de Florida).
  // 'prioridad_william' 1 = máxima urgencia según sus 3 intentos.
  areas: [
    {
      id: "vida_tipos",
      numero: 1,
      nombre: "Tipos de pólizas de vida",
      peso_examen_pct: 10,
      prioridad_william: 3,
      subtemas: ["term_life", "whole_life", "universal_life", "variable_life",
        "endowment", "MEC", "polizas_uso_especial", "polizas_no_tradicionales"]
    },
    {
      id: "vida_provisiones",
      numero: 2,
      nombre: "Provisiones, riders, opciones y exclusiones de vida",
      peso_examen_pct: 10,
      prioridad_william: 2,
      subtemas: ["periodo_gracia", "restablecimiento", "incontestabilidad",
        "declaracion_incorrecta_edad", "prestamos_poliza", "prestamo_automatico_prima",
        "cesion_absoluta", "cesion_garantia", "beneficiarios", "per_stirpes_per_capita",
        "desastre_comun", "clausula_antidilapidacion", "opciones_liquidacion",
        "opciones_dividendos", "opciones_no_caducidad", "exencion_primas",
        "beneficio_pagador", "asegurabilidad_garantizada", "muerte_accidental",
        "beneficio_acelerado", "exclusiones_poliza"]
    },
    {
      id: "suscripcion_entrega",
      numero: 3,
      nombre: "Solicitud, suscripción y entrega de la póliza",
      peso_examen_pct: 8,
      prioridad_william: 4,
      subtemas: ["solicitud_incompleta", "representaciones_garantias", "ocultamiento",
        "informes_medicos", "MIB", "FCRA", "recibo_condicional", "recibo_vinculante",
        "prima_inicial", "clasificacion_riesgo", "seleccion_adversa", "entrega_constructiva",
        "cambio_salud_antes_entrega", "fecha_efectiva", "responsabilidad_agente_campo"]
    },
    {
      id: "retiro_otros",
      numero: 4,
      nombre: "Retiro y otros conceptos de seguros",
      peso_examen_pct: 8,
      prioridad_william: 5,
      subtemas: ["ira_tradicional", "roth_ira", "401k", "403b", "457", "sep_simple",
        "keogh", "erisa_vesting", "planes_calificados_no_calificados", "anualidades",
        "1035_exchange", "seguro_social_oasdi"]
    },
    {
      id: "salud_tipos",
      numero: 5,
      nombre: "Tipos de pólizas de salud",
      peso_examen_pct: 16,
      prioridad_william: 1,
      subtemas: ["hospitalario_basico", "medico_basico", "quirurgico",
        "gastos_medicos_mayores", "HMO", "PPO", "EPO", "POS", "HDHP", "HSA", "FSA",
        "HRA", "indemnizacion_hospitalaria", "cancer_enfermedad_critica", "dental",
        "vision", "corto_plazo", "individual_vs_grupo", "medigap", "medicare_advantage",
        "cuidado_largo_plazo", "seguro_solo_accidente", "disposiciones_renovacion",
        "contrato_valorado_reembolso", "coaseguro_deducibles_oop"]
    },
    {
      id: "salud_provisiones",
      numero: 6,
      nombre: "Provisiones, cláusulas y riders de salud",
      peso_examen_pct: 15,
      prioridad_william: 1,
      subtemas: ["periodo_gracia_salud", "restablecimiento_salud", "aviso_reclamacion",
        "formularios_reclamacion", "prueba_perdida", "pago_reclamaciones",
        "acciones_legales", "cambio_ocupacion", "cambio_beneficiario_salud",
        "free_look_salud", "disposiciones_mandatorias_naic", "disposiciones_opcionales_naic",
        "mini_cobra_florida", "cobra_federal", "conversion_dependientes",
        "periodo_prueba_eliminacion", "discapacidad_recurrente", "anexos_discapacidad"]
    },
    {
      id: "seguro_social",
      numero: 7,
      nombre: "Seguro Social",
      peso_examen_pct: 6,
      prioridad_william: 5,
      subtemas: ["oasdi", "pia_aime", "completamente_actualmente_asegurado",
        "beneficios_conyuge_hijo", "beneficios_muerte", "fiscalizacion_beneficios"]
    },
    {
      id: "otros_conceptos",
      numero: 8,
      nombre: "Otros conceptos de seguros",
      peso_examen_pct: 5,
      prioridad_william: 5,
      subtemas: ["valor_vida_humana", "puesta_comun_riesgos", "ley_grandes_numeros",
        "agravantes_riesgo", "tratamiento_riesgo", "interes_asegurable"]
    },
    {
      id: "suscripcion_campo",
      numero: 9,
      nombre: "Procedimientos de suscripción en campo",
      peso_examen_pct: 8,
      prioridad_william: 4,
      subtemas: ["reporte_agente", "cuestionarios_especiales", "reportes_inspeccion",
        "reporte_credito", "clasificacion_riesgo_preferido_estandar_subestandar",
        "metodos_valoracion_subestandar"]
    },
    {
      id: "florida_general",
      numero: 10,
      nombre: "Estatutos, reglas y regulaciones de Florida comunes a todas las líneas",
      peso_examen_pct: 8,
      prioridad_william: 4,
      subtemas: ["licencias", "nombramientos", "educacion_continua", "publicidad",
        "practicas_prohibidas", "reemplazo_twisting", "sanciones", "codigo_etica"]
    },
    {
      id: "florida_vida_anualidades",
      numero: 11,
      nombre: "Estatutos y regulaciones de Florida sobre vida, anualidades y productos variables",
      peso_examen_pct: 6,
      prioridad_william: 3,
      subtemas: ["idoneidad_suitability", "divulgaciones", "reglas_anualidades",
        "productos_variables", "cuenta_general_vs_fondos_separados", "1035_florida",
        "negocio_controlado", "asociacion_garantia", "deber_fiduciario"]
    }
  ],

  // Orden de prioridad para el motor adaptativo (Fase 3), derivado
  // directamente de los resultados reales de William. Área 5 y 6
  // (salud) llevan el peso más alto de reforzamiento porque ahí
  // perdió más puntos en los 3 intentos.
  orden_prioridad_estudio: [
    "salud_tipos", "salud_provisiones", "vida_provisiones",
    "florida_vida_anualidades", "suscripcion_entrega", "suscripcion_campo",
    "florida_general", "vida_tipos", "retiro_otros", "seguro_social", "otros_conceptos"
  ]
};

if (typeof module !== 'undefined') module.exports = { PK_BLUEPRINT };
if (typeof window !== 'undefined') window.PK_BLUEPRINT = PK_BLUEPRINT;
