// ============================================================
// PEARSON KILLER — pk-data-killer-life-14.js
// LOTE 14 — Seguro de Vida, escenarios mixtos prefiltrados
// Estándar: patrón Lote 10; varias rutas plausibles y una sola mejor
// por prioridad, secuencia, condición o conflicto entre reglas vecinas.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_LIFE_14 = [
{
  id:"killer_life14_001",area:"vida",subtema_blueprint:"Tipos de póliza",concepto:"Necesidad temporal, necesidad permanente y presupuesto",variantes:[{
    nivel:5,tipo_trampa:"DOS_NECESIDADES_Y_RESTRICCION",
    q:"A, de 42 años, quiere cubrir durante 18 años una deuda empresarial elevada y, además, dejar una cantidad menor para gastos finales sin importar cuándo fallezca. Puede pagar una cobertura amplia a término, pero una póliza permanente por todo el monto excedería su presupuesto. ¿Qué enfoque responde MEJOR al conjunto de datos?",
    o:[
      "Usar término para la necesidad temporal grande y una cobertura permanente menor para la necesidad de por vida",
      "Usar solo término por todo el monto, porque la deuda es la necesidad de mayor cuantía y debe dominar toda la decisión",
      "Usar solo una póliza permanente por todo el monto, porque una sola póliza evita cualquier riesgo de quedar sin cobertura futura",
      "Usar una póliza universal por todo el monto, porque la flexibilidad de primas compensa por sí sola la restricción presupuestaria"
    ],a:0,
    trampa:"B, C y D pueden ser defendibles en otros perfiles. La respuesta correcta es la que separa necesidades de distinta duración sin ignorar el presupuesto.",
    correcto:"Cuando existen una necesidad temporal grande y otra permanente menor, una combinación puede asignar a cada objetivo el tipo de cobertura que mejor lo atiende.",
    incorrectos:[
      "B) Atiende bien la necesidad temporal, pero deja sin resolver la necesidad permanente.",
      "C) Resuelve ambas duraciones, pero ignora la restricción económica explícita.",
      "D) La flexibilidad puede ser útil, pero no elimina por sí sola el problema de costo ni separa las dos duraciones."
    ],
    distractor_condicional:"Si A no tuviera una necesidad permanente, una cobertura a término por sí sola podría ser la mejor respuesta."
  }]},
{
  id:"killer_life14_002",area:"vida",subtema_blueprint:"Underwriting",concepto:"Aplazamiento, clasificación y nueva información",variantes:[{
    nivel:5,tipo_trampa:"SECUENCIA_DE_SUSCRIPCION",
    q:"B solicita seguro de vida. Su historial muestra un problema médico reciente, pero está pendiente de una prueba que puede aclarar si el riesgo es transitorio o duradero. La aseguradora podría emitir subestándar si el mayor riesgo quedara confirmado, pero hoy no tiene información suficiente para fijar una clase con confianza. ¿Qué decisión es MÁS coherente en este momento?",
    o:[
      "Aplazar la decisión hasta contar con la información material que permita clasificar el riesgo con mayor fundamento",
      "Emitir subestándar de inmediato, porque una posible elevación del riesgo justifica anticipar una prima mayor",
      "Rechazar la solicitud ahora, porque la incertidumbre médica es incompatible con cualquier posibilidad de emisión posterior",
      "Emitir estándar y revisar la prima cuando llegue el resultado, porque la clasificación puede corregirse informalmente después"
    ],a:0,
    trampa:"La opción B utiliza una ruta real, pero salta una etapa: clasificar requiere base suficiente. La clave es distinguir riesgo mayor confirmado de riesgo todavía incierto.",
    correcto:"Cuando falta información material para determinar de forma responsable la clase de riesgo, el aplazamiento puede ser más apropiado que forzar una clasificación o rechazo prematuro.",
    incorrectos:[
      "B) Sería razonable si ya existiera base suficiente para concluir que el riesgo es mayor pero asegurable.",
      "C) La incertidumbre actual no equivale por sí sola a inasegurabilidad definitiva.",
      "D) La suscripción debe resolverse mediante el proceso contractual adecuado, no con una corrección informal posterior."
    ],
    distractor_condicional:"Si la prueba confirmara un riesgo mayor pero aún dentro de los límites de aceptación, una clasificación subestándar podría ser apropiada."
  }]},
{
  id:"killer_life14_003",area:"vida",subtema_blueprint:"Recibos y suscripción",concepto:"Recibo condicional, asegurabilidad y oferta modificada",variantes:[{
    nivel:5,tipo_trampa:"CONDICION_Y_CAMBIO_DE_TERMINOS",
    q:"C entrega solicitud y prima inicial y recibe un recibo condicional. La compañía concluye después que no aprobaría la póliza exactamente como fue solicitada, pero sí ofrecería cobertura con una prima mayor por una clasificación subestándar. Antes de que C acepte esa oferta modificada ocurre un fallecimiento. ¿Qué análisis debe hacerse PRIMERO?",
    o:[
      "Examinar el lenguaje del recibo para determinar qué nivel de asegurabilidad o qué términos debían cumplirse para que existiera cobertura provisional en la fecha relevante",
      "Asumir que la oferta subestándar posterior prueba que existía cobertura por cualquier monto y prima desde el día de la solicitud",
      "Concluir que no podía existir cobertura porque C todavía no había aceptado la oferta modificada, sin revisar las condiciones del recibo",
      "Tratar la prima inicial como aceptación automática de cualquier condición que la aseguradora decidiera ofrecer después"
    ],a:0,
    trampa:"B y C parten de hechos relevantes, pero ninguno puede resolverse sin saber qué condicionaba exactamente el recibo provisional.",
    correcto:"Cuando existe un recibo condicional y la suscripción termina en términos distintos a los solicitados, primero debe determinarse qué condiciones exigía el recibo para activar cobertura provisional.",
    incorrectos:[
      "B) Una oferta subestándar posterior no demuestra por sí sola que el recibo cubriera bajo cualquier clase o prima.",
      "C) La falta de aceptación de la oferta modificada puede ser relevante para la póliza final, pero no sustituye el análisis del recibo provisional.",
      "D) Pagar la prima inicial no equivale a aceptar por adelantado cualquier modificación futura."
    ],
    distractor_condicional:"Si el recibo exigiera asegurabilidad exactamente bajo la clase solicitada y C no la cumpliera, la conclusión sobre cobertura provisional podría ser distinta."
  }]},
{
  id:"killer_life14_004",area:"vida",subtema_blueprint:"Beneficiarios y cesiones",concepto:"Beneficiario irrevocable, cesión colateral y derechos del dueño",variantes:[{
    nivel:5,tipo_trampa:"DERECHOS_SUPERPUESTOS",
    q:"D es dueño de una póliza con beneficiario irrevocable y luego usa la póliza como garantía de un préstamo mediante una cesión colateral permitida. Más tarde quiere cambiar al beneficiario y cancelar la cesión sin consentimiento de nadie. ¿Qué conclusión es MÁS APROPIADA?",
    o:[
      "Debe analizar por separado los derechos del beneficiario irrevocable y del cesionario, porque la propiedad del contrato no elimina automáticamente esas limitaciones",
      "Como dueño, D puede revertir ambas decisiones unilateralmente porque todos los demás derechos dependen siempre de su voluntad actual",
      "La cesión colateral convierte automáticamente al acreedor en dueño absoluto y elimina cualquier derecho del beneficiario",
      "El beneficiario irrevocable controla también la deuda y puede cancelar por sí solo la cesión colateral"
    ],a:0,
    trampa:"La pregunta mezcla dos restricciones reales distintas. La mejor respuesta no confunde derechos de beneficiario con derechos de cesionario.",
    correcto:"El dueño conserva derechos importantes, pero una designación irrevocable y una cesión colateral pueden crear intereses separados que deben analizarse conforme al contrato y la obligación aplicable.",
    incorrectos:[
      "B) La propiedad no borra automáticamente derechos ya concedidos o protegidos.",
      "C) Una cesión colateral normalmente transfiere un interés limitado, no necesariamente toda la propiedad.",
      "D) El beneficiario irrevocable y el cesionario tienen funciones jurídicas distintas."
    ],
    distractor_condicional:"Si el beneficiario fuera revocable y no existiera cesión vigente, D tendría mucha más libertad para hacer cambios."
  }]},
{
  id:"killer_life14_005",area:"vida",subtema_blueprint:"Conversión y reemplazo",concepto:"Conversión, nueva solicitud y deterioro de salud",variantes:[{
    nivel:5,tipo_trampa:"ACCESO_VS_COSTO",
    q:"E tiene una póliza a término convertible. Su salud se ha deteriorado y ahora necesita cobertura permanente. Puede ejercer la conversión disponible o solicitar una nueva póliza permanente que, si fuera aprobada en buena clase, podría resultar más económica. La prioridad principal de E es no perder la posibilidad de obtener cobertura permanente. ¿Qué enfoque es MEJOR?",
    o:[
      "Dar especial valor a la conversión por reducir la dependencia de una nueva evidencia de asegurabilidad, aunque convenga comparar el costo y los términos disponibles",
      "Solicitar primero una nueva póliza y dejar vencer la opción de conversión, porque un precio potencialmente menor debe dominar la decisión",
      "Mantener solo el término existente, porque conservar la prima actual resuelve por sí solo la nueva necesidad de permanencia",
      "Convertir únicamente si la nueva prima es igual a la de término, porque cualquier aumento elimina la ventaja de la conversión"
    ],a:0,
    trampa:"La opción B puede ser económicamente atractiva, pero la prioridad dominante no es el menor precio posible sino preservar acceso a cobertura permanente.",
    correcto:"Cuando la salud ha empeorado y la prioridad es preservar acceso a una cobertura permanente elegible, la conversión puede ser especialmente valiosa aun si el nuevo costo es mayor.",
    incorrectos:[
      "B) Puede ser razonable comparar una nueva solicitud, pero existe el riesgo de que la salud actual afecte la aprobación o los términos.",
      "C) Mantener término puede conservar protección temporal, pero no satisface por sí solo el nuevo objetivo de permanencia.",
      "D) La utilidad de la conversión no depende de que la prima permanezca idéntica."
    ],
    distractor_condicional:"Si E estuviera sano y la opción de conversión no estuviera próxima a vencer, comparar primero nuevas ofertas podría tener más peso."
  }]},
{
  id:"killer_life14_006",area:"vida",subtema_blueprint:"Riders y diseño de cobertura",concepto:"Continuidad, crecimiento futuro y costo",variantes:[{
    nivel:5,tipo_trampa:"PRIORIDAD_ACTUAL_VS_PROTECCION_AMPLIA",
    q:"F puede pagar solo un rider adicional. Le preocupa que una incapacidad prolongada le impida pagar primas y perder su póliza actual. También le interesa la posibilidad de comprar más cobertura en el futuro si su salud empeora. ¿Qué elección responde MEJOR a la prioridad que hoy amenaza directamente la continuidad de la póliza existente?",
    o:[
      "Exención de primas por incapacidad, porque atiende el riesgo inmediato de perder la cobertura por no poder seguir pagando",
      "Asegurabilidad garantizada, porque protege una necesidad futura de comprar más cobertura aunque no mantenga por sí sola las primas actuales",
      "Elegir asegurabilidad garantizada y reducir el beneficio actual, porque aumentar opciones futuras puede compensar el riesgo de perder la póliza presente",
      "Posponer cualquier rider hasta que ocurra una incapacidad, porque así F sabrá cuál riesgo se materializó primero"
    ],a:0,
    trampa:"B y C no son absurdas: protegen una necesidad futura real. La diferencia es que la pregunta pide el riesgo que amenaza hoy la continuidad de la póliza existente.",
    correcto:"Si la prioridad inmediata es evitar que una incapacidad provoque la pérdida de la cobertura actual por falta de pago, la exención de primas se alinea mejor con ese objetivo.",
    incorrectos:[
      "B) Protege acceso futuro a cobertura adicional, no el pago de primas actuales durante incapacidad.",
      "C) Sacrifica protección presente sin resolver directamente la amenaza principal descrita.",
      "D) Esperar hasta después del evento puede hacer que el rider ya no esté disponible para ese riesgo."
    ],
    distractor_condicional:"Si F tuviera ingresos muy estables y su prioridad principal fuera asegurar compras futuras sin nueva evidencia, la asegurabilidad garantizada podría ser preferible."
  }]}
];

PK_KILLER_LIFE_14.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_LIFE_14 };
if (typeof window !== 'undefined') window.PK_KILLER_LIFE_14 = PK_KILLER_LIFE_14;
