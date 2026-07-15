// ============================================================
// PEARSON KILLER — pk-data-killer-pilot.js
// LOTE PILOTO — Fase 3: distractores balanceados y realismo reforzado
// Tema: Tipos de Pólizas de Salud (HMO, PPO, EPO, POS, HDHP, HSA, FSA, HRA)
// ============================================================

const PK_KILLER_PILOT = [
{
 id:"killer_pilot_001",area:"salud",subtema_blueprint:"HMO",concepto:"HMO — Excepción de Emergencia Fuera de Red",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"D está inscrito en un HMO por medio de su empleo. Su PCP está en Miami y el plan suele exigir referido para especialistas. Durante un viaje de trabajo a Orlando, después de cenar con un cliente, D sufre un accidente de tránsito y una ambulancia lo lleva al hospital más cercano, fuera de la red. ¿Qué es MÁS PROBABLE respecto a la atención de emergencia recibida esa noche?",
 o:[
 "El HMO puede tratar la atención como no cubierta porque el hospital estaba fuera de la red, aunque la situación fuera una emergencia verdadera",
 "La atención de emergencia puede cubrirse sin referido ni autorización previa, aunque el proveedor esté fuera de la red, sujeto a las reglas aplicables del plan y la ley",
 "La atención puede cubrirse solo si el PCP confirma después que habría emitido un referido antes del accidente de haber sido consultado",
 "La atención puede cubrirse como fuera de red únicamente si D había informado al HMO de su viaje antes de salir del área de servicio"
 ],a:1,
 trampa:"Dos distractores trasladan reglas reales de red o coordinación a una situación de emergencia donde no operan del mismo modo.",
 correcto:"La emergencia no se condiciona normalmente a un referido o autorización previa. La cobertura y el costo compartido exactos dependen de las reglas aplicables, pero la falta de referido previo no convierte por sí sola una emergencia en atención no cubierta.",
 incorrectos:[
 "A) Aplica la restricción ordinaria de red como si no existiera una excepción para emergencias.",
 "C) Confunde una posible notificación posterior con un referido retroactivo como requisito de cobertura.",
 "D) El aviso previo de un viaje no es la condición decisiva para que una emergencia sea tratada como tal."
 ],
 distractor_condicional:"Si D hubiera buscado por conveniencia una consulta no urgente fuera de la red durante el viaje, la restricción ordinaria de red sí sería decisiva."
 }]},
{
 id:"killer_pilot_002",area:"salud",subtema_blueprint:"HMO",concepto:"HMO — Estructura de Panel Cerrado",variantes:[{
 nivel:4,tipo_trampa:"SINONIMOS",
 q:"Una organización contrata a sus médicos como empleados, concentra la atención en instalaciones propias y limita su práctica a los miembros del sistema. Otra organización contrata médicos independientes que mantienen consultorios privados y atienden pacientes de varios pagadores. ¿Qué característica distingue MEJOR al primer arreglo?",
 o:[
 "La práctica de los médicos está integrada al sistema y no permanece abierta a pacientes externos, rasgo propio de un panel cerrado",
 "La práctica sigue siendo independiente porque recibir salario del sistema no cambia la naturaleza de la red de proveedores",
 "La organización funciona como panel abierto porque los médicos siguen siendo responsables de decisiones clínicas individuales",
 "La organización debe clasificarse como PPO porque concentra la prestación de servicios en instalaciones propias"
 ],a:0,
 trampa:"La compensación y la autonomía clínica son datos cercanos, pero la diferencia decisiva es la exclusividad de la práctica dentro del sistema.",
 correcto:"El panel cerrado se distingue por una práctica integrada y no abierta a pacientes ajenos al sistema, a diferencia del panel abierto con médicos independientes que mantienen su práctica externa.",
 incorrectos:[
 "B) La independencia clínica no equivale a una práctica abierta a otros pagadores.",
 "C) Invierte el criterio que distingue panel abierto de panel cerrado.",
 "D) Las instalaciones propias no convierten por sí solas una organización en PPO."
 ],
 distractor_condicional:"Si esos médicos mantuvieran consultorios privados y atendieran pacientes de otros pagadores, panel abierto sería la respuesta más apropiada."
 }]},
{
 id:"killer_pilot_003",area:"salud",subtema_blueprint:"PPO",concepto:"PPO — Posible Facturación de Saldo Fuera de la Red",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"N tiene un PPO y programa una cirugía con un especialista fuera de la red porque fue recomendado por un familiar. El plan confirma por escrito que pagará beneficios fuera de la red basados en su monto permitido, menor que el cargo del cirujano. N ya cumplió parte del deducible anual. Salvo que una protección legal específica disponga otra cosa, ¿qué es MÁS PROBABLE respecto a la diferencia restante?",
 o:[
 "El proveedor puede cobrar a N únicamente el coaseguro calculado por el plan, porque aceptar un paciente con PPO implica aceptar el monto permitido",
 "El proveedor puede intentar cobrar a N parte o toda la diferencia entre su cargo y el monto reconocido por el plan, además del costo compartido aplicable",
 "El plan debe aumentar su pago hasta el cargo completo si N demuestra que eligió al cirujano por recomendación médica o familiar",
 "El proveedor debe tratar la diferencia como descuento contractual siempre que el plan haya pagado algún beneficio fuera de la red"
 ],a:1,
 trampa:"Los distractores usan reglas reales de proveedores participantes y costos compartidos, pero las trasladan a un proveedor no contratado.",
 correcto:"Un proveedor fuera de la red puede no estar sujeto al contrato de tarifas del PPO y puede existir facturación adicional al paciente, salvo que una ley u otra regla aplicable limite esa práctica.",
 incorrectos:[
 "A) Un proveedor fuera de la red no acepta automáticamente la tarifa del plan por el solo hecho de atender a un afiliado PPO.",
 "C) La recomendación no crea una obligación general de pagar el cargo completo.",
 "D) El descuento contractual depende de una relación contractual; no nace porque el plan pague algún beneficio."
 ],
 distractor_condicional:"Si el cirujano fuera participante dentro de la red, normalmente tendría que aceptar la tarifa negociada y no podría facturar la diferencia entre su cargo habitual y esa tarifa."
 }]},
{
 id:"killer_pilot_004",area:"salud",subtema_blueprint:"PPO",concepto:"PPO vs. HMO — Acceso a Especialistas",variantes:[{
 nivel:4,tipo_trampa:"COMPARACION",
 q:"T necesita seguimiento con varios especialistas. Un plan exige que su PCP coordine el acceso a especialistas de la red; otro le permite concertar esas consultas directamente, aunque ciertos procedimientos siguen sujetos a revisión del plan. T valora principalmente evitar el paso del referido. ¿Qué conclusión es MÁS APROPIADA?",
 o:[
 "El segundo plan responde mejor a esa prioridad porque puede permitir acceso directo a especialistas, aunque algunos servicios todavía requieran autorización previa",
 "El segundo plan no ofrece una ventaja real porque autorización previa y referido del PCP son dos nombres para el mismo requisito",
 "El primer plan responde mejor porque la participación del PCP elimina la posibilidad de que un especialista quede fuera de la red",
 "Ambos planes ofrecen la misma estructura de acceso porque cualquier forma de manejo de utilización produce el mismo resultado"
 ],a:0,
 trampa:"La clave es separar referido del PCP de autorización previa del plan.",
 correcto:"Un PPO suele permitir acceso a especialistas sin referido del PCP, pero eso no significa que todos los servicios estén libres de autorización previa.",
 incorrectos:[
 "B) Referido y autorización previa son controles distintos.",
 "C) La intervención del PCP no garantiza por sí sola que todo proveedor sea de la red.",
 "D) Distintos controles de utilización no hacen idénticas las estructuras."
 ],
 distractor_condicional:"Si T priorizara coordinación centralizada por medio de un PCP, el primer plan podría ajustarse mejor."
 }]},
{
 id:"killer_pilot_005",area:"salud",subtema_blueprint:"EPO",concepto:"EPO — Acceso sin Referido y Red Exclusiva",variantes:[{
 nivel:5,tipo_trampa:"COMPARACION",
 q:"R puede concertar directamente una cita con un dermatólogo de la red sin pedir referido. Meses después, durante una visita no urgente a otra ciudad, decide ver a un cardiólogo que no participa en la red y el plan no paga beneficios por esa consulta. El deducible anual ya estaba parcialmente satisfecho. ¿Qué estructura describe MEJOR ese patrón de acceso?",
 o:[
 "Un PPO, porque la ausencia de referido es el rasgo decisivo aunque el plan niegue beneficios ordinarios fuera de la red",
 "Una EPO, porque puede permitir acceso directo a especialistas de la red y restringir la cobertura ordinaria a proveedores participantes",
 "Un HMO, porque toda restricción fuera de la red implica necesariamente que el plan use PCP y referidos",
 "Un POS, porque cualquier plan que niegue beneficios fuera de la red está usando dos niveles de cobertura"
 ],a:1,
 trampa:"La ausencia de referido apunta hacia PPO/EPO, mientras la restricción ordinaria fuera de la red separa a la EPO de un PPO típico.",
 correcto:"Una EPO suele permitir acceso a especialistas de la red sin referido y limitar la atención ordinaria a proveedores participantes, salvo excepciones como emergencias.",
 incorrectos:[
 "A) La ausencia de referido por sí sola no convierte el plan en PPO si no existe beneficio ordinario fuera de la red.",
 "C) Una red restringida no demuestra por sí sola que exista PCP y sistema de referidos.",
 "D) Un POS se distingue por permitir ciertos beneficios fuera de la red, normalmente a mayor costo."
 ],
 distractor_condicional:"Si el plan ofreciera beneficios ordinarios fuera de la red sin exigir PCP ni referidos, un PPO sería más probable."
 }]},
{
 id:"killer_pilot_006",area:"salud",subtema_blueprint:"POS",concepto:"POS — Diferente Costo Según la Vía de Acceso",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"M elige un plan que le asigna un PCP y ofrece el costo más bajo cuando sigue la red y las referencias coordinadas. Sin embargo, el contrato también le permite acudir por su cuenta a ciertos proveedores fuera de la red, con deducible y coaseguro mayores. M rara vez viaja, pero quiere conservar esa opción. ¿Qué estructura describe MEJOR el plan?",
 o:[
 "Una EPO, porque la red es la vía de menor costo y el PCP puede participar en la coordinación de la atención",
 "Un POS, porque combina coordinación tipo HMO con una opción de usar proveedores fuera de la red a mayor costo",
 "Un HMO, porque la presencia de PCP significa que cualquier atención fuera de la red debe quedar excluida",
 "Un PPO, porque cualquier cobertura fuera de la red elimina la posibilidad de que el plan utilice PCP o referidos"
 ],a:1,
 trampa:"EPO, HMO y PPO comparten piezas del escenario; la combinación de PCP más opción fuera de red es la firma decisiva.",
 correcto:"Un POS combina coordinación tipo HMO con una opción de obtener ciertos beneficios fuera de la red, normalmente a mayor costo para el asegurado.",
 incorrectos:[
 "A) Una EPO normalmente no ofrece beneficios ordinarios fuera de la red.",
 "C) La presencia de PCP no obliga a excluir toda cobertura fuera de la red en un POS.",
 "D) La cobertura fuera de la red no impide que un POS use PCP y referidos."
 ],
 distractor_condicional:"Si el plan no utilizara PCP ni referencias y ofreciera acceso fuera de la red de forma directa, un PPO sería más probable."
 }]},
{
 id:"killer_pilot_007",area:"salud",subtema_blueprint:"POS",concepto:"HMO, EPO y POS — Comparación de Atención Administrada",variantes:[{
 nivel:5,tipo_trampa:"CUAL_NO",
 q:"Una empresa compara tres planes. El Plan I usa PCP y referidos y limita la atención no urgente a su red. El Plan II permite acceso directo a especialistas de la red y no paga atención no urgente fuera de ella. El Plan III usa PCP para la vía de menor costo, pero ofrece ciertos beneficios fuera de la red con mayor participación del asegurado. ¿Cuál afirmación es MENOS CORRECTA?",
 o:[
 "El Plan I presenta características típicas de un HMO y depende más de la coordinación mediante PCP",
 "El Plan II presenta características típicas de una EPO y combina acceso directo con red exclusiva",
 "El Plan III presenta características típicas de un POS y conserva una vía fuera de la red con mayor costo",
 "Los tres planes ofrecen una estructura equivalente fuera de la red porque las diferencias principales están solo en el uso de PCP"
 ],a:3,
 trampa:"La cuarta opción parece plausible si se sobrevalora el PCP y se ignora que la cobertura fuera de red es una diferencia estructural importante.",
 correcto:"La afirmación menos correcta es que los tres tengan estructura equivalente fuera de la red. Esa es precisamente una de las diferencias centrales entre HMO, EPO y POS.",
 incorrectos:[
 "A) Describe correctamente el patrón del Plan I.",
 "B) Describe correctamente el patrón del Plan II.",
 "C) Describe correctamente el patrón del Plan III."
 ],
 distractor_condicional:"Si el Plan III eliminara la vía fuera de la red y permitiera especialistas sin referido, podría parecerse más a una EPO."
 }]},
{
 id:"killer_pilot_008",area:"salud",subtema_blueprint:"HDHP",concepto:"HDHP — Atención Preventiva Antes del Deducible",variantes:[{
 nivel:5,tipo_trampa:"EXCEPCION_LEGAL",
 q:"Un empleado cubierto por un HDHP elegible para HSA aún no ha satisfecho el deducible. El plan paga antes del deducible un servicio que clasifica correctamente como atención preventiva permitida. El empleado afirma que cualquier pago previo al deducible destruye la condición de HDHP. ¿Cuál respuesta es MÁS CORRECTA?",
 o:[
 "La condición de HDHP se pierde porque el momento del pago, no la naturaleza del servicio, determina siempre la compatibilidad con HSA",
 "La condición de HDHP puede mantenerse porque determinadas prestaciones preventivas permitidas pueden cubrirse antes del deducible",
 "La condición de HDHP se mantiene solo si el costo del servicio preventivo no supera una cantidad fijada por el empleador",
 "La condición de HDHP se mantiene porque cualquier servicio ambulatorio puede pagarse antes del deducible si el plan lo describe como preventivo"
 ],a:1,
 trampa:"Dos distractores usan criterios plausibles —momento del pago y clasificación del plan— pero ninguno sustituye la regla específica de atención preventiva permitida.",
 correcto:"Las reglas aplicables permiten que determinada atención preventiva se cubra antes del deducible sin perder por ese solo hecho la condición de HDHP.",
 incorrectos:[
 "A) Ignora la excepción permitida para atención preventiva.",
 "C) No existe un umbral general fijado por el empleador que determine esta regla.",
 "D) La mera etiqueta del plan no convierte cualquier servicio en atención preventiva permitida."
 ],
 distractor_condicional:"Si el plan pagara antes del deducible un servicio no preventivo fuera de una excepción permitida, el análisis de compatibilidad con HSA sería distinto."
 }]},
{
 id:"killer_pilot_009",area:"salud",subtema_blueprint:"HDHP",concepto:"HDHP y HSA — FSA General del Cónyuge",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"P está cubierto por un HDHP elegible para HSA. Su cónyuge elige una FSA de salud de propósito general en el trabajo y, conforme al plan, esa FSA puede reembolsar gastos médicos elegibles de P. P no ha presentado ninguna reclamación a la FSA y piensa aportar a su HSA durante todo el año. ¿Qué conclusión es MÁS APROPIADA?",
 o:[
 "P sigue siendo elegible mientras no presente reclamaciones, porque la incompatibilidad comienza solo cuando la FSA paga efectivamente un gasto suyo",
 "P puede perder elegibilidad durante los meses en que la FSA general tenga disponible el reembolso de sus gastos, aunque no haya presentado reclamaciones",
 "P conserva elegibilidad si el cónyuge es quien hizo la elección salarial y P no firmó personalmente la inscripción de la FSA",
 "P conserva elegibilidad para la HSA, pero debe excluir únicamente de su contribución anual el monto que pudiera reembolsarle la FSA"
 ],a:1,
 trampa:"La disponibilidad de otra cobertura, no el uso efectivo ni quién hizo la elección salarial, es el punto decisivo.",
 correcto:"Una FSA general del cónyuge puede descalificar a P si puede reembolsar sus gastos médicos. La elegibilidad se determina por mes y por la cobertura disponible.",
 incorrectos:[
 "A) La cobertura puede ser descalificante aunque no se haya presentado una reclamación.",
 "C) La titularidad de la elección salarial no elimina la cobertura disponible para P.",
 "D) No se corrige la incompatibilidad restando del límite HSA el monto potencial de la FSA."
 ],
 distractor_condicional:"Si la FSA fuera de propósito limitado, por ejemplo solo dental y visión, podría ser compatible con la HSA."
 }]},
{
 id:"killer_pilot_010",area:"salud",subtema_blueprint:"HSA",concepto:"HSA — Inscripción en Medicare y Fecha Efectiva",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"V tiene 66 años, sigue trabajando y mantiene un HDHP. En octubre solicita Medicare Parte A después de haber hecho aportes mensuales a su HSA durante el año. El asesor de beneficios le advierte que la fecha de la solicitud y la fecha efectiva de Medicare no siempre coinciden. ¿Qué debe revisar V PRIMERO para determinar si alguno de sus aportes fue inelegible?",
 o:[
 "La fecha efectiva de Medicare, porque la elegibilidad para aportar a la HSA termina desde el primer mes en que la cobertura de Medicare es efectiva",
 "La fecha del último depósito a la HSA, porque todo aporte hecho antes de solicitar Medicare queda protegido aunque la cobertura sea retroactiva",
 "La fecha en que dejó de trabajar, porque mientras continúe empleado Medicare no afecta la elegibilidad para aportar a la HSA",
 "La fecha en que usó por primera vez Medicare, porque la cobertura no afecta la HSA hasta que se presenta una reclamación"
 ],a:0,
 trampa:"Solicitud, uso y empleo son fechas plausibles, pero la regla se conecta con la fecha efectiva de cobertura.",
 correcto:"La fecha efectiva de Medicare es decisiva. Desde el primer mes en que la cobertura es efectiva deja de existir elegibilidad para nuevas contribuciones, y una fecha retroactiva puede exigir ajustes.",
 incorrectos:[
 "B) Una fecha efectiva retroactiva puede afectar meses anteriores a la solicitud.",
 "C) Seguir trabajando no elimina el efecto de estar cubierto por Medicare.",
 "D) La cobertura, no el primer uso, determina la elegibilidad HSA."
 ],
 distractor_condicional:"Si V no estuviera inscrito en Medicare y cumpliera los demás requisitos, podría seguir contribuyendo."
 }]},
{
 id:"killer_pilot_011",area:"salud",subtema_blueprint:"HSA",concepto:"HSA vs. FSA — Propiedad, Terminación y Reclamaciones",variantes:[{
 nivel:5,tipo_trampa:"COMPARACION",
 q:"K termina su empleo el 30 de junio. Tiene $3,200 en una HSA y $400 disponibles en una FSA del empleador. También conserva recibos de gastos médicos elegibles incurridos en mayo, cuando aún participaba en la FSA. El nuevo empleo no ofrece HDHP. ¿Qué resultado es MÁS PROBABLE?",
 o:[
 "K conserva la HSA y puede presentar a la FSA, dentro del plazo del plan, reclamaciones por gastos elegibles incurridos antes de terminar su participación",
 "K conserva ambos saldos para gastos futuros porque tanto la HSA como la FSA se consideran propiedad personal al terminar el empleo",
 "K pierde la HSA al no tener un nuevo HDHP, pero conserva la FSA mientras presente reclamaciones antes del final del año calendario",
 "K pierde ambos saldos al terminar el empleo, aunque los gastos de mayo se hubieran incurrido mientras todavía participaba en la FSA"
 ],a:0,
 trampa:"Hay que separar propiedad de la HSA, fecha de incurrencia del gasto y plazo para presentar reclamaciones FSA.",
 correcto:"La HSA permanece con K. En la FSA, un gasto incurrido mientras existía participación puede ser reclamado después de la terminación si se presenta dentro del período permitido por el plan.",
 incorrectos:[
 "B) La FSA no se vuelve propiedad personal portable al terminar el empleo.",
 "C) La falta de un nuevo HDHP impide nuevas contribuciones elegibles, pero no elimina el saldo ya existente de la HSA.",
 "D) La terminación no borra necesariamente el derecho a reclamar un gasto ya incurrido durante la participación."
 ],
 distractor_condicional:"Si el gasto se hubiera incurrido después de terminar la participación y no existiera continuación aplicable, la FSA normalmente no lo reembolsaría."
 }]},
{
 id:"killer_pilot_012",area:"salud",subtema_blueprint:"FSA",concepto:"FSA — Período de Gracia y Carryover",variantes:[{
 nivel:4,tipo_trampa:"SIEMPRE_NUNCA",
 q:"El comité de beneficios quiere reducir la pérdida de fondos no usados de su FSA de salud. Una propuesta concede un período de gracia; otra permite carryover. Un directivo sugiere aplicar ambos mecanismos al mismo saldo del mismo año del plan. ¿Qué respuesta es MEJOR?",
 o:[
 "Puede hacerse si el empleador limita el carryover a una cantidad menor que el saldo que quede al comenzar el período de gracia",
 "Debe elegirse entre período de gracia y carryover para el mismo año y saldo del plan; no se acumulan ambos mecanismos sobre esos fondos",
 "Puede hacerse siempre que los empleados elijan individualmente cuál mecanismo usar primero",
 "Debe rechazarse porque ni el período de gracia ni el carryover están permitidos en una FSA de salud"
 ],a:1,
 trampa:"Los distractores proponen mecanismos administrativos plausibles, pero la regla opera a nivel del diseño del plan.",
 correcto:"La FSA puede ofrecer un período de gracia o un carryover permitido, pero no ambos respecto del mismo año y saldo del plan.",
 incorrectos:[
 "A) Dividir el saldo no elimina la incompatibilidad del diseño.",
 "C) La elección individual no sustituye la regla aplicable al plan.",
 "D) Ambos mecanismos existen; el problema es combinarlos sobre el mismo año y saldo."
 ],
 distractor_condicional:"Si la empresa eligiera solo uno de los dos mecanismos y cumpliera las demás reglas aplicables, el diseño podría ser válido."
 }]},
{
 id:"killer_pilot_013",area:"salud",subtema_blueprint:"FSA",concepto:"Carryover de FSA General y Elegibilidad HSA",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"J cambia a un HDHP elegible para HSA el 1 de enero. Del año anterior conserva $200 de carryover en una FSA de propósito general, disponibles para reembolsar gastos médicos durante el nuevo año. J planea gastar esos $200 en febrero y luego aportar a la HSA desde marzo. ¿Qué conclusión es MÁS APROPIADA?",
 o:[
 "J es elegible desde enero porque el carryover proviene de un año anterior y no cuenta como cobertura del nuevo año",
 "La disponibilidad del carryover puede mantener cobertura descalificante; la fecha exacta de elegibilidad debe determinarse según las reglas del plan y la elegibilidad mensual",
 "J se vuelve automáticamente elegible el día en que gasta el último dólar del carryover, sin importar cómo el plan defina la cobertura",
 "J puede aportar durante todo el año si reduce su contribución HSA en los mismos $200 que recibió como carryover"
 ],a:1,
 trampa:"Origen del dinero, agotamiento del saldo y compensación de montos son ideas plausibles, pero ninguna sustituye el análisis mensual de cobertura disponible.",
 correcto:"Mientras J tenga derecho a reembolso bajo una FSA general puede existir cobertura descalificante. La elegibilidad HSA se determina mensualmente y puede depender de cómo el plan trate el carryover.",
 incorrectos:[
 "A) El origen en el año anterior no elimina por sí solo el efecto de la cobertura disponible.",
 "C) Agotar el saldo no resuelve automáticamente todos los meses sin revisar el diseño del plan.",
 "D) Restar el monto del carryover del límite HSA no corrige la incompatibilidad de cobertura."
 ],
 distractor_condicional:"Si el carryover se convirtiera conforme al plan en cobertura de propósito limitado, podría dejar de ser descalificante."
 }]},
{
 id:"killer_pilot_014",area:"salud",subtema_blueprint:"HRA",concepto:"HRA vs. HSA — Propiedad y Portabilidad",variantes:[{
 nivel:4,tipo_trampa:"COMPARACION",
 q:"S y su esposo cambian de empleo. S tenía acceso a un saldo no usado bajo una HRA patrocinada por su empresa; su esposo conserva fondos en una HSA abierta a su nombre. Ninguno ha presentado nuevos gastos médicos todavía. ¿Qué diferencia es MÁS IMPORTANTE al analizar qué ocurre después del cambio?",
 o:[
 "La HRA y la HSA siguen al trabajador si el saldo aparece individualizado en un portal de beneficios",
 "La HSA pertenece a su titular; el uso futuro de montos de la HRA depende de los términos del plan del empleador y de cualquier continuidad aplicable",
 "La HRA permanece con S porque todo saldo no usado en beneficios de salud se convierte en propiedad personal al terminar el empleo",
 "La HSA deja de pertenecer al esposo si el nuevo empleador no ofrece un HDHP compatible"
 ],a:1,
 trampa:"Un saldo visible a nombre del trabajador puede parecer propiedad personal, pero HRA y HSA tienen estructuras jurídicas distintas.",
 correcto:"La HSA pertenece al individuo y permanece con él. La HRA es un arreglo financiado por el empleador; el derecho a usar montos no utilizados después del empleo depende del diseño del plan y de reglas de continuidad aplicables.",
 incorrectos:[
 "A) La individualización administrativa del saldo no determina propiedad jurídica.",
 "C) La HRA no se convierte automáticamente en propiedad personal al terminar el empleo.",
 "D) La falta de un nuevo HDHP puede afectar futuras contribuciones, no la propiedad del saldo HSA ya existente."
 ],
 distractor_condicional:"Si el plan HRA previera acceso post-empleo o continuidad aplicable, S podría conservar ciertos derechos de reembolso sin que la HRA se vuelva portable como una HSA."
 }]},
{
 id:"killer_pilot_015",area:"salud",subtema_blueprint:"HRA",concepto:"Compatibilidad de HRA General con HSA",variantes:[{
 nivel:5,tipo_trampa:"EXCEPCION_LEGAL",
 q:"Un empleador ofrece un HDHP junto con una HRA que puede reembolsar gastos médicos generales desde el primer dólar. La empresa quiere conservar la HRA y permitir que los empleados elegibles contribuyan también a una HSA. El director propone simplemente reducir a la mitad el límite anual de HSA. ¿Cuál recomendación es MÁS APROPIADA?",
 o:[
 "Mantener la HRA sin cambios y reducir la contribución HSA, porque un límite menor corrige la existencia de otra cobertura",
 "Rediseñar la HRA de forma compatible, por ejemplo como HRA de propósito limitado o post-deducible, si se cumplen las reglas aplicables",
 "Mantener la HRA sin cambios y exigir que los empleados usen primero la HSA antes de solicitar cualquier reembolso de la HRA",
 "Eliminar el HDHP, porque la coexistencia de una HRA y una HSA no puede lograrse mediante ningún diseño del plan"
 ],a:1,
 trampa:"Los distractores proponen orden de pago o reducción de aportes, pero el problema real es qué cobertura ofrece la HRA y cuándo empieza a pagar.",
 correcto:"Una HRA de propósito general que paga antes del deducible puede ser cobertura descalificante. Diseños como una HRA de propósito limitado o post-deducible pueden ser compatibles si cumplen las reglas aplicables.",
 incorrectos:[
 "A) Reducir el límite de contribución no elimina la cobertura descalificante.",
 "C) Cambiar el orden de uso no transforma una HRA general en cobertura compatible.",
 "D) Ciertas HRA sí pueden coexistir con una HSA mediante un diseño compatible."
 ],
 distractor_condicional:"Si la HRA ya estuviera limitada a dental y visión o empezara a reembolsar solo después del deducible aplicable, la compatibilidad podría mantenerse."
 }]}
];

// Compatibilidad con el motor actual: la vista de resultados antigua usa `q.e`,
// mientras el esquema Killer guarda la explicación principal en `correcto`.
PK_KILLER_PILOT.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PILOT };
if (typeof window !== 'undefined') window.PK_KILLER_PILOT = PK_KILLER_PILOT;
