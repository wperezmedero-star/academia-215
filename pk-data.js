// ============================================================
// PEARSON KILLER — pk-data.js
// Banco de Conceptos v1.0
// 14 conceptos reales × 5 variantes cada uno = 70 variantes
// Para agregar: seguir el patrón {id, area, concepto, variantes:[]}
// NO modificar index.html — este archivo es completamente independiente
// ============================================================

const PK_VERSION = "1.0";

const PK_AREAS = {
  suscripcion: "Procedimientos de Suscripción en Campo",
  florida:     "Leyes, Reglas y Regulaciones de Florida",
  retiro:      "Conceptos de Retiro y Otros Seguros",
  provisiones: "Provisiones, Cláusulas y Anexos de Pólizas",
  salud:       "Tipos de Pólizas de Seguro de Salud",
  generales:   "Conceptos Generales de Seguros"
};

// Niveles: 1=Básico 2=Intermedio 3=Avanzado 4=Pearson 5=Pearson Extremo

const PK_CONCEPTOS = [

// ════════════════════════════════════════════
// ÁREA 1 — SUSCRIPCIÓN EN CAMPO
// ════════════════════════════════════════════

{
  id: "susc_001", area: "suscripcion", concepto: "Recibo Condicional",
  variantes: [
    {
      nivel: 1,
      q: "Un agente recibe la primera prima y entrega un recibo condicional. El solicitante fallece esa noche. ¿Cuándo se considera que la cobertura estaba vigente?",
      o: ["Desde la fecha en que la compañía aprueba la solicitud","Desde la fecha de la solicitud, siempre que el solicitante hubiera calificado como riesgo asegurable","Desde la fecha en que se entregó la póliza","El recibo condicional no otorga ninguna cobertura"],
      a: 1,
      trampa: "Confundir 'fecha de aprobación' con 'fecha de solicitud'. La cobertura es retroactiva solo si el solicitante hubiera calificado.",
      correcto: "El recibo condicional hace que la cobertura sea efectiva desde la fecha de solicitud, PERO solo si el asegurado habría calificado como riesgo estándar.",
      incorrectos: ["A) La fecha de aprobación corresponde al recibo vinculante, no al condicional.","C) La fecha de entrega aplica cuando no hay recibo.","D) Sí otorga cobertura, pero de forma condicional a la asegurabilidad."]
    },
    {
      nivel: 2,
      q: "¿En qué se diferencia un recibo vinculante de un recibo condicional?",
      o: ["El recibo vinculante requiere examen médico antes de activar cobertura","El recibo condicional otorga cobertura inmediata sin condiciones; el vinculante depende de la asegurabilidad","El recibo vinculante otorga cobertura inmediata sin importar si el solicitante califica; el condicional depende de la asegurabilidad","Son idénticos en sus efectos legales"],
      a: 2,
      trampa: "Las definiciones están invertidas en la opción B. El VINCULANTE es incondicional.",
      correcto: "Vinculante = cobertura inmediata incondicional. Condicional = cobertura solo si el solicitante habría calificado.",
      incorrectos: ["A) Ninguno requiere examen previo a la cobertura temporal.","B) Las definiciones están completamente invertidas.","D) Sus efectos legales son distintos — uno es condicional y el otro no."]
    },
    {
      nivel: 3,
      q: "Durante la suscripción de una póliza con recibo condicional, se descubre que el solicitante tenía cáncer terminal no declarado. ¿Cuál es la consecuencia?",
      o: ["La compañía paga el beneficio porque ya se emitió el recibo","La compañía devuelve solo la prima — el solicitante no habría calificado, por lo que no existe cobertura","La compañía paga el 50% del beneficio como compromiso","La cobertura es válida porque el agente no sabía de la condición"],
      a: 1,
      trampa: "La emisión del recibo NO garantiza el pago si el solicitante no era asegurable.",
      correcto: "Si el solicitante NO habría calificado, no existe cobertura bajo el recibo condicional. Solo se devuelve la prima pagada.",
      incorrectos: ["A) El recibo condicional no garantiza pago automático.","C) No existe pago parcial bajo este mecanismo.","D) El conocimiento del agente no determina la validez de la cobertura."]
    },
    {
      nivel: 4,
      q: "¿Cuál afirmación sobre el recibo condicional es la MÁS PRECISA según la regulación de Florida?",
      o: ["Otorga cobertura temporal desde la fecha de solicitud sin ninguna condición adicional","Convierte la póliza en vigente desde la entrega, sujeto a aprobación de underwriting","Proporciona cobertura retroactiva desde la fecha de solicitud, únicamente si el solicitante habría sido aprobado bajo los criterios estándar de la compañía","Garantiza que la prima será devuelta si la solicitud es rechazada"],
      a: 2,
      trampa: "La opción A omite la condición de asegurabilidad. La B cambia la fecha efectiva. La D describe un efecto secundario.",
      correcto: "La definición completa incluye: retroactiva a la fecha de solicitud + condición de asegurabilidad estándar. Ambos elementos son esenciales.",
      incorrectos: ["A) Omite el requisito crítico de asegurabilidad.","B) La cobertura retroactiva va a la fecha de solicitud, no de entrega.","D) La devolución de prima es consecuencia del rechazo, no la definición del recibo."]
    },
    {
      nivel: 5,
      q: "Un agente emite un recibo condicional el 1 de marzo. El examen médico se programa para el 10 de marzo. El solicitante fallece el 5 de marzo — antes del examen. La autopsia confirma que era perfectamente asegurable. ¿Cuál es el resultado MÁS PROBABLE?",
      o: ["La compañía no paga — el examen médico no se había completado al momento del fallecimiento","La compañía paga — era asegurable según los criterios de la compañía, cumpliendo la condición del recibo","La compañía paga solo si el agente lo certifica por escrito","La compañía paga el 50% porque la suscripción no había concluido"],
      a: 1,
      trampa: "El examen pendiente NO invalida el recibo si el solicitante ERA asegurable. La condición es 'habría calificado', no 'el examen fue completado'.",
      correcto: "La condición del recibo es que el solicitante HABRÍA CALIFICADO — no que el examen haya sido completado. La autopsia confirma asegurabilidad → la compañía paga.",
      incorrectos: ["A) La condición no es que el examen esté completo, sino que hubiera calificado.","C) La certificación del agente no determina el resultado.","D) No existe pago proporcional en este contexto."]
    }
  ]
},

{
  id: "susc_002", area: "suscripcion", concepto: "Fuentes de Información para Suscripción",
  variantes: [
    {
      nivel: 1,
      q: "¿Cuál documento provee al suscriptor el historial médico del solicitante según su propio médico?",
      o: ["Reporte del MIB","Reporte de vehículos (MVR)","Declaración del médico tratante (APS)","Reporte de inspección"],
      a: 2,
      trampa: "Confundir APS con MIB. El MIB contiene datos codificados de solicitudes anteriores, no del médico personal.",
      correcto: "APS (Attending Physician Statement) proviene del médico PERSONAL del solicitante y contiene su historial médico completo.",
      incorrectos: ["A) El MIB contiene información codificada de solicitudes anteriores.","B) El MVR contiene historial de manejo.","D) El reporte de inspección cubre carácter, reputación y situación financiera."]
    },
    {
      nivel: 2,
      q: "El MIB proporciona a las aseguradoras miembros:",
      o: ["Diagnósticos médicos definitivos del solicitante","El historial de manejo y accidentes","Información codificada de solicitudes de seguro anteriores — NO diagnósticos definitivos","Una copia del expediente médico completo"],
      a: 2,
      trampa: "El MIB NO provee diagnósticos. Solo señales que requieren investigación adicional.",
      correcto: "El MIB contiene información CODIFICADA de solicitudes anteriores. Es una señal de alerta para investigar más, no un diagnóstico.",
      incorrectos: ["A) El MIB nunca provee diagnósticos definitivos.","B) El MVR cubre historial de manejo.","D) El expediente completo lo provee el APS o el médico directamente."]
    },
    {
      nivel: 3,
      q: "Un suscriptor desea conocer el CARÁCTER, REPUTACIÓN y SITUACIÓN FINANCIERA de un solicitante. ¿Cuál informe proporciona esta información?",
      o: ["Declaración del médico tratante (APS)","Reporte del MIB","Reporte de inspección","Reporte de vehículos motorizados (MVR)"],
      a: 2,
      trampa: "Cada documento tiene un propósito específico. Carácter y reputación = reporte de inspección.",
      correcto: "El Reporte de Inspección cubre carácter, reputación, estilo de vida y situación financiera. Está regulado por la FCRA.",
      incorrectos: ["A) El APS cubre historial médico, no carácter financiero.","B) El MIB cubre solicitudes de seguro anteriores.","D) El MVR cubre historial de conducción."]
    },
    {
      nivel: 4,
      q: "Según la FCRA, si una aseguradora solicita un reporte de investigación sobre un solicitante, ¿cuál es su obligación ANTES de obtenerlo?",
      o: ["Pagar al solicitante por el tiempo de investigación","Notificar al solicitante que puede solicitarse dicho reporte","Obtener aprobación del Departamento de Seguros de Florida","Esperar a que el solicitante complete el examen médico"],
      a: 1,
      trampa: "La FCRA exige notificación — no aprobación gubernamental ni pago.",
      correcto: "La FCRA exige NOTIFICAR al solicitante que puede solicitarse un reporte de investigación. El solicitante tiene derecho a saberlo.",
      incorrectos: ["A) No existe compensación al solicitante por la investigación.","C) No se requiere aprobación previa del DFS para estos reportes.","D) El reporte de inspección es independiente del examen médico."]
    },
    {
      nivel: 5,
      q: "Un suscriptor recibe una señal codificada del MIB sobre un solicitante. ¿Cuál es el paso MÁS APROPIADO a seguir?",
      o: ["Rechazar la solicitud automáticamente basándose en la señal","Solicitar información adicional al solicitante o un APS para investigar la señal","Aceptar la solicitud como riesgo estándar ignorando la señal","Reportar al solicitante a las autoridades por ocultamiento"],
      a: 1,
      trampa: "El MIB NO es suficiente para rechazar. Es solo una señal que requiere investigación.",
      correcto: "La señal del MIB es una ALERTA, no un diagnóstico. El paso correcto es investigar con APS, examen médico o preguntas adicionales.",
      incorrectos: ["A) Rechazar solo con el MIB sin investigar adicional es inapropiado.","C) Ignorar una señal del MIB viola el proceso de suscripción.","D) Una señal del MIB no es evidencia de fraude."]
    }
  ]
},

{
  id: "susc_003", area: "suscripcion", concepto: "Antedatación de Pólizas",
  variantes: [
    {
      nivel: 1,
      q: "¿Cuántos meses puede antedatarse una póliza de vida en Florida para obtener una prima más baja?",
      o: ["3 meses","6 meses","12 meses","18 meses"],
      a: 1,
      trampa: "La respuesta intuitiva puede ser 12 meses, pero Florida limita la antedatación a 6 meses.",
      correcto: "Florida permite antedata hasta 6 MESES. El asegurado paga primas retroactivas por ese período pero obtiene la prima más baja de la edad anterior permanentemente.",
      incorrectos: ["A) 3 meses es menos que el máximo permitido.","C) 12 meses excede el límite legal de Florida.","D) 18 meses también excede el límite legal."]
    },
    {
      nivel: 2,
      q: "Ana cumple 35 años en enero. Solicita una póliza en abril y pide que se antedate a diciembre del año anterior. ¿Cuál es la DESVENTAJA inmediata?",
      o: ["La póliza no es válida porque las antedatas están prohibidas","Debe pagar primas retroactivas por diciembre, enero, febrero y marzo — sin cobertura durante ese período","Su beneficiario queda sin protección durante 6 meses","La compañía puede cancelar la póliza durante los primeros 12 meses"],
      a: 1,
      trampa: "La antedata es legal pero tiene un costo real: primas por meses pasados sin cobertura durante esos meses.",
      correcto: "Ana paga primas retroactivas por los meses antedatados aunque no había cobertura real en ese período. El beneficio es una prima más baja de por vida.",
      incorrectos: ["A) La antedata hasta 6 meses es completamente legal en Florida.","C) El beneficiario está protegido desde la fecha efectiva real de la póliza.","D) La cancelación no es una consecuencia de la antedata."]
    },
    {
      nivel: 3,
      q: "¿Cuál afirmación sobre la antedatación de pólizas de vida en Florida es CORRECTA?",
      o: ["Está prohibida porque representa una tergiversación del riesgo","Es legal hasta 6 meses y su propósito es obtener una prima más baja usando una edad de emisión menor","Solo está permitida para asegurados mayores de 50 años","Requiere aprobación previa del Departamento de Servicios Financieros"],
      a: 1,
      trampa: "La antedata puede parecer engañosa pero es una práctica legal específicamente permitida en Florida.",
      correcto: "La antedatación hasta 6 meses es LEGAL en Florida con el propósito de usar una edad de emisión menor para obtener prima más baja.",
      incorrectos: ["A) No está prohibida — es una práctica expresamente permitida.","C) No hay restricción de edad para el solicitante.","D) No requiere aprobación especial del DFS."]
    },
    {
      nivel: 4,
      q: "Carlos antedató su póliza 6 meses para usar la tasa de una edad menor. ¿Cuál es el efecto PERMANENTE de esta decisión?",
      o: ["Solo reduce la prima durante los primeros 6 meses, luego regresa a la tasa original","La prima reducida aplica DE POR VIDA — es la edad de emisión oficial de la póliza","Carlos debe pagar intereses sobre las primas retroactivas además de las primas en sí","La fecha de aniversario de la póliza se recalcula automáticamente cada año"],
      a: 1,
      trampa: "Creer que el beneficio de la antedata es temporal. Es permanente — la edad de emisión queda fija.",
      correcto: "La edad de EMISIÓN queda registrada permanentemente. La prima más baja aplica durante toda la vida de la póliza.",
      incorrectos: ["A) La prima reducida es permanente, no temporal.","C) No hay cargo de intereses sobre primas retroactivas.","D) La fecha de aniversario se basa en la fecha antedatada de emisión y no varía."]
    },
    {
      nivel: 5,
      q: "Un agente sugiere antedata una póliza 8 meses para que el solicitante pague la prima más baja. ¿Cuál afirmación es la MÁS PRECISA?",
      o: ["Es una práctica estándar y completamente legal en Florida","Es ilegal — la antedatación está limitada a 6 meses; los 8 meses violan la regulación","Es permitida solo si el suscriptor lo aprueba por escrito","Es legal porque el beneficio al solicitante justifica exceder el límite"],
      a: 1,
      trampa: "El beneficio al solicitante no justifica exceder el límite legal. La ley es clara: máximo 6 meses.",
      correcto: "Antedata de 8 meses VIOLA la regulación de Florida que establece un máximo de 6 meses. El agente incurre en una infracción regulatoria.",
      incorrectos: ["A) 8 meses excede el límite legal.","C) La aprobación escrita del suscriptor no autoriza exceder el límite legal.","D) El beneficio al cliente nunca justifica violar la regulación."]
    }
  ]
},

{
  id: "susc_004", area: "suscripcion", concepto: "Clasificaciones de Riesgo",
  variantes: [
    {
      nivel: 1,
      q: "Un solicitante es aceptado para seguro de vida pero paga prima más alta que la estándar. ¿Cómo se clasifica?",
      o: ["Riesgo preferido","Riesgo estándar","Riesgo subestándar o calificado","Riesgo rechazado"],
      a: 2,
      trampa: "Confundir 'subestándar' con 'rechazado'. El subestándar SÍ obtiene cobertura — pero a mayor costo.",
      correcto: "Subestándar (Calificado/Rated) = aceptado con prima más alta para compensar el riesgo adicional. No es un rechazo.",
      incorrectos: ["A) Preferido es el mejor riesgo, con prima más baja.","B) Estándar es el riesgo promedio con prima regular.","D) Rechazado significa que no se emite ninguna póliza."]
    },
    {
      nivel: 2,
      q: "¿Cuál clasificación resulta en que el solicitante NO puede obtener ninguna cobertura?",
      o: ["Subestándar","Calificado","Preferido","Rechazado (Declined)"],
      a: 3,
      trampa: "Subestándar y calificado suenan restrictivos, pero ambos otorgan póliza.",
      correcto: "Rechazado (Declined) = la aseguradora se niega a emitir cualquier póliza. Es underwriting legítimo — no discriminación ilegal.",
      incorrectos: ["A) Subestándar obtiene cobertura con prima más alta.","B) Calificado es sinónimo de subestándar — sí obtiene cobertura.","C) Preferido obtiene cobertura con prima más baja."]
    },
    {
      nivel: 3,
      q: "Un solicitante recibe una póliza con ANEXO DE EXCLUSIÓN que excluye permanentemente reclamaciones por una condición preexistente. Esto es:",
      o: ["Riesgo preferido con condiciones especiales","Riesgo estándar con modificación temporal","Riesgo subestándar con anexo de deterioro (impairment rider)","Solicitud rechazada con opción de apelación"],
      a: 2,
      trampa: "Una modificación a la póliza no significa rechazo. El anexo de exclusión es una herramienta para asegurar riesgos subestándar.",
      correcto: "El Anexo de Exclusión (Impairment Rider) es la herramienta para emitir póliza a un riesgo subestándar eliminando la condición problemática de la cobertura.",
      incorrectos: ["A) El riesgo preferido no requiere exclusiones.","B) Las exclusiones bajo este contexto son permanentes, no temporales.","D) Se emitió póliza — no es un rechazo."]
    },
    {
      nivel: 4,
      q: "¿Cuál de las siguientes NO es una clasificación de riesgo estándar en el proceso de suscripción?",
      o: ["Preferido","Subestándar","Provisional","Rechazado"],
      a: 2,
      trampa: "'Provisional' suena técnico y oficial, pero no es una clasificación de riesgo estándar.",
      correcto: "Las clasificaciones estándar son: Preferido, Estándar, Subestándar/Calificado y Rechazado. 'Provisional' no existe como categoría de clasificación.",
      incorrectos: ["A) Preferido SÍ es una clasificación estándar.","B) Subestándar SÍ es una clasificación estándar.","D) Rechazado SÍ es una clasificación estándar."]
    },
    {
      nivel: 5,
      q: "Un suscriptor aplica una Prima Temporal Adicional Plana (Temporary Flat Extra Premium). ¿Cuál es su característica DISTINTIVA?",
      o: ["Se aplica permanentemente durante toda la vida de la póliza","Es un cargo fijo por cada $1,000 de cobertura que se elimina después de un período específico cuando el riesgo mejora","Se calcula como porcentaje del beneficio de muerte total","Solo aplica a pólizas de término"],
      a: 1,
      trampa: "Confundir con la Prima Extra Plana PERMANENTE. La TEMPORAL se elimina cuando el riesgo adicional desaparece.",
      correcto: "Prima Temporal Adicional Plana = cargo fijo por $1,000 que aplica por un período específico y se elimina cuando el riesgo adicional desaparece (ej: recuperación de salud).",
      incorrectos: ["A) Esa es la Prima Plana PERMANENTE, no la temporal.","C) La prima plana es por $1,000 de cobertura, no porcentaje del beneficio.","D) Aplica tanto a pólizas de término como permanentes."]
    }
  ]
},

{
  id: "susc_005", area: "suscripcion", concepto: "Reglas de Reemplazo de Florida",
  variantes: [
    {
      nivel: 1,
      q: "Al reemplazar una póliza de vida existente, ¿en cuántos días hábiles debe el agente notificar a la aseguradora reemplazada?",
      o: ["1 día hábil","3 días hábiles","5 días hábiles","10 días hábiles"],
      a: 1,
      trampa: "Confundir con plazos de otros procesos. La regla de reemplazo de Florida es específicamente 3 días HÁBILES.",
      correcto: "La Regla de Reemplazo de Florida exige notificar a la aseguradora reemplazada dentro de 3 DÍAS HÁBILES. El propósito es darle oportunidad de retener al cliente.",
      incorrectos: ["A) 1 día hábil no es suficiente según la regulación.","C) 5 días excede el plazo requerido.","D) 10 días viola la regla al ser excesivo."]
    },
    {
      nivel: 2,
      q: "El propósito PRINCIPAL de la Regla de Reemplazo de Vida en Florida es:",
      o: ["Aumentar las comisiones de los agentes que realizan reemplazos","Proteger al consumidor del 'Twisting' y garantizar que el reemplazo sea en su mejor interés","Garantizar que la nueva póliza tenga beneficios superiores a la existente","Requerir aprobación del DFS para cada reemplazo"],
      a: 1,
      trampa: "Un reemplazo legítimo puede tener mejores beneficios, pero el PROPÓSITO de la regla es proteger contra el twisting.",
      correcto: "La Regla de Reemplazo protege al consumidor contra el TWISTING y exige documentación comparativa para decisión informada.",
      incorrectos: ["A) Las comisiones no son el propósito regulatorio.","C) La regla no garantiza que la nueva sea mejor — solo exige comparación.","D) No se requiere aprobación previa del DFS para cada reemplazo."]
    },
    {
      nivel: 3,
      q: "Un agente convence a su cliente de cancelar una póliza con la Compañía A usando comparaciones falsas para comprar con la Compañía B. ¿Cuál práctica ilegal está cometiendo?",
      o: ["Churning","Twisting","Rebating","Tergiversación simple"],
      a: 1,
      trampa: "Churning ocurre DENTRO de la misma compañía. Twisting involucra cambiar de compañía.",
      correcto: "TWISTING = usar información falsa o engañosa para inducir a cancelar una póliza existente y comprar una nueva en una compañía DIFERENTE.",
      incorrectos: ["A) Churning es cambios innecesarios dentro de la MISMA compañía.","C) Rebating es devolver comisiones o dar regalos para inducir la compra.","D) La tergiversación sola no captura el elemento de inducir el reemplazo."]
    },
    {
      nivel: 4,
      q: "Al reemplazar una póliza de vida, el agente debe proporcionar al solicitante un documento de comparación. ¿Cuál es su propósito ESPECÍFICO?",
      o: ["Demostrar que la nueva póliza es siempre superior a la existente","Permitir al consumidor tomar una decisión INFORMADA al ver diferencias en costos, beneficios y valores de ambas pólizas","Confirmar que el agente completó los requisitos de educación continua","Obtener aprobación del Departamento de Seguros"],
      a: 1,
      trampa: "El documento no DEMUESTRA superioridad — ayuda al cliente a DECIDIR informadamente.",
      correcto: "El documento de comparación permite al consumidor ver las diferencias en costos, beneficios, valores de rescate y primas para tomar una decisión informada.",
      incorrectos: ["A) No presupone que la nueva es mejor; solo muestra diferencias.","C) La educación continua es un requisito separado de la licencia.","D) No se necesita aprobación previa del departamento para cada reemplazo."]
    },
    {
      nivel: 5,
      q: "¿Cuál de los siguientes escenarios constituye una VIOLACIÓN de las Reglas de Reemplazo de Florida?",
      o: ["Un agente notifica a la aseguradora reemplazada dentro de 3 días hábiles y entrega el documento de comparación","Un agente reemplaza una póliza sin notificar a la aseguradora reemplazada y sin entregar documentación comparativa","Un agente recomienda un reemplazo genuinamente beneficioso y documenta la razón","Un agente entrega el documento de comparación antes de que el cliente firme la nueva solicitud"],
      a: 1,
      trampa: "La opción B describe exactamente lo que la regulación prohíbe.",
      correcto: "Omitir la notificación a la aseguradora reemplazada Y no entregar documentación comparativa son DOS violaciones simultáneas de la Regla de Reemplazo.",
      incorrectos: ["A) Esto es el procedimiento CORRECTO, no una violación.","C) Recomendar genuinamente y documentar es exactamente lo que la regla exige.","D) Entregar el documento antes de la firma es el procedimiento correcto."]
    }
  ]
},

// ════════════════════════════════════════════
// ÁREA 2 — LEYES Y REGULACIONES DE FLORIDA
// ════════════════════════════════════════════

{
  id: "florida_001", area: "florida", concepto: "Período de Examen Gratuito (Free Look)",
  variantes: [
    {
      nivel: 1,
      q: "En Florida, ¿cuántos días tiene el período de examen gratuito para una póliza de vida?",
      o: ["7 días","10 días","14 días","30 días"],
      a: 2,
      trampa: "Confundir vida y anualidades (14 días) con salud (10 días) o Medigap y LTC (30 días).",
      correcto: "Período de examen gratuito para VIDA y ANUALIDADES en Florida = 14 DÍAS.",
      incorrectos: ["A) 7 días no corresponde.","B) 10 días corresponde a salud.","D) 30 días corresponde a Medigap y LTC."]
    },
    {
      nivel: 2,
      q: "Rosa compra una anualidad en Florida y cambia de opinión 25 días después de recibirla. ¿Sigue dentro del free look?",
      o: ["No — el free look de anualidades es de 14 días y ya terminó","Sí — toda anualidad tiene 30 días","Solo si el agente acepta la devolución voluntariamente","No — las anualidades nunca tienen free look"],
      a: 0,
      trampa: "El free look de anualidades es de 14 días; no confundir con los 30 días de Medigap y LTC.",
      correcto: "Según el manual 2-15, las anualidades tienen 14 días de free look. A los 25 días, Rosa ya está fuera del plazo.",
      incorrectos: ["B) El manual no asigna 30 días a anualidades; ese plazo corresponde a Medigap y LTC.","C) El período de examen gratuito es un DERECHO legal, no depende de la voluntad del agente.","D) Durante el período de examen gratuito, la anualidad SIEMPRE puede devolverse."]
    },
    {
      nivel: 3,
      q: "¿Cuál afirmación sobre los períodos de examen gratuito en Florida es INCORRECTA?",
      o: ["Vida y anualidades tienen 14 días","Salud tiene 10 días","Medigap y LTC tienen 30 días","Los períodos de examen gratuito son opcionales para las aseguradoras"],
      a: 3,
      trampa: "La palabra 'opcionales' es la trampa. Los períodos de examen gratuito son un DERECHO legal obligatorio.",
      correcto: "Los períodos de examen gratuito son OBLIGATORIOS por ley en Florida — no son opcionales. La opción D es la afirmación incorrecta.",
      incorrectos: ["A) Coincide con el manual.","B) Coincide con el manual.","C) Coincide con el manual."]
    },
    {
      nivel: 4,
      q: "Durante el período de examen gratuito, si el asegurado decide devolver la póliza, ¿qué recibe?",
      o: ["El valor de rescate en efectivo menos gastos administrativos","La prima pagada menos la cobertura utilizada","El reembolso completo de todas las primas pagadas","Un crédito aplicable a una nueva póliza con la misma compañía"],
      a: 2,
      trampa: "Algunas respuestas suenan razonables pero implican deducciones. El período de examen gratuito garantiza reembolso TOTAL.",
      correcto: "Durante el período de examen gratuito, el asegurado tiene derecho a un REEMBOLSO COMPLETO de todas las primas pagadas — sin deducciones ni cargos.",
      incorrectos: ["A) No se deducen gastos administrativos.","B) No se deduce el valor de la cobertura utilizada.","D) El reembolso es en efectivo, no en crédito."]
    },
    {
      nivel: 5,
      q: "Un agente declara: 'Si no le gusta la póliza, tiene una semana para devolverla.' Si la póliza es de vida, ¿esta declaración constituye una violación?",
      o: ["No — el agente puede fijar el período de examen gratuito discrecionalmente","Sí — está REDUCIENDO ilegalmente el período de examen gratuito de 14 días a 7 días","No — una semana equivale a 7 días que es suficiente para examinar la póliza","Sí — el agente nunca debe mencionar el período de examen gratuito al cliente"],
      a: 1,
      trampa: "El agente no puede REDUCIR un derecho legal. Una semana (7 días) es menos que los 10 días obligatorios.",
      correcto: "El período de examen gratuito de 14 días es un DERECHO LEGAL mínimo. El agente no puede reducirlo a 7 días — hacerlo es una violación de la ley de Florida.",
      incorrectos: ["A) El período es fijado por ley, no por el agente.","C) 7 días es MENOS que los 14 días que el manual establece.","D) El agente puede y debe informar sobre este derecho al cliente."]
    }
  ]
},

{
  id: "florida_002", area: "florida", concepto: "Idoneidad (Suitability) en Anualidades",
  variantes: [
    {
      nivel: 1,
      q: "Los requisitos de idoneidad para anualidades en Florida son especialmente estrictos para personas de:",
      o: ["Menores de 30 años","Entre 40 y 50 años","65 años o más","Cualquier edad con ingresos bajos"],
      a: 2,
      trampa: "La idoneidad aplica a todos, pero Florida tiene reglas ESPECIALMENTE estrictas para personas de 65+.",
      correcto: "Florida tiene requisitos de idoneidad mejorados para anualidades vendidas a personas de 65 AÑOS O MÁS. El agente debe documentar situación financiera, necesidades y objetivos.",
      incorrectos: ["A) Los menores de 30 no tienen requisitos especiales de idoneidad en anualidades.","B) No hay estrictez especial para el rango de 40-50 años.","D) El ingreso bajo no es el factor determinante para requisitos especiales."]
    },
    {
      nivel: 2,
      q: "Para determinar la idoneidad de una anualidad, el agente debe evaluar TODO lo siguiente EXCEPTO:",
      o: ["La situación financiera del cliente","Los objetivos de inversión del cliente","La tasa de comisión del agente por el producto","La tolerancia al riesgo del cliente"],
      a: 2,
      trampa: "La palabra EXCEPTO señala lo que NO pertenece. La comisión del agente NUNCA es un factor de idoneidad.",
      correcto: "La tasa de comisión del agente NO es un factor de idoneidad. Recomendar un producto por comisión en lugar del beneficio al cliente es una violación ética.",
      incorrectos: ["A) La situación financiera SÍ es un factor de idoneidad.","B) Los objetivos de inversión SÍ son un factor de idoneidad.","D) La tolerancia al riesgo SÍ es un factor de idoneidad."]
    },
    {
      nivel: 3,
      q: "Un agente vende una anualidad con período de penalidad de 10 años a una persona de 82 años que necesita liquidez en 2 años. ¿Cuál violación está cometiendo?",
      o: ["Twisting — está reemplazando una póliza existente","Rebating — está ofreciendo un incentivo financiero","Venta no idónea (unsuitable sale) — el producto no corresponde a las necesidades del cliente","Tergiversación — está mintiendo sobre el período de penalidad"],
      a: 2,
      trampa: "El problema central es la IDONEIDAD — el producto no corresponde a la necesidad del cliente.",
      correcto: "Esta es una venta NO IDÓNEA. El cliente necesita liquidez en 2 años pero el producto tiene 10 años de penalidad por retiro anticipado.",
      incorrectos: ["A) No hay evidencia de que se esté reemplazando una póliza existente.","B) No se menciona ningún incentivo o rebaja.","D) No se indica que el agente haya mentido sobre el período."]
    },
    {
      nivel: 4,
      q: "¿Cuándo EXACTAMENTE debe el agente completar el análisis de idoneidad para la venta de una anualidad?",
      o: ["Después de que el cliente firma la solicitud","Antes de hacer cualquier recomendación al cliente","Después de que la compañía emite la póliza","Solo si el cliente lo solicita expresamente"],
      a: 1,
      trampa: "El análisis de idoneidad debe preceder a la RECOMENDACIÓN — no puede hacerse después de la venta.",
      correcto: "El análisis de idoneidad debe completarse ANTES de hacer cualquier recomendación. No puede ser retroactivo a la firma ni posterior a la emisión.",
      incorrectos: ["A) Hacerlo después de la firma convierte el proceso en retroactivo.","C) Esperar a la emisión es demasiado tarde.","D) La idoneidad es una obligación del agente, no opcional."]
    },
    {
      nivel: 5,
      q: "Pedro tiene 67 años, ingresos fijos de $2,500 mensuales y necesita liquidez en 3 años. El agente le recomienda una anualidad con período de penalidad de 8 años y comisión del 8%. ¿Cuál evaluación es CORRECTA?",
      o: ["La venta es idónea — las anualidades siempre son apropiadas para personas mayores","La venta es idónea — el cliente firmó voluntariamente","La venta NO es idónea — la necesidad de liquidez en 3 años es incompatible con un período de penalidad de 8 años","La idoneidad depende únicamente de si la comisión está dentro del límite legal"],
      a: 2,
      trampa: "La firma voluntaria NO establece idoneidad. La comisión legal tampoco. La necesidad de liquidez es incompatible con el período de penalidad.",
      correcto: "La venta es claramente NO IDÓNEA. El cliente necesita fondos en 3 años pero el producto penaliza por retirar durante 8 años.",
      incorrectos: ["A) Las anualidades NO siempre son apropiadas para personas mayores.","B) La firma voluntaria no establece idoneidad automáticamente.","D) La comisión legal nunca determina la idoneidad del producto para el cliente."]
    }
  ]
},

// ════════════════════════════════════════════
// ÁREA 3 — CONCEPTOS DE RETIRO
// ════════════════════════════════════════════

{
  id: "retiro_001", area: "retiro", concepto: "IRA Tradicional vs. IRA Roth",
  variantes: [
    {
      nivel: 1,
      q: "¿Cuál IRA permite retiros LIBRES DE IMPUESTOS en jubilación y NO tiene distribuciones mínimas requeridas durante la vida del propietario?",
      o: ["IRA Tradicional","SEP-IRA","IRA Roth","SIMPLE IRA"],
      a: 2,
      trampa: "El IRA Tradicional parece más conocido, pero el Roth tiene las ventajas fiscales en el retiro.",
      correcto: "IRA Roth = contribuciones con dólares después de impuestos. Retiros calificados son LIBRES DE IMPUESTOS. NO tiene RMDs durante la vida del propietario.",
      incorrectos: ["A) El IRA Tradicional sí tiene RMDs y los retiros son gravables.","B) El SEP-IRA tiene RMDs y retiros gravables.","D) El SIMPLE IRA tiene RMDs y retiros gravables."]
    },
    {
      nivel: 2,
      q: "Una persona espera estar en un tramo impositivo MÁS ALTO al jubilarse. ¿Cuál IRA es MÁS VENTAJOSO?",
      o: ["IRA Tradicional — deduce las contribuciones ahora en el tramo más bajo","IRA Roth — paga impuestos ahora en el tramo más bajo; retiros libres en el tramo más alto","SEP-IRA — porque permite las contribuciones más altas","No importa — todos los IRAs son fiscalmente equivalentes"],
      a: 1,
      trampa: "La deducción del IRA Tradicional parece atractiva, pero si los impuestos serán más altos en el futuro, es mejor pagarlos ahora.",
      correcto: "Si estará en un tramo MAYOR en el futuro, conviene pagar impuestos AHORA (menor tasa) con el Roth y retirar LIBRE DE IMPUESTOS cuando la tasa sea mayor.",
      incorrectos: ["A) Deducir ahora y pagar más impuestos después es menos ventajoso si la tasa sube.","C) El SEP-IRA tiene ventajas de contribución, pero no resuelve el problema del tramo impositivo futuro.","D) Los IRAs tienen diferencias fiscales significativas."]
    },
    {
      nivel: 3,
      q: "Según el SECURE 2.0 Act, las Distribuciones Mínimas Requeridas del IRA Tradicional deben comenzar a los:",
      o: ["70½ años","72 años","73 años","75 años"],
      a: 2,
      trampa: "La edad ha cambiado varias veces: 70½ → 72 → 73. El examen puede probar la versión más reciente.",
      correcto: "El SECURE 2.0 Act (2022) establece que los RMDs comienzan a los 73 AÑOS. El IRA Roth NO tiene RMDs durante la vida del propietario.",
      incorrectos: ["A) 70½ era la edad anterior al SECURE Act de 2019.","B) 72 años fue la edad bajo el SECURE Act original de 2019.","D) 75 años podría ser una edad futura pero no la actual."]
    },
    {
      nivel: 4,
      q: "¿Cuál afirmación sobre las contribuciones al IRA Roth es CORRECTA?",
      o: ["Son deducibles de impuestos en el año de la contribución","No tienen límites de contribución anuales","Se hacen con dólares después de impuestos y el crecimiento es libre de impuestos","Solo están disponibles para empleados con plan 401(k)"],
      a: 2,
      trampa: "El Roth parece similar al Tradicional en la mecánica, pero la diferencia clave es CUÁNDO se pagan los impuestos.",
      correcto: "IRA Roth = contribuciones con dólares DESPUÉS DE IMPUESTOS (no deducibles). El crecimiento y retiros calificados son completamente libres de impuestos.",
      incorrectos: ["A) Las contribuciones al Roth NO son deducibles.","B) El Roth tiene límites de contribución anuales ($7,000 en 2024; $8,000 para 50+).","D) El Roth está disponible para cualquier persona con ingreso ganado que cumpla los límites."]
    },
    {
      nivel: 5,
      q: "Ana tiene 45 años. Su tramo impositivo actual es del 22% y cree que será del 32% a los 65 años. ¿Cuál estrategia de IRA es la MÁS APROPIADA?",
      o: ["IRA Tradicional — para obtener la deducción inmediata del 22%","IRA Roth — pagar el 22% ahora y evitar el 32% en los retiros","Ambos son equivalentes — el valor presente de los impuestos es igual","Ninguno — debe esperar hasta que su tramo baje"],
      a: 1,
      trampa: "La deducción inmediata del Tradicional parece atractiva, pero el costo diferido (32%) es mayor.",
      correcto: "Con tramo 22% ahora y 32% después, el Roth es SUPERIOR: paga 22% hoy, evita 32% en el futuro.",
      incorrectos: ["A) La deducción del 22% ahora parece buena, pero pagar 32% después es mucho peor.","C) No son equivalentes cuando los tramos futuros son significativamente más altos.","D) Esperar no es una estrategia — el tiempo de crecimiento libre de impuestos es valioso."]
    }
  ]
},

{
  id: "retiro_002", area: "retiro", concepto: "Intercambio 1035",
  variantes: [
    {
      nivel: 1,
      q: "¿Cuál intercambio bajo la Sección 1035 del Código de Rentas Internas NO está permitido?",
      o: ["Póliza de vida por otra póliza de vida","Póliza de vida por una anualidad","Anualidad por otra anualidad","Anualidad por una póliza de vida"],
      a: 3,
      trampa: "Los intercambios van de mayor a menor flexibilidad fiscal. Anualidad → Vida sería 'mejorar' la posición fiscal, lo cual no está permitido.",
      correcto: "Anualidad → Vida NO está permitido. Permitidos: Vida→Vida ✓, Vida→Anualidad ✓, Anualidad→Anualidad ✓, cualquiera→Cuidado a Largo Plazo ✓.",
      incorrectos: ["A) Vida→Vida SÍ está permitido.","B) Vida→Anualidad SÍ está permitido.","C) Anualidad→Anualidad SÍ está permitido."]
    },
    {
      nivel: 2,
      q: "La ventaja fiscal PRINCIPAL del intercambio 1035 es que permite:",
      o: ["Recibir el valor en efectivo sin pagar impuestos","Transferir el valor acumulado de una póliza a otra sin crear un evento gravable","Eliminar los cargos de cancelación anticipada","Cambiar el beneficiario sin restricciones"],
      a: 1,
      trampa: "El 1035 NO elimina surrender charges ni permite retiro en efectivo sin impuestos — solo difiere la obligación fiscal.",
      correcto: "El 1035 permite transferir el valor acumulado (incluyendo ganancias) SIN CREAR un evento gravable. Las ganancias no se gravan en el intercambio.",
      incorrectos: ["A) El intercambio 1035 no permite recibir efectivo libre de impuestos.","C) Los cargos de cancelación pueden seguir aplicando — el 1035 no los elimina.","D) El cambio de beneficiario es independiente del intercambio 1035."]
    },
    {
      nivel: 3,
      q: "Rosa quiere usar el valor de su anualidad para comprar una Vida Entera mediante un intercambio 1035. ¿Es esto permitido?",
      o: ["Sí — el 1035 permite intercambiar cualquier producto de seguro por otro","No — el intercambio de Anualidad por Vida NO está permitido bajo la Sección 1035","Sí — pero solo si la anualidad tiene más de 10 años de vigencia","Solo si el valor de la anualidad supera los $50,000"],
      a: 1,
      trampa: "Parece lógico intercambiar libremente entre productos. Pero la dirección importa: Anualidad→Vida está específicamente prohibido.",
      correcto: "Anualidad → Vida NO está permitido bajo el 1035. No se permite 'mejorar' la posición fiscal.",
      incorrectos: ["A) NO todos los intercambios están permitidos.","C) El tiempo de vigencia no determina si el intercambio está permitido.","D) El monto no determina si el tipo de intercambio está permitido."]
    },
    {
      nivel: 4,
      q: "Carlos tiene una póliza de vida con $80,000 de valor en efectivo y ganancias de $30,000. La intercambia por una anualidad mediante el 1035. ¿Cuál es el resultado fiscal inmediato?",
      o: ["Carlos debe pagar impuestos sobre los $30,000 de ganancias inmediatamente","Carlos no paga impuestos ahora — las ganancias se transfieren y se gravan al retiro","Carlos paga impuestos solo sobre el 50% de las ganancias","El intercambio 1035 elimina permanentemente la obligación fiscal"],
      a: 1,
      trampa: "El 1035 DIFIERE los impuestos — no los elimina. Pagarán cuando los fondos salgan de la anualidad.",
      correcto: "El intercambio 1035 DIFIERE la obligación fiscal. Los $30,000 no se gravan ahora — se trasladan a la anualidad y se gravarán al retirar.",
      incorrectos: ["A) Eso es lo que pasaría si NO usara el 1035 y simplemente rescatara la póliza.","C) No existe pago parcial del 50% en el intercambio 1035.","D) El 1035 DIFIERE, no elimina permanentemente la obligación fiscal."]
    },
    {
      nivel: 5,
      q: "¿Cuál intercambio 1035 resultaría en el reconocimiento INMEDIATO de un evento gravable?",
      o: ["Vida Entera por Variable Universal Life de la misma familia de productos","Anualidad Fija por Anualidad Indexada de otra compañía","Póliza de vida por un contrato de Cuidado a Largo Plazo","Anualidad Fija por una Vida Entera con extracción de efectivo durante el proceso"],
      a: 3,
      trampa: "Si durante el intercambio se extrae efectivo (boot), ese efectivo es gravable inmediatamente.",
      correcto: "Si durante un intercambio 1035 el propietario recibe efectivo adicional ('boot'), ese monto se reconoce como ingreso gravable inmediatamente.",
      incorrectos: ["A) Vida→Vida entre productos de la misma familia es un 1035 válido sin evento gravable.","B) Anualidad→Anualidad (distinta compañía) es un 1035 válido sin evento gravable.","C) Cualquier producto → Cuidado a Largo Plazo es un intercambio 1035 permitido."]
    }
  ]
},

// ════════════════════════════════════════════
// ÁREA 4 — PROVISIONES Y CLÁUSULAS
// ════════════════════════════════════════════

{
  id: "prov_001", area: "provisiones", concepto: "Período de Gracia",
  variantes: [
    {
      nivel: 1,
      q: "La prima mensual de María venció el 1 de marzo y no la pagó. Fallece el 28 de marzo. ¿Qué paga la aseguradora?",
      o: ["Nada — la póliza caducó por falta de pago","El beneficio completo de muerte menos la prima vencida","Solo el valor en efectivo acumulado","El 50% del beneficio de muerte"],
      a: 1,
      trampa: "Creer que la falta de pago cancela inmediatamente la póliza. El período de gracia de 31 días protege al asegurado.",
      correcto: "El período de gracia de VIDA es 31 días. María falleció el día 28 — dentro del período. La aseguradora paga el beneficio completo MENOS la prima vencida.",
      incorrectos: ["A) La póliza sigue vigente durante el período de gracia de 31 días.","C) El valor en efectivo aplica si cancela la póliza, no si fallece durante el período de gracia.","D) No existe pago del 50% — es el beneficio completo menos prima vencida."]
    },
    {
      nivel: 2,
      q: "¿Cómo difiere el período de gracia de una póliza de SALUD con primas MENSUALES del seguro de VIDA?",
      o: ["Son idénticos — 31 días para ambos","Salud mensual = 10 días; Vida = 31 días","Salud = 31 días; Vida = 10 días","Ambos son 7 días para primas mensuales"],
      a: 1,
      trampa: "La diferencia entre vida y salud en el período de gracia es frecuentemente confundida.",
      correcto: "Período de gracia VIDA = siempre 31 días. SALUD: semanal = 7 días, mensual = 10 días, otros = 31 días. Salud MENSUAL = 10 días — NO 31 días.",
      incorrectos: ["A) NO son idénticos. Salud mensual = 10 días, no 31.","C) Las definiciones están invertidas.","D) 7 días aplica a primas SEMANALES de salud, no mensuales."]
    },
    {
      nivel: 3,
      q: "¿Cuál es el propósito del período de gracia en una póliza de vida?",
      o: ["Permitir al asegurador cancelar la póliza cuando los riesgos aumentan","Dar al asegurado tiempo adicional para pagar la prima vencida sin que la póliza caduque","Proteger al asegurador de reclamaciones presentadas tardíamente","Establecer el período durante el cual el asegurado puede contestar la póliza"],
      a: 1,
      trampa: "Confundir el período de gracia con el período contestable o de revisión.",
      correcto: "El período de gracia protege al asegurado de perder cobertura por un pago tardío. La póliza permanece EN VIGOR durante 31 días después del vencimiento de la prima.",
      incorrectos: ["A) El período de gracia protege al ASEGURADO, no al asegurador.","C) Eso corresponde a las provisiones de aviso y prueba de pérdida.","D) El período contestable es la cláusula de incontestabilidad."]
    },
    {
      nivel: 4,
      q: "Si el asegurado fallece durante el período de gracia SIN haber pagado la prima vencida, el beneficiario recibe:",
      o: ["El beneficio completo sin ninguna deducción","El beneficio completo MENOS la prima vencida no pagada","Solo el 75% del beneficio","El valor en efectivo más los intereses acumulados"],
      a: 1,
      trampa: "El período de gracia mantiene la póliza en vigor pero no 'perdona' la prima vencida.",
      correcto: "Si hay muerte durante el período de gracia con prima vencida sin pagar, la aseguradora paga el beneficio COMPLETO menos la prima impaga.",
      incorrectos: ["A) La prima vencida se deduce del beneficio de muerte.","C) No existe reducción porcentual del 75%.","D) El valor en efectivo aplica en caso de rescate, no de muerte."]
    },
    {
      nivel: 5,
      q: "Carlos tiene una póliza de salud con primas TRIMESTRALES. La prima venció el 1 de enero y no la pagó. ¿Cuándo caduca la póliza?",
      o: ["El 8 de enero — 7 días","El 11 de enero — 10 días","El 1 de febrero — 31 días después del vencimiento","El 1 de abril — cuando vence el siguiente trimestre"],
      a: 2,
      trampa: "Las primas TRIMESTRALES de salud no caen en la categoría de 'semanal' ni 'mensual' — caen en la categoría residual de 31 días.",
      correcto: "Las primas que NO son semanales ni mensuales en salud tienen período de gracia de 31 DÍAS. Las trimestrales caen aquí. La póliza caduca el 1 de febrero.",
      incorrectos: ["A) 7 días es para primas SEMANALES de salud.","B) 10 días es para primas MENSUALES de salud.","D) No se espera al siguiente trimestre — el período de gracia es 31 días."]
    }
  ]
},

{
  id: "prov_002", area: "provisiones", concepto: "Cláusula de Incontestabilidad",
  variantes: [
    {
      nivel: 1,
      q: "Una aseguradora descubre que el asegurado tergiversó su salud en la solicitud — 3 años después de emitida la póliza. ¿Puede denegar la reclamación?",
      o: ["Sí — la tergiversación siempre permite la denegación en cualquier momento","No — la cláusula de incontestabilidad impide impugnar la póliza después de 2 años, excepto por fraude intencional","Solo si la condición tergiversada fue la causa de la muerte","Sí, pero solo durante los primeros 5 años"],
      a: 1,
      trampa: "Creer que la tergiversación siempre permite denegar. Después de 2 años, la incontestabilidad protege al asegurado.",
      correcto: "Después de 2 AÑOS, la aseguradora NO puede impugnar la póliza por tergiversación. La única excepción es el FRAUDE INTENCIONAL.",
      incorrectos: ["A) Después de 2 años, la tergiversación NO permite la denegación.","C) La causalidad no determina si la incontestabilidad aplica.","D) El límite es 2 años, no 5."]
    },
    {
      nivel: 2,
      q: "La cláusula de incontestabilidad beneficia PRINCIPALMENTE a:",
      o: ["La aseguradora — le permite anular pólizas con declaraciones incorrectas","El suscriptor — limita el período de revisión de riesgos","El asegurado y beneficiario — protege contra la rescisión de la póliza después de 2 años","El agente — lo exime de responsabilidad por errores en la solicitud"],
      a: 2,
      trampa: "La palabra 'incontestabilidad' puede sonar técnica y neutral, pero su propósito es proteger al asegurado.",
      correcto: "La cláusula protege al ASEGURADO y beneficiario. Después de 2 años, la aseguradora no puede revocar la póliza por errores no fraudulentos en la solicitud.",
      incorrectos: ["A) Beneficia al asegurado, no a la aseguradora.","B) El suscriptor no es quien se beneficia primariamente.","D) La incontestabilidad no exime al agente de responsabilidad."]
    },
    {
      nivel: 3,
      q: "¿Cuál es la ÚNICA excepción a la protección de la cláusula de incontestabilidad de 2 años?",
      o: ["Falta de pago de primas","Misstatement de edad o sexo","Fraude intencional","Exclusiones de la póliza"],
      a: 2,
      trampa: "Confundir tergiversación con fraude. La tergiversación accidental queda cubierta; el fraude INTENCIONAL nunca queda protegido.",
      correcto: "El FRAUDE INTENCIONAL es la única excepción — puede impugnarse en CUALQUIER MOMENTO, incluso después de 2 años.",
      incorrectos: ["A) La falta de pago se maneja con el período de gracia, no la incontestabilidad.","B) El misstatement de edad resulta en ajuste de beneficios, no en impugnación.","D) Las exclusiones son condiciones de la póliza, no excepciones a la incontestabilidad."]
    },
    {
      nivel: 4,
      q: "Pedro obtiene una póliza declarando que no fuma. En realidad sí fuma. Fallece a los 18 meses de vigencia. ¿Cuál es el resultado MÁS PROBABLE?",
      o: ["La aseguradora paga el beneficio completo — ya pasaron 12 meses","La aseguradora puede rescindir la póliza — tiene menos de 2 años y la tergiversación fue material","La aseguradora solo ajusta la prima retroactivamente","La cláusula de incontestabilidad protege a Pedro desde el primer día"],
      a: 1,
      trampa: "La incontestabilidad solo protege DESPUÉS de 2 años. Con 18 meses, la aseguradora todavía puede actuar.",
      correcto: "Con MENOS de 2 años de vigencia, la aseguradora puede impugnar por tergiversación material. El tabaquismo es material para el riesgo.",
      incorrectos: ["A) 18 meses está DENTRO del período contestable de 2 años.","C) No se ajusta solo la prima — la rescisión es posible dentro de los 2 años.","D) La incontestabilidad solo aplica DESPUÉS de 2 años."]
    },
    {
      nivel: 5,
      q: "La compañía descubre que su asegurado mintió INTENCIONALMENTE sobre una condición médica grave hace 3 años. ¿Cuál describe CORRECTAMENTE la posición legal de la aseguradora?",
      o: ["No puede hacer nada — la cláusula de incontestabilidad de 2 años la protege completamente","Puede impugnar la póliza por fraude intencional — el fraude no tiene límite de tiempo","Solo puede ajustar retroactivamente las primas","Puede denegar solo si la condición oculta fue la causa directa del fallecimiento"],
      a: 1,
      trampa: "La incontestabilidad NO protege el fraude intencional — sin importar cuánto tiempo haya pasado.",
      correcto: "El fraude INTENCIONAL puede impugnarse en cualquier momento, incluso después de 2 años. La incontestabilidad protege errores involuntarios, no el engaño deliberado.",
      incorrectos: ["A) La incontestabilidad NO protege el fraude intencional.","C) Ante fraude intencional, la aseguradora puede rescindir completamente la póliza.","D) El fraude permite impugnar independientemente de la causa del fallecimiento."]
    }
  ]
},

// ════════════════════════════════════════════
// ÁREA 5 — TIPOS DE PÓLIZAS DE SALUD
// ════════════════════════════════════════════

{
  id: "salud_001", area: "salud", concepto: "HMO vs PPO vs POS vs EPO",
  variantes: [
    {
      nivel: 1,
      q: "En un HMO, el médico de cabecera actúa como 'portero' (gatekeeper). ¿Qué significa esto?",
      o: ["El PCP establece las tarifas de copago para cada visita","El asegurado debe obtener un referido del PCP antes de ver a un especialista","El PCP decide si la aseguradora pagará una reclamación","El PCP es el único médico al que el asegurado puede ver"],
      a: 1,
      trampa: "El PCP no es el único médico — es el intermediario que AUTORIZA el acceso a especialistas.",
      correcto: "En un HMO, el PCP es el PORTERO — el asegurado debe ver primero al PCP, quien emite el referido para ver especialistas.",
      incorrectos: ["A) El PCP no establece tarifas; eso lo hace la aseguradora.","C) Las reclamaciones son evaluadas por la aseguradora, no el PCP.","D) El asegurado puede ver especialistas, pero con referido del PCP."]
    },
    {
      nivel: 2,
      q: "Ana tiene un plan PPO. Quiere ver a un dermatólogo SIN referido. ¿Qué ocurre?",
      o: ["No puede — todos los planes requieren referido para ver especialistas","Puede verlo directamente dentro de la red — los PPO no requieren referido del PCP","Debe pagar el 100% porque fue sin referido","Solo puede si el dermatólogo está en la red y no tiene citas en 30 días"],
      a: 1,
      trampa: "Confundir los requisitos del HMO (referido obligatorio) con el PPO (sin referido).",
      correcto: "PPO = NO requiere referido. Ana puede ver al dermatólogo directamente. Dentro de la red paga menos; fuera de la red paga más.",
      incorrectos: ["A) Solo el HMO requiere referido obligatorio; el PPO no.","C) Sin referido en un PPO no implica pago del 100%.","D) La disponibilidad de citas no determina la cobertura del PPO."]
    },
    {
      nivel: 3,
      q: "¿Cuál tipo de plan combina elementos del HMO y PPO — requiriendo un médico de cabecera pero permitiendo atención fuera de la red?",
      o: ["EPO","HDHP","POS (Point of Service)","Medicare Advantage"],
      a: 2,
      trampa: "El EPO también mezcla características pero es diferente. El POS es el híbrido específico HMO+PPO.",
      correcto: "POS (Point of Service) = HÍBRIDO. Como HMO: requiere PCP y referidos. Como PPO: permite salir de la red pero con mayor costo.",
      incorrectos: ["A) El EPO no requiere referido pero tampoco cubre fuera de la red.","B) El HDHP es un plan con deducible alto, no un híbrido.","D) Medicare Advantage es un tipo de plan de Medicare."]
    },
    {
      nivel: 4,
      q: "¿En qué se diferencia un EPO de un PPO?",
      o: ["El EPO requiere referido del PCP; el PPO no","El EPO no cubre atención fuera de la red (excepto emergencias); el PPO sí la cubre con mayor costo","El EPO tiene primas más altas que el PPO en todos los casos","El EPO es solo para empleados del gobierno"],
      a: 1,
      trampa: "El EPO y el PPO se confunden porque ambos permiten ver especialistas sin referido. La diferencia está en la red.",
      correcto: "EPO = sin referido (como PPO) pero sin cobertura fuera de la red (como HMO) excepto emergencias. PPO = sin referido Y con cobertura fuera de la red.",
      incorrectos: ["A) Ambos EPO y PPO permiten ver especialistas sin referido.","C) Las primas varían según el plan específico.","D) Ambos están disponibles en sector público y privado."]
    },
    {
      nivel: 5,
      q: "Un empleado necesita libertad total para ver cualquier médico sin restricciones, incluyendo especialistas fuera de la red, sin referido. ¿Cuál plan se adapta MEJOR?",
      o: ["HMO — el más económico en primas","PPO — sin referido y permite atención dentro y fuera de la red","POS — permite salir de la red pero requiere referido","EPO — sin referido pero con red cerrada"],
      a: 1,
      trampa: "El POS parece atractivo pero requiere referido. El EPO no cubre fuera de la red. El HMO tiene ambas restricciones.",
      correcto: "PPO = la mayor flexibilidad. SIN referido Y con cobertura dentro Y fuera de la red. Es el único que elimina ambas restricciones.",
      incorrectos: ["A) El HMO requiere referido Y no cubre fuera de la red.","C) El POS requiere referido para acceder a la red.","D) El EPO no cubre fuera de la red excepto emergencias."]
    }
  ]
},

{
  id: "salud_002", area: "salud", concepto: "COBRA",
  variantes: [
    {
      nivel: 1,
      q: "COBRA permite continuar la cobertura de salud de grupo. ¿Por cuánto tiempo en la mayoría de los casos?",
      o: ["12 meses","18 meses","24 meses","36 meses"],
      a: 1,
      trampa: "36 meses es el período para eventos especiales. El período estándar es 18 meses.",
      correcto: "COBRA estándar = 18 MESES para la mayoría de los eventos calificantes (terminación de empleo, reducción de horas). El empleado paga 100% de la prima más hasta 2% de cargo administrativo.",
      incorrectos: ["A) 12 meses es insuficiente según COBRA.","C) 24 meses no es el período estándar de COBRA.","D) 36 meses aplica a eventos especiales como divorcio o muerte del empleado cubierto."]
    },
    {
      nivel: 2,
      q: "COBRA aplica a empleadores con:",
      o: ["5 o más empleados","10 o más empleados","20 o más empleados","50 o más empleados"],
      a: 2,
      trampa: "La cifra de 50 empleados se confunde con la de COBRA — eso es ACA. COBRA es 20 o más.",
      correcto: "COBRA aplica a empleadores con 20 O MÁS empleados. Los empleadores más pequeños no están obligados por COBRA federal.",
      incorrectos: ["A) 5 empleados es demasiado pequeño para el umbral de COBRA.","B) 10 empleados tampoco alcanza el umbral de COBRA.","D) 50 empleados es el umbral del mandato del empleador bajo la ACA, no de COBRA."]
    },
    {
      nivel: 3,
      q: "María se divorció de su esposo, quien tenía cobertura de salud de grupo. ¿Por cuánto tiempo puede María continuar esa cobertura bajo COBRA?",
      o: ["12 meses","18 meses","24 meses","36 meses"],
      a: 3,
      trampa: "El divorcio es un evento calificante ESPECIAL que otorga 36 meses, no los 18 meses estándar.",
      correcto: "El divorcio es un evento calificante ESPECIAL bajo COBRA que otorga 36 MESES de continuación de cobertura al ex-cónyuge.",
      incorrectos: ["A) 12 meses no es el período de COBRA para divorcio.","B) 18 meses es para terminación de empleo, no para divorcio.","C) 24 meses no corresponde a ningún período estándar de COBRA."]
    },
    {
      nivel: 4,
      q: "¿Cuánto paga el empleado por la cobertura COBRA?",
      o: ["Solo la porción que pagaba como empleado activo","El 75% de la prima total","Hasta el 102% de la prima total (100% + hasta 2% de cargo administrativo)","La prima la paga el empleador durante los primeros 6 meses"],
      a: 2,
      trampa: "El empleado bajo COBRA paga MÁS de lo que pagaba activo porque ahora cubre también la parte del empleador.",
      correcto: "Bajo COBRA, el empleado puede pagar hasta el 102% de la prima total: parte del empleado + parte del empleador + hasta 2% de cargo administrativo.",
      incorrectos: ["A) El empleado bajo COBRA paga el 100% + administrativo, no solo su porción anterior.","B) El 75% no corresponde al mecanismo de costo de COBRA.","D) El empleador no paga nada durante COBRA."]
    },
    {
      nivel: 5,
      q: "Un empleado pierde su empleo el 1 de marzo. Su cobertura de grupo termina el 31 de marzo. ¿Hasta cuándo tiene para elegir cobertura COBRA?",
      o: ["30 días desde la terminación del empleo","30 días desde que terminó la cobertura","60 días desde que recibe la notificación de sus derechos COBRA","90 días desde la terminación del empleo"],
      a: 2,
      trampa: "El período de elección de COBRA está vinculado a la NOTIFICACIÓN — no a la terminación del empleo.",
      correcto: "El empleado tiene 60 DÍAS desde que recibe la notificación de sus derechos COBRA para elegir la cobertura.",
      incorrectos: ["A) El período de elección es 60 días, no 30.","B) El plazo se cuenta desde la NOTIFICACIÓN, no solo desde el fin de la cobertura.","D) 90 días excede el período de elección de COBRA."]
    }
  ]
},

// ════════════════════════════════════════════
// ÁREA 6 — CONCEPTOS GENERALES
// ════════════════════════════════════════════

{
  id: "gen_001", area: "generales", concepto: "Características del Contrato de Seguro",
  variantes: [
    {
      nivel: 1,
      q: "El contrato de seguro es 'aleatorio' porque:",
      o: ["Puede cancelarse en cualquier momento por cualquiera de las partes","Las cantidades que intercambian las partes son desiguales e inciertas","Solo la aseguradora tiene obligaciones legales exigibles","Los términos son redactados exclusivamente por la aseguradora"],
      a: 1,
      trampa: "Confundir 'aleatorio' con 'unilateral' o 'de adhesión'.",
      correcto: "Aleatorio = las cantidades intercambiadas son desiguales e inciertas. El asegurado puede pagar $500 y cobrar $500,000 — o pagar durante 40 años y no cobrar nada.",
      incorrectos: ["A) Eso describe un contrato cancelable, no aleatorio.","C) Eso describe el contrato unilateral.","D) Eso describe el contrato de adhesión."]
    },
    {
      nivel: 2,
      q: "Un contrato de seguro es 'unilateral' porque:",
      o: ["Solo el asegurado hace promesas en el contrato","Solo la aseguradora hace una promesa legalmente exigible — pagar beneficios al ocurrir el evento asegurado","Ambas partes tienen obligaciones iguales y recíprocas","El contrato puede ser modificado unilateralmente por la aseguradora"],
      a: 1,
      trampa: "Parece que ambas partes tienen obligaciones. Pero solo LA ASEGURADORA hace una promesa legal exigible.",
      correcto: "Unilateral = solo la ASEGURADORA hace una promesa legalmente exigible. El asegurado puede dejar de pagar las primas sin incumplir el contrato.",
      incorrectos: ["A) Es la aseguradora quien hace la promesa exigible, no el asegurado.","C) Eso sería un contrato bilateral.","D) La aseguradora no puede modificar unilateralmente los términos."]
    },
    {
      nivel: 3,
      q: "El contrato de seguro es 'de adhesión' porque:",
      o: ["El asegurado puede negociar libremente todos los términos","Los términos son redactados por la aseguradora y el asegurado solo puede aceptar o rechazar","Ambas partes redactan los términos en conjunto","El contrato se adhiere automáticamente a otro contrato existente"],
      a: 1,
      trampa: "En seguros, el asegurado 'se adhiere' a los términos preestablecidos — no negocia.",
      correcto: "Adhesión = la aseguradora redacta los términos y el asegurado solo puede ACEPTAR o RECHAZAR. Las ambigüedades se interpretan siempre a favor del asegurado.",
      incorrectos: ["A) El asegurado NO puede negociar términos individuales.","C) Los términos los redacta la aseguradora sola.","D) 'Adhesión' no significa que se adhiere a otro contrato."]
    },
    {
      nivel: 4,
      q: "¿Cuál de los siguientes principios establece que las ambigüedades en una póliza de seguro se interpretan a favor del asegurado?",
      o: ["Principio de indemnización","Regla contra proferentem (Contra Proferentem)","Principio de subrogación","Doctrina del estoppel"],
      a: 1,
      trampa: "El término 'contra proferentem' puede no ser familiar pero es el principio legal detrás de la interpretación de ambigüedades.",
      correcto: "Contra Proferentem = las ambigüedades en contratos de adhesión se interpretan en CONTRA del que redactó (aseguradora) y a FAVOR del asegurado.",
      incorrectos: ["A) El principio de indemnización establece que el seguro no puede generar ganancia.","C) La subrogación es el derecho de la aseguradora de demandar al tercero responsable.","D) El estoppel impide retractarse de un waiver previo."]
    },
    {
      nivel: 5,
      q: "Una póliza contiene una cláusula ambigua sobre si la muerte por aviación recreativa está cubierta. El asegurado muere en esa actividad. ¿Cómo resuelve un tribunal la ambigüedad?",
      o: ["A favor de la aseguradora — las exclusiones de aviación son estándar en la industria","A favor del asegurado — las ambigüedades en contratos de adhesión se resuelven contra quien redactó","Se requiere un panel de árbitros especializados","La ambigüedad invalida toda la póliza"],
      a: 1,
      trampa: "La costumbre de excluir aviación no resuelve la ambigüedad en el lenguaje específico.",
      correcto: "Las ambigüedades en contratos de adhesión siempre se resuelven a FAVOR del asegurado. La aseguradora redactó el contrato — si no fue clara, la interpretación favorece al asegurado.",
      incorrectos: ["A) La práctica de la industria no resuelve la ambigüedad del lenguaje específico.","C) Las ambigüedades contractuales tienen reglas de interpretación establecidas.","D) La ambigüedad no invalida la póliza — determina cómo se interpreta esa cláusula."]
    }
  ]
}

]; // fin PK_CONCEPTOS

// ============================================================
// Exportar para uso del motor principal
// ============================================================
if (typeof module !== 'undefined') module.exports = { PK_CONCEPTOS, PK_AREAS, PK_VERSION };
