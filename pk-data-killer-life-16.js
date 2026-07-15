// ============================================================
// PEARSON KILLER — pk-data-killer-life-16.js
// LOTE 16 — Seguro de Vida, expansión controlada prefiltrada
// Estándar: patrón Lote 10 + prefiltrado validado en Lotes 14 y 15.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_LIFE_16 = [
{
  id:"killer_life16_001",area:"vida",subtema_blueprint:"Reemplazo",concepto:"Reemplazo vs conservación de cobertura existente",variantes:[{
    nivel:5,tipo_trampa:"BENEFICIO_NUEVO_VS_COSTO_DE_CAMBIO",
    q:"N tiene una póliza permanente antigua con valor acumulado y período de incontestabilidad ya transcurrido. Le ofrecen una póliza nueva con características que le atraen, pero el cambio implicaría nueva suscripción, nuevos costos iniciales y reiniciar ciertos períodos contractuales. ¿Qué enfoque es MÁS APROPIADO antes de reemplazar?",
    o:[
      "Comparar el beneficio real de la nueva póliza con lo que N perdería o reiniciaría al abandonar la existente antes de concluir que el reemplazo mejora su situación",
      "Reemplazar de inmediato si la nueva póliza tiene más características, porque una mayor cantidad de beneficios contractuales supera cualquier costo de transición",
      "Mantener siempre la póliza antigua, porque una póliza existente nunca debe reemplazarse aunque cambien las necesidades del asegurado",
      "Cancelar primero la póliza actual para evitar pagar dos primas mientras se decide si la nueva cobertura será emitida"
    ],a:0,
    trampa:"B reconoce una ventaja real; C protege derechos existentes. La mejor respuesta exige comparar ambos lados antes de sacrificar cobertura vigente.",
    correcto:"Un reemplazo debe evaluarse considerando beneficios nuevos y también costos, nueva suscripción, posibles períodos reiniciados y la pérdida de ventajas de la póliza existente.",
    incorrectos:[
      "B) Más características no garantizan que el reemplazo sea superior en conjunto.",
      "C) Conservar puede ser correcto, pero no existe una prohibición universal de reemplazar.",
      "D) Cancelar antes de asegurar la nueva cobertura puede crear una brecha innecesaria."
    ],
    distractor_condicional:"Si la póliza existente ya no respondiera a la necesidad y la nueva ofreciera una mejora clara sin una pérdida material desproporcionada, el reemplazo podría ser razonable."
  }]},
{
  id:"killer_life16_002",area:"vida",subtema_blueprint:"Valores de póliza",concepto:"Préstamo vs retiro — acceso a efectivo y permanencia",variantes:[{
    nivel:5,tipo_trampa:"LIQUIDEZ_VS_EFECTO_CONTRACTUAL",
    q:"P necesita efectivo temporalmente y tiene una póliza permanente con valor disponible. Quiere conservar la cobertura y espera poder devolver el dinero más adelante. ¿Qué análisis responde MEJOR a esa prioridad?",
    o:[
      "Evaluar un préstamo de póliza, si está disponible, porque puede dar acceso al valor sin tratar necesariamente el movimiento igual que un retiro permanente, aunque genere intereses y reduzca valores si no se paga",
      "Hacer un retiro definitivo, porque cualquier acceso al valor tiene exactamente el mismo efecto económico y contractual que un préstamo",
      "Entregar la póliza por su valor de rescate, porque obtener la mayor cantidad de efectivo inmediato debe dominar aunque desaparezca la cobertura",
      "Dejar de pagar primas y usar el valor acumulado para cualquier gasto, porque la póliza seguirá necesariamente igual mientras exista valor en efectivo"
    ],a:0,
    trampa:"B y C pueden producir efectivo real. La prioridad decisiva es acceso temporal sin abandonar innecesariamente la cobertura.",
    correcto:"Un préstamo puede ser más coherente cuando el objetivo es acceso temporal y conservación de la póliza, sujeto a intereses y al efecto del saldo pendiente sobre los valores y beneficios.",
    incorrectos:[
      "B) Un retiro puede tener efectos distintos y reducir permanentemente valores o beneficios.",
      "C) El rescate termina la cobertura, contradiciendo la prioridad principal.",
      "D) Dejar de pagar no garantiza que la póliza permanezca sin cambios."
    ],
    distractor_condicional:"Si P ya no necesitara la cobertura y quisiera liquidar completamente el contrato, el rescate podría ser más coherente."
  }]},
{
  id:"killer_life16_003",area:"vida",subtema_blueprint:"No caducidad",concepto:"Seguro reducido vs término extendido — permanencia y monto",variantes:[{
    nivel:5,tipo_trampa:"DURACION_VS_CANTIDAD",
    q:"Q ya no puede seguir pagando primas de una póliza de vida entera. Entre las opciones de no caducidad disponibles, valora más conservar alguna cobertura durante toda la vida, aunque el beneficio por muerte sea menor. ¿Qué opción se alinea MEJOR con esa prioridad?",
    o:[
      "Seguro pagado reducido, porque usa el valor disponible para mantener una cobertura permanente menor sin futuras primas regulares",
      "Seguro de término extendido, porque puede conservar por un tiempo un beneficio mayor aunque la cobertura termine cuando se agote el período comprado",
      "Rescate en efectivo, porque recibir el valor disponible conserva la misma protección por muerte mientras Q administra personalmente el dinero",
      "Préstamo automático de primas indefinido, porque garantiza que la póliza original nunca terminará mientras haya existido algún valor en efectivo"
    ],a:0,
    trampa:"B es especialmente tentadora porque puede conservar un beneficio mayor. El dato decisivo es que Q prioriza duración vital sobre monto.",
    correcto:"El seguro pagado reducido suele alinearse mejor con quien quiere mantener cobertura permanente, aceptando una reducción del beneficio.",
    incorrectos:[
      "B) Puede priorizar monto temporal, no necesariamente permanencia vital.",
      "C) El rescate entrega efectivo y termina la cobertura.",
      "D) Un mecanismo de préstamo no garantiza duración indefinida sin límites."
    ],
    distractor_condicional:"Si Q priorizara mantener temporalmente un beneficio mayor durante un período importante, el término extendido podría ser preferible."
  }]},
{
  id:"killer_life16_004",area:"vida",subtema_blueprint:"Liquidaciones",concepto:"Suma global vs ingreso — control y estabilidad",variantes:[{
    nivel:5,tipo_trampa:"CONTROL_VS_DISCIPLINA_DE_INGRESO",
    q:"R recibirá un beneficio de seguro de vida. Tiene poca experiencia administrando grandes sumas y su prioridad principal es contar con pagos regulares para cubrir gastos mensuales durante un período prolongado. A la vez, valora cierta flexibilidad. ¿Qué conclusión es MÁS APROPIADA?",
    o:[
      "Una opción de liquidación con pagos periódicos puede alinearse mejor con la prioridad de flujo estable, aunque debe compararse su flexibilidad con la de recibir una suma global",
      "La suma global es necesariamente superior porque tener control inmediato del dinero siempre produce mejores resultados que cualquier opción de pagos",
      "Los pagos periódicos son necesariamente superiores porque eliminan por completo todo riesgo de mala administración o necesidad inesperada de liquidez",
      "La única diferencia entre ambas opciones es el momento del primer pago, por lo que la experiencia financiera de R no es relevante"
    ],a:0,
    trampa:"B y C defienden ventajas reales llevadas al extremo. La mejor respuesta sigue la prioridad principal sin negar el costo de oportunidad en flexibilidad.",
    correcto:"Cuando la prioridad es convertir un beneficio en flujo regular, una opción de pagos puede ser más coherente, pero debe compararse con la flexibilidad y necesidades de liquidez del beneficiario.",
    incorrectos:[
      "B) El control inmediato puede ser útil, pero no siempre domina otras necesidades.",
      "C) Los pagos periódicos no eliminan todos los riesgos ni necesidades extraordinarias.",
      "D) La diferencia entre opciones es más amplia que la fecha del primer pago."
    ],
    distractor_condicional:"Si R tuviera experiencia, disciplina financiera y una necesidad inmediata importante de capital, la suma global podría tener más peso."
  }]},
{
  id:"killer_life16_005",area:"vida",subtema_blueprint:"Beneficiarios",concepto:"Primario, contingente y objetivo de distribución",variantes:[{
    nivel:5,tipo_trampa:"ORDEN_DE_PAGO_VS_CONTROL",
    q:"S quiere que su cónyuge reciba primero el beneficio, pero desea que sus hijos reciban el pago si el cónyuge fallece antes que él. No busca limitar su propia capacidad futura de cambiar la designación. ¿Qué estructura responde MEJOR al objetivo?",
    o:[
      "Designar al cónyuge como beneficiario primario y a los hijos como contingentes, manteniendo la designación revocable si desea conservar control",
      "Designar a los hijos como beneficiarios irrevocables y al cónyuge como contingente, porque la irrevocabilidad asegura que alguien de la familia reciba el beneficio",
      "Usar solo una designación por clase para los hijos, porque una clase sustituye automáticamente la necesidad de establecer un beneficiario primario",
      "Ceder la póliza al cónyuge, porque transferir propiedad es la forma normal de establecer el orden de pago entre beneficiarios"
    ],a:0,
    trampa:"B protege un interés real, pero cambia el orden deseado y sacrifica control. La clave es combinar orden de pago y revocabilidad.",
    correcto:"Un beneficiario primario recibe primero; un contingente entra si el primario no puede recibir. Mantener la designación revocable preserva la capacidad de cambio del dueño.",
    incorrectos:[
      "B) Invierte el orden deseado y añade una restricción que S no busca.",
      "C) Una clase puede ser útil, pero no sustituye necesariamente el orden primario-contingente planteado.",
      "D) La cesión transfiere derechos de propiedad y no es simplemente una técnica de orden de beneficiarios."
    ],
    distractor_condicional:"Si S quisiera impedir cambios futuros sin consentimiento, una designación irrevocable podría ser relevante."
  }]},
{
  id:"killer_life16_006",area:"vida",subtema_blueprint:"Conversión y presupuesto",concepto:"Conversión parcial vs total — acceso permanente y costo",variantes:[{
    nivel:5,tipo_trampa:"PRESERVAR_ACCESO_SIN_SOBRECOMPRAR",
    q:"T tiene una póliza a término convertible con un beneficio alto. Su salud ha empeorado y quiere asegurar cierta cobertura permanente antes de que venza la opción, pero no puede pagar la prima de convertir todo el monto. ¿Qué enfoque responde MEJOR a sus prioridades?",
    o:[
      "Evaluar una conversión parcial si el contrato la permite, conservando una porción permanente sin asumir el costo de convertir necesariamente todo el beneficio",
      "Dejar vencer la conversión y solicitar después una nueva póliza permanente por el monto completo, porque el deterioro de salud no debe influir en la estrategia",
      "Convertir todo el monto aunque la prima sea insostenible, porque una cobertura permanente solo tiene valor si reemplaza completamente el seguro a término",
      "Mantener únicamente el término hasta su vencimiento, porque una necesidad futura de cobertura permanente puede resolverse siempre más adelante en las mismas condiciones"
    ],a:0,
    trampa:"C protege mejor todo el monto, pero puede crear una prima insostenible; D preserva costo actual, pero arriesga perder la opción contractual.",
    correcto:"Si el contrato lo permite, una conversión parcial puede equilibrar acceso a cobertura permanente y capacidad de pago cuando convertir todo el monto no es sostenible.",
    incorrectos:[
      "B) La salud actual puede afectar una nueva solicitud futura.",
      "C) Una prima insostenible puede frustrar la permanencia buscada.",
      "D) Esperar puede implicar perder una opción contractual valiosa."
    ],
    distractor_condicional:"Si T pudiera sostener cómodamente la prima y necesitara cobertura permanente por todo el monto, una conversión total podría ser más apropiada."
  }]}
];

PK_KILLER_LIFE_16.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_LIFE_16 };
if (typeof window !== 'undefined') window.PK_KILLER_LIFE_16 = PK_KILLER_LIFE_16;
