// ============================================================
// PEARSON KILLER — pk-data-killer-pilot.js
// LOTE PILOTO — 15 preguntas revisadas técnicamente
// Tema: Tipos de Pólizas de Salud (HMO, PPO, EPO, POS, HDHP, HSA, FSA, HRA)
//
// Revisión humana técnica: se eliminaron absolutos innecesarios y se
// precisaron reglas dependientes del diseño del plan, fecha efectiva,
// cobertura descalificante y continuidad de beneficios.
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
    q: "D está inscrito en un HMO a través de su empleo, plan que normalmente exige referido de su médico de cabecera (PCP) para consultas con especialistas. Mientras viaja por trabajo fuera del área de servicio del plan, sufre un accidente de tránsito y es trasladado en ambulancia al hospital más cercano, que no pertenece a la red. ¿Qué es MÁS PROBABLE respecto a la cobertura de la atención de emergencia?",
    o: [
      "No está cubierta, porque el hospital no pertenece a la red y D no obtuvo referido de su PCP",
      "La atención de emergencia puede estar cubierta sin referido ni autorización previa, aun cuando el hospital esté fuera de la red, sujeta a las condiciones aplicables del plan y la ley",
      "Está cubierta solo si D llama a su PCP desde la sala de emergencias antes de recibir tratamiento",
      "Está cubierta únicamente si, dentro de las 24 horas siguientes, D consigue que su PCP emita un referido retroactivo"
    ],
    a: 1,
    trampa: "La trampa consiste en aplicar la regla ordinaria de red y referidos del HMO a una situación de emergencia.",
    correcto: "La atención de emergencia no se condiciona normalmente a un referido o autorización previa. La cobertura y el costo compartido exactos dependen de las reglas aplicables al plan y de la normativa vigente, pero la falta de referido previo no convierte por sí sola una emergencia en un servicio no cubierto.",
    incorrectos: [
      "A) Aplica la regla general de red y referidos a una emergencia, donde la ausencia de autorización previa no es por sí sola motivo suficiente para negar la atención de emergencia.",
      "C) Exigir una llamada al PCP antes de tratar una emergencia contradice la lógica de la atención inmediata.",
      "D) Un plan puede exigir notificación posterior en ciertos casos, pero eso no equivale a exigir un referido retroactivo como condición universal de cobertura."
    ],
    distractor_condicional: "Si D hubiera buscado por conveniencia una consulta no urgente fuera de la red, la cobertura podría ser negada o reducida conforme a las reglas del HMO."
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
    q: "Una doctora trabaja exclusivamente para una organización de atención administrada: atiende únicamente a los miembros de ese plan, dentro de instalaciones del propio sistema, como empleada asalariada, y no mantiene consultorio privado independiente. ¿Qué tipo de estructura describe MEJOR esa relación?",
    o: ["HMO de Panel Abierto", "HMO de Panel Cerrado", "Organización de Punto de Servicio (POS)", "Organización de Proveedores Preferidos (PPO)"],
    a: 1,
    trampa: "Se confunde el panel cerrado con modelos de médicos independientes contratados por una red.",
    correcto: "En un modelo de panel cerrado o de grupo cerrado, los médicos atienden dentro de una estructura más integrada y no mantienen una práctica abierta a pacientes ajenos al sistema descrito.",
    incorrectos: [
      "A) El panel abierto se asocia con médicos que mantienen práctica independiente y participan en la red.",
      "C) POS describe una estructura de beneficios y acceso, no esta relación laboral específica.",
      "D) PPO es una red contractual de proveedores y no exige esta exclusividad laboral."
    ],
    distractor_condicional: "Si la doctora mantuviera su propio consultorio y atendiera pacientes de distintos pagadores, la opción A sería más apropiada."
  }]
},

{
  id: "killer_pilot_003",
  area: "salud",
  subtema_blueprint: "PPO",
  concepto: "PPO — Posible Facturación de Saldo Fuera de la Red",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "N tiene una póliza PPO y elige voluntariamente, para una cirugía programada, a un cirujano fuera de la red. Antes del procedimiento confirma que el plan pagará beneficios fuera de la red sobre un monto permitido menor que los $10,000 cobrados por el cirujano. Salvo que una protección legal específica o el contrato aplicable dispongan otra cosa, ¿qué es MÁS PROBABLE respecto a la diferencia no cubierta?",
    o: [
      "N no debe nada adicional, porque un PPO paga siempre igual dentro y fuera de la red",
      "El proveedor fuera de la red puede intentar facturar a N parte o toda la diferencia entre su cargo y lo reconocido por el plan, además del costo compartido aplicable",
      "La aseguradora debe pagar automáticamente el 100% del cargo después de la cirugía",
      "Todo proveedor fuera de la red está obligado a aceptar el monto permitido por el plan como pago completo"
    ],
    a: 1,
    trampa: "La existencia de beneficios fuera de la red no significa que el proveedor haya aceptado contractualmente la tarifa negociada del plan.",
    correcto: "En una atención programada elegida voluntariamente fuera de la red, el proveedor puede no estar sujeto al contrato de tarifas del PPO y puede existir facturación adicional al paciente, salvo que una ley de protección contra facturación sorpresa u otra regla aplicable limite esa práctica.",
    incorrectos: [
      "A) Los PPO suelen diferenciar costos y beneficios entre dentro y fuera de la red.",
      "C) No existe una obligación general de reembolso automático al 100% del cargo facturado.",
      "D) Un proveedor fuera de la red no está, por ese solo hecho, obligado contractualmente a aceptar el monto permitido del plan como pago completo."
    ],
    distractor_condicional: "Si el cirujano fuera un proveedor participante dentro de la red, normalmente estaría obligado por contrato a aceptar la tarifa negociada, sin facturar al paciente la diferencia entre su cargo habitual y esa tarifa."
  }]
},

{
  id: "killer_pilot_004",
  area: "salud",
  subtema_blueprint: "PPO",
  concepto: "PPO vs. HMO — Acceso a Especialistas",
  variantes: [{
    nivel: 3,
    tipo_trampa: "COMPARACION",
    q: "Un ejecutivo debe elegir entre un HMO y un PPO. Su prioridad es poder consultar especialistas sin tener que obtener primero un referido de su médico de cabecera. ¿Qué característica ESTRUCTURAL del PPO explica MEJOR por qué suele ajustarse a esa prioridad?",
    o: [
      "El PPO generalmente permite consultar especialistas sin referido de un PCP, aunque ciertos servicios todavía pueden requerir autorización previa",
      "El PPO siempre tiene primas mensuales más bajas que el HMO",
      "El PPO cubre el 100% de todos los gastos médicos sin deducible",
      "El PPO prohíbe recibir atención fuera del estado de residencia"
    ],
    a: 0,
    trampa: "No debe confundirse la ausencia de referido con la ausencia de toda autorización previa.",
    correcto: "La diferencia relevante es que un PPO generalmente no exige un referido del PCP para acceder a especialistas. Eso no significa que ningún servicio pueda estar sujeto a autorización previa o manejo de utilización.",
    incorrectos: [
      "B) El costo de la prima depende del plan; no existe una regla de que el PPO siempre sea más barato.",
      "C) Un PPO puede tener deducibles, copagos y coaseguro.",
      "D) La estructura PPO no se define por una prohibición general de atención fuera del estado."
    ],
    distractor_condicional: "Si la prioridad fuera coordinar la atención mediante un PCP y aceptar una red más restringida a cambio de costos potencialmente menores, un HMO podría ajustarse mejor."
  }]
},

{
  id: "killer_pilot_005",
  area: "salud",
  subtema_blueprint: "EPO",
  concepto: "EPO — Acceso sin Referido y Red Exclusiva",
  variantes: [{
    nivel: 4,
    tipo_trampa: "COMPARACION",
    q: "R tiene un plan que, según su diseño, permite consultar especialistas de la red sin referido de un PCP. Más tarde busca atención NO urgente con un cardiólogo fuera de la red y el plan no paga beneficios fuera de la red. ¿Qué opción describe MEJOR esa combinación?",
    o: [
      "Un HMO que necesariamente cubre igual dentro y fuera de la red",
      "Una EPO: acceso directo a especialistas de la red, con cobertura ordinaria limitada a proveedores de la red salvo excepciones como emergencias",
      "Una póliza que solo cubre emergencias",
      "Un PPO que necesariamente paga el mismo beneficio fuera de la red"
    ],
    a: 1,
    trampa: "La ausencia de referido recuerda a un PPO, mientras la restricción ordinaria fuera de la red recuerda a un HMO.",
    correcto: "Una EPO suele combinar acceso a especialistas de la red sin referido con una red exclusiva para la atención no urgente. Los detalles exactos dependen del contrato del plan.",
    incorrectos: [
      "A) No describe la combinación del escenario y además afirma una cobertura fuera de red que no es característica definitoria de un HMO.",
      "C) El plan sí cubrió una consulta no urgente dentro de la red.",
      "D) Un PPO puede ofrecer beneficios fuera de la red, pero no se define por pagar lo mismo dentro y fuera."
    ],
    distractor_condicional: "Si el plan exigiera referido del PCP para especialistas y restringiera la atención ordinaria a la red, un HMO sería una opción más probable."
  }]
},

{
  id: "killer_pilot_006",
  area: "salud",
  subtema_blueprint: "POS",
  concepto: "POS — Diferente Costo Según la Vía de Acceso",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "M tiene un plan que usa un PCP para coordinar la atención dentro de la red, pero también le permite buscar por su cuenta ciertos servicios fuera de la red con mayor costo de bolsillo. ¿Qué estructura describe MEJOR ese diseño?",
    o: [
      "Un HMO que necesariamente niega toda atención sin referido",
      "Un plan de Punto de Servicio (POS), que combina coordinación tipo HMO con una opción de usar proveedores fuera de la red a mayor costo, según el diseño del plan",
      "Un PPO que siempre paga exactamente lo mismo dentro y fuera de la red",
      "Una EPO que paga de forma rutinaria beneficios fuera de la red para atención no urgente"
    ],
    a: 1,
    trampa: "El rasgo decisivo es la combinación de coordinación mediante PCP con una opción de salir de la red, no un porcentaje de reembolso universal.",
    correcto: "Un POS suele combinar características de HMO y PPO: atención coordinada dentro de la red y, según el contrato, posibilidad de recibir ciertos beneficios fuera de la red con mayor costo compartido.",
    incorrectos: [
      "A) Es demasiado absoluta y no describe la opción fuera de red del escenario.",
      "C) Un PPO no se define por pagar igual dentro y fuera de la red.",
      "D) Una EPO normalmente restringe la cobertura ordinaria a la red."
    ],
    distractor_condicional: "Si el plan no utilizara PCP ni referidos y ofreciera beneficios fuera de la red directamente, un PPO sería más probable."
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
    q: "Un consultor explica características GENERALES de HMO, EPO y POS, aclarando que los contratos específicos pueden variar. ¿Cuál afirmación es FALSA?",
    o: [
      "Las tres estructuras suelen utilizar redes de proveedores contratados",
      "Un HMO suele usar un PCP y referidos con más frecuencia que una EPO",
      "HMO, EPO y POS ofrecen necesariamente la misma cobertura fuera de la red",
      "Un POS suele combinar coordinación de atención tipo HMO con alguna posibilidad de obtener beneficios fuera de la red a mayor costo"
    ],
    a: 2,
    trampa: "Pertenecer a la categoría de atención administrada no significa que los tres diseños manejen igual la atención fuera de la red.",
    correcto: "Es falso afirmar que los tres ofrecen necesariamente la misma cobertura fuera de la red. Esa es precisamente una de las áreas donde suelen diferenciarse.",
    incorrectos: [
      "A) Es una descripción general válida de estos modelos de atención administrada.",
      "B) Es una comparación general válida, aunque los contratos concretos pueden variar.",
      "D) Describe la naturaleza habitual de un POS sin convertirla en una regla absoluta sobre todos los contratos."
    ],
    distractor_condicional: "No aplica un cambio simple de escenario: la pregunta evalúa una comparación general entre estructuras."
  }]
},

{
  id: "killer_pilot_008",
  area: "salud",
  subtema_blueprint: "HDHP",
  concepto: "HDHP — Atención Preventiva Antes del Deducible",
  variantes: [{
    nivel: 5,
    tipo_trampa: "EXCEPCION_LEGAL",
    q: "Una familia está inscrita en un HDHP y todavía no ha satisfecho el deducible. La madre recibe un servicio preventivo que el plan cubre antes del deducible. ¿Cuál es la explicación MÁS correcta respecto a la condición del plan como HDHP elegible para HSA?",
    o: [
      "Todo pago del plan antes del deducible descalifica automáticamente al HDHP",
      "Las reglas fiscales permiten que un HDHP proporcione cobertura preventiva permitida antes del deducible sin perder por ello su condición de HDHP",
      "El deducible familiar se considera cumplido automáticamente al comenzar el año",
      "Los HDHP nunca aplican deducible a miembros menores de edad"
    ],
    a: 1,
    trampa: "La regla general del deducible tiene excepciones permitidas, entre ellas determinada atención preventiva.",
    correcto: "La normativa fiscal permite que un HDHP cubra atención preventiva permitida antes de satisfacer el deducible sin perder su condición de HDHP. No debe afirmarse que toda atención preventiva concreta está necesariamente cubierta al 100% por la sola regla fiscal; eso también depende de otras normas y del diseño del plan.",
    incorrectos: [
      "A) Ignora las excepciones expresamente permitidas para atención preventiva.",
      "C) El deducible no se satisface automáticamente al iniciar el año.",
      "D) No existe una exención general del deducible basada únicamente en la edad."
    ],
    distractor_condicional: "Si el servicio fuera diagnóstico o terapéutico y no encajara en una excepción permitida, la cobertura antes del deducible podría afectar la condición HSA-compatible del plan."
  }]
},

{
  id: "killer_pilot_009",
  area: "salud",
  subtema_blueprint: "HDHP",
  concepto: "HDHP y HSA — FSA General del Cónyuge",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "P está cubierto por un HDHP elegible para HSA. El empleador de su cónyuge ofrece una FSA de salud de propósito GENERAL cuyo saldo puede reembolsar gastos médicos elegibles de P como cónyuge. ¿Qué efecto tiene esa disponibilidad de reembolso sobre la elegibilidad de P para contribuir a una HSA?",
    o: [
      "Ninguno, porque la elección de la FSA la hizo el cónyuge",
      "P puede perder la elegibilidad para contribuir a una HSA durante los meses en que la FSA general pueda reembolsar sus gastos, porque constituye otra cobertura de salud no permitida",
      "P siempre puede contribuir, pero solo hasta la mitad del límite anual",
      "Solo descalifica si la FSA reembolsa más de $500"
    ],
    a: 1,
    trampa: "En una FSA no se 'inscribe como dependiente' a la persona de la misma manera que en un seguro; lo relevante es si la FSA puede reembolsar sus gastos médicos.",
    correcto: "Una FSA de salud de propósito general del cónyuge puede descalificar a P para contribuciones a HSA si P es una persona cuyos gastos pueden ser reembolsados por esa FSA. La elegibilidad se determina por mes y por la cobertura disponible, no por quién hizo la elección salarial.",
    incorrectos: [
      "A) La titularidad de la elección no resuelve el problema si la FSA puede pagar gastos de P.",
      "C) No existe una regla general de reducción automática a la mitad.",
      "D) La descalificación no depende de un umbral de $500."
    ],
    distractor_condicional: "Si la FSA fuera de propósito limitado, por ejemplo solo dental y visión, podría ser compatible con la elegibilidad para HSA."
  }]
},

{
  id: "killer_pilot_010",
  area: "salud",
  subtema_blueprint: "HSA",
  concepto: "HSA — Inscripción en Medicare y Fecha Efectiva",
  variantes: [{
    nivel: 4,
    tipo_trampa: "ESCENARIO",
    q: "V, de 66 años, sigue trabajando y mantiene un HDHP. Decide inscribirse en Medicare Parte A. ¿Qué debe revisar para determinar hasta cuándo puede hacer contribuciones elegibles a su HSA?",
    o: [
      "Nada: puede seguir contribuyendo mientras continúe trabajando",
      "La fecha efectiva de su cobertura de Medicare; desde el primer mes en que esté cubierto por Medicare deja de ser elegible para contribuir, y una fecha efectiva retroactiva puede exigir ajustar contribuciones ya realizadas",
      "Puede seguir contribuyendo únicamente por el monto de catch-up",
      "Pierde automáticamente todos los fondos que ya tenía en la HSA"
    ],
    a: 1,
    trampa: "El punto técnico no es solo la fecha en que presenta la solicitud, sino la fecha efectiva de Medicare, que en ciertos casos puede ser retroactiva.",
    correcto: "Una persona inscrita en Medicare deja de ser elegible para nuevas contribuciones a la HSA a partir del mes en que la cobertura de Medicare es efectiva. En algunas inscripciones tardías de Parte A puede existir retroactividad, por lo que deben revisarse cuidadosamente las fechas y corregirse contribuciones no elegibles si corresponde. Los fondos ya acumulados no se pierden.",
    incorrectos: [
      "A) Seguir trabajando no elimina el efecto de estar cubierto por Medicare sobre la elegibilidad para contribuir.",
      "C) El catch-up tampoco puede aportarse durante meses de inelegibilidad.",
      "D) La inscripción en Medicare no confisca el saldo ya existente de la HSA."
    ],
    distractor_condicional: "Si V no estuviera inscrito en Medicare y cumpliera los demás requisitos de elegibilidad para HSA, podría seguir contribuyendo conforme a los límites aplicables."
  }]
},

{
  id: "killer_pilot_011",
  area: "salud",
  subtema_blueprint: "HSA",
  concepto: "HSA vs. FSA — Propiedad, Terminación y Reclamaciones",
  variantes: [{
    nivel: 3,
    tipo_trampa: "COMPARACION",
    q: "Al terminar su empleo, K tiene $3,200 en una HSA y $400 sin usar en una FSA de salud del empleador. ¿Qué es MÁS PROBABLE?",
    o: [
      "Pierde automáticamente ambos saldos el último día de empleo",
      "Conserva los $3,200 de la HSA; respecto a la FSA, puede todavía reclamar gastos elegibles incurridos antes de terminar su participación durante el período de presentación de reclamaciones del plan, y cualquier saldo restante puede perderse salvo que exista una forma aplicable de continuación, como COBRA cuando corresponda",
      "Ambos saldos son portables de por vida",
      "Debe transferir ambos saldos al antiguo empleador dentro de 60 días"
    ],
    a: 1,
    trampa: "La HSA es propiedad del individuo; la FSA está vinculada al plan del empleador y exige distinguir entre saldo disponible, fecha de incurrencia del gasto y período para presentar reclamaciones.",
    correcto: "La HSA permanece con K. En la FSA, terminar el empleo no significa necesariamente que desaparezca de inmediato la posibilidad de presentar una reclamación por un gasto ya incurrido mientras tenía cobertura; el plan puede tener un run-out period. El saldo no utilizado para gastos elegibles puede perderse, salvo continuidad aplicable como COBRA en ciertos casos.",
    incorrectos: [
      "A) Es falso para la HSA y simplifica demasiado las reglas de reclamación de la FSA.",
      "C) La FSA no es una cuenta personal portable como la HSA.",
      "D) No existe ese requisito general de transferencia de ambos saldos al antiguo empleador."
    ],
    distractor_condicional: "Si K tuviera un gasto elegible incurrido antes de terminar su participación y lo presentara dentro del período de reclamaciones del plan, la FSA podría reembolsarlo aun después de la terminación."
  }]
},

{
  id: "killer_pilot_012",
  area: "salud",
  subtema_blueprint: "FSA",
  concepto: "FSA — Período de Gracia y Carryover",
  variantes: [{
    nivel: 3,
    tipo_trampa: "SIEMPRE_NUNCA",
    q: "Un empleado pregunta si un mismo plan de FSA de salud puede aplicar, para el mismo saldo de un año del plan, tanto un período de gracia como una transferencia limitada (carryover) al siguiente año. ¿Qué debe responder Recursos Humanos?",
    o: [
      "Sí, el plan puede combinar libremente ambos mecanismos para el mismo año",
      "No: para un mismo año del plan, la FSA de salud puede ofrecer un período de gracia o un carryover permitido, pero no ambos para el mismo saldo",
      "No, porque ninguno de los dos mecanismos existe",
      "Sí, pero solo para empleados de 55 años o más"
    ],
    a: 1,
    trampa: "Ambas opciones pueden existir por separado, pero no se acumulan para el mismo año del plan.",
    correcto: "El diseño del plan puede ofrecer un período de gracia o permitir un carryover dentro del límite aplicable, pero no ambos respecto del mismo año del plan.",
    incorrectos: [
      "A) Contradice la regla de exclusión entre ambos mecanismos.",
      "C) Ambos mecanismos existen bajo reglas aplicables.",
      "D) La edad no determina esta regla."
    ],
    distractor_condicional: "No aplica un cambio individual de escenario: es una regla del diseño del plan."
  }]
},

{
  id: "killer_pilot_013",
  area: "salud",
  subtema_blueprint: "FSA",
  concepto: "Carryover de FSA General y Elegibilidad HSA",
  variantes: [{
    nivel: 5,
    tipo_trampa: "ESCENARIO",
    q: "J pasa a un HDHP elegible para HSA este año. Del año anterior conserva un carryover de $200 en una FSA de salud de propósito GENERAL que continúa disponible para reembolsar gastos médicos generales durante el nuevo año del plan. ¿Cuál es la MEJOR conclusión?",
    o: [
      "El monto es demasiado pequeño para afectar la HSA",
      "La disponibilidad del carryover de una FSA general puede mantener cobertura descalificante para HSA durante el período en que J tenga derecho a ese reembolso; la fecha exacta de elegibilidad debe determinarse según las reglas del plan y la elegibilidad mensual",
      "Solo afecta si el saldo supera $500",
      "Un carryover nunca afecta la elegibilidad para HSA"
    ],
    a: 1,
    trampa: "No debe asumirse que gastar rápidamente el saldo convierte automáticamente en elegibles todos los meses anteriores o posteriores sin revisar la estructura del plan.",
    correcto: "Mientras J tenga derecho a reembolso de gastos médicos generales bajo una FSA de propósito general, puede existir cobertura descalificante para HSA. La elegibilidad para HSA se determina mensualmente y puede depender de cómo el plan trate el carryover, por lo que no debe expresarse como una regla simplista de 'hasta que el saldo llegue a cero'.",
    incorrectos: [
      "A) El monto por sí solo no crea una excepción general.",
      "C) No existe un umbral general de $500 para esta regla.",
      "D) Un carryover de FSA general sí puede afectar la elegibilidad para HSA."
    ],
    distractor_condicional: "Si el carryover se convirtiera conforme al diseño permitido del plan en cobertura de propósito limitado, por ejemplo dental y visión, podría dejar de ser cobertura descalificante para HSA."
  }]
},

{
  id: "killer_pilot_014",
  area: "salud",
  subtema_blueprint: "HRA",
  concepto: "HRA vs. HSA — Propiedad y Portabilidad",
  variantes: [{
    nivel: 4,
    tipo_trampa: "COMPARACION",
    q: "Al terminar el año, S tiene un saldo disponible bajo una HRA ofrecida por su empleador; su esposo tiene saldo en una HSA. Si ambos cambian de trabajo, ¿cuál es la diferencia CLAVE?",
    o: [
      "Ambos saldos son propiedad personal y totalmente portables",
      "La HRA es un beneficio financiado por el empleador y su uso después de terminar el empleo depende de los términos del plan y de cualquier continuidad aplicable; la HSA pertenece al titular y permanece con él",
      "Ambas cuentas son financiadas exclusivamente por el empleado",
      "Ninguna puede conservar fondos o créditos de un año a otro"
    ],
    a: 1,
    trampa: "La HRA no debe describirse como una cuenta personal idéntica a la HSA.",
    correcto: "La HSA pertenece al individuo. La HRA es un arreglo financiado por el empleador; el derecho a usar montos no utilizados después de terminar el empleo depende del diseño del plan y de las reglas de continuidad aplicables.",
    incorrectos: [
      "A) Es correcto para la HSA, no como regla general para la HRA.",
      "C) La HRA es financiada por el empleador.",
      "D) La HSA acumula saldo y una HRA puede permitir arrastre según el diseño del plan."
    ],
    distractor_condicional: "Si el plan HRA previera expresamente acceso post-empleo o una continuación aplicable, S podría conservar temporalmente ciertos derechos de reembolso; eso no convertiría la HRA en propiedad personal portable como una HSA."
  }]
},

{
  id: "killer_pilot_015",
  area: "salud",
  subtema_blueprint: "HRA",
  concepto: "Compatibilidad de HRA General con HSA",
  variantes: [{
    nivel: 5,
    tipo_trampa: "EXCEPCION_LEGAL",
    q: "Un empleador ofrece un HDHP junto con una HRA que puede reembolsar gastos médicos generales desde el primer dólar, antes de que el empleado satisfaga el deducible aplicable del HDHP. El empleado quiere contribuir además a una HSA. ¿Cuál es la MEJOR conclusión bajo ese diseño?",
    o: [
      "Siempre puede contribuir porque HRA y HSA son administrativamente independientes",
      "La HRA de propósito general puede constituir cobertura descalificante para HSA; la compatibilidad puede lograrse con diseños permitidos, como una HRA de propósito limitado o post-deducible",
      "Puede contribuir automáticamente a la mitad del límite anual",
      "HRA y HSA nunca pueden coexistir bajo ninguna circunstancia"
    ],
    a: 1,
    trampa: "La compatibilidad depende de qué gastos cubre la HRA y cuándo empieza a reembolsarlos.",
    correcto: "Una HRA de propósito general que paga gastos antes del deducible puede ser cobertura no permitida para la elegibilidad HSA. Determinados diseños, como HRA de propósito limitado o post-deducible, pueden ser compatibles si cumplen las reglas aplicables.",
    incorrectos: [
      "A) La independencia administrativa no elimina el análisis de otra cobertura.",
      "C) No existe una regla general de reducción automática a la mitad.",
      "D) Es demasiado absoluta: ciertas HRA sí pueden coexistir con una HSA."
    ],
    distractor_condicional: "Si la HRA estuviera diseñada de manera compatible, por ejemplo como propósito limitado o post-deducible conforme a las reglas aplicables, el empleado podría conservar la elegibilidad para HSA si cumple los demás requisitos."
  }]
}

]; // fin PK_KILLER_PILOT

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PILOT };
if (typeof window !== 'undefined') window.PK_KILLER_PILOT = PK_KILLER_PILOT;
