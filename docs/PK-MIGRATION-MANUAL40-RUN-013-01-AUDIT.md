# Auditoría editorial — Run 013 — preguntas 01–20

Fecha: 2026-07-15
Rama: `agent/fase-1-arquitectura-adaptativa`
Fuente auditada: `pk-migration-manual40-run-013-candidates-01.js`

## Estándar aplicado

- Premium: 80–100
- Aprobada: 70–79
- Reescritura: <70
- Bloqueadores críticos: ambigüedad/estructura inválida, reconocimiento directo o definición disfrazada, menos de 2 distractores plausibles.

## Resultado

- Premium: 3
- Aprobadas: 5
- Reescritura: 11
- Rechazada/estructura inválida: 1
- Supervivencia provisional para revisión final: 8/20

> Esta auditoría NO autoaprueba ni integra preguntas al examen. Todas permanecen `human_review_status: pending` hasta aprobación humana final y registro machine-readable.

## Clasificación por ID

| ID | Estado | Motivo principal |
|---|---|---|
| manual40_r013_001 | Reescritura | Reconocimiento demasiado directo de revocable vs primario; distractores poco competitivos. |
| manual40_r013_002 | Reescritura | Definición prácticamente explícita de irrevocable. |
| manual40_r013_003 | Reescritura | Reconocimiento directo de per stirpes con pistas muy evidentes. |
| manual40_r013_004 | Aprobada | Escenario breve pero aplicado; una sola mejor respuesta y distractor condicional útil. |
| manual40_r013_005 | Aprobada | Buena discriminación aseguradora propia vs tercero; puede reforzarse con más ruido secundario. |
| manual40_r013_006 | Aprobada | Escenario aplicado y estructura correcta, aunque todavía algo pedagógico. |
| manual40_r013_007 | Aprobada | Distingue origen de intención STOLI vs viática; distractores razonablemente plausibles. |
| manual40_r013_008 | Premium | Buena trampa de secuencia: primer error de proceso vs producto específico. |
| manual40_r013_009 | Premium | Escenario de liquidez/idoneidad con conflicto real y consentimiento como distractor plausible. |
| manual40_r013_010 | Reescritura | Pregunta casi declarativa; respuesta correcta demasiado obvia frente a distractores débiles. |
| manual40_r013_011 | Reescritura | Reconocimiento directo fija vs variable; insuficiente ocultamiento del principio. |
| `vida` | Rechazada | Estructura inválida: ID incorrecto, falta `manual40_r013_012` y falta `area`. No puede entrar al pipeline así. |
| manual40_r013_013 | Reescritura | Reconocimiento directo de dos etiquetas de beneficiario. |
| manual40_r013_014 | Reescritura | Comparación directa viática vs STOLI; principio demasiado expuesto. |
| manual40_r013_015 | Aprobada | Buena secuencia profesional: conocer productos no sustituye conocer al cliente. |
| manual40_r013_016 | Reescritura | Reconocimiento directo de licencia de valores; necesita escenario más real y distractores condicionales más fuertes. |
| manual40_r013_017 | Reescritura | Definición directa de beneficiario contingente. |
| manual40_r013_018 | Premium | Aplicación numérica/conceptual del adelanto y remanente; evita tratarlo como pago extra. |
| manual40_r013_019 | Aprobada | Buen escenario contra el atajo de usar edad como única regla de suitability. |
| manual40_r013_020 | Reescritura | Principio válido, pero pregunta demasiado general; necesita una acción concreta sobre préstamo/cesión/cambio de beneficiario. |

## Bloque de supervivientes provisionales

- manual40_r013_004
- manual40_r013_005
- manual40_r013_006
- manual40_r013_007
- manual40_r013_008
- manual40_r013_009
- manual40_r013_015
- manual40_r013_018
- manual40_r013_019

Nota: el conteo de la tabla produce 9 supervivientes editoriales si se incluye `manual40_r013_019`. Para conservar consistencia, el resumen correcto es **3 Premium + 6 Aprobadas = 9/20 supervivientes provisionales**, 10 reescrituras y 1 estructura inválida.

## Corrección del resumen

- Premium: 3
- Aprobadas: 6
- Reescritura: 10
- Rechazada/estructura inválida: 1
- Supervivencia provisional: 9/20

## Acción siguiente

1. Corregir la estructura de la futura pregunta `manual40_r013_012` durante la reescritura, sin reutilizar el ID defectuoso `vida`.
2. Reescribir las 10 preguntas de reconocimiento directo antes de cualquier integración.
3. Producir las preguntas 21–40 del Run 013 y auditarlas inmediatamente después.
