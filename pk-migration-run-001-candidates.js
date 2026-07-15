// ============================================================
// PEARSON KILLER — pk-migration-run-001-candidates.js
// Corrida 001 — 10 preguntas antiguas de Vida transformadas al estándar Pearson real.
// Todas permanecen pending hasta preauditoría + revisión humana.
// ============================================================

const PK_MIGRATION_RUN_001_CANDIDATES = [
{
  id:"migration001_life_001",area:"vida",subtema_blueprint:"Término vs permanente",concepto:"Duración de la necesidad, presupuesto y valor en efectivo",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"DURACION_VS_ACUMULACION",
    q:"A tiene 38 años, dos hijos pequeños y una hipoteca que terminará en 20 años. Quiere la mayor protección posible durante ese período y su presupuesto es limitado. También le atrae la idea de acumular valor en efectivo, pero reconoce que esa no es su prioridad principal. ¿Qué recomendación responde MEJOR a los datos decisivos del caso?",
    o:[
      "Priorizar una cobertura a término suficiente para la necesidad temporal principal y evaluar por separado si existe presupuesto para una porción permanente menor",
      "Elegir solo una póliza de vida entera por todo el monto, porque acumular valor en efectivo debe prevalecer sobre cualquier restricción presupuestaria",
      "Elegir una póliza variable por todo el monto, porque la posibilidad de crecimiento de mercado compensa la naturaleza temporal de la necesidad",
      "Reducir significativamente el beneficio para comprar una póliza permanente, aunque la familia quede protegida por debajo de la necesidad calculada durante los próximos 20 años"
    ],a:0,
    trampa:"B y D usan ventajas reales de la cobertura permanente, pero el dato decisivo es una necesidad grande, temporal y con presupuesto limitado. C introduce crecimiento de mercado sin resolver la prioridad central.",
    correcto:"Cuando la necesidad principal es temporal y el presupuesto limita el costo, una cobertura a término puede maximizar el beneficio durante el período crítico. Una porción permanente puede evaluarse aparte si existe una necesidad vitalicia real y capacidad de pago.",
    incorrectos:[
      "B) La permanencia y el valor en efectivo son ventajas reales, pero financiar todo el monto como permanente puede sacrificar la cantidad de protección necesaria.",
      "C) El potencial de inversión no sustituye el análisis de duración, costo y cantidad de cobertura que exige el caso.",
      "D) Mantiene una característica permanente, pero deja insuficientemente cubierta la necesidad temporal que el caso considera prioritaria."
    ],
    distractor_condicional:"Si A tuviera una necesidad permanente por todo el monto y capacidad amplia para sostener la prima, una solución totalmente permanente podría ganar peso."
  }]},
{
  id:"migration001_life_002",area:"vida",subtema_blueprint:"Tipos de término",concepto:"Prima creciente, beneficio constante y horizonte de cobertura",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"PRIMA_VS_BENEFICIO",
    q:"B necesita cobertura solo por unos pocos años mientras termina una obligación. Está considerando una póliza cuyo beneficio de muerte permanece constante, pero cuya prima se recalcula cada año según la edad alcanzada. Espera poder asumir aumentos moderados durante ese período corto. ¿Qué característica identifica MEJOR el producto descrito?",
    o:[
      "Es un término anual renovable, donde el beneficio puede mantenerse nivelado mientras la prima aumenta conforme avanza la edad",
      "Es un término decreciente, porque una prima que cambia cada año implica que el beneficio también debe reducirse",
      "Es un término creciente, porque cualquier aumento anual de prima significa que el beneficio de muerte también aumenta",
      "Es un término nivelado, porque mantener constante el beneficio obliga a que la prima permanezca fija durante toda la vigencia"
    ],a:0,
    trampa:"B, C y D relacionan correctamente prima y beneficio en otros diseños de término, pero confunden cuál elemento cambia en este caso.",
    correcto:"El término anual renovable puede mantener un beneficio de muerte constante mientras la prima aumenta periódicamente, normalmente conforme aumenta la edad del asegurado.",
    incorrectos:[
      "B) El término decreciente se distingue por la reducción del beneficio, no por el simple hecho de que la prima cambie.",
      "C) Un beneficio creciente define otro diseño; el caso indica expresamente que el beneficio permanece constante.",
      "D) El término nivelado suele asociar estabilidad de prima durante el período nivelado, no una recalculación anual por edad."
    ],
    distractor_condicional:"Si el beneficio también aumentara cada año, un diseño de término creciente podría ser más coherente."
  }]},
{
  id:"migration001_life_003",area:"vida",subtema_blueprint:"Conversión",concepto:"Deterioro de salud, fecha límite y acceso a permanencia",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"VENTANA_CONTRACTUAL",
    q:"C tiene una póliza a término convertible que vence pronto. Desde que compró la póliza desarrolló una condición médica que podría encarecer o dificultar una nueva solicitud. Ahora quiere cobertura permanente y su prioridad principal es no perder una vía contractual hacia ella. ¿Qué curso de acción es MÁS APROPIADO?",
    o:[
      "Evaluar y, si conviene, ejercer la opción de conversión antes de que venza, porque su valor puede estar en reducir la dependencia de una nueva evidencia de asegurabilidad",
      "Esperar a que venza la póliza y luego solicitar una nueva cobertura permanente, porque una condición médica reciente no debe afectar la estrategia",
      "Renovar indefinidamente la póliza a término, porque toda póliza a término garantiza renovación sin límites ni cambios relevantes",
      "Cancelar la cobertura actual antes de decidir, porque no tener una póliza vigente mejora la negociación con una nueva aseguradora"
    ],a:0,
    trampa:"B puede parecer razonable si espera mejores precios y C conserva cobertura temporal, pero la fecha límite y el deterioro de salud hacen decisiva la opción contractual de conversión.",
    correcto:"Cuando la salud se ha deteriorado y una opción de conversión está próxima a vencer, preservar esa vía puede ser especialmente valioso porque puede permitir acceso a cobertura permanente sin depender del resultado de una nueva suscripción completa.",
    incorrectos:[
      "B) Dejar vencer la opción expone a C al resultado incierto de una nueva evaluación médica.",
      "C) La renovación de término no sustituye necesariamente la necesidad de permanencia ni es ilimitada en todos los contratos.",
      "D) Cancelar primero crea una brecha de cobertura sin mejorar por sí sola la asegurabilidad."
    ],
    distractor_condicional:"Si C conservara excelente salud y la opción de conversión no estuviera próxima a vencer, comparar primero una nueva solicitud podría tener más peso."
  }]},
{
  id:"migration001_life_004",area:"vida",subtema_blueprint:"Return of Premium Term",concepto:"Costo mayor, temporalidad y devolución de primas",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"COSTO_VS_RECUPERACION",
    q:"D necesita cobertura por 25 años y no busca protección de por vida. Puede pagar más que por un término nivelado tradicional y le incomoda la idea de terminar el período sin recuperar nada si sobrevive. No considera el valor en efectivo una prioridad. ¿Qué producto responde MEJOR a esa combinación de preferencias?",
    o:[
      "Un término con devolución de prima, porque conserva una necesidad temporal y añade la posibilidad contractual de recuperar primas si cumple las condiciones al final del período",
      "Una póliza de vida entera, porque cualquier deseo de recuperar valor convierte automáticamente una necesidad temporal en una necesidad permanente",
      "Un término anual renovable, porque las primas crecientes producen por sí solas una devolución al final del período",
      "Una póliza variable, porque el rendimiento de mercado garantiza recuperar todas las primas pagadas si el asegurado sobrevive"
    ],a:0,
    trampa:"B ofrece valor permanente real, pero excede la duración de la necesidad; C y D mezclan características de productos distintos con la idea de recuperación.",
    correcto:"El término con devolución de prima puede ajustarse a quien mantiene una necesidad temporal, acepta una prima mayor y valora recuperar primas al final si se cumplen las condiciones del contrato.",
    incorrectos:[
      "B) La vida entera puede acumular valor, pero cambia la naturaleza y costo de una necesidad que el caso define como temporal.",
      "C) El término anual renovable no se caracteriza por devolver automáticamente las primas pagadas.",
      "D) Una póliza variable no garantiza que el rendimiento de mercado devuelva todas las primas."
    ],
    distractor_condicional:"Si D necesitara cobertura vitalicia y valor acumulado durante toda la vida, una póliza permanente podría ser más adecuada."
  }]},
{
  id:"migration001_life_005",area:"vida",subtema_blueprint:"Características del término",concepto:"Temporalidad, costo, conversión y ausencia de valor en efectivo",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"CARACTERISTICA_VECINA",
    q:"E compara varias pólizas para cubrir una obligación de 15 años. El agente explica que una opción puede tener prima relativamente baja para el mismo beneficio, puede incluir conversión y termina al finalizar el período si no se renueva. E también pregunta qué valor podrá pedir prestado después de varios años. ¿Qué respuesta del agente es MÁS PRECISA?",
    o:[
      "Debe aclarar que una póliza a término normalmente no acumula valor en efectivo para préstamos, aunque puede ofrecer otras ventajas como costo inicial menor o conversión",
      "Debe asegurarle que toda póliza a término acumula valor en efectivo lentamente aunque no aparezca durante los primeros años",
      "Debe explicarle que la conversión a permanente crea retroactivamente valor en efectivo dentro de la póliza a término original",
      "Debe indicarle que el valor para préstamos depende únicamente del monto del beneficio de muerte y no del tipo de póliza"
    ],a:0,
    trampa:"C usa una característica real de conversión y D relaciona beneficio con valor económico, pero ninguna crea cash value dentro del término original.",
    correcto:"El seguro a término se diseña principalmente para protección temporal y normalmente no acumula valor en efectivo. Puede incluir opciones como conversión, pero eso no convierte la póliza temporal existente en una fuente de préstamos.",
    incorrectos:[
      "B) La ausencia de valor en efectivo es una característica esencial del término tradicional.",
      "C) Convertir puede crear una nueva cobertura permanente, pero no genera retroactivamente cash value en la póliza temporal previa.",
      "D) El beneficio de muerte no determina por sí solo la existencia de un valor en efectivo disponible para préstamos."
    ],
    distractor_condicional:"Si E eligiera una póliza permanente con valor acumulado, entonces el acceso a préstamos podría formar parte del análisis."
  }]},
{
  id:"migration001_life_006",area:"vida",subtema_blueprint:"Whole Life",concepto:"Garantías, costo y necesidad de permanencia",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"GARANTIAS_VS_PRESUPUESTO",
    q:"F quiere dejar una cantidad específica para gastos finales sin importar cuándo fallezca. Valora una prima predecible y crecimiento contractual del valor en efectivo, pero no necesita flexibilidad para cambiar primas cada año. Puede sostener una prima mayor que la de término. ¿Qué producto responde MEJOR a sus prioridades?",
    o:[
      "Una póliza de vida entera, porque combina cobertura permanente, prima nivelada y valor en efectivo garantizado según el contrato",
      "Una póliza a término anual renovable, porque la prima creciente garantiza que la cobertura se mantendrá de por vida",
      "Una póliza variable, porque el crecimiento de mercado garantiza simultáneamente prima fija y valor en efectivo estable",
      "Una póliza de término decreciente, porque una necesidad de gastos finales aumenta la conveniencia de reducir el beneficio con el tiempo"
    ],a:0,
    trampa:"B y C ofrecen continuidad o crecimiento en ciertos contextos, pero no reúnen las prioridades expresas de permanencia, prima predecible y valor contractual garantizado.",
    correcto:"La vida entera puede alinearse con una necesidad permanente cuando el cliente valora una prima estable y acumulación garantizada de valor en efectivo conforme al contrato.",
    incorrectos:[
      "B) El término anual renovable sigue siendo temporal y sus primas pueden aumentar con la edad.",
      "C) Los valores variables dependen del rendimiento de inversión y no ofrecen la misma estabilidad contractual.",
      "D) El término decreciente reduce el beneficio y no responde bien a una necesidad permanente fija."
    ],
    distractor_condicional:"Si F buscara máxima cobertura temporal al menor costo y no necesitara protección de por vida, el término tendría más peso."
  }]},
{
  id:"migration001_life_007",area:"vida",subtema_blueprint:"Maduración de Whole Life",concepto:"Edad de maduración, cash value y diseño contractual",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"FECHA_CONTRACTUAL_VS_JUBILACION",
    q:"G revisa una póliza tradicional de vida entera y observa que el contrato usa una edad de maduración en la que el valor en efectivo alcanza el monto previsto por la póliza. G supone que debe coincidir con la jubilación o con Medicare. ¿Qué análisis es MÁS PRECISO?",
    o:[
      "La edad de maduración depende del diseño contractual y de las tablas aplicables; en pólizas tradicionales se ha usado 100 y en diseños modernos puede usarse una edad mayor como 121",
      "La maduración ocurre necesariamente a los 65 años porque esa edad controla todos los contratos de seguro de vida permanente",
      "La maduración ocurre al comenzar los RMD, porque las reglas de retiro determinan cuándo el cash value iguala el beneficio",
      "La maduración ocurre cuando el asegurado deja de pagar primas, porque el cese de pagos obliga al cash value a igualar inmediatamente el beneficio"
    ],a:0,
    trampa:"B y C usan edades reales de otros sistemas financieros y D usa un hecho relevante de primas, pero ninguno determina por sí solo la edad contractual de maduración.",
    correcto:"La maduración de una póliza de vida entera depende de su contrato y de la tabla actuarial utilizada. Históricamente muchas pólizas tradicionales maduraban a los 100 años y diseños modernos pueden extender esa edad.",
    incorrectos:[
      "B) Medicare y jubilación no fijan automáticamente la edad de maduración de una póliza de vida.",
      "C) Las reglas de distribuciones mínimas requeridas pertenecen al ámbito de cuentas de retiro, no a la maduración de Whole Life.",
      "D) Dejar de pagar primas puede activar otras provisiones, pero no hace que el cash value iguale instantáneamente el beneficio."
    ],
    distractor_condicional:"Si un contrato específico estableciera expresamente una edad distinta de maduración, esa disposición contractual controlaría el análisis."
  }]},
{
  id:"migration001_life_008",area:"vida",subtema_blueprint:"Préstamos de póliza",concepto:"Saldo pendiente, intereses y beneficio de muerte",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"LIQUIDEZ_VS_BENEFICIO_FINAL",
    q:"H toma un préstamo contra el valor en efectivo de su póliza permanente para cubrir una emergencia. Años después todavía mantiene saldo e intereses pendientes y fallece mientras la póliza sigue vigente. Su beneficiario espera recibir el beneficio completo sin ajustes. ¿Qué resultado es MÁS probable conforme al funcionamiento normal de estos préstamos?",
    o:[
      "El saldo pendiente y los intereses aplicables pueden reducir el beneficio neto pagado al beneficiario",
      "El préstamo desaparece al fallecer y el beneficiario recibe necesariamente el beneficio completo",
      "El beneficiario recibe el beneficio completo más los intereses acumulados del préstamo como rendimiento adicional",
      "La póliza se considera cancelada desde el día en que H tomó el préstamo, sin importar que siguiera vigente"
    ],a:0,
    trampa:"B parece intuitiva porque el prestatario fallece y C confunde intereses con ganancias, pero el préstamo sigue siendo una obligación contra los valores de la póliza.",
    correcto:"Un préstamo pendiente contra la póliza normalmente reduce los valores disponibles y puede deducirse, junto con intereses aplicables, del beneficio de muerte pagadero.",
    incorrectos:[
      "B) El fallecimiento no borra automáticamente la obligación asociada al préstamo de póliza.",
      "C) Los intereses no se convierten en un beneficio adicional para el beneficiario.",
      "D) Tomar un préstamo no cancela automáticamente la póliza mientras esta continúe vigente conforme a sus términos."
    ],
    distractor_condicional:"Si H hubiera pagado completamente el préstamo y los intereses antes de fallecer, esa reducción específica del beneficio no existiría."
  }]},
{
  id:"migration001_life_009",area:"vida",subtema_blueprint:"Cash value",concepto:"Crecimiento, préstamos, APL y maduración",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"CARACTERISTICA_CORRECTA_EN_MOMENTO_EQUIVOCADO",
    q:"J revisa una póliza de vida entera con varios años de vigencia. Sabe que puede existir crecimiento con impuestos diferidos, préstamos y una provisión de préstamo automático de primas. Un amigo le dice que, por tener cash value, ese valor debe ser igual al beneficio de muerte en cualquier momento. ¿Qué respuesta es MÁS PRECISA?",
    o:[
      "El valor en efectivo puede crecer con el tiempo y llegar a relacionarse con la maduración del contrato, pero no tiene que igualar el beneficio de muerte durante toda la vigencia",
      "El amigo tiene razón porque cualquier póliza con cash value exige igualdad permanente entre cash value y beneficio desde el primer año",
      "El cash value solo existe después de que se toma el primer préstamo, por lo que antes de eso no puede compararse con el beneficio",
      "El préstamo automático de primas convierte siempre el cash value en un beneficio de muerte adicional separado"
    ],a:0,
    trampa:"B toma una característica eventual y la aplica a todo momento; C y D usan conceptos reales de préstamos pero alteran su función.",
    correcto:"El valor en efectivo se acumula gradualmente y no tiene por qué igualar el beneficio de muerte durante toda la vigencia. La relación final depende de la estructura y maduración del contrato.",
    incorrectos:[
      "B) La igualdad no existe necesariamente desde el inicio ni durante todos los años de la póliza.",
      "C) El cash value puede existir sin que el dueño haya tomado un préstamo.",
      "D) El préstamo automático de primas utiliza valores disponibles para evitar una caducidad, no crea un beneficio de muerte adicional independiente."
    ],
    distractor_condicional:"Si J estuviera exactamente en la edad o punto contractual de maduración aplicable, la relación entre cash value y monto pagadero podría ser distinta."
  }]},
{
  id:"migration001_life_010",area:"vida",subtema_blueprint:"Whole Life vs Term",concepto:"Cantidad de protección, permanencia y presupuesto familiar",human_review_status:"pending",category:"killer_ready",variantes:[{
    nivel:5,tipo_trampa:"PROTECCION_ACTUAL_VS_PERMANENCIA",
    q:"K tiene 30 años, dos hijos pequeños, una hipoteca reciente y un presupuesto limitado. Quiere proteger a su familia con un beneficio alto durante los años de mayores obligaciones, pero también le gusta la idea de conservar alguna cobertura después. ¿Qué enfoque responde MEJOR a la combinación de prioridades?",
    o:[
      "Usar una cobertura a término amplia para la etapa de alta necesidad y evaluar una porción permanente menor si el presupuesto permite mantenerla",
      "Comprar únicamente una póliza de vida entera por el monto máximo que pueda pagar, aunque el beneficio quede muy por debajo de la necesidad familiar calculada",
      "Comprar únicamente término y descartar desde ahora cualquier necesidad posterior, porque una familia joven nunca necesita cobertura permanente",
      "Elegir una póliza variable por todo el monto, porque el potencial de mercado garantiza que el costo inicial sea el más bajo"
    ],a:0,
    trampa:"B protege permanencia y C maximiza temporalidad, pero ambos ignoran una parte del objetivo. D añade inversión sin resolver la restricción central de cantidad y costo.",
    correcto:"Una combinación puede permitir alta protección durante los años de mayores obligaciones y, si existe presupuesto, conservar una base permanente menor para necesidades de más largo plazo.",
    incorrectos:[
      "B) Mantiene permanencia, pero puede dejar a la familia insuficientemente protegida durante la etapa crítica.",
      "C) Puede cubrir bien la necesidad actual, pero descarta sin análisis la posibilidad de una necesidad permanente real.",
      "D) El potencial de inversión no garantiza el menor costo ni sustituye el análisis de cantidad de cobertura necesaria."
    ],
    distractor_condicional:"Si K no tuviera ninguna necesidad de por vida y solo necesitara protección durante un período definido, una solución exclusivamente a término podría ser suficiente."
  }]}
];

PK_MIGRATION_RUN_001_CANDIDATES.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_MIGRATION_RUN_001_CANDIDATES };
if (typeof window !== 'undefined') window.PK_MIGRATION_RUN_001_CANDIDATES = PK_MIGRATION_RUN_001_CANDIDATES;
