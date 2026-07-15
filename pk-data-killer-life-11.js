// ============================================================
// PEARSON KILLER — pk-data-killer-life-11.js
// LOTE 11 — Seguro de Vida
// Patrón maestro: Lote 10 aprobado 6/6 bajo auditoría estricta.
// Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría breve.
// ============================================================

const PK_KILLER_LIFE_11 = [
{
  id:"killer_life11_001",area:"vida",subtema_blueprint:"Tipos de póliza",concepto:"Término vs vida permanente — necesidad temporal y presupuesto",variantes:[{
    nivel:5,tipo_trampa:"PRIORIDAD_Y_DURACION",
    q:"B, de 35 años, quiere proteger durante 20 años el saldo de una hipoteca y el ingreso de sus hijos dependientes. Su presupuesto es limitado y no ha expresado interés en acumular valor en efectivo. ¿Qué alternativa responde MEJOR a la necesidad principal descrita?",
    o:[
      "Una póliza a término por un período cercano a la duración de la necesidad, porque prioriza protección temporal con un costo inicial generalmente menor que una cobertura permanente comparable",
      "Una póliza de vida entera, porque el valor en efectivo puede ser útil aunque B no lo haya identificado como prioridad y la necesidad principal sea temporal",
      "Una póliza universal, porque la flexibilidad de primas puede ser valiosa aunque la necesidad descrita no dependa de una cobertura permanente",
      "Una combinación de cobertura permanente y término, porque puede ofrecer más funciones aunque aumente complejidad y costo frente al objetivo principal"
    ],a:0,
    trampa:"B, C y D son opciones legítimas en otros perfiles. La mejor respuesta sigue la duración y prioridad principal del caso.",
    correcto:"Cuando la necesidad es principalmente temporal y el presupuesto es limitado, una cobertura a término suele alinearse mejor con la duración del riesgo y el objetivo de protección pura.",
    incorrectos:[
      "B) Puede ser adecuada para necesidades permanentes o acumulación, pero añade una función que no es prioritaria aquí.",
      "C) La flexibilidad puede ser útil, pero no supera el hecho de que la necesidad principal es temporal.",
      "D) Puede ser razonable en una planificación más amplia, pero no es la respuesta más directa al objetivo dominante descrito."
    ],
    distractor_condicional:"Si B también tuviera una necesidad permanente o valorara acumulación de efectivo, una póliza permanente podría ganar relevancia."
  }]},
{
  id:"killer_life11_002",area:"vida",subtema_blueprint:"Tipos de póliza",concepto:"Vida entera vs universal — garantía y flexibilidad",variantes:[{
    nivel:5,tipo_trampa:"DOS_BENEFICIOS_REALES",
    q:"C quiere cobertura permanente. Valora especialmente primas previsibles y garantías contractuales, aunque otra opción le ofrece mayor flexibilidad para ajustar primas y beneficio dentro de ciertos límites. ¿Qué producto responde MEJOR a la prioridad dominante de C?",
    o:[
      "Vida entera, porque suele enfatizar primas niveladas y garantías contractuales más predecibles",
      "Vida universal, porque la flexibilidad puede ser valiosa aunque C haya dado prioridad a la previsibilidad y las garantías",
      "Vida a término renovable, porque puede mantener cobertura por años aunque no ofrezca la misma estructura de permanencia y valor",
      "Una póliza variable, porque el potencial de crecimiento puede aumentar valor aunque introduzca un nivel de riesgo que C no señaló como prioridad"
    ],a:0,
    trampa:"La universal es una alternativa real y tentadora, pero la pregunta premia la prioridad explícita por previsibilidad.",
    correcto:"Si la prioridad dominante es una estructura permanente con primas más previsibles y garantías definidas, la vida entera suele alinearse mejor que una universal orientada a flexibilidad.",
    incorrectos:[
      "B) Es razonable cuando la flexibilidad es prioritaria, pero no es el dato dominante del escenario.",
      "C) Puede cubrir una necesidad temporal o renovable, pero no ofrece la misma estructura permanente.",
      "D) Puede ser adecuada para quien acepta riesgo de inversión, algo no planteado como prioridad aquí."
    ],
    distractor_condicional:"Si C priorizara ajustar primas o beneficio a cambios futuros, una universal podría ser más coherente."
  }]},
{
  id:"killer_life11_003",area:"vida",subtema_blueprint:"Beneficiarios",concepto:"Beneficiario revocable vs irrevocable — control del dueño",variantes:[{
    nivel:5,tipo_trampa:"CONTROL_CONTRACTUAL",
    q:"D desea mantener la capacidad de cambiar al beneficiario en el futuro sin necesitar el consentimiento de la persona actualmente designada. ¿Qué designación responde MEJOR a ese objetivo?",
    o:[
      "Beneficiario revocable, porque mantiene en el dueño la facultad de cambiar la designación conforme a la póliza",
      "Beneficiario irrevocable, porque ofrece mayor certeza al beneficiario aunque limite la capacidad del dueño para hacer ciertos cambios sin consentimiento",
      "Beneficiario contingente, porque define quién recibe si el primario no puede, aunque no responde por sí solo al grado de control sobre cambios",
      "Beneficiario por clase, porque identifica un grupo y puede facilitar administración aunque no determine por sí mismo si la designación es revocable"
    ],a:0,
    trampa:"Las otras opciones describen conceptos reales, pero solo una responde al grado de control que D quiere conservar.",
    correcto:"Una designación revocable permite al dueño conservar la facultad de cambiar al beneficiario sujeto a los términos de la póliza.",
    incorrectos:[
      "B) Aumenta la protección del interés del beneficiario, pero reduce la libertad de cambio del dueño.",
      "C) Resuelve el orden de pago, no la revocabilidad.",
      "D) Define cómo se identifica a los beneficiarios, no necesariamente el grado de control del dueño."
    ],
    distractor_condicional:"Si D quisiera dar al beneficiario un interés protegido frente a cambios unilaterales, una designación irrevocable sería más relevante."
  }]},
{
  id:"killer_life11_004",area:"vida",subtema_blueprint:"Riders",concepto:"Waiver of premium vs accidental death — continuidad de cobertura",variantes:[{
    nivel:5,tipo_trampa:"RIESGO_ESPECIFICO",
    q:"E teme que una incapacidad prolongada le impida seguir pagando primas y provoque la pérdida de su cobertura. También le preocupa morir en un accidente, pero identifica la continuidad de la póliza durante una incapacidad como su prioridad principal. ¿Qué rider responde MEJOR?",
    o:[
      "Exención de primas por incapacidad, porque busca mantener la cobertura al liberar el pago de primas cuando se cumplen las condiciones del rider",
      "Beneficio por muerte accidental, porque puede aumentar el pago por una muerte cubierta aunque no resuelva el riesgo de perder la póliza por incapacidad",
      "Asegurabilidad garantizada, porque permite adquirir cobertura adicional en ciertos momentos aunque no sustituye el pago de primas de la póliza actual",
      "Rider de término para cónyuge, porque amplía protección familiar aunque no responde al riesgo de incapacidad del dueño"
    ],a:0,
    trampa:"Todas las opciones son riders reales. La mejor depende del riesgo que E señaló como dominante.",
    correcto:"La exención de primas por incapacidad se dirige al riesgo de no poder seguir pagando y perder la cobertura, sujeto a las condiciones del rider.",
    incorrectos:[
      "B) Atiende otro riesgo real, pero no protege directamente la continuidad por incapacidad.",
      "C) Puede ampliar cobertura futura, pero no paga las primas actuales durante incapacidad.",
      "D) Añade protección sobre otra vida, no resuelve la prioridad principal."
    ],
    distractor_condicional:"Si E priorizara aumentar el beneficio específicamente ante muerte accidental, el rider accidental ganaría relevancia."
  }]},
{
  id:"killer_life11_005",area:"vida",subtema_blueprint:"Underwriting",concepto:"Riesgo estándar vs subestándar — clasificación y prima",variantes:[{
    nivel:5,tipo_trampa:"CLASIFICACION_Y_PRECIO",
    q:"F solicita seguro de vida. La aseguradora determina que presenta un riesgo mayor que el promedio, pero todavía asegurable. ¿Qué resultado es MÁS coherente con esa evaluación?",
    o:[
      "Emitir la póliza con una clasificación subestándar y una prima mayor o ajuste equivalente conforme al método de la compañía",
      "Emitirla como riesgo preferido, porque aceptar la solicitud significa que la aseguradora considera el riesgo mejor que el promedio",
      "Rechazar necesariamente la solicitud, porque cualquier riesgo superior al promedio deja de ser asegurable",
      "Emitirla como estándar sin ajuste, porque la clasificación solo afecta el beneficio por muerte y no el costo"
    ],a:0,
    trampa:"Aceptar, clasificar y rechazar son decisiones distintas; la clave es que el riesgo es mayor, pero todavía asegurable.",
    correcto:"Un solicitante con riesgo mayor que el promedio pero aún asegurable puede recibir una clasificación subestándar con una prima mayor u otro ajuste permitido.",
    incorrectos:[
      "B) Riesgo preferido implica un perfil mejor que el promedio, no peor.",
      "C) Mayor riesgo no equivale automáticamente a inasegurabilidad.",
      "D) La clasificación puede afectar el costo o condiciones de emisión."
    ],
    distractor_condicional:"Si el riesgo excediera los límites de asegurabilidad de la compañía, el rechazo podría ser el resultado apropiado."
  }]},
{
  id:"killer_life11_006",area:"vida",subtema_blueprint:"Underwriting",concepto:"Recibo condicional — cobertura sujeta a condiciones",variantes:[{
    nivel:5,tipo_trampa:"CONDICION_DECISIVA",
    q:"G entrega la solicitud y la prima inicial y recibe un recibo condicional. Antes de la emisión formal ocurre un evento cubierto potencial. ¿Cuál análisis es MÁS APROPIADO?",
    o:[
      "Debe determinarse si se cumplieron las condiciones del recibo para que existiera cobertura provisional en la fecha relevante",
      "La entrega de la prima crea cobertura definitiva e incondicional desde ese momento, sin importar la evaluación de asegurabilidad",
      "No puede existir ninguna cobertura hasta que la póliza física sea entregada, aunque el recibo contemple protección condicional",
      "El agente decide después del evento si desea tratar la prima como cobertura retroactiva"
    ],a:0,
    trampa:"La existencia del recibo sí puede ser relevante, pero no elimina las condiciones que controlan la cobertura provisional.",
    correcto:"Un recibo condicional exige analizar si las condiciones previstas se cumplieron. La prima por sí sola no convierte toda solicitud en cobertura definitiva e incondicional.",
    incorrectos:[
      "B) Ignora la naturaleza condicional del recibo.",
      "C) Es demasiado rígida porque ciertos recibos pueden contemplar cobertura antes de la entrega formal.",
      "D) La cobertura depende del contrato y las condiciones, no de una decisión discrecional posterior del agente."
    ],
    distractor_condicional:"Si el recibo fuera de otro tipo o no se hubieran cumplido sus condiciones, el resultado podría ser distinto."
  }]},
{
  id:"killer_life11_007",area:"vida",subtema_blueprint:"Interés asegurable",concepto:"Interés asegurable — momento relevante",variantes:[{
    nivel:5,tipo_trampa:"MOMENTO_DE_EVALUACION",
    q:"H compra una póliza sobre una persona con quien tiene una relación económica legítima al momento de emisión. Años después esa relación termina, pero la póliza sigue vigente. ¿Qué principio debe analizarse PRIMERO respecto del interés asegurable?",
    o:[
      "Si existía interés asegurable cuando se originó la póliza, porque ese momento suele ser el punto central para la validez inicial del contrato",
      "Si la relación económica sigue existiendo al momento de cada pago de prima, porque de lo contrario la póliza se invalida automáticamente",
      "Si el beneficiario conserva una relación personal cercana, porque el interés asegurable depende únicamente de afecto continuo",
      "Si la aseguradora vuelve a suscribir el riesgo cada año, porque el interés asegurable debe aprobarse de nuevo en cada aniversario"
    ],a:0,
    trampa:"La relación actual puede parecer importante, pero el principio clave es cuándo debe existir el interés para originar válidamente la póliza.",
    correcto:"En seguro de vida, el interés asegurable se analiza principalmente al inicio del contrato. La terminación posterior de la relación no invalida automáticamente una póliza válidamente emitida.",
    incorrectos:[
      "B) No suele exigirse demostrar de nuevo el mismo interés en cada pago de prima.",
      "C) El interés asegurable no depende solo de afecto continuo.",
      "D) La póliza no se vuelve a suscribir por interés asegurable en cada aniversario."
    ],
    distractor_condicional:"Si no hubiera existido interés asegurable al inicio, la validez del contrato sería el problema central."
  }]},
{
  id:"killer_life11_008",area:"vida",subtema_blueprint:"Conversión",concepto:"Término convertible — cambio de necesidad sin nueva evidencia",variantes:[{
    nivel:5,tipo_trampa:"CAMBIO_DE_NECESIDAD",
    q:"J tiene una póliza a término convertible. Su salud se ha deteriorado y ahora quiere cobertura permanente. ¿Qué característica de la conversión puede ser MÁS valiosa para él?",
    o:[
      "La posibilidad de cambiar a una póliza permanente elegible conforme a las reglas del contrato sin depender de una nueva evidencia completa de asegurabilidad",
      "La posibilidad de extender indefinidamente la misma prima original de término aunque cambie a cualquier póliza permanente",
      "La posibilidad de aumentar sin límite el beneficio por muerte solo porque su salud empeoró",
      "La posibilidad de convertir la póliza en una anualidad y mantener exactamente las mismas garantías de seguro de vida"
    ],a:0,
    trampa:"La conversión puede ser muy valiosa cuando cambia la salud, pero no elimina todos los límites sobre producto, prima o monto.",
    correcto:"Una cláusula de conversión puede permitir pasar de término a una cobertura permanente elegible sin una nueva evidencia completa de asegurabilidad, sujeto a las reglas del contrato.",
    incorrectos:[
      "B) La prima del nuevo producto no tiene por qué ser idéntica a la prima original de término.",
      "C) La conversión no implica aumento ilimitado del beneficio.",
      "D) Convertir a una anualidad no es la función normal de una cláusula de conversión de término."
    ],
    distractor_condicional:"Si J estuviera sano y solo buscara mantener una cobertura temporal barata, la conversión podría no ser su prioridad."
  }]}
];

PK_KILLER_LIFE_11.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_LIFE_11 };
if (typeof window !== 'undefined') window.PK_KILLER_LIFE_11 = PK_KILLER_LIFE_11;
