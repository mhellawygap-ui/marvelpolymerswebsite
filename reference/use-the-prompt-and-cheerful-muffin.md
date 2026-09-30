# Plan: Marvel Polymers — Phase 7 Visual & Animation Upgrades

## Context

Multiple visual refinements and animation upgrades across key sections of the home page and About page, based on user review. All changes are additive — no section is being rebuilt from scratch.

---

## 1 — Hero: Remove eyebrow + microproof strip; preserve left-column height

**File:** `src/components/HeroSection.tsx`

- Delete `<div className="eyebrow">Industrial Polymer Solutions</div>`
- Delete the entire `<div className="microproof">...</div>` block (the three dot-icon proof points)
- To keep the left column the same visual height as the right (which has the image), add a `min-height` constraint or padding to the left column div so it doesn't visually shrink. The hero grid already uses `align-items: center`, so the right side's `min-height: 570px` keeps the row tall; no additional min-height needed on the left — just visually verify it still looks balanced.

---

## 2 — Why Marvel: Animated value cards + modern big numbers

**File:** `src/components/WhyMarvelSection.tsx` + `src/index.css`

**Animation:** Cards enter with a staggered fade-up animation triggered when the section scrolls into view. Use `IntersectionObserver` in a `useEffect` inside a wrapper component, adding an `.is-visible` class to the section when it enters the viewport.

**Number treatment:** Replace plain `.num` text with large, bold, semi-transparent decorative numbers — style as a giant background-style numeral behind the card content:

```css
.value .num {
  font-size: 5rem;         /* big */
  font-weight: 900;
  color: var(--navy);
  opacity: 0.07;           /* ghost behind content */
  line-height: 1;
  margin: 0 0 -2.5rem;    /* pulls content up over it */
  letter-spacing: -.05em;
}
```

**Stagger animation CSS:**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
.value { opacity: 0; }
.why-visible .value { animation: fadeUp .55s ease forwards; }
.why-visible .value:nth-child(1) { animation-delay: 0s; }
.why-visible .value:nth-child(2) { animation-delay: .1s; }
.why-visible .value:nth-child(3) { animation-delay: .2s; }
.why-visible .value:nth-child(4) { animation-delay: .3s; }
```

Add `ref` to the `<div className="value-grid">` and toggle `.why-visible` via IntersectionObserver once (disconnect after first trigger).

---

## 3 — Products: Force-flip on mobile + PP recycling triangle icon

**Files:** `src/components/ProductsSection.tsx` + `src/index.css`

**Mobile flip fix:** The existing `@media (hover: none)` rule already sets `transform: rotateY(180deg)` on `.product-card-inner` — but this applies to ALL touch cards. Instead, keep the flip card interactive on mobile by adding a `useState`-based click-to-flip per card. Wrap each card in a component `FlipCard` with local `flipped` state; clicking the front flips it, clicking the back flips it back. The CSS hover-flip stays for desktop.

**PP recycling triangle icon:** The `PP` chip on the PP card gets a plastic recycling triangle. Use inline SVG — the standard chasing-arrows triangle (♻ recycling symbol) rendered as SVG path. Place it:
- **Front side:** inside or beside the chip badge
- **Back side:** same position beside the chip badge

Define a small `RecycleIcon` component (inline SVG, ~20×20px, burgundy stroke) in `ProductsSection.tsx` and use it only on the PP card (detected by `chip === "PP"`).

---

## 4 — Global Markets: Change image to 1:1 aspect ratio

**File:** `src/index.css`

```css
/* Change: */
.markets-visual { aspect-ratio: 4 / 5; }
/* To: */
.markets-visual { aspect-ratio: 1 / 1; }
```

---

## 5 — Process Section: Animated steps

**File:** `src/components/ProcessSection.tsx` + `src/index.css`

**Animation concept:** Steps animate in sequentially left-to-right, each icon popping in with a scale+fade, followed by its label text fading up. A progress line draws itself across from left to right using a CSS animation on a `::after` pseudo-element.

**Implementation:**
- Use `IntersectionObserver` on the `.process` wrapper; add `.proc-visible` class when triggered
- Replace the static `::before` line with an animated pseudo-element:

```css
.process::before { /* existing static line */ }
.process::after {
  content: "";
  position: absolute; left: 8%; top: 35px; height: 1px;
  width: 0; background: var(--burgundy);
  transition: width 1.2s ease;
}
.proc-visible::after { width: 84%; }
```

- Steps: staggered scale + fade (each step delays by index × 0.15s)

```css
@keyframes stepIn {
  from { opacity: 0; transform: scale(.7) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.step { opacity: 0; }
.proc-visible .step { animation: stepIn .4s ease forwards; }
.proc-visible .step:nth-child(1) { animation-delay: .1s; }
/* ...through :nth-child(6) at .6s */
```

- Make the `.step .icon` circles visually modern: navy fill, white number, slightly larger (80×80px), with a colored ring on hover

---

## 6 — TDS card: Replace text label with icon

**File:** `src/components/ResourcesSection.tsx` + `src/index.css`

Replace the `.file-icon` text div (`TDS`) with an inline SVG document icon — a page with a folded corner and three horizontal lines suggesting text content. Keep the same `.file-icon` class sizing.

The SVG: a white/light-blue filled page outline (~44×54px viewBox) in navy/burgundy palette, with a folded top-right corner and 3 short lines across the middle.

---

## 7 — About Page: Principles cards — icon right, big modern number

**File:** `src/pages/AboutPage.tsx` + `src/index.css`

**Icon right:** Currently the layout is: `icon → number (eyebrow) → h3 → p`. Change to a flex row header: number on left (large decorative), h3+p below, icon floated to top-right corner of the card.

New card structure:
```tsx
<article className="principle">
  <div className="principle-header">
    <div className="principle-num">{p.num}</div>  {/* big ghost number */}
    <div className="principle-icon" style={{ color: "var(--burgundy)" }}>{p.icon}</div>
  </div>
  <h3>{p.title}</h3>
  <p>{p.desc}</p>
</article>
```

CSS for `.principle-header`:
```css
.principle-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
.principle-num { font-size: 3.5rem; font-weight: 900; color: var(--navy); opacity: .08; line-height: 1; letter-spacing: -.05em; }
.principle-icon svg { width: 32px; height: 32px; }
```

---

## 8 — About Page: Vision & Mission icons

**File:** `src/pages/AboutPage.tsx`

The Vision/Mission section uses `.story-grid` — two equal columns side by side. Each gets a meaningful inline SVG icon above the eyebrow label:

- **Vision:** A stylized eye or telescope SVG
- **Mission:** A target/crosshair SVG

Place icon above the eyebrow in each column div:
```tsx
<div>
  <div style={{ color: "var(--burgundy)", marginBottom: 12 }}><VisionIcon /></div>
  <div className="eyebrow">Vision</div>
  <h2>Trusted polymer solutions...</h2>
  ...
</div>
```

Icon size: 40×40px, burgundy stroke, `strokeWidth={1.5}`, clean line style.

---

## 9 — About Page: "Our Team" section with carousel

**File:** New `src/components/TeamSection.tsx` + updated `src/pages/AboutPage.tsx` + `src/index.css`

**Section placement:** Insert between "What Makes Marvel Different" and the Vision/Mission section in `AboutPage.tsx`.

**Design:** A horizontal auto-scrolling carousel strip of avatar cards. Each card: circular avatar image (from Unsplash person photos), name, and title below.

Team data (placeholder, editable):
```ts
const team = [
  { name: "Ahmed Al-Rashidi", title: "Managing Director", img: "https://images.unsplash.com/..." },
  { name: "Sara Khalil", title: "Technical Manager", img: "..." },
  // ...5-6 total
];
```

**Animation:** CSS `scroll-snap` horizontal carousel — no JS library needed. On desktop shows 4 cards, on tablet 2, on mobile 1. Arrows (prev/next) controlled via `useState` + `scrollLeft` on the track ref.

CSS:
```css
.team-track { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; scroll-behavior: smooth; }
.team-card { scroll-snap-align: start; flex: 0 0 calc(25% - 15px); text-align: center; }
.team-avatar { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin: 0 auto 12px; border: 3px solid var(--line); }
.team-name { font-weight: 700; color: var(--navy); font-size: 1rem; }
.team-title { font-size: .86rem; color: var(--muted); margin-top: 4px; }
```

---

## Files Modified

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Remove eyebrow + microproof strip |
| `src/components/WhyMarvelSection.tsx` | Add IntersectionObserver + `.why-visible` class toggle |
| `src/components/ProductsSection.tsx` | Click-to-flip per card; RecycleIcon on PP card |
| `src/components/ProcessSection.tsx` | Add IntersectionObserver + `.proc-visible` class toggle |
| `src/components/ResourcesSection.tsx` | Replace text `.file-icon` with inline SVG |
| `src/pages/AboutPage.tsx` | Principle card layout; Vision/Mission icons; add TeamSection |
| `src/components/TeamSection.tsx` | New team carousel component |
| `src/index.css` | Animation keyframes; `.num` decorative style; `.proc-visible`; `.principle-header`; `.team-*` classes; markets `aspect-ratio: 1/1` |

---

## Verification

- Hero left column height is visually balanced with the right image column — no awkward gap
- Why Marvel cards animate in on first scroll into view, staggered; numbers are large and ghost-like
- Product cards flip on click on mobile/touch; PP card shows recycling icon on both sides
- Global Markets image is square (1:1)
- Process steps animate in sequentially with a progress line drawing across
- TDS card shows a document icon instead of "TDS" text
- About page: principle cards have icon top-right, large ghost number top-left
- About page: Vision/Mission each have an SVG icon above the label
- About page: Team carousel scrolls horizontally, snaps to cards
