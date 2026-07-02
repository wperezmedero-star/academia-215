// ============================================================
// PEARSON KILLER — pk-data-general.js
// Módulo: Conceptos Generales de Seguros
// 4 conceptos × 5 variantes = 20 preguntas
//
// [VERIFICADO] = principio legal/conceptual fundamental y estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// Ver VERIFICATION_NOTES.md
// ============================================================

const PK_GENERAL = [

{
  id: "gen_001",
  area: "generales",
  concepto: "Características Legales del Contrato de Seguro",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "El contrato de seguro se describe generalmente como 'ALEATORIO' (Aleatory) porque:",
      o: [
        "Puede generalmente cancelarse en cualquier momento por cualquiera de las partes sin ninguna consecuencia",
        "Las cantidades que intercambian las partes son generalmente desiguales e inciertas al momento de contratar",
        "Solo la aseguradora tiene generalmente obligaciones legalmente exigibles bajo el contrato",
        "Los términos son generalmente redactados exclusivamente por la aseguradora, sin negociación"
      ],
      a: 1,
      trampa: "Confundir 'aleatorio' con las características de 'unilateral' o 'de adhesión' — son conceptos legales distintos aunque relacionados.",
      correcto: "ALEATORIO = las cantidades que intercambian las partes son generalmente desiguales e inciertas. El asegurado puede pagar una prima modesta y potencialmente recibir un beneficio sustancialmente mayor — o pagar durante años sin nunca presentar una reclamación. [VERIFICADO — principio legal fundamental y estable de los contratos de seguro]",
      incorrectos: [
        "A) Esa característica describe más bien la naturaleza cancelable del contrato — un concepto distinto de 'aleatorio'.",
        "C) Esa característica describe específicamente al contrato 'unilateral' — un concepto legal diferente.",
        "D) Esa característica describe específicamente al contrato 'de adhesión' — un concepto legal diferente."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "El contrato de seguro se describe generalmente como 'UNILATERAL' porque:",
      o: [
        "Únicamente el asegurado realiza promesas legalmente exigibles dentro del contrato",
        "Únicamente la ASEGURADORA realiza una promesa legalmente exigible — pagar el beneficio correspondiente al ocurrir el evento asegurado cubierto",
        "Ambas partes tienen generalmente obligaciones exactamente iguales y recíprocas entre sí",
        "El contrato puede generalmente ser modificado de forma unilateral por la propia aseguradora en cualquier momento"
      ],
      a: 1,
      trampa: "Aunque superficialmente parece que ambas partes tienen obligaciones (el asegurado paga primas, la aseguradora paga beneficios), únicamente LA ASEGURADORA realiza una promesa legalmente exigible en sentido estricto.",
      correcto: "UNILATERAL = únicamente la ASEGURADORA realiza una promesa legalmente exigible dentro del contrato. El asegurado generalmente puede optar por dejar de pagar las primas sin que ello constituya un 'incumplimiento' del contrato en sentido legal estricto — la póliza simplemente caducaría. [VERIFICADO — principio legal fundamental y estable]",
      incorrectos: [
        "A) Es la aseguradora quien realiza generalmente la promesa legalmente exigible en sentido estricto — no el asegurado.",
        "C) Esa descripción correspondería más bien a un contrato 'bilateral' — un concepto legal distinto.",
        "D) La aseguradora generalmente no puede modificar unilateralmente los términos sustantivos ya establecidos del contrato vigente."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "El contrato de seguro se describe generalmente como 'DE ADHESIÓN' (Contract of Adhesion) porque:",
      o: [
        "El asegurado generalmente puede negociar libremente cada uno de los términos específicos del contrato",
        "Los términos son generalmente redactados por la aseguradora, y el asegurado generalmente solo puede optar por ACEPTAR o RECHAZAR el contrato en su totalidad, sin negociación individual de cláusulas",
        "Ambas partes generalmente redactan conjuntamente los términos específicos del contrato",
        "El término 'adhesión' generalmente significa que el contrato se adhiere o vincula legalmente a otro contrato preexistente"
      ],
      a: 1,
      trampa: "En el contexto de seguros, el asegurado generalmente 'se adhiere' a términos ya preestablecidos por la aseguradora — no participa en su redacción ni negociación individual.",
      correcto: "ADHESIÓN = los términos son generalmente redactados unilateralmente por la aseguradora, y el asegurado generalmente solo tiene la opción de ACEPTAR el contrato completo o RECHAZARLO, sin posibilidad práctica de negociar cláusulas individuales. Consecuencia legal importante: las ambigüedades del contrato generalmente se interpretan a favor del asegurado. [VERIFICADO — principio legal fundamental y estable]",
      incorrectos: [
        "A) El asegurado generalmente NO tiene la capacidad práctica de negociar términos individuales del contrato estándar.",
        "C) Los términos son generalmente redactados unilateralmente por la aseguradora — no de forma conjunta con el asegurado.",
        "D) 'Adhesión' generalmente no significa que el contrato se vincule a otro contrato preexistente distinto."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál principio legal establece generalmente que las ambigüedades en el lenguaje de una póliza de seguro se interpretan a favor del asegurado?",
      o: [
        "El Principio de Indemnización (Principle of Indemnity)",
        "La regla 'Contra Proferentem' (interpretación contra quien redactó el documento)",
        "El Principio de Subrogación (Subrogation)",
        "La Doctrina del Estoppel (impedimento por conducta previa)"
      ],
      a: 1,
      trampa: "El término técnico específico 'Contra Proferentem' puede no ser ampliamente conocido, pero describe precisamente el principio legal detrás de la interpretación de ambigüedades contractuales.",
      correcto: "Contra Proferentem = principio legal según el cual las ambigüedades en contratos de adhesión se interpretan generalmente EN CONTRA de la parte que redactó el documento (la aseguradora) y a FAVOR de la parte que se adhirió a él (el asegurado). [VERIFICADO — principio legal fundamental y ampliamente reconocido en el derecho de contratos]",
      incorrectos: [
        "A) El Principio de Indemnización establece generalmente que el seguro no debe generar una ganancia neta para el asegurado — un concepto legal distinto.",
        "C) La Subrogación se refiere generalmente al derecho de la aseguradora de recuperar pagos del tercero responsable — un concepto legal diferente.",
        "D) El Estoppel se refiere generalmente a impedir que una parte se retracte de una conducta previa en la que la otra parte confió razonablemente — un concepto relacionado pero distinto."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Una póliza contiene una cláusula redactada de forma ambigua respecto a si cubre muerte por actividades de aviación recreativa. El asegurado fallece practicando esa actividad. ¿Cómo resuelve GENERALMENTE un tribunal esta situación de ambigüedad contractual?",
      o: [
        "Generalmente a favor de la aseguradora, argumentando que las exclusiones de aviación son estándar en la práctica general de la industria",
        "Generalmente a favor del asegurado — las ambigüedades en contratos de adhesión generalmente se resuelven en contra de quien redactó el documento (la aseguradora)",
        "Se requiere generalmente un panel especializado de árbitros técnicos para resolver cualquier ambigüedad de este tipo",
        "La ambigüedad generalmente invalida la totalidad de la póliza, no solo la cláusula específicamente ambigua"
      ],
      a: 1,
      trampa: "La práctica general de la industria en otros contratos similares no resuelve automáticamente la ambigüedad específica presente en el lenguaje particular de ESTA póliza específica.",
      correcto: "Bajo el principio de Contra Proferentem, las ambigüedades en contratos de adhesión generalmente se resuelven a FAVOR del asegurado. La aseguradora redactó el contrato — es generalmente su responsabilidad asegurar claridad en el lenguaje utilizado. Si el lenguaje resultó ambiguo, la interpretación generalmente favorece al asegurado. [VERIFICADO — aplicación consistente del principio legal fundamental]",
      incorrectos: [
        "A) La práctica general de la industria en otros contratos no resuelve automáticamente la ambigüedad específica del lenguaje particular de esta póliza.",
        "C) Las ambigüedades contractuales generalmente se resuelven mediante principios de interpretación legal establecidos — no necesariamente requieren un panel arbitral especializado.",
        "D) La ambigüedad generalmente no invalida la totalidad de la póliza — determina específicamente cómo se interpreta la cláusula ambigua en cuestión."
      ]
    }
  ]
},

{
  id: "gen_002",
  area: "generales",
  concepto: "Prácticas Ilegales — Twisting, Churning, Rebating y Tergiversación",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál práctica ilegal se define generalmente como usar información falsa o engañosa para inducir a un asegurado a cancelar una póliza existente y adquirir una nueva en una compañía DIFERENTE?",
      o: [
        "Churning",
        "Twisting",
        "Rebating",
        "Estoppel"
      ],
      a: 1,
      trampa: "Twisting se define específicamente por el elemento del cambio hacia una compañía DIFERENTE mediante información falsa — no debe confundirse con Churning, que ocurre dentro de la misma compañía.",
      correcto: "TWISTING = uso de información falsa o engañosa con el propósito específico de inducir a un asegurado a cancelar su póliza existente y adquirir una nueva en una compañía aseguradora DIFERENTE. [VERIFICADO — definición conceptual estable y ampliamente reconocida de esta práctica]",
      incorrectos: [
        "A) Churning se refiere generalmente a cambios innecesarios de póliza realizados DENTRO de la misma compañía aseguradora.",
        "C) Rebating se refiere generalmente a devolver comisiones o entregar regalos para inducir la compra — sin el elemento específico de cambio entre compañías.",
        "D) Estoppel es un concepto legal completamente diferente relacionado con impedir que una parte se retracte de una conducta previa."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural CLAVE entre Twisting y Churning como prácticas ilegales?",
      o: [
        "Twisting es generalmente legal bajo ciertas circunstancias específicas reconocidas; Churning nunca lo es bajo ninguna circunstancia",
        "Churning involucra estructuralmente un cambio hacia una compañía DIFERENTE; Twisting ocurre estructuralmente dentro de la misma compañía",
        "Twisting involucra estructuralmente un cambio hacia una compañía DIFERENTE mediante información falsa; Churning ocurre estructuralmente DENTRO de la MISMA compañía mediante cambios innecesarios generalmente motivados por comisiones",
        "Ambos términos son generalmente sinónimos completamente intercambiables sin ninguna distinción práctica relevante"
      ],
      a: 2,
      trampa: "Ambas prácticas tienen definiciones legales específicas y claramente diferenciadas — la compañía involucrada (misma versus diferente) constituye la distinción estructural fundamental entre ellas.",
      correcto: "TWISTING = cambio estructural hacia una compañía DIFERENTE mediante información falsa o engañosa. CHURNING = cambios estructurales DENTRO de la MISMA compañía, generalmente innecesarios y motivados por la generación de comisiones adicionales para el agente. La identidad de la compañía involucrada constituye la diferencia estructural definitoria clave. [VERIFICADO — distinción conceptual estable entre ambas prácticas]",
      incorrectos: [
        "A) AMBAS prácticas son generalmente ilegales — ninguna de las dos está permitida bajo circunstancias regulares reconocidas.",
        "B) Esta descripción invierte estructuralmente las definiciones correctas de ambas prácticas.",
        "D) Son prácticas conceptualmente distintas, con definiciones legales específicas y potencialmente consecuencias regulatorias diferenciadas."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "Un agente entrega a su cliente $400 en efectivo como 'incentivo especial' para persuadirlo de adquirir una nueva póliza de vida. ¿Cuál práctica ilegal constituye GENERALMENTE esta acción?",
      o: [
        "Twisting — porque generalmente implica inducir el cambio de una póliza previamente existente",
        "Churning — porque generalmente implica la generación de comisiones a través de cambios de póliza",
        "Rebating — devolver parte de la comisión, o entregar dinero o cualquier objeto de valor, con el propósito de inducir la compra de una póliza de seguro",
        "Tergiversación — porque generalmente implica distorsionar el valor real y objetivo de la póliza ofrecida"
      ],
      a: 2,
      trampa: "El elemento definitorio central es la entrega de dinero o valor como incentivo directo para la compra — esto define específicamente la práctica de Rebating.",
      correcto: "REBATING = ofrecer devolver parte de la prima o comisión, o entregar cualquier dinero, regalo, o valor de cualquier tipo, con el propósito específico de inducir la compra de una póliza de seguro. Esta práctica es generalmente ilegal independientemente del monto específico involucrado en la transacción. [VERIFICADO — definición conceptual estable de esta práctica]",
      incorrectos: [
        "A) Twisting requiere generalmente el elemento específico de información falsa induciendo un cambio hacia otra compañía — no está presente en este escenario descrito.",
        "B) Churning requiere generalmente el elemento específico de cambios innecesarios DENTRO de la misma compañía — aquí se describe una compra nueva, no un cambio.",
        "D) Tergiversación se refiere generalmente a declaraciones falsas sobre las características objetivas del producto — el elemento central aquí es el dinero entregado, no una declaración falsa específica."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente constituye generalmente una práctica ilegal reconocida en el ámbito de seguros EXCEPTO:",
      o: [
        "Twisting — inducir el reemplazo de póliza mediante información falsa hacia otra compañía",
        "Análisis genuino de idoneidad realizado antes de recomendar formalmente un producto específico al cliente",
        "Rebating — ofrecer dinero o valor para inducir la compra de una póliza",
        "Tergiversación — realizar declaraciones falsas sobre las características objetivas de un producto de seguro"
      ],
      a: 1,
      trampa: "El análisis genuino de idoneidad es precisamente la práctica CORRECTA y recomendada — no una práctica ilegal — que la regulación busca fomentar activamente entre los agentes.",
      correcto: "El análisis genuino de idoneidad, realizado apropiadamente ANTES de formular cualquier recomendación específica al cliente, constituye generalmente la práctica CORRECTA y éticamente recomendada — precisamente lo opuesto a una práctica ilegal. Es un requisito regulatorio positivo, no una violación. [VERIFICADO — distinción fundamental entre práctica apropiada y prácticas ilegales]",
      incorrectos: [
        "A) Twisting SÍ constituye generalmente una práctica ilegal reconocida en la industria de seguros.",
        "C) Rebating SÍ constituye generalmente una práctica ilegal reconocida en la industria de seguros.",
        "D) Tergiversación SÍ constituye generalmente una práctica ilegal reconocida en la industria de seguros."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "Un agente recomienda genuinamente a su cliente el reemplazo de una póliza antigua por una nueva, porque objetivamente la nueva póliza ofrece mejores beneficios documentados para la situación actual del cliente. El agente notifica apropiadamente a la aseguradora original dentro del plazo requerido y entrega la documentación comparativa correspondiente antes de la firma. ¿Constituye esta acción GENERALMENTE una violación de las reglas de reemplazo o de las prácticas ilegales descritas?",
      o: [
        "Sí — cualquier recomendación de reemplazo de póliza generalmente constituye automáticamente una forma de Twisting",
        "No — este escenario describe generalmente el procedimiento CORRECTO y apropiado: notificación oportuna, documentación comparativa transparente, y una recomendación genuinamente fundamentada en el beneficio real del cliente",
        "Sí — porque el agente generalmente recibirá una comisión por esta venta, lo cual automáticamente constituiría Rebating",
        "Depende exclusivamente de si el cliente decide finalmente aceptar o rechazar la recomendación presentada"
      ],
      a: 1,
      trampa: "Un reemplazo LEGÍTIMO, realizado siguiendo apropiadamente el procedimiento correcto (notificación oportuna, documentación transparente, recomendación genuinamente fundamentada), es estructuralmente diferente de las prácticas ilegales descritas — no toda recomendación de reemplazo constituye automáticamente una violación.",
      correcto: "Este escenario describe generalmente el procedimiento CORRECTO y apropiado bajo la regulación: notificación oportuna a la aseguradora original, documentación comparativa transparente entregada antes de la firma, y una recomendación genuinamente fundamentada en el beneficio objetivo y real para el cliente. Esto es estructuralmente diferente del Twisting, que específicamente requiere el elemento de información FALSA o engañosa. [VERIFICADO — distinción fundamental entre reemplazo legítimo y prácticas ilegales]",
      incorrectos: [
        "A) NO cualquier recomendación de reemplazo constituye automáticamente Twisting — el elemento definitorio de esa práctica ilegal es específicamente la información falsa o engañosa, ausente en este escenario.",
        "C) Recibir una comisión legítima por una venta apropiada no constituye automáticamente Rebating — esa práctica requiere específicamente el elemento de devolver comisión o entregar valor adicional como incentivo.",
        "D) La legalidad del procedimiento seguido por el agente generalmente no depende de la decisión final del cliente de aceptar o rechazar la recomendación presentada."
      ]
    }
  ]
},

{
  id: "gen_003",
  area: "generales",
  concepto: "Subrogación, Indemnización e Interés Asegurable",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "Ana choca con un conductor negligente. Su propia aseguradora le paga los daños correspondientes a su vehículo. Posteriormente, la aseguradora de Ana procede a demandar al conductor negligente para recuperar lo pagado. ¿Cómo se denomina GENERALMENTE este derecho legal específico?",
      o: [
        "Estoppel",
        "Waiver (Renuncia)",
        "Subrogación (Subrogation)",
        "Indemnización (Indemnification)"
      ],
      a: 2,
      trampa: "El término técnico 'subrogación' puede no ser ampliamente conocido coloquialmente, pero describe precisamente este derecho legal específico de la aseguradora.",
      correcto: "SUBROGACIÓN = derecho legal mediante el cual la aseguradora, después de haber pagado a su asegurado, generalmente 'toma' los derechos legales de ese asegurado para demandar al tercero responsable y así recuperar el monto pagado. Este mecanismo generalmente evita que el asegurado reciba un doble pago (del seguro y también del responsable). [VERIFICADO — principio legal fundamental y estable]",
      incorrectos: [
        "A) El Estoppel se refiere generalmente a impedir que una parte se retracte de una conducta previa en la que la otra parte confió — un concepto legal diferente.",
        "B) El Waiver se refiere generalmente a la renuncia voluntaria a un derecho conocido — un concepto legal diferente.",
        "D) La Indemnización se refiere generalmente al principio más amplio de restaurar económicamente al asegurado sin generarle ganancia neta — un concepto relacionado pero distinto de la subrogación específica."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿En cuál tipo de seguro el principio de Subrogación GENERALMENTE NO aplica?",
      o: [
        "Seguro de automóvil",
        "Seguro de propiedad (Property)",
        "Seguro de vida",
        "Seguro de responsabilidad civil (Liability)"
      ],
      a: 2,
      trampa: "La subrogación generalmente aplica en la práctica totalidad de los seguros de propiedad y responsabilidad civil — EXCEPTO específicamente en el seguro de VIDA, donde el concepto no tiene aplicación lógica.",
      correcto: "La Subrogación generalmente NO aplica en el seguro de VIDA. El seguro de vida generalmente no busca 'indemnizar' una pérdida económica cuantificable en el sentido tradicional — paga un beneficio previamente acordado. El concepto de 'recuperar' de un tercero responsable no tiene aplicación lógica coherente en este contexto específico. [VERIFICADO — principio conceptual fundamental y estable]",
      incorrectos: [
        "A) La subrogación SÍ generalmente aplica en seguros de automóvil — es un mecanismo común en este tipo de cobertura.",
        "B) La subrogación SÍ generalmente aplica en seguros de propiedad — es un mecanismo estándar en este tipo de cobertura.",
        "D) La subrogación SÍ generalmente aplica en seguros de responsabilidad civil — es un mecanismo relevante en este contexto."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "COMPARACION",
      q: "Una aseguradora aceptó consistentemente pagos tardíos de prima durante un período prolongado sin aplicar ninguna penalidad, y posteriormente intenta cancelar la póliza específicamente citando un pago tardío como justificación. ¿Qué doctrina legal generalmente PROTEGE al asegurado en esta situación específica?",
      o: [
        "Subrogación",
        "Indemnización",
        "Estoppel — impide a la aseguradora actuar de forma inconsistente con su conducta previa cuando el asegurado actuó confiando razonablemente en ella",
        "Waiver (Renuncia) exclusivamente, sin relación al concepto de Estoppel"
      ],
      a: 2,
      trampa: "Estoppel y Waiver son conceptos relacionados pero distintos: el Waiver describe la renuncia inicial de un derecho; el Estoppel describe específicamente lo que IMPIDE retractarse posteriormente de esa renuncia cuando la otra parte confió razonablemente en ella.",
      correcto: "ESTOPPEL = doctrina legal que generalmente impide a la aseguradora actuar de manera inconsistente con su conducta previa (aceptar pagos tardíos repetidamente) cuando el asegurado actuó razonablemente confiando en esa conducta establecida. La aseguradora generalmente queda 'impedida' (estopped) de cambiar abruptamente su posición en perjuicio del asegurado que confió de buena fe. [VERIFICADO — principio legal fundamental y estable]",
      incorrectos: [
        "A) La subrogación se refiere generalmente al derecho de demandar a terceros responsables — no protege contra este tipo específico de cancelación.",
        "B) La indemnización se refiere generalmente al principio de no generar ganancia neta con el seguro — un concepto distinto de esta situación específica.",
        "D) El Waiver describe generalmente la renuncia INICIAL — es el Estoppel el concepto que específicamente IMPIDE retractarse posteriormente de esa renuncia ya realizada."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es GENERALMENTE la diferencia conceptual entre Waiver (Renuncia) y Estoppel (Impedimento)?",
      o: [
        "Son generalmente términos sinónimos que significan exactamente lo mismo en el contexto de seguros",
        "Waiver describe generalmente la renuncia VOLUNTARIA inicial a un derecho conocido; Estoppel describe generalmente el impedimento legal de retractarse posteriormente de esa renuncia cuando la otra parte actuó confiando razonablemente en ella",
        "Waiver generalmente protege a la aseguradora; Estoppel generalmente protege exclusivamente al asegurado sin ninguna excepción",
        "Waiver aplica generalmente solo en seguros de vida; Estoppel aplica generalmente solo en seguros de salud"
      ],
      a: 1,
      trampa: "Aunque conceptualmente relacionados y frecuentemente mencionados juntos, son conceptos legales secuenciales y distintos: primero ocurre el Waiver (la renuncia), y el Estoppel es lo que posteriormente protege los efectos de esa renuncia.",
      correcto: "WAIVER = renuncia VOLUNTARIA inicial a un derecho conocido (ejemplo: la aseguradora acepta repetidamente un pago tardío sin aplicar penalidad). ESTOPPEL = impide legalmente RETRACTARSE posteriormente de ese waiver cuando el asegurado actuó razonablemente confiando en esa conducta ya establecida. Conceptualmente, primero ocurre el waiver, y el estoppel protege posteriormente sus efectos legales. [VERIFICADO — distinción conceptual fundamental y estable entre ambos principios relacionados]",
      incorrectos: [
        "A) Son conceptos legales relacionados pero estructuralmente distintos, no sinónimos intercambiables.",
        "C) Ambos conceptos pueden generalmente proteger al asegurado según las circunstancias específicas del caso.",
        "D) Ambos conceptos generalmente aplican transversalmente en todos los tipos de seguros, sin esa restricción específica descrita."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "En un seguro de VIDA, ¿en qué momento específico DEBE existir generalmente el Interés Asegurable (Insurable Interest)?",
      o: [
        "Únicamente al momento del fallecimiento del asegurado, sin relación al momento en que se solicitó originalmente la póliza",
        "Generalmente únicamente al momento de SOLICITAR la póliza — no se requiere necesariamente que persista hasta el momento del fallecimiento",
        "Generalmente tanto al momento de solicitar la póliza COMO al momento del fallecimiento — de forma idéntica a como aplica en el seguro de propiedad",
        "El interés asegurable generalmente nunca es un requisito relevante en pólizas de seguro de vida"
      ],
      a: 1,
      trampa: "Existe una diferencia estructural importante entre seguro de VIDA y seguro de PROPIEDAD respecto a cuándo debe existir el interés asegurable — un punto frecuentemente confundido en el examen.",
      correcto: "En seguro de VIDA, el Interés Asegurable generalmente se requiere ÚNICAMENTE al momento de SOLICITAR la póliza. No es necesario que ese interés persista hasta el momento del fallecimiento del asegurado. Esto es estructuralmente diferente del seguro de PROPIEDAD, donde generalmente se requiere que el interés asegurable exista tanto al solicitar como al momento de la pérdida. [VERIFICADO — distinción fundamental y estable entre ambos tipos de seguro]",
      incorrectos: [
        "A) El interés asegurable en vida generalmente se evalúa al momento de SOLICITAR — no específicamente al momento del fallecimiento.",
        "C) Esta descripción correspondería generalmente al requisito aplicable en seguro de PROPIEDAD — no al de vida, donde la regla es diferente.",
        "D) El interés asegurable SÍ es generalmente un requisito fundamental y relevante para la validez de las pólizas de seguro de vida."
      ]
    }
  ]
},

{
  id: "gen_004",
  area: "generales",
  concepto: "Principio de Indemnización y Conceptos Relacionados de Riesgo",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "El Principio de Indemnización (Principle of Indemnity) establece generalmente que:",
      o: [
        "El asegurado generalmente puede recibir un beneficio financiero neto superior a su pérdida real documentada",
        "El seguro generalmente debe restaurar al asegurado a su posición económica ANTERIOR a la pérdida — sin permitir que genere una ganancia neta a partir del evento asegurado",
        "Únicamente aplica generalmente a los seguros de vida, sin relación a otros tipos de cobertura",
        "Generalmente permite a la aseguradora pagar cualquier monto que considere apropiado sin ninguna relación con la pérdida real"
      ],
      a: 1,
      trampa: "El principio de indemnización busca restaurar — no enriquecer. Esta distinción es fundamental para prevenir el riesgo moral (moral hazard) en el sistema de seguros.",
      correcto: "El Principio de Indemnización establece generalmente que el propósito del seguro es RESTAURAR al asegurado a su posición económica anterior a la pérdida — no generar una ganancia neta a partir del evento asegurado. Este principio ayuda generalmente a prevenir el riesgo moral, desincentivando que alguien busque provocar deliberadamente una pérdida para obtener ganancia. [VERIFICADO — principio legal fundamental y estable, aplicable particularmente a seguros de propiedad y responsabilidad]",
      incorrectos: [
        "A) El principio establece generalmente lo OPUESTO — el asegurado no debería recibir más que su pérdida real documentada.",
        "C) El principio de indemnización aplica generalmente a la mayoría de los seguros de propiedad y responsabilidad — no está limitado exclusivamente al seguro de vida (que de hecho opera con lógica algo diferente por tratarse de un beneficio acordado, no estrictamente una indemnización).",
        "D) El pago generalmente debe relacionarse con la pérdida real documentada, no ser un monto arbitrario a discreción exclusiva de la aseguradora."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Por qué se considera GENERALMENTE que el seguro de vida opera con una lógica algo DIFERENTE respecto al estricto Principio de Indemnización aplicable a otros tipos de seguro?",
      o: [
        "Porque el seguro de vida generalmente no está regulado por ninguna autoridad estatal, a diferencia de otros tipos de seguro",
        "Porque generalmente es difícil o imposible asignar un 'valor económico exacto' objetivo a una vida humana — el beneficio de muerte generalmente se establece como un monto ACORDADO previamente entre las partes, no como una indemnización calculada tras la pérdida",
        "Porque el seguro de vida generalmente nunca involucra el pago de ningún tipo de beneficio económico",
        "Porque el seguro de vida generalmente solo puede ser vendido por el gobierno federal directamente, sin participación de aseguradoras privadas"
      ],
      a: 1,
      trampa: "La dificultad fundamental de asignar un valor económico objetivo y preciso a una vida humana es la razón conceptual central de por qué el seguro de vida opera bajo una lógica de 'monto acordado' en lugar de estricta indemnización calculada.",
      correcto: "El seguro de vida generalmente opera bajo el concepto de 'Valued Contract' (contrato de valor acordado) precisamente porque generalmente resulta imposible asignar objetivamente un 'valor económico exacto' a una vida humana. Por ello, el beneficio de muerte generalmente se establece como un monto ACORDADO previamente entre las partes al contratar la póliza, en lugar de calcularse como una indemnización posterior basada en una pérdida económica cuantificable. [VERIFICADO — principio conceptual fundamental y estable que distingue al seguro de vida de otros tipos de cobertura]",
      incorrectos: [
        "A) El seguro de vida SÍ generalmente está sujeto a regulación estatal, de forma similar a otros tipos de seguro.",
        "C) El seguro de vida SÍ generalmente involucra el pago de un beneficio económico sustancial al ocurrir el evento asegurado.",
        "D) El seguro de vida generalmente puede ser ofrecido tanto por aseguradoras privadas como, en ciertos contextos limitados, por programas gubernamentales — no está restringido exclusivamente al gobierno federal."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál término describe GENERALMENTE el riesgo derivado de factores de carácter, comportamiento o actitud del asegurado que pueden aumentar la probabilidad o severidad de una pérdida (distinto de las condiciones físicas del riesgo)?",
      o: [
        "Physical Hazard (Riesgo Físico)",
        "Morale Hazard (Riesgo de Indiferencia)",
        "Moral Hazard (Riesgo Moral)",
        "Speculative Risk (Riesgo Especulativo)"
      ],
      a: 2,
      trampa: "Moral Hazard y Morale Hazard son términos frecuentemente confundidos entre sí por su similitud fonética, pero describen conceptos distintos dentro de la clasificación de riesgos.",
      correcto: "MORAL HAZARD (Riesgo Moral) = se refiere generalmente a la deshonestidad o comportamiento intencional del asegurado que puede aumentar la probabilidad o severidad de una pérdida (ejemplo: provocar deliberadamente un incendio para cobrar el seguro). Se distingue del Morale Hazard, que se refiere generalmente a la INDIFERENCIA o descuido (no intencional) resultante de tener seguro. [VERIFICADO — distinción conceptual estándar entre ambos tipos de riesgo relacionados con el comportamiento]",
      incorrectos: [
        "A) Physical Hazard se refiere generalmente a condiciones físicas tangibles del riesgo (ejemplo: instalación eléctrica defectuosa) — no a factores de comportamiento o carácter.",
        "B) Morale Hazard se refiere generalmente a la INDIFERENCIA o descuido no intencional (ejemplo: manejar con menos cuidado porque se tiene seguro) — distinto del comportamiento intencional del Moral Hazard.",
        "D) Speculative Risk se refiere generalmente a un riesgo que puede resultar tanto en ganancia como en pérdida — un concepto de clasificación de riesgo completamente diferente."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia conceptual GENERAL entre Moral Hazard y Morale Hazard?",
      o: [
        "Son generalmente términos sinónimos e intercambiables sin ninguna distinción práctica relevante",
        "Moral Hazard involucra generalmente comportamiento DESHONESTO o intencional; Morale Hazard involucra generalmente INDIFERENCIA o descuido no intencional resultante de tener cobertura de seguro",
        "Morale Hazard involucra generalmente comportamiento deshonesto; Moral Hazard involucra generalmente indiferencia no intencional",
        "Ambos términos se refieren exclusivamente a condiciones físicas tangibles del riesgo asegurado"
      ],
      a: 1,
      trampa: "La distinción fundamental está en la INTENCIONALIDAD: Moral Hazard implica deshonestidad deliberada; Morale Hazard implica descuido no intencional derivado de la sensación de protección que otorga el seguro.",
      correcto: "MORAL HAZARD = comportamiento DESHONESTO o intencional del asegurado (ejemplo: fraude, provocar deliberadamente una pérdida). MORALE HAZARD = INDIFERENCIA o descuido NO intencional que surge de la sensación de protección que brinda tener seguro (ejemplo: manejar con menos cuidado porque 'de todos modos el seguro cubre los daños'). [VERIFICADO — distinción conceptual estándar y estable entre ambos tipos de riesgo]",
      incorrectos: [
        "A) NO son términos sinónimos — representan conceptos de riesgo estructuralmente distintos basados en la intencionalidad del comportamiento.",
        "C) Esta descripción invierte estructuralmente las definiciones correctas de ambos conceptos.",
        "D) Ninguno de los dos términos se refiere a condiciones físicas tangibles — ambos se relacionan específicamente con factores de comportamiento y actitud del asegurado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado, sabiendo que tiene cobertura completa contra robo, deja descuidadamente las llaves de su vehículo puestas en el encendido mientras lo deja estacionado y desatendido en la vía pública. Posteriormente el vehículo es robado. ¿Qué tipo de riesgo ilustra GENERALMENTE mejor este comportamiento específico?",
      o: [
        "Physical Hazard — porque generalmente se relaciona con las condiciones físicas tangibles del vehículo en sí mismo",
        "Morale Hazard — el asegurado generalmente actuó con INDIFERENCIA o descuido (no necesariamente deshonestidad intencional) precisamente porque contaba con la protección de la cobertura de seguro",
        "Moral Hazard — porque generalmente implica que el asegurado provocó intencionalmente y de forma deshonesta el robo específico de su propio vehículo",
        "Speculative Risk — porque generalmente el resultado de esta situación podría haber sido tanto una ganancia como una pérdida económica"
      ],
      a: 1,
      trampa: "El descuido derivado de la sensación de protección (sin intención deliberada de causar la pérdida) ilustra específicamente el concepto de Morale Hazard — distinto del comportamiento deliberadamente deshonesto del Moral Hazard.",
      correcto: "Este escenario ilustra generalmente Morale Hazard — el asegurado actuó con INDIFERENCIA o descuido (dejando las llaves puestas), probablemente influenciado por la sensación de protección que brinda tener cobertura de seguro, pero SIN evidencia de haber provocado intencionalmente y de forma deshonesta el robo. [VERIFICADO — aplicación conceptual del principio de Morale Hazard a este escenario específico]",
      incorrectos: [
        "A) Physical Hazard se refiere generalmente a condiciones físicas tangibles del riesgo — no al comportamiento descuidado del propio asegurado.",
        "C) Moral Hazard requeriría generalmente evidencia de comportamiento deshonesto INTENCIONAL (como provocar deliberadamente el robo) — no simplemente descuido no intencional.",
        "D) Speculative Risk se refiere generalmente a riesgos que pueden resultar en ganancia O pérdida — un concepto de clasificación completamente diferente, no relacionado con este escenario de descuido."
      ]
    }
  ]
}

]; // fin PK_GENERAL

if (typeof module !== 'undefined') module.exports = { PK_GENERAL };
