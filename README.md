# LillaPlay

Marketing + demo-shop website for **LillaPlay**, a Swedish toy brand, built around its
first product, **Queaky Charge**. Next.js 16 (App Router) + React 19 + TypeScript +
Tailwind CSS v4. No backend yet — see [Architecture](#architecture) for how it's
structured to add one later.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Where to edit things

Everything content/brand-related lives in **`config/site.ts`** — one file, no need to
touch components:

- `siteConfig` — brand name, tagline, description, locale, contact details, nav links.
- `products` / `featuredProduct` — name, price (SEK), images, videos, variants,
  features, specifications, recommended age, availability, SEO title/description.

Legal pages (`/integritetspolicy`, `/villkor`, `/leverans-retur`, `/cookies`) are plain
`page.tsx` files under `app/`.

The production canonical domain is set via `NEXT_PUBLIC_SITE_URL` (see `.env.example`).

## What the client must supply before launch

- **Price** in SEK (`products[0].price` is `null` — placeholder).
- **Recommended age**, confirmed material/dimensions/weight/battery specs.
- **Shipping & returns policy**, actual **Integritetspolicy**/**Köpvillkor** text.
- **Contact email, phone, address** (currently bracketed placeholders in
  `siteConfig`).
- **Real product photography** — only one clean product shot (`product-main.jpg`) is
  currently used; the gallery and feature sections are deliberately sparse pending
  original LillaPlay photos (see `design-reference/` for the reference images that were
  intentionally excluded — they carry the reference manufacturer's own branding and
  must not be published as LillaPlay's).
- **A real hero video** showing Queaky Charge in action, if desired — the current
  `public/videos/hero.mp4` is ambient lifestyle b-roll (unrelated toys), used as a mood
  shot because no footage of the actual product was supplied. Swap the file and update
  `products[0].videos` in `config/site.ts`; no component code needs to change.

## Architecture

- `app/` — routes, layouts, metadata, `robots.ts`, `sitemap.ts`.
- `components/layout` — header, footer, mobile nav.
- `components/product` — product card, gallery/lightbox.
- `components/cart` — cart drawer.
- `components/sections` — hero, benefits, how-it-works, FAQ, etc.
- `config/site.ts` — brand + product data (the single source of truth).
- `services/cart.tsx` — cart context/reducer; localStorage-backed demo cart.
- `lib/utils.ts` — formatting helpers.
- `types/` — shared TypeScript types.

There is **no backend, payment, or real checkout** in this version — the cart is a
client-side demo (clearly labelled as such in the UI) ready to be wired to a real
checkout/payment provider later without a frontend rewrite.

## Design system

All design tokens (colours, type scale, shadows, radii, easing) and shared component
classes (`.btn`, `.card`, `.badge`, `.drawer`, accordion, etc.) live in
`app/globals.css`, built on Tailwind v4's `@theme`. Fonts (Nunito/Poppins) are loaded
via `next/font/google` in `app/layout.tsx`.
