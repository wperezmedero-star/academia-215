# Pearson Killer — Manifiesto de integración de preguntas aprobadas

**Rama de trabajo:** `agent/fase-1-arquitectura-adaptativa`

## Propósito

Este manifiesto es la fuente de control para integrar preguntas aprobadas sin confundir tres estados distintos:

1. **Aprobada como referencia de calidad**: pasó auditoría humana/estricta.
2. **Registrada formalmente**: tiene un identificador exacto reconciliado y estado de revisión explícito.
3. **Activa en modo examen**: además pasa por el gate `category === killer_ready && human_review_status === approved`.

Una pregunta no debe considerarse activa en examen solo porque aparezca aprobada en un archivo de auditoría.

## Conteo histórico de referencias aprobadas

Total reportado hasta el Lote 16: **98 preguntas aprobadas como referencias de calidad**.

### Base anterior a la recalibración Pearson Real

- Lotes 01–06: **56 aprobadas** en total.
- Estas 56 conservan valor como referencias técnicas históricas, pero deben reconciliarse con el estándar Pearson Real antes de activarlas automáticamente en examen.

### Calibración y expansión posterior

- Lote 07: 4 aprobadas — 001, 004, 005, 007.
- Lote 08: 5 aprobadas — 002, 003, 004, 005, 008.
- Lote 09: 3 aprobadas — 001, 002, 003.
- Lote 10: 6 aprobadas — 001, 002, 003, 004, 005, 006.
- Lote 11: 3 aprobadas — 001, 002, 006.
- Lote 12: 4 aprobadas — 001, 002, 003, 006.
- Lote 13: 2 aprobadas — 001, 005.
- Lote 14: 5 aprobadas — 001, 003, 004, 005, 006.
- Lote 15: 5 aprobadas — 001, 003, 004, 005, 006.
- Lote 16: 5 aprobadas — 001, 002, 003, 004, 006.

Subtotal Lotes 07–16: **42 aprobadas**.

**56 + 42 = 98 referencias aprobadas.**

## Gate formal existente

`pk-schema.js` define correctamente la regla conceptual:

```text
puedeEntrarAExamen(category, human_review_status)
= category === killer_ready
  && human_review_status === approved
```

Sin embargo, la arquitectura actual todavía no conecta automáticamente todos los lotes auditados con ese gate.

## Trabajo pendiente para integración real

### Paso A — Reconciliar IDs exactos

Para cada pregunta aprobada:

- confirmar el `id` exacto del archivo fuente;
- evitar inferir IDs por nombre de lote;
- detectar duplicados o IDs inconsistentes;
- producir un registro machine-readable de aprobaciones.

### Paso B — Metadatos formales

Cada pregunta que vaya a examen debe terminar con metadatos equivalentes a:

```js
category: "killer_ready",
human_review_status: "approved"
```

El normalizador y/o capa de integración debe preservar una aprobación humana explícita; el auditor automático nunca debe autoaprobar.

### Paso C — Cargar los lotes nuevos

Actualmente `pearson-killer.html` carga el piloto de 15 y el banco anterior, pero no todos los lotes 07–16 como banco formal de examen. Deben cargarse de forma explícita y controlada.

### Paso D — Pool aprobado

Crear un pool separado, por ejemplo `PK_APPROVED_EXAM_POOL`, construido únicamente con preguntas que:

1. existan y sean estructuralmente válidas;
2. tengan ID exacto registrado;
3. tengan `category: killer_ready`;
4. tengan `human_review_status: approved`;
5. pasen `PK_SCHEMA.puedeEntrarAExamen(...)`.

### Paso E — UI y modo de ejecución

Agregar un modo diferenciado para probar el banco aprobado sin mezclarlo silenciosamente con las 545 antiguas.

## Regla de seguridad

Hasta completar A–E:

- **98** significa referencias aprobadas históricamente;
- **no** significa 98 preguntas ya activas formalmente en modo examen;
- el banco de 545 permanece separado de esta afirmación de calidad;
- no se toca `main` durante esta integración.
