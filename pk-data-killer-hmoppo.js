// ============================================================
// PEARSON KILLER — pk-data-killer-hmoppo.js
// CICLO 1 — Desarrollo incremental (Fase 2)
// Subtema: HMO / PPO / EPO / POS (área salud_tipos, prioridad #1)
//
// 5 conceptos × 3 variantes = 15 preguntas nuevas.
// Estilo Killer Pearson real: escenario con nombre, información
// relevante e irrelevante mezclada, palabra decisiva, dos
// distractores fuertes, un distractor condicional (correcto si
// cambia un dato), y explicación individual de las 4 opciones.
//
// Verificado contra fuentes primarias vigentes (14/07/2026):
//   - No Surprises Act: 42 U.S.C. §300gg-111 (CMS.gov, texto
//     vigente al 10/07/2026)
//   - Florida: ss. 408.7057, 627.42397, 627.64194(4) y (6),
//     641.513(5), 641.514, F.S., y Regla 59A-12.030, F.A.C.
//     (leyes estatales específicas para determinación de tarifa
//     fuera de red en HMO de Florida, en vez del proceso IDR
//     federal)
//   - Florida es uno de los pocos estados (junto con Virginia
//     Occidental) donde la protección de facturación de ambulancia
//     terrestre aplica SOLO a HMO (healthinsurance.org, citando
//     BillTrack50, consultado 14/07/2026)
//
// human_review_status: TODAS arrancan en 'pending'. category y
// allowed_modes se calculan con pk-schema.js — NINGUNA entra a
// modo 'exam' automáticamente, sin importar el puntaje mecánico.
// ============================================================

const PK_KILLER_HMOPPO = [

{
  id: "killer_hmoppo_001",
  area: "salud",
  concepto: "Gatekeeper y Requisito de Referido — HMO vs. Otros Modelos",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "N se inscribe en el plan de salud más económico que ofrece su empleador este año, un plan que exige elegir un médico de cabecera (PCP) y que este autorice cualquier consulta con especialistas antes de que se cubra la visita. Seis meses después, sin pasar por su PCP, N agenda directamente una cita con un dermatólogo por un problema de piel no urgente. El costo total de la consulta es de $180. ¿Qué es MÁS PROBABLE que ocurra con esa reclamación?",
      o: [
        "Se paga normalmente, porque todo plan de salud cubre consultas con especialistas sin restricciones",
        "Probablemente no se cubra, porque el plan descrito exige referido del PCP y N no lo obtuvo antes de la consulta",
        "Se cubre con un copago más alto, ya que todos los planes permiten acceso directo a especialistas mediante un recargo",
        "No se cubre porque los dermatólogos nunca están incluidos en ningún tipo de red"
      ],
      a: 1,
      trampa: "El costo de $180 es información irrelevante para decidir si se cubre — lo decisivo es si N cumplió el requisito estructural de referido, no cuánto costó la visita.",
      correcto: "El plan descrito por N (PCP obligatorio + autorización previa de especialistas) es la estructura de un HMO. Bajo ese modelo, consultar a un especialista sin el referido del PCP típicamente resulta en la NO cobertura de la visita — el asegurado puede terminar pagando el costo completo. [VERIFICADO — estructura estándar de HMO, CRS R46856, Congress.gov, consultado 14/07/2026]",
      incorrectos: [
        "A) Falso como regla general: los planes con estructura HMO condicionan la cobertura de especialistas al referido del PCP, a diferencia de PPO/POS.",
        "C) No existe tal 'recargo universal' que sustituya el requisito de referido en un HMO — la visita simplemente puede no cubrirse.",
        "D) Los dermatólogos sí pueden estar en la red de un HMO — el problema no es la especialidad, es la falta de referido."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "COMPARACION",
      q: "D tiene un plan EPO (Exclusive Provider Organization) a través de su trabajo. Necesita ver a un cardiólogo por un chequeo de rutina, sin ninguna urgencia. Llama directamente a la clínica del cardiólogo, sin pasar por ningún médico de cabecera, y agenda la cita para la semana siguiente. ¿Es esto consistente con la estructura típica de un EPO?",
      o: [
        "No, porque los EPO exigen el mismo proceso de referido de un PCP que un HMO",
        "Sí, porque los EPO generalmente no exigen referido de un PCP para ver especialistas dentro de la red",
        "No, porque los EPO no permiten consultas con cardiólogos bajo ninguna circunstancia",
        "Sí, pero solo porque D pagó una prima adicional por acceso directo a especialistas"
      ],
      a: 1,
      trampa: "El error común es asumir que EPO = HMO por ambos restringir la cobertura fuera de red. Comparten la restricción de red, pero NO comparten el requisito de referido — ese es el eje que distingue a EPO de HMO.",
      correcto: "Los planes EPO generalmente combinan dos características que suelen confundirse: como un HMO, NO cubren atención fuera de la red (salvo emergencia); pero como un PPO, generalmente NO exigen referido del PCP para consultar especialistas DENTRO de la red. La acción de D es consistente con esa estructura.",
      incorrectos: [
        "A) Confunde EPO con HMO en el eje del referido — ahí es donde difieren, no donde coinciden.",
        "C) Los EPO sí cubren especialistas dentro de la red; la restricción de un EPO es sobre la RED, no sobre el tipo de especialidad.",
        "D) No existe tal prima adicional estándar — la ausencia de requisito de referido es una característica estructural del producto, no un add-on opcional."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPTO",
      q: "Un agente compara cuatro tipos de plan para una familia que valora tanto el costo bajo como la flexibilidad de ver especialistas sin trámites. Explica correctamente TODO lo siguiente EXCEPTO:",
      o: [
        "El HMO generalmente exige referido del PCP y no cubre atención fuera de la red salvo emergencia",
        "El PPO generalmente no exige referido y cubre atención fuera de la red con mayor costo compartido",
        "El EPO generalmente no exige referido, pero tampoco cubre atención fuera de la red salvo emergencia",
        "El POS generalmente exige referido del PCP para acceder al nivel más alto de beneficios, pero NUNCA permite salir de la red bajo ninguna circunstancia"
      ],
      a: 3,
      trampa: "La palabra 'NUNCA' en la opción D es la señal de alarma — el POS es precisamente el híbrido que SÍ permite salir de la red (con menor beneficio), a diferencia del HMO/EPO. Es la única de las cuatro afirmaciones que es absoluta y falsa.",
      correcto: "El plan de Punto de Servicio (POS) exige coordinación del PCP para obtener el nivel de beneficio más alto, pero a diferencia del HMO y el EPO, SÍ permite al asegurado optar por salir de la red — con un nivel de beneficio reducido y mayor costo compartido, no una prohibición absoluta.",
      incorrectos: [
        "A) Verdadera — describe correctamente la estructura HMO.",
        "B) Verdadera — describe correctamente la estructura PPO.",
        "C) Verdadera — describe correctamente la estructura EPO (sin referido, sin cobertura fuera de red)."
      ]
    }
  ]
},

{
  id: "killer_hmoppo_002",
  area: "salud",
  concepto: "Cobertura Fuera de Red — Diferencias Reales Entre los Cuatro Modelos",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "R vive en Orlando y tiene un plan POS. Durante un viaje de trabajo a Chicago, decide consultar a un especialista que no pertenece a la red de su plan, sin que exista ninguna emergencia médica. R sabe que necesitará la autorización de su PCP para obtener el nivel más alto de beneficios, pero decide saltarse ese paso porque el viaje es corto. ¿Qué consecuencia es MÁS PROBABLE?",
      o: [
        "La visita se rechaza por completo, sin ningún pago, igual que ocurriría en un HMO",
        "La visita se cubre, pero con un nivel de beneficio reducido y mayor costo compartido para R, por haber salido de la red sin coordinación del PCP",
        "La visita se cubre exactamente igual que si hubiera ido con un especialista dentro de la red",
        "La visita se cubre solo si R paga primero y solicita reembolso dentro de 24 horas"
      ],
      a: 1,
      trampa: "El viaje a Chicago es información de color, no decisiva — lo que importa es la estructura del plan (POS) y la falta de coordinación con el PCP, no la ubicación geográfica de la consulta.",
      correcto: "El POS permite salir de la red, pero penaliza esa decisión con un nivel de beneficio menor y mayor costo compartido para el asegurado — a diferencia del HMO/EPO, que generalmente no pagan nada fuera de la red salvo emergencia.",
      incorrectos: [
        "A) Ese resultado sería típico de un HMO o EPO, no de un POS — el POS sí paga algo, aunque menos.",
        "C) Eso ignoraría por completo la penalización estructural del POS por salir de la red sin coordinación.",
        "D) No existe ese requisito de reembolso en 24 horas como mecánica estándar del POS."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Zoe tiene un plan de salud con estructura HMO. Sufre un episodio de dolor agudo en el pecho y, siguiendo el juicio de una persona razonable con conocimiento promedio de salud, acude a la sala de emergencias del hospital más cercano — que resulta estar DENTRO de la red de su plan. Durante la atención, un radiólogo que interpreta sus estudios de imagen resulta ser un proveedor fuera de la red. Semanas después, Zoe recibe una factura del radiólogo pidiéndole la diferencia entre la tarifa dentro de red y la tarifa que él cobra. ¿Puede el radiólogo cobrarle esa diferencia a Zoe?",
      o: [
        "Sí, porque el radiólogo no tiene contrato con la aseguradora de Zoe y puede cobrar libremente",
        "No, porque bajo la Ley Contra Facturas Sorpresa (No Surprises Act), un proveedor fuera de red en una instalación dentro de la red no puede cobrar a Zoe más que el costo compartido dentro de la red",
        "Sí, porque las protecciones contra facturación sorpresa solo aplican a médicos de emergencia, no a radiólogos",
        "No, pero solo porque Zoe firmó un consentimiento por escrito antes de la atención"
      ],
      a: 1,
      trampa: "El detalle de que el HOSPITAL sí estaba en la red es el dato decisivo — la protección de la ley aplica precisamente a proveedores auxiliares fuera de red (radiólogos, anestesiólogos) DENTRO de una instalación en la red, sin importar el tipo de plan.",
      correcto: "La No Surprises Act (42 U.S.C. §300gg-111, vigente desde el 1 de enero de 2022) prohíbe que proveedores auxiliares fuera de red — como radiólogos o anestesiólogos — en una instalación DENTRO de la red cobren al paciente más que su costo compartido dentro de la red. Esto aplica sin importar si el plan es HMO, PPO, EPO o POS. [VERIFICADO — CMS.gov, ejemplo oficial 'Zoe', consultado 14/07/2026]",
      incorrectos: [
        "A) Precisamente lo que prohíbe la ley es que el proveedor fuera de red cobre libremente en este escenario específico (instalación dentro de red).",
        "C) Falso — la protección también cubre a proveedores auxiliares no relacionados con emergencia, como el radiólogo de este caso.",
        "D) El consentimiento por escrito es relevante para OTROS proveedores auxiliares en ciertos casos, pero no es la razón por la que el radiólogo no puede cobrar aquí — la prohibición aplica independientemente de un consentimiento en el contexto descrito."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "Un plan PPO generalmente ofrece cobertura fuera de la red, aunque con un costo compartido más alto para el asegurado que si usara un proveedor dentro de la red. ¿Qué característica estructural explica esta flexibilidad, a diferencia del HMO?",
      o: [
        "El PPO no tiene contratos con ningún proveedor, por lo que todos los proveedores son igualmente 'fuera de red'",
        "El PPO negocia tarifas preferenciales con una red de proveedores, pero no condiciona el pago de beneficios a permanecer exclusivamente dentro de esa red",
        "El PPO es idéntico al HMO, salvo que cambia el nombre del producto por razones de mercadeo",
        "El PPO solo cubre proveedores fuera de la red y nunca cubre proveedores dentro de una red preferente"
      ],
      a: 1,
      trampa: "La trampa está en que las opciones A y D describen extremos opuestos y absurdos — el PPO sí tiene red preferente (por eso paga MENOS fuera de ella), pero no la hace exclusiva como el HMO.",
      correcto: "El PPO (Preferred Provider Organization) contrata una red de proveedores a tarifas preferenciales, pero — a diferencia del HMO — no condiciona el pago de beneficios a usar exclusivamente esa red. El asegurado puede salir de la red y aun así recibir cobertura, solo que con mayor costo compartido.",
      incorrectos: [
        "A) Un PPO sí tiene una red contratada — de hecho, esa es la fuente de sus tarifas preferenciales.",
        "C) PPO y HMO son estructuralmente distintos precisamente en la exclusividad de la red, no son el mismo producto con otro nombre.",
        "D) Es lo opuesto: el PPO SÍ cubre dentro de la red preferente, generalmente con el menor costo compartido."
      ]
    }
  ]
},

{
  id: "killer_hmoppo_003",
  area: "salud",
  concepto: "La Excepción de Emergencia — Estándar de Persona Prudente (Prudent Layperson)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Sebastián tiene un plan HMO. Una noche siente dolor intenso en el pecho, dificultad para respirar y sudoración — síntomas que, según el juicio de una persona común con conocimiento promedio de salud, podrían indicar un ataque cardíaco. Va de inmediato a la sala de emergencias más cercana, que NO pertenece a la red de su HMO. Los médicos determinan que efectivamente está sufriendo un infarto y lo estabilizan. ¿Puede el HMO negar la cobertura por tratarse de una instalación fuera de la red?",
      o: [
        "Sí, porque los planes HMO nunca cubren atención fuera de la red bajo ninguna circunstancia",
        "No, porque bajo el estándar de persona prudente, los servicios de emergencia deben cubrirse como si fueran dentro de la red, sin importar el tipo de plan",
        "Sí, porque Sebastián debió llamar primero a su PCP para obtener autorización antes de ir a emergencias",
        "No, pero solo si el hospital presenta una apelación formal dentro de 60 días"
      ],
      a: 1,
      trampa: "La regla general del HMO ('solo dentro de red') es cierta como regla de fondo, pero la EXCEPCIÓN de emergencia la anula — la trampa es aplicar la regla general sin notar que el escenario describe exactamente el caso de excepción.",
      correcto: "Bajo el estándar de persona prudente ('prudent layperson standard') que exige la No Surprises Act, un plan debe cubrir los servicios de emergencia como si fueran dentro de la red — sin autorización previa ni restricción de red — si una persona común, con conocimiento promedio de salud, razonablemente creería que existe una emergencia médica. Esto aplica a HMO, EPO, PPO y POS por igual.",
      incorrectos: [
        "A) Es la regla general del HMO, pero esta pregunta describe exactamente la excepción que anula esa regla — la respuesta no puede ignorar el escenario descrito.",
        "C) Exigir autorización previa del PCP antes de una emergencia real contradice directamente el propósito del estándar de persona prudente.",
        "D) No existe tal requisito de apelación formal en 60 días como condición para la cobertura de emergencia bajo la ley."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de los siguientes NO es un elemento correcto del estándar de persona prudente (prudent layperson) usado para determinar si una atención califica como emergencia bajo la No Surprises Act?",
      o: [
        "Se evalúa según los síntomas que presentaba el paciente al momento de buscar atención, no según el diagnóstico final",
        "El análisis debe realizarse ANTES de negar inicialmente una reclamación de servicios de emergencia",
        "El estándar exige que el paciente resulte efectivamente diagnosticado con una condición grave para que la cobertura aplique",
        "Se basa en si una persona con conocimiento promedio de salud creería razonablemente que la ausencia de atención inmediata podría poner en riesgo su salud"
      ],
      a: 2,
      trampa: "La trampa clásica: la gente asume que 'emergencia' significa que el diagnóstico final debe ser grave. El estándar protege al paciente precisamente en el momento de la decisión, ANTES de saber el diagnóstico.",
      correcto: "El estándar de persona prudente se basa en los SÍNTOMAS que presentaba el paciente al buscar atención, no en si el diagnóstico final resultó grave. Un paciente que acude por síntomas de infarto y termina siendo un episodio de ansiedad sigue calificando para la cobertura de emergencia bajo este estándar.",
      incorrectos: [
        "A) Correcto — el estándar se aplica sobre los síntomas presentados, no el resultado final.",
        "B) Correcto — el análisis del estándar debe hacerse antes del rechazo inicial, no después.",
        "D) Correcto — esa es la definición central del estándar de persona prudente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Duane tiene una cirugía de reemplazo de rodilla programada en un hospital que pertenece a la red de su plan de salud. Durante la cirugía, recibe servicios de anestesiología de un proveedor que resulta estar fuera de la red del plan — un hecho que Duane desconocía por completo antes de la cirugía. El plan inicialmente niega el pago del anestesiólogo por ser un proveedor no participante. ¿Es correcta esa negación?",
      o: [
        "Sí, porque Duane debió verificar personalmente la red de cada proveedor involucrado en su cirugía antes de autorizarla",
        "No, porque la No Surprises Act prohíbe exigir un costo compartido mayor al de dentro de la red para servicios auxiliares (como anestesiología) prestados por proveedores fuera de la red en una instalación DENTRO de la red",
        "Sí, porque las protecciones de facturación sorpresa solo aplican a servicios de sala de emergencias, no a cirugías programadas",
        "No, pero solo porque Duane no fue informado del costo total de la cirugía por adelantado"
      ],
      a: 1,
      trampa: "El hecho de que la cirugía fue PROGRAMADA (no una emergencia) es la trampa: hace pensar que las protecciones de facturación sorpresa no aplican. Pero la ley cubre específicamente a los proveedores AUXILIARES fuera de red dentro de instalaciones en la red, sin importar si el procedimiento principal fue programado o de emergencia.",
      correcto: "La No Surprises Act prohíbe que proveedores auxiliares fuera de red — anestesiólogos, radiólogos, patólogos, neonatólogos, cirujanos asistentes — cobren costo compartido mayor al de dentro de la red cuando prestan servicios en una instalación DENTRO de la red, incluso en procedimientos programados como el de Duane. [VERIFICADO — CMS.gov, ejemplo oficial 'Duane', consultado 14/07/2026]",
      incorrectos: [
        "A) La ley traslada esa carga de verificación al sistema, no al paciente — Duane no tiene obligación de verificar cada proveedor individualmente en este contexto.",
        "C) Falso — las protecciones también cubren proveedores auxiliares en cirugías programadas dentro de instalaciones en la red, no solo emergencias.",
        "D) La falta de un buen aviso de buena fe (\"good faith estimate\") es un tema regulatorio distinto y no es la base de la protección que aplica en este caso específico."
      ]
    }
  ]
},

{
  id: "killer_hmoppo_004",
  area: "salud",
  concepto: "Regulación Diferenciada de HMO en Florida (Cap. 641 vs. Cap. 627, F.S.)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "Un agente en Florida ayuda a un cliente a elegir entre un plan HMO y un plan PPO ofrecidos por dos compañías distintas. El cliente pregunta si ambas compañías están reguladas exactamente de la misma manera bajo la ley de Florida. ¿Qué debe responder el agente?",
      o: [
        "Sí, ambos tipos de organización están regulados exclusivamente bajo el Capítulo 627 de los Florida Statutes, sin distinción",
        "No — las HMO están reguladas principalmente bajo el Capítulo 641 (Health Care Services), mientras que los aseguradores de tipo PPO/EPO operan principalmente bajo el Capítulo 627 (Insurance Rates and Contracts)",
        "No, porque las HMO no están autorizadas a operar legalmente en el estado de Florida",
        "Sí, porque en Florida cualquier organización de atención administrada se registra automáticamente como aseguradora tradicional"
      ],
      a: 1,
      trampa: "La creencia común es que 'todo seguro de salud' se regula igual — la trampa es no saber que las HMO en Florida tienen su propio marco regulatorio distinto (Cap. 641) del que aplica a las aseguradoras tradicionales de indemnización/PPO (Cap. 627).",
      correcto: "En Florida, las Organizaciones de Mantenimiento de la Salud (HMO) están reguladas principalmente bajo el Capítulo 641 de los Florida Statutes (Health Care Services), que las trata como entidades de prestación de servicios de salud, mientras que los aseguradores tipo PPO/EPO operan bajo el marco general de seguros del Capítulo 627. Esta distinción también se refleja en cómo se resuelven disputas de tarifas fuera de red (ss. 641.513, 641.514, F.S. para HMO).",
      incorrectos: [
        "A) Ignora la existencia del Capítulo 641, que es un marco regulatorio separado y específico para HMO.",
        "C) Las HMO SÍ están autorizadas a operar en Florida — de hecho, tienen su propio capítulo dedicado.",
        "D) No existe tal registro automático uniforme; HMO y aseguradoras de indemnización siguen procesos regulatorios distintos."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Una HMO de Florida y un proveedor fuera de la red no logran ponerse de acuerdo sobre la tarifa a pagar por un servicio prestado a un asegurado. El proveedor quiere iniciar el proceso federal de Resolución de Disputas Independiente (IDR) creado por la No Surprises Act. ¿Qué es MÁS PROBABLE que ocurra en Florida para este tipo de disputa específica de HMO?",
      o: [
        "El proceso IDR federal se aplica automáticamente, ya que Florida no tiene ninguna ley propia sobre el tema",
        "Es probable que aplique una ley estatal específica de Florida (ss. 627.64194, 641.513, 641.514, F.S. y Regla 59A-12.030, F.A.C.) en lugar del proceso IDR federal, ya que Florida cuenta con leyes especificadas para determinar la tarifa fuera de red en disputas de HMO",
        "El asegurado, no el proveedor ni la aseguradora, es quien debe resolver la disputa de tarifa directamente",
        "Ninguna ley aplica y el proveedor no tiene ningún mecanismo disponible para reclamar el pago"
      ],
      a: 1,
      trampa: "La suposición por defecto es que la ley FEDERAL (No Surprises Act) siempre se aplica de forma uniforme en todos los estados. La trampa es no saber que la ley federal permite que los estados con 'leyes especificadas' propias sustituyan el proceso federal para ciertas disputas — y Florida es uno de esos estados para HMO.",
      correcto: "Florida cuenta con leyes estatales específicas (ss. 408.7057, 627.42397, 627.64194(4) y (6), 641.513(5), 641.514, F.S., y Regla 59A-12.030, F.A.C.) que determinan la tarifa fuera de red para ciertas disputas de HMO, sustituyendo al proceso IDR federal para esos casos específicos. [VERIFICADO — ACEP, resumen de implementación estado por estado de la No Surprises Act, consultado 14/07/2026]",
      incorrectos: [
        "A) Florida SÍ tiene ley propia aplicable a este escenario — no se limita al proceso federal por defecto.",
        "C) La resolución de la disputa de tarifa es entre el proveedor y la aseguradora (o mediante el mecanismo estatal/federal aplicable) — el asegurado generalmente no participa en esa negociación específica.",
        "D) El proveedor sí tiene mecanismos disponibles — la pregunta es CUÁL mecanismo aplica (estatal vs. federal), no si existe alguno."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Un paciente de Florida recibe una factura sorpresa de una ambulancia TERRESTRE tras un traslado de emergencia. Su vecino, en otro estado, recibió una protección similar cuando le pasó lo mismo, sin importar el tipo de plan que tuviera. ¿Qué distingue la protección de Florida en este tipo específico de caso?",
      o: [
        "Florida no ofrece ninguna protección para facturación sorpresa de ambulancia terrestre bajo ninguna circunstancia",
        "En Florida, las protecciones actuales contra facturación sorpresa de ambulancia terrestre aplican ÚNICAMENTE si el paciente tiene un plan tipo HMO — no se extienden automáticamente a otros tipos de plan",
        "Florida ofrece la misma protección universal que todos los demás estados, sin ninguna distinción por tipo de plan",
        "La protección de Florida aplica solo a ambulancias aéreas, nunca a ambulancias terrestres"
      ],
      a: 1,
      trampa: "El paciente asume (por la experiencia de su vecino en otro estado) que la protección es universal por tipo de servicio (ambulancia terrestre), sin notar que en Florida la protección actual está limitada por TIPO DE PLAN — una particularidad real y poco conocida del estado.",
      correcto: "Florida es uno de los pocos estados (junto con Virginia Occidental, que expandirá su protección a partir de 2027) donde las protecciones actuales contra facturación sorpresa de ambulancia terrestre aplican únicamente a asegurados con planes tipo HMO, y no se extienden automáticamente a PPO, EPO o POS. [VERIFICADO — healthinsurance.org, citando BillTrack50, consultado 14/07/2026]",
      incorrectos: [
        "A) Florida sí ofrece protección — pero está limitada a un tipo específico de plan, no ausente por completo.",
        "C) Es precisamente lo contrario de la particularidad de Florida — no es una protección universal sin distinción de plan.",
        "D) La distinción real en Florida es por tipo de PLAN (HMO vs. otros), no por tipo de ambulancia (terrestre vs. aérea)."
      ]
    }
  ]
},

{
  id: "killer_hmoppo_005",
  area: "salud",
  concepto: "Estructura de Costos Compartidos y el Trade-off de Red Estrecha",
  variantes: [
    {
      nivel: 3,
      tipo_trampa: "PRIMERO",
      q: "Una pareja joven, con presupuesto ajustado y sin condiciones médicas preexistentes, prioriza PRINCIPALMENTE la prima mensual más baja posible y está dispuesta a aceptar una red de proveedores más reducida a cambio. ¿Qué tipo de plan responde MEJOR a esa prioridad, considerando la estructura típica del mercado?",
      o: [
        "Un PPO con acceso amplio fuera de la red, ya que la flexibilidad siempre resulta en la prima más baja del mercado",
        "Un HMO o EPO con red más estrecha, ya que la restricción de proveedores generalmente permite negociar primas más bajas que un PPO",
        "Cualquier plan, porque el tipo de red no tiene relación alguna con el costo de la prima mensual",
        "Un plan POS, porque combina lo mejor de todos los mundos sin ningún costo adicional"
      ],
      a: 1,
      trampa: "La flexibilidad de un PPO se percibe como una ventaja pura, pero PRINCIPALMENTE tiene un costo: primas más altas. La palabra decisiva 'PRINCIPALMENTE' señala que se busca la prioridad dominante del cliente, no todas las características por igual.",
      correcto: "Los planes con red más estrecha y restrictiva (HMO, EPO) generalmente permiten a la aseguradora negociar tarifas más bajas con un grupo limitado de proveedores, lo que se traduce en primas mensuales generalmente más bajas — el trade-off clásico es menos flexibilidad de proveedor a cambio de menor costo.",
      incorrectos: [
        "A) Es al revés como tendencia general: la mayor flexibilidad de red de un PPO generalmente se traduce en primas más altas, no más bajas.",
        "C) El tipo de red SÍ tiene relación directa con el costo de la prima — es uno de los factores estructurales más importantes.",
        "D) El POS no es gratuito ni está libre de trade-offs — su flexibilidad también tiene un costo asociado, generalmente entre el de un HMO y un PPO."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "L compara dos planes: el Plan Uno tiene un copago fijo de $30 por cada visita al médico, sin importar el costo real de la consulta. El Plan Dos requiere que L pague el 20% del costo total de cada visita después del deducible. ¿Qué término describe correctamente la estructura de costos del Plan Dos?",
      o: [
        "Copago (Copayment)",
        "Coaseguro (Coinsurance)",
        "Deducible (Deductible)",
        "Prima (Premium)"
      ],
      a: 1,
      trampa: "Copago y coaseguro se confunden constantemente porque ambos son 'lo que paga el paciente' — la diferencia real es que el copago es una cantidad FIJA en dólares, y el coaseguro es un PORCENTAJE del costo total.",
      correcto: "Coaseguro (Coinsurance) es el porcentaje del costo del servicio que paga el asegurado después de cumplir el deducible — en este caso, el 20% del Plan Dos. El copago (como el del Plan Uno) es, en cambio, una cantidad fija en dólares por visita, independiente del costo real del servicio.",
      incorrectos: [
        "A) El copago es la estructura del Plan UNO ($30 fijo), no la del Plan Dos descrito en la pregunta.",
        "C) El deducible es la cantidad que L paga ANTES de que el coaseguro empiece a aplicar — no es lo que describe el 20% en sí.",
        "D) La prima es el pago mensual por tener la cobertura, no el costo compartido al momento de recibir un servicio."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Una empresa con empleados jóvenes y de bajo riesgo médico busca reducir el costo de sus primas de grupo lo más posible, y sus empleados están de acuerdo en aceptar una red de proveedores considerablemente más limitada a cambio. Por otro lado, la empresa NO quiere que sus empleados enfrenten trámites de referido cada vez que necesiten un especialista. ¿Qué tipo de plan responde MEJOR a AMBAS prioridades simultáneamente?",
      o: [
        "HMO, porque combina la red más restringida con la mayor simplicidad administrativa para el empleado",
        "EPO, porque combina una red restringida (para bajar la prima) con la ausencia de requisito de referido de PCP",
        "PPO, porque ofrece la red más amplia posible sin ningún trámite de referido",
        "POS, porque siempre tiene la prima más baja del mercado sin excepción"
      ],
      a: 1,
      trampa: "El HMO parece la respuesta obvia por tener la red más restringida (coincide con la primera prioridad), pero el HMO SÍ exige referido — lo cual contradice la segunda prioridad explícita de la empresa. Hay que satisfacer las DOS condiciones a la vez, no solo una.",
      correcto: "El EPO es la única estructura entre las cuatro que combina simultáneamente una red restringida (para negociar primas más bajas, similar al HMO) CON la ausencia de requisito de referido de PCP para ver especialistas (similar al PPO) — cumpliendo ambas prioridades de la empresa al mismo tiempo.",
      incorrectos: [
        "A) El HMO sí tiene red restringida, pero generalmente SÍ exige referido de PCP — contradice la segunda prioridad de la empresa.",
        "C) El PPO generalmente tiene una red más amplia (no restringida) y por lo tanto tiende a primas más altas, contradiciendo la primera prioridad.",
        "D) El POS no tiene garantizada la prima más baja del mercado 'sin excepción' — es una afirmación absoluta e injustificada."
      ]
    }
  ]
}

]; // fin PK_KILLER_HMOPPO

if (typeof module !== 'undefined') module.exports = { PK_KILLER_HMOPPO };
if (typeof window !== 'undefined') window.PK_KILLER_HMOPPO = PK_KILLER_HMOPPO;
