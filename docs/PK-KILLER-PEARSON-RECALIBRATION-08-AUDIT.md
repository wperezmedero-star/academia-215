# Auditoría estricta — Lote 08 Pearson Real

Rama: `agent/fase-1-arquitectura-adaptativa`
Archivo auditado: `pk-data-killer-pearson-recalibration-08.js`
Estándar: `PK-PEARSON-REAL-CALIBRATION.md`

## Resultado

- Aprobadas: 5/8 (62.5%)
- Pending: 3/8
- Umbral objetivo para volver a escalar: 7/8 (87.5% en un lote de 8)
- Conclusión: el patrón mejora, pero todavía no alcanza el estándar de calibración requerido.

## Aprobadas

- `killer_pr08_002` — 1035 exchange: buen choque entre diferimiento fiscal y acceso personal al efectivo; dos errores cercanos al proceso real.
- `killer_pr08_003` — life income vs period certain: la alternativa de vida pura es una regla vecina auténtica y compite con la prioridad de legado.
- `killer_pr08_004` — Traditional vs Roth: la deducción actual compite de forma real con la prioridad fiscal futura.
- `killer_pr08_005` — direct vs indirect rollover: el mecanismo indirecto es real y suficientemente tentador frente a la prioridad operacional del escenario.
- `killer_pr08_008` — variable annuity suitability: mezcla datos favorables y desfavorables, obligando a ponderar idoneidad en vez de identificar una definición.

## Pending

- `killer_pr08_001` — retiro parcial vs anualización: la correcta domina demasiado; las opciones C y D son débiles y reducen la competencia real.
- `killer_pr08_006` — 401(k) loan vs hardship distribution: B es plausible, pero C y D son demasiado fáciles de descartar; falta un segundo distractor profesionalmente creíble.
- `killer_pr08_007` — RMD: sigue siendo principalmente una pregunta de principio general; B, C y D no compiten suficientemente con la respuesta correcta.

## Diagnóstico de calibración

El lote 08 mejora respecto del lote 07 porque varias preguntas ya incluyen una regla vecina auténtica que puede atraer a un candidato preparado. Sin embargo, todavía aparece el patrón de una respuesta muy completa frente a dos alternativas claramente inferiores. Para alcanzar una sensación más cercana a Pearson, el siguiente lote debe exigir:

1. Al menos dos distractores basados en reglas verdaderas del mismo subtema.
2. Ninguna opción absurda o estructuralmente imposible salvo que el tipo de pregunta lo justifique.
3. Longitud y tono similares entre las cuatro respuestas.
4. La respuesta correcta no debe ser sistemáticamente la más matizada o la única con lenguaje condicional.
5. La diferencia final debe depender de una palabra, prioridad o dato decisivo del escenario.

## Decisión

No volver a producción masiva todavía. Crear un Lote 09 de microcalibración con 6 preguntas, concentrado exclusivamente en calidad de distractores. Umbral sugerido: 5/6 aprobadas como mínimo antes de escalar.
