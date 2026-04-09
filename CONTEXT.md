# Darío Fidanza — Presentation System Context
> For future Claude sessions. Read this before making any changes to decks or files in this folder.

---

## Folder Structure

```
~/New Deck/
├── CONTEXT.md                  ← this file
├── DESIGN.md                   ← canonical design system spec (always read first)
├── index.html                  ← root deck (Design Systems / TDS case study)
├── nav.css / nav.js            ← shared nav utilities (referenced by root deck)
├── Images/                     ← assets for root deck
│
├── Northstar/                  ← Northstar Shopper App case study
│   ├── Northstar.pptx          ← source PPTX (content reference)
│   ├── index.html              ← ✅ HTML deck (15 slides) — PRIMARY OUTPUT
│   ├── Images/                 ← 35 images extracted from Northstar.pptx + Northstar.gif
│   └── Orders Dashboard/       ← Orders Dashboard case study (lives inside Northstar/)
│       ├── index.html          ← ✅ HTML deck (15 slides) — copied from Ordersdashboad/
│       ├── Orders Dashboard.pptx  ← PPTX version built by Claude (pptxgenjs)
│       └── Images/             ← assets for Orders Dashboard deck
│
├── Ordersdashboad/             ← original source folder for Orders Dashboard
│   ├── Ordersdashboard.pptx   ← source PPTX (content reference)
│   └── Orders Dashboard/
│       ├── index.html          ← ✅ original HTML deck (canonical source)
│       └── Images/             ← full image set for Orders Dashboard
│
└── LIve presso.pptx            ← separate live presentation PPTX
```

---

## Active HTML Decks

| Deck | Path | Slides | Status |
|------|------|--------|--------|
| Design Systems (TDS) | `~/New Deck/index.html` | ~15 | Existing, not rebuilt |
| Northstar Vision | `~/New Deck/Northstar/index.html` | 15 | ✅ Built by Claude |
| Orders Dashboard | `~/New Deck/Northstar/Orders Dashboard/index.html` | 15 | ✅ Copied from canonical source |

---

## Design System — Quick Reference

**Always read `DESIGN.md` for full spec.** Key rules:

### Colors (CSS vars)
```
--bg:        #07101f   dark background
--bg2:       #0d1a2e   secondary bg
--surface:   rgba(255,255,255,0.04)  card bg
--border:    rgba(255,255,255,0.08)  card border
--text:      #f0f4ff   primary text
--text-dim:  #8fa8c4   body / secondary text
--text-muted:#b8cce0   labels, captions
--accent:    #4f80f5   blue — primary brand
--accent2:   #7c5af5   purple — secondary
--green:     #3dba7e   positive / success
--amber:     #f5a623   warning / numbered labels
--red:       #FF6332   negative / before
--pink:      #e0459a   tertiary accent
```

### Fonts
- **h1, h2:** `'Hepta Slab', serif` — weight 400 only
- **Body/UI:** `'Inter', sans-serif`
- **Card h3:** `'Noto Sans', sans-serif`

### Key Component Classes
- `.overline` — 12px, 600w, 0.18em tracking, ALL CAPS, color matches section
- `.card` — surface bg, border, 12px radius, 22px padding
- `.metric-card` — large stat number (800w) + label
- `.tag` — inline pill with color variants (`.green`, `.purple`, `.amber`, `.red`)
- `.bullet-list` — 5px dot bullets, color variants
- `.divider` — 40×2px blue→purple gradient bar with shimmer animation
- `.cover-line` — 56×3px gradient shimmer (cover slides only)
- `.ba-before` / `.ba-after` — red/green before-after cards
- `.grid-2`, `.grid-3`, `.grid-4` — gap 20/18/14px

### Slide Texture Classes
- (none) — static radial dot grid
- `.slide-dots` — animated canvas dot wave (requires JS `initDotCanvas()`)
- `.slide-grid` — fine 18px line grid
- `.slide-light` — flips all CSS vars to light theme
- `.layout-vc` — vertically centers content

### Nav Sections (data-section attribute)
`intro` | `problem` | `system` | `components` | `impact`

---

## Northstar Deck — Slide Map

| # | Title | Section | Key Images |
|---|-------|---------|------------|
| 1 | Cover | intro | `slide1_img_7.png` (phone) + `Northstar.gif` (available) |
| 2 | Context & Goal | intro | `slide2_img_11/12.png` (phones) |
| 3 | Challenge | problem | `slide3_img_9/10/11.png` (phones) |
| 4 | Research Insights | problem | `slide4_img_10.png` (light slide) |
| 5 | Strategy | problem | `slide5_img_19.png` (wide banner, light slide) |
| 6 | Key Concepts | system | `slide6_img_9/10.png` (phones) |
| 7 | Design System | system | `slide7_img_9.png` (DS screenshot) |
| 8 | Features | system | `slide8_img_3/4/5/6.png` (screens) |
| 9 | Implementation | system | `slide9_img_5.png` |
| 10 | EX Transform: Onboarding | components | `slide10_img_3/15/16.png` |
| 11 | EX Transform: Metrics | components | `slide11_img_3/4/5.png` |
| 12 | EX Transform: Feedback | components | `slide12_img_3/11.png` |
| 13 | Outcomes | impact | (dots canvas, no image) |
| 14 | Learnings | impact | `slide14_img_12.png` (light slide) |
| 15 | Takeaway | impact | `slide15_img_10.png` (phone) |

---

## Orders Dashboard Deck — Slide Map

| # | Title | Section |
|---|-------|---------|
| 1 | Cover | intro |
| 2 | Context & Goal | intro |
| 3 | Challenge | problem |
| 4 | Research Insights | problem |
| 5 | Benchmarks | problem |
| 6 | Competitive Analysis | system |
| 7 | Strategy | system |
| 8 | Complex to Clear | system |
| 9 | M1 Features | components |
| 10 | M2 Features | components |
| 11 | Design Process | components |
| 12 | Implementation & Rollout | components |
| 13 | Impact | impact |
| 14 | What We Learned | impact |
| 15 | Takeaway | impact |

---

## How to Build a New Deck

1. Read `DESIGN.md` first
2. Use existing `index.html` (Orders Dashboard or Northstar) as the HTML template
3. Extract images from source PPTX: `python3 -c "from pptx import Presentation; ..."`
4. Follow the slide structure: overline → h2 → divider → content
5. Canvas slides (`slide-dots`) need `<canvas class="dots-canvas" id="canvas-N">` + `initDotCanvas('canvas-N')` in JS
6. Nav sections: update `const sections = { intro:0, problem:X, system:X, components:X, impact:X }`
7. Save `index.html` + `Images/` folder together — they are always co-located

## Notes & Gotchas
- `Ordersdashboad` (typo) is the original source folder — do not rename it
- The Orders Dashboard HTML at `Northstar/Orders Dashboard/index.html` is a copy of the canonical one at `Ordersdashboad/Orders Dashboard/index.html`
- `Northstar.gif` is available in `Northstar/Images/` but currently the cover uses `slide1_img_7.png`
- GIFs autoplay natively in browsers — no JS or `autoplay` attribute needed for `<img>` tags
- Never use `font-weight: 700+` on h1/h2 — Hepta Slab handles visual weight at 400
- Never add accent underlines under titles (AI-generated slide hallmark)
- Light slides need `.slide-light` class; add `slide-grid` for technical slides

---

## Updated Folder Structure (post-reorganization)

```
/Users/dario/New Deck/
├── shared/          ← nav.js + nav.css (all decks reference as ../shared/)
├── intro/           ← 5-slide personal intro (Cover, Agenda, About Me, Career, Experience)
│   ├── index.html
│   └── images/
├── tooling-ds/      ← TDS case study, 35 slides (intro removed)
│   ├── index.html
│   └── images/
├── orders-dashboard/
│   ├── index.html
│   └── images/
├── northstar/
│   ├── index.html
│   └── images/
├── archive/         ← deck.pdf, LIve presso.pptx, slides/, Northstar.pptx, stale html
├── DESIGN.md
└── CONTEXT.md
```

## Nav — 4 Project Pills

Order: **Intro · Tooling DS · Orders Dashboard · Shopper Northstar**

Each deck now uses `../shared/nav.js` and `../shared/nav.css`. All data-href paths are:
- To Intro: `../intro/index.html`
- To TDS: `../tooling-ds/index.html`
- To Orders: `../orders-dashboard/index.html`
- To Northstar: `../northstar/index.html`

## Updated Slide Counts
- Intro: 5 slides, 1 section (`intro:0`)
- Tooling DS: 35 slides, 4 sections (`problem:0, system:6, components:15, impact:26`)
- Orders Dashboard: 15 slides, 5 sections (unchanged)
- Northstar: 15 slides, 5 sections (unchanged)

## Building a New Deck
- Use `orders-dashboard/index.html` or `northstar/index.html` as template
- Reference `../shared/nav.css` and `../shared/nav.js`
- Images go in `new-deck/images/` (lowercase)
- Nav section map: update `const sections = {}` and `const map = {}` in the inline script
- Add a collapsed pill for the new deck in all other 3 deck navs

## Notes & Gotchas (updated)
- Old `Ordersdashboad` (typo) folder has been removed — canonical path is now `orders-dashboard/`
- The duplicate `Northstar/Orders Dashboard/` has been removed
- macOS is case-insensitive so `northstar/` = `Northstar/` on local dev — lowercase is canonical
- Images folders are now all lowercase `images/` (not `Images/`)
- Old root `index.html` was the TDS deck — it has moved to `tooling-ds/index.html`
