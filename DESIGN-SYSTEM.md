# TradeTheDay Design System

> **SINGLE SOURCE OF TRUTH.** Do not override these values in component styles.
> When making changes, update this file FIRST, then update styles.css.

**Last Updated:** 2026-01-22

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

### Font Preloading

**RULE:** Only preload fonts that actually exist. Never add preload hints without verifying the file path.

```html
<!-- Only if file exists at /fonts/inter-var.woff2 -->
<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
```

If using Google Fonts, use preconnect instead:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

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

## 15. CHANGELOG

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
