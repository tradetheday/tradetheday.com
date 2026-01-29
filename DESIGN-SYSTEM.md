# TradeTheDay Design System

> **SINGLE SOURCE OF TRUTH.** Do not override these values in component styles.
> When making changes, update this file FIRST, then update styles.css.

**Last Updated:** 2026-01-29

---

## GOLDEN RULES

1. **Never use arbitrary values** - Use tokens defined here
2. **Never override in components** - If a component needs different styling, add a variant here first
3. **When in doubt, go smaller** - Modern SaaS is compact, not spacious
4. **Test at 1280px width** - This is our reference viewport

---

## 1. SPACING SCALE (8px base)

```css
--space-xs: 8px;     /* Icon gaps, tight inline */
--space-sm: 16px;    /* Button padding, small gaps */
--space-md: 24px;    /* Component padding */
--space-lg: 32px;    /* Card padding, section gaps */
--space-xl: 48px;    /* Section padding */
--space-2xl: 64px;   /* Large section padding */
--space-3xl: 80px;   /* Reserved for homepage hero only */
```

**NEVER USE** raw pixel values. Always use these tokens.

---

## 2. TYPOGRAPHY

### Font Sizes (strict)
```css
--font-size-xs: 11px;   /* Badges, fine print */
--font-size-sm: 13px;   /* Captions, metadata */
--font-size-base: 15px; /* Body text */
--font-size-lg: 17px;   /* Lead paragraphs */
--font-size-xl: 19px;   /* Small headings */
--font-size-2xl: 22px;  /* H4 */
--font-size-3xl: 26px;  /* H3 */
--font-size-4xl: 32px;  /* H2 */
--font-size-5xl: 40px;  /* H1 - MAX SIZE */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

**RULES:**
- H1 max: 40px (2.5rem) - NEVER larger
- H2 max: 32px (2rem)
- Body: 15px standard
- Use `clamp()` for responsive, but set sensible max

---

## 3. BUTTONS (Precise Values)

### Size Tiers

| Size | Padding | Font | Height | Use For |
|------|---------|------|--------|---------|
| `.btn-sm` | 6px 12px | 13px | 32px | Inline actions, tags |
| `.btn-md` | 8px 16px | 14px | 40px | Standard actions |
| `.btn-lg` | 10px 20px | 15px | 44px | Primary CTAs |
| `.btn-xl` | 12px 24px | 16px | 48px | Hero CTAs |

### Button Rules
- **Default** = `.btn-md`
- **Hero sections** = `.btn-lg` (NOT xl or xxl)
- **Cards** = `.btn-md` or `.btn-sm`
- **Min touch target** = 40px height
- **Max button width** = 220px (use `.btn-hero` class)

### Border Radius
- `.btn-sm`, `.btn-md` = 6px
- `.btn-lg` = 8px
- `.btn-xl` = 10px

**FORBIDDEN:**
- Buttons larger than `.btn-xl`
- Padding larger than 12px 24px
- Font larger than 16px

---

## 4. HERO SECTIONS (Strict Protocol)

### Padding Tiers

| Tier | Padding | Mobile | Use For |
|------|---------|--------|---------|
| **Standard** | 48px top/40px bottom | 32px/24px | Most pages |
| **Large** | 56px top/48px bottom | 36px/28px | Money pages, partner codes |
| **Homepage** | 56px top/48px bottom | 32px/24px | Homepage only |

### Hero Typography

| Element | Desktop | Mobile | Weight |
|---------|---------|--------|--------|
| H1 | clamp(1.75rem, 4vw, 2.5rem) | ~28px | 700 |
| Subtitle | 16px | 15px | 400 |
| Badge | 12px | 11px | 600 |
| Trust items | 13px | 11px | 400 |

### Hero Rules
- **Max H1 size:** 2.5rem (40px) - NEVER exceed
- **Subtitle:** Always 16px, max-width 540px
- **Badge padding:** 6px 12px
- **CTA buttons:** Use `.btn-lg`, NOT `.btn-xl`
- **Trust row gap:** 20px desktop, 12px mobile
- **Content max-width:** 700px

**FORBIDDEN in heroes:**
- H1 larger than 2.5rem
- Padding larger than 56px
- Buttons larger than `.btn-lg`
- Subtitle larger than 16px

---

## 5. CARDS

### Standard Card
```css
padding: 24px;           /* --space-md */
border-radius: 12px;     /* --radius-md */
border: 1px solid var(--gray-200);
```

### Large Card (featured)
```css
padding: 32px;           /* --space-lg */
border-radius: 16px;     /* --radius-lg */
```

### Card Rules
- **Default padding:** 24px
- **Never exceed:** 32px padding
- **Hover:** translateY(-2px), not -4px or more
- **Shadow on hover:** shadow-md, not shadow-lg

---

## 6. SECTION SPACING

### Section Padding
```css
.section {
  padding: 48px 0;  /* --space-xl */
}

@media (max-width: 768px) {
  .section {
    padding: 32px 0;  /* --space-lg */
  }
}
```

### Between Sections
- Same background color: 0 gap (padding handles it)
- Different background colors: 0 gap

### Section Headers
```css
margin-bottom: 32px;  /* --space-lg */
```

---

## 7. FAQ COMPONENT

### Standard FAQ
```css
/* Question */
padding: 16px 20px;
font-size: 15px;
font-weight: 600;

/* Answer */
padding: 0 20px 16px;
font-size: 15px;
line-height: 1.6;
```

### FAQ Rules
- Questions: 15px, weight 600
- Answers: 15px, weight 400
- Gap between items: 8px
- Border radius: 8px
- Icon size: 20px

---

## 8. TESTIMONIALS

### Card Dimensions
```css
padding: 24px;
border-radius: 16px;
```

### Typography
- Name: 15px, weight 600
- Location: 13px, gray-500
- Quote: 15px, italic
- Stars: 14px

---

## 9. FORMS & INPUTS

### Input Fields
```css
padding: 10px 14px;
font-size: 15px;
border-radius: 8px;
min-height: 42px;
```

### Labels
```css
font-size: 13px;
font-weight: 600;
margin-bottom: 6px;
```

---

## 10. RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
@media (min-width: 480px) { }   /* Large phones */
@media (min-width: 768px) { }   /* Tablets */
@media (min-width: 1024px) { }  /* Laptops */
@media (min-width: 1280px) { }  /* Desktop - REFERENCE */
@media (min-width: 1536px) { }  /* Large screens */
```

### Mobile Reductions
| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero padding | 48-56px | 32px |
| Section padding | 48px | 32px |
| Card padding | 24px | 20px |
| H1 | 40px max | 28px |
| H2 | 32px | 24px |
| Button padding | as specified | reduce by ~20% |

---

## 11. COLORS (Quick Reference)

### Text
- Primary (light bg): `var(--charcoal)` #1E2427
- Secondary (light bg): `var(--gray-600)` #525252
- Primary (dark bg): `var(--white)` #fafbfc
- Secondary (dark bg): `rgba(255,255,255,0.7)`

### Backgrounds
- Light sections: `var(--white)` or `var(--gray-50)`
- Dark sections: `var(--charcoal)` or `var(--gray-900)`
- Cards: white with `var(--gray-200)` border

### Brand
- Primary orange: `#FF4800`
- Success green: `#10B981`
- Error red: `#EF4444`

---

## 12. COMPONENT CHECKLIST

Before creating/modifying any component, verify:

- [ ] Uses spacing tokens, not arbitrary pixels
- [ ] Font sizes from the scale
- [ ] Button size from defined tiers
- [ ] Padding within specified limits
- [ ] Responsive behavior defined
- [ ] Focus states included
- [ ] Touch targets >= 40px

---

## 13. ANTI-PATTERNS (DO NOT DO)

```css
/* BAD - arbitrary values */
padding: 120px 0;
font-size: 4rem;
padding: 18px 32px;

/* GOOD - use tokens */
padding: var(--space-xl) 0;
font-size: var(--font-size-5xl);
padding: 12px 24px; /* btn-xl spec */
```

```css
/* BAD - override in component */
.my-hero .btn {
  padding: 20px 40px !important;
}

/* GOOD - use existing variant or add new one to design system */
.btn-lg { ... }
```

---

## 14. SEO & ACCESSIBILITY (Mandatory)

### Heading Hierarchy

**RULE:** Headings must be sequential. Never skip levels.

```html
<!-- CORRECT -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
      <h4>Detail</h4>

<!-- WRONG - skips h2 and h3 -->
<h1>Page Title</h1>
  <h4>Feature Card Title</h4>  ❌
```

**Common mistake:** Using `<h4>` in feature cards within a section that has an `<h2>`. Use `<h3>` instead.

### Link Text

**RULE:** Links must have descriptive text. Never use generic phrases alone.

| Bad | Good |
|-----|------|
| "Learn more" | "Read our advertiser disclosure" |
| "Click here" | "View broker comparison" |
| "Read more" | "Read the full AvaTrade review" |

### Image Dimensions

**RULE:** All `<img>` elements MUST have explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).

```html
<!-- CORRECT -->
<img src="/logo.svg" alt="TradeTheDay" width="180" height="40">

<!-- WRONG - causes layout shift -->
<img src="/logo.svg" alt="TradeTheDay">
```

### Color Contrast (WCAG AA)

**RULE:** Text must have 4.5:1 contrast ratio against background. Use these safe combinations:

| Background | Minimum Text Color |
|------------|-------------------|
| White/Gray-50 | `var(--gray-600)` or darker |
| Gray-100 | `var(--gray-700)` or darker |
| Dark (charcoal) | `rgba(255,255,255,0.7)` or brighter |
| Green badge bg | `#047857` (not `#10B981`) |
| Orange badge bg | `#c2410c` (not `#FF4800`) |

**Common violations:**
- `var(--gray-400)` on white backgrounds ❌
- `var(--success)` (#10B981) on light green backgrounds ❌
- Low opacity white text on dark backgrounds ❌

### Typography (System Fonts)

**RULE:** This site uses **system fonts** for maximum performance. No external font requests.

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

This renders as:
- **Apple devices:** San Francisco
- **Windows:** Segoe UI
- **Android:** Roboto
- **Fallback:** Helvetica Neue, Arial

**Benefits:**
- Zero font download time
- Instant rendering (no FOUT/FOIT)
- Native look on every platform
- Better PageSpeed scores

**NEVER add Google Fonts or other external font requests.**

### Accessibility Checklist

Before shipping any page:

- [ ] Heading hierarchy is sequential (no skipped levels)
- [ ] All links have descriptive text
- [ ] All images have `width` and `height` attributes
- [ ] All images have meaningful `alt` text
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus states are visible on all interactive elements
- [ ] Touch targets are at least 44x44px on mobile

---

## 15. DESIGN PHILOSOPHY & PRINCIPLES

### Target User: "The Cautious Researcher"

Our primary user is someone:
- At a critical decision point (choosing a broker)
- Has been burned before or fears being scammed
- Needs reassurance, not pressure
- Values transparency over hype

**Design mantra:** *"Warm authority. Like a knowledgeable friend, not a pushy salesperson."*

---

### The Jony Ive Principles

Apply these principles to every design decision:

#### Core Philosophy

1. **"Simplicity is the ultimate sophistication"**
   - Remove everything that isn't essential
   - If you're unsure whether to include something, leave it out
   - Complexity is easy; simplicity requires discipline

2. **"Let the content breathe"**
   - Generous whitespace isn't empty—it gives words room to resonate
   - Compression creates anxiety; space creates confidence
   - When in doubt, add more padding

3. **"Confidence doesn't need to shout"**
   - Trust comes from calm authority, not visual noise
   - One accent color, used sparingly, is more powerful than many
   - Quiet design feels premium; loud design feels desperate

4. **"Every element earns its place"**
   - If it doesn't serve a purpose, remove it
   - Decorative elements must enhance, not distract
   - Ask: "What would happen if I removed this?"

5. **"Design is how it works"**
   - Beautiful design that confuses users has failed
   - Form follows function, always
   - The best interface is invisible

#### Practical Application

**When something feels "off":**
> *"The hero should feel like a quiet room with beautiful acoustics. Every element earns its place. The whitespace isn't empty—it's giving your words room to resonate."*

**When deciding on spacing:**
> *"Each element needs room to exist confidently. When you compress, you create tension. When you let things breathe, you create trust."*

**When choosing animations:**
> *"The pulse draws the eye gently, like a heartbeat—alive but calm. Never flash or blink. Breathe."*

**When stacking sections:**
> *"Light in. Contrast creates hierarchy. Dark sections anchor. Light sections relieve. Never stack two heavy sections without breathing room between."*

**When reviewing a completed design:**
> *"Would I be proud to show this to someone I respect? Does it feel inevitable, like it couldn't be any other way?"*

#### The "Ive Test" Checklist

Before shipping any page, ask:

- [ ] Can I remove anything without losing meaning?
- [ ] Does every element have generous breathing room?
- [ ] Is there only ONE thing competing for attention?
- [ ] Would this feel calm to someone who's anxious?
- [ ] Does the spacing follow mathematical harmony (8-point grid)?
- [ ] Are animations subtle (2+ seconds) not aggressive?
- [ ] Does contrast create clear hierarchy between sections?

---

### Stone Palette (Warm Greys)

We use warm stone greys instead of cold neutral greys for a friendlier feel:

```css
--stone-50:  #FAFAF9;   /* Lightest - subtle backgrounds */
--stone-100: #F5F5F4;   /* Light sections, trust bars */
--stone-200: #E7E5E3;   /* Borders, dividers */
--stone-300: #D6D3D1;   /* Disabled states */
--stone-400: #A8A29E;   /* Placeholder text */
--stone-500: #78716C;   /* Secondary text */
--stone-600: #57534E;   /* Body text */
--stone-700: #44403C;   /* Headings */
--stone-800: #292524;   /* Dark UI elements */
--stone-900: #1C1917;   /* Dark backgrounds, hero */
--stone-950: #0C0A09;   /* Deepest black */
```

**Why warm greys?** Cold greys (#f5f5f5, #666) feel corporate and clinical. Warm greys feel approachable and trustworthy—critical for financial decisions.

---

### 60-30-10 Color Rule

Balanced color distribution creates visual harmony:

| Proportion | Color | Usage |
|------------|-------|-------|
| **60%** | Stone-50/White | Primary backgrounds, content areas |
| **30%** | Stone-100/200 | Secondary backgrounds, cards, sections |
| **10%** | Brand Orange | CTAs, accents, highlights |

**Rule:** Orange (#EA580C) is precious. Use it only for:
- Primary CTA buttons
- Key accent text (sparingly)
- Important highlights

Never use orange for:
- Secondary buttons
- Body text
- Borders
- Large background areas

---

### Golden Ratio (1.618)

Apply the golden ratio for natural visual harmony:

**Typography Scale:**
```
Base: 16px
× 1.618 = 26px (H3)
× 1.618 = 42px (H1 max)
```

**Spacing Relationships:**
```
Small gap: 16px
Medium gap: 26px (16 × 1.618)
Large gap: 42px (26 × 1.618)
Section: 68px (42 × 1.618)
```

**Content Width Ratios:**
```
Hero content: 800px max
Sidebar: ~495px (800 ÷ 1.618)
```

---

### 8-Point Grid System

ALL spacing must align to multiples of 8:

| Token | Value | Use For |
|-------|-------|---------|
| 8px | 1× | Icon gaps, tight spacing |
| 16px | 2× | Button padding, small gaps |
| 24px | 3× | Component padding |
| 32px | 4× | Card padding, margins |
| 40px | 5× | Between content blocks |
| 48px | 6× | Section gaps |
| 56px | 7× | Large sections |
| 64px | 8× | Hero padding (mobile) |
| 80px | 10× | Hero padding (desktop) |
| 96px | 12× | Major section padding |

**Validation:** Before committing, check all spacing values divide evenly by 8.

---

### Von Restorff Effect (Isolation Effect)

The brain remembers what stands out. Apply this to CTAs:

**Button Hierarchy:**
```
Primary (Orange): Find My Perfect Broker ← ONE per viewport
Secondary (Dark): Compare All Brokers
Tertiary (Ghost): Learn More
```

**Rules:**
1. Only ONE orange button visible at a time
2. Secondary buttons use dark fill or outline
3. Links use text styling, not button styling
4. If everything stands out, nothing does

---

### Hick's Law (Decision Paralysis)

More choices = slower decisions = more abandonment.

**Navigation:** Max 5 primary items
**Hero CTAs:** Max 2 buttons
**Feature grids:** Max 6 items visible
**Broker cards:** Max 6 on homepage

---

### Visual Hierarchy Checklist

For every section, verify this order of prominence:

1. **Primary:** Headline (largest, boldest)
2. **Secondary:** Subhead/supporting text
3. **Tertiary:** Body content
4. **Accent:** CTA button (color draws eye)
5. **Supporting:** Trust signals, metadata

If any element competes with the one above it, reduce its visual weight.

---

### Contrast Creates Hierarchy

Use background contrast to separate sections:

```
Dark hero → Light trust bar → Light bonus → White content
```

**Pattern:**
- Dark sections: Primary messaging, final CTAs
- Light sections (stone-100): Supporting info, trust signals
- White sections: Main content, cards, features

Never stack two dark sections or two identical backgrounds without purpose.

---

### Animation Principles

**Subtle breathing > Aggressive flashing**

```css
/* GOOD - Gentle pulse for final CTA */
animation: pulse-glow 2.5s ease-in-out infinite;

/* BAD - Attention-grabbing flash */
animation: blink 0.5s linear infinite;
```

**Rules:**
- Duration: 2-3 seconds for ambient animations
- Easing: ease-in-out for natural feel
- Scale: Never scale buttons, only shadows/glows
- Frequency: Max 1 animated element per viewport

---

### Homepage Hero Spacing (Reference)

Current optimized values following 8-point grid:

| Element | Desktop | Mobile |
|---------|---------|--------|
| Hero padding top | 80px (10×8) | 56px (7×8) |
| Hero padding bottom | 96px (12×8) | 64px (8×8) |
| Trust bar → H1 | 48px (6×8) | 32px (4×8) |
| H1 → Subhead | 32px (4×8) | 24px (3×8) |
| Subhead → CTAs | 40px (5×8) | 32px (4×8) |

---

### Mobile-First Responsive Text

Use shorter copy on mobile when needed:

```html
<span class="text-full">Find My Perfect Broker</span>
<span class="text-short">Find Broker</span>
```

**Breakpoint:** 768px switches between versions.

---

## 16. HOMEPAGE PATTERNS (2026 Reference)

These patterns were refined on the homepage and should be applied site-wide.

---

### Icons: SVG Stroke, No Emojis

**RULE:** Never use emojis. Always use clean SVG stroke icons.

```html
<!-- GOOD - Clean SVG stroke icon -->
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
  <line x1="7" y1="7" x2="7.01" y2="7"/>
</svg>

<!-- BAD - Emoji -->
🎁 ❌
```

**Icon sources:** Lucide, Feather, Heroicons (stroke variants)

---

### Hover Glow Effects

**Icon-only glows** - Don't glow entire buttons, just icons.

```css
/* Green glow for featured/deal items */
.featured-link:hover svg {
  color: #16A34A;
  filter: drop-shadow(0 0 6px rgba(74, 222, 128, 0.8));
}

/* Orange glow for trending items */
.trending-link svg {
  color: #16A34A;
  filter: drop-shadow(0 0 6px rgba(74, 222, 128, 0.6));
  animation: trending-glow 2s ease-in-out infinite;
}
```

**Color meanings:**
- **Orange (#EA580C):** Primary CTA, brand accent
- **Green (#4ADE80):** Trending, profit, success, deals

---

### Faded Labels & Subtle Text

For chart annotations, secondary labels, and supporting text:

```css
/* Faded percentage labels */
.chart-label {
  color: rgba(255, 255, 255, 0.35);
  font-size: 10px;
  font-weight: 600;
}

/* Success/profit labels */
.chart-label--profit {
  color: rgba(74, 222, 128, 0.5);
  text-shadow: 0 0 8px rgba(74, 222, 128, 0.3);
}
```

---

### Uniform Card Heights

Use CSS Grid to ensure all cards are same height with buttons aligned at bottom.

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr; /* KEY: Forces equal heights */
  gap: 24px;
}

.card {
  display: flex;
  flex-direction: column;
}

.card-cta {
  margin-top: auto; /* KEY: Pushes button to bottom */
}
```

---

### Button Grids (Uniform Size)

For link grids like "Popular Comparisons":

```css
.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

@media (min-width: 768px) {
  .button-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.button-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  height: 48px; /* Fixed height for uniformity */
  font-size: 13px;
  font-weight: 500;
  border-radius: 10px;
  border: 1px solid var(--stone-200);
  transition: all 0.2s ease;
}
```

---

### Full-Bleed Dark Sections

For newsletter, final CTA, or emphasis sections:

```css
.full-bleed-dark {
  background: linear-gradient(180deg, #1C1917 0%, #0C0A09 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 64px 0;
}

/* Text colors on dark */
.full-bleed-dark h2 { color: #FAFAF9; }
.full-bleed-dark p { color: #A8A29E; }
```

---

### Pulsing CTA Button

For final/primary CTA buttons that need attention:

```css
.btn-pulse {
  animation: btn-pulse 2.5s ease-in-out infinite;
}

@keyframes btn-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(234, 88, 12, 0);
  }
}
```

**Rule:** Only ONE pulsing button per page.

---

### Social Proof Avatars

Overlapping avatar stack for trust:

```css
.avatar-stack {
  display: flex;
}

.avatar-stack img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #1C1917;
  margin-left: -8px;
}

.avatar-stack img:first-child {
  margin-left: 0;
}
```

---

### Accordion FAQ (One Open at a Time)

Boxes stay at top, content overlays, single expansion:

```html
<details class="faq-item">
  <summary class="faq-trigger">Question text</summary>
  <div class="faq-content">
    <h4 class="faq-content-title">Content Title</h4>
    <p>Answer content...</p>
  </div>
</details>
```

```javascript
// Single expansion behavior
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.open = false;
      });
    }
  });
});
```

---

### Chart Data Points

For hero charts with climbing animation:

```css
.chart-point {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: point-fade-in 0.5s ease-out forwards;
}

/* Staggered appearance */
.chart-point:nth-child(1) { animation-delay: 0.6s; }
.chart-point:nth-child(2) { animation-delay: 1.2s; }
.chart-point:nth-child(3) { animation-delay: 1.8s; }
.chart-point:nth-child(4) { animation-delay: 2.4s; }

.chart-dot {
  width: 10px;
  height: 10px;
  background: #EA580C;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(234, 88, 12, 0.6);
}

.chart-line-v {
  width: 1px;
  height: 32px;
  background: linear-gradient(to top, rgba(234, 88, 12, 0.5), transparent);
}
```

---

### Text Shortening for Mobile

Keep button/link text concise:

| Full Text | Shortened |
|-----------|-----------|
| AvaTrade Partner Code | Ava Partner Code |
| Pepperstone vs IC Markets | Pepperstone vs IC |
| All Bonus Codes $50k+ | Bonus Codes $50k+ |

**Rule:** If text wraps to 2 lines on mobile, shorten it.

---

## 17. CHANGELOG

### 2026-01-29 (v3)
- **NEW:** Added Section 16: Homepage Patterns (2026 Reference)
- SVG stroke icons (no emojis) documentation
- Icon-only hover glow effects (green for deals, orange for trending)
- Faded labels and subtle text patterns
- Uniform card heights with CSS Grid
- Button grids with fixed 48px height
- Full-bleed dark section styling
- Pulsing CTA button animation
- Social proof avatar stack
- Accordion FAQ (single expansion) pattern
- Chart data points with staggered animation
- Text shortening guidelines for mobile

### 2026-01-29 (v2)
- **EXPANDED:** Jony Ive Principles section
- Added practical application quotes for specific scenarios
- Added "The Ive Test" checklist for pre-ship review
- Detailed guidance for spacing, animations, section stacking

### 2026-01-29
- **NEW:** Added Section 15: Design Philosophy & Principles
- Jony Ive design principles (simplicity, breathing room, confidence)
- Stone palette documentation (warm greys)
- 60-30-10 color rule
- Golden ratio applications
- 8-point grid comprehensive guide
- Von Restorff effect (button hierarchy)
- Hick's Law (decision paralysis)
- Visual hierarchy checklist
- Contrast and section flow patterns
- Animation principles
- Homepage hero spacing reference
- Mobile-first responsive text patterns

### 2026-01-22 (PM - v2)
- **MAJOR:** Switched to system font stack (removed Google Fonts)
- Zero external font requests = faster PageSpeed
- Updated typography documentation

### 2026-01-22 (PM)
- **NEW:** Added Section 14: SEO & Accessibility rules
- Heading hierarchy requirements
- Descriptive link text rules
- Image dimension requirements
- Color contrast guidelines (WCAG AA)
- Font preloading rules
- Accessibility checklist

### 2026-01-22
- **MAJOR:** Reduced all sizing to modern SaaS standards
- Hero padding: 120/80/64 → 56/48/48
- Hero H1: 4rem → 2.5rem max
- Buttons: Precise pixel values, smaller overall
- Font sizes: Reduced scale
- Added strict rules and anti-patterns
- Reference: AccuRanker-style compact design

### 2026-01-21
- Initial design system created
- Added accessibility requirements
- Created dark theme (tools.css)
