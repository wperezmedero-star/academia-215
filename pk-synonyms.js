// ============================================================
// PEARSON KILLER — pk-synonyms.js
// Diccionario de Sinónimos por Concepto
// Versión 1.0
//
// Propósito: Pearson VUE usa vocabulario diferente en cada
// versión del examen para el mismo concepto. Este archivo
// enseña al estudiante a reconocer el concepto sin importar
// cómo lo redacten.
//
// Estructura:
//   SINONIMOS[clave] = {
//     termino_oficial: "...",
//     variantes: ["...", "..."],
//     en_ingles: ["...", "..."],  // términos en inglés que aparecen en el examen
//     contexto: "..."             // cómo aparece en el examen
//   }
// ============================================================

const PK_SINONIMOS = {

  // ══════════════════════════════════════════════════
  // SUSCRIPCIÓN Y UNDERWRITING
  // ══════════════════════════════════════════════════

  "recibo_condicional": {
    termino_oficial: "Recibo Condicional",
    variantes: [
      "recibo de solicitud",
      "recibo provisional",
      "recibo con condiciones",
      "cobertura condicional temporal",
      "comprobante de pago condicional"
    ],
    en_ingles: ["Conditional Receipt", "Insurability Receipt"],
    contexto: "El agente lo entrega al cobrar la primera prima con la solicitud"
  },

  "recibo_vinculante": {
    termino_oficial: "Recibo Vinculante",
    variantes: [
      "recibo obligatorio",
      "recibo incondicional",
      "recibo de cobertura inmediata",
      "recibo de cobertura sin condiciones"
    ],
    en_ingles: ["Binding Receipt", "Unconditional Receipt"],
    contexto: "Otorga cobertura inmediata sin importar si el solicitante califica"
  },

  "suscripcion": {
    termino_oficial: "Suscripción",
    variantes: [
      "underwriting",
      "evaluación del riesgo",
      "proceso de selección de riesgos",
      "clasificación de riesgos",
      "análisis de asegurabilidad",
      "proceso de aprobación",
      "evaluación de asegurabilidad"
    ],
    en_ingles: ["Underwriting", "Risk Selection", "Risk Assessment"],
    contexto: "Proceso por el cual la aseguradora evalúa si acepta y a qué precio"
  },

  "declaracion_medico": {
    termino_oficial: "Declaración del Médico Tratante",
    variantes: [
      "APS",
      "informe médico del médico personal",
      "reporte del médico de cabecera",
      "historial médico del médico tratante",
      "expediente del médico del solicitante"
    ],
    en_ingles: ["APS", "Attending Physician Statement"],
    contexto: "Documento del médico PERSONAL del solicitante con su historial"
  },

  "mib": {
    termino_oficial: "Buró de Información Médica (MIB)",
    variantes: [
      "MIB",
      "buró médico",
      "base de datos de información de seguros",
      "registro de solicitudes anteriores",
      "historial de aplicaciones de seguro"
    ],
    en_ingles: ["MIB", "Medical Information Bureau"],
    contexto: "Contiene información codificada de solicitudes anteriores — NO diagnósticos"
  },

  "reporte_inspeccion": {
    termino_oficial: "Reporte de Inspección",
    variantes: [
      "informe de investigación del consumidor",
      "reporte de carácter y reputación",
      "investigación de antecedentes",
      "reporte de situación financiera",
      "informe investigativo del consumidor"
    ],
    en_ingles: ["Inspection Report", "Investigative Consumer Report"],
    contexto: "Cubre carácter, reputación, estilo de vida y situación financiera. Regulado por FCRA."
  },

  "antedatacion": {
    termino_oficial: "Antedatación",
    variantes: [
      "antedata",
      "retroacción de fecha",
      "backdating",
      "fecha retroactiva de emisión",
      "emisión con fecha anterior"
    ],
    en_ingles: ["Backdating"],
    contexto: "Usar una fecha anterior (hasta 6 meses) para obtener prima de edad más joven"
  },

  "reemplazo": {
    termino_oficial: "Reemplazo de Póliza",
    variantes: [
      "sustitución de póliza",
      "cambio de póliza",
      "reemplazar cobertura",
      "cancelar y contratar nueva póliza",
      "intercambio de pólizas"
    ],
    en_ingles: ["Replacement", "Policy Replacement"],
    contexto: "Terminar o cambiar una póliza existente para comprar una nueva"
  },

  // ══════════════════════════════════════════════════
  // PRÁCTICAS ILEGALES
  // ══════════════════════════════════════════════════

  "twisting": {
    termino_oficial: "Twisting (Torcimiento)",
    variantes: [
      "twisting",
      "inducción fraudulenta al reemplazo",
      "reemplazo con información falsa",
      "comparación engañosa entre pólizas",
      "persuasión con datos falsos para cambiar de compañía"
    ],
    en_ingles: ["Twisting"],
    contexto: "Usar información FALSA para inducir a cancelar con una compañía y comprar con OTRA"
  },

  "churning": {
    termino_oficial: "Churning",
    variantes: [
      "churning",
      "cambios innecesarios dentro de la misma compañía",
      "modificaciones excesivas para generar comisiones",
      "rotación innecesaria de pólizas"
    ],
    en_ingles: ["Churning"],
    contexto: "Cambios innecesarios DENTRO DE LA MISMA compañía para generar comisiones"
  },

  "rebating": {
    termino_oficial: "Rebating (Descuento Ilegal)",
    variantes: [
      "rebating",
      "devolución de comisiones",
      "rebaja ilegal",
      "descuento no autorizado",
      "incentivo financiero para comprar póliza",
      "regalo para inducir la compra"
    ],
    en_ingles: ["Rebating"],
    contexto: "Devolver parte de la comisión o dar un regalo para inducir la compra de una póliza"
  },

  "tergiversacion": {
    termino_oficial: "Tergiversación",
    variantes: [
      "misrepresentation",
      "declaración falsa",
      "información incorrecta",
      "declaración material falsa",
      "omisión de información relevante"
    ],
    en_ingles: ["Misrepresentation"],
    contexto: "Hacer declaraciones falsas sobre características de una póliza"
  },

  // ══════════════════════════════════════════════════
  // PROVISIONES DE PÓLIZAS
  // ══════════════════════════════════════════════════

  "periodo_gracia": {
    termino_oficial: "Período de Gracia",
    variantes: [
      "período adicional de pago",
      "plazo de tolerancia",
      "período de extensión de pago",
      "tiempo adicional para pagar la prima"
    ],
    en_ingles: ["Grace Period"],
    contexto: "VIDA = 31 días. SALUD semanal = 7 días. SALUD mensual = 10 días. Otros = 31 días."
  },

  "incontestabilidad": {
    termino_oficial: "Cláusula de Incontestabilidad",
    variantes: [
      "período contestable",
      "cláusula de irrefutabilidad",
      "período de impugnación",
      "cláusula de no disputa",
      "límite para impugnar la póliza"
    ],
    en_ingles: ["Incontestability Clause", "Contestability Period"],
    contexto: "Después de 2 años, la aseguradora NO puede impugnar la póliza. Excepción: fraude intencional."
  },

  "clausula_suicidio": {
    termino_oficial: "Cláusula de Suicidio",
    variantes: [
      "exclusión de suicidio",
      "cláusula de exclusión por muerte intencional",
      "período de exclusión por suicidio"
    ],
    en_ingles: ["Suicide Clause"],
    contexto: "Primeros 1-2 años: devuelve solo las primas. Después: paga el beneficio completo."
  },

  "free_look": {
    termino_oficial: "Período de Examen Gratuito",
    variantes: [
      "período de revisión",
      "período de devolución",
      "período de examen",
      "período para devolver la póliza",
      "período de reflexión"
    ],
    en_ingles: ["Free Look Period", "Right to Return"],
    contexto: "VIDA = 10 días. ANUALIDADES < 65 años = 21 días. ANUALIDADES 65+ = 30 días."
  },

  "nonforfeiture": {
    termino_oficial: "Opciones de No Caducidad",
    variantes: [
      "opciones de no pérdida",
      "opciones de rescate",
      "beneficios de no caducidad",
      "opciones al dejar de pagar primas"
    ],
    en_ingles: ["Nonforfeiture Options", "Nonforfeiture Benefits"],
    contexto: "Opciones cuando el asegurado deja de pagar: efectivo, término extendido, pagado reducido"
  },

  "termino_extendido": {
    termino_oficial: "Seguro de Término Extendido",
    variantes: [
      "término extendido",
      "cobertura extendida por término",
      "mismo monto por menos tiempo"
    ],
    en_ingles: ["Extended Term Insurance"],
    contexto: "Usa el cash value para comprar MISMO MONTO nominal en seguro de término por el tiempo que alcance"
  },

  "pagado_reducido": {
    termino_oficial: "Seguro Pagado Reducido",
    variantes: [
      "póliza pagada reducida",
      "cobertura permanente reducida",
      "vida entera con monto menor",
      "menor monto de por vida"
    ],
    en_ingles: ["Reduced Paid-Up Insurance"],
    contexto: "Usa el cash value para comprar una VIDA ENTERA PAGADA por un monto MENOR. Cobertura permanente."
  },

  "waiver_premium": {
    termino_oficial: "Exención de Prima por Discapacidad",
    variantes: [
      "waiver de prima",
      "renuncia de prima",
      "exoneración de prima",
      "cancelación de prima por incapacidad",
      "dispensa de pago de prima"
    ],
    en_ingles: ["Waiver of Premium Rider"],
    contexto: "Si el asegurado queda totalmente discapacitado, la aseguradora paga las primas. Período de eliminación típico: 6 meses."
  },

  "doble_indemnidad": {
    termino_oficial: "Beneficio por Muerte Accidental",
    variantes: [
      "doble indemnidad",
      "beneficio adicional por accidente",
      "rider de muerte accidental",
      "beneficio doble por accidente"
    ],
    en_ingles: ["Accidental Death Benefit (ADB)", "Double Indemnity"],
    contexto: "Paga el DOBLE del beneficio si la muerte es por accidente. Por eso también se llama 'doble indemnidad'."
  },

  "asegurabilidad_garantizada": {
    termino_oficial: "Anexo de Asegurabilidad Garantizada",
    variantes: [
      "rider de asegurabilidad garantizada",
      "opción de compra garantizada",
      "derecho de compra adicional sin evidencia médica"
    ],
    en_ingles: ["Guaranteed Insurability Rider (GIR)"],
    contexto: "Permite comprar cobertura adicional en fechas específicas SIN evidencia de asegurabilidad"
  },

  // ══════════════════════════════════════════════════
  // TIPOS DE SEGUROS DE VIDA
  // ══════════════════════════════════════════════════

  "termino": {
    termino_oficial: "Seguro de Vida a Término",
    variantes: [
      "seguro temporal",
      "cobertura a plazo",
      "seguro de plazo fijo",
      "vida a término"
    ],
    en_ingles: ["Term Life Insurance", "Term Life"],
    contexto: "Cobertura temporal. NO acumula cash value. Prima más baja. Si expira sin reclamación, no hay valor."
  },

  "vida_entera": {
    termino_oficial: "Seguro de Vida Entera",
    variantes: [
      "whole life",
      "seguro de vida permanente",
      "seguro de vida ordinario",
      "póliza de vida completa"
    ],
    en_ingles: ["Whole Life Insurance", "Ordinary Life", "Straight Life"],
    contexto: "Cobertura permanente. Prima fija. Acumula cash value garantizado."
  },

  "vida_universal": {
    termino_oficial: "Vida Universal",
    variantes: [
      "universal life",
      "seguro de vida flexible",
      "vida permanente con prima flexible"
    ],
    en_ingles: ["Universal Life (UL)"],
    contexto: "Cobertura permanente. Prima FLEXIBLE. Cash value gana interés según tasa declarada."
  },

  "vida_variable": {
    termino_oficial: "Vida Variable",
    variantes: [
      "variable life",
      "seguro de vida con inversión variable",
      "vida con subcuentas"
    ],
    en_ingles: ["Variable Life Insurance"],
    contexto: "El cash value está en subcuentas de inversión. El DUEÑO asume el riesgo. Requiere licencia de valores."
  },

  "cash_value": {
    termino_oficial: "Valor en Efectivo",
    variantes: [
      "cash value",
      "valor de rescate",
      "valor acumulado",
      "reserva de la póliza",
      "valor de capitalización"
    ],
    en_ingles: ["Cash Value", "Cash Surrender Value"],
    contexto: "El componente de ahorro/inversión en pólizas permanentes. NO existe en seguros de término."
  },

  // ══════════════════════════════════════════════════
  // ANUALIDADES
  // ══════════════════════════════════════════════════

  "anualidad": {
    termino_oficial: "Anualidad",
    variantes: [
      "contrato de anualidad",
      "renta vitalicia",
      "seguro de retiro",
      "contrato de acumulación y distribución"
    ],
    en_ingles: ["Annuity"],
    contexto: "Protege contra el riesgo de VIVIR DEMASIADO TIEMPO (longevity risk). El seguro de vida protege contra morir pronto."
  },

  "anualidad_fija": {
    termino_oficial: "Anualidad Fija",
    variantes: [
      "renta fija",
      "anualidad de tasa garantizada",
      "anualidad con tasa asegurada"
    ],
    en_ingles: ["Fixed Annuity"],
    contexto: "La aseguradora GARANTIZA la tasa de interés y asume el riesgo de inversión."
  },

  "anualidad_variable": {
    termino_oficial: "Anualidad Variable",
    variantes: [
      "renta variable",
      "anualidad con subcuentas",
      "anualidad de inversión variable"
    ],
    en_ingles: ["Variable Annuity"],
    contexto: "El DUEÑO asume el riesgo de inversión. Requiere licencia de valores además de licencia de seguros."
  },

  "anualidad_indexada": {
    termino_oficial: "Anualidad Indexada de Capital Fijo",
    variantes: [
      "equity indexed annuity",
      "anualidad de índice fijo",
      "FIA",
      "anualidad vinculada al índice"
    ],
    en_ingles: ["Fixed Indexed Annuity (FIA)", "Equity Indexed Annuity (EIA)"],
    contexto: "El interés se vincula a un índice (ej: S&P 500) pero con piso de 0% — nunca pierdes capital."
  },

  "fase_acumulacion": {
    termino_oficial: "Fase de Acumulación",
    variantes: [
      "período de acumulación",
      "etapa de crecimiento",
      "fase de ahorro",
      "período de diferimiento"
    ],
    en_ingles: ["Accumulation Phase", "Pay-in Phase"],
    contexto: "Cuando el propietario deposita dinero y la anualidad crece con impuestos diferidos."
  },

  "fase_distribucion": {
    termino_oficial: "Fase de Distribución (Anualización)",
    variantes: [
      "período de pagos",
      "fase de ingresos",
      "etapa de retiro",
      "período de anualización"
    ],
    en_ingles: ["Distribution Phase", "Annuitization Phase", "Pay-out Phase"],
    contexto: "Cuando la aseguradora comienza a pagar al anuitante. Puede ser irrevocable."
  },

  "intercambio_1035": {
    termino_oficial: "Intercambio 1035",
    variantes: [
      "canje 1035",
      "transferencia libre de impuestos",
      "intercambio sin evento gravable",
      "Sección 1035"
    ],
    en_ingles: ["1035 Exchange", "Section 1035 Exchange"],
    contexto: "Permite transferir valor entre productos elegibles sin crear evento gravable. Anualidad→Vida NO permitido."
  },

  // ══════════════════════════════════════════════════
  // SALUD Y PLANES ADMINISTRADOS
  // ══════════════════════════════════════════════════

  "hmo": {
    termino_oficial: "Organización para el Mantenimiento de la Salud (HMO)",
    variantes: [
      "HMO",
      "plan de salud cerrado",
      "plan con médico de cabecera",
      "plan con portero"
    ],
    en_ingles: ["HMO", "Health Maintenance Organization"],
    contexto: "Requiere PCP como portero. Solo cubre dentro de la red. NO cubre fuera de red (excepto emergencias)."
  },

  "ppo": {
    termino_oficial: "Organización de Proveedores Preferidos (PPO)",
    variantes: [
      "PPO",
      "plan de proveedores preferidos",
      "plan abierto con red preferida"
    ],
    en_ingles: ["PPO", "Preferred Provider Organization"],
    contexto: "SIN referido requerido. Cubre dentro Y fuera de la red (fuera = mayor costo). Mayor flexibilidad."
  },

  "pos": {
    termino_oficial: "Plan de Punto de Servicio (POS)",
    variantes: [
      "POS",
      "plan de punto de atención",
      "plan híbrido HMO-PPO"
    ],
    en_ingles: ["POS", "Point of Service Plan"],
    contexto: "Híbrido: requiere PCP (como HMO) pero permite salir de la red (como PPO) con mayor costo."
  },

  "epo": {
    termino_oficial: "Organización de Proveedor Exclusivo (EPO)",
    variantes: [
      "EPO",
      "plan de red exclusiva",
      "plan de proveedor exclusivo"
    ],
    en_ingles: ["EPO", "Exclusive Provider Organization"],
    contexto: "SIN referido (como PPO). NO cubre fuera de la red (como HMO). Solo emergencias fuera de red."
  },

  "deducible": {
    termino_oficial: "Deducible",
    variantes: [
      "deducible anual",
      "monto de franquicia",
      "cantidad a cargo del asegurado antes de que el seguro pague"
    ],
    en_ingles: ["Deductible"],
    contexto: "Monto que el asegurado paga PRIMERO antes de que la aseguradora comience a pagar."
  },

  "coaseguro": {
    termino_oficial: "Coseguro",
    variantes: [
      "coaseguro",
      "porcentaje compartido",
      "pago compartido"
    ],
    en_ingles: ["Coinsurance", "Co-insurance"],
    contexto: "Porcentaje que el asegurado paga DESPUÉS del deducible. Ej: 80/20 = aseguradora paga 80%, asegurado 20%."
  },

  "copago": {
    termino_oficial: "Copago",
    variantes: [
      "copago fijo",
      "cargo fijo por visita",
      "pago por servicio"
    ],
    en_ingles: ["Copay", "Co-payment"],
    contexto: "Cantidad fija que el asegurado paga por cada servicio (ej: $30 por visita al médico)."
  },

  // ══════════════════════════════════════════════════
  // MEDICARE Y MEDICAID
  // ══════════════════════════════════════════════════

  "medicare": {
    termino_oficial: "Medicare",
    variantes: [
      "Medicare",
      "seguro médico federal para personas mayores",
      "programa federal de salud para 65+"
    ],
    en_ingles: ["Medicare"],
    contexto: "Programa FEDERAL para personas de 65+ o con ciertas discapacidades. 4 partes: A, B, C, D."
  },

  "medicare_parte_a": {
    termino_oficial: "Medicare Parte A",
    variantes: [
      "Parte A de Medicare",
      "cobertura hospitalaria de Medicare",
      "seguro hospitalario"
    ],
    en_ingles: ["Medicare Part A", "Hospital Insurance"],
    contexto: "Cubre hospitalización. Generalmente SIN prima mensual si contribuyó suficiente a Medicare durante su vida laboral."
  },

  "medicare_parte_b": {
    termino_oficial: "Medicare Parte B",
    variantes: [
      "Parte B de Medicare",
      "cobertura médica de Medicare",
      "seguro médico de Medicare"
    ],
    en_ingles: ["Medicare Part B", "Medical Insurance"],
    contexto: "Cubre servicios médicos (médico, exámenes). Requiere PRIMA MENSUAL voluntaria (~$174+/mes)."
  },

  "medicare_parte_c": {
    termino_oficial: "Medicare Advantage (Parte C)",
    variantes: [
      "Parte C de Medicare",
      "Medicare Advantage",
      "plan Medicare privado",
      "MA Plan"
    ],
    en_ingles: ["Medicare Part C", "Medicare Advantage", "MA Plan"],
    contexto: "Plan privado que reemplaza A+B y generalmente incluye D. Puede tener copagos diferentes."
  },

  "medicare_parte_d": {
    termino_oficial: "Medicare Parte D",
    variantes: [
      "Parte D de Medicare",
      "cobertura de medicamentos de Medicare",
      "plan de medicamentos de Medicare"
    ],
    en_ingles: ["Medicare Part D", "Prescription Drug Coverage"],
    contexto: "Cubre medicamentos de prescripción. Es OPCIONAL y tiene prima mensual separada."
  },

  "medicaid": {
    termino_oficial: "Medicaid",
    variantes: [
      "Medicaid",
      "asistencia médica para personas de bajos ingresos",
      "programa estatal-federal de salud para indigentes"
    ],
    en_ingles: ["Medicaid"],
    contexto: "Programa ESTATAL-FEDERAL para personas de bajos ingresos. NO es para personas de 65+ en general (eso es Medicare)."
  },

  "medigap": {
    termino_oficial: "Seguro Complementario de Medicare (Medigap)",
    variantes: [
      "Medigap",
      "suplemento de Medicare",
      "póliza suplementaria de Medicare",
      "seguro de brecha de Medicare"
    ],
    en_ingles: ["Medigap", "Medicare Supplement Insurance"],
    contexto: "Póliza privada que cubre los 'brechas' de Medicare (deducibles, coseguros). NO es Medicare Advantage."
  },

  // ══════════════════════════════════════════════════
  // CUIDADO A LARGO PLAZO
  // ══════════════════════════════════════════════════

  "cuidado_largo_plazo": {
    termino_oficial: "Seguro de Cuidado a Largo Plazo",
    variantes: [
      "LTC",
      "seguro de cuidado extendido",
      "seguro de cuidado de enfermería",
      "cobertura para cuidado custodial"
    ],
    en_ingles: ["Long-Term Care Insurance (LTC)"],
    contexto: "Cubre cuidado custodial (no médico) cuando el asegurado no puede realizar 2+ ADLs o tiene deterioro cognitivo."
  },

  "adls": {
    termino_oficial: "Actividades de la Vida Diaria (AVDs)",
    variantes: [
      "ADLs",
      "actividades básicas de la vida diaria",
      "funciones básicas de autocuidado"
    ],
    en_ingles: ["ADLs", "Activities of Daily Living"],
    contexto: "Bañarse, vestirse, comer, ir al baño, trasladarse, continencia. Incapacidad de 2+ activa el LTC."
  },

  "periodo_eliminacion_ltc": {
    termino_oficial: "Período de Eliminación (LTC)",
    variantes: [
      "período de espera",
      "período de franquicia temporal",
      "deducible de tiempo"
    ],
    en_ingles: ["Elimination Period", "Waiting Period"],
    contexto: "Número de días que el asegurado debe PAGAR DE SU BOLSILLO antes de que el LTC comience a pagar."
  },

  // ══════════════════════════════════════════════════
  // COBRA, ERISA, HIPAA
  // ══════════════════════════════════════════════════

  "cobra": {
    termino_oficial: "COBRA",
    variantes: [
      "Ley de Reconciliación del Presupuesto Ómnibus Consolidado",
      "continuación de cobertura de grupo",
      "continuación COBRA"
    ],
    en_ingles: ["COBRA", "Consolidated Omnibus Budget Reconciliation Act"],
    contexto: "Permite continuar cobertura de grupo. Estándar = 18 meses. Eventos especiales (divorcio, muerte) = 36 meses. 20+ empleados."
  },

  "erisa": {
    termino_oficial: "ERISA",
    variantes: [
      "Ley de Seguridad de Ingresos de Retiro del Empleado",
      "ley federal de planes de beneficios",
      "regulación federal de planes de empleados"
    ],
    en_ingles: ["ERISA", "Employee Retirement Income Security Act"],
    contexto: "Regula planes de beneficios PRIVADOS. NO aplica a planes del gobierno NI a planes de iglesias."
  },

  "hipaa": {
    termino_oficial: "HIPAA",
    variantes: [
      "Ley de Portabilidad y Responsabilidad del Seguro de Salud",
      "ley de privacidad médica",
      "portabilidad de seguro de salud"
    ],
    en_ingles: ["HIPAA", "Health Insurance Portability and Accountability Act"],
    contexto: "Garantiza portabilidad del seguro de salud al cambiar empleos. Protege privacidad de información médica (PHI)."
  },

  // ══════════════════════════════════════════════════
  // HSA, HRA, FSA
  // ══════════════════════════════════════════════════

  "hsa": {
    termino_oficial: "Cuenta de Ahorros para la Salud (HSA)",
    variantes: [
      "HSA",
      "cuenta de ahorro médico",
      "cuenta de salud con deducible alto"
    ],
    en_ingles: ["HSA", "Health Savings Account"],
    contexto: "Cuenta de ahorro TRIPLE exenta de impuestos. Requiere HDHP. Los fondos se ACUMULAN año tras año. No se pierden."
  },

  "hra": {
    termino_oficial: "Acuerdo de Reembolso de Salud (HRA)",
    variantes: [
      "HRA",
      "cuenta de reembolso de salud",
      "acuerdo de reembolso médico del empleador"
    ],
    en_ingles: ["HRA", "Health Reimbursement Arrangement"],
    contexto: "Solo el EMPLEADOR contribuye. Los fondos pueden acumularse. El empleado no puede llevar el HRA si cambia de trabajo."
  },

  "fsa": {
    termino_oficial: "Cuenta de Gastos Flexibles (FSA)",
    variantes: [
      "FSA",
      "cuenta de gastos médicos flexibles",
      "cuenta de beneficios flexibles"
    ],
    en_ingles: ["FSA", "Flexible Spending Account"],
    contexto: "Cuenta 'úsala o piérdela' — los fondos NO se acumulan de año en año (con pocas excepciones). Empleado Y empleador pueden contribuir."
  },

  "hdhp": {
    termino_oficial: "Plan de Salud con Deducible Alto (HDHP)",
    variantes: [
      "HDHP",
      "plan de alto deducible",
      "plan catastrófico de salud"
    ],
    en_ingles: ["HDHP", "High Deductible Health Plan"],
    contexto: "Requisito para tener una HSA. Tiene deducible más alto que los planes tradicionales pero prima mensual más baja."
  },

  // ══════════════════════════════════════════════════
  // SEGURO SOCIAL Y RETIRO
  // ══════════════════════════════════════════════════

  "seguro_social": {
    termino_oficial: "Seguro Social",
    variantes: [
      "SS",
      "Social Security",
      "beneficios del gobierno federal por retiro",
      "OASDI"
    ],
    en_ingles: ["Social Security", "OASDI"],
    contexto: "OASDI = Old Age, Survivors, Disability Insurance. FRA actual: 67 años. Reducción temprana a 62 es permanente."
  },

  "fra": {
    termino_oficial: "Edad de Jubilación Plena (FRA)",
    variantes: [
      "FRA",
      "edad normal de jubilación",
      "edad de retiro completo"
    ],
    en_ingles: ["FRA", "Full Retirement Age", "Normal Retirement Age"],
    contexto: "La edad a la que el asegurado puede recibir el 100% del beneficio de SS. Actualmente 67 años (nacidos después de 1960)."
  },

  "ira_tradicional": {
    termino_oficial: "IRA Tradicional",
    variantes: [
      "cuenta individual de retiro tradicional",
      "IRA regular",
      "IRA con deducción fiscal"
    ],
    en_ingles: ["Traditional IRA"],
    contexto: "Contribuciones pueden ser deducibles. Crecimiento diferido. Retiros gravados. RMDs a los 73 años."
  },

  "ira_roth": {
    termino_oficial: "IRA Roth",
    variantes: [
      "Roth IRA",
      "cuenta de retiro Roth",
      "IRA con retiros libres de impuestos"
    ],
    en_ingles: ["Roth IRA"],
    contexto: "Contribuciones NO deducibles (after-tax). Retiros calificados LIBRES DE IMPUESTOS. SIN RMDs durante la vida del propietario."
  },

  "401k": {
    termino_oficial: "Plan 401(k)",
    variantes: [
      "401k",
      "plan de ahorro para el retiro del empleador",
      "plan de contribución definida"
    ],
    en_ingles: ["401(k) Plan"],
    contexto: "Plan de contribución DEFINIDA. El empleado asume el riesgo de inversión. Contribuciones pretax. RMDs a los 73 años."
  },

  "sep_ira": {
    termino_oficial: "SEP-IRA",
    variantes: [
      "pensión simplificada del empleado",
      "IRA para autónomos",
      "IRA de empleador"
    ],
    en_ingles: ["SEP-IRA", "Simplified Employee Pension"],
    contexto: "Ideal para autónomos y pequeños negocios. SOLO el empleador contribuye. Hasta 25% de ingreso neto o $69,000 (2024)."
  },

  "simple_ira": {
    termino_oficial: "SIMPLE IRA",
    variantes: [
      "plan de ahorro e incentivo de igualación",
      "plan para pequeñas empresas",
      "IRA SIMPLE"
    ],
    en_ingles: ["SIMPLE IRA", "Savings Incentive Match Plan for Employees"],
    contexto: "Para empresas con 100 empleados o MENOS. Tanto empleado como empleador contribuyen. Penalidad de retiro temprano = 25% (primeros 2 años)."
  },

  "rmd": {
    termino_oficial: "Distribución Mínima Requerida (RMD)",
    variantes: [
      "RMD",
      "retiro mínimo obligatorio",
      "distribución mínima anual",
      "cantidad mínima de retiro"
    ],
    en_ingles: ["RMD", "Required Minimum Distribution"],
    contexto: "Retiro mínimo obligatorio que el IRS exige a partir de los 73 años de planes calificados e IRA Tradicional. Roth IRA: SIN RMDs."
  },

  // ══════════════════════════════════════════════════
  // SEGUROS ESPECIALES
  // ══════════════════════════════════════════════════

  "key_person": {
    termino_oficial: "Seguro de Persona Clave",
    variantes: [
      "seguro de persona clave",
      "key man insurance",
      "seguro de empleado clave",
      "seguro de ejecutivo clave"
    ],
    en_ingles: ["Key Person Insurance", "Key Man Insurance"],
    contexto: "La EMPRESA paga la prima y es la beneficiaria. Las primas NO son deducibles. El beneficio NO es gravable."
  },

  "buy_sell": {
    termino_oficial: "Acuerdo de Compra-Venta",
    variantes: [
      "buy-sell agreement",
      "acuerdo de sucesión empresarial",
      "acuerdo de liquidación de sociedad"
    ],
    en_ingles: ["Buy-Sell Agreement"],
    contexto: "Cross Purchase: N×(N-1) pólizas. Entity Purchase (Stock Redemption): N pólizas."
  },

  "viatical": {
    termino_oficial: "Liquidación Viatical",
    variantes: [
      "viatical settlement",
      "venta de póliza por enfermedad terminal",
      "liquidación anticipada por terminal"
    ],
    en_ingles: ["Viatical Settlement"],
    contexto: "Persona con enfermedad TERMINAL (expectativa de vida ≤ 2 años) vende su póliza a un tercero por menos del valor nominal."
  },

  "life_settlement": {
    termino_oficial: "Liquidación de Vida",
    variantes: [
      "life settlement",
      "venta de póliza a tercero",
      "mercado secundario de seguros de vida"
    ],
    en_ingles: ["Life Settlement"],
    contexto: "Persona MAYOR (generalmente 65+) y SALUDABLE vende su póliza porque ya no la necesita. Diferente del viatical."
  },

  "beneficio_acelerado": {
    termino_oficial: "Beneficio por Muerte Anticipada",
    variantes: [
      "beneficio acelerado de muerte",
      "living benefit",
      "pago anticipado del beneficio de muerte",
      "beneficio de vida"
    ],
    en_ingles: ["Accelerated Death Benefit (ADB)", "Living Benefit"],
    contexto: "Permite cobrar parte del beneficio de muerte en VIDA si el asegurado tiene enfermedad terminal. Reduce el beneficio final."
  },

  // ══════════════════════════════════════════════════
  // LEYES Y REGULACIONES DE FLORIDA
  // ══════════════════════════════════════════════════

  "dfs": {
    termino_oficial: "Departamento de Servicios Financieros de Florida",
    variantes: [
      "DFS",
      "departamento de seguros de Florida",
      "regulador estatal de seguros"
    ],
    en_ingles: ["DFS", "Department of Financial Services"],
    contexto: "El regulador principal de seguros en Florida. Supervisa licencias, sanciones y cumplimiento."
  },

  "asociacion_garantia": {
    termino_oficial: "Asociación de Garantía de Florida",
    variantes: [
      "fondo de garantía",
      "asociación de garantía de vida y salud",
      "protección de insolvencia"
    ],
    en_ingles: ["Florida Life and Health Insurance Guaranty Association"],
    contexto: "Protege asegurados de aseguradoras ADMITIDAS insolventes. VIDA = $300,000. SALUD = $500,000. NO cubre surplus lines."
  },

  "idoneidad": {
    termino_oficial: "Idoneidad (Suitability)",
    variantes: [
      "suitability",
      "adecuación del producto",
      "conveniencia del producto",
      "apropiado para el cliente"
    ],
    en_ingles: ["Suitability", "Suitability Requirements"],
    contexto: "El producto debe ser APROPIADO para las necesidades, situación financiera y objetivos del cliente. Especialmente estricto para 65+ en anualidades."
  },

  // ══════════════════════════════════════════════════
  // CONCEPTOS GENERALES DE CONTRATOS
  // ══════════════════════════════════════════════════

  "subrogacion": {
    termino_oficial: "Subrogación",
    variantes: [
      "derecho de subrogación",
      "derecho de recuperación",
      "sustitución legal de derechos"
    ],
    en_ingles: ["Subrogation"],
    contexto: "La aseguradora, después de pagar al asegurado, toma sus DERECHOS para demandar al tercero responsable. NO aplica en vida."
  },

  "indemnizacion": {
    termino_oficial: "Principio de Indemnización",
    variantes: [
      "principio indemnizatorio",
      "restauración económica",
      "compensación por pérdida real"
    ],
    en_ingles: ["Principle of Indemnification", "Indemnity"],
    contexto: "El seguro debe restaurar al asegurado a su posición anterior — NO generar ganancia. El asegurado no puede cobrar más de su pérdida real."
  },

  "interes_asegurable": {
    termino_oficial: "Interés Asegurable",
    variantes: [
      "insurable interest",
      "interés en la vida del asegurado",
      "interés económico en la pérdida"
    ],
    en_ingles: ["Insurable Interest"],
    contexto: "VIDA: debe existir al momento de SOLICITAR (no al morir). PROPIEDAD: debe existir tanto al solicitar COMO al momento de la pérdida."
  },

  "estoppel": {
    termino_oficial: "Impedimento Legal (Estoppel)",
    variantes: [
      "estoppel",
      "impedimento por conducta previa",
      "preclusión legal"
    ],
    en_ingles: ["Estoppel"],
    contexto: "Impide a la aseguradora actuar inconsistentemente con su conducta previa cuando el asegurado actuó confiando en ella."
  },

  "waiver": {
    termino_oficial: "Renuncia (Waiver)",
    variantes: [
      "waiver",
      "renuncia voluntaria",
      "exención de derecho",
      "dispensa voluntaria"
    ],
    en_ingles: ["Waiver"],
    contexto: "Renuncia VOLUNTARIA de un derecho conocido. El estoppel impide retractarse del waiver cuando el asegurado actuó basándose en él."
  }

}; // fin PK_SINONIMOS

// ============================================================
// Exportar para uso del motor principal
// ============================================================
if (typeof module !== 'undefined') module.exports = { PK_SINONIMOS };

if (typeof window !== 'undefined') window.PK_SINONIMOS = PK_SINONIMOS;
