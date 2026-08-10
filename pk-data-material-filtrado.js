// ============================================================
// ACADEMIA 2-15 — Material complementario filtrado (2026-08-10)
// 10 conceptos x 3 variantes = 30 preguntas
//
// Origen pedagógico: "MATERIAL CON CORRECCIONES" (2016) y
// "REPASO DE SALUD (4)" (2024). Las cifras y reglas sensibles
// fueron contrastadas con fuentes oficiales vigentes antes de incluirse.
// ============================================================
(function (global) {
  "use strict";

  function variant(nivel, tipo, q, o, a, e, fuente) {
    return { nivel: nivel, tipo_trampa: tipo, q: q, o: o, a: a, e: e, correcto: e, fuente: fuente };
  }

  const VIDA = "Pearson VUE Florida 2-15 Content Outline (vigente 2026)";
  const FLDFS = "Florida DFS, Continuing Education Requirements";
  const FLS = "Florida Statutes (2025), capítulos 626 y 631";
  const IRS = "IRS Publications 15-B y 525";
  const FINCEN = "FinCEN, Insurance Industry AML Program and SAR Rules";

  const PK_MATERIAL_FILTRADO = [
    {
      id: "filtrado_vida_universal_ab",
      area: "vida",
      concepto: "Vida universal — beneficio por muerte Opción A y Opción B",
      variantes: [
        variant(2, "COMPARACION", "En una póliza de vida universal, ¿qué describe correctamente la Opción A del beneficio por muerte?", ["Beneficio creciente: monto nominal más valor en efectivo", "Beneficio nivelado; el monto neto en riesgo disminuye al crecer el valor en efectivo", "Beneficio decreciente igual al saldo de una deuda", "Devolución de todas las primas al vencimiento"], 1, "Opción A es el beneficio nivelado. A medida que aumenta el valor en efectivo, disminuye el monto neto en riesgo de la aseguradora.", VIDA),
        variant(2, "COMPARACION", "¿Cómo se calcula generalmente el beneficio por muerte bajo la Opción B de una póliza de vida universal?", ["Solo el valor en efectivo acumulado", "Monto nominal menos valor en efectivo", "Monto nominal más valor en efectivo", "Primas pagadas más intereses, sin monto nominal"], 2, "Opción B es el beneficio creciente: normalmente paga el monto nominal más el valor en efectivo acumulado.", VIDA),
        variant(4, "ESCENARIO", "Una vida universal mantiene un beneficio total constante aunque su valor en efectivo crece. ¿Qué opción está utilizando?", ["Opción A o beneficio nivelado", "Opción B o beneficio creciente", "Término decreciente", "Pagado reducido"], 0, "Si el beneficio total permanece nivelado mientras crece el valor en efectivo, corresponde a la Opción A.", VIDA)
      ]
    },
    {
      id: "filtrado_vida_grupo_conversion",
      area: "vida",
      concepto: "Conversión de seguro de vida grupal",
      variantes: [
        variant(2, "NUMEROS_FECHAS", "Al terminar la elegibilidad para un seguro de vida grupal en Florida, ¿cuál es el plazo general para solicitar la conversión individual?", ["10 días", "14 días", "31 días", "60 días"], 2, "El plazo general de conversión es de 31 días después de terminar la cobertura o elegibilidad grupal.", "Florida Statutes 627.566"),
        variant(3, "ESCENARIO", "Luis pierde la cobertura de vida grupal y desarrolla una condición médica. Si convierte dentro del plazo permitido, ¿qué ventaja conserva?", ["Una prima idéntica a la del grupo para siempre", "Conversión sin evidencia de asegurabilidad", "Cobertura médica COBRA incluida automáticamente", "Derecho a cualquier póliza de cualquier aseguradora"], 1, "La conversión oportuna no exige evidencia de asegurabilidad, aunque la prima individual se calcula con las bases aplicables a la póliza convertida.", "Florida Statutes 627.566"),
        variant(4, "TRAMPA_PLAZOS", "¿Qué comparación de plazos es correcta?", ["Conversión de vida grupal: 60 días; elección COBRA: 31 días", "Conversión de vida grupal: 31 días; elección COBRA: generalmente 60 días", "Ambos plazos son siempre 14 días", "Ambos plazos son siempre 30 días"], 1, "No deben confundirse: la conversión de vida grupal usa 31 días; COBRA generalmente permite 60 días para elegir continuación de salud.", "Florida Statutes 627.566; U.S. DOL COBRA")
      ]
    },
    {
      id: "filtrado_fl_ce",
      area: "florida",
      concepto: "Educación continua de agentes de Florida",
      variantes: [
        variant(2, "NUMEROS_FECHAS", "Un agente de Florida con menos de seis años de licencia debe completar, por cada período bienal, ¿qué combinación general de educación continua?", ["4 horas de ley y ética más 20 horas electivas", "4 horas de ley y ética más 16 horas electivas", "24 horas de ley y ética exclusivamente", "20 horas electivas sin curso obligatorio"], 0, "Con menos de seis años de licencia: 4 horas de actualización de ley y ética más 20 horas electivas, para un total de 24.", FLDFS),
        variant(3, "NUMEROS_FECHAS", "Un agente que ha mantenido la licencia de Florida durante seis años o más normalmente debe completar cada dos años:", ["4 horas de ley y ética más 16 electivas", "4 horas de ley y ética más 20 electivas", "Solo 4 horas de ley y ética", "30 horas sin distinción de materia"], 0, "Con seis años o más de licencia, el requisito general es 4 horas de ley y ética más 16 electivas, total 20.", FLDFS),
        variant(4, "EXCEPTO", "Respecto de la educación continua en Florida, ¿cuál afirmación es incorrecta?", ["El período de cumplimiento es generalmente bienal", "Incluye una actualización obligatoria de ley y ética", "Todo agente debe completar exactamente 24 horas sin importar su antigüedad", "El número de electivas puede variar según los años de licencia"], 2, "No todos completan exactamente 24 horas: quienes tienen seis años o más de licencia generalmente cumplen 20 horas totales.", FLDFS)
      ]
    },
    {
      id: "filtrado_fl_regalos",
      area: "florida",
      concepto: "Regalos promocionales permitidos en Florida",
      variantes: [
        variant(2, "NUMEROS_FECHAS", "Según la regla vigente de Florida, ¿cuál es el valor minorista máximo total de artículos promocionales que una aseguradora o agente puede entregar a un asegurado o prospecto durante un año calendario?", ["$25", "$50", "$100", "$250"], 2, "El límite vigente es $100 de valor minorista total por asegurado o prospecto durante cualquier año calendario.", "Florida Statutes 626.9541(1)(m)"),
        variant(3, "ESCENARIO", "Un agente entrega a un prospecto artículos promocionales por valor minorista total de $75 durante el año, sin condicionar la compra. ¿Cuál es la conclusión más precisa?", ["Supera el límite vigente", "Está dentro del límite anual de $100", "Siempre constituye rebating aunque valga un dólar", "Solo sería permitido después de emitir la póliza"], 1, "Setenta y cinco dólares está dentro del límite anual de $100, siempre que se cumplan las demás condiciones legales y no se use como incentivo prohibido.", "Florida Statutes 626.9541(1)(m)"),
        variant(4, "DISTINCION", "¿Qué dato antiguo debe descartarse al estudiar los regalos promocionales permitidos en Florida?", ["El límite vigente de $100 por año calendario", "La prohibición general de inducements no autorizados", "El antiguo límite de $25", "La valoración según el precio minorista"], 2, "El valor de $25 está desactualizado; el estatuto vigente permite hasta $100 de valor minorista total por persona y año calendario.", "Florida Statutes 626.9541(1)(m)")
      ]
    },
    {
      id: "filtrado_fl_garantia_salud",
      area: "florida",
      concepto: "Asociación de Garantía — límite para cobertura médica mayor",
      variantes: [
        variant(3, "NUMEROS_FECHAS", "Para cobertura básica hospitalaria, médica y quirúrgica o seguro médico mayor, ¿hasta qué monto por vida establece Florida el límite pertinente de la asociación de garantía?", ["$100,000", "$250,000", "$300,000", "$500,000"], 3, "El límite legal pertinente para cobertura básica hospitalaria, médica y quirúrgica o seguro médico mayor es $500,000 por vida.", "Florida Statutes 631.717"),
        variant(4, "COMPARACION", "¿Cuál afirmación distingue correctamente el límite de garantía de ciertos seguros médicos mayores en Florida?", ["Siempre se limita a $100,000", "Puede alcanzar $500,000 para las categorías médicas especificadas", "Es ilimitado si la póliza es grupal", "Depende exclusivamente de la decisión del agente"], 1, "El estatuto fija hasta $500,000 para las categorías especificadas de cobertura hospitalaria, médica, quirúrgica o médica mayor.", "Florida Statutes 631.717"),
        variant(4, "TRAMPA_ACTUALIZACION", "Un resumen antiguo enumera solamente un máximo general de $300,000 para todos los beneficios de salud. ¿Qué debe hacer el estudiante?", ["Memorizarlo sin excepciones", "Sustituirlo por $100,000 para toda cobertura", "Reconocer el límite específico de $500,000 para ciertas coberturas médicas", "Ignorar por completo la asociación de garantía"], 2, "La regla actual contiene categorías distintas; para cobertura hospitalaria, médica, quirúrgica o médica mayor especificada, el límite es $500,000.", "Florida Statutes 631.717")
      ]
    },
    {
      id: "filtrado_salud_coordinacion",
      area: "salud",
      concepto: "Coordinación de beneficios",
      variantes: [
        variant(2, "DEFINICION", "¿Cuál es el propósito principal de una disposición de coordinación de beneficios en seguros de salud?", ["Duplicar el pago cuando existen dos planes", "Evitar sobreseguro y duplicación de beneficios determinando el orden de pago", "Eliminar todos los deducibles", "Convertir automáticamente un plan grupal en individual"], 1, "La coordinación de beneficios determina qué plan paga primero y evita que la suma de pagos exceda el gasto cubierto.", "NAIC Coordination of Benefits Model Regulation"),
        variant(3, "ESCENARIO", "Una persona está cubierta por dos planes de salud. ¿Qué función cumple el plan secundario?", ["Paga siempre antes que el primario", "Puede cubrir gastos elegibles restantes después del pago del primario, sujeto a sus reglas", "Debe pagar exactamente la misma cantidad que el primario", "Cancela automáticamente la cobertura primaria"], 1, "El plan primario procesa primero; el secundario puede cubrir parte del saldo elegible sin producir una recuperación superior al gasto cubierto.", "NAIC Coordination of Benefits Model Regulation"),
        variant(4, "REGLA_CUMPLEANOS", "En la regla de cumpleaños usada para coordinar la cobertura de un hijo dependiente, ¿qué dato de los padres suele decidir qué plan es primario?", ["El año de nacimiento más antiguo", "El mes y día de nacimiento que ocurre primero en el año", "El ingreso anual más alto", "La fecha de matrimonio"], 1, "La regla de cumpleaños compara el mes y el día, no el año; el plan del padre cuyo cumpleaños ocurre primero en el calendario suele ser primario.", "NAIC Coordination of Benefits Model Regulation")
      ]
    },
    {
      id: "filtrado_salud_discapacidad",
      area: "salud",
      concepto: "Discapacidad residual y recurrente",
      variantes: [
        variant(2, "DEFINICION", "¿Qué beneficio de ingreso por discapacidad compensa una pérdida parcial de ingresos cuando el asegurado puede trabajar, pero con capacidad reducida?", ["Discapacidad residual", "Indemnización hospitalaria", "Muerte accidental", "Gastos médicos mayores"], 0, "La discapacidad residual cubre una pérdida parcial de ingreso relacionada con una reducción de capacidad, horas o funciones laborales.", "Pearson VUE Florida 2-15 Content Outline"),
        variant(3, "ESCENARIO", "Después de recuperarse y volver al trabajo, una asegurada recae por la misma causa dentro del período indicado en la póliza. ¿Qué disposición puede evitar un nuevo período de eliminación?", ["Discapacidad recurrente", "Período probatorio", "Coaseguro", "Conversión grupal"], 0, "La disposición de discapacidad recurrente puede tratar la recaída como continuación de la reclamación anterior y evitar un nuevo período de eliminación.", "Pearson VUE Florida 2-15 Content Outline"),
        variant(4, "COMPARACION", "¿Cuál comparación es correcta?", ["Residual significa pérdida parcial; recurrente es una recaída relacionada después de una recuperación", "Residual y recurrente significan exactamente lo mismo", "Residual solo cubre hospitalización; recurrente solo cubre cirugía", "Recurrente siempre exige una causa distinta"], 0, "Residual describe incapacidad o pérdida de ingreso parcial; recurrente describe el regreso de la misma discapacidad o una relacionada dentro del plazo contractual.", "Pearson VUE Florida 2-15 Content Outline")
      ]
    },
    {
      id: "filtrado_salud_periodos",
      area: "salud",
      concepto: "Período de eliminación y período probatorio",
      variantes: [
        variant(2, "COMPARACION", "¿Cuál es la diferencia básica entre un período de eliminación y un período probatorio en una póliza de salud o discapacidad?", ["Eliminación transcurre después de comenzar la discapacidad; probatorio comienza al entrar en vigor la póliza", "Ambos comienzan únicamente al presentar una reclamación", "El probatorio es el deducible anual y la eliminación es el copago", "No existe diferencia contractual"], 0, "El período de eliminación es la espera posterior al inicio de una discapacidad antes de pagar beneficios; el probatorio corre desde la vigencia y limita ciertas enfermedades al comienzo.", "Pearson VUE Florida 2-15 Content Outline"),
        variant(3, "ESCENARIO", "Una póliza exige que transcurran 60 días desde el comienzo de la discapacidad antes de pagar ingreso mensual. Esos 60 días son:", ["Período de gracia", "Período de eliminación", "Período de incontestabilidad", "Período de inscripción abierta"], 1, "La espera que empieza con la discapacidad y termina cuando comienzan los beneficios es el período de eliminación.", "Pearson VUE Florida 2-15 Content Outline"),
        variant(3, "ESCENARIO", "Una enfermedad que aparece durante los primeros días posteriores a la fecha efectiva no está cubierta hasta concluir una espera contractual. Esa espera es:", ["Período probatorio", "Período de eliminación por accidente", "Coaseguro", "Renovación condicional"], 0, "El período probatorio comienza con la fecha efectiva y suele aplicarse a enfermedades, no a accidentes.", "Pearson VUE Florida 2-15 Content Outline")
      ]
    },
    {
      id: "filtrado_salud_renovabilidad",
      area: "salud",
      concepto: "No cancelable y garantizada renovable",
      variantes: [
        variant(2, "COMPARACION", "¿Qué distingue a una póliza de salud no cancelable de una garantizada renovable?", ["La no cancelable impide cancelar o subir la prima individual durante el período garantizado; la garantizada renovable permite ajustes por clase", "La garantizada renovable permite cancelar libremente a un asegurado enfermo", "La no cancelable no garantiza la renovación", "No existe diferencia"], 0, "No cancelable ofrece la protección más fuerte: no cancelación ni aumento de prima individual durante el período garantizado. La garantizada renovable permite cambios de prima por clase.", "Pearson VUE Florida 2-15 Content Outline"),
        variant(3, "ESCENARIO", "Una aseguradora aumenta la prima de todos los asegurados de la misma clase, sin seleccionar individualmente a quien enfermó. ¿Qué tipo de renovabilidad puede permitirlo?", ["Garantizada renovable", "No cancelable", "No renovable", "Cancelable a opción del asegurado"], 0, "En una póliza garantizada renovable, la aseguradora debe renovar pero puede cambiar primas para una clase completa, no por el deterioro individual.", "Pearson VUE Florida 2-15 Content Outline"),
        variant(4, "TRAMPA", "¿Cuál afirmación sobre una póliza no cancelable es correcta durante el período garantizado?", ["La aseguradora puede aumentar la prima solo del asegurado que presentó una reclamación", "La aseguradora no puede cancelar ni aumentar la prima mientras el asegurado pague oportunamente", "La póliza termina automáticamente al enfermar el asegurado", "Solo garantiza que la solicitud será aceptada"], 1, "Mientras se paguen las primas, la póliza no cancelable no puede ser cancelada ni sufrir un aumento de prima durante el período contractual garantizado.", "Pearson VUE Florida 2-15 Content Outline")
      ]
    },
    {
      id: "filtrado_salud_impuestos",
      area: "salud",
      concepto: "Tratamiento fiscal de primas y beneficios de salud y discapacidad",
      variantes: [
        variant(3, "IMPUESTOS", "Generalmente, ¿cómo se tratan para el empleado las primas que el empleador paga por cobertura médica y hospitalaria calificada?", ["Como ingreso gravable ordinario en todos los casos", "Se excluyen del ingreso bruto del empleado", "Como ganancia de capital", "Como dividendo de la aseguradora"], 1, "Las contribuciones del empleador a un plan calificado de accidente o salud generalmente se excluyen del ingreso bruto del empleado.", IRS),
        variant(3, "IMPUESTOS", "Si el empleador pagó las primas de una póliza de ingreso por discapacidad y el empleado no incluyó ese costo en su ingreso, los beneficios recibidos por discapacidad son generalmente:", ["Libres de impuestos", "Ingreso gravable para el empleado", "Ganancia de capital a largo plazo", "Deducibles de la nómina"], 1, "Los beneficios de discapacidad son generalmente gravables cuando las primas fueron pagadas por el empleador o con dólares antes de impuestos.", IRS),
        variant(4, "IMPUESTOS", "Una empleada paga personalmente todas las primas de su seguro individual de discapacidad con dinero después de impuestos. ¿Cómo se tratan generalmente los beneficios que recibe?", ["Son generalmente libres de impuesto federal sobre la renta", "Siempre son salario sujeto a nómina", "Se gravan dos veces", "La aseguradora deduce automáticamente el 50%"], 0, "Cuando el asegurado paga las primas con dinero después de impuestos, los beneficios de discapacidad generalmente no se incluyen en el ingreso imponible.", IRS)
      ]
    }
  ];

  global.PK_MATERIAL_FILTRADO = PK_MATERIAL_FILTRADO;
  if (typeof module !== "undefined") module.exports = { PK_MATERIAL_FILTRADO: PK_MATERIAL_FILTRADO };
})(typeof window !== "undefined" ? window : globalThis);
