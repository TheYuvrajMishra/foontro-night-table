# Test report — foontro-night-table (2026-10-03)

## Generic tests

| # | Test | Result |
|---|---|---|
| 1 | `npm run build` (Next 16.3.8, Turbopack) | ✅ pass, static prerender |
| 2 | `npm run lint` (eslint-config-next) | ✅ clean, 0 errors / 0 warnings |
| 3 | TypeScript (`tsc` via build) | ✅ pass, strict |
| 4 | Production smoke (`next start`, curl) | ✅ HTTP 200, ~87 KB HTML |
| 5 | Single `<h1>` | ✅ exactly one |
| 6 | JSON-LD blocks | ✅ Organization + WebSite + FAQPage present |
| 7 | Landmarks (`header`/`main`/`footer`/`nav`) | ✅ present |
| 8 | Skip link | ✅ targets `#main` |
| 9 | Swipe deck keyboard path | ✅ ArrowLeft/ArrowRight + Skip/Shortlist buttons (44px+) |
| 10 | Deck drag on touch | ✅ `touch-action: pan-y`, `dragElastic` snap-back under threshold |
| 11 | Accordion a11y | ✅ `aria-expanded`/`aria-controls`/`region`, one-open behavior |
| 12 | Tabs a11y | ✅ `role=tablist/tab/tabpanel`, `aria-selected` |
| 13 | Reduced motion | ✅ kill-switch CSS + `useReducedMotion()`: marquees/foil/drag-throw off, Lenis skipped, final states rendered |
| 14 | Contrast (body / muted / ember-on-black / CTA) | ✅ ~12:1 / ~7:1 / ~6:1 / ~6:1 |
| 15 | No real-person photos in deck | ✅ geometric SVG avatars only; seeded data labeled in UI |
| 16 | Real-vs-demo ledger | ✅ every invented number labeled demo/TODO; dropped sections (testimonials, API, affiliate, earnings spotlight) recorded in REFERENCE_BRIEF.md |
| 17 | Fonts | ✅ 3 open-source families (Unbounded/Inter/IBM Plex Mono), `display: swap`, latin subsets |
| 18 | Images | ✅ zero raster images (all CSS/SVG) — LCP-friendly |
| 19 | Motion budget | ✅ transform/opacity only; springs 150–400/15–30; entrances 0.5–0.9s expo-out |

## Derivative test — "would someone mistake this for Fastlane?"

| Dimension | Fastlane (reference) | This build | Verdict |
|---|---|---|---|
| Theme | Light (`#ffffff`) | Dark warm-black `#0C0B09` | distinct |
| Metaphor | Speed / racing ("Fastlane") | Card room at midnight ("Night Table") | distinct |
| Voice | Growth-hacker ("10x your growth") | The dealer ("Stop paying and hoping") | distinct |
| Type | Unknown Framer type | Unbounded + IBM Plex Mono, named open fonts | distinct |
| Accent | Unknown | Foontro ember `#F36938` + foil gold | distinct |
| Signature | Blitz Mode ("Tinder for marketing") | "Deal the table" swipe deck, Hire/Get-hired toggle, sealed-pot escrow demo | distinct |
| Shared | Section-flow grammar + swipe mechanic | Reimplemented, re-skinned, re-voiced; no copied copy, images, logos, badges, taglines, or code | ✅ pass |

**Result: PASS.** The build shares only the reference's structural grammar (per the
Inspire/Hybrid brief); nothing about it reads as Fastlane's brand.

## Anti-generic spot checks

- Not a centered conversion stack: asymmetric hero (copy left, playable deck right),
  ruled ledger grid, ghost footer mark — no template SaaS skeleton.
- Every animation passes the meaning test: deck drag = the product verb; sealed-pot
  stages = the escrow story; tickers = earned numbers; marquee = proof strip.
- Copy is opinionated and specific ("21% get seated", "the rake", "four rounds, one
  table") — no lorem, no generic SaaS filler.

## Known gaps (not failures)

- No browser visual QA (standing instruction).
- Seeded deck data, streak counts, tier thresholds, ledger rows are demo — labeled.
- Dropped per brief: testimonial marquee, earnings spotlight, white-label/API band,
  community/affiliate cards, city SEO links — all recorded as TODOs in
  REFERENCE_BRIEF.md, awaiting real data/confirmation.
