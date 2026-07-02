// ============================================================
// PEARSON KILLER — pk-data-medicare.js
// Módulo: Medicare y Medicaid
// 5 conceptos × 5 variantes = 25 preguntas
//
// [VERIFICADO] = mecánica de producto o ley federal estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// Ver VERIFICATION_NOTES.md
// ============================================================

const PK_MEDICARE = [

{
  id: "medicare_001",
  area: "medicare",
  concepto: "Medicare Partes A, B, C y D",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál parte de Medicare cubre específicamente los MEDICAMENTOS DE PRESCRIPCIÓN?",
      o: [
        "Parte A — Seguro Hospitalario",
        "Parte B — Seguro Médico",
        "Parte C — Medicare Advantage",
        "Parte D — Cobertura de Medicamentos de Prescripción"
      ],
      a: 3,
      trampa: "La Parte D es la única diseñada específicamente para medicamentos — no debe confundirse con la A (hospitalización) ni con la B (servicios médicos).",
      correcto: "Parte D = cobertura específica de MEDICAMENTOS DE PRESCRIPCIÓN. Es generalmente OPCIONAL y requiere inscripción en un plan privado separado con prima mensual adicional. [VERIFICADO — estructura fundamental y estable del programa Medicare]",
      incorrectos: [
        "A) Parte A cubre hospitalización — una función completamente diferente.",
        "B) Parte B cubre servicios médicos ambulatorios — no medicamentos de prescripción.",
        "C) Parte C (Medicare Advantage) puede INCLUIR cobertura de medicamentos como parte de un plan privado, pero no ES en sí misma la cobertura específica de medicamentos — es un plan privado que reemplaza A+B."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "CASI_IDENTICAS",
      q: "¿Cuál parte de Medicare generalmente NO requiere el pago de prima mensual para la mayoría de las personas que trabajaron suficiente tiempo contribuyendo al sistema?",
      o: [
        "Parte A — Seguro Hospitalario",
        "Parte B — Seguro Médico",
        "Parte C — Medicare Advantage",
        "Parte D — Cobertura de Medicamentos"
      ],
      a: 0,
      trampa: "La Parte A generalmente no requiere prima para quienes contribuyeron suficientemente durante su vida laboral — las demás partes generalmente sí requieren prima mensual.",
      correcto: "La Parte A generalmente NO requiere prima mensual para personas que trabajaron y contribuyeron al sistema Medicare durante un número suficiente de años (medido en trimestres de trabajo calificado). Las Partes B, C y D generalmente sí tienen primas mensuales asociadas. [VERIFICADO — estructura de financiamiento fundamental y estable de Medicare Parte A vía FICA]",
      incorrectos: [
        "B) Parte B generalmente SÍ requiere prima mensual — es la parte con inscripción voluntaria que conlleva costo periódico.",
        "C) Parte C generalmente tiene prima mensual adicional, además de que la Parte B subyacente sigue siendo generalmente requerida.",
        "D) Parte D generalmente tiene prima mensual según el plan privado específico elegido por el beneficiario."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural principal entre Medicare Parte B (tradicional) y Medicare Advantage (Parte C)?",
      o: [
        "Son estructuralmente idénticos — Parte B y Parte C son simplemente nombres alternativos para el mismo programa",
        "Parte B es el componente de Medicare tradicional gubernamental (fee-for-service) para servicios médicos; Parte C es un plan PRIVADO aprobado que generalmente REEMPLAZA la cobertura tradicional combinada (A+B)",
        "Parte C es generalmente un seguro complementario (similar a Medigap) que se añade sobre Medicare tradicional",
        "Parte B cubre medicamentos; Parte C cubre exclusivamente hospitalizaciones"
      ],
      a: 1,
      trampa: "La Parte C REEMPLAZA estructuralmente las partes tradicionales — no las complementa como lo hace un seguro suplementario tipo Medigap.",
      correcto: "Parte B = componente del Medicare tradicional gubernamental (fee-for-service) para servicios médicos ambulatorios. Parte C (Medicare Advantage) = plan PRIVADO aprobado por Medicare que generalmente REEMPLAZA la cobertura tradicional A+B (y frecuentemente incluye cobertura de medicamentos). El beneficiario generalmente elige entre Medicare tradicional O Medicare Advantage, no ambos simultáneamente. [VERIFICADO — distinción estructural fundamental y estable]",
      incorrectos: [
        "A) NO son estructuralmente idénticos — representan enfoques fundamentalmente diferentes de administración de beneficios.",
        "C) Medigap (el seguro suplementario tradicional) es conceptualmente diferente de Medicare Advantage — Medigap COMPLEMENTA el Medicare tradicional, mientras Advantage lo reemplaza.",
        "D) Las funciones descritas están invertidas respecto a la estructura real de cada parte."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Una persona de 68 años tiene Medicare y simultáneamente cobertura activa del plan de salud de su empleador (empresa con aproximadamente 25 empleados). Según las reglas generales de coordinación, ¿cuál plan paga generalmente PRIMERO?",
      o: [
        "Medicare generalmente paga siempre primero para cualquier persona de 65+ años, independientemente del tamaño del empleador",
        "El plan del empleador generalmente paga primero porque está activo y Medicare actúa como pagador secundario",
        "Medicare generalmente paga primero específicamente porque la empresa tiene menos de cierto umbral de empleados establecido",
        "El empleado puede generalmente elegir libremente cuál plan prefiere que pague primero cada año"
      ],
      a: 1,
      trampa: "La regla de coordinación de quién paga primero depende estructuralmente del TAMAÑO del empleador — no simplemente del hecho de tener 65 años o más.",
      correcto: "Bajo las reglas generales de Medicare Secondary Payer: si el empleador tiene un número de empleados igual o superior a cierto umbral establecido (generalmente 20 o más), el plan del empleador generalmente paga PRIMERO y Medicare actúa como pagador SECUNDARIO. Con 25 empleados (superando ese umbral general), el plan del empleador generalmente paga primero. [VERIFICADO — principio estructural de coordinación estable; REQUIERE VERIFICACIÓN del umbral numérico exacto vigente]",
      incorrectos: [
        "A) Medicare NO siempre paga primero para personas de 65+ — la regla depende estructuralmente del tamaño del empleador.",
        "C) Con un número de empleados que supera el umbral general establecido, es el plan del empleador el que generalmente paga primero, no Medicare.",
        "D) El empleado generalmente no tiene la opción de elegir libremente el orden de pago — está determinado por reglas estructurales establecidas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Rosa, 66 años, no se inscribió en Medicare Parte D cuando fue elegible inicialmente porque no tomaba medicamentos regularmente. Varios años después desarrolla una condición crónica que requiere medicamentos costosos y decide inscribirse. ¿Qué sucede GENERALMENTE en este escenario?",
      o: [
        "Se inscribe sin ninguna penalidad, dado que puede unirse al plan en cualquier momento sin consecuencia",
        "Generalmente enfrenta una penalidad de inscripción tardía, calculada en función del tiempo transcurrido sin cobertura acreditable, aplicada de forma permanente a su prima mensual",
        "Puede inscribirse únicamente durante el período de inscripción abierta general, sin ninguna penalidad aplicable bajo ninguna circunstancia",
        "La penalidad se exime automáticamente al presentar documentación médica de su nueva condición crónica"
      ],
      a: 1,
      trampa: "La penalidad de inscripción tardía de la Parte D es generalmente permanente y se calcula específicamente en función del tiempo transcurrido sin cobertura acreditable equivalente.",
      correcto: "Medicare generalmente impone una penalidad de inscripción tardía a la Parte D cuando una persona no se inscribe durante su período de elegibilidad inicial y carece de cobertura acreditable equivalente durante ese tiempo. Esta penalidad generalmente se aplica de forma permanente a la prima mensual mientras la persona mantenga cobertura de Parte D. [REQUIERE VERIFICACIÓN — confirmar el método exacto de cálculo de la penalidad vigente contra la estructura actualizada de Medicare]",
      incorrectos: [
        "A) Generalmente SÍ existe una penalidad aplicable por inscripción tardía sin cobertura acreditable previa — no es una decisión libre de consecuencias.",
        "C) Puede inscribirse durante períodos de inscripción abierta, pero la penalidad acumulada generalmente continúa aplicando de todas formas.",
        "D) La penalidad generalmente NO se exime automáticamente por presentar documentación médica de una nueva condición — se requieren criterios específicos de excepción reconocidos por Medicare."
      ]
    }
  ]
},

{
  id: "medicare_002",
  area: "medicare",
  concepto: "Medicaid y sus Diferencias Fundamentales con Medicare",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la diferencia estructural PRINCIPAL entre los programas de Medicare y Medicaid?",
      o: [
        "Medicare es generalmente para personas de bajos ingresos; Medicaid es generalmente para personas de 65 años o más",
        "Medicare es generalmente el programa FEDERAL para personas de 65+ años o con ciertas discapacidades reconocidas (sin restricción de ingresos); Medicaid es generalmente el programa conjunto ESTATAL-FEDERAL para personas de BAJOS INGRESOS (sin restricción de edad)",
        "Ambos son estructuralmente el mismo programa, únicamente con nombres diferentes según el estado específico",
        "Medicare es un programa privado; Medicaid es exclusivamente un programa del gobierno federal"
      ],
      a: 1,
      trampa: "Los nombres 'Medicare' y 'Medicaid' son similares y frecuentemente confundidos. La distinción clave: Medicare se basa en edad/discapacidad; Medicaid se basa en nivel de ingresos.",
      correcto: "MEDICARE = programa FEDERAL basado generalmente en edad (65+) o ciertas discapacidades reconocidas, SIN restricción general de ingresos. MEDICAID = programa CONJUNTO estatal-federal basado generalmente en BAJOS INGRESOS, SIN restricción general de edad. [VERIFICADO — distinción estructural fundamental y estable entre ambos programas]",
      incorrectos: [
        "A) Esta descripción invierte estructuralmente las características definitorias reales de ambos programas.",
        "C) Son programas estructuralmente diferentes con financiamiento, administración y criterios de elegibilidad claramente distintos.",
        "D) Ambos son programas gubernamentales — Medicare es federal, Medicaid es conjunto estatal-federal."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "ESCENARIO",
      q: "Una persona de 72 años con ingresos y patrimonio considerablemente altos requiere cobertura de salud. ¿Cuál programa gubernamental generalmente cubre a esta persona?",
      o: [
        "Medicaid — porque generalmente toda persona mayor de 65 años automáticamente califica para Medicaid",
        "Medicare — la elegibilidad se basa generalmente en la EDAD (65+), sin restricción general relacionada con el nivel de ingresos o patrimonio",
        "Ninguno de los dos programas — los altos ingresos generalmente excluyen tanto de Medicare como de Medicaid por igual",
        "Únicamente Medicaid, y solo si puede demostrar formalmente que sus gastos médicos superan sustancialmente sus ingresos declarados"
      ],
      a: 1,
      trampa: "Medicare generalmente NO tiene restricción de ingresos — la elegibilidad se basa estructuralmente en edad o discapacidad, no en el nivel de recursos económicos del solicitante.",
      correcto: "MEDICARE generalmente no impone límites de ingresos como criterio de elegibilidad. Una persona de 72 años califica generalmente para Medicare simplemente en función de su EDAD, independientemente de cuánto ingreso genere o patrimonio acumulado tenga. [VERIFICADO — principio estructural fundamental de elegibilidad de Medicare]",
      incorrectos: [
        "A) Medicaid generalmente SÍ tiene restricciones de ingresos — una persona con ingresos considerablemente altos generalmente NO calificaría para Medicaid.",
        "C) Medicare generalmente SÍ cubre a esta persona — no existe restricción general de ingresos para la elegibilidad de Medicare.",
        "D) Medicare, basado en edad, no requiere esta demostración específica de gastos médicos versus ingresos que sería más característica de Medicaid."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál programa gubernamental generalmente cubre el cuidado CUSTODIAL a largo plazo en un hogar de enfermería, una vez que el paciente ha agotado sustancialmente sus recursos económicos personales?",
      o: [
        "Medicare — porque generalmente cubre todas las necesidades médicas de personas de 65 años en adelante",
        "Medicaid — una vez que el paciente ha reducido sus activos hasta el nivel de elegibilidad correspondiente (proceso conocido como 'spend-down'), Medicaid generalmente cubre el cuidado custodial de forma indefinida",
        "El seguro de LTC privado — es generalmente el único tipo de cobertura que puede cubrir el cuidado custodial de forma indefinida",
        "El seguro Medigap — generalmente complementa Medicare específicamente para cubrir el cuidado a largo plazo custodial"
      ],
      a: 1,
      trampa: "Medicare tiene límites estrictos de días para cuidado especializado. Medicaid generalmente actúa como el pagador de último recurso para cuidado custodial de largo plazo, una vez agotados los recursos personales.",
      correcto: "MEDICAID generalmente actúa como el PAGADOR DE ÚLTIMO RECURSO para el cuidado custodial de largo plazo. Una vez que el paciente ha reducido sus activos hasta el nivel de elegibilidad establecido por el programa (spend-down), Medicaid generalmente cubre el cuidado en hogar de enfermería de forma indefinida mientras persista la elegibilidad. [VERIFICADO — función estructural estable de Medicaid como pagador de cuidado custodial de largo plazo]",
      incorrectos: [
        "A) Medicare generalmente solo cubre un número limitado de días de cuidado ESPECIALIZADO — no cuidado custodial de largo plazo de forma indefinida.",
        "C) El LTC privado cubre mientras dure el beneficio contratado específicamente — Medicaid es el programa gubernamental diseñado para cobertura de largo plazo sin límite temporal predeterminado.",
        "D) Medigap generalmente complementa Medicare cubriendo sus brechas de costo compartido — no está diseñado para cubrir lo que Medicare estructuralmente no cubre, como el cuidado custodial."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Qué nivel de gobierno administra y financia GENERALMENTE el programa Medicaid?",
      o: [
        "Exclusivamente el gobierno federal, sin ninguna participación de los gobiernos estatales",
        "Exclusivamente los gobiernos estatales individuales, sin ninguna participación federal",
        "AMBOS niveles simultáneamente — el gobierno federal establece requisitos mínimos y comparte el financiamiento; los estados administran sus programas específicos y pueden expandir la cobertura más allá de esos mínimos",
        "Exclusivamente los gobiernos locales de condados y municipios individuales"
      ],
      a: 2,
      trampa: "Medicaid es estructuralmente un programa CONJUNTO — no exclusivamente federal ni exclusivamente estatal.",
      correcto: "Medicaid es un programa estructuralmente CONJUNTO: el gobierno FEDERAL establece requisitos mínimos generales de elegibilidad y beneficios, y comparte el financiamiento mediante fondos equiparables (matching funds) con los estados. Cada ESTADO administra su propio programa específico y generalmente puede expandir la cobertura más allá de los mínimos federales establecidos. [VERIFICADO — estructura conjunta federal-estatal fundamental y estable de Medicaid]",
      incorrectos: [
        "A) El gobierno federal por sí solo generalmente no podría administrar Medicaid — los estados tienen un rol esencial en su implementación.",
        "B) Los estados por sí solos generalmente no podrían financiar completamente Medicaid — reciben una contribución federal sustancial.",
        "D) Los gobiernos locales de condados y municipios generalmente no tienen rol directo en la administración estructural de Medicaid."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Una persona califica simultáneamente tanto para Medicare como para Medicaid (situación conocida como 'Dual Eligible'). Bajo las reglas generales de coordinación, ¿cuál programa paga GENERALMENTE primero?",
      o: [
        "Medicaid generalmente paga siempre primero, por ser considerado el programa estatal de respuesta más inmediata",
        "Medicare generalmente paga PRIMERO, actuando como pagador primario; Medicaid generalmente cubre los costos residuales (como deducibles y copagos) que Medicare no cubrió, actuando como pagador de último recurso",
        "El paciente puede generalmente elegir libremente cuál de los dos programas prefiere que pague primero en cada situación específica",
        "Ambos programas generalmente pagan de forma simultánea, dividiendo los costos exactamente al 50% cada uno"
      ],
      a: 1,
      trampa: "En situaciones de Dual Eligible, la regla estructural general es clara: Medicare actúa generalmente como pagador PRIMARIO; Medicaid actúa generalmente como pagador de ÚLTIMO RECURSO.",
      correcto: "Para beneficiarios en situación de DUAL ELIGIBLE, la regla general establece que Medicare generalmente paga PRIMERO (actuando como pagador primario). Medicaid generalmente puede cubrir posteriormente los costos residuales que Medicare no cubrió (como deducibles, coseguros, copagos) — pero Medicaid generalmente actúa siempre como el pagador de último recurso en esta coordinación. [VERIFICADO — principio estructural de coordinación estable entre ambos programas]",
      incorrectos: [
        "A) Medicaid generalmente no paga primero en situaciones de Dual Eligible — esa función corresponde generalmente a Medicare.",
        "C) El paciente generalmente no tiene la opción de elegir libremente el orden de pago — está determinado por reglas federales de coordinación establecidas.",
        "D) Los programas generalmente no dividen los costos automáticamente al 50% — tienen roles secuenciales establecidos de primario y secundario."
      ]
    }
  ]
},

{
  id: "medicare_003",
  area: "medicare",
  concepto: "Medigap — Seguro Suplementario de Medicare",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es GENERALMENTE el seguro conocido como Medigap?",
      o: [
        "Un tipo específico de plan Medicare Advantage (Parte C) ofrecido por compañías aseguradoras privadas",
        "Un seguro de salud privado diseñado específicamente para COMPLEMENTAR el Medicare tradicional (Partes A y B), cubriendo generalmente sus deducibles, coseguros y copagos",
        "Un seguro específicamente diseñado para complementar exclusivamente la cobertura de medicamentos de la Parte D de Medicare",
        "Un programa gubernamental diseñado para personas que no califican para la cobertura estándar de Medicare"
      ],
      a: 1,
      trampa: "Medigap está diseñado estructuralmente para COMPLEMENTAR el Medicare tradicional — es conceptualmente distinto tanto de Medicare Advantage como de un programa gubernamental de medicamentos.",
      correcto: "MEDIGAP = seguro privado diseñado específicamente para llenar las 'brechas' de costo compartido del Medicare tradicional: cubre generalmente los deducibles de las Partes A y B, los coseguros hospitalarios, y otros costos de bolsillo que Medicare tradicional no cubre completamente. NO es Medicare Advantage. [VERIFICADO — propósito estructural fundamental y estable de Medigap]",
      incorrectos: [
        "A) Medicare Advantage generalmente REEMPLAZA el Medicare tradicional; Medigap, en contraste, lo COMPLEMENTA — son estrategias estructuralmente opuestas.",
        "C) La cobertura de medicamentos corresponde estructuralmente a la Parte D — Medigap generalmente no está diseñado con ese propósito específico (aunque algunos planes Medigap pueden cubrir ciertos costos relacionados en circunstancias específicas).",
        "D) Medigap está diseñado para personas que YA tienen Medicare tradicional — no para quienes no califican para la cobertura estándar."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural fundamental entre Medicare Advantage (Parte C) y Medigap?",
      o: [
        "Son estructuralmente el mismo producto, simplemente con nombres diferentes según la región geográfica del país",
        "Medicare Advantage generalmente REEMPLAZA el Medicare tradicional (A+B); Medigap generalmente COMPLEMENTA el Medicare tradicional (A+B) manteniéndolo activo",
        "Medigap generalmente reemplaza Medicare tradicional; Medicare Advantage generalmente lo complementa",
        "Ambos productos pueden generalmente tenerse de forma simultánea sin ninguna restricción estructural"
      ],
      a: 1,
      trampa: "La distinción entre 'reemplazar' versus 'complementar' es la diferencia estructural fundamental entre ambos productos — son enfoques opuestos.",
      correcto: "Medicare Advantage = el beneficiario elige un plan privado que generalmente REEMPLAZA el Medicare tradicional A+B (frecuentemente incluyendo también la Parte D). Medigap = el beneficiario mantiene activo el Medicare tradicional A+B y AÑADE un seguro privado adicional para cubrir sus brechas de costo. Estos son generalmente enfoques mutuamente excluyentes entre sí. [VERIFICADO — distinción estructural estable entre ambos productos]",
      incorrectos: [
        "A) No son estructuralmente el mismo producto — difieren fundamentalmente en su diseño, costos y estructura de cobertura.",
        "C) Esta descripción invierte estructuralmente las funciones reales de ambos productos.",
        "D) Generalmente NO pueden tenerse de forma simultánea — si el beneficiario tiene Medicare Advantage, generalmente no puede simultáneamente tener Medigap."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Durante cuánto tiempo GENERALMENTE tiene una persona el derecho GARANTIZADO de comprar cualquier plan Medigap disponible sin ser rechazada por razones de salud preexistente, tras inscribirse en Medicare Parte B?",
      o: [
        "Aproximadamente 30 días",
        "Aproximadamente 60 días",
        "Aproximadamente 6 meses",
        "Aproximadamente 12 meses"
      ],
      a: 2,
      trampa: "El período de inscripción abierta garantizada de Medigap es generalmente de 6 meses — un plazo distinto a otros períodos regulatorios relacionados con Medicare.",
      correcto: "El Período de Inscripción Abierta de Medigap generalmente dura 6 MESES, comenzando el mes en que la persona cumple 65 años Y está simultáneamente inscrita en la Parte B. Durante este período, las aseguradoras generalmente NO pueden rechazar la solicitud ni cobrar primas más altas por condiciones preexistentes. [REQUIERE VERIFICACIÓN — confirmar este plazo exacto vigente contra la regulación federal actualizada]",
      incorrectos: [
        "A) 30 días resultaría insuficiente respecto al período generalmente establecido para esta protección.",
        "B) 60 días tampoco corresponde generalmente al período correcto establecido para esta protección específica.",
        "D) 12 meses excedería el período de 6 meses generalmente establecido para esta protección de inscripción abierta."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Una persona que actualmente tiene Medicare Advantage decide cambiar hacia Medicare tradicional junto con un plan Medigap complementario. ¿Tiene esta persona GENERALMENTE garantía de aceptación en el plan Medigap deseado?",
      o: [
        "Sí — generalmente tiene siempre derecho garantizado a cualquier plan Medigap una vez que posee Medicare, sin ninguna excepción temporal",
        "Solo generalmente durante el período de inscripción abierta inicial descrito anteriormente — fuera de ese período específico, las aseguradoras generalmente PUEDEN rechazar la solicitud o cobrar más por condiciones preexistentes",
        "La aceptación depende exclusivamente y en su totalidad del plan Medigap específico particular que la persona elija solicitar",
        "Únicamente tiene garantía de aceptación si la persona supera los 75 años de edad"
      ],
      a: 1,
      trampa: "Fuera del período específico de inscripción abierta inicial, la aceptación en Medigap generalmente NO está garantizada de forma universal.",
      correcto: "Fuera del período de inscripción abierta inicial de 6 meses, las aseguradoras de Medigap generalmente PUEDEN rechazar la solicitud, cobrar primas más altas, o excluir condiciones preexistentes específicas, dependiendo de las reglas estatales aplicables. La garantía de aceptación generalmente aplica únicamente durante ese período inicial específico. [VERIFICADO — principio estructural general; REQUIERE VERIFICACIÓN de las reglas específicas de garantía de emisión aplicables en Florida, que pueden diferir de otros estados]",
      incorrectos: [
        "A) El derecho garantizado generalmente solo aplica durante el período de inscripción abierta inicial — no de forma indefinida y sin excepción.",
        "C) Las reglas de suscripción de Medigap están generalmente reguladas por ley federal y estatal — no son completamente discrecionales de cada plan individual.",
        "D) No existe generalmente una diferenciación de garantía de aceptación basada específicamente en superar los 75 años de edad."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Pedro tiene Medicare Parte A y Parte B pero enfrenta deducibles y coseguros significativos de su bolsillo. Un agente le recomienda considerar un plan Medigap. ¿Cuál es GENERALMENTE el beneficio PRINCIPAL de Medigap para la situación de Pedro?",
      o: [
        "Reemplazar completamente su cobertura actual de Medicare por un plan privado estructuralmente más flexible",
        "Cubrir generalmente los deducibles, coseguros y copagos que Medicare tradicional no cubre completamente — reduciendo así los gastos imprevistos de bolsillo de Pedro",
        "Permitirle acceder generalmente a una red de médicos más amplia que la disponible bajo Medicare tradicional estándar",
        "Incluir automáticamente cobertura de medicamentos de prescripción que la Parte B de Medicare no cubre"
      ],
      a: 1,
      trampa: "Medigap está diseñado estructuralmente para COMPLEMENTAR — no para reemplazar. Su beneficio principal es reducir la exposición a gastos de bolsillo imprevistos.",
      correcto: "El beneficio principal de Medigap para la situación de Pedro es GENERALMENTE cubrir las brechas de costo compartido de Medicare tradicional: deducibles hospitalarios, coseguros del hospital más allá de cierto punto, deducibles de la Parte B, y el coseguro estándar de la Parte B. Esto generalmente hace que los gastos médicos de Pedro sean más predecibles y manejables. [VERIFICADO — propósito estructural fundamental de Medigap]",
      incorrectos: [
        "A) Medigap generalmente COMPLEMENTA la cobertura de Pedro — no la reemplaza (esa función correspondería a Medicare Advantage).",
        "C) Medicare tradicional generalmente ya cubre a cualquier médico que acepte Medicare — Medigap generalmente no amplía específicamente la red de proveedores disponibles.",
        "D) La cobertura de medicamentos corresponde estructuralmente a la Parte D — Medigap generalmente no incluye automáticamente cobertura de medicamentos."
      ]
    }
  ]
},

{
  id: "medicare_004",
  area: "medicare",
  concepto: "Elegibilidad y Financiamiento de Medicare",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿A qué edad se convierte GENERALMENTE una persona en elegible para Medicare por razón de edad?",
      o: [
        "60 años de edad",
        "62 años de edad",
        "65 años de edad",
        "67 años de edad"
      ],
      a: 2,
      trampa: "La elegibilidad estándar de Medicare por edad es generalmente a los 65 años — un umbral distinto de la elegibilidad temprana del Seguro Social (62) y del FRA actual del Seguro Social (67).",
      correcto: "Medicare = elegibilidad estándar generalmente a los 65 AÑOS de edad. También pueden calificar personas con ciertas discapacidades reconocidas por el Seguro Social tras un período determinado de beneficios, o personas diagnosticadas con ciertas condiciones específicas reconocidas legalmente (como ESRD, enfermedad renal en etapa terminal). [VERIFICADO — umbral de edad fundamental y estable de Medicare]",
      incorrectos: [
        "A) 60 años generalmente no activa la elegibilidad estándar de Medicare.",
        "B) 62 años generalmente activa la elegibilidad TEMPRANA del Seguro Social — no de Medicare.",
        "D) 67 años es generalmente el Full Retirement Age actual del Seguro Social — un concepto distinto del umbral de Medicare."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "QUIEN_PAGA",
      q: "¿Cómo se financia GENERALMENTE la Parte A de Medicare (cobertura hospitalaria)?",
      o: [
        "A través de primas mensuales pagadas generalmente por todos los beneficiarios de 65 años en adelante",
        "A través de impuestos FICA (Medicare tax) generalmente retenidos sobre los salarios durante la vida laboral del trabajador",
        "A través de fondos generales indiferenciados del presupuesto federal, sin ningún impuesto específico dedicado",
        "A través de las primas cobradas específicamente por las Partes B y D combinadas"
      ],
      a: 1,
      trampa: "La Parte A se financia estructuralmente mediante impuestos FICA acumulados durante la vida laboral — por eso la mayoría de las personas no pagan prima mensual al alcanzar los 65 años.",
      correcto: "La Parte A se financia generalmente a través de los impuestos FICA (Medicare tax) retenidos sobre los salarios DURANTE LA VIDA LABORAL del trabajador. Trabajadores y empleadores contribuyen conjuntamente durante los años de trabajo. Por esta razón, quienes acumularon suficientes años de contribución generalmente no pagan prima mensual por la Parte A al alcanzar la elegibilidad. [VERIFICADO — mecanismo de financiamiento fundamental y estable de la Parte A]",
      incorrectos: [
        "A) La Parte A generalmente NO requiere prima mensual para quienes contribuyeron suficientemente durante su vida laboral.",
        "C) Los fondos generales del presupuesto federal financian principalmente otras partes de Medicare, particularmente la Parte B — no la Parte A de forma primaria.",
        "D) Las primas de las Partes B y D son ingresos separados que financian específicamente esas partes — no financian la Parte A."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente puede GENERALMENTE hacer a una persona elegible para Medicare ANTES de cumplir los 65 años EXCEPTO:",
      o: [
        "Tener una discapacidad reconocida por el Seguro Social durante un período determinado de meses consecutivos",
        "Tener diagnóstico de Enfermedad Renal en Etapa Terminal (ESRD) que requiere diálisis o trasplante",
        "Tener diagnóstico de ALS (Esclerosis Lateral Amiotrófica, también conocida como Enfermedad de Lou Gehrig)",
        "Tener bajos ingresos documentados y ser menor de 50 años de edad"
      ],
      a: 3,
      trampa: "Los bajos ingresos combinados con edad menor de 50 años corresponden generalmente a criterios de elegibilidad de MEDICAID — no de Medicare.",
      correcto: "Los bajos ingresos y la edad menor de 50 años describen generalmente criterios relacionados con MEDICAID, no con Medicare. La elegibilidad de Medicare antes de los 65 años generalmente se limita a: discapacidad reconocida con período de espera determinado, ESRD (diálisis o trasplante renal), y ALS. [VERIFICADO — criterios de elegibilidad estructural estables para Medicare antes de los 65 años]",
      incorrectos: [
        "A) La discapacidad reconocida con el período correspondiente SÍ generalmente activa la elegibilidad de Medicare antes de los 65 años.",
        "B) ESRD SÍ generalmente activa la elegibilidad de Medicare antes de los 65 años, frecuentemente sin período de espera.",
        "C) ALS SÍ generalmente activa la elegibilidad de Medicare de forma casi inmediata, sin el período de espera aplicable a otras discapacidades."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuántos 'trimestres de trabajo calificado' (con contribuciones a Medicare) se necesitan GENERALMENTE para calificar para la Parte A SIN pago de prima mensual?",
      o: [
        "20 trimestres, equivalentes aproximadamente a 5 años de trabajo",
        "30 trimestres, equivalentes aproximadamente a 7.5 años de trabajo",
        "40 trimestres, equivalentes aproximadamente a 10 años de trabajo",
        "60 trimestres, equivalentes aproximadamente a 15 años de trabajo"
      ],
      a: 2,
      trampa: "El requisito estándar es generalmente 40 trimestres — equivalente aproximado a 10 años de trabajo calificado contribuyendo al sistema.",
      correcto: "Se requieren generalmente 40 TRIMESTRES (equivalentes aproximadamente a 10 años de trabajo calificado) para calificar para la Parte A SIN prima mensual. Con un número menor de trimestres (generalmente entre 30-39) puede existir una prima reducida; con menos de 30 trimestres generalmente se paga la prima completa. [VERIFICADO — requisito estructural estable de calificación para la Parte A]",
      incorrectos: [
        "A) 20 trimestres (5 años) generalmente resultan insuficientes para calificar para la Parte A sin prima.",
        "B) 30 trimestres generalmente califican para una prima REDUCIDA — no para la Parte A completamente sin prima.",
        "D) 60 trimestres excede considerablemente el requisito general establecido — solo se necesitan generalmente 40."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Rosa, 67 años, nunca trabajó formalmente ni contribuyó directamente a Medicare durante su vida. Su esposo trabajó formalmente durante 40+ trimestres y está próximo a cumplir 65 años. ¿Puede Rosa GENERALMENTE calificar para Medicare Parte A sin prima mensual?",
      o: [
        "No — generalmente únicamente las personas que trabajaron y contribuyeron personalmente pueden calificar para Medicare sin prima",
        "Sí — Rosa generalmente puede calificar para Medicare Parte A sin prima basándose en el historial de trabajo calificado de su ESPOSO, una vez que él cumpla la edad correspondiente",
        "No — Rosa necesitaría generalmente haber trabajado un mínimo independiente de 20 trimestres propios para calificar",
        "Rosa generalmente solo podría calificar para Medicare Parte B, nunca para la Parte A"
      ],
      a: 1,
      trampa: "El beneficio de cónyuge dentro del sistema de Medicare generalmente permite acceder a la Parte A sin prima basándose en el historial laboral calificado del cónyuge.",
      correcto: "Rosa generalmente puede calificar para Medicare Parte A SIN PRIMA basándose en el historial de trabajo calificado de su ESPOSO, una vez que él cumpla 65 años o se jubile formalmente. Este es generalmente el beneficio de cónyuge dentro del sistema Medicare — un mecanismo conceptualmente similar al aplicable en el Seguro Social. [VERIFICADO — mecanismo estructural estable de beneficio de cónyuge para Medicare Parte A]",
      incorrectos: [
        "A) Los cónyuges SÍ generalmente pueden calificar basándose en el historial de trabajo calificado del otro cónyuge.",
        "C) Rosa generalmente puede calificar a través del historial de su esposo, sin necesidad de acumular sus propios trimestres de trabajo independientes.",
        "D) Si califica a través del historial de su esposo, generalmente puede acceder tanto a la Parte A como potencialmente a la Parte B."
      ]
    }
  ]
}

]; // fin PK_MEDICARE

if (typeof module !== 'undefined') module.exports = { PK_MEDICARE };
