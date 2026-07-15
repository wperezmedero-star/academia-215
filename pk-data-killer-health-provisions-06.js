// ============================================================
// PEARSON KILLER — pk-data-killer-health-provisions-06.js
// LOTE 06 — Provisiones de pólizas de salud / reclamaciones / renovación
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría humana breve.
// ============================================================

const PK_KILLER_HEALTH_PROVISIONS_06 = [
{
 id:"killer_hp06_001",area:"salud",subtema_blueprint:"Provisiones",concepto:"Contrato entero — documentos que forman la póliza",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"Un asegurado discute una reclamación y el agente afirma que una promesa verbal hecha durante la venta modifica por sí sola las obligaciones escritas de la póliza. La solicitud fue incorporada al contrato. ¿Qué análisis es MÁS APROPIADO?",
 o:[
 "Debe revisarse el contrato completo y los documentos incorporados; una promesa verbal no modifica automáticamente las disposiciones escritas",
 "Toda declaración verbal del agente prevalece sobre la póliza si favorece al asegurado",
 "La solicitud deja de tener relevancia una vez emitida la póliza, aunque haya sido incorporada al contrato",
 "Cualquier conversación previa se convierte automáticamente en una cláusula contractual aunque no aparezca en los documentos"
 ],a:0,
 trampa:"La confianza en el agente se confunde con la regla sobre qué documentos forman el contrato.",
 correcto:"La obligación contractual se determina por la póliza y los documentos que formen parte del contrato. Una declaración verbal no reescribe automáticamente las condiciones escritas.",
 incorrectos:["B) Una declaración verbal no desplaza automáticamente el contrato escrito.","C) Una solicitud incorporada puede formar parte del contrato.","D) Una conversación previa no se convierte por sí sola en cláusula contractual."],
 distractor_condicional:"Si una representación escrita hubiera sido incorporada formalmente al contrato, su efecto tendría que analizarse dentro del conjunto contractual."
 }]},
{
 id:"killer_hp06_002",area:"salud",subtema_blueprint:"Provisiones",concepto:"Período de gracia — prima vencida",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"La prima de una póliza individual vence y el asegurado no paga exactamente en la fecha de vencimiento. Al día siguiente afirma que la póliza necesariamente terminó de forma instantánea. ¿Qué debe analizarse PRIMERO?",
 o:[
 "Si la póliza concede un período de gracia y qué efecto tiene durante ese período sobre la continuidad de la cobertura",
 "Si el asegurado presentó alguna reclamación el mes anterior, porque una reclamación elimina cualquier período de gracia",
 "Si el agente recibió comisión por la póliza, porque eso determina cuánto tiempo permanece vigente tras el vencimiento",
 "Si el asegurado tiene otra póliza, porque la existencia de cobertura adicional sustituye las reglas de pago de prima"
 ],a:0,
 trampa:"Se confunde la fecha de vencimiento con una terminación automática e inmediata sin revisar la provisión aplicable.",
 correcto:"Debe revisarse el período de gracia previsto en la póliza. La falta de pago en la fecha exacta de vencimiento no siempre significa terminación instantánea.",
 incorrectos:["B) Una reclamación previa no elimina por sí sola la provisión de gracia.","C) La comisión del agente no determina la continuidad contractual.","D) Otra cobertura no sustituye las reglas de prima de esta póliza."],
 distractor_condicional:"Si el período de gracia terminara sin pago y no existiera otra protección aplicable, la póliza podría entonces terminar conforme a sus términos."
 }]},
{
 id:"killer_hp06_003",area:"salud",subtema_blueprint:"Provisiones",concepto:"Reinstalación — cobertura después de lapse",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"Una póliza caduca por falta de pago. Semanas después el asegurado entrega una prima y solicita reinstalación. Cree que entregar dinero obliga a la aseguradora a restaurar retroactivamente toda cobertura como si nunca hubiera existido lapse. ¿Qué conclusión es MÁS APROPIADA?",
 o:[
 "La reinstalación depende de las condiciones de la póliza y no debe asumirse que elimina automáticamente todo efecto del período de lapse",
 "El simple pago obliga siempre a borrar retroactivamente cualquier interrupción de cobertura",
 "Una póliza de salud nunca puede ser reinstalada después de un lapse",
 "La reinstalación depende únicamente de que el agente acepte verbalmente el pago, sin importar las reglas del contrato"
 ],a:0,
 trampa:"Se confunde aceptar una prima con garantizar el alcance y la fecha efectiva de la reinstalación.",
 correcto:"La reinstalación opera conforme a los términos y requisitos de la póliza. No debe suponerse que toda interrupción queda borrada retroactivamente por entregar una prima.",
 incorrectos:["B) El pago por sí solo no define todos los efectos de la reinstalación.","C) Es demasiado absoluto.","D) La aceptación verbal del agente no sustituye las condiciones contractuales."],
 distractor_condicional:"Si la aseguradora aprobara la reinstalación conforme a la póliza, habría que revisar desde cuándo y para qué tipos de pérdidas vuelve a operar la cobertura."
 }]},
{
 id:"killer_hp06_004",area:"salud",subtema_blueprint:"Reclamaciones",concepto:"Aviso de reclamación vs prueba de pérdida",variantes:[{
 nivel:5,tipo_trampa:"COMPARACION",
 q:"Después de una pérdida cubierta, el asegurado notifica a la compañía que ocurrió el evento. Más tarde la aseguradora solicita formularios y documentación médica. El asegurado afirma que el aviso inicial ya cumplió cualquier obligación posterior. ¿Qué distinción es MÁS IMPORTANTE?",
 o:[
 "Avisar que ocurrió una pérdida y presentar la documentación o prueba requerida son pasos distintos dentro del proceso de reclamación",
 "El aviso inicial sustituye siempre cualquier formulario o evidencia posterior que la póliza pueda exigir",
 "La prueba de pérdida solo se utiliza antes de que ocurra el siniestro para demostrar que el asegurado era saludable",
 "Una vez que el agente conoce el evento, la aseguradora no puede solicitar documentación adicional"
 ],a:0,
 trampa:"Se mezclan dos etapas reales del proceso de reclamación.",
 correcto:"El aviso de reclamación y la presentación de prueba o documentación son obligaciones distintas. Cumplir una no significa necesariamente haber cumplido la otra.",
 incorrectos:["B) El aviso no sustituye automáticamente la documentación requerida.","C) La prueba de pérdida pertenece al proceso posterior a la pérdida.","D) El conocimiento del agente no elimina por sí solo requisitos válidos de documentación."],
 distractor_condicional:"Si la aseguradora ya hubiera recibido toda la documentación exigida, el análisis pasaría a la evaluación y pago de la reclamación."
 }]},
{
 id:"killer_hp06_005",area:"salud",subtema_blueprint:"Reclamaciones",concepto:"Pago de reclamaciones — destinatario correcto",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"Una póliza cubre gastos médicos y el asegurado autoriza que ciertos beneficios se paguen directamente a un proveedor. Un familiar afirma que todas las reclamaciones deben pagarse exclusivamente al asegurado porque él es el dueño de la póliza. ¿Qué respuesta es MÁS APROPIADA?",
 o:[
 "El destinatario del pago puede depender del tipo de beneficio, la asignación válida y las disposiciones de la póliza; no siempre tiene que ser exclusivamente el dueño",
 "Toda reclamación debe pagarse siempre al dueño, aunque exista una asignación válida al proveedor",
 "La compañía puede pagar a cualquier persona que conozca al asegurado sin revisar autorización ni contrato",
 "El proveedor se convierte automáticamente en dueño de la póliza al recibir un pago directo"
 ],a:0,
 trampa:"Se confunde propiedad de la póliza con la persona a quien puede pagarse un beneficio específico.",
 correcto:"El pago de beneficios puede dirigirse conforme a la póliza y a una asignación válida. Ser dueño de la póliza no significa necesariamente recibir personalmente cada pago.",
 incorrectos:["B) Ignora una posible asignación válida.","C) El pago no puede dirigirse arbitrariamente.","D) Recibir un beneficio no transfiere la propiedad de la póliza."],
 distractor_condicional:"Si no existiera asignación ni otra disposición aplicable, el contrato determinaría a quién corresponde el pago."
 }]},
{
 id:"killer_hp06_006",area:"salud",subtema_blueprint:"Provisiones",concepto:"Cambio de ocupación — riesgo y beneficio",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"Una póliza de incapacidad contiene una provisión relacionada con cambio de ocupación. El asegurado pasa de un trabajo de oficina a una ocupación sustancialmente más peligrosa y luego presenta una reclamación. ¿Qué principio debe revisarse?",
 o:[
 "Si la provisión permite ajustar el beneficio o la prima según la clasificación de riesgo de la nueva ocupación",
 "Si cambiar de empleo cancela automáticamente cualquier póliza de incapacidad, sin importar el contrato",
 "Si el nuevo empleador acepta asumir la póliza como dueño automático",
 "Si el asegurado ganó más salario, porque un aumento de ingreso elimina cualquier análisis de riesgo ocupacional"
 ],a:0,
 trampa:"El cambio de empleador se confunde con el cambio en la clasificación de riesgo ocupacional.",
 correcto:"Cuando existe una provisión de cambio de ocupación, debe revisarse cómo la nueva clasificación de riesgo afecta beneficios o primas conforme al contrato.",
 incorrectos:["B) Un cambio de trabajo no cancela automáticamente toda póliza.","C) El nuevo empleador no se vuelve dueño por ese hecho.","D) El salario no sustituye el análisis del riesgo ocupacional."],
 distractor_condicional:"Si la nueva ocupación tuviera una clasificación de riesgo similar, el efecto contractual podría ser diferente."
 }]},
{
 id:"killer_hp06_007",area:"salud",subtema_blueprint:"Renovación",concepto:"Renovable garantizada vs cancelable",variantes:[{
 nivel:5,tipo_trampa:"COMPARACION",
 q:"Dos pólizas individuales difieren en sus derechos de renovación. En una, la aseguradora no puede cancelar individualmente al asegurado mientras se paguen las primas, aunque puede cambiar primas por una clase permitida. En la otra, el contrato reserva a la aseguradora un derecho más amplio de terminación conforme a sus términos. ¿Qué diferencia es MÁS IMPORTANTE?",
 o:[
 "La primera ofrece una protección de renovación más fuerte que una póliza que permite cancelación por decisión de la aseguradora conforme al contrato",
 "Ambas son idénticas porque toda póliza de salud puede cancelarse individualmente en cualquier momento sin restricciones",
 "La primera garantiza que la prima individual nunca podrá cambiar bajo ninguna circunstancia",
 "La segunda se convierte automáticamente en no cancelable después de la primera reclamación"
 ],a:0,
 trampa:"Se confunde protección contra cancelación individual con garantía absoluta de una prima fija.",
 correcto:"Una póliza renovable garantizada limita la capacidad de cancelar individualmente, pero eso no significa necesariamente que toda prima permanezca fija para siempre.",
 incorrectos:["B) Ignora las diferencias contractuales de renovación.","C) Renovabilidad garantizada no equivale necesariamente a prima individual eternamente fija.","D) Presentar una reclamación no transforma automáticamente la clase de renovación."],
 distractor_condicional:"Si la póliza fuera no cancelable, la protección sobre renovación y cambios de prima sería aún más fuerte conforme a sus términos."
 }]},
{
 id:"killer_hp06_008",area:"salud",subtema_blueprint:"Renovación",concepto:"No cancelable — prima y renovación",variantes:[{
 nivel:5,tipo_trampa:"COMPARACION",
 q:"Un consumidor compara una póliza no cancelable con una renovable garantizada. Su prioridad es minimizar el riesgo de que la aseguradora cambie unilateralmente su prima individual o termine la cobertura mientras cumpla sus obligaciones. ¿Qué característica debe examinar con mayor atención?",
 o:[
 "La póliza no cancelable suele ofrecer una garantía contractual más fuerte respecto de renovación y prima que una renovable garantizada",
 "La renovable garantizada siempre ofrece más protección porque permite a la aseguradora cancelar al asegurado cuando cambia de edad",
 "Ambas son idénticas porque los términos de renovación nunca afectan primas ni continuidad",
 "La póliza no cancelable permite a la aseguradora aumentar libremente la prima individual después de cada reclamación"
 ],a:0,
 trampa:"Los nombres parecen similares, pero el grado de protección contractual no es el mismo.",
 correcto:"La no cancelable suele ofrecer una protección más fuerte sobre continuidad y prima individual, sujeto a los términos exactos de la póliza.",
 incorrectos:["B) Describe incorrectamente la renovabilidad garantizada.","C) Las disposiciones de renovación sí afectan continuidad y prima.","D) Contradice la protección típica de una póliza no cancelable."],
 distractor_condicional:"Si el consumidor aceptara posibles cambios de prima por clase a cambio de menor costo inicial, una renovable garantizada podría seguir siendo adecuada."
 }]},
{
 id:"killer_hp06_009",area:"salud",subtema_blueprint:"Provisiones",concepto:"Declaraciones incorrectas de edad o sexo",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"Después de una reclamación se descubre que la edad usada para emitir la póliza era incorrecta. Un empleado nuevo propone anular automáticamente toda la póliza sin revisar la provisión contractual. ¿Qué análisis es MÁS APROPIADO?",
 o:[
 "Debe aplicarse la provisión correspondiente para ajustar el beneficio o la prima según la edad correcta, en lugar de asumir anulación automática",
 "Toda diferencia de edad obliga siempre a cancelar retroactivamente la póliza y devolver todas las primas",
 "La edad nunca puede afectar una póliza de salud después de su emisión",
 "La aseguradora debe ignorar el error aunque la póliza contenga una provisión específica sobre edad incorrecta"
 ],a:0,
 trampa:"Se confunde una declaración incorrecta con fraude automático y anulación total.",
 correcto:"Cuando la póliza contiene una provisión para edad incorrecta, debe aplicarse el ajuste previsto por el contrato en vez de presumir cancelación automática.",
 incorrectos:["B) Es demasiado absoluto.","C) La edad puede ser relevante según la póliza.","D) Una provisión contractual específica no debe ignorarse."],
 distractor_condicional:"Si existiera además una cuestión distinta de fraude material, ese análisis sería separado."
 }]},
{
 id:"killer_hp06_010",area:"salud",subtema_blueprint:"Provisiones",concepto:"Acciones legales — proceso de reclamación",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"Un asegurado presenta una reclamación y, antes de completar los pasos contractuales de documentación, quiere demandar inmediatamente. ¿Qué debe revisar antes de asumir que puede iniciar una acción legal en cualquier momento?",
 o:[
 "Las disposiciones de la póliza sobre prueba de pérdida, tiempo para pago y acciones legales, además de la ley aplicable",
 "Solo si el agente está de acuerdo con la demanda, porque el contrato no puede regular el proceso de reclamación",
 "Si la prima del mes actual ya fue cobrada, porque eso sustituye cualquier requisito previo a una acción legal",
 "Si la reclamación supera cierto monto, porque las acciones legales solo existen para pérdidas grandes"
 ],a:0,
 trampa:"La existencia de una disputa no significa que desaparezcan automáticamente los pasos contractuales y legales previos.",
 correcto:"Antes de una acción legal deben revisarse las provisiones del contrato y la ley aplicable sobre documentación, plazos y momento permitido para demandar.",
 incorrectos:["B) La opinión del agente no sustituye el contrato ni la ley.","C) Pagar la prima no elimina requisitos del proceso de reclamación.","D) El derecho de acción no depende únicamente de que la pérdida sea grande."],
 distractor_condicional:"Si el asegurado ya hubiera cumplido los requisitos aplicables y hubiera transcurrido el período pertinente, el análisis procesal sería distinto."
 }]},
{
 id:"killer_hp06_011",area:"salud",subtema_blueprint:"Provisiones",concepto:"Tiempo de pago de reclamaciones",variantes:[{
 nivel:5,tipo_trampa:"ESCENARIO",
 q:"La aseguradora recibe una reclamación pero todavía falta documentación necesaria para determinar si el beneficio es pagadero. El asegurado sostiene que la compañía debe pagar inmediatamente solo porque envió un aviso inicial. ¿Cuál respuesta es MÁS APROPIADA?",
 o:[
 "El momento de pago puede depender de que la aseguradora reciba la prueba o documentación requerida y de las reglas aplicables al tipo de beneficio",
 "El aviso inicial obliga siempre al pago inmediato aunque falte información esencial",
 "La aseguradora puede retrasar indefinidamente cualquier reclamación sin comunicar qué información falta",
 "Toda reclamación debe pagarse al agente primero para que este decida si entrega el dinero al asegurado"
 ],a:0,
 trampa:"Se confunde aviso de reclamación con reclamación completa y lista para pago.",
 correcto:"El pago de una reclamación depende del cumplimiento de los requisitos aplicables y de la información necesaria para determinar el beneficio; un simple aviso no siempre completa el proceso.",
 incorrectos:["B) El aviso inicial no siempre constituye una reclamación completa.","C) La compañía no obtiene por ello un derecho ilimitado a retrasar.","D) El agente no es el destinatario automático de todos los pagos."],
 distractor_condicional:"Si toda la documentación requerida ya hubiera sido recibida y el beneficio fuera claramente pagadero, la obligación de pago tendría que analizarse bajo las reglas de tiempo aplicables."
 }]},
{
 id:"killer_hp06_012",area:"salud",subtema_blueprint:"Provisiones",concepto:"Provisiones de salud — distinguir función contractual",variantes:[{
 nivel:5,tipo_trampa:"CUAL_NO",
 q:"Un candidato resume principios de provisiones de pólizas de salud. ¿Cuál afirmación es MENOS CORRECTA?",
 o:[
 "El período de gracia se relaciona con el pago tardío de una prima y la continuidad temporal de la póliza",
 "El aviso de reclamación y la prueba de pérdida pueden ser etapas distintas del proceso",
 "Las disposiciones de renovación pueden cambiar el grado de protección que tiene el asegurado frente a cancelación o cambios de prima",
 "Todas las provisiones existen para producir exactamente el mismo efecto y sus nombres pueden intercambiarse sin cambiar el resultado"
 ],a:3,
 trampa:"La última opción borra diferencias funcionales entre provisiones que regulan problemas distintos.",
 correcto:"Las provisiones cumplen funciones diferentes: pago de primas, reclamaciones, renovación, reinstalación y otros aspectos contractuales no son intercambiables.",
 incorrectos:["A) Describe correctamente la función general del período de gracia.","B) Distingue dos pasos reales del proceso de reclamación.","C) Las disposiciones de renovación sí modifican el nivel de protección contractual."],
 distractor_condicional:"Si la pregunta pidiera solo identificar que todas forman parte del contrato, sí existiría una similitud general, pero no identidad funcional."
 }]}
];

PK_KILLER_HEALTH_PROVISIONS_06.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_HEALTH_PROVISIONS_06 };
if (typeof window !== 'undefined') window.PK_KILLER_HEALTH_PROVISIONS_06 = PK_KILLER_HEALTH_PROVISIONS_06;
