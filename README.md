# Fiynix — marketing website

Marketing site for a mobile-first remittance app. Built with Vue 3 (`<script setup lang="ts">`),
Vite, TypeScript (strict), Tailwind CSS v4, Vue Router, `@vueuse/core` and `@unhead/vue`.

## Setup

Requires Node `^22.18.0` or `>=24.12.0`.

```sh
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:5173
npm run build      # type-check and build for production into dist/
npm run preview    # serve the production build locally
npm run format     # format src/ with Prettier
npm run lint       # oxlint + ESLint (with --fix)
npm run test:unit  # Vitest unit tests
npm run test:e2e   # Playwright tests (run `npx playwright install` once first)
```

## Editing content

All copy, links and store URLs are typed data in [`src/data`](src/data); components don't
hold any copy.

| File             | What it holds                                                        |
| ---------------- | -------------------------------------------------------------------- |
| `site.ts`        | `BRAND_NAME`, contact details, store URLs, social links, footer note |
| `navigation.ts`  | Header nav, the "More" dropdown and the header CTA                   |
| `footerLinks.ts` | Footer Support / Legal columns                                       |
| `home.ts`        | Hero, app intro and "smarter way" copy                               |
| `features.ts`    | Key features cards (`Feature[]`)                                     |
| `steps.ts`       | How-it-works steps (`Step[]`)                                        |
| `pages.ts`       | About, Blog, Contact copy and per-page SEO                           |
| `legal.ts`       | The six legal/support pages. Each entry creates its own route        |
| `media.ts`       | Every image import, in one place                                     |

To rename the brand, change `BRAND_NAME` in `src/data/site.ts`. Also update the `<title>` and
`theme-color` fallbacks in `index.html`, and `site.url` (used for canonical and Open Graph URLs).

## Design tokens

Tokens live in `@theme` in [`src/styles/main.css`](src/styles/main.css) and are used as Tailwind
utilities (`bg-primary`, `text-ink`, `font-display`, `shadow-card`, …). Components contain no hex
values.

Contrast: white text on the brand orange (`#F26B1D`) is only about 3:1, which passes WCAG AA for
large display text only. Buttons and small white text therefore sit on `primary-dark`
(`#B84A0C`, about 5.2:1). The hero gradient starts on `primary-dark` behind the copy and ends on
the brand orange behind the phone. If you change the colors, recheck these pairs.

## Placeholder assets to replace

All of these are imported in `src/data/media.ts`. To swap one, drop in the real file and update
its import line there. Use **WebP/AVIF** for photos and mockups.

| Placeholder                     | Used in                     | Replace with                                         |
| ------------------------------- | --------------------------- | ---------------------------------------------------- |
| `src/assets/logo.webp`          | Header, mobile menu, footer | Done — cropped from `public/assets/logo.png`          |
| `src/assets/hero-bg-orange.svg` | Hero background pattern     | `hero-bg-orange.png` / `.webp` (transparent overlay) |
| `src/assets/hero-phone-*.webp`  | Hero phone (480w / 960w)    | Done — cropped from `public/assets/hero-image.png`    |
| `src/assets/lady-phone.svg`     | "Smarter way" photo (4:5)   | `lady-phone.webp` / `.jpg`                           |
| `src/assets/banner-bg.svg`      | How-it-works banner         | `banner-bg.webp` / `.png`                            |
| `public/og-image.png` (missing) | Open Graph / Twitter card   | 1200×630 share image                                 |
| `public/favicon.ico`            | Browser tab                 | Brand favicon                                        |

Other placeholders to replace before launch:

- **Store badges** (`src/components/ui/StoreBadges.vue`) are styled HTML stand-ins. Apple's and
  Google's brand guidelines require their official badge artwork.
- **Store URLs, social URLs, address, email, phone and footer note** in `src/data/site.ts`.
- **Legal copy** in `src/data/legal.ts`. It is placeholder text and must be replaced with
  approved wording.
- **Fonts** load from Google Fonts in `index.html` (Plus Jakarta Sans, Inter).

## Project structure

```
src/
  components/
    layout/  AppHeader, AppFooter, MobileMenu, NavDropdown
    ui/      BaseButton, StoreBadges, SectionHeading, SocialIcon, AppLogo
    home/    HeroSection, AppIntro, FeaturesGrid, FeatureCard,
             SmarterWaySection, HowItWorks, StepItem
  composables/ useFocusTrap, useReveal, usePageMeta
  data/      content (see above)
  types/     shared interfaces
  utils/     validateContact (+ unit tests)
  views/     Home, About, Blog, Contact, Legal, NotFound
  router/    routes, generated from data/legal.ts for the legal pages
  styles/    main.css (Tailwind + tokens)
```

## Notes

- The contact form has no backend. On submit it validates the input, logs the payload with
  `console.info` and shows a success message. Replace the log in `ContactView.vue` with an API
  call.
- The header is transparent over the hero only on routes with `meta.transparentHeader`. Every
  other page gets top padding under the fixed header.
- Animations (phone float, step reveal, card lift, menu slide) use `motion-safe:`, so they are
  turned off for users with `prefers-reduced-motion`.
- This is a client-rendered SPA. For production hosting, set up a fallback that serves
  `index.html` for every path so routes like `/about` work when loaded directly. For SEO on
  crawlers that don't run JavaScript, consider prerendering (for example with `vite-ssg`).
