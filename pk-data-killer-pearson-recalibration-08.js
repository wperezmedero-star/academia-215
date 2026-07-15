// ============================================================
// PEARSON KILLER — pk-data-killer-pearson-recalibration-08.js
// LOTE 08 — Recalibración Pearson Real
// Regla central: al menos dos opciones seriamente tentadoras,
// distractores basados en reglas vecinas auténticas y una sola mejor respuesta.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_PEARSON_RECALIBRATION_08 = [
{
  id:"killer_pr08_001",area:"vida",subtema_blueprint:"Anualidades",concepto:"Surrender vs annuitization — liquidez y consecuencias",variantes:[{
    nivel:5,tipo_trampa:"MEJOR_RESPUESTA",
    q:"C tiene una anualidad diferida con valor acumulado. Necesita una suma importante para una compra puntual, pero también quiere conservar la posibilidad de usar el contrato más adelante para ingresos periódicos. Un amigo le dice que debe anualizar todo el contrato para obtener dinero. ¿Cuál alternativa responde MEJOR a la situación descrita?",
    o:[
      "Evaluar un retiro o rescate parcial permitido por el contrato, porque puede proporcionar liquidez sin convertir necesariamente todo el valor en una corriente irrevocable de pagos",
      "Anualizar el contrato completo, porque cualquier acceso al valor acumulado exige convertir toda la cuenta en pagos periódicos",
      "Solicitar un préstamo sobre la anualidad, porque las anualidades funcionan igual que las pólizas de vida con valor en efectivo",
      "Transferir inmediatamente el contrato a una IRA, porque toda necesidad de liquidez convierte una anualidad en una cuenta de retiro individual"
    ],a:0,
    trampa:"La opción B usa un mecanismo real —la anualización— pero lo aplica a una necesidad puntual de liquidez que no exige necesariamente convertir todo el contrato en pagos.",
    correcto:"Un retiro o rescate parcial, si el contrato lo permite, puede atender una necesidad puntual de liquidez sin obligar a anualizar todo el contrato. La conveniencia exacta depende de cargos y consecuencias aplicables.",
    incorrectos:[
      "B) La anualización es una vía para convertir valor en pagos, pero no es el único mecanismo para acceder a fondos.",
      "C) Una anualidad no debe tratarse automáticamente como una póliza de vida con préstamo sobre valor en efectivo.",
      "D) Una necesidad de liquidez no transforma por sí sola el contrato en una IRA."
    ],
    distractor_condicional:"Si C quisiera convertir de forma permanente el valor en una corriente estructurada de ingresos, la anualización podría ser más apropiada."
  }]},
{
  id:"killer_pr08_002",area:"vida",subtema_blueprint:"Anualidades",concepto:"1035 exchange — diferimiento fiscal vs acceso al efectivo",variantes:[{
    nivel:5,tipo_trampa:"REGLA_VECINA",
    q:"D está inconforme con una anualidad y quiere mover su valor a otra anualidad sin recibir personalmente el dinero. Su asesor menciona un intercambio 1035. D pregunta si ese mecanismo sirve también para retirar el dinero libremente y usarlo en gastos personales sin consecuencias. ¿Cuál respuesta es MÁS PRECISA?",
    o:[
      "El intercambio 1035 puede permitir mover valor entre contratos elegibles sin reconocimiento fiscal inmediato, pero no convierte un retiro para uso personal en una distribución no tributable",
      "El intercambio 1035 permite sacar el dinero para cualquier gasto personal siempre que luego se compre otra inversión",
      "Recibir primero el dinero y decidir después qué hacer produce el mismo tratamiento que una transferencia directa entre contratos elegibles",
      "El intercambio 1035 solo existe para cuentas bancarias y planes 401(k), no para contratos de anualidad"
    ],a:0,
    trampa:"La opción B mezcla una regla verdadera —el diferimiento fiscal de ciertos intercambios— con una conclusión falsa sobre retirar fondos para uso personal.",
    correcto:"La sección 1035 puede permitir un intercambio directo entre contratos elegibles sin reconocimiento fiscal inmediato, pero no convierte una distribución para uso personal en una transacción libre de impuestos.",
    incorrectos:[
      "B) Un intercambio elegible no equivale a retirar fondos para gastos personales.",
      "C) La forma del movimiento puede ser decisiva; recibir personalmente los fondos no es necesariamente equivalente a un intercambio directo.",
      "D) Los intercambios 1035 sí se relacionan con ciertos contratos de seguros y anualidades."
    ],
    distractor_condicional:"Si el valor se moviera directamente entre contratos elegibles y se cumplieran las demás condiciones, podría mantenerse el diferimiento fiscal."
  }]},
{
  id:"killer_pr08_003",area:"vida",subtema_blueprint:"Anualidades",concepto:"Life income vs period certain — prioridad de ingreso y legado",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"E quiere una opción de pago de anualidad que le proporcione ingresos mientras viva, pero también teme fallecer poco después de comenzar los pagos y que no quede nada para sus beneficiarios. ¿Qué alternativa atiende MEJOR ambas preocupaciones?",
    o:[
      "Una opción de vida con período cierto, porque combina ingreso vitalicio con pagos garantizados durante un plazo mínimo si E muere antes de completarlo",
      "Una opción de vida pura, porque maximizar el pago individual también garantiza que los beneficiarios recibirán el saldo restante",
      "Una opción de suma global, porque recibir todo al inicio garantiza por definición ingreso de por vida y protección para herederos",
      "Una anualidad diferida sin opción de pago, porque mantener la acumulación elimina el riesgo de morir después de iniciar beneficios"
    ],a:0,
    trampa:"La opción B usa una característica real —un pago potencialmente mayor en vida pura— pero no resuelve la preocupación por un período mínimo de pagos a beneficiarios.",
    correcto:"Una modalidad de vida con período cierto puede pagar durante toda la vida del titular y, si este muere dentro del período garantizado, continuar los pagos restantes a un beneficiario conforme al contrato.",
    incorrectos:[
      "B) Una opción de vida pura puede maximizar el pago, pero normalmente no ofrece el mismo período garantizado a beneficiarios.",
      "C) Una suma global puede dejar patrimonio, pero no garantiza por sí sola ingreso vitalicio.",
      "D) Seguir acumulando no responde al objetivo de comenzar una corriente de pagos."
    ],
    distractor_condicional:"Si E priorizara maximizar el pago mensual y no le preocupara dejar pagos pendientes a beneficiarios, una opción de vida pura podría ser más apropiada."
  }]},
{
  id:"killer_pr08_004",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Traditional vs Roth — retiro actual y expectativa fiscal",variantes:[{
    nivel:5,tipo_trampa:"MEJOR_RESPUESTA",
    q:"F espera estar en una tasa impositiva más alta durante la jubilación y valora pagar impuestos ahora para reducir la carga fiscal de distribuciones calificadas futuras. Sin embargo, también sabe que una aportación tradicional podría ofrecer un beneficio fiscal presente si reúne los requisitos. ¿Qué conclusión responde MEJOR a la prioridad principal de F?",
    o:[
      "La Roth IRA puede alinearse mejor con su prioridad de pagar impuestos ahora a cambio de potenciales distribuciones calificadas libres de impuesto en el futuro",
      "La IRA tradicional es necesariamente mejor porque cualquier deducción actual siempre supera el valor de una distribución futura libre de impuesto",
      "Ambas son equivalentes para F porque la expectativa de tasa futura no influye en la comparación entre tratamiento fiscal actual y futuro",
      "La Roth IRA deja de ser cuenta de retiro si F también participa en un plan patrocinado por su empleador"
    ],a:0,
    trampa:"La opción B usa un beneficio real —la posible deducción actual— pero ignora la prioridad explícita del escenario sobre el tratamiento fiscal futuro.",
    correcto:"Dada la prioridad descrita, la Roth IRA puede encajar mejor porque usa aportes después de impuestos y puede permitir distribuciones calificadas libres de impuesto, sujeto a las reglas aplicables.",
    incorrectos:[
      "B) Una deducción actual puede ser valiosa, pero no necesariamente domina la prioridad fiscal futura de F.",
      "C) La expectativa sobre tasas futuras sí puede ser relevante al comparar ambos tratamientos.",
      "D) Participar en otro plan no elimina por sí solo la naturaleza de una Roth IRA."
    ],
    distractor_condicional:"Si F priorizara reducir su ingreso imponible actual y esperara una tasa menor en jubilación, la IRA tradicional podría resultar más atractiva."
  }]},
{
  id:"killer_pr08_005",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Rollover direct vs indirect — control del dinero",variantes:[{
    nivel:5,tipo_trampa:"PROCESO",
    q:"G deja una empresa y quiere mover fondos de su plan de retiro a una IRA. Quiere evitar recibir personalmente el dinero porque teme equivocarse con plazos o retenciones. Un compañero le dice que recibir el cheque primero le da más control y por eso siempre es la vía más segura. ¿Cuál respuesta es MEJOR?",
    o:[
      "Una transferencia directa suele ajustarse mejor a la prioridad de G porque reduce los riesgos asociados a recibir personalmente una distribución y luego intentar completar el rollover",
      "Un rollover indirecto es necesariamente mejor porque recibir el dinero elimina cualquier retención y cualquier plazo para volver a depositarlo",
      "Un retiro total seguido de una nueva aportación a la IRA es equivalente porque el destino final del dinero determina por sí solo el tratamiento",
      "Mantener el dinero en efectivo hasta decidir una inversión conserva automáticamente el carácter de activo de retiro"
    ],a:0,
    trampa:"La opción B describe una vía real —el rollover indirecto— pero invierte precisamente los riesgos que G quiere evitar.",
    correcto:"Si G quiere minimizar el riesgo operativo asociado a recibir los fondos, una transferencia directa suele ser la vía más alineada con su prioridad.",
    incorrectos:[
      "B) Recibir personalmente una distribución puede introducir reglas de plazo y retención.",
      "C) El uso posterior del dinero no convierte automáticamente cualquier retiro en rollover elegible.",
      "D) Conservar efectivo fuera de un arreglo elegible no mantiene por sí solo el tratamiento de retiro."
    ],
    distractor_condicional:"Si G ya hubiera recibido una distribución elegible, entonces habría que analizar cuidadosamente las reglas de un rollover indirecto."
  }]},
{
  id:"killer_pr08_006",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"401(k) loan vs hardship distribution — acceso temporal vs salida del plan",variantes:[{
    nivel:5,tipo_trampa:"REGLA_VECINA",
    q:"H necesita dinero por una emergencia y su plan 401(k) permite tanto préstamos como distribuciones por dificultad bajo ciertas condiciones. H quiere acceso temporal a fondos y espera reponerlos al plan. ¿Qué opción atiende MEJOR ese objetivo?",
    o:[
      "Un préstamo del plan, si está permitido y H puede cumplir el calendario de pago, porque está diseñado para devolver los fondos al plan en vez de tratarlos como una distribución definitiva",
      "Una distribución por dificultad, porque toda distribución de ese tipo debe devolverse al plan mediante pagos mensuales",
      "Un retiro total del 401(k), porque cerrar la cuenta es la única forma de usar dinero para una emergencia",
      "Una transferencia a una HSA, porque cualquier emergencia convierte fondos de retiro en fondos médicos libres de restricciones"
    ],a:0,
    trampa:"La opción B usa un mecanismo real de acceso por necesidad, pero no coincide con la prioridad específica de devolver los fondos al plan.",
    correcto:"Si el plan permite préstamos y H puede cumplir sus condiciones, ese mecanismo se alinea mejor con el objetivo de acceso temporal y reembolso al plan.",
    incorrectos:[
      "B) Una distribución por dificultad no es simplemente un préstamo que deba devolverse con pagos mensuales.",
      "C) No es necesario liquidar toda la cuenta para acceder a fondos si existen mecanismos permitidos.",
      "D) Los fondos de un 401(k) no se convierten automáticamente en HSA por existir una emergencia."
    ],
    distractor_condicional:"Si H no pudiera o no quisiera devolver fondos y calificara para una distribución por dificultad, ese mecanismo podría ser el relevante."
  }]},
{
  id:"killer_pr08_007",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"RMD — obligación vs necesidad de ingreso",variantes:[{
    nivel:5,tipo_trampa:"MEJOR_RESPUESTA",
    q:"J tiene varias fuentes de ingreso y afirma que no necesita retirar dinero de sus cuentas de retiro. Su asesor le explica que la necesidad económica personal no siempre determina si debe comenzar ciertas distribuciones. ¿Cuál conclusión es MÁS APROPIADA?",
    o:[
      "Debe identificarse el tipo exacto de cuenta y aplicar las reglas de distribución correspondientes, porque una obligación de retiro puede existir aunque J no necesite el dinero para gastos",
      "J puede ignorar cualquier distribución obligatoria mientras tenga suficientes ingresos de otras fuentes",
      "Todas las cuentas de retiro permiten diferir retiros indefinidamente si el titular presenta una declaración escrita de que no necesita fondos",
      "La obligación de retirar depende únicamente de si las inversiones generaron ganancias durante el año"
    ],a:0,
    trampa:"La opción B se apoya en una idea intuitiva —no retirar lo que no se necesita— pero confunde necesidad personal con reglas fiscales del tipo de cuenta.",
    correcto:"La existencia de otras fuentes de ingreso no elimina por sí sola una obligación de distribución aplicable. Debe analizarse el tipo de cuenta y las reglas vigentes.",
    incorrectos:[
      "B) La necesidad económica no sustituye las reglas del tipo de cuenta.",
      "C) No existe una regla general de declaración para evitar indefinidamente distribuciones obligatorias.",
      "D) El rendimiento anual no es el único factor que determina una obligación de distribución."
    ],
    distractor_condicional:"Si la cuenta concreta no estuviera sujeta a una distribución obligatoria en ese momento, J podría mantener mayor control sobre cuándo retirar."
  }]},
{
  id:"killer_pr08_008",area:"vida",subtema_blueprint:"Anualidades",concepto:"Variable annuity — suitability y horizonte",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"K, de 58 años, tiene un horizonte largo y acepta fluctuaciones de mercado a cambio de potencial de crecimiento. Sin embargo, también afirma que necesita que el valor de su cuenta no baje nunca y que quiere acceso completo al dinero en cualquier momento sin cargos. ¿Qué conclusión es MÁS APROPIADA al evaluar una anualidad variable?",
    o:[
      "La tolerancia al riesgo y el horizonte pueden apoyar considerar una anualidad variable, pero sus exigencias de valor sin caídas y liquidez total deben analizarse porque pueden entrar en conflicto con las características del producto",
      "La anualidad variable es automáticamente adecuada porque un horizonte largo elimina cualquier riesgo de pérdida y cualquier restricción de liquidez",
      "La anualidad variable es necesariamente inadecuada para toda persona mayor de 55 años, aunque tenga horizonte largo y tolere volatilidad",
      "La necesidad de liquidez total se resuelve simplemente eligiendo subcuentas conservadoras, porque eso elimina cargos y restricciones contractuales"
    ],a:0,
    trampa:"La opción B usa dos datos favorables reales —horizonte largo y tolerancia al riesgo— pero los convierte en una conclusión automática que ignora objetivos incompatibles.",
    correcto:"La idoneidad no depende de un solo dato. El horizonte y la tolerancia al riesgo pueden ser favorables, pero la exigencia de no perder valor y mantener liquidez total puede ser incompatible con una anualidad variable y sus términos.",
    incorrectos:[
      "B) Horizonte y tolerancia al riesgo no eliminan volatilidad ni restricciones contractuales.",
      "C) La edad por sí sola no determina automáticamente idoneidad o inidoneidad.",
      "D) Elegir inversiones conservadoras no elimina por sí solo cargos o restricciones del contrato."
    ],
    distractor_condicional:"Si K aceptara volatilidad y pudiera comprometer una parte del dinero a un horizonte largo sin necesidad de liquidez inmediata, el producto podría encajar mejor."
  }]}
];

PK_KILLER_PEARSON_RECALIBRATION_08.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PEARSON_RECALIBRATION_08 };
if (typeof window !== 'undefined') window.PK_KILLER_PEARSON_RECALIBRATION_08 = PK_KILLER_PEARSON_RECALIBRATION_08;
