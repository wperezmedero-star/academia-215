// ============================================================
// PEARSON KILLER — pk-data-ltc.js
// Módulo: Seguro de Cuidado a Largo Plazo (Long-Term Care)
// 4 conceptos × 5 variantes = 20 preguntas
//
// [VERIFICADO] = mecánica de producto o ley estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// Ver VERIFICATION_NOTES.md
// ============================================================

const PK_LTC = [

{
  id: "ltc_001",
  area: "ltc",
  concepto: "Activación de Beneficios de LTC — ADLs y Deterioro Cognitivo",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Un seguro de Cuidado a Largo Plazo (LTC) calificado bajo estándares federales generalmente activa sus beneficios cuando el asegurado no puede realizar de forma independiente cuántas o más Actividades de la Vida Diaria (ADLs)?",
      o: [
        "1 ADL únicamente",
        "2 ADLs o más",
        "3 ADLs o más",
        "4 ADLs o más"
      ],
      a: 1,
      trampa: "El estándar federal generalmente reconocido para pólizas LTC calificadas establece un umbral de 2 ADLs — ni 1 (demasiado bajo) ni 3 o más (más restrictivo del estándar típico).",
      correcto: "Bajo el estándar federal general (relacionado con HIPAA) para pólizas LTC calificadas, los beneficios generalmente se activan cuando el asegurado no puede realizar de forma independiente 2 O MÁS de las 6 ADLs estándar reconocidas: bañarse, vestirse, comer, ir al baño, trasladarse (transferencia), y continencia. [VERIFICADO — estándar federal ampliamente documentado y consistente en la industria para pólizas LTC calificadas]",
      incorrectos: [
        "A) 1 ADL únicamente generalmente no es suficiente para activar los beneficios bajo el estándar federal reconocido.",
        "C) 3 ADLs sería un umbral más restrictivo que el estándar general típicamente aplicado.",
        "D) 4 ADLs sería un umbral excesivamente restrictivo respecto al estándar federal general reconocido."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "Además del criterio de incapacidad para realizar 2+ ADLs, ¿cuál OTRO criterio generalmente puede activar independientemente los beneficios de una póliza LTC calificada?",
      o: [
        "Tener más de 80 años de edad, independientemente de la condición física o mental actual",
        "Deterioro cognitivo severo documentado (como en casos de Alzheimer o demencia avanzada), que requiere supervisión sustancial para la seguridad del asegurado",
        "Haber sido hospitalizado en cualquier momento durante el año calendario en curso",
        "Tener un diagnóstico médico de cualquier enfermedad crónica, sin importar su severidad específica"
      ],
      a: 1,
      trampa: "El deterioro cognitivo severo es reconocido generalmente como un disparador de activación INDEPENDIENTE, aun cuando el asegurado pudiera físicamente realizar las ADLs sin asistencia física directa.",
      correcto: "El DETERIORO COGNITIVO SEVERO (como Alzheimer o demencia avanzada documentada) constituye generalmente un segundo criterio de activación independiente del conteo de ADLs. Una persona con demencia avanzada puede requerir supervisión constante por seguridad, incluso si físicamente pudiera ejecutar las ADLs de forma mecánica. [VERIFICADO — segundo criterio de activación reconocido generalmente en pólizas LTC calificadas bajo el estándar federal]",
      incorrectos: [
        "A) La edad por sí sola, sin relación a condición física o cognitiva específica, generalmente no constituye un criterio de activación reconocido.",
        "C) Una hospitalización aislada, sin relación a incapacidad funcional o cognitiva sostenida, generalmente no activa por sí sola los beneficios de LTC.",
        "D) Un diagnóstico de enfermedad crónica sin relación directa a incapacidad funcional (ADLs) o cognitiva generalmente no constituye por sí solo un criterio de activación."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "María, 78 años, puede físicamente bañarse y vestirse sola sin asistencia, pero tiene demencia avanzada diagnosticada y frecuentemente se pierde o se olvida de apagar la estufa, representando riesgos de seguridad significativos. ¿Calificaría María GENERALMENTE para activar los beneficios de su póliza LTC?",
      o: [
        "No — porque no cumple el criterio de incapacidad física para 2 o más ADLs específicamente",
        "Sí — el deterioro cognitivo severo documentado constituye generalmente un criterio de activación independiente, aun cuando físicamente pueda ejecutar las ADLs por sí misma",
        "No — el LTC generalmente solo cubre incapacidad física demostrable, nunca deterioro cognitivo",
        "Solo calificaría si además tuviera simultáneamente incapacidad física documentada para al menos 1 ADL adicional"
      ],
      a: 1,
      trampa: "El deterioro cognitivo severo es un criterio de activación estructuralmente INDEPENDIENTE del conteo de ADLs — no requiere que ambos criterios coexistan simultáneamente.",
      correcto: "María generalmente calificaría para activar los beneficios de LTC basándose en su deterioro cognitivo severo documentado, que representa riesgos de seguridad significativos, INDEPENDIENTEMENTE de que pueda ejecutar físicamente las ADLs por sí misma. El criterio cognitivo es estructuralmente independiente del criterio de ADLs. [VERIFICADO — principio estructural estable de los dos criterios de activación reconocidos]",
      incorrectos: [
        "A) El criterio cognitivo generalmente es independiente del criterio de ADLs — no requiere el cumplimiento simultáneo de ambos.",
        "C) El deterioro cognitivo severo SÍ generalmente constituye un criterio de activación válido y reconocido para pólizas LTC calificadas.",
        "D) El criterio cognitivo generalmente NO requiere que coexista adicionalmente una incapacidad física en ADLs — funciona de forma independiente."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es generalmente reconocido como una de las 6 ADLs estándar utilizadas para determinar la activación de beneficios LTC EXCEPTO:",
      o: [
        "Bañarse (Bathing)",
        "Trasladarse/Transferencia (Transferring)",
        "Conducir un vehículo motorizado (Driving)",
        "Continencia (Continence)"
      ],
      a: 2,
      trampa: "Conducir un vehículo, aunque relevante para la independencia funcional general, generalmente NO forma parte de las 6 ADLs estándar reconocidas para efectos de activación de beneficios LTC.",
      correcto: "Las 6 ADLs estándar generalmente reconocidas son: bañarse, vestirse, comer (Eating), ir al baño (Toileting), trasladarse/transferencia, y continencia. 'Conducir un vehículo' generalmente NO forma parte de este conjunto estándar reconocido para efectos de activación de beneficios LTC calificados. [VERIFICADO — lista estándar de ADLs ampliamente documentada y consistente en la industria]",
      incorrectos: [
        "A) Bañarse SÍ es generalmente una de las 6 ADLs estándar reconocidas.",
        "B) Trasladarse/Transferencia SÍ es generalmente una de las 6 ADLs estándar reconocidas.",
        "D) Continencia SÍ es generalmente una de las 6 ADLs estándar reconocidas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Un asegurado tiene dificultad para vestirse debido a artritis severa, pero puede realizar de forma completamente independiente las demás 5 ADLs restantes sin ninguna asistencia. ¿Activaría esta situación GENERALMENTE los beneficios de una póliza LTC calificada bajo el estándar federal estándar?",
      o: [
        "Sí — cualquier dificultad documentada en una sola ADL generalmente activa automáticamente los beneficios sin excepción",
        "Generalmente No — el estándar federal requiere típicamente incapacidad en 2 O MÁS ADLs (o deterioro cognitivo severo alternativo) para activar los beneficios; una sola ADL comprometida generalmente resulta insuficiente por sí sola",
        "Depende exclusivamente de la severidad subjetiva de la artritis, sin relación al número específico de ADLs afectadas",
        "Sí, siempre que el asegurado tenga más de 70 años de edad al momento de presentar la reclamación"
      ],
      a: 1,
      trampa: "El estándar federal general requiere específicamente 2 O MÁS ADLs comprometidas — una sola ADL afectada, por severa que sea individualmente, generalmente resulta insuficiente bajo el estándar estándar de activación.",
      correcto: "Bajo el estándar federal general para pólizas LTC calificadas, se requiere típicamente incapacidad documentada en 2 O MÁS ADLs (o alternativamente el criterio de deterioro cognitivo severo) para activar los beneficios. Con dificultad únicamente en 1 ADL (vestirse) y las demás 5 completamente independientes, esta situación generalmente NO activaría los beneficios bajo el estándar estándar de 2+ ADLs. [VERIFICADO — principio estructural del umbral estándar de 2+ ADLs]",
      incorrectos: [
        "A) Una sola ADL comprometida generalmente NO activa automáticamente los beneficios bajo el estándar federal general de 2+ ADLs.",
        "C) La severidad subjetiva de la condición médica subyacente no sustituye generalmente el requisito estructural del número mínimo de ADLs afectadas bajo el estándar calificado.",
        "D) La edad del asegurado, por sí sola, generalmente no determina la activación de beneficios — el criterio estructural es el número de ADLs comprometidas o el deterioro cognitivo."
      ]
    }
  ]
},

{
  id: "ltc_002",
  area: "ltc",
  concepto: "Período de Eliminación y Protección Contra Inflación en LTC",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "El 'Período de Eliminación' (Elimination Period) en una póliza de Cuidado a Largo Plazo funciona conceptualmente como:",
      o: [
        "El período durante el cual la aseguradora revisa administrativamente si la reclamación presentada es legítima",
        "El período de tiempo, medido generalmente en días, que el asegurado debe recibir cuidado calificado ANTES de que la aseguradora comience a pagar beneficios — funcionando conceptualmente como un deducible medido en tiempo",
        "El período posterior al cual la póliza puede cancelarse unilateralmente por la aseguradora sin ninguna penalidad",
        "El tiempo mínimo legal que un familiar debe proporcionar cuidado antes de poder contratar cuidado profesional"
      ],
      a: 1,
      trampa: "El período de eliminación es conceptualmente un 'deducible de tiempo' — no debe confundirse con un proceso de investigación administrativa de la reclamación.",
      correcto: "PERÍODO DE ELIMINACIÓN = número de días (generalmente contados desde que se cumplen los criterios de activación) que el asegurado debe recibir cuidado calificado ANTES de que comiencen a pagarse los beneficios de la póliza. Funciona conceptualmente como un DEDUCIBLE DE TIEMPO. Generalmente, a mayor período de eliminación seleccionado, menor es la prima resultante de la póliza. [VERIFICADO — mecánica conceptual estándar y estable del producto LTC]",
      incorrectos: [
        "A) La revisión administrativa de legitimidad de la reclamación es un proceso separado — no equivale al período de eliminación en sí mismo.",
        "C) La cancelación unilateral sin penalidad corresponde a conceptos completamente diferentes — no al período de eliminación.",
        "D) No existe generalmente un requisito legal relacionado con cuidado familiar previo como condición del período de eliminación."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué se considera GENERALMENTE crucial la característica de Protección Contra la Inflación en una póliza de LTC?",
      o: [
        "Porque el fenómeno de la inflación en costos de cuidado a largo plazo generalmente no es real ni relevante para la planificación",
        "Porque el LTC frecuentemente se adquiere décadas antes de utilizarse efectivamente — durante ese tiempo, los costos reales de cuidado generalmente aumentan de forma sustancial y consistente",
        "Porque la inflación afecta exclusivamente el costo de las primas del contrato, sin relación al monto del beneficio diario contratado",
        "Porque los reguladores estatales exigen obligatoriamente esta característica en absolutamente todas las pólizas LTC disponibles en el mercado"
      ],
      a: 1,
      trampa: "El extenso período de tiempo entre la compra típica del LTC y su eventual utilización efectiva es la razón fundamental de la importancia de esta característica.",
      correcto: "La Protección Contra Inflación se considera generalmente crucial porque el LTC frecuentemente se adquiere alrededor de los 55 años pero puede no utilizarse hasta décadas después. Los costos reales de cuidado a largo plazo históricamente han mostrado incrementos sustanciales y consistentes a lo largo del tiempo. Sin esta protección, un beneficio nominal fijo contratado hoy podría resultar significativamente insuficiente en el futuro. [VERIFICADO — principio fundamental de diseño de producto ampliamente reconocido; REQUIERE VERIFICACIÓN de porcentajes específicos de incremento histórico si se necesita precisión numérica exacta]",
      incorrectos: [
        "A) La inflación en costos de cuidado a largo plazo es generalmente un fenómeno real y consistentemente documentado en la industria.",
        "C) La inflación afecta directamente los COSTOS REALES DE CUIDADO — no exclusivamente el costo de las primas del contrato.",
        "D) Los reguladores generalmente no exigen esta característica de forma obligatoria en absolutamente todas las pólizas disponibles en el mercado."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "COMPARACION",
      q: "Un asegurado selecciona un Período de Eliminación de 90 días en lugar de 30 días para su póliza LTC. ¿Cuál es GENERALMENTE la consecuencia estructural de esta decisión?",
      o: [
        "La prima generalmente resulta más ALTA porque el asegurado asume menos riesgo compartido",
        "La prima generalmente resulta más BAJA, pero el asegurado debe cubrir un período inicial más extenso de costos de cuidado de su propio bolsillo antes de que comiencen los beneficios de la póliza",
        "No existe generalmente ninguna diferencia estructural relevante entre seleccionar 30 o 90 días de período de eliminación",
        "El período de eliminación seleccionado generalmente no tiene ninguna relación con el costo de la prima del contrato"
      ],
      a: 1,
      trampa: "Un período de eliminación más largo generalmente reduce la prima, pero a cambio de que el asegurado asuma un período inicial más extenso de costos por su propia cuenta.",
      correcto: "Seleccionar un período de eliminación MÁS LARGO (90 días versus 30 días) generalmente resulta en una prima MÁS BAJA, porque el asegurado asume una porción mayor del riesgo inicial (los primeros días de cuidado corren por su cuenta). A cambio, el asegurado debe planificar financieramente para cubrir ese período inicial más extenso antes de que la póliza comience a pagar. [VERIFICADO — relación estructural estándar entre período de eliminación y nivel de prima]",
      incorrectos: [
        "A) Generalmente ocurre lo OPUESTO — un período de eliminación más largo generalmente resulta en una prima MÁS BAJA, no más alta.",
        "C) SÍ existe generalmente una diferencia estructural relevante en términos de costo de prima y exposición financiera inicial del asegurado.",
        "D) El período de eliminación seleccionado SÍ tiene generalmente una relación directa e inversa con el costo de la prima del contrato."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE la diferencia conceptual entre la protección contra inflación de tipo 'Simple' y de tipo 'Compuesta' en una póliza LTC?",
      o: [
        "Son conceptualmente idénticas — ambos términos describen exactamente el mismo mecanismo de ajuste",
        "La protección Simple generalmente aumenta el beneficio en un porcentaje fijo calculado siempre sobre el monto ORIGINAL cada año; la protección Compuesta generalmente aumenta el beneficio sobre el monto YA AJUSTADO del año anterior, generando crecimiento acelerado",
        "La protección Simple aplica únicamente a pólizas individuales; la Compuesta únicamente a pólizas grupales",
        "La protección Compuesta generalmente resulta más económica que la Simple en la estructura típica de primas"
      ],
      a: 1,
      trampa: "La distinción matemática fundamental es sobre QUÉ BASE se calcula el incremento anual — el monto original fijo, o el monto ya incrementado del año anterior.",
      correcto: "Protección SIMPLE: el incremento porcentual anual generalmente se calcula siempre sobre el monto ORIGINAL del beneficio, resultando en crecimiento lineal. Protección COMPUESTA: el incremento porcentual anual generalmente se calcula sobre el monto YA AJUSTADO del año anterior (interés sobre interés), resultando en un crecimiento acelerado y generalmente mayor a largo plazo. [VERIFICADO — distinción matemática conceptual estándar entre ambos mecanismos]",
      incorrectos: [
        "A) NO son conceptualmente idénticas — tienen mecanismos matemáticos de cálculo fundamentalmente diferentes.",
        "C) Esta distinción no corresponde generalmente al tipo de póliza (individual vs grupal) — ambos mecanismos pueden aplicarse en distintos contextos.",
        "D) La protección Compuesta generalmente resulta MÁS COSTOSA que la Simple, dado su mayor crecimiento acumulado a largo plazo, no más económica."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Carlos, 55 años, compra una póliza LTC con beneficio diario de $200 sin ninguna protección contra inflación. Utiliza la póliza efectivamente 25 años después, a los 80 años. ¿Cuál es GENERALMENTE la consecuencia práctica más probable de esta decisión de diseño original?",
      o: [
        "El beneficio diario de $200 generalmente resultará más que suficiente para cubrir el costo real de cuidado 25 años después",
        "El beneficio diario nominal de $200 generalmente permanecerá fijo, mientras que el costo real de cuidado habrá aumentado sustancialmente durante esas dos décadas y media — resultando en una cobertura relativamente insuficiente respecto a la necesidad real",
        "La aseguradora generalmente ajustará automáticamente el beneficio por inflación, independientemente de si Carlos contrató esa protección específica",
        "El beneficio diario generalmente se duplicará automáticamente después de 20 años de vigencia bajo cualquier póliza estándar"
      ],
      a: 1,
      trampa: "Sin protección contra inflación contratada explícitamente, el beneficio nominal permanece fijo mientras los costos reales de cuidado generalmente continúan aumentando de forma sustancial con el paso del tiempo.",
      correcto: "Sin protección contra inflación, el beneficio nominal de $200 diarios generalmente permanece FIJO durante toda la vigencia de la póliza. Dado que los costos reales de cuidado a largo plazo históricamente han aumentado de forma sustancial y consistente, 25 años después ese beneficio fijo generalmente cubrirá una proporción considerablemente menor del costo real de cuidado que la que cubría al momento original de la compra. [VERIFICADO — consecuencia lógica y estructural de no contratar protección contra inflación]",
      incorrectos: [
        "A) Generalmente ocurre lo OPUESTO — sin ajuste por inflación, el beneficio fijo generalmente resulta insuficiente frente al costo real futuro.",
        "C) La aseguradora generalmente NO ajusta automáticamente el beneficio por inflación a menos que esa protección haya sido explícitamente contratada y su costo correspondiente pagado.",
        "D) No existe generalmente una regla de duplicación automática del beneficio tras 20 años bajo pólizas estándar sin protección de inflación contratada."
      ]
    }
  ]
},

{
  id: "ltc_003",
  area: "ltc",
  concepto: "Medicare, Medicaid y LTC — Coordinación de Cobertura",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es GENERALMENTE la diferencia estructural fundamental entre lo que cubre Medicare y lo que cubre un seguro de LTC privado respecto al cuidado en un hogar de enfermería?",
      o: [
        "Medicare generalmente cubre el cuidado custodial de forma indefinida; el LTC solo cubre el primer año de estancia",
        "Medicare generalmente cubre un número limitado de días de cuidado ESPECIALIZADO tras una hospitalización calificante previa; el LTC está diseñado específicamente para cubrir el cuidado CUSTODIAL de largo plazo que Medicare estructuralmente no cubre",
        "Ambos tipos de cobertura generalmente cubren exactamente el mismo tipo y duración de cuidado — haciendo el LTC esencialmente redundante",
        "El LTC cubre exclusivamente cuidado hospitalario agudo; Medicare cubre exclusivamente cuidado en hogares de enfermería"
      ],
      a: 1,
      trampa: "Medicare cubre generalmente cuidado MÉDICO/ESPECIALIZADO de forma muy limitada en tiempo tras hospitalización; el LTC está diseñado específicamente para el cuidado CUSTODIAL de largo plazo que Medicare deliberadamente excluye de su cobertura estándar.",
      correcto: "MEDICARE: generalmente cubre un número LIMITADO de días de cuidado ESPECIALIZADO (skilled nursing) en un hogar de enfermería, únicamente después de una hospitalización calificante previa, con estructura de copagos crecientes tras cierto punto. NO cubre generalmente cuidado custodial de largo plazo. LTC PRIVADO: diseñado específicamente para cubrir el cuidado CUSTODIAL (bañar, vestir, alimentar) que Medicare estructuralmente excluye. [VERIFICADO — distinción fundamental y estable entre ambos productos]",
      incorrectos: [
        "A) Medicare generalmente NO cubre el cuidado custodial de forma indefinida — tiene límites estrictos de días y condiciones específicas.",
        "C) NO son generalmente redundantes en absoluto — cubren tipos de cuidado estructuralmente diferentes entre sí.",
        "D) Las funciones descritas están generalmente invertidas respecto a la cobertura real característica de cada producto."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "El proceso mediante el cual una persona reduce legalmente sus activos personales hasta alcanzar el nivel de elegibilidad de Medicaid, con el propósito de calificar para cobertura de cuidado a largo plazo, se conoce comúnmente como:",
      o: [
        "'Asset Protection' (Protección de Activos) exclusivamente",
        "'Spend-down' — reducción planificada o efectiva de activos hasta el umbral de elegibilidad de Medicaid",
        "'Estate Planning' (Planificación Patrimonial) exclusivamente, sin relación específica a Medicaid",
        "'Medicaid Trust' — término que describe exclusivamente un tipo específico de cuenta bancaria"
      ],
      a: 1,
      trampa: "El término técnico específico para este proceso de reducción de activos hasta el umbral de Medicaid es 'spend-down' — un concepto central en la planificación de cuidado a largo plazo.",
      correcto: "'SPEND-DOWN' es el término generalmente utilizado para describir el proceso mediante el cual los activos personales de una persona se reducen (ya sea a través de gastos legítimos, como cuidado médico, o mediante estrategias de planificación legal) hasta alcanzar el umbral de elegibilidad de Medicaid, permitiendo así calificar para la cobertura de cuidado a largo plazo del programa. [VERIFICADO — terminología estándar ampliamente utilizada en el contexto de planificación de Medicaid]",
      incorrectos: [
        "A) 'Asset Protection' es un concepto más amplio que puede relacionarse con estrategias de planificación, pero no es el término técnico específico para este proceso particular.",
        "C) 'Estate Planning' es un concepto general de planificación patrimonial que puede incluir, pero no se limita específicamente, a las estrategias de calificación para Medicaid.",
        "D) No existe un término estándar 'Medicaid Trust' con esa definición específica tan limitada — existen diversos tipos de fideicomisos relacionados con planificación de Medicaid, pero el término no se refiere a una cuenta bancaria."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado de 82 años ha agotado sus recursos personales pagando cuidado en un hogar de enfermería y ahora califica para Medicaid. Simultáneamente, tenía una póliza de LTC privada que se agotó por haber alcanzado su límite máximo de beneficio. ¿Qué programa cubre GENERALMENTE su cuidado continuado a partir de este punto?",
      o: [
        "Medicare generalmente asume automáticamente la cobertura una vez que el LTC privado se agota completamente",
        "Medicaid generalmente asume la cobertura del cuidado custodial continuado, actuando como el programa de respaldo de último recurso una vez agotados tanto los recursos personales como el beneficio del LTC privado",
        "Ningún programa generalmente cubre la situación — el asegurado quedaría completamente sin cobertura de ningún tipo",
        "El seguro de Medigap generalmente asumiría automáticamente la cobertura del cuidado custodial en esta situación específica"
      ],
      a: 1,
      trampa: "Medicaid generalmente funciona como el programa de RESPALDO DE ÚLTIMO RECURSO, activándose precisamente en escenarios donde tanto los recursos personales como cualquier cobertura privada de LTC se han agotado completamente.",
      correcto: "MEDICAID generalmente asume la cobertura del cuidado custodial continuado en este escenario, funcionando como el programa de respaldo de último recurso. Esta es precisamente la situación estructural para la cual Medicaid está diseñado dentro del sistema de cuidado a largo plazo — cubrir a personas que han agotado tanto sus recursos personales como cualquier cobertura privada disponible. [VERIFICADO — función estructural estable de Medicaid como respaldo final del sistema]",
      incorrectos: [
        "A) Medicare generalmente NO asume automáticamente esta cobertura — Medicare tiene límites estructurales propios de días para cuidado especializado, independientes del LTC privado.",
        "C) Generalmente SÍ existe cobertura disponible en este escenario específico — Medicaid está diseñado estructuralmente para cubrir precisamente esta situación.",
        "D) Medigap generalmente no está diseñado para cubrir cuidado custodial de largo plazo — su función es complementar los costos compartidos de Medicare tradicional."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Cuál es GENERALMENTE una de las razones principales por las que muchas personas consideran adquirir un seguro de LTC privado a pesar de la existencia de Medicaid como respaldo eventual?",
      a: 1,
      o: [
        "Porque Medicaid generalmente ofrece exactamente la misma calidad y flexibilidad de opciones de cuidado que el LTC privado, sin ninguna diferencia relevante",
        "Porque calificar para Medicaid generalmente requiere primero agotar sustancialmente los recursos personales y activos acumulados, mientras que el LTC privado permite generalmente preservar el patrimonio personal y frecuentemente ofrece mayor flexibilidad en la elección de proveedores de cuidado",
        "Porque Medicaid generalmente no cubre bajo ninguna circunstancia el cuidado en hogares de enfermería",
        "Porque el LTC privado generalmente es obligatorio por ley federal para todas las personas mayores de 60 años"
      ],
      trampa: "La preservación del patrimonio personal y la mayor flexibilidad de elección son generalmente las razones centrales que motivan la adquisición de LTC privado, a pesar de la existencia eventual de Medicaid como respaldo.",
      correcto: "Muchas personas consideran el LTC privado porque calificar para Medicaid generalmente requiere primero un proceso de 'spend-down' que agota sustancialmente los recursos y activos personales acumulados durante toda una vida. El LTC privado generalmente permite preservar mayor patrimonio personal para herederos, y frecuentemente ofrece mayor flexibilidad en la elección de instalaciones y proveedores de cuidado específicos. [VERIFICADO — principio general y ampliamente reconocido de planificación financiera relacionada con LTC]",
      incorrectos: [
        "A) Existen generalmente diferencias prácticas relevantes en cuanto a flexibilidad de elección y calidad percibida entre las opciones disponibles bajo Medicaid versus cobertura privada.",
        "C) Medicaid SÍ generalmente cubre el cuidado en hogares de enfermería, específicamente una vez cumplidos los requisitos de elegibilidad correspondientes.",
        "D) No existe generalmente una obligación legal federal que requiera que todas las personas mayores de 60 años adquieran LTC privado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Comparando estructuralmente Medicare, Medicaid, y el seguro LTC privado en el contexto específico del cuidado a largo plazo custodial, ¿cuál descripción es GENERALMENTE la más precisa?",
      o: [
        "Los tres programas generalmente cubren de forma equivalente e intercambiable el mismo tipo de cuidado custodial de largo plazo",
        "Medicare generalmente ofrece cobertura limitada en tiempo y condicionada para cuidado ESPECIALIZADO; Medicaid generalmente cubre cuidado custodial pero requiere agotamiento sustancial de recursos personales previos; el LTC privado generalmente cubre cuidado custodial sin ese requisito de agotamiento de recursos, a cambio de primas pagadas previamente",
        "Medicare generalmente es el único programa de los tres que cubre efectivamente el cuidado custodial de largo plazo",
        "Medicaid generalmente es exclusivamente un programa de seguro privado sin ninguna participación gubernamental"
      ],
      a: 1,
      trampa: "Cada uno de los tres programas tiene un rol y estructura de cobertura claramente diferenciado dentro del ecosistema general de cuidado a largo plazo — no son equivalentes ni intercambiables entre sí.",
      correcto: "MEDICARE: cobertura limitada y condicionada para cuidado ESPECIALIZADO tras hospitalización calificante. MEDICAID: cubre generalmente cuidado CUSTODIAL de largo plazo, pero requiere generalmente agotamiento sustancial de recursos personales previos (spend-down) como condición de elegibilidad. LTC PRIVADO: cubre generalmente cuidado custodial SIN requerir agotamiento de recursos, a cambio de primas pagadas previamente por el asegurado durante la vigencia del contrato. [VERIFICADO — síntesis estructural estable de los roles diferenciados de los tres sistemas]",
      incorrectos: [
        "A) Los tres programas generalmente NO son equivalentes ni intercambiables — cada uno tiene un diseño, propósito y condiciones de elegibilidad estructuralmente distintos.",
        "C) Medicare generalmente NO es el programa principal para cuidado custodial de largo plazo — su cobertura está limitada estructuralmente al cuidado especializado de corto plazo.",
        "D) Medicaid es generalmente un programa CONJUNTO gubernamental (estatal-federal) — no es un programa de seguro privado."
      ]
    }
  ]
},

{
  id: "ltc_004",
  area: "ltc",
  concepto: "Tipos de Cuidado y Niveles de Atención en LTC",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la diferencia GENERAL entre 'Cuidado Custodial' (Custodial Care) y 'Cuidado Especializado' (Skilled Care) en el contexto de LTC?",
      o: [
        "Son términos generalmente sinónimos e intercambiables sin ninguna distinción práctica relevante",
        "El Cuidado Custodial generalmente se refiere a asistencia con actividades básicas diarias (bañarse, vestirse) que no requiere necesariamente personal médico calificado; el Cuidado Especializado generalmente requiere personal médico o de enfermería calificado para procedimientos específicos",
        "El Cuidado Especializado generalmente se refiere exclusivamente a cuidado proporcionado en el hogar del paciente",
        "El Cuidado Custodial generalmente solo puede proporcionarse en hospitales, nunca en el hogar ni en instalaciones de cuidado"
      ],
      a: 1,
      trampa: "La distinción fundamental está en el TIPO de asistencia requerida — asistencia básica funcional versus procedimientos médicos que requieren personal calificado específico.",
      correcto: "CUIDADO CUSTODIAL = asistencia generalmente con actividades básicas de la vida diaria (bañarse, vestirse, comer) que no requiere necesariamente personal médico calificado especializado. CUIDADO ESPECIALIZADO (Skilled Care) = requiere generalmente la intervención de personal médico o de enfermería calificado para procedimientos médicos específicos (como administración de medicamentos intravenosos, cuidado de heridas complejas). [VERIFICADO — distinción conceptual fundamental y estable en el contexto de LTC]",
      incorrectos: [
        "A) NO son generalmente sinónimos — representan niveles y tipos de cuidado estructuralmente diferentes con implicaciones distintas de cobertura.",
        "C) El Cuidado Especializado generalmente puede proporcionarse en múltiples entornos (hospital, hogar de enfermería, e incluso en el hogar bajo ciertas condiciones) — no exclusivamente en el hogar del paciente.",
        "D) El Cuidado Custodial generalmente puede proporcionarse en múltiples entornos, incluyendo el hogar del paciente, instalaciones de cuidado asistido, y hogares de enfermería — no exclusivamente en hospitales."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué describe GENERALMENTE el término 'Cuidado en el Hogar' (Home Health Care) dentro del contexto de una póliza LTC?",
      o: [
        "Cuidado proporcionado exclusivamente por familiares del asegurado sin ninguna compensación económica",
        "Servicios de cuidado (que pueden incluir tanto asistencia custodial como cuidado especializado según el caso) proporcionados en la residencia del asegurado, en lugar de en una institución externa",
        "Un tipo de cuidado que generalmente nunca está cubierto por ninguna póliza LTC moderna",
        "Cuidado que generalmente solo pueden recibir personas que viven completamente solas, sin ningún familiar cercano"
      ],
      a: 1,
      trampa: "El Cuidado en el Hogar se define generalmente por la UBICACIÓN donde se proporciona el servicio (la residencia del asegurado) — no por quién específicamente lo proporciona ni por restricciones sobre la situación familiar del asegurado.",
      correcto: "Cuidado en el Hogar (Home Health Care) describe generalmente servicios de cuidado —que pueden abarcar desde asistencia custodial básica hasta cuidado de enfermería especializado según las necesidades específicas del caso— proporcionados en la RESIDENCIA del asegurado, como alternativa a recibir ese cuidado en una institución externa como un hogar de enfermería. [VERIFICADO — definición conceptual estándar del término]",
      incorrectos: [
        "A) El cuidado en el hogar generalmente puede ser proporcionado por profesionales de cuidado remunerados, no exclusivamente por familiares sin compensación.",
        "C) Muchas pólizas LTC modernas SÍ generalmente incluyen cobertura para cuidado en el hogar como una de las opciones disponibles de nivel de cuidado.",
        "D) No existe generalmente una restricción de que el cuidado en el hogar solo esté disponible para personas que viven completamente solas."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es GENERALMENTE una ventaja reconocida del 'Cuidado de Relevo' (Respite Care) dentro de una póliza LTC?",
      o: [
        "Permite generalmente que el cuidador familiar principal tome un descanso temporal, mientras un proveedor profesional asume el cuidado del asegurado durante ese período específico",
        "Reemplaza generalmente de forma permanente al cuidador familiar principal sin ninguna posibilidad de que este retome el rol de cuidado posteriormente",
        "Está disponible generalmente únicamente para asegurados que residen permanentemente en un hogar de enfermería institucional",
        "Se refiere generalmente exclusivamente a servicios de cuidado prestados durante emergencias médicas agudas específicamente"
      ],
      a: 0,
      trampa: "El Cuidado de Relevo está diseñado específicamente para proporcionar un descanso TEMPORAL al cuidador familiar principal — no para reemplazarlo de forma permanente.",
      correcto: "El Cuidado de Relevo (Respite Care) generalmente permite que el cuidador familiar principal (frecuentemente un cónyuge o hijo adulto) tome un descanso TEMPORAL de sus responsabilidades de cuidado, mientras un proveedor profesional asume temporalmente esas funciones durante un período limitado específico. Es un beneficio generalmente valorado por reconocer el desgaste (caregiver burnout) que enfrentan los cuidadores familiares. [VERIFICADO — propósito conceptual estándar de este beneficio característico de muchas pólizas LTC]",
      incorrectos: [
        "B) El Cuidado de Relevo está diseñado generalmente como una solución TEMPORAL — no como un reemplazo permanente del cuidador familiar.",
        "C) El Cuidado de Relevo generalmente puede aplicarse tanto para asegurados que reciben cuidado en el hogar como para otras situaciones — no está limitado exclusivamente a residentes institucionales.",
        "D) El Cuidado de Relevo generalmente se refiere a descansos planificados regulares del cuidador — no específicamente a situaciones de emergencia médica aguda."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué describe GENERALMENTE el término 'Cuidado en Instalación de Vida Asistida' (Assisted Living Facility Care) en el contexto de LTC?",
      o: [
        "Un nivel de cuidado generalmente similar al de un hospital de cuidados intensivos, con supervisión médica constante las 24 horas",
        "Un nivel de cuidado intermedio generalmente proporcionado en instalaciones residenciales especializadas, ofreciendo asistencia con ADLs mientras se preserva mayor independencia que en un hogar de enfermería tradicional",
        "Un nivel de cuidado que generalmente solo está disponible para personas con recursos económicos ilimitados",
        "Un servicio que generalmente nunca está cubierto por pólizas LTC modernas, independientemente de sus características específicas"
      ],
      a: 1,
      trampa: "La Vida Asistida representa generalmente un nivel INTERMEDIO de cuidado — entre la independencia completa y el cuidado más intensivo de un hogar de enfermería tradicional.",
      correcto: "El Cuidado en Instalación de Vida Asistida generalmente describe un nivel de cuidado INTERMEDIO, proporcionado en instalaciones residenciales especializadas diseñadas para ofrecer asistencia con ADLs y algunos servicios de apoyo, mientras generalmente se preserva un grado mayor de independencia y autonomía personal comparado con el nivel de cuidado más intensivo característico de un hogar de enfermería tradicional. [VERIFICADO — definición conceptual estándar del nivel de cuidado descrito]",
      incorrectos: [
        "A) El nivel de supervisión médica de la Vida Asistida generalmente es considerablemente menor que el de un hospital de cuidados intensivos — no es comparable a ese nivel de intensidad médica.",
        "C) No existe generalmente una restricción exclusiva basada en recursos económicos ilimitados para acceder a este tipo de instalación.",
        "D) Muchas pólizas LTC modernas SÍ generalmente incluyen cobertura para instalaciones de vida asistida como una de las opciones de nivel de cuidado disponibles."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Pedro, 75 años, tiene dificultad progresiva con 2 ADLs pero prefiere fuertemente permanecer en su propia residencia en lugar de mudarse a una institución de cuidado. ¿Qué opción de nivel de cuidado, generalmente disponible bajo pólizas LTC modernas comprehensivas, sería MÁS APROPIADA para respetar esta preferencia mientras se atienden sus necesidades?",
      o: [
        "Únicamente la opción de internamiento inmediato en un hogar de enfermería institucional, sin ninguna alternativa disponible",
        "Cuidado en el Hogar (Home Health Care) — permitiendo generalmente que Pedro reciba la asistencia necesaria para sus 2 ADLs comprometidas mientras permanece en su propia residencia",
        "Generalmente ninguna póliza LTC moderna ofrece flexibilidad para cuidado fuera de instituciones formales",
        "Únicamente cuidado de relevo temporal, sin ninguna opción de cuidado continuado a largo plazo en el hogar"
      ],
      a: 1,
      trampa: "Muchas pólizas LTC modernas están diseñadas específicamente para ofrecer flexibilidad de nivel de cuidado, incluyendo la opción de recibir asistencia continuada directamente en la residencia del asegurado.",
      correcto: "El Cuidado en el Hogar (Home Health Care) sería generalmente la opción más apropiada para la situación y preferencia de Pedro. Muchas pólizas LTC modernas comprehensivas están diseñadas específicamente para ofrecer esta flexibilidad, permitiendo que el asegurado reciba asistencia calificada con sus ADLs comprometidas directamente en su propia residencia, en lugar de requerir obligatoriamente una mudanza institucional. [VERIFICADO — flexibilidad de nivel de cuidado generalmente disponible en el diseño de pólizas LTC modernas comprehensivas]",
      incorrectos: [
        "A) Generalmente existen alternativas disponibles al internamiento institucional inmediato bajo pólizas LTC modernas comprehensivas y bien diseñadas.",
        "C) Muchas pólizas LTC modernas SÍ generalmente ofrecen flexibilidad significativa para cuidado fuera de instituciones formales, particularmente cuidado en el hogar.",
        "D) El cuidado de relevo es generalmente un beneficio adicional específico para descanso del cuidador — no la única opción de cuidado continuado disponible en el hogar bajo pólizas comprehensivas."
      ]
    }
  ]
}

]; // fin PK_LTC

if (typeof module !== 'undefined') module.exports = { PK_LTC };
