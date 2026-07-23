// ============================================================
// PEARSON KILLER — pk-data-florida.js
// Módulo: Leyes, Reglas y Regulaciones de Florida
// 5 conceptos × 5 variantes = 25 preguntas
//
// [VERIFICADO] = mecánica de producto o regla estable ampliamente documentada
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra Florida Statutes vigente
// Ver VERIFICATION_NOTES.md
// ============================================================

const PK_FLORIDA = [

{
  id: "florida_001",
  area: "florida",
  concepto: "Período de Examen Gratuito (Free Look) en Florida",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En Florida, ¿cuántos días tiene GENERALMENTE el período de examen gratuito (free look) para una póliza individual de seguro de vida?",
      o: [
        "7 días",
        "10 días",
        "14 días",
        "30 días"
      ],
      a: 2,
      trampa: "Es fácil confundir el free look de vida y anualidades (14 días) con salud (10 días) o Medigap y LTC (30 días).",
      correcto: "Según el manual 2-15, el período de examen gratuito para pólizas de VIDA y ANUALIDADES en Florida es de 14 DÍAS desde la entrega.",
      incorrectos: [
        "A) 7 días no corresponde al plazo del manual para vida.",
        "B) 10 días corresponde al free look de salud.",
        "D) 30 días corresponde a suplemento de Medicare y cuidado a largo plazo."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "ESCENARIO",
      q: "Rosa compra una anualidad en Florida y cambia de opinión 25 días después de recibirla. Según el manual 2-15, ¿está dentro del free look?",
      o: [
        "No — el free look de anualidades es de 14 días y ya transcurrió",
        "Sí — toda anualidad tiene 30 días",
        "Únicamente si el agente acepta voluntariamente procesar la devolución",
        "No — una vez firmado el contrato, la anualidad no puede devolverse bajo ninguna circunstancia"
      ],
      a: 0,
      trampa: "No confundir el free look de anualidades (14 días) con los 30 días de Medigap y LTC.",
      correcto: "Según el manual 2-15, la anualidad tiene 14 días de free look. A los 25 días, Rosa ya está fuera de ese plazo.",
      incorrectos: [
        "B) El manual no establece 30 días para anualidades; ese plazo corresponde a Medigap y LTC.",
        "C) El período de examen gratuito constituye un DERECHO legal establecido — no depende de la discreción voluntaria del agente.",
        "D) Durante el período de examen gratuito vigente, el contrato generalmente SIEMPRE puede devolverse por derecho legal."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes afirmaciones GENERALES sobre los períodos de examen gratuito en Florida es la MENOS PRECISA?",
      o: [
        "Las pólizas de vida y las anualidades tienen 14 días",
        "Las pólizas de salud tienen 10 días",
        "Medigap y cuidado a largo plazo tienen 30 días",
        "Los períodos de examen gratuito son completamente opcionales y discrecionales para cada aseguradora individual"
      ],
      a: 3,
      trampa: "La palabra 'opcionales' es la señal clave — los períodos de examen gratuito constituyen un derecho legal generalmente obligatorio, no una cortesía discrecional de la aseguradora.",
      correcto: "Los períodos de examen gratuito son GENERALMENTE OBLIGATORIOS por ley en Florida — no son discrecionales para las aseguradoras individuales. La opción D es la afirmación MENOS PRECISA entre las presentadas. [VERIFICADO — el principio de obligatoriedad legal es estable, independientemente de los plazos exactos específicos]",
      incorrectos: [
        "A) Esta afirmación coincide con el manual.",
        "B) Esta afirmación coincide con el manual.",
        "C) Esta afirmación coincide con el manual."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Durante el período de examen gratuito vigente, si el asegurado decide formalmente devolver la póliza, ¿qué recibe GENERALMENTE como reembolso?",
      o: [
        "El valor de rescate en efectivo acumulado, menos gastos administrativos correspondientes",
        "La prima pagada, menos el valor proporcional de la cobertura ya utilizada durante ese período",
        "El reembolso completo de la totalidad de las primas pagadas, sin deducciones",
        "Un crédito aplicable exclusivamente hacia una nueva póliza con la misma compañía aseguradora"
      ],
      a: 2,
      trampa: "Algunas de las opciones alternativas suenan superficialmente razonables pero implican deducciones — el período de examen gratuito generalmente garantiza un reembolso TOTAL sin deducción alguna.",
      correcto: "Durante el período de examen gratuito vigente, el asegurado generalmente tiene derecho a un REEMBOLSO COMPLETO de la totalidad de las primas pagadas — sin deducciones por gastos administrativos ni por cobertura ya transcurrida. [VERIFICADO — principio fundamental estable del free look]",
      incorrectos: [
        "A) Generalmente no se deducen gastos administrativos durante el período de examen gratuito vigente.",
        "B) Generalmente no se deduce ningún valor correspondiente a la cobertura ya utilizada durante ese período específico.",
        "D) El reembolso es generalmente en efectivo — no limitado a un crédito exclusivo hacia otra póliza."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "Un agente le declara a su cliente: 'Si no le gusta la póliza, tiene aproximadamente una semana para devolverla.' Si la póliza en cuestión es de vida individual, ¿constituye esta declaración potencialmente un problema?",
      o: [
        "No — el agente tiene discreción profesional para comunicar el período de examen gratuito de la manera que considere apropiada",
        "Potencialmente sí — si el período aplicable es de 14 días, comunicar únicamente 'una semana' (7 días) podría transmitir información imprecisa que subestima el derecho real del cliente",
        "No — una semana (7 días) es generalmente tiempo suficiente para que el cliente examine adecuadamente la póliza",
        "Sí — el agente nunca debería mencionar en absoluto el período de examen gratuito al cliente bajo ninguna circunstancia"
      ],
      a: 1,
      trampa: "Comunicar un plazo menor al legalmente establecido, aunque sea de forma imprecisa o coloquial, podría llevar al cliente a ejercer su derecho con menos tiempo del que realmente posee.",
      correcto: "Si el período aplicable es de 14 días, describir el derecho como 'aproximadamente una semana' podría generar confusión o subestimación del plazo real disponible para el cliente — un agente debería comunicar el plazo exacto con precisión, dado que constituye un derecho legal específico del consumidor. [VERIFICADO — principio general de comunicación precisa y transparente en la relación agente-cliente]",
      incorrectos: [
        "A) La comunicación imprecisa de un derecho legal específico del consumidor no es simplemente una cuestión de discreción profesional libre.",
        "C) Comunicar un plazo aproximado menor al legal real podría llevar al cliente a actuar con menos tiempo del que legalmente posee.",
        "D) El agente generalmente SÍ debe informar sobre este derecho al cliente — la omisión total también sería problemática."
      ]
    }
  ]
},

{
  id: "florida_002",
  area: "florida",
  concepto: "Idoneidad (Suitability) — Regulación de Florida",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Los requisitos de idoneidad para la venta de anualidades en Florida generalmente imponen documentación MÁS RIGUROSA para personas de:",
      o: [
        "Menores de 30 años de edad",
        "Entre 40 y 50 años de edad",
        "65 años de edad o más",
        "Cualquier edad, siempre que declaren ingresos por debajo de cierto umbral"
      ],
      a: 2,
      trampa: "Florida generalmente impone requisitos de documentación de idoneidad especialmente reforzados para la población de 65 años en adelante, reconociendo su potencial mayor vulnerabilidad financiera.",
      correcto: "Florida generalmente establece requisitos de idoneidad MEJORADOS y documentación más rigurosa para anualidades vendidas a personas de 65 AÑOS O MÁS. [REQUIERE VERIFICACIÓN — confirmar el umbral exacto de edad y los requisitos específicos vigentes contra la regulación actual de Florida y los estándares NAIC adoptados]",
      incorrectos: [
        "A) Los menores de 30 años generalmente no están sujetos a requisitos de idoneidad especialmente reforzados en este contexto.",
        "B) No existe generalmente un tramo de estrictez especial reconocido específicamente para el rango de 40-50 años.",
        "D) El nivel de ingreso declarado no es, por sí mismo, generalmente el factor que activa requisitos especiales de documentación reforzada."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "EXCEPTO",
      q: "Para determinar la idoneidad de una recomendación de producto de seguro o anualidad, el agente debe generalmente evaluar TODO lo siguiente EXCEPTO:",
      o: [
        "La situación financiera actual y los activos disponibles del cliente",
        "Los objetivos de inversión y las necesidades de liquidez del cliente",
        "La tasa de comisión específica que el agente recibirá por concretar esa venta particular",
        "La tolerancia al riesgo y el horizonte de tiempo relevante del cliente"
      ],
      a: 2,
      trampa: "La palabra EXCEPTO señala lo que estructuralmente NO pertenece al análisis legítimo de idoneidad — la comisión del agente nunca es un factor apropiado.",
      correcto: "La tasa de comisión que recibirá el agente NO constituye un factor legítimo de idoneidad bajo ningún estándar regulatorio o ético reconocido. Los factores apropiados son exclusivamente relativos al CLIENTE: su situación financiera, objetivos, necesidades de liquidez, tolerancia al riesgo y horizonte de tiempo. [VERIFICADO — principio ético y regulatorio fundamental y estable]",
      incorrectos: [
        "A) La situación financiera del cliente SÍ constituye un factor esencial y legítimo de idoneidad.",
        "B) Los objetivos de inversión y las necesidades de liquidez SÍ constituyen factores esenciales de idoneidad.",
        "D) La tolerancia al riesgo y el horizonte de tiempo SÍ constituyen factores esenciales de idoneidad."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "Un agente en Florida vende una anualidad con un período de penalidad por retiro anticipado de 10 años a un cliente de 82 años que tiene una necesidad documentada de liquidez dentro de 3 años. ¿Cómo se clasifica GENERALMENTE esta práctica bajo los estándares de idoneidad?",
      o: [
        "Como Twisting — porque implica el reemplazo de una póliza existente mediante información falsa",
        "Como Rebating — porque implica ofrecer al cliente un incentivo financiero prohibido",
        "Como una venta NO IDÓNEA — el producto específico resulta estructuralmente incompatible con la necesidad de tiempo documentada del cliente",
        "Como Tergiversación — porque implica necesariamente mentir sobre las características del producto"
      ],
      a: 2,
      trampa: "El elemento central y definitorio de este escenario es la INCOMPATIBILIDAD estructural entre el producto vendido y las necesidades reales y documentadas del cliente.",
      correcto: "Esta situación se clasifica generalmente como una VENTA NO IDÓNEA. El cliente tiene una necesidad de liquidez documentada dentro de 3 años, pero el producto impone una penalidad de retiro anticipado durante 10 años — una incompatibilidad estructural clara entre producto y necesidad del cliente. [VERIFICADO — principio de suitability aplicado consistentemente]",
      incorrectos: [
        "A) No hay evidencia en este escenario específico de que se esté reemplazando una póliza existente mediante información falsa.",
        "B) No hay mención de ningún incentivo financiero prohibido ofrecido en este escenario.",
        "D) No se indica específicamente que el agente haya mentido sobre las características objetivas del producto."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "PRIMERO",
      q: "¿En qué momento del proceso de venta debe GENERALMENTE completarse el análisis de idoneidad conforme a los estándares aplicables en Florida?",
      o: [
        "Después de que el cliente firme la solicitud, con el propósito de validar retroactivamente su decisión ya tomada",
        "ANTES de realizar cualquier recomendación específica de producto — el análisis debe lógicamente preceder a la sugerencia",
        "Después de que la compañía aseguradora emita formalmente la póliza correspondiente",
        "Únicamente en el caso específico de que el cliente lo solicite expresamente al agente"
      ],
      a: 1,
      trampa: "El análisis de idoneidad debe preceder lógica y temporalmente a la recomendación específica — realizarlo posteriormente elimina su propósito preventivo fundamental.",
      correcto: "El análisis de idoneidad debe completarse GENERALMENTE ANTES de realizar cualquier recomendación específica de producto. El agente primero debe conocer y documentar adecuadamente la situación del cliente, y solo entonces determinar y recomendar un producto apropiado. [VERIFICADO — principio fundamental y estable de suitability]",
      incorrectos: [
        "A) Realizar el análisis después de la firma lo convierte en un ejercicio retroactivo que elimina su propósito preventivo real.",
        "C) Esperar hasta la emisión formal de la póliza resulta completamente inadecuado desde la perspectiva regulatoria.",
        "D) La idoneidad constituye generalmente una obligación proactiva del agente — no depende de una solicitud expresa del cliente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Pedro, 67 años, con ingresos fijos mensuales documentados de aproximadamente $2,500, tiene una necesidad médica proyectada de liquidez dentro de 3 años. El agente le recomienda una anualidad con período de penalidad de 8 años. Pedro firma voluntariamente el documento de idoneidad presentado. ¿Constituye esta venta generalmente idónea bajo los estándares aplicables?",
      o: [
        "Sí — la firma voluntaria del cliente en el documento implica generalmente que comprendió y aceptó plenamente los términos",
        "Sí — Pedro tiene 67 años, superando el umbral de 65 años que activa requisitos especiales, lo cual generalmente valida cualquier recomendación",
        "Generalmente No — el producto específico recomendado resulta estructuralmente incompatible con la necesidad de liquidez documentada del cliente dentro de un plazo determinado",
        "La idoneidad depende exclusivamente de si la comisión recibida por el agente se mantiene dentro de límites legalmente permitidos"
      ],
      a: 2,
      trampa: "Ni la firma voluntaria del cliente NI la superación de un umbral de edad establecen por sí solas la idoneidad genuina — la compatibilidad real entre producto y necesidad documentada es el criterio determinante.",
      correcto: "Esta venta generalmente NO sería idónea bajo los estándares aplicables. El cliente tiene una necesidad de liquidez documentada dentro de 3 años, pero el producto específico impone penalidades por retiro anticipado durante 8 años — una incompatibilidad estructural que la firma voluntaria del cliente no subsana automáticamente. [VERIFICADO — principio de suitability]",
      incorrectos: [
        "A) La firma voluntaria del cliente no establece automáticamente idoneidad genuina si el producto resulta objetivamente incompatible con sus necesidades documentadas.",
        "B) Superar el umbral de 65 años activa requisitos de documentación reforzada — no convierte automáticamente en idónea cualquier recomendación de producto.",
        "D) La legalidad de la comisión del agente resulta generalmente irrelevante para determinar si el producto específico es idóneo para las necesidades del cliente."
      ]
    }
  ]
},

{
  id: "florida_003",
  area: "florida",
  concepto: "Asociación de Garantía de Florida (Guaranty Association)",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es GENERALMENTE el límite máximo de cobertura de la Asociación de Garantía de Florida para beneficios de muerte de seguro de vida?",
      o: [
        "$100,000",
        "$200,000",
        "$300,000",
        "$500,000"
      ],
      a: 2,
      trampa: "Los límites entre categorías de producto son diferentes entre sí — el límite para vida no coincide con el límite generalmente más alto establecido para salud.",
      correcto: "La Florida Life and Health Insurance Guaranty Association generalmente establece un límite de $300,000 para beneficios de muerte de VIDA. Las anualidades generalmente también tienen un límite de $300,000. La cobertura de SALUD generalmente tiene un límite más alto. [REQUIERE VERIFICACIÓN — confirmar estos montos exactos contra la estructura vigente actual de la Florida Guaranty Association, ya que estos límites pueden ajustarse legislativamente]",
      incorrectos: [
        "A) $100,000 no corresponde generalmente al límite establecido para beneficios de vida.",
        "B) $200,000 no corresponde generalmente al límite establecido para beneficios de vida.",
        "D) $500,000 corresponde generalmente al límite más alto reservado para la categoría de SALUD, no para vida."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Cuál de los siguientes productos generalmente NO está cubierto por la Asociación de Garantía de Florida?",
      o: [
        "Una póliza de vida emitida por una aseguradora admitida en Florida",
        "Una anualidad emitida por una aseguradora admitida en Florida",
        "Una póliza de salud emitida por una aseguradora admitida en Florida",
        "Una póliza de surplus lines emitida por una aseguradora NO admitida en Florida"
      ],
      a: 3,
      trampa: "La protección de la Asociación de Garantía generalmente aplica exclusivamente a aseguradoras ADMITIDAS. Las aseguradoras de surplus lines (no admitidas) generalmente quedan fuera de esta protección.",
      correcto: "Las pólizas de SURPLUS LINES, emitidas por aseguradoras NO ADMITIDAS en Florida, generalmente NO están cubiertas por la Asociación de Garantía. Esta es una distinción importante que los agentes que trabajan con surplus lines deben comunicar claramente a sus clientes. [VERIFICADO — principio estructural estable de la Guaranty Association, aplicable exclusivamente a aseguradoras admitidas]",
      incorrectos: [
        "A) Las pólizas de vida de aseguradoras admitidas generalmente SÍ están cubiertas por la Asociación de Garantía.",
        "B) Las anualidades de aseguradoras admitidas generalmente SÍ están cubiertas por la Asociación de Garantía.",
        "C) Las pólizas de salud de aseguradoras admitidas generalmente SÍ están cubiertas por la Asociación de Garantía."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál práctica ilegal consiste específicamente en devolver parte de la comisión, prima o cualquier objeto de valor al cliente con el propósito de inducir la compra de una póliza de seguro?",
      o: [
        "Twisting",
        "Churning",
        "Rebating",
        "Tergiversación (Misrepresentation)"
      ],
      a: 2,
      trampa: "Rebating se define específicamente como devolver comisiones o dar cualquier tipo de valor para inducir la compra. Twisting y Churning se refieren estructuralmente a prácticas relacionadas con reemplazos innecesarios de pólizas.",
      correcto: "REBATING = ofrecer devolver parte de la prima o comisión, o entregar cualquier regalo o valor de cualquier tipo, con el propósito de inducir la compra de una póliza de seguro. Esta práctica es generalmente ilegal en Florida independientemente del monto involucrado. [VERIFICADO — definición conceptual estable de la práctica]",
      incorrectos: [
        "A) Twisting se refiere específicamente a usar información falsa para inducir el reemplazo de una póliza cambiando a una compañía diferente.",
        "B) Churning se refiere específicamente a cambios innecesarios de póliza realizados dentro de la misma compañía aseguradora.",
        "D) Tergiversación se refiere específicamente a hacer declaraciones falsas sobre las características objetivas de una póliza."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural CLAVE entre las prácticas ilegales de Twisting y Churning?",
      o: [
        "Twisting es generalmente legal bajo ciertas circunstancias específicas; Churning nunca lo es",
        "Churning involucra estructuralmente un cambio hacia una compañía aseguradora diferente; Twisting ocurre dentro de la misma compañía",
        "Twisting involucra estructuralmente un cambio hacia una compañía DIFERENTE mediante el uso de información falsa o engañosa; Churning ocurre estructuralmente DENTRO de la MISMA compañía mediante cambios innecesarios",
        "Ambos términos son estructuralmente idénticos — son completamente intercambiables para describir la misma práctica"
      ],
      a: 2,
      trampa: "Ambos términos tienen definiciones legales específicas y claramente diferenciadas entre sí — definitivamente no son intercambiables en su significado técnico.",
      correcto: "TWISTING = cambio estructural hacia una compañía DIFERENTE, mediante el uso de información falsa o engañosa que induce al cliente. CHURNING = cambios estructurales DENTRO de la MISMA compañía, generalmente innecesarios y realizados con el propósito de generar comisiones adicionales. La compañía involucrada constituye la diferencia definitoria clave entre ambas prácticas. [VERIFICADO — distinción conceptual estable]",
      incorrectos: [
        "A) AMBAS prácticas son generalmente ilegales en Florida — ninguna está permitida bajo circunstancias regulares.",
        "B) Esta descripción invierte estructuralmente las definiciones correctas de ambos términos.",
        "D) Son prácticas conceptualmente distintas con definiciones legales específicas y consecuencias potencialmente diferenciadas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "Un agente titular de licencia 2-15 de Florida, pero sin ninguna licencia adicional de valores (securities), procede a vender una anualidad variable a un cliente interesado. ¿Cuál es GENERALMENTE la consecuencia potencial más grave de esta acción?",
      o: [
        "Generalmente solo una advertencia verbal informal del regulador, considerando que sería una primera infracción",
        "Potencialmente la revocación o suspensión de la licencia estatal de seguros, junto con posibles sanciones adicionales por vender valores sin la licencia federal correspondiente requerida",
        "Generalmente solo una multa administrativa de carácter menor, dado que la intención declarada del agente era beneficiar al cliente",
        "Generalmente ninguna consecuencia significativa — la licencia 2-15 cubriría estructuralmente todos los productos de vida y anualidades sin excepción"
      ],
      a: 1,
      trampa: "Vender productos con componente de inversión variable sin la licencia de valores correspondiente constituye potencialmente una violación seria tanto de la regulación estatal como de la ley federal de valores.",
      correcto: "Vender una anualidad variable sin la licencia de valores correspondiente constituye potencialmente: 1) Venta de securities sin la licencia federal apropiada, Y 2) Una violación de los términos de la licencia estatal de seguros. Las consecuencias potenciales generalmente incluyen revocación de licencia, sanciones económicas significativas, y posible responsabilidad legal adicional. [VERIFICADO — principio regulatorio estable sobre el requisito de licencia de valores federal para productos variables]",
      incorrectos: [
        "A) Una simple advertencia verbal resultaría generalmente inadecuada para una violación de esta naturaleza y gravedad.",
        "C) La intención declarada del agente de beneficiar al cliente no exime generalmente de la violación legal objetiva cometida.",
        "D) La licencia 2-15 de Florida generalmente NO cubre productos con componente variable — estos requieren licencia de valores adicional."
      ]
    }
  ]
},

{
  id: "florida_004",
  area: "florida",
  concepto: "Reglas de Reemplazo de Pólizas de Vida en Florida",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Cuando un agente en Florida procede a reemplazar una póliza de vida existente, ¿en cuántos días hábiles GENERALMENTE debe notificar formalmente a la aseguradora que está siendo reemplazada?",
      o: [
        "1 día hábil desde la fecha de la nueva solicitud",
        "3 días hábiles desde la fecha de la nueva solicitud",
        "5 días hábiles desde la fecha de la nueva solicitud",
        "10 días hábiles desde la fecha de la nueva solicitud"
      ],
      a: 1,
      trampa: "Es fácil confundir este plazo con otros plazos regulatorios distintos que aplican a procesos diferentes dentro del sistema.",
      correcto: "La Regla de Reemplazo de Florida generalmente exige notificar a la aseguradora reemplazada dentro de 3 DÍAS HÁBILES. El propósito de este plazo es otorgarle a la aseguradora original una oportunidad razonable de contactar al cliente y potencialmente retener la póliza existente. [REQUIERE VERIFICACIÓN — confirmar este plazo exacto contra la Florida Administrative Code Rule 69B-162 vigente al momento del examen]",
      incorrectos: [
        "A) 1 día hábil resultaría generalmente insuficiente según la estructura conocida de esta regulación específica.",
        "C) 5 días hábiles excedería generalmente el plazo máximo requerido bajo esta regla específica.",
        "D) 10 días hábiles violaría significativamente el plazo establecido bajo esta regulación específica."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "El propósito PRINCIPAL de la Regla de Reemplazo de Vida en Florida es GENERALMENTE:",
      o: [
        "Incrementar estructuralmente las comisiones disponibles para los agentes que realizan reemplazos de pólizas",
        "Proteger al consumidor contra el Twisting y garantizar que cualquier reemplazo propuesto sea genuinamente beneficioso para su interés",
        "Garantizar contractualmente que la nueva póliza propuesta siempre tendrá beneficios objetivamente superiores a la existente",
        "Requerir aprobación individual previa del Departamento de Servicios Financieros para cada reemplazo específico realizado"
      ],
      a: 1,
      trampa: "Un reemplazo legítimo puede efectivamente tener mejores beneficios en algunos casos, pero el PROPÓSITO regulatorio fundamental de la regla es proteger contra el twisting — no garantizar mejores beneficios de forma automática.",
      correcto: "La Regla de Reemplazo protege GENERALMENTE al consumidor contra el TWISTING, exigiendo documentación comparativa transparente que permita al cliente tomar una decisión verdaderamente informada sobre el reemplazo propuesto. [VERIFICADO — propósito regulatorio fundamental y estable]",
      incorrectos: [
        "A) Las comisiones potenciales del agente no constituyen el propósito regulatorio fundamental de esta regla.",
        "C) La regla no garantiza automáticamente que la nueva póliza sea objetivamente mejor — únicamente exige comparación transparente.",
        "D) No se requiere generalmente aprobación previa individual del DFS para cada reemplazo específico realizado."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Al proceder con el reemplazo de una póliza de vida en Florida, el agente debe generalmente proporcionar al solicitante un documento formal de comparación. ¿Cuál es el propósito ESPECÍFICO de este documento?",
      o: [
        "Demostrar objetivamente que la nueva póliza propuesta es superior en absolutamente todos los aspectos relevantes",
        "Permitir al consumidor tomar una decisión INFORMADA, mostrando las diferencias objetivas en costos, beneficios, valores de rescate y estructura de primas entre ambas pólizas",
        "Confirmar administrativamente que el agente completó satisfactoriamente sus requisitos de educación continua vigentes",
        "Obtener formalmente la aprobación previa del Departamento de Seguros antes de proceder con cualquier reemplazo"
      ],
      a: 1,
      trampa: "El documento no busca DEMOSTRAR superioridad automática — su propósito es facilitar que el cliente DECIDA de forma genuinamente informada con base en información comparativa objetiva.",
      correcto: "El documento de comparación permite al consumidor visualizar objetivamente las diferencias reales en costos, beneficios, valores de rescate y estructura de primas entre ambas pólizas, facilitando así una decisión verdaderamente informada sobre el reemplazo propuesto. [VERIFICADO — propósito estructural del documento, estable]",
      incorrectos: [
        "A) El documento no presupone necesariamente que la nueva póliza sea superior — únicamente presenta diferencias objetivas.",
        "C) La educación continua constituye un requisito separado e independiente del proceso específico de licenciamiento del agente.",
        "D) No se requiere generalmente aprobación previa formal del departamento para cada reemplazo individual realizado."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un agente utiliza comparaciones falsas y afirmaciones engañosas para convencer a su cliente de cancelar una póliza existente con la Compañía A y adquirir una nueva póliza con la Compañía B. ¿Cómo se clasifica esta práctica específica?",
      o: [
        "Churning — porque implica generar rotación de pólizas dentro de una estructura similar",
        "Twisting — porque implica el uso de información falsa o engañosa para inducir específicamente un reemplazo hacia una compañía diferente",
        "Rebating — porque implica ofrecer algún tipo de incentivo financiero prohibido al cliente",
        "Tergiversación general, sin el elemento específico de inducir un reemplazo de póliza"
      ],
      a: 1,
      trampa: "El elemento definitorio clave es el cambio hacia una compañía DIFERENTE mediante el uso de información falsa — esto define específicamente al Twisting, no a las otras prácticas relacionadas.",
      correcto: "TWISTING = uso específico de información falsa o engañosa con el propósito de inducir a un asegurado a cancelar una póliza existente y adquirir una nueva en una compañía aseguradora DIFERENTE. El cambio de Compañía A hacia Compañía B mediante información falsa constituye el ejemplo clásico de esta práctica. [VERIFICADO — definición conceptual estable]",
      incorrectos: [
        "A) Churning se refiere estructuralmente a cambios innecesarios realizados DENTRO de la misma compañía aseguradora.",
        "C) Rebating se refiere estructuralmente a devolver comisiones o entregar regalos como incentivo — no está descrito en este escenario específico.",
        "D) La tergiversación simple, sin el elemento específico de inducir un reemplazo, no captura completamente la práctica descrita en este escenario."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "¿Cuál de los siguientes escenarios constituiría GENERALMENTE una violación de las Reglas de Reemplazo de Florida?",
      o: [
        "Un agente notifica a la aseguradora reemplazada dentro del plazo requerido de días hábiles Y entrega al cliente el documento de comparación correspondiente antes de la firma",
        "Un agente procede con el reemplazo de una póliza SIN notificar a la aseguradora original Y SIN entregar ninguna documentación comparativa al cliente",
        "Un agente recomienda de buena fe un reemplazo genuinamente beneficioso para el cliente y documenta cuidadosamente las razones específicas de esa recomendación",
        "Un agente entrega el documento de comparación completo, el cliente lo revisa y firma comprendiendo las diferencias, y posteriormente el agente procede formalmente con el reemplazo"
      ],
      a: 1,
      trampa: "La opción B describe específicamente las DOS omisiones simultáneas que la regulación de reemplazo generalmente prohíbe de forma explícita.",
      correcto: "Omitir la notificación requerida a la aseguradora reemplazada Y no entregar la documentación comparativa correspondiente al cliente constituyen generalmente DOS violaciones simultáneas e independientes de la Regla de Reemplazo — ambos requisitos son generalmente obligatorios bajo la regulación. [VERIFICADO — principio regulatorio estable]",
      incorrectos: [
        "A) Este escenario describe el procedimiento CORRECTO conforme a la regulación — notificación oportuna más documentación comparativa previa a la firma.",
        "C) Recomendar de buena fe con documentación adecuada de las razones constituye precisamente lo que la regulación busca fomentar.",
        "D) Entregar el documento comparativo, obtener comprensión y firma informada, y luego proceder constituye el procedimiento correcto establecido."
      ]
    }
  ]
},

{
  id: "florida_005",
  area: "florida",
  concepto: "Requisitos de Licenciamiento y Educación Continua en Florida",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál agencia estatal es GENERALMENTE la responsable principal de la regulación de seguros y del licenciamiento de agentes en Florida?",
      o: [
        "El Departamento de Servicios Financieros de Florida (DFS)",
        "La Oficina Federal de Seguros de los Estados Unidos",
        "La NAIC (National Association of Insurance Commissioners) directamente",
        "El Departamento del Tesoro de los Estados Unidos"
      ],
      a: 0,
      trampa: "Es común confundir el regulador estatal específico de Florida con organismos federales o con la NAIC, que cumple funciones de coordinación entre estados pero no de regulación directa de un estado individual.",
      correcto: "El Departamento de Servicios Financieros de Florida (DFS) es GENERALMENTE la agencia estatal principal responsable de la regulación de seguros, licenciamiento de agentes, y supervisión de cumplimiento normativo dentro del estado. [VERIFICADO — estructura regulatoria estatal estable de Florida]",
      incorrectos: [
        "B) No existe una 'Oficina Federal de Seguros' con esta función específica de regulación estatal directa en Florida.",
        "C) La NAIC generalmente coordina estándares entre estados pero NO tiene autoridad regulatoria directa dentro de Florida específicamente.",
        "D) El Departamento del Tesoro federal no tiene función regulatoria directa sobre el licenciamiento de agentes de seguros estatales."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Los agentes licenciados en Florida generalmente deben completar Educación Continua (Continuing Education / CE) de forma periódica para mantener su licencia vigente. ¿Cuál es GENERALMENTE la estructura de este requisito?",
      o: [
        "No existe ningún requisito de educación continua en Florida una vez obtenida la licencia inicial",
        "Existe generalmente un requisito periódico de horas de educación continua dentro de cada período de renovación de licencia",
        "La educación continua es generalmente opcional y depende únicamente de la preferencia individual del agente",
        "El requisito de educación continua aplica generalmente únicamente durante el primer año de licenciamiento"
      ],
      a: 1,
      trampa: "Florida generalmente mantiene un requisito estructural de educación continua periódica como condición para la renovación de licencia — no es un requisito único ni opcional.",
      correcto: "Florida generalmente requiere que los agentes licenciados completen un número determinado de horas de Educación Continua dentro de cada período de renovación de licencia, como condición para mantener la licencia vigente. [REQUIERE VERIFICACIÓN — confirmar el número exacto de horas requeridas y la periodicidad específica vigente contra la regulación actual del DFS]",
      incorrectos: [
        "A) SÍ existe generalmente un requisito continuo de educación — no se limita a la obtención inicial de la licencia.",
        "C) La educación continua generalmente NO es opcional — constituye un requisito obligatorio para la renovación de licencia.",
        "D) El requisito generalmente se extiende de forma periódica y continua — no se limita únicamente al primer año."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Bajo qué circunstancia general el DFS de Florida podría suspender o revocar la licencia de un agente de seguros?",
      o: [
        "Únicamente en el caso específico de que el agente no complete satisfactoriamente su educación continua requerida",
        "Generalmente por múltiples causas posibles, incluyendo: violaciones de las reglas de reemplazo, prácticas de rebating, twisting, churning, tergiversación, u otras violaciones de la conducta ética y legal establecida",
        "Únicamente si el agente recibe formalmente tres quejas de clientes documentadas por escrito",
        "El DFS generalmente no tiene autoridad legal para suspender o revocar licencias bajo ninguna circunstancia"
      ],
      a: 1,
      trampa: "La falta de educación continua es SOLO una de las múltiples causas posibles que podrían resultar en acción disciplinaria — no es la única causa reconocida.",
      correcto: "El DFS generalmente tiene autoridad amplia para suspender o revocar licencias por múltiples causas relacionadas con violaciones de conducta ética y legal, incluyendo (pero no limitado a): violaciones de las reglas de reemplazo, prácticas ilegales como rebating, twisting, churning, tergiversación, fraude, y otras conductas que violen los estándares regulatorios establecidos. [VERIFICADO — amplia autoridad regulatoria general del DFS, principio estructural estable]",
      incorrectos: [
        "A) La falta de educación continua es una posible causa entre muchas otras — no la única causa reconocida para acción disciplinaria.",
        "C) No existe generalmente un requisito específico de exactamente tres quejas formales como umbral fijo para la acción disciplinaria.",
        "D) El DFS SÍ tiene generalmente autoridad regulatoria amplia para suspender o revocar licencias bajo circunstancias apropiadas."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es GENERALMENTE la diferencia estructural entre un 'agente' y un 'broker' de seguros en el contexto regulatorio de Florida?",
      o: [
        "Un agente generalmente representa los intereses de la aseguradora; un broker generalmente representa los intereses del cliente/asegurado",
        "Un agente generalmente representa al cliente; un broker generalmente representa a la aseguradora",
        "Ambos términos son estructuralmente idénticos y completamente intercambiables sin ninguna distinción práctica relevante",
        "Un broker generalmente requiere una licencia federal especial mientras el agente únicamente requiere licencia estatal"
      ],
      a: 0,
      trampa: "La distinción tradicional de representación (agente-aseguradora versus broker-cliente) es un principio estructural clásico del derecho de seguros, aunque las líneas prácticas pueden diferir según el contexto específico.",
      correcto: "Conceptualmente, un AGENTE generalmente representa los intereses y actúa en nombre de la aseguradora que lo designó. Un BROKER generalmente representa los intereses del cliente/asegurado, buscando las mejores opciones disponibles en el mercado para ese cliente específico. [REQUIERE VERIFICACIÓN — esta distinción conceptual clásica puede tener matices y excepciones específicas en la práctica regulatoria moderna de Florida que ameritan confirmación adicional]",
      incorrectos: [
        "B) Esta descripción invierte la distinción conceptual tradicionalmente establecida entre ambos roles.",
        "C) Aunque en la práctica cotidiana los términos a veces se usan de forma coloquial intercambiable, conceptualmente representan roles de representación distintos.",
        "D) La licencia federal especial no es generalmente la distinción definitoria entre estos dos roles conceptuales."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Si un consumidor en Florida tiene una queja formal sobre la conducta de un agente de seguros, ¿cuál es GENERALMENTE el canal apropiado para presentar dicha queja?",
      o: [
        "Directamente ante un tribunal federal, sin necesidad de ningún proceso administrativo estatal previo",
        "Generalmente ante el Departamento de Servicios Financieros de Florida (DFS), la agencia estatal con autoridad regulatoria sobre agentes",
        "Únicamente ante la propia compañía aseguradora que empleó o contrató al agente en cuestión",
        "Ante la NAIC directamente, como organismo nacional coordinador de estándares"
      ],
      a: 1,
      trampa: "El canal regulatorio apropiado generalmente es la agencia estatal específica con autoridad directa sobre el licenciamiento y la conducta de agentes dentro de Florida.",
      correcto: "El Departamento de Servicios Financieros de Florida (DFS) es generalmente el canal apropiado y con autoridad regulatoria directa para recibir e investigar quejas relacionadas con la conducta de agentes de seguros licenciados en el estado. [VERIFICADO — estructura regulatoria estatal estable]",
      incorrectos: [
        "A) Generalmente existen procesos administrativos estatales apropiados disponibles antes de considerar una vía judicial federal directa.",
        "C) Aunque reportar a la compañía también puede ser apropiado en ciertos casos, el DFS mantiene la autoridad regulatoria formal sobre la licencia del agente.",
        "D) La NAIC generalmente cumple funciones de coordinación entre estados, pero no es el canal directo para presentar quejas específicas dentro de Florida."
      ]
    }
  ]
}

]; // fin PK_FLORIDA

if (typeof module !== 'undefined') module.exports = { PK_FLORIDA };

// Asignación explícita a window para garantizar disponibilidad
// global sin importar el motor JS o el timing de ejecución del navegador
if (typeof window !== 'undefined') window.PK_FLORIDA = PK_FLORIDA;
