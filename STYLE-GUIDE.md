# TradeTheDay.com Design & Style Guide

**Version:** 2.0
**Last Updated:** January 2026
**Status:** ENFORCED - All contributions must comply
**Reference Standard:** `/src/pages/brokers/avatrade-review/index.astro`

---

## Table of Contents

1. [Zero Tolerance Policy](#1-zero-tolerance-policy)
2. [Design Principles](#2-design-principles)
3. [Color System](#3-color-system)
4. [Typography](#4-typography)
5. [Spacing System](#5-spacing-system)
6. [Border Radius](#6-border-radius)
7. [Shadows](#7-shadows)
8. [Buttons](#8-buttons)
9. [Cards](#9-cards)
10. [Layout & Grid](#10-layout--grid)
11. [Hero Sections](#11-hero-sections)
12. [Components](#12-components)
13. [Dark Theme](#13-dark-theme)
14. [Accessibility](#14-accessibility)
15. [Responsive Design](#15-responsive-design)
16. [File Organization](#16-file-organization)
17. [Do's and Don'ts](#17-dos-and-donts)
18. [Quick Reference](#18-quick-reference)

---

## 1. Zero Tolerance Policy

### NO INLINE STYLES

**CRITICAL:** This is a STRICT NO INLINE STYLES codebase. ANY `style=""` attribute is FORBIDDEN.

#### Approved Exceptions (ONLY these)

```astro
<!-- Dynamic progress bar -->
<div class="progress-bar" style={`width: ${percentage}%`}></div>

<!-- Dynamic grid columns -->
<div class="scorecard" style={`grid-template-columns: repeat(${columns}, 1fr)`}></div>

<!-- Show/hide toggles -->
<div style={`display: ${isOpen ? 'block' : 'none'}`}></div>
```

#### Prohibited Usage

- Static styling that could be CSS classes
- Layout and positioning rules
- Typography, colors, spacing
- Any constant style across renders

---

## 2. Design Principles

### Core Philosophy

> "Every pixel serves a purpose. Spacing is not emptiness—it's breathing room for ideas."

### Guiding Rules

1. **Mathematical Consistency** - All spacing uses an 8px grid
2. **Brand First** - Orange (#FF4800) is the hero; use intentionally
3. **Accessibility Always** - WCAG AA minimum, 44px touch targets
4. **Performance Matters** - System fonts, minimal CSS, no bloat
5. **Mobile Excellence** - Design mobile-first, enhance for desktop

### The 3 Questions

Before every design decision:

1. Does this serve the user's goal?
2. Does this follow the design system?
3. Can this be simpler?

---

## 3. Color System

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-orange` | `#FF4800` | Primary CTAs, links, highlights |
| `--brand-orange-dark` | `#e63e00` | Hover states, gradients |
| `--brand-orange-light` | `#ff5c1a` | Light accents, borders |

**RULE:** Orange is for actions and emphasis only. Never body text or large backgrounds.

### Neutral Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--charcoal` | `#1E2427` | Primary text, dark backgrounds |
| `--charcoal-light` | `#2a3136` | Secondary dark surfaces |
| `--charcoal-dark` | `#171b1e` | Darkest backgrounds |
| `--white` | `#fafbfc` | Light backgrounds, text on dark |

### Gray Scale

```css
--gray-50:  #fafafa   /* Subtle backgrounds */
--gray-100: #f5f5f5   /* Alt section backgrounds */
--gray-200: #e5e5e5   /* Borders, dividers */
--gray-300: #d4d4d4   /* Disabled borders */
--gray-400: #a3a3a3   /* Placeholder text */
--gray-500: #737373   /* Muted text */
--gray-600: #525252   /* Secondary text */
--gray-700: #404040   /* Strong secondary */
```

**RULE:** Use `--gray-600` for secondary text. Never lighter than `--gray-500`.

### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--success` | `#10B981` | Positive states, confirmations |
| `--error` | `#EF4444` | Errors, warnings, destructive |
| `--warning` | `#ffc107` | Caution states |
| `--info` | `#0693e3` | Informational states |

**RULE:** Semantic colors are for status only. Never decorative.

### Gradients

```css
/* Primary - Buttons, CTAs */
linear-gradient(135deg, #FF4800 0%, #e63e00 100%)

/* Hero - Section backgrounds */
linear-gradient(135deg, #FF4800 0%, #0693e3 50%, #9b51e0 100%)

/* Dark - Header, footer */
linear-gradient(135deg, #1E2427 0%, #2a3136 100%)
```

---

## 4. Typography

### Font Family

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**RULE:** Never add additional fonts. Inter handles all use cases.

### Font Sizes

| Token | Size | Usage |
|-------|------|-------|
| `--font-size-xs` | 12px | Fine print, badges |
| `--font-size-sm` | 14px | Captions, metadata |
| `--font-size-base` | 16px | Body text (default) |
| `--font-size-lg` | 18px | Lead paragraphs |
| `--font-size-xl` | 20px | Card titles |
| `--font-size-2xl` | 24px | H4 headings |
| `--font-size-3xl` | 32px | H3 headings |
| `--font-size-4xl` | 40px | H2 headings |
| `--font-size-5xl` | 48px | H1 headings |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `--font-weight-normal` | 400 | Body text |
| `--font-weight-medium` | 500 | Slight emphasis |
| `--font-weight-semibold` | 600 | Labels, card titles |
| `--font-weight-bold` | 700 | Headings, CTAs |
| `--font-weight-extrabold` | 800 | H1 only |

### Heading Classes (REQUIRED)

```html
<h1 class="heading-1">Page Title</h1>      <!-- 48px, 800 weight -->
<h2 class="heading-2">Section Title</h2>   <!-- 40px, 700 weight -->
<h3 class="heading-3">Subsection</h3>      <!-- 32px, 700 weight -->
<h4 class="heading-4">Card Title</h4>      <!-- 20px, 600 weight -->
<h5 class="heading-5">Minor Heading</h5>   <!-- 18px, 600 weight -->
```

**RULE:** NEVER use raw `<h1>`-`<h6>` without heading classes.

### Body Classes

```html
<p class="body-large">Lead paragraph</p>   <!-- 18px -->
<p class="body">Standard body</p>          <!-- 16px -->
<p class="body-small">Secondary text</p>   <!-- 14px -->
<p class="body-xs">Fine print</p>          <!-- 12px -->
```

### Line Heights

- Headings: `1.1`
- Body text: `1.6`

---

## 5. Spacing System

### The 8px Grid

All spacing MUST be multiples of 8px. **No exceptions.**

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 8px | Inline elements, micro gaps |
| `--space-sm` | 16px | Tight groupings |
| `--space-md` | 24px | Default component padding |
| `--space-lg` | 32px | Card padding, gaps |
| `--space-xl` | 48px | Section gaps |
| `--space-2xl` | 64px | Major section divisions |
| `--space-3xl` | 96px | Hero elements |
| `--space-4xl` | 120px | Homepage hero only |

### Semantic Aliases

```css
--space-content: 24px;     /* Between paragraphs */
--space-component: 48px;   /* Between components */
--space-section: 64px;     /* Between sections */
--space-hero: 96px;        /* Hero elements */
```

### Section Padding

| Class | Padding | Usage |
|-------|---------|-------|
| `.section` | 120px 0 | Default sections |
| `.section-sm` | 80px 0 | Compact sections |
| `.section-lg` | 160px 0 | Spacious sections |

**RULES:**
- Never use arbitrary values (17px, 23px)
- Use tokens (`--space-md`) not raw values
- Margins collapse; padding doesn't

---

## 6. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Buttons, tags |
| `--radius-md` | 12px | Input fields |
| `--radius-lg` | 16px | Cards, containers |
| `--radius-xl` | 24px | Large cards, modals |
| `--radius-2xl` | 32px | Hero sections |
| `--radius-full` | 50px | Pills, avatars |

**RULE:** Match radius to element size. Small elements = small radius.

---

## 7. Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 2px 4px rgba(0,0,0,0.04)` | Subtle |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` | Light |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.08)` | Medium |
| `--shadow-xl` | `0 12px 32px rgba(0,0,0,0.1)` | Strong |
| `--shadow-brand` | `0 4px 16px rgba(255,72,0,0.25)` | Orange glow |

**RULES:**
- `--shadow-brand` for primary CTAs only
- Shadows intensify on hover, not appear
- Never use box-shadow for borders

---

## 8. Buttons

### Base Structure

```html
<a href="#" class="btn btn-primary">Primary Action</a>
<a href="#" class="btn btn-secondary">Secondary Action</a>
<a href="#" class="btn btn-outline">Tertiary Action</a>
<a href="#" class="btn btn-ghost">Subtle Action</a>
```

### Variants

| Class | Background | Use Case |
|-------|------------|----------|
| `.btn-primary` | Orange gradient | Main CTA (1 per section max) |
| `.btn-secondary` | Light orange 10% | Secondary actions |
| `.btn-outline` | Transparent + border | Tertiary actions |
| `.btn-ghost` | Transparent | Subtle actions |

### Sizes

| Class | Padding | Font Size | Min Height |
|-------|---------|-----------|------------|
| `.btn-sm` | 8px 16px | 14px | 36px |
| `.btn-md` | 16px 32px | 16px | 44px |
| `.btn-lg` | 24px 48px | 18px | 48px |
| `.btn-xl` | 32px 96px | 20px | — |

### Modifiers

```html
<a class="btn btn-primary btn-full">Full Width</a>
<a class="btn btn-primary btn-pill">Pill Shape</a>
<a class="btn btn-primary btn-hero">Hero CTA</a>
```

**RULES:**
- One primary button per visible viewport
- Minimum 44px touch target
- Use `<a>` for navigation, `<button>` for actions

---

## 9. Cards

### Base Card

```html
<div class="card">
  <h3 class="heading-4">Card Title</h3>
  <p class="body">Card content.</p>
</div>
```

### Variants

| Class | Modifier | Usage |
|-------|----------|-------|
| `.card` | Default | Standard card |
| `.card-compact` | Less padding | Dense layouts |
| `.card-spacious` | More padding | Premium feel |
| `.card-borderless` | Shadow only | Floating cards |
| `.card-elevated` | Strong shadow | Emphasized |

### Hover State (automatic)

```css
.card:hover {
  border-color: var(--brand-orange);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
```

**RULES:**
- Cards always have hover states if interactive
- Featured cards get orange border (not background)
- Content is left-aligned (titles can be centered)

---

## 10. Layout & Grid

### Containers

| Class | Max Width | Usage |
|-------|-----------|-------|
| `.container` | 1200px | Default |
| `.container-sm` | 800px | Narrow (articles) |
| `.container-lg` | 1400px | Wide layouts |
| `.container-wide` | 1440px | Full-width |

### Grid System

```html
<div class="grid-2">Two columns</div>
<div class="grid-3">Three columns</div>
<div class="grid-4">Four columns</div>
```

Grid gaps default to 48px (`--space-xl`).

**RULES:**
- CSS Grid for 2D layouts
- Flexbox for 1D alignment
- Always set gap, never margin between items

---

## 11. Hero Sections

### 3-Tier System

| Class | Padding | Usage |
|-------|---------|-------|
| `.hero-standard` | 64px | Default pages |
| `.hero-large` | 80px | Reviews, premium |
| `.hero-xl` | 120px | Homepage only |

### Structure

```html
<section class="hero hero-standard">
  <div class="container">
    <h1 class="heading-1">Page Title</h1>
    <p class="body-large">Description.</p>
    <a href="#" class="btn btn-primary btn-lg">CTA</a>
  </div>
</section>
```

### Rules

1. H1 is white on dark heroes
2. Maximum 2 lines for description
3. One primary CTA, optionally one secondary
4. Trust badges below CTA

---

## 12. Components

### Available Components

| Component | Usage |
|-----------|-------|
| `Breadcrumb.astro` | Navigation trail |
| `Card.astro` | Content containers |
| `CardGrid.astro` | Card layouts |
| `FAQ.astro` | Question/answer |
| `ProsCons.astro` | Comparison lists |
| `Rating.astro` | Star ratings |
| `Scorecard.astro` | Data display |
| `Testimonials.astro` | User quotes |
| `TrustBadges.astro` | Regulation logos |
| `Hero.astro` | Page heroes |

### Usage

```astro
---
import Card from '../components/Card.astro';
import FAQ from '../components/FAQ.astro';
---

<Card title="Title" variant="elevated">Content</Card>
<FAQ questions={faqData} />
```

**RULE:** Always use components before creating custom HTML.

---

## 13. Dark Theme

### When to Use

- Tool pages (calculators)
- Footer / Header
- Hero sections

### Tokens

```css
/* Background */
background: #0a0a0a;

/* Surfaces */
background: #171b1e;
border: 1px solid #1E2427;

/* Text */
color: var(--white);                    /* Primary */
color: rgba(255, 255, 255, 0.8);        /* Secondary */
color: rgba(255, 255, 255, 0.6);        /* Muted */
```

**RULES:**
- Never pure white (#fff) on dark
- Text opacity minimum 0.6
- Orange accent remains #FF4800

---

## 14. Accessibility

### Requirements

- WCAG AA contrast (4.5:1 for text)
- 44px minimum touch targets
- Focus states on all interactives
- Screen reader support for icons

### Focus States

```css
:focus-visible {
  outline: 2px solid var(--brand-orange);
  outline-offset: 2px;
}
```

### Screen Reader

```html
<span class="sr-only">Description</span>
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 15. Responsive Design

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | < 768px | Single column |
| Tablet | 768-1023px | 2 columns |
| Desktop | 1024px+ | Full layout |

### Adjustments

- Hero padding: 120px → 48px (mobile)
- Grid: 4 → 2 → 1 columns
- Use `clamp()` for fluid typography

### Classes

```html
<div class="hide-mobile">Desktop only</div>
<div class="show-mobile">Mobile only</div>
```

---

## 16. File Organization

### CSS Structure

```
src/styles/
├── styles.css          # Main design system
├── global.css          # Base resets
├── spacing-system.css  # Spacing utilities
├── utilities.css       # Helper classes
├── tools.css           # Dark theme (tools)
├── hero-components.css # Hero standardization
└── pages/              # Page-specific CSS
```

### Import Pattern

```astro
---
import '../styles/pages/page-name.css';
import BaseLayout from '../layouts/BaseLayout.astro';
---
```

### Naming

- CSS classes: `kebab-case` (`.section-header`)
- Component files: `PascalCase` (`Hero.astro`)
- Page CSS: `page-name.css`

---

## 17. Do's and Don'ts

### DO

- Use design tokens, not raw values
- Follow the 8px grid
- Test on mobile first
- Use semantic HTML
- Add alt text to images
- Keep CTAs above the fold
- Use existing components

### DON'T

- Add new fonts
- Use arbitrary spacing (17px)
- Create new colors
- Use `!important` (except overrides)
- Nest > 3 levels in CSS
- Use inline styles
- Skip hover/focus states

### Code Style

```css
/* CORRECT */
.card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  background: var(--white);
}

/* INCORRECT */
.card {
  padding: 32px;
  border-radius: 16px;
  background: #fafbfc;
}
```

---

## 18. Quick Reference

### Essential Imports

```astro
---
import '../styles/pages/page-name.css';
import BaseLayout from '../layouts/BaseLayout.astro';
import Breadcrumb from '../components/Breadcrumb.astro';
import Card from '../components/Card.astro';
import CardGrid from '../components/CardGrid.astro';
import FAQ from '../components/FAQ.astro';
import Scorecard from '../components/Scorecard.astro';
import TrustBadges from '../components/TrustBadges.astro';
---
```

### Page Template

```astro
<BaseLayout title="Page Title" description="Description">
  <Fragment slot="breadcrumb">
    <Breadcrumb items={breadcrumbItems} />
  </Fragment>

  <!-- Hero -->
  <section class="hero hero-standard">
    <div class="container">
      <h1 class="heading-1">Page Title</h1>
      <p class="body-large">Description</p>
      <a href="#" class="btn btn-primary btn-lg">CTA</a>
    </div>
  </section>

  <TrustBadges variant="light" compact={true} />

  <!-- Content -->
  <section class="section">
    <div class="container">
      <h2 class="heading-2">Section Title</h2>
      <!-- Content -->
    </div>
  </section>
</BaseLayout>
```

### Exceptions Log

| Component | Inline Style | Justification |
|-----------|--------------|---------------|
| Scorecard | grid-template-columns | Dynamic columns |
| AnalystNotes | display toggle | Expand/collapse |
| Progress bars | width % | Dynamic values |

---

## 19. Bento Grid System

Premium editorial-style grid for showcasing features and value propositions.

### Grid Layout

Uses a 12-column grid for asymmetric, editorial layouts:

```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-lg);
}
```

| Breakpoint | Columns | Layout |
|------------|---------|--------|
| Desktop (1024px+) | 12-column | Hero: 7col×2row, Features: 5col |
| Tablet (768px) | 2-column | Hero: span 2 |
| Mobile (<768px) | 1-column | Stacked |

### Card Variants

#### Hero Card (`.bento-hero`)

The dominant feature card spanning multiple columns/rows.

```css
.bento-hero {
  background: linear-gradient(145deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%);
  border: 1px solid rgba(255, 72, 0, 0.2);
  min-height: 380px;
}
```

**Elements:**
- Background SVG chart with gradient fill
- Dual glow orbs for depth
- Animated icon with pulsing rings
- Stats row with dividers
- CTA button (not text link)

#### Feature Card (`.bento-feature`)

Standard feature cards with animated visuals.

```css
.bento-feature {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-2xl);
  padding: var(--space-lg);
}
```

**Visual Types:**
- **Bar Chart**: Animated bars that grow on hover
- **Book Stack**: Layered pages that fan out on hover

#### Bonus Card (`.bento-bonus`)

High-value offer card with distinct green theme.

```css
.bento-bonus {
  background: linear-gradient(145deg, #0d3320 0%, #0a2818 100%);
  border-color: rgba(16, 185, 129, 0.3);
}
```

**Elements:**
- Large value display (`$10K`)
- Glowing text effect
- Green accent color (`#10B981`)

#### Markets Card (`.bento-markets`)

Horizontal card showcasing market variety.

```css
.bento-markets {
  background: linear-gradient(145deg, #1a1f2e 0%, #0f1419 100%);
  flex-direction: row;
  align-items: center;
}
```

**Market Orbs:**
| Market | Gradient |
|--------|----------|
| Forex | `#0693e3 → #0570b0` |
| Crypto | `#f7931a → #d97b00` |
| Indices | `#9b51e0 → #7b3db8` |
| Commodities | `#10B981 → #0d9668` |

### Visual Elements

#### Glow Effects

```css
.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.hero-glow-1 {
  width: 300px;
  height: 300px;
  background: rgba(255, 72, 0, 0.15);
}

.hero-glow-2 {
  width: 200px;
  height: 200px;
  background: rgba(6, 147, 227, 0.1);
}
```

#### Pulsing Ring Animation

```css
.icon-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 72, 0, 0.2);
  animation: ring-pulse 3s ease-out infinite;
}

@keyframes ring-pulse {
  0% { opacity: 0.6; transform: scale(0.8); }
  100% { opacity: 0; transform: scale(1.2); }
}
```

Stagger rings with `animation-delay: 0.5s` increments.

#### Animated Bar Chart

```css
.bar {
  width: 24px;
  border-radius: 6px 6px 0 0;
  background: linear-gradient(180deg, var(--brand-orange) 0%, rgba(255, 72, 0, 0.3) 100%);
  transition: height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Default heights */
.bar-1 { height: 40%; }
.bar-2 { height: 65%; }
.bar-3 { height: 50%; }
.bar-4 { height: 80%; }

/* Hover heights */
.bento-feature:hover .bar-1 { height: 55%; }
.bento-feature:hover .bar-2 { height: 80%; }
/* etc. */
```

#### Book Stack Animation

```css
.book-page {
  position: absolute;
  border-radius: 4px 12px 12px 4px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-1 { transform: rotate(-3deg) translateX(-8px); }
.page-2 { transform: rotate(-1deg) translateX(-4px); }
.page-3 { transform: rotate(1deg); }

/* Hover - fan out */
.bento-feature:hover .page-1 { transform: rotate(-8deg) translateX(-12px); }
```

### Typography Patterns

#### Section Header

```html
<div class="section-header">
  <span class="section-eyebrow">Everything Included</span>
  <h2 class="heading-2">What You Get <span class="text-gradient">(100% Free)</span></h2>
  <p class="body-large">Subheading text</p>
</div>
```

#### Eyebrow Text

```css
.section-eyebrow {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--brand-orange);
}
```

#### Gradient Text

```css
.text-gradient {
  background: linear-gradient(135deg, var(--brand-orange) 0%, #ff6b35 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### Feature Numbers

```css
.feature-number {
  font-size: 11px;
  font-weight: 700;
  color: var(--gray-400);
  letter-spacing: 1px;
}
```

### Badge Component

```css
.bento-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 72, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 72, 0, 0.3);
  color: var(--brand-orange);
  padding: 8px 14px;
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--brand-orange);
  border-radius: 50%;
  animation: pulse-badge 2s infinite;
}
```

### Hover Transitions

All bento cards use this easing for premium feel:

```css
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

**Hover State:**
```css
.bento-card:hover {
  border-color: rgba(255, 72, 0, 0.4);
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.02),
    0 12px 24px rgba(0, 0, 0, 0.04),
    0 24px 48px rgba(0, 0, 0, 0.06);
  transform: translateY(-6px);
}
```

### Stats Row

```html
<div class="hero-stats">
  <div class="hero-stat">
    <span class="stat-value">30s</span>
    <span class="stat-label">Quiz Time</span>
  </div>
  <div class="stat-divider"></div>
  <!-- more stats -->
</div>
```

```css
.stat-value {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--white);
}

.stat-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.1);
}
```

### Usage Guidelines

**DO:**
- Use hero card for primary feature/CTA
- Include animated visual elements
- Use gradient backgrounds for dark cards
- Add micro-interactions on hover
- Include stats/social proof in hero

**DON'T:**
- Use more than one hero card per grid
- Mix light and dark cards randomly
- Skip hover states
- Use emoji icons (use SVG or visual elements)
- Make all cards the same size

### Reference Implementation

See `/src/pages/index.astro` - Bento Grid section for complete implementation.

---

## Enforcement

All pull requests must:

1. Use only defined design tokens
2. Follow 8px spacing grid
3. Include hover/focus states
4. Pass accessibility checks
5. Work on mobile devices
6. Use components (not custom HTML)
7. Have zero inline styles (except approved)

**Non-compliant code will be rejected.**

---

**Compliance Status:** ENFORCED
**Reference Standard:** `/src/pages/brokers/avatrade-review/index.astro`
**AI Tool Guide:** `/repo-map.json`

*TradeTheDay.com - Where design meets conversion.*
