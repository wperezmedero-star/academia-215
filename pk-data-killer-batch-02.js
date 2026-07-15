// ============================================================
// PEARSON KILLER — pk-data-killer-batch-02.js
// LOTE 02 — generado a partir del patrón de las 10 preguntas aprobadas
// Tema: Tipos de Pólizas de Salud y cuentas de salud
// Estado inicial: revisión humana pendiente antes de cualquier uso en exam
// ============================================================

const PK_KILLER_BATCH_02 = [
{
  id:"killer_batch02_001",area:"salud",subtema_blueprint:"HMO",concepto:"HMO — Atención urgente fuera del área de servicio",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"L pertenece a un HMO cuyo PCP está en Tampa. Durante un viaje familiar a Jacksonville desarrolla fiebre alta, dolor intenso y síntomas que requieren atención el mismo día, pero el médico disponible no pertenece a la red. L no había avisado al plan que viajaría y todavía no ha cumplido su deducible anual. ¿Qué factor debe analizarse PRINCIPALMENTE para determinar cómo tratará el plan esa atención?",
    o:[
      "Si la atención encaja en una excepción del plan para urgencia o emergencia fuera del área de servicio, más que el hecho de que L estuviera viajando sin aviso previo",
      "Si L había cumplido el deducible antes del viaje, porque eso determina por sí solo si un proveedor fuera de la red puede ser cubierto",
      "Si el proveedor acepta después registrarse en la red, porque la cobertura depende de que la afiliación ocurra antes de facturar",
      "Si L había usado previamente a su PCP durante el mismo año, porque una visita previa sustituye cualquier autorización necesaria fuera del área"
    ],a:0,
    trampa:"El deducible, el viaje y la relación con el PCP son datos plausibles, pero la cuestión decisiva es si la situación entra en una excepción de cobertura fuera del área.",
    correcto:"En un HMO, la atención ordinaria fuera de la red suele estar restringida, pero situaciones de urgencia o emergencia pueden recibir un tratamiento distinto según el contrato y las reglas aplicables. El análisis principal es la naturaleza de la atención y la excepción correspondiente, no el simple hecho de viajar.",
    incorrectos:[
      "B) Cumplir el deducible no crea por sí solo cobertura fuera de la red.",
      "C) Una afiliación posterior del proveedor no suele transformar retroactivamente la condición de red al momento del servicio.",
      "D) Haber visto antes al PCP no sustituye automáticamente las reglas de acceso fuera del área."
    ],
    distractor_condicional:"Si L hubiera buscado una consulta rutinaria por conveniencia sin urgencia ni emergencia, la restricción ordinaria fuera de la red sería mucho más importante."
  }]},
{
  id:"killer_batch02_002",area:"salud",subtema_blueprint:"PPO",concepto:"PPO — Deducible separado fuera de la red",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"A tiene un PPO y ya cumplió el deducible aplicable a servicios dentro de la red. Decide realizarse una prueba programada con un centro fuera de la red porque consigue una cita más rápida. El plan le informa que aún puede deber más antes de que comiencen ciertos beneficios fuera de la red. ¿Cuál explicación es MÁS APROPIADA?",
    o:[
      "El plan puede aplicar una estructura de deducible distinta para beneficios fuera de la red, aunque A ya haya satisfecho el deducible dentro de la red",
      "Cumplir cualquier deducible del PPO obliga a que todos los servicios posteriores, dentro o fuera de la red, queden libres de deducible",
      "El centro fuera de la red debe usar el deducible de la red si A demuestra que eligió la cita más rápida disponible",
      "El deducible solo puede volver a aplicarse si A cambia formalmente de PPO durante el mismo año del plan"
    ],a:0,
    trampa:"La frase 'ya cumplió el deducible' invita a asumir que existe un único acumulador para toda la cobertura.",
    correcto:"Un PPO puede tener deducibles o acumuladores distintos para servicios dentro y fuera de la red. Haber cumplido el deducible de la red no significa necesariamente haber cumplido el aplicable a beneficios fuera de la red.",
    incorrectos:[
      "B) Un PPO puede separar el costo compartido según la red utilizada.",
      "C) La conveniencia o rapidez de la cita no obliga al plan a usar el deducible de la red.",
      "D) No hace falta cambiar de plan para que existan acumuladores distintos."
    ],
    distractor_condicional:"Si el contrato tuviera un único deducible combinado para ambos niveles, cumplirlo sí podría satisfacer el requisito aplicable a ambos."
  }]},
{
  id:"killer_batch02_003",area:"salud",subtema_blueprint:"EPO",concepto:"EPO — Proveedor no participante en atención programada",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"C está inscrita en una EPO y puede consultar especialistas de la red sin referido. Su cirujano de la red recomienda una instalación específica para un procedimiento programado, pero C descubre antes del servicio que esa instalación no participa en su plan. La fecha del procedimiento ya está reservada y C prefiere no retrasarlo. ¿Qué consideración es MÁS IMPORTANTE?",
    o:[
      "Que la recomendación provenga de un cirujano de la red no convierte por sí sola a la instalación fuera de la red en proveedor cubierto para atención programada",
      "Que el cirujano sea de la red obliga al plan a tratar como participantes a todos los proveedores e instalaciones que ese cirujano utilice",
      "Que no se requiera referido en una EPO significa que cualquier proveedor elegido por el paciente recibe al menos beneficios parciales fuera de la red",
      "Que la fecha ya esté reservada convierte el servicio en urgente y elimina la importancia de la red de la instalación"
    ],a:0,
    trampa:"La recomendación del médico de la red parece transmitir protección a la instalación, pero la participación suele evaluarse proveedor por proveedor.",
    correcto:"En una EPO, la atención programada ordinaria suele depender de utilizar proveedores participantes. La recomendación de un médico de la red no hace automáticamente participante a una instalación fuera de la red.",
    incorrectos:[
      "B) La condición de red no se transmite automáticamente entre proveedores relacionados con el mismo episodio.",
      "C) La ausencia de referido no equivale a beneficios ordinarios fuera de la red.",
      "D) Una reserva previa no transforma por sí sola un procedimiento programado en una urgencia o emergencia."
    ],
    distractor_condicional:"Si la situación fuera una emergencia verdadera y la instalación fuera la opción disponible para atención inmediata, el análisis sería distinto."
  }]},
{
  id:"killer_batch02_004",area:"salud",subtema_blueprint:"POS",concepto:"POS — PCP, red y auto-referencia",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"E tiene un plan POS. Su PCP le recomienda un ortopedista dentro de la red, pero E prefiere acudir por su cuenta a otro ortopedista fuera de la red. El contrato permite esa opción, aunque con mayor deducible y coaseguro. E piensa que, como ambos médicos son especialistas, el costo debería ser equivalente. ¿Cuál respuesta es MÁS APROPIADA?",
    o:[
      "El costo puede ser diferente porque el POS puede premiar la vía coordinada por PCP y aplicar mayor participación cuando el afiliado sale de la red por cuenta propia",
      "El costo debe ser equivalente porque la especialidad médica, no la vía de acceso ni la red, determina el nivel de beneficios",
      "El proveedor fuera de la red debe recibir el mismo nivel de beneficios si E informa al PCP después de la consulta",
      "El plan debe negar totalmente la consulta fuera de la red porque todo POS funciona igual que un HMO cerrado"
    ],a:0,
    trampa:"La similitud clínica entre ambos especialistas oculta que el POS puede aplicar niveles de costo distintos según la vía de acceso.",
    correcto:"Un POS puede ofrecer mejores beneficios cuando el miembro utiliza la red y la coordinación del PCP, y una cobertura más costosa cuando se auto-refiere o sale de la red.",
    incorrectos:[
      "B) La red y la vía de acceso pueden afectar el costo compartido aun tratándose de la misma especialidad.",
      "C) Una notificación posterior no convierte automáticamente una auto-referencia fuera de la red en atención coordinada dentro de la red.",
      "D) Un POS puede ofrecer ciertos beneficios fuera de la red."
    ],
    distractor_condicional:"Si E eligiera al especialista de la red recomendado por el PCP, podría recibir el nivel de beneficios más favorable del plan."
  }]},
{
  id:"killer_batch02_005",area:"salud",subtema_blueprint:"HDHP",concepto:"HDHP — Cobertura de medicamentos antes del deducible",variantes:[{
    nivel:5,tipo_trampa:"EXCEPCION_LEGAL",
    q:"Un empleador ofrece un HDHP elegible para HSA. El plan quiere pagar desde el primer dólar ciertos medicamentos relacionados con condiciones específicas, aun antes de que se cumpla el deducible. El administrador advierte que no basta con llamar 'preventivo' a cualquier medicamento. ¿Qué principio explica MEJOR su preocupación?",
    o:[
      "La cobertura antes del deducible debe encajar en una excepción permitida; la etiqueta interna del plan no transforma cualquier medicamento en atención preventiva permitida",
      "Todo medicamento recetado puede pagarse antes del deducible porque las reglas de HDHP solo se aplican a servicios médicos y hospitalarios",
      "Ningún medicamento puede recibir cobertura antes del deducible porque la excepción preventiva se limita a exámenes físicos",
      "La compatibilidad depende únicamente de que el empleador, y no el empleado, financie la prima del HDHP"
    ],a:0,
    trampa:"Dos distractores convierten una excepción limitada en una prohibición total o en un permiso total.",
    correcto:"Para conservar la condición de HDHP compatible con HSA, la cobertura previa al deducible debe ajustarse a las excepciones permitidas. La clasificación interna del plan por sí sola no basta.",
    incorrectos:[
      "B) Las reglas del HDHP también pueden afectar cómo se cubren medicamentos antes del deducible.",
      "C) La atención preventiva permitida no se limita únicamente a exámenes físicos.",
      "D) La fuente de la prima no sustituye las reglas sobre beneficios antes del deducible."
    ],
    distractor_condicional:"Si el medicamento encajara claramente en una categoría preventiva permitida, podría cubrirse antes del deducible sin perder por ese solo hecho la condición de HDHP."
  }]},
{
  id:"killer_batch02_006",area:"salud",subtema_blueprint:"HSA",concepto:"HSA — Cambio de cobertura a mitad de año",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"M fue elegible para HSA de enero a junio bajo un HDHP. El 1 de julio cambia a un plan que ya no cumple los requisitos para HSA. M había planeado aportar el límite anual completo en diciembre porque esperaba hacerlo en un solo depósito. ¿Qué debe considerar PRINCIPALMENTE?",
    o:[
      "Que la elegibilidad para contribuir se determina por meses y el límite aplicable puede requerir prorrateo o una regla especial, no simplemente asumir el límite anual completo",
      "Que puede aportar siempre el límite anual completo si el depósito se realiza antes del 31 de diciembre del mismo año",
      "Que pierde todo derecho a conservar el saldo HSA acumulado cuando deja de estar cubierto por un HDHP",
      "Que solo puede aportar por los meses en que realmente presentó reclamaciones médicas bajo el HDHP"
    ],a:0,
    trampa:"La fecha del depósito parece decisiva, pero la elegibilidad para aportar depende de la cobertura durante el año.",
    correcto:"La elegibilidad para HSA se analiza por mes y el límite de contribución puede depender del número de meses elegibles y de reglas especiales aplicables. Dejar el HDHP no elimina el saldo ya acumulado.",
    incorrectos:[
      "B) La fecha del depósito no crea elegibilidad para meses en los que no se cumplen los requisitos.",
      "C) El saldo existente de la HSA sigue perteneciendo al titular.",
      "D) La elegibilidad no depende de haber utilizado o no servicios médicos."
    ],
    distractor_condicional:"Si M hubiera permanecido elegible durante todos los meses del año, el límite anual completo podría ser aplicable sujeto a las demás reglas."
  }]},
{
  id:"killer_batch02_007",area:"salud",subtema_blueprint:"HSA",concepto:"HSA — Gastos calificados después de perder elegibilidad",variantes:[{
    nivel:4,tipo_trampa:"COMPARACION",
    q:"R deja su HDHP y pasa a un plan tradicional que no permite nuevas contribuciones a HSA. Meses después incurre en un gasto médico calificado y todavía conserva dinero en su HSA. R cree que, al perder la elegibilidad para aportar, también perdió el derecho a usar el saldo acumulado. ¿Cuál respuesta es MÁS CORRECTA?",
    o:[
      "Puede seguir usando el saldo existente para gastos médicos calificados aunque ya no sea elegible para realizar nuevas contribuciones",
      "Debe cerrar la HSA al perder el HDHP y transferir el saldo al nuevo plan antes de poder pagar gastos médicos",
      "Solo puede usar el saldo acumulado durante los 60 días siguientes a perder la elegibilidad para contribuir",
      "Puede conservar la cuenta, pero todo retiro posterior a la pérdida de elegibilidad se considera automáticamente no calificado"
    ],a:0,
    trampa:"La elegibilidad para aportar y la propiedad/uso del saldo son reglas distintas.",
    correcto:"Perder la elegibilidad para nuevas contribuciones no elimina la propiedad del saldo de la HSA ni impide usarlo para gastos médicos calificados.",
    incorrectos:[
      "B) No existe un requisito general de cerrar la HSA al dejar un HDHP.",
      "C) No existe una ventana general de 60 días para usar el saldo.",
      "D) La pérdida de elegibilidad para aportar no convierte automáticamente en no calificados los gastos posteriores."
    ],
    distractor_condicional:"Si R hiciera una nueva contribución durante un mes en que no fuera elegible, esa contribución sí requeriría un análisis distinto."
  }]},
{
  id:"killer_batch02_008",area:"salud",subtema_blueprint:"FSA",concepto:"FSA — Disponibilidad uniforme",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"B elige aportar $2,400 a una FSA de salud durante el año mediante deducciones mensuales de nómina. En febrero incurre en un gasto médico elegible de $1,800, aunque hasta ese momento solo se han descontado $400 de su salario. El empleado de nómina sostiene que la FSA solo puede reembolsar los $400 ya aportados. ¿Cuál respuesta es MÁS APROPIADA?",
    o:[
      "En una FSA de salud, el monto anual elegido puede estar disponible para reembolso desde el comienzo del período de cobertura, sujeto a las reglas del plan, aunque las deducciones salariales se hagan durante el año",
      "La FSA solo puede reembolsar lo ya descontado de la nómina porque funciona igual que una cuenta de ahorros personal",
      "La FSA puede adelantar el saldo únicamente si el empleador cobra intereses sobre la parte todavía no descontada",
      "La FSA debe esperar hasta que B cumpla al menos la mitad de su elección anual antes de pagar un gasto mayor que las aportaciones acumuladas"
    ],a:0,
    trampa:"La deducción gradual de nómina hace parecer que la FSA funciona como una cuenta bancaria con saldo limitado a lo depositado.",
    correcto:"La FSA de salud está sujeta a la regla de cobertura uniforme: el monto anual elegido puede estar disponible para gastos elegibles durante el período de cobertura, aunque las reducciones salariales ocurran gradualmente.",
    incorrectos:[
      "B) Una FSA de salud no funciona igual que una cuenta personal financiada solo con el saldo ya depositado.",
      "C) La disponibilidad uniforme no depende de cobrar intereses al empleado.",
      "D) No existe una regla general que exija alcanzar la mitad de la elección anual."
    ],
    distractor_condicional:"Si se tratara de una cuenta cuya disponibilidad dependiera estrictamente de los fondos ya depositados, el análisis sería diferente."
  }]},
{
  id:"killer_batch02_009",area:"salud",subtema_blueprint:"HRA",concepto:"HRA — Reembolso y propiedad de fondos",variantes:[{
    nivel:4,tipo_trampa:"COMPARACION",
    q:"Una empresa acredita $1,500 al año en una HRA para cada empleado. J ve ese monto en el portal y pregunta si puede retirarlo en efectivo al renunciar, ya que nunca presentó gastos médicos. Recursos Humanos explica que la cifra representa un beneficio de reembolso, no necesariamente una cuenta personal con dinero propio. ¿Cuál conclusión es MÁS APROPIADA?",
    o:[
      "El derecho de J depende de los términos de la HRA; un saldo acreditado no significa por sí solo que pueda retirarlo en efectivo como propiedad personal",
      "J puede exigir siempre el pago en efectivo porque cualquier saldo mostrado individualmente pertenece al empleado",
      "J pierde toda posibilidad de reembolso incluso por gastos elegibles incurridos antes de renunciar, sin importar el plazo de reclamaciones del plan",
      "La empresa debe convertir automáticamente la HRA en HSA al terminar el empleo para preservar el saldo no usado"
    ],a:0,
    trampa:"La apariencia de un saldo individual en un portal puede confundirse con propiedad personal y derecho de retiro.",
    correcto:"Una HRA es un arreglo de reembolso financiado por el empleador. Los derechos sobre montos no utilizados dependen del diseño del plan; un saldo visible no implica por sí solo propiedad personal ni derecho a efectivo.",
    incorrectos:[
      "B) La individualización del saldo no crea automáticamente propiedad personal.",
      "C) Puede existir un período para presentar reclamaciones por gastos incurridos mientras había cobertura.",
      "D) No existe una conversión automática de HRA a HSA al terminar el empleo."
    ],
    distractor_condicional:"Si el plan previera expresamente una forma de continuidad o acceso post-empleo, J podría conservar ciertos derechos de reembolso conforme a esos términos."
  }]},
{
  id:"killer_batch02_010",area:"salud",subtema_blueprint:"HRA",concepto:"HRA — Coordinación con cobertura del cónyuge",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"F está cubierto por el plan médico de su empleador y también puede recibir reembolsos de una HRA financiada por ese empleador. Su cónyuge tiene otra cobertura médica. Después de un gasto elegible, F pregunta si la HRA puede pagar automáticamente cualquier saldo restante sin revisar cómo coordinan los beneficios. ¿Qué respuesta es MÁS APROPIADA?",
    o:[
      "Debe revisarse el diseño de la HRA y las reglas de coordinación aplicables; la existencia de otra cobertura puede afectar qué gasto es reembolsable y en qué orden",
      "La HRA siempre paga primero porque está financiada directamente por el empleador de F",
      "La cobertura del cónyuge siempre paga primero porque pertenece a un empleador diferente",
      "La HRA queda anulada automáticamente durante cualquier mes en que F tenga acceso a otra cobertura médica"
    ],a:0,
    trampa:"Dos distractores convierten el orden de pago en una regla universal basada solo en quién patrocina cada beneficio.",
    correcto:"La coordinación depende del diseño del plan y de las reglas aplicables. No existe una regla universal de que la HRA o la cobertura del cónyuge paguen siempre primero por el solo hecho de quién las patrocina.",
    incorrectos:[
      "B) El patrocinio del empleador no fija por sí solo una prioridad universal de pago.",
      "C) Tener otro empleador como patrocinador tampoco crea una prioridad universal.",
      "D) La existencia de otra cobertura no anula automáticamente toda HRA."
    ],
    distractor_condicional:"Si el documento del plan estableciera una coordinación específica y válida para ese tipo de gasto, esa regla del plan sería decisiva."
  }]}
];

PK_KILLER_BATCH_02.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_BATCH_02 };
if (typeof window !== 'undefined') window.PK_KILLER_BATCH_02 = PK_KILLER_BATCH_02;
