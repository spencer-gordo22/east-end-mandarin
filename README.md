# East End Mandarin

Marketing site for **East End Mandarin** — the Mandarin tutoring practice of **Spencer Gordon**, who reached near-native fluency in the U.S. and now teaches kids and teens to actually speak.

A warm, single-page experience for students and parents: an editorial wordmark logo, confident Fraunces/Inter typography, restrained jade accents, tasteful scroll-reveal motion, and a working contact form. Built mobile-first, accessible, and clean enough to read as a portfolio piece.

---

## Tech stack

| Area      | Choice                                                                 |
| --------- | ---------------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router)                          |
| Language  | TypeScript                                                             |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com)                             |
| Fonts     | [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Inter](https://fonts.google.com/specimen/Inter); [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Noto Serif SC](https://fonts.google.com/noto/specimen/Noto+Serif+SC) for the logo — all via `next/font` |
| Motion    | [Framer Motion](https://www.framer.com/motion/)                        |
| Forms     | [Web3Forms](https://web3forms.com) (no backend)                        |
| Tooling   | ESLint (flat config), Turbopack                                        |

---

## Design system

- **Palette:** cream `#F7F4ED` background, charcoal `#2A2A28` text, refined jade `#2E6B52` accent (used sparingly), warm sand `#EFEAE0` alternate surface, white cards.
- **Type:** Fraunces for headings, Inter for body/UI, on a deliberate scale with generous line-height.
- **Logo:** an "editorial wordmark" built in [`src/components/Logo.tsx`](src/components/Logo.tsx) — "EAST END / MANDARIN" in tracked Cormorant Garamond caps, a jade 文 (Noto Serif SC) between hairline rules, and a "Mandarin Tutoring" tagline. Stacked, compact (nav), and icon (jade 文 in a hairline circle → favicon) variants.
- **Motion (per [Emil Kowalski's](https://animations.dev) principles):** ~240ms scroll reveals, a strong custom `ease-out`, refined hover/press states, and full `prefers-reduced-motion` support.

---

## Project structure

```
src/
  content.ts            # ← all editable copy, nav, services, location data
  app/
    layout.tsx          # fonts, metadata, OG/Twitter tags, Nav + Footer shell
    page.tsx            # section composition
    globals.css         # design tokens (palette, fonts, easing)
    icon.svg            # favicon (jade 文 in a hairline circle)
    opengraph-image.tsx # generated OG image (editorial wordmark)
    twitter-image.tsx
  components/
    Logo, Nav, Hero, Background, Services, Location,
    Contact, ContactForm, Footer, Section, Reveal, ui
```

**All editable copy lives in [`src/content.ts`](src/content.ts)** — revise wording, nav items, services, and location data there without touching components. Search that file for `CONFIRM` to find anything to verify before launch.

---

## Getting started

### Prerequisites

- **Node.js 20.9+** (required by Next.js 16)
- npm

### Install & configure

```bash
npm install
cp .env.example .env.local
```

Add your Web3Forms key to `.env.local` so the contact form can send mail:

```bash
NEXT_PUBLIC_FORM_ACCESS_KEY=your-web3forms-access-key
```

Get a free key at [web3forms.com](https://web3forms.com) using the address where you want to receive inquiries. The form submits from the browser, so the key must be public — Web3Forms keys are designed for this, and Next.js only exposes vars prefixed with `NEXT_PUBLIC_`.

### Run

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)**.

### Scripts

| Script          | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Local dev server           |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

---

## Design: no photography

The site is intentionally type-first — there are no photographs and no image placeholders. Where a photo might sit (the hero), the design uses an oversized, low-contrast 中文 composition on a warm sand panel, echoing the logo — nothing looks unfinished. To add a real headshot later, drop a square/portrait image in `public/` and set `hero.portraitSrc` in `src/content.ts`; it replaces the 中文 art with no other changes.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com):

1. Push to GitHub and import the project in Vercel.
2. In **Project → Settings → Environment Variables**, add the contact-form key:
   - **Name:** `NEXT_PUBLIC_FORM_ACCESS_KEY` — spelled exactly, including the `NEXT_PUBLIC_` prefix. The form fetches from the browser, so the key must be public; **without the prefix it is `undefined` on the client and the form fails with "Something went wrong."**
   - **Value:** your Web3Forms access key (a UUID, e.g. `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).
   - **Redeploy after setting it.** `NEXT_PUBLIC_` variables are inlined at build time, so the value only takes effect on the next build — adding or changing it without a redeploy has no effect.
3. Set `SITE_URL` in `src/content.ts` to the production domain (used for the canonical URL and link previews).
4. Deploy.

Runs anywhere with Node.js 20.9+ (`npm run build` → `npm run start`).

> **Contact form troubleshooting:** if submitting shows "Something went wrong" in production, open the browser console — the form logs the exact cause (a missing `NEXT_PUBLIC_FORM_ACCESS_KEY`, or the actual error message returned by Web3Forms). The usual fix is setting the variable with the `NEXT_PUBLIC_` prefix and redeploying.

## Accessibility

Semantic landmarks, a skip link, labeled form fields with inline errors, visible focus rings, strong contrast, descriptive image labels, and motion that respects `prefers-reduced-motion`.

## License

Private project. © East End Mandarin.
