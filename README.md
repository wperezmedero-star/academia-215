# Academia 2-15 Florida

Aplicación web bilingüe de preparación independiente para la licencia Florida 2-15 de vida, salud y anualidades. Incluye lecciones, cuestionarios, simulacros, refuerzo de errores y el entrenamiento **Modo Trampa**.

## Despliegue

El repositorio está conectado a Vercel. Cada propuesta de cambio genera una vista previa y los cambios integrados en `main` se publican automáticamente en producción.

- Aplicación pública: <https://academia-215.vercel.app/>
- Página principal: `index.html`
- Configuración de Vercel: `vercel.json`
- Configuración de la aplicación instalable: `manifest.json`

## Organización

- `/` — aplicación web, estilos, scripts y bancos de contenido activos.
- `/api` — funciones serverless usadas por las herramientas internas de producción.
- `/docs` — auditorías, informes de integración, calibraciones y notas de verificación.
- `/scripts` — utilidades de auditoría y mantenimiento.

Los archivos `pk-data-*.js` y `pk-approved-*.js` forman parte del banco interno y sus referencias no deben renombrarse sin una migración completa.
