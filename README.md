# Landing · Horas Trabajo

Landing page (Astro 7) de la app **Horas Trabajo** — registro de horas trabajadas y cálculo
salarial según el Código de Trabajo de República Dominicana (Ley 16-92).

Diseño: **Material 3 + Inter** (el mismo lenguaje visual de la app). Paleta de **marca azul (#1565C0)**.

## ✨ Contenido
- **Hero** con mockup de la app (pantalla "Marcar") e insignias flotantes.
- **Funcionalidades** (marcado GPS, geocerca, avisos, motor salarial, reportes, 100% local).
- **Cómo funciona** en 3 pasos.
- **Motor salarial Ley 16-92**: recargos editables (extras +35%, exceso +100%, nocturna +15%, feriado doble).
- **Privacidad** (todo local, sin cuentas, open source).
- **FAQ** (acordeones accesibles) + **CTA** de descarga del APK (Beta).
- SEO completo (OG, Twitter, JSON-LD SoftwareApplication, sitemap) y accesibilidad.

## 🛠️ Stack
- **Astro 7** · **pnpm 11** · TypeScript estricto · Node 22.
- **Tailwind v4** vía plugin `@tailwindcss/vite` (no `@astrojs/tailwind`).
- **@astrojs/sitemap** + **@fontsource-variable/inter** (fuente self-hosted, `font-display: swap`).
- JS vanilla en `src/scripts/` (header con menú móvil, reveal-on-scroll). Sin frameworks.

## 🚀 Desarrollo
```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # astro check (type checking)
pnpm build      # salida estática en dist/
pnpm preview
```

## ☁️ Deploy — Cloudflare Workers (estático)
El build es **totalmente estático** (`output: 'static'`), así que **no necesita adapter**.
`wrangler.jsonc` sirve `dist/` como assets estáticos de Worker con 404 propio.

**Opción A – Workers Builds (conectado a GitHub):**
1. Sube el repo a GitHub.
2. En Cloudflare: **Workers & Pages → Create → Worker → "Workers Builds"**, conecta el repo `landing-horas-trabajo`.
3. Build: `npx astro build` · Deploy: `npx wrangler deploy`.

**Opción B – CLI:**
```bash
pnpm add -D wrangler
npx wrangler deploy
```

> El archivo `.node-version` fija Node 22.14.0 (el builder de Cloudflare no soporta Node 24).
> Dominio: `horas-trabajo.stevemoya.me` (o cualquier custom domain de Cloudflare).

## ⚙️ Configuración
- Contenido en `src/data/*.ts` (site, features, pasos, salario, faqs). Cero CMS.
- Tokens de marca en `src/styles/global.css` (`@theme`): paleta azul, acento cian, highlight ámbar, superficies oscuras.
- SEO: el texto/URL vive en `src/data/site.ts` — un solo lugar para título, canonical, OG, JSON-LD y el enlace del APK.

## 🧑‍🎨 Identidad / logo
Logo SVG fusiona **reloj + pin de ubicación** (la propuesta visual de la app). Archivos:
- `public/favicon.svg` (marca aislada).
- `public/og.png` (1200×630, generado con ImageMagick).
- Componente reutilizable `src/components/brand/Logo.astro`.
- Mockup del teléfono: `src/components/brand/PhoneMockup.astro`.

## ✅ Calidad
- `pnpm check` → 0 errores · `pnpm build` → limpio (2 páginas + sitemap).
- QA Playwright (1440/390): sin overflow, sin errores de consola, 1 H1, secciones, FAQ accesible, menú móvil.

## 📁 Decisiones de arquitectura
- Contenido separado de la presentación (datos tipados en `src/data`).
- Componentización sin sobre-abstraer: `ui/` (Button, Section, Container, Badge), `layout/` (Header, Footer), `sections/`, `brand/`.
- JS externo (no inline) + `assetsInlineLimit: 0` para que la CSP `'self'` funcione.
- `prefers-reduced-motion` y fallback sin JS para las animaciones.