// ============================================================
// PEARSON KILLER — pk-data-underwriting.js
// Módulo: Procedimientos de Suscripción en Campo
// 5 conceptos × 5 variantes = 25 preguntas
// Fuente: Manual 2-15 Florida, FCRA, Florida Statutes
// ============================================================

const PK_UNDERWRITING = [

{
  id: "susc_001",
  area: "suscripcion",
  concepto: "Recibo Condicional vs Recibo Vinculante",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "Un agente cobra la primera prima y entrega un recibo condicional. El solicitante fallece esa noche. ¿Cuándo se considera que la cobertura estaba vigente?",
      o: [
        "Desde la fecha en que la compañía aprueba la solicitud",
        "Desde la fecha de la solicitud, siempre que el solicitante hubiera calificado como riesgo asegurable",
        "Desde la fecha en que se entregue la póliza física al asegurado",
        "El recibo condicional no otorga ningún tipo de cobertura temporal"
      ],
      a: 1,
      trampa: "Confundir 'fecha de aprobación' con 'fecha de solicitud'. La cobertura retroactiva solo aplica si el solicitante habría calificado.",
      correcto: "El recibo condicional hace la cobertura efectiva desde la FECHA DE SOLICITUD, pero SOLO si el asegurado habría calificado como riesgo estándar bajo los criterios de la compañía.",
      incorrectos: [
        "A) La fecha de aprobación corresponde al recibo vinculante, no al condicional.",
        "C) La fecha de entrega aplica cuando no hay ningún recibo de ningún tipo.",
        "D) Sí otorga cobertura — de forma condicional a la asegurabilidad del solicitante."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "INVERSIONES",
      q: "¿En qué se diferencia un recibo VINCULANTE de un recibo CONDICIONAL?",
      o: [
        "El recibo vinculante requiere examen médico antes de activar cualquier cobertura",
        "El recibo condicional otorga cobertura inmediata incondicional; el vinculante depende de la asegurabilidad",
        "El recibo vinculante otorga cobertura inmediata SIN importar si el solicitante califica; el condicional depende de la asegurabilidad demostrada",
        "Ambos son idénticos en sus efectos legales y protecciones"
      ],
      a: 2,
      trampa: "Las definiciones están INVERTIDAS en la opción B. El VINCULANTE es el incondicional, no el condicional.",
      correcto: "Vinculante = cobertura inmediata INCONDICIONAL, independientemente de si el solicitante califica. Condicional = cobertura retroactiva SOLO si el solicitante habría calificado.",
      incorrectos: [
        "A) Ninguno requiere examen médico previo para activar la cobertura temporal.",
        "B) Esta opción invierte las definiciones — el vinculante es el incondicional.",
        "D) Sus efectos legales son fundamentalmente distintos — uno es condicional y el otro no."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "Durante la suscripción se descubre que el solicitante tenía cáncer terminal no declarado. El agente ya había emitido un recibo condicional. ¿Cuál es la consecuencia?",
      o: [
        "La compañía paga el beneficio completo porque ya se emitió el recibo",
        "La compañía devuelve únicamente la prima — el solicitante no hubiera calificado, por lo tanto no existe cobertura bajo el recibo condicional",
        "La compañía paga el 50% del beneficio como compromiso equitativo",
        "La cobertura es válida porque el agente desconocía la condición al emitir el recibo"
      ],
      a: 1,
      trampa: "La emisión del recibo NO garantiza el pago automático si el solicitante no era asegurable bajo los criterios estándar.",
      correcto: "Si el solicitante NO habría calificado bajo los criterios estándar, NO existe cobertura bajo el recibo condicional. La compañía solo devuelve la prima pagada.",
      incorrectos: [
        "A) El recibo condicional no garantiza pago automático — la asegurabilidad es una condición obligatoria.",
        "C) No existe pago parcial del 50% bajo este mecanismo legal.",
        "D) El conocimiento del agente no determina la validez de la cobertura condicional."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "CASI_IDENTICAS",
      q: "¿Cuál afirmación sobre el recibo condicional es la MÁS PRECISA según la práctica de suscripción?",
      o: [
        "Otorga cobertura temporal desde la fecha de solicitud sin ninguna condición adicional de asegurabilidad",
        "Convierte la póliza en vigente desde la fecha de entrega, sujeto a aprobación final de underwriting",
        "Proporciona cobertura retroactiva desde la fecha de solicitud, únicamente si el solicitante habría sido aprobado bajo los criterios estándar de la compañía",
        "Garantiza automáticamente la devolución de prima si la solicitud es finalmente rechazada"
      ],
      a: 2,
      trampa: "La opción A omite la condición de asegurabilidad. La B cambia la fecha efectiva. La D describe solo un efecto secundario, no la definición.",
      correcto: "La definición completa requiere DOS elementos: 1) Retroactiva a la fecha de solicitud, Y 2) Condición de asegurabilidad estándar. Ambos son esenciales e inseparables.",
      incorrectos: [
        "A) Omite el requisito crítico de asegurabilidad — sin él, sería un recibo vinculante.",
        "B) La cobertura retroactiva va a la fecha de SOLICITUD, no de entrega de la póliza.",
        "D) La devolución de prima es una consecuencia del rechazo, no la definición del recibo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Un agente emite un recibo condicional el 1 de marzo. El examen médico se programa para el 10 de marzo. El solicitante fallece el 5 de marzo — antes del examen. La autopsia confirma que era perfectamente asegurable. ¿Cuál es el resultado más probable?",
      o: [
        "La compañía no paga — el examen médico no se había completado al momento del fallecimiento",
        "La compañía paga — era asegurable según los criterios de la compañía, cumpliendo la condición del recibo aunque el examen no se completara",
        "La compañía paga solo si el agente certifica por escrito que el solicitante parecía saludable",
        "La compañía paga el 50% porque la suscripción no había concluido formalmente"
      ],
      a: 1,
      trampa: "El examen PENDIENTE no invalida el recibo si el solicitante ERA asegurable. La condición es 'habría calificado', no 'el examen fue completado'.",
      correcto: "La condición del recibo es que el solicitante HABRÍA CALIFICADO — no que el examen esté completado. La autopsia confirma asegurabilidad perfecta → la compañía paga el beneficio completo.",
      incorrectos: [
        "A) La condición no requiere que el examen esté completo — requiere que el solicitante fuera asegurable.",
        "C) La certificación del agente no es un requisito legal para el recibo condicional.",
        "D) No existe pago proporcional del 50% en este contexto legal."
      ]
    }
  ]
},

{
  id: "susc_002",
  area: "suscripcion",
  concepto: "Fuentes de Información para Suscripción (APS, MIB, MVR, Inspección)",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál documento provee al suscriptor información sobre el historial médico del solicitante según lo reportado por su propio médico personal?",
      o: [
        "Reporte del MIB (Buró de Información Médica)",
        "Reporte de vehículos motorizados (MVR)",
        "Declaración del médico tratante (APS — Attending Physician Statement)",
        "Reporte de inspección del consumidor"
      ],
      a: 2,
      trampa: "Confundir APS con MIB. El MIB contiene datos codificados de solicitudes anteriores de seguro — no información del médico personal del solicitante.",
      correcto: "APS (Attending Physician Statement / Declaración del Médico Tratante) proviene del médico PERSONAL del solicitante y contiene su historial médico completo tal como lo conoce ese médico específico.",
      incorrectos: [
        "A) El MIB contiene información codificada de solicitudes de seguro anteriores — NO del médico personal.",
        "B) El MVR (Motor Vehicle Report) contiene el historial de manejo y accidentes de tránsito.",
        "D) El reporte de inspección cubre carácter, reputación, estilo de vida y situación financiera."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "CASI_IDENTICAS",
      q: "El MIB (Medical Information Bureau / Buró de Información Médica) proporciona a las aseguradoras miembros información que es:",
      o: [
        "Diagnósticos médicos definitivos del solicitante certificados por su médico de cabecera",
        "El historial completo de accidentes automovilísticos y violaciones de tránsito del solicitante",
        "Información codificada de solicitudes de seguro anteriores presentadas a compañías miembros — NO diagnósticos definitivos",
        "Una copia certificada del expediente médico completo del solicitante"
      ],
      a: 2,
      trampa: "El MIB NO provee diagnósticos definitivos. Solo señales de alerta codificadas que requieren investigación adicional por parte del suscriptor.",
      correcto: "El MIB contiene información CODIFICADA de solicitudes de seguro anteriores. Es una señal de alerta para investigar más — nunca constituye un diagnóstico definitivo ni base suficiente para rechazar.",
      incorrectos: [
        "A) El MIB nunca provee diagnósticos definitivos — solo señales codificadas que requieren seguimiento.",
        "B) El historial de manejo y tránsito está en el MVR (Motor Vehicle Report), no en el MIB.",
        "D) El expediente médico completo solo lo provee el APS o el médico directamente."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "QUIEN_PAGA",
      q: "Un suscriptor quiere conocer el CARÁCTER, REPUTACIÓN y SITUACIÓN FINANCIERA de un solicitante de seguro de vida. ¿Cuál informe provee específicamente esta información?",
      o: [
        "Declaración del médico tratante (APS)",
        "Reporte del Buró de Información Médica (MIB)",
        "Reporte de inspección del consumidor (Investigative Consumer Report)",
        "Reporte de vehículos motorizados (MVR)"
      ],
      a: 2,
      trampa: "Cada documento tiene un propósito exclusivo. El carácter, reputación y situación financiera corresponden al reporte de inspección — no al APS ni al MIB.",
      correcto: "El Reporte de Inspección (Investigative Consumer Report) cubre carácter, reputación, estilo de vida y situación financiera. Está regulado por la FCRA (Fair Credit Reporting Act).",
      incorrectos: [
        "A) El APS cubre exclusivamente el historial médico personal — no carácter ni finanzas.",
        "B) El MIB cubre solicitudes de seguro anteriores — no carácter ni situación financiera.",
        "D) El MVR cubre únicamente el historial de conducción y accidentes de tránsito."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "PROCEDIMIENTO",
      q: "Según la Ley de Reporte Justo de Crédito (FCRA), si una aseguradora solicita un reporte de investigación del consumidor sobre un solicitante, ¿cuál es su obligación ANTES de obtenerlo?",
      o: [
        "Pagar al solicitante una compensación por el tiempo invertido en la investigación",
        "Notificar al solicitante que puede solicitarse un reporte de investigación sobre su carácter y reputación",
        "Obtener aprobación previa del Departamento de Servicios Financieros de Florida (DFS)",
        "Esperar a que el solicitante complete el examen médico antes de solicitar cualquier reporte"
      ],
      a: 1,
      trampa: "La FCRA exige NOTIFICACIÓN al solicitante — no aprobación gubernamental, ni pago, ni esperar resultados médicos.",
      correcto: "La FCRA exige que la aseguradora NOTIFIQUE al solicitante que puede solicitarse un reporte de investigación (inspection report) sobre él. El solicitante tiene derecho legal a saber que se está investigando su carácter y reputación.",
      incorrectos: [
        "A) No existe ninguna compensación económica al solicitante por la investigación.",
        "C) No se requiere aprobación previa del DFS para estos reportes de investigación.",
        "D) El reporte de inspección es completamente independiente del proceso de examen médico."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "MAS_MENOS",
      q: "Un suscriptor recibe una señal codificada del MIB sobre un solicitante de seguro de vida. ¿Cuál es el paso MÁS APROPIADO a seguir inmediatamente?",
      o: [
        "Rechazar la solicitud automáticamente — la señal del MIB es suficiente base para el rechazo",
        "Solicitar información adicional — APS del médico, examen médico adicional, o preguntas específicas al solicitante — para investigar adecuadamente la señal",
        "Aceptar la solicitud como riesgo estándar e ignorar la señal codificada del MIB",
        "Reportar al solicitante a las autoridades de Florida por presunto ocultamiento de información médica"
      ],
      a: 1,
      trampa: "El MIB NO es base legal suficiente para rechazar una solicitud. Es solo una señal de alerta que requiere investigación adicional obligatoria.",
      correcto: "La señal del MIB es una ALERTA DE INVESTIGACIÓN — no un diagnóstico ni un criterio de rechazo. El paso correcto es investigar con APS, examen médico adicional o preguntas específicas al solicitante antes de tomar cualquier decisión.",
      incorrectos: [
        "A) Rechazar basándose SOLO en el MIB sin investigación adicional es un error grave de suscripción.",
        "C) Ignorar una señal del MIB viola el proceso de suscripción responsable y cuidadoso.",
        "D) Una señal del MIB no constituye evidencia de fraude ni requiere reporte a ninguna autoridad."
      ]
    }
  ]
},

{
  id: "susc_003",
  area: "suscripcion",
  concepto: "Antedatación de Pólizas — Límites y Consecuencias",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En Florida, ¿cuántos meses como MÁXIMO puede antedatarse una póliza de vida para obtener una prima más baja basada en una edad de emisión menor?",
      o: [
        "3 meses hacia atrás desde la fecha de solicitud",
        "6 meses hacia atrás desde la fecha de solicitud",
        "12 meses hacia atrás desde la fecha de solicitud",
        "18 meses hacia atrás desde la fecha de solicitud"
      ],
      a: 1,
      trampa: "La respuesta intuitiva puede ser 12 meses (un año completo), pero Florida específicamente limita la antedatación a 6 meses máximo.",
      correcto: "Florida permite antedata hasta un máximo de 6 MESES. El asegurado paga primas retroactivas por ese período pero obtiene la prima correspondiente a la edad menor de forma permanente durante toda la vida de la póliza.",
      incorrectos: [
        "A) 3 meses es una antedatación legal pero no es el límite máximo permitido.",
        "C) 12 meses (un año) excede el límite legal de Florida de 6 meses — sería una violación.",
        "D) 18 meses excede significativamente el límite legal — constituiría una infracción regulatoria seria."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "ESCENARIO",
      q: "Ana cumple 35 años en enero. Solicita una póliza de vida en abril y pide que se antedate al 14 de diciembre del año anterior. ¿Cuál es la DESVENTAJA inmediata y concreta para Ana?",
      o: [
        "La póliza es completamente inválida porque las antedatas están prohibidas en Florida",
        "Debe pagar primas retroactivas por diciembre, enero, febrero y marzo — meses en que no había cobertura real durante ese período",
        "Su beneficiario queda temporalmente sin protección durante los 6 meses del período antedatado",
        "La compañía puede cancelar la póliza sin causa durante los primeros 12 meses desde la fecha antedatada"
      ],
      a: 1,
      trampa: "La antedatación es legal pero tiene un costo real e inmediato: pagar primas por meses pasados sin cobertura real durante ese período ya transcurrido.",
      correcto: "Ana paga primas retroactivas por los meses antedatados (diciembre a marzo) aunque no había cobertura real durante ese período. El beneficio permanente es una prima más baja basada en su edad de 34 años.",
      incorrectos: [
        "A) La antedatación hasta 6 meses es perfectamente legal en Florida.",
        "C) El beneficiario está protegido desde la fecha efectiva real de la cobertura — no hay brecha.",
        "D) La antedatación no otorga a la compañía ningún derecho especial de cancelación."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de las siguientes afirmaciones sobre la antedatación de pólizas de vida en Florida es INCORRECTA?",
      o: [
        "Es legal hasta un máximo de 6 meses desde la fecha de solicitud",
        "Su propósito es usar una edad de emisión menor para obtener una prima más baja de forma permanente",
        "El asegurado paga primas retroactivas por el período antedatado",
        "La compañía está obligada a reembolsar las primas del período antedatado al término de la vigencia de la póliza"
      ],
      a: 3,
      trampa: "Las primas retroactivas son un COSTO REAL para el asegurado — no un crédito o depósito que la compañía reembolsa al final.",
      correcto: "Las primas del período antedatado las PAGA el asegurado como costo de obtener la edad menor — NO se reembolsan al término de la póliza. La opción D es la afirmación INCORRECTA.",
      incorrectos: [
        "A) Esta afirmación SÍ es correcta — la antedatación máxima legal es 6 meses.",
        "B) Esta afirmación SÍ es correcta — el propósito es la prima permanentemente más baja.",
        "C) Esta afirmación SÍ es correcta — el asegurado paga primas retroactivas como costo real."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "CASI_IDENTICAS",
      q: "Carlos antedató su póliza de Whole Life 6 meses para usar la tasa de prima de su edad anterior. ¿Cuál es el efecto PERMANENTE de esta decisión sobre su póliza?",
      o: [
        "Solo reduce la prima durante los primeros 6 meses del período antedatado — luego regresa a la tasa de su edad real",
        "La prima reducida basada en la edad menor aplica DE POR VIDA — la edad de emisión oficial queda permanentemente registrada como la menor",
        "Carlos debe pagar intereses adicionales sobre las primas retroactivas además del monto normal de las primas",
        "La fecha de aniversario de la póliza se recalcula automáticamente cada año para ajustar la prima al alza"
      ],
      a: 1,
      trampa: "El beneficio de la antedatación es PERMANENTE — no solo durante los primeros 6 meses del período antedatado.",
      correcto: "La edad de emisión queda registrada como la edad MENOR de forma PERMANENTE en los registros de la compañía. La prima más baja aplica durante TODA LA VIDA de la póliza — ese es precisamente el beneficio que justifica el costo de las primas retroactivas.",
      incorrectos: [
        "A) La reducción de prima es permanente de por vida — no temporal durante solo 6 meses.",
        "C) No existe cargo de intereses adicionales sobre las primas retroactivas en la antedatación.",
        "D) La fecha de aniversario se basa en la fecha antedatada de emisión y no varía anualmente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "Un agente sugiere antedata una póliza 8 meses para que el solicitante obtenga una prima más baja. ¿Cuál es la evaluación legal MÁS PRECISA de esta situación?",
      o: [
        "Es completamente legal — el beneficio al solicitante justifica exceder el período estándar si ambas partes están de acuerdo",
        "Es ilegal — la regulación de Florida limita la antedatación a 6 meses máximo; los 8 meses constituyen una violación regulatoria",
        "Es permitida solo si tanto el suscriptor como el DFS lo aprueban expresamente por escrito",
        "Es legal porque el agente puede usar su criterio profesional para determinar la fecha de emisión más conveniente para el cliente"
      ],
      a: 1,
      trampa: "Ningún beneficio al cliente, acuerdo mutuo ni criterio profesional puede justificar exceder el límite legal. La ley establece el máximo de forma absoluta.",
      correcto: "Antedata de 8 meses VIOLA la regulación de Florida que establece un máximo irrenunciable de 6 meses. El agente incurre en una infracción regulatoria que puede resultar en sanciones, multas o revocación de licencia.",
      incorrectos: [
        "A) El acuerdo mutuo entre agente y cliente no puede superar los límites legales establecidos.",
        "C) Ni el suscriptor ni el DFS tienen autoridad para autorizar excepciones a este límite legal.",
        "D) El criterio profesional del agente no puede superar los límites establecidos por ley — nunca."
      ]
    }
  ]
},

{
  id: "susc_004",
  area: "suscripcion",
  concepto: "Clasificaciones de Riesgo — Preferido, Estándar, Subestándar, Rechazado",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "Un solicitante es aceptado para seguro de vida pero paga una prima más alta que la estándar debido a su historial médico previo. ¿Cómo se clasifica este solicitante?",
      o: [
        "Riesgo preferido (Preferred risk) — mejor que el promedio",
        "Riesgo estándar (Standard risk) — riesgo promedio del grupo",
        "Riesgo subestándar o calificado (Substandard / Rated risk)",
        "Riesgo rechazado (Declined risk) — no elegible para cobertura"
      ],
      a: 2,
      trampa: "Confundir 'subestándar' con 'rechazado'. El subestándar SÍ obtiene cobertura — pero a mayor costo para compensar el riesgo adicional.",
      correcto: "Subestándar / Calificado (Substandard / Rated) = aceptado para cobertura pero con prima MÁS ALTA que la estándar para compensar el riesgo adicional identificado. No es un rechazo.",
      incorrectos: [
        "A) Preferido es el MEJOR riesgo disponible — recibe prima más BAJA que el estándar.",
        "B) Estándar es el riesgo promedio del grupo — paga la prima regular de tablas actuariales.",
        "D) Rechazado significa que NO se emite ninguna póliza bajo ninguna prima ni condición."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál clasificación de riesgo resulta en que el solicitante NO puede obtener ningún tipo de cobertura de seguro de vida con esa compañía específica?",
      o: [
        "Subestándar (Substandard) — acepta pero con prima más alta",
        "Calificado (Rated) — acepta con modificaciones de cobertura",
        "Preferido (Preferred) — acepta con prima más baja",
        "Rechazado (Declined) — no se emite ninguna póliza"
      ],
      a: 3,
      trampa: "Subestándar y calificado suenan muy restrictivos pero AMBOS OTORGAN póliza — solo a mayor costo o con exclusiones.",
      correcto: "DECLINED (Rechazado) = la aseguradora se NIEGA a emitir cualquier póliza bajo cualquier condición o prima. No es discriminación ilegal — es underwriting legítimo basado en el nivel de riesgo que excede los parámetros aceptables.",
      incorrectos: [
        "A) Subestándar SÍ obtiene cobertura — paga una prima más alta que el estándar.",
        "B) Calificado es sinónimo de subestándar — también OBTIENE cobertura con modificaciones.",
        "C) Preferido OBTIENE cobertura con prima MÁS BAJA que el estándar — es el mejor escenario."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "Una póliza se emite con un ANEXO DE EXCLUSIÓN que elimina permanentemente la cobertura por reclamaciones relacionadas con una condición preexistente específica del solicitante. ¿Qué tipo de riesgo representa?",
      o: [
        "Riesgo preferido con condiciones especiales de cobertura personalizada",
        "Riesgo estándar con una exclusión temporal hasta que la condición mejore",
        "Riesgo subestándar manejado mediante un rider de deterioro o impairment rider",
        "Solicitud rechazada con opción de apelación dentro de 30 días"
      ],
      a: 2,
      trampa: "Una exclusión específica NO significa rechazo. Es la herramienta del suscriptor para emitir una póliza a un riesgo subestándar eliminando el problema específico de la cobertura.",
      correcto: "El Rider de Exclusión o Impairment Rider es la herramienta estándar para asegurar riesgos subestándar: se emite la póliza completa pero excluyendo permanentemente la condición médica problemática específica.",
      incorrectos: [
        "A) El riesgo preferido no requiere exclusiones — ya es bajo riesgo y recibe prima menor.",
        "B) Las exclusiones bajo un impairment rider son PERMANENTES, no temporales hasta mejora.",
        "D) Se emitió una póliza — definitivamente NO es un rechazo de ningún tipo."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es una clasificación de riesgo estándar utilizada en el proceso de suscripción de vida y salud en Florida EXCEPTO:",
      o: [
        "Preferido (Preferred)",
        "Subestándar (Substandard / Rated)",
        "Provisional (Provisional)",
        "Rechazado (Declined)"
      ],
      a: 2,
      trampa: "'Provisional' suena técnico, oficial y plausible — pero no es ninguna de las cuatro clasificaciones estándar de riesgo reconocidas.",
      correcto: "Las cuatro clasificaciones estándar en suscripción son: Preferido, Estándar, Subestándar/Calificado y Rechazado. 'Provisional' NO existe como categoría de clasificación de riesgo en el proceso estándar de underwriting.",
      incorrectos: [
        "A) Preferido SÍ es una clasificación estándar reconocida en suscripción.",
        "B) Subestándar SÍ es una clasificación estándar reconocida en suscripción.",
        "D) Rechazado SÍ es una clasificación estándar reconocida en suscripción."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "CASI_IDENTICAS",
      q: "Un suscriptor aplica una Prima Extra Plana Temporal (Temporary Flat Extra Premium). ¿Cuál es su característica DISTINTIVA respecto a la Prima Extra Plana Permanente?",
      o: [
        "Se aplica de forma permanente durante toda la vida de la póliza, igual que la permanente",
        "Es un cargo adicional fijo por cada $1,000 de cobertura que SE ELIMINA después de un período específico cuando el riesgo adicional desaparece o mejora",
        "Se calcula exclusivamente como porcentaje del beneficio de muerte total, no como cargo fijo",
        "Solo puede aplicarse a pólizas de seguro de término — nunca a pólizas permanentes de ningún tipo"
      ],
      a: 1,
      trampa: "La diferencia CLAVE entre TEMPORAL y PERMANENTE es que la temporal SE ELIMINA automáticamente cuando el riesgo adicional desaparece — la permanente nunca se elimina.",
      correcto: "Prima Extra Plana TEMPORAL = cargo fijo adicional por cada $1,000 de cobertura que se aplica durante un período específico (ej: 5 años) y luego SE ELIMINA cuando el riesgo adicional desaparece (ej: recuperación completa de salud). La PERMANENTE nunca se elimina.",
      incorrectos: [
        "A) Esa descripción corresponde a la Prima Extra Plana PERMANENTE, no a la temporal.",
        "C) Ambas (temporal y permanente) se calculan como cargo FIJO por $1,000 — no como porcentaje.",
        "D) Ambas pueden aplicarse tanto a pólizas de término como a pólizas permanentes de vida."
      ]
    }
  ]
},

{
  id: "susc_005",
  area: "suscripcion",
  concepto: "Reglas de Reemplazo de Florida — Twisting, Churning y Rebating",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Cuando un agente reemplaza una póliza de vida existente con una nueva, ¿en cuántos días HÁBILES debe notificar formalmente a la aseguradora que está siendo reemplazada?",
      o: [
        "1 día hábil desde la fecha de la solicitud nueva",
        "3 días hábiles desde la fecha de la solicitud nueva",
        "5 días hábiles desde la fecha de la solicitud nueva",
        "10 días hábiles desde la fecha de la solicitud nueva"
      ],
      a: 1,
      trampa: "Confundir con plazos de otros procesos regulatorios. La Regla de Reemplazo de Florida establece específicamente 3 días HÁBILES para la notificación.",
      correcto: "La Regla de Reemplazo de Florida exige notificar a la aseguradora que está siendo reemplazada dentro de 3 DÍAS HÁBILES. El propósito es darle la oportunidad de contactar al cliente y posiblemente retener la póliza.",
      incorrectos: [
        "A) 1 día hábil es insuficiente según la regulación de reemplazo de Florida.",
        "C) 5 días hábiles excede el plazo máximo requerido y no cumple el procedimiento correcto.",
        "D) 10 días hábiles viola completamente el plazo de 3 días establecido por la regulación."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "Un agente usa comparaciones falsas e información engañosa para convencer a su cliente de cancelar su póliza con la Compañía A y comprar una nueva con la Compañía B. ¿Cuál práctica ilegal está cometiendo?",
      o: [
        "Churning — rotación innecesaria de pólizas para generar comisiones adicionales",
        "Twisting — usar información falsa o engañosa para inducir a reemplazar una póliza cambiando de compañía aseguradora",
        "Rebating — devolver parte de la comisión al cliente para inducir la compra",
        "Tergiversación simple sin el elemento específico de inducir el reemplazo"
      ],
      a: 1,
      trampa: "CHURNING ocurre DENTRO de la misma compañía. TWISTING siempre involucra cambiar a una compañía DIFERENTE usando información falsa.",
      correcto: "TWISTING = usar información falsa o engañosa para inducir a un asegurado a CANCELAR su póliza con una compañía y COMPRAR con una compañía DIFERENTE. Compañía A → Compañía B con información falsa = Twisting clásico.",
      incorrectos: [
        "A) Churning es cambios innecesarios de pólizas DENTRO DE LA MISMA compañía para generar comisiones.",
        "C) Rebating es devolver comisiones o dar regalos para inducir la compra — no involucra reemplazo necesariamente.",
        "D) La tergiversación simple no captura el elemento esencial de inducir el reemplazo entre compañías."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia CLAVE entre Twisting y Churning como prácticas ilegales en Florida?",
      o: [
        "El Twisting es ilegal; el Churning es una práctica regulada pero legal en Florida",
        "El Churning involucra cambio de compañía aseguradora; el Twisting ocurre dentro de la misma compañía",
        "El Twisting involucra cambio a una compañía DIFERENTE usando información falsa; el Churning ocurre dentro de la MISMA compañía con cambios innecesarios para generar comisiones",
        "Son prácticas idénticas — términos completamente intercambiables para la misma conducta ilegal"
      ],
      a: 2,
      trampa: "Los dos términos tienen definiciones legales específicas y distintas — definitivamente NO son intercambiables.",
      correcto: "TWISTING = diferente compañía + información falsa para inducir el reemplazo. CHURNING = misma compañía + cambios innecesarios para generar comisiones. La compañía involucrada es la diferencia definitoria clave.",
      incorrectos: [
        "A) AMBOS son ilegales en Florida — ninguno está regulado como práctica legal.",
        "B) Las definiciones están completamente invertidas en esta opción.",
        "D) Son prácticas distintas con definiciones legales específicas y consecuencias separadas."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un agente devuelve $400 en efectivo a su cliente como 'incentivo especial' para que compre una nueva póliza de vida. ¿Cuál práctica ilegal constituye esto en Florida?",
      o: [
        "Twisting — porque está induciendo el cambio de una póliza existente",
        "Churning — porque está generando comisiones a través de cambios de póliza",
        "Rebating — devolver parte de la comisión o dar cualquier valor para inducir la compra de una póliza",
        "Tergiversación — porque está distorsionando el valor real de la póliza"
      ],
      a: 2,
      trampa: "El dinero en efectivo como incentivo para comprar una póliza = Rebating. No es Twisting (no hay información falsa ni cambio de compañía específicamente).",
      correcto: "REBATING = devolver parte de la comisión o dar cualquier dinero, regalo o valor de cualquier tipo para inducir la compra de una póliza de seguro. Es ilegal en Florida independientemente del monto.",
      incorrectos: [
        "A) Twisting requiere información falsa para inducir un cambio de compañía — aquí no hay ese elemento.",
        "B) Churning requiere cambios innecesarios DENTRO de la misma compañía — aquí es una compra nueva.",
        "D) Tergiversación es hacer declaraciones falsas sobre las características del producto — aquí el problema es el dinero dado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "VIOLACION",
      q: "¿Cuál de los siguientes escenarios constituye una VIOLACIÓN de las Reglas de Reemplazo de Florida?",
      o: [
        "Un agente notifica a la aseguradora reemplazada dentro de 3 días hábiles Y entrega al cliente el documento de comparación antes de que firme",
        "Un agente reemplaza una póliza sin notificar a la aseguradora reemplazada Y sin entregar ninguna documentación comparativa al cliente",
        "Un agente recomienda un reemplazo genuinamente beneficioso para el cliente y documenta las razones específicas por escrito",
        "Un agente entrega el documento de comparación completo, el cliente lo firma entendiendo las diferencias, y luego procede con el reemplazo"
      ],
      a: 1,
      trampa: "La opción B describe exactamente las DOS violaciones simultáneas que la regulación específicamente prohíbe.",
      correcto: "Omitir la notificación a la aseguradora reemplazada Y no entregar documentación comparativa al cliente son DOS violaciones simultáneas e independientes de la Regla de Reemplazo. Ambas son obligatorias.",
      incorrectos: [
        "A) Este es el procedimiento CORRECTO — notificación oportuna + documento comparativo antes de la firma.",
        "C) Recomendar genuinamente y documentar las razones es exactamente lo que la regulación requiere.",
        "D) Entregar el documento, obtener firma de comprensión y proceder es el procedimiento correcto."
      ]
    }
  ]
}

]; // fin PK_UNDERWRITING

if (typeof module !== 'undefined') module.exports = { PK_UNDERWRITING };

// Asignación explícita a window para garantizar disponibilidad
// global sin importar el motor JS o el timing de ejecución del navegador
if (typeof window !== 'undefined') window.PK_UNDERWRITING = PK_UNDERWRITING;
