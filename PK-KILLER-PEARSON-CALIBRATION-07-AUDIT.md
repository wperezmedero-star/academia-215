# Auditoría — Lote 07: Calibración Pearson Real

Rama: `agent/fase-1-arquitectura-adaptativa`
Archivo auditado: `pk-data-killer-pearson-calibration-07.js`
Estándar: `PK-PEARSON-REAL-CALIBRATION.md`

## Resultado

- Aprobadas: 4 de 8 (50%)
- Pendientes: 4 de 8 (50%)
- Umbral requerido para escalar: 80%
- Conclusión: NO escalar todavía. El patrón necesita otra ronda de endurecimiento.

## Aprobadas

### `killer_pr07_001` — APROBADA
Buen escenario de objetivo temporal y liquidez separada. La anualidad diferida funciona como regla vecina plausible y el caso obliga a priorizar la necesidad dominante.

### `killer_pr07_004` — APROBADA
La opción de vida individual es tentadora porque puede producir un pago mayor, pero no satisface la prioridad principal de continuidad para el cónyuge sobreviviente.

### `killer_pr07_005` — APROBADA
La comparación fiscal Tradicional/Roth genera un error de inversión conceptual real. El distractor principal es plausible para quien recuerda las características pero las intercambia.

### `killer_pr07_007` — APROBADA
El rollover indirecto es una alternativa real y parcialmente correcta, pero la transferencia directa responde mejor a la prioridad explícita de evitar posesión y riesgos asociados.

## Pendientes

### `killer_pr07_002` — PENDING
Correcta técnicamente, pero demasiado definicional. La respuesta correcta destaca con facilidad porque los distractores invierten de forma muy marcada el riesgo de inversión.

### `killer_pr07_003` — PENDING
La distinción acumulación/anualización se reconoce casi por definición. Falta un segundo distractor realmente defendible y un escenario con una decisión más ambigua.

### `killer_pr07_006` — PENDING
La diferencia entre 401(k) e IRA es demasiado directa. Tres opciones son fácilmente descartables y no existe suficiente competencia entre dos respuestas plausibles.

### `killer_pr07_008` — PENDING
La respuesta correcta es demasiado prudente y general frente a distractores absolutos. Necesita un caso concreto con tipos de cuenta distintos y una regla vecina que compita de verdad.

## Diagnóstico del patrón

El nuevo estándar mejoró el lenguaje y eliminó parte de los distractores absurdos, pero todavía aparece un problema recurrente: varias preguntas siguen midiendo reconocimiento de definiciones en vez de selección entre reglas cercanas.

Para la siguiente calibración:

1. Evitar preguntas que puedan resolverse solo por identificar la definición del producto.
2. Incluir al menos dos opciones que sean verdaderas en otros contextos cercanos.
3. Hacer que la respuesta correcta no sea sistemáticamente la más prudente, larga o matizada.
4. Usar escenarios donde una opción sea correcta en general, pero no sea la mejor para la prioridad específica del caso.
5. Reducir distractores con absolutos evidentes como `siempre`, `nunca`, `exactamente` o `automáticamente`, salvo que la respuesta correcta también tenga una estructura lingüística comparable.

## Decisión

No se autoriza producción masiva todavía. Se requiere un Lote 08 de recalibración con 8 preguntas nuevas y el mismo umbral mínimo de 80% antes de volver a escalar.
