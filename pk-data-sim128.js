// 128 preguntas del primer simulacro guiado de William.
// Se agregan al banco rotativo sin sustituir ninguna pregunta existente.
(function(){
  'use strict';
  const questions=[
  {
    "id": "sim128_001",
    "q": "Al solicitar una póliza de vida, el asegurado declaró una edad menor que la verdadera. El error se descubre después de su fallecimiento, cuando la póliza llevaba tres años vigente. ¿Qué hará normalmente la aseguradora?",
    "o": [
      "Rechazará completamente la reclamación por declaración falsa",
      "Pagará el beneficio nominal completo porque terminó el periodo de disputabilidad",
      "Ajustará el beneficio a la cantidad que la prima habría comprado usando la edad correcta",
      "Devolverá únicamente las primas pagadas al beneficiario"
    ],
    "a": 2,
    "e": "La declaración incorrecta de edad ajusta el beneficio a lo que la prima habría comprado con la edad correcta.",
    "area": "life",
    "areaLabel": "Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_002",
    "q": "Una póliza individual de seguro de salud exige el pago de primas mensuales. ¿Cuál es el periodo mínimo de gracia que debe concederse para pagar una prima vencida?",
    "o": [
      "7 días",
      "10 días",
      "20 días",
      "31 días"
    ],
    "a": 1,
    "e": "Para primas mensuales, el periodo de gracia es de 10 días.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_003",
    "q": "En un plan de seguro de vida colectivo no contributivo, ¿qué porcentaje de los empleados elegibles debe participar normalmente?",
    "o": [
      "50 %",
      "75 %",
      "90 %",
      "100 %"
    ],
    "a": 3,
    "e": "En un plan no contributivo se requiere normalmente la participación del 100 % de los empleados elegibles.",
    "area": "life",
    "areaLabel": "Vida Colectiva",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_004",
    "q": "Un empleado pierde su cobertura de vida colectiva al terminar su empleo. Si desea convertirla en una póliza individual sin demostrar asegurabilidad, ¿dentro de qué plazo debe ejercer normalmente el derecho de conversión?",
    "o": [
      "10 días",
      "20 días",
      "31 días",
      "60 días"
    ],
    "a": 2,
    "e": "El periodo normal de conversión es de 31 días.",
    "area": "life",
    "areaLabel": "Vida Colectiva",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_005",
    "q": "¿Cuál de las siguientes personas reúne normalmente los requisitos para contribuir a una Cuenta de Ahorros para la Salud (HSA)?",
    "o": [
      "Una persona inscrita en Medicare y cubierta por un plan médico tradicional",
      "Una persona cubierta por un plan de salud con deducible alto calificado y sin otra cobertura médica incompatible",
      "Una persona cubierta únicamente por una cuenta FSA de propósito general de su empleador",
      "Una persona que puede ser reclamada como dependiente en la declaración de impuestos de otra persona"
    ],
    "a": 1,
    "e": "La HSA requiere un HDHP calificado y ausencia de cobertura incompatible.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_006",
    "q": "Una póliza de seguro se considera un contrato de adhesión porque:",
    "o": [
      "Ambas partes negocian por igual cada una de sus cláusulas",
      "El asegurado debe aceptar el contrato preparado por la aseguradora tal como se presenta",
      "Solamente la aseguradora puede cancelar el contrato",
      "El valor intercambiado por las partes debe ser exactamente igual"
    ],
    "a": 1,
    "e": "La aseguradora redacta el contrato y el solicitante lo acepta o rechaza como se presenta.",
    "area": "health",
    "areaLabel": "Contratos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_007",
    "q": "En un contrato de seguro de vida, ¿qué constituye la consideración aportada por el solicitante?",
    "o": [
      "Únicamente la primera prima",
      "Las declaraciones realizadas en la solicitud y el pago de la prima",
      "La promesa de la aseguradora de pagar una reclamación",
      "La entrega física de la póliza por parte del agente"
    ],
    "a": 1,
    "e": "La consideración del solicitante consiste en sus declaraciones y la prima.",
    "area": "health",
    "areaLabel": "Contratos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_008",
    "q": "Las respuestas proporcionadas por un solicitante en una solicitud de seguro se consideran normalmente:",
    "o": [
      "Garantías absolutamente ciertas",
      "Representaciones hechas de buena fe",
      "Condiciones posteriores",
      "Cláusulas de indemnización automática"
    ],
    "a": 1,
    "e": "Las respuestas de la solicitud son representaciones, no garantías absolutas.",
    "area": "health",
    "areaLabel": "Contratos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_009",
    "q": "Un solicitante entrega la primera prima junto con la solicitud y recibe un recibo condicional. Posteriormente completa el examen médico requerido. Si resulta asegurable bajo las condiciones solicitadas, ¿cuándo comenzará normalmente la cobertura?",
    "o": [
      "Cuando la aseguradora emita físicamente la póliza",
      "Cuando el agente entregue la póliza al solicitante",
      "En la fecha de la solicitud o del examen médico, la que ocurra después",
      "Después de que termine el periodo de revisión gratuita"
    ],
    "a": 2,
    "e": "Con recibo condicional, la fecha efectiva suele ser la solicitud o el examen médico, la que ocurra después, si era asegurable como solicitó.",
    "area": "underwriting",
    "areaLabel": "Field Underwriting",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_010",
    "q": "El propietario de una póliza desea cambiar al beneficiario, pero el beneficiario actual fue designado irrevocable. ¿Qué se requiere normalmente para efectuar el cambio?",
    "o": [
      "La autorización del agente que vendió la póliza",
      "El consentimiento del beneficiario irrevocable",
      "Una nueva prueba de asegurabilidad del propietario",
      "Esperar hasta el siguiente aniversario de la póliza"
    ],
    "a": 1,
    "e": "Un beneficiario irrevocable debe consentir el cambio.",
    "area": "life",
    "areaLabel": "Beneficiarios",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_011",
    "q": "¿Qué cláusula de una póliza de vida protege, dentro de los límites legales, el beneficio por fallecimiento contra los acreedores del beneficiario antes de que este lo reciba?",
    "o": [
      "Cláusula de gasto derrochador (spendthrift clause)",
      "Cláusula de suicidio",
      "Cláusula de cesión",
      "Cláusula de reinstalación"
    ],
    "a": 0,
    "e": "La cláusula spendthrift limita el acceso de acreedores antes del pago al beneficiario.",
    "area": "life",
    "areaLabel": "Beneficiarios",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_012",
    "q": "Un asegurado fallece teniendo pendiente un préstamo sobre el valor en efectivo de su póliza de vida entera. ¿Cómo afecta normalmente ese préstamo al beneficio por fallecimiento?",
    "o": [
      "No afecta el beneficio porque el préstamo termina con la muerte",
      "La aseguradora aumenta el beneficio para cubrir los intereses",
      "La deuda pendiente y sus intereses se descuentan del beneficio por fallecimiento",
      "La póliza queda automáticamente anulada y no paga ningún beneficio"
    ],
    "a": 2,
    "e": "El préstamo pendiente y sus intereses reducen el beneficio por fallecimiento.",
    "area": "life",
    "areaLabel": "Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_013",
    "q": "El propietario deja de pagar las primas de una póliza de vida entera y elige usar su valor en efectivo para comprar una póliza de vida entera totalmente pagada, con un beneficio por fallecimiento menor. ¿Qué opción de no caducidad seleccionó?",
    "o": [
      "Seguro a término extendido",
      "Valor de rescate en efectivo",
      "Seguro reducido saldado",
      "Préstamo automático de prima"
    ],
    "a": 2,
    "e": "Reduced paid-up compra vida entera saldada por un monto menor.",
    "area": "life",
    "areaLabel": "Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_014",
    "q": "El propietario deja los dividendos de una póliza participante depositados con la aseguradora para que acumulen intereses. ¿Qué parte está generalmente sujeta a impuestos sobre la renta?",
    "o": [
      "Todo el dividendo y el beneficio por fallecimiento",
      "Solamente los intereses generados por los dividendos",
      "El dividendo completo, pero no los intereses",
      "Ninguna parte, porque todos los dividendos son ganancias de capital"
    ],
    "a": 1,
    "e": "Los dividendos suelen considerarse devolución de prima; los intereses sí son tributables.",
    "area": "life",
    "areaLabel": "Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_015",
    "q": "En una póliza de vida universal con la opción de beneficio por fallecimiento B (creciente), el beneficio pagadero normalmente equivale a:",
    "o": [
      "El monto nominal menos el valor en efectivo",
      "Solamente el valor en efectivo acumulado",
      "El monto nominal más el valor en efectivo acumulado",
      "El mayor entre el monto nominal y las primas pagadas"
    ],
    "a": 2,
    "e": "La opción B paga el monto nominal más el valor en efectivo.",
    "area": "life",
    "areaLabel": "Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_016",
    "q": "En una póliza de vida variable, ¿quién asume principalmente el riesgo de inversión asociado con los fondos de la cuenta separada?",
    "o": [
      "La aseguradora",
      "El propietario de la póliza",
      "El beneficiario",
      "El agente registrado"
    ],
    "a": 1,
    "e": "El propietario asume el riesgo de inversión de la cuenta separada.",
    "area": "life",
    "areaLabel": "Vida Variable",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_017",
    "q": "¿Cuál de los siguientes intercambios puede calificar normalmente como un intercambio libre de impuestos bajo la Sección 1035?",
    "o": [
      "Una anualidad por una póliza de seguro de vida",
      "Una póliza de seguro de vida por una anualidad",
      "Una anualidad por acciones de un fondo mutuo",
      "Una póliza de vida por dinero en efectivo depositado en una cuenta bancaria"
    ],
    "a": 1,
    "e": "La Sección 1035 permite vida a anualidad, pero no anualidad a vida.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_018",
    "q": "¿En qué etapa de una anualidad se convierten las unidades de acumulación en unidades de anualidad y comienzan los pagos periódicos al titular?",
    "o": [
      "Periodo de eliminación",
      "Periodo de acumulación",
      "Periodo de anualización",
      "Periodo de revisión gratuita"
    ],
    "a": 2,
    "e": "Los pagos comienzan en el periodo de anualización.",
    "area": "annuities",
    "areaLabel": "Anualidades",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_019",
    "q": "¿Cuál característica distingue normalmente a una anualidad inmediata?",
    "o": [
      "Se financia mediante pagos periódicos durante muchos años antes de generar ingresos",
      "Comienza a pagar ingresos dentro de los 12 meses siguientes a su compra",
      "Requiere que el titular tenga menos de 59½ años",
      "Garantiza que el valor de la cuenta nunca pueda disminuir en una anualidad variable"
    ],
    "a": 1,
    "e": "Una anualidad inmediata inicia pagos dentro de los 12 meses de la compra.",
    "area": "annuities",
    "areaLabel": "Anualidades",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_020",
    "q": "Una pareja desea recibir pagos de una anualidad mientras cualquiera de los dos permanezca con vida. ¿Qué opción de liquidación satisface mejor ese objetivo?",
    "o": [
      "Vida solamente",
      "Vida con periodo cierto de 10 años",
      "Conjunta y de sobreviviente",
      "Reembolso en efectivo"
    ],
    "a": 2,
    "e": "Joint and survivor continúa mientras cualquiera de los dos viva.",
    "area": "annuities",
    "areaLabel": "Anualidades",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_021",
    "q": "Una póliza médica tiene un deducible anual de $500 y una cláusula de coaseguro 80/20. El asegurado incurre en $5,000 de gastos cubiertos y aún no ha pagado nada del deducible. Sin considerar copagos ni límites máximos, ¿cuánto pagará la aseguradora?",
    "o": [
      "$3,500",
      "$3,600",
      "$4,000",
      "$4,500"
    ],
    "a": 1,
    "e": "Después del deducible quedan $4,500; el 80 % equivale a $3,600.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_022",
    "q": "¿Cuál es el propósito principal de la disposición de coordinación de beneficios cuando una persona está cubierta por más de un plan médico colectivo?",
    "o": [
      "Permitir que el asegurado cobre de todos los planes y obtenga ganancias",
      "Determinar el orden de pago y evitar que el total exceda los gastos cubiertos",
      "Sustituir automáticamente el plan primario por Medicare",
      "Eliminar todos los deducibles del plan secundario"
    ],
    "a": 1,
    "e": "La coordinación determina el pagador primario y evita sobreindemnización.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_023",
    "q": "Un cirujano pierde permanentemente la destreza necesaria para operar, pero aún puede enseñar medicina. Su póliza de incapacidad define incapacidad total como la imposibilidad de realizar las funciones principales de su ocupación habitual. ¿Qué definición utiliza la póliza?",
    "o": [
      "Cualquier ocupación",
      "Ocupación propia",
      "Incapacidad residual",
      "Pérdida presunta"
    ],
    "a": 1,
    "e": "Own occupation considera la ocupación habitual del asegurado.",
    "area": "health",
    "areaLabel": "Incapacidad",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_024",
    "q": "En una póliza de ingresos por incapacidad, el periodo de eliminación es:",
    "o": [
      "El tiempo durante el cual se pagan beneficios reducidos",
      "El periodo de espera que debe transcurrir antes de comenzar el pago de beneficios",
      "El plazo para reinstalar una póliza vencida",
      "El periodo en que la aseguradora puede disputar una reclamación"
    ],
    "a": 1,
    "e": "El periodo de eliminación es el tiempo de espera antes de pagar beneficios.",
    "area": "health",
    "areaLabel": "Incapacidad",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_025",
    "q": "Después de una enfermedad, una persona puede regresar a trabajar a tiempo parcial, pero gana solamente el 60 % de sus ingresos anteriores. ¿Qué beneficio está diseñado para compensar parte de esa pérdida proporcional?",
    "o": [
      "Incapacidad residual",
      "Muerte accidental",
      "Exención de prima del pagador",
      "Indemnización hospitalaria"
    ],
    "a": 0,
    "e": "La incapacidad residual paga según la pérdida proporcional de ingresos.",
    "area": "health",
    "areaLabel": "Incapacidad",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_026",
    "q": "¿Cuál de las siguientes pérdidas suele considerarse una incapacidad presunta, permitiendo el pago del beneficio total aunque el asegurado pueda realizar alguna actividad laboral?",
    "o": [
      "Pérdida temporal de la voz",
      "Pérdida total e irreversible de la vista en ambos ojos",
      "Fractura de un brazo durante seis semanas",
      "Reducción del 20 % de los ingresos"
    ],
    "a": 1,
    "e": "La pérdida total de la vista en ambos ojos es una incapacidad presunta típica.",
    "area": "health",
    "areaLabel": "Incapacidad",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_027",
    "q": "Un empleado sufre una lesión mientras realiza sus funciones laborales. ¿Qué cobertura está diseñada principalmente para pagar los gastos médicos y la pérdida de ingresos relacionados con esa lesión ocupacional?",
    "o": [
      "Medicare Supplement",
      "Seguro de compensación laboral",
      "Póliza individual de gastos médicos no ocupacionales",
      "Seguro de crédito por incapacidad"
    ],
    "a": 1,
    "e": "Workers compensation cubre lesiones ocupacionales.",
    "area": "health",
    "areaLabel": "Salud",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_028",
    "q": "¿Qué parte de Medicare cubre principalmente los servicios de médicos, la atención ambulatoria y ciertos servicios preventivos?",
    "o": [
      "Parte A",
      "Parte B",
      "Parte C exclusivamente",
      "Parte D"
    ],
    "a": 1,
    "e": "Medicare Parte B cubre servicios médicos y ambulatorios.",
    "area": "medicare",
    "areaLabel": "Medicare",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_029",
    "q": "El periodo inicial de inscripción en Medicare para una persona que cumple 65 años normalmente dura:",
    "o": [
      "3 meses: el mes en que cumple 65 años y los dos meses siguientes",
      "6 meses: solamente después de cumplir 65 años",
      "7 meses: tres meses antes, el mes en que cumple 65 años y tres meses después",
      "12 meses a partir de la fecha en que solicita Seguro Social"
    ],
    "a": 2,
    "e": "El Initial Enrollment Period dura siete meses.",
    "area": "medicare",
    "areaLabel": "Medicare",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_030",
    "q": "¿Cuál afirmación describe correctamente a Medicaid?",
    "o": [
      "Es un programa federal exclusivo para todas las personas mayores de 65 años",
      "Es un programa financiado conjuntamente por los gobiernos federal y estatal para personas que cumplen requisitos establecidos",
      "Es una póliza privada suplementaria que cubre únicamente los deducibles de Medicare",
      "Es una parte de Medicare destinada exclusivamente a medicamentos recetados"
    ],
    "a": 1,
    "e": "Medicaid es un programa conjunto federal-estatal basado en elegibilidad.",
    "area": "florida",
    "areaLabel": "Medicaid",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_031",
    "q": "Un niño de 3 años no reúne los requisitos de ingresos para Medicaid, pero la familia sí está dentro de los límites aplicables de Florida KidCare. ¿A qué componente se le dirigiría principalmente según su edad?",
    "o": [
      "Florida Healthy Kids",
      "MediKids",
      "Medicare Parte C",
      "Medigap"
    ],
    "a": 1,
    "e": "MediKids está dirigido principalmente a niños de 1 a 4 años.",
    "area": "florida",
    "areaLabel": "Florida KidCare",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_032",
    "q": "Dentro de Florida KidCare, ¿qué componente está dirigido a niños con necesidades médicas especiales o condiciones crónicas?",
    "o": [
      "MediKids",
      "Florida Healthy Kids",
      "CMS Plan",
      "Medicare Advantage"
    ],
    "a": 2,
    "e": "CMS Plan atiende a niños con necesidades médicas especiales.",
    "area": "florida",
    "areaLabel": "Florida KidCare",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_033",
    "q": "Para que una póliza de cuidado a largo plazo fiscalmente calificada pague beneficios por incapacidad funcional, un profesional autorizado normalmente debe certificar que la persona no puede realizar sin ayuda sustancial:",
    "o": [
      "Una actividad de la vida diaria durante 30 días",
      "Dos de las seis actividades de la vida diaria durante un periodo esperado de al menos 90 días",
      "Tres actividades instrumentales de la vida diaria durante seis meses",
      "Cualquier tarea doméstica durante 12 meses"
    ],
    "a": 1,
    "e": "La activación típica exige incapacidad para dos de seis ADL por al menos 90 días o deterioro cognitivo severo.",
    "area": "ltc",
    "areaLabel": "Cuidado a Largo Plazo",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_034",
    "q": "Una persona necesita ayuda para bañarse, vestirse y comer, pero no requiere atención médica continua de profesionales. ¿Qué tipo de cuidado describe mejor esta situación?",
    "o": [
      "Cuidado agudo",
      "Cuidado custodial",
      "Cuidado intensivo",
      "Cuidado quirúrgico ambulatorio"
    ],
    "a": 1,
    "e": "El cuidado custodial ayuda con actividades de la vida diaria.",
    "area": "ltc",
    "areaLabel": "Cuidado a Largo Plazo",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_035",
    "q": "¿Qué cláusula adicional de una póliza de cuidado a largo plazo está diseñada para aumentar los beneficios con el tiempo y ayudar a compensar el incremento del costo de la atención?",
    "o": [
      "Beneficio del pagador",
      "Protección contra la inflación",
      "Muerte accidental",
      "Asegurabilidad garantizada"
    ],
    "a": 1,
    "e": "La protección contra inflación aumenta los beneficios con el tiempo.",
    "area": "ltc",
    "areaLabel": "Cuidado a Largo Plazo",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_036",
    "q": "En una HMO tradicional, ¿qué función desempeña normalmente el médico de atención primaria (Primary Care Physician — PCP)?",
    "o": [
      "Actúa como coordinador o puerta de entrada para la atención y las remisiones a especialistas",
      "Autoriza exclusivamente los servicios médicos fuera de la red",
      "Determina las primas que pagará cada afiliado",
      "Sustituye a la aseguradora en el pago de todas las reclamaciones"
    ],
    "a": 0,
    "e": "El PCP coordina la atención y las remisiones.",
    "area": "health",
    "areaLabel": "HMO / PPO",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_037",
    "q": "Una persona asegurada por una PPO decide recibir atención de un médico fuera de la red. ¿Qué ocurre normalmente?",
    "o": [
      "La póliza queda cancelada inmediatamente",
      "No existe ninguna cobertura fuera de la red",
      "Puede recibir cobertura, pero generalmente paga una proporción mayor de los costos",
      "La PPO debe cobrarle exactamente lo mismo que dentro de la red"
    ],
    "a": 2,
    "e": "Una PPO suele cubrir fuera de la red con mayor costo para el asegurado.",
    "area": "health",
    "areaLabel": "HMO / PPO",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_038",
    "q": "Un miembro de una HMO sufre una emergencia médica grave mientras viaja fuera del área de servicio. ¿Cómo se maneja normalmente la atención de emergencia?",
    "o": [
      "No se cubre porque ocurrió fuera del área de la HMO",
      "Puede estar cubierta aunque se reciba fuera de la red, conforme a las condiciones de emergencia del plan",
      "Solo se cubre si el miembro regresa primero a su médico primario",
      "Se cubre únicamente después de cambiarse a una PPO"
    ],
    "a": 1,
    "e": "Las emergencias pueden cubrirse fuera de la red según las condiciones del plan.",
    "area": "health",
    "areaLabel": "HMO / PPO",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_039",
    "q": "Un empleado pierde la cobertura médica colectiva debido a la terminación de su empleo por una razón distinta de conducta indebida grave. ¿Por cuánto tiempo puede continuar normalmente la cobertura bajo COBRA?",
    "o": [
      "6 meses",
      "12 meses",
      "18 meses",
      "36 meses"
    ],
    "a": 2,
    "e": "La terminación o reducción de horas normalmente permite 18 meses de COBRA.",
    "area": "health",
    "areaLabel": "COBRA",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_040",
    "q": "Una persona elige continuar su cobertura médica colectiva bajo COBRA. ¿Qué porcentaje máximo de la prima total del plan puede exigírsele normalmente que pague?",
    "o": [
      "50 %",
      "75 %",
      "100 %",
      "102 %"
    ],
    "a": 3,
    "e": "COBRA puede exigir hasta el 102 % del costo total.",
    "area": "health",
    "areaLabel": "COBRA",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_041",
    "q": "Una aseguradora rechaza una solicitud basándose en información obtenida de un informe del consumidor. Conforme a la Fair Credit Reporting Act (FCRA), ¿qué debe hacer la aseguradora?",
    "o": [
      "Mantener en secreto la existencia del informe",
      "Informar al solicitante sobre la decisión adversa y proporcionarle la información requerida sobre la agencia que suministró el informe",
      "Entregar al agente una copia completa del expediente médico",
      "Aprobar automáticamente la solicitud con una prima más alta"
    ],
    "a": 1,
    "e": "La FCRA exige aviso de acción adversa e información sobre la agencia de informes.",
    "area": "underwriting",
    "areaLabel": "Field Underwriting",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_042",
    "q": "¿Cuál es la función principal del Medical Information Bureau (MIB) en el proceso de suscripción?",
    "o": [
      "Emitir pólizas directamente a los solicitantes",
      "Proporcionar información codificada que ayuda a las aseguradoras a detectar posibles omisiones o declaraciones inconsistentes",
      "Determinar legalmente la causa de muerte del asegurado",
      "Establecer las tarifas obligatorias de todas las aseguradoras"
    ],
    "a": 1,
    "e": "El MIB aporta información codificada para detectar inconsistencias.",
    "area": "underwriting",
    "areaLabel": "Field Underwriting",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_043",
    "q": "¿En qué momento debe existir el interés asegurable para que una póliza de seguro de vida sea válida?",
    "o": [
      "Únicamente cuando fallece el asegurado",
      "Cuando se origina la póliza",
      "En cada aniversario de la póliza",
      "Solamente cuando se cambia al beneficiario"
    ],
    "a": 1,
    "e": "En vida, el interés asegurable debe existir al originarse la póliza.",
    "area": "life",
    "areaLabel": "Interés Asegurable",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_044",
    "q": "Un inversionista sin relación ni interés asegurable en una persona la convence para comprar una póliza de vida con la intención, desde el comienzo, de transferírsela a cambio de dinero. ¿Cómo se conoce normalmente este acuerdo?",
    "o": [
      "Seguro de persona clave",
      "Acuerdo de compraventa",
      "STOLI (Stranger-Originated Life Insurance)",
      "Seguro de vida crediticio"
    ],
    "a": 2,
    "e": "STOLI se origina para beneficio de un extraño sin interés asegurable.",
    "area": "life",
    "areaLabel": "Interés Asegurable",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_045",
    "q": "Una empresa compra una póliza sobre la vida de su ejecutivo principal, paga las primas y es designada beneficiaria. ¿Qué tipo de seguro es?",
    "o": [
      "Seguro de persona clave",
      "Seguro de vida colectivo contributivo",
      "Seguro de crédito",
      "Plan de jubilación calificado"
    ],
    "a": 0,
    "e": "La empresa es propietaria y beneficiaria de un seguro de persona clave.",
    "area": "health",
    "areaLabel": "Usos Empresariales",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_046",
    "q": "En un acuerdo de compraventa empresarial de tipo compra cruzada (cross-purchase) financiado con seguros de vida, ¿quiénes suelen ser propietarios y beneficiarios de las pólizas sobre la vida de cada socio?",
    "o": [
      "La propia empresa",
      "Los demás socios",
      "Los empleados de la empresa",
      "Los herederos de cada socio"
    ],
    "a": 1,
    "e": "En cross-purchase, cada socio asegura a los demás.",
    "area": "health",
    "areaLabel": "Usos Empresariales",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_047",
    "q": "¿Qué describe mejor un plan de seguro de vida split-dollar?",
    "o": [
      "Dos aseguradoras dividen por igual una misma reclamación",
      "Un empleador y un empleado comparten determinados costos y beneficios de una póliza de vida",
      "El beneficio por fallecimiento se divide obligatoriamente entre dos beneficiarios",
      "Una póliza de término se convierte automáticamente en dos pólizas permanentes"
    ],
    "a": 1,
    "e": "Split-dollar comparte costos y beneficios entre empleador y empleado.",
    "area": "health",
    "areaLabel": "Usos Empresariales",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_048",
    "q": "El propietario de una póliza con una enfermedad terminal vende su póliza a un tercero por una cantidad superior al valor de rescate, pero inferior al beneficio por fallecimiento. Esta transacción se denomina:",
    "o": [
      "Intercambio 1035",
      "Liquidación viática",
      "Préstamo sobre la póliza",
      "Cesión colateral"
    ],
    "a": 1,
    "e": "Una liquidación viática implica la venta por enfermedad terminal.",
    "area": "life",
    "areaLabel": "Liquidaciones",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_049",
    "q": "¿Qué cláusula permite a un asegurado que cumple determinadas condiciones de enfermedad terminal recibir anticipadamente una parte del beneficio por fallecimiento de su propia póliza?",
    "o": [
      "Beneficio acelerado por fallecimiento",
      "Beneficio del pagador",
      "Opción de seguro reducido saldado",
      "Cláusula de asegurabilidad garantizada"
    ],
    "a": 0,
    "e": "El accelerated death benefit adelanta parte del beneficio por fallecimiento.",
    "area": "life",
    "areaLabel": "Cláusulas de Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_050",
    "q": "En una póliza de vida juvenil, ¿qué cláusula mantiene normalmente la póliza vigente sin exigir primas si la persona que las paga fallece o queda totalmente incapacitada antes de que el menor alcance la edad especificada?",
    "o": [
      "Exención de prima del asegurado",
      "Beneficio del pagador",
      "Beneficio por muerte accidental",
      "Opción de término extendido"
    ],
    "a": 1,
    "e": "Payor benefit exime las primas si el pagador muere o queda incapacitado.",
    "area": "life",
    "areaLabel": "Cláusulas de Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_051",
    "q": "Una cláusula de exención de prima por incapacidad suele comenzar a eximir las primas después de que el asegurado permanece totalmente incapacitado durante:",
    "o": [
      "Un periodo de espera especificado, comúnmente seis meses",
      "Solamente 24 horas",
      "Dos años completos en todos los casos",
      "El periodo de revisión gratuita"
    ],
    "a": 0,
    "e": "La exención suele tener un periodo de espera de seis meses.",
    "area": "life",
    "areaLabel": "Cláusulas de Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_052",
    "q": "Una cláusula de beneficio por muerte accidental pagará normalmente un beneficio adicional cuando:",
    "o": [
      "El asegurado fallezca por cualquier enfermedad durante el primer año",
      "La muerte resulte directamente de un accidente cubierto y ocurra dentro del plazo establecido en la cláusula",
      "El asegurado sobreviva hasta el vencimiento de la póliza",
      "El valor en efectivo sea mayor que el monto nominal"
    ],
    "a": 1,
    "e": "La muerte debe resultar del accidente cubierto y ocurrir dentro del plazo contractual.",
    "area": "life",
    "areaLabel": "Cláusulas de Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_053",
    "q": "¿Qué cláusula permite al propietario comprar cantidades adicionales de seguro de vida en fechas u ocasiones específicas sin presentar nuevas pruebas de asegurabilidad?",
    "o": [
      "Cláusula de asegurabilidad garantizada",
      "Cláusula de suicidio",
      "Cláusula de gasto derrochador",
      "Cláusula de cesión colateral"
    ],
    "a": 0,
    "e": "Guaranteed insurability permite compras adicionales sin nueva evidencia médica.",
    "area": "life",
    "areaLabel": "Cláusulas de Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_054",
    "q": "¿Qué tipo de seguro de vida se utiliza comúnmente para cubrir una deuda hipotecaria cuyo saldo disminuye con el tiempo?",
    "o": [
      "Vida entera de prima limitada",
      "Seguro a término decreciente",
      "Seguro a término creciente",
      "Vida universal con beneficio creciente"
    ],
    "a": 1,
    "e": "El término decreciente acompaña la reducción del saldo hipotecario.",
    "area": "life",
    "areaLabel": "Vida a Término",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_055",
    "q": "Una póliza de vida a término convertible permite al asegurado:",
    "o": [
      "Cambiarla por una póliza permanente sin demostrar nuevamente asegurabilidad, dentro del plazo permitido",
      "Convertir el beneficio por fallecimiento en una cuenta bancaria libre de impuestos",
      "Reducir automáticamente todas las primas cada año",
      "Transferir la póliza a cualquier persona sin interés asegurable desde su origen"
    ],
    "a": 0,
    "e": "La conversión permite pasar a cobertura permanente sin nueva prueba de asegurabilidad.",
    "area": "life",
    "areaLabel": "Vida a Término",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_056",
    "q": "Al renovar una póliza de vida a término renovable, ¿en qué se basa normalmente la nueva prima?",
    "o": [
      "En la edad original del asegurado al comprar la primera póliza",
      "En la edad alcanzada por el asegurado al momento de la renovación",
      "Únicamente en el valor en efectivo acumulado",
      "En la edad del beneficiario principal"
    ],
    "a": 1,
    "e": "La renovación se tarifa normalmente según la edad alcanzada.",
    "area": "life",
    "areaLabel": "Vida a Término",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_057",
    "q": "¿Cuál característica corresponde normalmente a una póliza de vida entera tradicional?",
    "o": [
      "Primas ajustables sin límite y ausencia de valor en efectivo",
      "Prima nivelada, beneficio por fallecimiento garantizado y acumulación de valor en efectivo garantizado",
      "Cobertura temporal que termina obligatoriamente cada año",
      "Beneficio por fallecimiento dependiente exclusivamente del rendimiento de una cuenta separada"
    ],
    "a": 1,
    "e": "Whole life tradicional ofrece prima nivelada y garantías de beneficio y valor en efectivo.",
    "area": "life",
    "areaLabel": "Vida Entera",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_058",
    "q": "Una póliza de vida entera 20-pay proporciona:",
    "o": [
      "Cobertura solamente durante 20 años",
      "Cobertura de por vida con primas programadas para quedar totalmente pagadas después de 20 años",
      "Beneficios por fallecimiento pagaderos en 20 cuotas obligatorias",
      "Una prima que aumenta anualmente durante 20 años"
    ],
    "a": 1,
    "e": "Limited-pay whole life conserva cobertura vitalicia y termina las primas tras 20 años.",
    "area": "life",
    "areaLabel": "Vida Entera",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_059",
    "q": "Una póliza de vida se clasifica como contrato de dotación modificado (MEC) porque no cumple la prueba de siete pagos. Si el propietario retira fondos, ¿cómo se gravan normalmente las distribuciones?",
    "o": [
      "Primero se recupera la base de costo libre de impuestos en todos los casos",
      "Se consideran primero ganancias sujetas a impuestos y podría aplicarse una penalidad adicional antes de los 59½ años",
      "Todos los retiros están completamente libres de impuestos",
      "Solamente se gravan después del fallecimiento del asegurado"
    ],
    "a": 1,
    "e": "Las distribuciones MEC se tratan LIFO; las ganancias salen primero y puede aplicar penalidad.",
    "area": "life",
    "areaLabel": "Vida",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_060",
    "q": "Una póliza de dotación (endowment) paga el monto nominal:",
    "o": [
      "Solamente si el asegurado muere durante el primer año",
      "Al asegurado si vive hasta la fecha de vencimiento o al beneficiario si fallece antes",
      "Únicamente cuando se agota el valor en efectivo",
      "Exclusivamente en pagos mensuales durante la jubilación"
    ],
    "a": 1,
    "e": "Endowment paga al vencimiento si vive o al beneficiario si muere antes.",
    "area": "life",
    "areaLabel": "Vida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_061",
    "q": "Para que un trabajador alcance normalmente la condición de totalmente asegurado (fully insured) bajo el Seguro Social, ¿cuál es el número máximo de créditos laborales que puede requerirse?",
    "o": [
      "20 créditos",
      "30 créditos",
      "40 créditos",
      "60 créditos"
    ],
    "a": 2,
    "e": "El máximo requerido para fully insured es 40 créditos.",
    "area": "retirement",
    "areaLabel": "Seguro Social",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_062",
    "q": "Después de que una persona cumple la definición de incapacidad del Seguro Social, ¿cuál es normalmente el periodo de espera antes de comenzar a recibir beneficios monetarios por incapacidad?",
    "o": [
      "30 días",
      "3 meses",
      "5 meses completos",
      "12 meses"
    ],
    "a": 2,
    "e": "SSDI tiene normalmente cinco meses completos de espera.",
    "area": "retirement",
    "areaLabel": "Seguro Social",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_063",
    "q": "¿Cuál es una característica general de un plan de jubilación calificado?",
    "o": [
      "Las aportaciones nunca reciben tratamiento fiscal favorable",
      "Debe cumplir los requisitos del IRS y las ganancias suelen crecer con impuestos diferidos",
      "Solo puede cubrir a los propietarios de la empresa",
      "Permite retirar todas las ganancias libres de impuestos a cualquier edad"
    ],
    "a": 1,
    "e": "Los planes calificados cumplen requisitos del IRS y ofrecen crecimiento con impuestos diferidos.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_064",
    "q": "¿Qué plan permite normalmente que un empleado de una empresa privada destine parte de su salario antes de impuestos a una cuenta de jubilación patrocinada por el empleador?",
    "o": [
      "Plan 401(k)",
      "Plan 529",
      "Medicare Parte A",
      "Cuenta Coverdell exclusivamente"
    ],
    "a": 0,
    "e": "El 401(k) permite diferimiento salarial en empresas privadas.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_065",
    "q": "¿Para quién está diseñado principalmente un plan 403(b)?",
    "o": [
      "Empleados de ciertas escuelas públicas y organizaciones exentas de impuestos",
      "Únicamente propietarios de corporaciones con fines de lucro",
      "Personas cubiertas exclusivamente por Medicare",
      "Menores que ahorran para estudios universitarios"
    ],
    "a": 0,
    "e": "El 403(b) corresponde a ciertas escuelas y organizaciones exentas.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_066",
    "q": "Un trabajador por cuenta propia desea establecer un plan de jubilación sencillo que permita realizar aportaciones empresariales a cuentas IRA para él y para empleados elegibles. ¿Qué plan sería el más apropiado?",
    "o": [
      "SEP-IRA",
      "Plan 529",
      "Roth IRA heredada",
      "Medicare Advantage"
    ],
    "a": 0,
    "e": "SEP-IRA es apropiado para autónomos y pequeños empleadores.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_067",
    "q": "¿Cuál afirmación describe normalmente una IRA tradicional?",
    "o": [
      "Las aportaciones siempre son deducibles sin importar los ingresos o la participación en otros planes",
      "Las ganancias crecen con impuestos diferidos y las distribuciones tributables se gravan generalmente como ingreso ordinario",
      "Todas las distribuciones están libres de impuestos si la cuenta existe cinco años",
      "No está sujeta a reglas de distribución mínima requerida"
    ],
    "a": 1,
    "e": "La IRA tradicional difiere impuestos y grava distribuciones tributables como ingreso ordinario.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_068",
    "q": "¿Cuándo está normalmente libre de impuestos una distribución calificada de una Roth IRA?",
    "o": [
      "Cuando han transcurrido al menos cinco años y se cumple una condición calificante, como alcanzar los 59½ años",
      "Inmediatamente después de realizar cualquier aportación, incluyendo todas las ganancias",
      "Solamente cuando el titular alcanza los 70 años",
      "Únicamente si las aportaciones fueron deducibles de impuestos"
    ],
    "a": 0,
    "e": "Una distribución calificada requiere cinco años y una condición calificante.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_069",
    "q": "¿Cuál es la principal ventaja fiscal de un plan 529?",
    "o": [
      "Las aportaciones son siempre deducibles del impuesto federal sobre la renta",
      "Las ganancias pueden retirarse libres de impuestos federales cuando se utilizan para gastos educativos calificados",
      "Garantiza una beca completa sin importar el saldo",
      "Permite deducir cualquier retiro utilizado para gastos personales"
    ],
    "a": 1,
    "e": "Los retiros para educación calificada pueden ser libres de impuesto federal.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_070",
    "q": "¿Cuál es uno de los propósitos principales de ERISA?",
    "o": [
      "Regular exclusivamente las pólizas individuales de automóvil",
      "Establecer normas federales de información, responsabilidad fiduciaria y protección para muchos planes de beneficios patrocinados por empleadores privados",
      "Garantizar beneficios médicos gratuitos para todas las personas",
      "Sustituir al Seguro Social con planes empresariales"
    ],
    "a": 1,
    "e": "ERISA establece normas federales para muchos planes privados de beneficios.",
    "area": "retirement",
    "areaLabel": "Retiro",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_071",
    "q": "En una póliza individual de salud, la disposición de contrato completo (entire contract) establece generalmente que el contrato está compuesto por:",
    "o": [
      "La póliza, las solicitudes adjuntas y cualquier endoso o cláusula incorporada",
      "Únicamente las declaraciones verbales del agente",
      "La póliza y cualquier anuncio publicitario de la aseguradora",
      "Solo el recibo de la primera prima"
    ],
    "a": 0,
    "e": "El contrato completo incluye póliza, solicitud adjunta y endosos incorporados.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_072",
    "q": "Después de que una póliza individual de salud ha estado vigente durante dos años, la disposición de límite de tiempo para ciertas defensas generalmente impide que la aseguradora:",
    "o": [
      "Cancele la póliza por falta de pago de primas",
      "Niegue una reclamación basándose en declaraciones incorrectas no fraudulentas incluidas en la solicitud",
      "Solicite pruebas de pérdida",
      "Aplique el deducible establecido en el contrato"
    ],
    "a": 1,
    "e": "Tras dos años no pueden usarse declaraciones incorrectas no fraudulentas para negar la reclamación.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_073",
    "q": "La disposición uniforme de aviso de reclamación (notice of claim) exige normalmente que el asegurado notifique la pérdida a la aseguradora dentro de:",
    "o": [
      "10 días",
      "20 días",
      "60 días",
      "90 días"
    ],
    "a": 1,
    "e": "Notice of claim debe darse normalmente dentro de 20 días.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_074",
    "q": "Después de recibir el aviso de reclamación, ¿dentro de cuántos días debe la aseguradora proporcionar normalmente al reclamante los formularios necesarios para presentar la prueba de pérdida?",
    "o": [
      "5 días",
      "10 días",
      "15 días",
      "30 días"
    ],
    "a": 2,
    "e": "La aseguradora debe enviar los formularios en 15 días.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_075",
    "q": "La disposición uniforme de prueba de pérdida (proof of loss) exige normalmente que el asegurado presente la prueba escrita dentro de:",
    "o": [
      "20 días después de la pérdida",
      "31 días después de la pérdida",
      "60 días después de la pérdida",
      "90 días después de la pérdida"
    ],
    "a": 3,
    "e": "Proof of loss se presenta normalmente dentro de 90 días.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_076",
    "q": "Bajo la disposición de tiempo para el pago de reclamaciones, los beneficios por una pérdida cubierta que no sean pagos periódicos deben pagarse normalmente:",
    "o": [
      "Inmediatamente después de recibir la debida prueba escrita de pérdida",
      "Únicamente al finalizar el año calendario",
      "Después de un periodo obligatorio de seis meses",
      "Cuando el agente autorice personalmente el pago"
    ],
    "a": 0,
    "e": "Los beneficios no periódicos se pagan inmediatamente tras recibir prueba debida.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_077",
    "q": "Según la disposición uniforme de acciones legales, el asegurado no puede iniciar una demanda contra la aseguradora hasta que hayan transcurrido al menos:",
    "o": [
      "20 días desde el aviso de reclamación",
      "30 días desde la emisión de la póliza",
      "60 días desde la presentación de la prueba escrita de pérdida",
      "90 días desde el comienzo de la incapacidad"
    ],
    "a": 2,
    "e": "No puede demandarse antes de 60 días desde la prueba de pérdida.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_078",
    "q": "La disposición de examen físico y autopsia permite normalmente que la aseguradora:",
    "o": [
      "Examine al asegurado razonablemente durante una reclamación y realice una autopsia cuando la ley lo permita, a costa de la aseguradora",
      "Exija cualquier cirugía como condición para pagar beneficios",
      "Realice exámenes únicamente a costa del beneficiario",
      "Cambie el diagnóstico del médico sin revisar al asegurado"
    ],
    "a": 0,
    "e": "La aseguradora paga exámenes razonables y autopsia cuando la ley lo permite.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_079",
    "q": "En una póliza individual de salud que incluye beneficio por muerte accidental, la disposición de cambio de beneficiario permite normalmente al propietario:",
    "o": [
      "Cambiar un beneficiario revocable sin su consentimiento",
      "Cambiar un beneficiario irrevocable sin su consentimiento",
      "Cambiar al asegurado cubierto en cualquier momento",
      "Eliminar automáticamente todos los beneficiarios al renovar la póliza"
    ],
    "a": 0,
    "e": "Un beneficiario revocable puede cambiarse sin su consentimiento.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_080",
    "q": "Una póliza individual de salud vencida se reinstala. ¿Cuándo queda normalmente cubierta una pérdida posterior a la reinstalación?",
    "o": [
      "Los accidentes inmediatamente y las enfermedades que comiencen después de 10 días",
      "Tanto accidentes como enfermedades solamente después de 30 días",
      "Las enfermedades inmediatamente, pero los accidentes después de 10 días",
      "Ninguna pérdida hasta el siguiente aniversario de la póliza"
    ],
    "a": 0,
    "e": "Tras reinstalación, accidentes quedan cubiertos inmediatamente y enfermedades después de 10 días.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_081",
    "q": "Si la edad del asegurado fue declarada incorrectamente en una póliza individual de salud, la disposición correspondiente permite normalmente que la aseguradora:",
    "o": [
      "Anule automáticamente toda la cobertura",
      "Ajuste los beneficios a la cantidad que las primas pagadas habrían comprado para la edad correcta",
      "Duplique el deducible sin modificar los beneficios",
      "Devuelva todas las primas y rechace cualquier reclamación"
    ],
    "a": 1,
    "e": "Los beneficios se ajustan a lo comprado por la prima a la edad correcta.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_082",
    "q": "¿Cuál es el propósito de la disposición opcional de relación de ingresos con el seguro en una póliza de incapacidad?",
    "o": [
      "Garantizar que el beneficio siempre supere los ingresos laborales anteriores",
      "Evitar el sobreseguro ajustando los beneficios cuando la cobertura total excede una proporción razonable de los ingresos",
      "Permitir que el agente cambie los ingresos declarados",
      "Eliminar el periodo de eliminación"
    ],
    "a": 1,
    "e": "La disposición evita que los beneficios excedan razonablemente los ingresos.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_083",
    "q": "Un asegurado cambia a una ocupación considerablemente más peligrosa y posteriormente sufre una pérdida relacionada. Si la póliza contiene la disposición de cambio de ocupación, la aseguradora puede normalmente:",
    "o": [
      "Aumentar el beneficio sin cobrar prima adicional",
      "Ajustar el beneficio a la cantidad que la prima pagada habría comprado para la ocupación más peligrosa",
      "Cancelar retroactivamente todas las pólizas del asegurado",
      "Negarse siempre a pagar cualquier cantidad"
    ],
    "a": 1,
    "e": "El beneficio se ajusta a lo que la prima compraría en la ocupación más peligrosa.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_084",
    "q": "Si una póliza contiene la disposición opcional de ocupación ilegal, la aseguradora puede negar responsabilidad por una pérdida que ocurra:",
    "o": [
      "Mientras el asegurado participa en un delito o realiza una ocupación ilegal",
      "Durante cualquier actividad recreativa legal",
      "Mientras el asegurado trabaja horas extras",
      "Después de cambiar legalmente de empleo"
    ],
    "a": 0,
    "e": "La pérdida durante delito u ocupación ilegal puede excluirse.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_085",
    "q": "La disposición opcional sobre intoxicantes y narcóticos permite normalmente que una aseguradora limite o niegue una reclamación cuando la pérdida se debe a que el asegurado:",
    "o": [
      "Tomó un medicamento correctamente recetado por un médico",
      "Estaba intoxicado o utilizó narcóticos no administrados por recomendación médica",
      "Consumió una bebida con cafeína",
      "No informó un cambio de domicilio"
    ],
    "a": 1,
    "e": "La disposición se aplica a intoxicación o narcóticos no prescritos.",
    "area": "health",
    "areaLabel": "Provisiones de Salud",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_086",
    "q": "Un plan médico exige aprobación antes de una hospitalización programada. Este proceso se denomina:",
    "o": [
      "Coordinación de beneficios",
      "Preautorización o precertificación",
      "Conversión de póliza",
      "Reinstalación automática"
    ],
    "a": 1,
    "e": "La aprobación anticipada es preauthorization o precertification.",
    "area": "health",
    "areaLabel": "Atención Administrada",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_087",
    "q": "¿Qué proceso utiliza un plan de atención administrada para evaluar si los servicios médicos son necesarios, apropiados y prestados de manera eficiente?",
    "o": [
      "Revisión de utilización (utilization review)",
      "Suscripción de vida",
      "Cesión absoluta",
      "Liquidación viática"
    ],
    "a": 0,
    "e": "Utilization review evalúa necesidad y eficiencia de los servicios.",
    "area": "health",
    "areaLabel": "Atención Administrada",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_088",
    "q": "Bajo un acuerdo de capitación, un proveedor médico recibe normalmente:",
    "o": [
      "Un pago fijo periódico por cada miembro asignado, independientemente del número de servicios utilizados",
      "El costo total de cada servicio más una comisión",
      "Solamente pagos directos del paciente",
      "Un porcentaje del beneficio por fallecimiento"
    ],
    "a": 0,
    "e": "La capitación paga una cantidad fija por miembro.",
    "area": "health",
    "areaLabel": "Atención Administrada",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_089",
    "q": "En una póliza de gastos médicos mayores, la característica de stop-loss o máximo de desembolso está diseñada para:",
    "o": [
      "Limitar la cantidad total que el asegurado debe pagar de su bolsillo por gastos cubiertos durante el periodo establecido",
      "Limitar exclusivamente los pagos de la aseguradora",
      "Eliminar todas las primas futuras",
      "Sustituir el deducible por un beneficio en efectivo"
    ],
    "a": 0,
    "e": "El stop-loss limita el desembolso del asegurado.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_090",
    "q": "Un deducible de año calendario exige que el asegurado:",
    "o": [
      "Satisfaga el deducible una sola vez por cada enfermedad durante toda su vida",
      "Satisfaga el deducible aplicable cada año antes de que la aseguradora comience a pagar según el contrato",
      "Pague el deducible únicamente al ingresar en un hospital",
      "Divida el deducible entre la aseguradora y el agente"
    ],
    "a": 1,
    "e": "El deducible vuelve a aplicarse cada año calendario.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_091",
    "q": "¿Qué característica permite que, después de que varios miembros de una familia alcancen colectivamente una cantidad determinada de deducibles individuales, los demás familiares queden exentos de pagar deducibles adicionales durante ese año?",
    "o": [
      "Deducible familiar",
      "Periodo de eliminación",
      "Coaseguro decreciente",
      "Copago por servicio"
    ],
    "a": 0,
    "e": "El deducible familiar limita la acumulación de deducibles individuales.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_092",
    "q": "En un plan médico suplementario, el deducible que debe pagarse después de agotarse los beneficios de la póliza básica y antes de que comience la cobertura de gastos médicos mayores se denomina:",
    "o": [
      "Deducible integrado",
      "Deducible corredor",
      "Copago fijo",
      "Retención de capitación"
    ],
    "a": 1,
    "e": "El corridor deductible conecta la cobertura básica con major medical.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_093",
    "q": "¿Cuál afirmación describe correctamente una Health Reimbursement Arrangement (HRA)?",
    "o": [
      "La financia únicamente el empleado mediante deducciones salariales",
      "La financia el empleador para reembolsar gastos médicos elegibles conforme al plan",
      "Exige que el empleado esté inscrito en Medicare",
      "Los fondos pertenecen siempre al empleado y deben transferirse al cambiar de trabajo"
    ],
    "a": 1,
    "e": "La HRA es financiada por el empleador.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_094",
    "q": "¿Qué característica distingue a una HSA de una HRA patrocinada por el empleador?",
    "o": [
      "Los fondos de la HSA pertenecen al titular y pueden acompañarlo si cambia de empleo",
      "Una HSA nunca puede generar intereses",
      "Solo el empleador puede aportar a una HSA",
      "Todos los fondos de la HSA se pierden obligatoriamente al final del año"
    ],
    "a": 0,
    "e": "La HSA es propiedad del titular y es portátil.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_095",
    "q": "Un plan de salud con deducible alto calificado puede normalmente cubrir ciertos servicios preventivos:",
    "o": [
      "Antes de que el asegurado satisfaga el deducible",
      "Solamente después de alcanzar el máximo de desembolso",
      "Únicamente cuando Medicare sea el pagador primario",
      "Nunca, porque todos los servicios requieren primero el deducible"
    ],
    "a": 0,
    "e": "Un HDHP puede cubrir prevención antes del deducible.",
    "area": "health",
    "areaLabel": "Gastos Médicos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_096",
    "q": "¿Cuándo comienza normalmente el periodo federal de inscripción abierta de seis meses para Medigap?",
    "o": [
      "Cuando la persona cumple 60 años, aunque no tenga Medicare",
      "El primer mes en que la persona tiene 65 años o más y está inscrita en Medicare Parte B",
      "Solamente después de agotar todos los beneficios de Medicare",
      "Cada año durante el periodo de inscripción de Medicare Advantage"
    ],
    "a": 1,
    "e": "Comienza al tener 65 o más y estar inscrito en Parte B.",
    "area": "medicare",
    "areaLabel": "Medigap",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_097",
    "q": "¿Cuál es normalmente el periodo de revisión gratuita (free look) de una póliza Medicare Supplement (Medigap)?",
    "o": [
      "10 días",
      "20 días",
      "30 días",
      "60 días"
    ],
    "a": 2,
    "e": "Medigap ofrece normalmente 30 días de free look.",
    "area": "medicare",
    "areaLabel": "Medigap",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_098",
    "q": "Un agente sabe que una persona está inscrita en Medicare Advantage y no piensa regresar a Medicare Original. ¿Puede venderle apropiadamente una póliza Medigap para complementar ese plan?",
    "o": [
      "Sí, porque Medigap complementa directamente a Medicare Advantage",
      "No, porque Medigap está diseñado para complementar Medicare Original, no Medicare Advantage",
      "Sí, pero solamente si elimina la cobertura de medicamentos",
      "No, a menos que la persona también compre Medicaid"
    ],
    "a": 1,
    "e": "Medigap complementa Medicare Original, no Medicare Advantage.",
    "area": "medicare",
    "areaLabel": "Medigap",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_099",
    "q": "Respecto a los planes Medigap estandarizados con la misma letra, ¿cuál afirmación es correcta?",
    "o": [
      "Cada aseguradora puede modificar libremente los beneficios básicos del plan",
      "Los beneficios estandarizados son los mismos, aunque las primas y la compañía puedan variar",
      "Todos deben cobrar exactamente la misma prima",
      "Solamente pueden venderse a personas inscritas en Medicare Advantage"
    ],
    "a": 1,
    "e": "La misma letra ofrece beneficios estandarizados iguales; precio y compañía pueden variar.",
    "area": "medicare",
    "areaLabel": "Medigap",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_100",
    "q": "Una póliza Medicare SELECT se diferencia de una póliza Medigap tradicional porque normalmente:",
    "o": [
      "Requiere utilizar una red específica de hospitales y, en algunos casos, médicos para recibir todos los beneficios",
      "Sustituye completamente Medicare Partes A y B",
      "Solamente cubre medicamentos recetados",
      "Está financiada conjuntamente por Medicaid"
    ],
    "a": 0,
    "e": "Medicare SELECT usa redes para obtener todos los beneficios.",
    "area": "medicare",
    "areaLabel": "Medigap",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_101",
    "q": "Una póliza de cuidado a largo plazo es garantizadamente renovable. Esto significa que la aseguradora:",
    "o": [
      "No puede cancelar la póliza individualmente mientras se paguen las primas, aunque puede aumentar las primas de una clase completa con aprobación aplicable",
      "Nunca puede aumentar ninguna prima por ninguna razón",
      "Puede cancelar al asegurado cuando presente una reclamación grande",
      "Debe renovar la póliza sin cobrar primas"
    ],
    "a": 0,
    "e": "Guaranteed renewable impide cancelación individual, pero admite aumento por clase.",
    "area": "ltc",
    "areaLabel": "Cuidado a Largo Plazo",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_102",
    "q": "¿Qué beneficio opcional de una póliza de cuidado a largo plazo proporciona cierto valor reducido si la póliza caduca después de haberse pagado primas durante el periodo requerido?",
    "o": [
      "Beneficio de no caducidad",
      "Beneficio por muerte accidental",
      "Seguro a término renovable",
      "Coordinación de beneficios"
    ],
    "a": 0,
    "e": "Nonforfeiture entrega un valor reducido tras la caducidad bajo sus condiciones.",
    "area": "ltc",
    "areaLabel": "Cuidado a Largo Plazo",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_103",
    "q": "¿Qué servicio de cuidado a largo plazo proporciona atención temporal a una persona dependiente para permitir que su cuidador habitual descanse?",
    "o": [
      "Cuidado de relevo (respite care)",
      "Cuidado intensivo",
      "Atención de emergencia",
      "Hospitalización aguda"
    ],
    "a": 0,
    "e": "Respite care releva temporalmente al cuidador habitual.",
    "area": "ltc",
    "areaLabel": "Cuidado a Largo Plazo",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_104",
    "q": "Una póliza de cuidado a largo plazo paga servicios de enfermería y asistencia personal prestados en la residencia del asegurado. ¿Qué tipo de beneficio es?",
    "o": [
      "Cuidado de salud en el hogar",
      "Cuidado exclusivamente hospitalario",
      "Seguro de gastos quirúrgicos",
      "Beneficio de rehabilitación vocacional"
    ],
    "a": 0,
    "e": "Son servicios de home health care.",
    "area": "ltc",
    "areaLabel": "Cuidado a Largo Plazo",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_105",
    "q": "Cuando un agente de seguros recibe primas de un cliente, esos fondos deben manejarse normalmente:",
    "o": [
      "Como fondos personales del agente hasta que venza la póliza",
      "En capacidad fiduciaria y remitirse apropiadamente a la aseguradora",
      "Como una comisión anticipada no reembolsable",
      "Como un préstamo del solicitante al agente"
    ],
    "a": 1,
    "e": "Las primas se manejan en capacidad fiduciaria.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_106",
    "q": "Un agente ofrece devolver al solicitante parte de su comisión, sin que esa ventaja aparezca en la póliza, para convencerlo de comprar. Esta práctica se denomina:",
    "o": [
      "Reemplazo",
      "Rebating o reembolso ilegal",
      "Suscripción preferente",
      "Coaseguro"
    ],
    "a": 1,
    "e": "Ofrecer valor no incluido en la póliza para inducir compra es rebating.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_107",
    "q": "Un agente utiliza comparaciones engañosas para convencer a un asegurado de reemplazar su póliza actual por otra. Esta práctica se conoce como:",
    "o": [
      "Twisting",
      "Cesión colateral",
      "Indemnización",
      "Reaseguro"
    ],
    "a": 0,
    "e": "Twisting usa engaño para inducir un reemplazo.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_108",
    "q": "Un agente utiliza los valores de una póliza existente para comprar otra póliza de la misma aseguradora principalmente con el fin de generar una nueva comisión, sin beneficio real para el cliente. Esta práctica se conoce como:",
    "o": [
      "Churning",
      "Conversión",
      "Anualización",
      "Reinstalación"
    ],
    "a": 0,
    "e": "Churning reemplaza o usa valores internos sin beneficio real para generar comisión.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_109",
    "q": "Un agente publica intencionalmente declaraciones falsas y perjudiciales sobre la situación financiera de otra aseguradora. ¿Qué práctica desleal está cometiendo?",
    "o": [
      "Difamación",
      "Rebating",
      "Coerción",
      "Reemplazo autorizado"
    ],
    "a": 0,
    "e": "Declaraciones falsas perjudiciales constituyen difamación.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_110",
    "q": "Cobrar primas diferentes a dos solicitantes de la misma clase y con el mismo riesgo, sin una razón actuarial válida, puede constituir:",
    "o": [
      "Discriminación injusta",
      "Selección adversa permitida",
      "Reaseguro obligatorio",
      "Cesión absoluta"
    ],
    "a": 0,
    "e": "Diferencias sin base actuarial pueden ser discriminación injusta.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_111",
    "q": "Una persona obtiene una licencia de agente principalmente para vender seguros sobre sí misma, sus familiares, su empleador y los empleados de este. Esta actividad puede considerarse:",
    "o": [
      "Negocio controlado",
      "Reaseguro",
      "Seguro colectivo no contributivo",
      "Liquidación viática"
    ],
    "a": 0,
    "e": "Vender principalmente a intereses propios relacionados es controlled business.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_112",
    "q": "¿Qué autorización permite a un agente con licencia representar y actuar en nombre de una aseguradora específica en Florida?",
    "o": [
      "Nombramiento (appointment)",
      "Certificado de estudios prelicencia",
      "Cesión de póliza",
      "Licencia de conducir comercial"
    ],
    "a": 0,
    "e": "El appointment autoriza representar a una aseguradora.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_113",
    "q": "Una persona posee una licencia 2-15 activa, pero no tiene nombramiento con ninguna aseguradora. ¿Cuál afirmación es correcta?",
    "o": [
      "La licencia por sí sola le permite representar automáticamente a cualquier aseguradora",
      "Necesita el nombramiento correspondiente para actuar como agente de una aseguradora",
      "Puede emitir pólizas propias sin aseguradora",
      "Puede cobrar primas, pero no explicar coberturas"
    ],
    "a": 1,
    "e": "Licencia y nombramiento son requisitos distintos.",
    "area": "florida",
    "areaLabel": "Leyes de Florida",
    "nivel": 5,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_114",
    "q": "Una aseguradora constituida conforme a las leyes de otro estado de Estados Unidos, pero autorizada para operar en Florida, se clasifica en Florida como:",
    "o": [
      "Doméstica",
      "Extranjera (foreign)",
      "Alienígena (alien)",
      "No autorizada"
    ],
    "a": 1,
    "e": "Una aseguradora de otro estado es foreign.",
    "area": "florida",
    "areaLabel": "Aseguradoras",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_115",
    "q": "Una aseguradora constituida conforme a las leyes de otro país y autorizada para operar en Florida se clasifica como:",
    "o": [
      "Doméstica",
      "Extranjera",
      "Alienígena (alien)",
      "Fraternal doméstica"
    ],
    "a": 2,
    "e": "Una aseguradora constituida en otro país es alien.",
    "area": "florida",
    "areaLabel": "Aseguradoras",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_116",
    "q": "¿Qué documento demuestra que una aseguradora está autorizada por el estado para realizar negocios de seguros?",
    "o": [
      "Certificado de autoridad",
      "Licencia de conducir del agente",
      "Recibo condicional",
      "Formulario de prueba de pérdida"
    ],
    "a": 0,
    "e": "El certificate of authority acredita autorización estatal.",
    "area": "florida",
    "areaLabel": "Aseguradoras",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_117",
    "q": "¿Quiénes son los propietarios de una compañía de seguros mutua?",
    "o": [
      "Sus accionistas externos",
      "Sus asegurados",
      "Sus agentes nombrados",
      "El gobierno estatal"
    ],
    "a": 1,
    "e": "Los asegurados son propietarios de la mutua.",
    "area": "florida",
    "areaLabel": "Aseguradoras",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_118",
    "q": "Una póliza no participante se caracteriza porque:",
    "o": [
      "Puede pagar dividendos de póliza a sus propietarios",
      "No participa en los dividendos distribuibles de la aseguradora",
      "No tiene beneficiario",
      "Carece de prima y valor nominal"
    ],
    "a": 1,
    "e": "Una póliza nonparticipating no participa en dividendos.",
    "area": "florida",
    "areaLabel": "Aseguradoras",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_119",
    "q": "Una sociedad de beneficios fraternales se caracteriza normalmente por:",
    "o": [
      "Operar sin sistema de logias y únicamente con fines de lucro",
      "Proporcionar beneficios a sus miembros y funcionar mediante un sistema de logias con propósito fraternal",
      "Vender exclusivamente seguros comerciales de propiedad",
      "Ser propiedad obligatoria del gobierno federal"
    ],
    "a": 1,
    "e": "Las fraternales operan mediante logias para sus miembros.",
    "area": "florida",
    "areaLabel": "Aseguradoras",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_120",
    "q": "Cuando una aseguradora transfiere parte de su riesgo a otra aseguradora para limitar su exposición a pérdidas, el acuerdo se denomina:",
    "o": [
      "Reaseguro",
      "Coaseguro del asegurado",
      "Rebating",
      "Conversión"
    ],
    "a": 0,
    "e": "Reinsurance transfiere riesgo entre aseguradoras.",
    "area": "florida",
    "areaLabel": "Aseguradoras",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_121",
    "q": "Un solicitante presenta una probabilidad de pérdida superior al promedio debido a una condición médica, pero aún resulta asegurable con una prima más alta. ¿Cómo se clasifica normalmente este riesgo?",
    "o": [
      "Preferido",
      "Estándar",
      "Subestándar",
      "No asegurable en todos los casos"
    ],
    "a": 2,
    "e": "Un riesgo mayor pero asegurable se clasifica substandard.",
    "area": "health",
    "areaLabel": "Conceptos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_122",
    "q": "La tendencia de las personas con mayor probabilidad de sufrir una pérdida a buscar o mantener más cobertura de seguro se denomina:",
    "o": [
      "Selección adversa",
      "Ley de los grandes números",
      "Indemnización",
      "Retención del riesgo"
    ],
    "a": 0,
    "e": "Esa tendencia es adverse selection.",
    "area": "health",
    "areaLabel": "Conceptos",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_123",
    "q": "La ley de los grandes números ayuda a una aseguradora a:",
    "o": [
      "Predecir las pérdidas con mayor precisión al aumentar el número de riesgos similares observados",
      "Eliminar por completo todas las pérdidas futuras",
      "Garantizar ganancias en cada póliza individual",
      "Evitar la necesidad de cobrar primas"
    ],
    "a": 0,
    "e": "Más exposiciones similares mejoran la predictibilidad estadística.",
    "area": "health",
    "areaLabel": "Conceptos",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_124",
    "q": "¿Cuál de los siguientes representa un riesgo puro?",
    "o": [
      "La posibilidad de ganar o perder dinero en acciones",
      "La posibilidad de sufrir una pérdida económica por una enfermedad",
      "La posibilidad de obtener ganancias al iniciar un negocio",
      "La variación del precio de una criptomoneda"
    ],
    "a": 1,
    "e": "El riesgo puro solo presenta posibilidad de pérdida o ausencia de pérdida.",
    "area": "health",
    "areaLabel": "Conceptos",
    "nivel": 3,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_125",
    "q": "Una enfermedad es la causa directa de una pérdida cubierta, mientras que fumar aumenta la probabilidad de que esa pérdida ocurra. En este ejemplo, la enfermedad y el hábito de fumar son, respectivamente:",
    "o": [
      "Riesgo y seguro",
      "Peligro (peril) y condición de riesgo (hazard)",
      "Condición de riesgo y peligro",
      "Indemnización y exposición"
    ],
    "a": 1,
    "e": "Peril causa la pérdida; hazard aumenta su probabilidad.",
    "area": "health",
    "areaLabel": "Conceptos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_126",
    "q": "Un solicitante oculta deliberadamente una enfermedad grave para obtener una póliza. Esta conducta representa principalmente:",
    "o": [
      "Riesgo físico",
      "Riesgo moral",
      "Riesgo de actitud o descuido (morale hazard)",
      "Riesgo especulativo"
    ],
    "a": 1,
    "e": "La deshonestidad intencional es un moral hazard.",
    "area": "health",
    "areaLabel": "Conceptos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_127",
    "q": "¿Por qué el principio de indemnización se aplica de manera diferente al seguro de vida que al seguro de propiedad?",
    "o": [
      "Porque el valor económico exacto de una vida humana no puede determinarse después de la pérdida y la póliza paga una suma acordada",
      "Porque el seguro de vida nunca paga dinero",
      "Porque las pólizas de vida carecen de beneficiarios",
      "Porque el seguro de vida cubre únicamente daños a bienes"
    ],
    "a": 0,
    "e": "Vida es un contrato de valor acordado, no una medición exacta posterior de la pérdida.",
    "area": "health",
    "areaLabel": "Contratos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  },
  {
    "id": "sim128_128",
    "q": "Un contrato de seguro es unilateral porque:",
    "o": [
      "Solo la aseguradora hace una promesa legalmente exigible de pagar conforme al contrato después de que el asegurado cumple las condiciones",
      "Ambas partes pueden modificarlo verbalmente en cualquier momento",
      "Solamente el asegurado puede cancelarlo",
      "No requiere el pago de una prima"
    ],
    "a": 0,
    "e": "La promesa exigible de pago la hace la aseguradora.",
    "area": "health",
    "areaLabel": "Contratos",
    "nivel": 4,
    "source": "Simulacro guiado 128"
  }
];
  window.PK_SIM_128=questions;
  window.PK_KILLER_PILOT=(window.PK_KILLER_PILOT||[]).concat(questions);
})();
