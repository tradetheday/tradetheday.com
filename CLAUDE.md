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
- `src/components/` - Reusable Astro components
- `src/data/` - TypeScript data stores
- `src/styles/` - CSS design system
- `public/` - Static assets served at root

### Key Components
- **Quiz:** `BrokerSelectorQuiz.astro`, `BrokerResultCard.astro` - AI broker matching
- **Reviews:** `BrokerVerdict.astro`, `ComparisonTable.astro`, `ProsCons.astro`
- **Content:** `FAQ.astro`, `Testimonials.astro`, `Hero.astro`, `Navigation.astro`
- **Layout:** `Card.astro`, `CardGrid.astro`, `Chip.astro`, `Breadcrumb.astro`

### Data Layer
Centralized data in `src/data/` enables broker selector, comparison tables, and consistent data:
- `brokers.ts` - Full broker profiles with scoring attributes for AI selector
- `propfirms.ts` - Prop trading firm data
- `glossary.ts` - Trading terminology definitions
- `deals.ts` - Current promotions and offers
- `events.ts` - Trading calendar events
- `videos.ts` - Embedded video content

### Page Categories
- `/brokers` - Broker reviews with partner code subpages
- `/crypto` - Cryptocurrency hub with filterable tags (chain/type filters are noindexed)
- `/news` - Trending news articles (hub-and-spoke linking to evergreen pages)
- `/platforms` - Trading platform guides (MT4, MT5, cTrader)
- `/tools` - Trading calculators (dark theme)
- `/guides` - Educational content
- `/exchanges` - Crypto exchange reviews
- `/propfirms` - Prop firm comparisons
- `/compare` - Head-to-head broker comparisons
- `/glossary` - Trading terminology (auto-generated from `src/data/glossary.ts`)
- Geo pages (`/uk`, `/australia`, `/canada`, `/south-africa`) - Region-specific broker recommendations

### Routing
- **No trailing slashes** - URLs do NOT end with `/` (configured in `astro.config.mjs`)
- Links must NOT include trailing slash: `/brokers/avatrade` not `/brokers/avatrade/`
- Shortlinks defined in `astro.config.mjs` redirects: `/go/avatrade` → affiliate URL
- Build format: `file` (generates `/brokers/avatrade.html` not `/brokers/avatrade/index.html`)

### CSS Architecture
- `src/styles/styles.css` - Main design system (light theme)
- `src/styles/tools.css` - Dark theme for calculator/tool pages
- Component-specific styles are scoped within `.astro` files using `<style>` tags

### Sitemap
Auto-generated via `@astrojs/sitemap`. Excludes `/style-guide` and `/components-showcase`.

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
- Buttons use brand orange with `font-weight: 600`
- For orange text on white, use `--brand-orange-dark` (#e63e00)

## SEO & Accessibility

1. **Heading hierarchy** - Sequential only (h1 → h2 → h3), never skip levels
2. **Link text** - Descriptive (never "Learn more" or "Click here")
3. **Images** - Always include `width` and `height` attributes
4. **Dates** - Use 2026 for all date references
5. **Crypto contracts** - Always include verified contract addresses
6. **Schema markup** - Use `src/utils/seo.ts` functions for structured data (FAQPage, BrokerSchema, etc.)

## Content Patterns

### Hub-and-Spoke (for trending topics)
- Create evergreen hub page (e.g., `/crypto/pepe`) that ranks for searches
- Write news articles linking back to hub
- Keep hub updated with latest news section
- Prevents site from becoming pure "news site" while capturing trending traffic

### Filtered Index Pages
- Main index pages are indexed (`/crypto`)
- Filter URLs use query params and are noindexed (`/crypto?chain=ethereum`)
- Good for UX without SEO pollution from thin content

## Cloudflare Configuration

- `public/_headers` - Cache rules
- `public/_redirects` - Basic URL redirects (100 dynamic limit)
- Settings: Smart Tiered Cache, Early Hints, HTTP/3, HSTS enabled

### Redirect System (GitHub-managed)

Redirects are managed via `functions/redirects.json` - edit and push to deploy.

**Files:**
```
functions/
├── _middleware.ts    # Handles redirects + Spain CNMV compliance
├── redirects.json    # Redirect rules (edit this!)
└── tsconfig.json     # TypeScript config
```

**Redirect types in `redirects.json`:**

| Section | Use for | Example |
|---------|---------|---------|
| `static` | Simple 1:1 redirects | `"/old": "/new"` |
| `patterns` | Regex with capture groups | `"^/broker/(.+)$"` → `"/brokers/$1"` |
| `geo` | Old geo URLs | `"/best-forex-brokers-uk": "/uk"` |
| `support` | Cross-domain to support subdomain | `"/help": "https://support.tradetheday.com"` |

**How it works:**
1. `.html` extension removal (automatic)
2. Static redirects checked
3. Geo redirects checked
4. Support (cross-domain) redirects checked
5. Pattern-based redirects (regex) checked
6. Spain CNMV geo-redirect for Spanish visitors on CFD pages

**Adding redirects:**
```json
{
  "static": {
    "/old-page": "/new-page",
    "/legacy": "https://support.tradetheday.com/help"
  },
  "patterns": [
    {
      "comment": "Description",
      "match": "^/old-pattern/(.+)$",
      "redirect": "/new-pattern/$1"
    }
  ]
}
```

**Spain CNMV Compliance:**
Spanish visitors (country code ES) accessing CFD broker content are automatically redirected to `/spain/` which offers compliant alternatives. This is handled in `_middleware.ts`.

## Affiliate Links

| Broker | Partner Code | Shortlink |
|--------|--------------|-----------|
| AvaTrade | 128979 | `/go/avatrade` |
| Others | Direct links | — |

## Key Files

- `src/layouts/BaseLayout.astro` - All pages use this layout
- `src/data/brokers.ts` - Central broker data (used by selector and comparisons)
- `src/utils/seo.ts` - Schema.org generators (broker, FAQ, review, breadcrumb schemas)
- `public/js/base-layout.js` - Global JS (search overlay, back-to-top)
- `DESIGN-SYSTEM.md` - Single source of truth for design tokens
- `functions/redirects.json` - 301 redirect rules (edit to add redirects)
