# Operational Learnings

This file captures learnings from implementing TradeTheDay.com. Update as you discover patterns, gotchas, and best practices.

---

## Broker Review Standardization

### Pattern Established (Jan 2026)
After standardizing 7 broker reviews (AvaTrade, Pepperstone, IC Markets, eToro, Axi, Plus500, IG), the following pattern emerged:

**Required Sections (in order):**
1. Hero with trust badges and quick stats
2. Quick navigation anchors
3. Overview + AnalystNotes (`overview-notes`)
4. Pros & Cons grid
5. Why Choose + AnalystNotes (`why-choose-notes`)
6. Fees & Costs + AnalystNotes (`fees-notes`)
7. Safety & Regulation + AnalystNotes (`safety-notes`)
8. Platforms + AnalystNotes (`platforms-notes`)
9. Account Types
10. Customer Support
11. FAQ with schema
12. Final Verdict + AnalystNotes (`verdict-notes`)
13. CTA section

**Approximate Line Counts:**
- Full review: 1200-1400 lines
- Each AnalystNotes section: 50-80 lines of content
- Total word count target: 3000+ words

### AnalystNotes Component
- Location: `/src/components/AnalystNotes.astro`
- Props: `{ title, icon, id, expanded?, variant? }`
- Always use `variant="dark"` for visibility
- IDs must be unique per page
- Content should be 300-500 words per section

### Data Source
- All broker data in `/src/data/brokers.ts`
- Access via: `const broker = brokers.find(b => b.slug === 'broker-slug')`
- Key fields: name, slug, scores, minDeposit, spreadsFrom, regulations, affiliateUrl, partnerCode

### Schema Markup
Required on every broker review:
```javascript
// FinancialService
{
  "@type": "FinancialService",
  "name": broker.name,
  "description": "...",
  // etc
}

// Review
{
  "@type": "Review",
  "itemReviewed": {...},
  "reviewRating": {...},
  "author": {...}
}

// FAQPage
{
  "@type": "FAQPage",
  "mainEntity": [...]
}

// BreadcrumbList
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

---

## Common Issues & Solutions

### Issue: Breadcrumb format
**Problem:** Some reviews had inconsistent breadcrumb format
**Solution:** Always use this structure:
```javascript
const breadcrumbItems = [
  { text: 'Home', href: '/' },
  { text: 'Brokers', href: '/brokers/' },
  { text: broker.name, current: true }
];
```

### Issue: Missing broker data
**Problem:** Some brokers don't have all fields in brokers.ts
**Solution:** Check the data file first, use sensible defaults, note gaps

### Issue: AnalystNotes not expanding
**Problem:** JavaScript not loading
**Solution:** AnalystNotes has inline script, should work. If not, check for JS errors.

---

## Content Guidelines

### Tone
- Expert but accessible
- Honest about pros AND cons
- No hype, no superlatives without data
- Always disclose affiliate relationship

### SEO
- H1: Single, contains primary keyword
- H2s: Major sections, keyword variations
- H3s: Subsections
- Internal links: 3-5 per review
- External links: Official broker site only

### CTAs
- Primary: "Open Account" / "Start Trading"
- Secondary: "Read Full Review" / "Compare Brokers"
- Partner code: Always prominent when available

---

## File Organization

```
/src/pages/brokers/
├── index.astro           # Broker comparison grid
├── avatrade/
│   └── index.astro       # Full review
├── pepperstone/
│   └── index.astro
└── [other-brokers]/

/src/data/
├── brokers.ts            # All broker data
├── propfirms.ts          # Prop firm data
└── events.ts             # Trading events

/src/components/
├── AnalystNotes.astro    # Critical for SEO
├── Breadcrumb.astro
├── CompanyInfo.astro
├── CostAnalysis.astro
├── PaymentDetails.astro
└── FAQ.astro
```

---

## Performance Notes

- Keep images optimized (<100KB)
- Inline critical CSS
- Defer non-critical JS
- Target: 90+ Lighthouse score

---

## Revenue Priorities

1. **AvaTrade Partner Code page** - Recover #1 ranking
2. **AvaTrade review** - Support partner code page
3. **Other broker reviews** - Volume play
4. **Prop firm reviews** - Emerging market
5. **Comparison pages** - Capture vs keywords

---

## Updates Log

| Date | Learning | Source |
|------|----------|--------|
| 2026-01-20 | Standardized 7 broker reviews, established pattern | Manual work |
| 2026-01-20 | AnalystNotes critical for SEO word count | User feedback |
| 2026-01-20 | Partner codes = main revenue | User interview |
