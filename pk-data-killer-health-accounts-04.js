// ============================================================
// PEARSON KILLER — pk-data-killer-health-accounts-04.js
// LOTE 04 — HDHP / HSA / FSA / HRA
// Generado a partir de patrones Killer aprobados. Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría humana breve.
// ============================================================

const PK_KILLER_HEALTH_ACCOUNTS_04 = [
{
  id:"killer_ha04_001",area:"salud",subtema_blueprint:"HSA",concepto:"HSA — Elegibilidad mensual y cambio de cobertura",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"D fue elegible para HSA de enero a agosto bajo un HDHP. El 1 de septiembre cambia a una cobertura que ya no cumple los requisitos. En noviembre quiere aportar el límite anual completo porque no había hecho aportes durante los primeros meses. ¿Qué debe analizar PRINCIPALMENTE?",
    o:[
      "La elegibilidad mensual y cualquier regla especial aplicable, porque la fecha del depósito no crea elegibilidad para meses en que D ya no cumplía los requisitos",
      "El saldo de su HSA al 31 de agosto, porque un saldo bajo permite compensar meses posteriores de inelegibilidad con una aportación mayor",
      "La fecha de su primer gasto médico después del cambio, porque la pérdida de elegibilidad empieza solo cuando utiliza la nueva cobertura",
      "La fecha en que cierre el año fiscal, porque toda aportación hecha antes del 31 de diciembre se trata como elegible sin importar la cobertura"
    ],a:0,
    trampa:"La fecha del depósito y el uso de la nueva cobertura parecen decisivos, pero la elegibilidad para contribuir se analiza por meses.",
    correcto:"La elegibilidad HSA se determina por mes. Cambiar a una cobertura no elegible puede limitar la aportación permitida, sujeto a reglas especiales aplicables; hacer el depósito más tarde no crea elegibilidad retroactiva.",
    incorrectos:[
      "B) El saldo existente no compensa meses de inelegibilidad para nuevas contribuciones.",
      "C) El uso efectivo de la cobertura no determina cuándo comienza la inelegibilidad.",
      "D) La fecha del depósito no sustituye los requisitos mensuales de elegibilidad."
    ],
    distractor_condicional:"Si D hubiera mantenido elegibilidad durante todos los meses del año, el límite anual completo podría ser aplicable sujeto a las demás reglas."
  }]},
{
  id:"killer_ha04_002",area:"salud",subtema_blueprint:"HSA",concepto:"HSA — Medicare retroactivo y aportes",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"R, de 66 años, solicita Medicare Parte A en diciembre mientras sigue trabajando. Había realizado aportes mensuales a su HSA durante todo el año y descubre que la fecha efectiva de Parte A puede ser retroactiva. ¿Cuál es la MEJOR acción antes de asumir que todos los aportes fueron elegibles?",
    o:[
      "Revisar la fecha efectiva real de Medicare y comparar esa fecha con los meses en que hizo aportes a la HSA",
      "Revisar únicamente la fecha en que recibió la tarjeta de Medicare, porque la cobertura no existe antes de que llegue por correo",
      "Revisar la fecha del último aporte, porque todo aporte anterior a la solicitud queda protegido aunque la cobertura sea retroactiva",
      "Revisar si utilizó servicios de Medicare, porque la inelegibilidad para HSA comienza solo con el primer reclamo"
    ],a:0,
    trampa:"Solicitud, recepción de la tarjeta y primer uso son fechas intuitivas, pero la regla depende de la fecha efectiva de cobertura.",
    correcto:"La elegibilidad para contribuir a una HSA termina desde el primer mes en que Medicare es efectivo. Si Parte A tiene efecto retroactivo, pueden existir aportes realizados para meses de inelegibilidad.",
    incorrectos:[
      "B) La fecha de recepción de la tarjeta no sustituye la fecha efectiva de cobertura.",
      "C) Una solicitud posterior no protege automáticamente aportes de meses alcanzados por retroactividad.",
      "D) La cobertura, no el primer uso, determina la elegibilidad para nuevas contribuciones."
    ],
    distractor_condicional:"Si Medicare no tuviera efecto hasta enero del año siguiente, los aportes del año actual podrían no verse afectados por esa cobertura."
  }]},
{
  id:"killer_ha04_003",area:"salud",subtema_blueprint:"FSA",concepto:"FSA — Regla de disponibilidad uniforme",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"L elige $2,400 para una FSA de salud mediante deducciones mensuales. En febrero incurre en un gasto elegible de $1,600 cuando solo se han descontado $400 de su nómina. Nómina le dice que la FSA solo puede reembolsar lo ya aportado. ¿Qué respuesta es MÁS APROPIADA?",
    o:[
      "La FSA de salud puede tener disponible la elección anual para gastos elegibles durante el período de cobertura, aunque las deducciones salariales se realicen gradualmente",
      "La FSA debe limitar el reembolso a $400 porque su saldo disponible funciona igual que una cuenta bancaria personal",
      "La FSA puede adelantar el resto solo si L acepta devolverlo con intereses mediante nómina",
      "La FSA debe esperar hasta que L haya financiado al menos la mitad de la elección anual antes de reembolsar más de lo acumulado"
    ],a:0,
    trampa:"La financiación gradual por nómina hace parecer que la cuenta solo puede pagar lo ya depositado.",
    correcto:"La regla de cobertura uniforme permite que la elección anual de una FSA de salud esté disponible para reembolsar gastos elegibles durante el período de cobertura, aunque las reducciones salariales ocurran gradualmente.",
    incorrectos:[
      "B) La FSA de salud no funciona como una cuenta personal limitada al efectivo ya depositado.",
      "C) La disponibilidad uniforme no depende de cobrar intereses al participante.",
      "D) No existe una regla general que exija financiar primero la mitad de la elección anual."
    ],
    distractor_condicional:"Si se tratara de una cuenta cuya disponibilidad dependiera estrictamente de fondos ya depositados, el resultado sería diferente."
  }]},
{
  id:"killer_ha04_004",area:"salud",subtema_blueprint:"FSA",concepto:"FSA — Gasto incurrido antes de terminar el empleo",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"P termina su empleo el 30 de junio. El 20 de junio había pagado un gasto médico elegible, pero todavía no lo había presentado a la FSA. El plan permite un período posterior para presentar reclamaciones por gastos incurridos mientras existía cobertura. ¿Qué es MÁS PROBABLE?",
    o:[
      "P puede todavía presentar la reclamación dentro del plazo permitido porque el gasto se incurrió antes de terminar su participación",
      "P pierde automáticamente el derecho al reembolso el mismo día en que termina el empleo, aunque el gasto se hubiera incurrido antes",
      "P puede presentar cualquier gasto nuevo incurrido después del 30 de junio mientras quede saldo en la FSA",
      "P debe transferir primero el saldo de la FSA a una HSA antes de presentar la reclamación pendiente"
    ],a:0,
    trampa:"La terminación del empleo se confunde con la fecha de incurrencia del gasto y con el plazo de presentación de reclamaciones.",
    correcto:"Un gasto elegible incurrido mientras P participaba en la FSA puede seguir siendo reembolsable si la reclamación se presenta dentro del período permitido por el plan.",
    incorrectos:[
      "B) La terminación no borra necesariamente el derecho a reclamar un gasto ya incurrido durante la cobertura.",
      "C) Un gasto nuevo posterior a la terminación requiere un análisis distinto y posible continuidad aplicable.",
      "D) No existe un requisito general de transferir una FSA a una HSA para presentar una reclamación."
    ],
    distractor_condicional:"Si el gasto se hubiera incurrido después de terminar la participación y no existiera continuidad aplicable, el análisis sería distinto."
  }]},
{
  id:"killer_ha04_005",area:"salud",subtema_blueprint:"HRA",concepto:"HRA — Propiedad y saldo visible",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"J ve $1,800 en el portal de su HRA y $3,000 en una HSA que abrió años antes. Al cambiar de empleo, asume que ambos saldos deben seguirlo porque aparecen a su nombre. ¿Qué diferencia es MÁS IMPORTANTE?",
    o:[
      "La HSA pertenece a su titular; el uso futuro de la HRA depende de los términos del plan del empleador y de cualquier continuidad aplicable",
      "Ambos saldos son propiedad personal porque cualquier monto mostrado individualmente pertenece al trabajador",
      "La HRA es siempre más portable que la HSA porque fue financiada por el empleador",
      "La HSA deja de pertenecer a J si el nuevo empleo no ofrece un HDHP compatible"
    ],a:0,
    trampa:"La individualización visual del saldo parece indicar propiedad, pero HRA y HSA tienen estructuras distintas.",
    correcto:"La HSA pertenece al individuo y permanece con él. La HRA es un arreglo financiado por el empleador y los derechos sobre montos no usados dependen del diseño del plan.",
    incorrectos:[
      "B) La apariencia de un saldo individual no determina propiedad jurídica.",
      "C) Una HRA no es por ello más portable que una HSA.",
      "D) Perder elegibilidad para nuevas contribuciones no elimina la propiedad del saldo HSA existente."
    ],
    distractor_condicional:"Si la HRA previera expresamente acceso post-empleo, J podría conservar ciertos derechos de reembolso conforme a esos términos."
  }]},
{
  id:"killer_ha04_006",area:"salud",subtema_blueprint:"HRA",concepto:"HRA general y compatibilidad con HSA",variantes:[{
    nivel:5,tipo_trampa:"EXCEPCION_LEGAL",
    q:"Una empresa ofrece un HDHP y una HRA que reembolsa gastos médicos generales desde el primer dólar. Recursos Humanos quiere mantener ese diseño y permitir aportes a HSA. Un asesor propone reducir el límite anual de HSA para compensar la HRA. ¿Cuál recomendación es MÁS APROPIADA?",
    o:[
      "Rediseñar la HRA de forma compatible, por ejemplo como HRA de propósito limitado o post-deducible, si se cumplen las reglas aplicables",
      "Mantener la HRA sin cambios y reducir el límite de HSA, porque una contribución menor corrige la existencia de otra cobertura",
      "Mantener la HRA sin cambios y exigir que los empleados gasten primero la HSA antes de pedir reembolsos",
      "Eliminar la HSA, porque ninguna HRA puede coexistir con una HSA bajo ningún diseño"
    ],a:0,
    trampa:"Los distractores cambian montos u orden de uso, pero el problema real es qué cubre la HRA y cuándo comienza a reembolsar.",
    correcto:"Una HRA de propósito general que paga antes del deducible puede ser cobertura descalificante. Diseños compatibles, como una HRA de propósito limitado o post-deducible, pueden preservar elegibilidad HSA si cumplen las reglas aplicables.",
    incorrectos:[
      "B) Reducir el monto de la contribución no elimina otra cobertura descalificante.",
      "C) El orden de uso no transforma por sí solo la naturaleza de la HRA.",
      "D) Algunas HRA sí pueden coexistir con una HSA mediante diseño compatible."
    ],
    distractor_condicional:"Si la HRA ya estuviera limitada a dental y visión o empezara después del deducible aplicable, el análisis podría favorecer la compatibilidad."
  }]},
{
  id:"killer_ha04_007",area:"salud",subtema_blueprint:"HDHP",concepto:"HDHP — Preventivo vs etiqueta del plan",variantes:[{
    nivel:5,tipo_trampa:"EXCEPCION_LEGAL",
    q:"Un HDHP quiere cubrir antes del deducible un programa que el empleador llama 'preventivo'. El programa incluye servicios que no necesariamente encajan en las excepciones permitidas para cobertura previa al deducible. ¿Cuál principio es MÁS IMPORTANTE?",
    o:[
      "La cobertura previa al deducible debe encajar en una excepción permitida; la etiqueta interna del plan no convierte cualquier servicio en atención preventiva válida",
      "Todo servicio que el empleador describa como preventivo puede pagarse antes del deducible sin afectar la condición de HDHP",
      "Ningún servicio puede pagarse antes del deducible, incluso si las reglas permiten una excepción preventiva específica",
      "La compatibilidad depende únicamente de quién financie la prima y no de qué beneficios se paguen antes del deducible"
    ],a:0,
    trampa:"Dos distractores convierten una excepción limitada en permiso total o prohibición total.",
    correcto:"Para conservar la condición de HDHP compatible con HSA, la cobertura previa al deducible debe ajustarse a las excepciones permitidas; la clasificación interna del plan no basta.",
    incorrectos:[
      "B) La etiqueta del empleador no sustituye la regla aplicable.",
      "C) Existen excepciones permitidas, incluida determinada atención preventiva.",
      "D) La fuente de la prima no sustituye las reglas sobre beneficios antes del deducible."
    ],
    distractor_condicional:"Si el servicio encajara claramente en una categoría preventiva permitida, podría cubrirse antes del deducible sin perder por ese solo hecho la condición de HDHP."
  }]},
{
  id:"killer_ha04_008",area:"salud",subtema_blueprint:"FSA/HSA",concepto:"FSA general del cónyuge y elegibilidad HSA",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"S tiene un HDHP elegible para HSA. Su cónyuge participa en una FSA de salud de propósito general que puede reembolsar gastos médicos elegibles de S. S nunca ha presentado una reclamación a esa FSA. ¿Qué conclusión es MÁS APROPIADA?",
    o:[
      "La disponibilidad de reembolso bajo la FSA general puede afectar la elegibilidad de S para contribuir a la HSA, aunque S nunca haya presentado una reclamación",
      "S sigue siendo elegible mientras no use la FSA, porque solo un reembolso efectivo crea cobertura descalificante",
      "S conserva elegibilidad si el cónyuge fue quien hizo la elección salarial, aunque la FSA pueda reembolsar gastos de S",
      "S puede corregir el problema reduciendo su aporte HSA por el mismo monto disponible en la FSA"
    ],a:0,
    trampa:"La falta de uso y quién hizo la elección salarial parecen decisivos, pero el análisis se centra en la cobertura disponible para S.",
    correcto:"Una FSA general del cónyuge puede ser cobertura descalificante si puede reembolsar gastos de S. La elegibilidad para HSA depende de la cobertura disponible, no solo de su uso efectivo.",
    incorrectos:[
      "B) La cobertura puede ser descalificante aunque no se haya presentado una reclamación.",
      "C) La titularidad de la elección salarial no elimina la disponibilidad de cobertura para S.",
      "D) Reducir el aporte no transforma otra cobertura en compatible."
    ],
    distractor_condicional:"Si la FSA fuera de propósito limitado, por ejemplo solo dental y visión, podría ser compatible con la HSA."
  }]},
{
  id:"killer_ha04_009",area:"salud",subtema_blueprint:"FSA",concepto:"FSA — Carryover y período de gracia",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"Una empresa quiere reducir la pérdida de fondos no usados en su FSA. El comité propone ofrecer un período de gracia y, además, permitir carryover sobre el mismo saldo del mismo año del plan. ¿Qué respuesta es MÁS CORRECTA?",
    o:[
      "El plan debe elegir entre período de gracia y carryover para ese mismo año y saldo; no puede acumular ambos mecanismos sobre los mismos fondos",
      "Puede usar ambos si cada empleado elige individualmente cuál mecanismo aplicar primero",
      "Puede usar ambos si el carryover se limita a menos de la mitad del saldo no utilizado",
      "Debe rechazar ambos porque ninguna FSA puede incluir mecanismos para conservar fondos no usados"
    ],a:0,
    trampa:"Los distractores proponen soluciones administrativas plausibles, pero la regla opera a nivel del diseño del plan.",
    correcto:"Una FSA puede ofrecer un período de gracia o un carryover permitido, pero no ambos respecto del mismo año y saldo del plan.",
    incorrectos:[
      "B) La elección individual no sustituye la regla aplicable al diseño del plan.",
      "C) Dividir o limitar el saldo no elimina la incompatibilidad de combinar ambos mecanismos.",
      "D) Ambos mecanismos pueden existir por separado."
    ],
    distractor_condicional:"Si la empresa eligiera solo uno de los dos mecanismos y cumpliera las demás reglas, el diseño podría ser válido."
  }]},
{
  id:"killer_ha04_010",area:"salud",subtema_blueprint:"HSA",concepto:"HSA — Uso del saldo después de perder elegibilidad",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"T deja su HDHP y entra en un plan tradicional que no permite nuevas contribuciones a HSA. Meses después incurre en un gasto médico calificado y todavía conserva dinero en su HSA. ¿Qué diferencia debe reconocer?",
    o:[
      "Puede perder elegibilidad para nuevas contribuciones y aun conservar el derecho a usar el saldo existente para gastos médicos calificados",
      "Debe cerrar la HSA al dejar el HDHP porque el saldo deja de ser suyo cuando pierde elegibilidad para aportar",
      "Puede conservar la cuenta, pero cualquier retiro posterior se vuelve no calificado por haber cambiado de plan",
      "Solo puede usar el saldo durante un período corto después de dejar el HDHP y luego debe devolverlo al custodio"
    ],a:0,
    trampa:"La elegibilidad para aportar se confunde con la propiedad y uso del saldo acumulado.",
    correcto:"Perder elegibilidad para nuevas contribuciones no elimina la propiedad del saldo HSA existente ni impide usarlo para gastos médicos calificados.",
    incorrectos:[
      "B) La HSA no deja de pertenecer al titular por cambiar de cobertura.",
      "C) Cambiar de plan no convierte automáticamente en no calificados los retiros para gastos médicos elegibles.",
      "D) No existe una regla general de uso limitado a una breve ventana después de perder elegibilidad."
    ],
    distractor_condicional:"Si T hiciera una nueva contribución durante un mes de inelegibilidad, esa aportación requeriría un análisis distinto."
  }]},
{
  id:"killer_ha04_011",area:"salud",subtema_blueprint:"HRA",concepto:"HRA — Gastos incurridos antes de terminar el empleo",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"B deja su empleo el 31 de marzo. El 15 de marzo había incurrido en un gasto elegible cubierto por su HRA, pero presenta la documentación en abril. El plan permite reclamaciones posteriores por gastos incurridos mientras existía cobertura. ¿Qué es MÁS PROBABLE?",
    o:[
      "El gasto puede seguir siendo reembolsable si fue incurrido mientras B tenía derecho bajo la HRA y la reclamación se presenta dentro del plazo permitido",
      "El gasto deja de ser elegible porque la fecha de presentación ocurrió después de terminar el empleo",
      "B puede usar cualquier saldo HRA para gastos nuevos posteriores a la terminación aunque el plan no prevea continuidad",
      "El gasto debe pagarse desde una HSA porque una HRA no puede procesar reclamaciones después de la terminación"
    ],a:0,
    trampa:"La fecha de presentación se confunde con la fecha en que se incurrió el gasto y con las reglas de presentación del plan.",
    correcto:"Un gasto incurrido mientras existía cobertura HRA puede seguir siendo reclamable después de la terminación si el plan lo permite y la reclamación se presenta dentro del plazo aplicable.",
    incorrectos:[
      "B) La fecha de presentación no necesariamente elimina un gasto incurrido durante la cobertura.",
      "C) Gastos nuevos posteriores dependen de continuidad y diseño del plan.",
      "D) No existe un requisito general de trasladar la reclamación a una HSA."
    ],
    distractor_condicional:"Si el gasto se hubiera incurrido después de terminar el empleo y no existiera continuidad, el resultado podría ser distinto."
  }]},
{
  id:"killer_ha04_012",area:"salud",subtema_blueprint:"HSA/FSA/HRA",concepto:"Cuentas de salud — Propiedad, disponibilidad y elegibilidad",variantes:[{
    nivel:5,tipo_trampa:"CUAL_NO",
    q:"Un asesor compara HSA, FSA y HRA para un grupo de empleados. ¿Cuál afirmación es MENOS CORRECTA?",
    o:[
      "Una HSA puede permanecer con el titular aunque cambie de empleo o pierda elegibilidad para nuevas contribuciones",
      "Una FSA de salud puede hacer disponible la elección anual antes de que todas las deducciones salariales hayan ocurrido",
      "Una HRA suele depender del diseño del empleador para determinar derechos sobre montos no usados después del empleo",
      "HSA, FSA y HRA son esencialmente iguales porque cualquier saldo mostrado a nombre del empleado se convierte en propiedad personal portable"
    ],a:3,
    trampa:"La última opción usa una similitud superficial —un saldo individual visible— para borrar diferencias estructurales importantes.",
    correcto:"HSA, FSA y HRA no son equivalentes en propiedad, portabilidad, financiación ni elegibilidad. La existencia de un saldo individual visible no convierte automáticamente todos los arreglos en propiedad personal portable.",
    incorrectos:[
      "A) Describe una característica real de la HSA.",
      "B) Refleja la regla de cobertura uniforme de una FSA de salud.",
      "C) Describe correctamente la dependencia de la HRA respecto del diseño del plan."
    ],
    distractor_condicional:"Si la pregunta se limitara a decir que los tres pueden usarse para ciertos gastos médicos, sí existiría una similitud general, pero no equivalencia estructural."
  }]}
];

PK_KILLER_HEALTH_ACCOUNTS_04.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_HEALTH_ACCOUNTS_04 };
if (typeof window !== 'undefined') window.PK_KILLER_HEALTH_ACCOUNTS_04 = PK_KILLER_HEALTH_ACCOUNTS_04;
