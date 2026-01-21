# JTBD: Broker Review Pages

## Job Statement
**When** a trader is researching a broker before depositing money,
**I want to** provide comprehensive, trustworthy, SEO-optimized review content,
**So that** they feel confident clicking our affiliate link and we capture the conversion.

## Success Criteria
- [ ] All 15 broker reviews standardized to AvaTrade gold standard format
- [ ] Each review has 6+ AnalystNotes expandable sections (critical for SEO word count)
- [ ] Schema.org markup: FinancialService, Review, FAQPage, BreadcrumbList
- [ ] Internal links to partner code pages where applicable
- [ ] Mobile-first responsive design
- [ ] Page load < 2 seconds

## Standard Review Structure

```
1. Hero Section
   - Broker name, rating, tagline
   - Trust badges (regulation logos)
   - Quick stats (min deposit, spreads, instruments)
   - Primary CTA button

2. Quick Navigation
   - Anchor links to all sections

3. Overview Section + AnalystNotes
   - What is [Broker]?
   - Key differentiators
   - Who is it best for?
   - AnalystNotes: "Analyst's Overview Notes"

4. Pros & Cons Grid
   - Visual pros/cons comparison

5. Why Choose Section + AnalystNotes
   - Unique selling points
   - Target trader profiles
   - AnalystNotes: "Why Choose [Broker]"

6. Fees & Costs Section + AnalystNotes
   - Spread tables by instrument
   - Commission structure
   - Overnight fees
   - Deposit/withdrawal fees
   - AnalystNotes: "Fee Analysis"

7. Safety & Regulation Section + AnalystNotes
   - All regulatory licenses
   - Investor protection
   - Segregated funds
   - Company history
   - AnalystNotes: "Safety Assessment"

8. Platforms Section + AnalystNotes
   - All available platforms
   - Unique features
   - Mobile apps
   - AnalystNotes: "Platform Analysis"

9. Account Types Section
   - Account comparison table
   - Minimum deposits per account

10. Customer Support Section
    - Contact methods
    - Hours
    - Languages

11. FAQ Section
    - 8-12 questions with schema markup
    - Include partner code questions where applicable

12. Final Verdict Section + AnalystNotes
    - Overall recommendation
    - Best for / Not for
    - Rating breakdown
    - AnalystNotes: "Final Verdict"

13. CTA Section
    - Strong call to action
    - Partner code if available
    - Trust reassurance
```

## AnalystNotes Component Usage

```astro
<AnalystNotes
  title="Analyst's Overview Notes"
  icon="📊"
  id="overview-notes"
  variant="dark"
>
  <h4>What Our Analysis Reveals</h4>
  <p>Detailed expert analysis content...</p>
  <!-- 300-500 words of valuable content -->
</AnalystNotes>
```

Required IDs for consistency:
- `overview-notes`
- `why-choose-notes`
- `fees-notes`
- `safety-notes`
- `platforms-notes` (or unique feature like `proprietary-notes`)
- `verdict-notes`

## Brokers to Standardize

### Completed (6)
- [x] AvaTrade (gold standard)
- [x] Pepperstone
- [x] IC Markets
- [x] eToro
- [x] Axi
- [x] Plus500
- [x] IG

### Remaining (8)
- [ ] GO Markets
- [ ] Libertex
- [ ] City Index
- [ ] easyMarkets
- [ ] Vantage
- [ ] Admiral Markets (Admirals)
- [ ] Saxo Bank
- [ ] Eightcap

## Data Source
All broker data lives in `/src/data/brokers.ts` - use this as the source of truth for:
- Ratings and scores
- Minimum deposits
- Spreads
- Regulations
- Affiliate URLs
- Partner codes

## SEO Requirements
- Title: "[Broker] Review 2026: Fees, Pros & Cons [+ Bonus Code]"
- Meta description: Compelling, includes rating and key differentiator
- H1: Single, keyword-rich
- Schema: FinancialService + Review + FAQPage + BreadcrumbList
- Internal links: Link to /compare/, partner code page, related brokers
- Word count: 3,000+ words (AnalystNotes help achieve this)
