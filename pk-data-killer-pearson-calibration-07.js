// ============================================================
// PEARSON KILLER — pk-data-killer-pearson-calibration-07.js
// LOTE 07 — Calibración Pearson Real: Anualidades y Retiro
// Estándar: dos distractores plausibles, reglas vecinas, longitud balanceada,
// una mejor respuesta sin pistas obvias. Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría con PK-PEARSON-REAL-CALIBRATION.md
// ============================================================

const PK_KILLER_PEARSON_CALIBRATION_07 = [
{
  id:"killer_pr07_001",area:"vida",subtema_blueprint:"Anualidades",concepto:"Anualidad inmediata vs diferida — objetivo de ingreso",variantes:[{
    nivel:5,tipo_trampa:"MEJOR_RESPUESTA",
    q:"A los 64 años, L recibe una suma considerable por la venta de un negocio. No necesita acceso inmediato a todo el capital, pero quiere que una parte comience a producir pagos periódicos dentro de unas semanas para cubrir gastos mensuales. También desea mantener otros activos separados para liquidez. ¿Qué alternativa responde MEJOR al objetivo descrito?",
    o:[
      "Destinar la porción elegida a una anualidad inmediata, porque el objetivo principal es comenzar una corriente de pagos en un plazo cercano",
      "Usar una anualidad diferida, porque toda anualidad exige primero un período prolongado de acumulación antes de poder distribuir ingresos",
      "Comprar una póliza de vida entera, porque cualquier producto con valor en efectivo está diseñado principalmente para producir ingresos mensuales inmediatos",
      "Mantener todo el dinero en una cuenta líquida, porque iniciar pagos periódicos y conservar otros activos para liquidez son objetivos incompatibles"
    ],a:0,
    trampa:"La segunda opción usa una regla real —la fase de acumulación de una anualidad diferida— pero la aplica a un cliente que quiere ingresos cercanos, no diferidos.",
    correcto:"Una anualidad inmediata se ajusta mejor cuando el propósito principal es convertir una suma en pagos que comiencen pronto. La necesidad de liquidez puede atenderse manteniendo otros activos fuera de la anualidad.",
    incorrectos:[
      "B) Describe correctamente una característica de las anualidades diferidas, pero no el objetivo temporal de este caso.",
      "C) Una póliza de vida puede acumular valor, pero no es la herramienta principal descrita para convertir de inmediato una suma en ingreso periódico.",
      "D) El cliente puede separar objetivos y no necesita elegir entre ingreso y liquidez para todo su patrimonio."
    ],
    distractor_condicional:"Si L quisiera posponer los pagos durante varios años y priorizar acumulación antes de recibir ingresos, una anualidad diferida sería más apropiada."
  }]},
{
  id:"killer_pr07_002",area:"vida",subtema_blueprint:"Anualidades",concepto:"Fija vs variable — quién asume el riesgo de inversión",variantes:[{
    nivel:5,tipo_trampa:"REGLA_VECINA",
    q:"M compara dos anualidades. En la primera, la aseguradora acredita una tasa conforme a las garantías y términos del contrato. En la segunda, el valor depende del desempeño de opciones de inversión seleccionadas por el titular. M pregunta quién soporta principalmente el riesgo de fluctuación del valor en cada caso. ¿Cuál respuesta es MÁS PRECISA?",
    o:[
      "En la fija, la aseguradora asume principalmente el riesgo asociado a sostener las garantías contractuales; en la variable, el titular asume el riesgo de mercado de las subcuentas elegidas",
      "En la fija, el titular asume el riesgo de mercado porque la tasa garantizada cambia directamente con cada movimiento bursátil; en la variable, la aseguradora garantiza el valor de las subcuentas",
      "En ambas, la aseguradora asume exactamente el mismo riesgo de inversión porque las dos son contratos de anualidad emitidos por una compañía de seguros",
      "En ambas, el titular asume todo el riesgo porque cualquier producto con acumulación elimina las obligaciones de garantía de la aseguradora"
    ],a:0,
    trampa:"Las opciones incorrectas mezclan dos verdades parciales: ambas son contratos de seguro, y ambas pueden acumular valor, pero eso no iguala la asignación del riesgo de inversión.",
    correcto:"La anualidad fija se apoya en garantías contractuales de la aseguradora, mientras en una variable el valor de las subcuentas fluctúa con el mercado y ese riesgo recae principalmente en el titular.",
    incorrectos:[
      "B) Invierte la asignación típica del riesgo entre fija y variable.",
      "C) Ser contratos de seguro no significa que el riesgo de inversión se distribuya de la misma manera.",
      "D) La existencia de acumulación no elimina las garantías de una anualidad fija."
    ],
    distractor_condicional:"Si la comparación fuera entre dos productos con garantías contractuales equivalentes y sin exposición a subcuentas, el análisis del riesgo sería distinto."
  }]},
{
  id:"killer_pr07_003",area:"vida",subtema_blueprint:"Anualidades",concepto:"Fase de acumulación vs fase de anualización",variantes:[{
    nivel:5,tipo_trampa:"SECUENCIA",
    q:"R ha mantenido durante años una anualidad diferida y ahora evalúa comenzar una modalidad de pagos periódicos. Antes de decidir, pregunta qué cambia conceptualmente cuando pasa de acumular valor a recibir una corriente de ingreso estructurada por el contrato. ¿Cuál afirmación distingue MEJOR ambas etapas?",
    o:[
      "Durante la acumulación el valor se construye dentro del contrato; al anualizar, ese valor se convierte en una corriente de pagos conforme a la opción elegida",
      "Durante la acumulación el contrato ya está pagando ingreso vitalicio, y la anualización solo cambia el nombre del beneficiario",
      "La anualización significa retirar una sola suma y cancelar necesariamente cualquier posibilidad de pagos periódicos",
      "No existe diferencia funcional entre ambas etapas porque toda anualidad paga y acumula exactamente de la misma forma desde el primer día"
    ],a:0,
    trampa:"La opción C usa un concepto real —retiro de suma global— pero lo presenta como si fuera sinónimo obligatorio de anualización.",
    correcto:"La fase de acumulación se centra en construir valor. La anualización convierte el valor del contrato en pagos conforme a una opción de liquidación o ingreso seleccionada.",
    incorrectos:[
      "B) Confunde la fase de acumulación con una fase de distribución ya iniciada.",
      "C) Un retiro total no es lo mismo que convertir el contrato en una corriente de pagos.",
      "D) Las etapas tienen funciones distintas dentro del contrato."
    ],
    distractor_condicional:"Si R eligiera un retiro total en vez de una opción de ingreso periódico, no estaría usando la anualización como mecanismo de pagos continuos."
  }]},
{
  id:"killer_pr07_004",area:"vida",subtema_blueprint:"Anualidades",concepto:"Anualidad conjunta y sobreviviente vs vida individual",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"Una pareja casada quiere usar una anualidad para generar ingreso durante la jubilación. Su prioridad no es maximizar el pago inicial, sino reducir el riesgo de que el cónyuge sobreviviente pierda por completo la corriente de ingresos cuando muera el primero. ¿Qué opción atiende MEJOR esa prioridad?",
    o:[
      "Una modalidad conjunta y de sobreviviente, porque puede continuar pagos mientras viva al menos uno de los dos conforme a los términos elegidos",
      "Una modalidad de vida individual sobre el cónyuge de mayor edad, porque normalmente un período de vida más corto permite asegurar ingreso para ambos por más tiempo",
      "Un retiro total al inicio, porque recibir todo el capital de una vez garantiza por definición ingreso vitalicio al cónyuge sobreviviente",
      "Una anualidad diferida sin seleccionar opción de pago, porque aplazar indefinidamente la distribución protege automáticamente a ambos de quedarse sin ingresos"
    ],a:0,
    trampa:"La opción B puede parecer atractiva porque un pago de vida individual puede ser mayor, pero no resuelve la prioridad principal del escenario: continuidad para el sobreviviente.",
    correcto:"La modalidad conjunta y de sobreviviente está diseñada para mantener una corriente de pagos mientras viva al menos uno de los asegurados, según la opción contractual seleccionada.",
    incorrectos:[
      "B) Puede aumentar el pago basado en una sola vida, pero no protege de la misma manera al cónyuge sobreviviente.",
      "C) Una suma global puede administrarse para producir ingresos, pero no garantiza por sí sola una corriente vitalicia.",
      "D) Diferir pagos no sustituye la selección de una opción que proteja al sobreviviente."
    ],
    distractor_condicional:"Si la prioridad principal fuera maximizar el pago mientras vive una sola persona y no proteger al sobreviviente, una opción de vida individual podría resultar más atractiva."
  }]},
{
  id:"killer_pr07_005",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"IRA tradicional vs Roth — momento del beneficio fiscal",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"Dos trabajadores analizan cuentas de retiro. E valora obtener un posible beneficio fiscal en el presente y acepta que las distribuciones futuras puedan tributar conforme a las reglas aplicables. F prefiere aportar dinero que ya fue gravado y busca distribuciones calificadas libres de impuesto en el futuro. ¿Qué comparación responde MEJOR a esas prioridades?",
    o:[
      "La IRA tradicional puede ajustarse mejor al objetivo de beneficio fiscal presente, mientras la Roth IRA se alinea con aportes después de impuestos y distribuciones calificadas libres de impuesto",
      "La Roth IRA se diseñó principalmente para deducir todas las aportaciones actuales, mientras la tradicional garantiza distribuciones futuras libres de impuesto",
      "Ambas producen siempre el mismo tratamiento fiscal porque la única diferencia entre ellas es el nombre del custodio",
      "La IRA tradicional y la Roth dejan de ser cuentas de retiro si el trabajador cambia de empleador"
    ],a:0,
    trampa:"La opción B intercambia dos características fiscales reales entre los productos, por lo que puede atraer a quien recuerda los conceptos pero no su dirección.",
    correcto:"En términos generales, la IRA tradicional puede ofrecer un beneficio fiscal actual sujeto a las reglas aplicables, mientras la Roth utiliza aportes después de impuestos y puede permitir distribuciones calificadas libres de impuesto.",
    incorrectos:[
      "B) Invierte el tratamiento fiscal general de tradicional y Roth.",
      "C) El tratamiento fiscal es una diferencia fundamental, no solo el custodio.",
      "D) Cambiar de empleador no elimina por sí solo la condición de cuenta de retiro individual."
    ],
    distractor_condicional:"Si E no calificara para una deducción actual o si F esperara un escenario fiscal diferente, la preferencia entre ambas podría cambiar."
  }]},
{
  id:"killer_pr07_006",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"401(k) vs IRA — plan del empleador y cuenta individual",variantes:[{
    nivel:5,tipo_trampa:"REGLA_VECINA",
    q:"G participa en un plan de retiro ofrecido por su empresa y además quiere ahorrar por separado en una cuenta individual. Un compañero le dice que un 401(k) y una IRA son el mismo tipo de arreglo y que solo cambia la institución financiera. ¿Cuál respuesta es MÁS CORRECTA?",
    o:[
      "Un 401(k) es un plan patrocinado por el empleador, mientras una IRA es una cuenta individual de retiro; pueden coexistir aunque sus reglas de aportación y tributación no sean idénticas",
      "Ambos son necesariamente planes del empleador porque cualquier cuenta de retiro requiere que la empresa controle las inversiones",
      "Una IRA sustituye automáticamente al 401(k) en cuanto el trabajador abre la cuenta, por lo que ya no puede participar en ambos",
      "Un 401(k) es una póliza de seguro de vida y una IRA es una anualidad, por lo que ninguno funciona como vehículo de retiro"
    ],a:0,
    trampa:"La similitud de propósito —ahorro para retiro— puede ocultar que uno es un plan patrocinado por el empleador y el otro una cuenta individual.",
    correcto:"El 401(k) es un plan de retiro patrocinado por el empleador. Una IRA es una cuenta individual. Un trabajador puede tener ambos, sujeto a las reglas que correspondan.",
    incorrectos:[
      "B) Una IRA no requiere patrocinio del empleador.",
      "C) Abrir una IRA no cancela automáticamente la participación en un 401(k).",
      "D) Confunde vehículos de retiro con productos de seguro específicos."
    ],
    distractor_condicional:"Si la pregunta comparara dos planes patrocinados por empleadores, la diferencia entre plan de empresa y cuenta individual ya no sería el criterio principal."
  }]},
{
  id:"killer_pr07_007",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Transferencia directa vs distribución al participante",variantes:[{
    nivel:5,tipo_trampa:"PROCESO",
    q:"H deja un empleo y quiere mover activos de un plan de retiro elegible a otro arreglo de retiro sin recibir personalmente el dinero. Su prioridad es reducir el riesgo de consecuencias fiscales y de retención asociadas a una distribución pagada directamente a él. ¿Qué mecanismo responde MEJOR a esa prioridad?",
    o:[
      "Una transferencia directa entre custodios o planes elegibles, porque evita que H reciba personalmente los fondos durante el movimiento",
      "Una distribución pagada primero a H para que la deposite después, porque recibir el cheque elimina cualquier regla de plazo o retención",
      "Un préstamo personal garantizado por el saldo, porque pedir dinero prestado convierte automáticamente el movimiento en una transferencia libre de impuestos",
      "Un retiro total seguido de la compra de cualquier inversión, porque el destino posterior del dinero determina por sí solo el tratamiento del retiro"
    ],a:0,
    trampa:"La opción B describe un rollover indirecto real, pero omite que recibir personalmente los fondos puede introducir reglas y riesgos que el cliente expresamente quiere evitar.",
    correcto:"Una transferencia directa mantiene el movimiento entre instituciones o arreglos elegibles sin que el participante tome posesión del dinero, reduciendo el riesgo de problemas asociados a una distribución pagada directamente a él.",
    incorrectos:[
      "B) Puede ser una vía de rollover, pero no es la que mejor reduce los riesgos descritos en el escenario.",
      "C) Un préstamo no es equivalente a una transferencia de activos de retiro.",
      "D) Reinvertir después no convierte cualquier retiro en una transferencia elegible."
    ],
    distractor_condicional:"Si H ya hubiera recibido una distribución elegible, habría que analizar las reglas aplicables a un rollover indirecto y sus plazos."
  }]},
{
  id:"killer_pr07_008",area:"vida",subtema_blueprint:"Planes de retiro",concepto:"Distribución mínima vs retiro voluntario — reconocer reglas distintas",variantes:[{
    nivel:5,tipo_trampa:"MEJOR_RESPUESTA",
    q:"Un jubilado afirma que todas las cuentas de retiro permiten dejar el dinero intacto indefinidamente mientras el titular no necesite ingresos. Su asesor responde que ciertas cuentas pueden estar sujetas a reglas que obligan a comenzar distribuciones conforme a la edad y al tipo de cuenta. ¿Cuál conclusión es MÁS APROPIADA?",
    o:[
      "Debe identificarse el tipo exacto de cuenta y aplicar las reglas de distribución correspondientes, en lugar de asumir que toda cuenta puede diferir retiros indefinidamente",
      "Toda cuenta de retiro exige comenzar distribuciones exactamente en el mismo momento porque las reglas son idénticas para todos los vehículos",
      "Ninguna cuenta de retiro puede exigir distribuciones mientras el titular tenga otras fuentes de ingreso suficientes",
      "La obligación de distribuir depende únicamente del rendimiento de las inversiones y no del tipo de cuenta ni de las reglas fiscales aplicables"
    ],a:0,
    trampa:"La opción B se apoya en una idea verdadera —existen reglas de distribución obligatoria— pero la convierte en una regla uniforme para todas las cuentas.",
    correcto:"Las reglas de distribución obligatoria dependen del tipo de cuenta y de las normas aplicables. No es correcto asumir ni que todas son iguales ni que todas pueden diferir retiros indefinidamente.",
    incorrectos:[
      "B) Las reglas no son necesariamente idénticas para todos los tipos de cuenta.",
      "C) Tener otras fuentes de ingreso no elimina por sí solo una obligación de distribución aplicable.",
      "D) El rendimiento de las inversiones no sustituye las reglas del tipo de cuenta."
    ],
    distractor_condicional:"Si la cuenta concreta no estuviera sujeta a una distribución obligatoria en ese momento, el titular podría tener mayor flexibilidad para diferir retiros."
  }]}
];

PK_KILLER_PEARSON_CALIBRATION_07.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_PEARSON_CALIBRATION_07 };
if (typeof window !== 'undefined') window.PK_KILLER_PEARSON_CALIBRATION_07 = PK_KILLER_PEARSON_CALIBRATION_07;
