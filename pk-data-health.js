// ============================================================
// PEARSON KILLER — pk-data-health.js
// Módulo: Tipos de Pólizas de Salud
// 6 conceptos × 5 variantes = 30 preguntas
//
// [VERIFICADO] = mecánica de producto estable o ley federal estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// Ver VERIFICATION_NOTES.md
// ============================================================

const PK_HEALTH = [

{
  id: "salud_001",
  area: "salud",
  concepto: "HMO vs PPO vs POS vs EPO — Planes Administrados",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "En un HMO, el médico de cabecera (PCP) actúa como 'portero' (gatekeeper). ¿Qué significa esto en la práctica diaria del asegurado?",
      o: [
        "El PCP establece unilateralmente las tarifas de copago para cada tipo de visita",
        "El asegurado debe ver primero al PCP y obtener un referido formal antes de consultar a cualquier especialista",
        "El PCP decide individualmente si la aseguradora pagará o no cada reclamación presentada",
        "El PCP es el único médico que el asegurado puede consultar durante toda la vigencia del plan"
      ],
      a: 1,
      trampa: "El PCP no es el único médico disponible — es el intermediario obligatorio que AUTORIZA el acceso a especialistas dentro de la estructura HMO.",
      correcto: "En un HMO, el PCP funciona como PORTERO — el asegurado debe consultar PRIMERO al PCP, quien evalúa la necesidad y emite el referido correspondiente para ver a un especialista. Sin ese referido, la visita al especialista típicamente no está cubierta. [VERIFICADO — estructura estándar de producto HMO]",
      incorrectos: [
        "A) El PCP no establece las tarifas de copago — esas las determina el diseño del plan de la aseguradora.",
        "C) Las reclamaciones son evaluadas por el departamento de la aseguradora, no por el PCP individualmente.",
        "D) El asegurado SÍ puede ver especialistas — pero únicamente con el referido correspondiente del PCP."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia CLAVE entre un HMO y un PPO respecto al acceso directo a médicos especialistas?",
      o: [
        "El HMO no cubre ningún tipo de atención con especialistas; el PPO cubre todos los especialistas sin ningún costo",
        "El HMO requiere referido del PCP para ver especialistas; el PPO permite acceso DIRECTO a especialistas sin necesidad de referido",
        "El PPO requiere referido del PCP para especialistas; el HMO permite acceso directo sin referido",
        "Ambos tipos de plan requieren referido pero el PPO generalmente tiene copagos más bajos"
      ],
      a: 1,
      trampa: "La diferencia del requisito de referido es la distinción estructural fundamental entre ambos tipos de plan.",
      correcto: "HMO = requiere referido formal del PCP ANTES de consultar al especialista. PPO = acceso DIRECTO al especialista sin necesidad de ningún referido previo. Esta es la diferencia estructural más importante entre los dos modelos de plan. [VERIFICADO — estructura estándar de ambos productos]",
      incorrectos: [
        "A) El HMO SÍ cubre la atención de especialistas — únicamente requiere el paso previo del referido.",
        "C) Esta descripción está completamente invertida respecto a la estructura real de cada plan.",
        "D) No es correcto que ambos requieran referido — el PPO específicamente NO lo requiere."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál tipo de plan de salud administrado combina el requisito de médico de cabecera propio del HMO con la posibilidad de recibir atención fuera de la red propia del PPO?",
      o: [
        "EPO — Exclusive Provider Organization",
        "HDHP — High Deductible Health Plan",
        "POS — Point of Service Plan",
        "PPO — Preferred Provider Organization tradicional"
      ],
      a: 2,
      trampa: "El POS es específicamente el modelo híbrido que combina elementos del HMO y del PPO. El EPO tiene una combinación estructural diferente.",
      correcto: "POS (Point of Service) = plan HÍBRIDO. Como el HMO: requiere PCP y referidos para la atención considerada dentro de la red. Como el PPO: permite salir de la red para recibir atención, aunque a un costo de bolsillo generalmente mayor. [VERIFICADO — estructura estándar de producto POS]",
      incorrectos: [
        "A) El EPO combina características de forma diferente: sin referido pero sin cobertura fuera de la red.",
        "B) El HDHP se define por su nivel de deducible — no es en sí mismo una estructura híbrida de red.",
        "D) El PPO tradicional ya permite atención fuera de red pero SIN el requisito de PCP propio del HMO."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "CASI_IDENTICAS",
      q: "¿En qué se diferencia estructuralmente un EPO de un PPO, dado que ambos comparten la característica de no requerir referido?",
      o: [
        "El EPO sí requiere referido del PCP; el PPO permite ver especialistas directamente sin ningún referido",
        "El EPO no cubre atención fuera de la red excepto en casos de emergencia; el PPO cubre atención tanto dentro como fuera de la red",
        "El EPO tiene primas mensuales más altas que el PPO en absolutamente todos los escenarios posibles",
        "El EPO está disponible únicamente para empleados del sector gubernamental federal"
      ],
      a: 1,
      trampa: "Tanto EPO como PPO comparten la característica de NO requerir referido — la diferencia real está específicamente en la cobertura de atención fuera de la red contratada.",
      correcto: "EPO y PPO comparten: ninguno requiere referido del PCP. La diferencia estructural real: EPO cubre ÚNICAMENTE dentro de la red (excepto emergencias verdaderas). PPO cubre tanto dentro COMO fuera de la red, con mayor costo de bolsillo para atención fuera de red. [VERIFICADO — estructura de ambos productos]",
      incorrectos: [
        "A) AMBOS (EPO y PPO) permiten consultar especialistas directamente sin referido previo — esa no es la diferencia.",
        "C) El nivel de primas depende del diseño específico de cada plan — no existe una regla universal de comparación.",
        "D) Ambos tipos de plan están disponibles tanto para el sector privado como para el sector público."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Un empleado busca específicamente un plan que le permita: 1) Ver a cualquier especialista SIN necesidad de referido, Y 2) Recibir atención médica tanto dentro como fuera de la red contratada. ¿Cuál es el ÚNICO tipo de plan que satisface AMBOS requisitos simultáneamente?",
      o: [
        "HMO — es el tipo de plan más común en los beneficios de empleadores",
        "POS — permite salir de la red, aunque requiriendo referido del PCP",
        "EPO — no requiere referido y teóricamente cubre toda la red disponible a nivel nacional",
        "PPO — no requiere referido Y ofrece cobertura tanto dentro como fuera de la red contratada"
      ],
      a: 3,
      trampa: "El POS parece atractivo a primera vista pero REQUIERE referido del PCP. El EPO específicamente no cubre fuera de la red. El HMO impone ambas restricciones simultáneamente.",
      correcto: "PPO es el ÚNICO tipo de plan que satisface AMBOS requisitos simultáneamente: sin necesidad de referido para especialistas, Y con cobertura tanto dentro como fuera de la red contratada. [VERIFICADO — análisis comparativo de estructuras de producto]",
      incorrectos: [
        "A) El HMO requiere referido del PCP Y únicamente cubre atención dentro de su red contratada.",
        "B) El POS permite salir de la red pero SÍ REQUIERE referido para la atención considerada dentro de la red.",
        "C) El EPO no requiere referido pero específicamente NO cubre atención fuera de su red, salvo emergencias reales."
      ]
    }
  ]
},

{
  id: "salud_002",
  area: "salud",
  concepto: "COBRA — Continuación de Cobertura de Grupo",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "COBRA (Consolidated Omnibus Budget Reconciliation Act) permite continuar la cobertura de salud de grupo tras ciertos eventos calificantes. ¿Cuánto tiempo dura la continuación ESTÁNDAR por terminación del empleo?",
      o: [
        "12 meses de continuación",
        "18 meses de continuación",
        "24 meses de continuación",
        "36 meses de continuación"
      ],
      a: 1,
      trampa: "36 meses corresponde a eventos calificantes especiales (divorcio, muerte del empleado cubierto). El período estándar por terminación de empleo es diferente.",
      correcto: "COBRA estándar = 18 MESES para los eventos calificantes más comunes: terminación del empleo (voluntaria o involuntaria) y reducción de horas laborales. El individuo paga hasta el 100% de la prima total más un cargo administrativo. [VERIFICADO — ley federal COBRA, estable históricamente]",
      incorrectos: [
        "A) 12 meses es insuficiente — COBRA garantiza legalmente un mínimo de 18 meses en el caso estándar.",
        "C) 24 meses no corresponde a ningún período estándar reconocido bajo COBRA.",
        "D) 36 meses corresponde específicamente a eventos calificantes especiales, no a la terminación estándar del empleo."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "COBRA federal aplica obligatoriamente a empleadores con un mínimo de cuántos empleados?",
      o: [
        "5 empleados o más",
        "10 empleados o más",
        "20 empleados o más",
        "50 empleados o más"
      ],
      a: 2,
      trampa: "Es fácil confundir este umbral con el umbral de 50 empleados de la ACA (Ley de Cuidado de Salud Asequible). COBRA federal usa un umbral diferente.",
      correcto: "COBRA federal aplica obligatoriamente a empleadores con 20 O MÁS empleados. Los empleadores con menos de 20 empleados no están obligados por COBRA a nivel federal (algunos estados tienen leyes 'mini-COBRA' propias que pueden cubrir empleadores más pequeños). [VERIFICADO — umbral federal estable de COBRA]",
      incorrectos: [
        "A) 5 empleados está muy por debajo del umbral federal requerido para la aplicación de COBRA.",
        "B) 10 empleados tampoco alcanza el umbral federal mínimo requerido.",
        "D) 50 empleados es el umbral del mandato del empleador bajo la ACA — un umbral diferente al de COBRA."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "El ex-cónyuge de un empleado, previamente cubierto bajo el plan de salud de grupo del empleado, se divorcia formalmente de este. ¿Por cuánto tiempo puede el ex-cónyuge continuar la cobertura bajo COBRA?",
      o: [
        "12 meses de continuación",
        "18 meses de continuación (período estándar)",
        "24 meses de continuación",
        "36 meses de continuación (evento calificante especial)"
      ],
      a: 3,
      trampa: "El divorcio es clasificado como un evento calificante ESPECIAL bajo COBRA, otorgando un período extendido diferente al estándar de 18 meses.",
      correcto: "El divorcio (o separación legal) constituye un evento calificante ESPECIAL bajo COBRA que otorga 36 MESES de continuación de cobertura al ex-cónyuge afectado. [VERIFICADO — clasificación estándar de eventos calificantes COBRA]",
      incorrectos: [
        "A) 12 meses es insuficiente para un evento calificante especial como el divorcio.",
        "B) 18 meses corresponde al período estándar por terminación de empleo — no al divorcio.",
        "C) 24 meses no corresponde a ningún período reconocido bajo la estructura de COBRA."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Un empleado pierde su trabajo y desea continuar su cobertura mediante COBRA. ¿Cuántos días tiene para ELEGIR formalmente la cobertura COBRA, contados desde que recibe la notificación oficial de sus derechos?",
      o: [
        "30 días desde la notificación oficial",
        "45 días desde la notificación oficial",
        "60 días desde la notificación oficial",
        "90 días desde la notificación oficial"
      ],
      a: 2,
      trampa: "El período de elección de COBRA está específicamente fijado en 60 días desde la recepción de la notificación — no debe confundirse con otros plazos regulatorios de 30 o 45 días.",
      correcto: "El período de elección bajo COBRA es de 60 DÍAS desde que el individuo elegible recibe la notificación formal de sus derechos. Si elige dentro de ese plazo, la cobertura resultante es retroactiva a la fecha de terminación original, sin brecha de cobertura. [VERIFICADO — plazo federal estable de COBRA]",
      incorrectos: [
        "A) 30 días representa solo la mitad del período de elección legalmente otorgado.",
        "B) 45 días tampoco corresponde al período de elección correcto establecido por la ley.",
        "D) 90 días excede el período legal de elección realmente otorgado bajo COBRA."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "QUIEN_PAGA",
      q: "Bajo COBRA, ¿cuál es el monto MÁXIMO que el individuo puede ser requerido a pagar por la cobertura continuada?",
      o: [
        "Únicamente la porción que pagaba como empleado activo, sin incluir la parte del empleador",
        "El 75% del costo total de la prima del plan de grupo",
        "Hasta el 102% del costo total de la prima (100% del costo combinado empleado+empleador, más hasta 2% de cargo administrativo)",
        "El empleador continúa pagando su parte durante los primeros 6 meses de COBRA"
      ],
      a: 2,
      trampa: "Bajo COBRA, el individuo paga significativamente MÁS que cuando era empleado activo, porque ahora asume también la porción que anteriormente cubría el empleador.",
      correcto: "Bajo COBRA, el individuo puede ser requerido a pagar hasta el 102% del costo total de la prima: 100% del costo combinado (porción que antes pagaba el empleado + porción que antes pagaba el empleador) MÁS hasta un 2% adicional como cargo administrativo. [VERIFICADO — estructura de costo federal de COBRA, estable]",
      incorrectos: [
        "A) Como empleado activo solo pagaba su porción — bajo COBRA paga el 100% del costo combinado más el 2%.",
        "B) El 75% no corresponde a la estructura de costo establecida bajo la ley COBRA.",
        "D) El empleador NO continúa contribuyendo durante el período COBRA — el individuo asume el costo completo desde el inicio."
      ]
    }
  ]
},

{
  id: "salud_003",
  area: "salud",
  concepto: "Seguro de Ingresos por Discapacidad",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "De las siguientes definiciones de discapacidad total utilizadas en pólizas de ingresos por discapacidad, ¿cuál es generalmente MÁS FAVORABLE para el asegurado?",
      o: [
        "'Propia Ocupación' (Own Occupation) — se considera discapacitado si no puede realizar las funciones específicas de su propia profesión, aunque pudiera trabajar en otra área",
        "'Cualquier Ocupación' (Any Occupation) — se considera discapacitado únicamente si no puede realizar ningún trabajo para el cual esté razonablemente calificado",
        "'Ocupación Remunerada' (Gainful Occupation) — se considera discapacitado si no puede realizar ningún trabajo remunerado de ningún tipo",
        "Definición Escalonada (Split Definition) — Own Occupation los primeros 2 años, luego Any Occupation"
      ],
      a: 0,
      trampa: "'Own Occupation' es la definición más favorable porque aplica incluso si el asegurado pudiera trabajar en un campo distinto al de su profesión original.",
      correcto: "PROPIA OCUPACIÓN (Own Occupation) es la definición más favorable. El asegurado califica como discapacitado si NO puede realizar las funciones específicas de SU PROPIA ocupación, aunque pudiera desempeñarse en un trabajo diferente. Un cirujano que pierde destreza manual puede cobrar beneficios aunque pudiera trabajar como docente. [VERIFICADO — definiciones estándar de la industria]",
      incorrectos: [
        "B) 'Any Occupation' es sustancialmente más restrictiva — exige incapacidad para CUALQUIER trabajo calificado, no solo el propio.",
        "C) 'Gainful Occupation' es aún más restrictiva que 'Any Occupation' en términos generales.",
        "D) La definición escalonada (Split Definition) es menos favorable que una definición 'Own Occupation' pura de largo plazo."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "SINONIMOS",
      q: "El 'Período de Eliminación' (Elimination Period) en una póliza de seguro de discapacidad funciona conceptualmente como:",
      o: [
        "El período durante el cual la aseguradora revisa activamente si la reclamación de discapacidad es legítima",
        "El período de tiempo que el asegurado debe permanecer DISCAPACITADO antes de que comiencen a pagarse los beneficios — funciona como un deducible medido en tiempo",
        "El período posterior al cual la póliza puede cancelarse unilateralmente sin ninguna penalidad",
        "El tiempo mínimo que el empleador está legalmente obligado a continuar pagando el salario completo"
      ],
      a: 1,
      trampa: "El período de eliminación es conceptualmente un 'deducible de tiempo' — no debe confundirse con un período de investigación o revisión administrativa.",
      correcto: "PERÍODO DE ELIMINACIÓN = número de días consecutivos que el asegurado debe permanecer discapacitado ANTES de que comiencen a pagarse los beneficios. Funciona como un DEDUCIBLE DE TIEMPO. A mayor período de eliminación seleccionado, generalmente MENOR es la prima de la póliza. [VERIFICADO — mecánica estándar de producto]",
      incorrectos: [
        "A) La revisión de legitimidad de la reclamación es parte del proceso administrativo — no es el período de eliminación.",
        "C) La cancelación sin penalidad corresponde a conceptos como el período de examen gratuito — no al período de eliminación.",
        "D) La continuación del salario por parte del empleador es una política laboral separada — no un concepto del seguro de discapacidad."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "QUIEN_PAGA",
      q: "Si el EMPLEADOR paga la totalidad de las primas del seguro de discapacidad de grupo, ¿cuál es el tratamiento fiscal GENERAL de los beneficios recibidos por el empleado al quedar discapacitado?",
      o: [
        "Los beneficios son generalmente LIBRES DE IMPUESTOS porque la discapacidad constituye una condición médica",
        "Los beneficios son generalmente GRAVABLES como ingreso ordinario, porque el empleado nunca pagó impuestos sobre esas primas",
        "Los beneficios son gravables únicamente sobre el 50% del monto total recibido",
        "Los beneficios son libres de impuestos hasta un límite anual fijo de $50,000"
      ],
      a: 1,
      trampa: "La regla fiscal general es: quien paga la prima determina el tratamiento fiscal de los beneficios resultantes — no la naturaleza médica de la condición.",
      correcto: "REGLA FISCAL GENERAL: si el EMPLEADOR paga las primas (típicamente con dólares antes de impuestos como gasto deducible), los BENEFICIOS resultantes son generalmente GRAVABLES como ingreso ordinario para el empleado. Si el EMPLEADO paga con dólares después de impuestos, los beneficios son generalmente libres de impuestos. [VERIFICADO — principio fiscal estable del IRC]",
      incorrectos: [
        "A) La naturaleza médica de la condición NO determina por sí sola el tratamiento fiscal — depende de quién pagó la prima.",
        "C) No existe una regla general de exclusión del 50% para beneficios de discapacidad.",
        "D) El límite de $50,000 corresponde al beneficio de vida de grupo (IRC Sec 79) — no a discapacidad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Qué porcentaje APROXIMADO del salario previo típicamente reemplaza un seguro de ingresos por discapacidad de grupo estándar?",
      o: [
        "100% del salario, para reemplazar completamente el ingreso perdido",
        "Aproximadamente 60% a 70% del salario — intencionalmente por debajo del 100%",
        "Entre 40% a 50% del salario, con un tope mensual fijo bajo",
        "Entre 80% a 90% del salario según requisito general del mercado"
      ],
      a: 1,
      trampa: "Los beneficios de discapacidad están intencionalmente diseñados para NO reemplazar el 100% del salario — este diseño busca preservar el incentivo de regresar al trabajo cuando sea médicamente posible.",
      correcto: "Los seguros de discapacidad de grupo TÍPICAMENTE reemplazan entre 60% y 70% del salario previo. El porcentaje intencionalmente menor al 100% busca preservar el INCENTIVO ECONÓMICO de regresar al trabajo cuando la recuperación lo permita. [VERIFICADO — práctica estándar de diseño de producto, aunque el rango exacto puede variar por plan — REQUIERE VERIFICACIÓN del porcentaje específico contra el manual si se necesita precisión exacta]",
      incorrectos: [
        "A) Reemplazar el 100% eliminaría el incentivo económico de regresar al trabajo — no es el diseño estándar.",
        "C) El rango de 40-50% sería insuficiente para cubrir gastos básicos en la mayoría de los casos prácticos.",
        "D) No existe un requisito general de mercado que fije el reemplazo entre 80-90% para planes de grupo estándar."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Cuál de las siguientes situaciones GENERALMENTE NO activa los beneficios de un seguro de discapacidad de ingresos privado y estándar?",
      o: [
        "Un accidente automovilístico fuera del trabajo que impide laborar al asegurado durante 6 meses",
        "Una lesión sufrida en el trabajo, mientras el empleado realizaba sus funciones normales laborales",
        "Una enfermedad crónica progresiva que impide al asegurado ejercer su profesión habitual",
        "Un accidente deportivo ocurrido durante el tiempo libre personal del asegurado"
      ],
      a: 1,
      trampa: "Las lesiones sufridas EN EL TRABAJO generalmente están cubiertas por Workers' Compensation, y por eso suelen estar EXCLUIDAS del seguro de discapacidad privado que opera de forma complementaria.",
      correcto: "Las lesiones sufridas DURANTE el desempeño de funciones laborales generalmente califican para Workers' Compensation, y por diseño estándar suelen estar EXCLUIDAS del seguro de discapacidad privado — ya que Workers' Comp está diseñado específicamente para cubrir esas situaciones. [VERIFICADO — principio estándar de coordinación entre productos]",
      incorrectos: [
        "A) Un accidente de auto fuera del trabajo SÍ activa típicamente los beneficios de discapacidad privada.",
        "C) Una enfermedad crónica que impide trabajar SÍ activa típicamente los beneficios de discapacidad.",
        "D) Un accidente deportivo durante tiempo libre personal SÍ activa típicamente los beneficios — no es lesión laboral."
      ]
    }
  ]
},

{
  id: "salud_004",
  area: "salud",
  concepto: "Coordinación de Beneficios y Costos Compartidos",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál es el propósito de la COORDINACIÓN DE BENEFICIOS (COB) cuando una persona está cubierta simultáneamente por DOS planes de salud diferentes?",
      o: [
        "Permitir que el asegurado cobre efectivamente el doble del gasto médico real al tener dos coberturas",
        "Evitar que el asegurado reciba MÁS del 100% de sus gastos médicos reales, Y determinar el orden en que cada plan paga (primario/secundario)",
        "Determinar exclusivamente cuál aseguradora debe pagar primero, sin ninguna otra función adicional",
        "Cancelar automáticamente uno de los dos planes de forma permanente al momento de detectar la duplicidad"
      ],
      a: 1,
      trampa: "La COB cumple simultáneamente DOS funciones relacionadas: evitar el sobre-pago Y establecer el orden de pago entre los planes.",
      correcto: "La COB tiene DOS funciones simultáneas: 1) Determinar PRIMACÍA (qué plan es primario y paga primero, cuál es secundario), Y 2) Asegurar que el asegurado no reciba colectivamente MÁS del 100% de sus gastos médicos reales entre ambos planes combinados. [VERIFICADO — principio estándar y estable de COB]",
      incorrectos: [
        "A) El propósito es exactamente lo CONTRARIO — evitar específicamente que el asegurado cobre más del 100% real.",
        "C) Esta es solo una de las dos funciones — también existe la función de evitar el sobre-pago combinado.",
        "D) La COB no cancela ningún plan — coordina el pago entre ambos planes activos simultáneamente."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "ESCENARIO",
      q: "Pedro está cubierto simultáneamente por su propio plan de salud a través de su trabajo Y por el plan de salud de su esposa a través del trabajo de ella. Tiene una factura médica de $1,000. Según la regla estándar de COB, ¿cuál plan es generalmente el PRIMARIO para Pedro?",
      o: [
        "El plan de la esposa siempre es primario para el cónyuge cubierto como dependiente",
        "El plan de Pedro en su propio trabajo — la regla general es que el plan donde uno es el TITULAR (subscriber) es primario",
        "El plan que tenga la prima mensual más alta se considera automáticamente primario",
        "Pedro puede elegir libremente cuál de los dos planes considera primario para cada reclamación"
      ],
      a: 1,
      trampa: "La regla estándar de COB establece que el plan donde uno es TITULAR (subscriber) — no dependiente — es generalmente el primario.",
      correcto: "Bajo la regla estándar de Coordinación de Beneficios: el plan donde una persona es TITULAR (subscriber, el asegurado principal) es generalmente PRIMARIO. El plan donde uno figura como DEPENDIENTE es generalmente secundario. El plan de Pedro en su propio trabajo (donde es titular) paga primero. [VERIFICADO — regla estándar de COB de la industria]",
      incorrectos: [
        "A) El plan de la esposa sería SECUNDARIO para Pedro específicamente — él es dependiente en ese plan.",
        "C) El nivel de la prima mensual no determina la primacía bajo las reglas estándar de COB.",
        "D) El asegurado generalmente no puede elegir libremente cuál plan es primario — existen reglas establecidas de coordinación."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "El DEDUCIBLE, el COSEGURO y el COPAGO son tres mecanismos distintos de costo compartido en salud. ¿Cuál describe correctamente la diferencia entre coseguro y copago?",
      o: [
        "Son términos sinónimos — significan exactamente lo mismo en el contexto de pólizas de salud",
        "El COPAGO es un MONTO FIJO predeterminado por servicio específico (ej: $30 por visita); el COSEGURO es un PORCENTAJE del costo del servicio (ej: 20%)",
        "El deducible y el copago son conceptos idénticos; únicamente el coseguro es un concepto diferente",
        "El coseguro es siempre matemáticamente mayor que el copago en cualquier comparación de costo"
      ],
      a: 1,
      trampa: "Copago se define como monto fijo, mientras coseguro se define como porcentaje — son mecanismos de cálculo fundamentalmente distintos aunque ambos son formas de costo compartido.",
      correcto: "COPAGO = monto FIJO predeterminado por tipo de servicio (ej: $30 en cada visita médica, independientemente del costo real del servicio). COSEGURO = PORCENTAJE del costo del servicio que paga el asegurado DESPUÉS de satisfacer el deducible (ej: 20% de una cirugía de $10,000 equivale a $2,000). [VERIFICADO — definiciones estándar de la industria]",
      incorrectos: [
        "A) NO son sinónimos — tienen mecanismos de cálculo fundamentalmente diferentes entre sí.",
        "C) El deducible es conceptualmente distinto tanto del copago como del coseguro — los tres son mecanismos separados.",
        "D) No existe una regla universal que determine cuál genera mayor costo — depende del servicio específico y de los porcentajes/montos aplicables."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué es el 'Máximo de Gasto de Bolsillo' (Out-of-Pocket Maximum) en un plan de salud?",
      o: [
        "El deducible anual que el asegurado debe satisfacer antes de que el seguro comience a cubrir gastos",
        "El límite máximo total que la aseguradora pagará en beneficios durante un año calendario",
        "El monto máximo total que el asegurado pagará de su propio bolsillo en un año — una vez alcanzado, la aseguradora cubre el 100% de los costos elegibles restantes",
        "El límite de la prima mensual que el asegurado está obligado a pagar bajo el contrato"
      ],
      a: 2,
      trampa: "El Out-of-Pocket Maximum es una protección específica del asegurado contra gastos médicos catastróficos e ilimitados.",
      correcto: "Out-of-Pocket Maximum = el monto máximo total que el asegurado pagará de su propio bolsillo durante el año (sumando deducible, coseguro y copagos combinados). Una vez alcanzado ese límite, la aseguradora cubre el 100% de los costos elegibles restantes por el resto del año. [VERIFICADO — mecanismo estándar de protección al consumidor, ampliamente regulado]",
      incorrectos: [
        "A) El deducible es solo un componente inicial — no equivale al máximo de gasto de bolsillo total.",
        "B) Los límites máximos de pago de la aseguradora corresponden al concepto de beneficios máximos anuales — un concepto diferente.",
        "D) La prima mensual es un gasto completamente separado que generalmente NO cuenta hacia el Out-of-Pocket Maximum."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "María tiene un plan con: Deducible = $2,000, Coseguro = 80/20 (aseguradora paga 80%, María paga 20%), Out-of-Pocket Maximum = $6,000. María tiene facturas médicas totales de $30,000 en el año. ¿Cuánto pagará María en TOTAL de su bolsillo?",
      o: [
        "$2,000 — únicamente el monto correspondiente al deducible",
        "$5,600 — resultado del cálculo directo de deducible más coseguro sobre el resto",
        "$6,000 — porque el Out-of-Pocket Maximum limita contractualmente su gasto total, aunque el cálculo directo de coseguro superaría ese límite",
        "$30,000 — pagando el 20% correspondiente sobre la totalidad de las facturas sin ningún límite aplicable"
      ],
      a: 2,
      trampa: "El cálculo matemático directo del coseguro puede superar el Out-of-Pocket Maximum contractual — pero el OOP Max SIEMPRE actúa como límite absoluto y final.",
      correcto: "Cálculo directo: Deducible $2,000 + Coseguro 20% × $28,000 restantes = $2,000 + $5,600 = $7,600 potencial. PERO el Out-of-Pocket Maximum contractual es $6,000. Por lo tanto, María paga exactamente $6,000 (el límite), y la aseguradora cubre el resto de los gastos elegibles del año. [VERIFICADO — mecánica matemática y contractual estándar]",
      incorrectos: [
        "A) María paga más que solo el deducible — el coseguro también aplica hasta alcanzar el límite del OOP Max.",
        "B) El cálculo directo de $7,600 SUPERA el OOP Max de $6,000 — por lo tanto el límite contractual de $6,000 aplica en su lugar.",
        "D) Una vez alcanzado el Out-of-Pocket Maximum, el asegurado NO continúa pagando — la aseguradora cubre el 100% restante."
      ]
    }
  ]
},

{
  id: "salud_005",
  area: "salud",
  concepto: "Cuidado a Largo Plazo (Long-Term Care Insurance)",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Un seguro de Cuidado a Largo Plazo (LTC) generalmente activa sus beneficios cuando el asegurado no puede realizar de forma independiente cuántas o más Actividades de la Vida Diaria (ADLs)?",
      o: [
        "1 ADL únicamente",
        "2 o más ADLs",
        "3 o más ADLs",
        "4 o más ADLs"
      ],
      a: 1,
      trampa: "El umbral estándar de la industria es 2 ADLs — un umbral de 1 sería demasiado bajo, y de 3 sería más restrictivo de lo típico.",
      correcto: "El LTC generalmente se activa cuando el asegurado no puede realizar 2 O MÁS de las 6 ADLs estándar (bañarse, vestirse, comer, ir al baño, trasladarse/transferencia, continencia). El deterioro cognitivo severo (ej: Alzheimer) también puede activar los beneficios independientemente del conteo de ADLs. [VERIFICADO — estándar HIPAA para calificar como LTC deducible, ampliamente consistente en la industria]",
      incorrectos: [
        "A) 1 ADL únicamente generalmente no es suficiente para activar los beneficios bajo el estándar típico.",
        "C) 3 ADLs sería un umbral más restrictivo del que aplican la mayoría de las pólizas LTC estándar.",
        "D) 4 ADLs sería un umbral excesivamente restrictivo que dejaría a muchos asegurados sin cobertura oportuna."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia CLAVE entre la cobertura de Medicare y la cobertura de un seguro de LTC privado respecto al cuidado en un hogar de enfermería (nursing home)?",
      o: [
        "Medicare cubre el cuidado custodial de forma indefinida y de por vida; el LTC solo cubre el primer año",
        "Medicare cubre hasta un número limitado de días de cuidado ESPECIALIZADO tras una hospitalización calificante; el seguro LTC está diseñado para cubrir específicamente el cuidado CUSTODIAL de largo plazo que Medicare NO cubre",
        "Ambos cubren exactamente el mismo tipo y duración de cuidado — el LTC es esencialmente redundante con Medicare",
        "El LTC cubre exclusivamente hospitalización aguda; Medicare cubre exclusivamente el cuidado en hogares de enfermería"
      ],
      a: 1,
      trampa: "Medicare cubre cuidado MÉDICO/ESPECIALIZADO de forma muy limitada en tiempo; el LTC cubre específicamente el cuidado CUSTODIAL de largo plazo que Medicare deliberadamente no cubre.",
      correcto: "MEDICARE: cubre un número LIMITADO de días de cuidado ESPECIALIZADO (skilled nursing) en un nursing home, únicamente después de una hospitalización calificante previa, con copagos significativos tras cierto punto. NO cubre cuidado custodial de largo plazo. LTC: diseñado específicamente para cubrir el cuidado CUSTODIAL (bañar, vestir, alimentar) que Medicare excluye. [VERIFICADO — distinción fundamental y estable entre ambos productos]",
      incorrectos: [
        "A) Medicare NO cubre el cuidado custodial de forma indefinida — tiene límites estrictos de días y condiciones.",
        "C) NO son redundantes en absoluto — cubren TIPOS DE CUIDADO fundamentalmente diferentes.",
        "D) Las funciones descritas están invertidas — Medicare cubre algo de hospitalización/cuidado especializado, no exclusivamente nursing homes."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "SINONIMOS",
      q: "La característica de PROTECCIÓN CONTRA LA INFLACIÓN en una póliza de LTC es considerada especialmente importante por qué razón fundamental?",
      o: [
        "Porque la inflación en costos médicos no es un fenómeno real y esta característica no tiene valor práctico",
        "Porque el LTC frecuentemente se compra a edades tempranas (ej: 55 años) pero puede no utilizarse hasta décadas después — durante ese tiempo, los costos reales de cuidado aumentan significativamente",
        "Porque la inflación afecta exclusivamente el costo de las primas del contrato, no el monto del beneficio diario",
        "Porque los reguladores de Florida exigen obligatoriamente esta característica en absolutamente todas las pólizas LTC"
      ],
      a: 1,
      trampa: "El tiempo transcurrido entre la compra y el eventual uso del LTC puede extenderse por décadas — período durante el cual los costos reales de cuidado aumentan sustancialmente.",
      correcto: "La protección contra inflación es crucial porque el LTC frecuentemente se compra alrededor de los 55 años pero puede no utilizarse hasta los 80. Los costos de cuidado a largo plazo históricamente han aumentado consistentemente año tras año. Sin esta protección, un beneficio nominal fijo de hoy podría resultar insuficiente en el futuro. [VERIFICADO — principio fundamental de diseño de producto LTC. El porcentaje exacto histórico de incremento anual REQUIERE VERIFICACIÓN contra fuentes actualizadas]",
      incorrectos: [
        "A) La inflación en costos médicos y de cuidado a largo plazo es un fenómeno real y consistentemente documentado.",
        "C) La inflación afecta directamente los COSTOS DE CUIDADO reales — no únicamente el costo de las primas.",
        "D) Florida no exige de forma mandatoria esta característica en absolutamente todas las pólizas LTC disponibles."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente es un escenario que típicamente ACTIVA los beneficios de un seguro de LTC EXCEPTO:",
      o: [
        "El asegurado no puede bañarse ni vestirse de forma independiente (calificando como 2 ADLs)",
        "El asegurado presenta demencia severa con deterioro cognitivo documentado por un profesional médico",
        "El asegurado está hospitalizado temporalmente por una cirugía electiva de rodilla con recuperación esperada de 2 semanas",
        "El asegurado no puede trasladarse de la cama a una silla de ruedas sin asistencia de otra persona"
      ],
      a: 2,
      trampa: "Una hospitalización temporal con recuperación completamente esperada NO activa el LTC — el LTC está diseñado específicamente para incapacidades CRÓNICAS y de largo plazo.",
      correcto: "Una hospitalización temporal de 2 semanas para recuperación de una cirugía electiva NO activa típicamente el LTC. El LTC está diseñado específicamente para incapacidades CRÓNICAS y prolongadas — la recuperación esperada y de corto plazo excluye este escenario. [VERIFICADO — principio fundamental de diseño del producto LTC]",
      incorrectos: [
        "A) 2 ADLs comprometidas (bañarse y vestirse) SÍ típicamente activa el LTC bajo el estándar estándar.",
        "B) Demencia severa documentada SÍ típicamente activa el LTC — el deterioro cognitivo es un disparador reconocido de la industria.",
        "D) Incapacidad de trasladarse (transferring) SÍ es una de las ADLs estándar reconocidas que puede activar el LTC."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "María, 85 años, necesita cuidado en un hogar de enfermería. Tiene Medicare Parte A. ¿Cuál es GENERALMENTE la estructura de cobertura de Medicare para este tipo de cuidado?",
      o: [
        "Medicare cubre ilimitadamente y de forma indefinida el hogar de enfermería para cualquier persona de 65 años en adelante",
        "Medicare puede cubrir un número limitado de días (aproximadamente los primeros 20 días completos, luego copago significativo hasta un límite total), únicamente tras una hospitalización calificante previa, y NO cubre después de ese límite total de días",
        "Medicare cubre aproximadamente el 50% del costo durante todo el primer año de estancia",
        "Medicare no cubre absolutamente ningún tipo de cuidado en hogares de enfermería bajo ninguna circunstancia"
      ],
      a: 1,
      trampa: "Medicare tiene límites estrictos y específicos de días para el cuidado en nursing homes — definitivamente no es una cobertura ilimitada ni indefinida.",
      correcto: "Medicare Parte A puede cubrir cuidado especializado en nursing home bajo condiciones específicas: cobertura completa los primeros días, copago significativo por día en un rango intermedio, y CERO cobertura después de alcanzar el límite total de días del beneficio — únicamente tras una hospitalización calificante previa de al menos algunos días consecutivos. [REQUIERE VERIFICACIÓN — los números exactos de días y montos de copago deben confirmarse contra la estructura de Medicare vigente al momento del examen, ya que estos valores se ajustan periódicamente]",
      incorrectos: [
        "A) Medicare definitivamente NO cubre de forma ilimitada el nursing home — tiene límites muy específicos y estrictos.",
        "C) El 50% durante todo el primer año no describe correctamente la estructura real de copagos escalonados de Medicare.",
        "D) Medicare SÍ cubre nursing home, pero de forma limitada en tiempo y bajo condiciones específicas — no es cobertura cero."
      ]
    }
  ]
},

{
  id: "salud_006",
  area: "salud",
  concepto: "HSA, HRA y FSA — Cuentas de Beneficios de Salud",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál cuenta de beneficios de salud REQUIERE que el titular esté inscrito en un Plan de Alto Deducible (HDHP) como condición para poder contribuir?",
      o: [
        "HRA (Health Reimbursement Arrangement)",
        "FSA (Flexible Spending Account)",
        "HSA (Health Savings Account)",
        "Todas las cuentas de beneficios de salud comparten este mismo requisito"
      ],
      a: 2,
      trampa: "Únicamente la HSA impone el requisito estructural de estar inscrito en un HDHP — la HRA y la FSA no comparten esta condición.",
      correcto: "HSA = REQUIERE estar inscrito en un HDHP (High Deductible Health Plan) como condición legal para poder realizar contribuciones. No es posible contribuir a una HSA teniendo un plan de salud de bajo deducible tradicional. [VERIFICADO — requisito federal estable bajo el IRC para HSA]",
      incorrectos: [
        "A) La HRA no impone el requisito de HDHP — el empleador puede ofrecerla junto con cualquier tipo de plan.",
        "B) La FSA tampoco impone el requisito de HDHP — es compatible con la mayoría de los planes de salud.",
        "D) Únicamente la HSA impone este requisito específico — no todas las cuentas lo comparten."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la característica MÁS IMPORTANTE que diferencia prácticamente una HSA de una FSA para efectos de planificación financiera?",
      o: [
        "La HSA está disponible únicamente para empleados de grandes corporaciones; la FSA para cualquier tamaño de empleador",
        "Los fondos de la HSA se ACUMULAN de año en año sin límite de tiempo; los fondos de la FSA generalmente siguen la regla de 'úsalos o piérdelos' dentro del año en curso",
        "La FSA permite contribuciones anuales estructuralmente mayores que la HSA en todos los casos",
        "La HSA únicamente puede ser financiada por el empleador; la FSA únicamente por el empleado"
      ],
      a: 1,
      trampa: "La regla de acumulación indefinida versus 'úsalo o piérdelo' es la diferencia práctica más significativa entre ambos productos para efectos de planificación.",
      correcto: "HSA = los fondos se ACUMULAN sin límite de tiempo, año tras año, siendo propiedad permanente del titular. FSA = generalmente sigue la regla 'úsalos o piérdelos' — los fondos no utilizados al final del año fiscal (con muy pocas excepciones limitadas) se pierden. [VERIFICADO — diferencia estructural fundamental y estable entre ambos productos]",
      incorrectos: [
        "A) Ambas cuentas están disponibles para empleados de cualquier tamaño de empresa — el tamaño no es un factor determinante.",
        "C) Los límites de contribución anual varían y no existe una regla universal de que la FSA tenga siempre mayor límite.",
        "D) Tanto la HSA como la FSA pueden ser financiadas por el empleado, por el empleador, o por ambos combinados."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "QUIEN_PAGA",
      q: "¿Quién específicamente puede realizar contribuciones a una HRA (Health Reimbursement Arrangement)?",
      o: [
        "Únicamente el empleado, utilizando dólares antes de impuestos (pre-tax)",
        "Únicamente el EMPLEADOR — las contribuciones directas del empleado no están estructuralmente permitidas en este tipo de cuenta",
        "Tanto el empleado como el empleador pueden contribuir libremente sin restricción alguna",
        "Exclusivamente el gobierno federal mediante subsidios fiscales directos al plan"
      ],
      a: 1,
      trampa: "La HRA es estructuralmente exclusiva del EMPLEADOR — el empleado no tiene la posibilidad de realizar contribuciones directas a este tipo específico de cuenta.",
      correcto: "HRA = ÚNICAMENTE el EMPLEADOR puede realizar contribuciones. El empleado NO contribuye directamente. El empleador reembolsa al empleado por gastos médicos calificados hasta el monto total disponible en la HRA designada. [VERIFICADO — estructura reguladora estable de la HRA]",
      incorrectos: [
        "A) La HRA únicamente acepta contribuciones del EMPLEADOR — el empleado no puede contribuir directamente.",
        "C) Solo el empleador contribuye a la estructura de una HRA — el empleado no tiene esa opción disponible.",
        "D) El gobierno federal no contribuye directamente dinero a la HRA — ofrece ventajas fiscales pero no aporta fondos."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Qué sucede GENERALMENTE con los fondos ya acumulados en una HSA si el titular cambia de trabajo y su nuevo empleador no ofrece un HDHP?",
      o: [
        "La HSA se cierra automáticamente y todos los fondos acumulados se pierden por completo",
        "El titular ya no puede realizar nuevas CONTRIBUCIONES, pero los fondos ya acumulados permanecen siendo de su propiedad y pueden seguir usándose para gastos médicos calificados",
        "Los fondos deben transferirse obligatoriamente al plan de salud específico del nuevo empleador",
        "El titular está legalmente obligado a devolver todos los fondos acumulados al empleador anterior"
      ],
      a: 1,
      trampa: "La HSA es propiedad PERMANENTE del titular individual — los fondos ya acumulados nunca se pierden, independientemente de cambios de empleo posteriores.",
      correcto: "La HSA es COMPLETAMENTE PORTÁTIL y es propiedad permanente del titular individual. Si posteriormente ya no tiene un HDHP, no puede realizar NUEVAS contribuciones, pero todos los fondos previamente acumulados siguen siendo SUYOS de forma indefinida — puede continuar usándolos para gastos médicos calificados sin restricción de plazo. [VERIFICADO — característica de portabilidad fundamental y estable de la HSA]",
      incorrectos: [
        "A) Los fondos de la HSA NUNCA se pierden por cambio de empleo — son propiedad permanente del titular.",
        "C) Los fondos de la HSA no se transfieren automáticamente al plan del nuevo empleador — permanecen en la cuenta HSA individual.",
        "D) No existe ninguna obligación legal de devolver los fondos acumulados a ningún empleador anterior."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Un empleado con HDHP anticipa gastos médicos mínimos durante el año actual, pero prevé gastos médicos significativos aproximadamente en 3 años. ¿Cuál cuenta de beneficios de salud le conviene MÁS estratégicamente para esta situación específica?",
      o: [
        "FSA — porque los fondos aportados este año están disponibles inmediatamente para uso sin demora",
        "HSA — puede acumular fondos progresivamente este año y los próximos años para eventualmente cubrir los gastos significativos previstos dentro de 3 años",
        "Ninguna de las dos cuentas permite estratégicamente ahorrar específicamente para gastos médicos futuros más allá de un año fiscal",
        "Ambas cuentas son funcionalmente equivalentes para este escenario específico de planificación"
      ],
      a: 1,
      trampa: "La capacidad de acumulación indefinida de la HSA es precisamente ideal para este escenario — mientras que la FSA obligaría a gastar los fondos dentro del año en curso.",
      correcto: "HSA es la opción claramente IDEAL para este escenario específico. El empleado puede acumular fondos con crecimiento potencial y impuestos diferidos durante los 3 años, para luego utilizarlos cuando surjan los gastos significativos previstos. La FSA no permitiría esta estrategia — los fondos no utilizados dentro del año se perderían. [VERIFICADO — aplicación práctica de las diferencias estructurales estables entre ambos productos]",
      incorrectos: [
        "A) La FSA pierde los fondos no utilizados al finalizar el año — no sirve estratégicamente para acumular hacia gastos futuros de 3 años.",
        "C) La HSA SÍ permite específicamente acumular fondos para gastos médicos futuros sin límite de tiempo aplicable.",
        "D) NO son equivalentes para este caso específico — la HSA es claramente superior para efectos de acumulación estratégica a largo plazo."
      ]
    }
  ]
}

]; // fin PK_HEALTH

if (typeof module !== 'undefined') module.exports = { PK_HEALTH };
