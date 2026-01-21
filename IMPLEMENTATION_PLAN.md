# TradeTheDay.com Implementation Plan

**Last Updated:** 2026-01-20
**Status:** IN PROGRESS

## Mission
Transform TradeTheDay.com into the #1 broker/exchange/prop firm affiliate site, recovering the "avatrade partner code" keyword and expanding revenue streams.

---

## Phase 1: Foundation (CURRENT)
*Get the site live with core content*

### 1.1 Broker Review Standardization
Standardize all broker reviews to AvaTrade gold standard format with 6+ AnalystNotes sections.

| Task | Status | Notes |
|------|--------|-------|
| AvaTrade review | ✅ DONE | Gold standard template |
| Pepperstone review | ✅ DONE | Standardized |
| IC Markets review | ✅ DONE | Standardized |
| eToro review | ✅ DONE | Standardized |
| Axi review | ✅ DONE | Standardized |
| Plus500 review | ✅ DONE | Standardized |
| IG review | ✅ DONE | Standardized |
| GO Markets review | ✅ DONE | Standardized with 6 AnalystNotes |
| Libertex review | ✅ DONE | Standardized with 6 AnalystNotes |
| City Index review | ✅ DONE | Standardized with 6 AnalystNotes |
| easyMarkets review | ✅ DONE | Standardized with 6 AnalystNotes |
| Vantage review | ✅ DONE | Standardized with 6 AnalystNotes |
| Admiral Markets review | ✅ DONE | Standardized with 6 AnalystNotes |
| Saxo Bank review | ✅ DONE | Standardized with 6 AnalystNotes |
| Eightcap review | ✅ DONE | Standardized with 6 AnalystNotes, TradingView focus |

### 1.2 Partner Code Pages
| Task | Status | Notes |
|------|--------|-------|
| Audit existing AvaTrade partner code page | ✅ DONE | Found duplicate content issue |
| Optimize AvaTrade partner code for SGE | ✅ DONE | Added 4 AnalystNotes, fixed duplicate, Cialdini optimized |
| Create eToro partner code page | 🔄 TODO | If we have code |
| Create Pepperstone partner code page | 🔄 TODO | If we have code |

### 1.3 Exchange Review Standardization
| Task | Status | Notes |
|------|--------|-------|
| Binance review standardization | ✅ DONE | Added 5 AnalystNotes sections |
| Kraken review standardization | ✅ DONE | Added 4 AnalystNotes sections |
| Stormgain review standardization | ✅ DONE | Added 4 AnalystNotes sections |

### 1.4 Core Pages
| Task | Status | Notes |
|------|--------|-------|
| Homepage optimization | ✅ DONE | Cialdini principles applied, added 3 AnalystNotes sections |
| Broker comparison page (`/brokers/`) | ✅ DONE | Has social proof |
| AI Broker Matcher (`/compare/`) | ✅ DONE | Added AnalystNotes, verified quiz |
| Bonus codes hub (`/bonus-codes/`) | ✅ DONE | Added 4 AnalystNotes sections, updated year to 2026 |

---

## Phase 2: Expansion
*Add more content, more brokers, more revenue streams*

### 2.1 Prop Firm Reviews
| Task | Status | Notes |
|------|--------|-------|
| FTMO review | ✅ DONE | Full review with 6 AnalystNotes, discount code |
| The Funded Trader review | ✅ DONE | Full review with 6 AnalystNotes |
| True Forex Funds review | ✅ DONE | Full review with 6 AnalystNotes |
| Fidelcrest review | ✅ DONE | Full review with 6 AnalystNotes, $2M scaling focus |
| Funded Next review | ✅ DONE | Full review with 6 AnalystNotes, 95% split focus |
| Prop firms comparison page | ✅ DONE | Added 3 AnalystNotes sections |

### 2.2 Comparison Pages
| Task | Status | Notes |
|------|--------|-------|
| AvaTrade vs eToro | ✅ DONE | Full comparison with 5 AnalystNotes |
| AvaTrade vs Plus500 | ✅ DONE | Full comparison with 5 AnalystNotes |
| Pepperstone vs IC Markets | ✅ DONE | ECN broker comparison with 6 AnalystNotes |
| FTMO vs Funded Trader | ✅ DONE | 6 AnalystNotes, full prop firm comparison |

### 2.3 Additional Brokers
| Task | Status | Notes |
|------|--------|-------|
| Add TitanFX | ✅ DONE | Full review with 6 AnalystNotes, ECN focus |
| Research new broker partnerships | 🔄 TODO | |

---

## Phase 3: SEO & Optimization
*Rank and convert*

### 3.1 Technical SEO
| Task | Status | Notes |
|------|--------|-------|
| Schema markup audit | ✅ DONE | BaseLayout has Organization/WebSite, list pages have ItemList, reviews have broker/review/FAQ schemas |
| Internal linking audit | ✅ DONE | Added related links to reviews and comparisons |
| Sitemap generation | ✅ DONE | Updated with 50+ pages including all reviews, propfirms, comparisons |
| robots.txt optimization | ✅ DONE | Configured with AI crawler access, proper disallows |
| Hreflang infrastructure | ✅ DONE | `/src/utils/hreflang.ts` utility created, BaseLayout auto-generates hreflang tags, ready for regional pages |
| Core Web Vitals audit | 🔄 TODO | |

### 3.2 Content SEO
| Task | Status | Notes |
|------|--------|-------|
| Keyword research | 🔄 TODO | Partner code variations |
| Content gap analysis | 🔄 TODO | |
| Featured snippet optimization | 🔄 TODO | |

### 3.3 Conversion Optimization
| Task | Status | Notes |
|------|--------|-------|
| A/B test CTAs | 🔄 TODO | |
| Exit intent popup | 🔄 TODO | |
| Social proof enhancement | 🔄 TODO | |

---

## Phase 4: Automation & Scale
*Auto-update, monitor, grow*

### 4.1 Automation
| Task | Status | Notes |
|------|--------|-------|
| Auto-update broker data | 🔄 TODO | |
| Auto-update dates (2026, 2027...) | 🔄 TODO | |
| Price/spread monitoring | 🔄 TODO | |

### 4.2 Signals Integration
| Task | Status | Notes |
|------|--------|-------|
| Design signals flow | 🔄 TODO | User mentioned for later |
| AI signals integration | 🔄 TODO | |
| LearnToTrade.Academy hook | 🔄 TODO | |

---

## Phase 5: Regional Expansion
*See REGIONAL-STRATEGY.md for full details*

### 5.1 Infrastructure (DONE)
| Task | Status | Notes |
|------|--------|-------|
| Hreflang utility | ✅ DONE | `/src/utils/hreflang.ts` - auto-generates tags based on path |
| BaseLayout hreflang support | ✅ DONE | Dynamic locale, lang attribute, hreflang link generation |
| Regional strategy documented | ✅ DONE | `REGIONAL-STRATEGY.md` with full URL structure |

### 5.2 UK Regional Launch
| Task | Status | Notes |
|------|--------|-------|
| `/uk/brokers/avatrade/partner-code/` | 🔄 TODO | GBP tiers, FCA focus |
| Update hreflang config | 🔄 TODO | Uncomment en-GB variant |

### 5.3 Australia Regional Launch
| Task | Status | Notes |
|------|--------|-------|
| `/au/brokers/avatrade/partner-code/` | 🔄 TODO | AUD tiers, ASIC focus |
| Update hreflang config | 🔄 TODO | Uncomment en-AU variant |

### 5.4 Chinese Language (简体中文)
| Task | Status | Notes |
|------|--------|-------|
| `/zh/brokers/avatrade/partner-code/` | 🔄 TODO | High priority - direct conversions |
| `/au-zh/brokers/avatrade/partner-code/` | 🔄 TODO | AU Chinese variant |
| Chinese keyword research | 🔄 TODO | 外汇经纪商, etc. |

### 5.5 Spain Compliance
| Task | Status | Notes |
|------|--------|-------|
| `/es/brokers/avatrade/ava-futures/` | 🔄 TODO | Different product - NO bonus codes |
| Cloudflare Worker geo-redirect | 🔄 TODO | Hard redirect Spanish IPs |

---

## Deployment
| Task | Status | Notes |
|------|--------|-------|
| Cloudflare Pages setup | 🔄 TODO | |
| Domain configuration | 🔄 TODO | |
| Analytics (GA4) | 🔄 TODO | |
| Search Console setup | 🔄 TODO | |

---

## Notes & Decisions
- AnalystNotes component is CRITICAL for SEO - adds 1000+ words per page
- Partner codes are the main revenue driver - prioritize partner code pages
- User is running solo - automation is key
- Mobile-first, fast as fuck

---

## File References
- Broker data: `/src/data/brokers.ts`
- Prop firm data: `/src/data/propfirms.ts`
- Events data: `/src/data/events.ts`
- Gold standard review: `/src/pages/brokers/avatrade/index.astro`
- AnalystNotes component: `/src/components/AnalystNotes.astro`
- Hreflang utility: `/src/utils/hreflang.ts`
- Regional strategy: `/REGIONAL-STRATEGY.md`
