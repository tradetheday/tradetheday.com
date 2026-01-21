# TradeTheDay.com

Trading affiliate website focused on broker reviews, partner codes, and trading guides.

**Last Updated:** 2026-01-21

## Overview

This is a forex/crypto broker affiliate site that generates revenue through:
- **Broker partner codes** (especially AvaTrade Partner Code 128979)
- **Broker reviews** with affiliate links
- **Trading guides** with embedded CTAs

**Tech Stack:** Static HTML with SSI includes, Astro for build (optional)

## Key Money Page

**AvaTrade Partner Code** (`/bonus-codes/avatrade-partner-code.html`)
- Previously ranked #1 for "AvaTrade Partner Code" keyword
- Made $100k/month at peak
- Rankings have slipped - needs recovery
- Focus: Google AI/SGE optimization

## Site Structure

```
tradetheday.com/
├── index.html                    # Homepage
├── gold.html                     # Gold trading guide
├── oil.html                      # Oil trading guide
├── spread-betting.html           # Spread betting guide
├── stock-trading-for-beginners.html
├── what-is-trading-guide.html
├── advertiser-disclosure.html
├── full-risk-disclosure.html
│
├── brokers/
│   ├── index.html               # Broker comparison page
│   ├── avatrade-review/         # ⭐ Main broker (has partner code)
│   ├── etoro-review/            # Social trading focus
│   ├── axi-review/              # ECN/low spread focus
│   ├── binance-review/          # Crypto exchange
│   └── kraken-review/           # Security-focused crypto
│
├── bonus-codes/
│   ├── index.html               # Bonus codes hub
│   └── avatrade-partner-code.html  # 💰 MONEY PAGE
│
├── includes/
│   ├── header.html              # Global header with search
│   └── footer.html              # Global footer
│
├── assets/
│   ├── css/styles.css           # Legacy styles
│   └── js/scripts.js            # Global JS
│
├── src/
│   ├── styles/
│   │   ├── styles.css           # Main design system (light theme)
│   │   ├── tools.css            # Dark theme (calculators/tools)
│   │   ├── global.css           # Base resets
│   │   └── utilities.css        # Helper classes
│   └── pages/
│       ├── style-guide.astro    # Live style guide
│       └── tools/               # Calculator pages
│
├── DESIGN-SYSTEM.md             # Design tokens source of truth
│
└── components/                   # HTML component examples
```

## Recent Work Completed (Jan 2026)

### SEO Fixes
- [x] Updated all 2025 dates → 2026
- [x] Fixed meta descriptions and titles
- [x] Enhanced schema markup on all pages

### New Pages Created
- [x] `/brokers/index.html` - Broker comparison table
- [x] `/brokers/etoro-review/` - Full review
- [x] `/brokers/axi-review/` - Full review
- [x] `/brokers/binance-review/` - Full review
- [x] `/brokers/kraken-review/` - Full review
- [x] `/bonus-codes/index.html` - Bonus codes hub

### Partner Code Optimization
- [x] Added internal links from AvaTrade review → partner code page (3 links)
- [x] Updated FAQ to include direct link and code mention
- [x] Enhanced meta keywords for variations
- [x] Schema markup improvements

### UI Improvements
- [x] Redesigned search bar - now drops down as full-width bar below header
- [x] Quick links in search: "AvaTrade Partner Code", "Best Brokers", "Bonus Codes"
- [x] Search overlay styled to match dark header theme

### Design System (Jan 21, 2026)
- [x] Created centralized `tools.css` for dark theme tool pages
- [x] Created `DESIGN-SYSTEM.md` - source of truth for all tokens
- [x] Created `/style-guide/` - live interactive style guide page
- [x] Refactored broker calculator to use centralized styles
- [x] Added accessibility improvements (focus states, reduced motion, color contrast)

## Outstanding Work

### Priority 1: Recover "AvaTrade Partner Code" Rankings
- [ ] Add more content around partner codes (variations, how-to guides)
- [ ] Build backlinks to partner code page
- [ ] Monitor Google Search Console for ranking changes
- [ ] Optimize for Google AI/SGE (featured snippets, quick answers)

### Priority 2: Content Expansion
- [ ] Create partner code pages for other brokers (eToro, Axi)
- [ ] Add more trading guides
- [ ] Create comparison pages (e.g., "AvaTrade vs eToro")

### Priority 3: Technical
- [ ] Set up proper hosting/deployment
- [ ] Configure analytics (GA4)
- [ ] Submit sitemap to Google Search Console
- [ ] Fix any broken images (check /assets/images/)

## Commands

```bash
# Start dev server
cd "/Users/olliesblog/01 Projects/websites/tradetheday.com"
npm run dev

# Site runs at http://localhost:4321/

# Build for production
npm run build
```

## Affiliate Links

| Broker | Affiliate Parameter | Partner Code |
|--------|---------------------|--------------|
| AvaTrade | `?aid=tradetheday` | 128979 |
| eToro | Direct link | N/A |
| Axi | Direct link | N/A |
| Binance | Direct link | N/A |
| Kraken | Direct link | N/A |

## Key Files

- **Header:** `includes/header.html` - Contains search bar, nav
- **Footer:** `includes/footer.html` - Copyright, links
- **Styles:** `src/styles/styles.css` - Main design system (light theme)
- **Tools CSS:** `src/styles/tools.css` - Dark theme for calculator/tool pages
- **Partner Code:** `bonus-codes/avatrade-partner-code.html` - Money page

## Design System

**Source of Truth:** `/DESIGN-SYSTEM.md`
**Live Style Guide:** `/style-guide/`

### Quick Reference
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-orange` | `#FF4800` | Primary brand color, CTAs |
| `--charcoal` | `#1E2427` | Dark backgrounds, text |
| `--white` | `#fafbfc` | Light backgrounds |

### Themes
- **Light theme** (default): Homepage, broker reviews, guides
- **Dark theme** (`tools.css`): Calculators, interactive tools

### Before Making Style Changes
1. Check `DESIGN-SYSTEM.md` for existing tokens
2. Update `DESIGN-SYSTEM.md` if adding new patterns
3. Then update the CSS files

## Notes

- All dates should reference 2026
- Use Underdog Digital branding style (orange accent)
- SSI includes used for header/footer (`<!--#include virtual="/includes/header.html" -->`)
- Schema markup on all major pages for Google AI visibility
