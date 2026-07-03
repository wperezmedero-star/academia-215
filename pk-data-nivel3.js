// ============================================================
// PEARSON KILLER — pk-data-nivel3.js
// Módulo: Licenciamiento de Florida, Ética y Divulgación
// (Continuación del material de referencia aportado por el
// usuario — parte no cubierta en nivel1/nivel2)
//
// 8 conceptos × 5 variantes = 40 preguntas
// [VERIFICADO] = principio legal o mecánica estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// ============================================================

const PK_NIVEL3 = [

{
  id: "nivel3_001",
  area: "florida",
  concepto: "Regulación de Solicitudes y Divulgación al Comprador",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de los siguientes puntos NO se requiere generalmente en cada solicitud de seguro que se venda en Florida?",
      o: [
        "Firma del solicitante",
        "Dirección y número de teléfono del AGENTE (no del solicitante)",
        "Preguntas sobre el estado de salud relevante",
        "Fecha de la solicitud"
      ],
      a: 1,
      trampa: "Se espera que la solicitud contenga información del SOLICITANTE — la dirección y teléfono específicamente del AGENTE no es un requisito estándar de contenido de la solicitud misma.",
      correcto: "La dirección y número de teléfono DEL AGENTE no es generalmente un requisito de contenido obligatorio dentro de la solicitud misma — la solicitud se enfoca en recopilar información del SOLICITANTE (identidad, salud, firma) para la evaluación de suscripción. [REQUIERE VERIFICACIÓN — confirmar contra el formato estándar de solicitud aprobado por la OIR de Florida]",
      incorrectos: [
        "A) La firma del solicitante SÍ es un requisito fundamental de cualquier solicitud de seguro.",
        "C) Las preguntas sobre salud SÍ son contenido estándar requerido para la evaluación de suscripción.",
        "D) La fecha de la solicitud SÍ es un elemento estándar requerido para establecer el momento de la transacción."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué debe proporcionar generalmente el asegurador a un posible comprador de seguro de vida en Florida como parte del proceso de divulgación?",
      o: [
        "Solo el contrato final firmado sin ningún material adicional",
        "Una Guía del Comprador y un Resumen de la Póliza",
        "Únicamente una lista de agentes autorizados en el área",
        "El historial financiero completo de la aseguradora"
      ],
      a: 1,
      trampa: "Existen múltiples documentos que podrían formar parte de una transacción de seguro, pero los específicamente exigidos como divulgación previa al comprador son la Guía del Comprador y el Resumen de la Póliza.",
      correcto: "GUÍA DEL COMPRADOR (Buyer's Guide) y RESUMEN DE LA PÓLIZA (Policy Summary) = documentos estándar de divulgación que generalmente deben proporcionarse al comprador potencial ANTES o AL MOMENTO de la solicitud, para ayudarlo a entender el producto y comparar opciones. [VERIFICADO — requisito de divulgación estándar de la industria]",
      incorrectos: [
        "A) El contrato final firmado ocurre AL FINAL del proceso — la divulgación debe ocurrir ANTES, para informar la decisión.",
        "C) Una lista de agentes no es el documento de divulgación sustantivo exigido sobre el producto específico.",
        "D) El historial financiero completo de la aseguradora no es el documento estándar de divulgación al comprador individual — existen calificaciones de solvencia separadas para ese propósito."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Según las normas de divulgación de Florida, ¿qué se espera GENERALMENTE que reciba un solicitante de seguro de vida?",
      o: [
        "Solo una copia de la licencia del agente",
        "Una Guía del Comprador y un Resumen de la Póliza",
        "Un certificado de buena salud emitido por su médico",
        "Una lista de todas las aseguradoras competidoras en el mercado"
      ],
      a: 1,
      trampa: "Repetición reforzada del concepto de divulgación estándar con redacción ligeramente diferente para confirmar comprensión del principio, no memorización de una frase exacta.",
      correcto: "El solicitante de seguro de vida generalmente debe recibir una Guía del Comprador y un Resumen de la Póliza como parte de las normas de divulgación de Florida — documentos diseñados para facilitar una decisión de compra informada. [VERIFICADO — requisito de divulgación estándar]",
      incorrectos: [
        "A) Una copia de la licencia del agente no es el documento de divulgación sustantivo sobre el producto.",
        "C) Un certificado médico de buena salud no es parte de los documentos estándar de divulgación al comprador — eso sería parte del proceso de suscripción, no de divulgación informativa.",
        "D) Una lista de competidores no es un requisito de divulgación estándar en la venta individual de una póliza."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de las siguientes afirmaciones es CORRECTA en relación con las obligaciones de un agente que recibe una solicitud de seguro de un cliente?",
      o: [
        "El agente puede modificar libremente cualquier respuesta sin informar al solicitante",
        "El agente debe hacer que el solicitante ponga sus INICIALES en cualquier cambio realizado en la solicitud",
        "El agente no tiene ninguna responsabilidad sobre la exactitud de la información recopilada",
        "El agente puede completar la solicitud sin la presencia del solicitante en cualquier circunstancia"
      ],
      a: 1,
      trampa: "Se confunde el rol del agente como quien FACILITA el proceso con la idea errónea de que tiene autoridad para MODIFICAR información sin control ni trazabilidad.",
      correcto: "Si se realiza algún cambio en las respuestas de la solicitud, el agente generalmente debe hacer que el SOLICITANTE ponga sus iniciales en ese cambio específico — esto garantiza que el solicitante esté al tanto y de acuerdo con cualquier modificación realizada a sus respuestas originales. [VERIFICADO — práctica estándar de integridad en el proceso de solicitud]",
      incorrectos: [
        "A) El agente NO puede modificar libremente respuestas sin informar y obtener la conformidad (iniciales) del solicitante.",
        "C) El agente SÍ tiene responsabilidad profesional sobre el proceso de recopilación precisa de información.",
        "D) Aunque existen circunstancias para completar solicitudes de forma remota, la integridad del proceso generalmente requiere la participación y conformidad directa del solicitante en el contenido."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué sucede GENERALMENTE cuando una solicitud de seguro de vida INCOMPLETA es presentada a una aseguradora?",
      o: [
        "La aseguradora la aprueba automáticamente sin ninguna revisión adicional",
        "La solicitud generalmente será devuelta al productor/agente que la originó para completarla",
        "La aseguradora emite la póliza con la información parcial disponible sin ningún seguimiento",
        "La solicitud se destruye automáticamente sin ninguna notificación"
      ],
      a: 1,
      trampa: "Una solicitud incompleta no puede procesarse adecuadamente para suscripción — el flujo lógico es devolverla al origen para completarla, no aprobarla ni destruirla sin más.",
      correcto: "Una solicitud incompleta generalmente será DEVUELTA al productor (agente) que la originó, para que complete la información faltante antes de que pueda procesarse adecuadamente para suscripción. [VERIFICADO — flujo procedimental estándar de manejo de solicitudes]",
      incorrectos: [
        "A) La aseguradora no puede aprobar automáticamente una solicitud sin la información completa necesaria para la evaluación de suscripción.",
        "C) La aseguradora generalmente no emite pólizas basadas en información incompleta sin resolver esa deficiencia primero.",
        "D) La solicitud no se destruye automáticamente — el proceso estándar es devolverla para completarla, no descartarla."
      ]
    }
  ]
},

{
  id: "nivel3_002",
  area: "florida",
  concepto: "Discriminación Injusta y Prácticas Permitidas de Clasificación",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de los siguientes sería un ejemplo de discriminación INJUSTA en la venta o suscripción de seguros?",
      o: [
        "Ofrecer primas diferentes a personas que están dentro de la MISMA clasificación de riesgo",
        "Ofrecer primas diferentes a personas de clasificaciones de riesgo genuinamente distintas",
        "Aplicar underwriting basado en factores actuariales relevantes y documentados",
        "Clasificar el riesgo según factores de salud objetivamente verificables"
      ],
      a: 0,
      trampa: "La discriminación 'injusta' específicamente se refiere a tratar DIFERENTE a quienes están en la MISMA categoría de riesgo — no a la clasificación legítima entre categorías genuinamente distintas.",
      correcto: "Ofrecer primas DIFERENTES a personas que objetivamente pertenecen a la MISMA clasificación de riesgo constituye discriminación injusta — el principio regulatorio exige que personas con el mismo nivel de riesgo reciban un trato consistente en materia de precio y condiciones. [VERIFICADO — principio fundamental de discriminación injusta en seguros]",
      incorrectos: [
        "B) Cobrar diferente a personas de riesgo GENUINAMENTE distinto es discriminación JUSTIFICADA (actuarialmente respaldada) — no injusta.",
        "C) El underwriting basado en factores actuariales relevantes es una práctica LEGÍTIMA y esperada de la industria, no discriminación injusta.",
        "D) Clasificar según factores de salud objetivamente verificables es la base LEGÍTIMA del proceso de suscripción, no una práctica prohibida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Contra cuál de los siguientes tipos de asegurados PUEDEN legítimamente discriminar (clasificar con diferente prima) las compañías de seguros de vida?",
      o: [
        "Personas de una raza específica",
        "Personas que fuman tabaco",
        "Personas de un género específico sin justificación actuarial",
        "Personas de un origen nacional específico"
      ],
      a: 1,
      trampa: "Fumar es un FACTOR DE RIESGO objetivamente relevante y actuarialmente respaldado — es una de las pocas categorías donde la clasificación diferenciada de prima está expresamente permitida y es estándar en la industria.",
      correcto: "Las compañías de seguros de vida PUEDEN legítimamente clasificar y cobrar primas diferentes a personas que fuman tabaco, porque el tabaquismo es un factor de riesgo objetivamente relevante y actuarialmente demostrado que afecta la mortalidad — es una distinción legal y estándar de la industria. [VERIFICADO — práctica de clasificación de riesgo estándar y legalmente permitida]",
      incorrectos: [
        "A) La discriminación por raza está expresamente PROHIBIDA — es un factor protegido bajo la ley antidiscriminación.",
        "C) La discriminación por género SIN justificación actuarial documentada está generalmente prohibida.",
        "D) La discriminación por origen nacional está expresamente PROHIBIDA — es un factor protegido bajo la ley antidiscriminación."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es el principio regulatorio fundamental detrás de la prohibición de discriminación injusta en seguros?",
      o: [
        "Que todas las personas, sin importar su riesgo, deben pagar exactamente la misma prima",
        "Que personas con el MISMO nivel de riesgo objetivamente determinado deben recibir un trato consistente en precio y condiciones",
        "Que las aseguradoras nunca pueden rechazar ninguna solicitud bajo ninguna circunstancia",
        "Que el género siempre debe ser ignorado completamente en cualquier cálculo actuarial"
      ],
      a: 1,
      trampa: "Se confunde la prohibición de discriminación INJUSTA (tratar diferente a iguales) con una prohibición general de CUALQUIER diferenciación de precio — que sería contraria a los principios actuariales fundamentales del seguro.",
      correcto: "El principio fundamental es que personas con el MISMO nivel de riesgo objetivamente determinado (misma clasificación actuarial) deben recibir un trato CONSISTENTE en precio y condiciones — no que todas las personas, sin importar su riesgo real, deban pagar lo mismo. [VERIFICADO — principio regulatorio fundamental]",
      incorrectos: [
        "A) Esto contradiría el principio actuarial fundamental del seguro — personas de MAYOR riesgo genuino SÍ pueden pagar más legítimamente.",
        "C) Las aseguradoras SÍ pueden rechazar solicitudes bajo criterios de underwriting legítimos — el rechazo no está prohibido en sí mismo.",
        "D) El género puede ser un factor considerado en ciertos contextos actuariales según la regulación aplicable — no está universalmente prohibido su uso en todo cálculo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un suscriptor cobra una prima más alta a un solicitante específico dentro del mismo grupo de riesgo actuarial que otros solicitantes similares, sin ninguna justificación documentada adicional. ¿Qué violación representa esto?",
      o: [
        "Una práctica legítima de suscripción individualizada",
        "Discriminación injusta — tratar diferente a alguien dentro de la misma clasificación de riesgo sin justificación",
        "Rebating, porque implica un ajuste de precio",
        "Twisting, porque implica cambiar los términos de una póliza"
      ],
      a: 1,
      trampa: "La clave del escenario es 'MISMO grupo de riesgo actuarial' + 'SIN justificación documentada' — esa combinación específica define discriminación injusta.",
      correcto: "Cobrar una prima más alta a alguien dentro de la MISMA clasificación de riesgo actuarial, SIN justificación documentada adicional, constituye discriminación INJUSTA — viola el principio de trato consistente para riesgos objetivamente similares. [VERIFICADO — aplicación directa del principio]",
      incorrectos: [
        "A) No es legítimo sin justificación — la suscripción individualizada requiere una base actuarial documentada para cualquier diferencia de trato.",
        "C) Rebating se refiere específicamente a devolver comisión o dar valor para inducir la compra — no a cobrar precios diferentes sin justificación.",
        "D) Twisting requiere el elemento específico de inducir un reemplazo mediante información falsa — no descrito en este escenario."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todas las siguientes son generalmente factores LEGÍTIMOS de clasificación de riesgo en la suscripción de seguros de vida EXCEPTO:",
      o: [
        "Historial médico documentado",
        "Hábito de fumar tabaco",
        "Ocupación de alto riesgo",
        "Raza del solicitante"
      ],
      a: 3,
      trampa: "Tres de las cuatro opciones son factores actuarialmente relevantes y legítimamente usados en suscripción; la raza es específicamente un factor PROHIBIDO por ley antidiscriminación, sin importar cualquier correlación estadística que pudiera argumentarse.",
      correcto: "La RAZA del solicitante NO es un factor legítimo de clasificación de riesgo — está expresamente prohibida como base de discriminación bajo la ley, independientemente de cualquier argumento actuarial que pudiera plantearse. [VERIFICADO — prohibición legal fundamental]",
      incorrectos: [
        "A) El historial médico documentado SÍ es un factor legítimo y estándar de clasificación de riesgo.",
        "B) El hábito de fumar SÍ es un factor legítimo y estándar de clasificación de riesgo.",
        "C) La ocupación de alto riesgo SÍ es un factor legítimo y estándar de clasificación de riesgo."
      ]
    }
  ]
},

{
  id: "nivel3_003",
  area: "generales",
  concepto: "Requisitos y Prerrequisitos de Licenciamiento",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de los siguientes es un requisito previo TÍPICO para convertirse en agente de seguros autorizado, y cuál NO lo es?",
      o: [
        "Aprobar el examen estatal correspondiente",
        "Completar la educación pre-licencia requerida",
        "Graduado de la escuela secundaria (high school) como requisito formal específico",
        "Someterse a una verificación de antecedentes"
      ],
      a: 2,
      trampa: "Aunque parece razonable esperar un diploma de escuela secundaria, muchas jurisdicciones NO exigen formalmente ese diploma específico como prerrequisito de licenciamiento de seguros — la educación pre-licencia específica del sector sustituye ese requisito.",
      correcto: "Ser graduado de la escuela secundaria como requisito FORMAL ESPECÍFICO generalmente NO es un prerrequisito exigido para el licenciamiento de agentes de seguros — el enfoque regulatorio está en la educación PRE-LICENCIA específica del sector y la aprobación del examen, no en credenciales educativas generales previas. [REQUIERE VERIFICACIÓN — confirmar contra los requisitos exactos vigentes del DFS de Florida]",
      incorrectos: [
        "A) Aprobar el examen estatal SÍ es un requisito previo estándar y fundamental.",
        "B) Completar la educación pre-licencia requerida SÍ es un requisito previo estándar.",
        "D) La verificación de antecedentes SÍ es generalmente un requisito previo estándar del proceso de licenciamiento."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es GENERALMENTE la edad MÍNIMA a la que una persona puede firmar una solicitud de seguro de vida en Florida?",
      o: [
        "15 años",
        "18 años",
        "21 años",
        "No existe edad mínima establecida"
      ],
      a: 0,
      trampa: "La edad mínima para FIRMAR una solicitud puede ser menor que la edad de mayoría de edad general (18), lo cual resulta contraintuitivo para muchos estudiantes.",
      correcto: "La edad mínima generalmente reconocida para que una persona pueda firmar una solicitud de seguro de vida es 15 años, según las disposiciones específicas de la ley de seguros aplicable — una edad menor a la mayoría de edad general. [REQUIERE VERIFICACIÓN — confirmar esta edad específica contra el Florida Statute vigente aplicable a solicitudes de menores]",
      incorrectos: [
        "B) 18 años es la mayoría de edad general, pero no necesariamente la edad mínima específica para ESTA transacción particular bajo la ley de seguros.",
        "C) 21 años excede significativamente cualquier umbral relevante para este contexto específico.",
        "D) SÍ existe una edad mínima específica establecida — no es una situación sin regulación de edad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Quién NO está generalmente obligado a firmar una solicitud de seguro de vida?",
      o: [
        "El solicitante/propietario de la póliza",
        "El asegurado, si es diferente del solicitante y es mayor de la edad mínima",
        "El beneficiario designado",
        "El agente que toma la solicitud"
      ],
      a: 2,
      trampa: "Se confunde el rol del BENEFICIARIO (quien recibirá el beneficio eventual) con las partes que deben participar activamente firmando la solicitud — el beneficiario no tiene ese requisito de firma.",
      correcto: "El BENEFICIARIO designado generalmente NO está obligado a firmar la solicitud de seguro de vida — su rol es recibir el beneficio en el futuro, pero no participa como firmante del proceso de solicitud inicial. [VERIFICADO — estructura estándar de firmas requeridas]",
      incorrectos: [
        "A) El solicitante/propietario SÍ debe firmar la solicitud como parte fundamental del proceso.",
        "B) El asegurado (si es diferente del solicitante, como en pólizas sobre la vida de otra persona) generalmente SÍ debe firmar si tiene la edad mínima requerida.",
        "D) El agente generalmente SÍ firma como parte de sus responsabilidades profesionales en el proceso de solicitud."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En Florida, ¿en cuántos días debe generalmente un titular de licencia notificar al Departamento de Servicios Financieros sobre un cambio de dirección?",
      o: [
        "10 días",
        "30 días",
        "60 días",
        "90 días"
      ],
      a: 1,
      trampa: "Este plazo específico de notificación administrativa se confunde fácilmente con otros plazos regulatorios de días similares que aplican a contextos completamente diferentes.",
      correcto: "Un titular de licencia generalmente debe notificar al DFS sobre un cambio de dirección dentro de 30 DÍAS del cambio — es un requisito administrativo de mantenimiento de licencia. [REQUIERE VERIFICACIÓN — confirmar este plazo exacto contra la regulación vigente del DFS de Florida]",
      incorrectos: [
        "A) 10 días es insuficiente respecto al plazo estándar generalmente reconocido para este trámite administrativo.",
        "C) 60 días excede el plazo estándar generalmente reconocido para esta notificación.",
        "D) 90 días excede significativamente el plazo estándar generalmente reconocido."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Bajo qué circunstancia puede un agente con licencia en Florida representar legítimamente a una entidad aseguradora NO autorizada (no admitida) para vender seguros regulares al público general?",
      o: [
        "Siempre que el cliente lo solicite expresamente por escrito",
        "Nunca — un agente con licencia regular no puede representar a una entidad no autorizada para este propósito",
        "Solo los viernes de cada semana según la regulación especial",
        "Únicamente si la entidad tiene su sede en otro estado de EE.UU."
      ],
      a: 1,
      trampa: "La respuesta correcta es un absoluto ('Nunca') — pero en este caso específico el absoluto SÍ es correcto porque describe una prohibición fundamental y estructural, no una regla con excepciones ocultas.",
      correcto: "Un agente con licencia REGULAR en Florida NUNCA puede representar a una entidad aseguradora NO AUTORIZADA (no admitida) para vender seguros regulares al público general — esto constituiría vender seguros de una compañía no autorizada, una violación seria. (Nota: existen categorías separadas y especializadas de licencia para surplus lines que operan bajo reglas distintas). [VERIFICADO — prohibición fundamental de representar aseguradoras no autorizadas]",
      incorrectos: [
        "A) La solicitud del cliente no legitima esta representación prohibida — el cliente no puede autorizar una violación regulatoria.",
        "C) No existe tal excepción temporal específica de días de la semana en la regulación de seguros.",
        "D) La ubicación de la sede en otro estado de EE.UU. no legitima la representación de una entidad no autorizada para vender seguros regulares en Florida."
      ]
    }
  ]
},

{
  id: "nivel3_004",
  area: "vida",
  concepto: "Disposiciones Específicas de Pólizas de Vida — Contrato Completo, Catástrofe Común, Beneficiario Menor",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "S contrata una póliza de seguro de salud que contiene una cláusula estableciendo que el agente NO tiene autoridad para cambiar la póliza ni renunciar a ninguna de sus disposiciones. ¿De qué disposición de la póliza se trata?",
      o: [
        "Contrato completo (Entire Contract)",
        "Período de gracia",
        "Reinstalación",
        "Beneficios coordinados"
      ],
      a: 0,
      trampa: "La provisión de 'Contrato Completo' incluye típicamente la limitación de autoridad del agente como parte de su propósito de establecer que la póliza (y sus documentos adjuntos formales) constituye TODO el acuerdo — el agente no puede modificarlo unilateralmente.",
      correcto: "CONTRATO COMPLETO (Entire Contract) = provisión que establece que la póliza, junto con la solicitud adjunta y cualquier rider, constituye el ACUERDO COMPLETO entre las partes — y específicamente que ningún agente tiene autoridad para modificar los términos o renunciar a disposiciones sin la aprobación formal de un funcionario autorizado de la aseguradora. [VERIFICADO — provisión estándar fundamental]",
      incorrectos: [
        "B) Período de Gracia se refiere al tiempo adicional para pagar primas vencidas — no a la autoridad del agente para modificar el contrato.",
        "C) Reinstalación se refiere a reactivar una póliza caducada — concepto no relacionado con la autoridad del agente.",
        "D) Beneficios Coordinados se refiere a múltiples pólizas de salud — no relacionado con la autoridad de modificación del agente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "K tiene una póliza de seguro de vida de la que su marido es beneficiario principal y su hija es beneficiaria contingente. En virtud de una cláusula de catástrofe común (Common Disaster), si K y su marido mueren SIMULTÁNEAMENTE en un accidente de tráfico, ¿a quién se destinarían generalmente los beneficios por fallecimiento?",
      o: [
        "Al patrimonio (estate) del marido, sin importar la cláusula",
        "A la hija (beneficiaria contingente)",
        "Se dividen automáticamente entre ambas familias extendidas",
        "El beneficio se pierde completamente sin ningún pago"
      ],
      a: 1,
      trampa: "El propósito específico de la cláusula de Catástrofe Común es resolver precisamente esta situación de muerte simultánea o casi simultánea, tratando al beneficiario principal como si hubiera fallecido primero para evitar complicaciones de sucesión.",
      correcto: "Bajo la cláusula de CATÁSTROFE COMÚN, cuando el asegurado y el beneficiario principal mueren en circunstancias que dificultan determinar quién falleció primero (como un accidente simultáneo), la póliza generalmente TRATA al beneficiario principal como si hubiera premuerto al asegurado — por lo tanto, los beneficios pasan al beneficiario CONTINGENTE (la hija). [VERIFICADO — propósito y mecánica estándar de esta cláusula]",
      incorrectos: [
        "A) El propósito específico de la cláusula de catástrofe común es EVITAR que el beneficio pase al patrimonio del beneficiario principal en esta situación — pasa directamente al contingente.",
        "C) No hay división automática entre familias extendidas — la cláusula dirige el beneficio específicamente al beneficiario contingente designado.",
        "D) El beneficio NO se pierde — la cláusula de catástrofe común existe precisamente para asegurar que se pague apropiadamente en esta circunstancia."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué establece la cláusula de PROPIEDAD (Ownership Clause) de una póliza de seguro de vida?",
      o: [
        "Quién es el beneficiario final de los fondos al fallecimiento",
        "Quién es el TITULAR de la póliza y qué derechos específicos le corresponden (como cambiar beneficiarios, tomar préstamos, ceder la póliza)",
        "El valor exacto de rescate en efectivo en cada año de la póliza",
        "Las exclusiones específicas de cobertura de la póliza"
      ],
      a: 1,
      trampa: "Se confunde 'Propiedad' con 'Beneficiario' porque ambos términos se relacionan con 'quién recibe algo' — pero Propiedad se refiere específicamente a los DERECHOS DE CONTROL sobre la póliza en vida, no al beneficio final por fallecimiento.",
      correcto: "La cláusula de PROPIEDAD establece quién es el TITULAR (owner) de la póliza y qué derechos de control le corresponden mientras el asegurado está vivo — incluyendo el derecho a cambiar beneficiarios, tomar préstamos contra el valor en efectivo, ceder la póliza, y ejercer otras opciones contractuales. Es distinta de quién recibirá el beneficio al fallecimiento (eso lo determina la designación de beneficiario). [VERIFICADO — provisión estándar fundamental]",
      incorrectos: [
        "A) Eso describe la designación de beneficiario, no la cláusula de propiedad — son conceptos relacionados pero distintos.",
        "C) La tabla de valores de rescate es una disposición separada y específica de la póliza.",
        "D) Las exclusiones son una provisión completamente diferente relacionada con qué NO cubre la póliza."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué afirmación es cierta en relación con un beneficiario MENOR de edad designado en una póliza de seguro de vida?",
      o: [
        "El menor puede reclamar y recibir directamente el efectivo del beneficio sin ninguna restricción especial",
        "Normalmente, se requiere el nombramiento de un TUTOR (guardián legal) en la cláusula de beneficiarios del contrato, o mediante designación separada, para administrar los fondos en nombre del menor",
        "Los beneficios por fallecimiento nunca pueden destinarse a un menor bajo ninguna circunstancia",
        "El menor automáticamente pierde su derecho al beneficio al cumplir 18 años"
      ],
      a: 1,
      trampa: "Se asume incorrectamente que un menor puede administrar fondos sustanciales por sí mismo como cualquier adulto — la realidad legal requiere un mecanismo de protección adicional (tutela/guardianship).",
      correcto: "Cuando el beneficiario es un MENOR de edad, normalmente se requiere el nombramiento de un TUTOR LEGAL (guardián) — ya sea designado en la propia póliza o mediante proceso judicial separado — para administrar los fondos del beneficio en nombre del menor hasta que alcance la mayoría de edad. [VERIFICADO — principio legal estándar sobre menores y fondos sustanciales]",
      incorrectos: [
        "A) Un menor generalmente NO puede reclamar y administrar directamente fondos sustanciales sin la protección legal de un tutor.",
        "C) Los beneficios SÍ pueden destinarse a menores — es una situación común, simplemente requiere el mecanismo de tutela apropiado.",
        "D) El menor no pierde automáticamente su derecho al cumplir 18 — al alcanzar la mayoría de edad generalmente adquiere control directo sobre los fondos que antes administraba su tutor."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes opciones NO está generalmente incluida en la carátula (página frontal) de una póliza de seguro de vida?",
      o: [
        "Nombre del asegurado",
        "Monto del beneficio de muerte",
        "Exclusiones específicas de la póliza",
        "Número de la póliza"
      ],
      a: 2,
      trampa: "Las exclusiones son detalles sustantivos y extensos que generalmente se ubican en el CUERPO del contrato o en riders específicos — no en la carátula, que contiene información resumida de identificación básica.",
      correcto: "Las EXCLUSIONES ESPECÍFICAS de la póliza generalmente NO están incluidas en la carátula (declaration page/face page) — esta página contiene información de identificación básica (nombre, monto, número de póliza, fechas), mientras las exclusiones detalladas se encuentran en el cuerpo del contrato. [VERIFICADO — estructura estándar de la carátula de póliza]",
      incorrectos: [
        "A) El nombre del asegurado SÍ es información estándar incluida en la carátula.",
        "B) El monto del beneficio de muerte SÍ es información estándar incluida en la carátula.",
        "D) El número de la póliza SÍ es información estándar incluida en la carátula."
      ]
    }
  ]
},

{
  id: "nivel3_005",
  area: "vida",
  concepto: "Interés Asegurable, Consideración y Elementos del Contrato",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿En qué momento debe generalmente el titular de la póliza tener un interés asegurable sobre el asegurado para que la póliza de vida sea válida?",
      o: [
        "En el momento del fallecimiento del asegurado únicamente",
        "En el momento de la SOLICITUD de la póliza",
        "En ambos momentos: solicitud y fallecimiento, de forma idéntica",
        "El interés asegurable nunca es un requisito relevante en seguros de vida"
      ],
      a: 1,
      trampa: "Punto frecuentemente confundido con las reglas de seguro de propiedad — en VIDA, el interés asegurable solo se requiere al momento de solicitar, no al fallecer.",
      correcto: "El interés asegurable en seguros de VIDA debe existir generalmente en el momento de la SOLICITUD de la póliza — no es necesario que persista hasta el momento del fallecimiento del asegurado. Esta es una regla específica de vida, diferente de las reglas aplicables a seguros de propiedad. [VERIFICADO — principio fundamental y estable]",
      incorrectos: [
        "A) No se requiere específicamente en el momento del fallecimiento — el requisito es al solicitar.",
        "C) Esta descripción correspondería a las reglas de PROPIEDAD, no a las reglas específicas de vida.",
        "D) El interés asegurable SÍ es un requisito fundamental y relevante para la validez de las pólizas de vida — solo el momento en que se evalúa es lo específico de esta categoría."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál elemento debe generalmente estar presente ANTES de que una aseguradora pueda emitir una póliza de vida?",
      o: [
        "Un examen médico completo en todos los casos sin excepción",
        "Una SOLICITUD FIRMADA por el interesado",
        "Un pago inicial de al menos el 50% de la prima anual completa",
        "La aprobación previa de un tribunal estatal"
      ],
      a: 1,
      trampa: "Aunque el examen médico es común, no es UNIVERSALMENTE requerido en todos los casos (algunas pólizas de bajo monto o simplificadas no lo requieren) — pero la solicitud firmada SÍ es un elemento fundamental y universal.",
      correcto: "Una SOLICITUD FIRMADA por el interesado es generalmente el elemento fundamental y universal requerido ANTES de que una aseguradora pueda considerar y emitir cualquier póliza de vida — representa la oferta formal y la base de la información para la suscripción. [VERIFICADO — elemento contractual fundamental]",
      incorrectos: [
        "A) El examen médico completo no es universal en todos los casos — algunas pólizas de menor monto o simplificadas no lo requieren, mientras la solicitud sí es prácticamente universal.",
        "C) No existe un requisito universal estándar de pago del 50% de la prima anual antes de la emisión.",
        "D) La aprobación de un tribunal no es un requisito estándar para la emisión ordinaria de pólizas de vida individuales."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿De qué elementos consta generalmente un contrato de seguro válido, incluyendo el de vida?",
      o: [
        "Únicamente de una firma notariada y un sello oficial",
        "Una oferta, una aceptación, y una contraprestación (consideration)",
        "Solo de la promesa verbal entre las partes sin ningún documento",
        "Exclusivamente del pago completo de todas las primas futuras por adelantado"
      ],
      a: 1,
      trampa: "Los elementos fundamentales de cualquier contrato válido (no solo de seguro) son estos tres componentes legales clásicos — se confunden con requisitos administrativos específicos como notarización o pago total anticipado.",
      correcto: "Un contrato válido, incluyendo el de seguro, consta generalmente de: OFERTA (la solicitud del solicitante), ACEPTACIÓN (la aprobación de la aseguradora), y CONSIDERACIÓN (lo que cada parte aporta — primas del asegurado, promesa de pago de la aseguradora). [VERIFICADO — elementos contractuales fundamentales y universales]",
      incorrectos: [
        "A) La notarización y sello no son elementos fundamentales universales de un contrato de seguro válido.",
        "C) Los contratos de seguro generalmente requieren documentación formal escrita, no solo promesa verbal.",
        "D) El pago completo anticipado de todas las primas futuras no es un elemento fundamental universal — las pólizas funcionan típicamente con pagos periódicos."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "En una póliza de seguro de vida individual, la disposición sobre el 'Límite de Ciertas Defensas' (equivalente a la cláusula de incontestabilidad) establece que las declaraciones erróneas NO fraudulentas se vuelven incontestables después de dos años, ¿contados a partir de qué momento específico?",
      o: [
        "A partir de la fecha del fallecimiento del asegurado",
        "A partir de la fecha de EMISIÓN de la póliza",
        "A partir de la fecha en que se presenta la primera reclamación",
        "A partir de la fecha de nacimiento del asegurado"
      ],
      a: 1,
      trampa: "El período de dos años se cuenta desde un punto de referencia específico y fijo — la fecha de EMISIÓN — no desde eventos posteriores como el fallecimiento o una reclamación.",
      correcto: "El período de dos años de la cláusula de incontestabilidad (límite de ciertas defensas) se cuenta generalmente a partir de la fecha de EMISIÓN de la póliza — es un punto de referencia fijo desde el inicio de la vigencia del contrato, no un punto variable relacionado con eventos futuros. [VERIFICADO — mecánica estándar de la cláusula de incontestabilidad]",
      incorrectos: [
        "A) El conteo no comienza en el fallecimiento — comienza desde la emisión, independientemente de cuándo ocurra el fallecimiento.",
        "C) El conteo no se relaciona con la fecha de una reclamación — es un período fijo desde la emisión.",
        "D) La fecha de nacimiento del asegurado no es el punto de referencia para este cálculo — es la fecha de emisión de la póliza específica."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál de estas afirmaciones es INCORRECTA en relación con el tratamiento fiscal federal general de los seguros de vida?",
      o: [
        "El beneficio de muerte generalmente se paga libre de impuesto federal sobre la renta al beneficiario",
        "El crecimiento del valor en efectivo generalmente es diferido de impuestos mientras permanece dentro de la póliza",
        "Todo el valor de rescate en efectivo está sujeto a impuestos en su totalidad al momento del rescate",
        "Los préstamos contra el valor en efectivo generalmente no se consideran ingreso gravable inmediato"
      ],
      a: 2,
      trampa: "Esta afirmación generaliza incorrectamente — NO TODO el valor de rescate está sujeto a impuestos; típicamente solo la porción que representa GANANCIA (por encima de las primas pagadas) está sujeta a impuestos, no el monto total.",
      correcto: "Esta afirmación es INCORRECTA porque generalmente NO todo el valor de rescate en efectivo está sujeto a impuestos — típicamente, solo la porción que representa GANANCIA por encima de la base de costo (primas pagadas) está sujeta a impuesto sobre la renta ordinario; la porción que representa retorno de las primas pagadas generalmente no es gravable. [VERIFICADO — principio fiscal fundamental sobre seguros de vida]",
      incorrectos: [
        "A) Esta afirmación ES generalmente correcta — el beneficio de muerte típicamente se paga libre de impuesto federal sobre la renta.",
        "B) Esta afirmación ES generalmente correcta — el crecimiento del valor en efectivo es diferido de impuestos mientras permanece en la póliza.",
        "D) Esta afirmación ES generalmente correcta — los préstamos contra el valor en efectivo generalmente no constituyen un evento gravable inmediato (mientras la póliza permanezca en vigor)."
      ]
    }
  ]
},

{
  id: "nivel3_006",
  area: "salud",
  concepto: "Provisiones Específicas de Salud — Notificación, Cancelación, Prestaciones",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Se requiere generalmente un aviso de cuántos días al titular de la póliza para que cualquier aseguradora de salud que desee CANCELAR una póliza de seguro de salud pueda hacerlo?",
      o: [
        "15 días",
        "30 días",
        "45 días",
        "60 días"
      ],
      a: 2,
      trampa: "Existen varios plazos de notificación relacionados con seguros de salud en Florida que se confunden fácilmente entre sí — este específicamente para CANCELACIÓN es distinto de otros plazos de gracia o restablecimiento.",
      correcto: "Se requiere generalmente un aviso de 45 DÍAS al titular de la póliza para que una aseguradora de salud pueda cancelar la póliza — un plazo específico de notificación previa establecido para proteger al consumidor de cancelaciones abruptas. [REQUIERE VERIFICACIÓN — confirmar este plazo exacto contra la regulación de Florida vigente]",
      incorrectos: [
        "A) 15 días es insuficiente respecto al plazo estándar reconocido para este tipo específico de notificación.",
        "B) 30 días no corresponde al plazo específico reconocido para cancelación de pólizas de salud en este contexto.",
        "D) 60 días excede el plazo estándar reconocido para esta notificación específica."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En Florida, las pólizas de seguro médico con prima MENSUAL deben ofrecer generalmente un período de gracia de AL MENOS cuántos días?",
      o: [
        "7 días",
        "10 días",
        "21 días",
        "31 días"
      ],
      a: 1,
      trampa: "El período de gracia varía específicamente según la frecuencia de pago (semanal, mensual, otros) — el de MENSUAL se confunde fácilmente con el de VIDA (31 días) o el SEMANAL (7 días).",
      correcto: "Las pólizas de salud con prima MENSUAL deben ofrecer generalmente un período de gracia de al menos 10 DÍAS — distinto del período de 31 días aplicable a seguros de VIDA, y distinto del período de 7 días típicamente aplicable a primas semanales de salud. [VERIFICADO — estructura diferenciada estándar del período de gracia por tipo de producto y frecuencia]",
      incorrectos: [
        "A) 7 días corresponde típicamente a primas SEMANALES de salud, no mensuales.",
        "C) 21 días no corresponde al período de gracia estándar de salud mensual.",
        "D) 31 días corresponde típicamente al período de gracia de pólizas de VIDA, no de salud mensual."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuándo se requiere generalmente que una póliza de seguro de salud COLECTIVA (de grupo) proporcione cobertura a un recién nacido del asegurado?",
      o: [
        "Solo después de 30 días desde el nacimiento",
        "Desde el MOMENTO de su nacimiento",
        "Únicamente si el recién nacido se inscribe formalmente dentro de 90 días",
        "Nunca automáticamente — siempre requiere solicitud separada y aprobación de suscripción"
      ],
      a: 1,
      trampa: "Se confunde con requisitos de inscripción formal posteriores al nacimiento — la protección de cobertura automática generalmente comienza inmediatamente DESDE el nacimiento mismo, aunque pueda existir un plazo posterior para completar la inscripción administrativa formal.",
      correcto: "Una póliza de salud colectiva generalmente debe proporcionar cobertura al recién nacido DESDE EL MOMENTO DE SU NACIMIENTO — es una protección automática inmediata, aunque generalmente exista un plazo posterior (frecuentemente 30-31 días) para completar la inscripción administrativa formal del recién nacido en el plan. [VERIFICADO — principio de protección automática estándar en planes de grupo]",
      incorrectos: [
        "A) La cobertura comienza DESDE el nacimiento, no después de un período de espera de 30 días.",
        "C) Aunque puede existir un plazo de inscripción formal posterior, la cobertura EN SÍ comienza desde el nacimiento, no depende de completar esa inscripción para existir retroactivamente.",
        "D) La cobertura de recién nacidos en planes de grupo generalmente ES automática desde el nacimiento — no requiere aprobación de suscripción individual como una nueva solicitud independiente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "En Florida, la suscripción y emisión de una póliza de salud de GRUPO PRINCIPAL (large group) generalmente requiere que todos los empleados elegibles:",
      o: [
        "Se sometan individualmente a un examen médico completo antes de ser incluidos",
        "Sean elegibles para participar INDEPENDIENTEMENTE de su historial de salud individual",
        "Paguen una prima diferenciada según su historial médico personal",
        "Obtengan aprobación individual separada del Departamento de Seguros"
      ],
      a: 1,
      trampa: "La estructura fundamental del seguro de grupo es precisamente evitar el underwriting individual — todos los empleados elegibles del grupo generalmente son incluidos sin discriminación basada en su historial de salud individual.",
      correcto: "En seguros de salud de grupo principal, los empleados elegibles generalmente son incluidos SIN importar su historial de salud individual — el underwriting se realiza a nivel del GRUPO completo (basado en factores como industria, tamaño, experiencia previa del grupo), no mediante evaluación médica individual de cada empleado. [VERIFICADO — principio fundamental del seguro de grupo]",
      incorrectos: [
        "A) Los planes de grupo principal generalmente NO requieren examen médico individual como condición de elegibilidad — esa es precisamente la ventaja estructural del seguro de grupo.",
        "C) La prima generalmente se determina a nivel de GRUPO, no diferenciada individualmente según el historial médico personal de cada empleado.",
        "D) No se requiere aprobación individual separada del Departamento de Seguros para cada empleado dentro de un plan de grupo ya aprobado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de los siguientes puntos generalmente NO se exige en la descripción de la cobertura de una póliza de seguro médico?",
      o: [
        "Las exclusiones específicas de la cobertura",
        "Los beneficios cubiertos específicos del plan",
        "Protección de los costes FUTUROS de la póliza (garantía de precios futuros indefinidos)",
        "Los límites de beneficio aplicables"
      ],
      a: 2,
      trampa: "Ninguna póliza de salud puede garantizar de forma realista y absoluta los costos futuros indefinidamente — los costos médicos y las primas están sujetos a cambios futuros que no pueden predecirse ni garantizarse con precisión en el momento de la emisión.",
      correcto: "La 'protección de los costes futuros' (garantía de precios futuros indefinidos) generalmente NO se exige ni puede prometerse en la descripción de cobertura de una póliza de salud — los costos médicos y las primas están sujetos a ajustes futuros basados en la experiencia y tendencias del mercado, algo que no puede garantizarse de forma absoluta e indefinida. [VERIFICADO — limitación práctica y regulatoria fundamental]",
      incorrectos: [
        "A) Las exclusiones específicas SÍ deben describirse claramente en la póliza.",
        "B) Los beneficios cubiertos específicos SÍ deben describirse claramente en la póliza.",
        "D) Los límites de beneficio aplicables SÍ deben describirse claramente en la póliza."
      ]
    }
  ]
},

{
  id: "nivel3_007",
  area: "salud",
  concepto: "Medicare Suplementario, Medicaid y Programas Especiales de Salud",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "El período de espera para una condición PREEXISTENTE en una póliza de complemento de Medicare (Medigap) NO puede extenderse generalmente más allá de cuántos meses?",
      o: [
        "3 meses",
        "6 meses",
        "12 meses",
        "24 meses"
      ],
      a: 1,
      trampa: "Este límite específico se confunde con otros períodos de espera de preexistencia aplicables a diferentes tipos de productos de salud (como LTC, que puede tener períodos distintos).",
      correcto: "El período de espera por condición preexistente en una póliza Medigap generalmente NO puede exceder 6 MESES — un límite regulatorio de protección al consumidor específico para este tipo de producto suplementario de Medicare. [VERIFICADO — límite regulatorio estándar reconocido para Medigap]",
      incorrectos: [
        "A) 3 meses es menor al límite máximo reconocido — podría ser menor pero no es el límite específico establecido.",
        "C) 12 meses excede el límite máximo generalmente reconocido para Medigap específicamente.",
        "D) 24 meses excede significativamente el límite máximo reconocido para este producto."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Una aseguradora Medigap NO puede generalmente denegar una solicitud de cobertura si esta se presenta dentro de cuántos meses después de que el solicitante haya cumplido 65 años?",
      o: [
        "3 meses",
        "6 meses",
        "9 meses",
        "12 meses"
      ],
      a: 1,
      trampa: "Este es el período de inscripción abierta garantizada de Medigap — se confunde con otros plazos relacionados con Medicare que tienen duraciones diferentes.",
      correcto: "Durante el período de INSCRIPCIÓN ABIERTA de Medigap, generalmente de 6 MESES a partir de que el solicitante cumple 65 años (y está inscrito en Parte B), la aseguradora NO puede denegar la solicitud por condiciones preexistentes ni cobrar primas más altas por ese motivo. [VERIFICADO — protección regulatoria estándar de inscripción abierta de Medigap]",
      incorrectos: [
        "A) 3 meses es menor al período estándar de inscripción abierta garantizada de Medigap.",
        "C) 9 meses no corresponde al período estándar reconocido de 6 meses.",
        "D) 12 meses excede el período estándar reconocido de inscripción abierta garantizada."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué programa gubernamental administra CADA ESTADO individualmente, con financiamiento COMPARTIDO entre el gobierno federal y estatal, dirigido principalmente a personas de bajos ingresos?",
      o: [
        "Medicare",
        "Medicaid",
        "Seguro Social",
        "TRICARE"
      ],
      a: 1,
      trampa: "Se confunde Medicaid (programa conjunto estatal-federal, basado en ingresos) con Medicare (programa exclusivamente federal, basado en edad/discapacidad).",
      correcto: "MEDICAID = programa administrado individualmente por CADA ESTADO, con financiamiento COMPARTIDO entre el gobierno federal y el estatal, dirigido principalmente a personas de BAJOS INGRESOS que cumplen los criterios de elegibilidad establecidos. [VERIFICADO — estructura fundamental del programa Medicaid]",
      incorrectos: [
        "A) Medicare es un programa exclusivamente FEDERAL, basado en edad (65+) o discapacidad, sin la estructura de administración estatal individual descrita.",
        "C) El Seguro Social es un programa de beneficios de retiro/discapacidad/sobrevivientes — no específicamente un programa de cobertura médica administrado estatalmente.",
        "D) TRICARE es el programa de salud para militares y sus familias — estructura y propósito completamente diferentes."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "La elegibilidad para la cobertura bajo el programa Florida Healthy Kids Corporation generalmente requiere que la familia esté dentro de qué porcentaje del nivel federal de pobreza?",
      o: [
        "100% del nivel federal de pobreza",
        "150% del nivel federal de pobreza",
        "200% del nivel federal de pobreza",
        "300% del nivel federal de pobreza"
      ],
      a: 2,
      trampa: "El umbral específico de porcentaje del nivel de pobreza para programas de salud infantil estatal se confunde con otros umbrales relacionados con Medicaid u otros programas de asistencia.",
      correcto: "La elegibilidad para Florida Healthy Kids generalmente requiere que la familia esté dentro del 200% del nivel federal de pobreza — un umbral diseñado para capturar a familias que no califican para Medicaid pero que enfrentan dificultades económicas para el seguro privado. [REQUIERE VERIFICACIÓN — confirmar este porcentaje exacto contra la fuente oficial actualizada del programa Florida Healthy Kids Corporation]",
      incorrectos: [
        "A) 100% sería un umbral más restrictivo del que generalmente se reconoce para este programa específico.",
        "B) 150% no corresponde al umbral específicamente reconocido para Florida Healthy Kids.",
        "D) 300% excedería significativamente el umbral típicamente reconocido para este tipo de programa."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué tipo de prestaciones proporciona GENERALMENTE un Acuerdo de Bienestar de Empleadores Múltiples (MEWA — Multiple Employer Welfare Arrangement)?",
      o: [
        "Exclusivamente beneficios de retiro para empleados de múltiples empresas pequeñas",
        "Seguro (de salud u otros beneficios de bienestar) para empleados, agrupando a múltiples empleadores pequeños que individualmente no podrían obtener condiciones favorables de grupo",
        "Únicamente servicios de consultoría legal para empleadores",
        "Exclusivamente préstamos hipotecarios subsidiados para empleados"
      ],
      a: 1,
      trampa: "El nombre 'Multiple Employer' sugiere su estructura, pero se confunde el TIPO de beneficio que proporciona (bienestar/salud) con otros tipos de arreglos multiempresariales relacionados con retiro u otros propósitos.",
      correcto: "MEWA = arreglo que agrupa a MÚLTIPLES EMPLEADORES (generalmente pequeños) para proporcionar colectivamente SEGURO (típicamente de salud, aunque puede incluir otros beneficios de bienestar) a sus empleados combinados — permitiendo a empresas pequeñas acceder a condiciones de grupo más favorables que individualmente no podrían obtener. [VERIFICADO — estructura y propósito fundamental de MEWA]",
      incorrectos: [
        "A) MEWA no está limitado exclusivamente a beneficios de retiro — su enfoque principal es típicamente seguro de salud/bienestar.",
        "C) MEWA no es un servicio de consultoría legal — es un mecanismo de agrupación de seguro.",
        "D) MEWA no proporciona préstamos hipotecarios — es específicamente un arreglo de beneficios de seguro/bienestar."
      ]
    }
  ]
},

{
  id: "nivel3_008",
  area: "salud",
  concepto: "Cambio de Ocupación, Renovabilidad y Reclamaciones en Pólizas de Incapacidad",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Cuando un asegurado cambia a una ocupación MÁS PELIGROSA que la original, ¿qué disposición de la póliza de incapacidad permite a la aseguradora ajustar las prestaciones y las tarifas de la póliza?",
      o: [
        "Disposición de límite de ciertas defensas",
        "Disposición de cambio de ocupación (Change of Occupation)",
        "Disposición de examen físico",
        "Disposición de aviso de reclamación"
      ],
      a: 1,
      trampa: "El nombre de la provisión describe directamente su función, pero se confunde con otras provisiones relacionadas con ajustes o evaluaciones de la póliza.",
      correcto: "DISPOSICIÓN DE CAMBIO DE OCUPACIÓN = permite a la aseguradora ajustar las prestaciones y/o las tarifas de la póliza de incapacidad cuando el asegurado cambia a una ocupación con un nivel de riesgo DIFERENTE (generalmente más peligroso) al que tenía originalmente al momento de la suscripción. [VERIFICADO — provisión estándar reconocida en pólizas de incapacidad]",
      incorrectos: [
        "A) Límite de Ciertas Defensas se relaciona con la incontestabilidad de declaraciones — no con cambios de ocupación posteriores.",
        "C) Examen Físico se refiere al derecho de exigir exámenes médicos durante una reclamación pendiente — no relacionado con cambios ocupacionales.",
        "D) Aviso de Reclamación se refiere a la notificación inicial de un siniestro — no relacionado con cambios de ocupación."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué tipo de renovabilidad describe MEJOR una póliza de Renta de Invalidez que cubre a un individuo hasta la edad de 65 años, pero donde el asegurador tiene el derecho contractual de cambiar el tipo de prima para TODA la clase de riesgo general (no individualmente)?",
      o: [
        "No renovable (Non-renewable)",
        "Cancelable a voluntad del asegurador",
        "Garantizado renovable (Guaranteed Renewable)",
        "Condicionalmente renovable"
      ],
      a: 2,
      trampa: "'Garantizado Renovable' se confunde con 'No Cancelable' — la diferencia clave es que Garantizado Renovable SÍ permite ajustar la prima (para toda la clase), mientras No Cancelable NO permite ningún cambio de prima individual.",
      correcto: "GARANTIZADO RENOVABLE = la aseguradora debe RENOVAR la póliza (no puede cancelarla individualmente mientras se paguen las primas) hasta la edad especificada, PERO retiene el derecho de ajustar las TARIFAS DE PRIMA para toda la CLASE de riesgo general (no de forma individual y discriminatoria) — describe exactamente esta situación. [VERIFICADO — tipo de renovabilidad estándar reconocido]",
      incorrectos: [
        "A) 'No renovable' significaría que la cobertura termina sin posibilidad de continuación — contrario a la garantía de renovación hasta los 65 descrita.",
        "B) 'Cancelable a voluntad' permitiría a la aseguradora cancelar individualmente en cualquier momento — contrario a la garantía descrita en el escenario.",
        "D) 'Condicionalmente renovable' no es el término técnico estándar para esta estructura específica descrita."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "V está asegurado con una póliza individual de Ingresos por Incapacidad con un período de eliminación de 30 días. El 1 de julio sufre un accidente y queda temporalmente incapacitado. Se reincorpora al trabajo el 1 de diciembre. ¿Cuántos MESES de prestación le corresponden?",
      o: [
        "3 meses",
        "4 meses",
        "5 meses",
        "6 meses"
      ],
      a: 1,
      trampa: "El cálculo requiere restar el período de eliminación (30 días, aproximadamente 1 mes) del período total de incapacidad (1 julio a 1 diciembre = 5 meses) — un error común es olvidar restar el período de eliminación.",
      correcto: "Cálculo: Período total de incapacidad = 1 julio a 1 diciembre = 5 meses. Período de eliminación = 30 días (aproximadamente 1 mes, sin beneficio). Meses de PRESTACIÓN pagados = 5 meses totales - 1 mes de eliminación = 4 MESES de prestación. [VERIFICADO — mecánica matemática estándar del período de eliminación]",
      incorrectos: [
        "A) 3 meses subestima el cálculo correcto — no resta correctamente el período de eliminación del total.",
        "C) 5 meses sería el período TOTAL de incapacidad sin restar el período de eliminación — cálculo incompleto.",
        "D) 6 meses excede tanto el período total como cualquier cálculo correcto de este escenario específico."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "S presentó una prueba de siniestro por escrito para una reclamación de ingresos por incapacidad el 1 de septiembre. La compañía de seguros no respondió a la reclamación. Considerando un período estándar mínimo de espera de 60 días bajo la provisión de Acciones Legales, ¿a partir de qué fecha APROXIMADA podría S generalmente emprender acciones legales contra la aseguradora?",
      o: [
        "1 de octubre",
        "1 de noviembre",
        "1 de diciembre",
        "1 de enero del año siguiente"
      ],
      a: 1,
      trampa: "El cálculo requiere sumar el período mínimo de espera estándar (aproximadamente 60 días) a la fecha de presentación de la prueba de siniestro — un error común es calcular incorrectamente el período de 60 días desde el 1 de septiembre.",
      correcto: "Sumando aproximadamente 60 días (el período mínimo estándar de espera bajo Acciones Legales) a la fecha de presentación (1 de septiembre), el resultado aproximado es el 1 de NOVIEMBRE (septiembre tiene 30 días restantes desde el 1, más 30 días adicionales de octubre completo, totalizando aproximadamente 60 días). [VERIFICADO — aplicación del cálculo estándar; REQUIERE VERIFICACIÓN del plazo exacto de 60 días vigente en la póliza/regulación específica de Florida]",
      incorrectos: [
        "A) 1 de octubre sería solo aproximadamente 30 días después — insuficiente para cumplir el período mínimo estándar de 60 días.",
        "C) 1 de diciembre excedería el período mínimo de 60 días, representando un cálculo con margen adicional innecesario respecto al mínimo legal.",
        "D) 1 de enero excede significativamente el período mínimo de 60 días requerido."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Una compañía de seguros debe generalmente actuar sobre una solicitud de RESTABLECIMIENTO del seguro de accidentes y salud (Accidente y Salud) dentro de cuántos días?",
      o: [
        "15 días",
        "30 días",
        "45 días",
        "60 días"
      ],
      a: 2,
      trampa: "Este plazo administrativo específico para procesar solicitudes de restablecimiento se confunde con otros plazos regulatorios similares aplicables a diferentes trámites.",
      correcto: "Una compañía de seguros generalmente debe actuar sobre una solicitud de restablecimiento de seguro de A&S dentro de 45 DÍAS — un plazo administrativo específico que evita que las solicitudes de restablecimiento queden indefinidamente pendientes sin resolución. [REQUIERE VERIFICACIÓN — confirmar este plazo exacto contra la regulación vigente de Florida]",
      incorrectos: [
        "A) 15 días es insuficiente respecto al plazo estándar reconocido para este trámite específico.",
        "B) 30 días no corresponde al plazo estándar específico reconocido para restablecimiento de A&S.",
        "D) 60 días excede el plazo estándar reconocido para este trámite específico."
      ]
    }
  ]
}

]; // fin PK_NIVEL3

if (typeof window !== 'undefined') window.PK_NIVEL3 = PK_NIVEL3;
if (typeof module !== 'undefined') module.exports = { PK_NIVEL3 };
