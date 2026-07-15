# PK Migration Manual20 — Run 001 — Strict Audit

## Alcance

Revisión humana estricta de 20 candidatas producidas en:

- `pk-migration-manual20-run-001-candidates-01.js`
- `pk-migration-manual20-run-001-candidates-02.js`

Esta revisión **no sustituye una ejecución real del preauditor en runtime** y **no autoaprueba** ninguna pregunta en el banco activo. Es una revisión editorial estricta basada en el estándar Pearson Killer validado.

## Criterio

Se exige:

1. principio oculto en un escenario;
2. al menos dos distractores plausibles;
3. una sola mejor respuesta;
4. detalles relevantes y secundarios;
5. distractor condicional real;
6. ausencia de ambigüedad;
7. escenario profesional realista;
8. explicación de las cuatro opciones;
9. sin definición disfrazada;
10. sin pistas evidentes por longitud, tono o absolutos.

## Resultado

### Candidatas fuertes para revisión humana final

- `manual20_001`
- `manual20_003`
- `manual20_004`
- `manual20_006`
- `manual20_008`
- `manual20_009`
- `manual20_010`
- `manual20_011`
- `manual20_013`
- `manual20_014`
- `manual20_016`
- `manual20_017`
- `manual20_019`
- `manual20_020`

**14 de 20** pasan esta revisión editorial estricta como candidatas fuertes.

### Reescritura antes de revisión final

#### `manual20_002`
El escenario sigue demasiado cerca de una identificación directa de ART. La frase “prima se recalculará conforme aumenta la edad” entrega casi por completo el concepto. Necesita ocultar el principio dentro de una comparación de necesidades y consecuencias.

#### `manual20_005`
Aunque el escenario es correcto, la respuesta se reconoce demasiado fácilmente por la ausencia de cash value. Requiere distractores más fuertes y una tensión adicional, por ejemplo una opción de ROP o conversión aún disponible.

#### `manual20_007`
El dato de madurez a edad 100 queda explícito en el propio escenario, por lo que mide interpretación de la consecuencia, no recuperación del principio. Puede servir como pregunta secundaria, pero no alcanza el estándar Killer más alto.

#### `manual20_012`
La combinación “tasa declarada + mínimo garantizado” aparece casi literalmente en el enunciado y conduce de forma directa a la respuesta.

#### `manual20_015`
La pregunta tipo EXCEPTO funciona técnicamente, pero la prima “fija de por vida y sin modificación” es demasiado visible como característica incompatible con UL. Falta mayor conflicto entre opciones plausibles.

#### `manual20_018`
La comparación con fondos de inversión es conceptualmente correcta, pero aún es una pregunta de reconocimiento directo disfrazada de conversación.

## Tasa editorial estricta

- Total: **20**
- Candidatas fuertes: **14**
- Reescritura: **6**
- Rechazo total: **0**
- Tasa inicial de candidatas fuertes: **70%**

## Lectura de calidad

El lote muestra una mejora clara respecto a las primeras corridas de migración: la mayoría de las preguntas tiene escenario real, dos distractores plausibles y una condición alternativa útil. Sin embargo, seis ítems todavía revelan demasiado el concepto en el propio enunciado. El siguiente lote debe reforzar el prefiltrado previo a escritura para recuperar la meta de al menos 80% de supervivencia estricta.

## Estado

Todas permanecen con:

`human_review_status: "pending"`

Ninguna se incorpora al examen activo por este documento.
