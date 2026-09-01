# Auditoría humana breve — PK Killer Batch 02

Rama: `agent/fase-1-arquitectura-adaptativa`
Archivo auditado: `pk-data-killer-batch-02.js`

## Resultado

### Aprobadas como patrón Killer

- `killer_batch02_002` — PPO: deducible separado fuera de red
- `killer_batch02_003` — EPO: instalación no participante en atención programada
- `killer_batch02_004` — POS: PCP, red y auto-referencia
- `killer_batch02_005` — HDHP: cobertura de medicamentos antes del deducible
- `killer_batch02_006` — HSA: cambio de cobertura a mitad de año
- `killer_batch02_007` — HSA: uso del saldo después de perder elegibilidad para aportar
- `killer_batch02_008` — FSA: disponibilidad uniforme
- `killer_batch02_009` — HRA: reembolso y propiedad de fondos

### Mantener pending

- `killer_batch02_001` — La distinción entre urgencia y emergencia fuera del área depende demasiado del diseño específico del HMO. La pregunta es útil para entrenamiento, pero todavía no debe servir como patrón definitivo de examen.
- `killer_batch02_010` — La coordinación entre HRA y cobertura del cónyuge está formulada de manera demasiado general. Sin una regla contractual concreta, la respuesta correcta descansa principalmente en “depende del plan”, lo que reduce la fuerza de una única mejor respuesta.

## Conclusión

El lote 02 queda cerrado con 8 preguntas aprobadas como patrón Killer y 2 preguntas pendientes. No se requiere otra ronda general de reescritura. Las dos pendientes pueden corregirse más adelante cuando se definan escenarios contractuales más específicos.
