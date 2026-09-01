# Calibración 001 — Preauditor celoso vs auditoría humana

## Objetivo

Validar `pk-strict-preauditor.js` contra un conjunto supervisado de 10 preguntas cuya referencia humana ya está fijada.

## Verdad de referencia humana

Aprobadas estrictas:
- `migration001_life_001`
- `migration001_life_003`
- `migration001_life_006`
- `migration001_life_008`
- `migration001_life_010`

Pendientes / no deben pasar automáticamente a revisión final como candidatas fuertes:
- `migration001_life_002`
- `migration001_life_004`
- `migration001_life_005`
- `migration001_life_007`
- `migration001_life_009`

## Hallazgo de calibración

La segunda capa debe optimizarse con una prioridad conservadora:

1. Un falso positivo es peor que un falso negativo.
2. Una pregunta definicional disfrazada de escenario debe volver a reescritura.
3. Si solo una opción es realmente plausible, la pregunta no pasa.
4. Si la respuesta correcta destaca por tono, matiz o longitud, la pregunta no pasa.
5. Si dos distractores contienen absolutos descartables, la pregunta no pasa.
6. Si el escenario no obliga a ponderar al menos dos hechos o prioridades, la pregunta no pasa.

## Ajuste recomendado

Para el uso en migración masiva de las 545 preguntas, una candidata solo debe avanzar si:

- supera el preauditor estructural;
- supera el preauditor celoso;
- no tiene bloqueadores críticos;
- alcanza el umbral estricto;
- y después pasa revisión humana.

La calibración supervisada debe seguir usando esta Corrida 001 como conjunto de referencia para medir falsos positivos y falsos negativos después de cada ajuste del algoritmo.

## Política de producción

Ningún resultado del preauditor equivale a `human_review_status: "approved"`.

El resultado máximo automático es:

`candidate_for_strict_human_review`

La aprobación final continúa siendo humana y explícita.
