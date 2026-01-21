# TradeTheDay.com Migration & SEO Domination Plan

## Mission
Migrate ALL content from live tradetheday.com to Astro, modernize it, and make it rank #1 for target keywords globally.

---

## Phase 1: Critical Fixes (DO FIRST)

### 1.1 AvaTrade Review Page - Fix NOW
**File:** `/src/pages/brokers/avatrade/index.astro`

- [ ] Change all "2025" → "2026" (title, H1, content)
- [ ] Add FAQPage schema (9 FAQs exist, no schema!)
- [ ] Add Review schema with aggregateRating (4.2/5)
- [ ] Add FinancialService schema for AvaTrade
- [ ] Add BreadcrumbList schema
- [ ] Add canonical URL
- [ ] Add Open Graph tags
- [ ] Add visible "Last Updated: January 2026"
- [ ] Add author byline for E-E-A-T
- [ ] Add partner code callout box linking to `/brokers/avatrade/partner-code/`
- [ ] Add "AvaTrade vs Competitors" comparison section
- [ ] Internal link to partner code page (minimum 3 times)

### 1.2 Partner Code Page - Already Good
**File:** `/src/pages/brokers/avatrade/partner-code/index.astro`
- [x] Schema markup added
- [x] Internal links added
- [ ] Ensure link FROM review page TO this page

---

## Phase 2: Broker Reviews Migration

### Brokers on Live Site (Need Migration)

| Broker | Live URL | New URL | Priority | Status |
|--------|----------|---------|----------|--------|
| AvaTrade | /brokers/avatrade.html | /brokers/avatrade/ | P1 | ✅ Exists, needs fixes |
| eToro | /brokers/etoro.html | /brokers/etoro/ | P1 | ✅ Exists, needs update |
| Axi | /brokers/axi.html | /brokers/axi/ | P1 | ✅ Exists |
| Pepperstone | /brokers/pepperstone.html | /brokers/pepperstone/ | P1 | ⬜ BUILD |
| IC Markets | /brokers/icmarkets.html | /brokers/ic-markets/ | P1 | ⬜ BUILD |
| Plus500 | N/A | /brokers/plus500/ | P2 | ⬜ BUILD |
| IG | N/A | /brokers/ig/ | P2 | ⬜ BUILD |
| GO Markets | /brokers/gomarkets.html | /brokers/go-markets/ | P3 | ⬜ BUILD |
| StormGain | /brokers/stormgain.html | /exchanges/stormgain/ | P3 | ⬜ BUILD |
| Libertex | /brokers/libertex.html | /brokers/libertex/ | P3 | ⬜ BUILD |
| City Index | /brokers/cityindex.html | /brokers/city-index/ | P3 | ⬜ BUILD |
| easyMarkets | /brokers/easymarkets.html | /brokers/easymarkets/ | P3 | ⬜ BUILD |
| Vantage FX | /brokers/vantagefx.html | /brokers/vantage/ | P3 | ⬜ BUILD |
| Admiral Markets | /brokers/admiralmarkets.html | /brokers/admiral-markets/ | P3 | ⬜ BUILD |
| Saxo | /brokers/saxo.html | /brokers/saxo/ | P3 | ⬜ BUILD |
| EightCap | /brokers/eightcap.html | /brokers/eightcap/ | P3 | ⬜ BUILD |

### Broker Review Template Requirements

Every broker review MUST have:

**SEO:**
- Title: "[Broker] Review 2026 - Fees, Pros & Cons, Is It Safe?"
- H1: "[Broker] Review 2026 - Complete Analysis"
- FAQPage schema (10+ FAQs)
- Review schema with rating
- FinancialService schema
- BreadcrumbList schema
- Canonical URL
- Open Graph tags
- Last updated date (visible)
- Author byline

**Content Sections:**
1. Hero with rating scorecard
2. Quick verdict box
3. Company overview
4. Fees & spreads comparison table
5. Regulation & safety
6. Trading platforms
7. Account types
8. Deposit/withdrawal methods
9. Trading instruments
10. Pros & cons
11. FAQ (10+ questions)
12. Final verdict with CTA
13. "vs Competitors" comparison
14. Related broker links

**Conversion:**
- Partner code callout (if applicable)
- Multiple CTAs to affiliate link
- Internal links to comparison pages

---

## Phase 3: News Articles → 301 Redirects

ALL old news articles redirect to relevant evergreen pages:

| Old URL | Redirect To | Reason |
|---------|-------------|--------|
| /news/* | /trade/ | Old news hub |
| /crypto-analysis/bitcoin-* | /trade/bitcoin/ | Bitcoin articles |
| /stock-market/* | /trade/stocks/ | Stock articles |
| /forex-analysis/* | /trade/forex/ | Forex articles |
| /analysis/* | /brokers/ | General analysis |

**Cloudflare Worker redirect rules:**
```javascript
// Redirect all old news/analysis to relevant pages
if (url.pathname.startsWith('/news/')) {
  return Response.redirect('https://tradetheday.com/trade/', 301);
}
if (url.pathname.startsWith('/crypto-analysis/')) {
  return Response.redirect('https://tradetheday.com/trade/bitcoin/', 301);
}
if (url.pathname.startsWith('/stock-market/')) {
  return Response.redirect('https://tradetheday.com/trade/stocks/', 301);
}
if (url.pathname.startsWith('/forex-analysis/')) {
  return Response.redirect('https://tradetheday.com/trade/forex/', 301);
}
```

---

## Phase 4: Trading Guides (SEO Traffic Pages)

### Target Keywords & Pages

| Page | Target Keyword | Monthly Search | Status |
|------|---------------|----------------|--------|
| /trade/forex/ | "how to trade forex" | 22,000 | ⬜ BUILD |
| /trade/bitcoin/ | "how to trade bitcoin" | 18,000 | ⬜ BUILD |
| /trade/stocks/ | "how to trade stocks" | 40,000 | ⬜ BUILD |
| /trade/gold/ | "how to trade gold" | 8,000 | ✅ EXISTS |
| /trade/oil/ | "how to trade oil" | 4,000 | ✅ EXISTS |
| /trade/indices/ | "how to trade indices" | 3,000 | ⬜ BUILD |
| /trade/crypto/ | "cryptocurrency trading" | 12,000 | ⬜ BUILD |

### Trading Guide Template

Each guide must have:
- 3,000+ words
- HowTo schema
- FAQPage schema (10+ FAQs)
- Step-by-step sections
- Broker recommendations with affiliate links
- Internal links to broker reviews
- Comparison tables
- Risk warnings

---

## Phase 5: Platform Pages

| Page | Target Keyword | Status |
|------|---------------|--------|
| /trading-platforms/ | "trading platforms" | ✅ EXISTS |
| /trading-platforms/metatrader-4/ | "best mt4 brokers" | ✅ EXISTS |
| /trading-platforms/metatrader-5/ | "best mt5 brokers" | ✅ EXISTS |
| /trading-platforms/ctrader/ | "best ctrader brokers" | ⬜ BUILD |
| /trading-platforms/tradingview/ | "brokers with tradingview" | ⬜ BUILD |

---

## Phase 6: Comparison Pages (HIGH INTENT)

| Page | Target Keyword | Priority |
|------|---------------|----------|
| /compare/avatrade-vs-etoro/ | "avatrade vs etoro" | P1 |
| /compare/avatrade-vs-plus500/ | "avatrade vs plus500" | P2 |
| /compare/best-forex-brokers/ | "best forex brokers 2026" | P1 |
| /compare/best-cfd-brokers/ | "best cfd brokers" | P2 |
| /compare/best-brokers-beginners/ | "best broker for beginners" | P1 |

---

## Phase 7: Regional SEO (hreflang)

### Priority Regions

| Region | URL Prefix | Language | Currency | Priority |
|--------|-----------|----------|----------|----------|
| Global/US | / | English | USD | Default |
| UK | /uk/ | English | GBP | P1 |
| Australia | /au/ | English | AUD | P1 |
| UAE/Dubai | /ae/ | English | AED | P2 |
| Australia Chinese | /au-zh/ | Chinese | AUD | P3 |
| Global Chinese | /zh/ | Chinese | USD | P3 |
| Spain | /es/ | Spanish | EUR | P3 |

### Pages Needing Regional Variants

Only money pages need regional variants:
- /brokers/avatrade/partner-code/ → UK, AU, UAE, Chinese versions
- /brokers/ → Regional broker recommendations

### hreflang Implementation

```html
<link rel="alternate" hreflang="en" href="https://tradetheday.com/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="en-GB" href="https://tradetheday.com/uk/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="en-AU" href="https://tradetheday.com/au/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="en-AE" href="https://tradetheday.com/ae/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="zh" href="https://tradetheday.com/zh/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="x-default" href="https://tradetheday.com/brokers/avatrade/partner-code/" />
```

---

## Phase 8: Technical SEO Checklist

### Every Page Must Have:

- [ ] Unique title (keyword first, 60 chars max)
- [ ] Meta description (155 chars, CTA included)
- [ ] H1 with primary keyword
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Twitter card tags
- [ ] Structured data (appropriate schema)
- [ ] Breadcrumb navigation + schema
- [ ] Internal links to money pages
- [ ] Mobile responsive
- [ ] Core Web Vitals optimized
- [ ] Last updated date visible

### Site-Wide:

- [ ] XML sitemap at /sitemap.xml
- [ ] Robots.txt properly configured
- [ ] 301 redirects from old URLs
- [ ] HTTPS everywhere
- [ ] Cloudflare caching optimized
- [ ] Image optimization (WebP, lazy loading)

---

## 301 Redirect Map (Old → New)

```
# Broker Reviews
/brokers/avatrade.html → /brokers/avatrade/
/brokers/etoro.html → /brokers/etoro/
/brokers/axi.html → /brokers/axi/
/brokers/pepperstone.html → /brokers/pepperstone/
/brokers/icmarkets.html → /brokers/ic-markets/
/brokers/gomarkets.html → /brokers/go-markets/
/brokers/stormgain.html → /exchanges/stormgain/
/brokers/libertex.html → /brokers/libertex/
/brokers/cityindex.html → /brokers/city-index/
/brokers/easymarkets.html → /brokers/easymarkets/
/brokers/vantagefx.html → /brokers/vantage/
/brokers/admiralmarkets.html → /brokers/admiral-markets/
/brokers/saxo.html → /brokers/saxo/
/brokers/eightcap.html → /brokers/eightcap/

# Platforms
/platforms.html → /trading-platforms/
/platforms/metatrader4.html → /trading-platforms/metatrader-4/
/platforms/ctrader.html → /trading-platforms/ctrader/
/platforms/vps.html → /trading-platforms/ (no VPS page needed)

# Old Partner Code URLs
/bonus-codes/avatrade-partner-code.html → /brokers/avatrade/partner-code/
/bonus-codes/avatrade-partner-code/ → /brokers/avatrade/partner-code/

# News/Analysis (bulk redirects)
/news/* → /trade/
/crypto-analysis/* → /trade/bitcoin/
/stock-market/* → /trade/stocks/
/forex-analysis/* → /trade/forex/
/analysis/* → /brokers/
```

---

## Execution Order

### Week 1: Foundation
1. ✅ Fix AvaTrade review (dates, schema, links)
2. Build Pepperstone, IC Markets reviews
3. Add schema to ALL existing pages
4. Set up 301 redirects in Cloudflare

### Week 2: Content
5. Build /trade/forex/, /trade/bitcoin/, /trade/stocks/
6. Build comparison pages (avatrade-vs-etoro)
7. Build cTrader, TradingView platform pages

### Week 3: Expansion
8. Build remaining broker reviews
9. Build prop firm individual pages
10. Set up regional UK/AU pages

### Week 4: Polish
11. Test all redirects
12. Submit sitemap to Google Search Console
13. Monitor rankings

---

## Success Metrics

| Keyword | Current Rank | Target | Timeline |
|---------|--------------|--------|----------|
| "avatrade partner code" | ? | #1 | 4 weeks |
| "avatrade review" | ? | Top 3 | 8 weeks |
| "best forex brokers 2026" | ? | Top 5 | 12 weeks |
| "best mt4 brokers" | ? | Top 5 | 8 weeks |
| "how to trade gold" | ? | Top 10 | 12 weeks |

---

*Last Updated: January 2026*
