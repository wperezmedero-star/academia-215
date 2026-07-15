// ============================================================
// PEARSON KILLER — pk-data-killer-medicare-ltc-05.js
// LOTE 05 — Medicare / Medigap / Cuidado a Largo Plazo (LTC)
// Generado a partir de patrones Killer aprobados. Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría humana breve.
// ============================================================

const PK_KILLER_MEDICARE_LTC_05 = [
{
  id:"killer_ml05_001",area:"salud",subtema_blueprint:"Medicare",concepto:"Medicare — Parte A vs Parte B",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"N, de 67 años, pregunta qué parte de Medicare se relaciona principalmente con una hospitalización como paciente internado y cuál se relaciona más con servicios médicos ambulatorios. ¿Qué respuesta distingue MEJOR ambas coberturas?",
    o:[
      "La Parte A se asocia principalmente con hospitalización y ciertos servicios institucionales; la Parte B con servicios médicos y ambulatorios cubiertos",
      "La Parte A cubre principalmente medicamentos recetados al por menor y la Parte B únicamente atención dental de rutina",
      "La Parte A y la Parte B son dos nombres para la misma cobertura y solo cambia la forma de pagar la prima",
      "La Parte B reemplaza a la Parte A cuando el beneficiario recibe atención fuera del estado donde reside"
    ],a:0,
    trampa:"La pregunta exige separar funciones generales de las Partes A y B sin confundirlas con medicamentos o redes.",
    correcto:"La Parte A se vincula principalmente con atención hospitalaria e institucional cubierta, mientras la Parte B se relaciona con servicios médicos y ambulatorios cubiertos.",
    incorrectos:[
      "B) Confunde la Parte A con beneficios de medicamentos recetados y añade una limitación falsa a la Parte B.",
      "C) Parte A y Parte B cubren categorías distintas de servicios.",
      "D) Viajar o recibir atención en otro estado no convierte automáticamente una parte en otra."
    ],
    distractor_condicional:"Si la pregunta tratara de cobertura de medicamentos recetados, habría que analizar una parte o plan distinto."
  }]},
{
  id:"killer_ml05_002",area:"salud",subtema_blueprint:"Medicare",concepto:"Medicare — Original Medicare vs Medicare Advantage",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"R compara dos formas de recibir beneficios de Medicare. Una opción mantiene la cobertura federal tradicional de las Partes A y B; otra ofrece los beneficios a través de un plan privado aprobado por Medicare que puede usar una red y reglas propias del plan. ¿Qué diferencia identifica MEJOR las dos opciones?",
    o:[
      "La primera describe Medicare Original y la segunda un plan Medicare Advantage, que administra los beneficios mediante un plan privado aprobado",
      "La primera describe Medicare Advantage y la segunda Medigap, porque todo plan privado que use red es un suplemento",
      "Ambas opciones son Medigap porque las dos se usan junto con Medicare para cubrir gastos médicos",
      "La segunda reemplaza permanentemente la elegibilidad federal de Medicare y deja de estar sujeta a requisitos de Medicare"
    ],a:0,
    trampa:"Se confunden tres conceptos distintos: Medicare Original, Medicare Advantage y Medigap.",
    correcto:"Medicare Original es la cobertura federal tradicional de las Partes A y B. Medicare Advantage es una forma alternativa de recibir beneficios de Medicare mediante un plan privado aprobado.",
    incorrectos:[
      "B) Medigap no es la forma privada de administrar los beneficios de Medicare como un plan Advantage.",
      "C) Medicare Original y Medicare Advantage no son ambos pólizas Medigap.",
      "D) Un plan Advantage sigue operando dentro del marco de Medicare."
    ],
    distractor_condicional:"Si R permaneciera en Medicare Original y comprara una póliza para ayudar con ciertos costos compartidos, entonces Medigap sería el concepto relevante."
  }]},
{
  id:"killer_ml05_003",area:"salud",subtema_blueprint:"Medigap",concepto:"Medigap — Complemento de Medicare Original",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"P tiene Medicare Original y desea reducir ciertos costos de bolsillo que quedan después de que Medicare paga su parte. Un agente le explica una póliza estandarizada diseñada para ayudar con algunos de esos costos. ¿Qué producto describe MEJOR esa necesidad?",
    o:[
      "Una póliza Medigap, diseñada para complementar Medicare Original respecto de determinados costos compartidos y beneficios definidos",
      "Un plan Medicare Advantage, que necesariamente se añade encima de Medicare Original como segundo pagador",
      "Una póliza de cuidado a largo plazo, porque todo gasto no pagado por Medicare se considera automáticamente LTC",
      "Una HSA, porque cualquier beneficiario de Medicare puede abrirla y usarla para complementar todas las brechas de cobertura"
    ],a:0,
    trampa:"El término 'complementar Medicare' puede confundirse con Advantage, LTC o cuentas de salud.",
    correcto:"Medigap está diseñado para complementar Medicare Original respecto de ciertos costos compartidos y beneficios definidos por la póliza.",
    incorrectos:[
      "B) Medicare Advantage es una forma alternativa de recibir beneficios, no una póliza que normalmente se superpone a Medicare Original como Medigap.",
      "C) No todo gasto no pagado por Medicare es cuidado a largo plazo.",
      "D) La elegibilidad para contribuir a una HSA se afecta al estar cubierto por Medicare."
    ],
    distractor_condicional:"Si P eligiera recibir sus beneficios mediante un plan privado que sustituye la administración de Medicare Original, habría que analizar Medicare Advantage."
  }]},
{
  id:"killer_ml05_004",area:"salud",subtema_blueprint:"Medigap",concepto:"Medigap — Relación con Medicare Advantage",variantes:[{
    nivel:5,tipo_trampa:"CUAL_NO",
    q:"Un consumidor está inscrito en un plan Medicare Advantage y pregunta por qué no debe tratar una póliza Medigap como si fuera una capa adicional diseñada para cubrir los copagos de ese plan. ¿Cuál explicación es MÁS CORRECTA?",
    o:[
      "Medigap está diseñado para complementar Medicare Original, no para funcionar normalmente como suplemento de un plan Medicare Advantage",
      "Medigap solo puede venderse a personas menores de 65 años y por eso no puede relacionarse con Medicare Advantage",
      "Medicare Advantage y Medigap son el mismo producto con nombres distintos según la aseguradora",
      "Toda póliza Medigap se convierte automáticamente en Medicare Advantage cuando el asegurado cambia de red"
    ],a:0,
    trampa:"La palabra 'suplemento' invita a pensar que Medigap puede añadirse a cualquier forma de cobertura de Medicare.",
    correcto:"Medigap se diseñó para trabajar con Medicare Original y no como cobertura suplementaria normal de un plan Medicare Advantage.",
    incorrectos:[
      "B) La relación entre Medigap y Medicare Advantage no depende de una regla general de edad como esa.",
      "C) Son productos distintos con funciones diferentes.",
      "D) Una póliza Medigap no se transforma automáticamente en Medicare Advantage."
    ],
    distractor_condicional:"Si el consumidor regresara a Medicare Original y cumpliera las reglas aplicables para obtener Medigap, el análisis sería distinto."
  }]},
{
  id:"killer_ml05_005",area:"salud",subtema_blueprint:"Medicare",concepto:"Medicare — Cobertura de medicamentos",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"T tiene Medicare Original y necesita cobertura para medicamentos recetados que compra regularmente en farmacia. ¿Qué principio debe recordar al analizar su cobertura?",
    o:[
      "La cobertura de medicamentos recetados al por menor se analiza por separado de las funciones generales de las Partes A y B y puede requerir cobertura específica de medicamentos",
      "La Parte A cubre automáticamente todos los medicamentos recetados ambulatorios una vez que T ha tenido una hospitalización durante el año",
      "La Parte B reemplaza toda cobertura de medicamentos si el médico escribe la receta durante una consulta cubierta",
      "Medigap está diseñado principalmente para sustituir cualquier plan de medicamentos recetados que T pudiera necesitar"
    ],a:0,
    trampa:"La existencia de una receta médica puede hacer parecer que la Parte B cubre automáticamente cualquier medicamento adquirido en farmacia.",
    correcto:"La cobertura de medicamentos recetados al por menor se analiza separadamente y puede requerir cobertura específica de medicamentos, en vez de asumir que Partes A o B cubren todo medicamento recetado.",
    incorrectos:[
      "B) Una hospitalización previa no crea cobertura universal de medicamentos ambulatorios.",
      "C) Que un médico escriba la receta no convierte automáticamente el medicamento en un beneficio general de Parte B.",
      "D) Medigap no está diseñado como sustituto general de la cobertura específica de medicamentos."
    ],
    distractor_condicional:"Si el medicamento fuera administrado en un entorno o bajo una categoría cubierta de forma distinta, habría que analizar las reglas específicas del servicio."
  }]},
{
  id:"killer_ml05_006",area:"salud",subtema_blueprint:"LTC",concepto:"LTC — Actividades de la vida diaria",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"A puede administrar sus finanzas y hablar por teléfono sin ayuda, pero necesita asistencia continua para bañarse, vestirse y trasladarse de la cama a una silla. Al evaluar una póliza de cuidado a largo plazo, ¿qué dato es MÁS RELEVANTE?",
    o:[
      "La necesidad de ayuda con varias actividades de la vida diaria puede ser un factor central para activar beneficios conforme a los términos de la póliza",
      "La capacidad de usar el teléfono impide cualquier reclamación porque demuestra independencia suficiente",
      "La necesidad de ayuda solo cuenta si A también está hospitalizado como paciente internado",
      "La edad de A determina por sí sola si los beneficios deben pagarse, sin importar su capacidad funcional"
    ],a:0,
    trampa:"Datos de independencia parcial pueden distraer del deterioro funcional en varias actividades esenciales.",
    correcto:"Las pólizas LTC suelen evaluar la capacidad para realizar actividades de la vida diaria y otros criterios definidos en la póliza. La necesidad de ayuda con varias de esas actividades puede ser decisiva.",
    incorrectos:[
      "B) Ser independiente en una actividad instrumental no elimina necesariamente la limitación en actividades básicas.",
      "C) LTC no depende de estar hospitalizado como paciente internado para toda reclamación.",
      "D) La edad por sí sola no sustituye los criterios funcionales o cognitivos aplicables."
    ],
    distractor_condicional:"Si A pudiera realizar de forma independiente las actividades básicas exigidas por la póliza, el análisis de elegibilidad sería distinto."
  }]},
{
  id:"killer_ml05_007",area:"salud",subtema_blueprint:"LTC",concepto:"LTC — Deterioro cognitivo",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"M puede físicamente bañarse y vestirse, pero debido a un deterioro cognitivo importante necesita supervisión constante para evitar riesgos graves. Un familiar cree que una póliza LTC nunca puede pagar porque M aún puede realizar físicamente varias actividades diarias. ¿Cuál respuesta es MÁS APROPIADA?",
    o:[
      "El deterioro cognitivo grave puede ser un criterio separado de activación de beneficios si cumple las definiciones y condiciones de la póliza",
      "La capacidad física para vestirse elimina automáticamente toda posibilidad de beneficio LTC",
      "La póliza solo puede pagar si M también necesita cirugía o atención hospitalaria aguda",
      "El deterioro cognitivo solo importa después de que el asegurado agota todos sus bienes personales"
    ],a:0,
    trampa:"La capacidad física parcial puede ocultar un criterio distinto basado en deterioro cognitivo y necesidad de supervisión.",
    correcto:"Además de limitaciones en actividades de la vida diaria, muchas pólizas LTC consideran un deterioro cognitivo grave conforme a sus definiciones y requisitos.",
    incorrectos:[
      "B) La capacidad física en algunas actividades no elimina por sí sola un criterio cognitivo separado.",
      "C) LTC no requiere necesariamente cirugía o atención aguda hospitalaria.",
      "D) El agotamiento de bienes no es un requisito universal para activar una póliza privada LTC."
    ],
    distractor_condicional:"Si M no tuviera deterioro cognitivo grave ni limitaciones funcionales suficientes, la elegibilidad podría no activarse."
  }]},
{
  id:"killer_ml05_008",area:"salud",subtema_blueprint:"LTC",concepto:"LTC — Período de eliminación",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"C cumple los criterios de beneficio de su póliza LTC, pero la póliza incluye un período de eliminación. C piensa que la aseguradora debe empezar a pagar el mismo día en que aparece la necesidad de cuidado. ¿Qué debe entender?",
    o:[
      "El período de eliminación puede exigir que transcurra un período definido de servicios o días elegibles antes de que comiencen los pagos, según la póliza",
      "El período de eliminación es una exclusión permanente que impide cobrar beneficios por esa condición",
      "El período de eliminación solo se aplica a primas, nunca al momento en que comienzan los beneficios",
      "Cumplir los criterios de beneficio obliga a la aseguradora a ignorar cualquier período de eliminación incluido en el contrato"
    ],a:0,
    trampa:"Se confunden tres conceptos: elegibilidad, inicio de pagos y exclusión permanente.",
    correcto:"Una persona puede cumplir los criterios de beneficio y aun tener que satisfacer el período de eliminación antes de que comiencen los pagos, conforme a la póliza.",
    incorrectos:[
      "B) Un período de eliminación no es lo mismo que una exclusión permanente.",
      "C) Se relaciona con el inicio de beneficios, no solo con primas.",
      "D) Cumplir criterios no borra automáticamente otras condiciones contractuales válidas."
    ],
    distractor_condicional:"Si la póliza no tuviera período de eliminación, los pagos podrían comenzar conforme a otras condiciones aplicables."
  }]},
{
  id:"killer_ml05_009",area:"salud",subtema_blueprint:"LTC",concepto:"LTC — Inflación y duración del beneficio",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"Dos pólizas LTC tienen el mismo beneficio diario inicial, pero una incluye una característica de protección contra inflación y la otra no. El comprador tiene 52 años y espera conservar la cobertura por muchos años. ¿Qué diferencia es MÁS IMPORTANTE?",
    o:[
      "La protección contra inflación puede ayudar a que el valor del beneficio crezca con el tiempo, lo que puede ser relevante frente al aumento futuro de costos de cuidado",
      "La protección contra inflación garantiza que todos los gastos de cuidado estarán cubiertos sin límite ni período de eliminación",
      "La póliza sin protección contra inflación aumenta automáticamente su beneficio cada vez que sube el costo real de un servicio",
      "Ambas pólizas tendrán necesariamente el mismo poder adquisitivo futuro porque parten del mismo beneficio diario"
    ],a:0,
    trampa:"El mismo beneficio inicial puede ocultar diferencias importantes en el valor futuro de la cobertura.",
    correcto:"Una característica de inflación puede aumentar el beneficio conforme a la forma definida en la póliza, ayudando a conservar mayor poder de compra frente a costos futuros.",
    incorrectos:[
      "B) La protección contra inflación no elimina otros límites o condiciones contractuales.",
      "C) Sin una característica contractual, el beneficio no aumenta automáticamente con cada alza real de costos.",
      "D) El mismo valor inicial no garantiza igual poder adquisitivo futuro."
    ],
    distractor_condicional:"Si ambas pólizas incluyeran la misma fórmula de ajuste por inflación, habría que comparar otros elementos."
  }]},
{
  id:"killer_ml05_010",area:"salud",subtema_blueprint:"LTC",concepto:"LTC — Atención en casa vs institución",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"F desea una póliza LTC porque quiere permanecer en casa si algún día necesita ayuda. Un amigo le dice que el cuidado a largo plazo solo se refiere a residencias de ancianos. ¿Qué debe revisar F en la póliza?",
    o:[
      "Qué entornos y servicios cubre la póliza, porque una cobertura LTC puede incluir atención domiciliaria y otros niveles de cuidado además de una institución",
      "Nada: toda póliza LTC cubre exactamente los mismos servicios en casa y en instituciones sin diferencias contractuales",
      "Solo la habitación en una residencia, porque los servicios en casa nunca pueden formar parte de una póliza LTC",
      "Únicamente si F ya recibe Medicare, porque el cuidado domiciliario LTC depende de estar inscrito primero en Medicare"
    ],a:0,
    trampa:"El estereotipo de que LTC equivale solo a residencia institucional oculta la variedad de servicios que puede contemplar una póliza.",
    correcto:"Las pólizas LTC pueden cubrir distintos entornos y servicios, incluidos algunos cuidados en el hogar, según el contrato. Debe revisarse exactamente qué cubre la póliza.",
    incorrectos:[
      "B) Los contratos pueden diferir en servicios, límites y condiciones.",
      "C) El cuidado en casa puede formar parte de la cobertura LTC.",
      "D) Medicare no es un requisito universal para que exista cobertura privada LTC en casa."
    ],
    distractor_condicional:"Si la póliza concreta limitara ciertos beneficios a entornos específicos, esa limitación contractual sería decisiva."
  }]},
{
  id:"killer_ml05_011",area:"salud",subtema_blueprint:"Medicare/LTC",concepto:"Medicare vs LTC — Cuidado custodial prolongado",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"Una familia supone que Medicare pagará indefinidamente cualquier ayuda diaria que un adulto mayor necesite en casa o en una institución, aunque la necesidad sea principalmente custodial y prolongada. ¿Cuál corrección es MÁS APROPIADA?",
    o:[
      "Medicare no debe asumirse como cobertura general e indefinida de cuidado custodial prolongado; la cobertura LTC responde a una necesidad distinta y depende de sus propios términos",
      "Medicare cubre de forma ilimitada todo cuidado custodial mientras el beneficiario tenga más de 65 años",
      "Una póliza LTC solo puede pagar después de que Medicare haya cubierto primero al menos un año completo de cuidado",
      "Medicare y LTC son equivalentes porque ambos pagan cualquier servicio que ayude con actividades diarias"
    ],a:0,
    trampa:"La palabra 'cuidado' hace parecer intercambiables programas que responden a necesidades y reglas distintas.",
    correcto:"Medicare no debe asumirse como un programa general de cobertura indefinida para cuidado custodial prolongado. Las pólizas LTC se diseñan para riesgos distintos y operan bajo sus propios requisitos.",
    incorrectos:[
      "B) La edad por sí sola no crea cobertura ilimitada de cuidado custodial.",
      "C) No existe una regla universal que exija un año previo de cobertura de Medicare antes de LTC.",
      "D) Medicare y LTC no son equivalentes ni cubren automáticamente los mismos servicios."
    ],
    distractor_condicional:"Si el servicio fuera atención médica especializada cubierta bajo reglas específicas de Medicare, el análisis podría ser diferente."
  }]},
{
  id:"killer_ml05_012",area:"salud",subtema_blueprint:"Medicare/Medigap/LTC",concepto:"Diferencias entre Medicare Advantage Medigap y LTC",variantes:[{
    nivel:5,tipo_trampa:"CUAL_NO",
    q:"Un agente explica diferencias generales entre Medicare Advantage, Medigap y una póliza de cuidado a largo plazo. ¿Cuál afirmación es MENOS CORRECTA?",
    o:[
      "Medicare Advantage es una forma alternativa de recibir beneficios de Medicare mediante un plan privado aprobado",
      "Medigap está diseñado para complementar Medicare Original respecto de ciertos costos y beneficios definidos",
      "Una póliza LTC puede enfocarse en necesidades prolongadas de cuidado y criterios funcionales o cognitivos definidos",
      "Los tres productos son intercambiables porque todos sustituyen de la misma manera a Medicare Original"
    ],a:3,
    trampa:"Los tres se relacionan con necesidades de salud de adultos mayores, pero tienen funciones estructuralmente diferentes.",
    correcto:"Medicare Advantage, Medigap y LTC no son productos intercambiables. Cumplen funciones distintas y operan bajo reglas diferentes.",
    incorrectos:[
      "A) Describe correctamente la función general de Medicare Advantage.",
      "B) Describe correctamente el papel general de Medigap.",
      "C) Describe correctamente una función general de la cobertura LTC."
    ],
    distractor_condicional:"Si la pregunta solo indicara que los tres pueden relacionarse con gastos de salud o cuidado, existiría una similitud general, pero no equivalencia funcional."
  }]}
];

PK_KILLER_MEDICARE_LTC_05.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_MEDICARE_LTC_05 };
if (typeof window !== 'undefined') window.PK_KILLER_MEDICARE_LTC_05 = PK_KILLER_MEDICARE_LTC_05;
