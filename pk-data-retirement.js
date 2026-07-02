// ============================================================
// PEARSON KILLER — pk-data-retirement.js
// Módulo: Planes de Retiro y Seguro Social
// 6 conceptos × 5 variantes = 30 preguntas
//
// [VERIFICADO] = mecánica de producto o ley federal estable
// [REQUIERE VERIFICACIÓN] = cifra específica a confirmar contra fuente vigente
// Ver VERIFICATION_NOTES.md
// ============================================================

const PK_RETIREMENT = [

{
  id: "retiro_001",
  area: "retiro",
  concepto: "IRA Tradicional vs IRA Roth",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál tipo de IRA permite retiros completamente LIBRES DE IMPUESTOS en la jubilación y NO tiene Distribuciones Mínimas Requeridas (RMDs) durante la vida del propietario original?",
      o: [
        "IRA Tradicional",
        "SEP-IRA",
        "IRA Roth",
        "SIMPLE IRA"
      ],
      a: 2,
      trampa: "El IRA Tradicional es generalmente más conocido, pero es el IRA Roth el que ofrece las ventajas fiscales específicamente en la fase de retiro.",
      correcto: "IRA Roth = las contribuciones se realizan con dólares DESPUÉS de impuestos (no deducibles). Los retiros calificados son LIBRES DE IMPUESTOS. NO existen RMDs obligatorias durante la vida del propietario original de la cuenta. [VERIFICADO — características estructurales estables del IRA Roth bajo el IRC]",
      incorrectos: [
        "A) El IRA Tradicional sí tiene RMDs obligatorias y los retiros son generalmente gravables como ingreso ordinario.",
        "B) El SEP-IRA también tiene RMDs obligatorias y retiros gravables como ingreso ordinario.",
        "D) El SIMPLE IRA también tiene RMDs obligatorias y retiros gravables como ingreso ordinario."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "ESCENARIO",
      q: "Carlos, 35 años, tiene fundadas razones para esperar estar en un tramo impositivo MÁS ALTO al momento de jubilarse. Desde una perspectiva puramente fiscal, ¿cuál estrategia de IRA es GENERALMENTE más conveniente para él?",
      o: [
        "IRA Tradicional — para obtener la deducción fiscal inmediata ahora, cuando su tramo es más bajo",
        "IRA Roth — pagar impuestos ahora a la tasa más baja actual; retirar posteriormente libre de impuestos cuando su tramo sea mayor",
        "SEP-IRA — porque estructuralmente permite contribuciones anuales más altas",
        "Es indiferente — todos los tipos de IRA son fiscalmente equivalentes a largo plazo bajo cualquier escenario"
      ],
      a: 1,
      trampa: "La deducción inmediata del IRA Tradicional resulta atractiva a primera vista, pero si la tasa impositiva futura será significativamente más alta, resulta generalmente más eficiente pagar impuestos ahora a la tasa menor.",
      correcto: "Si Carlos anticipa fundadamente estar en un tramo impositivo MAYOR en la jubilación, el ROTH es generalmente SUPERIOR desde la perspectiva fiscal: paga impuestos ahora a la tasa actual menor, y retira posteriormente LIBRE DE IMPUESTOS cuando la tasa aplicable sería mayor. [VERIFICADO — principio de planificación fiscal estable y ampliamente aceptado]",
      incorrectos: [
        "A) Deducir ahora para luego pagar impuestos a una tasa MAYOR en el futuro resulta generalmente menos eficiente si la tasa efectivamente sube.",
        "C) El SEP-IRA tiene límites de contribución más altos, pero no resuelve específicamente el problema del tramo impositivo futuro elevado.",
        "D) NO son fiscalmente equivalentes cuando existe una diferencia significativa proyectada entre el tramo impositivo actual y el futuro."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Según la legislación federal más reciente conocida (SECURE 2.0 Act de 2022), ¿a qué edad deben comenzar generalmente las Distribuciones Mínimas Requeridas (RMDs) de un IRA Tradicional?",
      o: [
        "70½ años de edad",
        "72 años de edad",
        "73 años de edad",
        "75 años de edad"
      ],
      a: 2,
      trampa: "La edad de inicio de los RMDs ha cambiado varias veces en años recientes debido a distintas reformas legislativas — el examen puede evaluar la versión más actualizada conocida.",
      correcto: "El SECURE 2.0 Act (aprobado en 2022) estableció que los RMDs de IRA Tradicional generalmente comienzan a los 73 AÑOS de edad. Anteriormente la edad era 70½ (regla previa a 2019) y luego 72 (bajo el SECURE Act original de 2019). El IRA Roth NO tiene RMDs durante la vida del propietario original. [VERIFICADO al momento del entrenamiento — REQUIERE VERIFICACIÓN de que no haya cambios legislativos posteriores adicionales, ya que la ley establece una futura transición a 75 años en años posteriores]",
      incorrectos: [
        "A) 70½ años era la regla aplicable antes de la aprobación del SECURE Act de 2019.",
        "B) 72 años fue la edad establecida específicamente bajo el SECURE Act original de 2019, antes del SECURE 2.0.",
        "D) 75 años está planeado como una edad futura de transición según el SECURE 2.0 Act — pero no es la edad actualmente vigente en este momento."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPTO",
      q: "Todo lo siguiente constituye una diferencia real entre el IRA Tradicional y el IRA Roth EXCEPTO:",
      o: [
        "Las contribuciones al IRA Tradicional pueden ser deducibles de impuestos; las contribuciones al Roth nunca lo son",
        "El IRA Roth no tiene RMDs durante la vida del propietario; el IRA Tradicional sí las tiene obligatoriamente",
        "Los retiros calificados del Roth son libres de impuestos; los retiros del Tradicional son generalmente gravables como ingreso ordinario",
        "Ambos tipos de IRA comparten exactamente el mismo límite de contribución anual establecido por el IRS"
      ],
      a: 3,
      trampa: "El límite de contribución anual siendo idéntico para ambos tipos de IRA representa una SIMILITUD entre ellos — no una diferencia.",
      correcto: "El límite de contribución anual establecido por el IRS ($7,000 base en 2024, $8,000 para mayores de 50 años con catch-up) es EL MISMO para ambos tipos de IRA. Esto representa una IGUALDAD estructural entre los dos productos, no una diferencia. [VERIFICADO — límites establecidos anualmente por el IRS son idénticos para ambos tipos]",
      incorrectos: [
        "A) Esta SÍ es una diferencia real y significativa — deducibilidad del Tradicional versus no deducibilidad del Roth.",
        "B) Esta SÍ es una diferencia real y significativa — presencia de RMDs en el Tradicional versus ausencia en el Roth.",
        "C) Esta SÍ es una diferencia real y significativa — tratamiento fiscal opuesto de los retiros entre ambos tipos."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Ana, 45 años, se encuentra actualmente en el tramo impositivo del 22%. Proyecta razonablemente jubilarse a los 67 años en el tramo del 32%. Desde una perspectiva estrictamente fiscal, ¿cuál estrategia de IRA resulta MÁS APROPIADA?",
      o: [
        "IRA Tradicional — para obtener la deducción fiscal inmediata disponible al 22% actual",
        "IRA Roth — pagar el 22% de impuesto ahora sobre las contribuciones, evitando así pagar el 32% proyectado sobre los retiros futuros",
        "Ambas estrategias son fiscalmente equivalentes porque el valor del dinero en el tiempo neutraliza matemáticamente la diferencia de tasas",
        "Ninguna estrategia es recomendable — debería esperar a que su tramo impositivo actual baje antes de contribuir a cualquier IRA"
      ],
      a: 1,
      trampa: "La deducción inmediata disponible bajo el IRA Tradicional resulta atractiva superficialmente, pero el costo fiscal diferido proyectado al 32% resulta generalmente mayor que el beneficio inmediato del 22%.",
      correcto: "Con un tramo del 22% actual y un tramo proyectado del 32% en la jubilación, el Roth es generalmente SUPERIOR desde la perspectiva fiscal: Ana paga el 22% ahora sobre las contribuciones, y evita pagar el 32% proyectado sobre décadas de crecimiento acumulado en los retiros futuros. [VERIFICADO — principio matemático y fiscal estable]",
      incorrectos: [
        "A) La deducción del 22% ahora resulta atractiva, pero terminar pagando el 32% sobre todo el saldo acumulado después resulta generalmente peor.",
        "C) NO son fiscalmente equivalentes cuando existe una diferencia significativa proyectada entre los tramos impositivos actual y futuro.",
        "D) Esperar no constituye una estrategia efectiva — el tiempo adicional de crecimiento potencialmente libre de impuestos tiene valor real."
      ]
    }
  ]
},

{
  id: "retiro_002",
  area: "retiro",
  concepto: "Planes 401(k) — Contribución Definida vs Beneficio Definido",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "QUIEN_PAGA",
      q: "En un plan 401(k) estándar, ¿quién asume estructuralmente el RIESGO DE INVERSIÓN si el valor de mercado de las inversiones subyacentes cae?",
      o: [
        "El empleador patrocinador del plan asume contractualmente el riesgo",
        "El gobierno federal, a través del PBGC (Pension Benefit Guaranty Corporation), garantiza el valor",
        "El empleado / participante individual del plan asume completamente el riesgo",
        "La institución financiera administradora del plan asume el riesgo como parte de sus servicios"
      ],
      a: 2,
      trampa: "Es común confundir esta estructura con la del plan de Beneficio Definido, donde específicamente el EMPLEADOR asume el riesgo de inversión.",
      correcto: "El 401(k) es estructuralmente un plan de Contribución DEFINIDA. El empleado dirige sus propias decisiones de inversión dentro de las opciones disponibles y asume COMPLETAMENTE el riesgo resultante. Si el valor de mercado cae, el saldo de la cuenta individual del empleado cae proporcionalmente. [VERIFICADO — estructura fundamental y estable del 401(k) bajo ERISA]",
      incorrectos: [
        "A) El empleador asume el riesgo de inversión específicamente en planes de BENEFICIO DEFINIDO — no en el 401(k).",
        "B) El PBGC garantiza específicamente beneficios de planes de BENEFICIO DEFINIDO — no protege cuentas de contribución definida como el 401(k).",
        "D) La institución administradora presta servicios de custodia y administración, pero no asume el riesgo de inversión del participante."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia estructural CLAVE entre un plan de Beneficio Definido (Defined Benefit) y un plan de Contribución Definida (Defined Contribution) como el 401(k)?",
      o: [
        "El plan de Contribución Definida estructuralmente permite límites de aportación anual más altos en todos los casos",
        "En el Beneficio Definido, el EMPLEADOR garantiza contractualmente el monto del beneficio final de jubilación mediante una fórmula predeterminada; en la Contribución Definida, únicamente está garantizada la APORTACIÓN — el beneficio final depende del rendimiento de las inversiones",
        "Los planes de Contribución Definida están disponibles exclusivamente en el sector público gubernamental",
        "No existe ninguna diferencia práctica significativa entre ambos tipos de estructura de plan"
      ],
      a: 1,
      trampa: "Los propios nombres de los planes indican qué elemento específico está 'definido' o garantizado contractualmente en cada estructura.",
      correcto: "Beneficio DEFINIDO = el BENEFICIO final de jubilación está garantizado mediante fórmula (ej: porcentaje del salario × años de servicio). El empleador asume el riesgo de inversión necesario para cumplir esa promesa. Contribución DEFINIDA (401k) = únicamente está garantizada la APORTACIÓN periódica — el beneficio final depende completamente del rendimiento de las inversiones seleccionadas, y el empleado asume ese riesgo. [VERIFICADO — distinción fundamental y estable de ambas estructuras]",
      incorrectos: [
        "A) Los límites de contribución anual son establecidos independientemente por el IRS para cada tipo de plan — no es una regla general que uno sea siempre mayor.",
        "C) Los planes de Contribución Definida existen ampliamente tanto en el sector privado como en el sector público.",
        "D) La diferencia en quién asume el riesgo de inversión es una distinción altamente significativa y práctica entre ambas estructuras."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "El límite base de contribución del EMPLEADO a un plan 401(k) para el año 2024 es de aproximadamente $23,000. Los empleados de 50 años o más pueden realizar contribuciones adicionales de 'recuperación' (catch-up contributions) de aproximadamente:",
      o: [
        "$3,000 adicionales sobre el límite base",
        "$5,000 adicionales sobre el límite base",
        "$7,500 adicionales sobre el límite base",
        "$10,000 adicionales sobre el límite base"
      ],
      a: 2,
      trampa: "El monto exacto de contribuciones de recuperación (catch-up) es ajustado periódicamente por el IRS y puede confundirse con otros límites relacionados de diferentes tipos de cuenta.",
      correcto: "Para el año 2024, la contribución de recuperación (catch-up) para empleados de 50+ años en un 401(k) fue de aproximadamente $7,500 adicionales, resultando en un total combinado de aproximadamente $30,500. [REQUIERE VERIFICACIÓN — estos límites son ajustados anualmente por el IRS; confirmar la cifra exacta vigente al momento del examen contra fuente actualizada del IRS]",
      incorrectos: [
        "A) $3,000 no corresponde al monto de catch-up establecido específicamente para el 401(k) en 2024.",
        "B) $5,000 corresponde más cercanamente al catch-up histórico del IRA — no al del 401(k).",
        "D) $10,000 excede el monto de catch-up establecido para el 401(k) en el año de referencia."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "ESCENARIO",
      q: "Pedro trabaja para una empresa con plan 401(k) que tiene un esquema de 'cliff vesting' de 3 años para las contribuciones de match del empleador. Pedro renuncia después de exactamente 2 años y 11 meses. ¿Qué sucede con las contribuciones de MATCH aportadas por el empleador?",
      o: [
        "Pedro retiene el 100% de las contribuciones del empleador porque trabajó casi el período completo de 3 años",
        "Pedro retiene el 75% de las contribuciones del empleador, proporcional al tiempo trabajado",
        "Pedro retiene el 50% de las contribuciones del empleador como política estándar intermedia",
        "Pedro NO retiene absolutamente ninguna contribución del empleador — el cliff vesting de 3 años no fue completado exactamente"
      ],
      a: 3,
      trampa: "El 'cliff vesting' es estructuralmente binario — no existe acumulación proporcional gradual. Un mes antes de completar el período exacto significa cero derechos adquiridos sobre las contribuciones del empleador.",
      correcto: "CLIFF VESTING = mecanismo de todo-o-nada, sin acumulación gradual proporcional. Pedro NO completó exactamente los 3 años requeridos (le faltó 1 mes). Resultado: Pedro retiene 0% de las contribuciones de match del empleador. Sus propias contribuciones personales siempre son 100% suyas independientemente del vesting. [VERIFICADO — mecánica estructural estable del cliff vesting]",
      incorrectos: [
        "A) 'Casi completar' el período no genera derecho alguno bajo cliff vesting — es estrictamente binario: completó o no completó.",
        "B) La retención proporcional del 75% correspondería a un esquema de 'graded vesting' — no al cliff vesting descrito.",
        "C) El 50% intermedio no aplica bajo un esquema de cliff vesting — no existe acumulación gradual de ningún tipo."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "Un plan SEP-IRA se diferencia estructuralmente de un plan SIMPLE IRA principalmente en qué aspecto?",
      o: [
        "El SEP-IRA está diseñado exclusivamente para empresas con 100 o más empleados; el SIMPLE IRA para empresas pequeñas",
        "El SEP-IRA es financiado EXCLUSIVAMENTE por el empleador; el SIMPLE IRA puede ser financiado tanto por el empleador como directamente por el empleado mediante diferimientos de salario",
        "El SEP-IRA estructuralmente permite límites de contribución anual menores que el SIMPLE IRA en todos los casos",
        "El SEP-IRA requiere obligatoriamente que todos los empleados seleccionen sus propias inversiones individuales, mientras el SIMPLE IRA las selecciona centralizadamente el empleador"
      ],
      a: 1,
      trampa: "La diferencia estructural fundamental de QUIÉN puede realizar contribuciones (solo empleador versus empleador y empleado) es la distinción clave entre estos dos tipos de plan.",
      correcto: "SEP-IRA = ÚNICAMENTE el empleador realiza contribuciones — los empleados no realizan diferimientos voluntarios de salario. SIMPLE IRA = AMBOS pueden contribuir: el empleado realiza diferimientos voluntarios de su salario, Y el empleador está obligado a un match (o contribución no electiva) según la estructura del plan. [VERIFICADO — diferencia estructural fundamental entre ambos tipos de plan]",
      incorrectos: [
        "A) Las restricciones de tamaño de empresa son diferentes y específicas para cada tipo de plan — no corresponde a esta descripción general.",
        "C) El SEP-IRA generalmente permite límites de contribución anual MAYORES que el SIMPLE IRA, no menores.",
        "D) Ambos tipos de plan generalmente permiten que los empleados seleccionen entre las opciones de inversión disponibles."
      ]
    }
  ]
},

{
  id: "retiro_003",
  area: "retiro",
  concepto: "SEP-IRA y SIMPLE IRA — Planes para Pequeños Negocios",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "Un profesional autoempleado (self-employed) desea contribuir un porcentaje sustancial de su ingreso neto de negocio a un plan de retiro con mínima complejidad administrativa. ¿Cuál tipo de plan es GENERALMENTE más apropiado para este perfil?",
      o: [
        "Plan 401(k) tradicional corporativo",
        "SIMPLE IRA — Plan de Ahorro e Incentivo de Igualación para Empleados",
        "SEP-IRA — Pensión Simplificada del Empleado",
        "Plan 403(b) — exclusivo de organizaciones exentas de impuestos"
      ],
      a: 2,
      trampa: "El SEP-IRA está específicamente diseñado para ser simple de administrar y particularmente atractivo para autoempleados y pequeños negocios.",
      correcto: "SEP-IRA (Simplified Employee Pension) = ideal para autoempleados y pequeños negocios. Permite contribuciones sustanciales calculadas como porcentaje del ingreso neto de negocio. Administrativamente simple — sin requisitos de reporte anual complejo como el 401(k). [VERIFICADO — diseño estructural estable del SEP-IRA]",
      incorrectos: [
        "A) El 401(k) tradicional corporativo tiene mayor complejidad administrativa, generalmente inapropiada para un autoempleado individual.",
        "B) El SIMPLE IRA está más orientado a empresas con múltiples empleados que buscan ofrecer un beneficio de retiro compartido.",
        "D) El 403(b) está específicamente reservado para empleados de organizaciones exentas de impuestos y ciertas instituciones educativas — no para autoempleados en general."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "El plan SIMPLE IRA está estructuralmente diseñado para empresas con un número MÁXIMO de empleados de:",
      o: [
        "25 empleados",
        "50 empleados",
        "100 empleados",
        "500 empleados"
      ],
      a: 2,
      trampa: "SIMPLE IRA (Savings Incentive Match Plan for Employees) tiene un umbral específico de 100 empleados o menos — no debe confundirse con otros umbrales regulatorios de 50 empleados de otras leyes.",
      correcto: "SIMPLE IRA está diseñado estructuralmente para empresas con 100 empleados O MENOS. Es una opción intermedia entre la simplicidad del SEP-IRA y la complejidad de un 401(k) completo, con contribuciones tanto del empleado como del empleador. [VERIFICADO — umbral estructural estable del SIMPLE IRA bajo el IRC]",
      incorrectos: [
        "A) 25 empleados no corresponde al umbral establecido específicamente para el SIMPLE IRA.",
        "B) 50 empleados corresponde al umbral del mandato del empleador bajo la ACA — un umbral completamente diferente y no relacionado.",
        "D) 500 empleados excede significativamente el umbral máximo establecido para el SIMPLE IRA."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "QUIEN_PAGA",
      q: "¿Cuál es la diferencia estructural principal entre un SEP-IRA y un SIMPLE IRA en cuanto a quién puede realizar contribuciones a la cuenta?",
      o: [
        "El SEP-IRA es financiado EXCLUSIVAMENTE por el empleador; el SIMPLE IRA puede ser financiado tanto por el empleador como por el empleado mediante diferimientos voluntarios",
        "El SEP-IRA permite contribuciones voluntarias directas del empleado; el SIMPLE IRA únicamente del empleador",
        "Ambos planes son financiados exclusivamente por el empleador sin ninguna diferencia estructural entre ellos",
        "Ambos planes permiten contribuciones del empleado y del empleador en proporciones exactamente idénticas y fijas"
      ],
      a: 0,
      trampa: "La diferencia estructural de quién puede contribuir es fundamental y frecuentemente evaluada en el examen — SEP es exclusivamente del empleador; SIMPLE permite ambas partes.",
      correcto: "SEP-IRA = ÚNICAMENTE el empleador realiza contribuciones a las cuentas individuales de los empleados elegibles. Los empleados no realizan contribuciones voluntarias propias. SIMPLE IRA = AMBOS contribuyen: el empleado mediante diferimiento voluntario de salario, Y el empleador mediante match obligatorio o contribución no electiva. [VERIFICADO — diferencia estructural fundamental]",
      incorrectos: [
        "B) Esta descripción está invertida respecto a la estructura real de ambos tipos de plan.",
        "C) Solo el SEP-IRA es exclusivamente financiado por el empleador — el SIMPLE IRA permite contribuciones de ambas partes.",
        "D) Las proporciones de contribución no son idénticas ni fijas entre ambos tipos de plan — sus estructuras son fundamentalmente diferentes."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Bajo un plan SIMPLE IRA, ¿cuál es la penalidad ESPECIAL del IRS por un retiro anticipado realizado DENTRO de los primeros 2 años de participación en el plan (a diferencia de la penalidad estándar del 10%)?",
      o: [
        "5% adicional sobre el monto retirado, aplicable únicamente en el primer año",
        "15% total sobre el monto retirado durante los primeros 2 años de participación",
        "25% total sobre el monto retirado — significativamente mayor que la penalidad estándar del 10% de otros IRAs",
        "No existe ninguna penalidad especial adicional durante los primeros 2 años de un SIMPLE IRA"
      ],
      a: 2,
      trampa: "El SIMPLE IRA tiene una penalidad ESPECIALMENTE elevada durante sus primeros 2 años de participación — significativamente mayor que la penalidad estándar del 10% aplicable a otros tipos de IRA.",
      correcto: "El SIMPLE IRA impone una penalidad especial del 25% (en lugar del 10% estándar) sobre retiros realizados durante los primeros 2 años de participación en el plan. Después de completar esos 2 años iniciales, la penalidad estándar regresa al 10% habitual aplicable a otros IRAs. [VERIFICADO — regla especial estable del IRC específica para el SIMPLE IRA]",
      incorrectos: [
        "A) 5% no corresponde a la penalidad especial establecida específicamente para el SIMPLE IRA en su período inicial.",
        "B) 15% no corresponde a la penalidad especial correcta establecida para este escenario específico.",
        "D) SÍ existe una penalidad especial claramente elevada durante los primeros 2 años de participación en un SIMPLE IRA."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Una empresa con 15 empleados evalúa entre establecer un SEP-IRA o un SIMPLE IRA para ofrecer beneficios de retiro competitivos. ¿Cuál consideración estructural sería MÁS RELEVANTE para favorecer específicamente al SIMPLE IRA sobre el SEP-IRA en este escenario?",
      o: [
        "El SEP-IRA no está legalmente disponible para empresas con múltiples empleados, únicamente para autoempleados individuales",
        "El SIMPLE IRA permite a los empleados contribuir voluntariamente de su propio salario además de recibir match del empleador — fomentando mayor participación activa y ahorro combinado",
        "El SEP-IRA tiene límites de contribución anual estructuralmente menores en todos los escenarios posibles comparado con el SIMPLE IRA",
        "El SIMPLE IRA es la única opción legalmente permitida para empresas con más de 10 empleados bajo cualquier circunstancia"
      ],
      a: 1,
      trampa: "La capacidad del empleado de contribuir voluntariamente su propio salario (además del match del empleador) bajo el SIMPLE IRA fomenta mayor participación activa y potencial de ahorro combinado comparado con el SEP-IRA.",
      correcto: "La ventaja estructural clave del SIMPLE IRA en este contexto es que PERMITE a los empleados contribuir voluntariamente de su propio salario (diferimiento electivo) además de recibir el match correspondiente del empleador — resultando en mayor participación activa y potencial de ahorro combinado que el SEP-IRA, donde únicamente contribuye el empleador. [VERIFICADO — comparación estructural estable entre ambos tipos de plan]",
      incorrectos: [
        "A) El SEP-IRA SÍ está legalmente disponible para empresas con múltiples empleados — no está restringido únicamente a autoempleados.",
        "C) El SEP-IRA generalmente permite límites de contribución MAYORES que el SIMPLE IRA — no menores.",
        "D) El SEP-IRA sigue siendo una opción legal completamente disponible para empresas con más de 10 empleados."
      ]
    }
  ]
},

{
  id: "retiro_004",
  area: "retiro",
  concepto: "Vesting — Adquisición de Derechos sobre Contribuciones del Empleador",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "SINONIMOS",
      q: "El concepto de 'Vesting' en un plan de retiro patrocinado por el empleador se refiere específicamente a:",
      o: [
        "El proceso mediante el cual el empleado selecciona sus opciones de inversión dentro del plan",
        "El derecho del empleado sobre las contribuciones realizadas POR EL EMPLEADOR — cuándo esas contribuciones se convierten en propiedad irrevocable del empleado",
        "El proceso general de cálculo actuarial del beneficio de retiro proyectado a futuro",
        "El procedimiento administrativo específico para solicitar el retiro de fondos al momento de la jubilación"
      ],
      a: 1,
      trampa: "El Vesting se refiere específicamente a las contribuciones del EMPLEADOR — no a las contribuciones propias que realiza el propio empleado.",
      correcto: "VESTING = el proceso mediante el cual las contribuciones realizadas por el EMPLEADOR se convierten en propiedad irrevocable del empleado. Las contribuciones propias del empleado SIEMPRE son 100% suyas desde el primer día — el vesting únicamente afecta lo aportado por el empleador. [VERIFICADO — concepto fundamental estable bajo ERISA]",
      incorrectos: [
        "A) La selección de opciones de inversión es un proceso completamente diferente al concepto de vesting.",
        "C) El cálculo actuarial proyectado es un proceso técnico separado — no equivale al concepto de vesting.",
        "D) El procedimiento de retiro de fondos al jubilarse es la distribución — un proceso distinto del vesting."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "COMPARACION",
      q: "Entre los distintos esquemas de vesting disponibles, ¿cuál es GENERALMENTE el más favorable para el empleado desde su perspectiva individual?",
      o: [
        "Cliff vesting de 5 años — el empleado recibe el 100% únicamente después de completar 5 años exactos",
        "Graded vesting de 6 años — el empleado recibe porcentajes crecientes de forma gradual",
        "Immediate vesting — las contribuciones del empleador se convierten en propiedad del empleado inmediatamente desde el primer día",
        "Cliff vesting de 3 años — más corto que el esquema de 5 años, pero aún requiere completar el período exacto"
      ],
      a: 2,
      trampa: "El Immediate vesting es estructuralmente el más favorable — el empleado adquiere derechos inmediatos sin ningún período de espera obligatorio.",
      correcto: "IMMEDIATE VESTING = el empleado adquiere derechos inmediatos sobre el 100% de las contribuciones del empleador desde el primer día de participación. Es el esquema más favorable para el empleado, aunque es relativamente menos común porque los empleadores frecuentemente prefieren esquemas de vesting gradual como herramienta de retención de talento. [VERIFICADO — comparación estructural de esquemas estándar de vesting]",
      incorrectos: [
        "A) 5 años de cliff es un período considerablemente largo — el empleado no tiene ningún derecho hasta completar exactamente el año 5.",
        "B) El graded de 6 años ofrece acumulación gradual, pero requiere un período más extenso que el immediate vesting.",
        "D) El cliff de 3 años es más favorable que el de 5 años, pero sigue siendo estructuralmente menos favorable que el immediate vesting."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Bajo las reglas generales de ERISA, ¿cuáles son APROXIMADAMENTE los esquemas máximos de vesting permitidos para contribuciones de match del empleador en planes de contribución definida?",
      o: [
        "Cliff máximo de 10 años, o graded máximo de 15 años",
        "Cliff máximo de 3 años, o graded máximo de 6 años (aproximadamente 20% por año entre el año 2 y el año 6)",
        "Cliff máximo de 5 años, o graded máximo de 10 años sin límite intermedio",
        "No existe ningún límite regulatorio — el empleador puede establecer libremente cualquier período de vesting"
      ],
      a: 1,
      trampa: "ERISA establece límites MÁXIMOS específicos para el vesting de contribuciones de match — el empleador puede ofrecer condiciones más favorables, pero no puede imponer períodos más restrictivos que estos máximos.",
      correcto: "Bajo ERISA, los límites máximos generales establecidos para contribuciones de match son: Cliff máximo de 3 AÑOS (100% después de completar el año 3), o alternativamente Graded máximo de 6 AÑOS (aproximadamente 20% incremental por año, del año 2 al año 6). [REQUIERE VERIFICACIÓN — confirmar estos porcentajes y plazos exactos contra el texto vigente de ERISA y sus reglamentos, ya que pueden existir distinciones adicionales entre distintos tipos de contribución]",
      incorrectos: [
        "A) 10 años de cliff excedería significativamente el límite máximo permitido bajo ERISA.",
        "C) 5 años de cliff también excedería el límite máximo específico establecido para contribuciones de match.",
        "D) SÍ existen límites regulatorios específicos bajo ERISA — el empleador no tiene libertad absoluta para establecer cualquier período."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Cuál es el tratamiento fiscal GENERAL de las distribuciones provenientes de un plan 401(k) tradicional (no Roth) al momento del retiro en la jubilación?",
      o: [
        "Generalmente libres de impuestos — de forma equivalente al tratamiento de un IRA Roth",
        "Generalmente gravables como ingreso ORDINARIO en el año fiscal en que se realiza la distribución",
        "Generalmente gravables como capital gain (ganancia de capital) a la tasa impositiva preferencial reducida",
        "Generalmente libres de impuestos hasta un límite anual fijo de aproximadamente $100,000"
      ],
      a: 1,
      trampa: "El 401(k) tradicional funciona con impuestos diferidos hasta el momento del retiro, momento en el cual se convierte en ingreso ordinario gravable.",
      correcto: "El 401(k) tradicional utiliza contribuciones PRE-TAX (antes de impuestos), que reducen el ingreso gravable del empleado en el momento de la contribución. Al retirar fondos en la jubilación, las distribuciones se gravan generalmente como INGRESO ORDINARIO en el año correspondiente — no como capital gain ni libre de impuestos. [VERIFICADO — principio fiscal fundamental y estable del IRC para planes tradicionales]",
      incorrectos: [
        "A) Las distribuciones libres de impuestos corresponden específicamente al Roth 401(k) o al IRA Roth — no al 401(k) tradicional estándar.",
        "C) Las distribuciones del 401(k) tradicional se gravan como ingreso ORDINARIO — no como capital gain a tasa preferencial.",
        "D) No existe una exclusión general de $100,000 anuales aplicable a las distribuciones estándar del 401(k)."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Ana tiene 75 años de edad con un saldo de $500,000 en su IRA Tradicional. No necesita utilizar ese dinero actualmente y preferiría no realizar ningún retiro por el momento. ¿Qué acción está legalmente obligada a tomar?",
      o: [
        "No está obligada a hacer nada — puede mantener el IRA Tradicional indefinidamente sin ningún retiro obligatorio",
        "Está obligada a tomar su Distribución Mínima Requerida (RMD) anual calculada, independientemente de si necesita el dinero — de lo contrario enfrenta una penalidad fiscal significativa sobre el monto no retirado",
        "Está obligada a convertir automáticamente todo el saldo del IRA Tradicional a un IRA Roth antes de continuar",
        "Puede donar la totalidad del saldo del IRA a caridad sin ninguna restricción ni implicación fiscal adicional"
      ],
      a: 1,
      trampa: "Las RMDs son obligatorias por ley a partir de cierta edad — no son opcionales incluso si el titular no necesita el dinero para sus gastos actuales.",
      correcto: "Ana tiene 75 años (mayor a la edad de inicio de RMDs) y está legalmente OBLIGADA a tomar su RMD anual, calculada según su expectativa de vida y el saldo de la cuenta al final del año anterior. La penalidad del IRS por no tomar el RMD requerido es significativa sobre el monto que debió retirarse pero no se retiró. [VERIFICADO — obligación fundamental de RMD bajo el IRC; REQUIERE VERIFICACIÓN del porcentaje exacto de penalidad vigente]",
      incorrectos: [
        "A) NO puede mantener el saldo indefinidamente sin retiro — las RMDs son obligatorias a partir de la edad correspondiente.",
        "C) La conversión a Roth ELIMINARÍA los futuros RMDs, pero la conversión en sí misma es una decisión opcional y genera un evento fiscal — no es automática ni obligatoria.",
        "D) Las donaciones calificadas de IRA a caridad (QCD) están sujetas a límites anuales específicos y reglas particulares — no puede donar el saldo completo sin restricción."
      ]
    }
  ]
},

{
  id: "ss_001",
  area: "ss",
  concepto: "Seguro Social — Edad de Retiro y Reducción por Jubilación Temprana",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es GENERALMENTE la Edad de Retiro Pleno (Full Retirement Age / FRA) del Seguro Social para personas nacidas en 1960 o después?",
      o: [
        "65 años de edad",
        "66 años de edad",
        "67 años de edad",
        "70 años de edad"
      ],
      a: 2,
      trampa: "La FRA ha cambiado progresivamente según el año de nacimiento. Para nacidos en 1960 o después, la FRA se estableció en 67 años — no en 65 como popularmente se asume.",
      correcto: "Para personas nacidas en 1960 o después, la FRA (Full Retirement Age) del Seguro Social es 67 AÑOS. Para años de nacimiento anteriores, la FRA varía progresivamente entre 65 y 67 años según una tabla escalonada específica. [VERIFICADO — estructura escalonada estable establecida por reforma legislativa histórica del Seguro Social]",
      incorrectos: [
        "A) 65 años era la FRA aplicable únicamente para personas nacidas antes de 1938 — no la FRA actual para nacidos en 1960+.",
        "B) 66 años fue la FRA aplicable para personas nacidas aproximadamente entre 1943-1954 — un rango de nacimiento anterior.",
        "D) 70 años es la edad a la que se completan los créditos por retraso — no es en sí la FRA."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "Pedro decide jubilarse a los 62 años y comienza a recibir beneficios REDUCIDOS del Seguro Social. ¿Qué sucede GENERALMENTE con esa reducción una vez que Pedro alcanza su FRA (67 años)?",
      o: [
        "La reducción se elimina automáticamente al alcanzar el FRA, y Pedro comienza a recibir el 100% del beneficio completo",
        "La reducción es generalmente PERMANENTE — Pedro continúa recibiendo el beneficio reducido de por vida, sin ajuste automático al alcanzar el FRA",
        "La reducción se elimina de forma gradual entre los 62 y 67 años hasta llegar progresivamente al 100%",
        "Pedro puede solicitar formalmente el ajuste al 100% pagando una compensación retroactiva al Seguro Social"
      ],
      a: 1,
      trampa: "La reducción por jubilación anticipada es PERMANENTE por diseño estructural del sistema — uno de los aspectos más frecuentemente malentendidos del Seguro Social.",
      correcto: "La reducción por jubilación TEMPRANA (antes del FRA) es generalmente PERMANENTE. Pedro continúa recibiendo el beneficio reducido de por vida, sin ningún ajuste automático al alcanzar posteriormente su FRA. Esta es la penalización estructural por acceder anticipadamente a los beneficios. [VERIFICADO — mecánica fundamental y estable del sistema de Seguro Social]",
      incorrectos: [
        "A) La reducción NO se elimina al alcanzar el FRA — permanece aplicada de forma permanente.",
        "C) No existe un mecanismo de eliminación gradual — el porcentaje de reducción se fija al momento de solicitar y permanece constante.",
        "D) No existe ningún mecanismo formal para 'comprar' o ajustar retroactivamente el beneficio una vez iniciado el cobro anticipado."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "ESCENARIO",
      q: "María, 64 años, evalúa jubilarse ahora (recibiendo Seguro Social reducido) versus esperar hasta su FRA de 67 años. Desde una perspectiva de planificación financiera, ¿cuál es GENERALMENTE el factor MÁS IMPORTANTE a considerar en esta decisión?",
      o: [
        "El carácter PERMANENTE E IRREVERSIBLE de la reducción — jubilarse antes del FRA implica recibir un porcentaje reducido de por vida",
        "La tasa de interés vigente en el mercado financiero en el momento específico de la decisión",
        "El número exacto de años totales que María contribuyó al sistema del Seguro Social durante su vida laboral",
        "El monto total de su patrimonio personal, excluyendo específicamente los beneficios del Seguro Social"
      ],
      a: 0,
      trampa: "La permanencia e irreversibilidad de la decisión de jubilación anticipada es el factor más crítico a considerar, dado su impacto de por vida.",
      correcto: "El factor más importante es que la reducción por jubilación anticipada es PERMANENTE E IRREVERSIBLE. Generalmente el 'punto de equilibrio' entre cobrar antes versus esperar se sitúa alrededor de cierta edad avanzada — si la persona vive más allá de ese punto, esperar resulta financieramente más ventajoso. [VERIFICADO — principio de planificación financiera estable; REQUIERE VERIFICACIÓN del punto de equilibrio exacto, que depende de variables individuales]",
      incorrectos: [
        "B) Las tasas de interés del mercado financiero general no determinan directamente el cálculo del beneficio del Seguro Social.",
        "C) El número de años de contribución ya está incorporado en el cálculo base del beneficio — no es el factor decisivo específico para CUÁNDO comenzar a cobrarlo.",
        "D) El patrimonio total puede ser relevante para la planificación financiera integral, pero no es el factor más directamente relevante para esta decisión específica de temporización."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es el monto del beneficio único de muerte (lump-sum death benefit) que paga el Seguro Social al cónyuge sobreviviente calificado?",
      o: [
        "$1,000 dólares como pago único",
        "$255 dólares como pago único — un monto histórico que no ha sido ajustado en décadas",
        "$5,000 dólares como pago único ajustado periódicamente por inflación",
        "El equivalente exacto a 3 meses del beneficio mensual regular del trabajador fallecido"
      ],
      a: 1,
      trampa: "$255 es un monto históricamente conocido por ser simbólico y no haber sido actualizado en muchas décadas — un detalle frecuentemente evaluado precisamente por su naturaleza contraintuitiva.",
      correcto: "El Seguro Social paga $255 como beneficio ÚNICO de muerte (lump-sum) al cónyuge sobreviviente calificado, o a hijos dependientes bajo ciertas condiciones específicas. Este monto ha permanecido sin cambios durante décadas — es un beneficio simbólico que no refleja costos funerarios reales actuales. [VERIFICADO — monto históricamente estable y ampliamente documentado en el sistema]",
      incorrectos: [
        "A) $1,000 no corresponde al monto correcto establecido para este beneficio específico del Seguro Social.",
        "C) $5,000 no corresponde al monto correcto — y este beneficio específicamente no se ajusta por inflación.",
        "D) El pago es un monto fijo específico de $255 — no está calculado como un múltiplo del beneficio mensual regular."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Carlos decide RETRASAR el inicio de sus beneficios del Seguro Social más allá de su FRA de 67 años, hasta los 70 años. ¿Cuál es GENERALMENTE el beneficio financiero estructural de esta estrategia de espera?",
      o: [
        "No existe ningún beneficio financiero adicional por esperar más allá del FRA bajo ninguna circunstancia",
        "El beneficio mensual aumenta aproximadamente un 8% POR CADA AÑO completo de retraso después del FRA, hasta un máximo alcanzable a los 70 años",
        "El beneficio aumenta aproximadamente un 3% por año como ajuste general de costo de vida, sin relación con la estrategia de retraso",
        "El gobierno federal otorga un bono único de aproximadamente $10,000 por esperar hasta los 70 años"
      ],
      a: 1,
      trampa: "El crédito específico por retraso (Delayed Retirement Credit) es distinto del ajuste general por costo de vida (COLA) — son dos mecanismos completamente diferentes del sistema.",
      correcto: "CRÉDITO POR RETRASO (Delayed Retirement Credit): el beneficio mensual aumenta aproximadamente un 8% POR CADA AÑO completo de retraso después del FRA, acumulándose hasta la edad de 70 años (después de los 70 no continúa aumentando por este mecanismo específico). Con FRA de 67 y espera hasta 70, serían 3 años adicionales de crédito acumulado. [VERIFICADO — mecánica del Delayed Retirement Credit, estable en su estructura general; REQUIERE VERIFICACIÓN del porcentaje exacto vigente]",
      incorrectos: [
        "A) SÍ existe un beneficio financiero estructural significativo por esperar — el crédito por retraso acumulado.",
        "C) El 3% corresponde más bien al ajuste general anual por costo de vida (COLA) — un mecanismo completamente distinto al crédito por retraso.",
        "D) No existe ningún bono único fijo de este tipo — el beneficio es el incremento porcentual permanente en el pago mensual."
      ]
    }
  ]
},

{
  id: "ss_002",
  area: "ss",
  concepto: "Coordinación FICA, Medicare y Seguro Social",
  variantes: [
    {
      nivel: 1,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es GENERALMENTE la tasa de contribución TOTAL combinada al impuesto de Medicare (Parte A) considerando tanto la porción del empleado como la del empleador?",
      o: [
        "1.45% total — asumiendo que el empleado paga la totalidad",
        "2.9% total — 1.45% correspondiente al empleado más 1.45% correspondiente al empleador",
        "3.8% total, incluyendo el impuesto adicional sobre ingreso neto de inversión",
        "2.35% total aplicable de manera uniforme a todos los contribuyentes sin excepción"
      ],
      a: 1,
      trampa: "La tasa estándar combinada de Medicare es 2.9%, dividida en partes iguales entre empleado y empleador — un dato frecuentemente confundido con tasas relacionadas pero distintas.",
      correcto: "La tasa estándar de Medicare es: 1.45% correspondiente al EMPLEADO + 1.45% correspondiente al EMPLEADOR = 2.9% TOTAL combinado. Los trabajadores autoempleados generalmente pagan el 2.9% completo por sí mismos, aunque pueden deducir aproximadamente la mitad como gasto de negocio. [VERIFICADO — tasa federal estable de FICA/Medicare bajo el IRC]",
      incorrectos: [
        "A) El empleado paga únicamente su porción (1.45%) — el total combinado incluye también la porción del empleador.",
        "C) El 3.8% corresponde al Net Investment Income Tax (NIIT), un impuesto adicional separado aplicable a ciertos ingresos de inversión — no es la tasa estándar de Medicare.",
        "D) 2.35% no corresponde a la tasa estándar general — el 0.9% adicional únicamente aplica a contribuyentes de altos ingresos bajo reglas específicas."
      ]
    },
    {
      nivel: 2,
      tipo_trampa: "QUIEN_PAGA",
      q: "Un trabajador autoempleado (self-employed) genera un ingreso neto de negocio de $100,000 en un año fiscal. ¿Cómo se estructura GENERALMENTE su obligación de contribución de Medicare?",
      o: [
        "Paga únicamente el 1.45% — de forma idéntica a un empleado regular contratado",
        "Paga el 2.9% completo (equivalente combinado a la porción de empleado más la de empleador), pero puede deducir aproximadamente el 50% de ese pago como gasto de negocio deducible",
        "No tiene obligación de contribuir a Medicare por no tener un empleador formal que retenga el impuesto",
        "Paga el 2.9% completo sin ninguna posibilidad de deducción fiscal permitida"
      ],
      a: 1,
      trampa: "Los trabajadores autoempleados asumen estructuralmente ambos lados de la contribución de Medicare (empleado y empleador), pero obtienen una deducción fiscal parcial compensatoria.",
      correcto: "Los trabajadores autoempleados pagan generalmente el 2.9% COMPLETO de Medicare (equivalente combinado de ambos lados, empleado y empleador). Sin embargo, pueden DEDUCIR aproximadamente el 50% de ese pago como gasto de negocio en su declaración de impuestos, compensando parcialmente la carga de pagar ambos lados. [VERIFICADO — estructura estable del Self-Employment Tax bajo el IRC]",
      incorrectos: [
        "A) Los autoempleados pagan el DOBLE de la tasa que pagaría un empleado regular — no la tasa individual del 1.45%.",
        "C) Los trabajadores autoempleados SÍ tienen obligación de contribuir a Medicare — son considerados simultáneamente como empleado y empleador para efectos de esta contribución.",
        "D) SÍ pueden deducir aproximadamente el 50% del pago — esta deducción existe específicamente para compensar la carga de pagar el equivalente de ambos lados."
      ]
    },
    {
      nivel: 3,
      tipo_trampa: "EXCEPCION_LEGAL",
      q: "¿Existe un límite (tope) de salario anual sobre el cual dejan de aplicarse las contribuciones del Seguro Social (a diferencia de Medicare)?",
      o: [
        "No existe ningún límite — el 6.2% correspondiente al Seguro Social aplica indefinidamente sobre la totalidad de los ingresos sin ningún tope",
        "Existe un tope fijo permanente de $50,000 anuales establecido hace varias décadas",
        "Sí existe un tope salarial anual que el IRS/SSA ajusta periódicamente año tras año — después de alcanzar ese límite, ya no se retienen contribuciones adicionales de Seguro Social ese año fiscal",
        "Las contribuciones de Seguro Social dejan automáticamente de aplicar una vez que el trabajador cumple 62 años de edad"
      ],
      a: 2,
      trampa: "El Seguro Social SÍ tiene un tope salarial anual ajustable — a diferencia de Medicare, que NO tiene ningún tope. Esta es una diferencia estructural clave frecuentemente evaluada.",
      correcto: "El SEGURO SOCIAL sí tiene un TOPE SALARIAL ANUAL (Social Security Wage Base) que la Administración del Seguro Social ajusta periódicamente cada año. Una vez que los ingresos de un trabajador superan ese tope específico en un año dado, ya no se retienen contribuciones adicionales de Seguro Social para el resto de ese año fiscal. MEDICARE, en contraste, NO tiene ningún tope — aplica sobre la totalidad de los ingresos. [VERIFICADO — existencia estructural del tope es estable; REQUIERE VERIFICACIÓN del monto exacto vigente, ya que se ajusta anualmente]",
      incorrectos: [
        "A) El Seguro Social SÍ tiene un tope salarial — esta afirmación es incorrecta respecto a la estructura real del sistema.",
        "B) $50,000 no corresponde al tope real vigente — el tope real es considerablemente más alto y se ajusta anualmente.",
        "D) Las contribuciones de Seguro Social no tienen relación con la edad del trabajador — continúan aplicando mientras la persona genere ingresos laborales sujetos, independientemente de su edad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "COMPARACION",
      q: "¿Cuántos 'créditos de trabajo' (work credits) necesita GENERALMENTE acumular una persona para calificar para beneficios de retiro del Seguro Social?",
      o: [
        "20 créditos, equivalentes aproximadamente a 5 años de trabajo calificado",
        "30 créditos, equivalentes aproximadamente a 7.5 años de trabajo calificado",
        "40 créditos, equivalentes aproximadamente a 10 años de trabajo calificado",
        "60 créditos, equivalentes aproximadamente a 15 años de trabajo calificado"
      ],
      a: 2,
      trampa: "Se requieren 40 créditos — coincidentemente el mismo número general de créditos requeridos para calificar para la Parte A de Medicare sin necesidad de pagar prima mensual.",
      correcto: "Se requieren generalmente 40 CRÉDITOS de trabajo (equivalentes aproximadamente a 10 años de trabajo calificado bajo el sistema) para calificar completamente para los beneficios de retiro del Seguro Social. Es posible ganar hasta un máximo de 4 créditos por año calendario. Esto coincide estructuralmente con el requisito general de 40 trimestres para calificar para la Parte A de Medicare sin prima. [VERIFICADO — requisito estructural estable del sistema de Seguro Social]",
      incorrectos: [
        "A) 20 créditos resultan insuficientes para calificar completamente para el beneficio de retiro estándar del Seguro Social.",
        "B) 30 créditos también resultan insuficientes bajo el requisito estándar establecido.",
        "D) 60 créditos excede considerablemente el requisito general establecido — únicamente se necesitan 40."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Ana contribuyó al Seguro Social durante aproximadamente 15 años antes de dejar de trabajar formalmente. Su esposo contribuyó durante aproximadamente 30 años. ¿Cómo determina GENERALMENTE el Seguro Social cuál beneficio recibe Ana: el basado en su propio historial laboral, o el beneficio de cónyuge?",
      o: [
        "El beneficio basado en el propio historial laboral de Ana siempre resulta matemáticamente superior en cualquier escenario",
        "El Seguro Social generalmente compara automáticamente ambas opciones — el beneficio propio de Ana versus el beneficio de cónyuge (calculado como un porcentaje del beneficio del esposo al FRA) — y le otorga el MAYOR de los dos montos calculados",
        "El beneficio de cónyuge únicamente está disponible si Ana nunca trabajó formalmente en absoluto durante su vida",
        "Ana no puede recibir ningún tipo de beneficio del Seguro Social mientras su esposo permanezca con vida"
      ],
      a: 1,
      trampa: "El sistema del Seguro Social generalmente realiza automáticamente el cálculo comparativo entre ambas opciones disponibles y otorga el monto mayor resultante — sin que la persona deba elegir manualmente.",
      correcto: "El Seguro Social generalmente compara automáticamente: 1) El beneficio propio de Ana basado en sus 15 años de contribución personal, versus 2) El beneficio de cónyuge (un porcentaje del beneficio del esposo calculado al FRA de él). El sistema otorga generalmente el MAYOR de los dos montos calculados — el cálculo es automático, sin necesidad de elección manual explícita. [VERIFICADO — mecánica general del sistema de beneficios de cónyuge del Seguro Social; REQUIERE VERIFICACIÓN del porcentaje exacto aplicable al beneficio de cónyuge]",
      incorrectos: [
        "A) No siempre resulta superior el beneficio propio — con solo 15 años de contribución, el beneficio de cónyuge calculado podría exceder al propio.",
        "C) El beneficio de cónyuge está disponible incluso si la persona trabajó formalmente — no está restringido únicamente a quienes nunca trabajaron.",
        "D) El beneficio de CÓNYUGE (distinto del beneficio de SOBREVIVIENTE) no requiere que el esposo haya fallecido — está disponible mientras ambos viven."
      ]
    }
  ]
}

]; // fin PK_RETIREMENT

if (typeof module !== 'undefined') module.exports = { PK_RETIREMENT };
