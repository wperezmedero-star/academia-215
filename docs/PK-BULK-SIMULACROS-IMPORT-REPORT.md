# Importación masiva de simulacros — reporte de extracción

Fecha: 2026-07-15
Rama: `agent/fase-1-arquitectura-adaptativa`

## Archivos procesados

- Bloque 1: 70 preguntas / 70 claves detectadas
- Bloque 2: 70 preguntas / 70 claves detectadas
- Bloque 3: 70 preguntas / 70 claves detectadas
- Bloque 4: 70 preguntas / 70 claves detectadas
- Bloque 5: 70 preguntas / 70 claves detectadas
- Bloque 6: 70 preguntas / 70 claves detectadas
- Examen final: 100 preguntas / 100 claves detectadas

## Total

- Preguntas extraídas: **520**
- Claves detectadas: **520**
- Desajustes pregunta/clave: **0**

## Estado de integración

La extracción fue validada estructuralmente, pero los 520 registros aún no se consideran cargados en el banco de la app hasta que el archivo de datos sea escrito y verificado en el repositorio. `pk-bulk-simulacros-520.js` permanece como contenedor válido con `loaded: 0` para evitar afirmar una importación incompleta.

## Política

1. Escribir los registros en archivos de datos manejables por lote.
2. Ejecutar deduplicación contra banco viejo y Nueva Generación.
3. Mezclar el resultado deduplicado en el banco total.
4. Mantener el banco aprobado como subconjunto de mayor confianza.
