# TradeTheDay.com - Site Structure Plan

## Vision
A broker comparison site with a unique value proposition: **Free trading signals for clients who sign up through us.** Plus an AppSumo-style "Deal of the Month" feature for exclusive broker offers.

**What we are:** Broker comparison + partner codes + exclusive deals
**What we are NOT:** A news site or content mill

---

## Core Business Model

```
┌─────────────────────────────────────────────────────────────────┐
│                         TRAFFIC SOURCES                          │
│   Google ("avatrade partner code") │ Direct │ Referral │ Ads    │
└─────────────────────────────────────┬───────────────────────────┘
                                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                          SITE PAGES                              │
│                                                                  │
│   Homepage ─► Broker Comparison ─► Broker Reviews                │
│                      │                    │                      │
│                      ▼                    ▼                      │
│              Partner Code Pages ◄─────────┘                      │
│                      │                                           │
│                      ▼                                           │
│              ┌──────────────┐                                    │
│              │ DEAL PAGE    │ ◄── AppSumo-style exclusive offer  │
│              │ (Countdown)  │                                    │
│              └──────────────┘                                    │
└─────────────────────────────────┬───────────────────────────────┘
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CONVERSION                                  │
│   User signs up via our link → Gets bonus + FREE TRADING SIGNALS │
└─────────────────────────────────────────────────────────────────┘
```

---

## Site Map

### TIER 1: Money Pages (Drive Revenue)

| Page | URL | Purpose |
|------|-----|---------|
| **AvaTrade Partner Code** | `/brokers/avatrade/partner-code/` | #1 money maker - rank for "avatrade partner code" |
| **Deal of the Month** | `/deal/` | AppSumo-style exclusive countdown offer |
| **Broker Comparison** | `/brokers/` | Funnel to partner codes |

### TIER 2: Supporting Pages (Feed Traffic to Tier 1)

| Page | URL | Purpose |
|------|-----|---------|
| **Homepage** | `/` | Brand, trust, funnel to brokers |
| **AvaTrade Review** | `/brokers/avatrade/` | SEO + links to partner code |
| **eToro Review** | `/brokers/etoro/` | If you have affiliate deal |
| **Axi Review** | `/brokers/axi/` | If you have affiliate deal |
| **Binance Review** | `/brokers/binance/` | If you have affiliate deal |
| **Kraken Review** | `/brokers/kraken/` | If you have affiliate deal |
| **Other Broker Partner Codes** | `/brokers/[broker]/partner-code/` | Only if affiliate deals exist |

### TIER 3: Value Proposition (Differentiator)

| Page | URL | Purpose |
|------|-----|---------|
| **Trading Signals** | `/signals/` | Free signals for clients who sign up via us |
| **How It Works** | `/how-it-works/` | Explain the value exchange |

### TIER 4: SEO Power Pages (Traffic → Conversion)

| Page | URL | Target Keyword |
|------|-----|----------------|
| **How to Trade Gold** | `/trade/gold/` | "how to trade gold" |
| **How to Trade Bitcoin** | `/trade/bitcoin/` | "how to trade bitcoin" |
| **How to Trade Forex** | `/trade/forex/` | "how to trade forex" |
| **How to Trade Stocks** | `/trade/stocks/` | "how to trade stocks" |
| **How to Trade Oil** | `/trade/oil/` | "how to trade oil" |
| **Best Forex Brokers** | `/compare/best-forex-brokers/` | "best forex brokers 2026" |
| **Best Crypto Exchanges** | `/compare/best-crypto-exchanges/` | "best crypto exchange" |
| **AvaTrade vs eToro** | `/compare/avatrade-vs-etoro/` | "avatrade vs etoro" |

### TIER 5: Prop Firms (New Revenue Stream)

| Page | URL | Purpose |
|------|-----|---------|
| **Prop Firms Hub** | `/prop-firms/` | Comparison of prop trading firms |
| **FTMO Review** | `/prop-firms/ftmo/` | FTMO review + discount |
| **FTMO Discount Code** | `/prop-firms/ftmo/discount-code/` | Money page |
| **MyForexFunds Review** | `/prop-firms/myforexfunds/` | Review + code |
| **The5ers Review** | `/prop-firms/the5ers/` | Review + code |
| **Best Prop Firms** | `/compare/best-prop-firms/` | "best prop trading firms" |

### TIER 6: Supporting Content

| Page | URL | Purpose |
|------|-----|---------|
| **Learn Hub** | `/learn/` | Education hub, funnels to brokers |
| **Platforms** | `/platforms/` | MT4, MT5, cTrader → broker signup |
| **About / Trust** | `/about/` | Credibility |
| **Risk Disclosure** | `/risk-disclaimer/` | Legal requirement |
| **Advertiser Disclosure** | `/advertiser-disclosure/` | FTC compliance |

### KILL LIST (Redirect or Remove)

| Old Content | Action |
|-------------|--------|
| News articles | 301 → Homepage or relevant broker page |
| Analysis articles | 301 → Homepage or `/learn/` |
| Date-specific content | 301 → Evergreen equivalent |
| Thin/low-value pages | 301 → Parent category |

---

## Deal of the Month Page (`/deal/`)

**Concept:** AppSumo-style exclusive broker deal with countdown timer.

### Features:
- **One featured deal** at a time (not a list)
- **Countdown timer** (real expiry or monthly refresh)
- **Exclusive bonus** negotiated with broker
- **Limited spots** messaging (scarcity)
- **Social proof** (X traders claimed this month)

### Example Layout:
```
┌────────────────────────────────────────────────────────────┐
│  🔥 EXCLUSIVE DEAL - January 2026                          │
│                                                            │
│  [BROKER LOGO]                                             │
│                                                            │
│  Get $500 Extra Bonus + Free Trading Signals               │
│  (Only available through TradeTheDay)                      │
│                                                            │
│  ⏰ Offer expires in: 12d 05h 32m 18s                      │
│                                                            │
│  ✓ $500 welcome bonus (vs $200 standard)                   │
│  ✓ Free trading signals for 3 months                       │
│  ✓ Priority support                                        │
│  ✓ Only 47 spots remaining                                 │
│                                                            │
│  [CLAIM THIS DEAL - It's Free]                             │
│                                                            │
│  🛡️ FCA Regulated │ ⭐ 4.5/5 Rating │ 👥 500K+ traders     │
└────────────────────────────────────────────────────────────┘
```

### How It Works:
1. Negotiate exclusive deal with a broker (better than public offer)
2. Feature it for 1 month with real countdown
3. Rotate to next broker/deal
4. Archive past deals (social proof: "Previous deals")

---

## URL Structure & 301 Redirects

### New URL Pattern
```
/                                    → Homepage

# BROKERS (Forex, CFD)
/brokers/                            → Broker comparison hub
/brokers/avatrade/                   → AvaTrade review
/brokers/avatrade/partner-code/      → Partner code (MONEY PAGE)
/brokers/etoro/                      → eToro review
/brokers/etoro/partner-code/         → Partner code
/brokers/axi/                        → Axi review
/brokers/axi/partner-code/           → Partner code

# EXCHANGES (Crypto)
/exchanges/                          → Exchange comparison hub
/exchanges/binance/                  → Binance review
/exchanges/binance/referral-code/    → Referral code (MONEY PAGE)
/exchanges/kraken/                   → Kraken review
/exchanges/kraken/referral-code/     → Referral code
/exchanges/coinbase/                 → Coinbase review

# PROP FIRMS
/prop-firms/                         → Prop firm comparison hub
/prop-firms/ftmo/                    → FTMO review
/prop-firms/ftmo/discount-code/      → Discount code (MONEY PAGE)
/prop-firms/myforexfunds/            → MyForexFunds review
/prop-firms/the5ers/                 → The5ers review

# TRADING GUIDES (SEO Power)
/trade/                              → Trading guides hub
/trade/gold/                         → How to trade gold
/trade/bitcoin/                      → How to trade bitcoin
/trade/forex/                        → How to trade forex
/trade/stocks/                       → How to trade stocks
/trade/oil/                          → How to trade oil
/trade/indices/                      → How to trade indices

# COMPARISONS (High Intent)
/compare/                            → Comparison hub
/compare/avatrade-vs-etoro/          → AvaTrade vs eToro
/compare/binance-vs-kraken/          → Binance vs Kraken
/compare/best-forex-brokers/         → Best forex brokers 2026
/compare/best-crypto-exchanges/      → Best crypto exchanges
/compare/best-prop-firms/            → Best prop trading firms

# VALUE PROP
/deal/                               → AppSumo-style exclusive deal
/signals/                            → Free trading signals offer

# EDUCATION
/learn/                              → Education hub
/platforms/                          → Trading platforms (MT4, MT5, etc.)

# LEGAL
/risk-disclaimer/                    → Risk disclosure
/advertiser-disclosure/              → Affiliate disclosure
/about/                              → About us
```

### Critical 301 Redirects (Preserve SEO)

| Old URL | New URL | Priority |
|---------|---------|----------|
| `/brokers/avatrade/partner-code.html` | `/brokers/avatrade/partner-code/` | 🔴 CRITICAL |
| `/brokers/avatrade.html` | `/brokers/avatrade/` | 🔴 CRITICAL |
| `/brokers/etoro.html` | `/brokers/etoro/` | 🟡 High |
| `/brokers/axi.html` | `/brokers/axi/` | 🟡 High |
| `/brokers.html` | `/brokers/` | 🟡 High |
| `/education.html` | `/learn/` | 🟢 Medium |
| `/start.html` | `/` | 🟢 Medium |
| `/trading/*.html` | `/learn/` | 🟢 Medium |
| `/analysis/*.html` | `/` | 🟢 Medium |
| `/*-analysis/*.html` | `/` | 🟢 Medium |

### Redirect Rules (for Cloudflare or server)

```
# Critical - Partner Code
/brokers/avatrade/partner-code.html  /brokers/avatrade/partner-code/  301

# Broker Reviews
/brokers/avatrade.html               /brokers/avatrade/               301
/brokers/etoro.html                  /brokers/etoro/                  301
/brokers/axi.html                    /brokers/axi/                    301
/brokers/libertex.html               /brokers/                        301
/brokers.html                        /brokers/                        301

# Education/Content → Learn hub
/education.html                      /learn/                          301
/education/*                         /learn/                          301
/trading/*                           /learn/                          301

# Analysis/News → Homepage (kill these)
/analysis/*                          /                                301
/news.html                           /                                301
/*-analysis/*                        /                                301
/*-analysis.html                     /                                301

# Misc
/start.html                          /                                301
/tools.html                          /                                301
/instruments.html                    /brokers/                        301
/platforms.html                      /platforms/                      301
/platforms/*                         /platforms/                      301
```

---

## Internal Linking Strategy

Every page should funnel toward partner codes:

```
Homepage
    └─► "Find Your Broker" ─► /brokers/
    └─► "This Month's Deal" ─► /deal/
    └─► "AvaTrade Partner Code" ─► /brokers/avatrade/partner-code/

Broker Comparison (/brokers/)
    └─► Each broker card ─► /brokers/[broker]/
    └─► "Get Partner Code" button ─► /brokers/[broker]/partner-code/
    └─► Featured deal banner ─► /deal/

Broker Review (/brokers/avatrade/)
    └─► Hero CTA ─► /brokers/avatrade/partner-code/
    └─► Sidebar CTA ─► /brokers/avatrade/partner-code/
    └─► FAQ link ─► /brokers/avatrade/partner-code/
    └─► Bottom CTA ─► /brokers/avatrade/partner-code/

Signals Page (/signals/)
    └─► "Sign up through us" ─► /brokers/
    └─► Featured broker ─► /brokers/avatrade/partner-code/
```

---

## Signals Value Proposition

### The Offer:
> "Sign up to any broker through TradeTheDay and get FREE trading signals."

### How to Verify:
1. User clicks affiliate link → signs up with broker
2. User emails proof (account number or screenshot)
3. We add them to signals group (Telegram/Discord/Email)

### Signals Page Content:
- What signals we provide (entry, exit, stop loss)
- Track record / past performance
- How to claim (sign up → verify → access)
- Which brokers qualify
- Sample signals

---

## Content Strategy - Maximum SEO Power

### Goal: Capture Traders at Every Stage → Convert to Affiliate Revenue

```
AWARENESS          CONSIDERATION         DECISION           CONVERSION
"how to trade"  →  "best broker for"  →  "broker review"  →  "partner code"
"what is forex" →  "broker vs broker" →  "broker bonus"   →  [SIGNUP]
```

### Revenue Streams:
1. **Brokers** - AvaTrade, eToro, Axi, etc.
2. **Crypto Exchanges** - Binance, Kraken, Coinbase, etc.
3. **Prop Firms** - FTMO, MyForexFunds, The5ers, etc.

---

### TIER 1: Money Keywords (Direct Conversion)

| Keyword Type | Examples | Page Type |
|--------------|----------|-----------|
| Partner codes | "avatrade partner code", "etoro bonus code" | Partner code pages |
| Bonus codes | "binance referral code", "kraken signup bonus" | Partner code pages |
| Prop firm codes | "ftmo discount code", "myforexfunds coupon" | Partner code pages |

### TIER 2: High-Intent Keywords (Decision Stage)

| Keyword Type | Examples | Page Type |
|--------------|----------|-----------|
| Broker reviews | "avatrade review", "etoro review 2026" | Review pages |
| Comparisons | "avatrade vs etoro", "binance vs kraken" | Comparison pages |
| Best X | "best forex broker", "best crypto exchange" | Roundup pages |
| Prop firm reviews | "ftmo review", "best prop firms 2026" | Review pages |

### TIER 3: Educational Keywords (Consideration Stage)

| Keyword Type | Examples | Page Type |
|--------------|----------|-----------|
| How to trade X | "how to trade gold", "how to trade bitcoin" | Trading guides |
| Asset guides | "gold trading guide", "bitcoin trading for beginners" | Asset pages |
| Strategy guides | "day trading guide", "swing trading strategies" | Strategy pages |
| Platform guides | "metatrader 4 tutorial", "how to use tradingview" | Platform pages |

### TIER 4: Awareness Keywords (Top of Funnel)

| Keyword Type | Examples | Page Type |
|--------------|----------|-----------|
| What is X | "what is forex", "what is CFD trading" | Educational pages |
| Beginner guides | "trading for beginners", "how to start trading" | Beginner guides |
| Glossary | "pip definition", "what is leverage" | Glossary pages |

---

### Content Funnel (Every Page Converts)

```
"How to Trade Gold" (Guide)
    └─► "To trade gold, you need a broker..."
        └─► "Our top pick: AvaTrade" [LINK]
            └─► /brokers/avatrade/
                └─► /brokers/avatrade/partner-code/ [CONVERSION]

"Best Forex Broker 2026" (Roundup)
    └─► #1 AvaTrade - [Read Review] [Get Partner Code]
    └─► #2 eToro - [Read Review] [Get Partner Code]
    └─► #3 Axi - [Read Review] [Get Partner Code]

"FTMO Review" (Prop Firm)
    └─► Use code TRADETHEDAY for 10% off
        └─► /prop-firms/ftmo/discount-code/ [CONVERSION]
```

---

### SEO Content Plan

#### Asset Trading Guides (High Volume)
| Page | Target Keyword | Search Intent |
|------|---------------|---------------|
| `/trade/gold/` | "how to trade gold" | Educational → Broker signup |
| `/trade/bitcoin/` | "how to trade bitcoin" | Educational → Exchange signup |
| `/trade/forex/` | "how to trade forex" | Educational → Broker signup |
| `/trade/oil/` | "how to trade oil" | Educational → Broker signup |
| `/trade/stocks/` | "how to trade stocks" | Educational → Broker signup |
| `/trade/indices/` | "how to trade indices" | Educational → Broker signup |
| `/trade/crypto/` | "cryptocurrency trading" | Educational → Exchange signup |

#### Broker Comparison Pages (High Intent)
| Page | Target Keyword |
|------|---------------|
| `/compare/avatrade-vs-etoro/` | "avatrade vs etoro" |
| `/compare/binance-vs-kraken/` | "binance vs kraken" |
| `/compare/best-forex-brokers/` | "best forex brokers 2026" |
| `/compare/best-crypto-exchanges/` | "best crypto exchange" |
| `/compare/best-prop-firms/` | "best prop trading firms" |

#### Prop Firm Section (NEW Revenue Stream)
| Page | Target Keyword |
|------|---------------|
| `/prop-firms/` | "prop trading firms" |
| `/prop-firms/ftmo/` | "ftmo review" |
| `/prop-firms/ftmo/discount-code/` | "ftmo discount code" |
| `/prop-firms/myforexfunds/` | "myforexfunds review" |
| `/prop-firms/the5ers/` | "the5ers review" |

---

### DO Create:
- **"How to trade X" guides** - Every asset class, optimized to convert
- **Broker/Exchange reviews** - Comprehensive, with multiple CTAs
- **Prop firm reviews** - Growing market, less competition
- **Partner code pages** - Every broker/exchange/prop firm with affiliate
- **Comparison pages** - "X vs Y" and "Best X for Y"
- **Best X roundups** - "Best forex broker for beginners"
- **Platform tutorials** - MT4, MT5, TradingView (funnel to brokers that offer them)

### DO NOT Create:
- **News/analysis** - Expires, requires constant updates
- **Opinion pieces** - Don't rank, don't convert
- **Generic content** - If it doesn't have a conversion path, don't write it

### Every Page Must Have:
1. Clear target keyword
2. Conversion path to affiliate signup
3. Internal links to partner code pages
4. Schema markup for rich snippets

---

## Tech Stack

### Current: Astro (Static Site Generator)
- Pros: Fast, SEO-friendly, modern
- Cons: Requires build step

### Deployment Options:

**Option A: Cloudflare Pages (Recommended)**
- Free hosting
- Global CDN
- Easy 301 redirects via `_redirects` file
- Cloudflare Workers for geo-routing (Spain compliance)

**Option B: Own Server (HTML)**
- More control
- Redirect via .htaccess or nginx config
- Can migrate to Cloudflare later

### Redirect Implementation:

**Cloudflare Pages** - Create `public/_redirects`:
```
/brokers/avatrade/partner-code.html /brokers/avatrade/partner-code/ 301
/brokers/avatrade.html /brokers/avatrade/ 301
# ... etc
```

**Apache (.htaccess)**:
```apache
RewriteEngine On
RewriteRule ^brokers/avatrade/partner-code\.html$ /brokers/avatrade/partner-code/ [R=301,L]
RewriteRule ^brokers/avatrade\.html$ /brokers/avatrade/ [R=301,L]
```

**Nginx**:
```nginx
location = /brokers/avatrade/partner-code.html {
    return 301 /brokers/avatrade/partner-code/;
}
```

---

## Implementation Priority

### Phase 1: Launch (Protect Current Revenue)
| # | Task | Status | Why |
|---|------|--------|-----|
| 1 | Homepage | ✅ Built | Brand/trust |
| 2 | Broker comparison (`/brokers/`) | ✅ Built | Funnel |
| 3 | AvaTrade review | ✅ Built | Feeds partner code |
| 4 | **AvaTrade partner code** | ✅ Built | 99% of revenue |
| 5 | 301 redirects configured | ⬜ TODO | Preserve SEO juice |
| 6 | Internal linking audit | ⬜ TODO | Boost partner code page |
| 7 | Deploy to Cloudflare | ⬜ TODO | Go live |

### Phase 2: Quick Wins (Low Effort, High Impact)
| # | Task | Status | Why |
|---|------|--------|-----|
| 8 | Deal page (`/deal/`) | ⬜ TODO | Exclusive offers, scarcity |
| 9 | Fix broken internal links | ⬜ TODO | SEO boost |
| 10 | Add partner code CTAs to all broker reviews | ⬜ TODO | More conversions |
| 11 | Signals page (value prop) | ⬜ TODO | Differentiation |

### Phase 3: Content Expansion (SEO Growth)
| # | Task | Status | Why |
|---|------|--------|-----|
| 12 | "How to Trade Gold" guide | ⬜ TODO | High search volume |
| 13 | "How to Trade Bitcoin" guide | ⬜ TODO | High search volume |
| 14 | "How to Trade Forex" guide | ⬜ TODO | High search volume |
| 15 | "Best Forex Brokers 2026" | ⬜ TODO | High intent |
| 16 | "AvaTrade vs eToro" comparison | ⬜ TODO | Comparison intent |
| 17 | Other broker reviews (eToro, Axi) | ✅ Built | Need partner codes added |

### Phase 4: New Revenue Streams
| # | Task | Status | Why |
|---|------|--------|-----|
| 18 | Exchanges hub (`/exchanges/`) | ⬜ TODO | Crypto audience |
| 19 | Binance review + referral code | ✅ Partial | Need referral code page |
| 20 | Kraken review + referral code | ✅ Partial | Need referral code page |
| 21 | Prop firms hub (`/prop-firms/`) | ⬜ TODO | New revenue stream |
| 22 | FTMO review + discount code | ⬜ TODO | Popular prop firm |

### Phase 5: Scale & Optimize
| # | Task | Status | Why |
|---|------|--------|-----|
| 23 | More "How to Trade X" guides | ⬜ TODO | SEO volume |
| 24 | More comparison pages | ⬜ TODO | High intent |
| 25 | Schema markup audit | ⬜ TODO | Rich snippets |
| 26 | Core Web Vitals | ⬜ TODO | Ranking factor |
| 27 | Regional expansion | ⬜ TODO | See REGIONAL-STRATEGY.md |

---

*Last Updated: January 2026*
