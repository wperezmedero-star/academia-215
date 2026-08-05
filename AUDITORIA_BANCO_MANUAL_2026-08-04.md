# Auditoría del banco de preguntas contra el Manual 2-15

Fecha de cierre: 4 de agosto de 2026.

## Alcance

- Manual revisado: `2024-215-Manual-de-Estudio-de-Seguros-de-Vida-Salud-y-Anualidades-1(5).pdf`.
- Extensión comprobada: 441 páginas, con texto extraíble y páginas renderizadas legibles.
- Banco Pearson Killer activo: 1,111 preguntas únicas.
- Banco propio de Academia: 421 preguntas.
- Banco unificado disponible para simulacros: 1,529 preguntas únicas.
- Fuentes aprobadas cargadas: 28 de 28; preguntas importadas aprobadas: 532.

## Método

1. Se extrajo el texto completo del PDF y se verificaron visualmente páginas de muestra.
2. Se cargó el banco mediante el mismo manifiesto y runtime que usa la aplicación.
3. Cada una de las 1,111 preguntas se comparó con las páginas más pertinentes del manual mediante recuperación de texto y revisión de cobertura de respuesta, números y opciones.
4. Se revisaron manualmente las 29 alertas de menor evidencia textual resultantes después de las correcciones.
5. Los hechos que pueden cambiar con el tiempo se contrastaron con fuentes oficiales actuales. Cuando el manual quedó desactualizado, prevaleció la norma oficial vigente.
6. Se ejecutó la rotación real de simulacros para comprobar cantidad, unicidad y ausencia de repeticiones antes de agotar el banco.

La coincidencia automática sirve para localizar y priorizar riesgos; no se trató como prueba suficiente de corrección. Las alertas fueron revisadas antes del cierre.

## Correcciones materiales realizadas

- Incontestabilidad de vida en Florida: se eliminó la afirmación incorrecta de que existe una excepción general por fraude después de dos años. La falta de pago de primas es una excepción expresa; también pueden exceptuarse coberturas adicionales específicas si el contrato lo dispone.
- Anualidades en Florida: se reemplazó la regla obsoleta que limitaba el estándar reforzado a clientes de 65 años o más. El estándar vigente de mejor interés aplica a todo consumidor cuando existe recomendación o venta.
- Licencia 2-15: se aclaró que los productos variables requieren además la autorización o registro de valores correspondiente.
- Licencias y CE: se corrigió la idea de una renovación bienal de la licencia. La licencia es perpetua mientras se mantenga correctamente nombrada; el ciclo general de CE para 2-15 es de 24 horas, con 4 horas de actualización de Ley y Ética 5-215 y 20 electivas, sujeto a reducciones aplicables.
- Negocio controlado: se sustituyó el rango impreciso de 25–50% por la regla de que el negocio similar para terceros debe ser, por lo menos, igual al negocio controlado.
- Medigap: el período federal de inscripción abierta se expresa correctamente como seis meses desde el primer mes en que la persona tiene Parte B y 65 años o más.
- Cifras de retiro: se eliminaron preguntas ancladas a límites monetarios de 2024 y se conservaron conceptos que no caducan con la actualización anual del IRS.
- Salud: se reemplazó una regla general no sustentada de aviso de cancelación de 45 días por la comparación correcta entre garantizada renovable y no cancelable.
- Ambulancia terrestre: se corrigió la pregunta para dejar claro que la No Surprises Act federal no cubre generalmente esos servicios; deben revisarse las protecciones estatales y el plan.
- Mini-COBRA: se confirmó la existencia de la Florida Health Insurance Coverage Continuation Act para pequeños empleadores bajo sus condiciones.
- Se eliminaron todas las notas internas visibles de “requiere verificación”.

## Fuentes oficiales actuales usadas para excepciones o actualización

- Florida DFS, Continuing Education: https://www.myfloridacfo.com/division/agents/licensing/agents-and-adjusters/continuing-education
- Florida DFS, Licensing FAQ: https://www.myfloridacfo.com/division/agents/licensing/faq
- Florida Statutes 626.431: https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699%2F0626%2FSections%2F0626.431.html
- Florida Statutes 627.455: https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699%2F0627%2F0627.html
- Florida Statutes 627.4554: https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699%2F0627%2FSections%2F0627.4554.html
- Florida Statutes 627.6692: https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699%2F0627%2FSections%2F0627.6692.html
- Medicare.gov, Medigap open enrollment: https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy
- IRS, Required minimum distributions: https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs
- Florida KidCare, 2026 income guidelines: https://www.floridakidcare.org/docs/cost/2026-Income-Guidelines.pdf
- CMS, No Surprises Act protections: https://www.cms.gov/files/document/nsa-keyprotections.pdf

## Resultado de validación

El comando `node scripts/audit-question-bank.mjs` termina sin fallos y comprueba:

- 1,111 de 1,111 preguntas Pearson, todas únicas.
- 1,529 preguntas únicas en el banco unificado.
- 28 de 28 fuentes aprobadas cargadas.
- Primeros 10 simulacros de 150 preguntas sin repetición entre sesiones.
- Recorrido completo del banco durante el simulacro 11, antes de iniciar un ciclo nuevo.
- Cero respuestas con notas internas de verificación.
- Cero preguntas Pearson ancladas al año 2024.
- Cero reglas obsoletas detectadas sobre CE, renovación, fraude posterior a incontestabilidad o negocio controlado.

El script `scripts/audit-manual-content.mjs` deja reproducible el cruce de las 1,111 preguntas con el manual para auditorías posteriores.
