# TradeTheDay.com Regional & Language Strategy

## Overview

Most of the site remains **global/universal**. Only specific pages (primarily partner code/bonus pages) need regional variants due to:
- Different currencies and bonus amounts
- Different regulatory requirements
- Compliance restrictions (e.g., Spain cannot see bonus codes)
- Language preferences (Chinese-speaking audiences)

---

## URL Structure

### Global Pages (No Regional Variants)
These pages serve all visitors with one version:

```
/                                    → Homepage
/brokers/                            → Broker comparison hub
/brokers/avatrade-review/            → AvaTrade review (mentions ALL regulations)
/brokers/etoro-review/               → eToro review
/brokers/axi-review/                 → Axi review
/brokers/binance-review/             → Binance review
/brokers/kraken-review/              → Kraken review
/gold/                               → Gold trading guide
/oil/                                → Oil trading guide
/spread-betting/                     → Spread betting guide
/stock-trading-for-beginners/        → Stock trading guide
/what-is-trading-guide/              → Trading basics
```

### Regional Pages (Partner Codes & Bonuses)

| URL | Region | Language | Content |
|-----|--------|----------|---------|
| `/brokers/avatrade/partner-code/` | Global/US | English | USD tiers, multi-reg focus |
| `/uk/brokers/avatrade/partner-code/` | United Kingdom | English | GBP tiers, FCA emphasis |
| `/au/brokers/avatrade/partner-code/` | Australia | English | AUD tiers, ASIC emphasis |
| `/au-zh/brokers/avatrade/partner-code/` | Australia | Chinese | AUD tiers, ASIC, Chinese language |
| `/zh/brokers/avatrade/partner-code/` | Global Chinese | Chinese | USD tiers, Chinese language |
| `/es/brokers/avatrade/ava-futures/` | Spain | Spanish/English | Ava Futures product (NO bonus codes) |

---

## hreflang Implementation

Only pages with regional variants need hreflang tags. Each variant points to all siblings.

### Example: AvaTrade Partner Code Page

```html
<!-- On /brokers/avatrade/partner-code/ (Global/US) -->
<link rel="alternate" hreflang="en" href="https://tradetheday.com/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="en-GB" href="https://tradetheday.com/uk/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="en-AU" href="https://tradetheday.com/au/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="zh-AU" href="https://tradetheday.com/au-zh/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="zh" href="https://tradetheday.com/zh/brokers/avatrade/partner-code/" />
<link rel="alternate" hreflang="es-ES" href="https://tradetheday.com/es/brokers/avatrade/ava-futures/" />
<link rel="alternate" hreflang="x-default" href="https://tradetheday.com/brokers/avatrade/partner-code/" />
```

**Note:** The Spain version links to a DIFFERENT page (ava-futures) because bonus codes are not permitted.

---

## Content Differences by Region

### Global/US (Default)
- Currency: USD
- Regulations: Mentions all (FCA, ASIC, CySEC, etc.)
- Bonus tiers: USD amounts
- Target: US visitors + fallback for unlisted regions

### UK (/uk/)
- Currency: GBP
- Regulations: FCA focus, FSCS protection emphasis
- Bonus tiers: GBP amounts
- Compliance: Standard UK financial promotions

### Australia (/au/)
- Currency: AUD
- Regulations: ASIC focus
- Bonus tiers: AUD amounts
- Compliance: Australian financial services requirements

### Australia Chinese (/au-zh/)
- Currency: AUD
- Regulations: ASIC focus
- Bonus tiers: AUD amounts
- Language: Simplified Chinese
- Target: Chinese-speaking Australians

### Global Chinese (/zh/)
- Currency: USD
- Regulations: Multi-reg (focus on international accessibility)
- Bonus tiers: USD amounts
- Language: Simplified Chinese
- Target: Chinese speakers worldwide (not in China mainland)

### Spain (/es/)
- **DIFFERENT PRODUCT**: Ava Futures (not AvaTrade bonus codes)
- Currency: EUR
- Regulations: EU/Spanish compliance
- Language: Spanish (or English with Spanish context)
- **NO BONUS CODE CONTENT** - compliance restriction

### UAE/Dubai (/ae/)
- Currency: AED (USD also widely used)
- Regulations: DFSA focus (AvaTrade is DFSA regulated)
- Language: English primary, Arabic option
- Target: Dubai traders, UAE expats, MENA region
- **High-value market** - wealthy trading community
- Keywords: "forex brokers dubai", "best broker uae", "avatrade dubai"

---

## Geo-Detection Strategy

### Soft Redirect (Recommended for most regions)
- Detect visitor location via Cloudflare headers or IP
- Show a banner: "It looks like you're in [Country]. View local version?"
- Let user choose, remember preference

### Hard Redirect (Required for Spain)
- Spanish IP addresses MUST be redirected away from bonus code pages
- Redirect to `/es/brokers/avatrade/ava-futures/`
- This is a compliance requirement, not optional

### Implementation (Cloudflare Workers)
```javascript
// Example: Cloudflare Worker for geo-routing
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const country = request.cf?.country || 'US';

    // Hard redirect for Spain (compliance)
    if (country === 'ES' && url.pathname.includes('/partner-code')) {
      return Response.redirect('https://tradetheday.com/es/brokers/avatrade/ava-futures/', 302);
    }

    // Soft redirect handled client-side for other regions
    return fetch(request);
  }
}
```

---

## Language Requirements

### Chinese Content

#### Script Variants
| Script | Name | Used In | URL Prefix |
|--------|------|---------|------------|
| Simplified (简体中文) | Jiǎntǐ | Mainland China, Singapore, Malaysia, most AU immigrants | `/zh/`, `/au-zh/` |
| Traditional (繁體中文) | Fántǐ | Hong Kong, Taiwan, Macau | `/zh-hant/` (if needed) |

**Recommendation:** Start with Simplified Chinese - larger audience, most Chinese speakers in Australia.

#### Key Terminology (from AvaTrade's Chinese Interface)

| English | Simplified Chinese | Traditional Chinese | Notes |
|---------|-------------------|---------------------|-------|
| Partner Code | 代理号 | 代理號 | Also called "Agent Code" |
| Partner Code (alt) | 合作代码 | 合作代碼 | "Cooperation Code" |
| "Have a partner code?" | 已有合作代码？ | 已有合作代碼？ | |
| Click here | 点击这里 | 點擊這裏 | |
| (Optional) | （选填） | （選填） | |
| Welcome Bonus | 欢迎奖金 | 歡迎獎金 | |
| Trading Account | 交易账户 | 交易賬戶 | |
| Broker | 经纪商 | 經紀商 | |
| Forex | 外汇 | 外匯 | |
| Regulation | 监管 | 監管 | |
| FCA Regulated | FCA监管 | FCA監管 | |
| ASIC Regulated | ASIC监管 | ASIC監管 | |

#### Pages to Translate (Chinese)

**High Priority - Money Pages:**
| Page | Chinese URL | Traffic Potential |
|------|-------------|-------------------|
| AvaTrade Partner Code | `/zh/brokers/avatrade/partner-code/` | High - direct conversions |
| AvaTrade Review | `/zh/brokers/avatrade-review/` | High - research intent |
| Homepage | `/zh/` | Medium - brand discovery |
| Broker Comparison | `/zh/brokers/` | High - comparison shoppers |

**Medium Priority - Supporting Content:**
| Page | Chinese URL | Traffic Potential |
|------|-------------|-------------------|
| eToro Review | `/zh/brokers/etoro-review/` | Medium |
| Binance Review | `/zh/brokers/binance-review/` | High (crypto popular) |
| What is Trading Guide | `/zh/what-is-trading-guide/` | Medium - educational |
| Gold Trading | `/zh/gold/` | Medium - culturally relevant |

**Lower Priority:**
- Spread betting guide (UK-specific concept)
- Oil trading guide
- Stock trading for beginners

#### Chinese SEO Considerations
- **Baidu vs Google:** Overseas Chinese mostly use Google, but consider Baidu for global reach
- **Keywords:** Research Chinese search terms (外汇经纪商, 外汇交易平台, etc.)
- **Trust Signals:** Chinese readers value: regulation badges, years in business, user numbers
- **Social Proof:** Consider WeChat/Weibo integration for sharing
- **Payment Methods:** Mention UnionPay, Alipay if supported by broker

### Spanish Content
- **Pages needed**: Ava Futures page only (compliance - no bonus codes for Spain)
- **Note**: This is a DIFFERENT product, not a translation of bonus code page
- **Future consideration**: If expanding to Latin America, could translate more content

---

## File Structure (When Implemented)

```
src/pages/
├── index.astro                              # Global homepage (English)
├── brokers/
│   ├── index.astro                          # Broker comparison (English)
│   ├── avatrade-review/index.astro          # AvaTrade review (English)
│   ├── etoro-review/index.astro             # eToro review (English)
│   ├── binance-review/index.astro           # Binance review (English)
│   └── avatrade/
│       └── partner-code/index.astro         # Partner code (Global/US)
│
├── uk/
│   └── brokers/
│       └── avatrade/
│           └── partner-code/index.astro     # UK partner code (GBP)
│
├── au/
│   └── brokers/
│       └── avatrade/
│           └── partner-code/index.astro     # AU partner code (AUD)
│
├── au-zh/
│   └── brokers/
│       └── avatrade/
│           └── partner-code/index.astro     # AU Chinese partner code
│
├── zh/                                       # Chinese language section
│   ├── index.astro                          # Chinese homepage
│   ├── brokers/
│   │   ├── index.astro                      # Chinese broker comparison
│   │   ├── avatrade-review/index.astro      # Chinese AvaTrade review
│   │   ├── etoro-review/index.astro         # Chinese eToro review
│   │   ├── binance-review/index.astro       # Chinese Binance review
│   │   └── avatrade/
│   │       └── partner-code/index.astro     # Chinese partner code
│   ├── gold/index.astro                     # Chinese gold guide
│   └── what-is-trading-guide/index.astro    # Chinese trading basics
│
└── es/
    └── brokers/
        └── avatrade/
            └── ava-futures/index.astro      # Spain - Ava Futures (NO bonus)
```

---

## Implementation Priority

### Phase 1: Complete Global Site (CURRENT)
- Finish all global pages
- Ensure solid SEO foundation
- Deploy to Cloudflare Pages

### Phase 2: UK Regional Launch
- Create `/uk/brokers/avatrade/partner-code/`
- Add hreflang tags to both versions
- Update global version to be more US-focused
- Test and validate

### Phase 3: Australia Launch
- Create `/au/brokers/avatrade/partner-code/`
- Add to hreflang cluster
- Research AUD bonus tiers

### Phase 4: Chinese Language (Simplified - 简体中文)

**4a. Core Money Pages:**
- `/zh/brokers/avatrade/partner-code/` - Partner code page (priority)
- `/au-zh/brokers/avatrade/partner-code/` - AU Chinese variant

**4b. High-Traffic Pages:**
- `/zh/` - Chinese homepage
- `/zh/brokers/` - Chinese broker comparison
- `/zh/brokers/avatrade-review/` - AvaTrade review in Chinese
- `/zh/brokers/binance-review/` - Binance review (high Chinese interest)

**4c. Supporting Content:**
- `/zh/gold/` - Gold trading guide (culturally relevant)
- `/zh/what-is-trading-guide/` - Trading basics
- `/zh/brokers/etoro-review/` - eToro review

**Translation approach:**
- Professional translation for money pages (partner code, reviews)
- AI-assisted + human review for guides
- Native Chinese speaker review for all content

### Phase 5: Spain Compliance
- Create `/es/brokers/avatrade/ava-futures/` page
- Implement Cloudflare Worker for geo-redirect
- Test compliance requirements met

### Phase 6: Traditional Chinese (Optional)
- If traffic data shows demand from HK/Taiwan
- Create `/zh-hant/` versions of key pages
- Different cultural considerations (Taiwan vs HK vs Macau)

---

## Checklist Before Regional Expansion

### Infrastructure
- [ ] Global site complete and deployed
- [ ] Cloudflare Pages hosting configured
- [ ] Analytics tracking regional traffic sources (GA4 geo reports)
- [ ] Cloudflare Workers ready for geo-redirect (Spain)

### Content Preparation
- [ ] Bonus tier information confirmed for each region (USD, GBP, AUD, EUR)
- [ ] Ava Futures product information gathered for Spain
- [ ] Chinese keyword research completed (外汇经纪商, etc.)

### Translation Resources
- [ ] Chinese translation budget identified
- [ ] Professional translator sourced (financial content experience)
- [ ] Native speaker for review/QA
- [ ] Glossary of terms finalized (see terminology table above)

### Legal/Compliance
- [ ] Legal review of regional requirements
- [ ] Spain compliance verified (no bonus codes)
- [ ] Chinese advertising regulations understood
- [ ] Disclaimers translated appropriately

---

## Notes

### China Considerations
- **China Mainland**: AvaTrade may not operate in mainland China due to regulations. The `/zh/` version targets Chinese speakers OUTSIDE China (Taiwan, Hong Kong, Singapore, Malaysia, overseas Chinese in AU/US/UK/Canada).
- **VPN Users**: Some mainland Chinese use VPNs to access international brokers - this is a grey area.
- **Baidu SEO**: If targeting mainland searchers, consider Baidu optimization (different from Google).

### General Regional Notes
- **Currency Display**: Consider adding currency selector or auto-detection for bonus calculators.
- **Testimonials**: Regional versions should have locally relevant testimonials (Chinese names for Chinese pages, etc.).
- **Trust Signals**: Chinese audiences particularly value: years in business, regulation badges, user counts, awards.
- **Gold Content**: Gold trading (黄金交易) is culturally significant in Chinese markets - prioritize this guide for translation.

### Technical Considerations
- **Font Loading**: Chinese fonts are large. Consider:
  - Using system fonts (PingFang SC, Microsoft YaHei, Noto Sans SC)
  - Subsetting if using custom fonts
  - Lazy loading for non-critical text
- **Text Expansion**: Chinese text is typically 30-50% shorter than English. Design should accommodate this.
- **RTL**: Not needed for Chinese (LTR like English).

---

*Last Updated: January 2026*
