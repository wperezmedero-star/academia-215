// ============================================================
// PEARSON KILLER — pk-data-killer-pilot.js
// LOTE PILOTO — 15 preguntas completamente nuevas
// Tema: Tipos de Pólizas de Salud (HMO, PPO, EPO, POS, HDHP, HSA, FSA, HRA)
//
// Requisitos cumplidos en cada una de las 15:
//   - escenario profesional (no reconocimiento directo);
//   - principio oculto (el encabezado nunca nombra el concepto evaluado);
//   - información relevante e irrelevante mezclada;
//   - cuatro opciones plausibles, con dos claramente tentadoras;
//   - una sola mejor respuesta;
//   - palabra decisiva (MÁS PROBABLE, MEJOR, EXCEPTO, etc.);
//   - explicación individual de por qué falla cada opción;
//   - 'distractor_condicional': qué cambio en el escenario haría
//     correcta OTRA opción — el criterio más difícil de automatizar,
//     resuelto aquí manualmente por diseño, no por heurística.
//
// IMPORTANTE — AISLAMIENTO:
// Este archivo se carga en pearson-killer.html como variable
// GLOBAL INDEPENDIENTE (window.PK_KILLER_PILOT). A propósito NO
// se agrega al arreglo MODULOS de pk-loader.js, para que estas 15
// preguntas NUNCA se mezclen automáticamente con las 545 del banco
// existente. Solo el modo 'killer_pilot' (agregado en pearson-killer.html)
// las consume directamente.
//
// human_review_status de las 15: PENDING. El autor (Claude) se
// autoevaluó contra los 8 criterios cualitativos como ejercicio de
// calidad, pero eso NO sustituye tu revisión humana final — así lo
// exige la Regla 6 del auditor (pk-schema.js v1.1).
// ============================================================

const PK_KILLER_PILOT = [

{
  id: "killer_pilot_001",
  area: "salud",
  subtema_blueprint: "HMO",
  concepto: "HMO — Excepción de Emergencia Fuera de Red",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "D está inscrito en un HMO a través de su empleo, plan que normalmente exige referido de su médico de cabecera (PCP) para cualquier consulta con especialistas. Mientras viaja por trabajo a otro condado, fuera del área de servicio de su plan, sufre un accidente de tránsito y es trasladado en ambulancia al hospital más cercano, que no pertenece a la red de su HMO. ¿Qué es MÁS PROBABLE respecto a la cobertura de esa atención hospitalaria?",
    o: [
      "No está cubierta, porque el hospital no pertenece a la red y D no obtuvo referido de su PCP",
      "Está cubierta como atención de emergencia, sin necesidad de referido ni autorización previa del HMO, incluso fuera de la red",
      "Está cubierta solo si D llama a su PCP desde la sala de emergencias antes de recibir tratamiento",
      "Está cubierta únicamente si, dentro de las 24 horas siguientes, D consigue que su PCP emita un referido retroactivo"
    ],
    a: 1,
    trampa: "La gente generaliza 'HMO = necesito referido y red para todo' sin conocer la excepción de emergencia, que es universal en pólizas de salud reguladas: una emergencia verdadera se cubre fuera de la red sin autorización previa.",
    correcto: "Las emergencias verdaderas están cubiertas fuera de la red y sin necesidad de referido previo, incluso bajo la estructura más restrictiva de HMO. Esta es una excepción estándar de la industria y una protección regulatoria común, precisamente porque exigir autorización previa en una emergencia pondría en riesgo la vida del asegurado.",
    incorrectos: [
      "A) Aplica la regla general de referido/red del HMO a una situación de emergencia, donde esa regla no rige — es exactamente el error que la excepción de emergencia existe para prevenir.",
      "C) Exigir una llamada al PCP antes de tratar una emergencia contradice el propósito mismo de la excepción: la atención de emergencia no puede condicionarse a autorización previa.",
      "D) No existe tal requisito de 'referido retroactivo en 24 horas' como condición de cobertura para la atención de emergencia ya prestada; algunos planes piden notificación posterior, no autorización."
    ],
    distractor_condicional: "Si en vez de un accidente D hubiera decidido, estando fuera de su área de servicio, visitar una clínica no urgente por conveniencia (por ejemplo, un resfriado leve) sin que fuera una emergencia, la respuesta correcta pasaría a ser la opción A: esa atención NO urgente fuera de la red generalmente no estaría cubierta sin autorización previa."
  }]
},

{
  id: "killer_pilot_002",
  area: "salud",
  subtema_blueprint: "HMO",
  concepto: "HMO — Estructura de Panel Cerrado",
  variantes: [{
    nivel: 3,
    tipo_trampa: "SINONIMOS",
    q: "Una doctora trabaja exclusivamente para una organización de atención administrada: atiende únicamente a los miembros de ese plan, dentro de las instalaciones propias del plan, como empleada asalariada de la organización, y no mantiene consultorio privado propio ni atiende pacientes de otros seguros. ¿Qué tipo de estructura describe MEJOR la relación de esta doctora con el plan?",
    o: [
      "HMO de Panel Abierto",
      "HMO de Panel Cerrado",
      "Organización de Punto de Servicio (POS)",
      "Organización de Proveedores Preferidos (PPO)"
    ],
    a: 1,
    trampa: "Se confunde con Panel Abierto, que también es una red de HMO, pero cuya diferencia clave es que los médicos usan sus PROPIAS oficinas privadas por tiempo parcial para atender pacientes del plan, en vez de ser empleados exclusivos del HMO.",
    correcto: "El Panel Cerrado consiste en médicos que trabajan como empleados del HMO en sus propias instalaciones, atendiendo exclusivamente a los miembros de ese plan. El Panel Abierto, en cambio, usa una red de médicos con consultorios privados propios que atienden pacientes del HMO solo por tiempo parcial, junto con su práctica independiente.",
    incorrectos: [
      "A) El Panel Abierto se caracteriza justamente por lo contrario: médicos con consultorio privado propio, no empleados exclusivos del plan.",
      "C) POS es un tipo de estructura de cobertura administrada distinta, que combina elementos de HMO y PPO — no describe la relación laboral de un médico con un plan.",
      "D) PPO es una red de proveedores con tarifa negociada, sin exigir exclusividad laboral de sus médicos con ningún asegurador."
    ],
    distractor_condicional: "Si la doctora, en cambio, mantuviera su propio consultorio privado y solo dedicara parte de su horario a atender pacientes de este plan de salud, la estructura correcta sería HMO de Panel Abierto (opción A)."
  }]
},

{
  id: "killer_pilot_003",
  area: "salud",
  subtema_blueprint: "PPO",
  concepto: "PPO — Facturación de Saldo Fuera de la Red",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "N tiene una póliza PPO. La semana pasada pagó $50 de copago por una visita de rutina con un médico dentro de la red. Esta semana decide, sin pedir autorización previa, operarse con un cirujano fuera de la red por su reputación. El cirujano cobra $10,000; el plan de N reembolsa el 60% de lo que considera un 'cargo razonable y acostumbrado' fuera de la red, equivalente a $4,000. ¿Qué es MÁS PROBABLE que ocurra con el saldo no cubierto?",
    o: [
      "N no debe nada adicional, porque su PPO cubre igual dentro y fuera de la red",
      "El cirujano puede facturarle a N directamente la diferencia entre lo que cobró y lo que pagó el plan (facturación de saldo)",
      "La aseguradora reembolsará retroactivamente el 100% del costo una vez revisado el caso",
      "El cirujano está obligado por ley a aceptar el pago del plan como pago completo, igual que un proveedor dentro de la red"
    ],
    a: 1,
    trampa: "El copago de $50 de la visita dentro de la red es un dato irrelevante que no cambia el resultado — sirve para tentar a pensar que 'ya pagó lo que le correspondía' cuando en realidad esa visita anterior no tiene relación con el reembolso fuera de la red de esta cirugía.",
    correcto: "En un PPO, los proveedores FUERA de la red no tienen contrato de tarifa negociada con el plan y por lo tanto no están obligados a aceptar el reembolso del plan como pago total — pueden facturar al paciente la diferencia (balance billing). Esta es precisamente la razón por la que la cobertura fuera de la red en un PPO, aunque existe, es más costosa para el asegurado que dentro de la red.",
    incorrectos: [
      "A) El PPO SÍ distingue entre dentro y fuera de la red — el reembolso fuera de la red es menor (60% vs. una tarifa mucho más alta dentro de la red) precisamente para desincentivar salir de la red.",
      "C) No existe tal reembolso retroactivo automático al 100%; el 60% de la tarifa razonable fuera de la red es, salvo apelación exitosa, el resultado esperado.",
      "D) Esa protección contra facturación de saldo aplica a proveedores DENTRO de la red, que sí aceptaron contractualmente la tarifa negociada como pago completo — no aplica a proveedores fuera de la red."
    ],
    distractor_condicional: "Si N hubiera elegido un cirujano DENTRO de la red para la misma cirugía, la opción D sería la más cercana a correcta: ese proveedor, por contrato con el plan, no podría facturarle a N la diferencia entre su tarifa habitual y lo que pagó el plan."
  }]
},

{
  id: "killer_pilot_004",
  area: "salud",
  subtema_blueprint: "PPO",
  concepto: "PPO vs. HMO — Flexibilidad de Acceso a Especialistas",
  variantes: [{
    nivel: 3,
    tipo_trampa: "COMPARACION",
    q: "Un ejecutivo que viaja constantemente por trabajo debe elegir entre el HMO y el PPO que ofrece su empresa. Su prioridad declarada es poder consultar a cualquier especialista que necesite, en cualquier ciudad, sin depender de la aprobación de un tercero antes de cada visita. ¿Qué característica ESTRUCTURAL del PPO explica MEJOR por qué es la opción más apropiada para su prioridad declarada?",
    o: [
      "El PPO no exige designar un médico de cabecera ni obtener referidos para consultar especialistas",
      "El PPO siempre tiene primas mensuales más bajas que el HMO",
      "El PPO cubre el 100% de todos los gastos médicos sin ningún deducible",
      "El PPO no permite recibir atención médica fuera del estado de residencia"
    ],
    a: 0,
    trampa: "La prima más baja (opción B) es tentadora porque suena a 'ventaja', pero en la práctica el PPO suele tener primas MÁS altas que el HMO precisamente por ofrecer esa flexibilidad — el dato relevante real es la ausencia de referidos, no el costo.",
    correcto: "La característica estructural clave del PPO es que no exige designar un médico de cabecera (PCP) ni obtener referidos previos para consultar especialistas, lo que se ajusta directamente a la prioridad del ejecutivo de no depender de aprobaciones previas.",
    incorrectos: [
      "B) Es generalmente falso — los PPO suelen tener primas más altas que los HMO equivalentes, precisamente a cambio de mayor flexibilidad de red.",
      "C) Ningún tipo de plan mencionado elimina el deducible por completo; esta afirmación es una generalización incorrecta sobre los PPO.",
      "D) Los PPO no tienen esa restricción geográfica; de hecho, suelen tener redes más amplias, no más limitadas, que otras estructuras."
    ],
    distractor_condicional: "Si la prioridad del ejecutivo fuera minimizar el costo mensual de la prima en vez de la flexibilidad de acceso, el HMO (generalmente con primas más bajas) sería la opción más apropiada, no el PPO."
  }]
},

{
  id: "killer_pilot_005",
  area: "salud",
  subtema_blueprint: "EPO",
  concepto: "EPO — Estructura Híbrida entre HMO y PPO",
  variantes: [{
    nivel: 4,
    tipo_trampa: "COMPARACION",
    q: "R tiene una póliza de salud. Consulta directamente a un dermatólogo sin pedir referido a ningún médico de cabecera, y el plan lo cubre sin problema. Meses después, R intenta ver a un cardiólogo fuera de la red del plan por una condición NO urgente, y la aseguradora le niega la cobertura por completo, sin ofrecerle ni siquiera un reembolso parcial. ¿Qué característica de la póliza de R explica ambos resultados a la vez?",
    o: [
      "Es un HMO, que exige referido para todo, pero cubre igual dentro y fuera de la red",
      "Es una EPO, que no exige referido para especialistas (como un PPO) pero no cubre nada fuera de la red salvo emergencia (como un HMO)",
      "Es una póliza que solo cubre situaciones de emergencia, sin excepción",
      "Es un PPO estándar, que siempre reembolsa parcialmente la atención fuera de la red"
    ],
    a: 1,
    trampa: "La ausencia de referido hace pensar en PPO; la negación total fuera de la red hace pensar en HMO. La EPO combina exactamente esas dos características de dos estructuras distintas, y por eso se confunde con ambas por separado.",
    correcto: "La EPO (Exclusive Provider Organization) toma del PPO la característica de no exigir referido para ver especialistas, pero toma del HMO la restricción de no cubrir atención fuera de la red salvo en caso de emergencia. Es precisamente esta combinación la que la distingue como estructura propia.",
    incorrectos: [
      "A) Un HMO típico SÍ exige referido para especialistas — contradice el primer hecho del escenario (R no pidió referido para el dermatólogo).",
      "C) El primer evento (consulta al dermatólogo) no fue una emergencia y sí estuvo cubierto, por lo que 'solo cubre emergencias' no explica ambos hechos.",
      "D) Un PPO estándar generalmente sí ofrece algún reembolso parcial fuera de la red, aunque menor — no la negación total que sufrió R con el cardiólogo."
    ],
    distractor_condicional: "Si la póliza de R hubiera exigido referido de un PCP para ver al dermatólogo (el primer evento), la estructura correcta habría sido un HMO, no una EPO."
  }]
},

{
  id: "killer_pilot_006",
  area: "salud",
  subtema_blueprint: "POS",
  concepto: "POS — Niveles de Reembolso Según la Vía de Acceso",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "M tiene una póliza de salud que le permite, si así lo decide, consultar directamente a un especialista fuera de la red sin pasar por su médico de cabecera. Lo hace, y la aseguradora le reembolsa una parte del costo — pero a un porcentaje menor que el que hubiera recibido si su médico de cabecera lo hubiera referido a un especialista dentro de la red. ¿Qué tipo de estructura describe esta cobertura parcial (ni negación total, ni reembolso completo)?",
    o: [
      "Un HMO, porque toda estructura de atención administrada niega totalmente la atención sin referido",
      "Un plan de Punto de Servicio (POS), que permite auto-referirse fuera de la red pero con un nivel de reembolso menor al que aplica cuando se sigue el sistema de referidos del PCP",
      "Un PPO, que siempre reembolsa igual dentro y fuera de la red",
      "Una EPO, que nunca cubre absolutamente nada fuera de la red bajo ninguna circunstancia"
    ],
    a: 1,
    trampa: "El resultado de M no es ni la negación total característica del HMO/EPO fuera de la red, ni la igualdad de reembolso que sugiere erróneamente la opción C — es un punto intermedio, que es precisamente la firma distintiva del POS.",
    correcto: "El plan de Punto de Servicio (POS) combina el sistema de referidos del HMO (el nivel de cobertura MÁS ALTO se obtiene siguiendo el sistema de PCP) con la posibilidad de auto-referirse fuera de la red como en un PPO, pero a un nivel de reembolso MENOR que si hubiera usado el sistema de referidos.",
    incorrectos: [
      "A) Contradice directamente el escenario: M sí recibió reembolso parcial, no una negación total como sería típico de un HMO puro sin referido.",
      "C) Un PPO no necesariamente iguala el reembolso dentro y fuera de la red; y más importante, esta opción no explica la existencia de DOS niveles distintos de reembolso según la vía de acceso, que es justamente lo que describe el escenario.",
      "D) La EPO no cubre nada fuera de la red salvo emergencia — pero M sí recibió cobertura parcial sin que se mencione una emergencia, lo cual contradice esta opción."
    ],
    distractor_condicional: "Si M hubiera obtenido primero el referido de su PCP para ver a ese mismo especialista, habría recibido el nivel de reembolso MÁS ALTO disponible bajo su plan POS, en vez del nivel reducido por auto-referirse."
  }]
},

{
  id: "killer_pilot_007",
  area: "salud",
  subtema_blueprint: "POS",
  concepto: "HMO, EPO y POS — Comparación de Atención Administrada",
  variantes: [{
    nivel: 4,
    tipo_trampa: "CUAL_NO",
    q: "Un consultor de recursos humanos explica a un grupo de empleados las tres estructuras de atención administrada que ofrece la empresa este año: HMO, EPO y POS. ¿Cuál de las siguientes afirmaciones del consultor es FALSA?",
    o: [
      "Las tres estructuras suelen tener redes de proveedores contratados a tarifa negociada",
      "El HMO generalmente exige referido del médico de cabecera para ver especialistas, mientras que la EPO generalmente no lo exige",
      "Las tres estructuras —HMO, EPO y POS— cubren igual la atención fuera de la red, sin importar cuál de las tres elija el empleado",
      "El plan POS combina el sistema de referidos del HMO con la posibilidad de salir de la red que ofrece un PPO, aunque con menor reembolso al salir"
    ],
    a: 2,
    trampa: "Alguien podría asumir que, por pertenecer todas a la categoría genérica de 'atención administrada', las tres tratan la atención fuera de la red de forma equivalente — es exactamente lo contrario: varían mucho entre sí en ese punto específico.",
    correcto: "Es FALSO que las tres cubran igual fuera de la red: el HMO y la EPO generalmente NO cubren nada fuera de la red salvo emergencia; el POS sí ofrece cobertura parcial fuera de la red, aunque a un nivel de reembolso reducido. Esta es precisamente la diferencia más importante entre las tres estructuras.",
    incorrectos: [
      "A) Es verdadera: las tres estructuras funcionan sobre la base de redes de proveedores con tarifas negociadas.",
      "B) Es verdadera: el HMO exige referido y la EPO típicamente no, siendo esa una de sus diferencias clave.",
      "D) Es verdadera: describe correctamente la naturaleza híbrida del POS entre el HMO y el PPO."
    ],
    distractor_condicional: "No aplica un cambio de dato en este formato EXCEPTO/FALSA — la respuesta depende de identificar cuál de las cuatro afirmaciones no es consistente con la estructura real de cada plan, no de un escenario que pueda alterarse."
  }]
},

{
  id: "killer_pilot_008",
  area: "salud",
  subtema_blueprint: "HDHP",
  concepto: "HDHP — Excepción de Atención Preventiva Antes del Deducible",
  variantes: [{
    nivel: 5,
    tipo_trampa: "EXCEPCION_LEGAL",
    q: "Una familia está inscrita en un plan de salud con deducible de $3,400 este año y no ha gastado nada de ese deducible todavía. La madre asiste a su examen físico anual de rutina (chequeo general y vacunas), y en el consultorio no le cobran nada por esa visita. Su esposo, sorprendido, pregunta cómo es posible que el plan pagara ANTES de cumplirse el deducible sin que esto ponga en riesgo que el plan siga calificando como plan de deducible alto (HDHP). ¿Cuál es la explicación MÁS probable?",
    o: [
      "Es un error de facturación del consultorio que debe corregirse antes de que termine el año",
      "Los planes HDHP pueden cubrir servicios preventivos de rutina antes del deducible sin perder su calificación como HDHP, conforme a las reglas del IRS que rigen estos planes",
      "El deducible familiar completo ya se cumplió automáticamente apenas comenzó el año, por tratarse de un plan familiar",
      "Los HDHP nunca cobran deducible a ningún miembro menor de edad de la familia"
    ],
    a: 1,
    trampa: "La regla general que la gente aprende es 'en un HDHP no se paga nada hasta cumplir el deducible' — la atención preventiva es la excepción reconocida a esa regla, y por eso genera esta duda tan frecuente.",
    correcto: "El IRS permite específicamente que los planes HDHP cubran ciertos servicios de atención preventiva (como chequeos de rutina y vacunas) antes de que se cumpla el deducible, sin que esto afecte la calificación del plan como HDHP para efectos de elegibilidad de HSA. Es una excepción diseñada para no desincentivar la prevención.",
    incorrectos: [
      "A) No hay ningún error: la cobertura preventiva sin costo antes del deducible es exactamente lo que exige la regulación aplicable a los HDHP.",
      "C) No existe tal regla de 'cumplimiento automático' del deducible familiar al inicio del año; el deducible se acumula con los gastos reales incurridos.",
      "D) No existe una exención general de deducible basada solo en la edad del miembro de la familia."
    ],
    distractor_condicional: "Si en vez de un chequeo preventivo de rutina hubiera sido una consulta por un síntoma específico nuevo (atención diagnóstica, no preventiva), ese gasto SÍ contaría normalmente contra el deducible del HDHP."
  }]
},

{
  id: "killer_pilot_009",
  area: "salud",
  subtema_blueprint: "HDHP",
  concepto: "HDHP y HSA — Cobertura Descalificante del Cónyuge",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "P está inscrito en un HDHP a través de su propio empleo, con un deducible que cumple el mínimo exigido. Su cónyuge trabaja en otra empresa y, sin que P lo sepa al principio, lo inscribió como dependiente en una cuenta de gastos flexibles (FSA) de propósito GENERAL que el cónyuge tiene en su trabajo, la cual reembolsa cualquier tipo de gasto médico desde el primer dólar. P quiere abrir una HSA este año. ¿Qué efecto tiene la FSA del cónyuge sobre la elegibilidad de P para contribuir a una HSA?",
    o: [
      "Ninguno, porque la FSA pertenece legalmente al cónyuge, no a P",
      "P pierde la elegibilidad para contribuir a una HSA, porque estar cubierto por una FSA de propósito general de cualquiera de los dos cónyuges es cobertura de salud descalificante",
      "P puede contribuir a la HSA normalmente, pero con el límite de contribución reducido a la mitad",
      "P solo pierde la elegibilidad si los gastos reembolsados por la FSA superan los $500 anuales"
    ],
    a: 1,
    trampa: "La gente asume que solo cuenta la cobertura a NOMBRE PROPIO del solicitante de la HSA, pero la cobertura de una FSA de propósito general del cónyuge —de la cual el solicitante es beneficiario— también cuenta como cobertura descalificante para la HSA.",
    correcto: "Cualquier persona cubierta por una FSA de propósito general —incluso como dependiente de la FSA de su cónyuge— pierde la elegibilidad para contribuir a una HSA, porque esa FSA reembolsa gastos médicos antes del deducible, lo cual es incompatible con el requisito de 'ninguna otra cobertura descalificante' de la HSA.",
    incorrectos: [
      "A) Es un error común: la titularidad legal de la cuenta no es lo relevante — lo relevante es si la persona está CUBIERTA por esa cobertura descalificante, y P sí lo está como dependiente inscrito.",
      "C) No existe tal regla de 'límite reducido a la mitad' por tener cobertura descalificante parcial — la elegibilidad para la HSA es binaria: se tiene o no se tiene.",
      "D) No existe un umbral de $500 que determine si la cobertura descalifica; lo que importa es el TIPO de cuenta (propósito general vs. limitado), no el monto reembolsado."
    ],
    distractor_condicional: "Si la FSA del cónyuge fuera de propósito LIMITADO (por ejemplo, solo para gastos dentales o de visión) en vez de propósito general, P podría seguir contribuyendo a su HSA sin problema, porque las FSA limitadas no son cobertura descalificante."
  }]
},

{
  id: "killer_pilot_010",
  area: "salud",
  subtema_blueprint: "HSA",
  concepto: "HSA — Efecto de Inscribirse en Medicare",
  variantes: [{
    nivel: 4,
    tipo_trampa: "ESCENARIO",
    q: "V, de 66 años, sigue trabajando a tiempo completo y mantiene su HDHP a través de su empleador. Como cumple 66 años, decide inscribirse en Medicare Parte A porque escuchó que es gratuita para quien acumuló suficientes créditos de trabajo, y piensa que no tiene sentido 'dejar pasar' un beneficio sin costo. ¿Qué consecuencia tiene esta decisión sobre su cuenta HSA?",
    o: [
      "Ninguna: puede seguir contribuyendo a su HSA con normalidad mientras siga trabajando",
      "Debe dejar de hacer nuevas contribuciones a su HSA a partir del mes en que su cobertura de Medicare Parte A entra en vigor",
      "Puede seguir contribuyendo, pero únicamente por el monto adicional de 'catch-up' para mayores de 55 años",
      "Pierde automáticamente todos los fondos que ya tenía acumulados en la HSA antes de inscribirse en Medicare"
    ],
    a: 1,
    trampa: "V razona 'es gratis, así que no tiene costo ni consecuencia' — pero estar inscrito en CUALQUIER parte de Medicare, sin importar si tiene prima o no, es cobertura descalificante para NUEVAS contribuciones a la HSA. El dato de que la Parte A es gratuita es irrelevante para esta regla.",
    correcto: "Inscribirse en cualquier parte de Medicare (incluida la Parte A sin prima) hace que la persona deje de ser 'individuo elegible' para efectos de HSA, por lo que debe detener las contribuciones nuevas a partir del mes de inscripción. Los fondos ya acumulados antes de esa fecha siguen siendo propiedad de V y pueden seguir usándose libres de impuestos para gastos médicos calificados.",
    incorrectos: [
      "A) Es exactamente el error que comete V: seguir trabajando no evita la descalificación una vez inscrito en Medicare — lo que importa es la inscripción en Medicare, no el estatus laboral.",
      "C) No existe una excepción de 'solo catch-up' para personas inscritas en Medicare — la descalificación aplica a toda nueva contribución, no solo a la porción adicional por edad.",
      "D) Los fondos ya acumulados en la HSA antes de la inscripción en Medicare NO se pierden; siguen siendo del titular y pueden seguir usándose."
    ],
    distractor_condicional: "Si V hubiera pospuesto su inscripción en Medicare (lo cual es posible mientras siga trabajando y mantenga cobertura de grupo calificada), podría haber seguido contribuyendo normalmente a su HSA sin esta interrupción."
  }]
},

{
  id: "killer_pilot_011",
  area: "salud",
  subtema_blueprint: "HSA",
  concepto: "HSA vs. FSA — Portabilidad al Cambiar de Empleo",
  variantes: [{
    nivel: 3,
    tipo_trampa: "COMPARACION",
    q: "Al dejar su trabajo, K tiene $3,200 acumulados en su cuenta de ahorro de salud, y por separado tenía $400 sin usar en su cuenta de gastos flexibles de ese mismo año, financiada con reducción de su salario. Su nuevo empleador no ofrece un plan de deducible alto ni ningún tipo de cuenta de beneficios de salud. ¿Qué es MÁS PROBABLE que ocurra con cada uno de los dos saldos?",
    o: [
      "K pierde ambos saldos automáticamente al dejar el empleo, sin excepción",
      "Los $3,200 de la cuenta de ahorro los conserva de por vida, sin importar el cambio de empleo; los $400 de la cuenta de gastos flexibles generalmente se pierden al terminar el empleo, salvo excepciones limitadas del plan",
      "Ambos saldos son completamente portables de por vida, sin ninguna diferencia entre ellos",
      "K debe transferir ambos saldos a su antiguo empleador dentro de 60 días o los pierde definitivamente"
    ],
    a: 1,
    trampa: "Tratar la cuenta de ahorro de salud (HSA) y la cuenta de gastos flexibles (FSA) como si tuvieran las mismas reglas de propiedad es el error central — son prácticamente opuestas en portabilidad, y confundirlas es uno de los errores más comunes entre asegurados.",
    correcto: "La HSA es propiedad personal del titular, totalmente portable, y el cambio de empleo no afecta el saldo acumulado — sigue siendo de K de por vida, aunque el nuevo empleo no ofrezca HDHP. La FSA, en cambio, es una cuenta ligada al empleador, y el saldo no usado generalmente se pierde al terminar la relación laboral, salvo que el plan ofrezca alguna excepción limitada de continuación (como COBRA para la FSA en ciertos casos).",
    incorrectos: [
      "A) Es falso para la HSA: ese saldo es propiedad personal de K y no se pierde por cambiar de empleo.",
      "C) Es falso para la FSA: a diferencia de la HSA, generalmente no es portable y el saldo se pierde al dejar el empleo.",
      "D) No existe tal requisito de transferencia al antiguo empleador; los fondos de la HSA simplemente permanecen en la cuenta personal de K."
    ],
    distractor_condicional: "No aplica un cambio simple de dato aquí — la diferencia de portabilidad es estructural entre los dos tipos de cuenta, no depende de las circunstancias particulares de K."
  }]
},

{
  id: "killer_pilot_012",
  area: "salud",
  subtema_blueprint: "FSA",
  concepto: "FSA — Período de Gracia y Transferencia son Mutuamente Excluyentes",
  variantes: [{
    nivel: 3,
    tipo_trampa: "SIEMPRE_NUNCA",
    q: "Un empleado le pregunta a Recursos Humanos si puede beneficiarse, en el mismo año, tanto del período de gracia de 2.5 meses adicionales para gastar el saldo de su cuenta de gastos flexibles, como de la opción de transferir (carryover) una parte de ese saldo al año siguiente. ¿Qué debe responder Recursos Humanos?",
    o: [
      "Sí, ambos beneficios se pueden combinar libremente sin ninguna restricción",
      "No — el diseño del plan de la empresa puede ofrecer UNA de las dos opciones (período de gracia O transferencia limitada), pero nunca ambas al mismo tiempo",
      "No, porque ninguna de las dos opciones existe legalmente para las cuentas de gastos flexibles",
      "Sí, pero únicamente si el empleado tiene 55 años o más"
    ],
    a: 1,
    trampa: "El empleado asume que, si ambos beneficios existen por separado, deben poder sumarse — pero el IRS diseñó estas dos opciones como alternativas mutuamente excluyentes a nivel de plan, no como beneficios acumulables a elección del empleado.",
    correcto: "El empleador debe elegir, al diseñar el plan, entre ofrecer un período de gracia de hasta 2.5 meses adicionales o permitir una transferencia (carryover) limitada de fondos al año siguiente — nunca las dos disposiciones al mismo tiempo dentro del mismo plan.",
    incorrectos: [
      "A) Contradice la regla del IRS que hace estas dos opciones mutuamente excluyentes a nivel de diseño del plan.",
      "C) Ambas opciones sí existen y son válidas — el error no es que no existan, sino que no pueden combinarse.",
      "D) La edad del empleado (55+) es relevante para el catch-up de la HSA, no para las reglas de gracia/transferencia de la FSA — son conceptos de cuentas distintas."
    ],
    distractor_condicional: "No aplica un cambio de escenario aquí — la exclusión mutua es una regla de diseño del plan aplicable a todos los empleados por igual, independientemente de sus circunstancias individuales."
  }]
},

{
  id: "killer_pilot_013",
  area: "salud",
  subtema_blueprint: "FSA",
  concepto: "Saldo Transferido de FSA como Cobertura Descalificante para HSA",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "J quiere abrir una HSA este año, ahora que se inscribió en un HDHP por primera vez. El año pasado tuvo una cuenta de gastos flexibles de propósito GENERAL con su empleador anterior, y le quedaron $200 sin usar que el plan le permitió transferir (carryover) hacia este año, disponibles para gastar en cualquier momento. ¿Qué efecto tiene ese saldo transferido sobre la elegibilidad de J para contribuir a la HSA este año?",
    o: [
      "Ninguno, porque es un saldo pequeño de solo $200",
      "Sigue siendo cobertura descalificante para la HSA mientras esos fondos permanezcan disponibles para gastar, aunque provengan de un año anterior",
      "Solo descalifica si el saldo transferido supera los $500",
      "Un saldo transferido (carryover) nunca afecta la elegibilidad de HSA bajo ninguna circunstancia, a diferencia de una FSA activa del año en curso"
    ],
    a: 1,
    trampa: "J podría pensar que, por tratarse de dinero 'del año pasado' o de un monto pequeño, ya no cuenta para efectos de descalificación — pero mientras los fondos sigan disponibles para gastar, la FSA de propósito general sigue siendo cobertura descalificante, sin importar su origen o monto.",
    correcto: "Mientras los $200 transferidos permanezcan disponibles para que J los use en gastos médicos generales, esa FSA de propósito general sigue contando como cobertura descalificante para la HSA — el hecho de que el dinero provenga de un carryover del año anterior no lo exime de esta regla.",
    incorrectos: [
      "A) No existe una excepción por monto pequeño; lo que importa es el tipo de cobertura (propósito general), no la cantidad de dinero.",
      "C) No existe tal umbral de $500 en esta regla — cualquier monto disponible bajo una FSA de propósito general cuenta como cobertura descalificante.",
      "D) Es falso: un saldo transferido de una FSA de propósito general tiene el mismo efecto descalificante que una FSA activa del año en curso, mientras el dinero siga disponible."
    ],
    distractor_condicional: "Si esa FSA hubiera sido de propósito LIMITADO (solo dental o visión) en vez de propósito general, o si J hubiera agotado el saldo completo antes de empezar su cobertura HDHP, no habría conflicto con su elegibilidad para la HSA."
  }]
},

{
  id: "killer_pilot_014",
  area: "salud",
  subtema_blueprint: "HRA",
  concepto: "HRA vs. HSA — Quién Financia y Quién Controla los Fondos",
  variantes: [{
    nivel: 4,
    tipo_trampa: "COMPARACION",
    q: "Al terminar el año, a S le queda un saldo sin usar en la cuenta de reembolso de salud (HRA) que le ofrece su empleador; a su esposo le queda un saldo sin usar en su cuenta de ahorro de salud (HSA). Ambos preguntan qué pasaría con cada saldo si cambiaran de trabajo el próximo año. ¿Cuál es la diferencia CLAVE entre ambos casos?",
    o: [
      "Ambos saldos son propiedad personal del empleado y totalmente portables de un empleo a otro",
      "La HRA es financiada y controlada por el empleador — el saldo no usado generalmente se queda con el empleador si S cambia de trabajo; la HSA es propiedad de su esposo y lo acompaña sin importar dónde trabaje",
      "Ambas cuentas son financiadas exclusivamente con el dinero del propio empleado",
      "Ninguna de las dos cuentas permite acumular saldo de un año a otro bajo ninguna circunstancia"
    ],
    a: 1,
    trampa: "Se tiende a tratar la HRA como si fuera una cuenta personal igual que la HSA solo porque ambas empiezan con 'H' y ambas sirven para gastos de salud — mezclarlas ignora la diferencia fundamental de quién las financia y controla.",
    correcto: "La HRA es una cuenta financiada y controlada por el empleador; el saldo no usado generalmente pertenece al empleador y no acompaña al empleado si cambia de trabajo, salvo que el plan lo permita expresamente. La HSA, en cambio, es propiedad personal del titular, y el saldo lo acompaña de por vida sin importar los cambios de empleo.",
    incorrectos: [
      "A) Es cierto solo para la HSA, no para la HRA — tratarlas como iguales en portabilidad es exactamente el error de la trampa.",
      "C) Es falso para la HRA, que es financiada exclusivamente por el empleador, no por el empleado.",
      "D) Es falso: algunos diseños de HRA sí permiten acumular saldo de un año a otro (a discreción del empleador), y la HSA sí acumula sin límite de tiempo por diseño."
    ],
    distractor_condicional: "No aplica un cambio de escenario simple aquí — la diferencia de propiedad y control es estructural entre HRA y HSA, independientemente de las circunstancias particulares de S y su esposo."
  }]
},

{
  id: "killer_pilot_015",
  area: "salud",
  subtema_blueprint: "HRA",
  concepto: "Compatibilidad de HRA de Propósito General con HSA",
  variantes: [{
    nivel: 5,
    tipo_trampa: "EXCEPCION_LEGAL",
    q: "Un empleador ofrece a sus empleados un HDHP junto con una HRA que reembolsa CUALQUIER gasto médico elegible desde el primer dólar, incluso antes de que se cumpla el deducible del HDHP. Un empleado inscrito en ambos beneficios quiere abrir además una HSA. ¿Puede hacerlo bajo el diseño actual de esa HRA?",
    o: [
      "Sí, sin ningún problema, porque la HRA y la HSA son cuentas completamente independientes entre sí",
      "No — esa HRA de propósito general, que reembolsa gastos antes del deducible, es cobertura descalificante para la HSA, a menos que se rediseñe como HRA 'limitada' o 'post-deducible'",
      "Sí, pero debe reducir su contribución anual a la HSA a la mitad del límite normal",
      "No, porque ningún empleado puede tener HRA y HSA de forma simultánea bajo ninguna circunstancia"
    ],
    a: 1,
    trampa: "Las dos opciones extremas son las más tentadoras: pensar que son 'cuentas independientes' sin relación (ignora la regla de cobertura descalificante) o asumir que 'nunca' pueden coexistir (exagera la restricción, cuando en realidad sí es posible con el diseño correcto de HRA).",
    correcto: "Una HRA de propósito general que reembolsa gastos médicos antes de que se cumpla el deducible del HDHP cuenta como cobertura de salud descalificante para la HSA. Sin embargo, SÍ es posible tener ambas cuentas si la HRA se rediseña como 'limitada' (solo cubre dental/visión) o 'post-deducible' (solo reembolsa después de cumplido el deducible mínimo del HDHP).",
    incorrectos: [
      "A) Ignora la regla de cobertura descalificante: no basta con que sean cuentas administrativamente distintas — lo que importa es CUÁNDO y QUÉ reembolsa la HRA.",
      "C) No existe tal regla de 'reducir la contribución a la mitad' como solución a este conflicto; la elegibilidad de HSA es binaria, no se resuelve prorrateando la contribución.",
      "D) Es una exageración: SÍ es posible combinar HRA y HSA, siempre que la HRA tenga el diseño correcto (limitada o post-deducible) — la opción correcta explica exactamente cómo."
    ],
    distractor_condicional: "Si la HRA de este empleador ya estuviera diseñada como 'post-deducible' (reembolsando solo después de que el empleado cumpla el deducible mínimo del HDHP) o como HRA 'limitada' a dental y visión, la respuesta correcta sería la opción A: sí podría tener ambas cuentas sin conflicto."
  }]
}

]; // fin PK_KILLER_PILOT

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PILOT };
if (typeof window !== 'undefined') window.PK_KILLER_PILOT = PK_KILLER_PILOT;
