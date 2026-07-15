// ============================================================
// PEARSON KILLER — pk-data-killer-life-12.js
// LOTE 12 — Seguro de Vida, patrón maestro Lote 10
// Objetivo: varias rutas plausibles y una sola mejor por prioridad o condición decisiva.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_LIFE_12 = [
{
  id:"killer_life12_001",area:"vida",subtema_blueprint:"Tipos de póliza",concepto:"Término vs permanente — doble necesidad",variantes:[{
    nivel:5,tipo_trampa:"DOS_NECESIDADES_REALES",
    q:"K quiere proteger durante 15 años una deuda empresarial importante, pero también desea mantener una cobertura menor para gastos finales durante toda su vida. Su presupuesto no permite financiar una gran póliza permanente. ¿Qué enfoque responde MEJOR a la combinación de objetivos?",
    o:[
      "Combinar una cobertura a término para la necesidad temporal mayor con una cobertura permanente menor para la necesidad de por vida",
      "Comprar solo una póliza permanente por todo el monto, porque una sola póliza simplifica la planificación aunque eleve el costo",
      "Comprar solo término por todo el monto, porque la necesidad temporal es la más grande aunque deje sin resolver la necesidad permanente",
      "Usar una póliza universal por todo el monto, porque su flexibilidad puede atender cambios futuros aunque el costo siga siendo una restricción relevante"
    ],a:0,
    trampa:"B, C y D son estrategias reales. La mejor respuesta separa dos necesidades de distinta duración y respeta la restricción de presupuesto.",
    correcto:"Cuando existen necesidades simultáneas de distinta duración, una combinación de término y cobertura permanente puede asignar cada producto al riesgo que mejor atiende.",
    incorrectos:[
      "B) Resuelve ambas duraciones, pero puede ser menos eficiente frente a la restricción presupuestaria descrita.",
      "C) Atiende bien la necesidad temporal, pero deja sin resolver la necesidad permanente.",
      "D) Puede ofrecer flexibilidad, pero no necesariamente es la solución que mejor equilibra duración y costo en este caso."
    ],
    distractor_condicional:"Si K no tuviera una necesidad permanente, una cobertura a término por sí sola podría ser suficiente."
  }]},
{
  id:"killer_life12_002",area:"vida",subtema_blueprint:"Beneficiarios",concepto:"Revocable vs irrevocable — control y protección",variantes:[{
    nivel:5,tipo_trampa:"CONTROL_VS_PROTECCION",
    q:"L quiere garantizar a su ex cónyuge que mantendrá una protección de seguro vinculada a una obligación legal, pero también preferiría conservar libertad para cambiar beneficiarios si sus circunstancias familiares cambian. ¿Qué análisis es MÁS APROPIADO?",
    o:[
      "La designación irrevocable ofrece mayor protección al interés del beneficiario, pero reduce la libertad futura de L; la elección depende de cuál de esas prioridades deba dominar",
      "La designación revocable siempre cumple mejor ambas metas porque permite cambios y al mismo tiempo protege al beneficiario contra cualquier modificación",
      "Un beneficiario contingente resuelve el conflicto porque sustituye automáticamente cualquier necesidad de consentimiento del beneficiario principal",
      "Una designación por clase elimina el conflicto porque convierte a todos los miembros de la clase en beneficiarios irrevocables"
    ],a:0,
    trampa:"La pregunta no pide una definición aislada, sino reconocer la tensión real entre control del dueño y protección del beneficiario.",
    correcto:"Una designación irrevocable puede proteger mejor el interés del beneficiario, pero limita el control del dueño. La decisión depende de la prioridad contractual y legal del caso.",
    incorrectos:[
      "B) La revocabilidad preserva control, pero no protege al beneficiario frente a cambios del mismo modo.",
      "C) Un contingente regula el orden de pago, no el consentimiento para cambios del beneficiario principal.",
      "D) Una designación por clase no determina por sí sola la revocabilidad."
    ],
    distractor_condicional:"Si la prioridad dominante fuera conservar control total sobre cambios futuros, una designación revocable sería más coherente."
  }]},
{
  id:"killer_life12_003",area:"vida",subtema_blueprint:"Riders",concepto:"Waiver vs guaranteed insurability — continuidad actual y crecimiento futuro",variantes:[{
    nivel:5,tipo_trampa:"RIESGOS_DISTINTOS",
    q:"M teme dos cosas: perder su póliza si una incapacidad prolongada le impide pagar primas y no poder comprar más cobertura en el futuro si su salud empeora. Su prioridad inmediata es evitar la pérdida de la póliza existente durante una incapacidad. ¿Qué rider responde MEJOR a esa prioridad?",
    o:[
      "Exención de primas por incapacidad, porque protege la continuidad de la póliza actual cuando se cumplen sus condiciones",
      "Asegurabilidad garantizada, porque protege la posibilidad de adquirir cobertura adicional futura aunque no pague las primas actuales durante una incapacidad",
      "Combinar ambos riders, porque atiende los dos riesgos aunque aumente el costo y vaya más allá de la prioridad inmediata",
      "Beneficio por muerte accidental, porque puede aumentar el beneficio si la incapacidad termina en una muerte accidental cubierta"
    ],a:0,
    trampa:"B y C son alternativas defendibles. La clave es la prioridad inmediata de mantener vigente la cobertura actual.",
    correcto:"La exención de primas por incapacidad se alinea directamente con el riesgo de no poder pagar y perder la póliza existente.",
    incorrectos:[
      "B) Atiende el acceso futuro a cobertura adicional, no el pago de primas actuales durante incapacidad.",
      "C) Puede ser una estrategia más amplia, pero no es la respuesta más directa cuando la pregunta pide la prioridad inmediata.",
      "D) Atiende un riesgo diferente y no protege la continuidad por falta de pago durante incapacidad."
    ],
    distractor_condicional:"Si M priorizara proteger su capacidad de comprar cobertura adicional futura, la asegurabilidad garantizada ganaría importancia."
  }]},
{
  id:"killer_life12_004",area:"vida",subtema_blueprint:"Underwriting",concepto:"Subestándar vs exclusión o rechazo — riesgo asegurable",variantes:[{
    nivel:5,tipo_trampa:"GRADO_DE_RIESGO",
    q:"N presenta una condición médica que aumenta su riesgo de mortalidad, pero la aseguradora concluye que todavía puede emitir cobertura dentro de sus límites de selección. ¿Qué curso de acción es MÁS coherente con esa conclusión?",
    o:[
      "Emitir con una clasificación subestándar o ajuste de precio adecuado al mayor riesgo, si las reglas de la compañía lo permiten",
      "Emitir como estándar y compensar el mayor riesgo reduciendo informalmente el servicio al cliente después de la emisión",
      "Rechazar la solicitud, porque cualquier riesgo superior al promedio debe tratarse como inasegurable",
      "Emitir como preferido si N acepta una prima inicial más alta, porque la categoría preferida describe disposición a pagar más"
    ],a:0,
    trampa:"La cuestión decisiva no es si el riesgo es mayor, sino si sigue siendo asegurable dentro de los límites de la compañía.",
    correcto:"Un riesgo mayor que el promedio pero todavía asegurable puede recibir una clasificación subestándar o ajuste equivalente.",
    incorrectos:[
      "B) La clasificación debe reflejarse en términos de suscripción legítimos, no en un servicio informalmente reducido.",
      "C) Riesgo superior al promedio no equivale automáticamente a rechazo.",
      "D) Preferido describe un riesgo mejor que el promedio, no una disposición a pagar una prima mayor."
    ],
    distractor_condicional:"Si el riesgo excediera los límites de aceptación, el rechazo podría ser el resultado apropiado."
  }]},
{
  id:"killer_life12_005",area:"vida",subtema_blueprint:"Underwriting",concepto:"Recibo condicional — prima, asegurabilidad y fecha",variantes:[{
    nivel:5,tipo_trampa:"SECUENCIA_Y_CONDICION",
    q:"P entrega solicitud y prima inicial y recibe un recibo condicional. Muere antes de que la compañía emita la póliza. La evaluación posterior indica que habría sido asegurable según la clase contemplada en el recibo en la fecha relevante. ¿Qué análisis responde MEJOR?",
    o:[
      "Debe aplicarse el lenguaje del recibo para determinar si las condiciones de cobertura provisional quedaron satisfechas desde la fecha prevista",
      "La prima inicial crea por sí sola cobertura definitiva desde el momento del pago, sin importar el texto del recibo",
      "La falta de entrega física de la póliza impide cualquier cobertura previa aunque el recibo condicional contemple otra cosa",
      "La aseguradora puede elegir después del fallecimiento si considera conveniente tratar la solicitud como cubierta"
    ],a:0,
    trampa:"La asegurabilidad posterior es un dato importante, pero no sustituye el análisis del lenguaje y condiciones exactas del recibo.",
    correcto:"La cobertura provisional bajo un recibo condicional depende de que se cumplan las condiciones definidas en ese recibo y de la fecha a la que esas condiciones se vinculan.",
    incorrectos:[
      "B) La prima sola no elimina la naturaleza condicional del acuerdo.",
      "C) La entrega física no es necesariamente el único momento relevante si existe cobertura condicional previa.",
      "D) La decisión no debe ser discrecional después del evento; depende del contrato y de los hechos."
    ],
    distractor_condicional:"Si P no hubiera sido asegurable según las condiciones del recibo, el resultado podría ser distinto."
  }]},
{
  id:"killer_life12_006",area:"vida",subtema_blueprint:"Conversión",concepto:"Conversión vs nueva solicitud — deterioro de salud y costo",variantes:[{
    nivel:5,tipo_trampa:"ACCESO_VS_PRECIO",
    q:"Q tiene una póliza a término convertible y su salud se ha deteriorado. Puede solicitar una nueva póliza permanente en el mercado o ejercer la conversión disponible. Le preocupa especialmente que su salud actual le impida obtener nueva cobertura, aunque sabe que la conversión puede resultar más costosa que su prima original de término. ¿Qué conclusión es MEJOR?",
    o:[
      "La conversión puede ser especialmente valiosa porque reduce la dependencia de una nueva evidencia de asegurabilidad, aunque la prima del nuevo producto pueda ser mayor",
      "Solicitar una nueva póliza siempre es mejor porque la competencia entre aseguradoras elimina el efecto de un deterioro de salud sobre la suscripción",
      "Mantener la póliza a término es necesariamente mejor porque conservar la prima actual resuelve cualquier necesidad de cobertura permanente",
      "Convertir es útil solo si la nueva prima permanece idéntica a la prima de término original"
    ],a:0,
    trampa:"B y C pueden ser estrategias razonables en otros perfiles. El dato decisivo aquí es la preocupación por perder acceso a cobertura permanente debido a la salud actual.",
    correcto:"La conversión puede preservar acceso a una cobertura permanente elegible sin una nueva evaluación completa de asegurabilidad, aunque el nuevo costo pueda aumentar.",
    incorrectos:[
      "B) Una nueva solicitud puede ofrecer opciones, pero la salud actual puede afectar su resultado.",
      "C) Mantener término puede ser adecuado para una necesidad temporal, pero no resuelve por sí solo el nuevo objetivo de permanencia.",
      "D) La conversión no exige que la nueva prima sea igual a la prima original de término."
    ],
    distractor_condicional:"Si Q estuviera sano y pudiera obtener mejores condiciones mediante una nueva solicitud, comparar ambas rutas sería más importante."
  }]}
];

PK_KILLER_LIFE_12.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_LIFE_12 };
if (typeof window !== 'undefined') window.PK_KILLER_LIFE_12 = PK_KILLER_LIFE_12;
