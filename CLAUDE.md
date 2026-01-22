# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trading affiliate website (tradetheday.com) focused on broker reviews, partner codes, and trading guides. Revenue comes from broker affiliate links, especially AvaTrade Partner Code 128979.

**Tech Stack:** Astro 5.x static site, deployed via Cloudflare Pages (auto-deploys from GitHub)

## Commands

```bash
npm run dev      # Start dev server at http://localhost:4321/
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

### Astro Structure
- `src/pages/` - File-based routing (`.astro` files become pages)
- `src/layouts/BaseLayout.astro` - Global layout with header, footer, SEO meta
- `src/components/` - Reusable Astro components (Testimonials, FAQ, NewsletterSignup, TradingResults, AnalystNotes)
- `src/styles/` - CSS design system
- `public/` - Static assets served at root (images, JS, `_headers`, `_redirects`)

### Routing
- **No trailing slashes** - URLs do NOT end with `/` (configured in `astro.config.mjs`)
- Links must NOT include trailing slash: `/brokers/avatrade` not `/brokers/avatrade/`
- Redirect shortlinks: `/go/avatrade` → AvaTrade affiliate URL

### CSS Architecture
- `src/styles/styles.css` - Main design system (light theme)
- `src/styles/tools.css` - Dark theme for calculator/tool pages
- `src/styles/global.css` - Base resets
- Component-specific styles are scoped within `.astro` files using `<style>` tags

### Key Pages
- `/` - Homepage with bento grid, broker comparison, testimonials
- `/brokers` - Broker reviews (avatrade, etoro, axi, pepperstone, etc.)
- `/brokers/avatrade/partner-code` - Money page (AvaTrade Partner Code 128979)
- `/tools` - Trading calculators (dark theme)
- `/guides` - Trading education content

### Sitemap
Auto-generated via `@astrojs/sitemap`. Excludes `/style-guide` and `/components-showcase` (noindex pages).

## Design System (CRITICAL)

**Read `DESIGN-SYSTEM.md` before making ANY style changes.**

### Mandatory Rules
1. Use design tokens only - no arbitrary pixel values
2. Update `DESIGN-SYSTEM.md` first, then CSS
3. System fonts only - NEVER add Google Fonts or external fonts
4. Color contrast must meet WCAG AA (4.5:1 ratio)

### Quick Reference
| Constraint | Value |
|------------|-------|
| Max H1 | 2.5rem (40px) |
| Max hero padding | 56px |
| Max button padding | 12px 24px |
| Min touch target | 44px |
| Text on white | `var(--gray-600)` minimum |

### Brand Colors
- Primary orange: `#FF4800`
- Buttons use brand orange with `font-weight: 600` (bold text only needs 3:1 contrast ratio, which #FF4800 passes)
- For orange text on white backgrounds, use `--brand-orange-dark` (#e63e00) or darker

## SEO & Accessibility (MANDATORY)

1. **Heading hierarchy** - Sequential only (h1 → h2 → h3), never skip levels
2. **Link text** - Descriptive (never "Learn more" or "Click here")
3. **Images** - Always include `width` and `height` attributes
4. **Dates** - Use 2026 for all date references

## Cloudflare Configuration

- `public/_headers` - Cache rules (immutable for static assets, stale-while-revalidate for HTML)
- `public/_redirects` - URL redirects
- Settings: Smart Tiered Cache, Early Hints, HTTP/3, HSTS enabled

## Affiliate Links

| Broker | Partner Code | Shortlink |
|--------|--------------|-----------|
| AvaTrade | 128979 | `/go/avatrade` |
| Others | Direct links | — |

## Key Files

- `src/layouts/BaseLayout.astro` - All pages use this layout
- `public/js/base-layout.js` - Global JS (search overlay, back-to-top)
- `DESIGN-SYSTEM.md` - Single source of truth for design tokens
- `/style-guide/` - Live style guide (noindex)
