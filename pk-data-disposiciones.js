// ============================================================
// PEARSON KILLER — pk-data-disposiciones.js
// Módulo: Disposiciones, Opciones y Enmiendas de Seguro de Vida
// (Solo conceptos NO cubiertos en módulos anteriores:
// opciones de liquidación, préstamo automático de prima,
// cláusula de suicidio, error de edad/sexo, muerte accidental,
// asegurabilidad garantizada)
//
// 7 conceptos × 5 variantes = 35 preguntas
// [VERIFICADO] = mecánica de producto estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar
// ============================================================

const PK_DISPOSICIONES = [

{
  id: "disp_001",
  area: "vida",
  concepto: "Opciones de Liquidación (Settlement Options)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué son las 'opciones de liquidación' (settlement options) en una póliza de seguro de vida?",
      o: [
        "Las formas en que el asegurado puede pagar sus primas",
        "Las diferentes formas en que el beneficiario puede recibir el pago del beneficio por fallecimiento",
        "Las opciones para cancelar la póliza antes de tiempo",
        "Los métodos para aumentar el beneficio de muerte"
      ],
      a: 1,
      trampa: "Se confunde 'liquidación' (cómo se PAGA el beneficio al beneficiario) con el pago de primas o la cancelación de la póliza.",
      correcto: "Las OPCIONES DE LIQUIDACIÓN son las diferentes formas en que el beneficiario (o el asegurado en vida, respecto al valor de rescate) puede recibir el pago — en lugar de una suma global, puede elegir recibirlo distribuido en el tiempo de varias maneras. [VERIFICADO — concepto estándar]",
      incorrectos: [
        "A) Las formas de pagar primas son un concepto distinto (modos de pago), no las opciones de liquidación.",
        "C) Cancelar la póliza se relaciona con rescate/no caducidad — no con las opciones de liquidación del beneficio.",
        "D) Aumentar el beneficio se relaciona con riders o adiciones — no con opciones de liquidación."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "La opción de liquidación donde el beneficiario recibe TODO el beneficio de una sola vez se llama:",
      o: [
        "Ingreso de por vida (Life Income)",
        "Suma global (Lump Sum)",
        "Período fijo (Fixed Period)",
        "Monto fijo (Fixed Amount)"
      ],
      a: 1,
      trampa: "La suma global es la opción por defecto y más simple — se confunde con las opciones que distribuyen el pago en el tiempo.",
      correcto: "SUMA GLOBAL (Lump Sum) = el beneficiario recibe el beneficio completo en un solo pago. Es la opción por defecto si no se elige otra, y generalmente el beneficio de muerte por suma global es libre de impuesto sobre la renta. [VERIFICADO — opción estándar]",
      incorrectos: [
        "A) Ingreso de por vida distribuye pagos periódicos durante la vida del beneficiario — no un pago único.",
        "C) Período fijo distribuye el pago durante un número determinado de años — no un pago único.",
        "D) Monto fijo paga cantidades fijas hasta agotar el fondo — no un pago único."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre la opción 'Período Fijo' (Fixed Period) y 'Monto Fijo' (Fixed Amount)?",
      o: [
        "Son idénticas",
        "En PERÍODO FIJO se fija el número de años y se calcula cuánto pagar en cada uno; en MONTO FIJO se fija la cantidad de cada pago y se calcula cuántos años durará",
        "Período fijo paga de por vida; monto fijo paga una sola vez",
        "Ambas pagan de por vida garantizado"
      ],
      a: 1,
      trampa: "Ambas distribuyen el pago en el tiempo, pero difieren en QUÉ se fija primero: el tiempo (período fijo) o el monto de cada cheque (monto fijo).",
      correcto: "PERÍODO FIJO = tú fijas los AÑOS (ej. 10 años), y la aseguradora calcula cuánto pagar cada período para agotar el fondo en ese tiempo. MONTO FIJO = tú fijas la CANTIDAD de cada pago (ej. $1,000/mes), y el fondo dura hasta agotarse. Uno fija tiempo, el otro fija monto. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son idénticas — se diferencian en qué variable se fija.",
        "C) Ninguna de las dos es de por vida — ambas se agotan cuando el fondo se acaba.",
        "D) No son de por vida garantizado — esa es la opción de Ingreso de por Vida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "La opción de liquidación que garantiza pagos al beneficiario durante toda su vida, sin importar cuánto viva, se llama:",
      o: [
        "Período fijo",
        "Interés únicamente (Interest Only)",
        "Ingreso de por vida (Life Income)",
        "Suma global"
      ],
      a: 2,
      trampa: "El ingreso de por vida es la única opción que garantiza pagos mientras el beneficiario viva, transfiriendo el riesgo de longevidad a la aseguradora — se confunde con período fijo (que tiene un límite de años).",
      correcto: "INGRESO DE POR VIDA (Life Income) = garantiza pagos al beneficiario durante TODA su vida, sin importar cuánto viva. La aseguradora asume el riesgo de longevidad. Puede tener variantes (con período garantizado, conjunta y sobreviviente, etc.). [VERIFICADO — opción estándar]",
      incorrectos: [
        "A) Período fijo termina cuando se agotan los años predeterminados — no dura toda la vida.",
        "B) Interés únicamente solo paga los intereses generados, manteniendo el capital intacto — no es un ingreso vitalicio del capital.",
        "D) La suma global es un pago único — no pagos de por vida."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "En la opción 'Interés Únicamente' (Interest Only), ¿qué recibe el beneficiario?",
      o: [
        "Todo el capital de una sola vez",
        "Solo los intereses que genera el beneficio, mientras la aseguradora retiene el capital principal",
        "Pagos de por vida garantizados",
        "Nada hasta que fallezca"
      ],
      a: 1,
      trampa: "En 'interés únicamente' el capital permanece con la aseguradora y solo se pagan los intereses — se confunde con opciones que distribuyen el capital mismo.",
      correcto: "INTERÉS ÚNICAMENTE = la aseguradora retiene el capital (el beneficio) y le paga al beneficiario solo los INTERESES que ese capital genera. El principal se conserva intacto y se distribuye después según lo acordado. [VERIFICADO — opción estándar]",
      incorrectos: [
        "A) No recibe todo el capital de una vez — eso sería suma global.",
        "C) No son pagos de por vida del capital — solo se pagan los intereses generados.",
        "D) SÍ recibe pagos (los intereses) — no espera hasta fallecer."
      ]
    }
  ]
},

{
  id: "disp_002",
  area: "vida",
  concepto: "Préstamo Automático de Prima (Automatic Premium Loan)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué hace la disposición de Préstamo Automático de Prima (Automatic Premium Loan)?",
      o: [
        "Cancela la póliza si no se paga la prima",
        "Usa automáticamente el valor en efectivo de la póliza para pagar una prima vencida y evitar la caducidad",
        "Aumenta automáticamente el beneficio de muerte",
        "Reduce automáticamente la prima cada año"
      ],
      a: 1,
      trampa: "El APL PROTEGE la póliza de caducar tomando un préstamo del valor en efectivo — se confunde con una simple cancelación o con otras disposiciones.",
      correcto: "PRÉSTAMO AUTOMÁTICO DE PRIMA (APL) = si el asegurado no paga una prima al final del período de gracia, la aseguradora automáticamente toma un préstamo contra el VALOR EN EFECTIVO de la póliza para pagar esa prima, evitando que la póliza caduque. Requiere que haya suficiente valor en efectivo. [VERIFICADO — disposición estándar]",
      incorrectos: [
        "A) Hace lo contrario — EVITA la cancelación usando el valor en efectivo.",
        "C) No aumenta el beneficio de muerte — mantiene la póliza vigente (y de hecho el préstamo reduce el beneficio neto si no se paga).",
        "D) No reduce la prima — la paga usando el valor en efectivo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué requisito es esencial para que funcione el Préstamo Automático de Prima?",
      o: [
        "Que la póliza sea de término",
        "Que la póliza tenga suficiente VALOR EN EFECTIVO acumulado para cubrir la prima",
        "Que el asegurado tenga más de 65 años",
        "Que hayan pasado al menos 20 años"
      ],
      a: 1,
      trampa: "El APL depende de que exista valor en efectivo — por eso NO funciona en pólizas de término (que no acumulan valor en efectivo).",
      correcto: "El APL requiere que la póliza tenga suficiente VALOR EN EFECTIVO acumulado para cubrir la prima vencida. Por esta razón, el APL solo funciona en pólizas PERMANENTES (que acumulan valor en efectivo), no en seguros de término. [VERIFICADO — requisito fundamental]",
      incorrectos: [
        "A) Las pólizas de TÉRMINO generalmente NO tienen valor en efectivo, por lo que el APL no aplica a ellas.",
        "C) No hay requisito de edad específico para el APL.",
        "D) No se requiere un número específico de años, solo suficiente valor en efectivo acumulado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Luis tiene una póliza de vida entera con valor en efectivo. Olvida pagar su prima y termina el período de gracia. Su póliza tiene APL activado. ¿Qué ocurre?",
      o: [
        "La póliza caduca inmediatamente",
        "La aseguradora toma un préstamo del valor en efectivo para pagar la prima, y la póliza sigue vigente",
        "El beneficio de muerte se duplica",
        "Luis pierde todo su valor en efectivo"
      ],
      a: 1,
      trampa: "Con APL activado y valor en efectivo suficiente, la póliza NO caduca — se paga sola con un préstamo interno.",
      correcto: "Con APL activado, la aseguradora automáticamente toma un préstamo contra el valor en efectivo de Luis para pagar la prima vencida, manteniendo la póliza VIGENTE. El préstamo (con interés) reducirá el beneficio de muerte o valor de rescate si no se reembolsa. [VERIFICADO — aplicación del APL]",
      incorrectos: [
        "A) La póliza NO caduca — el APL existe precisamente para evitarlo.",
        "C) El beneficio de muerte no se duplica.",
        "D) No pierde todo su valor en efectivo — solo se usa la parte necesaria para la prima como préstamo."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es una consecuencia de que el Préstamo Automático de Prima se active repetidamente sin reembolsarse?",
      o: [
        "El beneficio de muerte aumenta con cada préstamo",
        "El valor en efectivo y el beneficio de muerte neto disminuyen, y eventualmente la póliza puede caducar si se agota el valor en efectivo",
        "La prima se elimina permanentemente",
        "No hay ninguna consecuencia"
      ],
      a: 1,
      trampa: "Aunque el APL protege a corto plazo, si se usa repetidamente sin reembolsar, agota el valor en efectivo y puede llevar a la caducidad — no es gratis.",
      correcto: "Si el APL se activa repetidamente sin reembolso, los préstamos acumulados (más intereses) reducen el valor en efectivo y el beneficio de muerte neto. Si el valor en efectivo se agota, la póliza puede eventualmente caducar. Es una protección temporal, no permanente. [VERIFICADO — consecuencia lógica]",
      incorrectos: [
        "A) El beneficio de muerte NO aumenta — el préstamo pendiente lo reduce.",
        "C) La prima no se elimina — se sigue debiendo y se paga con préstamos del valor en efectivo.",
        "D) SÍ hay consecuencias — el agotamiento gradual del valor en efectivo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿En qué se diferencia el Préstamo Automático de Prima de la opción de no caducidad 'Término Extendido'?",
      o: [
        "Son lo mismo",
        "El APL mantiene la póliza ORIGINAL vigente pagando la prima con un préstamo; el Término Extendido cancela la póliza original y compra seguro de término con el valor en efectivo",
        "El Término Extendido paga la prima; el APL compra seguro de término",
        "Ambos requieren pagar primas adicionales"
      ],
      a: 1,
      trampa: "El APL preserva la póliza original intacta (solo la financia temporalmente); el Término Extendido es una opción de no caducidad que reemplaza la póliza original por seguro de término.",
      correcto: "APL = mantiene la póliza ORIGINAL completamente vigente, simplemente pagando la prima con un préstamo interno del valor en efectivo. TÉRMINO EXTENDIDO = es una opción de no caducidad que se activa cuando dejas de pagar del todo; convierte el valor en efectivo en seguro de TÉRMINO por el mismo monto. Distintos propósitos. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son lo mismo — uno preserva la póliza original, el otro la reemplaza.",
        "C) Invierte los conceptos.",
        "D) Ninguno requiere primas adicionales — ambos usan el valor en efectivo existente."
      ]
    }
  ]
},

{
  id: "disp_003",
  area: "vida",
  concepto: "Cláusula de Suicidio (Suicide Clause)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es el período típico de la cláusula de suicidio en una póliza de vida?",
      o: ["1 año", "2 años", "5 años", "10 años"],
      a: 1,
      trampa: "El período de suicidio (típicamente 2 años) coincide con el de incontestabilidad — ambos suelen ser 2 años, lo cual ayuda a recordarlo.",
      correcto: "La CLÁUSULA DE SUICIDIO típicamente cubre un período de 2 AÑOS desde la emisión. Si el asegurado se suicida dentro de ese período, la aseguradora generalmente devuelve las primas pagadas en lugar del beneficio completo. Después de 2 años, el suicidio se cubre como cualquier otra causa. [VERIFICADO — período estándar]",
      incorrectos: [
        "A) 1 año es menor al período estándar de 2 años.",
        "C) 5 años excede el período estándar.",
        "D) 10 años excede el período estándar."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado se suicida 18 meses después de emitida la póliza. ¿Qué paga generalmente la aseguradora?",
      o: [
        "El beneficio de muerte completo",
        "Generalmente devuelve las primas pagadas (no el beneficio completo), porque ocurrió dentro del período de suicidio de 2 años",
        "El doble del beneficio",
        "Nada, ni siquiera las primas"
      ],
      a: 1,
      trampa: "A los 18 meses (dentro de los 2 años), la cláusula de suicidio aplica: se devuelven primas, no el beneficio completo.",
      correcto: "Como el suicidio ocurrió a los 18 meses (DENTRO del período de 2 años), la aseguradora generalmente devuelve las PRIMAS PAGADAS en lugar del beneficio de muerte completo. Si hubiera ocurrido después de 2 años, se pagaría el beneficio completo. [VERIFICADO — aplicación de la cláusula]",
      incorrectos: [
        "A) No paga el beneficio completo porque ocurrió dentro del período de exclusión de 2 años.",
        "C) No paga el doble.",
        "D) Generalmente SÍ devuelve las primas pagadas — no se queda con todo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado se suicida 3 años después de emitida la póliza. ¿Qué paga la aseguradora?",
      o: [
        "Solo devuelve las primas",
        "El beneficio de muerte completo, porque el período de suicidio de 2 años ya pasó",
        "La mitad del beneficio",
        "Nada"
      ],
      a: 1,
      trampa: "A los 3 años (fuera de los 2 años), la cláusula de suicidio ya NO aplica — se paga el beneficio completo como cualquier causa.",
      correcto: "Como ya pasaron los 2 años del período de suicidio, la aseguradora paga el BENEFICIO DE MUERTE COMPLETO — después de ese período, el suicidio se cubre igual que cualquier otra causa de muerte. [VERIFICADO — aplicación de la cláusula]",
      incorrectos: [
        "A) No solo devuelve primas — paga el beneficio completo porque ya pasó el período de exclusión.",
        "C) No paga la mitad — paga el beneficio completo.",
        "D) SÍ paga — el beneficio completo."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Qué tienen en común la cláusula de suicidio y la cláusula de incontestabilidad?",
      o: [
        "Ambas duran típicamente 2 años desde la emisión",
        "Ambas cubren solo accidentes",
        "Ambas aumentan el beneficio de muerte",
        "Ninguna tiene límite de tiempo"
      ],
      a: 0,
      trampa: "Tanto la cláusula de suicidio como la de incontestabilidad típicamente usan un período de 2 años — recordar esto ayuda a fijar ambos.",
      correcto: "Tanto la cláusula de SUICIDIO como la de INCONTESTABILIDAD típicamente duran 2 AÑOS desde la emisión de la póliza. Después de ese período, la aseguradora ya no puede negar el beneficio por suicidio ni impugnar la póliza por declaraciones erróneas (excepto fraude). [VERIFICADO — ambos períodos estándar de 2 años]",
      incorrectos: [
        "B) No cubren solo accidentes.",
        "C) No aumentan el beneficio de muerte.",
        "D) Ambas SÍ tienen un límite de tiempo (2 años)."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es el propósito de la cláusula de suicidio desde la perspectiva de la aseguradora?",
      o: [
        "Castigar a la familia del asegurado",
        "Proteger a la aseguradora contra personas que compren una póliza con la intención inmediata de suicidarse para dejar el beneficio",
        "Aumentar sus ganancias sin razón",
        "Eliminar toda cobertura de suicidio para siempre"
      ],
      a: 1,
      trampa: "La cláusula tiene un propósito de gestión de riesgo (anti-selección adversa), no punitivo — y solo aplica los primeros 2 años, no para siempre.",
      correcto: "El propósito es proteger a la aseguradora contra la ANTI-SELECCIÓN: personas que compren una póliza con la intención inmediata de suicidarse para dejar el beneficio a su familia. Por eso solo aplica los primeros 2 años; después, el suicidio se cubre normalmente. [VERIFICADO — propósito de gestión de riesgo]",
      incorrectos: [
        "A) No busca castigar a la familia — es gestión de riesgo.",
        "C) No es para aumentar ganancias sin razón — protege contra un riesgo específico.",
        "D) No elimina la cobertura para siempre — solo los primeros 2 años."
      ]
    }
  ]
},

{
  id: "disp_004",
  area: "vida",
  concepto: "Disposición de Error en la Declaración de Edad o Sexo",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Si se descubre que el asegurado declaró una edad INCORRECTA en la solicitud, ¿qué hace la disposición de 'Error de Edad' (Misstatement of Age)?",
      o: [
        "Cancela la póliza automáticamente",
        "Ajusta el beneficio de muerte a lo que la prima pagada habría comprado a la edad CORRECTA",
        "Duplica la prima como castigo",
        "No cambia nada"
      ],
      a: 1,
      trampa: "El error de edad NO anula la póliza — simplemente AJUSTA el beneficio (o prima) para reflejar la edad real, sin penalización dramática.",
      correcto: "La disposición de ERROR DE EDAD ajusta el beneficio de muerte a la cantidad que la prima pagada habría comprado a la edad CORRECTA del asegurado. No cancela la póliza; solo hace el ajuste matemático justo. [VERIFICADO — disposición estándar]",
      incorrectos: [
        "A) NO cancela la póliza — solo ajusta el beneficio.",
        "C) No duplica la prima como castigo — hace un ajuste proporcional justo.",
        "D) SÍ cambia algo — ajusta el beneficio o la prima según la edad correcta."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado declaró tener 40 años pero en realidad tenía 45 (su prima real debería haber sido mayor). Fallece. ¿Qué ocurre con el beneficio?",
      o: [
        "Se paga el beneficio completo original sin ajuste",
        "El beneficio se REDUCE a lo que la prima pagada habría comprado a los 45 años reales",
        "No se paga nada",
        "El beneficio se aumenta"
      ],
      a: 1,
      trampa: "Como la edad real (45) es MAYOR que la declarada (40), la prima pagada compra MENOS beneficio a la edad real — el beneficio se reduce proporcionalmente.",
      correcto: "Como el asegurado era mayor (45) de lo declarado (40), la prima que pagó habría comprado un beneficio MENOR a su edad real. El beneficio se REDUCE a esa cantidad ajustada. La aseguradora no se queda con nada indebidamente, pero tampoco paga de más. [VERIFICADO — aplicación del ajuste]",
      incorrectos: [
        "A) NO se paga el beneficio completo original — se ajusta a la baja por la edad mayor real.",
        "C) SÍ se paga — un beneficio ajustado, no cero.",
        "D) El beneficio se reduce, no se aumenta (porque era mayor de lo declarado)."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado declaró 50 años pero en realidad tenía 45 (pagó de más). ¿Qué ocurre con el beneficio al fallecer?",
      o: [
        "Se reduce el beneficio",
        "El beneficio se AJUSTA AL ALZA — la prima pagada habría comprado MÁS beneficio a la edad real menor",
        "No se paga nada",
        "Se devuelve solo la prima"
      ],
      a: 1,
      trampa: "Cuando la edad real es MENOR que la declarada, el asegurado pagó de más, así que su prima compra MÁS beneficio — el ajuste es al alza.",
      correcto: "Como el asegurado era más joven (45) de lo declarado (50), pagó primas MÁS ALTAS de lo necesario. Su prima habría comprado MÁS beneficio a su edad real, así que el beneficio se AJUSTA AL ALZA. El ajuste funciona en ambas direcciones, siempre a favor de la justicia matemática. [VERIFICADO — aplicación del ajuste]",
      incorrectos: [
        "A) No se reduce — se aumenta, porque pagó de más al declarar una edad mayor.",
        "C) SÍ se paga — un beneficio ajustado al alza.",
        "D) No se devuelve solo la prima — se ajusta el beneficio."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿La disposición de error de edad/sexo hace que la póliza sea impugnable (contestable) después del período de incontestabilidad?",
      o: [
        "Sí, permite cancelar la póliza en cualquier momento",
        "No, el error de edad/sexo simplemente ajusta el beneficio y NO es motivo para anular la póliza, incluso después del período de incontestabilidad",
        "Sí, siempre anula la póliza",
        "Solo si el error es de sexo, no de edad"
      ],
      a: 1,
      trampa: "El error de edad es una excepción especial: se corrige con un ajuste matemático incluso después de la incontestabilidad, pero NUNCA anula la póliza.",
      correcto: "El error de edad o sexo NO hace la póliza impugnable ni motivo de anulación — simplemente se AJUSTA el beneficio matemáticamente, incluso si se descubre después del período de incontestabilidad. Es un ajuste, no una anulación. [VERIFICADO — característica de la disposición]",
      incorrectos: [
        "A) NO permite cancelar la póliza — solo ajusta el beneficio.",
        "C) NUNCA anula la póliza por sí sola — solo ajusta.",
        "D) Aplica igual para error de edad y de sexo — ambos se resuelven con ajuste."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Por qué el error de edad se trata diferente de una tergiversación material fraudulenta?",
      o: [
        "No hay diferencia",
        "El error de edad se considera un error corregible con un ajuste matemático justo (no fraude); una tergiversación material fraudulenta puede anular la póliza",
        "El error de edad siempre anula la póliza; el fraude no",
        "Ambos anulan la póliza igual"
      ],
      a: 1,
      trampa: "El error de edad se trata con benevolencia (ajuste) porque es fácilmente verificable y corregible; el fraude material tiene consecuencias más graves (anulación).",
      correcto: "El error de edad se considera un error CORREGIBLE con un simple ajuste matemático (la edad es objetivamente verificable y el remedio es justo). En cambio, una TERGIVERSACIÓN MATERIAL FRAUDULENTA (ocultar algo relevante con intención de engañar) puede permitir a la aseguradora ANULAR la póliza. Distinta gravedad, distinto remedio. [VERIFICADO — distinción de tratamiento]",
      incorrectos: [
        "A) SÍ hay diferencia — en gravedad y remedio.",
        "C) El error de edad NO anula la póliza — solo la ajusta.",
        "D) No anulan igual — el error de edad solo ajusta; el fraude puede anular."
      ]
    }
  ]
},

{
  id: "disp_005",
  area: "vida",
  concepto: "Beneficio por Muerte Accidental y Doble Indemnización",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué hace un rider de Muerte Accidental (Accidental Death Benefit / ADB)?",
      o: [
        "Reduce el beneficio si la muerte es accidental",
        "Paga un beneficio ADICIONAL (frecuentemente el doble) si el asegurado muere por causa accidental",
        "Cubre solo enfermedades",
        "Elimina el beneficio de muerte natural"
      ],
      a: 1,
      trampa: "El ADB AÑADE un beneficio extra por muerte accidental — se confunde con algo que reduce o limita la cobertura.",
      correcto: "BENEFICIO POR MUERTE ACCIDENTAL (ADB) = rider que paga un beneficio ADICIONAL si el asegurado muere por causa accidental. Cuando ese beneficio adicional iguala el beneficio base, se llama 'doble indemnización' (Double Indemnity). [VERIFICADO — rider estándar]",
      incorrectos: [
        "A) No reduce el beneficio — lo aumenta en caso de accidente.",
        "C) Cubre muerte accidental, no solo enfermedades (de hecho, típicamente NO cubre muerte por enfermedad).",
        "D) No elimina el beneficio de muerte natural — la póliza base sigue pagando por muerte natural; el rider solo AÑADE por accidente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "El término 'Doble Indemnización' (Double Indemnity) significa que:",
      o: [
        "Se pagan las primas dos veces",
        "El beneficio por muerte accidental es igual al beneficio base, de modo que el beneficiario recibe el DOBLE si la muerte es accidental",
        "La póliza cuesta el doble",
        "Se cubren dos asegurados"
      ],
      a: 1,
      trampa: "'Doble indemnización' es un caso específico del ADB donde el beneficio adicional iguala el base, resultando en el doble total.",
      correcto: "DOBLE INDEMNIZACIÓN = cuando el beneficio por muerte accidental IGUALA el beneficio base de la póliza. Si la muerte es accidental, el beneficiario recibe el DOBLE (el beneficio base + el beneficio accidental igual). [VERIFICADO — concepto estándar]",
      incorrectos: [
        "A) No se refiere a pagar primas dos veces.",
        "C) No significa que la póliza cueste el doble.",
        "D) No cubre dos asegurados — se refiere al doble beneficio por accidente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un asegurado con póliza de $100,000 y rider de doble indemnización muere en un accidente de auto. ¿Cuánto recibe el beneficiario?",
      o: ["$100,000", "$200,000", "$50,000", "$150,000"],
      a: 1,
      trampa: "Con doble indemnización y muerte accidental, el beneficio base ($100k) se duplica a $200k.",
      correcto: "Con doble indemnización y muerte ACCIDENTAL, el beneficiario recibe $200,000 (el beneficio base de $100,000 + el beneficio accidental igual de $100,000). Si la muerte hubiera sido por enfermedad, recibiría solo los $100,000 base. [VERIFICADO — aplicación del rider]",
      incorrectos: [
        "A) $100,000 sería el pago por muerte NATURAL, no accidental con doble indemnización.",
        "C) $50,000 no corresponde a este cálculo.",
        "D) $150,000 no corresponde — la doble indemnización paga el doble completo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de estas muertes generalmente NO estaría cubierta por un rider de muerte accidental?",
      o: [
        "Accidente automovilístico",
        "Caída accidental",
        "Muerte por enfermedad cardíaca (causa natural)",
        "Ahogamiento accidental"
      ],
      a: 2,
      trampa: "El rider cubre solo muertes ACCIDENTALES — la muerte por enfermedad (causa natural) queda expresamente fuera.",
      correcto: "La muerte por ENFERMEDAD CARDÍACA (causa natural) generalmente NO está cubierta por el rider de muerte accidental — este rider paga el beneficio adicional SOLO por muertes accidentales, no por causas naturales o enfermedades. [VERIFICADO — limitación del rider]",
      incorrectos: [
        "A) Un accidente automovilístico SÍ es una muerte accidental cubierta.",
        "B) Una caída accidental SÍ es una muerte accidental cubierta.",
        "D) Un ahogamiento accidental SÍ es una muerte accidental cubierta."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Muchos riders de muerte accidental incluyen limitaciones. ¿Cuál es una limitación TÍPICA?",
      o: [
        "Cubre muertes a cualquier edad sin límite",
        "La muerte generalmente debe ocurrir dentro de cierto período tras el accidente (ej. 90 días) y antes de cierta edad, excluyendo ciertas actividades peligrosas",
        "No tiene ninguna limitación",
        "Solo cubre muertes por enfermedad"
      ],
      a: 1,
      trampa: "Los riders de muerte accidental tienen límites típicos: plazo entre accidente y muerte, edad tope, y exclusiones (guerra, aviación privada, actividades peligrosas).",
      correcto: "Limitaciones típicas del rider de muerte accidental: la muerte debe ocurrir dentro de cierto plazo tras el accidente (frecuentemente 90 días), antes de cierta edad tope, y se excluyen ciertas causas (guerra, suicidio, aviación privada, actividades peligrosas). [REQUIERE VERIFICACIÓN — confirmar los plazos y exclusiones exactas contra el material del curso]",
      incorrectos: [
        "A) SÍ hay límites de edad típicamente.",
        "C) SÍ tiene limitaciones (plazo, edad, exclusiones).",
        "D) Cubre muerte ACCIDENTAL, no por enfermedad."
      ]
    }
  ]
},

{
  id: "disp_006",
  area: "vida",
  concepto: "Rider de Asegurabilidad Garantizada (Guaranteed Insurability)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué permite el rider de Asegurabilidad Garantizada (Guaranteed Insurability Rider)?",
      o: [
        "Cancelar la póliza sin penalización",
        "Comprar cobertura ADICIONAL en fechas o eventos específicos SIN necesidad de demostrar asegurabilidad (sin examen médico)",
        "Reducir la prima cada año",
        "Duplicar automáticamente el beneficio"
      ],
      a: 1,
      trampa: "Este rider protege la capacidad FUTURA de comprar más seguro sin importar cambios de salud — se confunde con aumentos automáticos o reducciones de prima.",
      correcto: "ASEGURABILIDAD GARANTIZADA = rider que permite al asegurado COMPRAR cobertura adicional en fechas específicas (o eventos como matrimonio, nacimiento de un hijo) SIN tener que demostrar asegurabilidad ni pasar examen médico. Protege contra el riesgo de volverse no asegurable en el futuro. [VERIFICADO — rider estándar]",
      incorrectos: [
        "A) No se trata de cancelar la póliza.",
        "C) No reduce la prima — permite comprar más cobertura.",
        "D) No duplica automáticamente el beneficio — da la OPCIÓN de comprar más."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Ana compró una póliza con rider de asegurabilidad garantizada a los 25 años. A los 30 desarrolla diabetes. ¿Puede comprar más cobertura?",
      o: [
        "No, porque ahora tiene diabetes",
        "Sí, en las fechas/eventos especificados puede comprar cobertura adicional SIN examen médico, sin importar su diabetes",
        "Solo si paga el triple",
        "Solo con un examen médico completo"
      ],
      a: 1,
      trampa: "El valor del rider se demuestra precisamente cuando la salud empeora — puede comprar más seguro sin importar la diabetes nueva.",
      correcto: "SÍ — ese es precisamente el valor del rider. En las fechas u opciones especificadas, Ana puede comprar cobertura adicional SIN examen médico ni prueba de asegurabilidad, sin importar que ahora tenga diabetes. El rider 'congela' su asegurabilidad al momento de comprarlo. [VERIFICADO — aplicación del rider]",
      incorrectos: [
        "A) SÍ puede comprar — el rider la protege precisamente contra este escenario.",
        "C) No paga el triple — paga la prima estándar correspondiente a su edad para la nueva cobertura.",
        "D) NO requiere examen médico — esa es la ventaja del rider."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuándo son típicamente las 'opciones' para ejercer el rider de asegurabilidad garantizada?",
      o: [
        "Solo el día del fallecimiento",
        "En edades específicas predeterminadas (ej. 25, 28, 31, 34, 37, 40) o en eventos de vida como matrimonio o nacimiento de un hijo",
        "Solo una vez en la vida",
        "Cada semana"
      ],
      a: 1,
      trampa: "Las opciones están predefinidas en edades regulares o eventos calificantes — se confunde con una sola oportunidad o disponibilidad ilimitada.",
      correcto: "Las opciones para ejercer el rider típicamente ocurren en EDADES específicas predeterminadas (frecuentemente cada 3 años: 25, 28, 31, 34, 37, 40) y/o en EVENTOS DE VIDA como matrimonio o el nacimiento de un hijo. [REQUIERE VERIFICACIÓN — confirmar las edades exactas contra el material del curso]",
      incorrectos: [
        "A) No es solo el día del fallecimiento — son opciones en vida.",
        "C) No es solo una vez — hay múltiples opciones a lo largo del tiempo.",
        "D) No es cada semana — son fechas o eventos específicos."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Para quién es MÁS valioso el rider de asegurabilidad garantizada?",
      o: [
        "Para una persona mayor que ya no necesita más seguro",
        "Para una persona joven y saludable que anticipa necesitar más cobertura en el futuro y quiere protegerse contra el riesgo de volverse no asegurable",
        "Para alguien que quiere cancelar su póliza",
        "Para alguien que nunca comprará más seguro"
      ],
      a: 1,
      trampa: "El rider tiene más valor para alguien JOVEN que probablemente necesitará más cobertura conforme crezca su familia/ingresos, y quiere fijar su asegurabilidad mientras está sano.",
      correcto: "Es más valioso para una persona JOVEN y SALUDABLE que anticipa necesitar más cobertura en el futuro (al casarse, tener hijos, aumentar ingresos) y quiere protegerse contra el riesgo de que un problema de salud futuro la haga no asegurable. Fija su asegurabilidad ahora. [VERIFICADO — perfil ideal del rider]",
      incorrectos: [
        "A) Una persona mayor que no necesita más seguro obtiene poco valor del rider.",
        "C) No se relaciona con cancelar la póliza.",
        "D) Alguien que nunca comprará más seguro no aprovecha el rider."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿En qué se diferencia el rider de asegurabilidad garantizada de simplemente comprar una póliza nueva más adelante?",
      o: [
        "No hay diferencia",
        "Con el rider NO necesita demostrar asegurabilidad (sin examen); comprar una póliza nueva SÍ requiere pasar por suscripción completa, que podría rechazarlo o cobrarle más si su salud empeoró",
        "Comprar nueva póliza nunca requiere examen; el rider sí",
        "Ambos requieren examen médico"
      ],
      a: 1,
      trampa: "La diferencia clave es la SUSCRIPCIÓN: el rider la evita; una póliza nueva la exige, con riesgo de rechazo o sobreprima si la salud empeoró.",
      correcto: "Con el RIDER, el asegurado ejerce la opción SIN demostrar asegurabilidad ni examen médico — garantizado. Comprar una PÓLIZA NUEVA requiere pasar por suscripción completa, y si su salud empeoró, podría ser rechazado o pagar primas mucho más altas (o subestándar). El rider elimina ese riesgo. [VERIFICADO — distinción fundamental]",
      incorrectos: [
        "A) SÍ hay diferencia importante — en el requisito de suscripción.",
        "C) Invierte los conceptos: la póliza nueva SÍ requiere suscripción; el rider NO.",
        "D) El rider NO requiere examen — esa es su ventaja."
      ]
    }
  ]
},

{
  id: "disp_007",
  area: "vida",
  concepto: "Cláusula de Reintegro/Restablecimiento en Vida y Provisión de No Confiscación",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué permite la disposición de RESTABLECIMIENTO (Reinstatement) en una póliza de vida?",
      o: [
        "Cancelar la póliza permanentemente",
        "Reactivar una póliza que caducó por falta de pago, cumpliendo ciertos requisitos (pagar primas atrasadas con interés y demostrar asegurabilidad)",
        "Aumentar el beneficio sin costo",
        "Reducir la prima a la mitad"
      ],
      a: 1,
      trampa: "El restablecimiento reactiva una póliza caducada bajo condiciones — se confunde con cancelación o con cambios de beneficio/prima.",
      correcto: "RESTABLECIMIENTO = permite reactivar una póliza que CADUCÓ por falta de pago, generalmente dentro de cierto plazo (ej. 3 años), cumpliendo requisitos: pagar las primas atrasadas con interés, y a menudo demostrar nuevamente asegurabilidad (evidencia de buena salud). [VERIFICADO — disposición estándar]",
      incorrectos: [
        "A) No cancela — REACTIVA una póliza caducada.",
        "C) No aumenta el beneficio sin costo.",
        "D) No reduce la prima — restaura la póliza original a sus términos."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es una VENTAJA de restablecer una póliza antigua en lugar de comprar una nueva?",
      o: [
        "El restablecimiento siempre es gratis",
        "La póliza restablecida conserva la prima basada en la edad ORIGINAL (más baja) y el valor en efectivo ya acumulado, en lugar de empezar con la prima de la edad actual (mayor)",
        "No hay ninguna ventaja",
        "La póliza nueva siempre es más barata"
      ],
      a: 1,
      trampa: "Restablecer conserva la edad original de emisión (prima más baja) y el valor acumulado — comprar nueva significa primas basadas en la edad actual, más alta.",
      correcto: "Al RESTABLECER, se conserva la prima basada en la edad ORIGINAL de emisión (más baja que la edad actual) y el valor en efectivo ya acumulado. Comprar una póliza NUEVA implicaría primas basadas en la edad actual (mayor) y empezar el valor en efectivo desde cero. Restablecer suele ser ventajoso. [VERIFICADO — ventaja del restablecimiento]",
      incorrectos: [
        "A) El restablecimiento NO es gratis — requiere pagar primas atrasadas con interés.",
        "C) SÍ hay ventajas — prima de edad original y valor acumulado.",
        "D) La póliza nueva no siempre es más barata — generalmente cuesta más por la edad mayor."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Al restablecer una póliza de vida, ¿qué sucede generalmente con los períodos de incontestabilidad y suicidio?",
      o: [
        "Se eliminan por completo",
        "Generalmente se REINICIA un nuevo período (de contestabilidad y a veces suicidio) desde la fecha de restablecimiento",
        "Nunca cambian",
        "Se extienden a 10 años"
      ],
      a: 1,
      trampa: "El restablecimiento generalmente reinicia un nuevo período de contestabilidad (la aseguradora puede volver a investigar declaraciones hechas en la solicitud de restablecimiento) — no continúa como si nada hubiera pasado.",
      correcto: "Al restablecer, generalmente se REINICIA un nuevo período de contestabilidad (frecuentemente 2 años) desde la fecha de restablecimiento, porque el asegurado hace nuevas declaraciones de asegurabilidad. Esto permite a la aseguradora impugnar esas nuevas declaraciones si fueron fraudulentas. [REQUIERE VERIFICACIÓN — confirmar el tratamiento exacto del período de suicidio al restablecer contra el material del curso]",
      incorrectos: [
        "A) No se eliminan — de hecho se reinicia un nuevo período.",
        "C) SÍ cambian — se reinicia el período de contestabilidad.",
        "D) No se extienden a 10 años — típicamente el nuevo período es de 2 años."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Dentro de qué plazo típico se puede solicitar el restablecimiento de una póliza de vida caducada?",
      o: [
        "30 días",
        "3 años (aunque varía según la póliza)",
        "10 años siempre",
        "No hay plazo, es indefinido"
      ],
      a: 1,
      trampa: "El plazo típico de restablecimiento es de alrededor de 3 años, aunque varía — se confunde con plazos más cortos o con la idea de que es indefinido.",
      correcto: "El restablecimiento típicamente puede solicitarse dentro de un plazo de aproximadamente 3 AÑOS desde la caducidad (aunque varía según la póliza y compañía). Pasado ese plazo, generalmente ya no se puede restablecer y habría que comprar una póliza nueva. [REQUIERE VERIFICACIÓN — confirmar el plazo exacto contra el material del curso, pues varía]",
      incorrectos: [
        "A) 30 días es muy corto — ese es más bien el período de gracia.",
        "C) No siempre es 10 años — el plazo típico ronda los 3 años.",
        "D) SÍ hay un plazo — no es indefinido."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre el RESTABLECIMIENTO y el PERÍODO DE GRACIA?",
      o: [
        "Son lo mismo",
        "El período de gracia evita que la póliza caduque (aún está vigente); el restablecimiento REACTIVA una póliza que YA caducó",
        "El restablecimiento evita la caducidad; el período de gracia reactiva",
        "Ambos duran 31 días"
      ],
      a: 1,
      trampa: "El período de gracia actúa ANTES de caducar (la póliza sigue viva); el restablecimiento actúa DESPUÉS de caducar (la revive). Momentos distintos.",
      correcto: "PERÍODO DE GRACIA = tiempo (31 días en vida) para pagar una prima vencida ANTES de que la póliza caduque — la póliza sigue vigente. RESTABLECIMIENTO = proceso para REACTIVAR una póliza que YA caducó (después del período de gracia), con requisitos más estrictos. Uno previene, el otro revive. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son lo mismo — actúan en momentos distintos (antes vs después de caducar).",
        "C) Invierte los conceptos.",
        "D) No ambos duran 31 días — el restablecimiento tiene un plazo mucho mayor (ej. 3 años)."
      ]
    }
  ]
}

]; // fin PK_DISPOSICIONES

if (typeof window !== 'undefined') window.PK_DISPOSICIONES = PK_DISPOSICIONES;
if (typeof module !== 'undefined') module.exports = { PK_DISPOSICIONES };
