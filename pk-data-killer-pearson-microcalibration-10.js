// ============================================================
// PEARSON KILLER — pk-data-killer-pearson-microcalibration-10.js
// LOTE 10 — Microcalibración Pearson Real
// Objetivo: tres distractores técnicamente defendibles y una sola mejor respuesta
// por prioridad, condición, secuencia o excepción del escenario.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_PEARSON_MICROCALIBRATION_10 = [
{
  id:"killer_pr10_001",area:"vida",subtema_blueprint:"Anualidades",concepto:"Immediate vs deferred annuity — timing vs liquidity",variantes:[{
    nivel:5,tipo_trampa:"PRIORIDAD_Y_TIEMPO",
    q:"V, de 66 años, recibe una suma importante. Quiere comenzar ingresos regulares dentro de dos meses, pero también desea mantener una reserva separada para gastos imprevistos. ¿Qué enfoque responde MEJOR a la combinación de objetivos?",
    o:[
      "Usar una anualidad inmediata solo para la porción destinada al ingreso cercano y mantener fuera del contrato la reserva de liquidez",
      "Usar una anualidad diferida con retiros sistemáticos, porque permite priorizar acumulación y aun así comenzar ingresos cercanos según las condiciones del contrato",
      "Mantener toda la suma en instrumentos líquidos y programar retiros, porque así conserva acceso al capital aunque no obtenga la misma garantía de ingreso contractual",
      "Anualizar toda la suma, porque maximizar el capital comprometido puede aumentar el ingreso periódico aunque reduzca la flexibilidad sobre la reserva"
    ],a:0,
    trampa:"B, C y D pueden ser estrategias reales. La clave es que V tiene dos objetivos distintos y uno de ellos exige ingreso contractual cercano sin sacrificar toda la liquidez.",
    correcto:"La mejor respuesta separa funciones: una anualidad inmediata puede atender el ingreso cercano con la porción comprometida, mientras una reserva externa conserva liquidez.",
    incorrectos:[
      "B) Una anualidad diferida puede ser útil, pero no es la opción que mejor coincide con una necesidad explícita de ingreso en un plazo muy cercano.",
      "C) Mantener liquidez puede resolver el acceso al capital, pero no atiende de la misma forma el objetivo de una corriente contractual de ingreso.",
      "D) Comprometer todo el capital puede aumentar ingreso, pero contradice la prioridad explícita de conservar una reserva separada."
    ],
    distractor_condicional:"Si V priorizara liquidez total sobre una garantía contractual de ingreso, una estrategia basada en activos líquidos podría ser más apropiada."
  }]},
{
  id:"killer_pr10_002",area:"vida",subtema_blueprint:"Anualidades",concepto:"1035 exchange vs surrender — tax deferral and control",variantes:[{
    nivel:5,tipo_trampa:"SECUENCIA_FISCAL",
    q:"W quiere reemplazar una anualidad por otra que considera más adecuada. No necesita usar el dinero para gastos personales y su prioridad es mantener, si es posible, el diferimiento fiscal durante el cambio. ¿Qué curso de acción responde MEJOR a esa prioridad?",
    o:[
      "Evaluar un intercambio 1035 directo entre contratos elegibles, porque la forma del movimiento puede preservar el diferimiento sin que W reciba los fondos para uso personal",
      "Rescatar el contrato y depositar inmediatamente el dinero en la nueva anualidad, porque la intención de reinvertir puede producir el mismo resultado fiscal aunque W reciba primero los fondos",
      "Tomar un retiro parcial y usarlo como prima de la nueva anualidad, porque limitar el monto retirado puede reducir la consecuencia fiscal aunque no sea equivalente a un intercambio directo",
      "Mantener el contrato actual hasta el vencimiento y comprar entonces otra anualidad, porque evitar cualquier movimiento intermedio elimina el riesgo de una transacción no elegible"
    ],a:0,
    trampa:"B, C y D no son absurdas: describen cursos posibles. La diferencia está en que solo A responde directamente al objetivo de reemplazo manteniendo el diferimiento mediante una estructura elegible.",
    correcto:"Cuando la prioridad es sustituir un contrato elegible por otro sin recibir los fondos para uso personal, un intercambio 1035 directo es la vía que mejor coincide con ese objetivo, sujeto a requisitos aplicables.",
    incorrectos:[
      "B) Reinvertir después puede ser una estrategia distinta, pero recibir personalmente los fondos no es necesariamente equivalente a un intercambio 1035 directo.",
      "C) Un retiro parcial puede limitar el monto distribuido, pero sigue siendo una distribución y no cumple por sí solo el objetivo de intercambio con diferimiento.",
      "D) Esperar puede evitar una transacción actual, pero no responde a la intención de reemplazar ahora el contrato por otro más adecuado."
    ],
    distractor_condicional:"Si W necesitara efectivo para gastos personales, el análisis sería sobre una distribución o rescate, no sobre preservar el diferimiento mediante intercambio."
  }]},
{
  id:"killer_pr10_003",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Traditional vs Roth — deduction certainty vs future tax preference",variantes:[{
    nivel:5,tipo_trampa:"DOS_BENEFICIOS_REALES",
    q:"X puede obtener una deducción actual con una aportación tradicional y valora ese ahorro inmediato. A la vez, cree que su tasa impositiva será mayor en la jubilación y considera muy importante que sus distribuciones calificadas futuras puedan estar libres de impuesto. Si debe elegir según la prioridad dominante que expresa, ¿qué conclusión es MEJOR?",
    o:[
      "La Roth puede alinearse mejor con su prioridad dominante sobre el tratamiento fiscal futuro, aun reconociendo el valor real de la deducción actual de la opción tradicional",
      "La tradicional puede alinearse mejor porque una deducción actual cierta puede tener más valor que un beneficio fiscal futuro sujeto a reglas y circunstancias posteriores",
      "Dividir aportaciones entre ambas puede ser una estrategia razonable para diversificar el tratamiento fiscal, aunque no responda tan directamente a una prioridad dominante única",
      "La elección depende principalmente de cuál cuenta tenga mayor límite de inversión disponible, porque ese factor puede superar las diferencias de tratamiento fiscal"
    ],a:0,
    trampa:"B y C son respuestas defendibles en otros contextos. La clave es que el escenario pide elegir según la prioridad dominante declarada por X.",
    correcto:"Si X prioriza claramente pagar impuestos ahora para buscar distribuciones calificadas futuras libres de impuesto, la Roth es la opción que mejor se alinea con esa preferencia, sin negar que la deducción tradicional tenga valor.",
    incorrectos:[
      "B) Puede ser una decisión razonable para quien prioriza el beneficio actual, pero no refleja la prioridad dominante descrita.",
      "C) La diversificación fiscal puede ser prudente, pero la pregunta pide la mejor opción según una prioridad principal específica.",
      "D) Los límites pueden ser relevantes, pero no son el dato decisivo presentado en el escenario."
    ],
    distractor_condicional:"Si X priorizara reducir ingreso imponible actual o esperara una tasa menor en jubilación, la tradicional podría ser preferible."
  }]},
{
  id:"killer_pr10_004",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Direct vs indirect rollover — control vs execution risk",variantes:[{
    nivel:5,tipo_trampa:"CONTROL_VS_RIESGO",
    q:"Y quiere mover activos de un plan anterior a una IRA. Le atrae la idea de recibir el dinero primero porque tendría control temporal sobre los fondos, pero afirma que su prioridad principal es minimizar el riesgo de incumplir requisitos de plazo, retención o redepósito. ¿Qué alternativa es MEJOR?",
    o:[
      "Un rollover directo, porque sacrifica control temporal sobre los fondos a cambio de reducir los riesgos operativos que Y identifica como su prioridad principal",
      "Un rollover indirecto, porque el control temporal puede ser útil y todavía puede completarse correctamente si Y cumple los requisitos aplicables",
      "Una distribución seguida de una aportación regular a la IRA, porque permite a Y controlar el dinero y reconstruir después su ahorro de retiro dentro de los límites aplicables",
      "Dejar los fondos en el plan anterior, porque evitar el movimiento elimina el riesgo de ejecución aunque no cumpla el objetivo de consolidar activos en la IRA"
    ],a:0,
    trampa:"Las cuatro opciones tienen lógica. La mejor respuesta depende de la prioridad declarada: reducir riesgo operativo durante el movimiento.",
    correcto:"El rollover directo responde mejor cuando la prioridad principal es minimizar los riesgos asociados a que el participante reciba y deba redepositar la distribución.",
    incorrectos:[
      "B) Es una vía real y puede completarse correctamente, pero expone precisamente a los riesgos que Y quiere minimizar.",
      "C) Puede volver a colocar dinero en una IRA, pero no es necesariamente equivalente a preservar el tratamiento de un rollover elegible.",
      "D) Evita riesgo de ejecución, pero no cumple el objetivo explícito de mover los activos a la IRA."
    ],
    distractor_condicional:"Si Y priorizara acceso temporal al efectivo y estuviera dispuesto a gestionar requisitos adicionales, podría considerar una vía indirecta."
  }]},
{
  id:"killer_pr10_005",area:"vida",subtema_blueprint:"Anualidades",concepto:"Variable annuity — growth objective vs principal protection",variantes:[{
    nivel:5,tipo_trampa:"CONFLICTO_REAL",
    q:"Z tiene un horizonte de 15 años y desea crecimiento vinculado al mercado. Tolera fluctuaciones moderadas, pero afirma que la pérdida de una parte sustancial del capital justo antes de necesitar ingresos sería inaceptable. ¿Qué conclusión es MÁS APROPIADA al evaluar una anualidad variable?",
    o:[
      "Puede ser razonable considerarla, pero la exposición al mercado debe evaluarse junto con la importancia de proteger el capital cerca de la fecha en que Z necesitará ingresos",
      "Puede ser preferible una anualidad fija, porque prioriza más la estabilidad aunque sacrifique parte del potencial de crecimiento vinculado al mercado",
      "Puede seguir siendo adecuada una anualidad variable si Z ajusta con el tiempo la asignación de las subcuentas para reducir riesgo conforme se acerque la fecha de ingreso",
      "Puede ser más apropiado mantener una parte en activos orientados al crecimiento y otra en instrumentos con mayor estabilidad, en vez de exigir que un solo producto cumpla todos los objetivos"
    ],a:0,
    trampa:"B, C y D son estrategias razonables. A es la mejor porque la pregunta pide evaluar la anualidad variable, no seleccionar automáticamente un producto alternativo ni diseñar toda la cartera.",
    correcto:"La evaluación adecuada reconoce tanto el horizonte y el objetivo de crecimiento como el riesgo de una pérdida importante cerca de la fase de ingreso. Esos factores deben analizarse juntos antes de concluir idoneidad.",
    incorrectos:[
      "B) Puede ser una alternativa válida, pero cambia la pregunta de evaluar una anualidad variable a seleccionar otro producto.",
      "C) Ajustar riesgo puede ayudar, pero no elimina por sí solo todos los riesgos de mercado o de secuencia cerca del momento de uso.",
      "D) La diversificación por productos puede ser razonable, pero va más allá de la pregunta concreta sobre la idoneidad de la anualidad variable."
    ],
    distractor_condicional:"Si Z exigiera una garantía fuerte del principal y rechazara fluctuaciones, una solución con mayor estabilidad podría ser más coherente."
  }]},
{
  id:"killer_pr10_006",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"401(k) loan vs hardship distribution — repayment capacity",variantes:[{
    nivel:5,tipo_trampa:"CONDICION_DECISIVA",
    q:"A necesita dinero por una emergencia. Su plan permite tanto préstamos como distribuciones por dificultad. A prefiere que los fondos regresen al plan, pero sus ingresos serán inestables durante los próximos seis meses y no está seguro de poder cumplir un calendario de pago. ¿Qué análisis es MEJOR?",
    o:[
      "El préstamo coincide con su deseo de devolver los fondos, pero su capacidad real de cumplir los pagos puede hacer que una distribución por dificultad sea la alternativa más coherente si reúne los requisitos",
      "El préstamo es mejor porque el deseo de devolver los fondos debe prevalecer aunque exista riesgo de incumplir el calendario de pago",
      "La distribución por dificultad es mejor porque una emergencia financiera elimina la utilidad de considerar un préstamo del plan",
      "Dividir la necesidad entre un préstamo y una distribución puede ser razonable si el plan lo permite, aunque aumentaría la complejidad y no resuelve por sí sola la incertidumbre de pago"
    ],a:0,
    trampa:"B, C y D son plausibles. La diferencia decisiva es que A desea devolver los fondos, pero su capacidad de pago es incierta; la mejor respuesta debe reconocer ambos hechos.",
    correcto:"El préstamo encaja con la intención de reponer los fondos, pero no debe recomendarse ignorando la capacidad de pago. Si esa capacidad es dudosa y A cumple los requisitos, una distribución por dificultad puede ser más coherente con la situación.",
    incorrectos:[
      "B) Refleja una prioridad real, pero ignora un dato decisivo: la incertidumbre sobre la capacidad de cumplir el calendario.",
      "C) La existencia de una emergencia no vuelve irrelevante el préstamo; depende de las condiciones y capacidad de pago.",
      "D) Puede ser una estrategia posible, pero añade complejidad y no responde tan directamente al conflicto principal del escenario."
    ],
    distractor_condicional:"Si A tuviera ingresos estables y capacidad clara de pago, el préstamo podría ser la opción que mejor reflejara su deseo de reponer los fondos."
  }]}
];

PK_KILLER_PEARSON_MICROCALIBRATION_10.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PEARSON_MICROCALIBRATION_10 };
if (typeof window !== 'undefined') window.PK_KILLER_PEARSON_MICROCALIBRATION_10 = PK_KILLER_PEARSON_MICROCALIBRATION_10;
