# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (Next.js on localhost:3000)
- **Build:** `npm run build`
- **Start production:** `npm run start`
- **Lint:** `npm run lint` (ESLint with next/core-web-vitals + next/typescript)

No test framework is configured.

## Architecture

This is a **Box Truck Boys Trucking** marketing/business website built with Next.js 16 (App Router), React 19, and TypeScript.

### Styling approach
The project does **not** use CSS modules, Tailwind, or styled-components. All styling comes from static CSS/JS assets in `public/` loaded via `<link>` and `next/script` in the root layout. The CSS framework is Bootstrap + a Designesia HTML template (scheme-01 color scheme). Pages use Bootstrap grid classes and template-specific utility classes directly in JSX.

### Key layout files
- `src/app/layout.tsx` — Root layout. Loads all CSS stylesheets in `<head>` and JS scripts (plugins.js, designesia.js, swiper.js, custom-swiper-1.js, custom-marquee.js) via `next/Script` with `lazyOnload`. Wraps children with `Header` and `Footer`.
- `src/components/Header.tsx` — Site navigation with logo and dropdown menus. Uses `next/link` for routing.
- `src/components/Footer.tsx` — Footer + slide-out overlay panel (`#extra-wrap`).

### Routes (all server components, no client-side state)
- `/` — Homepage with Swiper slider, services grid, stats counters, testimonials, blog preview
- `/about` — Company info, team, milestones
- `/services` — Service offerings (Truck Freight, Dedicated, LTL, Expedited)
- `/contact` — Contact form and office locations

### Path alias
`@/*` maps to `./src/*` (configured in tsconfig.json).

### Static assets
`public/` contains the template's CSS, JS, fonts (FontAwesome 4 & 6, ET-Line, Icofont, Elegant), images (backgrounds, sliders, blog, misc, icons), and form validation scripts. These are referenced by URL path (e.g., `/css/style.css`, `/images/logo-white.webp`).

### Important context
- Pages are large JSX templates ported from static HTML — page.tsx files can be 300-800+ lines of markup
- The Swiper carousel, WOW.js animations, and marquee effects are driven by the template JS in `public/js/`, not React state
- No API routes, database, or authentication exist — this is a static marketing site
- Business info (phone, email, addresses, DOT/MC numbers) is hardcoded in components
