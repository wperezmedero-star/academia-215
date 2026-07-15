// PEARSON KILLER — Reescrituras reforzadas del lote manual20 run 001
// Reemplaza únicamente las seis candidatas que no superaron la revisión estricta.
(function(global){
'use strict';
const PK_MIGRATION_MANUAL20_RUN_001_REWRITES = [
{
 id:'manual20_002',area:'vida',subtema_blueprint:'Term Life',concepto:'Annual Renewable Term',category:'killer_ready',human_review_status:'pending',variantes:[{
  nivel:5,tipo_trampa:'CASI_IDENTICAS',
  q:'Un cliente de 42 años necesita mantener durante varios años una suma asegurada constante mientras espera que se concrete la venta de una propiedad. Sus ingresos actuales son ajustados, pero prevé que su capacidad de pago aumentará. El agente compara una póliza con prima nivelada por 10 años y otra que puede renovarse anualmente sin volver a demostrar asegurabilidad, aunque el costo se recalcula con la edad alcanzada. ¿Qué alternativa responde mejor a la prioridad inmediata del cliente?',
  o:['La póliza renovable anualmente, porque conserva el beneficio constante y permite posponer el mayor costo inicial, aunque la prima pueda subir en cada renovación','La póliza nivelada por 10 años, porque toda póliza temporal que mantenga el beneficio constante debe mantener también la prima constante','Una póliza de término decreciente, porque el costo creciente de la cobertura se compensa reduciendo automáticamente el beneficio cada año','Una póliza permanente, porque la posibilidad de renovar sin nueva asegurabilidad convierte cualquier cobertura temporal en seguro de por vida'],
  a:0,
  trampa:'La necesidad principal es costo inicial bajo con beneficio constante; la renovación anual satisface eso, pero no garantiza prima nivelada.',
  correcto:'La cobertura anual renovable mantiene el monto de seguro y permite renovar dentro de los límites contractuales sin nueva evidencia de asegurabilidad, pero la prima suele aumentar conforme aumenta la edad alcanzada.',
  incorrectos:['La prima nivelada puede ser apropiada si prioriza estabilidad de costo, pero el escenario enfatiza capacidad limitada hoy y mayor capacidad futura.','El término decreciente reduce el beneficio; contradice la necesidad de conservar la suma asegurada.','La renovabilidad no transforma una póliza temporal en permanente.'],
  distractor_condicional:'La póliza nivelada sería la mejor si la prioridad principal fuera fijar el costo durante diez años y el cliente pudiera asumir una prima inicial mayor.'
 }]},
{
 id:'manual20_005',area:'vida',subtema_blueprint:'Term Life',concepto:'Return of Premium Term',category:'killer_ready',human_review_status:'pending',variantes:[{
  nivel:5,tipo_trampa:'NECESIDAD_CLIENTE',
  q:'Una profesional de 36 años quiere protección por 20 años mientras sus hijos dependen económicamente de ella. Puede pagar más que por un término tradicional, pero rechaza una póliza permanente porque no desea mantener cobertura de por vida. También le incomoda la idea de terminar el plazo sin recibir nada si sigue viva. ¿Qué recomendación aborda mejor ese conjunto de preferencias?',
  o:['Un término con devolución de prima, aceptando un costo mayor a cambio de recuperar las primas según las condiciones del contrato si sobrevive al plazo','Un término nivelado ordinario, porque cualquier seguro temporal devuelve automáticamente las primas cuando no ocurre una muerte','Una vida entera, porque es la única manera de evitar que las primas pagadas se pierdan al sobrevivir un período determinado','Un término decreciente, porque al reducir el beneficio con los años genera automáticamente un reembolso del exceso de primas'],
  a:0,
  trampa:'La clienta quiere cobertura temporal y valor de devolución, no permanencia ni el costo mínimo.',
  correcto:'El término con devolución de prima está diseñado para quien desea protección temporal y acepta una prima mayor para recibir una devolución contractual si sobrevive el período completo.',
  incorrectos:['El término ordinario no devuelve automáticamente las primas.','Vida entera ofrece permanencia y valor en efectivo, pero contradice su rechazo a cobertura de por vida.','El término decreciente reduce el beneficio; no crea por ello una devolución de primas.'],
  distractor_condicional:'El término nivelado ordinario sería preferible si su prioridad principal fuera obtener la mayor cobertura temporal al menor costo posible.'
 }]},
{
 id:'manual20_007',area:'vida',subtema_blueprint:'Whole Life',concepto:'Maturity',category:'killer_ready',human_review_status:'pending',variantes:[{
  nivel:5,tipo_trampa:'NUMEROS_FECHAS',
  q:'Un dueño de una póliza de vida entera tradicional pregunta qué ocurre si alcanza la edad de madurez indicada en su contrato sin haber fallecido. El agente revisa una póliza antigua cuya tabla contractual fija la madurez cuando el valor en efectivo iguala el monto nominal. ¿Qué explicación es la más correcta para ese contrato tradicional?',
  o:['Al alcanzar la edad contractual de madurez tradicional, usualmente 100 años, el valor acumulado iguala el monto nominal y se paga conforme a las disposiciones de la póliza','La póliza se cancela a los 65 años y el asegurado debe comprar una anualidad con el valor acumulado','El beneficio de muerte aumenta automáticamente al doble a los 95 años porque la aseguradora deja de cobrar prima','La póliza continúa indefinidamente sin posibilidad de madurez porque una vida entera solo paga después del fallecimiento'],
  a:0,
  trampa:'La edad de madurez depende del contrato; en pólizas tradicionales suele ser 100, mientras contratos modernos pueden usar 121.',
  correcto:'En una vida entera tradicional, la edad de madurez suele ser 100 años; al llegar a ella, el valor en efectivo ha alcanzado el monto nominal y el contrato dispone el pago correspondiente.',
  incorrectos:['La edad 65 se relaciona con otros programas y no es la madurez tradicional de vida entera.','No existe una regla general de duplicar el beneficio a los 95 años.','La vida entera puede tener una fecha contractual de madurez aunque sea cobertura permanente.'],
  distractor_condicional:'Una edad distinta, como 121 años, sería correcta si el contrato moderno específico utilizara esa edad de madurez.'
 }]},
{
 id:'manual20_012',area:'vida',subtema_blueprint:'Universal Life',concepto:'Declared Interest Rate',category:'killer_ready',human_review_status:'pending',variantes:[{
  nivel:5,tipo_trampa:'CASI_IDENTICAS',
  q:'El dueño de una póliza Universal Life observa que el interés acreditado este año es menor que el del año anterior. El agente confirma que la aseguradora cambió la tasa acreditada, pero el contrato contiene una tasa mínima. El cliente cree que esto significa que su cuenta está invertida directamente en el S&P 500. ¿Cuál es la explicación más precisa?',
  o:['La aseguradora puede declarar periódicamente la tasa acreditada dentro de las condiciones contractuales, respetando el mínimo garantizado; eso no implica inversión directa en un índice bursátil','La tasa debe permanecer idéntica durante toda la vida porque cualquier cambio convertiría la póliza en un producto variable','El valor se mueve diariamente igual que una subcuenta de fondos mutuos, pero la aseguradora garantiza todas las pérdidas','La tasa solo puede cambiar cuando el propietario cambia también el beneficio de muerte'],
  a:0,
  trampa:'Tasa declarada variable no equivale a inversión directa en mercado ni a tasa fija de por vida.',
  correcto:'En Universal Life tradicional la aseguradora declara la tasa de interés acreditada y puede ajustarla, pero debe respetar el mínimo contractual garantizado.',
  incorrectos:['La tasa no tiene que permanecer idéntica durante toda la vida.','La fluctuación de subcuentas corresponde a productos variables y no implica garantía contra pérdidas.','El cambio de tasa no depende de modificar el beneficio de muerte.'],
  distractor_condicional:'La explicación de subcuentas con valor fluctuante sería correcta en una póliza Variable Universal Life.'
 }]},
{
 id:'manual20_015',area:'vida',subtema_blueprint:'Universal Life',concepto:'Flexible Premium',category:'killer_ready',human_review_status:'pending',variantes:[{
  nivel:5,tipo_trampa:'NECESIDAD_CLIENTE',
  q:'Un trabajador por cuenta propia recibe ingresos altos en temporada y meses con flujo reducido. Quiere cobertura permanente y la posibilidad de ajustar sus desembolsos, pero entiende que dejar de pagar demasiado tiempo puede agotar el valor de la póliza. ¿Qué producto se ajusta mejor a esa prioridad?',
  o:['Universal Life, porque permite flexibilidad de primas dentro de los límites contractuales y la cobertura puede sostenerse mientras haya valor suficiente para cubrir los cargos','Whole Life, porque permite omitir cualquier cantidad de primas sin afectar nunca la vigencia ni las garantías','Term Life anual renovable, porque su prima flexible crea automáticamente valor en efectivo para cubrir meses sin pago','Variable Life, porque toda póliza con inversión en subcuentas permite reducir libremente la prima aunque el contrato establezca una prima fija'],
  a:0,
  trampa:'Flexibilidad no significa ausencia de consecuencias; el valor debe ser suficiente para sostener los cargos.',
  correcto:'Universal Life combina cobertura permanente con flexibilidad de prima, pero la póliza puede caducar si el valor disponible ya no alcanza para cubrir los cargos internos.',
  incorrectos:['Whole Life tradicional usa una estructura de prima fija y omitir pagos puede afectar la póliza.','Term Life no crea valor en efectivo por el hecho de ser renovable.','Variable Life tradicional puede tener prima fija; las subcuentas no hacen flexible la prima por sí mismas.'],
  distractor_condicional:'Whole Life sería preferible si el cliente priorizara garantías de prima fija y crecimiento garantizado por encima de la flexibilidad de pago.'
 }]},
{
 id:'manual20_018',area:'vida',subtema_blueprint:'Variable Products',concepto:'Investment Risk',category:'killer_ready',human_review_status:'pending',variantes:[{
  nivel:5,tipo_trampa:'QUIEN_PAGA',
  q:'Una propietaria de una póliza de vida variable selecciona subcuentas agresivas buscando mayor crecimiento. Meses después el mercado cae y el valor de las subcuentas disminuye. Ella sostiene que la aseguradora debe restaurar la pérdida porque el contrato sigue siendo una póliza de seguro de vida. ¿Cuál es la respuesta más correcta?',
  o:['La propietaria asume el riesgo de inversión de las subcuentas; la aseguradora no garantiza que el valor de esas inversiones se recupere por una caída del mercado','La aseguradora debe reponer toda pérdida porque cualquier producto emitido por una compañía de seguros tiene rendimiento garantizado','El agente asume personalmente la pérdida siempre que haya recomendado alguna de las subcuentas seleccionadas','La FDIC cubre la disminución porque las primas fueron pagadas con fondos depositados originalmente en un banco'],
  a:0,
  trampa:'El emisor del contrato de seguro no convierte las subcuentas variables en inversiones garantizadas.',
  correcto:'En los productos variables, el propietario asume el riesgo de inversión de las subcuentas y su valor puede aumentar o disminuir con el mercado.',
  incorrectos:['La aseguradora no garantiza el rendimiento de las subcuentas variables.','Una recomendación del agente no transfiere automáticamente al agente el riesgo económico de la inversión.','La FDIC protege ciertos depósitos bancarios, no pérdidas de subcuentas de seguros variables.'],
  distractor_condicional:'Una garantía de tasa o valor mínimo sería relevante en un producto fijo o en una garantía contractual específica, no en el desempeño ordinario de subcuentas variables.'
 }]}
];
if(typeof module!=='undefined') module.exports=PK_MIGRATION_MANUAL20_RUN_001_REWRITES;
global.PK_MIGRATION_MANUAL20_RUN_001_REWRITES=PK_MIGRATION_MANUAL20_RUN_001_REWRITES;
})(typeof window!=='undefined'?window:globalThis);
