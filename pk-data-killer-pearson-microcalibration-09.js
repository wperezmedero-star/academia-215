// ============================================================
// PEARSON KILLER — pk-data-killer-pearson-microcalibration-09.js
// LOTE 09 — Microcalibración Pearson Real
// Objetivo: tres opciones plausibles y una sola mejor por un matiz decisivo.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría estricta.
// ============================================================

const PK_KILLER_PEARSON_MICROCALIBRATION_09 = [
{
  id:"killer_pr09_001",area:"vida",subtema_blueprint:"Anualidades",concepto:"Liquidez vs ingreso garantizado",variantes:[{
    nivel:5,tipo_trampa:"PRIORIDAD_DOMINANTE",
    q:"M, de 63 años, dispone de una suma que no necesitará para gastos ordinarios durante varios años. Quiere una fuente futura de ingreso predecible, pero insiste en que podría necesitar una parte del capital para una emergencia importante antes de iniciar esos pagos. ¿Qué enfoque responde MEJOR a las dos prioridades sin asumir que una sola característica resuelve todo?",
    o:[
      "Separar la parte destinada a liquidez de la parte destinada al objetivo de ingreso, y evaluar la anualidad solo para el capital que realmente puede comprometerse",
      "Colocar toda la suma en una anualidad orientada a ingreso, porque la existencia de valor contractual garantiza acceso completo al capital en cualquier momento",
      "Mantener toda la suma líquida, porque cualquier necesidad potencial de emergencia hace incompatible el uso de una anualidad para una porción del patrimonio",
      "Elegir la anualidad con el pago proyectado más alto, porque un mayor ingreso futuro compensa cualquier limitación de acceso al capital"
    ],a:0,
    trampa:"B y C parten de preocupaciones reales —ingreso y liquidez— pero las convierten en soluciones absolutas. La mejor respuesta reconoce que los objetivos pueden separarse por porciones del patrimonio.",
    correcto:"Cuando el cliente tiene dos objetivos distintos, una solución razonable puede ser asignar activos distintos a cada uno. Eso evita forzar a un solo producto a cumplir simultáneamente funciones que pueden entrar en tensión.",
    incorrectos:[
      "B) Tener valor contractual no implica acceso completo y sin condiciones en todo momento.",
      "C) Una necesidad potencial de liquidez no obliga necesariamente a excluir una anualidad para todos los activos.",
      "D) Maximizar el pago proyectado no resuelve por sí solo la necesidad de acceso al capital."
    ],
    distractor_condicional:"Si M no necesitara liquidez y priorizara exclusivamente ingreso futuro, comprometer una porción mayor a la estrategia de ingreso podría ser razonable."
  }]},
{
  id:"killer_pr09_002",area:"vida",subtema_blueprint:"Anualidades",concepto:"Vida pura vs período cierto",variantes:[{
    nivel:5,tipo_trampa:"DOS_RESPUESTAS_TENTADORAS",
    q:"P desea el mayor ingreso periódico posible mientras viva, pero también comenta que le desagradaría morir poco después de comenzar los pagos y no dejar nada pendiente a su hija. ¿Qué opción refleja MEJOR el conflicto entre esas prioridades?",
    o:[
      "Una modalidad de vida con período cierto puede sacrificar parte del pago potencial de una vida pura a cambio de una garantía mínima para beneficiarios",
      "Una modalidad de vida pura atiende mejor ambas prioridades porque normalmente ofrece mayor ingreso y conserva automáticamente pagos para beneficiarios",
      "Una modalidad conjunta y sobreviviente es necesariamente la mejor porque cualquier preocupación por un beneficiario exige usar dos vidas como base del pago",
      "Una suma global elimina el conflicto porque recibir todo al inicio equivale económicamente a una garantía vitalicia con beneficio para herederos"
    ],a:0,
    trampa:"B es tentadora porque sí puede ofrecer un pago mayor, pero no resuelve la segunda prioridad. La clave es reconocer el intercambio entre nivel de ingreso y garantía residual.",
    correcto:"Una opción de vida con período cierto busca equilibrar ingreso vitalicio con una garantía mínima de pagos si el titular fallece temprano. Normalmente ese beneficio adicional puede reducir el pago frente a una vida pura.",
    incorrectos:[
      "B) Puede favorecer el ingreso, pero no ofrece automáticamente la misma protección para beneficiarios.",
      "C) La preocupación por una hija beneficiaria no convierte por sí sola el caso en una necesidad de ingreso sobre dos vidas.",
      "D) Una suma global puede dejar patrimonio, pero no equivale por sí sola a ingreso vitalicio garantizado."
    ],
    distractor_condicional:"Si P priorizara exclusivamente maximizar el ingreso mientras viva, una opción de vida pura podría ser más coherente."
  }]},
{
  id:"killer_pr09_003",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Roth vs tradicional — prioridad actual vs futura",variantes:[{
    nivel:5,tipo_trampa:"MATIZ_FISCAL",
    q:"R puede ser elegible para un beneficio fiscal actual con una aportación tradicional, pero espera una tasa impositiva más alta en la jubilación y valora especialmente reducir impuestos sobre distribuciones calificadas futuras. ¿Qué conclusión es MÁS APROPIADA?",
    o:[
      "La Roth puede alinearse mejor con la prioridad principal de R, aunque eso no significa que el posible beneficio fiscal actual de una aportación tradicional carezca de valor",
      "La tradicional es necesariamente superior porque cualquier ahorro fiscal actual siempre vale más que un posible beneficio fiscal futuro",
      "Ambas son equivalentes porque la tasa impositiva esperada en la jubilación no cambia la comparación entre pagar impuestos ahora o después",
      "La Roth solo sería relevante si R no pudiera participar en ningún plan de retiro ofrecido por su empleador"
    ],a:0,
    trampa:"B parte de una ventaja real de la opción tradicional, pero la convierte en una regla universal que ignora la prioridad explícita del escenario.",
    correcto:"La mejor respuesta debe seguir la prioridad dominante del cliente. Una Roth puede ser más coherente con quien acepta pagar impuestos ahora y valora distribuciones calificadas futuras libres de impuesto, sin negar que una opción tradicional pueda tener ventajas actuales.",
    incorrectos:[
      "B) El valor relativo de un beneficio fiscal actual y uno futuro depende de las circunstancias; no existe una superioridad universal.",
      "C) La expectativa fiscal futura sí puede ser relevante.",
      "D) Participar en un plan del empleador no elimina automáticamente la posible utilidad de una Roth."
    ],
    distractor_condicional:"Si R priorizara reducir ingreso imponible actual y esperara una tasa menor en la jubilación, la comparación podría favorecer una opción tradicional."
  }]},
{
  id:"killer_pr09_004",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Rollover directo vs indirecto",variantes:[{
    nivel:5,tipo_trampa:"PROCESO_Y_RIESGO",
    q:"S quiere mover fondos de un plan de retiro a otro arreglo elegible. Valora tener control sobre el dinero, pero su prioridad principal es evitar errores de plazo, retención o redepósito. ¿Qué alternativa responde MEJOR a esa prioridad?",
    o:[
      "Un movimiento directo entre arreglos elegibles, porque reduce los riesgos que aparecen cuando el participante recibe personalmente una distribución",
      "Un rollover indirecto, porque recibir primero el dinero siempre ofrece más control sin añadir requisitos adicionales",
      "Un retiro seguido de una nueva aportación, porque cualquier depósito posterior a una cuenta de retiro produce el mismo tratamiento que un rollover",
      "Mantener temporalmente el dinero fuera del sistema de retiro, porque el origen de los fondos conserva automáticamente su tratamiento fiscal"
    ],a:0,
    trampa:"B es atractiva porque el control personal es real, pero contradice la prioridad dominante: minimizar riesgos operativos y fiscales del tránsito de fondos.",
    correcto:"Cuando la prioridad es reducir errores de proceso, un movimiento directo suele ser más coherente porque evita que el participante tome posesión de los fondos durante la transferencia.",
    incorrectos:[
      "B) El control personal puede aumentar, pero también pueden aparecer reglas y riesgos adicionales.",
      "C) Un retiro y una aportación posterior no son automáticamente equivalentes a un rollover elegible.",
      "D) Sacar los fondos del arreglo elegible no preserva por sí solo su tratamiento."
    ],
    distractor_condicional:"Si S ya hubiera recibido una distribución, entonces el análisis tendría que centrarse en las reglas del rollover indirecto."
  }]},
{
  id:"killer_pr09_005",area:"vida",subtema_blueprint:"Anualidades",concepto:"Variable annuity — tolerancia al riesgo vs necesidad de garantía",variantes:[{
    nivel:5,tipo_trampa:"CONFLICTO_DE_OBJETIVOS",
    q:"T tiene horizonte largo y tolera fluctuaciones moderadas, dos datos que podrían apoyar una inversión con exposición al mercado. Sin embargo, afirma que no aceptaría ver disminuir el valor de la cuenta en ningún momento. ¿Qué conclusión es MÁS APROPIADA al evaluar una anualidad variable?",
    o:[
      "Los datos favorables no bastan por sí solos; la exigencia de ausencia de pérdidas puede entrar en conflicto con la exposición al mercado propia del producto",
      "El horizonte largo hace que la tolerancia a pérdidas sea irrelevante porque toda caída de mercado se recupera antes de la jubilación",
      "La tolerancia moderada al riesgo basta para considerar adecuada cualquier anualidad variable, aunque el cliente exija garantía total del valor",
      "La necesidad de garantía se resuelve simplemente seleccionando subcuentas conservadoras, porque eso elimina por completo el riesgo de fluctuación"
    ],a:0,
    trampa:"B, C y D se apoyan en elementos reales —horizonte, tolerancia y selección de inversiones— pero los usan para borrar un conflicto que sigue existiendo.",
    correcto:"La idoneidad depende de reconciliar todas las prioridades relevantes. Un horizonte largo y cierta tolerancia al riesgo no eliminan la contradicción de exigir que el valor nunca disminuya.",
    incorrectos:[
      "B) Un horizonte largo no garantiza recuperación ni elimina la importancia de la tolerancia a pérdidas.",
      "C) La tolerancia moderada no hace compatible automáticamente una exigencia de garantía total.",
      "D) Una selección más conservadora puede reducir riesgo, pero no elimina necesariamente toda fluctuación ni otras características contractuales."
    ],
    distractor_condicional:"Si T aceptara fluctuaciones y pudiera mantener el contrato durante un horizonte largo, la evaluación podría ser más favorable."
  }]},
{
  id:"killer_pr09_006",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Préstamo 401(k) vs distribución por dificultad",variantes:[{
    nivel:5,tipo_trampa:"OBJETIVO_TEMPORAL",
    q:"U necesita fondos por una emergencia. Su plan permite tanto un préstamo como una distribución por dificultad bajo ciertas condiciones. U espera estabilizar sus finanzas en pocos meses y quiere, si es posible, devolver el dinero al plan. ¿Qué mecanismo responde MEJOR a esa intención?",
    o:[
      "Un préstamo del plan, si está permitido y U puede cumplir sus condiciones de pago, porque coincide mejor con la intención de acceso temporal y devolución",
      "Una distribución por dificultad, porque precisamente está diseñada para que el participante devuelva luego el dinero al plan en cuotas",
      "Cualquiera de los dos es equivalente, porque el hecho de que exista una emergencia determina por sí solo el mismo tratamiento para ambos",
      "Un retiro total, porque cuando existe necesidad urgente los mecanismos parciales dejan de ser relevantes"
    ],a:0,
    trampa:"B es tentadora porque sí responde a una necesidad financiera real, pero no coincide con la intención específica de devolver los fondos al plan.",
    correcto:"Si el plan permite préstamos y el participante puede cumplir el calendario de pago, ese mecanismo suele ajustarse mejor a quien busca acceso temporal y devolución de los fondos.",
    incorrectos:[
      "B) Una distribución por dificultad no funciona simplemente como un préstamo que deba devolverse en cuotas.",
      "C) Ambos mecanismos pueden tener consecuencias y reglas distintas.",
      "D) La existencia de una emergencia no obliga a liquidar toda la cuenta."
    ],
    distractor_condicional:"Si U no pudiera asumir un calendario de pago y cumpliera los requisitos de una distribución por dificultad, la alternativa relevante podría cambiar."
  }]}
];

PK_KILLER_PEARSON_MICROCALIBRATION_09.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PEARSON_MICROCALIBRATION_09 };
if (typeof window !== 'undefined') window.PK_KILLER_PEARSON_MICROCALIBRATION_09 = PK_KILLER_PEARSON_MICROCALIBRATION_09;