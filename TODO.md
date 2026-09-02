# Landing · Horas Trabajo — Backlog

**Objetivo:** Landing page de la app **Horas Trabajo** (Astro 7, estática, Cloudflare Workers)
que transmita la identidad Material 3 + azul de la app y la normativa laboral RD (Ley 16-92).

## Estado actual
✅ Diseño y build completos. Validado `pnpm check` (0 errores), `pnpm build` limpio y QA Playwright 15/15.

## Pendientes / mejoras
| # | Tarea | Prioridad |
|---|-------|-----------|
| 1 | Apuntar `og:title`/canonical al dominio definitivo tras conectar Cloudflare | Alta |
| 2 | Sustituir el mockup del teléfono por **capturas reales de la app** (pantalla Marcar, reporte, ajustes) | Alta |
| 3 | Añadir sección de **capturas / galería** con las pantallas reales | Media |
| 4 | Añadir **testimonios** o una sección social | Media |
| 5 | Añadir **modo oscuro** a la landing (paralelo al tema de la app) | Media |
| 6 | Subir el enlace de descarga a la **última Release** de forma automática (obtener v0.x real) | Media |
| 7 | Añadir **video demo** (looping, sin audio) si Steven decide grabar uno | Baja |
| 8 | SPA/anchors: verificar que `not_found_handling: 404-page` no rompa el scroll a secciones | Baja |

## Notas de diseño
- Marca azul `#1565C0` (elegida por Steve) · acento cian · highlight ámbar para dinero/horas.
- Logo = reloj + pin de ubicación (SVG). Tipografía Inter.
- Contenido todo en `src/data/*.ts`; SEO en `src/data/site.ts`.