# Trade the Day - Reusable Components

A collection of copy/paste HTML components built on the Trade the Day Design System. Each component is self-contained and ready to use in your broker reviews, comparison pages, and other content.

## 📁 Component Files

### Core Components
- **`hero-section.html`** - Hero section with scorecard metrics
- **`navigation.html`** - Sticky navigation with smooth scrolling
- **`content-section.html`** - Standard content layouts and text sections
- **`card-grid.html`** - Feature cards in 2, 3, or 4 column grids

### Specialized Components  
- **`comparison-table.html`** - Highlighted broker comparison tables
- **`analyst-notes.html`** - Expandable expert analysis sections
- **`pros-cons.html`** - Side-by-side advantage/disadvantage lists
- **`faq-section.html`** - Accordion-style FAQ sections
- **`final-verdict.html`** - Rating and recommendation conclusions

### Templates
- **`page-template.html`** - Complete page template with all components
- **`layout-templates.html`** - Original comprehensive layout examples

## 🚀 Quick Start

1. **Include Required Files:**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="../assets/css/design-system.css">
   ```

2. **Copy Component HTML:**
   - Open any component file (e.g., `hero-section.html`)
   - Copy the entire `<section>` block
   - Paste into your page where needed

3. **Customize Content:**
   - Update text, links, and data to match your needs
   - Follow the usage instructions in each component file

4. **Add JavaScript (if needed):**
   - Include the JavaScript from `page-template.html` for interactive components
   - Or link to `assets/js/design-system.js`

## 📋 Component Usage Guide

### Hero Section
```html
<section class="hero section">
    <div class="container">
        <span class="chip">Broker Review</span>
        <h1 class="heading-1">AvaTrade Review 2025</h1>
        <p class="body-large">Comprehensive analysis...</p>
        <!-- scorecard optional -->
    </div>
</section>
```

### Navigation  
```html
<nav class="nav">
    <div class="container">
        <div class="nav-links">
            <a href="#overview" class="nav-link active">Overview</a>
            <a href="#features" class="nav-link">Features</a>
        </div>
    </div>
</nav>
```

### Comparison Table with Highlights
```html
<td class="highlight-best"><span class="currency">$100</span></td>
<td class="highlight-warning"><span class="percentage">2.5%</span></td>
<td class="highlight-brand"><span class="rating">4.2/5</span></td>
```

### Analyst Notes
```html
<div class="analyst-notes">
    <button class="analyst-notes-button" data-target="analysis-1">
        📊 Expert Analysis
    </button>
    <div id="analysis-1" class="analyst-notes-content" style="display: none;">
        <h4>Analysis content...</h4>
    </div>
</div>
```

## 🎨 Highlighting System

### Cell Highlights
- **`highlight-best`** - Light green with checkmark (best values)
- **`highlight-good`** - Light orange (above average)
- **`highlight-warning`** - Light red (concerning values) 
- **`highlight-brand`** - Light brand orange (featured)
- **`highlight-neutral`** - Light gray (standard)

### Number Formatting
- **`currency`** - Green styling for money values
- **`percentage`** - Orange styling for percentages  
- **`rating`** - Orange styling for ratings
- **`number-highlight`** - Monospace with background

## 🔧 Customization

### Section Backgrounds
- **`.section`** - White background
- **`.section.section-alt`** - Light gray background
- **`.section.section-dark`** - Dark gradient background

### Grid Options
- **`.grid.grid-2`** - 2-column responsive grid
- **`.grid.grid-3`** - 3-column responsive grid
- **`.grid.grid-4`** - 4-column responsive grid

### Card Variants
- **`.card`** - Standard card
- **`.card.card-compact`** - Reduced padding
- **`.card.card-elevated`** - Enhanced shadow

## 📱 Responsive Design

All components are mobile-responsive:
- **Mobile (< 768px):** Single column layouts, horizontal navigation scroll
- **Tablet (768px+):** 2-column grids, medium spacing  
- **Desktop (1024px+):** Full multi-column layouts

## ⚡ Interactive Components

Components requiring JavaScript:
- **Navigation** - Smooth scrolling, active state highlighting
- **Analyst Notes** - Expand/collapse functionality
- **FAQ Section** - Accordion behavior
- **Tables** - Hover effects

## 🎯 Best Practices

### Content Structure
1. Start with **Hero Section** (always first)
2. Add **Navigation** for long-form content
3. Use **Content Sections** for main information
4. Include **Comparison Table** for feature comparisons  
5. Add **Analyst Notes** for detailed analysis
6. Use **Pros & Cons** for balanced evaluation
7. Include **FAQ Section** for common questions
8. End with **Final Verdict** (rating + CTA)

### Typography Hierarchy
- **H1** - Page titles (hero section)
- **H2** - Section titles  
- **H3** - Subsection titles
- **H4/H5** - Card titles and minor headings
- **Body Large** - Section descriptions
- **Body** - Standard content

### Color Usage
- **Brand Orange** - CTAs, ratings, brand highlights
- **Green** - Success states, best values, pros
- **Red** - Warnings, poor values, cons  
- **Gray** - Neutral information, body text

## 🔍 File Dependencies

### Required CSS
```html
<link rel="stylesheet" href="../assets/css/design-system.css">
```

### Required JavaScript
```html
<script src="../assets/js/design-system.js"></script>
<!-- OR embed the JavaScript from page-template.html -->
```

### Optional Enhancements
- **Inter Font** - For consistent typography
- **Table Highlight Styles** - Include CSS from page-template.html

## 📞 Support

For design system updates or component requests:
1. Check the original AvaTrade review page for reference patterns
2. Review `design-style-template.html` for all available components
3. Refer to `design-system-documentation.md` for complete system details

## 🔄 Version Info

**Design System v1.0** - Based on AvaTrade review page analysis
**Components** - Modular, copy/paste ready
**Framework** - Pure CSS/HTML with minimal JavaScript
**Compatibility** - All modern browsers, mobile responsive