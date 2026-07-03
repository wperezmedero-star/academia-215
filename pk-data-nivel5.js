// ============================================================
// PEARSON KILLER — pk-data-nivel5.js
// Módulo: Conceptos Finales — Licenciamiento, Doctrinas Legales,
// Cesión de Pólizas, y Mecánica de IRA/401(k)
// (Continuación final del material "Simulador Examen 215" —
// conceptos verificados como no duplicados de nivel1-4)
//
// 7 conceptos × 5 variantes = 35 preguntas
// [VERIFICADO] = principio legal o mecánica estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// ============================================================

const PK_NIVEL5 = [

{
  id: "nivel5_001",
  area: "florida",
  concepto: "Nombre Comercial (DBA) y Registro de Agencias",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un agente de seguros desea operar bajo un nombre comercial DIFERENTE de su nombre legal personal (por ejemplo, 'Seguros García' en lugar de su nombre propio). ¿Qué debe generalmente registrar ante las autoridades correspondientes?",
      o: [
        "Una nueva licencia de agente completamente distinta",
        "Un DBA (Doing Business As) o nombre comercial registrado",
        "Un certificado de incorporación federal",
        "Nada — puede usar cualquier nombre sin ningún registro"
      ],
      a: 1,
      trampa: "Se confunde con la necesidad de una licencia completamente nueva — en realidad, el mecanismo correcto es registrar el nombre comercial (DBA) asociado a la licencia YA EXISTENTE, no obtener una licencia adicional separada.",
      correcto: "DBA (Doing Business As) = registro del nombre comercial bajo el cual el agente opera, diferente de su nombre legal personal. Este registro debe generalmente presentarse ante las autoridades correspondientes (a menudo tanto a nivel estatal/condado como ante el regulador de seguros) para operar legalmente bajo ese nombre comercial. [REQUIERE VERIFICACIÓN — confirmar el proceso exacto de registro de DBA aplicable a agentes de seguros en Florida contra la regulación vigente del DFS]",
      incorrectos: [
        "A) No requiere una licencia de agente completamente nueva — es el MISMO agente licenciado operando bajo un nombre comercial diferente.",
        "C) Un certificado de incorporación federal no es el mecanismo relevante para simplemente operar bajo un nombre comercial diferente como agente individual.",
        "D) SÍ existe un requisito de registro formal — no puede simplemente usar cualquier nombre comercial sin ningún proceso de registro."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué es GENERALMENTE importante que un agente registre formalmente su DBA (nombre comercial) antes de usarlo en su publicidad y materiales de marketing?",
      o: [
        "No tiene ninguna importancia real — es solo una formalidad sin ninguna consecuencia práctica",
        "Para que el regulador y el público puedan identificar correctamente al agente licenciado real detrás del nombre comercial utilizado, manteniendo la transparencia y trazabilidad regulatoria",
        "Únicamente para poder cobrar tarifas más altas por sus servicios legalmente",
        "Solo para calificar automáticamente para descuentos fiscales federales especiales"
      ],
      a: 1,
      trampa: "Se confunde el propósito regulatorio genuino (transparencia y trazabilidad) con beneficios comerciales o fiscales que no son la razón fundamental de este requisito.",
      correcto: "El registro del DBA es importante para que el REGULADOR y el PÚBLICO puedan identificar correctamente qué agente licenciado real opera detrás de un nombre comercial específico — mantiene la transparencia regulatoria y permite la trazabilidad en caso de quejas, investigaciones, o verificación de licencia por parte de consumidores. [VERIFICADO — principio general de transparencia regulatoria]",
      incorrectos: [
        "A) SÍ tiene importancia práctica real relacionada con la transparencia y supervisión regulatoria del agente.",
        "C) El registro del DBA no está relacionado con la capacidad de cobrar tarifas más altas — es un mecanismo de identificación, no de precio.",
        "D) El registro del DBA no otorga automáticamente beneficios fiscales federales especiales — es un requisito de identificación comercial/regulatoria."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué información debe GENERALMENTE incluir un agente al momento de anunciar su DBA en materiales publicitarios dirigidos al público?",
      o: [
        "Únicamente el nombre comercial, sin ninguna referencia al nombre legal ni número de licencia",
        "Generalmente debe mantenerse la trazabilidad hacia el agente/agencia licenciada real, evitando que el DBA oculte o confunda la identidad del profesional responsable",
        "Solo el logotipo de la aseguradora que representa, sin ningún otro dato",
        "Un descargo de responsabilidad indicando que el DBA no tiene ninguna relación con el agente"
      ],
      a: 1,
      trampa: "Se confunde el propósito del DBA (identificación comercial complementaria) con la posibilidad de que oculte completamente la identidad regulatoria real del profesional detrás del nombre.",
      correcto: "Generalmente, el uso del DBA en publicidad debe mantener la TRAZABILIDAD hacia el agente o agencia real y licenciada — el nombre comercial no debe usarse de manera que oculte, confunda, o tergiverse la identidad del profesional responsable ante el público y el regulador. [REQUIERE VERIFICACIÓN — confirmar los requisitos específicos de divulgación en publicidad con DBA contra la regulación de Florida vigente]",
      incorrectos: [
        "A) Usar únicamente el nombre comercial sin ninguna trazabilidad hacia la licencia real podría constituir una práctica engañosa o no conforme con los requisitos de transparencia.",
        "C) Limitarse solo al logotipo de la aseguradora, sin identificación del agente/DBA, no seria el enfoque relevante para este requisito específico sobre el DBA del agente.",
        "D) Un descargo indicando 'ninguna relación' sería contradictorio e incorrecto — el DBA SÍ debe estar relacionado y trazable al agente licenciado real que lo usa."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre operar bajo un DBA individual como agente y establecer una AGENCIA de seguros con estructura corporativa separada?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción regulatoria",
        "El DBA individual es simplemente un nombre comercial adicional para el MISMO agente licenciado; establecer una agencia con estructura corporativa puede implicar requisitos regulatorios ADICIONALES específicos para la entidad de agencia en sí misma",
        "Una agencia corporativa nunca requiere ningún tipo de licenciamiento separado bajo ninguna circunstancia",
        "Un DBA individual siempre requiere más capital inicial que establecer una agencia corporativa"
      ],
      a: 1,
      trampa: "Ambos conceptos involucran 'operar bajo un nombre', pero tienen implicaciones regulatorias potencialmente diferentes según la estructura legal elegida (individual con DBA versus entidad corporativa separada).",
      correcto: "Un DBA individual es simplemente un nombre comercial adicional bajo el cual opera el MISMO agente licenciado existente. Establecer una AGENCIA con estructura corporativa separada (como una corporación o LLC) puede implicar requisitos regulatorios ADICIONALES específicos aplicables a esa entidad de agencia (como licenciamiento de agencia separado en algunas jurisdicciones), distintos de simplemente registrar un nombre comercial. [REQUIERE VERIFICACIÓN — confirmar los requisitos específicos diferenciados entre DBA individual y licenciamiento de agencia corporativa contra la regulación vigente de Florida]",
      incorrectos: [
        "A) NO son sinónimos — tienen implicaciones estructurales y regulatorias potencialmente diferentes.",
        "C) Las agencias corporativas SÍ pueden requerir licenciamiento específico separado en muchas jurisdicciones, incluyendo posiblemente Florida.",
        "D) No existe una regla general sobre requisitos de capital comparados entre estas dos estructuras diferentes."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un agente registra el DBA 'Protección Familiar Seguros' pero continúa operando bajo su licencia individual existente sin ningún cambio en su estatus de licenciamiento personal. ¿Es esto GENERALMENTE apropiado?",
      o: [
        "No — cualquier cambio de nombre comercial requiere obligatoriamente obtener una licencia completamente nueva",
        "Sí — esto es GENERALMENTE apropiado, siempre que el DBA esté correctamente registrado y el agente continúe cumpliendo todos los requisitos de su licencia individual existente",
        "No — los DBA están completamente prohibidos en la industria de seguros de Florida bajo cualquier circunstancia",
        "Solo sería apropiado si el agente cambia también su nombre legal personal de forma permanente"
      ],
      a: 1,
      trampa: "Se confunde la naturaleza complementaria del DBA (nombre comercial adicional) con la necesidad de alterar fundamentalmente el estatus de licenciamiento subyacente del agente.",
      correcto: "Esto es GENERALMENTE apropiado — el DBA es un mecanismo para operar bajo un nombre comercial ADICIONAL, complementario a (no reemplazando) la licencia individual existente del agente. Mientras el DBA esté correctamente registrado y el agente mantenga el cumplimiento de todos los requisitos de su licencia subyacente, esta práctica es generalmente válida y común en la industria. [REQUIERE VERIFICACIÓN — confirmar que no existan requisitos adicionales específicos de Florida que deban cumplirse simultáneamente]",
      incorrectos: [
        "A) No requiere obligatoriamente una licencia completamente nueva — el DBA complementa la licencia existente, no la reemplaza.",
        "C) Los DBA no están prohibidos en la industria — son un mecanismo comercial reconocido y comúnmente utilizado, sujeto a registro apropiado.",
        "D) No requiere cambiar el nombre legal personal — el DBA es precisamente el mecanismo para usar un nombre DIFERENTE al nombre legal sin cambiarlo."
      ]
    }
  ]
},

{
  id: "nivel5_002",
  area: "florida",
  concepto: "Jurisdicción del DFS vs OIR y Estructura Regulatoria de Florida",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es GENERALMENTE la diferencia de jurisdicción entre el Departamento de Servicios Financieros (DFS) y la Oficina de Regulación de Seguros (OIR — Office of Insurance Regulation) de Florida?",
      o: [
        "Son exactamente la misma entidad con nombres diferentes sin ninguna distinción funcional",
        "El DFS generalmente supervisa el licenciamiento y la conducta de AGENTES/PRODUCTORES individuales; la OIR generalmente supervisa la solvencia, las tarifas, y la regulación de las COMPAÑÍAS aseguradoras",
        "La OIR supervisa exclusivamente a los agentes individuales; el DFS supervisa exclusivamente a las compañías",
        "Ninguna de las dos entidades tiene jurisdicción real sobre la industria de seguros en Florida"
      ],
      a: 1,
      trampa: "Ambas entidades regulan la industria de seguros de Florida, pero tienen ENFOQUES DE SUPERVISIÓN diferentes — una hacia los profesionales individuales (agentes), la otra hacia las entidades corporativas (compañías aseguradoras).",
      correcto: "El DFS generalmente tiene jurisdicción sobre el LICENCIAMIENTO y la CONDUCTA de agentes/productores individuales (incluyendo disciplina de licencia, educación continua, y quejas de consumidores contra agentes). La OIR generalmente tiene jurisdicción sobre la SOLVENCIA financiera, las TARIFAS/PRODUCTOS, y la regulación corporativa de las COMPAÑÍAS aseguradoras que operan en Florida. [VERIFICADO — estructura regulatoria diferenciada estándar de Florida; REQUIERE VERIFICACIÓN de los detalles específicos más finos de la división de competencias entre ambas entidades]",
      incorrectos: [
        "A) NO son la misma entidad — tienen estructuras, enfoques y jurisdicciones específicas diferentes dentro del sistema regulatorio de Florida.",
        "C) Esta descripción invierte las jurisdicciones correctas de ambas entidades.",
        "D) Ambas entidades SÍ tienen jurisdicción regulatoria real y activa sobre diferentes aspectos de la industria de seguros en Florida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un consumidor tiene una queja específica sobre la CONDUCTA PERSONAL de un agente individual (por ejemplo, alegando que el agente le hizo declaraciones falsas). ¿Ante cuál entidad regulatoria de Florida sería GENERALMENTE más apropiado presentar esta queja específica?",
      o: [
        "Oficina de Regulación de Seguros (OIR)",
        "Departamento de Servicios Financieros (DFS)",
        "Ninguna de las dos entidades tiene jurisdicción sobre este tipo específico de queja",
        "Únicamente un tribunal federal, sin ningún proceso administrativo estatal disponible"
      ],
      a: 1,
      trampa: "La queja es específicamente sobre la CONDUCTA de un AGENTE INDIVIDUAL — esto corresponde a la jurisdicción del DFS, no de la OIR (que se enfoca en las compañías aseguradoras corporativas).",
      correcto: "El DFS sería generalmente la entidad más apropiada para esta queja específica, dado que su jurisdicción cubre la CONDUCTA y el LICENCIAMIENTO de agentes individuales — una queja sobre declaraciones falsas de un agente específico caería dentro de su ámbito de supervisión disciplinaria. [VERIFICADO — aplicación de la estructura jurisdiccional diferenciada]",
      incorrectos: [
        "A) La OIR generalmente se enfoca en la regulación de las compañías aseguradoras (solvencia, tarifas, productos) — no en la conducta individual de agentes específicos.",
        "C) SÍ existe jurisdicción regulatoria específica para este tipo de queja — el DFS es la entidad apropiada.",
        "D) SÍ existen procesos administrativos estatales disponibles antes de considerar vías judiciales — el DFS ofrece un canal administrativo apropiado."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Bajo cuál entidad regulatoria de Florida se procesaría GENERALMENTE la revisión de si una compañía aseguradora tiene reservas financieras SUFICIENTES para cumplir con sus obligaciones futuras (solvencia)?",
      o: [
        "Departamento de Servicios Financieros (DFS)",
        "Oficina de Regulación de Seguros (OIR)",
        "Departamento de Salud de Florida",
        "Departamento de Educación de Florida"
      ],
      a: 1,
      trampa: "La solvencia financiera de las COMPAÑÍAS es específicamente jurisdicción de la OIR, no del DFS (que se enfoca más en agentes individuales), ni de entidades completamente no relacionadas con seguros.",
      correcto: "La OIR (Office of Insurance Regulation) es generalmente la entidad responsable de revisar la SOLVENCIA FINANCIERA de las compañías aseguradoras — asegurando que mantengan reservas adecuadas para cumplir con sus obligaciones futuras hacia los asegurados. [VERIFICADO — jurisdicción central de la OIR sobre solvencia corporativa]",
      incorrectos: [
        "A) El DFS se enfoca más en licenciamiento y conducta de agentes individuales — la solvencia corporativa es más específicamente jurisdicción de la OIR.",
        "C) El Departamento de Salud no tiene jurisdicción sobre la solvencia financiera de aseguradoras.",
        "D) El Departamento de Educación no tiene ninguna relación con la regulación de solvencia de aseguradoras."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE la relación estructural entre el DFS y la OIR dentro del marco regulatorio de seguros de Florida?",
      o: [
        "Son completamente independientes sin ninguna coordinación o relación estructural entre ellas",
        "Ambas entidades forman parte del ecosistema regulatorio de seguros de Florida, con roles complementarios y potencialmente coordinados dentro de la estructura general de supervisión estatal, aunque con áreas de enfoque específicas diferenciadas",
        "La OIR es simplemente un departamento subordinado dentro del DFS sin ninguna autoridad independiente",
        "El DFS fue completamente eliminado y reemplazado por la OIR en años recientes"
      ],
      a: 1,
      trampa: "Aunque tienen áreas de enfoque diferenciadas (agentes vs. compañías), ambas entidades operan dentro del mismo ecosistema regulatorio general de seguros de Florida, con roles que pueden ser complementarios en la supervisión integral de la industria.",
      correcto: "Ambas entidades forman parte del marco regulatorio general de seguros de Florida, cada una con roles complementarios y áreas de enfoque específicas diferenciadas (DFS más hacia agentes/conducta; OIR más hacia compañías/solvencia) dentro de la estructura de supervisión estatal integral de la industria aseguradora. [REQUIERE VERIFICACIÓN — confirmar los detalles exactos de la relación estructural y de coordinación actual entre ambas entidades contra la organización gubernamental vigente de Florida]",
      incorrectos: [
        "A) No son completamente independientes sin ninguna relación — operan dentro del mismo marco regulatorio general del estado.",
        "C) La OIR generalmente opera con cierta autonomía funcional específica en su área de competencia, no como un simple departamento subordinado sin ninguna distinción.",
        "D) El DFS sigue existiendo y siendo funcional — no ha sido eliminado ni reemplazado completamente por la OIR."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál entidad de Florida sería GENERALMENTE responsable de aprobar o rechazar las TARIFAS (rate filings) que una aseguradora de salud propone cobrar en el estado?",
      o: [
        "Departamento de Servicios Financieros (DFS)",
        "Oficina de Regulación de Seguros (OIR)",
        "Cada condado individual establece sus propias tarifas de forma independiente",
        "El gobierno federal exclusivamente, sin ninguna participación estatal"
      ],
      a: 1,
      trampa: "La aprobación de tarifas/productos es función específica de la OIR (regulación de compañías), no del DFS (más enfocado en agentes) ni de entidades locales o federales sin esta jurisdicción específica estatal.",
      correcto: "La OIR es generalmente la entidad responsable de revisar y aprobar (o rechazar) las tarifas que las aseguradoras proponen cobrar en Florida — es parte de su función central de regulación corporativa de productos y precios de seguros. [VERIFICADO — jurisdicción central de la OIR sobre aprobación de tarifas]",
      incorrectos: [
        "A) El DFS no es la entidad principal responsable de la aprobación de tarifas de productos — su enfoque está más en agentes individuales.",
        "C) Los condados individuales no establecen tarifas de seguros de forma independiente en este contexto regulatorio estatal.",
        "D) Aunque existe regulación federal en ciertos aspectos de seguros de salud, la aprobación específica de tarifas estatales involucra a la entidad reguladora estatal correspondiente."
      ]
    }
  ]
},

{
  id: "nivel5_003",
  area: "generales",
  concepto: "Doctrina de Máxima Buena Fe (Utmost Good Faith)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué establece GENERALMENTE la doctrina de 'Utmost Good Faith' (Máxima Buena Fe) en el contexto de los contratos de seguro?",
      o: [
        "Que solo la aseguradora tiene obligación de actuar honestamente; el asegurado no tiene ninguna obligación equivalente",
        "Que AMBAS partes del contrato de seguro (asegurado y aseguradora) tienen la obligación de actuar con un nivel de honestidad y divulgación MÁS ALTO que el estándar general aplicable a contratos comerciales comunes",
        "Que los contratos de seguro no requieren ninguna obligación de honestidad especial más allá de cualquier contrato comercial ordinario",
        "Que únicamente el asegurado tiene esta obligación especial; la aseguradora está exenta de cualquier estándar elevado"
      ],
      a: 1,
      trampa: "Se confunde con la idea errónea de que esta doctrina de honestidad elevada aplica unilateralmente a solo una de las partes — en realidad, es una obligación BIDIRECCIONAL que eleva el estándar para AMBAS partes del contrato.",
      correcto: "UTMOST GOOD FAITH (Máxima Buena Fe) = doctrina que establece que AMBAS partes del contrato de seguro tienen la obligación de actuar con un nivel de honestidad y divulgación de información MÁS ELEVADO que el estándar general aplicable a contratos comerciales ordinarios — reconociendo la asimetría de información inherente en las transacciones de seguro (el asegurado conoce mejor su propio riesgo; la aseguradora redacta los términos complejos del contrato). [VERIFICADO — principio legal fundamental y estable del derecho de seguros]",
      incorrectos: [
        "A) La obligación es BIDIRECCIONAL — ambas partes, no solo la aseguradora, tienen este estándar elevado de honestidad.",
        "C) Los contratos de seguro SÍ requieren un estándar de honestidad MÁS ELEVADO que los contratos comerciales ordinarios — esa es precisamente la esencia de esta doctrina especial.",
        "D) La obligación aplica a AMBAS partes — no está limitada exclusivamente al asegurado; la aseguradora también está sujeta a este estándar elevado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Por qué se considera que los contratos de seguro requieren un estándar de 'Utmost Good Faith' MÁS ELEVADO que los contratos comerciales generales?",
      o: [
        "No existe ninguna razón particular — es simplemente una tradición histórica sin ningún fundamento lógico real",
        "Debido a la ASIMETRÍA DE INFORMACIÓN inherente: el solicitante generalmente conoce mejor su propio riesgo personal/de salud; la aseguradora generalmente controla y redacta los términos complejos del contrato — ambas asimetrías requieren honestidad elevada mutua para que el sistema funcione equitativamente",
        "Porque los seguros son productos más caros que otros bienes comerciales típicos",
        "Porque el gobierno federal exige este estándar específicamente para aumentar sus ingresos fiscales"
      ],
      a: 1,
      trampa: "El fundamento lógico específico se relaciona con las ASIMETRÍAS DE INFORMACIÓN particulares presentes en las transacciones de seguro — no es meramente tradición sin fundamento, ni está relacionado con el precio del producto o motivos fiscales.",
      correcto: "El fundamento es la ASIMETRÍA DE INFORMACIÓN inherente en ambas direcciones: el SOLICITANTE tiene información superior sobre su propio riesgo (salud, hábitos, circunstancias personales) que la aseguradora no puede verificar completamente; la ASEGURADORA tiene control sobre la redacción de los términos contractuales complejos que el asegurado promedio no puede negociar ni comprender completamente. Este estándar elevado busca compensar ambas asimetrías para un sistema más equitativo. [VERIFICADO — fundamento lógico y legal fundamental de esta doctrina]",
      incorrectos: [
        "A) SÍ existe un fundamento lógico claro y sustantivo relacionado con las asimetrías de información inherentes.",
        "C) El precio del producto no es el fundamento de esta doctrina — se relaciona específicamente con la naturaleza informativa de la transacción.",
        "D) No tiene relación con objetivos fiscales gubernamentales — es un principio del derecho contractual de seguros orientado a la equidad de la transacción."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes situaciones ilustra MEJOR una violación potencial de la doctrina de Utmost Good Faith por parte del SOLICITANTE?",
      o: [
        "El solicitante responde con precisión y honestidad completa a todas las preguntas de salud en la solicitud",
        "El solicitante OMITE deliberadamente información médica relevante que sabe que afectaría la decisión de suscripción de la aseguradora",
        "El solicitante hace preguntas al agente sobre las características específicas del producto antes de decidir",
        "El solicitante solicita una copia de la póliza completa para revisarla cuidadosamente antes de firmar"
      ],
      a: 1,
      trampa: "Las opciones describen comportamientos apropiados y esperados EXCEPTO una — la omisión DELIBERADA de información relevante conocida es precisamente el tipo de violación que esta doctrina busca prevenir por parte del solicitante.",
      correcto: "OMITIR DELIBERADAMENTE información médica relevante que el solicitante sabe que afectaría la decisión de suscripción constituye una violación clásica de Utmost Good Faith por parte del solicitante — viola su obligación de divulgación honesta y completa, potencialmente constituyendo tergiversación material. [VERIFICADO — aplicación directa del principio a un escenario de violación]",
      incorrectos: [
        "A) Responder con precisión y honestidad es precisamente el CUMPLIMIENTO de esta doctrina, no una violación.",
        "C) Hacer preguntas informativas al agente es un comportamiento apropiado y constructivo, no relacionado con ninguna violación.",
        "D) Solicitar revisar la póliza completa antes de firmar es una práctica prudente y apropiada, no una violación de esta doctrina."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes situaciones ilustra MEJOR una violación potencial de la doctrina de Utmost Good Faith por parte de la ASEGURADORA?",
      o: [
        "La aseguradora evalúa cuidadosamente la solicitud según sus criterios de suscripción establecidos",
        "La aseguradora oculta deliberadamente exclusiones importantes de la póliza que sabe que el solicitante consideraría materiales para su decisión de compra",
        "La aseguradora solicita documentación médica adicional razonable para evaluar el riesgo",
        "La aseguradora explica claramente los términos y condiciones del producto al solicitante"
      ],
      a: 1,
      trampa: "De forma paralela al ejemplo del solicitante, la aseguradora también puede violar esta doctrina bidireccional — específicamente ocultando información material que el consumidor razonablemente consideraría relevante para su decisión.",
      correcto: "OCULTAR DELIBERADAMENTE exclusiones importantes que la aseguradora sabe que el solicitante consideraría materiales para su decisión constituye una violación de Utmost Good Faith por parte de la ASEGURADORA — viola su obligación recíproca de divulgación honesta hacia el consumidor. [VERIFICADO — aplicación directa del principio bidireccional a un escenario de violación por parte de la aseguradora]",
      incorrectos: [
        "A) Evaluar cuidadosamente según criterios establecidos es una práctica legítima de suscripción, no una violación.",
        "C) Solicitar documentación adicional razonable es parte del proceso legítimo de evaluación de riesgo, no una violación.",
        "D) Explicar claramente los términos es precisamente el CUMPLIMIENTO de esta doctrina por parte de la aseguradora, no una violación."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cómo se relaciona la doctrina de Utmost Good Faith con el principio de que el contrato de seguro es 'de adhesión'?",
      o: [
        "Son principios completamente contradictorios que no pueden coexistir en el mismo sistema legal",
        "Ambos principios trabajan de forma COMPLEMENTARIA: el contrato de adhesión reconoce que la aseguradora controla la redacción de términos (favoreciendo al asegurado en ambigüedades); Utmost Good Faith exige honestidad elevada de ambas partes precisamente por esa asimetría de poder y conocimiento en la relación contractual",
        "Utmost Good Faith reemplazó completamente al principio de contrato de adhesión en el derecho moderno",
        "No tienen absolutamente ninguna relación conceptual entre sí dentro del derecho de seguros"
      ],
      a: 1,
      trampa: "Ambos principios abordan la MISMA asimetría fundamental de poder/información entre asegurado y aseguradora, pero desde ángulos complementarios: uno regula la INTERPRETACIÓN de ambigüedades, el otro regula el ESTÁNDAR DE CONDUCTA esperado de ambas partes.",
      correcto: "Ambos principios son COMPLEMENTARIOS y abordan la misma asimetría fundamental subyacente en los contratos de seguro: el principio de ADHESIÓN reconoce que la aseguradora controla la redacción (por lo que las ambigüedades favorecen al asegurado en su interpretación); UTMOST GOOD FAITH exige un estándar de honestidad elevado precisamente por esta asimetría de poder y conocimiento, aplicándose a AMBAS partes de la relación contractual. [VERIFICADO — relación conceptual fundamental entre ambos principios del derecho de seguros]",
      incorrectos: [
        "A) NO son contradictorios — ambos coexisten y se refuerzan mutuamente dentro del marco legal de seguros.",
        "C) Utmost Good Faith no reemplazó al principio de adhesión — ambos siguen siendo principios activos y coexistentes del derecho de seguros.",
        "D) SÍ tienen una relación conceptual clara — ambos abordan la asimetría fundamental de poder e información en la relación contractual de seguros."
      ]
    }
  ]
},

{
  id: "nivel5_004",
  area: "vida",
  concepto: "Cesión de Póliza (Assignment) — Absoluta y Colateral",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es GENERALMENTE una cesión ABSOLUTA (Absolute Assignment) de una póliza de seguro de vida?",
      o: [
        "Una transferencia TEMPORAL de derechos que revierte automáticamente al propietario original después de cierto tiempo",
        "Una transferencia COMPLETA y PERMANENTE de TODOS los derechos de propiedad de la póliza a un nuevo propietario (cesionario), incluyendo el derecho a designar beneficiario, tomar préstamos, y recibir el valor de rescate",
        "Una simple notificación informativa sin ningún efecto legal real sobre la propiedad",
        "Un mecanismo que solo puede usarse para pólizas de término temporal, nunca para pólizas permanentes"
      ],
      a: 1,
      trampa: "Se confunde con una cesión COLATERAL (que es limitada y con propósito específico) — la Cesión ABSOLUTA es específicamente COMPLETA y PERMANENTE, transfiriendo TODOS los derechos de propiedad al nuevo titular.",
      correcto: "CESIÓN ABSOLUTA (Absolute Assignment) = transferencia COMPLETA y PERMANENTE de TODOS los derechos de propiedad de la póliza al cesionario (nuevo propietario) — el cedente original renuncia completamente a todos sus derechos, incluyendo el control sobre beneficiarios, préstamos, y valor de rescate, que pasan íntegramente al nuevo propietario. [VERIFICADO — mecanismo estándar y fundamental de transferencia de propiedad de póliza]",
      incorrectos: [
        "A) No es temporal ni reversible automáticamente — es una transferencia PERMANENTE de todos los derechos.",
        "C) SÍ tiene un efecto legal real y sustantivo — transfiere completamente la propiedad de la póliza, no es meramente informativa.",
        "D) Puede usarse tanto en pólizas de término como en pólizas permanentes — no está limitada exclusivamente a un tipo de producto."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia CLAVE entre una Cesión Absoluta y una Cesión COLATERAL (Collateral Assignment) de una póliza de seguro de vida?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción práctica",
        "Cesión Absoluta transfiere TODOS los derechos de forma permanente; Cesión Colateral transfiere derechos LIMITADOS y TEMPORALES, generalmente como GARANTÍA de un préstamo, con los derechos completos retornando al propietario original una vez satisfecha la obligación garantizada",
        "Cesión Colateral es siempre permanente; Cesión Absoluta es siempre temporal",
        "Ambas requieren obligatoriamente la disolución completa de la póliza original"
      ],
      a: 1,
      trampa: "Ambas involucran 'ceder' algún derecho sobre la póliza, pero difieren fundamentalmente en el ALCANCE (todos los derechos vs. derechos limitados) y la DURACIÓN (permanente vs. temporal hasta satisfacer una obligación específica).",
      correcto: "CESIÓN ABSOLUTA = transferencia COMPLETA y PERMANENTE de todos los derechos de propiedad. CESIÓN COLATERAL = transferencia LIMITADA y generalmente TEMPORAL de ciertos derechos específicos (típicamente el derecho a recibir el beneficio hasta el monto de una deuda), usada comúnmente como GARANTÍA para un préstamo — una vez que la deuda garantizada se satisface, los derechos completos retornan automáticamente al propietario/beneficiario original. [VERIFICADO — distinción fundamental y estándar entre ambos tipos de cesión]",
      incorrectos: [
        "A) NO son sinónimos — difieren fundamentalmente en alcance y duración de los derechos transferidos.",
        "C) Esta descripción invierte las características correctas de ambos tipos de cesión.",
        "D) Ninguna de las dos formas de cesión requiere obligatoriamente la disolución de la póliza original — ambas mantienen la póliza vigente, solo transfieren ciertos derechos sobre ella."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "M solicita un préstamo bancario y usa su póliza de seguro de vida existente como GARANTÍA del préstamo, mediante una cesión formal a favor del banco. Si M fallece antes de pagar completamente el préstamo, ¿qué sucede GENERALMENTE con el beneficio de muerte de la póliza?",
      o: [
        "El banco recibe automáticamente el 100% del beneficio de muerte completo, sin importar el saldo pendiente de la deuda",
        "El banco generalmente recibe del beneficio de muerte el monto EQUIVALENTE al saldo PENDIENTE de la deuda garantizada; el REMANENTE del beneficio se paga al beneficiario originalmente designado por M",
        "El beneficio de muerte se pierde completamente y no se paga a ninguna parte",
        "El banco no tiene ningún derecho sobre el beneficio de muerte bajo ninguna circunstancia a pesar de la cesión formal"
      ],
      a: 1,
      trampa: "Este escenario describe específicamente una CESIÓN COLATERAL (garantía de préstamo) — el mecanismo limita el derecho del banco específicamente al MONTO DE LA DEUDA pendiente, no al beneficio completo, con el remanente yendo al beneficiario original.",
      correcto: "Bajo una CESIÓN COLATERAL para garantizar un préstamo, el banco (cesionario) generalmente recibe del beneficio de muerte SOLO el monto EQUIVALENTE al saldo pendiente de la deuda garantizada al momento del fallecimiento. El REMANENTE del beneficio de muerte (si el beneficio total excede la deuda pendiente) se paga al beneficiario ORIGINALMENTE designado por M, no al banco. [VERIFICADO — mecánica estándar de la cesión colateral como garantía de préstamo]",
      incorrectos: [
        "A) El banco NO recibe automáticamente el 100% completo — su derecho está limitado específicamente al monto de la deuda pendiente bajo una cesión colateral.",
        "C) El beneficio NO se pierde — se distribuye entre el banco (hasta el monto de la deuda) y el beneficiario original (el remanente).",
        "D) El banco SÍ tiene un derecho real y ejecutable sobre parte del beneficio, específicamente hasta el monto de la deuda, en virtud de la cesión colateral formal realizada."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué sucede GENERALMENTE con el derecho de un beneficiario REVOCABLE cuando el propietario de la póliza realiza una CESIÓN ABSOLUTA a un tercero?",
      o: [
        "El derecho del beneficiario revocable permanece completamente intacto sin ningún cambio, independientemente de la cesión",
        "El nuevo propietario (cesionario) generalmente adquiere el derecho de cambiar la designación del beneficiario, dado que ese es uno de los derechos de propiedad completos transferidos mediante la cesión absoluta",
        "La cesión absoluta automáticamente convierte al beneficiario revocable en irrevocable de forma permanente",
        "La cesión absoluta cancela automáticamente toda designación de beneficiario existente sin ninguna sustitución"
      ],
      a: 1,
      trampa: "Dado que la Cesión Absoluta transfiere TODOS los derechos de propiedad (incluyendo el derecho a cambiar beneficiarios revocables), el nuevo propietario/cesionario generalmente hereda ese control específico que antes tenía el propietario original.",
      correcto: "Dado que la Cesión Absoluta transfiere TODOS los derechos de propiedad, el nuevo propietario (cesionario) generalmente ADQUIERE el derecho de cambiar la designación de un beneficiario REVOCABLE (ya que ese control era precisamente uno de los derechos del propietario original que ahora se transfirió completamente). Un beneficiario IRREVOCABLE, en contraste, generalmente mantendría protección incluso ante una cesión, dado que su consentimiento sería necesario para muchas acciones sobre la póliza. [VERIFICADO — aplicación lógica de la transferencia completa de derechos de propiedad bajo cesión absoluta]",
      incorrectos: [
        "A) El derecho del propietario ORIGINAL sobre el beneficiario revocable SÍ se transfiere al nuevo propietario — no permanece intacto en manos del cedente original.",
        "C) La cesión absoluta no convierte automáticamente la naturaleza revocable/irrevocable del beneficiario — simplemente transfiere QUIÉN tiene el control de propietario sobre esa designación.",
        "D) La cesión absoluta no cancela automáticamente la designación existente — transfiere el CONTROL sobre esa designación al nuevo propietario, quien podría entonces optar por mantenerla o cambiarla."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Por qué GENERALMENTE se requiere que la cesión de una póliza de seguro de vida sea NOTIFICADA formalmente a la aseguradora?",
      o: [
        "No existe ningún requisito de notificación — las cesiones son efectivas automáticamente sin ninguna comunicación a la aseguradora",
        "Para que la aseguradora tenga registro actualizado de quién tiene derecho a ejercer los derechos de propiedad y/o recibir beneficios bajo la póliza, evitando confusión o pagos incorrectos al momento de un reclamo",
        "Únicamente para que la aseguradora pueda cobrar una tarifa administrativa adicional sin ningún otro propósito sustantivo",
        "Solo se requiere notificación si la cesión es específicamente de tipo colateral, nunca si es absoluta"
      ],
      a: 1,
      trampa: "Se confunde la naturaleza contractual privada de la cesión (entre cedente y cesionario) con la necesidad práctica de mantener a la ASEGURADORA informada para efectos administrativos y de pago correcto de beneficios.",
      correcto: "La notificación formal a la aseguradora es generalmente importante para que esta mantenga un registro ACTUALIZADO y PRECISO de quién tiene actualmente derecho a ejercer los derechos de propiedad de la póliza y/o recibir beneficios — esto evita confusión, disputas, o pagos incorrectos al momento de procesar un reclamo o solicitud relacionada con la póliza. [VERIFICADO — propósito administrativo fundamental de la notificación de cesión]",
      incorrectos: [
        "A) SÍ existe generalmente un requisito o práctica estándar de notificación — no es automáticamente efectiva sin ninguna comunicación a la aseguradora.",
        "C) Aunque puede haber tarifas administrativas asociadas en algunos casos, el propósito sustantivo principal es mantener registros precisos, no simplemente generar ingresos por tarifas.",
        "D) La notificación es generalmente relevante tanto para cesiones absolutas como colaterales — ambos tipos requieren que la aseguradora esté informada apropiadamente."
      ]
    }
  ]
},

{
  id: "nivel5_005",
  area: "retiro",
  concepto: "IRA — Rollover vs Transfer y Mecánica de Transferencias",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia CLAVE entre un 'Rollover' de IRA y una 'Transferencia' (Trustee-to-Trustee Transfer) directa entre cuentas de retiro?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción práctica o fiscal",
        "En un ROLLOVER, los fondos generalmente pasan primero a manos del titular de la cuenta (quien tiene un plazo limitado para redepositarlos) antes de llegar a la nueva cuenta; en una TRANSFERENCIA directa, los fondos se mueven directamente entre las instituciones custodias SIN pasar nunca por manos del titular",
        "Una transferencia siempre está sujeta a impuestos inmediatos; un rollover nunca lo está bajo ninguna circunstancia",
        "El rollover solo puede usarse una vez en la vida del titular; la transferencia no tiene ningún límite"
      ],
      a: 1,
      trampa: "Ambos mecanismos mueven fondos de retiro entre cuentas, pero la diferencia CLAVE es si los fondos PASAN POR LAS MANOS del titular (rollover, con riesgo de plazo) o van DIRECTAMENTE entre custodios (transferencia, sin ese riesgo).",
      correcto: "ROLLOVER = los fondos generalmente se distribuyen primero AL TITULAR (quien los recibe directamente), quien luego tiene un plazo limitado (generalmente 60 días) para redepositarlos en la nueva cuenta calificada para evitar consecuencias fiscales. TRANSFERENCIA (Trustee-to-Trustee) = los fondos se mueven DIRECTAMENTE entre las instituciones custodias, sin que el titular los reciba en ningún momento — generalmente considerado más seguro al eliminar el riesgo de perder el plazo. [VERIFICADO — distinción fundamental y estable entre ambos mecanismos]",
      incorrectos: [
        "A) NO son sinónimos — tienen mecánicas y niveles de riesgo procedimental diferentes, aunque ambos puedan lograr el mismo resultado final de mover fondos entre cuentas calificadas.",
        "C) Un rollover correctamente ejecutado dentro del plazo requerido tampoco está sujeto a impuestos inmediatos — la clave es cumplir el plazo, no que la transferencia esté 'siempre' gravada.",
        "D) No existe tal límite de una sola vez en la vida para el rollover en general — existen ciertas limitaciones de frecuencia específicas (como una vez por período de 12 meses para rollovers IRA-a-IRA en algunos casos), pero no un límite de una sola vez en toda la vida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En un Rollover de IRA donde los fondos son distribuidos directamente al titular, ¿dentro de cuántos DÍAS debe generalmente redepositar esos fondos en una cuenta de retiro calificada para evitar consecuencias fiscales adversas?",
      o: [
        "30 días",
        "60 días",
        "90 días",
        "120 días"
      ],
      a: 1,
      trampa: "El plazo específico de 60 días es un número frecuentemente evaluado y fácil de confundir con otros plazos regulatorios similares de días redondos.",
      correcto: "El titular generalmente tiene 60 DÍAS desde que recibe la distribución para redepositar los fondos completos en una cuenta de retiro calificada, con el fin de que la transacción se trate como un rollover válido y evite ser tratada como una distribución gravable (y potencialmente sujeta a penalidad si es antes de los 59½ años). [VERIFICADO — plazo estándar y estable del IRC para rollovers]",
      incorrectos: [
        "A) 30 días es insuficiente respecto al plazo estándar reconocido de 60 días.",
        "C) 90 días excede el plazo estándar reconocido para completar un rollover válido.",
        "D) 120 días excede significativamente el plazo estándar reconocido."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Rosa recibe una distribución de $50,000 de su IRA Tradicional con la intención de hacer un rollover a un nuevo IRA. Debido a un error administrativo, redeposita los fondos en el día 65 en lugar del día 60 o antes. ¿Cuál es GENERALMENTE la consecuencia de este retraso?",
      o: [
        "Ninguna consecuencia — el plazo de 60 días es meramente una sugerencia sin ninguna consecuencia real si se excede ligeramente",
        "Generalmente, los $50,000 podrían tratarse como una distribución GRAVABLE (sujeta a impuesto sobre la renta ordinario, y potencialmente penalidad del 10% si Rosa es menor de 59½), al no completar el rollover dentro del plazo requerido de 60 días",
        "Rosa automáticamente pierde su IRA por completo de forma permanente",
        "El IRS le otorga automáticamente una extensión ilimitada sin ninguna consecuencia bajo cualquier circunstancia"
      ],
      a: 1,
      trampa: "El plazo de 60 días es un límite ESTRICTO con consecuencias fiscales reales si se excede — no es meramente una sugerencia flexible sin repercusiones, aunque existen ciertas excepciones limitadas para casos de dificultad extraordinaria documentada.",
      correcto: "Al exceder el plazo estricto de 60 días, los $50,000 generalmente SE TRATARÍAN como una distribución GRAVABLE del IRA Tradicional — sujeta a impuesto sobre la renta ordinario en su totalidad, y potencialmente a la penalidad adicional del 10% si Rosa es menor de 59½ años, ya que la transacción no calificaría como un rollover válido. (Existen ciertas excepciones limitadas del IRS para casos de dificultad extraordinaria documentada que permiten extensiones, pero no son automáticas). [VERIFICADO — consecuencia fiscal estándar por incumplir el plazo estricto de rollover]",
      incorrectos: [
        "A) El plazo SÍ tiene consecuencias fiscales reales y significativas si se excede — no es meramente una sugerencia sin repercusiones.",
        "C) Rosa no pierde su IRA por completo de forma permanente — la consecuencia es el tratamiento fiscal de esta distribución específica como gravable, no la pérdida total y permanente de la cuenta.",
        "D) No existe una extensión automática e ilimitada sin condiciones — cualquier excepción requiere generalmente demostrar circunstancias específicas calificadas ante el IRS, no es un derecho automático."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE una VENTAJA práctica de usar una Transferencia Directa (Trustee-to-Trustee) en lugar de un Rollover tradicional al mover fondos entre cuentas IRA?",
      o: [
        "Permite generar mayores rendimientos de inversión garantizados durante el proceso de transferencia",
        "Elimina el RIESGO de perder el plazo de 60 días (ya que el titular nunca recibe los fondos directamente), reduciendo así el riesgo de un evento fiscal no intencionado por error administrativo",
        "Es el único método permitido legalmente para mover fondos entre cuentas IRA",
        "Genera automáticamente una deducción fiscal adicional no disponible mediante el rollover tradicional"
      ],
      a: 1,
      trampa: "La ventaja práctica central de la transferencia directa es específicamente de GESTIÓN DE RIESGO PROCEDIMENTAL (eliminar el riesgo del plazo de 60 días) — no relacionada con rendimientos de inversión ni deducciones fiscales adicionales.",
      correcto: "La ventaja práctica principal de la Transferencia Directa es que ELIMINA el riesgo de perder accidentalmente el plazo de 60 días (ya que el titular nunca recibe los fondos directamente en sus propias manos) — reduciendo significativamente el riesgo de que un error administrativo o de tiempo resulte en un evento fiscal no intencionado y potencialmente costoso. [VERIFICADO — ventaja práctica fundamental de este mecanismo]",
      incorrectos: [
        "A) No genera automáticamente mayores rendimientos de inversión — es un mecanismo de movimiento de fondos, no una estrategia de inversión en sí misma.",
        "C) El rollover tradicional también sigue siendo un método legalmente permitido — la transferencia directa no es el único método disponible.",
        "D) No genera ninguna deducción fiscal adicional especial — su ventaja es procedimental/de gestión de riesgo, no de beneficio fiscal adicional."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE la limitación de frecuencia aplicable a los rollovers de IRA-a-IRA (no aplicable a transferencias directas trustee-to-trustee) bajo las reglas actuales del IRS?",
      o: [
        "No existe ninguna limitación de frecuencia bajo ninguna circunstancia",
        "Generalmente limitado a UN rollover IRA-a-IRA por período de 12 MESES, aplicado de forma agregada a través de TODAS las cuentas IRA del contribuyente (no por cuenta individual)",
        "Limitado a exactamente 5 rollovers por año calendario sin ninguna otra restricción",
        "Solo puede realizarse un rollover en toda la vida del contribuyente"
      ],
      a: 1,
      trampa: "Esta limitación específica de frecuencia (una vez por 12 meses, de forma AGREGADA a través de todas las cuentas del contribuyente) es un punto técnico frecuentemente malentendido — no aplica por cuenta individual, sino de forma consolidada.",
      correcto: "Bajo las reglas actuales del IRS, generalmente se limita a UN rollover IRA-a-IRA por período de 12 MESES, aplicado de forma AGREGADA a través de TODAS las cuentas IRA que posee el contribuyente (no es un límite separado por cada cuenta individual) — esta limitación NO aplica a las Transferencias Directas trustee-to-trustee, que pueden realizarse sin este límite de frecuencia. [VERIFICADO — regla de limitación de frecuencia estable del IRS, clarificada tras el caso Bobrow v. Commissioner]",
      incorrectos: [
        "A) SÍ existe una limitación de frecuencia específica aplicable a rollovers IRA-a-IRA bajo las reglas actuales.",
        "C) No son 5 rollovers por año — es específicamente UNO por período de 12 meses de forma agregada.",
        "D) No está limitado a una sola vez en toda la vida — es una limitación recurrente de una vez por cada período de 12 meses."
      ]
    }
  ]
},

{
  id: "nivel5_006",
  area: "retiro",
  concepto: "401(k) — Límites de Contribución y Catch-Up con Cifras Específicas",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es GENERALMENTE la estructura de contribución MÁXIMA COMBINADA (empleado + empleador) permitida en un plan 401(k) para el año 2024, considerando tanto las contribuciones electivas del empleado como las contribuciones del empleador (incluyendo match)?",
      o: [
        "Un límite combinado significativamente más alto que el límite individual de contribución electiva del empleado, generalmente cercano a $69,000 (o $76,500 con catch-up para 50+) para todas las fuentes de contribución combinadas",
        "Exactamente el mismo límite que la contribución electiva individual del empleado, sin ninguna diferencia por incluir aportes del empleador",
        "No existe ningún límite combinado — solo se limitan las contribuciones electivas individuales del empleado",
        "El límite combinado es siempre exactamente el doble del límite individual del empleado sin ninguna otra consideración"
      ],
      a: 0,
      trampa: "Se confunde el límite de CONTRIBUCIÓN ELECTIVA del empleado (aproximadamente $23,000 en 2024) con el límite COMBINADO TOTAL que incluye también las contribuciones del empleador — este último es significativamente más alto.",
      correcto: "El límite COMBINADO TOTAL (contribuciones electivas del empleado + contribuciones del empleador, incluyendo cualquier match) para 2024 es generalmente significativamente más alto que el límite individual de contribución electiva del empleado — aproximándose a $69,000 para el total combinado (o $76,500 incluyendo el catch-up de $7,500 para empleados de 50+ años). [REQUIERE VERIFICACIÓN — confirmar estas cifras exactas vigentes para el año fiscal correspondiente contra la publicación oficial actualizada del IRS]",
      incorrectos: [
        "B) El límite combinado es sustancialmente MÁS ALTO que el límite individual de contribución electiva del empleado — no son el mismo número.",
        "C) SÍ existe un límite combinado total que incluye todas las fuentes de contribución, no solo un límite para las contribuciones electivas del empleado.",
        "D) No es simplemente el doble sin otras consideraciones — la estructura tiene sus propios límites específicos establecidos independientemente por el IRS, no calculados como una simple duplicación matemática."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE la diferencia entre el límite de contribución ELECTIVA del empleado y el límite COMBINADO TOTAL de un plan 401(k)?",
      o: [
        "Son exactamente el mismo límite sin ninguna distinción",
        "El límite ELECTIVO se refiere específicamente a lo que el EMPLEADO puede diferir de su propio salario; el límite COMBINADO incluye ADICIONALMENTE las contribuciones del EMPLEADOR (como el match), resultando en un total permitido considerablemente mayor",
        "El límite combinado es siempre menor que el límite electivo individual del empleado",
        "Solo aplica a planes 401(k) de empleadores gubernamentales, nunca a planes del sector privado"
      ],
      a: 1,
      trampa: "Se confunden estos dos límites relacionados pero distintos — uno mide solo lo que el EMPLEADO aporta de su propio salario; el otro mide el TOTAL combinado incluyendo también lo que el EMPLEADOR aporta.",
      correcto: "El límite ELECTIVO mide específicamente cuánto puede DIFERIR el EMPLEADO de su propio salario hacia el plan (aproximadamente $23,000 en 2024). El límite COMBINADO TOTAL incluye ADICIONALMENTE las contribuciones del EMPLEADOR (match u otras contribuciones patronales), resultando en un límite total considerablemente MAYOR (aproximadamente $69,000 en 2024) que refleja la suma de ambas fuentes. [VERIFICADO — distinción estructural fundamental entre ambos tipos de límite]",
      incorrectos: [
        "A) NO son el mismo límite — miden aspectos diferentes de la estructura de contribución total.",
        "C) El límite combinado es sustancialmente MAYOR que el límite electivo individual, no menor.",
        "D) Esta estructura de límites del 401(k) aplica generalmente tanto a planes del sector privado como, con las adaptaciones correspondientes, a estructuras similares del sector público."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Pedro, de 55 años, contribuye el máximo electivo individual permitido a su 401(k) en 2024 (incluyendo su catch-up de 50+). Su empleador además aporta un match adicional. ¿Podría GENERALMENTE el TOTAL combinado (Pedro + empleador) exceder el límite electivo individual de Pedro sin violar ninguna regla del IRS?",
      o: [
        "No — cualquier contribución que exceda el límite electivo individual de Pedro sería automáticamente una violación bajo cualquier circunstancia",
        "Sí — el límite COMBINADO total (que incluye tanto las contribuciones electivas de Pedro como las contribuciones adicionales del empleador) es significativamente MÁS ALTO que el límite electivo individual, por lo que el match del empleador puede añadirse legítimamente sin violar las reglas del IRS, mientras el total combinado se mantenga dentro del límite combinado permitido",
        "Solo sería posible si Pedro tuviera más de 70 años de edad específicamente",
        "El empleador nunca puede contribuir nada adicional una vez que el empleado alcanza su propio límite electivo individual"
      ],
      a: 1,
      trampa: "Es común confundir el límite electivo INDIVIDUAL (solo lo que Pedro aporta) con el límite COMBINADO TOTAL (que incluye también al empleador) — el match del empleador puede añadirse legítimamente por encima de lo que Pedro aporta individualmente, siempre que el TOTAL se mantenga dentro del límite combinado más alto.",
      correcto: "SÍ, el total combinado PUEDE exceder el límite electivo individual de Pedro sin ninguna violación, precisamente porque existe un límite COMBINADO separado y más alto que incluye las contribuciones del empleador. El match del empleador se SUMA legítimamente a las contribuciones electivas de Pedro, siempre que el TOTAL combinado se mantenga dentro del límite combinado más alto establecido por el IRS. [VERIFICADO — mecánica fundamental de la estructura de límites duales del 401(k)]",
      incorrectos: [
        "A) No es automáticamente una violación — existe precisamente un límite combinado separado y más alto diseñado para permitir esta combinación de fuentes de contribución.",
        "C) No depende de una edad específica de 70 años — la estructura de límite combinado aplica en general, con el catch-up aplicable desde los 50 años.",
        "D) El empleador SÍ puede seguir contribuyendo adicionalmente incluso después de que el empleado alcance su propio límite electivo individual, hasta el límite combinado total permitido."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es GENERALMENTE el monto adicional de contribución de 'catch-up' (recuperación) permitido específicamente para empleados de 50 años o más en un plan 401(k) para el año 2024, sumado al límite electivo base?",
      o: [
        "$3,000 adicionales",
        "$5,000 adicionales",
        "$7,500 adicionales",
        "$10,000 adicionales"
      ],
      a: 2,
      trampa: "Este monto específico de catch-up se confunde fácilmente con otros montos de catch-up relacionados con diferentes tipos de cuenta de retiro (como el catch-up del IRA, que es una cifra diferente y menor).",
      correcto: "El catch-up para empleados de 50+ años en un plan 401(k) para 2024 fue generalmente de $7,500 adicionales sobre el límite electivo base, resultando en un límite electivo total para 50+ de aproximadamente $30,500. [REQUIERE VERIFICACIÓN — estos límites son ajustados anualmente por el IRS; confirmar la cifra exacta vigente al momento de necesitarla contra la publicación oficial actualizada]",
      incorrectos: [
        "A) $3,000 no corresponde al catch-up específico del 401(k) para este período.",
        "B) $5,000 corresponde más cercanamente al catch-up histórico del IRA — una cifra diferente y menor que la del 401(k).",
        "D) $10,000 excede el catch-up estándar reconocido para el 401(k) en este período específico (aunque el SECURE 2.0 Act introdujo un catch-up 'súper' potencialmente mayor para ciertas edades específicas 60-63 en años posteriores — REQUIERE VERIFICACIÓN adicional de esa disposición específica)."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Por qué existe GENERALMENTE la disposición de 'catch-up' para empleados de 50 años o más en planes de retiro calificados como el 401(k)?",
      o: [
        "Sin ninguna razón particular — es simplemente una regla arbitraria sin ningún fundamento de política pública",
        "Para PERMITIR a trabajadores que se acercan a la edad de jubilación (y que potencialmente no ahorraron lo suficiente en años anteriores) la oportunidad de aumentar sus contribuciones y 'ponerse al día' en su preparación financiera para el retiro durante sus últimos años de trabajo activo",
        "Exclusivamente como beneficio fiscal adicional para reducir los ingresos del gobierno federal sin ningún propósito de política de retiro",
        "Únicamente aplica a empleados que trabajan en el sector de servicios financieros específicamente"
      ],
      a: 1,
      trampa: "El fundamento de política pública se relaciona con dar a los trabajadores mayores una OPORTUNIDAD ADICIONAL de fortalecer su preparación financiera para la jubilación en sus últimos años laborales, reconociendo que muchos no lograron maximizar sus ahorros en años anteriores.",
      correcto: "La disposición de catch-up existe generalmente como política pública diseñada para PERMITIR a los trabajadores que se acercan a la jubilación (50+ años) la oportunidad de aumentar sus contribuciones y compensar años anteriores donde pudieron no haber ahorrado lo suficiente, ayudando a fortalecer su preparación financiera final antes del retiro. [VERIFICADO — fundamento de política pública reconocido detrás de esta disposición]",
      incorrectos: [
        "A) SÍ tiene un fundamento de política pública claro relacionado con la preparación financiera para la jubilación de trabajadores mayores.",
        "C) Aunque tiene implicaciones fiscales, el propósito principal es de política de retiro (ayudar a los trabajadores a ahorrar más), no simplemente reducir ingresos gubernamentales sin propósito.",
        "D) No está limitado exclusivamente al sector de servicios financieros — aplica de forma general a empleados elegibles de 50+ años en planes calificados across todos los sectores."
      ]
    }
  ]
},

{
  id: "nivel5_007",
  area: "generales",
  concepto: "Reaseguro — Tipos y Propósitos Específicos",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE el propósito PRINCIPAL de que una aseguradora ('cedente') obtenga reaseguro de otra compañía ('reaseguradora')?",
      o: [
        "Reducir el precio que paga el consumidor final por su póliza individual",
        "Transferir parte del riesgo asumido a otra compañía, protegiendo la solvencia y capacidad financiera de la aseguradora cedente ante pérdidas extraordinariamente elevadas o concentración excesiva de riesgo",
        "Eliminar completamente la necesidad de mantener cualquier tipo de reserva financiera propia",
        "Aumentar artificialmente las primas cobradas a los consumidores sin ninguna justificación de riesgo real"
      ],
      a: 1,
      trampa: "El reaseguro opera a nivel de GESTIÓN DE RIESGO ENTRE COMPAÑÍAS, no directamente relacionado con el precio individual al consumidor final — su propósito fundamental es proteger la solvencia y estabilidad financiera de la aseguradora primaria.",
      correcto: "El propósito principal del reaseguro es TRANSFERIR parte del riesgo asumido por la aseguradora cedente a una reaseguradora, protegiendo así la SOLVENCIA y CAPACIDAD financiera de la cedente ante pérdidas extraordinariamente elevadas, catástrofes, o concentración excesiva de riesgo en una línea de negocio específica. [VERIFICADO — propósito fundamental y estable del mecanismo de reaseguro]",
      incorrectos: [
        "A) El reaseguro opera a nivel de gestión de riesgo entre compañías — no está diseñado directamente para reducir el precio individual al consumidor final, aunque indirectamente pueda contribuir a la estabilidad general del mercado.",
        "C) El reaseguro no elimina la necesidad de reservas propias — es un complemento a la gestión de reservas, no un sustituto completo de ellas.",
        "D) No tiene relación con aumentar artificialmente primas sin justificación — es un mecanismo legítimo de gestión de riesgo, no una práctica de precios injustificada."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE la diferencia entre reaseguro 'proporcional' y reaseguro 'no proporcional' (excess of loss)?",
      o: [
        "Son términos completamente sinónimos sin ninguna distinción práctica",
        "En el reaseguro PROPORCIONAL, la reaseguradora comparte un PORCENTAJE fijo predeterminado de cada riesgo (primas y pérdidas) con la cedente; en el reaseguro NO PROPORCIONAL, la reaseguradora solo paga cuando las pérdidas EXCEDEN un umbral específico predeterminado (excess of loss)",
        "El reaseguro proporcional solo aplica a seguros de vida; el no proporcional solo a seguros de propiedad",
        "Ambos tipos requieren obligatoriamente que la cedente transfiera el 100% del riesgo sin ninguna excepción"
      ],
      a: 1,
      trampa: "Ambos son mecanismos de reaseguro, pero difieren fundamentalmente en CÓMO se estructura la participación de la reaseguradora: proporcionalmente desde el primer dólar, o solo activándose por encima de un umbral específico de pérdida.",
      correcto: "REASEGURO PROPORCIONAL = la reaseguradora comparte un PORCENTAJE FIJO predeterminado de cada riesgo (tanto de las primas cobradas como de las pérdidas pagadas) desde el inicio, de forma proporcional. REASEGURO NO PROPORCIONAL (Excess of Loss) = la reaseguradora solo interviene y paga cuando las pérdidas de la cedente EXCEDEN un umbral específico predeterminado (retención), actuando como protección contra pérdidas catastróficas específicamente por encima de ese punto. [VERIFICADO — distinción fundamental entre ambos mecanismos estructurales de reaseguro]",
      incorrectos: [
        "A) NO son sinónimos — tienen mecánicas estructurales fundamentalmente diferentes de participación en el riesgo.",
        "C) Ambos tipos de reaseguro pueden aplicarse potencialmente a diferentes líneas de seguro, incluyendo vida y propiedad — no están limitados exclusivamente por esa distinción.",
        "D) Ninguno de los dos tipos requiere obligatoriamente transferir el 100% del riesgo — ambos son mecanismos de compartir/transferir una PARTE del riesgo según su estructura específica."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué término se usa GENERALMENTE para describir a la compañía aseguradora que ORIGINALMENTE emitió la póliza y busca reaseguro de otra compañía?",
      o: [
        "Reaseguradora",
        "Cedente (Ceding Company)",
        "Fiduciaria",
        "Corredora de reaseguro"
      ],
      a: 1,
      trampa: "Se confunde la CEDENTE (quien transfiere/cede el riesgo) con la REASEGURADORA (quien recibe/asume ese riesgo transferido) — son roles opuestos dentro de la misma transacción de reaseguro.",
      correcto: "CEDENTE (Ceding Company) = la aseguradora ORIGINAL que emitió la póliza directamente al consumidor, y que posteriormente busca TRANSFERIR (ceder) parte de ese riesgo a una reaseguradora mediante el mecanismo de reaseguro. [VERIFICADO — terminología estándar de la industria de reaseguro]",
      incorrectos: [
        "A) La Reaseguradora es la compañía que RECIBE el riesgo transferido — el rol opuesto al de la cedente en esta transacción.",
        "C) Fiduciaria se refiere a alguien con obligaciones de administrar activos en beneficio de otros — no es el término específico para la aseguradora original en una transacción de reaseguro.",
        "D) Un corredor de reaseguro es un intermediario que facilita la transacción entre cedente y reaseguradora — no es la aseguradora original en sí misma."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Una aseguradora pequeña ha emitido varias pólizas de vida con beneficios sustancialmente altos ($5 millones cada una) para un número limitado de clientes de alto patrimonio. ¿Por qué sería GENERALMENTE prudente que esta aseguradora considere obtener reaseguro para estas pólizas específicas?",
      o: [
        "No habría ninguna razón particular de prudencia — las pólizas de alto valor no representan ningún riesgo especial de concentración",
        "Porque la CONCENTRACIÓN de riesgo en pocas pólizas de MONTO MUY ALTO podría representar una amenaza desproporcionada a la solvencia de una aseguradora relativamente pequeña si ocurrieran múltiples reclamaciones de estas pólizas específicas, haciendo prudente transferir parte de ese riesgo concentrado",
        "Únicamente para poder cobrar primas más altas a estos clientes específicos sin ninguna relación con gestión de riesgo real",
        "Solo sería relevante si las pólizas fueran exclusivamente de seguro de propiedad, nunca de seguro de vida"
      ],
      a: 1,
      trampa: "El escenario describe precisamente una situación de CONCENTRACIÓN DE RIESGO (pocas pólizas de monto muy alto en una aseguradora relativamente pequeña) — exactamente el tipo de situación para la cual el reaseguro está diseñado como herramienta de protección.",
      correcto: "Sería GENERALMENTE prudente porque la concentración de riesgo en pocas pólizas de monto MUY ALTO representa una amenaza DESPROPORCIONADA a la solvencia de una aseguradora relativamente pequeña — si ocurrieran múltiples reclamaciones de estas pólizas específicas de alto valor, podría comprometer significativamente la capacidad financiera de la compañía. El reaseguro permite transferir parte de este riesgo concentrado, protegiendo la estabilidad financiera general de la aseguradora. [VERIFICADO — aplicación práctica del propósito fundamental del reaseguro a un escenario de concentración de riesgo]",
      incorrectos: [
        "A) SÍ existe una razón clara de prudencia relacionada con la gestión de riesgo de concentración — esta situación es precisamente el tipo de escenario para el cual el reaseguro está diseñado.",
        "C) El propósito del reaseguro no está relacionado con cobrar primas más altas a clientes específicos — es un mecanismo de gestión de riesgo entre compañías aseguradoras.",
        "D) El reaseguro es relevante tanto para seguros de vida como de propiedad y otras líneas — no está limitado exclusivamente a propiedad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es GENERALMENTE el efecto del reaseguro sobre la RELACIÓN CONTRACTUAL entre el asegurado original y la aseguradora que emitió su póliza?",
      o: [
        "El reaseguro CAMBIA completamente la relación contractual — el asegurado ahora debe interactuar directamente con la reaseguradora en lugar de su aseguradora original",
        "El reaseguro generalmente NO altera la relación contractual DIRECTA entre el asegurado y su aseguradora original — el asegurado continúa interactuando exclusivamente con la aseguradora que le emitió la póliza, sin relación contractual directa con la reaseguradora",
        "El reaseguro anula automáticamente la póliza original del asegurado",
        "El asegurado debe pagar primas separadas tanto a su aseguradora como a la reaseguradora"
      ],
      a: 1,
      trampa: "El reaseguro opera a nivel de RELACIÓN ENTRE COMPAÑÍAS (cedente-reaseguradora) — generalmente NO crea ninguna relación contractual directa nueva entre el asegurado individual y la reaseguradora, que permanece 'invisible' para el consumidor final.",
      correcto: "El reaseguro generalmente NO altera la relación contractual directa entre el asegurado y su aseguradora original — el asegurado continúa interactuando EXCLUSIVAMENTE con la aseguradora que le emitió la póliza (pagando primas a ella, presentando reclamaciones a ella), sin ninguna relación contractual directa con la reaseguradora, que opera 'detrás de escena' únicamente a nivel de gestión de riesgo entre compañías. [VERIFICADO — principio fundamental sobre la naturaleza de la relación de reaseguro]",
      incorrectos: [
        "A) El reaseguro NO cambia la relación directa del asegurado — este continúa interactuando exclusivamente con su aseguradora original.",
        "C) El reaseguro no anula la póliza original — es un mecanismo complementario de gestión de riesgo entre compañías, no afecta la validez de la póliza del consumidor.",
        "D) El asegurado NO paga primas separadas a la reaseguradora — continúa pagando únicamente a su aseguradora original según los términos de su póliza."
      ]
    }
  ]
}

]; // fin PK_NIVEL5

if (typeof window !== 'undefined') window.PK_NIVEL5 = PK_NIVEL5;
if (typeof module !== 'undefined') module.exports = { PK_NIVEL5 };
