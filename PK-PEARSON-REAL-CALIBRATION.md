# Pearson Killer — Estándar de calibración “Pearson real”

Estado: activo para todos los lotes nuevos y para futuras recalibraciones.
Rama de trabajo: `agent/fase-1-arquitectura-adaptativa`

## Decisión

Se pausa temporalmente el escalado masivo del banco. El objetivo deja de ser acumular preguntas y pasa a ser reproducir mejor la dificultad percibida del examen Pearson VUE en español.

## Regla principal

Una pregunta no se considera “Pearson real” solo porque sea técnicamente correcta. Debe obligar al candidato a distinguir la mejor respuesta entre alternativas cercanas y plausibles.

## Criterios obligatorios

1. **Principio oculto**
   - El enunciado no debe nombrar directamente la regla que se está examinando.

2. **Dos distractores plausibles como mínimo**
   - Al menos dos respuestas incorrectas deben derivar de reglas reales, conceptos vecinos o condiciones parcialmente aplicables.
   - Se evitan distractores absurdos, ridículos o ajenos al tema.

3. **Una sola mejor respuesta**
   - Puede haber más de una opción parcialmente verdadera, pero solo una debe responder mejor al escenario exacto.

4. **Longitud y tono equilibrados**
   - La respuesta correcta no debe destacar por ser mucho más larga, prudente, técnica o completa.
   - Las cuatro opciones deben sonar escritas por la misma persona y con un grado parecido de precisión.

5. **Evitar absolutos como pista**
   - Palabras como “siempre”, “nunca”, “automáticamente”, “únicamente” y “sin excepción” no deben aparecer casi exclusivamente en respuestas incorrectas.
   - Si se usan, deben obedecer al contenido real, no funcionar como señal de descarte.

6. **Reglas vecinas como distractores**
   - Priorizar errores de transferencia: aplicar correctamente una regla, pero al producto, etapa, persona, plazo o situación equivocada.

7. **Información secundaria realista**
   - Incluir uno o dos datos plausibles que no sean decisivos, sin convertir el escenario en ruido artificial.

8. **Palabra decisiva**
   - Usar con naturalidad términos como “MEJOR”, “MÁS APROPIADA”, “PRIMERO”, “PRINCIPALMENTE”, “EXCEPTO” o “MENOS CORRECTA” cuando la pregunta realmente dependa de priorización o comparación.

9. **Sin respuesta ‘profesor’**
   - La opción correcta no debe sonar como una mini explicación de manual mientras las demás son frases simples.

10. **Explicación posterior completa**
   - Después de responder, la app sí puede explicar con detalle por qué la correcta es la mejor y por qué cada distractor resulta tentador pero falla.

## Criterio de aprobación reforzado

Una pregunta queda `approved` solo cuando cumple todos los requisitos siguientes:

- precisión técnica suficiente;
- sin ambigüedad material;
- al menos dos distractores realmente tentadores;
- correcta no identificable por longitud o tono;
- ninguna pista sistemática por absolutos;
- escenario realista;
- principio no revelado en el enunciado;
- explicación individual de las cuatro opciones.

## Control de calidad por lote

Para cada lote nuevo:

1. Crear entre 8 y 12 preguntas.
2. Revisar contenido técnico.
3. Revisar patrón de longitud y lenguaje.
4. Contar cuántos distractores plausibles tiene cada pregunta.
5. Reescribir solo las que fallen.
6. Aprobar únicamente después de la segunda lectura.

## Regla de escalado

No crear nuevos lotes de forma continua si el último lote no alcanza al menos 80% de aprobación bajo este estándar reforzado.

## Objetivo final

El banco debe entrenar al usuario para reconocer:

- sinónimos inesperados;
- reglas vecinas;
- condiciones parciales;
- información irrelevante plausible;
- opciones que parecen correctas a primera lectura;
- diferencias pequeñas entre una respuesta correcta y la mejor respuesta.

La meta no es imitar preguntas reales ni memorizar formularios. La meta es reproducir el tipo de razonamiento, ambigüedad controlada y presión de lectura que el usuario experimentó en Pearson VUE.
