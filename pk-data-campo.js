// ============================================================
// PEARSON KILLER — pk-data-campo.js
// Módulo: Procedimientos de Aseguramiento de Campo
// (Field Underwriting) — solo conceptos NO cubiertos antes:
// rol del productor paso a paso, warranty vs representation vs
// concealment, fraude/tergiversación material, entrega de póliza
// y recolección de primera prima, responsabilidades del agente.
//
// 7 conceptos × 5 variantes = 35 preguntas
// [VERIFICADO] = principio estable
// [REQUIERE VERIFICACIÓN] = confirmar contra material del curso
// ============================================================

const PK_CAMPO = [

{
  id: "campo_001",
  area: "suscripcion",
  concepto: "Rol del Productor en el Aseguramiento de Campo (Field Underwriting)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es el 'aseguramiento de campo' (field underwriting) que realiza el productor/agente?",
      o: [
        "La decisión final de aprobar o rechazar la póliza",
        "La recopilación INICIAL de información sobre el solicitante (completar la solicitud con precisión, hacer observaciones) que ayuda a la aseguradora en su evaluación",
        "El cálculo de las reservas de la aseguradora",
        "La inversión de las primas recibidas"
      ],
      a: 1,
      trampa: "El field underwriting del agente es la recopilación INICIAL de información — se confunde con la suscripción FINAL (que hace la aseguradora, no el agente).",
      correcto: "ASEGURAMIENTO DE CAMPO = el proceso donde el PRODUCTOR recopila la información inicial sobre el solicitante (completar la solicitud correctamente, observar y reportar información relevante) que sirve de base para la evaluación de la aseguradora. El agente NO toma la decisión final de suscripción. [VERIFICADO — rol del productor]",
      incorrectos: [
        "A) La decisión final de aprobar/rechazar la toma la ASEGURADORA (su departamento de suscripción), no el agente.",
        "C) El cálculo de reservas es función actuarial de la aseguradora, no del field underwriting.",
        "D) La inversión de primas es función de la aseguradora, no parte del field underwriting."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes NO es una responsabilidad del productor en el aseguramiento de campo?",
      o: [
        "Completar la solicitud de manera precisa y completa",
        "Reportar observaciones relevantes sobre el solicitante a la aseguradora",
        "Tomar la decisión FINAL de aprobar o rechazar la póliza y fijar la prima final",
        "Recolectar la primera prima y entregar el recibo apropiado"
      ],
      a: 2,
      trampa: "Tomar la decisión FINAL y fijar la prima es función de la ASEGURADORA — el agente solo recopila información y facilita el proceso.",
      correcto: "Tomar la DECISIÓN FINAL de aprobar/rechazar y fijar la prima final NO es responsabilidad del productor — esa es función exclusiva del departamento de suscripción de la ASEGURADORA. El agente recopila información, observa, y facilita, pero no decide la suscripción final. [VERIFICADO — límite del rol del productor]",
      incorrectos: [
        "A) Completar la solicitud con precisión SÍ es responsabilidad del productor.",
        "B) Reportar observaciones relevantes SÍ es responsabilidad del productor.",
        "D) Recolectar la primera prima y entregar el recibo SÍ es responsabilidad del productor."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Si un productor observa durante la entrevista que el solicitante muestra señales evidentes de un problema de salud no declarado, ¿qué debe hacer?",
      o: [
        "Ignorarlo para no perder la venta",
        "Reportar esa observación relevante a la aseguradora como parte de su responsabilidad de field underwriting",
        "Modificar la solicitud sin decírselo al solicitante",
        "Rechazar personalmente la solicitud"
      ],
      a: 1,
      trampa: "El agente tiene el deber de reportar observaciones relevantes con honestidad — ignorarlas o modificar la solicitud sin consentimiento viola su responsabilidad.",
      correcto: "El productor debe REPORTAR esa observación relevante a la aseguradora — es parte de su deber de aseguramiento de campo y de actuar con honestidad (utmost good faith). Ocultar información material para cerrar la venta sería una violación de sus obligaciones profesionales. [VERIFICADO — deber de reporte honesto]",
      incorrectos: [
        "A) Ignorar información relevante para no perder la venta viola su deber profesional.",
        "C) Modificar la solicitud sin el conocimiento del solicitante es una práctica prohibida.",
        "D) El agente NO rechaza solicitudes — esa decisión es de la aseguradora."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué es importante que el productor complete la solicitud con precisión y sin omisiones?",
      o: [
        "Solo por formalidad, sin consecuencias reales",
        "Porque la solicitud es la base de la evaluación de suscripción y forma parte del contrato; errores u omisiones pueden causar disputas de reclamación, anulaciones, o responsabilidad para el agente",
        "Para cobrar una comisión mayor",
        "Porque la aseguradora nunca revisa la solicitud"
      ],
      a: 1,
      trampa: "La precisión de la solicitud tiene consecuencias legales reales — es parte del contrato (entire contract) y errores pueden invalidar reclamaciones o generar responsabilidad para el agente.",
      correcto: "La solicitud es la BASE de la evaluación de suscripción y forma parte del contrato (bajo la cláusula de contrato completo). Errores u omisiones pueden causar disputas al momento de una reclamación, permitir anulaciones por la aseguradora, y generar responsabilidad profesional/legal para el propio agente. [VERIFICADO — importancia de la precisión]",
      incorrectos: [
        "A) NO es solo formalidad — tiene consecuencias legales y contractuales reales.",
        "C) No se relaciona con cobrar mayor comisión.",
        "D) La aseguradora SÍ revisa la solicitud cuidadosamente en la suscripción."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre el 'aseguramiento de campo' (agente) y la 'suscripción' (aseguradora)?",
      o: [
        "Son lo mismo",
        "El aseguramiento de campo es la recopilación INICIAL de información por el agente; la suscripción es la EVALUACIÓN y DECISIÓN final del riesgo por la aseguradora",
        "La aseguradora hace el campo; el agente suscribe",
        "Ninguno implica evaluar al solicitante"
      ],
      a: 1,
      trampa: "Son dos etapas del mismo proceso pero con actores distintos: el agente recopila (campo), la aseguradora evalúa y decide (suscripción).",
      correcto: "ASEGURAMIENTO DE CAMPO = etapa inicial donde el AGENTE recopila información y hace observaciones. SUSCRIPCIÓN = etapa donde la ASEGURADORA evalúa el riesgo, verifica la información, y toma la decisión final de aceptar/rechazar/clasificar. El agente prepara; la aseguradora decide. [VERIFICADO — distinción de roles]",
      incorrectos: [
        "A) NO son lo mismo — son etapas distintas con actores distintos.",
        "C) Invierte los roles: el AGENTE hace el campo; la ASEGURADORA suscribe.",
        "D) Ambos implican evaluar al solicitante, en distintos niveles."
      ]
    }
  ]
},

{
  id: "campo_002",
  area: "suscripcion",
  concepto: "Garantía (Warranty) vs Representación (Representation)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre una GARANTÍA (Warranty) y una REPRESENTACIÓN (Representation) en una solicitud de seguro?",
      o: [
        "Son idénticas",
        "Una GARANTÍA se declara absolutamente verdadera como condición del contrato; una REPRESENTACIÓN es una declaración que se cree verdadera a lo mejor del conocimiento del solicitante",
        "Una representación debe ser absolutamente verdadera; una garantía puede tener errores",
        "Ambas permiten mentir sin consecuencia"
      ],
      a: 1,
      trampa: "La garantía exige verdad ABSOLUTA (estándar estricto); la representación permite el estándar de 'buena fe según mi mejor conocimiento'. Se invierten fácilmente.",
      correcto: "GARANTÍA = declaración que se garantiza absolutamente verdadera y se convierte en CONDICIÓN del contrato; cualquier inexactitud puede permitir anular la póliza. REPRESENTACIÓN = declaración que el solicitante cree verdadera a lo mejor de su conocimiento; solo una tergiversación MATERIAL afecta el contrato. La mayoría de las declaraciones modernas son representaciones. [VERIFICADO — distinción fundamental]",
      incorrectos: [
        "A) NO son idénticas — tienen estándares de exactitud muy diferentes.",
        "C) Invierte los conceptos: la GARANTÍA es la que exige verdad absoluta.",
        "D) Ninguna permite mentir sin consecuencia."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "En los seguros modernos, ¿las declaraciones del solicitante en la solicitud se consideran generalmente garantías o representaciones?",
      o: [
        "Garantías (estándar estricto de verdad absoluta)",
        "Representaciones (declaraciones que se creen verdaderas a lo mejor del conocimiento del solicitante)",
        "Ninguna de las dos",
        "Siempre garantías fraudulentas"
      ],
      a: 1,
      trampa: "En seguros modernos las declaraciones son REPRESENTACIONES (estándar más flexible y justo), no garantías — esto protege al solicitante de errores honestos.",
      correcto: "En los seguros modernos, las declaraciones del solicitante generalmente se tratan como REPRESENTACIONES — declaraciones que se creen verdaderas a lo mejor del conocimiento del solicitante. Esto es más justo que el estándar estricto de garantía, porque protege al solicitante de errores honestos no intencionales. Solo una tergiversación MATERIAL afecta el contrato. [VERIFICADO — tratamiento estándar moderno]",
      incorrectos: [
        "A) No se tratan como garantías estrictas en la mayoría de casos modernos.",
        "C) SÍ son una de las dos — específicamente representaciones.",
        "D) No se asume que sean fraudulentas — se asume buena fe."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un solicitante declara honestamente 'no fumo' pero olvidó mencionar que fumó un cigarrillo en una fiesta hace un año. ¿Esto invalidaría la póliza bajo el estándar de representación?",
      o: [
        "Sí, cualquier inexactitud invalida la póliza",
        "Generalmente no, porque bajo el estándar de representación solo una tergiversación MATERIAL (relevante para la decisión de suscripción) afectaría la póliza, y un cigarrillo aislado probablemente no sea material",
        "Sí, porque toda declaración es una garantía absoluta",
        "No, porque las declaraciones nunca importan"
      ],
      a: 1,
      trampa: "Bajo el estándar de representación, solo lo MATERIAL importa — un detalle trivial y honesto no invalida la póliza, a diferencia del estándar estricto de garantía.",
      correcto: "Generalmente NO invalidaría la póliza, porque bajo el estándar de REPRESENTACIÓN solo una tergiversación MATERIAL (que hubiera cambiado la decisión de suscripción) tiene consecuencias. Un cigarrillo aislado hace un año probablemente no sería material ni cambiaría la clasificación. El estándar de representación protege errores honestos menores. [VERIFICADO — aplicación del estándar de materialidad]",
      incorrectos: [
        "A) NO cualquier inexactitud invalida — solo las materiales, bajo el estándar de representación.",
        "C) Las declaraciones modernas NO son garantías absolutas.",
        "D) Las declaraciones SÍ importan si son materiales — pero un detalle trivial no lo es."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué significa que una tergiversación sea 'MATERIAL'?",
      o: [
        "Que está escrita en papel",
        "Que la información es lo suficientemente RELEVANTE como para haber afectado la decisión de la aseguradora de emitir la póliza o fijar la prima",
        "Que involucra objetos físicos",
        "Que no tiene ninguna importancia"
      ],
      a: 1,
      trampa: "'Material' significa RELEVANTE para la decisión de suscripción — no tiene nada que ver con objetos físicos o papel.",
      correcto: "Una tergiversación MATERIAL es aquella cuya información es lo suficientemente RELEVANTE que, de haberse conocido la verdad, habría cambiado la decisión de la aseguradora de emitir la póliza, rechazarla, o fijar una prima diferente. La materialidad es la clave para que una inexactitud tenga consecuencias. [VERIFICADO — definición de materialidad]",
      incorrectos: [
        "A) No se refiere a estar escrita en papel.",
        "C) No se refiere a objetos físicos — 'material' aquí significa 'relevante/importante'.",
        "D) Es lo contrario — material significa que SÍ tiene importancia relevante."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Bajo el estándar de GARANTÍA (más estricto), ¿qué consecuencia tendría incluso una inexactitud menor?",
      o: [
        "Ninguna consecuencia",
        "Podría permitir a la aseguradora anular la póliza, porque bajo garantía toda declaración debe ser absolutamente exacta como condición del contrato",
        "Aumentaría el beneficio",
        "Reduciría la prima"
      ],
      a: 1,
      trampa: "Bajo el estándar estricto de garantía, incluso inexactitudes menores pueden tener consecuencias graves — por eso los seguros modernos prefieren el estándar de representación (más justo).",
      correcto: "Bajo el estándar estricto de GARANTÍA, incluso una inexactitud menor podría permitir a la aseguradora ANULAR la póliza, porque cada declaración se considera una condición absoluta del contrato que debe ser exacta. Este rigor es precisamente por qué los seguros modernos favorecen el estándar más flexible de representación. [VERIFICADO — consecuencia del estándar de garantía]",
      incorrectos: [
        "A) SÍ hay consecuencia bajo garantía — es un estándar estricto.",
        "C) No aumenta el beneficio.",
        "D) No reduce la prima."
      ]
    }
  ]
},

{
  id: "campo_003",
  area: "suscripcion",
  concepto: "Ocultación (Concealment) y Fraude en la Solicitud",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es la OCULTACIÓN (Concealment) en el contexto de una solicitud de seguro?",
      o: [
        "Declarar información falsa activamente",
        "OMITIR o callar deliberadamente información MATERIAL que se tiene el deber de revelar",
        "Hacer preguntas al agente",
        "Pagar la prima tarde"
      ],
      a: 1,
      trampa: "La ocultación es una OMISIÓN deliberada (callar algo material), distinta de la tergiversación (declarar algo falso activamente). Ambas son problemáticas pero conceptualmente distintas.",
      correcto: "OCULTACIÓN (Concealment) = OMITIR o callar deliberadamente información MATERIAL que uno tiene el deber de revelar. Es diferente de la tergiversación (que es declarar activamente algo falso). La ocultación es 'mentir por omisión' sobre algo relevante. [VERIFICADO — definición estándar]",
      incorrectos: [
        "A) Declarar información falsa activamente es TERGIVERSACIÓN (misrepresentation), no ocultación.",
        "C) Hacer preguntas al agente es un comportamiento normal y apropiado.",
        "D) Pagar la prima tarde no es ocultación — es un tema de pago."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre TERGIVERSACIÓN (Misrepresentation) y OCULTACIÓN (Concealment)?",
      o: [
        "Son idénticas",
        "La TERGIVERSACIÓN es declarar ACTIVAMENTE algo falso; la OCULTACIÓN es CALLAR/omitir deliberadamente algo material que se debía revelar",
        "La ocultación es declarar algo falso; la tergiversación es callar",
        "Ninguna tiene consecuencias"
      ],
      a: 1,
      trampa: "Ambas involucran engaño sobre información material, pero una es ACTIVA (declarar falso = tergiversación) y la otra es PASIVA (callar = ocultación).",
      correcto: "TERGIVERSACIÓN = declarar ACTIVAMENTE una información falsa (mentir diciendo algo). OCULTACIÓN = OMITIR deliberadamente información material que se debía revelar (mentir callando). Ambas, si son materiales, pueden permitir a la aseguradora anular la póliza. Una es acción, la otra es omisión. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son idénticas — una es activa, la otra pasiva.",
        "C) Invierte los conceptos.",
        "D) Ambas SÍ tienen consecuencias si son materiales."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué elemento distingue al FRAUDE de una simple tergiversación no intencional?",
      o: [
        "El monto de la prima",
        "La INTENCIÓN deliberada de engañar para obtener un beneficio al que no se tendría derecho",
        "El tipo de póliza",
        "La edad del solicitante"
      ],
      a: 1,
      trampa: "El fraude requiere INTENCIÓN de engañar — una tergiversación no intencional (error honesto) no es fraude, aunque pueda tener otras consecuencias.",
      correcto: "El FRAUDE se distingue por la INTENCIÓN DELIBERADA de engañar para obtener un beneficio indebido. Una tergiversación no intencional (un error honesto) carece de esa intención dolosa. El fraude tiene consecuencias más graves y, a diferencia de errores honestos, puede permitir anular la póliza incluso después del período de incontestabilidad. [VERIFICADO — elemento distintivo del fraude]",
      incorrectos: [
        "A) El monto de la prima no distingue el fraude.",
        "C) El tipo de póliza no distingue el fraude.",
        "D) La edad del solicitante no distingue el fraude."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "El período de incontestabilidad generalmente impide a la aseguradora impugnar la póliza después de 2 años. ¿Cuál es la excepción importante?",
      o: [
        "Errores de edad",
        "FRAUDE material (en muchas jurisdicciones, el fraude deliberado puede permitir impugnar incluso después del período)",
        "Cambios de dirección",
        "Pago tardío de primas"
      ],
      a: 1,
      trampa: "El fraude deliberado es la excepción clave a la protección de incontestabilidad — a diferencia de errores honestos, el fraude material puede perseguirse incluso después de 2 años en muchas jurisdicciones.",
      correcto: "El FRAUDE MATERIAL deliberado es la excepción importante — en muchas jurisdicciones, la aseguradora puede impugnar una póliza por fraude intencional incluso DESPUÉS del período de incontestabilidad de 2 años. La incontestabilidad protege errores honestos, no el fraude deliberado. [REQUIERE VERIFICACIÓN — el tratamiento exacto del fraude tras la incontestabilidad varía por jurisdicción; confirmar contra el material de Florida]",
      incorrectos: [
        "A) Los errores de edad se ajustan matemáticamente, no son una excepción de impugnación por fraude.",
        "C) Los cambios de dirección no se relacionan con la incontestabilidad.",
        "D) El pago tardío de primas no se relaciona con la incontestabilidad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Un solicitante sabe que tiene una enfermedad grave diagnosticada pero deliberadamente no la menciona, aunque la pregunta de salud lo pedía. ¿Qué constituye esto?",
      o: [
        "Un error honesto sin consecuencias",
        "Ocultación deliberada de información material (y posible fraude), que puede permitir a la aseguradora anular la póliza",
        "Una representación válida",
        "Un comportamiento apropiado"
      ],
      a: 1,
      trampa: "Ocultar deliberadamente una enfermedad grave diagnosticada, cuando se preguntó explícitamente, es ocultación material y posible fraude — no un error honesto.",
      correcto: "Esto constituye OCULTACIÓN DELIBERADA de información material (y posible FRAUDE, dada la intención de engañar). Como el solicitante SABÍA del diagnóstico y la pregunta lo requería explícitamente, la aseguradora podría anular la póliza — potencialmente incluso después del período de incontestabilidad si se prueba el fraude. [VERIFICADO — aplicación a un escenario de ocultación material]",
      incorrectos: [
        "A) NO es un error honesto — hubo conocimiento e intención deliberada de omitir.",
        "C) No es una representación válida — es una omisión material deliberada.",
        "D) No es apropiado — viola el deber de divulgación honesta."
      ]
    }
  ]
},

{
  id: "campo_004",
  area: "suscripcion",
  concepto: "Entrega de la Póliza (Policy Delivery) y Primera Prima",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué es importante la fecha de ENTREGA de la póliza (policy delivery)?",
      o: [
        "No tiene ninguna importancia",
        "Puede afectar el inicio de ciertos plazos (como el free look) y, si la prima no se pagó antes, la entrega puede requerir una declaración de buena salud",
        "Determina el monto de la comisión únicamente",
        "Solo importa para pólizas de auto"
      ],
      a: 1,
      trampa: "La entrega marca el inicio de plazos importantes (free look) y puede activar requisitos (declaración de buena salud si no se pagó la prima antes) — no es un mero trámite.",
      correcto: "La ENTREGA de la póliza es importante porque puede marcar el inicio de ciertos plazos (como el período de free look) y, si la primera prima NO se pagó al momento de la solicitud, la entrega generalmente requiere recolectar la prima Y una DECLARACIÓN DE BUENA SALUD (statement of good health) confirmando que la salud no cambió. [VERIFICADO — importancia de la entrega]",
      incorrectos: [
        "A) SÍ tiene importancia — afecta plazos y requisitos.",
        "C) No determina solo la comisión.",
        "D) Importa para seguros de vida y salud, no solo auto."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Si la primera prima NO se pagó con la solicitud, ¿qué debe generalmente obtener el agente al entregar la póliza?",
      o: [
        "Solo una firma",
        "La primera prima Y una declaración de buena salud (Statement of Good Health) confirmando que la salud del solicitante no cambió desde la solicitud",
        "Una nueva solicitud completa",
        "Nada adicional"
      ],
      a: 1,
      trampa: "Cuando la prima no se pagó antes, la entrega requiere recolectarla MÁS una declaración de buena salud — porque no hubo cobertura previa (recibo) y la aseguradora necesita confirmar que la salud sigue igual.",
      correcto: "Si la primera prima no se pagó con la solicitud, al entregar la póliza el agente debe recolectar la PRIMERA PRIMA y obtener una DECLARACIÓN DE BUENA SALUD, confirmando que la salud del solicitante no cambió desde que se completó la solicitud. Esto protege a la aseguradora, ya que no hubo recibo condicional que diera cobertura previa. [VERIFICADO — procedimiento de entrega]",
      incorrectos: [
        "A) No basta solo una firma — se requiere prima y declaración de buena salud.",
        "C) No requiere una nueva solicitud completa.",
        "D) SÍ requiere algo adicional — prima y declaración de buena salud."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia en cobertura entre pagar la prima CON la solicitud versus pagarla en la ENTREGA?",
      o: [
        "No hay diferencia",
        "Pagar CON la solicitud (con recibo condicional) puede dar cobertura desde la solicitud si es asegurable; pagar en la ENTREGA generalmente significa que la cobertura no inicia hasta la entrega y declaración de buena salud",
        "Pagar en la entrega da cobertura más temprana",
        "Ambas nunca dan cobertura"
      ],
      a: 1,
      trampa: "Pagar con la solicitud (más recibo condicional) puede adelantar el inicio de cobertura; pagar en la entrega retrasa el inicio hasta ese momento. Esto conecta con el tema del recibo condicional.",
      correcto: "Pagar CON la solicitud y recibir un recibo condicional puede dar cobertura retroactiva desde la fecha de solicitud (si el solicitante era asegurable). Pagar en la ENTREGA generalmente significa que la cobertura NO inicia hasta ese momento (entrega + prima + declaración de buena salud), dejando un período sin cobertura durante la suscripción. [VERIFICADO — diferencia en inicio de cobertura]",
      incorrectos: [
        "A) SÍ hay diferencia — en cuándo inicia la cobertura.",
        "C) Es al revés: pagar con la solicitud (con recibo) puede dar cobertura MÁS temprana.",
        "D) Ambas SÍ pueden dar cobertura, en momentos distintos."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es una 'Declaración de Buena Salud' (Statement of Good Health)?",
      o: [
        "Un examen médico completo",
        "Una confirmación del solicitante, al recibir la póliza, de que su salud no ha cambiado desde que completó la solicitud",
        "Una garantía de que nunca se enfermará",
        "Un documento que aumenta el beneficio"
      ],
      a: 1,
      trampa: "La declaración de buena salud es una simple confirmación de que la salud no cambió — no es un examen médico ni una garantía de salud futura.",
      correcto: "DECLARACIÓN DE BUENA SALUD = una confirmación que el solicitante firma al recibir la póliza (cuando la prima no se pagó antes), declarando que su salud NO ha cambiado desde que completó la solicitud original. Protege a la aseguradora contra cambios de salud ocurridos durante el proceso de suscripción. [VERIFICADO — definición estándar]",
      incorrectos: [
        "A) No es un examen médico — es una simple declaración/confirmación.",
        "C) No garantiza que nunca se enfermará — solo confirma el estado actual sin cambios.",
        "D) No aumenta el beneficio."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un agente va a entregar una póliza (la prima no se pagó antes). Descubre que el solicitante fue hospitalizado la semana pasada por un problema grave. ¿Qué debe hacer?",
      o: [
        "Entregar la póliza y recolectar la prima como si nada",
        "NO puede simplemente obtener la declaración de buena salud (la salud SÍ cambió); debe reportar esta nueva información material a la aseguradora antes de completar la entrega",
        "Ocultar la hospitalización",
        "Cancelar la licencia del solicitante"
      ],
      a: 1,
      trampa: "Si la salud cambió (hospitalización), el agente NO puede obtener una declaración de buena salud honesta — debe reportar el cambio material a la aseguradora, no ignorarlo.",
      correcto: "El agente NO puede completar la entrega obteniendo una declaración de buena salud, porque la salud SÍ cambió materialmente (hospitalización grave). Debe reportar esta nueva información material a la aseguradora antes de proceder — la aseguradora reevaluará. Obtener una declaración de buena salud falsa o ignorar el cambio sería una violación grave. [VERIFICADO — deber ante cambio material de salud]",
      incorrectos: [
        "A) NO puede entregar como si nada — la salud cambió materialmente.",
        "C) Ocultar la hospitalización sería una violación grave del deber de honestidad.",
        "D) El agente no cancela licencias — eso no tiene sentido en este contexto."
      ]
    }
  ]
},

{
  id: "campo_005",
  area: "suscripcion",
  concepto: "Consentimiento, Firmas y Autoridad en la Solicitud",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Si se hace un cambio o corrección en la solicitud de seguro, ¿quién debe generalmente poner sus iniciales en ese cambio?",
      o: [
        "El agente únicamente",
        "El SOLICITANTE, para confirmar que conoce y aprueba el cambio realizado",
        "La aseguradora",
        "Nadie, los cambios no requieren aprobación"
      ],
      a: 1,
      trampa: "Cualquier cambio en la solicitud debe llevar las iniciales del SOLICITANTE (no del agente) — para garantizar que el solicitante conoce y aprueba la modificación de sus propias respuestas.",
      correcto: "El SOLICITANTE debe poner sus iniciales en cualquier cambio o corrección hecho en la solicitud, confirmando que conoce y aprueba esa modificación. Esto protege la integridad del proceso y evita que se alteren respuestas sin el conocimiento del solicitante. [VERIFICADO — regla estándar de integridad]",
      incorrectos: [
        "A) El agente NO puede simplemente iniciar cambios por su cuenta — el solicitante debe aprobarlos.",
        "C) La aseguradora no inicia cambios en la solicitud del solicitante.",
        "D) Los cambios SÍ requieren aprobación (iniciales del solicitante)."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CUAL_NO",
      q: "En una póliza donde el solicitante, el asegurado y el propietario son la misma persona, ¿quién NO necesita firmar la solicitud?",
      o: [
        "El solicitante",
        "El asegurado",
        "El BENEFICIARIO",
        "El agente"
      ],
      a: 2,
      trampa: "El beneficiario NO firma la solicitud — solo recibe el beneficio futuro. Se confunde su rol con el de las partes activas del contrato.",
      correcto: "El BENEFICIARIO NO necesita firmar la solicitud — su rol es simplemente recibir el beneficio en el futuro, no es parte firmante del contrato. Firman el solicitante/asegurado/propietario y el agente. [VERIFICADO — quién firma la solicitud]",
      incorrectos: [
        "A) El solicitante SÍ firma la solicitud.",
        "B) El asegurado SÍ firma (aquí es la misma persona que el solicitante).",
        "D) El agente SÍ firma como parte de sus responsabilidades."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Puede un agente firmar la solicitud EN LUGAR del solicitante para agilizar el proceso?",
      o: [
        "Sí, si el solicitante está de acuerdo verbalmente",
        "No, el solicitante debe firmar su propia solicitud — firmar por otro sería una práctica fraudulenta e inapropiada",
        "Sí, siempre que el agente tenga licencia",
        "Sí, si es un cliente frecuente"
      ],
      a: 1,
      trampa: "Firmar por el solicitante, aunque sea 'para agilizar', es fraude — el solicitante debe firmar su propia solicitud sin excepción.",
      correcto: "NO, el agente NUNCA debe firmar la solicitud en lugar del solicitante — hacerlo constituye una práctica fraudulenta e inapropiada, sin importar la conveniencia o el acuerdo verbal. Cada parte debe firmar personalmente su propia sección. [VERIFICADO — prohibición de firmar por otro]",
      incorrectos: [
        "A) El acuerdo verbal no autoriza firmar por otro — es fraude.",
        "C) Tener licencia no autoriza firmar por el solicitante.",
        "D) Ser cliente frecuente no autoriza esta práctica prohibida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Cuando el propietario de la póliza es DIFERENTE del asegurado (ej. una esposa asegura la vida de su esposo), ¿qué se requiere generalmente?",
      o: [
        "Solo la firma del propietario",
        "Generalmente la firma de AMBOS (propietario y asegurado) y la existencia de interés asegurable del propietario sobre el asegurado",
        "Solo la firma del asegurado",
        "Ninguna firma"
      ],
      a: 1,
      trampa: "Cuando propietario y asegurado son distintos, se requieren ambas firmas y que exista interés asegurable — no basta con una sola parte.",
      correcto: "Cuando el propietario y el asegurado son personas DIFERENTES, generalmente se requiere la firma de AMBOS, y debe existir INTERÉS ASEGURABLE del propietario sobre la vida del asegurado al momento de la solicitud. Esto previene que se aseguren vidas ajenas sin justificación legítima. [VERIFICADO — requisito de firmas e interés asegurable]",
      incorrectos: [
        "A) No basta solo la firma del propietario — el asegurado también debe consentir/firmar.",
        "C) No basta solo la firma del asegurado — el propietario también firma.",
        "D) SÍ se requieren firmas — de ambas partes."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué establece la cláusula de que 'ningún agente tiene autoridad para modificar el contrato o renunciar a sus disposiciones'?",
      o: [
        "Que el agente puede cambiar la póliza libremente",
        "Que solo un funcionario autorizado de la aseguradora (no el agente) puede modificar los términos del contrato o renunciar a disposiciones",
        "Que el agente es el dueño de la póliza",
        "Que el solicitante puede cambiar la ley"
      ],
      a: 1,
      trampa: "Esta cláusula (parte del contrato completo) LIMITA la autoridad del agente — solo un funcionario autorizado de la aseguradora puede modificar el contrato, no el agente de campo.",
      correcto: "Esta cláusula (parte de la disposición de Contrato Completo) establece que NINGÚN agente tiene autoridad para modificar el contrato ni renunciar a sus disposiciones — solo un FUNCIONARIO AUTORIZADO de la aseguradora puede hacerlo, y generalmente por escrito. Protege la integridad del contrato contra promesas verbales no autorizadas del agente. [VERIFICADO — limitación de autoridad del agente]",
      incorrectos: [
        "A) Es lo contrario — el agente NO puede cambiar la póliza libremente.",
        "C) El agente no es dueño de la póliza.",
        "D) Nadie puede cambiar la ley mediante una póliza."
      ]
    }
  ]
},

{
  id: "campo_006",
  area: "suscripcion",
  concepto: "Divulgaciones Requeridas en el Proceso de Solicitud",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué divulgación requiere la Ley de Reporte Justo de Crédito (Fair Credit Reporting Act - FCRA) en el contexto de seguros?",
      o: [
        "Que no se puede investigar al solicitante",
        "Que el solicitante debe ser NOTIFICADO si se va a obtener un informe de investigación sobre él (como un informe del consumidor o inspección)",
        "Que las primas son públicas",
        "Que el agente debe revelar su comisión"
      ],
      a: 1,
      trampa: "La FCRA exige NOTIFICAR al solicitante que se obtendrá un informe sobre él — es sobre transparencia en la investigación, no sobre prohibirla.",
      correcto: "La FCRA (Fair Credit Reporting Act) requiere que el solicitante sea NOTIFICADO cuando se va a obtener un informe de investigación del consumidor sobre él (como parte de la suscripción), y le da derecho a conocer la naturaleza del informe. Protege la privacidad y transparencia en la recopilación de información. [VERIFICADO — requisito de la FCRA]",
      incorrectos: [
        "A) La FCRA no prohíbe investigar — regula cómo se hace, con notificación.",
        "C) No se relaciona con hacer públicas las primas.",
        "D) No se relaciona con revelar la comisión del agente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es un 'informe de investigación del consumidor' (Investigative Consumer Report) en la suscripción?",
      o: [
        "Un examen médico",
        "Un informe que recopila información sobre el estilo de vida, reputación y hábitos del solicitante, a menudo mediante entrevistas con terceros",
        "El estado de cuenta bancario",
        "La póliza misma"
      ],
      a: 1,
      trampa: "El informe de investigación del consumidor va más allá de datos básicos — incluye entrevistas sobre estilo de vida y reputación, lo cual requiere notificación especial bajo la FCRA.",
      correcto: "INFORME DE INVESTIGACIÓN DEL CONSUMIDOR = un informe que recopila información sobre el estilo de vida, carácter, reputación y hábitos del solicitante, frecuentemente mediante ENTREVISTAS con vecinos, empleadores o asociados. Por ser más invasivo, requiere notificación especial al solicitante bajo la FCRA. [VERIFICADO — definición estándar]",
      incorrectos: [
        "A) No es un examen médico — es sobre estilo de vida y reputación.",
        "C) No es un estado de cuenta bancario.",
        "D) No es la póliza misma."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué papel juega el MIB (Medical Information Bureau) en la suscripción?",
      o: [
        "Vende pólizas directamente",
        "Es una base de datos que las aseguradoras miembro consultan y alimentan con información codificada sobre condiciones médicas relevantes de solicitantes anteriores, para detectar inconsistencias",
        "Cobra las primas",
        "Regula a los agentes"
      ],
      a: 1,
      trampa: "El MIB es una base de datos compartida entre aseguradoras para detectar inconsistencias/fraude — no vende pólizas ni cobra primas.",
      correcto: "MIB (Medical Information Bureau) = una base de datos que las aseguradoras miembro consultan y a la que aportan información codificada sobre condiciones médicas relevantes reveladas en solicitudes anteriores. Ayuda a detectar inconsistencias o información omitida entre lo que el solicitante declara ahora y lo que declaró antes. [VERIFICADO — función del MIB]",
      incorrectos: [
        "A) El MIB no vende pólizas.",
        "C) El MIB no cobra primas.",
        "D) El MIB no regula agentes — es una base de datos de información médica."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Si una aseguradora RECHAZA o modifica una solicitud basándose en información de un informe del consumidor, ¿qué debe hacer generalmente?",
      o: [
        "Nada",
        "Notificar al solicitante sobre la acción adversa e informarle su derecho a conocer la fuente/información que motivó la decisión",
        "Publicar la decisión en el periódico",
        "Cobrar una multa al solicitante"
      ],
      a: 1,
      trampa: "Ante una 'acción adversa' basada en un informe, la FCRA exige notificar al solicitante y darle derecho a conocer la información — no puede simplemente rechazar en silencio.",
      correcto: "Si la aseguradora toma una ACCIÓN ADVERSA (rechazo, sobreprima) basándose en un informe del consumidor, debe NOTIFICAR al solicitante e informarle su derecho a conocer la naturaleza de la información y la fuente que motivó la decisión. Esto permite al solicitante corregir información errónea. [VERIFICADO — requisito de acción adversa bajo la FCRA]",
      incorrectos: [
        "A) NO puede no hacer nada — debe notificar la acción adversa.",
        "C) No publica la decisión en el periódico — notifica al solicitante privadamente.",
        "D) No cobra multa al solicitante."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es la divulgación de la práctica de información (privacy notice / HIPAA) que se da al solicitante?",
      o: [
        "Un aviso de que su información no será protegida",
        "Un aviso que explica cómo se recopilará, usará y protegerá la información personal y médica del solicitante",
        "Un aviso de aumento de prima",
        "La factura de la póliza"
      ],
      a: 1,
      trampa: "El aviso de privacidad explica cómo se PROTEGE la información — no que estará desprotegida.",
      correcto: "El AVISO DE PRIVACIDAD (relacionado con HIPAA y leyes de privacidad) explica al solicitante cómo se RECOPILARÁ, USARÁ, COMPARTIRÁ y PROTEGERÁ su información personal y médica. Es un requisito de transparencia que protege los derechos de privacidad del solicitante. [VERIFICADO — propósito del aviso de privacidad]",
      incorrectos: [
        "A) Es lo contrario — explica cómo SÍ se protege la información.",
        "C) No es un aviso de aumento de prima.",
        "D) No es la factura de la póliza."
      ]
    }
  ]
},

{
  id: "campo_007",
  area: "suscripcion",
  concepto: "Responsabilidad del Productor y Manejo de Fondos (Fiduciary Duty)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es la responsabilidad FIDUCIARIA de un agente respecto a las primas que recolecta?",
      o: [
        "Que puede usar las primas para gastos personales",
        "Que debe manejar los fondos de las primas con honestidad y en beneficio de la aseguradora/cliente, sin mezclarlos indebidamente con sus fondos personales",
        "Que las primas son suyas",
        "Que no tiene ninguna responsabilidad sobre las primas"
      ],
      a: 1,
      trampa: "El deber fiduciario significa manejar el dinero ajeno con integridad, sin usarlo como propio (comingling es una violación grave).",
      correcto: "RESPONSABILIDAD FIDUCIARIA = el agente debe manejar los fondos de las primas con honestidad e integridad, en beneficio de la aseguradora y el cliente, remitiéndolos apropiadamente y SIN mezclarlos con sus fondos personales (el 'comingling' o mezcla indebida es una violación grave). [VERIFICADO — deber fiduciario estándar]",
      incorrectos: [
        "A) NO puede usar las primas para gastos personales — eso es una violación grave.",
        "C) Las primas NO son del agente — pertenecen a la aseguradora/cliente.",
        "D) SÍ tiene una responsabilidad fiduciaria importante sobre las primas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es el 'comingling' (mezcla de fondos) y por qué es una violación?",
      o: [
        "Compartir una oficina con otro agente",
        "Mezclar los fondos de las primas de los clientes con los fondos personales o comerciales del agente, lo cual viola el deber fiduciario",
        "Vender múltiples pólizas",
        "Tener varios clientes"
      ],
      a: 1,
      trampa: "El comingling es mezclar dinero fiduciario (primas) con dinero propio — una violación grave, no tiene que ver con compartir oficina o tener varios clientes.",
      correcto: "COMINGLING = mezclar los fondos de las primas de los clientes (que son fiduciarios) con los fondos personales o comerciales propios del agente. Es una VIOLACIÓN grave del deber fiduciario porque pone en riesgo el dinero de los clientes/aseguradora y dificulta la rendición de cuentas. Las primas deben mantenerse separadas. [VERIFICADO — definición y gravedad del comingling]",
      incorrectos: [
        "A) Compartir oficina no es comingling.",
        "C) Vender múltiples pólizas no es comingling.",
        "D) Tener varios clientes no es comingling."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Cuando un agente recolecta una prima, ¿de quién se considera generalmente que es ese dinero?",
      o: [
        "Del agente, como pago por su trabajo",
        "De la aseguradora — el agente lo tiene en custodia fiduciaria y debe remitirlo apropiadamente",
        "Del gobierno",
        "De nadie"
      ],
      a: 1,
      trampa: "La prima recolectada pertenece a la aseguradora; el agente solo la tiene en custodia temporal (fiduciaria), no es su ingreso personal (su ingreso es la comisión, algo separado).",
      correcto: "El dinero de la prima recolectada se considera generalmente propiedad de la ASEGURADORA — el agente lo tiene en CUSTODIA FIDUCIARIA y debe remitirlo apropiadamente. La compensación del agente (su comisión) es algo separado que la aseguradora le paga, no las primas mismas. [VERIFICADO — propiedad de las primas]",
      incorrectos: [
        "A) La prima NO es pago por el trabajo del agente — su pago es la comisión, algo distinto.",
        "C) No es del gobierno.",
        "D) SÍ es de alguien — de la aseguradora, en custodia del agente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué diferencia hay entre la COMISIÓN del agente y las PRIMAS que recolecta?",
      o: [
        "Son lo mismo",
        "La comisión es la COMPENSACIÓN que la aseguradora paga al agente por su trabajo; las primas son el dinero del CLIENTE (propiedad de la aseguradora) que el agente solo custodia y remite",
        "Las primas son el pago del agente; la comisión es del cliente",
        "Ninguna existe"
      ],
      a: 1,
      trampa: "Comisión (ingreso del agente) y primas (dinero en custodia) son conceptualmente distintos — confundirlos lleva al comingling.",
      correcto: "COMISIÓN = la compensación que la aseguradora paga al agente por vender y servir la póliza (es su ingreso legítimo). PRIMAS = el dinero que el cliente paga por su cobertura, que es propiedad de la aseguradora y que el agente solo CUSTODIA temporalmente y REMITE. Son fondos completamente distintos que nunca deben mezclarse. [VERIFICADO — distinción fundamental]",
      incorrectos: [
        "A) NO son lo mismo — una es ingreso del agente, la otra es dinero en custodia.",
        "C) Invierte los conceptos.",
        "D) Ambas existen y son distintas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un agente tiene dificultades económicas y usa temporalmente las primas de un cliente para pagar una deuda personal, con la intención de reponerlas después. ¿Qué constituye esto?",
      o: [
        "Una práctica aceptable si las repone",
        "Conversión/apropiación indebida de fondos fiduciarios (comingling y misappropriation), una violación grave que puede resultar en revocación de licencia y cargos",
        "Un préstamo normal",
        "Un uso apropiado de su comisión"
      ],
      a: 1,
      trampa: "Usar primas para fines personales, aunque sea 'temporalmente' y con intención de reponerlas, es apropiación indebida de fondos fiduciarios — una violación grave, no un préstamo.",
      correcto: "Esto constituye APROPIACIÓN INDEBIDA (misappropriation) de fondos fiduciarios — una violación grave del deber fiduciario, sin importar la intención de reponerlos. Puede resultar en revocación de licencia y cargos penales. Las primas nunca pueden usarse para fines personales, ni siquiera temporalmente. [VERIFICADO — gravedad de la apropiación indebida]",
      incorrectos: [
        "A) NO es aceptable aunque las reponga — es apropiación indebida.",
        "C) No es un préstamo normal — es uso indebido de dinero ajeno en custodia.",
        "D) No es su comisión — son primas que pertenecen a la aseguradora."
      ]
    }
  ]
}

]; // fin PK_CAMPO

if (typeof window !== 'undefined') window.PK_CAMPO = PK_CAMPO;
if (typeof module !== 'undefined') module.exports = { PK_CAMPO };
