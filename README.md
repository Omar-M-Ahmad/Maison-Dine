# Restaurant Landing Page — Next.js

Premium bilingual restaurant landing page converted from the Figma/Vite export into a Next.js App Router project.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- next-themes
- Local language context with RTL/LTR support
- Reusable section/component structure

## Pages

- `/` — Landing page
- `/signin` — Sign in page
- `/signup` — Sign up page

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Notes

- The original visual system was preserved: warm espresso dark mode, ivory light mode, terracotta/gold accents, large spacing, and rounded premium cards.
- The Vite client-side page switching was replaced with real Next.js routes.
- Components are kept reusable and implementation-friendly for future i18n, booking APIs, and CMS integration.
