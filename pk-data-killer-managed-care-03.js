// ============================================================
// PEARSON KILLER — pk-data-killer-managed-care-03.js
// LOTE 03 — Escalado temático HMO / PPO / EPO / POS
// Generado a partir de patrones humanos aprobados. Aislado de main y del banco general.
// Estado inicial: pending hasta auditoría humana breve.
// ============================================================

const PK_KILLER_MANAGED_CARE_03 = [
{
  id:"killer_mc03_001",area:"salud",subtema_blueprint:"HMO",concepto:"HMO — Referido vs autorización previa",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"S tiene un HMO y recibe de su PCP un referido válido para consultar a un neurólogo de la red. Antes de la cita, la oficina del especialista informa que un estudio diagnóstico específico podría requerir autorización previa del plan. S piensa que el referido del PCP reemplaza cualquier otro requisito. ¿Cuál respuesta es MÁS APROPIADA?",
    o:[
      "El referido puede permitir el acceso al especialista, pero un servicio específico todavía puede estar sujeto a autorización previa según las reglas del plan",
      "El referido del PCP elimina cualquier revisión posterior porque ambos procesos son formas equivalentes de autorización clínica",
      "La autorización previa solo puede exigirse cuando el especialista está fuera de la red, no cuando participa en el HMO",
      "El estudio queda autorizado automáticamente si el especialista lo ordena durante una consulta que ya fue referida por el PCP"
    ],a:0,
    trampa:"La pregunta separa dos controles reales del plan que suelen confundirse: acceso al especialista y autorización de un servicio concreto.",
    correcto:"Un referido y una autorización previa no son necesariamente el mismo requisito. El primero puede habilitar el acceso al especialista, mientras ciertos procedimientos o estudios pueden requerir revisión adicional del plan.",
    incorrectos:[
      "B) Trata dos controles distintos como si fueran equivalentes.",
      "C) La autorización previa también puede aplicarse a servicios dentro de la red.",
      "D) La orden del especialista no sustituye automáticamente los requisitos del plan."
    ],
    distractor_condicional:"Si el plan no exigiera autorización previa para ese estudio concreto, el referido podría ser el único requisito de acceso relevante."
  }]},
{
  id:"killer_mc03_002",area:"salud",subtema_blueprint:"HMO",concepto:"HMO — PCP y continuidad de atención",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"M cambia de empleador y entra en un nuevo HMO. Está en medio de un tratamiento con un especialista que no participa en la nueva red. La terapia fue iniciada bajo su cobertura anterior y suspenderla de inmediato podría afectar el tratamiento. ¿Qué debe hacer M PRIMERO para saber si puede continuar temporalmente con ese especialista?",
    o:[
      "Revisar las reglas de transición o continuidad de atención del nuevo plan y solicitar la excepción aplicable antes de asumir que toda atención fuera de la red será cubierta",
      "Continuar el tratamiento sin avisar al plan porque haber iniciado la terapia bajo otra póliza obliga a la nueva HMO a pagarla",
      "Cambiar automáticamente al especialista más cercano de la red porque una HMO nunca puede permitir continuidad temporal fuera de la red",
      "Pedir al especialista anterior que facture como si fuera proveedor participante hasta que termine el tratamiento"
    ],a:0,
    trampa:"La historia clínica previa parece crear un derecho automático, pero la respuesta correcta exige buscar la regla de transición aplicable sin prometer cobertura universal.",
    correcto:"Los planes pueden tener reglas de transición o continuidad de atención para determinadas situaciones. La existencia y duración de una excepción dependen de las reglas aplicables, por lo que M debe revisar y solicitar el proceso correspondiente.",
    incorrectos:[
      "B) La cobertura previa no obliga por sí sola al nuevo plan a pagar todo tratamiento fuera de red.",
      "C) Es demasiado absoluta; pueden existir reglas de transición.",
      "D) La condición de red no puede alterarse mediante una facturación ficticia."
    ],
    distractor_condicional:"Si el especialista ya participara en la nueva red, la continuidad del tratamiento no requeriría una excepción de red por ese motivo."
  }]},
{
  id:"killer_mc03_003",area:"salud",subtema_blueprint:"PPO",concepto:"PPO — Coaseguro y monto permitido",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"T usa un proveedor fuera de la red bajo un PPO. El proveedor cobra $1,200, pero el plan reconoce $800 como monto permitido para calcular beneficios. El contrato aplica coaseguro al monto permitido y no existe una protección especial que limite la facturación adicional. ¿Cuál conclusión es MÁS APROPIADA?",
    o:[
      "El costo de T puede incluir su participación calculada sobre el monto permitido y, además, una posible diferencia facturada por el proveedor sobre el cargo no reconocido",
      "El coaseguro se calcula necesariamente sobre los $1,200 completos porque ese fue el precio elegido por el proveedor",
      "El proveedor debe aceptar $800 como pago total porque el plan utilizó ese monto para calcular el beneficio",
      "La diferencia de $400 desaparece automáticamente una vez que T paga el coaseguro exigido por el PPO"
    ],a:0,
    trampa:"La pregunta obliga a separar tres cantidades distintas: cargo del proveedor, monto permitido y costo compartido del asegurado.",
    correcto:"Fuera de la red, el plan puede calcular beneficios sobre un monto permitido menor que el cargo. El asegurado puede deber su participación sobre ese monto y, según las reglas aplicables, también una diferencia adicional facturada por el proveedor.",
    incorrectos:[
      "B) El coaseguro suele aplicarse al monto definido por el plan, no necesariamente al cargo total.",
      "C) Un proveedor no participante no queda obligado por la tarifa del plan por ese solo cálculo.",
      "D) Pagar el coaseguro no elimina automáticamente una posible facturación de saldo."
    ],
    distractor_condicional:"Si el proveedor fuera participante, normalmente estaría sujeto a la tarifa contractual y no podría cobrar la diferencia entre su cargo usual y la tarifa negociada."
  }]},
{
  id:"killer_mc03_004",area:"salud",subtema_blueprint:"PPO",concepto:"PPO — Autorización previa fuera de la red",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"R tiene un PPO con beneficios fuera de la red. Programa una resonancia en un centro no participante porque el horario le resulta más conveniente. El folleto del plan indica que ciertas imágenes avanzadas requieren autorización previa incluso cuando existe cobertura fuera de la red. R piensa que tener beneficio fuera de red basta para garantizar el pago. ¿Qué es MÁS PROBABLE?",
    o:[
      "La existencia de beneficio fuera de la red no elimina un requisito de autorización previa aplicable al servicio, por lo que omitirlo puede afectar la cobertura",
      "Todo servicio fuera de la red queda exento de autorización previa porque el proveedor no tiene contrato con el plan",
      "La autorización previa solo determina la tarifa del proveedor y nunca afecta si el plan paga o no el servicio",
      "La conveniencia del horario convierte la resonancia en atención urgente y elimina los requisitos ordinarios del PPO"
    ],a:0,
    trampa:"Se confunde tener una categoría de beneficio con haber cumplido todos los requisitos administrativos del servicio.",
    correcto:"Un PPO puede ofrecer cobertura fuera de la red y aun así exigir autorización previa para determinados servicios. Son cuestiones distintas: nivel de red y requisito de utilización.",
    incorrectos:[
      "B) La falta de contrato del proveedor no elimina los requisitos del afiliado.",
      "C) La autorización previa puede afectar la cobertura, no solo la tarifa.",
      "D) La conveniencia no transforma un procedimiento programado en una urgencia."
    ],
    distractor_condicional:"Si ese servicio concreto no estuviera sujeto a autorización previa, la discusión principal pasaría a ser el nivel de beneficios y costos fuera de la red."
  }]},
{
  id:"killer_mc03_005",area:"salud",subtema_blueprint:"EPO",concepto:"EPO — Red exclusiva y laboratorio",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"A consulta a un médico participante en su EPO. Durante la visita, el médico envía una muestra a un laboratorio que no participa en el plan. A no eligió directamente el laboratorio y descubre la situación al recibir la factura. ¿Cuál es la MEJOR forma de analizar la cobertura?",
    o:[
      "Debe revisarse la condición de red del laboratorio y cualquier protección o excepción aplicable; que el médico sea participante no convierte automáticamente al laboratorio en proveedor de la red",
      "La factura debe tratarse como de la red porque cualquier proveedor usado por un médico participante hereda su condición contractual",
      "La EPO debe pagar beneficios ordinarios fuera de la red siempre que el paciente no haya elegido personalmente al proveedor secundario",
      "El laboratorio queda automáticamente dentro de la red si el servicio fue clínicamente necesario para una consulta cubierta"
    ],a:0,
    trampa:"El episodio parece una sola atención, pero cada proveedor puede tener una condición de red distinta.",
    correcto:"La participación de un médico no se transfiere automáticamente a laboratorios u otros proveedores. Debe revisarse la red del proveedor específico y cualquier regla de protección o excepción aplicable.",
    incorrectos:[
      "B) La condición contractual no se hereda entre proveedores.",
      "C) La falta de elección directa no crea por sí sola un beneficio ordinario fuera de red.",
      "D) Necesidad médica y condición de red son análisis distintos."
    ],
    distractor_condicional:"Si el laboratorio también fuera participante, el problema de red desaparecería aunque siguieran aplicando otras reglas de cobertura."
  }]},
{
  id:"killer_mc03_006",area:"salud",subtema_blueprint:"EPO",concepto:"EPO — Viaje y atención no urgente",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"P tiene una EPO y pasa tres semanas visitando familiares en otro estado. Allí decide aprovechar para realizar una consulta dermatológica rutinaria con un médico fuera de la red. No existe urgencia y podría esperar hasta regresar. ¿Qué resultado es MÁS PROBABLE según la estructura típica de una EPO?",
    o:[
      "La consulta puede no tener beneficio ordinario fuera de la red porque se trata de atención no urgente con un proveedor no participante",
      "La consulta debe cubrirse como dentro de la red porque cualquier viaje temporal suspende las restricciones ordinarias de una EPO",
      "La consulta recibe automáticamente beneficios parciales porque la EPO combina siempre características de HMO y PPO",
      "La consulta se trata como emergencia porque P se encuentra fuera del estado donde reside habitualmente"
    ],a:0,
    trampa:"El viaje es un dato realista pero no convierte una consulta rutinaria en una excepción de red.",
    correcto:"Una EPO suele limitar la atención ordinaria a proveedores participantes. Viajar no transforma por sí solo una consulta rutinaria en urgencia o emergencia.",
    incorrectos:[
      "B) No existe una suspensión general de la red por viajar.",
      "C) Esa descripción corresponde mejor a un POS que a una EPO típica.",
      "D) Estar fuera del estado no convierte automáticamente el servicio en emergencia."
    ],
    distractor_condicional:"Si P desarrollara una emergencia verdadera durante el viaje, el análisis de cobertura fuera de la red sería diferente."
  }]},
{
  id:"killer_mc03_007",area:"salud",subtema_blueprint:"POS",concepto:"POS — Diferencia entre referido y auto-referencia",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"J tiene un POS. Para una consulta de reumatología puede seguir la vía coordinada por su PCP dentro de la red o concertar por su cuenta una cita con otro especialista permitido por el contrato. ¿Qué diferencia es MÁS PROBABLE entre ambas vías?",
    o:[
      "La vía coordinada puede ofrecer un nivel de beneficios más favorable, mientras la auto-referencia puede implicar mayor costo compartido según el diseño del plan",
      "Ambas vías deben producir exactamente el mismo costo porque el diagnóstico y la especialidad son idénticos",
      "La auto-referencia convierte automáticamente al especialista elegido en proveedor de la red para esa consulta",
      "La vía del PCP solo cambia quién envía la factura y no puede afectar deducibles, coaseguro ni otros beneficios"
    ],a:0,
    trampa:"La equivalencia clínica del servicio oculta que el POS puede premiar económicamente una vía de acceso sobre otra.",
    correcto:"Un POS puede aplicar mejores beneficios cuando el miembro usa la coordinación y red preferida, y mayores costos cuando se auto-refiere o utiliza otra vía permitida.",
    incorrectos:[
      "B) El nivel de beneficios puede depender de la vía de acceso, no solo del servicio clínico.",
      "C) La auto-referencia no cambia automáticamente la condición de red del proveedor.",
      "D) La vía de acceso sí puede afectar costos y beneficios."
    ],
    distractor_condicional:"Si el contrato estableciera el mismo nivel de beneficios para ambas vías, entonces no habría diferencia económica por ese factor concreto."
  }]},
{
  id:"killer_mc03_008",area:"salud",subtema_blueprint:"POS",concepto:"POS — Servicio fuera de red tras referido",variantes:[{
    nivel:5,tipo_trampa:"ESCENARIO",
    q:"C tiene un POS y su PCP la refiere a un especialista que participa en la red. El especialista recomienda posteriormente un procedimiento en una instalación fuera de la red. C supone que el referido original del PCP hace que todo el episodio conserve el nivel de beneficios dentro de la red. ¿Cuál respuesta es MÁS APROPIADA?",
    o:[
      "Debe revisarse por separado la condición de red de la instalación y los requisitos del procedimiento; el referido al especialista no garantiza el mismo nivel de beneficios para todos los proveedores posteriores",
      "El referido inicial obliga al plan a tratar como dentro de la red a cualquier instalación que el especialista elija durante el episodio",
      "La instalación queda cubierta al nivel de red porque el especialista participante asume contractualmente la condición de todos los proveedores relacionados",
      "El POS debe negar por completo el procedimiento porque cualquier uso de una instalación fuera de la red cancela el referido original"
    ],a:0,
    trampa:"La continuidad del episodio parece transmitir el beneficio de red, pero la condición de cada proveedor y servicio puede evaluarse por separado.",
    correcto:"Un referido a un especialista no convierte automáticamente en participantes a instalaciones u otros proveedores. Deben revisarse la red y los requisitos del servicio específico.",
    incorrectos:[
      "B) El referido no transmite condición de red a terceros.",
      "C) Un especialista no puede extender su contrato a otros proveedores.",
      "D) El uso fuera de red no cancela necesariamente todo el episodio; puede cambiar el nivel de beneficios."
    ],
    distractor_condicional:"Si la instalación también fuera participante y el procedimiento cumpliera los demás requisitos, podría conservarse el nivel de beneficios de la red."
  }]},
{
  id:"killer_mc03_009",area:"salud",subtema_blueprint:"HMO/PPO",concepto:"HMO vs PPO — Elección basada en flexibilidad",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"Una pareja compara dos planes. El Plan A exige PCP y referidos para la mayoría de especialistas y concentra la atención ordinaria en su red. El Plan B permite consultar especialistas de la red directamente y ofrece algún beneficio fuera de la red con mayor costo. Uno de los cónyuges viaja con frecuencia y valora flexibilidad; el otro prioriza menor costo y coordinación. ¿Qué conclusión es MÁS RAZONABLE?",
    o:[
      "El Plan B se ajusta mejor a quien prioriza flexibilidad, mientras el Plan A puede ajustarse mejor a quien acepta coordinación más estrecha a cambio de una estructura potencialmente más restrictiva",
      "El Plan A es siempre mejor para viajeros porque los referidos garantizan cobertura automática fuera del área de servicio",
      "El Plan B elimina todo control de utilización y por eso nunca puede exigir autorización previa para servicios costosos",
      "Ambos planes son equivalentes porque las diferencias entre PCP, referidos y red no afectan el acceso real del asegurado"
    ],a:0,
    trampa:"La pregunta no pide identificar un nombre de plan, sino relacionar prioridades personales con diferencias estructurales reales.",
    correcto:"La mayor flexibilidad de acceso y cierta cobertura fuera de la red suelen favorecer a quien prioriza opciones, mientras una estructura con PCP y red más cerrada puede atraer a quien prefiere coordinación y acepta más restricciones.",
    incorrectos:[
      "B) Los referidos no garantizan cobertura automática fuera del área.",
      "C) Un PPO puede seguir usando autorización previa y otros controles.",
      "D) Esas diferencias sí afectan acceso, red y costos."
    ],
    distractor_condicional:"Si el Plan A tuviera reglas excepcionales de viaje muy amplias o el Plan B costos significativamente mayores, la preferencia individual podría cambiar."
  }]},
{
  id:"killer_mc03_010",area:"salud",subtema_blueprint:"PPO/EPO",concepto:"PPO vs EPO — Cobertura fuera de red",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"Dos empleados comparan planes que permiten acceso directo a especialistas de la red. El Plan X además ofrece beneficios fuera de la red con mayor deducible y coaseguro. El Plan Y normalmente limita la atención no urgente a proveedores participantes. ¿Qué diferencia identifica MEJOR las estructuras?",
    o:[
      "El Plan X presenta un patrón típico de PPO, mientras el Plan Y presenta un patrón típico de EPO",
      "El Plan X debe ser EPO porque el acceso directo a especialistas es exclusivo de ese tipo de plan",
      "El Plan Y debe ser PPO porque restringir la red es la característica principal de todos los PPO",
      "No puede distinguirse entre PPO y EPO porque ambos usan redes y pueden permitir acceso directo a especialistas"
    ],a:0,
    trampa:"Ambos planes comparten acceso directo a especialistas; la diferencia decisiva es el tratamiento ordinario fuera de la red.",
    correcto:"Un PPO suele ofrecer alguna cobertura fuera de la red, aunque a mayor costo, mientras una EPO suele restringir la atención ordinaria a la red.",
    incorrectos:[
      "B) El acceso directo no es exclusivo de una EPO.",
      "C) Un PPO no se define por restringir completamente la atención fuera de la red.",
      "D) La cobertura fuera de red sí permite distinguirlos en este escenario."
    ],
    distractor_condicional:"Si ambos planes negaran atención ordinaria fuera de la red, se necesitarían otros datos para diferenciarlos."
  }]},
{
  id:"killer_mc03_011",area:"salud",subtema_blueprint:"HMO/EPO",concepto:"HMO vs EPO — Papel del PCP",variantes:[{
    nivel:5,tipo_trampa:"COMPARACION",
    q:"El Plan R limita la atención no urgente a su red y normalmente exige que un PCP coordine el acceso a especialistas. El Plan S también limita la atención no urgente a su red, pero permite que los miembros consulten directamente a especialistas participantes. ¿Qué diferencia es MÁS IMPORTANTE?",
    o:[
      "El Plan R presenta un patrón más típico de HMO y el Plan S de EPO, principalmente por el papel del PCP y los referidos",
      "El Plan R debe ser PPO porque usa un PCP, mientras el Plan S debe ser POS porque permite acceso directo",
      "Los dos planes son necesariamente idénticos porque ambos restringen la atención ordinaria fuera de la red",
      "El Plan S no puede ser EPO porque toda EPO exige PCP y referido antes de consultar a un especialista"
    ],a:0,
    trampa:"La restricción de red es común a ambos; el dato que separa mejor las estructuras es el mecanismo de acceso a especialistas.",
    correcto:"HMO y EPO pueden compartir una red cerrada para atención ordinaria, pero suelen diferenciarse en el uso del PCP y los referidos para especialistas.",
    incorrectos:[
      "B) Esas etiquetas no se deducen de las características descritas.",
      "C) Compartir una red restringida no hace idénticos los modelos.",
      "D) Una EPO puede permitir acceso directo a especialistas de la red."
    ],
    distractor_condicional:"Si ambos planes exigieran PCP y referidos, harían falta otros datos para distinguirlos."
  }]},
{
  id:"killer_mc03_012",area:"salud",subtema_blueprint:"Managed Care",concepto:"Atención administrada — Red, costo y acceso",variantes:[{
    nivel:5,tipo_trampa:"CUAL_NO",
    q:"Un asesor resume principios GENERALES de HMO, PPO, EPO y POS para un grupo de empleados. ¿Cuál afirmación es MENOS CORRECTA?",
    o:[
      "Las redes de proveedores pueden influir en el costo compartido y en la forma de acceder a la atención",
      "La existencia de cobertura fuera de la red y el papel del PCP son dos elementos útiles para distinguir varios modelos",
      "Un mismo servicio puede generar distinto costo para el asegurado según la red y la vía de acceso permitida por el plan",
      "El nombre del tipo de plan determina por sí solo todos los detalles de cobertura, sin necesidad de revisar el contrato específico"
    ],a:3,
    trampa:"Las tres primeras son principios generales válidos; la cuarta convierte una clasificación útil en una regla absoluta que ignora el diseño contractual.",
    correcto:"Las etiquetas HMO, PPO, EPO y POS describen patrones generales, pero los detalles reales de cobertura, red, costos y requisitos dependen del contrato y las reglas aplicables.",
    incorrectos:[
      "A) Es una afirmación general válida sobre atención administrada.",
      "B) Esos dos elementos ayudan a diferenciar estructuras.",
      "C) La red y la vía de acceso pueden cambiar el costo compartido."
    ],
    distractor_condicional:"Si la pregunta pidiera identificar tendencias generales en lugar de detalles contractuales exactos, las etiquetas del plan serían más útiles como punto de partida."
  }]}
];

PK_KILLER_MANAGED_CARE_03.forEach(c => (c.variantes || []).forEach(v => {
  if (!v.e) v.e = v.correcto || '';
}));

if (typeof module !== 'undefined') module.exports = { PK_KILLER_MANAGED_CARE_03 };
if (typeof window !== 'undefined') window.PK_KILLER_MANAGED_CARE_03 = PK_KILLER_MANAGED_CARE_03;
