// ============================================================
// PEARSON KILLER — pk-data-annuities.js
// Módulo: Anualidades
// 6 conceptos × 5 variantes = 30 preguntas
//
// NOTA DE FUENTES: Los conceptos de producto (qué es una anualidad,
// fases, tipos) son estables y provienen del manual estándar 2-15.
// Las cifras específicas (días, %, límites $) están marcadas:
//   [VERIFICADO] = ley federal estable o mecánica matemática fija
//   [REQUIERE VERIFICACIÓN] = confirmar contra manual/Florida Statutes vigente
// Ver VERIFICATION_NOTES.md para detalle completo.
// ============================================================

const PK_ANNUITIES = [

{
  id: "anualidades_001",
  area: "anualidades",
  concepto: "Propósito y Estructura de las Anualidades",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia fundamental de PROPÓSITO entre el seguro de vida y una anualidad?",
      o: [
        "El seguro de vida protege contra enfermedades; la anualidad protege contra accidentes",
        "El seguro de vida protege contra morir DEMASIADO PRONTO; la anualidad protege contra vivir DEMASIADO TIEMPO (longevity risk)",
        "Ambos tienen exactamente el mismo propósito pero estructuras financieras diferentes",
        "El seguro de vida es exclusivamente para jóvenes; la anualidad exclusivamente para jubilados"
      ],
      a: 1,
      trampa: "La diferencia de propósito es conceptualmente opuesta — uno cubre muerte temprana, el otro la longevidad.",
      correcto: "SEGURO DE VIDA = protege a la familia si el asegurado muere DEMASIADO PRONTO. ANUALIDAD = protege al jubilado si vive DEMASIADO TIEMPO (Longevity Risk), garantizando ingreso mientras viva. [VERIFICADO — concepto fundamental estable del producto]",
      incorrectos: [
        "A) El seguro de vida no protege contra enfermedades — para eso existe el seguro de salud.",
        "C) Los propósitos son fundamentalmente OPUESTOS, no iguales.",
        "D) Las anualidades pueden comprarse en distintas etapas de vida — no exclusivamente en jubilación."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "Una anualidad cuyos pagos comienzan INMEDIATAMENTE (generalmente dentro de un mes) después de la compra se llama:",
      o: [
        "Anualidad diferida (Deferred Annuity)",
        "Anualidad inmediata (Immediate Annuity)",
        "Anualidad de prima flexible (Flexible Premium Annuity)",
        "Anualidad de período cierto (Period Certain Annuity)"
      ],
      a: 1,
      trampa: "Los términos 'inmediata' y 'diferida' describen CUÁNDO empiezan los pagos, no el tipo de inversión.",
      correcto: "Anualidad INMEDIATA = los pagos comienzan generalmente dentro de un mes de la compra, típicamente con una prima única. La DIFERIDA acumula durante años y paga después. [VERIFICADO — definición de producto estándar]",
      incorrectos: [
        "A) La anualidad diferida ACUMULA primero y paga DESPUÉS — lo opuesto.",
        "C) La prima flexible describe cómo se paga la prima — no cuándo empiezan los beneficios.",
        "D) 'Período cierto' describe la duración garantizada de los pagos — no cuándo comienzan."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "La penalidad del IRS por retiro anticipado de ganancias de una anualidad antes de los 59½ años es:",
      o: [
        "10% sobre el monto total retirado (capital + ganancias)",
        "10% sobre las GANANCIAS retiradas, además de los impuestos sobre la renta ordinarios sobre esas ganancias",
        "15% sobre las ganancias como impuesto especial de anualidades",
        "25% como en el caso de las cuentas SIMPLE IRA"
      ],
      a: 1,
      trampa: "La penalidad es solo sobre las GANANCIAS, no sobre el capital original. Muchos asumen erróneamente que es sobre el total.",
      correcto: "La penalidad federal del IRS es 10% sobre las GANANCIAS (crecimiento) retiradas antes de los 59½, más impuestos ordinarios sobre esas ganancias. El capital original (primas pagadas) no está sujeto a la penalidad del 10%. [VERIFICADO — regla federal IRC Sec 72(q), ampliamente estable]",
      incorrectos: [
        "A) No es sobre el monto TOTAL — es solo sobre las ganancias, no sobre el capital aportado.",
        "C) No existe un impuesto especial del 15% para anualidades bajo esta regla.",
        "D) El 25% es la penalidad especial de retiro temprano de SIMPLE IRA — no aplica a anualidades."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Cuál de las siguientes situaciones permite un retiro de anualidad ANTES de los 59½ sin incurrir en la penalidad del 10% del IRS?",
      o: [
        "Si el dinero se reinvierte en otra anualidad dentro de los 60 días",
        "Si el propietario tiene más de 50 años en lugar de 59½",
        "Si el propietario de la anualidad fallece y los beneficiarios hacen el retiro",
        "Si el agente recomienda por escrito el retiro anticipado"
      ],
      a: 2,
      trampa: "Existen excepciones específicas a la penalidad del 10% establecidas por el IRC — la muerte del propietario es la más clara.",
      correcto: "La penalidad del 10% NO aplica en excepciones específicas del IRC, incluyendo: muerte del propietario, discapacidad total y permanente, pagos sustancialmente iguales periódicos (SEPP bajo regla 72(t)). [VERIFICADO — excepciones del IRC Sec 72(q) son estables]",
      incorrectos: [
        "A) Reinvertir en 60 días es un mecanismo de rollover más asociado a IRAs — no elimina automáticamente la penalidad en anualidades.",
        "B) Los 50 años no es un umbral de excepción reconocido — la edad de referencia es 59½.",
        "D) La recomendación del agente no tiene ningún poder legal para eliminar penalidades del IRS."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Carlos, 58 años, tiene una anualidad con surrender charge del 7% que expira a los 65 años. Necesita dinero urgente. ¿Cuáles serían los costos TOTALES potenciales de un retiro anticipado significativo?",
      o: [
        "Solo la penalidad del IRS del 10% sobre las ganancias",
        "Solo el surrender charge de la aseguradora del 7% sobre el monto retirado",
        "Potencialmente TRES costos simultáneos: surrender charge de la aseguradora (7%), penalidad IRS (10% sobre ganancias, por tener menos de 59½), Y impuestos ordinarios sobre las ganancias",
        "Solo impuestos ordinarios sobre las ganancias sin ninguna penalidad adicional"
      ],
      a: 2,
      trampa: "Hay hasta TRES costos separados e independientes que pueden aplicar simultáneamente: el de la aseguradora Y el del IRS Y los impuestos regulares.",
      correcto: "Retiro anticipado puede generar TRES costos: 1) Surrender charge contractual de la aseguradora, 2) Penalidad IRS del 10% sobre ganancias (Carlos tiene 58, menos de 59½), 3) Impuestos ordinarios sobre las ganancias retiradas. Los tres pueden aplicar simultáneamente. [VERIFICADO — mecánica combinada de contrato + ley federal]",
      incorrectos: [
        "A) Solo la penalidad IRS sería incompleto — también aplicaría el surrender charge contractual.",
        "B) Solo el surrender charge sería incompleto — también aplicaría la penalidad IRS y los impuestos.",
        "D) No es cierto que no hay penalidades — Carlos tiene 58 años (menos de 59½) y el surrender charge aún aplica."
      ]
    }
  ]
},

{
  id: "anualidades_002",
  area: "anualidades",
  concepto: "Tipos de Anualidades — Fija, Variable, Indexada",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "QUIEN_PAGA",
      q: "En una anualidad VARIABLE, ¿quién asume el riesgo de inversión de las subcuentas?",
      o: [
        "La aseguradora garantiza el rendimiento mínimo y asume el riesgo",
        "El gobierno federal a través de la FDIC garantiza el capital invertido",
        "El PROPIETARIO de la anualidad asume completamente el riesgo de inversión",
        "El agente que vendió el producto es responsable del rendimiento"
      ],
      a: 2,
      trampa: "VARIABLE = el propietario asume el riesgo. Esta es la diferencia fundamental respecto a la anualidad fija.",
      correcto: "Anualidad VARIABLE: el valor está en subcuentas de inversión (similares a fondos mutuos). El PROPIETARIO selecciona las subcuentas y asume COMPLETAMENTE el riesgo — el valor puede subir o bajar según el mercado. [VERIFICADO — estructura de producto regulada federalmente]",
      incorrectos: [
        "A) La garantía de rendimiento mínimo es característica de la anualidad FIJA, no la variable.",
        "B) La FDIC protege depósitos bancarios — no tiene jurisdicción sobre productos de anualidad.",
        "D) El agente puede recomendar, pero el riesgo de inversión lo asume legalmente el propietario."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia MÁS IMPORTANTE entre una Anualidad Fija tradicional y una Anualidad Indexada de Capital Fijo (FIA)?",
      o: [
        "La anualidad fija nunca paga ningún rendimiento; la indexada siempre supera al mercado",
        "La fija paga una tasa garantizada predeterminada; la FIA vincula el interés a un índice bursátil con piso de protección de capital pero limitando el rendimiento total mediante caps",
        "Ambas son idénticas porque ambas garantizan completamente el capital",
        "La FIA tiene mayor riesgo que la variable porque está vinculada directamente al mercado"
      ],
      a: 1,
      trampa: "La FIA es un producto intermedio — protege el capital como la fija pero con potencial de mayor rendimiento ligado a un índice, aunque limitado.",
      correcto: "FIJA: tasa de interés garantizada predeterminada. FIA: el interés se calcula según un índice (ej: S&P 500) con protección del capital (nunca negativo) pero con un CAP o tasa de participación que limita cuánto del rendimiento del índice se recibe. [VERIFICADO — mecánica de producto estándar]",
      incorrectos: [
        "A) La anualidad fija SÍ paga rendimiento garantizado — y la FIA no siempre supera al mercado por los caps.",
        "C) No son idénticas — el mecanismo de cálculo del interés es fundamentalmente diferente.",
        "D) La FIA tiene MENOS riesgo que la variable — el capital está protegido contractualmente."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Una anualidad variable requiere que el agente tenga licencia de valores (securities) porque:",
      o: [
        "Las anualidades variables son más difíciles de vender y requieren más entrenamiento comercial",
        "Las subcuentas de inversión en las que se deposita el dinero son valores (securities) regulados bajo la ley federal de valores",
        "Florida exige licencia de valores para vender cualquier producto financiero a personas de 65 años o más",
        "Las primas de las anualidades variables son estructuralmente más altas y requieren supervisión adicional"
      ],
      a: 1,
      trampa: "La razón legal específica de la licencia adicional es el componente de inversión en subcuentas — que son valores bajo ley federal.",
      correcto: "Las subcuentas en anualidades variables son fondos de inversión — valores (securities) regulados por la SEC y FINRA a nivel federal. Se necesita licencia de seguros estatal PLUS licencia de valores FINRA (Series 6 o 7). [VERIFICADO — requisito de ley federal de valores, estable]",
      incorrectos: [
        "A) La complejidad comercial de la venta no es la razón legal para requerir licencia de valores.",
        "C) No existe en Florida una regla general de licencia de valores basada solo en la edad del comprador.",
        "D) El nivel de las primas no determina por sí mismo los requisitos de licenciamiento."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "CASI_IDENTICAS",
      q: "Un cliente quiere participar del crecimiento potencial del mercado de valores pero NO puede arriesgarse a perder su capital principal. ¿Cuál producto es MÁS APROPIADO?",
      o: [
        "Anualidad Variable — vinculada directamente a subcuentas del mercado de valores",
        "Anualidad Fija Tradicional — garantiza tasa fija sin ninguna vinculación al mercado",
        "Anualidad Indexada de Capital Fijo (FIA) — crecimiento vinculado a un índice con protección del capital",
        "Certificado de Depósito (CD) bancario con tasa variable"
      ],
      a: 2,
      trampa: "El FIA está específicamente diseñado para este perfil de cliente: participación en el crecimiento del mercado combinada con protección del capital.",
      correcto: "FIA = solución específica para este perfil. Vinculada a un índice para participar del crecimiento potencial, con protección de capital (piso) que evita pérdidas por caídas del mercado. El CD no ofrece participación del mercado; la variable pone el capital directamente en riesgo. [VERIFICADO — características de producto reguladas]",
      incorrectos: [
        "A) La variable vincula el capital directamente al mercado — puede perder valor. No protege el capital.",
        "B) La fija tiene rendimiento garantizado pero sin ninguna vinculación al crecimiento del mercado.",
        "D) El CD bancario no ofrece participación del mercado de valores ni las ventajas fiscales de la anualidad."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es verdadero sobre las Anualidades Variables EXCEPTO:",
      o: [
        "El propietario puede perder parte del capital invertido si el mercado cae significativamente",
        "Requiere licencia de valores (FINRA) además de la licencia de seguros estatal",
        "La aseguradora garantiza contractualmente un rendimiento mínimo sobre las subcuentas de inversión",
        "El propietario puede elegir entre múltiples subcuentas de inversión disponibles en el contrato"
      ],
      a: 2,
      trampa: "La garantía de rendimiento mínimo es característica de la anualidad FIJA — no de la variable, donde el riesgo lo asume el propietario.",
      correcto: "En anualidades VARIABLES, la aseguradora NO garantiza ningún rendimiento mínimo sobre el valor de las subcuentas. El valor fluctúa completamente con el desempeño del mercado. Las garantías de rendimiento solo existen en productos fijos e indexados. [VERIFICADO — estructura regulatoria del producto]",
      incorrectos: [
        "A) Esta afirmación ES verdadera — el propietario puede perder capital en productos variables.",
        "B) Esta afirmación ES verdadera — se requiere licencia de valores adicional.",
        "D) Esta afirmación ES verdadera — el propietario elige entre múltiples subcuentas disponibles."
      ]
    }
  ]
},

{
  id: "anualidades_003",
  area: "anualidades",
  concepto: "Opciones de Pago de Anualidades (Settlement Options)",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "Una anualidad de Vida Pura (Straight Life / Life Only Annuity) garantiza pagos:",
      o: [
        "Por un número fijo de años predeterminado, sin importar si el anuitante vive o muere",
        "De por vida al anuitante, sin garantía de monto mínimo — los pagos cesan al morir el anuitante, aunque sea poco después de comenzar",
        "A los herederos por un mínimo de 20 años después de la muerte del anuitante",
        "Al cónyuge sobreviviente de por vida automáticamente después de la muerte del anuitante"
      ],
      a: 1,
      trampa: "La Vida Pura es la opción de pago más 'riesgosa' para el anuitante en cuanto a garantías — no hay protección mínima ni beneficio a herederos.",
      correcto: "Straight Life (Vida Pura) = pagos DE POR VIDA al anuitante únicamente. Si muere poco después del primer pago, los pagos CESAN inmediatamente sin ningún beneficio a herederos. A cambio, ofrece los pagos periódicos MÁS ALTOS entre todas las opciones de liquidación. [VERIFICADO — mecánica actuarial estándar]",
      incorrectos: [
        "A) Eso describe una opción de 'Período Cierto' (Period Certain) — no la Vida Pura.",
        "C) Eso no corresponde a la definición estándar de ninguna opción de pago de anualidad.",
        "D) Eso describe una anualidad 'Joint and Survivor' — diseñada para cubrir dos vidas."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál opción de pago de anualidad garantiza que los pagos continúen a un beneficiario designado por al menos un período mínimo, aunque el anuitante muera antes de completarlo?",
      o: [
        "Vida Pura (Straight Life / Life Only)",
        "Vida con Período Cierto (Life with Period Certain)",
        "Vida Conjunta y Sobreviviente (Joint and Survivor)",
        "Pago único de suma global (Lump Sum)"
      ],
      a: 1,
      trampa: "La opción con 'período cierto' específicamente garantiza un mínimo de tiempo de pagos — la vida pura no ofrece ninguna garantía mínima.",
      correcto: "Life with Period Certain = pagos DE POR VIDA al anuitante, PERO si muere antes de completar el período cierto garantizado (ej: 10 o 20 años), los pagos CONTINÚAN a un beneficiario designado hasta completar el período. Combina protección vitalicia con garantía mínima. [VERIFICADO — opción estándar de liquidación]",
      incorrectos: [
        "A) La Vida Pura cesa los pagos completamente al morir el anuitante — sin garantía mínima.",
        "C) Joint and Survivor cubre DOS personas vivas — continúa al cónyuge sobreviviente, no a herederos generales.",
        "D) El Lump Sum es un pago único que termina la relación contractual — no hay pagos periódicos posteriores."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "Pedro, 70 años, tiene una anualidad de $300,000. Quiere los pagos mensuales MÁS ALTOS posibles y no le preocupa dejar dinero a sus herederos. ¿Cuál opción de pago es la MÁS APROPIADA para su objetivo?",
      o: [
        "Vida con Período Cierto de 20 años",
        "Vida Conjunta y 100% Sobreviviente",
        "Vida Pura (Straight Life)",
        "Período Cierto de 10 años sin garantía de vida"
      ],
      a: 2,
      trampa: "Los pagos más altos corresponden siempre a la Vida Pura porque no incluye ninguna garantía adicional que deba financiarse reduciendo el pago.",
      correcto: "VIDA PURA ofrece los pagos mensuales MÁS ALTOS precisamente porque no hay garantías adicionales ni beneficio para herederos que financiar. Si Pedro solo quiere maximizar su ingreso mensual sin proteger a nadie más, la Vida Pura es matemáticamente la opción correcta. [VERIFICADO — principio actuarial: menos garantías = mayor pago]",
      incorrectos: [
        "A) El Período Cierto de 20 años REDUCE el pago mensual para financiar la garantía mínima adicional.",
        "B) Joint & Survivor REDUCE significativamente los pagos para cubrir dos vidas en lugar de una.",
        "D) El Período Cierto sin garantía de vida tiene un fin definido — riesgo de quedarse sin ingresos si vive más tiempo."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "QUIEN_PAGA",
      q: "Una pareja casada compra una anualidad 'Joint and 100% Survivor'. ¿Qué sucede específicamente cuando uno de los cónyuges fallece primero?",
      o: [
        "Los pagos cesan completamente e inmediatamente al fallecer el primer cónyuge",
        "Los pagos se reducen automáticamente al 50% para el cónyuge sobreviviente",
        "El 100% del pago mensual original CONTINÚA sin reducción al cónyuge sobreviviente de por vida",
        "Los herederos designados reciben el saldo restante del capital de la anualidad"
      ],
      a: 2,
      trampa: "'100% Survivor' significa literalmente que el CIEN POR CIENTO del pago mensual continúa sin reducción alguna.",
      correcto: "Joint and 100% Survivor: el cónyuge sobreviviente recibe el 100% del pago original DE POR VIDA, sin ninguna reducción. Esta es la opción más protectora para el cónyuge sobreviviente, pero también la que ofrece el pago mensual inicial MÁS BAJO porque debe cubrir dos vidas completamente. [VERIFICADO — mecánica estándar de la opción]",
      incorrectos: [
        "A) Los pagos NO cesan — eso describiría la Vida Pura para una sola vida, no esta opción conjunta.",
        "B) La reducción al 50% ocurre específicamente en la opción 'Joint and 50% Survivor' — diferente producto.",
        "D) No hay saldo de capital residual en la anualización — el propietario renunció al capital a cambio de pagos garantizados."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Ana elige una anualidad 'Life with 20-Year Period Certain'. Fallece a los 3 años de comenzar a recibir pagos. ¿Qué reciben sus herederos designados?",
      o: [
        "Nada — los pagos cesan automáticamente al morir el anuitante bajo cualquier opción",
        "Los pagos continúan por 17 años más (20 años garantizados menos 3 años ya recibidos)",
        "Los pagos continúan por 20 años COMPLETOS adicionales contados desde la fecha de muerte",
        "El valor presente actuarial de todos los pagos futuros en un pago único de suma global"
      ],
      a: 1,
      trampa: "El período cierto de 20 años es el MÍNIMO GARANTIZADO desde el INICIO de los pagos — no se reinicia ni se cuenta desde la muerte.",
      correcto: "Con 'Period Certain de 20 años', la aseguradora garantiza pagos por un MÍNIMO de 20 años desde el INICIO de la anualización. Ana recibió pagos durante 3 años → faltan 17 años del período garantizado. Sus herederos designados reciben esos 17 años restantes de pagos. [VERIFICADO — mecánica contractual estándar]",
      incorrectos: [
        "A) Los pagos NO cesan bajo esta opción específica — esa sería la característica de la Vida Pura sin período cierto.",
        "C) Los 20 años se cuentan desde el INICIO de los pagos, no se reinician desde la fecha de muerte.",
        "D) La opción de conversión a suma global no es automática ni está garantizada una vez iniciada la anualización."
      ]
    }
  ]
},

{
  id: "anualidades_004",
  area: "anualidades",
  concepto: "Intercambio 1035 aplicado a Anualidades",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de los siguientes intercambios bajo la Sección 1035 del Código de Rentas Internas (IRC) NO está permitido sin generar un evento fiscal?",
      o: [
        "Póliza de vida por otra póliza de vida",
        "Póliza de vida por una anualidad",
        "Anualidad por otra anualidad",
        "Anualidad por una póliza de vida"
      ],
      a: 3,
      trampa: "Los intercambios permitidos bajo IRC 1035 van hacia productos con iguales o menores ventajas fiscales relativas. Anualidad→Vida representaría 'mejorar' la posición fiscal, lo cual el código no permite.",
      correcto: "ANUALIDAD → VIDA no está permitido bajo IRC 1035. Permitidos: Vida→Vida, Vida→Anualidad, Anualidad→Anualidad, cualquier producto elegible→Cuidado a Largo Plazo (LTC). [VERIFICADO — regla estable del IRC Sección 1035, ley federal]",
      incorrectos: [
        "A) Vida → Vida SÍ está permitido bajo el 1035.",
        "B) Vida → Anualidad SÍ está permitido bajo el 1035.",
        "C) Anualidad → Anualidad SÍ está permitido bajo el 1035."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "La ventaja fiscal PRINCIPAL del intercambio 1035 es que permite:",
      o: [
        "Recibir el valor en efectivo directamente sin pagar ningún impuesto de forma permanente",
        "Transferir el valor acumulado (incluyendo ganancias) de un producto elegible a otro sin crear un evento gravable en el momento de la transferencia",
        "Eliminar contractualmente los surrender charges impuestos por la aseguradora original",
        "Cambiar el beneficiario designado sin ninguna restricción durante el proceso de intercambio"
      ],
      a: 1,
      trampa: "El 1035 DIFIERE la obligación fiscal — no la elimina permanentemente. Las ganancias se gravarán eventualmente cuando se retiren del nuevo producto.",
      correcto: "El 1035 permite transferir el valor acumulado (incluyendo ganancias) a otro producto elegible SIN CREAR un evento gravable en ese momento. Las ganancias mantienen su carácter fiscal y se gravarán cuando eventualmente se retiren del producto nuevo. [VERIFICADO — mecánica estable del IRC Sec 1035]",
      incorrectos: [
        "A) El 1035 DIFIERE, no ELIMINA de forma permanente la obligación fiscal sobre las ganancias.",
        "C) Los surrender charges son un término contractual con la aseguradora — el 1035 no los elimina.",
        "D) El cambio de beneficiario es una transacción administrativa independiente del intercambio fiscal 1035."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "Carlos tiene una póliza de vida con $50,000 de cash value, de los cuales $20,000 son ganancias acumuladas. Hace un intercambio 1035 a una anualidad. ¿Cuál es el resultado fiscal INMEDIATO?",
      o: [
        "Carlos debe pagar impuestos sobre los $20,000 de ganancias en el año del intercambio",
        "Carlos no paga impuestos ahora — los $20,000 de ganancias se transfieren a la anualidad y se gravarán cuando eventualmente retire fondos",
        "Carlos paga impuestos sobre exactamente el 50% de las ganancias en el año del intercambio",
        "El intercambio 1035 elimina permanentemente la obligación fiscal futura sobre esos $20,000"
      ],
      a: 1,
      trampa: "El 1035 DIFIERE los impuestos — no los elimina. Los $20,000 eventualmente se gravarán cuando Carlos haga retiros de la anualidad.",
      correcto: "El intercambio 1035 DIFIERE la obligación fiscal completamente. Los $20,000 de ganancias no se gravan en el momento del intercambio — se 'transfieren' con su carácter fiscal original a la anualidad y se gravarán cuando Carlos eventualmente retire fondos. [VERIFICADO — mecánica del IRC 1035]",
      incorrectos: [
        "A) Eso sería el resultado si Carlos RESCATARA la póliza directamente sin usar el mecanismo del 1035.",
        "C) No existe una regla de pago parcial del 50% en el intercambio 1035.",
        "D) El 1035 DIFIERE la obligación — no la elimina. Eventualmente se gravará al momento del retiro."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿En qué circunstancia específica un intercambio 1035 resultaría en el reconocimiento INMEDIATO de ingreso gravable, a pesar de calificar generalmente para el tratamiento libre de impuestos?",
      o: [
        "Cuando la nueva anualidad tiene menores surrender charges que la póliza original",
        "Cuando el intercambio es realizado entre productos de la misma compañía de seguros",
        "Cuando el propietario recibe efectivo adicional ('boot') como parte de la transacción del intercambio",
        "Cuando el intercambio involucra un cambio simultáneo del anuitante designado"
      ],
      a: 2,
      trampa: "El efectivo ('boot') recibido durante un intercambio 1035 rompe la protección fiscal del intercambio específicamente por ese monto recibido en efectivo.",
      correcto: "Si durante el intercambio 1035 el propietario recibe EFECTIVO adicional ('boot') como parte de la transacción, ese monto específico se reconoce como ingreso gravable inmediatamente. El resto del intercambio puede seguir calificando como libre de impuestos. [VERIFICADO — regla estable del IRC sobre 'boot' en intercambios]",
      incorrectos: [
        "A) Los surrender charges del contrato no determinan por sí mismos el tratamiento fiscal del intercambio.",
        "B) Los intercambios dentro de la misma compañía aseguradora califican perfectamente para el 1035.",
        "D) El cambio de anuitante puede tener implicaciones contractuales pero no es la causa principal del reconocimiento fiscal."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Rosa tiene una anualidad con $100,000 de valor total, de los cuales $40,000 son ganancias. Evalúa dos opciones: A) Rescate directo del contrato, B) Intercambio 1035 a una nueva anualidad. ¿Cuál es la diferencia fiscal fundamental entre las dos opciones?",
      o: [
        "Ambas opciones producen exactamente el mismo resultado fiscal en el mismo año",
        "Opción A: paga impuestos sobre los $40,000 de ganancias EN EL AÑO ACTUAL. Opción B: los $40,000 se transfieren y solo se gravarán cuando Rosa retire fondos de la nueva anualidad — DIFIERE el impuesto",
        "La Opción A es siempre superior porque los impuestos pagados ahora son matemáticamente más bajos",
        "El 1035 elimina permanentemente los impuestos sobre los $40,000 — nunca se pagarán en el futuro"
      ],
      a: 1,
      trampa: "La diferencia clave es el DIFERIMIENTO temporal de la obligación fiscal — esto puede representar un valor financiero significativo dependiendo del horizonte de tiempo.",
      correcto: "DIFERENCIA FUNDAMENTAL: Con rescate directo, Rosa paga impuestos sobre los $40,000 EN EL AÑO ACTUAL (posiblemente con penalidad IRS adicional si es menor de 59½). Con el intercambio 1035, los $40,000 continúan creciendo tax-deferred y solo se gravan cuando eventualmente retire fondos de la nueva anualidad. [VERIFICADO — comparación de mecánicas fiscales estables]",
      incorrectos: [
        "A) El 1035 SÍ ofrece una ventaja real de diferimiento que permite mayor crecimiento compuesto libre de impuestos.",
        "C) No necesariamente cierto — depende de si Rosa espera estar en un tramo fiscal mayor o menor en el futuro.",
        "D) El 1035 DIFIERE la obligación fiscal — eventualmente los $40,000 de ganancias serán gravados al momento del retiro."
      ]
    }
  ]
},

{
  id: "anualidades_005",
  area: "anualidades",
  concepto: "Idoneidad (Suitability) en la Venta de Anualidades",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En Florida, los requisitos de idoneidad para la venta de anualidades son especialmente reforzados para personas de:",
      o: [
        "Menores de 30 años de edad",
        "Entre 40 y 50 años de edad",
        "65 años de edad o más",
        "Cualquier edad, siempre que tengan ingresos bajos documentados"
      ],
      a: 2,
      trampa: "Florida tiene reglas de idoneidad ESPECIALMENTE reforzadas para la población de 65 años en adelante, dado su mayor vulnerabilidad financiera potencial.",
      correcto: "Florida tiene requisitos de idoneidad MEJORADOS para anualidades vendidas a personas de 65 AÑOS O MÁS. El agente debe documentar más rigurosamente la situación financiera, necesidades y objetivos del cliente. [REQUIERE VERIFICACIÓN — confirmar el umbral exacto de edad contra la regulación de Florida vigente, ya que estas reglas han evolucionado con estándares NAIC]",
      incorrectos: [
        "A) Los menores de 30 no tienen requisitos de idoneidad especialmente reforzados en anualidades.",
        "B) No existe un tramo de estrictez especial reconocido para el rango de 40-50 años.",
        "D) El nivel de ingreso bajo no es, por sí mismo, el factor que activa requisitos especiales de idoneidad."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "EXCEPTO",
      q: "Para determinar la idoneidad de una recomendación de anualidad, el agente debe evaluar TODO lo siguiente EXCEPTO:",
      o: [
        "La situación financiera actual y activos disponibles del cliente",
        "Los objetivos de inversión y necesidades de liquidez del cliente",
        "La tasa de comisión que el agente recibirá específicamente por esa venta",
        "La tolerancia al riesgo y horizonte de tiempo del cliente"
      ],
      a: 2,
      trampa: "La palabra EXCEPTO señala lo que NO pertenece al análisis. La comisión del agente NUNCA es un factor legítimo de idoneidad.",
      correcto: "La tasa de comisión del agente NO es un factor de idoneidad. Los factores legítimos son exclusivamente del CLIENTE: situación financiera, objetivos, necesidades de liquidez, tolerancia al riesgo y horizonte de tiempo. [VERIFICADO — principio ético y regulatorio estable de suitability]",
      incorrectos: [
        "A) La situación financiera del cliente SÍ es un factor esencial de idoneidad.",
        "B) Los objetivos de inversión y liquidez SÍ son factores esenciales de idoneidad.",
        "D) La tolerancia al riesgo y horizonte de tiempo SÍ son factores esenciales de idoneidad."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "Un agente vende una anualidad con surrender period de 10 años a un cliente de 82 años que claramente necesita liquidez en un plazo de 3 años. ¿Cuál es la naturaleza específica de esta violación?",
      o: [
        "Twisting — porque implica reemplazar una póliza existente usando información falsa",
        "Rebating — porque implica ofrecer un incentivo financiero ilegal al cliente",
        "Venta no idónea (unsuitable sale) — el producto específico es incompatible con las necesidades de tiempo del cliente",
        "Tergiversación — porque implica mentir explícitamente sobre el período de penalidad del producto"
      ],
      a: 2,
      trampa: "El problema central de este escenario es la INCOMPATIBILIDAD estructural entre el producto vendido y la necesidad real del cliente — eso define específicamente una venta no idónea.",
      correcto: "Esta es una VENTA NO IDÓNEA. El cliente necesita liquidez en 3 años pero el producto impone una penalidad de retiro anticipado durante 10 años. La idoneidad requiere que el producto CORRESPONDA razonablemente a las necesidades documentadas del cliente. [VERIFICADO — principio de suitability]",
      incorrectos: [
        "A) No hay evidencia en el escenario de que se esté reemplazando una póliza existente con información falsa.",
        "B) No hay mención de ningún descuento, regalo o incentivo financiero ilegal en este escenario.",
        "D) No se indica que el agente haya mentido activamente sobre el período de penalidad del producto."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "PRIMERO",
      q: "¿En qué momento del proceso de venta DEBE el agente completar el análisis de idoneidad de una anualidad?",
      o: [
        "Después de que el cliente firme la solicitud, para validar retroactivamente su decisión",
        "ANTES de hacer cualquier recomendación específica — el análisis debe preceder a la sugerencia del producto",
        "Después de que la compañía aseguradora emita la póliza formalmente",
        "Únicamente cuando el cliente lo solicite específicamente al agente"
      ],
      a: 1,
      trampa: "El análisis de idoneidad debe PRECEDER lógica y temporalmente a la recomendación — hacerlo después convierte el proceso en un formalismo vacío de propósito preventivo.",
      correcto: "El análisis de idoneidad debe completarse ANTES de cualquier recomendación específica de producto. El agente primero conoce y documenta la situación del cliente, luego determina si el producto es apropiado, y solo entonces recomienda. [VERIFICADO — principio fundamental de suitability]",
      incorrectos: [
        "A) Realizarlo después de la firma lo convierte en retroactivo y elimina su propósito preventivo real.",
        "C) Esperar hasta la emisión de la póliza es completamente inadecuado y constituye una violación regulatoria.",
        "D) La idoneidad es una obligación proactiva del agente — no depende de que el cliente la solicite."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Pedro, 67 años, ingresos fijos mensuales de $2,500, necesita liquidez documentada en 3 años para gastos médicos proyectados. El agente le recomienda una anualidad con surrender period de 8 años y comisión del 8% para el agente. El cliente firma voluntariamente el documento de idoneidad. ¿Es esta venta idónea?",
      o: [
        "Sí — el cliente firmó voluntariamente el documento, lo que implica que aceptó y comprendió los términos",
        "Sí — el cliente tiene 67 años, que es mayor a la edad de referencia de 65 años para requisitos especiales",
        "No — el producto específico es fundamentalmente incompatible con la necesidad documentada de liquidez en 3 años",
        "La idoneidad depende únicamente de si la comisión del 8% se mantiene dentro de los límites legales permitidos"
      ],
      a: 2,
      trampa: "Ni la firma voluntaria NI la legalidad de la comisión establecen idoneidad por sí solas — las necesidades reales y documentadas del cliente son el criterio determinante.",
      correcto: "La venta NO es idónea. El cliente tiene una necesidad documentada de liquidez en 3 años, pero el producto lo penaliza financieramente por retirar fondos durante 8 años. La idoneidad se determina por la COMPATIBILIDAD real del producto con las necesidades — no por la firma ni por la legalidad de la comisión. [VERIFICADO — principio de suitability]",
      incorrectos: [
        "A) La firma voluntaria del cliente no establece idoneidad automáticamente si el producto es objetivamente incompatible.",
        "B) Tener 65+ activa requisitos de documentación reforzada — no convierte automáticamente cualquier anualidad en idónea.",
        "D) La legalidad de la comisión del agente es completamente irrelevante para determinar si el producto es idóneo para el cliente."
      ]
    }
  ]
},

{
  id: "anualidades_006",
  area: "anualidades",
  concepto: "Fases de la Anualidad — Acumulación y Anualización",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "Las dos fases principales de un contrato de anualidad son:",
      o: [
        "Fase de compra inicial y fase de venta al vencimiento",
        "Fase de Acumulación (Accumulation Phase) y Fase de Distribución / Anualización (Distribution / Annuitization Phase)",
        "Fase de inversión activa y fase de retiro forzoso obligatorio",
        "Fase de pago de prima y fase de pago de beneficio de muerte"
      ],
      a: 1,
      trampa: "Los términos técnicos correctos de las dos fases tienen sinónimos coloquiales que pueden generar confusión en el examen.",
      correcto: "FASE DE ACUMULACIÓN (Pay-in Phase): el propietario deposita dinero y el valor crece con impuestos diferidos. FASE DE DISTRIBUCIÓN/ANUALIZACIÓN (Pay-out Phase): la aseguradora comienza a pagar al anuitante, ya sea mediante anualización formal, retiros programados, o suma global. [VERIFICADO — terminología estándar de producto]",
      incorrectos: [
        "A) 'Compra/venta' no son los términos técnicos correctos usados en el contexto de anualidades.",
        "C) 'Inversión activa/retiro forzoso' no son los términos técnicos estándar del producto.",
        "D) 'Prima/beneficio de muerte' son términos más asociados con seguro de vida que con anualidades."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "ESCENARIO",
      q: "Carlos ha acumulado $200,000 en su anualidad diferida y decide 'anualizar' formalmente el contrato. ¿Qué significa esta decisión y cuál es su consecuencia MÁS IMPORTANTE?",
      o: [
        "Carlos recibe inmediatamente los $200,000 como pago único completamente libre de impuestos",
        "Carlos comienza a recibir pagos periódicos garantizados, pero esta decisión de anualizar es generalmente IRREVERSIBLE",
        "Carlos puede cambiar de opinión libremente y rescatar el saldo restante en cualquier momento posterior",
        "Carlos transfiere automáticamente la anualidad completa a sus herederos designados sin ningún impuesto"
      ],
      a: 1,
      trampa: "La anualización convierte el capital acumulado en pagos periódicos garantizados — y esta decisión típicamente NO puede revertirse una vez tomada.",
      correcto: "ANUALIZAR = convertir formalmente el valor acumulado en pagos periódicos garantizados (mensuales, trimestrales, etc.). La consecuencia MÁS IMPORTANTE: esta decisión es generalmente IRREVERSIBLE — Carlos renuncia al acceso directo al capital de saldo a cambio de pagos garantizados de por vida o por período. [VERIFICADO — característica contractual estándar]",
      incorrectos: [
        "A) La anualización no genera un pago único libre de impuestos — genera pagos periódicos parcialmente gravables.",
        "C) Una vez formalmente anualizada, generalmente NO puede rescatarse el saldo — esa es la advertencia central.",
        "D) La anualización distribuye pagos AL ANUITANTE — no es un mecanismo de transferencia a herederos."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "QUIEN_PAGA",
      q: "En un contrato de anualidad, ¿pueden el PROPIETARIO (owner) y el ANUITANTE ser personas diferentes?",
      o: [
        "No, siempre deben ser exactamente la misma persona bajo cualquier circunstancia contractual",
        "Sí, pueden ser personas diferentes — el propietario controla la póliza y el anuitante es la persona sobre cuya expectativa de vida se calculan los pagos",
        "El anuitante siempre debe ser legalmente el cónyuge del propietario del contrato",
        "El propietario y el anuitante son términos legalmente intercambiables sin ninguna distinción práctica"
      ],
      a: 1,
      trampa: "Propietario y anuitante son roles contractuales distintos que pueden recaer en personas diferentes según la estructura del contrato.",
      correcto: "PROPIETARIO = quien controla el contrato, decide sobre él y generalmente recibe los beneficios. ANUITANTE = la persona sobre cuya expectativa de vida se calculan los pagos — generalmente coincide con el propietario, pero puede ser diferente (ej: una empresa como propietaria, un empleado como anuitante). [VERIFICADO — estructura contractual estándar]",
      incorrectos: [
        "A) NO siempre son la misma persona — una empresa puede ser propietaria mientras un empleado es el anuitante.",
        "C) No existe ningún requisito legal de que sean cónyuges entre sí.",
        "D) Son roles contractuales con derechos y responsabilidades legales distintas — no son intercambiables."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Si el PROPIETARIO de una anualidad diferida fallece ANTES de que comience la fase de anualización, ¿qué opciones tiene generalmente el BENEFICIARIO designado?",
      o: [
        "El beneficiario está obligado a anualizar inmediatamente el contrato o pierde el derecho al dinero",
        "El beneficiario generalmente tiene varias opciones: recibir el valor acumulado en pago único, o distribuir dentro de un plazo, o comenzar pagos basados en su propia expectativa de vida",
        "El beneficiario está obligado a esperar un período de 10 años antes de poder acceder al dinero",
        "El valor de la anualidad revierte automáticamente a la propiedad de la aseguradora sin beneficio alguno"
      ],
      a: 1,
      trampa: "Existen reglas específicas del IRS que rigen cómo los beneficiarios deben distribuir los fondos de una anualidad heredada — no es una obligación única de anualización inmediata.",
      correcto: "Cuando el propietario fallece antes de anualizar, el beneficiario generalmente tiene opciones bajo el contrato y las reglas del IRS: tomar el valor acumulado como pago único, distribuirlo dentro de un plazo determinado, o comenzar pagos periódicos. [REQUIERE VERIFICACIÓN — los plazos específicos exactos deben confirmarse contra IRC Sec 72(s) vigente]",
      incorrectos: [
        "A) El beneficiario tiene múltiples opciones contractuales — no está limitado únicamente a anualizar de inmediato.",
        "C) No existe una obligación general de espera de 10 años para que los beneficiarios accedan al valor.",
        "D) El valor de la anualidad NO revierte a la aseguradora — el beneficiario tiene derecho contractual al valor."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Ana tiene 60 años y una anualidad diferida con $150,000 acumulados. Evalúa: A) Comenzar a anualizar ahora, B) Esperar hasta los 70 para anualizar. ¿Cuál es el impacto financiero GENERAL de esperar 10 años adicionales?",
      o: [
        "Esperar no genera ningún beneficio financiero adicional bajo ninguna circunstancia",
        "Esperar permite que los fondos continúen creciendo con impuestos diferidos durante 10 años adicionales, lo cual generalmente resulta en pagos mensuales más altos al anualizar con un saldo mayor",
        "Esperar reduce necesariamente el período de distribución disponible y por tanto reduce los pagos mensuales",
        "Esperar genera impuestos adicionales inmediatos por el crecimiento acumulado durante esos 10 años"
      ],
      a: 1,
      trampa: "El crecimiento adicional con impuestos diferidos durante más tiempo es el beneficio financiero central de posponer la anualización.",
      correcto: "Esperar 10 años adicionales generalmente permite que los $150,000 continúen creciendo TAX-DEFERRED, acumulando un saldo mayor. Al anualizar posteriormente con un saldo más alto (y con menor expectativa de vida restante a mayor edad), los pagos mensuales calculados serán generalmente más altos. [VERIFICADO — principio actuarial y fiscal estable]",
      incorrectos: [
        "A) Esperar SÍ genera beneficio financiero real — mayor acumulación por más años de crecimiento diferido.",
        "C) Esperar generalmente AUMENTA los pagos calculados — no los reduce, dado el mayor capital y menor expectativa de vida restante.",
        "D) El crecimiento con impuestos diferidos NO genera impuestos inmediatos por esperar — solo se gravan al momento del retiro efectivo."
      ]
    }
  ]
}

]; // fin PK_ANNUITIES

if (typeof module !== 'undefined') module.exports = { PK_ANNUITIES };

// Asignación explícita a window para garantizar disponibilidad
// global sin importar el motor JS o el timing de ejecución del navegador
if (typeof window !== 'undefined') window.PK_ANNUITIES = PK_ANNUITIES;
