// ============================================================
// PEARSON KILLER — pk-data-life.js
// Módulo: Tipos de Seguros de Vida
// 7 conceptos × 5 variantes = 35 preguntas
// Fuente: Manual 2-15 Florida, IRC, Florida Statutes
// ============================================================

const PK_LIFE = [

{
  id: "vida_001",
  area: "vida",
  concepto: "Term Life — Características y Tipos",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la característica MÁS IMPORTANTE que distingue el seguro de vida a término (Term Life) de los seguros permanentes?",
      o: [
        "Tiene el beneficio de muerte más alto de todos los tipos de seguro de vida disponibles",
        "Provee cobertura TEMPORAL por un período específico sin acumular valor en efectivo (cash value)",
        "Requiere examen médico obligatorio mientras que el Whole Life no lo requiere nunca",
        "Las primas del término son fijas de por vida igual que el Whole Life"
      ],
      a: 1,
      trampa: "La característica definitoria del Term Life es la TEMPORALIDAD combinada con la ausencia total de cash value.",
      correcto: "Term Life = cobertura TEMPORAL por un período específico. NO acumula cash value. Si el período expira sin reclamación de muerte, el asegurado ha pagado primas sin valor residual alguno.",
      incorrectos: [
        "A) El beneficio de muerte puede ser igual o mayor — pero no es la característica definitoria.",
        "C) Ambos tipos pueden o no requerir examen médico según la compañía, el monto y la edad.",
        "D) Las primas del ART (Annual Renewable Term) AUMENTAN cada año — no son fijas de por vida."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "CASI_IDENTICAS",
      q: "Un seguro de término cuya prima AUMENTA cada año según la edad actual del asegurado pero el beneficio de muerte permanece constante se llama:",
      o: [
        "Término nivelado (Level Term) — prima y beneficio fijos durante todo el período",
        "Término creciente (Increasing Term) — beneficio de muerte que aumenta cada año",
        "Término anual renovable (Annual Renewable Term / ART) — prima recalculada anualmente",
        "Término decreciente (Decreasing Term) — beneficio de muerte que disminuye con el tiempo"
      ],
      a: 2,
      trampa: "Todos son término pero cada uno tiene un comportamiento diferente de prima Y beneficio. ART = prima aumenta; beneficio constante.",
      correcto: "ART (Annual Renewable Term) = la prima se recalcula y AUMENTA cada año según la edad actual del asegurado. El beneficio de muerte permanece CONSTANTE. Es el tipo más común en seguros de vida de grupo.",
      incorrectos: [
        "A) Level Term = tanto la prima COMO el beneficio son FIJOS durante todo el período contratado.",
        "B) Increasing Term = el BENEFICIO DE MUERTE aumenta — no describe el comportamiento de la prima.",
        "D) Decreasing Term = el BENEFICIO DE MUERTE disminuye — se usa para cubrir hipotecas."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "Pedro tiene un seguro de término que vence en 3 meses. Recientemente le diagnosticaron diabetes tipo 2. ¿Qué opción le permite continuar teniendo cobertura de vida SIN examen médico adicional?",
      o: [
        "Renovar el término automáticamente — todos los términos se renuevan sin condiciones de salud",
        "Convertir el término a una póliza permanente usando el Privilegio de Conversión antes de que expire",
        "Solicitar una nueva póliza de término declarando la diabetes a otra compañía",
        "Esperar que la diabetes mejore y entonces solicitar nueva cobertura sin restricciones"
      ],
      a: 1,
      trampa: "La diabetes ahora lo haría más caro o posiblemente inasegurable. El Privilegio de Conversión es la solución — pero DEBE usarse ANTES de que el término expire.",
      correcto: "El Privilegio de Conversión permite convertir el término a una póliza permanente (Whole Life) SIN evidencia de asegurabilidad ni examen médico, independientemente del estado de salud actual.",
      incorrectos: [
        "A) La renovación automática generalmente requiere evidencia de asegurabilidad o tiene límites de edad.",
        "C) Al declarar la diabetes, pagaría primas muy altas o podría ser rechazado por la nueva compañía.",
        "D) Esperar es arriesgado — si el término expira, puede quedar sin seguro permanentemente."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "¿En qué situación específica el Return of Premium Term (Término con Devolución de Prima) tiene más sentido como producto para un cliente?",
      o: [
        "Para quien quiere la prima MÁS BAJA posible sin importar el costo total a largo plazo",
        "Para quien quiere cobertura temporal pero desea recuperar TODAS las primas pagadas si sobrevive el período completo",
        "Para quien quiere acumular cash value garantizado igual que el Whole Life pero a menor costo",
        "Para quien necesita cobertura permanente de por vida con prima fija garantizada"
      ],
      a: 1,
      trampa: "El ROP Term tiene prima SIGNIFICATIVAMENTE más alta que el Level Term regular — no es para quien busca la más baja.",
      correcto: "Return of Premium Term = devuelve TODAS las primas pagadas si el asegurado sobrevive el período completo. La prima es mayor que el término regular para financiar esta garantía de devolución.",
      incorrectos: [
        "A) El ROP Term tiene prima MÁS ALTA que el término regular — es lo opuesto de la prima más baja.",
        "C) NO acumula cash value como el Whole Life — devuelve primas solo si sobrevive el período.",
        "D) El ROP Term sigue siendo TEMPORAL — no provee cobertura permanente de por vida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es una característica del seguro de vida a término (Term Life) EXCEPTO:",
      o: [
        "Provee cobertura por un período específico y limitado de tiempo",
        "Generalmente ofrece la prima mensual más baja comparado con otros tipos de vida con mismo beneficio",
        "Acumula valor en efectivo (cash value) que puede tomarse como préstamo sin impuestos",
        "Puede incluir un Privilegio de Conversión a póliza permanente sin examen médico"
      ],
      a: 2,
      trampa: "La trampa EXCEPTO señala lo que NO es característica del término. El cash value es exclusivo de pólizas PERMANENTES — nunca del término.",
      correcto: "El seguro de TÉRMINO NO acumula cash value de ningún tipo. Cuando el período expira sin reclamación, no hay valor residual. El cash value es exclusivo de pólizas permanentes como Whole Life, Universal Life y Variable Life.",
      incorrectos: [
        "A) Esta SÍ es característica del término — cobertura temporal por período específico.",
        "B) Esta SÍ es característica del término — prima generalmente la más baja para igual beneficio.",
        "D) Esta SÍ puede ser característica del término — el privilegio de conversión es común."
      ]
    }
  ]
},

{
  id: "vida_002",
  area: "vida",
  concepto: "Whole Life — Vida Entera y sus Características",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es el conjunto de características que distingue al seguro de Vida Entera (Whole Life) de TODOS los demás tipos de seguro de vida?",
      o: [
        "Tiene la prima mensual más baja de todos los tipos de seguro de vida disponibles",
        "Provee cobertura permanente de por vida con prima FIJA y acumula cash value GARANTIZADO",
        "El beneficio de muerte varía según el rendimiento de las inversiones del mercado",
        "Solo está disponible para solicitantes menores de 50 años de edad"
      ],
      a: 1,
      trampa: "Las TRES garantías simultáneas del Whole Life (permanencia + prima fija + cash value garantizado) son únicas — ningún otro tipo las tiene todas juntas.",
      correcto: "Whole Life = TRES garantías simultáneas: 1) Cobertura PERMANENTE (de por vida sin excepción), 2) Prima FIJA que nunca aumenta en ninguna circunstancia, 3) Cash value GARANTIZADO que crece de forma predecible y estable.",
      incorrectos: [
        "A) El TÉRMINO generalmente tiene la prima más baja — el Whole Life siempre tiene prima más alta.",
        "C) El beneficio de muerte variable corresponde al Variable Life (VUL) — no al Whole Life.",
        "D) El Whole Life no tiene ninguna restricción de edad máxima para solicitarlo."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En una póliza de Whole Life, la póliza 'madura' cuando el cash value iguala al beneficio de muerte. En una póliza tradicional, ¿esto ocurre a la edad de?",
      o: [
        "65 años — la edad típica de jubilación en Estados Unidos",
        "70 años — cuando comienzan los RMDs tradicionales",
        "95 años — edad avanzada estándar de las tablas actuariales",
        "100 años — en pólizas tradicionales (121 años en pólizas modernas)"
      ],
      a: 3,
      trampa: "Las pólizas tradicionales de Whole Life maduran a los 100 años — no a los 65 ni 70 como muchos asumen incorrectamente.",
      correcto: "La póliza de Whole Life tradicional MADURA a los 100 AÑOS. En ese momento el cash value iguala el beneficio de muerte y el asegurado recibe el monto completo como endowment. Las pólizas modernas pueden madurar a los 121 años.",
      incorrectos: [
        "A) 65 años es la edad de elegibilidad de Medicare y jubilación — no de maduración del Whole Life.",
        "B) 70 años no tiene relevancia específica para la maduración del Whole Life.",
        "C) 95 años no es la edad de maduración estándar — es 100 (o 121 en pólizas modernas)."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "QUIEN_PAGA",
      q: "Carlos tiene una póliza de Whole Life y toma un préstamo contra su cash value acumulado. ¿Qué sucede si Carlos fallece sin haber repagado el préstamo?",
      o: [
        "El préstamo se cancela automáticamente sin afectar el beneficio de muerte que recibe el beneficiario",
        "El beneficiario recibe el beneficio de muerte completo MÁS los intereses acumulados como compensación",
        "El beneficiario recibe el beneficio de muerte MENOS el saldo pendiente del préstamo más los intereses acumulados",
        "La póliza se cancela automáticamente al momento en que Carlos toma cualquier préstamo"
      ],
      a: 2,
      trampa: "Los préstamos contra cash value NO cancelan la póliza, pero SÍ reducen el beneficio de muerte que recibe el beneficiario al fallecer.",
      correcto: "El préstamo más los intereses acumulados se deducen del beneficio de muerte. El beneficiario recibe el beneficio de muerte MENOS lo adeudado. El préstamo en sí no es ingreso gravable para Carlos.",
      incorrectos: [
        "A) El préstamo NO se cancela automáticamente al fallecer — se deduce del beneficio de muerte.",
        "B) El préstamo no genera intereses A FAVOR del beneficiario — al contrario, reduce el beneficio.",
        "D) Tomar un préstamo NO cancela la póliza — la póliza continúa en vigor con el préstamo pendiente."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es verdadero sobre el cash value en una póliza de Whole Life EXCEPTO:",
      o: [
        "Crece con impuestos diferidos (tax-deferred) durante toda la vigencia de la póliza",
        "Puede tomarse como préstamo sin ser considerado ingreso gravable en el año del préstamo",
        "Puede usarse como prima automática si el asegurado no paga (Automatic Premium Loan)",
        "Siempre iguala al beneficio de muerte en cualquier momento de la vigencia de la póliza"
      ],
      a: 3,
      trampa: "El cash value EVENTUALMENTE iguala el beneficio de muerte (al madurar a los 100 años), pero NO en cualquier momento — solo al madurar la póliza.",
      correcto: "El cash value crece GRADUALMENTE durante décadas hasta igualar el beneficio de muerte cuando la póliza MADURA (a los 100 años). En los primeros años, el cash value es significativamente MENOR que el beneficio de muerte.",
      incorrectos: [
        "A) Esta SÍ es verdadera — el crecimiento del cash value es tax-deferred.",
        "B) Esta SÍ es verdadera — los préstamos contra cash value no son ingreso gravable.",
        "C) Esta SÍ es verdadera — el APL usa cash value para pagar primas vencidas automáticamente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Un agente compara Whole Life vs Term Life para un cliente de 30 años con familia joven y presupuesto limitado. ¿Cuál afirmación es la MÁS PRECISA?",
      o: [
        "El Whole Life es siempre la mejor opción porque tiene cash value garantizado que el Term no tiene",
        "El Term Life es siempre la mejor opción porque tiene la prima más baja disponible",
        "El Term tiene prima más baja y cobertura temporal; el Whole tiene prima más alta pero es permanente y acumula cash value garantizado — la mejor opción depende de las necesidades específicas del cliente",
        "Ambos son idénticos en términos de costo total a largo plazo porque las primas terminan igualándose"
      ],
      a: 2,
      trampa: "No hay una opción universalmente 'siempre mejor' — cada tipo sirve propósitos diferentes para necesidades diferentes.",
      correcto: "La elección correcta DEPENDE de las necesidades: Term = máxima cobertura al menor costo por período específico. Whole = permanencia, cash value garantizado, prima fija de por vida. Ambos tienen valor según el caso.",
      incorrectos: [
        "A) El Whole Life NO es SIEMPRE la mejor opción — para presupuesto limitado, el Term es más eficiente.",
        "B) El Term NO es SIEMPRE la mejor opción — a largo plazo el Whole puede ser más eficiente.",
        "D) NO son idénticos en costo total — el Whole Life siempre tiene prima más alta que el Term equivalente."
      ]
    }
  ]
},

{
  id: "vida_003",
  area: "vida",
  concepto: "Universal Life (UL) — Flexibilidad y Características",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "El Seguro de Vida Universal (Universal Life) se diferencia del Whole Life principalmente porque el UL permite:",
      o: [
        "No acumular ningún tipo de cash value a diferencia del Whole Life",
        "Primas FIJAS exactamente igual que el Whole Life pero con mayor rendimiento garantizado",
        "Primas FLEXIBLES — el asegurado puede ajustar el monto y frecuencia de pago dentro de los límites de la póliza",
        "Un beneficio de muerte garantizado más alto que cualquier póliza de Whole Life equivalente"
      ],
      a: 2,
      trampa: "La FLEXIBILIDAD de prima es la característica definitoria del UL que lo distingue del Whole Life. Sin ella, sería esencialmente un Whole Life.",
      correcto: "UL = Seguro de vida PERMANENTE con prima FLEXIBLE. El asegurado puede ajustar el monto de la prima y el beneficio de muerte dentro de los límites contractuales. El cash value gana interés según una tasa declarada por la compañía.",
      incorrectos: [
        "A) El UL SÍ acumula cash value — esa es una característica central y fundamental del producto.",
        "B) La prima del UL es FLEXIBLE — no fija como el Whole Life. Esa es precisamente la diferencia clave.",
        "D) El beneficio de muerte del UL puede ser ajustable hacia arriba o abajo — no necesariamente mayor."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "CASI_IDENTICAS",
      q: "En una póliza de Universal Life, la tasa de interés que gana el cash value es:",
      o: [
        "Exactamente la misma tasa que los fondos de inversión del mercado de valores en tiempo real",
        "Una tasa fija garantizada de por vida que nunca puede cambiar — igual que el Whole Life tradicional",
        "Una tasa DECLARADA por la aseguradora que puede variar periódicamente pero tiene un mínimo garantizado",
        "Una tasa completamente variable que fluctúa diariamente según el índice S&P 500"
      ],
      a: 2,
      trampa: "El UL no está vinculado al mercado en tiempo real (eso es VUL) ni tiene tasa completamente fija (eso es más propio del Whole Life).",
      correcto: "UL = tasa de interés DECLARADA por la aseguradora, que puede ajustarse periódicamente según las condiciones del mercado, pero siempre tiene un MÍNIMO GARANTIZADO contractual por debajo del cual no puede caer.",
      incorrectos: [
        "A) Las tasas del mercado de valores en tiempo real corresponden al Variable Universal Life (VUL).",
        "B) La tasa completamente fija de por vida es más característica del Whole Life tradicional.",
        "D) La fluctuación diaria con el S&P 500 corresponde a productos de Variable Annuity o VUL."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "María tiene una póliza de Universal Life y deja de pagar las primas por dificultades económicas temporales. ¿Qué sucede con su cobertura de vida?",
      o: [
        "La póliza caduca inmediatamente el día en que no se recibe el pago de la prima",
        "El beneficio de muerte se reduce automáticamente en proporción directa a la prima no pagada",
        "La póliza permanece vigente mientras el cash value acumulado sea suficiente para cubrir los cargos mensuales de seguro",
        "La aseguradora asume automáticamente el pago de las primas como préstamo a cargo del beneficiario designado"
      ],
      a: 2,
      trampa: "La flexibilidad del UL permite que el cash value acumulado cubra los costos de seguro cuando no se paga la prima — eso es precisamente su ventaja diferenciadora.",
      correcto: "En el UL, los cargos mensuales de seguro se deducen del cash value automáticamente. Si hay cash value suficiente, la póliza permanece VIGENTE SIN pago de prima. La póliza caduca solo cuando el cash value se agota completamente.",
      incorrectos: [
        "A) No caduca inmediatamente — el cash value actúa como reserva para cubrir los cargos de seguro.",
        "B) No hay reducción proporcional automática del beneficio — el cash value cubre los costos.",
        "D) No existe mecanismo automático que cargue el pago de primas al beneficiario designado."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál situación específica hace más conveniente el Universal Life sobre el Whole Life para un cliente?",
      o: [
        "El cliente quiere la garantía máxima y absoluta de cash value sin ninguna variabilidad posible",
        "El cliente tiene ingresos variables y necesita flexibilidad para ajustar sus pagos de prima según su situación económica",
        "El cliente quiere que su inversión esté vinculada directamente al rendimiento del mercado de valores",
        "El cliente quiere el seguro más económico disponible sin importar la cobertura permanente"
      ],
      a: 1,
      trampa: "La flexibilidad de prima del UL es su ventaja específica para clientes con flujo de ingreso variable o incierto.",
      correcto: "UL es IDEAL para clientes con ingresos variables (trabajadores independientes, profesionales con bonos variables) porque pueden pagar más cuando los ingresos son altos y reducir cuando hay restricciones económicas.",
      incorrectos: [
        "A) Para máxima garantía sin variabilidad, el Whole Life con cash value garantizado es más apropiado.",
        "C) Para rendimientos vinculados al mercado de valores, el Variable Universal Life (VUL) es el indicado.",
        "D) El término es el más económico — pero no ofrece cobertura permanente de por vida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es una característica del Universal Life EXCEPTO:",
      o: [
        "Prima flexible que puede ajustarse dentro de los límites mínimo y máximo de la póliza",
        "Beneficio de muerte que puede aumentarse o reducirse según las necesidades cambiantes del asegurado",
        "Cash value que crece con una tasa de interés declarada por la aseguradora con mínimo garantizado",
        "Prima completamente fija que NUNCA puede modificarse durante toda la vida de la póliza"
      ],
      a: 3,
      trampa: "La prima FIJA que nunca puede modificarse es característica del WHOLE LIFE — es exactamente lo OPUESTO a la naturaleza del Universal Life.",
      correcto: "La prima COMPLETAMENTE FIJA e invariable es característica del Whole Life tradicional. El Universal Life tiene prima FLEXIBLE — esa es su característica diferenciadora principal. La opción D describe lo que el UL NO es.",
      incorrectos: [
        "A) Esta SÍ es característica del UL — prima flexible entre límites mínimo y máximo.",
        "B) Esta SÍ es característica del UL — el beneficio de muerte puede ajustarse.",
        "C) Esta SÍ es característica del UL — tasa declarada con mínimo garantizado."
      ]
    }
  ]
},

{
  id: "vida_004",
  area: "vida",
  concepto: "Variable Life y Variable Universal Life — Riesgo de Inversión",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "QUIEN_PAGA",
      q: "En un seguro de Vida Variable (Variable Life Insurance), ¿quién asume el riesgo de inversión del cash value?",
      o: [
        "La aseguradora garantiza el rendimiento mínimo del cash value en todos los escenarios",
        "El gobierno federal garantiza el valor a través de la FDIC como cualquier depósito bancario",
        "El DUEÑO DE LA PÓLIZA asume completamente el riesgo de inversión de las subcuentas",
        "El agente vendedor es legalmente responsable del rendimiento de las inversiones seleccionadas"
      ],
      a: 2,
      trampa: "VARIABLE = el DUEÑO asume el riesgo. Esta es la diferencia fundamental respecto al Whole Life donde la aseguradora garantiza el cash value.",
      correcto: "En productos VARIABLES, el cash value se invierte en subcuentas similares a fondos mutuos. El DUEÑO DE LA PÓLIZA selecciona las subcuentas y asume COMPLETAMENTE el riesgo — el valor puede subir o bajar con el mercado.",
      incorrectos: [
        "A) La aseguradora NO garantiza ningún rendimiento en productos variables — esa garantía es exclusiva de productos FIJOS.",
        "B) La FDIC protege depósitos bancarios exclusivamente — no tiene jurisdicción sobre seguros de vida.",
        "D) El agente puede hacer recomendaciones pero el riesgo de inversión lo asume legalmente el propietario."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Para vender seguros de Vida Variable o Anualidades Variables en Florida, un agente con licencia 2-15 necesita ADICIONALMENTE:",
      o: [
        "Solo una licencia especial adicional del Departamento de Servicios Financieros de Florida",
        "Una licencia de valores (securities) emitida por FINRA — Series 6 o Series 7 mínimo",
        "Completar 40 horas adicionales de educación continua sobre productos variables únicamente",
        "La aprobación individual del DFS para cada venta específica de un producto variable"
      ],
      a: 1,
      trampa: "La licencia 2-15 de Florida sola NO es suficiente para productos variables. Se requiere licencia de valores adicional de FINRA.",
      correcto: "Los productos variables contienen subcuentas de inversión (similares a fondos mutuos) que los convierten en VALORES (securities) bajo ley federal. Se requiere licencia FINRA Series 6 (o Series 7) ADEMÁS de la licencia estatal de seguro.",
      incorrectos: [
        "A) El DFS no emite licencias de valores — eso es jurisdicción exclusiva de FINRA a nivel federal.",
        "C) Las horas de educación continua son requisitos de mantenimiento de licencia — no reemplazan la licencia de valores.",
        "D) No se requiere aprobación individual del DFS para cada venta de producto variable."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "Las subcuentas de inversión en un seguro de Vida Variable son conceptualmente más similares a:",
      o: [
        "Cuentas de ahorro bancarias con tasa de interés garantizada por la FDIC",
        "Fondos mutuos (mutual funds) que invierten en acciones, bonos u otros valores del mercado",
        "Certificados de depósito (CDs) con tasa fija y plazo determinado garantizados por banco",
        "Cuentas del mercado monetario garantizadas por el gobierno federal estadounidense"
      ],
      a: 1,
      trampa: "Las subcuentas son equivalentes a fondos mutuos — esto es lo que las convierte legalmente en securities y requiere la licencia FINRA.",
      correcto: "Las subcuentas en productos variables son esencialmente FONDOS DE INVERSIÓN administrados por gestores profesionales. El asegurado elige entre múltiples subcuentas. El valor fluctúa con el mercado — puede crecer o caer.",
      incorrectos: [
        "A) Las cuentas bancarias tienen interés garantizado — las subcuentas variables no tienen ninguna garantía.",
        "C) Los CDs tienen tasa fija y garantizada — las subcuentas fluctúan libremente con el mercado.",
        "D) Las cuentas del mercado monetario tienen garantía gubernamental — las subcuentas no tienen ninguna."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia PRINCIPAL entre Variable Life (VL) y Variable Universal Life (VUL)?",
      o: [
        "El VUL tiene rendimientos de inversión garantizados; el VL no garantiza ningún rendimiento",
        "El VL tiene prima FIJA; el VUL tiene prima FLEXIBLE. Ambos tienen cash value en subcuentas de inversión variables",
        "El VL permite cambiar subcuentas de inversión; el VUL no permite ningún cambio de subcuentas",
        "El VUL es exclusivamente para planes de beneficio corporativo; el VL es exclusivamente individual"
      ],
      a: 1,
      trampa: "La diferencia entre VL y VUL es exactamente la misma que entre Whole Life y Universal Life — la FLEXIBILIDAD de prima.",
      correcto: "VL = Variable Life: prima FIJA, cash value en subcuentas variables (dueño asume riesgo). VUL = Variable Universal Life: prima FLEXIBLE, cash value en subcuentas variables (dueño asume riesgo). La 'U' añade la flexibilidad de prima.",
      incorrectos: [
        "A) NINGUNO de los dos garantiza rendimientos — ambos transfieren el riesgo de inversión al dueño.",
        "C) Ambos (VL y VUL) generalmente permiten cambiar entre las subcuentas de inversión disponibles.",
        "D) Ambos están disponibles tanto para individuos como para planes corporativos sin restricción."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "Un agente con licencia 2-15 de Florida pero sin ninguna licencia de valores (securities) vende una anualidad variable a un cliente. ¿Cuál es la consecuencia legal MÁS GRAVE?",
      o: [
        "Solo una advertencia verbal del DFS porque es una primera infracción menor",
        "Revocación o suspensión de la licencia de seguros y posibles sanciones federales por vender securities sin licencia de valores",
        "Solo una multa administrativa menor porque la intención del agente era beneficiar al cliente",
        "Ninguna consecuencia real — la licencia 2-15 cubre todos los productos de vida y anualidades sin excepción"
      ],
      a: 1,
      trampa: "Vender productos variables sin licencia de valores es una violación GRAVE tanto de la ley estatal de Florida como de la ley federal de valores.",
      correcto: "Vender anualidad variable sin licencia de valores constituye: 1) Vender securities sin licencia (violación federal — FINRA/SEC), 2) Violación de la licencia estatal de seguros. Consecuencias: revocación de licencia, multas significativas, posible responsabilidad civil y criminal.",
      incorrectos: [
        "A) Una advertencia verbal es completamente inadecuada para una violación tan seria y documentada.",
        "C) La intención beneficiosa NUNCA exime de una violación legal — el resultado es el mismo.",
        "D) La licencia 2-15 definitivamente NO cubre productos variables — requiere licencia de valores adicional."
      ]
    }
  ]
},

{
  id: "vida_005",
  area: "vida",
  concepto: "Opciones de No Caducidad (Nonforfeiture Options)",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "Carlos deja de pagar las primas de su Whole Life que tiene $45,000 de cash value acumulado. Quiere mantener el MISMO monto nominal de cobertura ($200,000) por el mayor tiempo posible. ¿Cuál opción de no caducidad es más apropiada?",
      o: [
        "Seguro Pagado Reducido (Reduced Paid-Up) — cobertura permanente con monto menor",
        "Seguro de Término Extendido (Extended Term Insurance) — mismo monto por período limitado",
        "Valor de Rescate en Efectivo (Cash Surrender Value) — recibe efectivo y cancela cobertura",
        "Préstamo Automático de Prima (Automatic Premium Loan) — mantiene póliza pero genera deuda"
      ],
      a: 1,
      trampa: "Reduced Paid-Up mantiene la póliza DE POR VIDA pero con monto MENOR. Extended Term mantiene el MISMO MONTO pero por tiempo limitado. Carlos quiere mantener el mismo monto ($200,000).",
      correcto: "Extended Term Insurance = usa el cash value ($45,000) como prima única para comprar SEGURO DE TÉRMINO con el MISMO MONTO NOMINAL ($200,000) que la póliza original, por el mayor tiempo que el cash value permita.",
      incorrectos: [
        "A) Reduced Paid-Up mantiene cobertura permanente pero el monto sería MENOR — no los $200,000.",
        "C) El rescate en efectivo cancela la cobertura completamente — Carlos quedaría sin seguro.",
        "D) El préstamo automático mantiene la póliza temporal pero genera deuda y eventualmente la cancela."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "Rosa quiere mantener cobertura DE POR VIDA sin pagar más primas, pero acepta un beneficio de muerte MENOR que su póliza original. ¿Cuál opción de no caducidad selecciona?",
      o: [
        "Seguro de Término Extendido — mismo monto nominal por tiempo limitado",
        "Seguro Pagado Reducido (Reduced Paid-Up) — vida entera pagada permanente con monto menor",
        "Valor de Rescate en Efectivo — recibe el efectivo y termina la relación con la compañía",
        "Reinversión de dividendos — usa dividendos para mantener la póliza sin más primas"
      ],
      a: 1,
      trampa: "La clave es DE POR VIDA (permanente) con monto MENOR. Extended Term = mismo monto pero tiempo LIMITADO. Reduced Paid-Up = permanente con monto MENOR.",
      correcto: "Reduced Paid-Up = usa el cash value como prima única para comprar una póliza de VIDA ENTERA PAGADA (sin más primas) por un monto MENOR que el original. La cobertura es PERMANENTE (de por vida) pero el beneficio se reduce.",
      incorrectos: [
        "A) Término Extendido mantiene el monto original pero la cobertura es TEMPORAL — no permanente.",
        "C) El rescate cancela completamente la cobertura — Rosa quedaría sin ningún seguro.",
        "D) La reinversión de dividendos no es una opción de no caducidad formal — los dividendos no están garantizados."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "EXCEPTO",
      q: "¿Cuál de las siguientes NO es una opción de no caducidad (nonforfeiture option) en una póliza de Vida Entera?",
      o: [
        "Seguro de término extendido (Extended Term Insurance)",
        "Seguro pagado reducido (Reduced Paid-Up Insurance)",
        "Valor de rescate en efectivo (Cash Surrender Value)",
        "Beneficio por muerte doble (Accidental Death Benefit / Double Indemnity)"
      ],
      a: 3,
      trampa: "El Accidental Death Benefit (doble indemnidad) es un RIDER adicional opcional — NO una opción de no caducidad.",
      correcto: "Las tres opciones de no caducidad son: 1) Valor de Rescate en Efectivo, 2) Término Extendido, 3) Pagado Reducido. El ADB (doble indemnidad) es un rider de beneficio adicional completamente separado — no una opción de no caducidad.",
      incorrectos: [
        "A) El término extendido SÍ es una opción estándar de no caducidad.",
        "B) El pagado reducido SÍ es una opción estándar de no caducidad.",
        "C) El rescate en efectivo SÍ es una opción estándar de no caducidad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "QUIEN_PAGA",
      q: "¿Qué determina la CANTIDAD del beneficio de muerte en la opción de Seguro Pagado Reducido?",
      o: [
        "El total de primas originales pagadas durante toda la vigencia de la póliza",
        "El valor en efectivo acumulado al momento de activar la opción — se usa como prima única para comprar la nueva póliza pagada",
        "El beneficio de muerte original de la póliza que siempre se mantiene idéntico",
        "La edad del asegurado al momento de emisión original de la póliza"
      ],
      a: 1,
      trampa: "El valor en efectivo ES el factor determinante — es el dinero disponible que se usa como prima única para comprar la nueva póliza permanente pagada.",
      correcto: "El cash value acumulado se usa como PRIMA ÚNICA para comprar una póliza de vida entera PAGADA por el monto que ese cash value pueda comprar actuarialmente a la edad actual del asegurado. Mayor cash value = mayor beneficio pagado reducido.",
      incorrectos: [
        "A) El total de primas pagadas no determina directamente el monto del pagado reducido.",
        "C) El beneficio original corresponde al Término Extendido — el Pagado Reducido tiene monto MENOR.",
        "D) La edad de emisión original solo determinó la prima inicial — no el monto del pagado reducido."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Pedro tiene Whole Life con cash value de $45,000 y beneficio de muerte de $200,000. Activa la opción de Término Extendido. ¿Cuál de los siguientes resultados es el MÁS PRECISO?",
      o: [
        "La cobertura continúa de por vida con beneficio de $45,000 (el monto del cash value)",
        "La cobertura continúa de por vida con el beneficio original de $200,000 completo",
        "La cobertura de $200,000 continúa por el período que los $45,000 puedan comprar como prima única actuarial de término",
        "La cobertura continúa de por vida con beneficio reducido proporcional al cash value disponible"
      ],
      a: 2,
      trampa: "El Término Extendido mantiene el MISMO MONTO NOMINAL ($200,000) pero por un TIEMPO LIMITADO — nunca de por vida.",
      correcto: "Término Extendido: los $45,000 de cash value se usan como prima única de término. El beneficio de muerte sigue siendo $200,000 (el mismo), pero la cobertura dura solo mientras los $45,000 alcancen actuarialmente como prima de término a la edad actual de Pedro.",
      incorrectos: [
        "A) La cobertura NO es de por vida — es temporal. Y el monto no es $45,000 sino $200,000.",
        "B) La cobertura de $200,000 de POR VIDA sería el Pagado Reducido (si el cash value alcanza).",
        "D) El Pagado Reducido reduce el monto; el Término Extendido MANTIENE el monto original."
      ]
    }
  ]
},

{
  id: "vida_006",
  area: "vida",
  concepto: "Seguros de Vida de Grupo — Características y Conversión",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál tipo de seguro de vida se utiliza MÁS COMÚNMENTE en los planes de beneficio de vida de grupo para empleados?",
      o: [
        "Whole Life permanente para cubrir a todos los empleados de por vida",
        "Variable Universal Life con subcuentas de inversión para cada empleado",
        "Annual Renewable Term (ART) — Término Anual Renovable ajustado anualmente",
        "Whole Life pagado a los 65 para todos los empleados del grupo"
      ],
      a: 2,
      trampa: "El tipo más utilizado en grupos no es el más conocido en seguros individuales.",
      correcto: "El ART (Annual Renewable Term) es el predominante en seguros de vida de grupo porque: 1) Es el más económico, 2) La prima se recalcula anualmente para todo el grupo, 3) No requiere evidencia de asegurabilidad individual para cada empleado.",
      incorrectos: [
        "A) El Whole Life es prohibitivamente costoso para cubrir a todos los empleados de un grupo.",
        "B) El VUL requiere licencia de valores y es demasiado complejo para cobertura masiva de grupo.",
        "D) El Whole Life pagado a 65 también sería muy costoso para cobertura grupal amplia."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Un empleado pierde su trabajo y quiere convertir su seguro de vida de grupo a una póliza individual. ¿Cuántos días tiene para ejercer el Privilegio de Conversión?",
      o: [
        "10 días desde la terminación del empleo o de la cobertura",
        "21 días desde la terminación del empleo o de la cobertura",
        "31 días desde la terminación del empleo o de la cobertura",
        "60 días desde la terminación del empleo o de la cobertura"
      ],
      a: 2,
      trampa: "El período de conversión es 31 días — no confundir con el free look (10 días para vida), ni con COBRA (60 días para elegir).",
      correcto: "El Privilegio de Conversión en seguros de vida de grupo debe ejercerse dentro de los 31 DÍAS siguientes a la terminación de la cobertura de grupo. No requiere evidencia de asegurabilidad.",
      incorrectos: [
        "A) 10 días es el período de examen gratuito (free look) de pólizas de vida — no el de conversión.",
        "B) 21 días es el free look para anualidades — no el período de conversión de vida de grupo.",
        "D) 60 días es el período para ELEGIR cobertura COBRA de salud — no conversión de vida de grupo."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "El Privilegio de Conversión en un seguro de vida de grupo permite convertir generalmente a qué tipo de póliza individual?",
      o: [
        "Solo a Term Life con el mismo beneficio que tenía en el plan de grupo",
        "A cualquier tipo de póliza de vida que la compañía ofrezca, completamente sin restricción alguna",
        "Generalmente a una póliza permanente (Whole Life) — no necesariamente al mismo tipo de término",
        "A Variable Life si el empleado así lo prefiere y tiene licencia de valores"
      ],
      a: 2,
      trampa: "La conversión generalmente es a Whole Life — no a término. Esto sorprende a muchos ya que el seguro de grupo era término.",
      correcto: "El Privilegio de Conversión generalmente permite convertir a una póliza PERMANENTE (Whole Life) de la aseguradora, no al mismo tipo de término del grupo. Esto es valioso para empleados con condiciones médicas que no podrían asegurarse individualmente.",
      incorrectos: [
        "A) Generalmente NO se convierte a término — la conversión es típicamente a póliza permanente.",
        "B) No es 'cualquier tipo sin restricción' — las opciones están limitadas por la aseguradora.",
        "D) Los productos variables requieren licencia de valores — no están en conversiones grupales estándar."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "QUIEN_PAGA",
      q: "En un plan de seguro de vida de grupo proporcionado por el empleador, ¿cuál es el tratamiento fiscal de las primas pagadas por el empleador por los PRIMEROS $50,000 de cobertura?",
      o: [
        "El empleado debe reportar esas primas como ingreso gravable ordinario en su declaración",
        "Las primas son deducibles para el empleador Y no son ingreso gravable para el empleado hasta $50,000 de cobertura",
        "Las primas no son deducibles para el empleador pero tampoco son gravables para el empleado",
        "Las primas son siempre 100% gravables para el empleado independientemente del monto de cobertura"
      ],
      a: 1,
      trampa: "Existe un límite importante de $50,000 en el tratamiento fiscal del seguro de vida de grupo pagado por el empleador.",
      correcto: "Las primas que paga el empleador por los primeros $50,000 de cobertura son DEDUCIBLES para el empleador Y NO son ingreso gravable para el empleado. Por encima de $50,000, el empleado debe reportar el costo de la cobertura adicional como ingreso.",
      incorrectos: [
        "A) Las primas por hasta $50,000 NO son ingreso gravable para el empleado — eso es el beneficio fiscal.",
        "C) Las primas SÍ son deducibles para el empleador — es un gasto de compensación a empleados.",
        "D) Solo son gravables para el empleado las primas por cobertura que EXCEDE los $50,000."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Ana tiene lupus severo y pierde su trabajo. Tiene 31 días para ejercer el privilegio de conversión de su seguro de vida de grupo. ¿Por qué es esta opción especialmente valiosa para Ana?",
      o: [
        "Porque puede obtener cobertura individual más barata que si solicitara directamente por lupus",
        "Porque puede convertir a una póliza permanente (Whole Life) SIN examen médico ni evidencia de asegurabilidad, independientemente de su lupus severo",
        "Porque COBRA le permite extender el seguro de vida de grupo por 18 meses adicionales",
        "Porque la conversión siempre garantiza exactamente el mismo beneficio de muerte que tenía en el grupo"
      ],
      a: 1,
      trampa: "El valor real del privilegio de conversión para una persona con condición médica grave es precisamente la AUSENCIA de examen médico y evidencia de asegurabilidad.",
      correcto: "El Privilegio de Conversión es invaluable para Ana porque puede obtener una póliza permanente SIN evidencia de asegurabilidad. Con lupus severo, probablemente sería rechazada o pagaría primas prohibitivamente altas si solicitara individualmente.",
      incorrectos: [
        "A) La cobertura convertida generalmente cuesta MÁS que el grupo — no más barato con lupus.",
        "C) COBRA aplica a seguro de SALUD de grupo — NO al seguro de VIDA de grupo.",
        "D) El beneficio en la conversión puede ser diferente — generalmente NO es exactamente el mismo."
      ]
    }
  ]
},

{
  id: "vida_007",
  area: "vida",
  concepto: "Seguros Especiales — Key Person, Buy-Sell, Viatical, Life Settlement",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "QUIEN_PAGA",
      q: "En un seguro de Persona Clave (Key Person Insurance), ¿quién paga la prima y quién es el beneficiario?",
      o: [
        "El empleado clave paga la prima y su familia es la beneficiaria designada",
        "La empresa paga la prima y el empleado clave es el beneficiario personal",
        "La empresa paga la prima Y la empresa misma es la única beneficiaria",
        "El empleado y la empresa comparten el pago de primas y ambos son beneficiarios"
      ],
      a: 2,
      trampa: "Es contraintuitivo — la empresa paga Y también recibe el beneficio. El empleado no recibe nada directamente de esta póliza.",
      correcto: "Key Person Insurance: la EMPRESA paga el 100% de la prima y la EMPRESA es la única beneficiaria. El propósito es proteger a la empresa de la pérdida económica que causaría la muerte o discapacidad del empleado clave.",
      incorrectos: [
        "A) La familia del empleado NO es beneficiaria en una póliza corporativa de persona clave.",
        "B) El empleado clave no recibe ningún beneficio personal directo de esta póliza corporativa.",
        "D) No existe división de primas ni beneficios — la empresa asume ambos roles completamente."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En un acuerdo Buy-Sell de Cross Purchase entre 4 socios, ¿cuántas pólizas de seguro de vida se necesitan para cubrir todos los posibles escenarios?",
      o: [
        "4 pólizas — una por cada socio",
        "8 pólizas — dos por cada socio",
        "12 pólizas — usando la fórmula N × (N-1) donde N = número de socios",
        "16 pólizas — N al cuadrado para cobertura completa"
      ],
      a: 2,
      trampa: "La fórmula para Cross Purchase es N × (N-1). Con 4 socios: 4 × 3 = 12 pólizas.",
      correcto: "Cross Purchase: cada socio compra una póliza sobre CADA UNO DE LOS DEMÁS socios. Con 4 socios: cada uno compra 3 pólizas × 4 socios = 12 pólizas totales. Fórmula: N × (N-1). Entity Purchase solo requeriría 4 pólizas.",
      incorrectos: [
        "A) 4 pólizas correspondería al Entity Purchase / Stock Redemption — una por cada socio.",
        "B) 8 pólizas no corresponde a ninguna fórmula estándar de Buy-Sell Agreement.",
        "D) N al cuadrado (16) no es la fórmula correcta — es N × (N-1) = 12."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la diferencia PRINCIPAL entre un Viatical Settlement y un Life Settlement?",
      o: [
        "El Viatical es para personas saludables mayores de 65 años; el Life Settlement es para enfermos terminales",
        "El Viatical es para personas con enfermedad TERMINAL; el Life Settlement es para personas MAYORES SALUDABLES que ya no necesitan la póliza",
        "Ambos son términos completamente intercambiables — significan exactamente lo mismo",
        "En el Viatical la aseguradora compra la póliza; en el Life Settlement un tercero inversor compra la póliza"
      ],
      a: 1,
      trampa: "Los términos se confunden fácilmente por sonar similares. La enfermedad terminal ES la clave definitoria del Viatical.",
      correcto: "VIATICAL = persona con enfermedad TERMINAL (expectativa de vida generalmente ≤ 2 años) vende su póliza a un tercero por menos del valor nominal. LIFE SETTLEMENT = persona MAYOR (generalmente 65+) y SALUDABLE vende porque ya no necesita la póliza.",
      incorrectos: [
        "A) Esta descripción está completamente INVERTIDA — el Viatical es el terminal, no el saludable.",
        "C) No son intercambiables — tienen consecuencias fiscales, regulatorias y de elegibilidad muy diferentes.",
        "D) En ambos casos el comprador puede ser un tercero inversor — no es la diferencia definitoria."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Un asegurado con enfermedad terminal vende su póliza de $500,000 por $320,000 en un Viatical Settlement. ¿Cuál es el tratamiento fiscal de los $320,000 recibidos según HIPAA?",
      o: [
        "Los $320,000 son ingreso ordinario totalmente gravable en el año de recepción",
        "Los $320,000 son capital gain gravable a la tasa preferencial del 15%",
        "Los $320,000 son generalmente LIBRES DE IMPUESTOS si el asegurado tiene expectativa de vida de 24 meses o menos certificada por médico",
        "Los $320,000 son gravables pero con una exclusión del 50% permitida por el IRC"
      ],
      a: 2,
      trampa: "Los beneficios del Viatical Settlement tienen tratamiento fiscal especial bajo HIPAA cuando el asegurado es terminal — son libres de impuestos bajo condiciones específicas.",
      correcto: "Bajo HIPAA, los pagos de Viatical Settlement son LIBRES DE IMPUESTOS si el asegurado tiene una expectativa de vida de 24 MESES O MENOS certificada por un médico licenciado. Para Life Settlements de personas no terminales, puede haber implicaciones fiscales.",
      incorrectos: [
        "A) No son ingreso ordinario gravable cuando cumplen los requisitos de HIPAA para Viatical.",
        "B) No se aplica la tasa de capital gain — el tratamiento es libre de impuestos si cumple HIPAA.",
        "D) No existe exclusión del 50% — es libre de impuestos completo o gravable según las circunstancias."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Una empresa con 5 socios evalúa un Buy-Sell Agreement. El asesor recomienda Entity Purchase sobre Cross Purchase. ¿Cuál es la razón PRINCIPAL de esta recomendación?",
      o: [
        "El Entity Purchase siempre tiene mejores consecuencias fiscales en absolutamente todos los escenarios posibles",
        "El Cross Purchase requeriría 20 pólizas (5×4) mientras el Entity Purchase solo requiere 5 — administración mucho más simple",
        "El Cross Purchase está legalmente prohibido en Florida para empresas con más de 4 socios",
        "El Entity Purchase tiene primas significativamente más bajas que hacen el Cross Purchase impracticable"
      ],
      a: 1,
      trampa: "La simplicidad administrativa es la razón práctica más importante para preferir Entity Purchase cuando hay muchos socios.",
      correcto: "Con 5 socios: Cross Purchase requeriría 5×4=20 pólizas (cada socio compra sobre los otros 4). Entity Purchase solo necesita 5 pólizas (una por socio, la empresa es dueña). A mayor número de socios, la diferencia se amplifica enormemente.",
      incorrectos: [
        "A) El Entity Purchase NO siempre tiene mejores consecuencias fiscales — depende del tipo de entidad y circunstancias específicas.",
        "C) No existe límite legal de socios que prohíba el Cross Purchase en Florida.",
        "D) Las primas dependen del asegurado específico y el monto — no hay regla universal de precio."
      ]
    }
  ]
}

]; // fin PK_LIFE

if (typeof module !== 'undefined') module.exports = { PK_LIFE };

// Asignación explícita a window para garantizar disponibilidad
// global sin importar el motor JS o el timing de ejecución del navegador
if (typeof window !== 'undefined') window.PK_LIFE = PK_LIFE;
