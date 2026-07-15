# Auditoría humana final — PK Killer Pilot

Rama: `agent/fase-1-arquitectura-adaptativa`
Archivo auditado: `pk-data-killer-pilot.js`

Criterios usados, según `pk-schema.js`:
1. principio oculto;
2. al menos dos respuestas tentadoras;
3. una sola mejor respuesta defendible;
4. mezcla de información relevante e irrelevante;
5. distractor condicional;
6. ausencia de ambigüedad;
7. escenario profesional realista;
8. explicación individual de las cuatro opciones.

## Resultado general

Ninguna pregunta se marca todavía como `approved` para modo examen. Las 15 permanecen `pending` hasta una segunda calibración de distractores y realismo. Técnicamente, el lote es utilizable en modo de entrenamiento Killer; esta auditoría evita confundir corrección técnica con aprobación humana definitiva para examen.

## Revisión una por una

| ID | Estado | Fortalezas | Motivo principal para mantener `pending` |
|---|---|---|---|
| 001 | pending | Principio oculto, una sola mejor respuesta, sin ambigüedad | Solo un distractor fuerte; C y D son demasiado artificiales. Falta información irrelevante convincente. |
| 002 | pending | Comparación más exigente, buen distractor condicional | La opción correcta sigue explicando demasiado el concepto; C y D son débiles. |
| 003 | pending | Escenario realista, precisión legal, una sola mejor respuesta | A, C y D usan absolutos evidentes; falta un segundo distractor verdaderamente tentador. |
| 004 | pending | Distingue referido de autorización previa | A es tentadora, pero C y D son demasiado fáciles; falta información irrelevante. |
| 005 | pending | Buena comparación EPO/HMO/PPO | Tres distractores contienen absolutos o contradicciones obvias; baja dificultad real. |
| 006 | pending | Concepto POS correcto y claro | La respuesta correcta es mucho más completa que las demás y delata la solución. |
| 007 | pending | Buen ejercicio de clasificación múltiple | La opción incorrecta usa `necesariamente`, demasiado visible como trampa. |
| 008 | pending | Excepción HDHP bien delimitada | A y D son extremos evidentes; solo una alternativa compite seriamente. |
| 009 | pending | Regla HSA/FSA técnicamente bien enfocada | C y D son distractores numéricos débiles; falta segundo distractor plausible. |
| 010 | pending | Fecha efectiva de Medicare correctamente introducida | La respuesta correcta es demasiado larga y especializada frente a distractores breves y obvios. |
| 011 | pending | Excelente precisión sobre HSA/FSA y reclamaciones | La opción correcta es claramente más larga y sofisticada; patrón de longitud revela la clave. |
| 012 | pending | Regla de gracia/carryover correctamente planteada | Las otras tres opciones son demasiado absolutas o irrelevantes. |
| 013 | pending | Buen matiz de elegibilidad mensual | La correcta es mucho más larga y prudente; las demás son descartables por monto/absoluto. |
| 014 | pending | Diferencia HRA/HSA correctamente matizada | A, C y D son falsedades demasiado evidentes; falta competencia real entre dos respuestas. |
| 015 | pending | Compatibilidad HRA/HSA técnicamente correcta | La opción correcta contiene toda la doctrina; las otras tres son absolutos fáciles de eliminar. |

## Hallazgos transversales

1. **Patrón de longitud**: en muchas preguntas, la respuesta correcta es la opción más larga, matizada y jurídicamente prudente.
2. **Distractores absolutos**: `siempre`, `nunca`, `automáticamente`, `necesariamente` aparecen con demasiada frecuencia solo en respuestas incorrectas, creando una pista de examen.
3. **Segundo distractor insuficiente**: varias preguntas tienen una sola respuesta tentadora y dos opciones de descarte inmediato.
4. **Información irrelevante insuficiente**: el lote es limpio técnicamente, pero Pearson suele obligar a separar datos decisivos de datos secundarios plausibles.
5. **Realismo desigual**: los escenarios son correctos, pero algunos todavía suenan a explicación didáctica más que a situación profesional natural.

## Recomendación de Fase 3

Reescribir primero 001, 003, 005, 006, 009, 010, 011, 013 y 015 con estas reglas:
- mantener la precisión técnica actual;
- igualar longitud y tono entre las cuatro opciones;
- crear dos distractores plausibles basados en reglas vecinas reales;
- evitar que los absolutos aparezcan solo en opciones incorrectas;
- introducir uno o dos datos irrelevantes plausibles por escenario;
- no añadir `human_review_status: approved` hasta repetir esta auditoría.

Después reescribir 002, 004, 007, 008, 012 y 014 con el mismo estándar.

## Conclusión

El lote piloto ya es técnicamente más seguro y funciona como entrenamiento intensivo, pero todavía no debe usarse como plantilla definitiva para generar cientos de preguntas ni como banco `exam` aprobado. La prioridad siguiente es mejorar la calidad de los distractores sin reintroducir ambigüedad técnica.
