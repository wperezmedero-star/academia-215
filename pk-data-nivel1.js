// ============================================================
// PEARSON KILLER — pk-data-nivel1.js
// Módulo: Provisiones de Salud, Incapacidad y Prácticas Desleales
// (Nivel Pearson Avanzado — basado en material de referencia
// aportado por el usuario, reestructurado en el formato estándar
// del banco con variantes, trampas y verificación de fuentes)
//
// 8 conceptos × 5 variantes = 40 preguntas
// [VERIFICADO] = mecánica de producto o principio legal estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// ============================================================

const PK_NIVEL1 = [

{
  id: "nivel1_001",
  area: "salud",
  concepto: "Provisiones Uniformes de Reclamación — Aviso, Prueba de Pérdida, Examen Físico y Acciones Legales",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una póliza de salud establece que el asegurado debe notificar un siniestro dentro del plazo indicado en el contrato. Si no puede hacerlo razonablemente dentro de ese plazo, la notificación sigue siendo válida si se presenta tan pronto como sea razonablemente posible. ¿Qué provisión uniforme está describiendo esto?",
      o: [
        "Prueba de pérdida (Proof of Loss)",
        "Aviso de reclamación (Notice of Claim)",
        "Acciones legales (Legal Actions)",
        "Examen físico (Physical Examination)"
      ],
      a: 1,
      trampa: "Confundir 'notificar que ocurrió algo' (Aviso de Reclamación) con 'demostrar documentalmente cuánto se perdió' (Prueba de Pérdida) — son dos provisiones secuenciales distintas.",
      correcto: "AVISO DE RECLAMACIÓN = notificación inicial de que ocurrió un evento cubierto, generalmente dentro de 20 días, con la flexibilidad descrita si no fue razonablemente posible cumplir el plazo exacto. Es el primer paso — antes de la Prueba de Pérdida. [VERIFICADO — provisión uniforme estándar del contrato de salud]",
      incorrectos: [
        "A) Prueba de Pérdida es el paso SIGUIENTE — presentar documentación formal del monto de la pérdida, generalmente dentro de 90 días.",
        "C) Acciones Legales regula cuándo el asegurado puede demandar — no la notificación inicial.",
        "D) Examen Físico es el derecho de la aseguradora a examinar al asegurado — no la obligación de notificar."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un asegurado presenta una reclamación de incapacidad. La póliza establece que la aseguradora podrá exigir exámenes médicos razonables mientras la reclamación permanezca pendiente. ¿Qué provisión permite esto?",
      o: [
        "Acciones legales",
        "Examen físico",
        "Prueba de pérdida",
        "Aviso de reclamación"
      ],
      a: 1,
      trampa: "El nombre de la provisión es literal pero se confunde con otras provisiones de reclamación que ocurren en la misma etapa del proceso.",
      correcto: "EXAMEN FÍSICO (Physical Examination) = otorga a la aseguradora el derecho de exigir exámenes médicos razonables AL ASEGURADO mientras la reclamación esté pendiente, para verificar la validez continua de la incapacidad reclamada. [VERIFICADO — provisión uniforme estándar]",
      incorrectos: [
        "A) Acciones Legales regula el plazo para demandar — no exámenes médicos.",
        "C) Prueba de Pérdida es la documentación escrita del asegurado — no exámenes que exige la aseguradora.",
        "D) Aviso de Reclamación es la notificación inicial del evento — no un derecho de examen continuo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Una póliza establece que, antes de iniciar una demanda judicial contra la aseguradora, el asegurado debe esperar el período mínimo establecido en la póliza después de presentar la prueba de pérdida. ¿Qué provisión regula este aspecto?",
      o: [
        "Acciones legales",
        "Aviso de reclamación",
        "Examen físico",
        "Restablecimiento"
      ],
      a: 0,
      trampa: "Se combinan dos conceptos en la pregunta (prueba de pérdida + espera antes de demandar) — la provisión que gobierna el DERECHO A DEMANDAR es la que importa, no la de presentar documentación.",
      correcto: "ACCIONES LEGALES (Legal Actions) = establece el período mínimo (generalmente 60 días) que debe transcurrir después de presentar la prueba de pérdida antes de que el asegurado pueda iniciar una demanda, y el período máximo (generalmente varios años) dentro del cual debe hacerlo. [VERIFICADO — provisión uniforme estándar; REQUIERE VERIFICACIÓN de los plazos exactos mínimo/máximo vigentes en Florida]",
      incorrectos: [
        "B) Aviso de Reclamación regula la notificación inicial del evento — no el derecho a demandar.",
        "C) Examen Físico regula los exámenes médicos que puede exigir la aseguradora.",
        "D) Restablecimiento regula la reactivación de una póliza caducada — no tiene relación con demandas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado presenta la prueba de pérdida y, diez días después, demanda a la aseguradora. ¿Qué provisión determinará principalmente si esa demanda fue presentada prematuramente?",
      o: [
        "Aviso de reclamación",
        "Acciones legales",
        "Examen físico",
        "Restablecimiento"
      ],
      a: 1,
      trampa: "El escenario prueba si el estudiante entiende que existe un PERÍODO DE ESPERA obligatorio después de la prueba de pérdida — diez días es sospechosamente corto comparado con el estándar de la industria.",
      correcto: "ACCIONES LEGALES es la provisión que determina si la demanda fue prematura. El estándar de la industria generalmente exige esperar un mínimo de 60 días después de presentar la prueba de pérdida antes de poder demandar — diez días sería insuficiente bajo ese estándar. [VERIFICADO — principio general; REQUIERE VERIFICACIÓN del plazo mínimo exacto vigente en Florida]",
      incorrectos: [
        "A) Aviso de Reclamación ya se cumplió en una etapa anterior del proceso — no es lo que se evalúa aquí.",
        "C) Examen Físico no tiene relación con el momento de presentar una demanda.",
        "D) Restablecimiento no aplica — la póliza está vigente y en proceso de reclamación, no caducada."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Una aseguradora exige que un asegurado sea examinado por un médico mientras una reclamación por incapacidad sigue en evaluación. Si el asegurado se niega repetidamente sin causa razonable, ¿cuál es la consecuencia MÁS PROBABLE?",
      o: [
        "Ninguna — el examen físico es completamente opcional para el asegurado",
        "La aseguradora puede razonablemente suspender o denegar el pago de beneficios mientras persista la negativa injustificada",
        "La póliza se cancela automáticamente y de forma permanente",
        "El asegurado debe pagar una multa administrativa al Departamento de Seguros"
      ],
      a: 1,
      trampa: "El derecho de examen físico de la aseguradora tiene consecuencias reales si el asegurado lo rechaza sin justificación — no es un derecho vacío.",
      correcto: "Si el asegurado se niega sin causa razonable a un examen físico razonablemente solicitado, la aseguradora generalmente puede suspender o denegar el pago de beneficios mientras persista la negativa — el examen es una condición razonable para verificar la reclamación continua. [VERIFICADO — principio general de la provisión de examen físico]",
      incorrectos: [
        "A) El examen físico NO es meramente opcional cuando la póliza lo establece como condición contractual razonable.",
        "C) La cancelación automática y permanente de la póliza no es la consecuencia estándar — la suspensión del pago de beneficios es más precisa.",
        "D) No existe una multa administrativa del Departamento de Seguros por esta situación contractual entre asegurado y aseguradora."
      ]
    }
  ]
},

{
  id: "nivel1_002",
  area: "salud",
  concepto: "Definiciones de Incapacidad — Propia Ocupación, Cualquier Ocupación, Recurrente",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una póliza de incapacidad paga beneficios completos cuando el asegurado no puede realizar las funciones esenciales de su ocupación habitual, aunque aún pueda desempeñar otro trabajo diferente. ¿Qué tipo de definición utiliza?",
      o: [
        "Cualquier ocupación",
        "Ocupación propia",
        "Incapacidad presunta",
        "Incapacidad recurrente"
      ],
      a: 1,
      trampa: "Es la definición MÁS FAVORABLE al asegurado — paga aunque pueda trabajar en otra cosa. Se confunde fácilmente con 'cualquier ocupación', que es la definición opuesta y más restrictiva.",
      correcto: "OCUPACIÓN PROPIA (Own Occupation) = paga beneficios completos si el asegurado no puede desempeñar SU PROPIA ocupación específica, sin importar si podría trabajar en otro campo. Es la definición más favorable y generalmente la más costosa. [VERIFICADO — definición estándar de la industria]",
      incorrectos: [
        "A) Cualquier Ocupación exige que el asegurado no pueda desempeñar NINGÚN trabajo razonable — mucho más restrictiva.",
        "C) Incapacidad Presunta se refiere a condiciones específicas (ceguera total, pérdida de extremidades) que automáticamente califican como incapacidad total, sin importar la ocupación.",
        "D) Incapacidad Recurrente se refiere a una nueva incapacidad por la misma causa dentro de un período determinado — no es una definición de qué constituye 'no poder trabajar'."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CASI_IDENTICAS",
      q: "Una póliza de incapacidad establece que, si el asegurado vuelve a incapacitarse por la misma causa dentro de un período determinado después de regresar al trabajo, la nueva incapacidad se tratará como continuación de la anterior (sin nuevo período de eliminación). ¿Qué provisión describe esto?",
      o: [
        "Incapacidad residual",
        "Incapacidad recurrente",
        "Incapacidad presunta",
        "Período de eliminación"
      ],
      a: 1,
      trampa: "Los cuatro términos suenan relacionados con incapacidad pero cada uno describe un mecanismo completamente distinto del contrato.",
      correcto: "INCAPACIDAD RECURRENTE (Recurrent Disability) = si el asegurado recae por la MISMA causa dentro de un período específico tras regresar al trabajo, la aseguradora trata la recaída como continuación del reclamo original — sin exigir un nuevo período de eliminación. Protege al asegurado de recaídas tempranas. [VERIFICADO — provisión estándar de pólizas de incapacidad]",
      incorrectos: [
        "A) Incapacidad Residual paga beneficios parciales cuando el asegurado puede trabajar parcialmente pero con ingresos reducidos — concepto distinto.",
        "C) Incapacidad Presunta cubre condiciones específicas que automáticamente califican como incapacidad total permanente.",
        "D) Período de Eliminación es el tiempo de espera inicial antes de que comiencen los beneficios — no la recaída posterior."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural entre 'Incapacidad Recurrente' e 'Incapacidad Residual' en una póliza de ingresos por incapacidad?",
      o: [
        "Son términos sinónimos — describen exactamente el mismo mecanismo contractual",
        "Recurrente = una recaída de la MISMA causa que se trata como continuación del reclamo original; Residual = beneficios PARCIALES cuando el asegurado puede trabajar parcialmente con ingresos reducidos",
        "Residual describe una recaída; Recurrente describe beneficios parciales",
        "Ambas eliminan completamente el período de eliminación en cualquier circunstancia"
      ],
      a: 1,
      trampa: "Ambos términos incluyen la idea de 'no estar completamente sano' pero describen situaciones y mecanismos de pago completamente diferentes.",
      correcto: "RECURRENTE = recaída de la MISMA causa dentro de un período determinado, tratada como continuación (sin nuevo período de eliminación). RESIDUAL = el asegurado puede trabajar PARCIALMENTE pero sus ingresos se reducen — la póliza paga un beneficio PROPORCIONAL a la pérdida de ingresos. [VERIFICADO — distinción conceptual estándar entre ambas provisiones]",
      incorrectos: [
        "A) NO son sinónimos — describen mecanismos de pago y activación completamente distintos.",
        "C) Esta descripción invierte las definiciones correctas de ambos términos.",
        "D) Solo la Incapacidad Recurrente elimina el nuevo período de eliminación bajo sus condiciones específicas — la Residual no se relaciona con ese concepto."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Un cirujano pierde destreza en su mano dominante debido a un accidente y ya no puede operar, pero podría trabajar como profesor de medicina. Tiene una póliza de incapacidad con definición de 'Ocupación Propia'. ¿Recibe beneficios completos?",
      o: [
        "No — porque puede trabajar como profesor de medicina, tiene otra fuente de ingresos disponible",
        "Sí — la definición de Ocupación Propia paga si no puede desempeñar su ocupación específica (cirugía), sin importar si puede trabajar en otro campo",
        "Solo recibe el 50% de los beneficios como compromiso",
        "No — necesitaría una definición de 'Incapacidad Presunta' para calificar en este caso"
      ],
      a: 1,
      trampa: "La capacidad de trabajar en OTRO campo es exactamente lo que la definición de Ocupación Propia ignora — por diseño, protege la ocupación específica del asegurado.",
      correcto: "Bajo Ocupación Propia, el cirujano SÍ recibe beneficios completos porque no puede realizar las funciones esenciales de SU PROPIA ocupación (cirugía) — el hecho de que pueda enseñar es irrelevante bajo esta definición favorable. [VERIFICADO — aplicación directa de la definición estándar]",
      incorrectos: [
        "A) Bajo Ocupación Propia, la disponibilidad de otro trabajo NO afecta el derecho a beneficios completos.",
        "C) No existe un pago parcial del 50% bajo esta definición — es beneficio completo o ninguno según califique.",
        "D) La Incapacidad Presunta no es necesaria aquí — la definición de Ocupación Propia ya cubre este escenario adecuadamente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es una definición o mecanismo reconocido en pólizas de incapacidad EXCEPTO:",
      o: [
        "Ocupación Propia — paga si no puede realizar su ocupación específica",
        "Cualquier Ocupación — exige que no pueda desempeñar ningún trabajo razonable",
        "Incapacidad Recurrente — recaída de la misma causa tratada como continuación",
        "Incapacidad Universal — cubre cualquier condición médica sin excepción ni período de eliminación"
      ],
      a: 3,
      trampa: "'Incapacidad Universal' suena plausible dentro del contexto pero no es un término ni mecanismo reconocido en pólizas de incapacidad estándar.",
      correcto: "'Incapacidad Universal' no es un término reconocido en la industria de seguros de incapacidad. Las definiciones estándar son Ocupación Propia, Cualquier Ocupación, y sus variantes (Recurrente, Residual, Presunta). [VERIFICADO — no existe tal término estándar]",
      incorrectos: [
        "A) Ocupación Propia SÍ es una definición estándar reconocida.",
        "B) Cualquier Ocupación SÍ es una definición estándar reconocida.",
        "C) Incapacidad Recurrente SÍ es un mecanismo estándar reconocido."
      ]
    }
  ]
},

{
  id: "nivel1_003",
  area: "provisiones",
  concepto: "Coordinación de Beneficios en Seguros de Salud",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una asegurada tiene dos pólizas médicas que cubren la misma cirugía. Ninguna póliza debe permitir que la asegurada obtenga un beneficio superior al gasto cubierto real. ¿Qué provisión resuelve principalmente esta situación?",
      o: [
        "Relación de ingresos con el seguro",
        "Coordinación de beneficios",
        "Otras coberturas con la misma aseguradora",
        "Período de eliminación"
      ],
      a: 1,
      trampa: "Existen varias provisiones relacionadas con 'evitar sobre-cobertura' que se confunden entre sí — la que aplica específicamente a MÚLTIPLES PÓLIZAS DE SALUD es Coordinación de Beneficios.",
      correcto: "COORDINACIÓN DE BENEFICIOS (COB) = provisión estándar que evita que el asegurado con múltiples pólizas de salud reciba colectivamente MÁS del 100% del gasto cubierto real, y establece cuál plan paga primero (primario) y cuál paga después (secundario). [VERIFICADO — provisión estándar y ampliamente regulada]",
      incorrectos: [
        "A) 'Relación de Ingresos con el Seguro' (Insurance with Relation to Earnings) aplica específicamente a pólizas de INGRESOS POR INCAPACIDAD, no a gastos médicos.",
        "C) 'Otras Coberturas con la Misma Aseguradora' es una provisión más limitada — solo cuando ambas pólizas son de la misma compañía.",
        "D) Período de Eliminación es el tiempo de espera antes de que comiencen los beneficios — no relacionado con múltiples pólizas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿En qué se diferencia la provisión de Coordinación de Beneficios de la provisión de Relación de Ingresos con el Seguro (Insurance with Relation to Earnings)?",
      o: [
        "Son idénticas — ambas aplican exclusivamente a pólizas de gastos médicos",
        "Coordinación de Beneficios aplica a pólizas de GASTOS MÉDICOS con cobertura duplicada; Relación de Ingresos aplica específicamente a pólizas de INGRESOS POR INCAPACIDAD para evitar que el asegurado gane más incapacitado que trabajando",
        "Relación de Ingresos aplica a gastos médicos; Coordinación de Beneficios aplica a incapacidad",
        "Ambas provisiones fueron eliminadas por la regulación federal moderna"
      ],
      a: 1,
      trampa: "Ambas provisiones comparten el mismo PROPÓSITO general (evitar sobre-compensación), pero aplican a TIPOS DE PÓLIZA diferentes — gastos médicos versus ingresos por incapacidad.",
      correcto: "COORDINACIÓN DE BENEFICIOS = gastos médicos con múltiples pólizas, evita exceder el 100% del gasto real. RELACIÓN DE INGRESOS CON EL SEGURO = ingresos por incapacidad con múltiples pólizas, evita que el asegurado reciba más incapacitado (sumando todas sus pólizas) que su ingreso normal trabajando — desincentivo para prolongar reclamaciones. [VERIFICADO — distinción conceptual estándar]",
      incorrectos: [
        "A) No son idénticas — aplican a categorías de póliza diferentes.",
        "C) Esta descripción invierte las aplicaciones correctas de ambas provisiones.",
        "D) Ambas provisiones siguen siendo estándar y reconocidas en pólizas de salud modernas."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Pedro tiene cobertura médica bajo su propio empleo Y como dependiente en el plan de su esposa. Tiene una factura de $2,000. Bajo la regla estándar de Coordinación de Beneficios, ¿cuál plan paga primero?",
      o: [
        "El plan de la esposa, porque las esposas generalmente tienen prioridad",
        "El plan de Pedro en su propio empleo — el plan donde uno es TITULAR es generalmente primario",
        "Ambos planes pagan simultáneamente el 50% cada uno sin ningún orden",
        "Pedro elige libremente cuál plan prefiere que pague primero"
      ],
      a: 1,
      trampa: "La regla no depende del género ni de quién 'parece' tener prioridad — depende específicamente de si la persona es TITULAR o DEPENDIENTE en cada plan.",
      correcto: "La regla estándar de COB establece que el plan donde la persona es TITULAR (subscriber) es generalmente PRIMARIO. El plan donde figura como DEPENDIENTE es generalmente secundario. El plan de Pedro en su propio empleo (donde es titular) paga primero. [VERIFICADO — regla estándar de la industria]",
      incorrectos: [
        "A) La regla no se basa en género — se basa en el estatus de titular versus dependiente.",
        "C) No existe una división automática al 50% — hay un orden secuencial de primario y secundario.",
        "D) Pedro generalmente no puede elegir libremente el orden de pago bajo las reglas estándar de COB."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "En el contexto de Coordinación de Beneficios, el plan que paga DESPUÉS del plan primario, cubriendo generalmente lo que el primario no cubrió (hasta el límite del gasto real), se denomina:",
      o: [
        "Plan excedente (Excess plan)",
        "Plan secundario",
        "Plan complementario obligatorio",
        "Plan de respaldo terciario"
      ],
      a: 1,
      trampa: "Existen varios términos que podrían sonar plausibles, pero el término técnico estándar es simplemente 'plan secundario'.",
      correcto: "PLAN SECUNDARIO = el plan que paga DESPUÉS del plan primario en la secuencia de Coordinación de Beneficios, cubriendo generalmente los gastos restantes hasta el límite del gasto cubierto real total — nunca permitiendo que la suma exceda el 100% del gasto. [VERIFICADO — terminología estándar de COB]",
      incorrectos: [
        "A) 'Plan excedente' no es el término técnico estándar utilizado en Coordinación de Beneficios.",
        "C) 'Plan complementario obligatorio' no es terminología estándar de COB.",
        "D) 'Plan de respaldo terciario' no es terminología estándar — la estructura básica es primario/secundario."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Cuál es el propósito regulatorio PRINCIPAL detrás de exigir la provisión de Coordinación de Beneficios en pólizas de salud?",
      o: [
        "Aumentar las ganancias de las aseguradoras al reducir pagos totales",
        "Prevenir el enriquecimiento injusto del asegurado y controlar el riesgo moral que generaría cobrar más del gasto real mediante múltiples pólizas",
        "Simplificar el papeleo administrativo sin ningún propósito de protección al consumidor",
        "Garantizar que el asegurado siempre reciba al menos el doble de su gasto real"
      ],
      a: 1,
      trampa: "El propósito no es beneficiar a la aseguradora ni es meramente administrativo — es un principio de protección del sistema asegurador en su conjunto.",
      correcto: "La COB existe principalmente para PREVENIR el enriquecimiento injusto y el riesgo moral que se generaría si un asegurado pudiera cobrar múltiples veces por el mismo gasto médico mediante varias pólizas — mantiene la integridad del principio de indemnización en seguros de salud. [VERIFICADO — principio regulatorio fundamental]",
      incorrectos: [
        "A) Aunque reduce pagos totales combinados, el propósito regulatorio no es simplemente beneficiar a las aseguradoras.",
        "C) Tiene un propósito de protección sustantivo — no es meramente administrativo.",
        "D) El propósito es exactamente lo OPUESTO — evitar que el asegurado reciba más de su gasto real, no garantizar el doble."
      ]
    }
  ]
},

{
  id: "nivel1_004",
  area: "generales",
  concepto: "Prácticas Desleales — Difamación, Coacción, Churning vs Twisting",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un productor publica un anuncio indicando falsamente que una aseguradora competidora está al borde de la quiebra. ¿Qué práctica prohibida representa esto?",
      o: [
        "Rebating",
        "Difamación (Defamation)",
        "Coacción (Coercion)",
        "Twisting"
      ],
      a: 1,
      trampa: "Difamación se confunde con Twisting porque ambas involucran declaraciones falsas — pero Difamación ataca a la COMPAÑÍA COMPETIDORA en general, no busca específicamente inducir el reemplazo de una póliza específica de un cliente.",
      correcto: "DIFAMACIÓN (Defamation) = hacer declaraciones falsas y maliciosas sobre la condición financiera o práctica de negocios de OTRA aseguradora o agente, con el propósito de dañar su reputación. Es un ataque general a la competencia, no dirigido a inducir un reemplazo específico. [VERIFICADO — práctica desleal reconocida]",
      incorrectos: [
        "A) Rebating es devolver comisión o dar valor para inducir la compra — no declaraciones falsas sobre un competidor.",
        "C) Coacción implica usar amenazas o presión indebida — no declaraciones falsas sobre solvencia de un competidor.",
        "D) Twisting requiere inducir específicamente el reemplazo de una póliza de UN CLIENTE — no es un ataque general de reputación como este anuncio."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todos los siguientes son ejemplos reconocidos de prácticas desleales de liquidación de siniestros EXCEPTO:",
      o: [
        "No efectuar liquidaciones rápidas, justas y equitativas de una reclamación",
        "Rechazar una reclamación sin proporcionar la base de la denegación",
        "Actuar con responsabilidad fiduciaria en el manejo de fondos del cliente",
        "Ofrecer una liquidación sustancialmente inferior a la que un tribunal razonable otorgaría"
      ],
      a: 2,
      trampa: "'Actuar con responsabilidad fiduciaria' suena como si pudiera ser una violación en el contexto de una lista de prácticas desleales, pero es exactamente el comportamiento CORRECTO y ético esperado.",
      correcto: "Actuar con responsabilidad fiduciaria es precisamente el comportamiento CORRECTO que se espera del agente — no es una práctica desleal, sino su opuesto. Las demás opciones sí son ejemplos reconocidos de prácticas desleales de liquidación de siniestros. [VERIFICADO — principio ético fundamental]",
      incorrectos: [
        "A) Esta SÍ es una práctica desleal de liquidación de siniestros reconocida.",
        "B) Esta SÍ es una práctica desleal de liquidación de siniestros reconocida.",
        "D) Esta SÍ es una práctica desleal de liquidación de siniestros reconocida."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Un productor cambia repetidamente las pólizas de un mismo cliente para generar nuevas comisiones, aunque el cliente no obtenga ventajas reales. Todos los cambios son con la MISMA compañía aseguradora. ¿Qué práctica representa?",
      o: [
        "Twisting",
        "Churning",
        "Rebating",
        "Coacción"
      ],
      a: 1,
      trampa: "La clave del escenario es 'con la MISMA compañía' — eso define específicamente Churning, no Twisting (que requiere cambio de compañía).",
      correcto: "CHURNING = cambios innecesarios de póliza realizados DENTRO de la MISMA compañía aseguradora, generalmente motivados por generar comisiones adicionales sin beneficio real para el cliente. [VERIFICADO — práctica desleal reconocida]",
      incorrectos: [
        "A) Twisting requiere específicamente un cambio hacia una compañía DIFERENTE — aquí es la misma compañía.",
        "C) Rebating implica devolver comisión o dar valor — no está descrito en este escenario.",
        "D) Coacción implica amenazas o presión indebida — no está descrito en este escenario."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Comparando Difamación con Tergiversación (Misrepresentation), ¿cuál es la diferencia CLAVE en el objetivo de cada práctica desleal?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción práctica",
        "Difamación ataca la reputación de OTRA compañía o agente; Tergiversación hace declaraciones falsas sobre CARACTERÍSTICAS DE UN PRODUCTO propio para inducir su compra",
        "Tergiversación ataca competidores; Difamación describe productos falsamente",
        "Ambas están permitidas si el agente cree genuinamente que la información es correcta"
      ],
      a: 1,
      trampa: "Ambas involucran declaraciones falsas, pero el OBJETIVO de cada declaración es diferente: atacar a un tercero versus promover el propio producto.",
      correcto: "DIFAMACIÓN = declaraciones falsas sobre OTRA aseguradora/agente para dañar su reputación. TERGIVERSACIÓN = declaraciones falsas sobre las CARACTERÍSTICAS DEL PROPIO PRODUCTO (ej: decir que los dividendos están garantizados cuando no lo están) para inducir una compra. [VERIFICADO — distinción conceptual estándar entre ambas prácticas]",
      incorrectos: [
        "A) NO son sinónimos — tienen objetivos y objetos de la declaración falsa completamente distintos.",
        "C) Esta descripción invierte las definiciones correctas.",
        "D) Ninguna de las dos prácticas está permitida — ambas son ilegales independientemente de la creencia subjetiva del agente en algunos casos, y la buena fe no siempre exime de responsabilidad."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "Un agente le dice a un cliente potencial: 'Los dividendos de esta póliza están garantizados y usted definitivamente los recibirá cada año.' ¿Qué práctica desleal representa esta afirmación, considerando que los dividendos NUNCA están garantizados?",
      o: [
        "Difamación, porque menciona a otra compañía implícitamente",
        "Tergiversación (Misrepresentation), porque hace una declaración falsa sobre una característica del producto",
        "Coacción, porque presiona al cliente a comprar",
        "Rebating, porque promete un beneficio adicional"
      ],
      a: 1,
      trampa: "Garantizar algo que estructuralmente NUNCA puede garantizarse (los dividendos dependen del desempeño de la aseguradora) es el ejemplo clásico de tergiversación sobre características del producto.",
      correcto: "TERGIVERSACIÓN = declarar falsamente que los dividendos están garantizados, cuando estructuralmente los dividendos de pólizas participantes NUNCA están garantizados (dependen del desempeño de la aseguradora). Es una declaración falsa sobre una característica material del producto. [VERIFICADO — ejemplo clásico y reconocido de tergiversación]",
      incorrectos: [
        "A) No hay mención de ninguna otra compañía en esta declaración.",
        "C) No hay evidencia de amenazas o presión indebida — es una declaración falsa sobre el producto, no coacción.",
        "D) No se describe ningún reembolso de comisión o valor adicional entregado — es una declaración falsa, no un incentivo financiero."
      ]
    }
  ]
},

{
  id: "nivel1_005",
  area: "generales",
  concepto: "Coaseguro, Reaseguro y Estructuras de Aseguradoras",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una empresa aseguradora quiere protegerse frente a pérdidas financieras causadas por reclamaciones extraordinariamente elevadas en una línea de negocio. ¿Qué mecanismo utiliza principalmente?",
      o: [
        "Coaseguro",
        "Reaseguro",
        "Replacement",
        "Subrogación"
      ],
      a: 1,
      trampa: "Coaseguro y Reaseguro suenan similares pero operan en niveles completamente distintos: uno es entre asegurado-aseguradora, el otro es entre aseguradora-aseguradora.",
      correcto: "REASEGURO (Reinsurance) = mecanismo mediante el cual una aseguradora ('cedente') transfiere parte de su riesgo a OTRA aseguradora ('reaseguradora') para protegerse contra pérdidas extraordinariamente elevadas o concentración de riesgo. Es un seguro entre compañías aseguradoras. [VERIFICADO — mecanismo fundamental de la industria]",
      incorrectos: [
        "A) Coaseguro es la división de costos ENTRE el asegurado y su propia aseguradora (ej: 80/20) — no entre aseguradoras.",
        "C) Replacement (reemplazo) se refiere al reemplazo de pólizas de un cliente — concepto completamente distinto.",
        "D) Subrogación es el derecho de la aseguradora de recuperar pagos de un tercero responsable — no protección contra pérdidas propias elevadas."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia fundamental entre Coaseguro y Reaseguro?",
      o: [
        "Son términos idénticos usados indistintamente en la industria",
        "Coaseguro divide el costo entre el asegurado individual y su aseguradora; Reaseguro divide el riesgo entre dos compañías aseguradoras",
        "Reaseguro aplica solo a personas; Coaseguro aplica solo a empresas",
        "Ambos mecanismos fueron reemplazados por el sistema moderno de deducibles"
      ],
      a: 1,
      trampa: "La similitud fonética de ambos términos ('-seguro') genera confusión, pero operan en niveles jerárquicos completamente distintos del sistema de seguros.",
      correcto: "COASEGURO = división de costos entre el ASEGURADO INDIVIDUAL y su aseguradora (nivel consumidor-empresa). REASEGURO = división del riesgo entre DOS COMPAÑÍAS ASEGURADORAS (nivel empresa-empresa), protegiendo a la aseguradora primaria de pérdidas catastróficas. [VERIFICADO — distinción fundamental de estructura del mercado]",
      incorrectos: [
        "A) NO son términos idénticos — operan en niveles completamente distintos del sistema.",
        "C) Ninguno de los dos mecanismos está restringido exclusivamente a personas o empresas de esa manera.",
        "D) Ambos mecanismos siguen siendo estándar y ampliamente utilizados en la industria moderna."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una organización ofrece seguros únicamente a sus miembros y funciona bajo un sistema fraternal, proporcionando beneficios de acuerdo con su estructura organizativa (logias). ¿Qué tipo de entidad aseguradora es?",
      o: [
        "Mutualista (Mutual Company)",
        "Compañía por acciones (Stock Company)",
        "Sociedad fraternal de beneficios (Fraternal Benefit Society)",
        "Recíproca (Reciprocal)"
      ],
      a: 2,
      trampa: "Se confunde con Mutualista porque ambas son propiedad de los asegurados/miembros, pero la Sociedad Fraternal tiene una estructura organizativa específica adicional (logias/capítulos) y limita membresía.",
      correcto: "SOCIEDAD FRATERNAL DE BENEFICIOS = organización que ofrece seguros EXCLUSIVAMENTE a sus miembros, opera bajo un sistema de logias o capítulos, y generalmente tiene propósitos sociales/fraternales además de proporcionar seguros. [VERIFICADO — tipo de entidad reconocido en la regulación de seguros]",
      incorrectos: [
        "A) Mutualista es propiedad de TODOS sus asegurados, pero no requiere una estructura fraternal específica de logias ni limita membresía por afiliación.",
        "B) Compañía por Acciones es propiedad de accionistas — completamente distinta de una organización de membresía fraternal.",
        "D) Recíproca es una asociación de suscriptores que se aseguran mutuamente a través de un apoderado — estructura diferente a la fraternal."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un individuo posee una póliza de gastos médicos mayores con un deducible de $5,000 y una cláusula de coaseguro 80/20. Se incurre en un total de $15,000 en gastos médicos cubiertos. ¿Cuánto debe pagar el ASEGURADO en total?",
      o: [
        "$5,000 — solo el deducible",
        "$7,000 — deducible más el 20% del coaseguro sobre el remanente",
        "$3,000 — solo el coaseguro",
        "$15,000 — el total completo"
      ],
      a: 1,
      trampa: "El cálculo requiere DOS pasos: primero el deducible completo, luego el coaseguro solo sobre el monto RESTANTE después del deducible — un error común es aplicar el coaseguro al total original.",
      correcto: "Cálculo: Deducible $5,000. Remanente = $15,000 - $5,000 = $10,000. Coaseguro 20% del asegurado sobre ese remanente = $2,000. Total pagado por el asegurado = $5,000 + $2,000 = $7,000. [VERIFICADO — mecánica matemática estándar de coaseguro]",
      incorrectos: [
        "A) $5,000 omite completamente el coaseguro sobre el remanente después del deducible.",
        "C) $3,000 no corresponde al cálculo correcto de ningún componente de este escenario.",
        "D) $15,000 sería si no existiera ninguna cobertura de seguro — incorrecto dado el deducible y coaseguro descritos."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es el propósito PRINCIPAL de una cláusula de coaseguro en una póliza de gastos médicos mayores?",
      o: [
        "Aumentar las ganancias de la aseguradora sin ningún propósito relacionado con el comportamiento del asegurado",
        "Desalentar la sobreutilización de la cobertura del seguro, haciendo que el asegurado comparta responsabilidad económica en cada reclamación",
        "Eliminar completamente la necesidad de un deducible en la póliza",
        "Garantizar que la aseguradora nunca pague más del 50% de ningún siniestro"
      ],
      a: 1,
      trampa: "El coaseguro tiene un propósito de comportamiento (riesgo moral) además del financiero — no es simplemente una forma de generar más ganancia sin justificación.",
      correcto: "El propósito principal del coaseguro es DESALENTAR LA SOBREUTILIZACIÓN de los servicios médicos cubiertos — al compartir el costo con cada reclamación, el asegurado tiene incentivo económico para usar los servicios de manera más responsable, reduciendo el riesgo moral. [VERIFICADO — principio fundamental de diseño del coaseguro]",
      incorrectos: [
        "A) El propósito tiene una justificación de comportamiento (desalentar sobreutilización) — no es arbitrario.",
        "C) El coaseguro y el deducible son mecanismos complementarios, no mutuamente excluyentes — el coaseguro no elimina la necesidad del deducible.",
        "D) No existe una regla universal de que la aseguradora nunca pague más del 50% — los porcentajes de coaseguro varían según el diseño específico del plan (ej: 80/20, 70/30)."
      ]
    }
  ]
},

{
  id: "nivel1_006",
  area: "provisiones",
  concepto: "Opciones de No Caducidad — Aplicación Práctica",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un asegurado deja de pagar las primas de una póliza de vida. La póliza tiene suficiente valor en efectivo acumulado. ¿Qué opción permite la cobertura por un período de tiempo LIMITADO sin seguir pagando primas, manteniendo el MISMO monto de beneficio original?",
      o: [
        "Pago reducido (Reduced Paid-Up)",
        "Término extendido (Extended Term)",
        "Rescate en efectivo (Cash Surrender)",
        "Préstamo sobre la póliza (Policy Loan)"
      ],
      a: 1,
      trampa: "'Mismo monto pero tiempo limitado' es la firma distintiva del Término Extendido — se confunde con Pago Reducido, que es 'monto menor pero de por vida'.",
      correcto: "TÉRMINO EXTENDIDO (Extended Term Insurance) = usa el valor en efectivo acumulado para comprar seguro de TÉRMINO por el MISMO monto nominal del beneficio original, durante el tiempo que ese valor pueda financiar actuarialmente. [VERIFICADO — opción de no caducidad estándar]",
      incorrectos: [
        "A) Pago Reducido mantiene cobertura PERMANENTE (de por vida) pero con un beneficio MENOR — es lo opuesto en cuanto a duración/monto.",
        "C) Rescate en Efectivo termina completamente la cobertura a cambio de recibir el valor en efectivo — no mantiene ninguna cobertura.",
        "D) Préstamo sobre la Póliza no es una opción de no caducidad — es un mecanismo separado que mantiene la póliza original vigente mientras se paga la prima con un préstamo automático."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Una mujer de 47 años posee una póliza de vida permanente. Deja de pagar las primas. No desea seguir pagando, pero SÍ quiere que la póliza permanezca vigente de forma PERMANENTE, aunque el beneficio por fallecimiento sea MENOR. ¿Qué opción de no caducidad satisface mejor su objetivo?",
      o: [
        "Seguro prorrogado (Extended Term)",
        "Préstamo automático para el pago de primas",
        "Seguro saldado reducido (Reduced Paid-Up)",
        "Rescate en efectivo"
      ],
      a: 2,
      trampa: "La combinación específica 'permanente + monto menor + sin más pagos' señala inequívocamente Pago Reducido — cualquier otra opción falla en al menos uno de esos tres requisitos.",
      correcto: "SEGURO SALDADO REDUCIDO (Reduced Paid-Up) = exactamente lo que ella busca: usa el valor en efectivo como prima única para comprar una póliza PERMANENTE (de por vida) PAGADA COMPLETAMENTE (sin más primas), con un beneficio de muerte MENOR que el original. [VERIFICADO — aplicación directa de la opción estándar]",
      incorrectos: [
        "A) Término Extendido mantiene el MISMO monto pero solo por tiempo LIMITADO — no satisface su deseo de permanencia.",
        "B) El préstamo automático de prima sigue requiriendo eventualmente el pago o agotará el valor — no es una opción de no caducidad permanente por diseño.",
        "D) Rescate en Efectivo termina TODA la cobertura — contrario a su deseo de mantener la póliza vigente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado deja de pagar las primas de una póliza de vida que tiene suficiente valor en efectivo acumulado. ¿Qué opción permite la cobertura por un período de tiempo LIMITADO sin seguir pagando, usando el valor acumulado como prima única de un producto de TÉRMINO?",
      o: [
        "Pago reducido",
        "Término extendido",
        "Rescate en efectivo",
        "Préstamo sobre la póliza"
      ],
      a: 1,
      trampa: "Repetición intencional del concepto de Término Extendido con redacción diferente para confirmar comprensión, no memorización de una frase específica.",
      correcto: "TÉRMINO EXTENDIDO usa el valor en efectivo acumulado como PRIMA ÚNICA para comprar un producto de seguro de TÉRMINO (temporal) por el mismo monto de beneficio original, durante el tiempo que ese valor único pueda financiar actuarialmente esa cobertura temporal. [VERIFICADO — mecánica estándar]",
      incorrectos: [
        "A) Pago Reducido resulta en cobertura PERMANENTE con monto MENOR — características opuestas a las descritas.",
        "C) Rescate en Efectivo termina la cobertura completamente a cambio de recibir el dinero — no mantiene protección.",
        "D) Préstamo sobre la Póliza es un mecanismo diferente que no convierte la póliza en un producto de término."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "QUIEN_PAGA",
      q: "En la opción de Pago Reducido (Reduced Paid-Up), ¿qué determina específicamente el MONTO del nuevo beneficio de muerte reducido?",
      o: [
        "El total de todas las primas que el asegurado pagó durante la vigencia de la póliza",
        "El valor en efectivo acumulado, usado como prima única para comprar la cantidad de seguro permanente pagado que ese valor pueda comprar a la edad actual",
        "El beneficio de muerte original de la póliza sin ningún cambio",
        "Un porcentaje fijo del 50% establecido por regulación estatal en todos los casos"
      ],
      a: 1,
      trampa: "El monto NO es arbitrario ni fijo — se calcula actuarialmente según cuánto seguro permanente puede comprar el valor en efectivo disponible a la edad actual del asegurado.",
      correcto: "El valor en efectivo acumulado se usa como PRIMA ÚNICA para comprar la mayor cantidad de seguro PERMANENTE PAGADO que ese valor pueda comprar actuarialmente, considerando la edad actual del asegurado. Mayor valor en efectivo generalmente resulta en mayor beneficio reducido. [VERIFICADO — mecánica actuarial estándar]",
      incorrectos: [
        "A) El total histórico de primas pagadas no es el factor de cálculo directo — es el valor en efectivo ACTUAL acumulado.",
        "C) El beneficio SE REDUCE respecto al original — esa es la característica definitoria de esta opción.",
        "D) No existe un porcentaje fijo regulatorio del 50% — el cálculo es actuarial y varía según cada caso individual."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todas las siguientes son opciones de no caducidad reconocidas EXCEPTO:",
      o: [
        "Rescate en efectivo",
        "Término extendido",
        "Opción de préstamo automático de la prima",
        "Seguro saldado reducido"
      ],
      a: 2,
      trampa: "El préstamo automático de prima (Automatic Premium Loan) es un mecanismo relacionado y frecuentemente estudiado junto a las opciones de no caducidad, pero técnicamente es una provisión SEPARADA — no una de las tres opciones formales de no caducidad.",
      correcto: "Las tres opciones formales de no caducidad son: Rescate en Efectivo, Término Extendido, y Seguro Saldado Reducido. El Préstamo Automático de Prima (APL) es una provisión DISTINTA que usa el valor en efectivo para pagar automáticamente primas vencidas, manteniendo la póliza ORIGINAL vigente — no es en sí misma una de las tres opciones formales de no caducidad. [VERIFICADO — distinción técnica reconocida en la estructura de provisiones]",
      incorrectos: [
        "A) Rescate en Efectivo SÍ es una opción formal de no caducidad reconocida.",
        "B) Término Extendido SÍ es una opción formal de no caducidad reconocida.",
        "D) Seguro Saldado Reducido SÍ es una opción formal de no caducidad reconocida."
      ]
    }
  ]
},

{
  id: "nivel1_007",
  area: "generales",
  concepto: "Ley de los Grandes Números y Suscripción",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes afirmaciones describe mejor la Ley de los Grandes Números?",
      o: [
        "Garantiza que todas las reclamaciones futuras serán exactamente iguales entre sí",
        "Permite estimar con mayor precisión las pérdidas futuras utilizando un gran número de riesgos similares agrupados",
        "Elimina completamente el riesgo para la aseguradora en cualquier circunstancia",
        "Sustituye completamente el proceso de suscripción individual de cada solicitante"
      ],
      a: 1,
      trampa: "La Ley de los Grandes Números se confunde con la eliminación total del riesgo — en realidad solo mejora la PREDICCIÓN estadística, no elimina la incertidumbre individual.",
      correcto: "La Ley de los Grandes Números establece que, a medida que aumenta el número de unidades expuestas a un riesgo similar, más precisa y predecible se vuelve la estimación de las pérdidas AGREGADAS futuras del grupo — es un principio ESTADÍSTICO, no una garantía de igualdad ni eliminación de riesgo. [VERIFICADO — principio fundamental y estable de la ciencia actuarial]",
      incorrectos: [
        "A) No garantiza reclamaciones iguales — permite predicción estadística agregada, no uniformidad individual.",
        "C) No elimina el riesgo — mejora la PREDICTIBILIDAD del riesgo agregado, el riesgo individual sigue existiendo.",
        "D) No sustituye la suscripción individual — la suscripción sigue siendo necesaria para clasificar riesgos individuales dentro del grupo agregado."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál término define con exactitud la evaluación de la información de una solicitud de seguro de vida por parte del asegurador para determinar si acepta el riesgo y a qué prima?",
      o: [
        "Ley de los grandes números",
        "Clasificación del riesgo (Underwriting)",
        "Coordinación de beneficios",
        "Principio de indemnización"
      ],
      a: 1,
      trampa: "Se confunde con la Ley de los Grandes Números porque ambos conceptos están relacionados con el análisis de riesgo, pero uno es un principio ESTADÍSTICO general y el otro es el PROCESO ESPECÍFICO de evaluar una solicitud individual.",
      correcto: "CLASIFICACIÓN DEL RIESGO (Underwriting) = el proceso específico mediante el cual la aseguradora evalúa la información de una solicitud individual para determinar si acepta el riesgo, y bajo qué clasificación y prima. [VERIFICADO — definición estándar del proceso de suscripción]",
      incorrectos: [
        "A) La Ley de los Grandes Números es el principio estadístico general que hace POSIBLE el seguro — no el proceso específico de evaluar una solicitud individual.",
        "C) Coordinación de Beneficios se refiere a múltiples pólizas de salud — concepto no relacionado con la evaluación inicial de una solicitud.",
        "D) Principio de Indemnización se refiere a restaurar económicamente sin generar ganancia — no es el proceso de evaluación de solicitudes."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cómo se relacionan la Ley de los Grandes Números y el proceso de Suscripción (Underwriting) dentro del funcionamiento general del seguro?",
      o: [
        "Son completamente independientes y no tienen ninguna relación funcional entre sí",
        "La Ley de los Grandes Números permite predecir pérdidas AGREGADAS del grupo completo; la Suscripción clasifica riesgos INDIVIDUALES dentro de ese grupo para que la predicción agregada siga siendo válida y las primas sean equitativas",
        "La Suscripción reemplazó completamente a la Ley de los Grandes Números en la práctica moderna",
        "Ambos conceptos aplican exclusivamente a seguros de propiedad, nunca a seguros de vida o salud"
      ],
      a: 1,
      trampa: "Ambos conceptos trabajan JUNTOS de forma complementaria — uno a nivel macro (grupo) y otro a nivel micro (individuo) — no son competidores ni son irrelevantes entre sí.",
      correcto: "Ambos conceptos son COMPLEMENTARIOS: la Ley de los Grandes Números funciona a nivel MACRO (predice pérdidas del grupo agregado con precisión estadística), mientras la Suscripción funciona a nivel MICRO (clasifica cada riesgo individual apropiadamente) para que los grupos resultantes sean suficientemente homogéneos y la predicción agregada siga siendo válida y las primas equitativas entre asegurados de riesgo similar. [VERIFICADO — relación funcional fundamental del sistema de seguros]",
      incorrectos: [
        "A) Tienen una relación funcional directa y complementaria — no son independientes entre sí.",
        "C) La Suscripción no reemplazó a la Ley de los Grandes Números — ambos siguen operando simultáneamente y de forma complementaria.",
        "D) Ambos conceptos aplican transversalmente a todos los tipos de seguro — vida, salud, propiedad, responsabilidad civil — no están limitados a propiedad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué identificaría típicamente el Buró de Información Médica (MIB) en su reporte a una aseguradora miembro?",
      o: [
        "Un diagnóstico médico definitivo confirmado por especialistas",
        "Una señal codificada relacionada con hallazgos de solicitudes anteriores, como por ejemplo resultados positivos en exámenes previos de sustancias",
        "El expediente médico completo del solicitante desde su nacimiento",
        "La calificación crediticia del solicitante"
      ],
      a: 1,
      trampa: "El MIB no provee diagnósticos definitivos ni expedientes completos — provee señales CODIFICADAS de hallazgos previos que requieren investigación adicional del suscriptor.",
      correcto: "El MIB identifica señales CODIFICADAS basadas en información reportada en solicitudes anteriores a compañías miembros — por ejemplo, un hallazgo positivo en un examen previo de sustancias (como marihuana) en una solicitud anterior. Estas señales alertan al suscriptor para investigar más, pero NO constituyen diagnósticos definitivos. [VERIFICADO — función estándar del MIB]",
      incorrectos: [
        "A) El MIB no provee diagnósticos definitivos — solo señales codificadas de alerta.",
        "C) El MIB no contiene el expediente médico completo — es un sistema de señales limitadas, no un archivo médico integral.",
        "D) La calificación crediticia no es información que reporte el MIB — eso correspondería a un reporte de crédito o de inspección separado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un intercambio de valores desiguales ocurre cuando un asegurado paga $900 en primas durante seis meses y luego fallece, recibiendo su beneficiario $500,000. ¿Qué característica del contrato de seguro refleja este intercambio de valores desiguales?",
      o: [
        "Contrato de adhesión",
        "Aleatorio (Aleatory)",
        "Unilateral",
        "Contrato condicional"
      ],
      a: 1,
      trampa: "Las cuatro características son reales del contrato de seguro, pero la que específicamente describe el INTERCAMBIO DE VALORES DESIGUALES es 'Aleatorio' — las demás describen aspectos diferentes del contrato.",
      correcto: "ALEATORIO (Aleatory) = característica que describe específicamente que las cantidades intercambiadas entre las partes son DESIGUALES e INCIERTAS — el asegurado puede pagar poco y recibir mucho (o pagar durante años y no recibir nada). Este es exactamente el intercambio desigual descrito en el escenario. [VERIFICADO — característica fundamental del contrato de seguro]",
      incorrectos: [
        "A) Contrato de Adhesión describe QUIÉN redacta los términos (la aseguradora) — no el intercambio de valores.",
        "C) Unilateral describe que solo UNA parte (la aseguradora) hace una promesa legalmente exigible — no específicamente el desequilibrio de valores.",
        "D) Contrato Condicional describe que ciertas condiciones deben cumplirse para que exista obligación de pago — no el desequilibrio específico de valores intercambiados."
      ]
    }
  ]
},

{
  id: "nivel1_008",
  area: "provisiones",
  concepto: "Restablecimiento de Pólizas",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una póliza permite al asegurado reactivar la cobertura después de haber caducado por falta de pago, siempre que cumpla ciertos requisitos. ¿De qué derecho contractual se trata?",
      o: [
        "Conversión",
        "Restablecimiento (Reinstatement)",
        "Renovación",
        "Anualización"
      ],
      a: 1,
      trampa: "Se confunde con Conversión (que es cambiar de término a permanente) y con Renovación (que es continuar un término que vence) — Restablecimiento es específicamente reactivar algo que YA CADUCÓ.",
      correcto: "RESTABLECIMIENTO (Reinstatement) = derecho a REACTIVAR una póliza que ya CADUCÓ por falta de pago, generalmente sujeto a: presentar evidencia de asegurabilidad, pagar las primas atrasadas (a veces con interés), y hacerlo dentro de un plazo determinado. [VERIFICADO — provisión estándar reconocida]",
      incorrectos: [
        "A) Conversión es cambiar un seguro de TÉRMINO a PERMANENTE — no reactivar una póliza caducada.",
        "C) Renovación es continuar la cobertura de una póliza de término VIGENTE que está por vencer — no una que ya caducó.",
        "D) Anualización es convertir el capital acumulado de una anualidad en pagos periódicos — concepto completamente no relacionado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes provisiones REQUIERE típicamente evidencia de asegurabilidad después de que la póliza ya caducó?",
      o: [
        "Restablecimiento",
        "Conversión de vida de grupo a individual",
        "Renovación de un término anual renovable",
        "Cambio de beneficiario revocable"
      ],
      a: 0,
      trampa: "Las otras tres opciones específicamente NO requieren evidencia de asegurabilidad (por diseño) — solo el Restablecimiento la exige, porque la póliza ya caducó y el riesgo pudo haber cambiado.",
      correcto: "RESTABLECIMIENTO requiere típicamente evidencia de asegurabilidad porque la póliza YA CADUCÓ y el estado de salud del asegurado pudo haber cambiado desde entonces — la aseguradora necesita reconfirmar el riesgo antes de reactivar la cobertura. [VERIFICADO — requisito estándar del restablecimiento]",
      incorrectos: [
        "B) Conversión de vida de grupo específicamente NO requiere evidencia de asegurabilidad — es su característica definitoria y valiosa.",
        "C) Renovación de término anual renovable generalmente NO requiere nueva evidencia de asegurabilidad para cada renovación dentro del período contratado.",
        "D) Cambio de beneficiario revocable es un derecho administrativo del titular que no involucra ningún tipo de evaluación de asegurabilidad."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "PROCEDIMIENTO",
      q: "¿Cuáles son GENERALMENTE los requisitos que debe cumplir un asegurado para restablecer (reinstatement) una póliza de vida que caducó por falta de pago?",
      o: [
        "Únicamente pagar las primas atrasadas, sin ningún otro requisito adicional",
        "Presentar evidencia de asegurabilidad, pagar las primas atrasadas (generalmente con interés), y hacerlo dentro de un plazo específico establecido por la póliza",
        "Esperar automáticamente un año completo antes de poder solicitar el restablecimiento",
        "Obtener aprobación específica y directa del Departamento de Seguros del estado"
      ],
      a: 1,
      trampa: "El restablecimiento no es tan simple como 'solo pagar lo atrasado' — involucra múltiples requisitos simultáneos que protegen a la aseguradora del riesgo de selección adversa.",
      correcto: "El restablecimiento GENERALMENTE requiere: 1) Evidencia de asegurabilidad (para confirmar que el riesgo sigue siendo aceptable), 2) Pago de las primas atrasadas (frecuentemente con interés), Y 3) Solicitarlo dentro de un plazo específico establecido en la póliza (frecuentemente varios años desde la caducidad). [VERIFICADO — requisitos estándar combinados del restablecimiento]",
      incorrectos: [
        "A) Solo pagar las primas atrasadas es insuficiente — se requiere también evidencia de asegurabilidad.",
        "C) No existe un requisito estándar de esperar automáticamente un año completo antes de poder solicitar el restablecimiento.",
        "D) El restablecimiento es un proceso entre el asegurado y la aseguradora — no requiere aprobación directa del Departamento de Seguros para cada caso individual."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia CLAVE entre Restablecimiento y Renovación de una póliza?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción",
        "Restablecimiento reactiva una póliza que YA CADUCÓ; Renovación continúa una póliza de término que está VIGENTE y próxima a vencer, generalmente sin requerir nueva evidencia de asegurabilidad",
        "Renovación reactiva pólizas caducadas; Restablecimiento continúa pólizas vigentes",
        "Ambos términos requieren siempre nueva evidencia de asegurabilidad sin excepción"
      ],
      a: 1,
      trampa: "El estado de la póliza al momento de la acción (caducada versus vigente) es la distinción fundamental entre ambos conceptos.",
      correcto: "RESTABLECIMIENTO = reactivar una póliza que YA CADUCÓ por falta de pago (requiere evidencia de asegurabilidad). RENOVACIÓN = continuar una póliza de término VIGENTE que está próxima a vencer su período (generalmente NO requiere nueva evidencia de asegurabilidad si el contrato lo garantiza). [VERIFICADO — distinción fundamental de estado contractual]",
      incorrectos: [
        "A) NO son sinónimos — aplican a estados completamente diferentes de la póliza (caducada versus vigente).",
        "C) Esta descripción invierte las definiciones correctas de ambos términos.",
        "D) La Renovación de un término garantizado renovable generalmente NO requiere nueva evidencia de asegurabilidad — esa es precisamente su ventaja característica."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Si una póliza restablecida es impugnada por tergiversación en la nueva evidencia de asegurabilidad presentada durante el restablecimiento, ¿cuándo GENERALMENTE comienza a contar un NUEVO período de incontestabilidad?",
      o: [
        "Nunca — el período de incontestabilidad original de la emisión inicial sigue aplicando sin cambios",
        "Generalmente desde la fecha del RESTABLECIMIENTO, aplicando específicamente a las declaraciones hechas en esa solicitud de restablecimiento",
        "Desde la fecha de nacimiento del asegurado",
        "El restablecimiento nunca puede ser impugnado bajo ninguna circunstancia"
      ],
      a: 1,
      trampa: "El restablecimiento generalmente genera un NUEVO período de incontestabilidad específico para las declaraciones hechas en ESA solicitud de restablecimiento — es un punto sutil pero importante.",
      correcto: "Generalmente, el restablecimiento de una póliza inicia un NUEVO período de incontestabilidad aplicable específicamente a las declaraciones y evidencia de asegurabilidad presentadas en la SOLICITUD DE RESTABLECIMIENTO — de forma similar (aunque conceptualmente distinta) al período original de la póliza. [REQUIERE VERIFICACIÓN — confirmar el tratamiento exacto de este mecanismo contra el texto de la póliza específica y la regulación de Florida vigente, ya que puede haber variaciones]",
      incorrectos: [
        "A) El período original de incontestabilidad no necesariamente cubre las nuevas declaraciones hechas específicamente en el restablecimiento.",
        "C) La fecha de nacimiento no tiene relación con el cálculo de períodos de incontestabilidad.",
        "D) Las pólizas restablecidas SÍ pueden ser impugnadas, particularmente durante el nuevo período de incontestabilidad aplicable al restablecimiento."
      ]
    }
  ]
}

]; // fin PK_NIVEL1

if (typeof window !== 'undefined') window.PK_NIVEL1 = PK_NIVEL1;
if (typeof module !== 'undefined') module.exports = { PK_NIVEL1 };
