# TradeTheDay Design System

> **Source of Truth** for all design decisions. When making style changes, update this file first, then update the CSS.

**Last Updated:** 2026-01-21

---

## Quick Reference

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-orange` | `#FF4800` | Primary brand color, CTAs, highlights |
| `--charcoal` | `#1E2427` | Dark backgrounds, text |
| `--white` | `#fafbfc` | Light backgrounds |
| `--space-md` | `24px` | Default component padding |
| `--radius-lg` | `16px` | Card border radius |

---

## 1. Color Palette

### Brand Colors
```css
--brand-orange: #FF4800;       /* Primary - CTAs, links, highlights */
--brand-orange-dark: #e63e00;  /* Hover states */
--brand-orange-light: #ff5c1a; /* Light accents */
```

### Neutral Colors
```css
--charcoal: #1E2427;           /* Primary text, dark backgrounds */
--charcoal-light: #2a3136;     /* Secondary dark (search overlay, etc.) */
--charcoal-dark: #171b1e;      /* Darkest backgrounds */
--white: #fafbfc;              /* Light backgrounds */
--black: #0a0a0a;              /* Tool pages background */
```

### Gray Scale
```css
--gray-50: #fafafa;   /* Lightest - section backgrounds */
--gray-100: #f5f5f5;  /* Subtle backgrounds */
--gray-200: #e5e5e5;  /* Borders */
--gray-300: #d4d4d4;  /* Disabled borders */
--gray-400: #a3a3a3;  /* Secondary text (dark bg) */
--gray-500: #737373;  /* Muted text */
--gray-600: #525252;  /* Secondary text (light bg) */
--gray-700: #404040;  /* Strong secondary text */
--gray-800: #1E2427;  /* Same as charcoal */
--gray-900: #171b1e;  /* Dark backgrounds */
--gray-950: #0f0f0f;  /* Darkest sections */
```

### Status Colors
```css
--success: #10B981;  /* Green - positive, completed */
--error: #EF4444;    /* Red - errors, warnings */
--warning: #ffc107;  /* Yellow/Amber - caution */
--info: #0693e3;     /* Blue - informational */
```

### Usage Rules
- **Light theme text:** Use `--charcoal` for primary, `--gray-600` for secondary
- **Dark theme text:** Use `--white` for primary, `--gray-400` for secondary (min 0.75 alpha for accessibility)
- **Links:** Use `--brand-orange` with `--brand-orange-dark` on hover
- **Borders:** Use `--gray-200` on light, `--gray-800` on dark

---

## 2. Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Font Sizes
```css
--font-size-xs: 12px;    /* Fine print, badges */
--font-size-sm: 14px;    /* Captions, metadata */
--font-size-base: 16px;  /* Body text */
--font-size-lg: 18px;    /* Lead paragraphs */
--font-size-xl: 20px;    /* Section titles */
--font-size-2xl: 24px;   /* H4 */
--font-size-3xl: 32px;   /* H3 */
--font-size-4xl: 40px;   /* H2 */
--font-size-5xl: 48px;   /* H1 */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Heading Classes
| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.heading-1` | 48px | 800 | Page titles |
| `.heading-2` | 40px | 700 | Section headings |
| `.heading-3` | 32px | 700 | Sub-sections |
| `.heading-4` | 24px | 600 | Card titles |

### Body Classes
| Class | Size | Usage |
|-------|------|-------|
| `.body-large` | 18px | Lead paragraphs, hero text |
| (default) | 16px | Standard body text |
| `.body-sm` | 14px | Captions, secondary info |
| `.body-xs` | 12px | Fine print, legal |

---

## 3. Spacing System

Based on 8px grid:

```css
--space-xs: 8px;    /* Tight spacing, inline elements */
--space-sm: 16px;   /* Button padding, small gaps */
--space-md: 24px;   /* Component padding, medium gaps */
--space-lg: 32px;   /* Section gaps, card padding */
--space-xl: 48px;   /* Large section padding */
--space-2xl: 64px;  /* Section vertical padding */
--space-3xl: 80px;  /* Hero padding (standard) */
--space-4xl: 120px; /* Homepage hero only */
```

### Usage Guidelines
- **Component internal padding:** `--space-md` (24px)
- **Gap between related items:** `--space-sm` (16px)
- **Gap between sections:** `--space-2xl` (64px)
- **Card padding:** `--space-lg` (32px) or `--space-xl` (48px)

---

## 4. Border Radius

```css
--radius-sm: 8px;    /* Buttons, small elements */
--radius-md: 12px;   /* Input fields, tags */
--radius-lg: 16px;   /* Cards, containers */
--radius-xl: 24px;   /* Large cards, modals */
--radius-2xl: 32px;  /* Hero sections */
--radius-full: 50px; /* Pills, avatars */
```

---

## 5. Shadows

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
--shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.1);
--shadow-brand: 0 4px 16px rgba(255, 72, 0, 0.25);
```

---

## 6. Components

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
```

**Sizes:** `.btn-sm` (36px), `.btn-md` (44px), `.btn-lg` (48px), `.btn-xl`, `.btn-xxl`

**Rules:**
- Always include `:focus-visible` styles
- Minimum touch target: 44x44px
- Primary buttons use `--gradient-primary`

### Cards
```html
<!-- Light theme -->
<div class="card">Standard card</div>
<div class="card card-hover">Hover effect</div>
<div class="card card-highlight">Orange border</div>

<!-- Dark theme (tools.css) -->
<div class="tool-card">Dark card</div>
<div class="tool-result-card">Result card</div>
<div class="tool-result-card featured">Featured result</div>
```

### Sections
```html
<section class="section">Default padding</section>
<section class="section section-light">White bg</section>
<section class="section section-alt">Gray bg</section>
<section class="section section-dark">Dark bg</section>
```

---

## 7. Hero System (3-Tier)

All hero sections use a consistent 3-tier system for visual hierarchy.

### Hero Tiers

| Tier | Class | Padding | Use For |
|------|-------|---------|---------|
| **XL** | `.hero.hero-xl` | 120px | Homepage only |
| **Large** | `.hero.hero-large` | 80px | Money pages (partner codes), premium content |
| **Standard** | `.hero.hero-standard` | 64px | Everything else (reviews, guides, tools, comparisons) |

### CSS Variables
```css
--hero-padding-xl: 120px;      /* Homepage */
--hero-padding-large: 80px;    /* Money pages */
--hero-padding-standard: 64px; /* Default */
--hero-padding-mobile: 48px;   /* All heroes on mobile */
```

### Base Hero Class
All heroes share the `.hero` base class which provides:
- Dark gradient background
- White text
- Centered layout
- Responsive container
- Orange accent overlay option

### Usage
```html
<!-- Homepage (XL) -->
<section class="hero hero-xl">
  <div class="container">...</div>
</section>

<!-- Partner code page (Large) -->
<section class="hero hero-large">
  <div class="container">...</div>
</section>

<!-- Standard pages (default) -->
<section class="hero hero-standard">
  <div class="container">...</div>
</section>
```

### Hero Modifiers
```html
<!-- Add orange gradient overlay -->
<section class="hero hero-standard hero-accent">...</section>

<!-- Add pattern background -->
<section class="hero hero-large hero-pattern">...</section>
```

### Mobile Behavior
All hero tiers reduce to 48px padding on mobile (< 768px) for consistent compact experience.

---

## 8. Page Themes

### Light Theme (Default)
- **Background:** `var(--white)` (#fafbfc)
- **Text:** `var(--charcoal)` (#1E2427)
- **Cards:** White with `var(--gray-200)` border
- **Use for:** Homepage, broker reviews, guides, bonus codes

### Dark Theme (Tools)
- **Background:** `var(--black)` (#0a0a0a)
- **Text:** `var(--white)` (#fafbfc)
- **Cards:** `var(--gray-900)` with `var(--gray-800)` border
- **Use for:** Calculators, interactive tools
- **Import:** `import '../styles/tools.css';`

---

## 9. CSS File Structure

```
src/styles/
├── styles.css          # Main design system (variables, typography, buttons, cards)
├── global.css          # Base resets
├── tools.css           # Dark theme for calculators/tools
├── spacing-system.css  # Spacing utilities
└── utilities.css       # Helper classes
```

### Import Order (BaseLayout.astro)
```javascript
import '../styles/styles.css';
import '../styles/global.css';
import '../styles/spacing-system.css';
import '../styles/utilities.css';

// For tool pages, also add:
import '../styles/tools.css';
```

---

## 10. Accessibility Requirements

### Focus States
All interactive elements must have visible focus:
```css
:focus-visible {
  outline: 2px solid var(--brand-orange);
  outline-offset: 2px;
}
```

### Color Contrast
- **Minimum ratio:** 4.5:1 for normal text
- **Dark backgrounds:** Use `rgba(255, 255, 255, 0.75)` minimum
- **Never use:** `rgba(255, 255, 255, 0.5)` or below for text

### Touch Targets
- **Minimum size:** 44x44px for all buttons and interactive elements
- **Button heights:** `.btn-sm` = 36px, `.btn-md` = 44px, `.btn-lg` = 48px

### Decorative Elements
```html
<!-- Hide from screen readers -->
<span aria-hidden="true">🎉</span>

<!-- Icon-only buttons need labels -->
<button aria-label="Close search">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Star ratings -->
<div role="img" aria-label="4.5 out of 5 stars">
  <span aria-hidden="true">★★★★☆</span>
</div>
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

## 11. Component Naming Conventions

### Light Theme (styles.css)
- `.btn`, `.card`, `.section`, `.heading-*`
- Standard semantic names

### Dark Theme (tools.css)
- Prefix with `tool-`: `.tool-page`, `.tool-card`, `.tool-hero`
- `.tool-result-card`, `.tool-option-btn`, `.tool-style-btn`
- Keeps dark theme styles isolated

---

## 12. Changelog

### 2026-01-21
- **Added 3-tier hero system** (XL, Large, Standard)
- Standardized hero class naming to `.hero.hero-{size}`
- Created centralized `tools.css` for dark theme pages
- Added focus-visible states to all interactive elements
- Improved color contrast in footer (0.6 → 0.75 alpha)
- Added prefers-reduced-motion support
- Fixed search overlay to use `--charcoal-light` background
- Added touch target minimum sizes to buttons

---

## Live Style Guide

View the interactive style guide at: `/style-guide/`

This page shows all components with live examples.
