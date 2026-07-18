// ============================================================
// PEARSON KILLER — pk-data-refuerzo.js
// Módulo: REFUERZO DE PUNTOS DÉBILES
// Enfocado en los pares numéricos y conceptos que más se
// confunden (identificados en sesiones de práctica reales):
// free look vs gracia, COBRA (varios números), conversión,
// rollover IRA, recibo condicional vs vinculante, Medigap,
// dotación vs vida entera.
//
// 8 conceptos × 5 variantes = 40 preguntas
// [VERIFICADO] = confirmado contra fuente oficial/estatuto
// [REQUIERE VERIFICACIÓN] = confirmar contra material del curso
// ============================================================

const PK_REFUERZO = [

{
  id: "refuerzo_001",
  area: "provisiones",
  concepto: "Free Look (10 días) vs Período de Gracia (31 días) de Vida",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuántos días dura el período de examen gratuito (free look) de una póliza de VIDA en Florida?",
      o: ["10 días", "14 días", "21 días", "31 días"],
      a: 0,
      trampa: "El free look (10 días) se confunde constantemente con el período de gracia (31 días) — ambos son 'tiempo que tienes para hacer algo', pero uno es para arrepentirte de la compra, el otro para pagar una prima vencida.",
      correcto: "FREE LOOK de vida = 10 DÍAS para revisar la póliza recién recibida y devolverla para reembolso completo si no la deseas. NO confundir con el período de gracia (31 días). [VERIFICADO — plazo estándar de free look de vida en Florida]",
      incorrectos: [
        "B) 14 días no corresponde al free look estándar de vida.",
        "C) 21 días no corresponde al free look de vida.",
        "D) 31 días es el PERÍODO DE GRACIA de vida — un concepto completamente distinto del free look."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuántos días dura el período de GRACIA de una póliza de VIDA?",
      o: ["10 días", "20 días", "31 días", "60 días"],
      a: 2,
      trampa: "El período de gracia (31 días) se confunde con el free look (10 días) — recuerda: gracia = tiempo para PAGAR una prima vencida sin perder cobertura.",
      correcto: "PERÍODO DE GRACIA de vida = 31 DÍAS para pagar una prima vencida sin que la póliza caduque, manteniendo la cobertura vigente durante ese tiempo. NO confundir con el free look (10 días). [VERIFICADO — plazo estándar de gracia de vida]",
      incorrectos: [
        "A) 10 días es el FREE LOOK de vida — concepto distinto (arrepentirse de la compra, no pagar prima vencida).",
        "B) 20 días no corresponde al período de gracia de vida.",
        "D) 60 días no corresponde al período de gracia de vida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre el FREE LOOK y el PERÍODO DE GRACIA de una póliza de vida?",
      o: [
        "Son lo mismo con nombres diferentes",
        "Free look (10 días) = tiempo para DEVOLVER una póliza recién comprada y recibir reembolso; Período de gracia (31 días) = tiempo para PAGAR una prima vencida sin perder cobertura",
        "Free look es de 31 días; gracia es de 10 días",
        "Ambos duran exactamente 30 días"
      ],
      a: 1,
      trampa: "Ambos son 'plazos de tiempo' de la póliza de vida que se cruzan constantemente, pero tienen propósitos completamente opuestos: uno al INICIO (arrepentirse), otro DURANTE (no perder cobertura por falta de pago).",
      correcto: "FREE LOOK = 10 días al RECIBIR la póliza para devolverla con reembolso completo si te arrepientes. PERÍODO DE GRACIA = 31 días DURANTE la vigencia para pagar una prima vencida sin que caduque. Propósitos y momentos completamente distintos. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son lo mismo — tienen propósitos y duraciones distintas.",
        "C) Esta opción invierte los números correctos.",
        "D) No duran 30 días — free look es 10, gracia es 31."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Carlos recibe su nueva póliza de vida el 1 de marzo. El 8 de marzo decide que no la quiere y la devuelve. ¿Bajo qué provisión tiene derecho a un reembolso completo?",
      o: ["Período de gracia", "Free look (examen gratuito)", "Cláusula de reinstalación", "Período de eliminación"],
      a: 1,
      trampa: "Devolver una póliza RECIÉN recibida (día 8 de un plazo de 10) es free look — no debe confundirse con el período de gracia, que es para pagar primas vencidas.",
      correcto: "Carlos está ejerciendo el FREE LOOK — devolvió la póliza dentro de los 10 días de recibirla (día 8), con derecho a reembolso completo de la prima pagada. [VERIFICADO — aplicación directa del free look de 10 días]",
      incorrectos: [
        "A) El período de gracia es para pagar primas vencidas, no para devolver una póliza recién comprada.",
        "C) La reinstalación es para reactivar una póliza ya caducada — no aplica aquí.",
        "D) El período de eliminación es el tiempo de espera antes de recibir beneficios en pólizas de incapacidad — no relacionado."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "María olvidó pagar su prima mensual de vida que venció el 1 de marzo. El 20 de marzo se da cuenta y paga. ¿Bajo qué provisión su póliza siguió vigente durante ese tiempo?",
      o: ["Free look", "Período de gracia (31 días)", "Cláusula de incontestabilidad", "Beneficio acelerado"],
      a: 1,
      trampa: "Pagar una prima VENCIDA dentro del plazo (día 20 de un plazo de 31) es el período de gracia — no debe confundirse con el free look, que es para devolver la póliza.",
      correcto: "María se benefició del PERÍODO DE GRACIA (31 días) — pagó su prima vencida dentro de ese plazo (día 20), por lo que la póliza nunca caducó y la cobertura se mantuvo vigente. [VERIFICADO — aplicación directa del período de gracia de 31 días]",
      incorrectos: [
        "A) El free look es para devolver una póliza recién comprada — no para pagar primas vencidas.",
        "C) La incontestabilidad se refiere a impugnar la póliza por declaraciones falsas — no relacionado con pago de primas.",
        "D) El beneficio acelerado es un adelanto por enfermedad terminal — no relacionado."
      ]
    }
  ]
},

{
  id: "refuerzo_002",
  area: "salud",
  concepto: "COBRA — Los Tres Números Clave (20 empleados, 60 días, 18 meses)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "COBRA generalmente aplica a empleadores con un mínimo de cuántos empleados?",
      o: ["10", "20", "50", "100"],
      a: 1,
      trampa: "El 20 de COBRA se confunde con el 50 de la ACA (mandato del empleador). Sepáralos: COBRA = 20, ACA = 50.",
      correcto: "COBRA aplica generalmente a empleadores con 20 O MÁS empleados. El número 50 corresponde a un umbral DIFERENTE (el mandato del empleador bajo la ACA). [VERIFICADO — umbral estándar de COBRA]",
      incorrectos: [
        "A) 10 no es el umbral de COBRA.",
        "C) 50 es el umbral del mandato del empleador bajo la ACA — no de COBRA.",
        "D) 100 corresponde a otros contextos (como el umbral del plan SIMPLE) — no a COBRA."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Un empleado pierde su trabajo. ¿Cuántos días tiene para ELEGIR la cobertura COBRA desde que recibe la notificación de sus derechos?",
      o: ["30 días", "45 días", "60 días", "90 días"],
      a: 2,
      trampa: "Los 60 días de elección de COBRA se confunden con los 30 días de otros trámites, o con los 31 días de la conversión de grupo. COBRA elección = 60.",
      correcto: "El período de ELECCIÓN de COBRA es de 60 DÍAS desde que el empleado recibe la notificación de sus derechos. Si elige dentro de ese plazo, la cobertura es retroactiva sin brecha. [VERIFICADO — plazo estándar de elección de COBRA]",
      incorrectos: [
        "A) 30 días no es el plazo de elección de COBRA.",
        "B) 45 días no corresponde a la elección de COBRA.",
        "D) 90 días excede el plazo de elección de COBRA."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es la duración ESTÁNDAR de la continuación de cobertura bajo COBRA (por terminación de empleo)?",
      o: ["12 meses", "18 meses", "24 meses", "36 meses"],
      a: 1,
      trampa: "Los 18 meses estándar se confunden con los 36 meses de eventos calificantes especiales (como divorcio). Terminación de empleo = 18; eventos especiales = 36.",
      correcto: "La duración ESTÁNDAR de COBRA por terminación de empleo es de 18 MESES. Ciertos eventos calificantes especiales (como divorcio o muerte del empleado) pueden extenderla a 36 meses. [VERIFICADO — duración estándar de COBRA]",
      incorrectos: [
        "A) 12 meses no es la duración estándar de COBRA.",
        "C) 24 meses no corresponde a la duración estándar ni a los eventos especiales típicos.",
        "D) 36 meses corresponde a eventos calificantes ESPECIALES, no a la terminación de empleo estándar."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "El divorcio como evento calificante ESPECIAL bajo COBRA otorga al ex-cónyuge cuántos meses de continuación?",
      o: ["18 meses", "24 meses", "36 meses", "12 meses"],
      a: 2,
      trampa: "Los 36 meses de eventos especiales (divorcio) se confunden con los 18 meses estándar de terminación de empleo.",
      correcto: "El divorcio es un evento calificante ESPECIAL que otorga al ex-cónyuge 36 MESES de continuación COBRA — el doble de la duración estándar de 18 meses por terminación de empleo. [VERIFICADO — duración de eventos calificantes especiales]",
      incorrectos: [
        "A) 18 meses es la duración estándar por terminación de empleo, no para eventos especiales como el divorcio.",
        "B) 24 meses no corresponde a este evento calificante.",
        "D) 12 meses no corresponde a COBRA."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál combinación de números de COBRA es CORRECTA?",
      o: [
        "20 empleados mínimo / 30 días elección / 18 meses duración",
        "20 empleados mínimo / 60 días elección / 18 meses duración estándar",
        "50 empleados mínimo / 60 días elección / 36 meses duración",
        "20 empleados mínimo / 60 días elección / 12 meses duración"
      ],
      a: 1,
      trampa: "Los tres números de COBRA (20, 60, 18) se cruzan entre sí y con números de otras regulaciones (ACA 50, conversión 31). Esta pregunta consolida los tres correctos juntos.",
      correcto: "Combinación correcta de COBRA: 20 EMPLEADOS mínimo para que aplique / 60 DÍAS para elegir la cobertura / 18 MESES de duración estándar (36 para eventos especiales). [VERIFICADO — los tres números clave de COBRA]",
      incorrectos: [
        "A) La elección es 60 días, no 30.",
        "C) El umbral es 20 empleados, no 50 (50 es ACA).",
        "D) La duración estándar es 18 meses, no 12."
      ]
    }
  ]
},

{
  id: "refuerzo_003",
  area: "vida",
  concepto: "Conversión de Grupo (31 días) vs COBRA (60 días)",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "El derecho de CONVERSIÓN de un seguro de VIDA de grupo a una póliza individual permanente da un plazo de:",
      o: ["15 días", "31 días", "60 días", "90 días"],
      a: 1,
      trampa: "Los 31 días de conversión de vida de grupo se confunden con los 60 días de elección de COBRA (que es para salud, no vida).",
      correcto: "La CONVERSIÓN de vida de grupo a individual da 31 DÍAS sin necesidad de evidencia de asegurabilidad. Es distinto de COBRA (60 días, para salud). [VERIFICADO — plazo estándar de conversión de vida de grupo]",
      incorrectos: [
        "A) 15 días no corresponde al plazo de conversión.",
        "C) 60 días es el plazo de elección de COBRA (salud) — no la conversión de vida.",
        "D) 90 días no corresponde a la conversión."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre la CONVERSIÓN de vida de grupo y COBRA?",
      o: [
        "Son el mismo mecanismo con nombres diferentes",
        "Conversión = seguro de VIDA de grupo a póliza individual permanente (31 días, sin evidencia de asegurabilidad); COBRA = continuación temporal de seguro de SALUD de grupo (60 días para elegir)",
        "COBRA es para vida; conversión es para salud",
        "Ambos duran 31 días"
      ],
      a: 1,
      trampa: "Ambos aplican al perder cobertura de grupo, pero uno es para VIDA (conversión, 31 días) y otro para SALUD (COBRA, 60 días) — se cruzan constantemente.",
      correcto: "CONVERSIÓN = seguro de VIDA de grupo → póliza individual PERMANENTE, 31 días, sin evidencia de asegurabilidad. COBRA = CONTINUAR el seguro de SALUD de grupo temporalmente, 60 días para elegir. Tipo de seguro y plazos distintos. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son el mismo mecanismo — aplican a tipos de seguro diferentes (vida vs salud).",
        "C) Esta opción invierte los conceptos: COBRA es salud, conversión es vida.",
        "D) No duran ambos 31 días — conversión es 31, COBRA elección es 60."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Juan deja su empleo y quiere convertir su seguro de VIDA de grupo en una póliza individual permanente. ¿Cuántos días tiene y qué NO necesita?",
      o: [
        "60 días, necesita examen médico",
        "31 días, NO necesita evidencia de asegurabilidad",
        "31 días, necesita examen médico",
        "60 días, NO necesita evidencia de asegurabilidad"
      ],
      a: 1,
      trampa: "Combina dos datos que se confunden: el plazo (31, no 60) y el requisito (sin evidencia de asegurabilidad, una ventaja clave de la conversión).",
      correcto: "La conversión de vida de grupo da 31 DÍAS y NO requiere evidencia de asegurabilidad — esa es precisamente su ventaja: puedes convertir sin importar tu estado de salud actual. [VERIFICADO — mecánica de conversión de vida de grupo]",
      incorrectos: [
        "A) Son 31 días (no 60) y no requiere examen médico.",
        "C) Son 31 días correcto, pero NO requiere examen médico — esa es la ventaja de la conversión.",
        "D) El plazo es 31 días, no 60 (60 es COBRA, para salud)."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una ventaja CLAVE del derecho de conversión de vida de grupo es que:",
      o: [
        "Requiere un nuevo examen médico completo",
        "NO requiere evidencia de asegurabilidad — puedes convertir sin importar tu estado de salud",
        "Duplica automáticamente el beneficio de muerte",
        "Elimina el pago de todas las primas futuras"
      ],
      a: 1,
      trampa: "La ausencia de requisito de asegurabilidad es la característica más valiosa de la conversión — especialmente para alguien cuya salud se deterioró.",
      correcto: "La ventaja clave de la conversión es que NO requiere evidencia de asegurabilidad — el asegurado puede convertir su cobertura de grupo a individual permanente sin importar cambios en su estado de salud, lo cual es especialmente valioso si su salud se deterioró. [VERIFICADO — ventaja fundamental de la conversión]",
      incorrectos: [
        "A) NO requiere examen médico — esa es precisamente su ventaja.",
        "C) No duplica el beneficio de muerte.",
        "D) No elimina las primas futuras — la nueva póliza individual sí requiere pago de primas."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Empareja correctamente: Conversión de vida de grupo / COBRA / Free look de vida / Período de gracia de vida",
      o: [
        "Conversión 60 / COBRA 31 / Free look 31 / Gracia 10",
        "Conversión 31 / COBRA 60 / Free look 10 / Gracia 31",
        "Conversión 10 / COBRA 31 / Free look 60 / Gracia 31",
        "Todos duran 30 días"
      ],
      a: 1,
      trampa: "Esta pregunta reúne los cuatro plazos que más se cruzan entre sí para consolidar la memorización correcta de cada uno.",
      correcto: "Emparejamiento correcto: CONVERSIÓN de vida de grupo = 31 días / COBRA elección = 60 días / FREE LOOK de vida = 10 días / PERÍODO DE GRACIA de vida = 31 días. [VERIFICADO — los cuatro plazos clave]",
      incorrectos: [
        "A) Invierte varios números.",
        "C) Invierte varios números.",
        "D) No todos duran 30 días — cada uno tiene su plazo específico."
      ]
    }
  ]
},

{
  id: "refuerzo_004",
  area: "suscripcion",
  concepto: "Recibo Condicional vs Recibo Vinculante",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Un agente entrega un recibo CONDICIONAL junto con la primera prima. El solicitante fallece esa noche. ¿Cuándo es efectiva la cobertura?",
      o: [
        "Desde la fecha de aprobación de la póliza",
        "Desde la fecha de la solicitud, SI el solicitante hubiera calificado como asegurable",
        "Desde la entrega de la póliza",
        "No hay ninguna cobertura"
      ],
      a: 1,
      trampa: "El recibo CONDICIONAL hace la cobertura efectiva desde la solicitud SOLO SI el solicitante calificaba — se confunde con el vinculante (que da cobertura inmediata incondicional) y con la respuesta 'desde la aprobación' (que es incorrecta).",
      correcto: "Con recibo CONDICIONAL, la cobertura es efectiva desde la fecha de la SOLICITUD, pero SOLO SI el solicitante hubiera calificado como riesgo asegurable según las normas de la compañía. La condición de asegurabilidad es la clave. [VERIFICADO — mecánica del recibo condicional]",
      incorrectos: [
        "A) 'Desde la aprobación' es incorrecto — el propósito del recibo es dar cobertura ANTES de la aprobación formal, sujeto a asegurabilidad.",
        "C) 'Desde la entrega de la póliza' describiría una situación sin ningún recibo — no el condicional.",
        "D) SÍ puede haber cobertura si el solicitante calificaba — ese es el propósito del recibo condicional."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre un recibo CONDICIONAL y un recibo VINCULANTE (binding)?",
      o: [
        "Son idénticos",
        "Condicional = cobertura desde la solicitud SOLO SI el solicitante califica como asegurable; Vinculante = cobertura INMEDIATA e incondicional por un período determinado, sin importar la asegurabilidad",
        "Vinculante depende de asegurabilidad; condicional es incondicional",
        "Ninguno otorga cobertura antes de la emisión"
      ],
      a: 1,
      trampa: "Ambos dan cobertura temprana, pero difieren en si esa cobertura DEPENDE de la asegurabilidad (condicional) o es INCONDICIONAL (vinculante). Este es tu punto débil recurrente.",
      correcto: "CONDICIONAL = la cobertura depende de una CONDICIÓN (que el solicitante califique como asegurable); si califica, cubre desde la solicitud. VINCULANTE = cobertura INMEDIATA e incondicional por un período específico, sin importar si finalmente califica o no. [VERIFICADO — distinción fundamental entre ambos recibos]",
      incorrectos: [
        "A) NO son idénticos — difieren en si la cobertura es condicional o incondicional.",
        "C) Esta opción invierte los conceptos: el condicional depende de asegurabilidad, el vinculante es incondicional.",
        "D) AMBOS otorgan cobertura antes de la emisión formal — esa es su función."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Con un recibo condicional, se descubre durante la suscripción que el solicitante tenía una condición terminal no declarada que lo hacía NO asegurable. Fallece antes de la emisión. ¿Qué ocurre?",
      o: [
        "La compañía paga el beneficio completo",
        "La compañía devuelve la prima — el solicitante no calificaba como asegurable, condición que el recibo condicional requiere",
        "La compañía paga el 50%",
        "La cobertura es válida porque ya se entregó el recibo"
      ],
      a: 1,
      trampa: "El recibo condicional requiere que el solicitante FUERA asegurable — si no calificaba, la condición no se cumple y no hay cobertura, solo devolución de prima.",
      correcto: "Como el recibo CONDICIONAL requiere que el solicitante calificara como asegurable, y esta persona NO calificaba (condición terminal), la condición no se cumple: la compañía generalmente devuelve la prima sin pagar el beneficio. [VERIFICADO — aplicación de la condición de asegurabilidad]",
      incorrectos: [
        "A) No paga el beneficio completo porque el solicitante no cumplía la condición de asegurabilidad.",
        "C) No existe un pago del 50% en este escenario — es cobertura completa o devolución de prima.",
        "D) La sola entrega del recibo no garantiza cobertura si no se cumple la condición de asegurabilidad."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "La frase clave que define un recibo CONDICIONAL es:",
      o: [
        "'Cobertura inmediata sin importar nada'",
        "'Cobertura desde la solicitud, sujeto a que el solicitante sea asegurable'",
        "'Cobertura solo después de la emisión de la póliza'",
        "'Sin ninguna cobertura hasta el primer aniversario'"
      ],
      a: 1,
      trampa: "La palabra 'sujeto a' o 'si califica' es la firma del condicional — cualquier frase que implique cobertura incondicional describe el vinculante, no el condicional.",
      correcto: "La frase clave del recibo CONDICIONAL es 'cobertura sujeta a la CONDICIÓN de que el solicitante sea asegurable'. Si ves 'sujeto a', 'si califica', 'si es asegurable' → es condicional. [VERIFICADO — característica definitoria]",
      incorrectos: [
        "A) 'Inmediata sin importar nada' describe el recibo VINCULANTE, no el condicional.",
        "C) 'Solo después de la emisión' describiría una situación sin recibo de cobertura temprana.",
        "D) 'Sin cobertura hasta el aniversario' no describe ningún tipo de recibo estándar."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Truco de memoria para no confundir los recibos: ¿cuál asociación es correcta?",
      o: [
        "Condicional = incondicional / Vinculante = con condiciones",
        "Condicional = tiene una CONDICIÓN (asegurabilidad) / Vinculante = ata (bind) a la compañía de inmediato sin condiciones",
        "Ambos significan lo mismo",
        "Condicional = solo para salud / Vinculante = solo para vida"
      ],
      a: 1,
      trampa: "El truco está en la propia palabra: CONDICIONAL tiene 'condición'; VINCULANTE viene de 'bind' (atar) — ata a la compañía inmediatamente.",
      correcto: "Truco: CONDICIONAL literalmente tiene una CONDICIÓN (que seas asegurable). VINCULANTE viene de 'binding/bind' = ATAR — ata a la compañía de inmediato, incondicionalmente. Usa las propias palabras para recordarlo. [VERIFICADO — regla mnemotécnica]",
      incorrectos: [
        "A) Invierte los conceptos por completo.",
        "C) NO significan lo mismo.",
        "D) Ambos tipos de recibo aplican a seguros de vida — no se dividen por salud/vida de esa forma."
      ]
    }
  ]
},

{
  id: "refuerzo_005",
  area: "retiro",
  concepto: "Rollover IRA (60 días) y sus Números Clave",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "En un rollover de IRA donde los fondos van directamente al titular, ¿cuántos días tiene para redepositarlos en una cuenta calificada y evitar impuestos?",
      o: ["30 días", "60 días", "90 días", "120 días"],
      a: 1,
      trampa: "Los 60 días del rollover IRA se confunden con los 30 días de otros trámites. Rollover IRA = 60 días.",
      correcto: "El titular tiene 60 DÍAS desde que recibe la distribución para redepositarla en una cuenta calificada, evitando que se trate como retiro gravable (y penalidad del 10% si es menor de 59½). [VERIFICADO — plazo estándar del IRC para rollovers]",
      incorrectos: [
        "A) 30 días es insuficiente — el plazo es 60.",
        "C) 90 días excede el plazo de rollover.",
        "D) 120 días excede el plazo de rollover."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre un Rollover y una Transferencia Directa (trustee-to-trustee) de IRA?",
      o: [
        "Son idénticos",
        "En el ROLLOVER los fondos pasan por las manos del titular (con plazo de 60 días para redepositar); en la TRANSFERENCIA DIRECTA los fondos van directamente entre custodios sin pasar por el titular",
        "La transferencia directa tiene un plazo de 60 días; el rollover no tiene plazo",
        "Ambos requieren pagar impuestos inmediatos"
      ],
      a: 1,
      trampa: "Ambos mueven fondos entre cuentas de retiro, pero difieren en si el titular RECIBE los fondos (rollover, con riesgo del plazo de 60 días) o si van directo entre instituciones (transferencia, sin ese riesgo).",
      correcto: "ROLLOVER = los fondos van primero AL TITULAR, quien tiene 60 días para redepositarlos. TRANSFERENCIA DIRECTA = los fondos van directamente entre custodios sin que el titular los toque — más seguro porque elimina el riesgo de perder el plazo. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son idénticos — difieren en el mecanismo de movimiento de los fondos.",
        "C) Esta opción invierte los conceptos: es el rollover el que tiene el plazo de 60 días.",
        "D) Ambos, correctamente ejecutados, evitan impuestos inmediatos."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "ESCENARIO",
      q: "Rosa recibe una distribución de su IRA para hacer un rollover, pero la redeposita en el día 65. ¿Cuál es la consecuencia?",
      o: [
        "Ninguna — el plazo es flexible",
        "Los fondos podrían tratarse como distribución GRAVABLE (impuesto sobre la renta, y penalidad del 10% si es menor de 59½) por exceder el plazo de 60 días",
        "Pierde su IRA por completo permanentemente",
        "Obtiene una extensión automática ilimitada"
      ],
      a: 1,
      trampa: "El plazo de 60 días es ESTRICTO — excederlo (día 65) generalmente convierte el rollover en una distribución gravable, no es un límite flexible.",
      correcto: "Al exceder los 60 días (día 65), los fondos generalmente se tratan como una distribución GRAVABLE — sujeta a impuesto sobre la renta ordinario y potencialmente la penalidad del 10% si Rosa es menor de 59½. El plazo es estricto. [VERIFICADO — consecuencia por incumplir el plazo]",
      incorrectos: [
        "A) El plazo NO es flexible — es un límite estricto con consecuencias fiscales reales.",
        "C) No pierde el IRA por completo — la consecuencia es el tratamiento fiscal de esa distribución.",
        "D) No hay extensión automática ilimitada — solo excepciones limitadas para dificultad extraordinaria documentada."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "Una VENTAJA de la Transferencia Directa (trustee-to-trustee) sobre el Rollover es que:",
      o: [
        "Genera mayores rendimientos garantizados",
        "Elimina el riesgo de perder el plazo de 60 días, porque el titular nunca recibe los fondos directamente",
        "Es el único método legal permitido",
        "Genera una deducción fiscal adicional"
      ],
      a: 1,
      trampa: "La ventaja de la transferencia directa es de gestión de riesgo (eliminar el riesgo del plazo), no de rendimiento ni beneficio fiscal adicional.",
      correcto: "La transferencia directa ELIMINA el riesgo de perder el plazo de 60 días, porque el titular nunca toca los fondos — van directamente entre las instituciones custodias. Menos riesgo de un error costoso. [VERIFICADO — ventaja práctica de la transferencia directa]",
      incorrectos: [
        "A) No genera mayores rendimientos — es un mecanismo de movimiento de fondos.",
        "C) El rollover también es legal — la transferencia no es el único método permitido.",
        "D) No genera deducciones fiscales adicionales."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es la limitación de frecuencia para rollovers IRA-a-IRA (que NO aplica a las transferencias directas)?",
      o: [
        "No hay límite",
        "Uno por período de 12 meses, aplicado de forma agregada a todas las cuentas IRA del contribuyente",
        "Cinco por año calendario",
        "Uno en toda la vida"
      ],
      a: 1,
      trampa: "La regla de 'uno por 12 meses de forma agregada' es un punto técnico que se malentiende — no es por cada cuenta, sino consolidado.",
      correcto: "El rollover IRA-a-IRA está limitado a UNO por período de 12 meses, contado de forma AGREGADA a través de todas las cuentas IRA del contribuyente (no por cuenta individual). Esta limitación NO aplica a las transferencias directas. [VERIFICADO — regla del IRS tras Bobrow v. Commissioner]",
      incorrectos: [
        "A) SÍ hay una limitación de frecuencia para rollovers.",
        "C) No son cinco por año — es uno por período de 12 meses.",
        "D) No es uno en toda la vida — es recurrente cada 12 meses."
      ]
    }
  ]
},

{
  id: "refuerzo_006",
  area: "vida",
  concepto: "Dotación (Endowment) vs Vida Entera",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "¿Qué tipo de seguro paga tanto si el asegurado SOBREVIVE hasta cierta edad como si FALLECE antes de esa edad?",
      o: ["Término", "Vida entera", "Dotación (Endowment)", "Universal"],
      a: 2,
      trampa: "La doble garantía de pago (sobrevivir O fallecer) es exclusiva de la Dotación — se confunde con vida entera, que paga al fallecer o al madurar a edad muy avanzada.",
      correcto: "DOTACIÓN (Endowment) = paga el monto nominal SI el asegurado sobrevive hasta la edad de dotación, O el beneficio de muerte SI fallece antes. Es el único tipo con esta doble garantía orientada a una fecha predeterminada. [VERIFICADO — característica definitoria del Endowment]",
      incorrectos: [
        "A) El término solo paga si el asegurado fallece durante el período — no paga por sobrevivir.",
        "B) La vida entera paga al fallecer (o al madurar a edad muy avanzada como 100/121), pero no está estructurada para pagar a una edad de dotación temprana predeterminada.",
        "D) El universal no tiene esta estructura de doble garantía a fecha de dotación."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre un Endowment de 10 años y una Vida Entera de 10 Pagos (10-Pay Whole Life)?",
      o: [
        "Son idénticos",
        "El Endowment de 10 años PAGA su beneficio y termina a los 10 años; la Vida Entera de 10 Pagos solo requiere PAGAR primas por 10 años, pero la cobertura permanente continúa de por vida",
        "La Vida Entera de 10 Pagos paga a los 10 años; el Endowment continúa de por vida",
        "Ambos requieren pagar primas por 10 años y terminan igual"
      ],
      a: 1,
      trampa: "Ambos mencionan '10 años', pero significan cosas distintas: el Endowment paga EN el año 10 (y termina); el 10-Pay solo limita los PAGOS a 10 años, pero la cobertura sigue de por vida.",
      correcto: "ENDOWMENT de 10 años = paga el beneficio y TERMINA a los 10 años (si sobrevive). VIDA ENTERA DE 10 PAGOS = pagas primas solo 10 años, pero la cobertura PERMANENTE continúa de por vida, ya pagada. El '10' significa cosas distintas. [VERIFICADO — distinción fundamental]",
      incorrectos: [
        "A) NO son idénticos — el '10 años' tiene significados diferentes en cada uno.",
        "C) Invierte los conceptos.",
        "D) No terminan igual — el Endowment termina a los 10 años; el 10-Pay continúa de por vida."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "La característica que distingue al seguro de DOTACIÓN de otros tipos de vida es:",
      o: [
        "Que solo paga si el asegurado fallece",
        "Que garantiza un pago SI el asegurado sobrevive hasta la edad de dotación (además del beneficio por muerte)",
        "Que nunca acumula valor en efectivo",
        "Que la prima aumenta cada año"
      ],
      a: 1,
      trampa: "El pago por SUPERVIVENCIA es lo distintivo del Endowment — ningún otro tipo estándar de seguro de vida garantiza un pago por simplemente vivir hasta cierta edad.",
      correcto: "La DOTACIÓN se distingue por garantizar un pago SI el asegurado SOBREVIVE hasta la edad de dotación — no solo por fallecimiento. Esta característica de 'pago por vivir' es única entre los tipos de seguro de vida. [VERIFICADO — característica distintiva]",
      incorrectos: [
        "A) 'Solo paga si fallece' describe el seguro de término, no la dotación.",
        "C) La dotación SÍ acumula valor en efectivo (crece rápido para alcanzar el valor de dotación).",
        "D) La prima de una dotación generalmente es nivelada, no creciente."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cómo se llama un Endowment diseñado para pagar en un período de 10 años?",
      o: ["Dotación vitalicia", "Dotación decenal (10-Year Endowment)", "Vida entera de 10 pagos", "Término de 10 años"],
      a: 1,
      trampa: "'Dotación decenal' se confunde con 'Vida Entera de 10 Pagos' porque ambos usan el número 10, pero son productos completamente distintos.",
      correcto: "DOTACIÓN DECENAL (10-Year Endowment) = un Endowment que paga su monto nominal si el asegurado sobrevive el período de 10 años, o el beneficio de muerte si fallece antes. NO confundir con 10-Pay Whole Life. [VERIFICADO — terminología estándar]",
      incorrectos: [
        "A) 'Dotación vitalicia' no describe un período específico de 10 años.",
        "C) 'Vida Entera de 10 Pagos' se refiere a pagar primas 10 años en una póliza PERMANENTE — no un Endowment.",
        "D) Un término de 10 años no tiene la característica de dotación (pago por supervivencia)."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál de estas NO es una característica del seguro de Dotación?",
      o: [
        "Paga si el asegurado sobrevive a la edad de dotación",
        "Paga el beneficio de muerte si fallece antes",
        "Ofrece únicamente cobertura temporal sin ningún pago por supervivencia",
        "Acumula valor en efectivo rápidamente"
      ],
      a: 2,
      trampa: "'Cobertura temporal sin pago por supervivencia' describe el TÉRMINO, no la Dotación — la dotación específicamente SÍ paga por supervivencia.",
      correcto: "Ofrecer 'únicamente cobertura temporal sin pago por supervivencia' NO es característica de la Dotación — eso describe el seguro de TÉRMINO. La Dotación específicamente SÍ paga por supervivencia hasta la edad de dotación. [VERIFICADO — distinción de características]",
      incorrectos: [
        "A) SÍ es característica de la dotación — paga por supervivencia.",
        "B) SÍ es característica de la dotación — paga el beneficio de muerte si fallece antes.",
        "D) SÍ es característica de la dotación — acumula valor en efectivo rápidamente para alcanzar el valor de dotación."
      ]
    }
  ]
},

{
  id: "refuerzo_007",
  area: "salud",
  concepto: "Medigap y Medicare — Números y Distinciones Clave",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Cuando una aseguradora Medigap aplica un período de espera para la cobertura relacionada con una condición preexistente, dicho período NO puede exceder:",
      o: ["3 meses", "6 meses", "12 meses", "24 meses"],
      a: 1,
      trampa: "No confundir dos reglas distintas: hasta 6 meses de espera para beneficios relacionados con una condición preexistente cuando corresponde, y 6 meses de inscripción abierta garantizada.",
      correcto: "Cuando corresponde, el período de espera para beneficios relacionados con una condición preexistente en Medigap no puede exceder 6 MESES. Esto no significa que puedan negar la emisión durante la inscripción abierta; la cobertura acreditable previa puede reducir o eliminar la espera. [VERIFICADO — límite estándar de Medigap]",
      incorrectos: [
        "A) 3 meses podría ser menor pero no es el límite máximo estándar.",
        "C) 12 meses excede el límite de Medigap.",
        "D) 24 meses excede el límite de Medigap."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "El período de inscripción abierta de Medigap (donde no pueden negarte por preexistencias) dura cuántos meses desde que cumples 65 y tienes Parte B?",
      o: ["3 meses", "6 meses", "9 meses", "12 meses"],
      a: 1,
      trampa: "Son dos reglas distintas que comparten el número 6: máximo general de espera por preexistencia cuando corresponde y ventana de inscripción abierta de 6 meses.",
      correcto: "El período de INSCRIPCIÓN ABIERTA de Medigap dura 6 MESES desde que cumples 65 y estás inscrito en Parte B — durante ese tiempo no pueden negarte cobertura ni cobrarte más por preexistencias. [VERIFICADO — protección estándar de inscripción abierta]",
      incorrectos: [
        "A) 3 meses es menor al período estándar.",
        "C) 9 meses no corresponde al período estándar.",
        "D) 12 meses excede el período estándar."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "CUAL_NO",
      q: "¿Cuál servicio NO cubre Medicare PARTE A?",
      o: ["Hospitalización", "Cuidado en hospicio", "Consultas médicas de rutina ambulatorias", "Cuidado en centro de enfermería especializada"],
      a: 2,
      trampa: "Las consultas médicas de rutina ambulatorias son Parte B, no Parte A. Parte A = hospital/institucional; Parte B = médico/ambulatorio.",
      correcto: "Medicare PARTE A NO cubre consultas médicas de rutina ambulatorias — esas son de la PARTE B. La Parte A cubre hospitalización, hospicio, y centros de enfermería especializada (cuidado institucional). [VERIFICADO — distinción Parte A vs B]",
      incorrectos: [
        "A) La hospitalización SÍ es cubierta por la Parte A.",
        "B) El cuidado en hospicio SÍ es cubierto por la Parte A.",
        "D) El cuidado en centro de enfermería especializada SÍ es cubierto por la Parte A."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "SINONIMOS",
      q: "¿Cuál parte de Medicare cubre los medicamentos recetados?",
      o: ["Parte A", "Parte B", "Parte C", "Parte D"],
      a: 3,
      trampa: "Los medicamentos recetados son específicamente Parte D. Truco: D de 'Drugs' (medicamentos en inglés).",
      correcto: "Medicare PARTE D cubre los medicamentos recetados. Truco de memoria: D de 'Drugs' (medicamentos). [VERIFICADO — estructura de Medicare]",
      incorrectos: [
        "A) Parte A = hospitalización.",
        "B) Parte B = servicios médicos ambulatorios.",
        "C) Parte C = Medicare Advantage (planes privados que combinan A y B, a veces D)."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "¿Cuál es la diferencia entre Medigap y Medicare Advantage (Parte C)?",
      o: [
        "Son lo mismo",
        "Medigap COMPLEMENTA a Medicare Original (cubre costos que Medicare no cubre); Medicare Advantage REEMPLAZA a Medicare Original con un plan privado que combina las coberturas",
        "Medigap reemplaza a Medicare; Advantage lo complementa",
        "Ambos solo cubren medicamentos"
      ],
      a: 1,
      trampa: "Medigap y Medicare Advantage son opuestos en función: uno complementa a Medicare Original, el otro lo reemplaza con un plan privado.",
      correcto: "MEDIGAP = complementa a Medicare Original, cubriendo copagos, deducibles y coaseguro que Medicare no cubre. MEDICARE ADVANTAGE (Parte C) = reemplaza a Medicare Original con un plan privado que combina las coberturas de A y B (a veces D). Funciones opuestas. [VERIFICADO — distinción estándar]",
      incorrectos: [
        "A) NO son lo mismo — tienen funciones opuestas.",
        "C) Invierte los conceptos: Medigap complementa, Advantage reemplaza.",
        "D) No solo cubren medicamentos — tienen coberturas más amplias."
      ]
    }
  ]
},

{
  id: "refuerzo_008",
  area: "florida",
  concepto: "Plazos de Notificación al DFS y Números de Licenciamiento",
  variantes: [
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Un titular de licencia en Florida debe notificar al DFS un cambio de dirección dentro de:",
      o: ["15 días", "30 días", "60 días", "90 días"],
      a: 1,
      trampa: "El plazo de cambio de dirección (30 días) fue verificado contra el estatuto oficial de Florida §626.551 — no confundir con otros plazos de días.",
      correcto: "El titular debe notificar al DFS un cambio de dirección dentro de 30 DÍAS, según el Estatuto de Florida §626.551. Confirmado contra la fuente oficial (MyFloridaCFO). [VERIFICADO — Estatuto de Florida §626.551]",
      incorrectos: [
        "A) 15 días no es el plazo del estatuto.",
        "C) 60 días no es el plazo del estatuto para cambio de dirección.",
        "D) 90 días no es el plazo del estatuto."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "Un agente en Florida es hallado culpable de un delito grave (felony). ¿Dentro de cuántos días debe reportarlo al DFS?",
      o: ["15 días", "30 días", "60 días", "90 días"],
      a: 1,
      trampa: "El reporte de asuntos penales (30 días) usa el mismo plazo que el cambio de dirección — ambos son 30 días para el agente, según la fuente oficial.",
      correcto: "El agente debe reportar al DFS dentro de 30 DÍAS de ser hallado culpable, declararse culpable, o nolo contendere de un delito grave. Confirmado contra la fuente oficial de Florida (MyFloridaCFO). [VERIFICADO — requisito de reporte de asuntos penales]",
      incorrectos: [
        "A) 15 días es el plazo para que la ENTIDAD que nombra al agente reporte — no el agente mismo.",
        "C) 60 días no es el plazo estándar de reporte penal del agente.",
        "D) 90 días no es el plazo estándar."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "NUMEROS_FECHAS",
      q: "¿Cuál es generalmente la edad MÍNIMA para firmar una solicitud de seguro de vida en Florida?",
      o: ["15 años", "18 años", "21 años", "No hay mínimo"],
      a: 0,
      trampa: "La edad mínima para firmar (15) es menor que la mayoría de edad general (18), lo cual es contraintuitivo.",
      correcto: "La edad mínima para firmar una solicitud de seguro de vida es generalmente 15 años — menor que la mayoría de edad general de 18. [REQUIERE VERIFICACIÓN — confirmar contra el estatuto de Florida vigente aplicable a menores]",
      incorrectos: [
        "B) 18 años es la mayoría de edad general, pero no necesariamente la edad mínima específica para esta transacción.",
        "C) 21 años excede el umbral relevante.",
        "D) SÍ existe una edad mínima específica establecida."
      ]
    },
    {
      nivel: 5,
      tipo_trampa: "COMPARACION",
      q: "Empareja los plazos de notificación al DFS: cambio de dirección / reporte de delito grave (agente) / reporte de la entidad que nombra al agente",
      o: [
        "30 / 30 / 15 días",
        "60 / 30 / 15 días",
        "30 / 60 / 30 días",
        "15 / 30 / 60 días"
      ],
      a: 0,
      trampa: "Estos tres plazos se cruzan — el agente tiene 30 días tanto para dirección como para delito; la entidad que lo nombra tiene 15 días.",
      correcto: "Plazos correctos: cambio de dirección = 30 días / reporte de delito grave por el agente = 30 días / reporte por la entidad que nombra al agente = 15 días. [VERIFICADO — contra fuente oficial de Florida]",
      incorrectos: [
        "B) El cambio de dirección es 30 días, no 60.",
        "C) El reporte de delito del agente es 30 días, no 60.",
        "D) El cambio de dirección es 30 días, no 15."
      ]
    },
    {
      nivel: 4,
      tipo_trampa: "SINONIMOS",
      q: "En Florida, ¿se requiere ser graduado de escuela secundaria (high school) como requisito formal para obtener la licencia de agente de seguros?",
      o: [
        "Sí, es obligatorio el diploma de secundaria",
        "Generalmente NO se exige formalmente el diploma de secundaria — el enfoque está en la educación pre-licencia del sector y aprobar el examen",
        "Solo se exige para agentes de vida",
        "Se exige un título universitario completo"
      ],
      a: 1,
      trampa: "Aunque parece razonable exigir un diploma de secundaria, muchas jurisdicciones no lo requieren formalmente — la educación pre-licencia específica sustituye ese requisito.",
      correcto: "Generalmente NO se exige formalmente el diploma de escuela secundaria para el licenciamiento de seguros — el enfoque regulatorio está en completar la educación PRE-LICENCIA del sector y aprobar el examen estatal. [REQUIERE VERIFICACIÓN — confirmar contra los requisitos exactos vigentes del DFS de Florida]",
      incorrectos: [
        "A) Generalmente NO se exige formalmente el diploma de secundaria como prerrequisito específico.",
        "C) No hay tal distinción por línea de seguro para este requisito.",
        "D) No se exige un título universitario completo para la licencia de agente."
      ]
    }
  ]
}

]; // fin PK_REFUERZO

if (typeof window !== 'undefined') window.PK_REFUERZO = PK_REFUERZO;
if (typeof module !== 'undefined') module.exports = { PK_REFUERZO };
