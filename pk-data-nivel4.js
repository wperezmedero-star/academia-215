// ============================================================
// PEARSON KILLER — pk-data-nivel4.js
// Módulo: Tipos Especiales de Pólizas de Vida y Escenarios Numéricos
// (Continuación final del material de referencia — imágenes de
// preguntas tipo Pearson sobre vida ajustable, prima modificada,
// dotación, protección hipotecaria, y escenarios de cálculo)
//
// 7 conceptos × 5 variantes = 35 preguntas
// [VERIFICADO] = mecánica de producto estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// ============================================================

const PK_NIVEL4 = [

{
  id: "nivel4_001",
  area: "vida",
  concepto: "Vida Ajustable (Adjustable Life Insurance)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál afirmación sobre una póliza de seguro de vida AJUSTABLE (Adjustable Life) es FALSA?",
      o: [
        "Se permite el pago de una prima adicional",
        "Combina el seguro de término y permanente en un solo plan de forma flexible",
        "Se requiere una prueba de asegurabilidad cuando hay un cambio en la prima simplemente para AJUSTAR el nivel dentro del rango existente",
        "Es posible el rescate de efectivo si la póliza tiene valor acumulado"
      ],
      a: 2,
      trampa: "Se confunde el AJUSTE DENTRO del diseño flexible existente (que generalmente NO requiere nueva evidencia de asegurabilidad) con un AUMENTO SUSTANCIAL del beneficio de muerte (que SÍ podría requerir evidencia) — la trampa está en la palabra 'simplemente ajustar'.",
      correcto: "La AFIRMACIÓN FALSA es que se requiere prueba de asegurabilidad simplemente para un ajuste de prima dentro del diseño flexible de la póliza. La Vida Ajustable está diseñada precisamente para permitir al asegurado modificar el monto de prima, el período de cobertura, y ciertos aspectos del diseño SIN necesariamente requerir nueva evidencia médica para ajustes dentro de ciertos parámetros — la evidencia de asegurabilidad generalmente solo se requeriría para AUMENTOS SUSTANCIALES del beneficio de muerte. [VERIFICADO — característica de flexibilidad fundamental de este producto]",
      incorrectos: [
        "A) Esta afirmación ES verdadera — la Vida Ajustable SÍ permite el pago de primas adicionales dentro de su estructura flexible.",
        "B) Esta afirmación ES verdadera — la Vida Ajustable efectivamente combina características de término y permanente, permitiendo al asegurado ajustar el balance entre ambos.",
        "D) Esta afirmación ES verdadera — el rescate de efectivo SÍ es posible si la póliza ha acumulado valor, como en otras pólizas permanentes flexibles."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la característica DEFINITORIA principal de la Vida Ajustable que la distingue de un Whole Life tradicional?",
      o: [
        "Tiene prima completamente fija sin ninguna posibilidad de modificación",
        "Permite al ASEGURADO modificar activamente elementos como el monto de prima, el período de cobertura, y el balance entre componente de término y permanente, dentro de ciertos parámetros del diseño",
        "Nunca acumula ningún valor en efectivo bajo ninguna circunstancia",
        "Solo puede contratarse por períodos de exactamente 20 años sin ninguna otra opción de duración"
      ],
      a: 1,
      trampa: "La flexibilidad de MODIFICACIÓN ACTIVA por parte del asegurado es la característica central que distingue este producto — no debe confundirse con la rigidez estructural del Whole Life tradicional.",
      correcto: "La característica definitoria de la Vida Ajustable es que PERMITE AL ASEGURADO modificar activamente múltiples elementos del diseño de la póliza (prima, período, balance término/permanente) dentro de los parámetros establecidos, ofreciendo mayor flexibilidad que el Whole Life tradicional de estructura rígida. [VERIFICADO — característica fundamental distintiva del producto]",
      incorrectos: [
        "A) Es precisamente lo OPUESTO — la Vida Ajustable se caracteriza por su flexibilidad de prima, no por rigidez.",
        "C) La Vida Ajustable SÍ puede acumular valor en efectivo, similar a otras pólizas permanentes.",
        "D) No está limitada exclusivamente a un período fijo de 20 años — su flexibilidad permite diversas configuraciones de duración."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿En qué se diferencia GENERALMENTE la Vida Ajustable de la Vida Universal en términos de la naturaleza de sus ajustes?",
      o: [
        "Son productos completamente idénticos sin ninguna distinción práctica relevante",
        "La Vida Ajustable generalmente requiere solicitar formalmente cada cambio específico a la aseguradora para su procesamiento; la Vida Universal generalmente permite mayor flexibilidad continua y automática dentro de límites preestablecidos sin necesidad de solicitud formal para cada ajuste menor",
        "La Vida Universal nunca permite ningún tipo de ajuste una vez emitida la póliza",
        "La Vida Ajustable siempre es más costosa que la Vida Universal en todos los casos sin excepción"
      ],
      a: 1,
      trampa: "Ambos productos ofrecen flexibilidad, pero el MECANISMO y la FRECUENCIA de los ajustes difieren — uno tiende a requerir solicitudes más formales por cambio, el otro opera con mayor fluidez continua.",
      correcto: "Generalmente, la Vida Ajustable requiere que el asegurado SOLICITE formalmente cada cambio específico (como aumentar el beneficio o cambiar el balance término/permanente) para su procesamiento por la aseguradora, mientras la Vida Universal generalmente ofrece mayor flexibilidad CONTINUA y automática (como ajustar el monto de prima mes a mes) dentro de parámetros preestablecidos, sin requerir una solicitud formal separada para cada ajuste menor. [REQUIERE VERIFICACIÓN — esta distinción puede variar según el diseño específico de cada producto y compañía]",
      incorrectos: [
        "A) NO son idénticos — tienen mecanismos y grados de flexibilidad diferentes en su diseño típico.",
        "C) La Vida Universal SÍ permite ajustes continuos — esa es precisamente su característica definitoria principal.",
        "D) No existe una regla universal de costo entre ambos productos — depende del diseño específico y las necesidades del asegurado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un asegurado con una póliza de Vida Ajustable desea AUMENTAR sustancialmente su beneficio de muerte más allá de los parámetros originales de la póliza. ¿Qué generalmente se requeriría para este cambio específico?",
      o: [
        "Ningún requisito adicional — cualquier aumento está automáticamente permitido sin ninguna condición",
        "Generalmente evidencia de asegurabilidad, dado que representa un aumento sustancial del riesgo para la aseguradora más allá del diseño flexible original",
        "Solo se requeriría notificar verbalmente al agente sin ningún proceso adicional",
        "Es completamente imposible aumentar el beneficio de muerte bajo cualquier circunstancia en este tipo de póliza"
      ],
      a: 1,
      trampa: "A diferencia de ajustes menores DENTRO del diseño flexible, un AUMENTO SUSTANCIAL del beneficio de muerte generalmente sí activa el requisito de evidencia de asegurabilidad, porque representa un incremento real del riesgo asumido por la aseguradora.",
      correcto: "Un aumento SUSTANCIAL del beneficio de muerte más allá de los parámetros originales generalmente SÍ requeriría evidencia de asegurabilidad, ya que representa un incremento genuino del riesgo que la aseguradora debe evaluar — a diferencia de ajustes menores dentro del diseño flexible preestablecido de la póliza. [VERIFICADO — principio general de gestión de riesgo en productos flexibles]",
      incorrectos: [
        "A) No todos los aumentos están automáticamente permitidos sin condición — los aumentos sustanciales generalmente requieren evaluación de riesgo.",
        "C) Una notificación verbal simple generalmente es insuficiente para un cambio sustancial que requiere evaluación formal de asegurabilidad.",
        "D) SÍ es posible aumentar el beneficio de muerte en este tipo de póliza — es parte de su diseño flexible, aunque sujeto a evidencia de asegurabilidad para incrementos sustanciales."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes es una ventaja PRÁCTICA principal de la Vida Ajustable para un asegurado cuyas necesidades financieras cambian significativamente con el tiempo?",
      o: [
        "Elimina completamente la necesidad de pagar cualquier tipo de prima en el futuro",
        "Permite adaptar la estructura de la póliza (más énfasis en protección temporal vs. permanente, monto de prima) a medida que cambian las circunstancias de vida del asegurado, sin necesariamente requerir la compra de una póliza completamente nueva",
        "Garantiza automáticamente el monto de beneficio más alto posible en el mercado sin ningún costo adicional",
        "Solo puede utilizarse una vez en la vida del asegurado sin ninguna posibilidad de ajuste posterior"
      ],
      a: 1,
      trampa: "La ventaja práctica central es la ADAPTABILIDAD a circunstancias cambiantes de vida — no elimina primas, no garantiza el beneficio más alto, y sí permite múltiples ajustes a lo largo del tiempo.",
      correcto: "La ventaja práctica principal es que permite al asegurado ADAPTAR la estructura de su cobertura (balance temporal/permanente, monto de prima) a medida que sus circunstancias de vida cambian (matrimonio, hijos, cambios de ingreso), sin necesariamente tener que comprar una póliza completamente nueva y pasar por un proceso de suscripción desde cero. [VERIFICADO — propósito práctico fundamental del diseño flexible]",
      incorrectos: [
        "A) No elimina la necesidad de pagar primas — sigue requiriendo pago de primas según la estructura ajustada.",
        "C) No garantiza automáticamente el monto más alto disponible en el mercado sin costo — los ajustes generalmente tienen implicaciones de costo correspondientes.",
        "D) Puede utilizarse para múltiples ajustes a lo largo del tiempo — no está limitada a un solo uso único."
      ]
    }
  ]
},

{
  id: "nivel4_002",
  area: "vida",
  concepto: "Prima Modificada, Prima Indeterminada y Prima Graduada",
  variantes: [
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Mandruke compra una póliza de seguro de vida de $100,000 con una prima ANUAL de $550 por los primeros CINCO años. Al principio del año seis, la prima AUMENTA a $800 y CONTINÚA NIVELADA a partir de entonces. La cobertura permanece siendo de $100,000 durante toda la póliza. ¿Qué tipo de póliza tiene Mandruke?",
      o: [
        "Vida de Prima Modificada",
        "Vida de Prima Indeterminada",
        "Vida de Prima Ajustable",
        "Vida de Prima Global (Single Premium)"
      ],
      a: 0,
      trampa: "El patrón específico de 'prima baja fija por un período inicial, luego un salto a una prima más alta que permanece nivelada' es la firma distintiva de Prima Modificada — se confunde con Prima Ajustable porque ambas involucran cambios de prima, pero el patrón y mecanismo son diferentes.",
      correcto: "VIDA DE PRIMA MODIFICADA (Modified Premium Whole Life) = diseñada específicamente con una prima INICIAL MÁS BAJA durante un período determinado (aquí, 5 años a $550), seguida de un AUMENTO a una prima más alta que luego permanece NIVELADA por el resto de la póliza (aquí, $800 desde el año 6) — coincide exactamente con el patrón descrito. [VERIFICADO — definición estándar de este tipo de producto]",
      incorrectos: [
        "B) Prima Indeterminada tiene una estructura diferente donde la aseguradora puede ajustar la prima periódicamente según su experiencia de mortalidad/inversión, no un patrón fijo predeterminado de dos niveles como el descrito.",
        "C) Prima Ajustable implica que el ASEGURADO tiene control activo para modificar la prima según sus necesidades — el escenario no describe control del asegurado, sino una estructura predeterminada del producto.",
        "D) Prima Global (Single Premium) implica un ÚNICO pago total al inicio — contrario al patrón de pagos anuales continuos descrito en el escenario."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural CLAVE entre Vida de Prima Modificada y Vida de Prima Indeterminada?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción práctica",
        "Prima Modificada tiene un patrón PREDETERMINADO Y FIJO de cambio de prima (bajo inicial, luego alto nivelado) establecido desde la emisión; Prima Indeterminada permite a la ASEGURADORA ajustar periódicamente la prima según su experiencia real de mortalidad, gastos e inversión, dentro de un máximo garantizado",
        "Prima Indeterminada siempre es más barata que Prima Modificada en todos los casos sin excepción",
        "Prima Modificada solo aplica a pólizas de término; Prima Indeterminada solo a pólizas permanentes"
      ],
      a: 1,
      trampa: "Ambas involucran 'cambios' en la prima a lo largo del tiempo, pero el mecanismo de determinación de esos cambios es fundamentalmente diferente: uno es un patrón fijo predeterminado, el otro depende de la experiencia real variable de la aseguradora.",
      correcto: "PRIMA MODIFICADA = patrón de cambio PREDETERMINADO y FIJO desde la emisión (se sabe desde el inicio cuándo y a cuánto cambiará la prima). PRIMA INDETERMINADA = la ASEGURADORA tiene la facultad de ajustar periódicamente la prima real cobrada, dentro de un máximo garantizado contractualmente, según su experiencia real de mortalidad, gastos e inversión — el asegurado no conoce con certeza los cambios futuros específicos desde el inicio. [VERIFICADO — distinción estructural fundamental entre ambos tipos]",
      incorrectos: [
        "A) NO son sinónimos — tienen mecanismos de determinación de prima fundamentalmente diferentes.",
        "C) No existe una regla universal de cuál es más barata — depende de las circunstancias específicas y la experiencia real de cada aseguradora.",
        "D) Ambos tipos de estructura de prima pueden aplicarse a diseños de pólizas permanentes — no están limitados exclusivamente por esa distinción de término/permanente."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "En una póliza de Prima GRADUADA (Graduated Premium), ¿cómo se comportan típicamente las primas durante los PRIMEROS años de la póliza en comparación con años posteriores?",
      o: [
        "Son más ALTAS durante los primeros años y luego disminuyen progresivamente",
        "Son más BAJAS durante los primeros años de la póliza, aumentando gradualmente en años posteriores",
        "Permanecen exactamente iguales durante toda la vigencia de la póliza sin ningún cambio",
        "Se determinan completamente al azar sin ningún patrón predecible"
      ],
      a: 1,
      trampa: "El nombre 'Graduada' sugiere un patrón de incremento progresivo — se confunde la dirección del cambio (¿sube o baja primero?) sin razonar sobre el propósito típico de este diseño (facilitar el acceso inicial con primas más accesibles).",
      correcto: "En Prima Graduada, las primas son generalmente MÁS BAJAS durante los primeros años de la póliza, AUMENTANDO GRADUALMENTE en años posteriores — un diseño pensado para facilitar el acceso inicial a la cobertura cuando el asegurado puede tener ingresos más limitados (por ejemplo, un joven profesional al inicio de su carrera), con la expectativa de que sus ingresos aumenten con el tiempo. [VERIFICADO — propósito y estructura estándar de este diseño de prima]",
      incorrectos: [
        "A) Esta descripción invierte el patrón real — las primas graduadas comienzan bajas, no altas.",
        "C) La característica definitoria de 'graduada' es precisamente el CAMBIO progresivo — no la permanencia fija.",
        "D) El patrón de graduación sigue una estructura predeterminada y predecible, no aleatoria."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "K compró una póliza de seguro de vida hace veinte años que pagaba un interés del 10% en los primeros años. Veinte años después de la compra, recibió una notificación de la aseguradora indicando que la póliza se extinguirá pronto A MENOS QUE pague una prima mucho más elevada, debido a la caída de las tasas de interés generales del mercado. ¿Qué tipo de póliza describe esta situación?",
      o: [
        "Whole Life tradicional",
        "Universal Life",
        "Term Life",
        "Endowment"
      ],
      a: 1,
      trampa: "La sensibilidad a las TASAS DE INTERÉS DEL MERCADO, donde una caída prolongada de tasas puede eventualmente requerir primas más altas para mantener la póliza vigente, es característica específica del Universal Life — no del Whole Life tradicional con garantías fijas independientes del mercado.",
      correcto: "UNIVERSAL LIFE = este escenario describe precisamente el riesgo característico del Universal Life: la tasa de interés que gana el cash value NO está garantizada de forma fija indefinida (como en Whole Life tradicional) — depende de las condiciones del mercado. Si las tasas caen significativamente durante un período prolongado, el cash value puede no crecer lo suficiente para sostener los cargos de la póliza, requiriendo eventualmente primas más altas para mantenerla vigente. [VERIFICADO — riesgo característico y ampliamente documentado del producto Universal Life]",
      incorrectos: [
        "A) Whole Life tradicional tiene garantías de prima FIJA independientes de las fluctuaciones del mercado — no expondría al asegurado a este riesgo específico de aumento de prima por caída de tasas.",
        "C) Term Life no tiene componente de cash value sensible a tasas de interés de esta manera — su estructura es completamente diferente.",
        "D) Endowment tiene una estructura de acumulación diferente orientada a un pago programado a cierta edad — no coincide con este escenario de sensibilidad a tasas de interés del Universal Life."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "K contrata una póliza en la que la prima se mantiene FIJA durante los primeros 5 años, la prima AUMENTA en el año 6 y se mantiene ESTABLE a partir de entonces, mientras la prestación por fallecimiento permanece IGUAL durante toda la póliza. ¿De qué tipo de póliza se trata?",
      o: [
        "Vida entera modificada (Modified Whole Life)",
        "Vida universal",
        "Vida a término decreciente",
        "Vida variable"
      ],
      a: 0,
      trampa: "Este escenario reforzado repite exactamente el patrón de Prima Modificada visto anteriormente (fijo bajo inicial, luego salto a nivel más alto estable) para confirmar reconocimiento consistente del concepto, no memorización de una sola redacción.",
      correcto: "VIDA ENTERA MODIFICADA (Modified Whole Life) = exactamente el patrón descrito: prima fija más baja durante un período inicial determinado (5 años), luego un aumento a una prima más alta que se mantiene estable el resto de la vigencia, con el beneficio de muerte permaneciendo constante durante toda la póliza. [VERIFICADO — aplicación reforzada y consistente de la definición]",
      incorrectos: [
        "B) Vida Universal tiene prima FLEXIBLE controlada por el asegurado — no el patrón fijo predeterminado de dos niveles descrito.",
        "C) Vida a Término Decreciente tiene un BENEFICIO que disminuye con el tiempo — el escenario específica que el beneficio permanece IGUAL, no decreciente.",
        "D) Vida Variable tiene cash value en subcuentas de inversión con riesgo de mercado directo — no coincide con el patrón de prima descrito en el escenario."
      ]
    }
  ]
},

{
  id: "nivel4_003",
  area: "vida",
  concepto: "Seguro de Dotación (Endowment) y Seguro de Vida Ordinaria",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué tipo de seguro de vida paga TANTO si el asegurado VIVE hasta una cierta edad determinada COMO SI FALLECE ANTES de alcanzar esa edad?",
      o: [
        "Seguro de vida a término",
        "Seguro de vida entera (Whole Life)",
        "Seguro de dotación (Endowment)",
        "Seguro universal"
      ],
      a: 2,
      trampa: "El elemento distintivo es que PAGA EN AMBOS ESCENARIOS (sobrevivir o fallecer antes) — ningún otro tipo estándar de seguro de vida garantiza un pago si el asegurado simplemente SOBREVIVE hasta cierta edad.",
      correcto: "SEGURO DE DOTACIÓN (Endowment) = diseñado específicamente para pagar el monto nominal de la póliza SI el asegurado vive hasta una edad de dotación determinada (fecha de vencimiento), O el beneficio de muerte SI fallece antes de esa fecha — es el único tipo de seguro de vida tradicional con esta doble garantía de pago. [VERIFICADO — característica definitoria fundamental del Endowment]",
      incorrectos: [
        "A) El seguro a término solo paga si el asegurado FALLECE durante el período — no paga nada si simplemente sobrevive hasta el final del término.",
        "B) El Whole Life paga generalmente al fallecimiento (o eventualmente al madurar la póliza a edad muy avanzada, como 100 años) — pero no está estructurado con el propósito específico de pagar a una edad de dotación predeterminada más temprana como el Endowment.",
        "D) El Universal Life no tiene esta estructura específica de doble garantía orientada a una fecha de dotación predeterminada."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué término técnico se utiliza generalmente para describir un Endowment que está diseñado para pagar en un período de DIEZ AÑOS?",
      o: [
        "Dotación vitalicia",
        "Dotación decenal (10-Year Endowment)",
        "Vida entera de 10 pagos",
        "Término de 10 años renovable"
      ],
      a: 1,
      trampa: "'Dotación decenal' se confunde con 'Vida Entera de 10 Pagos' (10-Pay Whole Life) porque ambos involucran el número 10, pero describen conceptos completamente diferentes: uno es sobre CUÁNDO se paga el beneficio de dotación, el otro es sobre CUÁNTOS AÑOS se pagan primas de una póliza permanente.",
      correcto: "DOTACIÓN DECENAL (10-Year Endowment) = un Endowment específicamente diseñado para pagar su monto nominal si el asegurado sobrevive el período de 10 años, o el beneficio de muerte si fallece antes de completar ese período. [VERIFICADO — terminología estándar de este producto específico]",
      incorrectos: [
        "A) 'Dotación vitalicia' no es el término correcto para un período específico de 10 años — describiría más bien un Whole Life con estructura de dotación a edad muy avanzada.",
        "C) 'Vida Entera de 10 Pagos' (10-Pay Whole Life) se refiere a PAGAR PRIMAS solo por 10 años en una póliza PERMANENTE (cobertura de por vida) — un concepto completamente diferente del Endowment de 10 años, que paga el beneficio EN el año 10.",
        "D) Un término renovable de 10 años no tiene la característica de dotación (pago garantizado por supervivencia) — es simplemente cobertura temporal renovable."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia fundamental entre un Endowment de 10 años y una póliza de Vida Entera de 10 Pagos (10-Pay Whole Life)?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción práctica",
        "El Endowment de 10 años PAGA el beneficio completo si el asegurado sobrevive los 10 años (terminando la póliza); la Vida Entera de 10 Pagos solo requiere PAGAR PRIMAS durante 10 años pero la cobertura PERMANENTE continúa de por vida (ya pagada)",
        "La Vida Entera de 10 Pagos paga el beneficio a los 10 años; el Endowment continúa de por vida",
        "Ambos productos requieren exactamente el mismo número de años de pago de primas sin ninguna diferencia"
      ],
      a: 1,
      trampa: "Ambos involucran el número '10 años', pero se refieren a conceptos completamente distintos: uno es sobre CUÁNDO se paga el beneficio (Endowment), el otro es sobre CUÁNTOS AÑOS se pagan primas de una cobertura que continúa indefinidamente (10-Pay Whole Life).",
      correcto: "ENDOWMENT de 10 años: la póliza TERMINA y paga su beneficio completo a los 10 años si el asegurado sobrevive — es el FIN de la cobertura con un pago. VIDA ENTERA DE 10 PAGOS: el asegurado solo paga primas durante 10 años, pero la cobertura PERMANENTE (de por vida) CONTINÚA después de ese período sin más pagos — la póliza sigue vigente indefinidamente, ya pagada en su totalidad. [VERIFICADO — distinción fundamental entre ambos conceptos]",
      incorrectos: [
        "A) NO son sinónimos — tienen propósitos y estructuras de pago/cobertura completamente diferentes.",
        "C) Esta descripción invierte las características correctas de ambos productos.",
        "D) Aunque ambos pueden mencionar '10 años', el SIGNIFICADO de ese período es completamente diferente entre los dos productos."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué caracteriza generalmente a una póliza de seguro de vida ORDINARIA (Ordinary Life, sinónimo tradicional de Whole Life estándar)?",
      o: [
        "Tener primas NIVELADAS durante TODA la vigencia de la póliza",
        "Ofrecer cobertura TEMPORAL únicamente por un período limitado predeterminado",
        "NO acumular ningún valor en efectivo bajo ninguna circunstancia",
        "Finalizar AUTOMÁTICAMENTE al cumplir el asegurado 65 años sin ninguna excepción"
      ],
      a: 0,
      trampa: "Se confunde 'Vida Ordinaria' con productos temporales o de cash value limitado — en realidad, es esencialmente sinónimo del Whole Life estándar, con sus características fundamentales de permanencia, prima nivelada, y acumulación de cash value.",
      correcto: "La Vida Ordinaria (Ordinary Life) se caracteriza por tener primas NIVELADAS (fijas, del mismo monto) durante TODA la vigencia de la póliza — es esencialmente el término tradicional para el Whole Life estándar, con cobertura permanente y acumulación garantizada de cash value. [VERIFICADO — característica fundamental de este tipo de producto tradicional]",
      incorrectos: [
        "B) La Vida Ordinaria ofrece cobertura PERMANENTE (de por vida), no temporal limitada — esa característica correspondería al Term Life.",
        "C) La Vida Ordinaria SÍ acumula cash value — es una característica fundamental de este producto permanente.",
        "D) La Vida Ordinaria NO finaliza automáticamente a los 65 años — su diseño es de cobertura de por vida, generalmente madurando a edades mucho más avanzadas (como 100 años)."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué tipo de primas se asocian generalmente con las pólizas de seguro de vida de PROTECCIÓN HIPOTECARIA (Mortgage Protection) individual?",
      o: [
        "Prima modificada",
        "Prima flexible",
        "Prima nivelada",
        "Prima DECRECIENTE (Decreasing Premium)"
      ],
      a: 2,
      trampa: "Se confunde con el BENEFICIO decreciente característico del producto (el monto de cobertura disminuye conforme se paga la hipoteca) — pero la PRIMA misma generalmente permanece NIVELADA (constante), aunque el beneficio de muerte disminuya.",
      correcto: "Las pólizas de Protección Hipotecaria generalmente tienen PRIMA NIVELADA (constante durante toda la vigencia), AUNQUE el BENEFICIO DE MUERTE sea decreciente (disminuyendo conforme el saldo de la hipoteca disminuye con el tiempo) — es importante distinguir que lo que decrece es el beneficio, no necesariamente la prima que el asegurado paga. [REQUIERE VERIFICACIÓN — este diseño puede variar según el producto específico ofrecido por diferentes aseguradoras; algunos diseños de mercado pueden estructurar primas decrecientes también]",
      incorrectos: [
        "A) Prima Modificada tiene un patrón específico de dos niveles (bajo luego alto) — no es la estructura típica de Protección Hipotecaria.",
        "B) Prima Flexible es característica del Universal Life con control activo del asegurado — no es la estructura típica de este producto especializado.",
        "D) Aunque el BENEFICIO decrece, la PRIMA en el diseño más común de este producto generalmente permanece nivelada — la trampa específica de esta pregunta es no confundir beneficio decreciente con prima decreciente."
      ]
    }
  ]
},

{
  id: "nivel4_004",
  area: "vida",
  concepto: "Riders Adicionales — Vida a Término Adicional, Dividendos, Cambio de Ocupación",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué ofrece generalmente una cláusula adicional (rider) de Vida a Término (Term Rider) añadida a una póliza permanente base?",
      o: [
        "Reduce automáticamente la prima de la póliza base permanente",
        "Cobertura de vida ADICIONAL de tipo temporal, generalmente a menor costo, complementando el beneficio de muerte de la póliza permanente base",
        "Elimina completamente la necesidad de pagar primas en la póliza permanente base",
        "Convierte automáticamente toda la póliza en un producto exclusivamente de término"
      ],
      a: 1,
      trampa: "Se confunde el propósito del rider como algo que AFECTA negativamente o transforma la póliza base, cuando en realidad simplemente AÑADE cobertura temporal adicional de forma complementaria.",
      correcto: "Un Rider de Término (Term Rider) añadido a una póliza base permanente proporciona COBERTURA ADICIONAL de tipo TEMPORAL (generalmente a un costo menor que la cobertura permanente equivalente), complementando el beneficio de muerte total disponible bajo la póliza combinada, sin transformar la naturaleza permanente de la póliza base. [VERIFICADO — propósito funcional estándar de este tipo de rider]",
      incorrectos: [
        "A) No reduce automáticamente la prima de la póliza base — de hecho, el rider generalmente añade un costo adicional propio.",
        "C) No elimina la necesidad de pagar primas — el rider generalmente añade costo, no lo elimina.",
        "D) No convierte la póliza completa en término — la póliza base permanente sigue siendo permanente; el rider solo añade cobertura temporal complementaria."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una persona posee una póliza participante (con dividendos) y decide utilizar esos dividendos para adquirir pequeñas cantidades ADICIONALES de seguro TOTALMENTE PAGADO. ¿Qué opción de dividendos eligió?",
      o: [
        "Pago en efectivo (Cash Payment)",
        "Reducción de primas (Premium Reduction)",
        "Adiciones pagadas (Paid-Up Additions)",
        "Acumulación con intereses (Accumulation at Interest)"
      ],
      a: 2,
      trampa: "Las cuatro son opciones estándar de uso de dividendos, pero la descripción específica de 'comprar cantidades adicionales de seguro totalmente pagado' corresponde exactamente a Adiciones Pagadas.",
      correcto: "ADICIONES PAGADAS (Paid-Up Additions) = opción de dividendos donde el monto del dividendo se usa como prima única para comprar pequeñas cantidades ADICIONALES de seguro permanente YA TOTALMENTE PAGADO (sin requerir primas futuras adicionales), incrementando gradualmente el beneficio de muerte total y el cash value acumulado. [VERIFICADO — opción estándar de uso de dividendos reconocida]",
      incorrectos: [
        "A) Pago en Efectivo simplemente entrega el dividendo directamente al asegurado en efectivo — no compra cobertura adicional.",
        "B) Reducción de Primas aplica el dividendo para disminuir el pago de prima requerido en el período actual — no compra cobertura adicional.",
        "D) Acumulación con Intereses deja el dividendo depositado en la aseguradora generando interés — no lo convierte en cobertura de seguro adicional."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre la opción de dividendos de 'Acumulación con Intereses' y la de 'Adiciones Pagadas'?",
      o: [
        "Son términos completamente sinónimos sin distinción alguna",
        "Acumulación con Intereses deja el dividendo DEPOSITADO generando interés (permaneciendo como efectivo con crecimiento); Adiciones Pagadas CONVIERTE el dividendo en seguro adicional permanente ya pagado",
        "Adiciones Pagadas siempre genera más dinero en efectivo que Acumulación con Intereses en cualquier escenario",
        "Ambas opciones requieren obligatoriamente que el asegurado pague primas adicionales futuras"
      ],
      a: 1,
      trampa: "Ambas opciones 'mantienen' el dividendo dentro de la relación con la aseguradora (en lugar de tomarlo en efectivo inmediato), pero de formas fundamentalmente diferentes: una como depósito con interés, la otra convertida en seguro permanente.",
      correcto: "ACUMULACIÓN CON INTERESES = el dividendo permanece DEPOSITADO en la aseguradora, generando interés como si fuera una cuenta de ahorro, manteniendo su naturaleza de efectivo acumulado disponible. ADICIONES PAGADAS = el dividendo se CONVIERTE en seguro de vida permanente adicional, ya completamente pagado, aumentando el beneficio de muerte y el cash value de la póliza. [VERIFICADO — distinción funcional fundamental entre ambas opciones]",
      incorrectos: [
        "A) NO son sinónimos — tienen naturalezas y propósitos completamente diferentes (efectivo con interés vs. seguro adicional).",
        "C) No existe una regla universal de cuál genera más valor — depende de las tasas de interés, la edad del asegurado, y las circunstancias específicas.",
        "D) Ninguna de las dos opciones requiere obligatoriamente primas adicionales futuras — ambas son formas de UTILIZAR el dividendo ya generado, no de generar nuevas obligaciones de pago."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un padre que fallece dentro de los TRES AÑOS siguientes a la compra de una póliza de seguro de vida de su hija pequeña puede hacer que se RENUNCIE (exima) a las primas de la póliza, ¿en virtud de qué disposición específica?",
      o: [
        "Disposición del asegurado (Insured Provision)",
        "Disposición del pagador (Payor Provision / Payor Benefit)",
        "Disposición de reinstalación",
        "Disposición de conversión"
      ],
      a: 1,
      trampa: "Se confunde con la disposición estándar de Waiver of Premium (que exime primas si el ASEGURADO queda incapacitado) — pero aquí específicamente el fallecido es el PAGADOR (padre), no el asegurado (hija), lo cual requiere una disposición distinta y especializada.",
      correcto: "DISPOSICIÓN DEL PAGADOR (Payor Provision/Benefit) = rider específico diseñado para pólizas de menores, donde si el PAGADOR de las primas (generalmente un padre o tutor, no el asegurado menor) fallece o queda totalmente incapacitado dentro de un período específico, las primas futuras de la póliza del menor se EXIMEN (renuncian) automáticamente hasta que el menor alcance cierta edad. [VERIFICADO — rider especializado reconocido para pólizas juveniles]",
      incorrectos: [
        "A) No existe una 'Disposición del Asegurado' estándar con esta función específica — el asegurado en este caso es la hija menor, no quien falleció.",
        "C) Reinstalación se refiere a reactivar una póliza caducada — no relacionado con exención de primas por fallecimiento del pagador.",
        "D) Conversión se refiere a cambiar de término a permanente — no relacionado con este mecanismo específico de exención de primas."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes NO es generalmente un motivo estándar para contratar un seguro de vida sobre la vida de un MENOR de edad?",
      o: [
        "Cubrir eventuales gastos finales asociados a una situación trágica e imprevista",
        "Garantizar la asegurabilidad futura del menor independientemente de condiciones de salud que puedan desarrollarse más adelante",
        "Comenzar a acumular cash value que podría utilizarse en el futuro (por ejemplo, para educación)",
        "Que, SI AMBOS PADRES fallecieran, la póliza del MENOR proporcionaría prestaciones por fallecimiento a favor del menor sobreviviente"
      ],
      a: 3,
      trampa: "Esta opción invierte lógicamente la relación aseguradora — el seguro de vida DEL MENOR paga si el MENOR fallece, no proporciona beneficios AL menor cuando los padres fallecen (esa sería una póliza sobre la vida de LOS PADRES, no del menor).",
      correcto: "Esta afirmación NO es un motivo válido porque invierte la lógica del seguro: una póliza SOBRE LA VIDA DEL MENOR paga un beneficio SI EL MENOR FALLECE — no proporciona beneficios al menor cuando SUS PADRES fallecen (ese escenario requeriría una póliza sobre la vida de los padres, un producto completamente diferente con propósito distinto). [VERIFICADO — distinción lógica fundamental sobre a quién beneficia cada tipo de póliza]",
      incorrectos: [
        "A) Cubrir gastos finales SÍ es un motivo legítimo y reconocido para el seguro de vida de un menor.",
        "B) Garantizar asegurabilidad futura SÍ es un motivo legítimo y frecuentemente citado para el seguro de vida de un menor.",
        "C) Acumular cash value para uso futuro SÍ es un motivo legítimo reconocido para ciertos diseños de seguro de vida de menores."
      ]
    }
  ]
},

{
  id: "nivel4_005",
  area: "salud",
  concepto: "Medicare Parte A — Características y Limitaciones",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes es una característica de Medicare Parte A, y cuál NO lo es?",
      o: [
        "Ayuda a cubrir hospitalización",
        "Generalmente NO tiene prima para quienes califican por historial de trabajo suficiente",
        "Cubre consultas médicas de RUTINA (ambulatorias regulares)",
        "Tiene deducible y copago en ciertos casos"
      ],
      a: 2,
      trampa: "Las consultas médicas de rutina ambulatorias son función específica de la Parte B, no de la Parte A — un punto frecuentemente confundido porque ambas partes de Medicare se mencionan juntas.",
      correcto: "Medicare Parte A NO cubre generalmente consultas médicas de RUTINA (atención ambulatoria regular con el médico) — esa es la función específica de la Parte B. La Parte A se enfoca principalmente en HOSPITALIZACIÓN y cuidado institucional relacionado. [VERIFICADO — distinción fundamental entre las funciones de Parte A y Parte B]",
      incorrectos: [
        "A) Ayudar a cubrir hospitalización SÍ es la función central y característica de la Parte A.",
        "B) La ausencia de prima para quienes califican por historial de trabajo suficiente SÍ es característica de la Parte A.",
        "D) Tener deducible y copago en ciertos casos (como estancias hospitalarias prolongadas) SÍ es característica de la Parte A."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Por qué se confunde frecuentemente la cobertura de 'consultas médicas de rutina' entre Medicare Parte A y Parte B?",
      o: [
        "Porque ambas partes cubren exactamente lo mismo sin ninguna distinción real",
        "Porque ambas partes forman parte del mismo programa Medicare general, pero cada una tiene un ENFOQUE FUNCIONAL específico distinto: Parte A = hospitalización/institucional; Parte B = servicios médicos ambulatorios incluyendo consultas de rutina",
        "Porque Medicare Parte A siempre cubre más servicios que la Parte B en cualquier categoría",
        "Porque la distinción entre A y B fue eliminada completamente en reformas recientes"
      ],
      a: 1,
      trampa: "La confusión surge naturalmente porque ambas son 'Medicare', pero la clave para no confundirse es recordar la DIVISIÓN FUNCIONAL específica: A=hospital, B=médico/ambulatorio.",
      correcto: "La confusión es comprensible porque ambas partes son componentes del mismo programa Medicare general, pero cada una tiene un enfoque funcional claramente distinto: PARTE A se enfoca en hospitalización y cuidado institucional relacionado; PARTE B se enfoca en servicios médicos ambulatorios, incluyendo consultas médicas de rutina, pruebas diagnósticas, y equipo médico duradero. [VERIFICADO — estructura funcional fundamental y estable de Medicare]",
      incorrectos: [
        "A) NO cubren exactamente lo mismo — tienen enfoques funcionales claramente diferenciados.",
        "C) No existe una regla de que A siempre cubra 'más' que B en cualquier categoría — cada una cubre categorías específicas diferentes.",
        "D) La distinción funcional entre Parte A y Parte B sigue siendo fundamental y vigente en la estructura actual de Medicare."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes afirmaciones sobre Medicare Parte A es la MÁS PRECISA respecto a su financiamiento?",
      o: [
        "Se financia exclusivamente mediante primas mensuales pagadas por todos los beneficiarios sin excepción",
        "Se financia principalmente mediante impuestos FICA pagados durante la vida laboral, resultando en ausencia de prima para la mayoría de los beneficiarios que califican",
        "Se financia exclusivamente mediante fondos generales del presupuesto federal sin ninguna contribución laboral previa",
        "Requiere que cada beneficiario pague individualmente el costo total de su hospitalización sin ningún subsidio"
      ],
      a: 1,
      trampa: "Se confunde el mecanismo de financiamiento de la Parte A (impuestos FICA acumulados durante la vida laboral) con el de la Parte B (primas mensuales continuas) — cada parte tiene una estructura de financiamiento diferente.",
      correcto: "Medicare Parte A se financia principalmente mediante los impuestos FICA (Medicare tax) pagados durante la VIDA LABORAL del trabajador — por esta razón, la MAYORÍA de los beneficiarios que acumularon suficientes trimestres de trabajo NO pagan prima mensual adicional por la Parte A. [VERIFICADO — mecanismo de financiamiento fundamental y estable de la Parte A]",
      incorrectos: [
        "A) No se financia exclusivamente mediante primas mensuales — ese sería el mecanismo más característico de la Parte B, no de la Parte A.",
        "C) No se financia exclusivamente mediante fondos generales — su financiamiento principal proviene específicamente de los impuestos FICA acumulados.",
        "D) No requiere que cada beneficiario pague el costo TOTAL individualmente — el sistema está diseñado con el financiamiento colectivo de FICA precisamente para evitar esa carga individual completa."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todas las siguientes son características GENERALMENTE reconocidas de Medicare Parte A EXCEPTO:",
      o: [
        "Ayuda a cubrir hospitalización",
        "Generalmente sin prima para quienes califican por historial laboral suficiente",
        "Tiene deducible y copago aplicable en ciertos casos según la duración de la estancia",
        "Cubre exámenes médicos de rutina preventivos regulares sin ninguna limitación"
      ],
      a: 3,
      trampa: "La cobertura amplia de exámenes de rutina preventivos SIN limitación es más característica de servicios cubiertos bajo la Parte B — la Parte A tiene un enfoque más limitado y específico hacia hospitalización.",
      correcto: "Medicare Parte A NO cubre generalmente de forma amplia e ilimitada los exámenes médicos de rutina preventivos regulares — ese tipo de cobertura ambulatoria extensa corresponde principalmente a la Parte B. La Parte A mantiene su enfoque específico en hospitalización y cuidado institucional relacionado. [VERIFICADO — distinción funcional entre las coberturas de ambas partes]",
      incorrectos: [
        "A) Esta SÍ es una característica reconocida y fundamental de la Parte A.",
        "B) Esta SÍ es una característica reconocida de la Parte A para la mayoría de beneficiarios calificados.",
        "C) Esta SÍ es una característica reconocida de la estructura de costos compartidos de la Parte A."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un beneficiario de Medicare es hospitalizado por 5 días y posteriormente visita a su cardiólogo para una consulta de seguimiento ambulatoria. ¿Cuál parte de Medicare cubre GENERALMENTE cada uno de estos dos servicios respectivamente?",
      o: [
        "Ambos servicios los cubre exclusivamente la Parte A sin ninguna distinción",
        "La hospitalización generalmente la cubre la Parte A; la consulta ambulatoria con el cardiólogo generalmente la cubre la Parte B",
        "Ambos servicios los cubre exclusivamente la Parte B sin ninguna distinción",
        "Ninguna de las dos partes cubre estos servicios específicos bajo ninguna circunstancia"
      ],
      a: 1,
      trampa: "Este escenario aplica directamente la distinción funcional fundamental entre ambas partes a una situación práctica concreta con dos servicios de naturaleza diferente.",
      correcto: "La HOSPITALIZACIÓN de 5 días generalmente la cubre la PARTE A (su función central de cuidado institucional). La CONSULTA AMBULATORIA con el cardiólogo (servicio médico fuera del hospital) generalmente la cubre la PARTE B (su función central de servicios médicos ambulatorios). [VERIFICADO — aplicación práctica de la distinción funcional fundamental entre Parte A y Parte B]",
      incorrectos: [
        "A) La Parte A no cubre típicamente la consulta ambulatoria con el cardiólogo — esa es función de la Parte B.",
        "C) La Parte B no cubre típicamente la hospitalización — esa es función central de la Parte A.",
        "D) Ambos servicios SÍ están cubiertos, cada uno por la parte de Medicare correspondiente a su naturaleza (institucional vs. ambulatoria)."
      ]
    }
  ]
},

{
  id: "nivel4_006",
  area: "generales",
  concepto: "Fondos de Aseguradora, USA Patriot Act y Otras Regulaciones Federales",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Dónde se mantienen GENERALMENTE los fondos correspondientes al valor en efectivo cuando un cliente desea que ese valor permanezca invertido con una tasa GARANTIZADA por la aseguradora (como en una póliza de Whole Life o Universal Life fija)?",
      o: [
        "Fondos separados (Separate Accounts)",
        "Cuenta general (General Account)",
        "Fondo fiduciario (Trust Fund) independiente",
        "Cuenta de inversión variable"
      ],
      a: 1,
      trampa: "Se confunde 'Cuenta General' (donde la aseguradora garantiza el rendimiento con sus propios activos) con 'Fondos Separados' (que son específicamente para productos VARIABLES donde el riesgo lo asume el propietario, no la aseguradora).",
      correcto: "CUENTA GENERAL (General Account) = donde se mantienen generalmente los fondos de productos con tasa GARANTIZADA por la aseguradora (como Whole Life tradicional o Universal Life fijo) — la aseguradora invierte estos fondos como parte de sus activos generales y asume el riesgo de cumplir la garantía contractual ofrecida al asegurado. [VERIFICADO — estructura fundamental de productos garantizados]",
      incorrectos: [
        "A) Fondos Separados son específicamente para productos VARIABLES, donde el valor fluctúa con el mercado y el propietario asume el riesgo — lo opuesto de una garantía de tasa por la aseguradora.",
        "C) Un fondo fiduciario independiente no es la estructura estándar para mantener el cash value garantizado de pólizas individuales tradicionales.",
        "D) Una cuenta de inversión variable es específicamente para productos variables con riesgo de mercado — no para productos con garantía de tasa fija."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿En qué año se promulgó GENERALMENTE la USA Patriot Act?",
      o: [
        "1998",
        "2001",
        "2008",
        "2015"
      ],
      a: 1,
      trampa: "El año se confunde fácilmente con otros años relevantes de legislación regulatoria financiera o de seguros si no se tiene claro el contexto histórico específico de esta ley.",
      correcto: "La USA Patriot Act se promulgó generalmente en 2001, en el contexto posterior a los eventos del 11 de septiembre de ese mismo año, con el propósito de fortalecer las herramientas de seguridad nacional, incluyendo disposiciones relacionadas con la prevención del lavado de dinero en instituciones financieras y aseguradoras. [VERIFICADO — hecho histórico ampliamente documentado]",
      incorrectos: [
        "A) 1998 es anterior a los eventos que motivaron esta legislación específica.",
        "C) 2008 no corresponde al año de promulgación de esta ley específica.",
        "D) 2015 es significativamente posterior al año real de promulgación."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la finalidad PRINCIPAL de la USA Patriot Act en el contexto específico de la industria de seguros y servicios financieros?",
      o: [
        "Reducir generalmente las primas de seguros de vida en todo el país",
        "Detectar y disuadir el terrorismo, incluyendo mediante el fortalecimiento de controles contra el lavado de dinero en instituciones financieras",
        "Eliminar completamente el requisito de licencia para agentes de seguros",
        "Establecer un sistema único de seguro de salud administrado exclusivamente por el gobierno federal"
      ],
      a: 1,
      trampa: "El propósito específico dentro del contexto de servicios financieros/seguros se relaciona con seguridad nacional y prevención de lavado de dinero — no con objetivos de precio, licenciamiento, ni estructura de salud pública.",
      correcto: "La finalidad principal de la USA Patriot Act es DETECTAR Y DISUADIR EL TERRORISMO, lo cual en el contexto de instituciones financieras y aseguradoras se traduce específicamente en el fortalecimiento de controles y requisitos contra el LAVADO DE DINERO (anti-money laundering / AML), incluyendo el reporte de actividades sospechosas. [VERIFICADO — propósito fundamental de esta legislación federal]",
      incorrectos: [
        "A) No tiene relación con reducir primas de seguros — su propósito es de seguridad nacional, no de regulación de precios.",
        "C) No elimina requisitos de licencia de agentes — esos son requisitos regulatorios estatales separados y no relacionados.",
        "D) No establece ningún sistema de seguro de salud — su alcance es de seguridad nacional y prevención financiera de actividades ilícitas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Cuando el titular de una póliza de Vida Universal rescata en efectivo una porción significativa de su valor acumulado durante los PRIMEROS años de vigencia de la póliza, ¿qué podría considerarse esto potencialmente bajo el marco de vigilancia establecido por regulaciones como la USA Patriot Act?",
      o: [
        "Una transacción completamente normal sin ningún interés regulatorio bajo cualquier circunstancia",
        "Potencialmente una señal de alarma (red flag) para una posible violación de la normativa contra el blanqueo de capitales, dependiendo del patrón y contexto específico de la transacción",
        "Una violación automática y garantizada que resulta en cargos criminales inmediatos sin ningún proceso adicional",
        "Un requisito obligatorio que todas las pólizas de Vida Universal deben cumplir en sus primeros años"
      ],
      a: 1,
      trampa: "No toda transacción de este tipo es automáticamente ilegal, pero ciertos PATRONES (como rescates significativos tempranos, especialmente si son atípicos para el perfil del cliente) pueden generar señales de alarma bajo los sistemas de vigilancia AML que las aseguradoras deben mantener.",
      correcto: "Dependiendo del patrón, monto, y contexto específico, un rescate significativo de efectivo en los primeros años de una póliza PUEDE considerarse una señal de alarma (red flag) que las aseguradoras deben evaluar bajo sus programas de cumplimiento contra el blanqueo de capitales, requeridos en parte por marcos regulatorios relacionados con la USA Patriot Act — no significa automáticamente que sea ilegal, pero activa un proceso de revisión y posible reporte. [VERIFICADO — principio general de vigilancia AML en la industria financiera/aseguradora]",
      incorrectos: [
        "A) No es automáticamente 'normal sin ningún interés' — ciertos patrones específicos SÍ generan atención bajo los sistemas de cumplimiento AML.",
        "C) No es una violación automática con cargos criminales inmediatos — es una señal que activa revisión y posible reporte, no una condena automática.",
        "D) No es un requisito obligatorio de diseño de producto — es una posible señal de alarma en el contexto de vigilancia regulatoria, no una característica requerida de la póliza."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuáles serían GENERALMENTE las consecuencias de contratar con un asegurador NO AUTORIZADO (no admitido) para vender seguros regulares al público general en Florida?",
      o: [
        "Ninguna consecuencia relevante — es una práctica completamente permitida sin restricciones",
        "Potencialmente consecuencias regulatorias significativas para quien facilita la transacción, aunque generalmente NO constituiría un delito de primer grado específicamente por esa sola circunstancia",
        "Automáticamente resultaría en un delito de primer grado sin ninguna excepción o gradación posible",
        "Solo afectaría al asegurador, nunca al agente que facilita la transacción de ninguna manera"
      ],
      a: 1,
      trampa: "Es fácil sobre-simplificar hacia un extremo (sin consecuencia) o el otro (delito de máxima gravedad automático) — la realidad regulatoria generalmente involucra consecuencias significativas pero con gradación según las circunstancias específicas, no necesariamente la clasificación penal más severa en todos los casos.",
      correcto: "Contratar con un asegurador NO AUTORIZADO para seguros regulares generalmente conlleva consecuencias regulatorias significativas (multas, sanciones a la licencia del agente facilitador, responsabilidad civil), aunque la clasificación penal específica (como si constituye o no un delito de primer grado) depende de las circunstancias particulares del caso — no es automáticamente la clasificación penal de mayor gravedad en todos los casos bajo cualquier circunstancia. [REQUIERE VERIFICACIÓN — confirmar la clasificación penal específica exacta contra el Florida Statute vigente aplicable a este tipo de violación]",
      incorrectos: [
        "A) SÍ existen consecuencias regulatorias significativas — no es una práctica sin restricciones.",
        "C) No es automáticamente la clasificación penal de mayor gravedad sin ninguna gradación — las consecuencias específicas dependen de las circunstancias del caso particular.",
        "D) El agente que facilita la transacción SÍ puede enfrentar consecuencias regulatorias directas, no solo el asegurador no autorizado."
      ]
    }
  ]
},

{
  id: "nivel4_007",
  area: "provisiones",
  concepto: "Nonforfeiture Aplicado — Escenario de Opción de Rescate por Tiempo Limitado",
  variantes: [
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado deja de pagar las primas de una póliza de vida. La póliza tiene suficiente valor en efectivo acumulado. ¿Qué opción de no caducidad permite la cobertura por un período de tiempo LIMITADO sin seguir pagando, usando el mismo monto de beneficio nominal original?",
      o: [
        "Pago reducido",
        "Término extendido",
        "Rescate en efectivo",
        "Préstamo sobre la póliza"
      ],
      a: 1,
      trampa: "Repetición reforzada final del concepto de Término Extendido, presentado en un contexto de revisión integral junto a otros conceptos del examen, para consolidar el reconocimiento del patrón 'mismo monto + tiempo limitado'.",
      correcto: "TÉRMINO EXTENDIDO usa el valor en efectivo acumulado como prima única para comprar seguro de TÉRMINO por el MISMO monto de beneficio nominal original, durante el tiempo que ese valor único pueda financiar actuarialmente esa cobertura temporal — es la respuesta consistente para este patrón de escenario específico. [VERIFICADO — aplicación reforzada y consolidada de la definición estándar]",
      incorrectos: [
        "A) Pago Reducido resulta en cobertura PERMANENTE con un monto MENOR — características diferentes a las descritas en este escenario.",
        "C) Rescate en Efectivo termina completamente la cobertura a cambio de recibir el valor en efectivo directamente — no mantiene protección.",
        "D) Préstamo sobre la Póliza es un mecanismo diferente para pagar primas usando el valor en efectivo como garantía — no convierte la póliza en un producto de término independiente."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuáles son GENERALMENTE las tres opciones formales de no caducidad (nonforfeiture) reconocidas en pólizas de vida permanente con valor en efectivo?",
      o: [
        "Rescate en efectivo, préstamo automático de prima, y renovación garantizada",
        "Rescate en efectivo, término extendido, y pago (seguro) reducido",
        "Conversión, restablecimiento, y renovación",
        "Anualización, liquidación, y beneficio acelerado"
      ],
      a: 1,
      trampa: "Se mezclan las tres opciones FORMALES de no caducidad con otras provisiones o mecanismos relacionados pero técnicamente distintos (como el préstamo automático de prima, que es una provisión separada).",
      correcto: "Las tres opciones formales estándar de no caducidad son: RESCATE EN EFECTIVO (Cash Surrender), TÉRMINO EXTENDIDO (Extended Term), y SEGURO/PAGO REDUCIDO (Reduced Paid-Up) — estas son las tres alternativas reconocidas cuando un asegurado con valor en efectivo suficiente deja de pagar primas y no desea perder completamente el valor acumulado. [VERIFICADO — clasificación estándar y estable de estas tres opciones]",
      incorrectos: [
        "A) El préstamo automático de prima es una provisión SEPARADA que mantiene la póliza ORIGINAL vigente — no es una de las tres opciones formales de no caducidad en sí misma.",
        "C) Conversión, restablecimiento y renovación son provisiones/derechos completamente diferentes, no relacionados con la clasificación de no caducidad.",
        "D) Anualización, liquidación y beneficio acelerado son mecanismos de productos y provisiones diferentes, no las opciones de no caducidad de una póliza de vida con cash value."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Considerando las tres opciones de no caducidad en conjunto, ¿cuál sería GENERALMENTE la opción MÁS APROPIADA para un asegurado que prioriza específicamente mantener el MISMO NIVEL de protección familiar (mismo monto nominal) que tenía originalmente, aunque sea por un tiempo limitado?",
      o: [
        "Rescate en efectivo — porque proporciona liquidez inmediata",
        "Término extendido — porque mantiene el MISMO monto de beneficio nominal, aunque temporalmente",
        "Pago reducido — porque es la opción más económica a largo plazo",
        "Ninguna de las tres opciones formales podría lograr este objetivo específico"
      ],
      a: 1,
      trampa: "El asegurado prioriza específicamente el MONTO (protección familiar completa), incluso a costa de la duración — esto señala claramente hacia Término Extendido, que es la única opción que preserva el monto original completo.",
      correcto: "TÉRMINO EXTENDIDO sería generalmente la opción más apropiada para este objetivo específico, porque es la ÚNICA de las tres opciones de no caducidad que preserva el MISMO monto de beneficio nominal original — las otras opciones (rescate, pago reducido) implican necesariamente una reducción del monto de protección disponible. [VERIFICADO — análisis comparativo de las tres opciones según el objetivo prioritario descrito]",
      incorrectos: [
        "A) El rescate en efectivo elimina COMPLETAMENTE la protección de seguro de vida — contrario al objetivo de mantener protección familiar.",
        "C) El pago reducido mantiene protección permanente, pero con un MONTO MENOR — no satisface el objetivo específico de mantener el MISMO nivel de protección.",
        "D) El Término Extendido SÍ logra este objetivo específico, siendo la opción diseñada precisamente para preservar el monto original."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Si el valor en efectivo acumulado de una póliza es RELATIVAMENTE PEQUEÑO en comparación con el beneficio de muerte original, ¿cómo afecta esto GENERALMENTE la duración de la cobertura bajo la opción de Término Extendido?",
      o: [
        "No afecta en absoluto la duración — siempre dura exactamente el mismo tiempo sin importar el valor disponible",
        "GENERALMENTE resultará en un período de cobertura de término MÁS CORTO, ya que hay menos valor disponible para financiar actuarialmente la prima única de la cobertura temporal por el monto completo original",
        "Automáticamente aumenta el monto del beneficio de muerte para compensar el valor pequeño",
        "Convierte automáticamente la opción en Pago Reducido en su lugar sin ninguna elección del asegurado"
      ],
      a: 1,
      trampa: "La relación entre el VALOR DISPONIBLE (variable según la póliza y años transcurridos) y la DURACIÓN de la cobertura de término extendido resultante es directamente proporcional — menos valor generalmente significa menos tiempo de cobertura sostenible.",
      correcto: "Un valor en efectivo RELATIVAMENTE PEQUEÑO generalmente resultará en un período MÁS CORTO de cobertura de Término Extendido, porque hay MENOS fondos disponibles para financiar actuarialmente la prima única necesaria para sostener el beneficio completo original por un período prolongado — la relación es directamente proporcional entre el valor disponible y la duración de cobertura resultante. [VERIFICADO — mecánica actuarial fundamental de esta opción]",
      incorrectos: [
        "A) SÍ afecta significativamente la duración — es precisamente la variable clave que determina cuánto tiempo puede sostenerse la cobertura de término.",
        "C) El monto del beneficio de muerte permanece IGUAL al original (esa es la característica definitoria del Término Extendido) — no aumenta para compensar un valor pequeño.",
        "D) No se convierte automáticamente en otra opción — el asegurado (o el diseño predeterminado de la póliza) elige o se aplica la opción de Término Extendido según corresponda, resultando simplemente en una duración más corta si el valor es limitado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todas las siguientes son consideraciones RELEVANTES al evaluar cuál opción de no caducidad es más apropiada para un asegurado específico EXCEPTO:",
      o: [
        "La necesidad continuada de protección familiar del asegurado",
        "El monto de valor en efectivo actualmente acumulado en la póliza",
        "Si el asegurado prioriza mantener el monto original versus la permanencia de la cobertura",
        "El color específico de la carátula impresa de la póliza original"
      ],
      a: 3,
      trampa: "Tres opciones son consideraciones sustantivas y relevantes para esta decisión financiera importante; la cuarta es una característica completamente trivial y estética sin ninguna relevancia funcional para la decisión.",
      correcto: "El color de la carátula impresa de la póliza es una característica completamente ESTÉTICA y TRIVIAL sin ninguna relevancia funcional o financiera para la decisión sobre qué opción de no caducidad es más apropiada — es la opción que claramente NO pertenece a las consideraciones sustantivas relevantes. [VERIFICADO — distinción lógica entre factores sustantivos y triviales]",
      incorrectos: [
        "A) La necesidad de protección familiar SÍ es una consideración sustantiva y relevante para esta decisión.",
        "B) El monto de valor en efectivo disponible SÍ es una consideración sustantiva y relevante que determina las opciones prácticas disponibles.",
        "C) La prioridad entre monto versus permanencia SÍ es una consideración sustantiva y relevante para elegir entre las opciones disponibles."
      ]
    }
  ]
}

]; // fin PK_NIVEL4

if (typeof window !== 'undefined') window.PK_NIVEL4 = PK_NIVEL4;
if (typeof module !== 'undefined') module.exports = { PK_NIVEL4 };
