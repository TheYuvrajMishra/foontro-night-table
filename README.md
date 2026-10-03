# FOONTRO — "The Night Table" (concept redesign, usefastlane.ai genre)

A dark, editorial landing-page concept for **foontro.com** — India's most verified
freelance marketplace — built in **Reference Mode (Inspire/Hybrid)** off
[usefastlane.ai](https://www.usefastlane.ai/). Takes the reference's *structure and
mechanics* (announcement pill, contrasting-number hero, playable swipe mechanic,
proof marquee, contrarian transition, checklist + interactive panel, outcome gallery,
4-step how-it-works, feature spotlight, audience tabs, integrations strip, pricing
anatomy, micro-UI cards, FAQ accordion, ghost-mark footer + SEO columns) and reinvents
every one inside Foontro's own metaphor: **a card room at midnight**.

Swipe = dealing a hand. Escrow = the sealed pot in the middle of the table.
Streak tier frames = holographic foils. 21% acceptance = the house seats few.
Copy voice: the dealer — brisk, fair, a little theatrical.

**Reference brief (taken vs changed, 3 scored concepts, reinvention table):**
[`REFERENCE_BRIEF.md`](./REFERENCE_BRIEF.md)

## Run it

```bash
cd foontro-night-table
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint (clean)
npm run build    # production build (passes)
```

## Folder structure

```
app/
  layout.tsx        # fonts (Unbounded/Inter/IBM Plex Mono), metadata, Open Graph,
                    # JSON-LD (Organization, WebSite, FAQPage), margin rails, grain
  page.tsx          # section composition (13 sections)
  globals.css       # design tokens, notebook margin rails, lamp glow, card-back
                    # pattern, foil shimmer, marquee, reduced-motion kill-switch
components/
  ui.tsx            # LenisRoot, Reveal, Eyebrow, SectionHead, Marquee, Ticker,
                    # DealerButton, TableCard, SplitWords
  avatar.tsx        # deterministic geometric SVG avatars (never photos)
  nav.tsx           # announcement pill + minimal sticky nav
  hero.tsx          # ★ signature 1: contrasting-number H1 + playable deck
  swipe-deck.tsx    # ★ the playable instrument: role toggle, drag/keys/buttons,
                    # SKIP/SHORTLIST stamps, shortlist tray, seeded demo data
  proof-strip.tsx   # proof marquee — real numbers + 9 real categories, no fake logos
  transition.tsx    # contrarian dealer line → exact escrow quote
  fixed.tsx         # WE FIXED ONE (exact site copy) + ★ signature 2: sealed-pot escrow demo
  showcase.tsx      # 3 real trending listings (names/taglines/prices from foontro.com)
  how.tsx           # real 4-step flow Browse → Order → Chat → Approve & Pay (exact copy)
  streaks.tsx       # Streaks + tier frames spotlight, 4 benefit blocks
  audiences.tsx     # Freelancers / Clients tabs + 3 cards each
  money.tsx         # real rails only: UPI, cards, netbanking, payouts, Android app + push
  pricing.tsx       # real plans: Basic Free (10%) · Pro ₹499 (keep 100%) · client note, INR
  micro-ui.tsx      # payout ledger, streak tracker, push notifications, dashboard
  faq.tsx           # 6 real Q&A, exact site wording, accessible accordion
  footer.tsx        # ghost FOONTRO mark + real closing CTA + SEO columns
lib/
  data.ts           # REAL (verified) vs DEMO (seeded, labeled) data ledger
```

## What's real vs. demo (verified from foontro.com, 2026-10-02)

- **Real:** "India's Most Verified Freelance Marketplace", 5,000+ creators and teams,
  21% acceptance (manual human review), Browse → Order → Chat → Approve & Pay (exact
  copy), WE FIXED ONE + 4 value props (exact copy), escrow/verification/fee FAQ (exact
  wording), 9 category titles, 3 trending listings (Shubhi ₹1,200 · Irva ₹6,000 ·
  Rehan ₹800), Basic Free 10% / Pro ₹499 keep 100% + perks, UPI/cards/netbanking via
  secure gateway, Login Streaks (metallic frames + search visibility boost), Play Store
  app + push notifications, "India's FRESHEST freelance marketplace" closing CTA.
- **Demo / TODO (labeled in UI + brief):** swipe-deck people & gigs (seeded, illustrated
  avatars), streak day-counts & tier thresholds, ledger rows, testimonial quotes
  (section dropped — only video-story attributions exist), earnings spotlight (dropped),
  white-label/API/affiliate/Discord (dropped — unconfirmed), city SEO links.

## Key decisions

- **Fonts (all open-source, named):** Unbounded (display, Google Fonts OFL) →
  substitutes the reference's unknown licensed type with a character-heavy grotesk;
  Inter (body); IBM Plex Mono (micro-labels, tabular numerals).
- **Palette:** warm near-black `#0C0B09` + warm off-white `#F2EEE3` + Foontro ember
  `#F36938` (real brand) + foil gold `#C9A227` reserved for streak moments.
- **Motion:** card springs (stiffness 150–400, damping 15–30), expo-out entrances,
  linear marquees; transform/opacity only; Lenis smooth scroll; full reduced-motion
  path (final states, no Lenis, no drag animation).
- **Differentiation from the two prior Foontro builds:** Scoreboard = sports league +
  sonar canvas + Archivo Black/Space Mono; Paper Trails = sunlit desk + paper physics +
  Zain/Fraunces. This = card room + deal/flip physics + Unbounded/IBM Plex Mono.
  Layout family (playable-world hero + ruled editorial), palette (warm-black + gold
  foil), and motion signature (card deal/flip) are all new.

## Accessibility & motion

- One `<h1>`, real HTML text, landmarks, skip link, labelled controls, focusable deck
  controls (drag + arrow keys + buttons), `aria-expanded` accordion, tab roles.
- `prefers-reduced-motion`: kill-switch CSS + `useReducedMotion()` — marquees, foil
  shimmer, floats and drag-throw disabled; content renders in final states.
- Contrast: body ~12:1, muted ~7:1, ember-on-black ~6:1, CTA text-on-ember ~6:1.
- Touch: 44px+ targets on deck buttons; `touch-action: pan-y` so vertical scroll
  survives horizontal drags.

No browser-based visual QA was run (standing instruction — Chromium/Playwright only on
explicit request).
