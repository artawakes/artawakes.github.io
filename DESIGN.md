# DESIGN.md — Darío Fidanza Presentation System
> Reusable design intent for generating HTML slide decks with the same visual language.

---

## 1. Color Roles

### Dark mode (default)
| Token | Value | Role |
|---|---|---|
| `--bg` | `#07101f` | Page / slide background |
| `--bg2` | `#0d1a2e` | Secondary background, surface tint |
| `--surface` | `rgba(255,255,255,0.04)` | Card background |
| `--border` | `rgba(255,255,255,0.08)` | Default card border |
| `--border-strong` | `rgba(255,255,255,0.15)` | Hover border |
| `--text` | `#f0f4ff` | Primary text |
| `--text-dim` | `#8fa8c4` | Body / secondary text |
| `--text-muted` | `#b8cce0` | Labels, metadata, captions |
| `--accent` | `#4f80f5` | Blue — primary brand, links, icons |
| `--accent2` | `#7c5af5` | Purple — secondary accent |
| `--green` | `#3dba7e` | Positive, "after", success metrics |
| `--amber` | `#f5a623` | Warning, highlight, numbered labels |
| `--red` | `#FF6332` | Negative, "before", alert |
| `--pink` | `#e0459a` | Tertiary accent |

### Light mode (per-slide override via `.slide-light`)
| Token | Value |
|---|---|
| `--bg` | `#f4f6fd` |
| `--surface` | `rgba(255,255,255,0.75)` |
| `--border` | `rgba(0,0,0,0.09)` |
| `--text` | `#07101f` |
| `--text-dim` | `#3a5070` |
| `--text-muted` | `#7a90a8` |

**Rule:** Apply `class="slide-light"` to a slide div to flip all CSS vars to light values. If you also need a pure white background, add an ID-based CSS override: `#slide-XX { background: #ffffff !important; }`.

### Color usage rules
- Use `--accent` (blue) for primary labels, icons, progress, overlines
- Use `--accent2` (purple) for secondary/complementary labels and timeline items
- Use `--green` for "after", "success", positive metrics
- Use `--red` for "before", problems, alerts
- Use `--amber` for numbered sequences (01, 02, 03 labels)
- Match icon color to its label color — they are always the same

---

## 2. Typography Rules

### Fonts
- **Display / Headings:** `'Hepta Slab', serif` — used for h1 and h2 only
- **Body / UI:** `'Inter', -apple-system, sans-serif` — all other text
- **Cards (h3):** `'Noto Sans', sans-serif`
- **Monospace:** `'SF Mono', 'Fira Code', monospace` — token names, code

### Scale
| Element | Size | Weight | Tracking | Notes |
|---|---|---|---|---|
| `h1` | `clamp(36px, 5vw, 72px)` | 400 | `-0.03em` | Cover titles only |
| `h2` | `clamp(26px, 3.2vw, 50px)` | 400 | `-0.025em` | Section titles |
| `h3` | `clamp(16px, 1.8vw, 24px)` | 600 | `-0.015em` | Card titles |
| `.overline` | `12px` | 600 | `0.18em` | ALL CAPS section labels |
| `.subtitle` | `clamp(16px, 1.6vw, 21px)` | 400 | — | Lead paragraph |
| `.body-text` | `14px` | 400 | — | General copy |
| `.card-label` | `12px` | 600 | `0.14em` | ALL CAPS card labels |
| `.tag` | `11px` | 500 | `0.04em` | Chips/pills |

### Typography rules
- h1 and h2 are always `font-weight: 400` — they rely on the serif face for weight perception
- `.overline` is always uppercase with `0.18em` tracking; color matches the section theme color
- Diamond bullet `◆` is used inline (inside `<h3>`) as a list style in cards when the label is removed
- `.ai-gradient` applies a blue→purple→violet gradient text effect for AI-related terms

---

## 3. Spacing Scale

| Context | Value |
|---|---|
| Slide padding (default) | `96px 80px 40px` |
| Hero layout padding | `0` on slide, `96px 48px 40px 80px` on `.hero-content` |
| Card padding | `22px` |
| Metric card padding | `24px 20px` |
| Grid gap (2-col) | `20px` |
| Grid gap (3-col) | `18px` |
| Grid gap (4-col) | `14px` |
| Card column gap | `10–12px` |
| Overline bottom margin | `14px` |
| Divider margin | `20px 0` |
| Nav height | `60px` |

---

## 4. Component Patterns

### Card (`.card`)
```
background: var(--surface)
border: 1px solid var(--border)
border-radius: 12px
padding: 22px
hover: border-color → --border-strong, background slightly lighter
```
- Cards in `.grid-3` auto-tint by column: col 1 = blue, col 2 = pink, col 3 = red
- Icon + label inline pattern: `34×34px` icon box with `border-radius:9px`, colored `rgba(accent, 0.13)` background, SVG stroke matches label color

### Metric card (`.metric-card`)
- Large number: `clamp(24px, 2.6vw, 42px)`, weight 800
- Number colors: default `--text`, `.green`, `.accent`, `.purple` modifiers
- Hover: blue border glow `rgba(79,128,245,0.07)` box-shadow

### Tag / Pill (`.tag`)
```
padding: 4px 10px
border-radius: 6px
border: 1px solid
```
Color variants: default blue, `.green`, `.purple`, `.amber`, `.red`

### Overline (`.overline`)
- Always first element in a slide's content hierarchy
- Color variants: default blue, `.green`, `.purple`, `.amber`, `.red`

### Divider (`.divider`)
- `40×2px`, blue→purple gradient, animated shimmer + glow pulse

### Cover line (`.cover-line`)
- `56×3px`, transparent→blue→purple→transparent gradient, shimmer animation

### Before/After (`.ba-card`)
- `.ba-before`: red tint border, red tag
- `.ba-after`: green tint border, green tag

### Timeline (`.timeline-h`)
- Horizontal flex, `gap:24px`, items `flex:0 0 320px`
- Dots pulse with `agendaPulse` staggered animation (0s, 3s, 6s offsets)
- Cards: `rgba(255,255,255,0.75)` background, light border, `border-radius:14px`

### Bullet list (`.bullet-list`)
- `5×5px` circle bullet, `--accent` color
- `.green` and `.purple` variants for bullet color

---

## 5. Layout Patterns

### Standard slide
```html
<div class="slide [modifier] [layout-vc]" data-section="[section]">
  <span class="overline">Section · Subtitle</span>
  <h2>Title</h2>
  <!-- content -->
</div>
```

### Layout modifiers
| Class | Behavior |
|---|---|
| `layout-vc` | Vertically center content (`justify-content:center`, `padding-top:40px`) |
| `layout-bl` | Anchor to bottom-left (cover slides) |
| `slide-cover` | Cover layout + canvas dot animation + glow |
| `slide-center` | Centered text (thank-you, section dividers) |
| `slide-light` | Flip to light theme vars |

### Background texture modifiers
| Class | Texture |
|---|---|
| (none) | Static radial dot grid, angled perspective via CSS |
| `slide-dots` | Animated organic dot-wave canvas (blue dots, sweeping band effect) |
| `slide-grid` | Fine 18px line grid with scanline sweep animation |

### Hero layouts (image + content splits)

**`hero-right`** — content 42% left, image fills 60% right
```html
<div class="slide hero-right">
  <div class="hero-content">…</div>
  <div class="hero-img"><img …></div>
</div>
```
- Image is absolutely positioned, `object-fit:cover` by default
- Use `img-fit` class on `.hero-img` for `object-fit:contain` (no crop)

**`hero-left`** — image left, content right (DOM order reversed via `flex-direction:row-reverse`)
```html
<div class="slide hero-left">
  <div class="hero-content">…</div>  <!-- renders right -->
  <div class="hero-img">…</div>       <!-- renders left -->
</div>
```

**`hero-full`** — image is full-bleed background, content overlays bottom
```html
<div class="slide hero-full">
  <div class="hero-img"><img …></div>
  <div class="hero-content">…</div>
</div>
```

### Grid layouts
```html
<div class="grid-2">  <!-- 2 equal columns -->
<div class="grid-3">  <!-- 3 equal columns, auto color-tinted -->
<div class="grid-4">  <!-- 4 equal columns -->
```

---

## 6. Animations

| Animation | Usage |
|---|---|
| `coverGlowPulse` | Radial blue glow on cover and title hero slides. `6s ease-in-out infinite`. Scale 1→1.07, opacity 0.5→0.8 |
| `shimmerLine` | Gradient shimmer on `.cover-line` and `.divider`. `2.5–3s linear infinite` |
| `glowPulse` | Box-shadow pulsing glow on `.divider`. `2.5s ease-in-out infinite` |
| `spinSlow` | Symbol rotation (e.g. ✦ ⬡ ◈ on thank-you slide). Each at different speed/direction |
| `timelinePing` | Expanding ring on vertical timeline dots |
| `agendaPulse` | Staggered glow pulse on horizontal timeline dots (9s cycle, 3s stagger) |
| `fadeInUp` | Entrance animation for h2, subtitle, grids. `0.45s cubic-bezier(0.22,1,0.36,1)` |
| `subtlePop` | Scale-up entrance for metric cards. Staggered `0.2s–0.69s` |
| `progressShimmer` | Gradient sweep on top progress bar |
| Dot wave canvas | Organic animated dot field on `.slide-dots` slides. Params: grid spacing 42px, swoosh band sweeps diagonally |

---

## 7. Slide Sections (nav pills)
| `data-section` | Label |
|---|---|
| `intro` | Intro |
| `problem` | Problem |
| `system` | System |
| `components` | Components |
| `impact` | Impact |

---

## 8. Do / Don't Rules

### Do
- Use `--accent` blue for the primary brand color on all interactive and label elements
- Match icon stroke color to its accompanying label color — always the same
- Use serif (Hepta Slab) only for h1 and h2 — keep display text feeling editorial
- Use `font-weight: 400` for h1/h2 (the serif carries the visual weight)
- Use `letter-spacing: 0.18em` on overlines to maintain the structured, systematic feel
- Use `clamp()` for all heading sizes to ensure the deck is responsive
- Keep card backgrounds at `rgba(255,255,255,0.04)` — just barely lifted from the dark bg
- Use `border-radius: 12px` on cards, `10px` on image wrappers, `9px` on icon boxes
- Add `data-section` attribute to every slide to power the nav pills
- Use `coverGlowPulse` glow on title/hero slides that need presence
- Use `slide-dots` for content-heavy slides that need texture without distraction
- Use `slide-grid` for technical/system slides (architecture, components, tokens)
- Diamond bullet `◆` for inline lists inside cards when removing numbered labels

### Don't
- Don't use `font-weight: 700+` on h1/h2 — the serif does the work
- Don't mix more than 3 accent colors in one slide
- Don't crop images in `hero-left` layouts — prefer `object-fit:contain`
- Don't use the static CSS dot grid on `slide-dots` slides — canvas replaces it
- Don't use `background: #ffffff` alone — always pair with `slide-light` so CSS vars remap; use an ID override if pure white is required
- Don't add `!important` in inline styles for slides that use global hero layout rules — use an ID-based CSS rule instead to win specificity
- Don't use more than 4 tiles/cards in a vertical column on one slide half
- Don't mix h1 and h2 on the same slide — h1 is reserved for the cover and major title slides only

---

## 9. Image Rules

- All images live in the `Images/` folder, URL-encoded in `src` attributes
- Images in `hero-right` are full-bleed cover by default; add `img-fit` for contained
- Images in `hero-left` use `object-fit:contain`, left-aligned (`object-position: left center`)
- `uploaded-img-wrap` is the standard image container: `position:relative; border-radius:10px; overflow:hidden`
- Always set `display:block` on `<img>` tags to remove inline baseline gap

---

## 10. Viewport & Overflow Rules (Critical)

The deck is designed for a **1440x900** viewport (nav bar takes 60px, leaving 840px for slide content).

### Slide content must never overflow the viewport
- Default slide padding is `96px 80px 40px` (top, sides, bottom)
- Available content height = `840px - 96px - 40px = 704px`
- When slides have many elements (title + divider + grid of cards), reduce `padding-top` to `40px–60px` to gain vertical space
- **Always set `max-height` + `overflow:hidden` on cards/tiles that contain images** — images will naturally expand to their full height and push content below the fold
- When using `.grid-3` with `align-items:stretch`, ALL cards match the tallest card's height. If one card has stacked images, it will force all cards to overflow. Use `align-items:start` instead, or set explicit `max-height` on every card
- Add `flex:1;min-height:0;overflow:hidden` to grids that should fill remaining slide space

### Centering content vertically
- Use `justify-content:center` on the slide div (inline style)
- **Must also reduce `padding-top`** — the default 96px top padding shifts centered content downward. Use `padding-top:40px` when centering
- Example: `style="justify-content:center;padding-top:40px"`

---

## 11. Horizontal Slide Transitions

For panoramic image effects where two slides share a split image:

### CSS classes needed
```css
.slide.exit-left { opacity: 0; transform: translateX(-100%); }
.slide.exit-right { opacity: 0; transform: translateX(100%); }
.slide.enter-right { animation: slideFromRight 0.5s cubic-bezier(0.4,0,0.2,1) both; }
.slide.enter-left { animation: slideFromLeft 0.5s cubic-bezier(0.4,0,0.2,1) both; }
```

### JS logic in `goTo()` function
- Detect horizontal pairs: `(current===6&&i===7)||(current===7&&i===6)`
- Apply `exit-left`/`exit-right` instead of `exit-up`
- Apply `enter-right`/`enter-left` on the incoming slide
- **Disable default `translateY` transitions** on horizontal slides: `transform: none !important`
- **Disable the `fadeInUp` entrance animation** on horizontal slide content — it conflicts with the lateral slide transition

### Split image setup
- Image heights must be identical on both slides (e.g., `height:597px`)
- Slide A: image flushed right (`justify-content:flex-end`)
- Slide B: image flushed left (`justify-content:flex-start`)
- Both slides use `padding:0;flex-direction:row`

---

## 12. Tile / Card Layout Lessons

### Equal-height card grids
- `.grid-3` with `align-items:stretch` makes all cards the same height (matching the tallest) — good for visual consistency
- But if one card has tall content (e.g., stacked images), all cards become oversized
- **Fix:** Use `align-items:start` + explicit `max-height` on each card, OR constrain the image container inside the card

### Cards with images
- Always set `max-height` and `overflow:hidden` on card image containers
- Calculate available height: `slide height (840px) - padding top - padding bottom - title area (~200–250px) = available grid height`
- Set card `max-height` to that value minus a small buffer

### Nested tiles (tile-in-tile)
- Avoid `.ba-card` or `.card` inside a `.card` unless the visual nesting is intentional
- For simple highlight copy inside cards, use a plain `<p>` with colored `<strong>` — no need for a nested card wrapper
- For icon + label pairs without card styling, use a plain `<div>` with `display:flex;align-items:center;gap:10px` instead of `.card`

### Hugging content
- To make cards hug their content height (not stretch): remove `align-items:stretch` from the grid, or don't set `flex:1` on the grid
- To hug grid to content vertically (not fill the slide): remove `flex:1` from the grid container

---

## 13. Tag / Pill Centering

Tags use `display:inline-flex`. To center text inside pills:
- Use `justify-content:center` (NOT `text-align:center` — that doesn't work on flex items)
- For equal-width pills in a row: `style="flex:1;justify-content:center"`
- Match pill gap to the row above for visual alignment (e.g., `gap:14px` to match card gap)

---

## 14. Icon Consistency Rules

- **Never use emoji** (e.g., ↓, ⚡, ✦) as icons inside cards or tiles — always use SVG icons inside `.icon-box` containers
- Emoji are acceptable only in plain text contexts (metric numbers like "↓40%")
- Icon box pattern: `<div class="icon-box [color]"><svg ...></div>`
- Icon stroke color must match the `.icon-box` color variant
- Common icon SVGs (all 24x24 viewBox, stroke-based):
  - **Arrow down:** `<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>`
  - **Lightning bolt:** `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`
  - **Trend up:** `<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>`
  - **People:** `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>...`
  - **Bar chart:** `<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>`

---

## 15. Light Mode Slides

- Add `class="slide-light"` to flip CSS vars
- Add `class="slide-grid"` alongside for the line-grid background texture
- **Bullet dots on light slides:** Override with `#slide-XX .bullet-list li::before { background: #000; }` — default blue bullets are invisible on light backgrounds
- Light slides still use the same card/component patterns, just with auto-remapped colors

---

## 16. Image Positioning Tips

- **Negative margin** (`margin-top:-80px`) is a quick way to shift images up without restructuring layout
- For hero images at the bottom of a slide: use `margin:0 -80px` to bleed past side padding, with `border-radius:10px 10px 0 0` (rounded top corners only)
- **URL-encode folder names with spaces** in `src` attributes: `Images/Slide%209/file.jpg`
- When two formats exist (`.png` and `.jpg`), verify which one the `src` actually points to — mismatches cause broken images silently

---

## 17. Deployment (GitHub Pages)

- The deck can be hosted on GitHub Pages at a hidden path (e.g., `/d/orders-dashboard/`)
- Copy `index.html` + `Images/` folder into the repo subfolder
- The URL is unlisted — only people with the direct link can find it
- To update: copy latest files, commit, push to main — deploys in 1-2 minutes
- `gh` CLI can be installed manually via zip download from GitHub releases if Homebrew is unavailable

---

## 18. Generating a New Deck with These Rules

To generate a new presentation with this exact visual language:

1. **Use the same CSS custom properties** from Section 1 as `:root` variables
2. **Load the same fonts**: Inter (weights 300-900) + Hepta Slab via Google Fonts
3. **Replicate the component classes** exactly: `.card`, `.metric-card`, `.tag`, `.overline`, `.card-label`, `.bullet-list`, `.divider`, `.cover-line`
4. **Apply layout classes** as wrappers: `.hero-right`, `.hero-left`, `.hero-full`, `.grid-2/3/4`
5. **Add slide texture class** per content type: `slide-dots` (content), `slide-grid` (technical), none (default subtle grid)
6. **Include the keyframe animations**: `coverGlowPulse`, `shimmerLine`, `glowPulse`, `spinSlow`, `fadeInUp`, `subtlePop`, `progressShimmer`, `timelinePing`, `agendaPulse`
7. **Wire `data-section`** on each slide to match the nav pill sections
8. **Replicate the canvas dot-wave script** for `.slide-dots` backgrounds
9. **Follow Do/Don't rules** in Section 8 for color, type, and layout decisions
10. **Pre-calculate available content height** before building tile layouts (Section 10)
11. **Always set max-height on image-containing cards** to prevent overflow (Section 12)
12. **Use SVG icons in `.icon-box`, never emoji** for card/tile icons (Section 14)
13. **Center pills with `justify-content:center`**, not `text-align:center` (Section 13)
14. **When centering slides vertically**, always reduce `padding-top` alongside `justify-content:center` (Section 10)

---

## 19. Nav Component

### Files
- `shared/nav.js` — click handler + page transition logic (~60 lines)
- `shared/nav.css` — project-switcher layout + expand/collapse transitions

All decks load them with identical relative paths:
```html
<link rel="stylesheet" href="../shared/nav.css">
<script src="../shared/nav.js"></script>
```

### data-state values
Each `.nav-project` wrapper uses a `data-state` attribute to control visibility and animation:

| Value | Meaning |
|---|---|
| `collapsed` | Inactive project — shows single labeled pill |
| `expanded` | Active project — shows section buttons |
| `collapsing` | Animating from expanded → collapsed (set on click, briefly) |
| `expanding` | Animating from collapsed → expanded (set on click, briefly) |

### Animation variables (nav.js)
```js
var ANIM     = 260; // nav width animation duration (ms)
var FADE_OUT = 220; // page fade-out after nav finishes (ms)
var FADE_IN  = 380; // page fade-in on load (ms)
```

### Adding a 5th project pill
1. Create `new-project/index.html` with the same CSS/JS structure
2. Add `<link rel="stylesheet" href="../shared/nav.css">` and `<script src="../shared/nav.js"></script>`
3. Add a `.nav-project[data-state="expanded"]` block in the new file's nav
4. Add a `.nav-project[data-state="collapsed"]` pill in all other 4 files' navs
5. Set correct `data-href` relative paths (all at `../new-project/index.html` from sibling decks)
