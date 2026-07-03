// ============================================================
// PEARSON KILLER — pk-data-nivel2.js
// Módulo: Vida Avanzada, Anualidades, Retiro y Regulación Florida
// (Nivel Pearson Avanzado — basado en material de referencia
// aportado por el usuario, reestructurado en formato estándar)
//
// 10 conceptos × 5 variantes = 50 preguntas
// [VERIFICADO] = mecánica de producto o principio legal estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// ============================================================

const PK_NIVEL2 = [

{
  id: "nivel2_001",
  area: "vida",
  concepto: "Designaciones de Beneficiario — Revocable, Irrevocable, Per Stirpes, Contingente",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un productor explica que un cliente podrá cambiar libremente al beneficiario de su póliza en cualquier momento, sin necesidad de pedir autorización a nadie. ¿Qué tipo de designación de beneficiario describe esto?",
      o: [
        "Primario",
        "Contingente",
        "Revocable",
        "Irrevocable"
      ],
      a: 2,
      trampa: "'Primario' y 'Contingente' describen el ORDEN de prioridad para recibir el beneficio; 'Revocable' e 'Irrevocable' describen si el titular puede CAMBIAR esa designación libremente.",
      correcto: "REVOCABLE = el titular de la póliza puede cambiar la designación del beneficiario en cualquier momento SIN necesidad de consentimiento del beneficiario actual. Es la designación estándar por defecto en la mayoría de las pólizas. [VERIFICADO — designación estándar]",
      incorrectos: [
        "A) 'Primario' describe la PRIORIDAD (recibe primero) — no si puede cambiarse libremente.",
        "B) 'Contingente' describe quien recibe SI el beneficiario primario no puede — no la libertad de cambio.",
        "D) 'Irrevocable' es exactamente lo OPUESTO — requiere el consentimiento del beneficiario para poder cambiarlo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "M contrató una póliza de muerte accidental y desmembramiento (AD&D) y nombró a su hijo como beneficiario. M tiene derecho a cambiar la designación del beneficiario en cualquier momento sin pedir permiso. ¿Qué tipo de beneficiario es su hijo en esta designación?",
      o: [
        "Contingente",
        "Irrevocable",
        "Primario",
        "Revocable"
      ],
      a: 3,
      trampa: "La pregunta describe el DERECHO del titular (M) de cambiar sin permiso — eso clasifica al hijo como beneficiario REVOCABLE, independientemente de que también sea el beneficiario 'principal' en este caso.",
      correcto: "El hijo es un beneficiario REVOCABLE porque M conserva el derecho de cambiar la designación en cualquier momento sin necesitar el consentimiento del hijo. La clasificación revocable/irrevocable es independiente de si es primario o contingente. [VERIFICADO — aplicación directa de la definición]",
      incorrectos: [
        "A) 'Contingente' no aplica aquí — el hijo es el único beneficiario mencionado, funcionando como principal.",
        "B) 'Irrevocable' sería lo opuesto — requeriría el consentimiento del hijo para cambiar, lo cual el escenario específicamente niega.",
        "C) 'Primario' describe orden de prioridad, pero la pregunta específicamente pide la clasificación revocable/irrevocable."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un asegurado desea cambiar el beneficiario de una póliza de muerte accidental y desmembramiento (AD&D) y hacer el cambio PERMANENTE, de modo que ni él mismo pueda revertirlo unilateralmente en el futuro. ¿Qué tipo de designación satisface esta necesidad?",
      o: [
        "Revocable",
        "Contingente",
        "Irrevocable",
        "Primario"
      ],
      a: 2,
      trampa: "El deseo de hacer el cambio 'permanente e imposible de revertir unilateralmente' es la definición exacta de designación Irrevocable — el titular renuncia a su propio derecho de cambio futuro.",
      correcto: "IRREVOCABLE = una vez designado, el titular de la póliza NO puede cambiar al beneficiario (ni realizar ciertas otras acciones como préstamos contra la póliza) SIN el consentimiento expreso del beneficiario irrevocable. Es la única designación que logra la permanencia deseada. [VERIFICADO — designación estándar reconocida]",
      incorrectos: [
        "A) Revocable permite cambios futuros SIN consentimiento — exactamente lo opuesto de lo que busca el asegurado.",
        "B) Contingente describe orden de prioridad — no la posibilidad de revertir el cambio.",
        "D) Primario describe orden de prioridad — no aplica al requisito de permanencia descrito."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un cliente desea que, si uno de sus hijos fallece ANTES que él, la parte correspondiente a ese hijo pase automáticamente a los HIJOS de ese hijo fallecido (sus nietos), en lugar de dividirse entre sus otros hijos sobrevivientes. ¿Qué método de distribución de beneficiarios responde mejor a ese objetivo?",
      o: [
        "Per cápita",
        "Per stirpes",
        "Beneficiario irrevocable",
        "Cesión absoluta"
      ],
      a: 1,
      trampa: "Per cápita y Per stirpes son ambos métodos de distribución entre MÚLTIPLES beneficiarios, pero funcionan de forma opuesta cuando uno de ellos premuere al asegurado.",
      correcto: "PER STIRPES ('por estirpe' o 'por rama familiar') = si un beneficiario designado fallece antes que el asegurado, la porción de ESE beneficiario pasa a SUS PROPIOS DESCENDIENTES (los nietos del asegurado en este caso), manteniendo la distribución por rama familiar. [VERIFICADO — método de distribución reconocido en designaciones de beneficiario]",
      incorrectos: [
        "A) Per Cápita ('por cabeza') distribuiría la porción del hijo fallecido ENTRE LOS DEMÁS beneficiarios sobrevivientes por igual — no a los nietos específicamente.",
        "C) Beneficiario Irrevocable describe si puede cambiarse la designación — no cómo se distribuye entre múltiples beneficiarios y sus descendientes.",
        "D) Cesión Absoluta transfiere completamente la propiedad de la póliza a un tercero — concepto no relacionado con distribución entre beneficiarios."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "P y Q están casados y tienen tres hijos. P es el beneficiario principal de la póliza de muerte accidental y desmembramiento (AD&D) de Q, y R (la hermana de Q) es la beneficiaria contingente. P, Q y R sufren un accidente automovilístico juntos. Q y R mueren en el acto; P sobrevive. ¿A quién se pagan las prestaciones por muerte accidental?",
      o: [
        "Solo a P",
        "Se dividen entre P y los herederos de R",
        "Únicamente a los tres hijos de P y Q",
        "El beneficio se pierde porque el beneficiario contingente también falleció"
      ],
      a: 0,
      trampa: "El hecho de que R (contingente) también haya fallecido es irrelevante para el resultado, porque P (el beneficiario PRINCIPAL) sobrevivió — el orden de contingencia solo importa si el principal NO sobrevive.",
      correcto: "Las prestaciones se pagan ÚNICAMENTE a P, el beneficiario PRINCIPAL, quien sobrevivió al asegurado (Q). El hecho de que R (beneficiaria contingente) también haya fallecido en el mismo accidente es irrelevante — la designación contingente solo se activa si el beneficiario principal NO sobrevive al asegurado. [VERIFICADO — mecánica estándar de designación principal/contingente]",
      incorrectos: [
        "B) No hay división con los herederos de R — R nunca llegó a calificar para recibir nada porque P (principal) sí sobrevivió.",
        "C) Los hijos no son mencionados como beneficiarios designados en este escenario — P es el beneficiario designado que sobrevivió.",
        "D) El beneficio NO se pierde — se paga normalmente al beneficiario principal sobreviviente, independientemente de qué haya pasado con el contingente."
      ]
    }
  ]
},

{
  id: "nivel2_002",
  area: "vida",
  concepto: "Beneficio Acelerado por Fallecimiento vs Liquidación Viática vs STOLI",
  variantes: [
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Una persona con una enfermedad terminal solicita dinero utilizando una cláusula INCLUIDA EN SU PROPIA PÓLIZA (no una venta a un tercero). La aseguradora adelanta parte del beneficio por fallecimiento directamente al asegurado, y la póliza continúa vigente por el resto del beneficio restante. ¿Qué mecanismo ocurrió?",
      o: [
        "Liquidación Viática",
        "STOLI (Stranger-Originated Life Insurance)",
        "Beneficio Acelerado por Fallecimiento (Accelerated Death Benefit)",
        "Reemplazo de póliza"
      ],
      a: 2,
      trampa: "Se confunde con Liquidación Viática porque ambos involucran a una persona con enfermedad terminal recibiendo dinero — pero el Beneficio Acelerado es una CLÁUSULA DE LA PROPIA PÓLIZA pagada por la MISMA aseguradora; la Liquidación Viática es una VENTA a un TERCERO inversor externo.",
      correcto: "BENEFICIO ACELERADO POR FALLECIMIENTO (Accelerated Death Benefit / Living Benefit) = una provisión o rider INCLUIDO EN LA PROPIA PÓLIZA que permite al asegurado terminal recibir un ADELANTO de su propio beneficio de muerte directamente de SU aseguradora — la póliza sigue vigente por el remanente. [VERIFICADO — provisión estándar reconocida]",
      incorrectos: [
        "A) Liquidación Viática implica VENDER la póliza a un TERCERO inversor externo por un porcentaje del valor nominal — no es un adelanto de la propia aseguradora.",
        "B) STOLI se refiere a pólizas originadas específicamente PARA ser vendidas a inversores desde el principio — un esquema distinto y potencialmente problemático.",
        "D) Reemplazo de póliza se refiere a cancelar una póliza y adquirir otra — no relacionado con este escenario."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural CLAVE entre el Beneficio Acelerado por Fallecimiento y una Liquidación Viática?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción práctica",
        "El Beneficio Acelerado es un adelanto de la PROPIA aseguradora bajo una cláusula de la póliza; la Liquidación Viática es la VENTA de la póliza a un tercero inversor externo por un porcentaje del valor nominal",
        "La Liquidación Viática siempre paga más dinero que el Beneficio Acelerado en todos los casos",
        "El Beneficio Acelerado solo está disponible para personas sanas; la Liquidación Viática solo para enfermos"
      ],
      a: 1,
      trampa: "Ambos mecanismos sirven a personas con condiciones médicas graves para acceder a efectivo, pero la ESTRUCTURA de la transacción (adelanto propio vs venta a tercero) es fundamentalmente distinta.",
      correcto: "BENEFICIO ACELERADO = adelanto directamente de la ASEGURADORA ORIGINAL bajo una provisión de la propia póliza, generalmente sin involucrar a terceros. LIQUIDACIÓN VIÁTICA = venta de la propiedad de la póliza a un INVERSOR EXTERNO (tercero) que se convierte en el nuevo propietario/beneficiario, pagando un porcentaje del valor nominal al asegurado terminal original. [VERIFICADO — distinción estructural fundamental]",
      incorrectos: [
        "A) NO son sinónimos — tienen estructuras de transacción completamente diferentes.",
        "C) No existe una regla universal sobre cuál paga más — depende de las circunstancias específicas de cada caso.",
        "D) Ambos mecanismos están específicamente diseñados para personas con condiciones médicas graves/terminales — no para personas sanas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué describe mejor el concepto de STOLI (Stranger-Originated Life Insurance)?",
      o: [
        "Un adelanto legítimo del beneficio de muerte solicitado directamente por el asegurado enfermo a su propia aseguradora",
        "Un acuerdo de seguro de vida estructurado desde su origen con la intención de ser vendido a inversores externos que no tienen interés asegurable natural en la vida del asegurado, eludiendo los estatutos de interés asegurable",
        "Una designación de beneficiario contingente que protege a familiares lejanos del asegurado",
        "Un tipo de coaseguro utilizado exclusivamente en pólizas de gastos médicos mayores"
      ],
      a: 1,
      trampa: "STOLI suena similar a la Liquidación Viática legítima, pero se refiere específicamente a un ESQUEMA diseñado desde el ORIGEN de la póliza para eludir el requisito de interés asegurable, generalmente considerado problemático o cuestionable.",
      correcto: "STOLI = arreglo de seguro de vida orientado a inversores, donde la póliza se origina desde el principio con la intención específica de transferirla a inversores EXTRAÑOS (sin relación familiar, comercial o de interés asegurable natural) con el asegurado — un mecanismo diseñado para eludir los estatutos tradicionales de interés asegurable. [VERIFICADO — concepto reconocido y regulado en la industria]",
      incorrectos: [
        "A) Esto describe el Beneficio Acelerado por Fallecimiento — un mecanismo legítimo y diferente de STOLI.",
        "C) STOLI no se relaciona con designaciones de beneficiario contingente para familiares.",
        "D) STOLI no tiene relación con coaseguro de gastos médicos — es un concepto exclusivo de seguros de vida e interés asegurable."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "El titular de un seguro de vida puede vender su póliza a un proveedor especializado para recibir un porcentaje del valor nominal de la póliza en efectivo mientras aún está vivo. ¿Cómo se denomina generalmente este tipo de proveedor cuando el vendedor tiene una enfermedad terminal?",
      o: [
        "Proveedor de anualidades inmediatas",
        "Proveedor de acuerdos de viabilidad (Viatical Settlement Provider)",
        "Reasegurador",
        "Fiduciario del plan de beneficios"
      ],
      a: 1,
      trampa: "El término técnico específico para esta transacción con enfermos terminales es 'proveedor de acuerdos viáticos' — no debe confundirse con otros roles del sector financiero-asegurador.",
      correcto: "PROVEEDOR DE ACUERDOS VIÁTICOS (Viatical Settlement Provider) = entidad especializada que compra pólizas de vida de personas con enfermedad terminal, pagando un porcentaje del valor nominal en efectivo inmediato al asegurado. [VERIFICADO — rol reconocido y regulado en la industria]",
      incorrectos: [
        "A) Un proveedor de anualidades inmediatas vende productos de renta vitalicia — no compra pólizas de vida existentes.",
        "C) Un reasegurador opera entre compañías aseguradoras — no compra pólizas individuales de consumidores.",
        "D) Un fiduciario del plan de beneficios administra planes de retiro de empleadores — rol completamente distinto."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todos los siguientes son mecanismos legítimos y reconocidos que permiten a un asegurado o titular obtener efectivo relacionado con una póliza de vida vigente EXCEPTO:",
      o: [
        "Beneficio Acelerado por Fallecimiento",
        "Liquidación Viática a través de un proveedor especializado",
        "Préstamo contra el valor en efectivo acumulado de una póliza permanente",
        "STOLI como estrategia estándar recomendada para cualquier asegurado sano"
      ],
      a: 3,
      trampa: "STOLI es un esquema problemático diseñado específicamente para eludir el interés asegurable — no es una estrategia estándar ni recomendada para asegurados sanos regulares, a diferencia de los otros tres mecanismos legítimos.",
      correcto: "STOLI NO es una estrategia estándar recomendada — es un esquema diseñado para eludir los requisitos de interés asegurable, generalmente objeto de regulación restrictiva y escrutinio por su potencial para fomentar la especulación sobre vidas humanas sin conexión legítima. [VERIFICADO — distinción entre mecanismos legítimos y esquemas problemáticos]",
      incorrectos: [
        "A) El Beneficio Acelerado por Fallecimiento SÍ es un mecanismo legítimo y estándar reconocido.",
        "B) La Liquidación Viática a través de un proveedor regulado SÍ es un mecanismo legítimo reconocido.",
        "C) El préstamo contra el valor en efectivo SÍ es un mecanismo legítimo y estándar de las pólizas permanentes."
      ]
    }
  ]
},

{
  id: "nivel2_003",
  area: "vida",
  concepto: "Estrategias Empresariales — Persona Clave, Split Dollar, Executive Bonus, Compra-Venta",
  variantes: [
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Una empresa compra un seguro sobre la vida de su director general. La empresa paga las primas, es propietaria de la póliza, y cobrará el beneficio completo si el director fallece. ¿Qué estrategia representa este caso?",
      o: [
        "Executive Bonus",
        "Split Dollar",
        "Seguro de Persona Clave (Key Person)",
        "Compensación Diferida"
      ],
      a: 2,
      trampa: "Las cuatro son estrategias empresariales de seguro de vida, pero solo Persona Clave describe específicamente que la EMPRESA es propietaria Y beneficiaria completa, protegiéndose a sí misma de la pérdida económica.",
      correcto: "SEGURO DE PERSONA CLAVE (Key Person Insurance) = la empresa paga la prima, es propietaria de la póliza, Y es la ÚNICA beneficiaria — protegiéndose económicamente de la pérdida que causaría el fallecimiento de un empleado cuya ausencia generaría un perjuicio financiero significativo al negocio. [VERIFICADO — estrategia estándar reconocida]",
      incorrectos: [
        "A) Executive Bonus = la empresa paga la prima como BONO al ejecutivo, quien es propietario y designa su propio beneficiario personal — la empresa NO es beneficiaria.",
        "B) Split Dollar = un arreglo donde el costo y los beneficios de la póliza se DIVIDEN entre la empresa y el empleado según un acuerdo específico.",
        "D) Compensación Diferida = un acuerdo para pagar al ejecutivo una compensación en el FUTURO (frecuentemente al retiro), no necesariamente estructurado primariamente como seguro de vida con beneficiario empresarial."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "QUIEN_PAGA",
      q: "En una póliza de seguro de vida para empleados clave (Key Person), ¿quién NO puede ser el tercero propietario de la póliza según la estructura estándar?",
      o: [
        "La empresa contratante",
        "Un fideicomiso establecido por la empresa",
        "El propio asegurado (el empleado clave)",
        "Un socio de la empresa designado por acuerdo"
      ],
      a: 2,
      trampa: "En la estructura estándar de Persona Clave, el ASEGURADO (el empleado clave) generalmente NO es el propietario de su propia póliza — la empresa (o una entidad relacionada) es quien posee y se beneficia.",
      correcto: "En la estructura estándar de Key Person Insurance, el PROPIO ASEGURADO (el empleado clave) generalmente NO es el propietario de la póliza sobre su propia vida en este contexto — es la empresa (o un fideicomiso/socio designado por la empresa) quien posee la póliza y recibe el beneficio. [VERIFICADO — estructura estándar de propiedad en Key Person Insurance]",
      incorrectos: [
        "A) La empresa contratante SÍ puede y generalmente ES la propietaria estándar en esta estructura.",
        "B) Un fideicomiso establecido por la empresa SÍ puede ser propietario en estructuras más complejas.",
        "D) Un socio designado por acuerdo específico SÍ puede ser propietario en ciertas estructuras de negocio."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural clave entre Executive Bonus y Split Dollar como estrategias de compensación empresarial mediante seguro de vida?",
      o: [
        "Son términos completamente sinónimos sin distinción práctica alguna",
        "En Executive Bonus, la empresa paga la prima como bono y el EJECUTIVO es propietario total; en Split Dollar, el COSTO y los BENEFICIOS de la póliza se dividen específicamente entre la empresa y el empleado según acuerdo",
        "Split Dollar siempre es más barato que Executive Bonus para la empresa en todos los casos",
        "Executive Bonus solo aplica a directores generales; Split Dollar solo a empleados de nivel medio"
      ],
      a: 1,
      trampa: "Ambas son estrategias de beneficio a ejecutivos mediante seguro de vida, pero difieren fundamentalmente en cómo se DIVIDE la propiedad, el costo y los beneficios entre empresa y empleado.",
      correcto: "EXECUTIVE BONUS = la empresa paga la prima como un BONO (generalmente deducible para la empresa, gravable como ingreso para el ejecutivo), y el EJECUTIVO es propietario COMPLETO de la póliza y designa su propio beneficiario. SPLIT DOLLAR = el costo, la propiedad, y/o los beneficios de la póliza se DIVIDEN específicamente entre la empresa y el empleado según un acuerdo contractual particular. [VERIFICADO — distinción estructural estándar entre ambas estrategias]",
      incorrectos: [
        "A) NO son sinónimos — tienen estructuras de propiedad y división de beneficios fundamentalmente distintas.",
        "C) No existe una regla universal de costo — depende de la estructura específica de cada acuerdo particular.",
        "D) Ninguna estrategia está restringida exclusivamente a un nivel jerárquico específico — ambas pueden estructurarse para diferentes niveles de empleados clave."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué tipo de contrato empresarial permite a los socios restantes de un negocio COMPRAR la participación de un socio que queda TOTALMENTE INCAPACITADO, financiando esa compra mediante seguro?",
      o: [
        "Executive Bonus",
        "Compra-Venta por Discapacidad (Disability Buy-Sell / Buy-Out)",
        "Split Dollar",
        "Seguro de Persona Clave"
      ],
      a: 1,
      trampa: "Se confunde con el Buy-Sell estándar (financiado con seguro de VIDA para el caso de muerte) — esta variante específica está diseñada para el escenario de DISCAPACIDAD, no de fallecimiento.",
      correcto: "COMPRA-VENTA POR DISCAPACIDAD (Disability Buy-Sell) = acuerdo contractual, generalmente financiado mediante seguro de discapacidad, que permite a los socios restantes de un negocio COMPRAR la participación de un socio que queda TOTALMENTE INCAPACITADO — es la contraparte del Buy-Sell tradicional (que aplica al fallecimiento) pero para el escenario de discapacidad. [VERIFICADO — estrategia reconocida en planificación de negocios]",
      incorrectos: [
        "A) Executive Bonus es una estrategia de compensación individual a un ejecutivo — no relacionada con compra de participación societaria por discapacidad.",
        "C) Split Dollar divide costos/beneficios de una póliza entre empresa y empleado — no específicamente diseñado para comprar participaciones societarias.",
        "D) Seguro de Persona Clave protege a la empresa de la pérdida económica de un empleado clave — no está estructurado para transferir la propiedad de una participación societaria."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué mecanismo permite a un empleador aplazar el pago de parte de la compensación de un ejecutivo hasta una fecha futura, generalmente el retiro, con posibles ventajas fiscales asociadas?",
      o: [
        "Executive Bonus",
        "Compensación Diferida (Deferred Compensation)",
        "Split Dollar",
        "Seguro de Persona Clave"
      ],
      a: 1,
      trampa: "El nombre del concepto describe literalmente su función, pero se confunde con otras estrategias empresariales de compensación mediante seguros de vida.",
      correcto: "COMPENSACIÓN DIFERIDA (Deferred Compensation) = acuerdo mediante el cual el empleador APLAZA el pago de parte de la compensación de un ejecutivo hasta una fecha futura acordada (generalmente el retiro), frecuentemente respaldado o financiado mediante productos de seguro de vida o anualidades para acumular los fondos necesarios. [VERIFICADO — estrategia reconocida de compensación empresarial]",
      incorrectos: [
        "A) Executive Bonus paga el beneficio de manera inmediata como bono actual — no aplaza el pago a una fecha futura.",
        "C) Split Dollar divide costos y beneficios entre empresa y empleado — no es primariamente un mecanismo de aplazamiento de compensación.",
        "D) Seguro de Persona Clave protege a la empresa, no representa una forma de compensación diferida para el ejecutivo."
      ]
    }
  ]
},

{
  id: "nivel2_004",
  area: "anualidades",
  concepto: "Intercambio 1035 entre Anualidades — Aplicación Práctica",
  variantes: [
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un cliente posee una anualidad diferida FIJA y desea cambiarla por OTRA anualidad diferida FIJA (de diferente compañía) sin retirar el dinero en efectivo. ¿Cuál es el tratamiento más adecuado para esta operación?",
      o: [
        "Rescate",
        "Intercambio conforme a la Sección 1035",
        "Anualización",
        "Liquidación"
      ],
      a: 1,
      trampa: "Aunque el cliente está 'cambiando' de producto, no debe hacerlo mediante rescate (que generaría impuestos inmediatos) sino mediante el mecanismo específico que permite el cambio SIN evento fiscal.",
      correcto: "INTERCAMBIO CONFORME A LA SECCIÓN 1035 = permite transferir directamente el valor de una anualidad a OTRA anualidad elegible SIN crear un evento fiscal inmediato, manteniendo el diferimiento de impuestos sobre las ganancias acumuladas. Es el tratamiento correcto para este cambio sin retiro de efectivo. [VERIFICADO — mecanismo estable del IRC]",
      incorrectos: [
        "A) Rescate implica retirar el efectivo, generando un evento fiscal inmediato sobre las ganancias — no es lo que el cliente desea (cambiar sin retirar).",
        "C) Anualización es convertir el capital acumulado en pagos periódicos — no es un cambio entre dos anualidades diferentes.",
        "D) 'Liquidación' no es el término técnico correcto para este tipo de transferencia entre productos elegibles."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un cliente desea cambiar una anualidad diferida fija por OTRA anualidad diferida fija sin retirar el dinero. ¿Qué mecanismo FISCAL específico puede permitir esa operación, si se cumplen los requisitos legales correspondientes?",
      o: [
        "Conversión",
        "Intercambio conforme a la Sección 1035",
        "Anualización",
        "Rescate"
      ],
      a: 1,
      trampa: "Repetición del concepto con énfasis en el aspecto FISCAL específico para reforzar que el estudiante entiende el mecanismo, no solo memoriza una frase exacta.",
      correcto: "El Intercambio conforme a la Sección 1035 del Código de Rentas Internas es específicamente el mecanismo FISCAL que permite esta transferencia entre productos elegibles (anualidad por anualidad) sin generar un evento gravable inmediato, siempre que se cumplan los requisitos legales de elegibilidad del intercambio. [VERIFICADO — mecanismo estable del IRC]",
      incorrectos: [
        "A) 'Conversión' no es el término técnico fiscal correcto para intercambios entre anualidades bajo el IRC.",
        "C) Anualización es un proceso diferente — convertir capital acumulado en pagos periódicos, no cambiar de un producto a otro.",
        "D) Rescate generaría el evento fiscal que específicamente se busca evitar mediante el mecanismo 1035."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes afirmaciones sobre HIPAA, COBRA y ERISA es la MÁS CORRECTA respecto a sus funciones regulatorias respectivas?",
      o: [
        "HIPAA permite continuar temporalmente el seguro médico después de perder el empleo",
        "COBRA regula principalmente la administración general de los planes patrocinados por el empleador",
        "ERISA establece normas para la administración y protección de muchos planes de beneficios patrocinados por el empleador",
        "Una Cuenta 529 fue diseñada principalmente para ahorrar específicamente para la jubilación"
      ],
      a: 2,
      trampa: "Las tres primeras opciones intercambian deliberadamente las funciones de HIPAA, COBRA y ERISA entre sí — cada una describe la función de OTRA ley, no la propia. Solo identificar la combinación CORRECTA resuelve la trampa.",
      correcto: "ERISA (Employee Retirement Income Security Act) SÍ establece normas generales para la administración, financiamiento y protección de muchos planes de beneficios patrocinados por el empleador (tanto de retiro como de salud), incluyendo requisitos fiduciarios y de divulgación. [VERIFICADO — función fundamental y estable de ERISA]",
      incorrectos: [
        "A) La continuación TEMPORAL del seguro médico tras perder el empleo es la función de COBRA, no de HIPAA — HIPAA se enfoca más en portabilidad sin exclusión indebida por preexistencias y privacidad.",
        "B) La administración GENERAL de planes patrocinados por el empleador es principalmente función de ERISA, no de COBRA — COBRA se enfoca específicamente en la continuación de cobertura de salud.",
        "D) Una Cuenta 529 está diseñada principalmente para AHORRAR PARA EDUCACIÓN, no para la jubilación — se confunde con IRAs o planes 401(k)."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál plan de jubilación está más estrechamente asociado con trabajadores por cuenta propia (self-employed) y propietarios de empresas no incorporadas, sujeto a las reglas específicas de ese tipo de plan?",
      o: [
        "403(b)",
        "Keogh",
        "457",
        "529"
      ],
      a: 1,
      trampa: "Existen varios tipos de planes de retiro con nombres numéricos o técnicos que se confunden entre sí según el tipo de empleador o trabajador al que están dirigidos específicamente.",
      correcto: "PLAN KEOGH = diseñado específicamente para trabajadores por cuenta propia (self-employed) y propietarios de negocios NO INCORPORADOS (sole proprietorships, partnerships), permitiendo contribuciones de retiro significativas sujetas a las reglas específicas de este tipo de plan. [VERIFICADO — tipo de plan reconocido y estable]",
      incorrectos: [
        "A) 403(b) está diseñado para empleados de organizaciones EXENTAS DE IMPUESTOS y ciertas instituciones educativas — no específicamente para autoempleados.",
        "C) 457 está diseñado para empleados de gobiernos ESTATALES/LOCALES y ciertas organizaciones exentas — no específicamente para autoempleados.",
        "D) 529 es una cuenta de ahorro para EDUCACIÓN — no un plan de retiro para autoempleados."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un trabajador independiente con ingresos elevados desea establecer un plan de jubilación patrocinado por su propio negocio no incorporado, buscando maximizar sus contribuciones anuales deducibles. ¿Cuál plan se asocia MÁS ESTRECHAMENTE con esa situación específica?",
      o: [
        "403(b)",
        "457",
        "Keogh",
        "529"
      ],
      a: 2,
      trampa: "La combinación específica de 'trabajador independiente' + 'negocio no incorporado' + 'plan patrocinado por su propio negocio' señala inequívocamente hacia Keogh, descartando las demás opciones que están diseñadas para tipos de empleador completamente distintos.",
      correcto: "PLAN KEOGH sigue siendo la respuesta correcta en este escenario reforzado — está diseñado específicamente para esta combinación exacta de circunstancias: trabajador independiente con negocio no incorporado que busca establecer un plan de retiro patrocinado por sí mismo con contribuciones deducibles significativas. [VERIFICADO — aplicación directa y reforzada del concepto]",
      incorrectos: [
        "A) 403(b) requiere un empleador específico de tipo organización exenta de impuestos o educativa — no aplica a negocios propios no incorporados.",
        "B) 457 requiere un empleador gubernamental o de cierto tipo de organización exenta — no aplica a negocios propios.",
        "D) 529 es específicamente para ahorro educativo — no es un plan de jubilación en absoluto."
      ]
    }
  ]
},

{
  id: "nivel2_005",
  area: "anualidades",
  concepto: "Idoneidad (Suitability) en Anualidades — Aplicación de Escenarios",
  variantes: [
    {
      nivel: 5,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Un productor recomienda una anualidad variable sin considerar la situación financiera, los objetivos ni la tolerancia al riesgo del cliente. ¿Qué principio regulatorio probablemente está incumpliendo?",
      o: [
        "Suitability (Idoneidad)",
        "Indemnización",
        "Subrogación",
        "Coaseguro"
      ],
      a: 0,
      trampa: "El escenario describe exactamente la OMISIÓN del análisis que define la idoneidad — recomendar SIN considerar los factores relevantes del cliente.",
      correcto: "SUITABILITY (Idoneidad) = principio regulatorio que exige al productor evaluar la situación financiera, objetivos, necesidades de liquidez, y tolerancia al riesgo del cliente ANTES de recomendar un producto — específicamente lo que el productor omitió hacer en este escenario. [VERIFICADO — principio regulatorio fundamental]",
      incorrectos: [
        "B) Indemnización se refiere a restaurar económicamente sin generar ganancia — concepto de seguros de propiedad/salud, no relacionado con el proceso de recomendación de anualidades.",
        "C) Subrogación es el derecho de recuperar pagos de un tercero responsable — completamente no relacionado con este escenario.",
        "D) Coaseguro es la división de costos en pólizas de salud — no relacionado con la recomendación de anualidades."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "PRIMERO",
      q: "Una clienta de 79 años necesita acceso probable a una parte importante de su dinero durante los próximos DOS AÑOS para gastos médicos previstos. SIN analizar esa necesidad de liquidez, el productor recomienda directamente una anualidad variable con un período de rescate de DIEZ AÑOS. ¿Cuál fue el PRIMER error del productor en este proceso?",
      o: [
        "Recomendar específicamente una anualidad variable en lugar de otro tipo",
        "No realizar un análisis de idoneidad (Suitability) ANTES de hacer cualquier recomendación",
        "No recomendar Medicare como alternativa",
        "No ofrecer específicamente una anualidad inmediata en su lugar"
      ],
      a: 1,
      trampa: "La pregunta pide específicamente el PRIMER error en la SECUENCIA del proceso — el error de PROCEDIMIENTO (omitir el análisis) precede lógicamente a cualquier error de PRODUCTO específico recomendado.",
      correcto: "El PRIMER error, cronológica y procedimentalmente, fue NO REALIZAR el análisis de idoneidad ANTES de hacer cualquier recomendación. Sin ese análisis previo, cualquier producto recomendado después (sea variable, fijo, u otro) carece de la base apropiada — el error de producto específico es CONSECUENCIA del error de proceso, no el primer error en sí. [VERIFICADO — principio de secuencia procedimental de suitability]",
      incorrectos: [
        "A) El tipo específico de anualidad recomendada es problemático, pero es un error SUBSECUENTE — ocurrió DESPUÉS de la omisión del análisis inicial.",
        "C) Medicare no es necesariamente la alternativa correcta a evaluar — el error fundamental es la ausencia total de análisis de idoneidad, no la falta de una recomendación específica alternativa.",
        "D) Ofrecer una anualidad inmediata específicamente tampoco es el primer error — el problema raíz es la ausencia completa del análisis de las necesidades reales del cliente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Todas las siguientes son razones legítimas por las cuales un reemplazo de póliza puede generar preocupación regulatoria EXCEPTO:",
      o: [
        "Posible pérdida de beneficios acumulados en la póliza original",
        "Nuevos períodos de exclusión o contestabilidad que se reinician en la póliza nueva",
        "Obtención automática y garantizada de mejores beneficios sin ninguna desventaja asociada",
        "Costos adicionales para el asegurado derivados del proceso de reemplazo"
      ],
      a: 2,
      trampa: "Las primeras tres opciones parecen ser 'razones de preocupación', pero la tercera describe un escenario POSITIVO e hipotético (mejores beneficios SIN desventaja) que, de ser cierto, NO generaría preocupación regulatoria — es la excepción lógica a la lista.",
      correcto: "Si un reemplazo verdaderamente resultara en 'obtención automática y garantizada de mejores beneficios sin ninguna desventaja', ESO NO generaría preocupación regulatoria — sería un reemplazo genuinamente beneficioso. La preocupación regulatoria surge precisamente porque los reemplazos frecuentemente NO cumplen esa condición ideal. [VERIFICADO — lógica de la regulación de reemplazos]",
      incorrectos: [
        "A) La pérdida de beneficios acumulados SÍ es una razón legítima de preocupación regulatoria en reemplazos.",
        "B) Los nuevos períodos de exclusión/contestabilidad SÍ son una razón legítima de preocupación regulatoria.",
        "D) Los costos adicionales para el asegurado SÍ son una razón legítima de preocupación regulatoria."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes anualidades expone DIRECTAMENTE al propietario al riesgo de inversión del mercado?",
      o: [
        "Fija",
        "Variable",
        "Inmediata fija",
        "Anualidad de interés garantizado"
      ],
      a: 1,
      trampa: "Tres de las cuatro opciones son variaciones de anualidades FIJAS (que garantizan el capital) — solo la Variable expone directamente al propietario al riesgo de las inversiones subyacentes en subcuentas.",
      correcto: "ANUALIDAD VARIABLE = el valor está invertido en subcuentas similares a fondos mutuos, y el PROPIETARIO asume directamente el riesgo de inversión — el valor puede subir o bajar según el desempeño del mercado. Las demás opciones garantizan el capital de una forma u otra. [VERIFICADO — característica estructural fundamental]",
      incorrectos: [
        "A) Anualidad Fija garantiza una tasa de interés — la aseguradora asume el riesgo de inversión, no el propietario.",
        "C) Inmediata Fija combina la característica de pagos inmediatos con la garantía de tasa fija — el riesgo lo asume la aseguradora.",
        "D) Anualidad de Interés Garantizado, por definición, garantiza el interés — la aseguradora asume el riesgo, no el propietario."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un productor le dice a su cliente que él SIEMPRE debe elegir una anualidad variable porque 'ofrece mayor rendimiento garantizado que cualquier producto fijo'. ¿Qué problema tiene esta afirmación?",
      o: [
        "No hay ningún problema — la afirmación es completamente precisa",
        "La afirmación es engañosa porque las anualidades variables NO ofrecen rendimiento garantizado — el propietario asume el riesgo de que el valor pueda bajar",
        "El problema es que las anualidades fijas tampoco garantizan nada",
        "El problema es únicamente que usó la palabra 'siempre' sin ninguna otra falla en el contenido"
      ],
      a: 1,
      trampa: "La afirmación combina dos errores: usar 'siempre' como absoluto sin justificación Y afirmar falsamente que la variable tiene rendimiento GARANTIZADO, cuando es precisamente lo opuesto — no hay garantía en productos variables.",
      correcto: "La afirmación es sustancialmente ENGAÑOSA porque las anualidades VARIABLES específicamente NO ofrecen rendimiento garantizado — es la naturaleza fundamental de este producto que el propietario asume el riesgo de inversión, pudiendo el valor subir O BAJAR según el mercado. Afirmar lo contrario podría constituir tergiversación. [VERIFICADO — error conceptual fundamental sobre la naturaleza del producto variable]",
      incorrectos: [
        "A) La afirmación SÍ tiene un problema fundamental — es fácticamente incorrecta sobre la naturaleza del producto variable.",
        "C) Las anualidades FIJAS sí garantizan una tasa de interés — ese no es el problema de la afirmación original.",
        "D) El problema no es únicamente el uso de 'siempre' — el contenido sustantivo sobre 'rendimiento garantizado' en variables es factualmente incorrecto, un error más grave que el absolutismo del lenguaje."
      ]
    }
  ]
},

{
  id: "nivel2_006",
  area: "salud",
  concepto: "HMO, Workers' Compensation y Programas de Salud Especiales",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes afirmaciones sobre una HMO (Health Maintenance Organization) es la MÁS correcta?",
      o: [
        "Siempre reembolsa cualquier proveedor fuera de la red sin ninguna restricción",
        "Funciona principalmente mediante una red organizada de proveedores con un enfoque en atención coordinada",
        "Nunca requiere la designación de un médico de atención primaria",
        "Es estructuralmente idéntica a una PPO en todos los aspectos relevantes"
      ],
      a: 1,
      trampa: "Las opciones A, C y D describen específicamente características que son FALSAS sobre las HMO — cada una contradice una característica fundamental real de este tipo de plan.",
      correcto: "Una HMO funciona principalmente mediante una RED ORGANIZADA de proveedores, con énfasis en atención coordinada a través de un médico de atención primaria (PCP) que actúa como gatekeeper. [VERIFICADO — característica fundamental y estable de las HMO]",
      incorrectos: [
        "A) Las HMO generalmente NO reembolsan atención fuera de la red sin restricción — es precisamente lo opuesto a su estructura característica.",
        "C) Las HMO SÍ generalmente requieren un médico de atención primaria (PCP) designado como parte fundamental de su estructura.",
        "D) Las HMO y PPO tienen estructuras significativamente DIFERENTES (referidos, redes, flexibilidad) — no son idénticas."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "¿Cuál de las siguientes situaciones estaría cubierta NORMALMENTE por un programa estatal de Workers' Compensation?",
      o: [
        "Una gripe contraída durante unas vacaciones personales",
        "Una lesión sufrida mientras el empleado desempeñaba sus funciones laborales normales",
        "Una enfermedad preexistente diagnosticada ANTES de ser contratado por el empleador",
        "Una cirugía estética completamente electiva sin relación al trabajo"
      ],
      a: 1,
      trampa: "Workers' Compensation cubre específicamente lesiones/enfermedades que surgen DEL Y EN EL CURSO del empleo — las demás opciones describen situaciones sin conexión causal con el trabajo desempeñado.",
      correcto: "Workers' Compensation cubre normalmente lesiones o enfermedades que surgen DIRECTAMENTE del desempeño de las funciones laborales del empleado, dentro del curso y alcance de su empleo. [VERIFICADO — principio fundamental de Workers' Compensation]",
      incorrectos: [
        "A) Una gripe durante vacaciones personales no tiene conexión causal con el desempeño de funciones laborales.",
        "C) Una condición preexistente al momento de la contratación generalmente no califica como una lesión SURGIDA del empleo actual.",
        "D) Una cirugía estética electiva sin relación laboral no tiene conexión causal con las funciones del trabajo."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de los siguientes programas está dirigido principalmente a proporcionar cobertura médica a niños cuyos ingresos familiares no califican para Medicaid pero tampoco permiten adquirir fácilmente un seguro privado?",
      o: [
        "Medicare Parte B",
        "Florida Healthy Kids",
        "COBRA",
        "Workers' Compensation"
      ],
      a: 1,
      trampa: "El programa específico de Florida para esta población infantil intermedia (ni Medicaid ni seguro privado fácilmente accesible) tiene un nombre propio distinto de los programas federales generales.",
      correcto: "FLORIDA HEALTHY KIDS = programa estatal dirigido específicamente a proporcionar cobertura médica accesible a niños de familias con ingresos que no califican para Medicaid pero que enfrentan dificultades para adquirir seguro privado por su cuenta. [REQUIERE VERIFICACIÓN — confirmar los criterios de elegibilidad exactos vigentes, incluyendo el umbral específico de porcentaje del nivel federal de pobreza, contra la fuente oficial del programa]",
      incorrectos: [
        "A) Medicare Parte B es para personas de 65+ años o con ciertas discapacidades — no dirigido a niños.",
        "C) COBRA es continuación temporal de cobertura de grupo tras pérdida de empleo — no un programa dirigido específicamente a niños de bajos ingresos.",
        "D) Workers' Compensation cubre lesiones laborales de empleados — no relacionado con cobertura médica infantil general."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una persona deja de trabajar para una empresa PEQUEÑA que tenía MENOS empleados que el mínimo requerido para que aplique COBRA federal. ¿Qué programa podría permitirle continuar temporalmente su cobertura de salud en Florida?",
      o: [
        "Medigap",
        "Mini-COBRA (ley estatal de continuación)",
        "Medicare Advantage",
        "HSA"
      ],
      a: 1,
      trampa: "Cuando el empleador es demasiado pequeño para COBRA federal (generalmente menos de 20 empleados), algunos estados tienen su propia versión de continuación de cobertura conocida coloquialmente como 'mini-COBRA'.",
      correcto: "MINI-COBRA = leyes estatales de continuación de cobertura de salud, que en algunos estados (incluyendo posiblemente Florida bajo ciertas condiciones) permiten a empleados de empresas PEQUEÑAS (por debajo del umbral federal de COBRA) continuar temporalmente su cobertura de grupo, de forma similar a COBRA pero a nivel estatal. [REQUIERE VERIFICACIÓN — confirmar la existencia y términos específicos de mini-COBRA en Florida contra la regulación estatal vigente]",
      incorrectos: [
        "A) Medigap es un seguro suplementario específicamente para personas con Medicare — no relacionado con continuación de cobertura de grupo tras pérdida de empleo.",
        "C) Medicare Advantage es para personas elegibles para Medicare (65+ o discapacidad) — no aplica a esta situación de pérdida de empleo general.",
        "D) HSA es una cuenta de ahorro de salud vinculada a un HDHP — no un mecanismo de continuación de cobertura de grupo."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una póliza incluye un rider de Exención de Prima (Waiver of Premium). ¿Cuál es su propósito principal?",
      o: [
        "Aumentar automáticamente el beneficio por fallecimiento cada año",
        "Pagar las primas de la póliza si el asegurado queda TOTALMENTE INCAPACITADO y se cumplen las condiciones específicas del rider",
        "Eliminar completamente el período de gracia de la póliza",
        "Convertir automáticamente la póliza en una anualidad al llegar a cierta edad"
      ],
      a: 1,
      trampa: "El nombre del rider describe literalmente su función, pero se confunde con otros riders que también modifican el pago de primas por diferentes razones.",
      correcto: "WAIVER OF PREMIUM (Exención de Prima) = rider que EXIME al asegurado de pagar las primas si queda TOTALMENTE INCAPACITADO (generalmente tras un período de espera, como 6 meses), manteniendo la póliza completamente vigente sin costo mientras persista la incapacidad calificada. [VERIFICADO — rider estándar y ampliamente reconocido]",
      incorrectos: [
        "A) No aumenta automáticamente el beneficio de muerte — su función es eximir del pago de primas.",
        "C) No elimina el período de gracia — son mecanismos completamente distintos de la póliza.",
        "D) No convierte la póliza en anualidad — mantiene la póliza de vida original vigente sin pago de primas."
      ]
    }
  ]
},

{
  id: "nivel2_007",
  area: "generales",
  concepto: "Naturaleza del Contrato de Seguro — Unilateral, Condicional, Contraprestación",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todas las siguientes se consideran características típicas que describen la naturaleza de un contrato de seguro EXCEPTO:",
      o: [
        "Aleatorio",
        "De adhesión",
        "Bilateral",
        "Unilateral"
      ],
      a: 2,
      trampa: "'Bilateral' y 'Unilateral' son términos OPUESTOS entre sí — el contrato de seguro es específicamente UNILATERAL (solo una parte promete legalmente), NO bilateral.",
      correcto: "El contrato de seguro es específicamente UNILATERAL, no BILATERAL — solo la aseguradora hace una promesa legalmente exigible. 'Bilateral' describe lo OPUESTO de la naturaleza real del contrato de seguro, por lo que es la característica que NO aplica. [VERIFICADO — característica fundamental y estable]",
      incorrectos: [
        "A) Aleatorio SÍ es una característica reconocida del contrato de seguro.",
        "B) De Adhesión SÍ es una característica reconocida del contrato de seguro.",
        "D) Unilateral SÍ es la característica correcta (lo opuesto de Bilateral, que fue incorrectamente listado)."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la contraprestación (consideration) que da SPECÍFICAMENTE la aseguradora en la cláusula de contraprestación de una póliza de vida?",
      o: [
        "El pago puntual de todas las primas futuras",
        "La promesa de pagar una prestación por fallecimiento a un beneficiario designado si ocurre el evento asegurado",
        "La firma del solicitante en la aplicación original",
        "La entrega física de la póliza al asegurado"
      ],
      a: 1,
      trampa: "La contraprestación del ASEGURADO es el pago de primas; la contraprestación de la ASEGURADORA es la PROMESA de pago futuro — se confunden fácilmente porque ambas son parte del mismo intercambio contractual.",
      correcto: "La contraprestación que da la ASEGURADORA es su PROMESA de pagar el beneficio de muerte al beneficiario designado si ocurre el evento cubierto — esta promesa (no una acción física inmediata) es lo que la aseguradora aporta al contrato unilateral. [VERIFICADO — principio contractual fundamental]",
      incorrectos: [
        "A) El pago de primas futuras es la contraprestación que aporta EL ASEGURADO, no la aseguradora.",
        "C) La firma en la solicitud es un acto del solicitante/asegurado, no de la aseguradora.",
        "D) La entrega física de la póliza es un acto administrativo, no la contraprestación sustantiva del contrato."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué los contratos de seguro se conocen frecuentemente como contratos 'CONDICIONALES'?",
      o: [
        "Porque el asegurado puede cancelar el contrato en cualquier momento sin ninguna consecuencia",
        "Porque deben darse ciertas condiciones o actos específicos (como el pago de primas y la ocurrencia del evento asegurado) para que pueda pagarse cualquier reclamación",
        "Porque las primas cambian condicionalmente cada año sin ningún límite",
        "Porque la aseguradora puede rechazar cualquier reclamación sin ninguna justificación"
      ],
      a: 1,
      trampa: "'Condicional' en este contexto técnico específico se refiere a que deben cumplirse condiciones contractuales predeterminadas para que exista obligación de pago — no a la flexibilidad general del contrato ni a la discreción arbitraria de la aseguradora.",
      correcto: "Los contratos de seguro se denominan CONDICIONALES porque la obligación de la aseguradora de pagar CUALQUIER reclamación está sujeta al cumplimiento de ciertas CONDICIONES contractuales específicas — como el pago continuo de primas, la ocurrencia del evento cubierto, y el cumplimiento de las provisiones de notificación y prueba de pérdida. [VERIFICADO — característica fundamental del contrato de seguro]",
      incorrectos: [
        "A) La cancelación libre del asegurado no es lo que define la naturaleza 'condicional' del contrato en este sentido técnico.",
        "C) El cambio de primas no es lo que define esta característica del contrato como 'condicional'.",
        "D) La aseguradora NO puede rechazar arbitrariamente sin justificación — eso sería una práctica desleal, no la definición de contrato condicional."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué se REQUIERE típicamente la firma del solicitante en una solicitud de seguro de vida?",
      o: [
        "Únicamente por requisito burocrático sin ningún propósito legal sustantivo",
        "Para dar fe de que las declaraciones en la solicitud son exactas a lo mejor del conocimiento del solicitante, y que las declaraciones son parte de la consideración para la emisión de la póliza",
        "Solo para permitir que la aseguradora venda los datos del solicitante a terceros",
        "Exclusivamente para cumplir con requisitos notariales obligatorios en todos los casos"
      ],
      a: 1,
      trampa: "La firma tiene un propósito legal sustantivo específico — no es meramente burocrático ni relacionado con notarización obligatoria (que generalmente no se requiere para solicitudes estándar de seguro de vida).",
      correcto: "La firma del solicitante REQUIERE atestiguar que las declaraciones hechas en la solicitud son exactas A LO MEJOR DE SU CONOCIMIENTO, y estas declaraciones se convierten en parte de la CONSIDERACIÓN (junto con el pago de primas) que da el solicitante para la emisión de la póliza — tiene un propósito legal sustantivo directo. [VERIFICADO — principio fundamental del proceso de solicitud]",
      incorrectos: [
        "A) La firma tiene un propósito legal sustantivo real, específicamente relacionado con la veracidad de las declaraciones y la consideración contractual.",
        "C) No existe tal propósito relacionado con venta de datos como razón legal para requerir la firma.",
        "D) Las solicitudes estándar de seguro de vida generalmente NO requieren notarización obligatoria — la firma simple del solicitante es suficiente."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué debe un solicitante de seguro responder con veracidad a TODAS las preguntas de la solicitud?",
      o: [
        "Porque de lo contrario la aseguradora reportará automáticamente al solicitante a las autoridades penales",
        "Porque las declaraciones y representaciones en la solicitud son parte de la CONSIDERACIÓN para la emisión de la póliza, y su exactitud es fundamental para la validez del contrato",
        "Porque es simplemente una tradición sin ninguna consecuencia legal real",
        "Porque las respuestas se venden automáticamente a compañías de mercadeo"
      ],
      a: 1,
      trampa: "Se confunde el propósito LEGAL sustantivo (consideración contractual) con consecuencias exageradas (reporte penal automático) o triviales (mera tradición).",
      correcto: "Las declaraciones y representaciones hechas en la solicitud constituyen parte de la CONSIDERACIÓN que el solicitante aporta al contrato — su exactitud es fundamental porque la aseguradora basa su decisión de aceptar el riesgo y determinar la prima en esa información. Declaraciones falsas pueden generar tergiversación y potencialmente la rescisión del contrato. [VERIFICADO — principio fundamental de la consideración contractual en seguros]",
      incorrectos: [
        "A) No existe un reporte penal automático como consecuencia estándar de responder incorrectamente — las consecuencias son contractuales (rescisión, denegación) no penales automáticas.",
        "C) Tiene consecuencias legales reales y sustantivas — no es meramente tradicional.",
        "D) No existe tal práctica de venta automática de respuestas de solicitud a mercadeo como justificación legal para la veracidad."
      ]
    }
  ]
},

{
  id: "nivel2_008",
  area: "retiro",
  concepto: "Planes de Retiro Especializados — Keogh, 403(b), 457",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Una profesora trabaja para una universidad privada SIN FINES DE LUCRO. ¿Qué plan de jubilación está MÁS ASOCIADO con este tipo específico de empleador?",
      o: [
        "401(k)",
        "403(b)",
        "457",
        "SIMPLE IRA"
      ],
      a: 1,
      trampa: "401(k) es para empleadores del sector privado con fines de lucro generalmente; 457 es para empleadores gubernamentales; 403(b) es específicamente para organizaciones exentas de impuestos y ciertas instituciones educativas — la combinación exacta del escenario.",
      correcto: "PLAN 403(b) está diseñado específicamente para empleados de ORGANIZACIONES EXENTAS DE IMPUESTOS bajo la sección 501(c)(3) del código fiscal, incluyendo universidades privadas sin fines de lucro, escuelas públicas, y ciertas organizaciones religiosas o de caridad. [VERIFICADO — tipo de plan reconocido y estable, asociado específicamente a este tipo de empleador]",
      incorrectos: [
        "A) 401(k) es más comúnmente asociado con empleadores del sector PRIVADO con fines de lucro.",
        "C) 457 está más comúnmente asociado con empleadores GUBERNAMENTALES (estatales/locales), no universidades privadas sin fines de lucro.",
        "D) SIMPLE IRA está diseñado para pequeñas empresas con 100 o menos empleados — no específicamente asociado con instituciones educativas sin fines de lucro."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Reforzando el concepto: una profesora de una universidad privada sin fines de lucro desea participar en el plan de jubilación que normalmente se asocia con este tipo de institución educativa. ¿Cuál plan corresponde MEJOR?",
      o: [
        "401(k)",
        "403(b)",
        "457",
        "Keogh"
      ],
      a: 1,
      trampa: "Repetición del concepto con ligera variación de contexto para confirmar comprensión sólida, no memorización de una sola frase específica.",
      correcto: "403(b) sigue siendo la respuesta correcta — es el plan específicamente diseñado y asociado con empleados de instituciones educativas exentas de impuestos como universidades privadas sin fines de lucro. [VERIFICADO — aplicación reforzada y consistente del concepto]",
      incorrectos: [
        "A) 401(k) permanece asociado principalmente con el sector privado con fines de lucro.",
        "C) 457 permanece asociado principalmente con empleadores gubernamentales.",
        "D) Keogh está diseñado para trabajadores independientes y negocios no incorporados — no para empleados de una institución educativa establecida."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es el número MÁXIMO de empleados (que ganan al menos cierto umbral mínimo anual) que puede tener un empleador para poder establecer un plan de jubilación SIMPLE?",
      o: [
        "25 empleados",
        "50 empleados",
        "100 empleados",
        "No existe límite máximo de empleados"
      ],
      a: 2,
      trampa: "El umbral específico del SIMPLE se confunde fácilmente con otros umbrales regulatorios relacionados (COBRA=20, ACA=50) que aparecen en contextos similares de seguros y beneficios.",
      correcto: "El plan SIMPLE (Savings Incentive Match Plan for Employees) está diseñado para empleadores con un MÁXIMO de 100 empleados que ganan al menos el umbral mínimo anual establecido. Es el umbral estándar reconocido para este tipo específico de plan de retiro. [VERIFICADO — umbral estructural estable del SIMPLE bajo el IRC; REQUIERE VERIFICACIÓN del umbral mínimo exacto de salario anual vigente]",
      incorrectos: [
        "A) 25 empleados no corresponde al umbral máximo establecido específicamente para el plan SIMPLE.",
        "B) 50 empleados corresponde a otros umbrales regulatorios distintos (como el mandato del empleador bajo la ACA) — no al SIMPLE.",
        "D) SÍ existe un límite máximo específico de empleados para poder establecer un plan SIMPLE — no es ilimitado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "En una cuenta individual de jubilación (IRA), ¿cómo se caracterizan típicamente las ganancias generadas por las aportaciones una vez reinvertidas dentro de la cuenta?",
      o: [
        "Están limitadas estrictamente por un monto en dólares específico que nunca puede excederse en ningún año",
        "No están limitadas por el importe en dólares de las ganancias en sí — crecen con impuestos diferidos dentro de la cuenta, sujetas únicamente a los límites de CONTRIBUCIÓN anual establecidos",
        "Deben retirarse obligatoriamente cada año sin excepción alguna",
        "Se gravan inmediatamente como ingreso ordinario en el año en que se generan dentro de la cuenta"
      ],
      a: 1,
      trampa: "Se confunde el límite de CONTRIBUCIÓN anual (que sí existe y es específico) con un límite sobre las GANANCIAS generadas — las ganancias mismas no tienen un tope en dólares, solo las aportaciones nuevas tienen límite anual.",
      correcto: "Las ganancias generadas dentro de un IRA (intereses, dividendos, plusvalías) NO están limitadas por un monto en dólares específico — pueden crecer sin límite dentro de la cuenta con impuestos DIFERIDOS. Lo que SÍ está limitado por el IRS es el monto de NUEVAS CONTRIBUCIONES que puede aportarse cada año. [VERIFICADO — distinción fundamental entre límite de contribución y crecimiento de ganancias]",
      incorrectos: [
        "A) No existe un límite en dólares sobre las GANANCIAS generadas — solo sobre las contribuciones nuevas anuales.",
        "C) Las ganancias no deben retirarse obligatoriamente cada año — permanecen y crecen dentro de la cuenta hasta el retiro (o hasta la edad de RMD en el caso del IRA Tradicional).",
        "D) Las ganancias dentro de un IRA Tradicional NO se gravan inmediatamente al generarse — crecen con impuestos DIFERIDOS hasta el retiro."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál se considera normalmente el PROPIETARIO de una anualidad protegida por impuestos bajo la Sección 403(b)?",
      o: [
        "El empleador que patrocina el plan",
        "El empleado (el individuo participante en el plan)",
        "El gobierno federal como administrador central",
        "La institución financiera que administra los fondos del plan"
      ],
      a: 1,
      trampa: "Aunque el plan es 'patrocinado' por el empleador (una institución educativa o exenta de impuestos), la propiedad efectiva de la anualidad individual dentro del plan recae en el empleado participante.",
      correcto: "El EMPLEADO (participante individual) se considera normalmente el propietario de su propia anualidad 403(b), aunque el plan general sea patrocinado y facilitado por el empleador — es la cuenta individual del empleado dentro de la estructura del plan. [VERIFICADO — principio estándar de propiedad en planes 403(b)]",
      incorrectos: [
        "A) El empleador patrocina y facilita el plan general, pero no es el propietario de las anualidades individuales de cada empleado participante.",
        "C) El gobierno federal regula el marco legal del plan, pero no es el propietario de las anualidades individuales.",
        "D) La institución financiera administra los fondos como custodio, pero no es la propietaria beneficiaria — esa es el empleado."
      ]
    }
  ]
},

{
  id: "nivel2_009",
  area: "florida",
  concepto: "Regulación de Florida — DFS, OIR, Reemplazo, Sustitución de Anualidades",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es la definición de Florida para la 'sustitución' (replacement) de un seguro de vida?",
      o: [
        "Cualquier modificación menor a una póliza existente sin adquirir ninguna póliza nueva",
        "Una transacción en la que se adquiere una nueva póliza Y se rescinde (cancela) una póliza antigua",
        "El simple pago tardío de una prima que se restablece posteriormente",
        "Un cambio de beneficiario dentro de la misma póliza sin ningún otro cambio"
      ],
      a: 1,
      trampa: "La definición formal de 'sustitución' bajo la regulación de Florida requiere específicamente AMBOS elementos: adquisición de póliza nueva Y cancelación de la antigua — no solo uno de los dos.",
      correcto: "SUSTITUCIÓN (Replacement) bajo la ley de Florida se define como una transacción en la que se ADQUIERE una nueva póliza Y se RESCINDE (cancela, deja caducar, o convierte de manera significativa) una póliza EXISTENTE — ambos elementos deben estar presentes para que aplique la regulación de sustitución. [VERIFICADO — definición regulatoria estándar de Florida]",
      incorrectos: [
        "A) Una modificación menor sin adquirir póliza nueva no constituye sustitución bajo esta definición.",
        "C) El simple pago tardío restablecido no involucra la adquisición de una nueva póliza.",
        "D) Un cambio de beneficiario dentro de la MISMA póliza no involucra adquirir una póliza nueva ni cancelar la existente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes situaciones NO se aplica a la regla de sustitución de Florida (es decir, no requiere seguir el procedimiento de sustitución)?",
      o: [
        "Un asegurado cancela su póliza con la Compañía A y adquiere una nueva con la Compañía B",
        "Un asegurado existente adquiere una póliza ADICIONAL de la MISMA aseguradora, sin cancelar ninguna póliza existente",
        "Un asegurado convierte significativamente su póliza de término a una permanente con la misma aseguradora, alterando sustancialmente los términos",
        "Un asegurado dejar caducar intencionalmente su póliza actual para adquirir una nueva similar"
      ],
      a: 1,
      trampa: "La clave de la regla de sustitución es que debe haber CANCELACIÓN o alteración significativa de una póliza EXISTENTE — simplemente ADQUIRIR una póliza adicional SIN cancelar nada no constituye sustitución.",
      correcto: "Adquirir una póliza ADICIONAL de la misma aseguradora, SIN cancelar ni alterar significativamente ninguna póliza existente, NO constituye una sustitución bajo la definición regulatoria — porque falta el elemento esencial de rescindir/cancelar una póliza previa. Es simplemente una venta adicional. [VERIFICADO — aplicación de la definición regulatoria estándar]",
      incorrectos: [
        "A) Esto SÍ constituye sustitución — cumple ambos elementos: nueva póliza + cancelación de la existente (aunque sea diferente compañía).",
        "C) Esto SÍ puede constituir sustitución si la alteración es significativa y afecta sustancialmente los términos de la cobertura existente.",
        "D) Esto SÍ constituye sustitución — dejar caducar intencionalmente para adquirir similar cumple la definición funcional de sustitución."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Según las leyes de sustitución de seguros de vida de Florida, ¿quién debe recibir una Declaración de Comparación y Resumen por escrito cuando la solicite?",
      o: [
        "Únicamente el agente que realiza la venta",
        "El propietario de la póliza",
        "Exclusivamente el Departamento de Servicios Financieros",
        "Solo el beneficiario designado en la nueva póliza"
      ],
      a: 1,
      trampa: "El derecho a recibir esta documentación comparativa pertenece específicamente al CONSUMIDOR (propietario de la póliza) que está tomando la decisión de sustitución — no al agente ni a terceros.",
      correcto: "EL PROPIETARIO DE LA PÓLIZA (policyowner) tiene derecho a recibir una Declaración de Comparación y Resumen por escrito cuando la solicite, como parte de las protecciones regulatorias de Florida en transacciones de sustitución de seguros de vida — esta documentación le permite tomar una decisión informada. [VERIFICADO — protección regulatoria estándar de Florida]",
      incorrectos: [
        "A) El agente es quien debe PROPORCIONAR la documentación, no quien tiene el derecho de recibirla como protección del consumidor.",
        "C) El DFS es el regulador que supervisa el cumplimiento, no necesariamente quien recibe directamente cada documento individual de comparación en cada transacción.",
        "D) El beneficiario designado no es necesariamente quien está tomando la decisión de sustitución — es el propietario de la póliza."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "K es un agente que realizó una venta indebida (unsuitable) de una anualidad a un cliente en Florida. ¿Cuál de las siguientes medidas correctivas le ordenaría PROBABLEMENTE el Departamento de Servicios Financieros a K?",
      o: [
        "Únicamente una felicitación por completar la venta",
        "Pagar una restitución monetaria al cliente afectado",
        "Ninguna consecuencia porque las ventas de anualidades no están reguladas en Florida",
        "Automáticamente perder su ciudadanía estadounidense"
      ],
      a: 1,
      trampa: "Entre las opciones extremas (sin consecuencia vs. consecuencia desproporcionada), la respuesta correcta es la medida correctiva REGULATORIA REALISTA Y PROPORCIONAL que el DFS efectivamente puede ordenar.",
      correcto: "El DFS puede ordenar medidas correctivas que incluyen RESTITUCIÓN MONETaria al cliente afectado por la venta indebida, además de posibles sanciones adicionales a la licencia del agente (suspensión, multas, revocación) según la gravedad de la violación. [VERIFICADO — autoridad correctiva estándar del DFS en casos de venta no idónea]",
      incorrectos: [
        "A) Una felicitación sería contrario al propósito regulatorio — la venta fue indebida, no meritoria.",
        "C) Las ventas de anualidades SÍ están reguladas en Florida, incluyendo requisitos específicos de idoneidad.",
        "D) La pérdida de ciudadanía no es una consecuencia regulatoria posible ni relacionada con violaciones de licencia de seguros — es una consecuencia extrema y no aplicable a este contexto."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "En Florida, al sustituir o intercambiar una anualidad, ¿qué información específica debe el agente informar OBLIGATORIAMENTE al titular de la misma como parte del proceso?",
      o: [
        "Únicamente el nombre completo del agente que realiza la transacción",
        "Las posibles ramificaciones fiscales que podrían resultar de la transacción de sustitución o intercambio",
        "Exclusivamente la dirección física de la nueva aseguradora",
        "El color corporativo oficial de la compañía aseguradora"
      ],
      a: 1,
      trampa: "Entre información administrativa trivial (nombre, dirección, colores) y la información SUSTANTIVAMENTE relevante para la decisión del cliente, la que realmente importa regulatoriamente son las implicaciones FISCALES de la transacción.",
      correcto: "El agente debe informar al titular sobre las POSIBLES RAMIFICACIONES FISCALES que podrían resultar de la transacción de sustitución o intercambio de la anualidad — información sustantiva y material para que el cliente tome una decisión verdaderamente informada sobre las consecuencias económicas reales de la operación. [VERIFICADO — requisito de divulgación estándar en transacciones de anualidades]",
      incorrectos: [
        "A) El nombre del agente es información básica de identificación, no la divulgación sustantiva regulatoriamente exigida sobre la transacción en sí.",
        "C) La dirección de la aseguradora es información administrativa trivial, no la divulgación sustantiva sobre las implicaciones de la transacción.",
        "D) El color corporativo es completamente irrelevante para cualquier requisito regulatorio de divulgación."
      ]
    }
  ]
},

{
  id: "nivel2_010",
  area: "salud",
  concepto: "Enfermedades Específicas — Dread Disease, Cáncer, Indemnización Hospitalaria",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué tipo de póliza cubre específicamente una enfermedad o dolencia particular predeterminada, en lugar de ofrecer cobertura médica general amplia?",
      o: [
        "Póliza de gastos médicos mayores",
        "Póliza de Dread Disease (enfermedad temida/específica)",
        "HMO",
        "PPO"
      ],
      a: 1,
      trampa: "Se confunde con pólizas de cobertura AMPLIA (gastos médicos mayores, HMO, PPO) — Dread Disease es específicamente LIMITADA a una condición predeterminada, no cobertura general.",
      correcto: "PÓLIZA DE DREAD DISEASE = cobertura LIMITADA diseñada específicamente para pagar beneficios ante el diagnóstico de UNA enfermedad o dolencia predeterminada específica (como cáncer, o un conjunto limitado de condiciones graves específicas) — no ofrece cobertura médica general amplia como otros tipos de plan. [VERIFICADO — tipo de póliza reconocido]",
      incorrectos: [
        "A) Gastos Médicos Mayores ofrece cobertura AMPLIA para múltiples condiciones médicas — lo opuesto de la cobertura limitada de Dread Disease.",
        "C) HMO es un tipo de plan de salud administrado con cobertura general amplia a través de una red — no limitado a una enfermedad específica.",
        "D) PPO es un tipo de plan de salud con cobertura general amplia — no limitado a una enfermedad específica."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "P está asegurada bajo un plan básico contra el cáncer. ¿Cuál de las siguientes situaciones estaría típicamente CUBIERTA por este tipo específico de plan?",
      o: [
        "Una fractura de tobillo sufrida en un accidente doméstico sin relación al cáncer",
        "La operación de un tumor maligno diagnosticado",
        "Un resfriado común estacional",
        "Una cirugía dental de rutina programada"
      ],
      a: 1,
      trampa: "Un plan de cáncer específicamente limitado solo cubre eventos relacionados DIRECTAMENTE con el diagnóstico y tratamiento del cáncer — situaciones sin ninguna relación con esa condición específica no calificarían.",
      correcto: "La operación de un tumor MALIGNO diagnosticado está directamente relacionada con el cáncer, calificando para cobertura bajo un plan básico específico contra el cáncer — es exactamente el tipo de evento que este plan limitado está diseñado para cubrir. [VERIFICADO — aplicación directa de la cobertura limitada específica]",
      incorrectos: [
        "A) Una fractura de tobillo sin relación al cáncer no calificaría bajo un plan limitado específicamente a esa condición.",
        "C) Un resfriado común no tiene relación con el cáncer y no calificaría bajo este plan limitado.",
        "D) Una cirugía dental de rutina no tiene relación con el cáncer y no calificaría bajo este plan limitado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes afirmaciones describe MEJOR una póliza de indemnización hospitalaria (Hospital Indemnity)?",
      o: [
        "Reembolsa el 100% exacto de todos los gastos médicos reales incurridos durante la hospitalización",
        "Paga una cantidad FIJA predeterminada por cada día de hospitalización cubierta, independientemente del costo real incurrido",
        "Solo cubre gastos dentales relacionados con la hospitalización",
        "Es idéntica en estructura a una póliza de gastos médicos mayores tradicional"
      ],
      a: 1,
      trampa: "Se confunde con pólizas de reembolso de gastos REALES (como gastos médicos mayores) — la indemnización hospitalaria paga un MONTO FIJO por día, sin relación directa al costo real específico incurrido ese día.",
      correcto: "PÓLIZA DE INDEMNIZACIÓN HOSPITALARIA = paga una cantidad FIJA predeterminada por CADA DÍA de hospitalización cubierta (ej: $200/día), independientemente del costo real específico de los servicios recibidos ese día — es un beneficio de indemnización fija, no un reembolso de gastos reales. [VERIFICADO — estructura estándar de este tipo de póliza]",
      incorrectos: [
        "A) No reembolsa el gasto real exacto — paga un monto fijo predeterminado por día, sin relación directa al costo específico incurrido.",
        "C) No está limitada a gastos dentales — cubre hospitalización general según su diseño de indemnización fija diaria.",
        "D) Es estructuralmente DIFERENTE de gastos médicos mayores — este último reembolsa gastos reales (con deducibles/coaseguro), mientras la indemnización hospitalaria paga un monto fijo por día sin relación al costo real."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cómo se comparan típicamente las prestaciones de una póliza BÁSICA de hospitalización y cirugía con los gastos médicos REALES incurridos por el asegurado?",
      o: [
        "Son siempre exactamente iguales a los gastos reales incurridos en cada caso",
        "Son GENERALMENTE INFERIORES a los gastos reales incurridos — las pólizas básicas ofrecen límites de beneficio más restringidos que las de gastos médicos mayores",
        "Son siempre exactamente el doble de los gastos reales incurridos",
        "No tienen ninguna relación con el concepto de gastos médicos en absoluto"
      ],
      a: 1,
      trampa: "Las pólizas 'básicas' se diseñan específicamente con límites de beneficio más restringidos que las pólizas comprehensivas de gastos médicos mayores — por diseño, generalmente no cubren el 100% del costo real total.",
      correcto: "Las prestaciones de las pólizas BÁSICAS de hospitalización y cirugía son GENERALMENTE INFERIORES a los gastos médicos reales incurridos, ya que estas pólizas tienen límites de beneficio más restringidos por diseño en comparación con las pólizas comprehensivas de gastos médicos mayores. [VERIFICADO — característica estructural reconocida de las pólizas básicas]",
      incorrectos: [
        "A) No son siempre exactamente iguales — las pólizas básicas están diseñadas con límites más restringidos por naturaleza.",
        "C) No existe una relación estándar de 'exactamente el doble' — esto no corresponde a la estructura real de estas pólizas.",
        "D) SÍ tienen relación directa con gastos médicos — es su propósito fundamental, aunque con cobertura más limitada que planes comprehensivos."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes afirmaciones describe MEJOR la cobertura de indemnización por cuidados dentales?",
      o: [
        "Los servicios se reembolsan ANTES de que ocurra el tratamiento, de forma anticipada",
        "Los servicios se reembolsan DESPUÉS de que la aseguradora recibe la factura correspondiente del tratamiento realizado",
        "Nunca requiere ningún tipo de documentación o factura del servicio prestado",
        "Cubre exclusivamente procedimientos estéticos sin ninguna relación con salud dental funcional"
      ],
      a: 1,
      trampa: "El mecanismo de reembolso es específicamente RETROSPECTIVO (después de recibir la factura), no anticipado ni sin documentación.",
      correcto: "En la cobertura de indemnización dental, los servicios se REEMBOLSAN DESPUÉS de que la aseguradora recibe la factura correspondiente al tratamiento ya realizado — es un mecanismo de reembolso posterior a la prestación del servicio y presentación de la documentación correspondiente. [VERIFICADO — mecánica estándar de reembolso de indemnización dental]",
      incorrectos: [
        "A) El reembolso ocurre DESPUÉS del tratamiento y presentación de factura, no de forma anticipada antes del servicio.",
        "C) SÍ requiere documentación (la factura) para procesar el reembolso — no es un proceso sin documentación.",
        "D) La cobertura dental de indemnización generalmente incluye procedimientos funcionales necesarios, no está limitada exclusivamente a procedimientos estéticos."
      ]
    }
  ]
}

]; // fin PK_NIVEL2

if (typeof window !== 'undefined') window.PK_NIVEL2 = PK_NIVEL2;
if (typeof module !== 'undefined') module.exports = { PK_NIVEL2 };
