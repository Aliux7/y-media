# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (not `next lint` — that was removed in v16)
```

There is no test runner configured yet.

## Stack

- **Next.js 16.2.9** — App Router only; no Pages Router
- **React 19.2.4** — Server Components by default
- **TypeScript** — strict mode, path alias `@/*` maps to repo root
- **Tailwind CSS v4** — configured via `postcss.config.mjs` with `@tailwindcss/postcss`
- **Turbopack** — default bundler for both `dev` and `build` in v16

## Project

Y Media is a single-page marketing site for a Jakarta-based publishing atelier. The page is a vertically scrolling layout with six sections assembled in `app/page.tsx`: `Header` → `Hero` → `Book` → `WhatWeLove` → `ThePrincipal` → `WhoWeAre`. `WhoWeAre` is currently a stub.

All components in `components/` are Server Components — no interactivity yet. The layout is desktop-first with fixed pixel values used extensively (e.g. `text-[140px]`, `w-113.25`).

## Assets and fonts

Assets live in **two locations** with distinct purposes:

- `app/assets/` — imported directly by components via `next/image` (SVGs, JPGs, PNGs). Webpack/Turbopack processes these at build time.
- `public/assets/fonts/` — served statically; referenced in `app/globals.css` via `@font-face` rules.

Two custom font families are defined in `globals.css`:
- **YRFLAUNT** — default body font (`font-family` on `body`); weights 400 (BOOK) and 500 (MEDIUM)
- **Raleway** — available via the `font-raleway` Tailwind utility class (registered as `--font-raleway` in `@theme`)

## Next.js 16 breaking changes (vs. training data)

Read `node_modules/next/dist/docs/` — especially `01-app/02-guides/upgrading/version-16.md` — before writing any routing, caching, or middleware code.

Key differences from older Next.js versions:

- **`next lint` is gone.** Linting is `eslint` directly; `next build` no longer runs it.
- **`params` / `searchParams` are Promises.** Always `await params` before destructuring: `const { id } = await params`.
- **`serverRuntimeConfig` / `publicRuntimeConfig` removed.** Use environment variables. Server-only secrets stay in Server Components; client-accessible values use the `NEXT_PUBLIC_` prefix.
- **`middleware.ts` → `proxy.ts`.** The middleware file convention has changed.
- **`experimental.dynamicIO` / `experimental.useCache` deprecated.** Use top-level `cacheComponents: true` in `next.config.ts` instead, then use the `'use cache'` directive.
- **AMP removed entirely.** No `next/amp`, no `amp` config option.
- **Instant navigation requires `unstable_instant`.** `<Suspense>` alone is not enough for instant client-side navigations. Export `unstable_instant` from the route and wrap uncached data in `<Suspense>`. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.

## App Router conventions

- All files in `app/` are Server Components by default. Add `'use client'` only when you need state, event handlers, browser APIs, or hooks.
- Route segments: `app/foo/page.tsx` (page), `app/foo/layout.tsx` (layout), `app/foo/loading.tsx` (Suspense fallback), `app/foo/error.tsx` (error boundary).
- API routes live in `app/foo/route.ts` (not `pages/api/`).
- `app/globals.css` is imported once in `app/layout.tsx`; it owns global styles including Tailwind base.
