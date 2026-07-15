// ============================================================
// PEARSON KILLER — pk-data-killer-life-15.js
// LOTE 15 — Seguro de Vida, expansión controlada prefiltrada
// Estándar: patrón Lote 10 + prefiltrado validado en Lote 14.
// Varias rutas plausibles y una sola mejor por prioridad, secuencia o conflicto.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_LIFE_15 = [
{
  id:"killer_life15_001",area:"vida",subtema_blueprint:"Diseño de cobertura",concepto:"Necesidad decreciente, necesidad permanente y flexibilidad presupuestaria",variantes:[{
    nivel:5,tipo_trampa:"DOS_NECESIDADES_Y_CAMBIO",
    q:"G necesita una cobertura alta durante los próximos 12 años mientras disminuye una obligación empresarial, pero también quiere conservar una cantidad menor de protección de por vida. Sus ingresos son variables y le preocupa comprometerse hoy con una prima permanente elevada por todo el monto. ¿Qué enfoque responde MEJOR al conjunto de prioridades?",
    o:[
      "Usar una cobertura temporal para la necesidad grande y limitada en el tiempo, junto con una cobertura permanente menor compatible con su presupuesto",
      "Comprar solo una póliza permanente por todo el monto, porque así evita cualquier necesidad de revisar la cobertura aunque la prima sea difícil de sostener",
      "Comprar solo término por el monto total y confiar en renovar después si aún desea protección permanente, aunque su salud y costo futuros sean inciertos",
      "Elegir una póliza universal por todo el monto, porque la flexibilidad de primas elimina por sí sola el riesgo de que una cobertura permanente amplia resulte costosa"
    ],a:0,
    trampa:"B, C y D son estrategias reales. La mejor respuesta separa necesidades de distinta duración y no confunde flexibilidad contractual con ausencia de costo.",
    correcto:"Una combinación puede asignar cobertura temporal a la obligación de duración limitada y cobertura permanente a la necesidad de por vida, reduciendo la presión de financiar todo el monto como permanente.",
    incorrectos:[
      "B) Resuelve la permanencia, pero ignora la restricción de costo sobre una necesidad que en gran parte es temporal.",
      "C) Atiende la necesidad actual, pero deja la necesidad permanente expuesta a condiciones futuras de salud y precio.",
      "D) La flexibilidad puede ayudar, pero no convierte una cobertura permanente amplia en necesariamente sostenible."
    ],
    distractor_condicional:"Si G tuviera alta capacidad de pago y quisiera una necesidad permanente por todo el monto, una solución totalmente permanente tendría más peso."
  }]},
{
  id:"killer_life15_002",area:"vida",subtema_blueprint:"Underwriting y emisión",concepto:"Aplazamiento, oferta subestándar y prioridad temporal",variantes:[{
    nivel:5,tipo_trampa:"SECUENCIA_Y_URGENCIA",
    q:"H está esperando el resultado de una prueba médica que puede aclarar si un problema reciente fue transitorio. La aseguradora no puede clasificar hoy con confianza, pero H necesita cobertura pronto por una obligación financiera. ¿Qué análisis es MÁS APROPIADO?",
    o:[
      "Reconocer que la necesidad urgente de H no sustituye la falta de información material; puede ser necesario aplazar la decisión y considerar alternativas temporales permitidas por el mercado sin fingir una clasificación definitiva",
      "Emitir subestándar de inmediato, porque cualquier necesidad urgente justifica asumir el peor nivel razonable de riesgo antes de tener los resultados",
      "Emitir estándar ahora y aumentar la prima más adelante si el resultado es desfavorable, porque la urgencia del cliente permite corregir después la suscripción",
      "Rechazar definitivamente la solicitud, porque no poder clasificar hoy significa que H no podrá ser asegurable cuando exista nueva información"
    ],a:0,
    trampa:"La urgencia es un dato real, pero no autoriza a inventar una clase de riesgo. La mejor respuesta separa la necesidad del cliente del proceso de suscripción.",
    correcto:"Cuando falta información material, la compañía puede necesitar aplazar la decisión. La necesidad inmediata puede justificar explorar alternativas legítimas, pero no reemplaza la evaluación necesaria para emitir correctamente.",
    incorrectos:[
      "B) Una clasificación subestándar requiere base suficiente; la urgencia no define la clase.",
      "C) La suscripción no debe resolverse mediante una corrección informal posterior.",
      "D) Aplazar no equivale a declarar inasegurabilidad definitiva."
    ],
    distractor_condicional:"Si la información disponible ya confirmara un riesgo mayor pero asegurable, una oferta subestándar podría ser apropiada."
  }]},
{
  id:"killer_life15_003",area:"vida",subtema_blueprint:"Recibos y emisión",concepto:"Recibo condicional, clase solicitada y oferta modificada",variantes:[{
    nivel:5,tipo_trampa:"DOS_ETAPAS_DEL_CONTRATO",
    q:"J paga la prima inicial y recibe un recibo condicional. La solicitud pide una clase preferida, pero la compañía concluye que J solo sería asegurable en una clase estándar y prepara una oferta modificada. Antes de que J responda a esa oferta ocurre un fallecimiento. ¿Qué análisis debe hacerse PRIMERO?",
    o:[
      "Determinar qué estándar de asegurabilidad exigía el recibo para la cobertura provisional y si J lo cumplía en la fecha relevante, antes de decidir qué efecto tiene la oferta modificada sobre la póliza final",
      "Concluir que existía cobertura preferida porque la prima inicial acompañó una solicitud para esa clase, aunque la suscripción no la hubiera aprobado",
      "Concluir que nunca pudo existir cobertura provisional porque J no había aceptado todavía la oferta estándar, sin revisar el lenguaje del recibo",
      "Tratar la oferta estándar como aceptación automática de la solicitud original, porque cualquier clase asegurable produce el mismo efecto desde la fecha del pago"
    ],a:0,
    trampa:"La pregunta mezcla cobertura provisional y contrato final. La mejor respuesta no deja que una etapa sustituya el análisis de la otra.",
    correcto:"Primero debe analizarse el recibo condicional y el estándar de asegurabilidad que exigía. La oferta modificada puede afectar la póliza final, pero no resuelve por sí sola si existió cobertura provisional.",
    incorrectos:[
      "B) Solicitar una clase no significa haber sido aprobado bajo ella.",
      "C) La falta de aceptación de la oferta final no elimina automáticamente una posible cobertura provisional ya condicionada por el recibo.",
      "D) Ser asegurable en alguna clase no implica que todos los recibos produzcan el mismo efecto."
    ],
    distractor_condicional:"Si el recibo exigiera específicamente la clase solicitada y J no la cumpliera, la conclusión sobre cobertura provisional podría ser distinta."
  }]},
{
  id:"killer_life15_004",area:"vida",subtema_blueprint:"Beneficiarios y propiedad",concepto:"Beneficiario irrevocable, préstamo de póliza y control del dueño",variantes:[{
    nivel:5,tipo_trampa:"DERECHOS_EN_CONFLICTO",
    q:"K es dueño de una póliza con beneficiario irrevocable. Necesita efectivo y considera tomar un préstamo sobre el valor disponible, pero también quiere cambiar al beneficiario poco después. ¿Qué enfoque de análisis es MÁS APROPIADO?",
    o:[
      "Separar ambas decisiones y revisar qué derechos conserva K como dueño y cuáles pueden estar limitados por el interés del beneficiario irrevocable antes de asumir que puede actuar unilateralmente en todo",
      "Asumir que ser dueño permite tanto pedir préstamos como cambiar al beneficiario sin ninguna limitación, porque la propiedad siempre prevalece sobre cualquier otra designación",
      "Asumir que el beneficiario irrevocable se convierte automáticamente en dueño total y que K pierde todos los derechos contractuales desde la designación",
      "Cancelar primero la póliza, porque una designación irrevocable impide cualquier uso del valor en efectivo o cualquier cambio contractual de cualquier tipo"
    ],a:0,
    trampa:"La propiedad sigue siendo relevante, pero una designación irrevocable puede limitar ciertos actos. La mejor respuesta evita convertir cualquiera de los dos intereses en control absoluto.",
    correcto:"Debe distinguirse entre los derechos que conserva el dueño y aquellos actos que pueden requerir consentimiento o estar limitados por la designación irrevocable y los términos del contrato.",
    incorrectos:[
      "B) La propiedad no elimina automáticamente todos los derechos protegidos del beneficiario irrevocable.",
      "C) La irrevocabilidad no transfiere por sí sola toda la propiedad de la póliza.",
      "D) La designación irrevocable no significa que ningún otro derecho contractual pueda ejercerse."
    ],
    distractor_condicional:"Si el beneficiario fuera revocable, K tendría normalmente mayor libertad para cambiar la designación."
  }]},
{
  id:"killer_life15_005",area:"vida",subtema_blueprint:"Conversión y reemplazo",concepto:"Conversión, nueva solicitud y protección de opción",variantes:[{
    nivel:5,tipo_trampa:"PRESERVAR_OPCION",
    q:"L tiene una póliza a término convertible y la fecha límite para convertir se acerca. Su salud ha empeorado moderadamente. Una nueva solicitud podría ofrecer mejores condiciones si fuera aprobada favorablemente, pero también podría ser clasificada peor o rechazada. ¿Qué estrategia responde MEJOR a la prioridad de no perder una vía segura hacia cobertura permanente?",
    o:[
      "Proteger primero la opción de conversión disponible conforme al contrato y comparar cualquier nueva solicitud sin permitir que la ventana de conversión venza por esperar un resultado incierto",
      "Dejar vencer la conversión y solicitar solo una nueva póliza, porque una posible prima menor debe tener prioridad sobre conservar una opción contractual existente",
      "Mantener únicamente la póliza a término, porque mientras siga vigente no existe ninguna razón para evaluar la necesidad de cobertura permanente",
      "Convertir solo si la prima permanente resulta igual o menor que la prima de término actual, porque de otro modo la conversión carece de valor"
    ],a:0,
    trampa:"Una nueva solicitud puede ser atractiva, pero la fecha límite convierte el valor de preservar una opción contractual en el dato decisivo.",
    correcto:"Cuando una opción de conversión está próxima a vencer y la salud se ha deteriorado, preservar esa vía puede ser prioritario mientras se comparan alternativas, porque una nueva solicitud tiene un resultado incierto.",
    incorrectos:[
      "B) Puede perder una opción valiosa antes de conocer el resultado de la nueva suscripción.",
      "C) La vigencia del término no resuelve por sí sola una nueva necesidad de permanencia.",
      "D) La conversión puede ser valiosa aunque la prima permanente sea mayor."
    ],
    distractor_condicional:"Si L estuviera sano y la ventana de conversión no estuviera próxima a vencer, comparar primero nuevas alternativas podría tener más peso."
  }]},
{
  id:"killer_life15_006",area:"vida",subtema_blueprint:"Riders y diseño",concepto:"Incapacidad, continuidad y presupuesto limitado",variantes:[{
    nivel:5,tipo_trampa:"PRIORIDAD_BAJO_RESTRICCION",
    q:"M puede pagar solo un rider adicional. Sus ingresos dependen de trabajar personalmente y una incapacidad prolongada podría impedirle pagar primas. También tiene hijos pequeños y le atrae aumentar el beneficio por muerte accidental. ¿Qué elección responde MEJOR al riesgo que amenaza directamente la continuidad de la póliza?",
    o:[
      "Exención de primas por incapacidad, porque atiende el riesgo de que la póliza se pierda precisamente cuando M deja de poder generar ingresos para pagarla",
      "Beneficio por muerte accidental, porque puede aumentar la protección familiar aunque no resuelva la posibilidad de perder la póliza durante una incapacidad prolongada",
      "Dividir el presupuesto entre dos riders de menor alcance, porque cubrir parcialmente dos riesgos siempre produce una protección superior a priorizar uno",
      "Esperar a que cambien sus ingresos antes de añadir cualquier rider, porque una incapacidad futura puede evaluarse mejor después de que ocurra"
    ],a:0,
    trampa:"B responde a una preocupación familiar real. La clave es que la pregunta pide el riesgo que puede hacer desaparecer la cobertura existente antes de que ocurra una muerte accidental.",
    correcto:"Si la incapacidad amenaza directamente la capacidad de mantener las primas, la exención de primas se alinea mejor con la continuidad de la cobertura bajo la restricción presupuestaria.",
    incorrectos:[
      "B) Puede aumentar un beneficio específico, pero no protege la continuidad de la póliza durante incapacidad.",
      "C) No siempre existe una división útil o equivalente; además, la pregunta exige priorizar bajo presupuesto limitado.",
      "D) Esperar hasta después de la incapacidad puede hacer que la protección ya no pueda añadirse para ese evento."
    ],
    distractor_condicional:"Si M tuviera ingresos pasivos suficientes para sostener las primas y priorizara específicamente una muerte accidental, el rider accidental podría ganar peso."
  }]}
];

PK_KILLER_LIFE_15.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_LIFE_15 };
if (typeof window !== 'undefined') window.PK_KILLER_LIFE_15 = PK_KILLER_LIFE_15;
