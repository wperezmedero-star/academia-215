// ============================================================
// PEARSON KILLER — pk-data-killer-life-13.js
// LOTE 13 — Seguro de Vida: underwriting, recibos y cambios contractuales
// Patrón maestro: varias decisiones plausibles y una sola mejor por dato decisivo.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_LIFE_13 = [
{
  id:"killer_life13_001",area:"vida",subtema_blueprint:"Underwriting",concepto:"Aplazamiento vs clasificación subestándar — información médica incompleta",variantes:[{
    nivel:5,tipo_trampa:"INFORMACION_INCOMPLETA",
    q:"R solicita seguro de vida y revela que está pendiente de resultados de una prueba médica importante. La aseguradora considera que hoy no tiene información suficiente para clasificar con precisión el riesgo, pero tampoco concluye que R sea inasegurable. ¿Qué curso de acción responde MEJOR a esa situación?",
    o:[
      "Aplazar la decisión hasta obtener la información necesaria, porque la incertidumbre actual impide una clasificación responsable del riesgo",
      "Emitir de inmediato como subestándar, porque toda incertidumbre médica debe resolverse automáticamente con una prima mayor",
      "Rechazar definitivamente la solicitud, porque no contar aún con todos los datos equivale a inasegurabilidad",
      "Emitir como estándar y revisar la clasificación después, porque la compañía puede corregir informalmente la prima si los resultados son desfavorables"
    ],a:0,
    trampa:"B puede parecer prudente porque reconoce mayor riesgo potencial, pero clasificar sin información suficiente puede ser tan incorrecto como rechazar sin base.",
    correcto:"Cuando falta información material para clasificar el riesgo, un aplazamiento puede ser más coherente que forzar una emisión o un rechazo prematuro.",
    incorrectos:[
      "B) Una clasificación subestándar requiere una base de suscripción suficiente; la incertidumbre por sí sola no define la clase.",
      "C) Falta de información no equivale necesariamente a inasegurabilidad definitiva.",
      "D) Emitir primero y corregir informalmente después no sustituye el proceso de suscripción adecuado."
    ],
    distractor_condicional:"Si la información disponible ya demostrara un riesgo mayor pero todavía asegurable, una clasificación subestándar podría ser apropiada."
  }]},
{
  id:"killer_life13_002",area:"vida",subtema_blueprint:"Underwriting",concepto:"Oferta modificada — aceptación de cobertura con términos distintos",variantes:[{
    nivel:5,tipo_trampa:"OFERTA_MODIFICADA",
    q:"S solicita una póliza con un monto y una clase de riesgo determinados. La aseguradora no acepta exactamente lo solicitado, pero ofrece cobertura con una prima mayor y términos ajustados que sí está dispuesta a emitir. S todavía no ha aceptado esos cambios. ¿Qué análisis es MÁS APROPIADO?",
    o:[
      "La compañía ha hecho una oferta modificada que S debe aceptar conforme a sus términos antes de asumir que existe el contrato en esas nuevas condiciones",
      "La póliza existe exactamente como S la solicitó, porque la aseguradora no puede cambiar términos después de recibir la solicitud",
      "La cobertura modificada queda automáticamente aceptada si la prima propuesta es mayor que la original",
      "La solicitud original obliga a la aseguradora a emitir alguna forma de cobertura aunque S no acepte los cambios"
    ],a:0,
    trampa:"B y D parten de la existencia de una solicitud válida, pero confunden solicitar cobertura con obligar a la aseguradora a aceptar los mismos términos.",
    correcto:"Cuando la aseguradora propone términos distintos a los solicitados, la situación funciona como una oferta modificada que requiere aceptación según el proceso aplicable.",
    incorrectos:[
      "B) La aseguradora puede aceptar, rechazar o modificar la oferta según la suscripción.",
      "C) Un cambio de prima no sustituye la aceptación del solicitante a los nuevos términos.",
      "D) La solicitud no obliga por sí sola a emitir cobertura en cualquier forma."
    ],
    distractor_condicional:"Si la aseguradora hubiera emitido exactamente en los términos solicitados y se cumplieran las demás condiciones, el análisis de aceptación sería distinto."
  }]},
{
  id:"killer_life13_003",area:"vida",subtema_blueprint:"Recibos",concepto:"Recibo condicional vs aprobación posterior — fecha relevante",variantes:[{
    nivel:5,tipo_trampa:"FECHA_DECISIVA",
    q:"T entrega solicitud y prima inicial y recibe un recibo condicional cuya cobertura depende de que sea asegurable bajo los criterios previstos. Antes de la emisión formal ocurre un fallecimiento. La compañía determina después que T sí habría sido asegurable en la fecha contemplada por el recibo. ¿Qué factor debe decidirse PRIMERO?",
    o:[
      "Si las condiciones del recibo hacían efectiva una cobertura provisional desde la fecha relevante cuando T cumplía el estándar de asegurabilidad exigido",
      "Si la póliza física había sido entregada, porque ningún recibo puede producir cobertura antes de esa entrega",
      "Si el agente deseaba considerar la solicitud aprobada, porque su intención posterior controla la fecha de cobertura",
      "Si la prima fue cobrada por el banco, porque el procesamiento del pago por sí solo determina la existencia del contrato"
    ],a:0,
    trampa:"La asegurabilidad posterior importa, pero solo dentro del lenguaje del recibo y de la fecha que ese documento haga relevante.",
    correcto:"La pregunta central es si, conforme al recibo, se cumplieron las condiciones para que existiera cobertura provisional en la fecha prevista.",
    incorrectos:[
      "B) Algunos recibos pueden contemplar cobertura antes de la entrega física de la póliza.",
      "C) La cobertura no depende de una preferencia discrecional del agente después del evento.",
      "D) El procesamiento de la prima no sustituye las condiciones contractuales del recibo."
    ],
    distractor_condicional:"Si T no hubiera sido asegurable bajo la clase exigida por el recibo, la conclusión podría cambiar aunque hubiera pagado la prima inicial."
  }]},
{
  id:"killer_life13_004",area:"vida",subtema_blueprint:"Recibos",concepto:"Recibo condicional vs recibo vinculante — naturaleza de la protección",variantes:[{
    nivel:5,tipo_trampa:"TIPO_DE_RECIBO",
    q:"U compara dos situaciones. En una, la cobertura provisional depende de que se cumplan condiciones de asegurabilidad. En otra, el documento pretende ofrecer protección temporal durante un período definido sin depender del mismo modo de una aprobación posterior. ¿Qué conclusión es MÁS PRECISA?",
    o:[
      "El efecto depende del tipo de recibo: uno condicional vincula la protección a condiciones, mientras uno vinculante puede ofrecer cobertura temporal más inmediata dentro de sus propios límites",
      "Ambos recibos producen exactamente la misma cobertura porque la entrega de una prima elimina cualquier diferencia entre ellos",
      "El recibo condicional ofrece siempre más cobertura porque exige una evaluación médica posterior",
      "El recibo vinculante solo sirve como comprobante de pago y nunca puede afectar la fecha de protección"
    ],a:0,
    trampa:"Las dos situaciones comparten prima y solicitud, pero la naturaleza del recibo cambia la lógica de cobertura provisional.",
    correcto:"No todos los recibos funcionan igual. La cobertura y su fecha dependen del tipo de recibo y de sus condiciones específicas.",
    incorrectos:[
      "B) La prima no borra las diferencias contractuales entre tipos de recibo.",
      "C) Exigir condiciones no significa necesariamente ofrecer más cobertura.",
      "D) Un recibo vinculante puede tener efecto de cobertura temporal según sus términos."
    ],
    distractor_condicional:"Si ambos documentos fueran del mismo tipo y contuvieran condiciones equivalentes, la comparación sería distinta."
  }]},
{
  id:"killer_life13_005",area:"vida",subtema_blueprint:"Cambios contractuales",concepto:"Cambio de beneficiario — revocable, irrevocable y orden judicial",variantes:[{
    nivel:5,tipo_trampa:"CONTROL_LIMITADO",
    q:"V es dueño de una póliza y desea cambiar al beneficiario. La designación actual es irrevocable y además existe una obligación legal vinculada a mantener esa protección. V afirma que, como dueño, puede cambiar al beneficiario cuando quiera. ¿Qué análisis responde MEJOR?",
    o:[
      "La propiedad de la póliza no elimina las limitaciones derivadas de una designación irrevocable o de obligaciones legales aplicables; debe analizarse qué consentimientos o restricciones controlan el cambio",
      "El dueño siempre conserva control absoluto y puede cambiar al beneficiario sin considerar la designación existente ni obligaciones externas",
      "La existencia de una obligación legal convierte automáticamente al beneficiario en dueño de la póliza",
      "La única alternativa es cancelar la póliza, porque una designación irrevocable nunca puede modificarse bajo ninguna circunstancia"
    ],a:0,
    trampa:"Ser dueño concede derechos amplios, pero no necesariamente libertad absoluta frente a una designación irrevocable y restricciones legales.",
    correcto:"El control del dueño puede estar limitado por la naturaleza irrevocable de la designación y por obligaciones legales externas.",
    incorrectos:[
      "B) La propiedad no borra derechos contractuales protegidos ni restricciones legales.",
      "C) Una obligación legal no transfiere automáticamente la propiedad del contrato.",
      "D) La irrevocabilidad no significa necesariamente que nunca pueda existir un cambio con los consentimientos o procedimientos adecuados."
    ],
    distractor_condicional:"Si el beneficiario fuera revocable y no existieran restricciones legales, el dueño tendría mucha más libertad para cambiar la designación."
  }]},
{
  id:"killer_life13_006",area:"vida",subtema_blueprint:"Cambios contractuales",concepto:"Cesión absoluta vs colateral — transferencia de derechos",variantes:[{
    nivel:5,tipo_trampa:"ALCANCE_DEL_CAMBIO",
    q:"W necesita usar su póliza como garantía de un préstamo, pero no desea transferir permanentemente todos sus derechos de propiedad al acreedor. ¿Qué mecanismo responde MEJOR a ese objetivo?",
    o:[
      "Una cesión colateral, porque puede transferir al acreedor un interés limitado relacionado con la deuda sin entregar necesariamente todos los derechos de propiedad",
      "Una cesión absoluta, porque transferir toda la propiedad es la forma más directa de usar la póliza como garantía aunque exceda el objetivo de W",
      "Cambiar al acreedor como beneficiario revocable, porque eso produce exactamente los mismos derechos que una cesión sobre la póliza",
      "Convertir la póliza en irrevocable, porque así el acreedor adquiere automáticamente un derecho equivalente al saldo del préstamo"
    ],a:0,
    trampa:"La cesión absoluta es real y podría proteger al acreedor, pero transfiere más derechos de los que W quiere entregar.",
    correcto:"La cesión colateral se usa para otorgar un interés limitado como garantía, normalmente vinculado al monto de la obligación.",
    incorrectos:[
      "B) Puede transferir derechos más amplios de los necesarios para una garantía limitada.",
      "C) Ser beneficiario no equivale necesariamente a tener los mismos derechos que un cesionario sobre el contrato.",
      "D) La irrevocabilidad del beneficiario no crea por sí sola una cesión colateral."
    ],
    distractor_condicional:"Si W quisiera transferir permanentemente todos sus derechos de propiedad, una cesión absoluta sería más coherente."
  }]}
];

PK_KILLER_LIFE_13.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_LIFE_13 };
if (typeof window !== 'undefined') window.PK_KILLER_LIFE_13 = PK_KILLER_LIFE_13;
