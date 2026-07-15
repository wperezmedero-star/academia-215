// ============================================================
// PEARSON KILLER — pk-data-killer-pilot.js
// LOTE PILOTO — 15 preguntas revisadas técnicamente y calibradas
// Tema: Tipos de Pólizas de Salud (HMO, PPO, EPO, POS, HDHP, HSA, FSA, HRA)
// ============================================================

const PK_KILLER_PILOT = [
{
 id:"killer_pilot_001",area:"salud",subtema_blueprint:"HMO",concepto:"HMO — Excepción de Emergencia Fuera de Red",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"D está inscrito en un HMO a través de su empleo, plan que normalmente exige referido de su médico de cabecera (PCP) para consultas con especialistas. Mientras viaja por trabajo fuera del área de servicio del plan, sufre un accidente de tránsito y es trasladado en ambulancia al hospital más cercano, que no pertenece a la red. ¿Qué es MÁS PROBABLE respecto a la cobertura de la atención de emergencia?",
 o:["No está cubierta, porque el hospital no pertenece a la red y D no obtuvo referido de su PCP","La atención de emergencia puede estar cubierta sin referido ni autorización previa, aun cuando el hospital esté fuera de la red, sujeta a las condiciones aplicables del plan y la ley","Está cubierta solo si D llama a su PCP desde la sala de emergencias antes de recibir tratamiento","Está cubierta únicamente si, dentro de las 24 horas siguientes, D consigue que su PCP emita un referido retroactivo"],a:1,
 trampa:"La trampa consiste en aplicar la regla ordinaria de red y referidos del HMO a una situación de emergencia.",
 correcto:"La atención de emergencia no se condiciona normalmente a un referido o autorización previa. La cobertura y el costo compartido exactos dependen de las reglas aplicables al plan y de la normativa vigente, pero la falta de referido previo no convierte por sí sola una emergencia en un servicio no cubierto.",
 incorrectos:["A) Aplica la regla general de red y referidos a una emergencia.","C) Exigir una llamada al PCP antes de tratar una emergencia contradice la lógica de la atención inmediata.","D) Puede existir notificación posterior, pero no un referido retroactivo universal como condición de cobertura."],
 distractor_condicional:"Si D hubiera buscado por conveniencia una consulta no urgente fuera de la red, la cobertura podría ser negada o reducida conforme a las reglas del HMO."
 }]},
{
 id:"killer_pilot_002",area:"salud",subtema_blueprint:"HMO",concepto:"HMO — Estructura de Panel Cerrado",variantes:[{
 nivel:4,tipo_trampa:"SINONIMOS",
 q:"Una organización paga salario fijo a sus médicos, concentra la atención en instalaciones propias y limita la práctica de esos médicos a los miembros del sistema. Otro plan de la misma ciudad contrata médicos que conservan sus consultorios privados y atienden pacientes de varios pagadores. ¿Qué característica distingue MEJOR al primer arreglo?",
 o:["Los médicos del primer arreglo forman un panel cerrado porque su práctica está integrada al sistema y no permanece abierta a pacientes externos","Los médicos del primer arreglo forman un panel abierto porque todo médico asalariado puede atender pacientes de otros planes","El primer arreglo es necesariamente un PPO porque paga salario en lugar de honorarios por servicio","El primer arreglo es un POS porque toda práctica en instalaciones propias permite atención fuera de la red"],a:0,
 trampa:"Dos opciones usan lenguaje de organización de proveedores, pero solo una identifica la diferencia decisiva: práctica integrada y no abierta a pacientes externos.",
 correcto:"El rasgo decisivo es la integración exclusiva de la práctica al sistema. En un panel cerrado, los médicos trabajan dentro de una estructura que no mantiene abierta esa práctica a pacientes ajenos al sistema, a diferencia del panel abierto con médicos independientes.",
 incorrectos:["B) Invierte las características de panel abierto y cerrado.","C) La forma de compensación por sí sola no convierte el arreglo en PPO.","D) POS describe beneficios y acceso, no la exclusividad profesional descrita."],
 distractor_condicional:"Si los médicos conservaran consultorios privados y atendieran pacientes de otros pagadores, el panel abierto sería la respuesta más apropiada."
 }]},
{
 id:"killer_pilot_003",area:"salud",subtema_blueprint:"PPO",concepto:"PPO — Posible Facturación de Saldo Fuera de la Red",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"N tiene una póliza PPO y elige voluntariamente, para una cirugía programada, a un cirujano fuera de la red. Antes del procedimiento confirma que el plan pagará beneficios fuera de la red sobre un monto permitido menor que los $10,000 cobrados por el cirujano. Salvo que una protección legal específica o el contrato aplicable dispongan otra cosa, ¿qué es MÁS PROBABLE respecto a la diferencia no cubierta?",
 o:["N no debe nada adicional, porque un PPO paga siempre igual dentro y fuera de la red","El proveedor fuera de la red puede intentar facturar a N parte o toda la diferencia entre su cargo y lo reconocido por el plan, además del costo compartido aplicable","La aseguradora debe pagar automáticamente el 100% del cargo después de la cirugía","Todo proveedor fuera de la red está obligado a aceptar el monto permitido por el plan como pago completo"],a:1,
 trampa:"La existencia de beneficios fuera de la red no significa que el proveedor haya aceptado contractualmente la tarifa negociada del plan.",
 correcto:"En una atención programada elegida voluntariamente fuera de la red, el proveedor puede no estar sujeto al contrato de tarifas del PPO y puede existir facturación adicional al paciente, salvo que una ley de protección contra facturación sorpresa u otra regla aplicable limite esa práctica.",
 incorrectos:["A) Los PPO suelen diferenciar costos y beneficios dentro y fuera de la red.","C) No existe una obligación general de reembolso automático al 100% del cargo.","D) Un proveedor fuera de la red no está, por ese solo hecho, obligado a aceptar el monto permitido como pago completo."],
 distractor_condicional:"Si el cirujano fuera participante dentro de la red, normalmente estaría obligado por contrato a aceptar la tarifa negociada."
 }]},
{
 id:"killer_pilot_004",area:"salud",subtema_blueprint:"PPO",concepto:"PPO vs. HMO — Acceso a Especialistas",variantes:[{
 nivel:4,tipo_trampa:"COMPARACION",
 q:"T necesita seguimiento con varios especialistas. Un plan exige que su PCP coordine el acceso a especialistas de la red; otro le permite concertar esas consultas sin referido, aunque ciertos procedimientos todavía pueden estar sujetos a autorización previa. T valora principalmente evitar el paso del referido. ¿Qué conclusión es MÁS APROPIADA?",
 o:["El segundo plan ofrece la flexibilidad buscada porque ausencia de referido y ausencia de autorización previa son exactamente la misma cosa","El segundo plan se ajusta mejor a esa prioridad porque puede permitir acceso directo a especialistas, aunque eso no elimina toda posible autorización previa","El primer plan se ajusta mejor porque un PCP convierte automáticamente cualquier consulta de especialista en atención fuera de la red","Ambos planes son estructuralmente idénticos porque cualquier control de utilización equivale a un referido"],a:1,
 trampa:"La dificultad está en separar dos controles distintos: referido del PCP y autorización previa del plan.",
 correcto:"Un PPO suele permitir acceso a especialistas sin referido del PCP, pero eso no significa que todos los servicios estén libres de autorización previa. La prioridad concreta de T es evitar el referido, por lo que el segundo diseño se ajusta mejor.",
 incorrectos:["A) Confunde referido con autorización previa.","C) La coordinación por PCP no convierte automáticamente la consulta en fuera de red.","D) Distintos mecanismos de manejo de utilización no hacen estructuralmente idénticos a los planes."],
 distractor_condicional:"Si T priorizara coordinación centralizada mediante PCP en vez de acceso directo, el primer plan podría ajustarse mejor."
 }]},
{
 id:"killer_pilot_005",area:"salud",subtema_blueprint:"EPO",concepto:"EPO — Acceso sin Referido y Red Exclusiva",variantes:[{
 nivel:4,tipo_trampa:"COMPARACION",
 q:"R tiene un plan que, según su diseño, permite consultar especialistas de la red sin referido de un PCP. Más tarde busca atención NO urgente con un cardiólogo fuera de la red y el plan no paga beneficios fuera de la red. ¿Qué opción describe MEJOR esa combinación?",
 o:["Un HMO que necesariamente cubre igual dentro y fuera de la red","Una EPO: acceso directo a especialistas de la red, con cobertura ordinaria limitada a proveedores de la red salvo excepciones como emergencias","Una póliza que solo cubre emergencias","Un PPO que necesariamente paga el mismo beneficio fuera de la red"],a:1,
 trampa:"La ausencia de referido recuerda a un PPO, mientras la restricción ordinaria fuera de la red recuerda a un HMO.",
 correcto:"Una EPO suele combinar acceso a especialistas de la red sin referido con una red exclusiva para la atención no urgente. Los detalles exactos dependen del contrato del plan.",
 incorrectos:["A) No describe la combinación del escenario.","C) El plan sí cubrió atención no urgente dentro de la red.","D) Un PPO no se define por pagar lo mismo dentro y fuera de la red."],
 distractor_condicional:"Si el plan exigiera referido del PCP y restringiera la atención ordinaria a la red, un HMO sería una opción más probable."
 }]},
{
 id:"killer_pilot_006",area:"salud",subtema_blueprint:"POS",concepto:"POS — Diferente Costo Según la Vía de Acceso",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"M tiene un plan que usa un PCP para coordinar la atención dentro de la red, pero también le permite buscar por su cuenta ciertos servicios fuera de la red con mayor costo de bolsillo. ¿Qué estructura describe MEJOR ese diseño?",
 o:["Un HMO que necesariamente niega toda atención sin referido","Un plan de Punto de Servicio (POS), que combina coordinación tipo HMO con una opción de usar proveedores fuera de la red a mayor costo, según el diseño del plan","Un PPO que siempre paga exactamente lo mismo dentro y fuera de la red","Una EPO que paga de forma rutinaria beneficios fuera de la red para atención no urgente"],a:1,
 trampa:"El rasgo decisivo es la combinación de coordinación mediante PCP con una opción de salir de la red.",
 correcto:"Un POS suele combinar características de HMO y PPO: atención coordinada dentro de la red y, según el contrato, posibilidad de recibir ciertos beneficios fuera de la red con mayor costo compartido.",
 incorrectos:["A) Es demasiado absoluta y no describe la opción fuera de red.","C) Un PPO no se define por pagar igual dentro y fuera de la red.","D) Una EPO normalmente restringe la cobertura ordinaria a la red."],
 distractor_condicional:"Si el plan no utilizara PCP ni referidos y ofreciera beneficios fuera de la red directamente, un PPO sería más probable."
 }]},
{
 id:"killer_pilot_007",area:"salud",subtema_blueprint:"POS",concepto:"HMO, EPO y POS — Comparación de Atención Administrada",variantes:[{
 nivel:5,tipo_trampa:"CUAL_NO",
 q:"Una empresa compara tres planes. El Plan I usa PCP y referidos y normalmente limita la atención no urgente a su red. El Plan II permite acceso directo a especialistas de la red pero normalmente no paga atención no urgente fuera de ella. El Plan III usa PCP para la vía de menor costo, pero permite ciertos beneficios fuera de la red con mayor participación del asegurado. ¿Cuál afirmación es MENOS CORRECTA?",
 o:["El Plan I presenta características típicas de un HMO","El Plan II presenta características típicas de una EPO","El Plan III presenta características típicas de un POS","Los tres planes deben ofrecer necesariamente el mismo nivel de beneficios fuera de la red porque los tres son atención administrada"],a:3,
 trampa:"Las tres primeras opciones exigen clasificar por estructura; la cuarta usa una generalización falsa basada solo en la categoría común de atención administrada.",
 correcto:"La afirmación menos correcta es que los tres deban ofrecer el mismo nivel de beneficios fuera de la red. HMO, EPO y POS pueden diferir precisamente en cómo manejan esa atención.",
 incorrectos:["A) El uso de PCP, referidos y red restringida es típico de HMO.","B) Acceso directo dentro de una red exclusiva es típico de EPO.","C) PCP con opción de salir de la red a mayor costo es típico de POS."],
 distractor_condicional:"Si el Plan III no ofreciera ningún beneficio ordinario fuera de la red y permitiera especialistas sin referido, podría parecerse más a una EPO."
 }]},
{
 id:"killer_pilot_008",area:"salud",subtema_blueprint:"HDHP",concepto:"HDHP — Atención Preventiva Antes del Deducible",variantes:[{
 nivel:5,tipo_trampa:"EXCEPCION_LEGAL",
 q:"Un empleado cubierto por un HDHP elegible para HSA todavía no ha satisfecho el deducible. El plan paga antes del deducible un servicio que clasifica correctamente como atención preventiva permitida. El empleado sostiene que cualquier pago previo al deducible hace perder automáticamente la condición de HDHP. ¿Cuál respuesta es MÁS CORRECTA?",
 o:["El empleado tiene razón porque un HDHP nunca puede pagar ningún servicio antes del deducible","El empleado está equivocado porque determinadas prestaciones preventivas permitidas pueden cubrirse antes del deducible sin destruir por ese solo hecho la condición de HDHP","El empleado tiene razón únicamente cuando el servicio preventivo cuesta más de $500","El empleado está equivocado porque todo servicio médico, preventivo o no, puede pagarse antes del deducible sin restricción"],a:1,
 trampa:"Dos respuestas extremas parecen simples; la correcta exige reconocer una excepción específica sin convertirla en permiso general.",
 correcto:"Las reglas aplicables permiten que un HDHP cubra determinada atención preventiva antes del deducible sin perder por ello su condición de HDHP. Esa excepción no significa que cualquier servicio pueda pagarse antes del deducible.",
 incorrectos:["A) Ignora la excepción permitida para determinada atención preventiva.","C) No existe un umbral general de $500 que determine esta regla.","D) Extiende indebidamente la excepción preventiva a todos los servicios médicos."],
 distractor_condicional:"Si el plan pagara antes del deducible un servicio no preventivo que no encajara en una excepción permitida, el análisis sobre compatibilidad con HSA sería distinto."
 }]},
{
 id:"killer_pilot_009",area:"salud",subtema_blueprint:"HDHP",concepto:"HDHP y HSA — FSA General del Cónyuge",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"P está cubierto por un HDHP elegible para HSA. El empleador de su cónyuge ofrece una FSA de salud de propósito GENERAL cuyo saldo puede reembolsar gastos médicos elegibles de P como cónyuge. ¿Qué efecto tiene esa disponibilidad de reembolso sobre la elegibilidad de P para contribuir a una HSA?",
 o:["Ninguno, porque la elección de la FSA la hizo el cónyuge","P puede perder la elegibilidad para contribuir a una HSA durante los meses en que la FSA general pueda reembolsar sus gastos, porque constituye otra cobertura de salud no permitida","P siempre puede contribuir, pero solo hasta la mitad del límite anual","Solo descalifica si la FSA reembolsa más de $500"],a:1,
 trampa:"Lo relevante es si la FSA puede reembolsar los gastos de P, no quién hizo la elección salarial.",
 correcto:"Una FSA de salud de propósito general del cónyuge puede descalificar a P para contribuciones a HSA si P es una persona cuyos gastos pueden ser reembolsados por esa FSA. La elegibilidad se determina por mes y por la cobertura disponible.",
 incorrectos:["A) La titularidad de la elección no resuelve el problema.","C) No existe una reducción automática a la mitad.","D) La descalificación no depende de un umbral de $500."],
 distractor_condicional:"Si la FSA fuera de propósito limitado, por ejemplo solo dental y visión, podría ser compatible con la HSA."
 }]},
{
 id:"killer_pilot_010",area:"salud",subtema_blueprint:"HSA",concepto:"HSA — Inscripción en Medicare y Fecha Efectiva",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"V, de 66 años, sigue trabajando y mantiene un HDHP. Decide inscribirse en Medicare Parte A. ¿Qué debe revisar para determinar hasta cuándo puede hacer contribuciones elegibles a su HSA?",
 o:["Nada: puede seguir contribuyendo mientras continúe trabajando","La fecha efectiva de su cobertura de Medicare; desde el primer mes en que esté cubierto por Medicare deja de ser elegible para contribuir, y una fecha efectiva retroactiva puede exigir ajustar contribuciones ya realizadas","Puede seguir contribuyendo únicamente por el monto de catch-up","Pierde automáticamente todos los fondos que ya tenía en la HSA"],a:1,
 trampa:"El punto técnico es la fecha efectiva de Medicare, que en ciertos casos puede ser retroactiva.",
 correcto:"Una persona inscrita en Medicare deja de ser elegible para nuevas contribuciones a la HSA a partir del mes en que la cobertura es efectiva. En algunas inscripciones tardías de Parte A puede existir retroactividad, por lo que deben revisarse cuidadosamente las fechas.",
 incorrectos:["A) Seguir trabajando no elimina el efecto de Medicare.","C) El catch-up tampoco puede aportarse durante meses de inelegibilidad.","D) Medicare no confisca el saldo ya existente de la HSA."],
 distractor_condicional:"Si V no estuviera inscrito en Medicare y cumpliera los demás requisitos, podría seguir contribuyendo."
 }]},
{
 id:"killer_pilot_011",area:"salud",subtema_blueprint:"HSA",concepto:"HSA vs. FSA — Propiedad, Terminación y Reclamaciones",variantes:[{
 nivel:4,tipo_trampa:"COMPARACION",
 q:"Al terminar su empleo, K tiene $3,200 en una HSA y $400 sin usar en una FSA de salud del empleador. ¿Qué es MÁS PROBABLE?",
 o:["Pierde automáticamente ambos saldos el último día de empleo","Conserva los $3,200 de la HSA; respecto a la FSA, puede todavía reclamar gastos elegibles incurridos antes de terminar su participación durante el período de presentación del plan, y cualquier saldo restante puede perderse salvo continuidad aplicable","Ambos saldos son portables de por vida","Debe transferir ambos saldos al antiguo empleador dentro de 60 días"],a:1,
 trampa:"Hay que distinguir propiedad de la cuenta, fecha de incurrencia del gasto y período para presentar reclamaciones.",
 correcto:"La HSA permanece con K. En la FSA, terminar el empleo no significa necesariamente que desaparezca de inmediato la posibilidad de presentar una reclamación por un gasto ya incurrido mientras tenía cobertura; el plan puede tener un período para presentar reclamaciones.",
 incorrectos:["A) Es falso para la HSA y simplifica demasiado la FSA.","C) La FSA no es portable como la HSA.","D) No existe ese requisito general de transferencia."],
 distractor_condicional:"Si K tuviera un gasto elegible incurrido antes de terminar su participación y lo presentara a tiempo, la FSA podría reembolsarlo después de la terminación."
 }]},
{
 id:"killer_pilot_012",area:"salud",subtema_blueprint:"FSA",concepto:"FSA — Período de Gracia y Carryover",variantes:[{
 nivel:4,tipo_trampa:"SIEMPRE_NUNCA",
 q:"El plan de beneficios de una empresa quiere reducir la pérdida de fondos no usados de su FSA de salud. Recursos Humanos propone conservar para el mismo año del plan tanto un período de gracia como un carryover del saldo restante. El administrador advierte que debe elegir entre esos mecanismos. ¿Cuál explicación es MEJOR?",
 o:["El administrador se equivoca porque ambos mecanismos pueden acumularse siempre para el mismo saldo","El administrador tiene razón: para un mismo año del plan puede ofrecerse un período de gracia o un carryover permitido, pero no ambos respecto del mismo saldo","El administrador tiene razón solo para empleados menores de 55 años","Ambos se prohíben porque toda FSA exige perder el saldo al finalizar el año sin excepción"],a:1,
 trampa:"La trampa es confundir la existencia separada de dos mecanismos con la posibilidad de acumularlos sobre el mismo saldo.",
 correcto:"Una FSA de salud puede incorporar un período de gracia o un carryover permitido conforme a las reglas aplicables, pero no ambos respecto del mismo año y saldo del plan.",
 incorrectos:["A) Convierte dos alternativas válidas en beneficios acumulables.","C) La edad no determina esta regla.","D) Niega mecanismos que sí pueden existir."],
 distractor_condicional:"Si la empresa eligiera únicamente carryover o únicamente período de gracia, el diseño podría ser válido si cumple las demás reglas aplicables."
 }]},
{
 id:"killer_pilot_013",area:"salud",subtema_blueprint:"FSA",concepto:"Carryover de FSA General y Elegibilidad HSA",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"J pasa a un HDHP elegible para HSA este año. Del año anterior conserva un carryover de $200 en una FSA de salud de propósito GENERAL que continúa disponible para reembolsar gastos médicos generales durante el nuevo año del plan. ¿Cuál es la MEJOR conclusión?",
 o:["El monto es demasiado pequeño para afectar la HSA","La disponibilidad del carryover de una FSA general puede mantener cobertura descalificante para HSA durante el período en que J tenga derecho a ese reembolso; la fecha exacta de elegibilidad debe determinarse según las reglas del plan y la elegibilidad mensual","Solo afecta si el saldo supera $500","Un carryover nunca afecta la elegibilidad para HSA"],a:1,
 trampa:"No debe asumirse que gastar rápidamente el saldo convierte automáticamente en elegibles todos los meses sin revisar la estructura del plan.",
 correcto:"Mientras J tenga derecho a reembolso de gastos médicos generales bajo una FSA de propósito general, puede existir cobertura descalificante para HSA. La elegibilidad se determina mensualmente y puede depender de cómo el plan trate el carryover.",
 incorrectos:["A) El monto por sí solo no crea una excepción.","C) No existe un umbral general de $500.","D) Un carryover de FSA general sí puede afectar la elegibilidad."],
 distractor_condicional:"Si el carryover se convirtiera conforme al diseño permitido del plan en cobertura de propósito limitado, podría dejar de ser cobertura descalificante."
 }]},
{
 id:"killer_pilot_014",area:"salud",subtema_blueprint:"HRA",concepto:"HRA vs. HSA — Propiedad y Portabilidad",variantes:[{
 nivel:4,tipo_trampa:"COMPARACION",
 q:"S y su esposo cambian de empleo. S tenía acceso a un saldo no usado bajo una HRA patrocinada por su empresa; su esposo conserva fondos en una HSA abierta a su nombre. Ninguno ha presentado todavía nuevos gastos médicos. ¿Qué diferencia es MÁS IMPORTANTE al analizar qué ocurre después del cambio?",
 o:["Ambos saldos siguen automáticamente a cada trabajador porque toda cuenta con fondos para salud es propiedad personal","La HSA pertenece a su titular y permanece con él; el uso futuro de montos de una HRA depende de los términos del plan del empleador y de cualquier continuidad aplicable","La HRA pertenece siempre al empleado si el saldo apareció en un portal con su nombre","La HSA deja de pertenecer al titular al cambiar de empleo si el nuevo empleador no ofrece un HDHP"],a:1,
 trampa:"La apariencia de un saldo individual no determina propiedad ni portabilidad; HRA y HSA tienen estructuras jurídicas distintas.",
 correcto:"La HSA pertenece al individuo y permanece con él. La HRA es un arreglo financiado por el empleador; el derecho a usar montos no utilizados después de terminar el empleo depende del diseño del plan y de reglas de continuidad aplicables.",
 incorrectos:["A) Trata HRA y HSA como si tuvieran la misma propiedad.","C) Un portal individual no convierte la HRA en propiedad personal.","D) Cambiar de empleo no elimina la propiedad del saldo ya acumulado en la HSA."],
 distractor_condicional:"Si el plan HRA previera expresamente acceso post-empleo o continuidad aplicable, S podría conservar ciertos derechos de reembolso sin que la HRA se vuelva portable como una HSA."
 }]},
{
 id:"killer_pilot_015",area:"salud",subtema_blueprint:"HRA",concepto:"Compatibilidad de HRA General con HSA",variantes:[{
 nivel:5,tipo_trampa:"EXCEPCION_LEGAL",
 q:"Un empleador ofrece un HDHP junto con una HRA que puede reembolsar gastos médicos generales desde el primer dólar, antes de que el empleado satisfaga el deducible aplicable del HDHP. El empleado quiere contribuir además a una HSA. ¿Cuál es la MEJOR conclusión bajo ese diseño?",
 o:["Siempre puede contribuir porque HRA y HSA son administrativamente independientes","La HRA de propósito general puede constituir cobertura descalificante para HSA; la compatibilidad puede lograrse con diseños permitidos, como una HRA de propósito limitado o post-deducible","Puede contribuir automáticamente a la mitad del límite anual","HRA y HSA nunca pueden coexistir bajo ninguna circunstancia"],a:1,
 trampa:"La compatibilidad depende de qué gastos cubre la HRA y cuándo empieza a reembolsarlos.",
 correcto:"Una HRA de propósito general que paga gastos antes del deducible puede ser cobertura no permitida para la elegibilidad HSA. Determinados diseños, como HRA de propósito limitado o post-deducible, pueden ser compatibles si cumplen las reglas aplicables.",
 incorrectos:["A) La independencia administrativa no elimina el análisis de otra cobertura.","C) No existe una reducción automática a la mitad.","D) Es demasiado absoluta: ciertas HRA sí pueden coexistir con una HSA."],
 distractor_condicional:"Si la HRA estuviera diseñada de manera compatible, el empleado podría conservar la elegibilidad para HSA si cumple los demás requisitos."
 }]}
];

// Compatibilidad con el motor actual: la vista de resultados antigua usa `q.e`,
// mientras el esquema Killer guarda la explicación principal en `correcto`.
PK_KILLER_PILOT.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PILOT };
if (typeof window !== 'undefined') window.PK_KILLER_PILOT = PK_KILLER_PILOT;
