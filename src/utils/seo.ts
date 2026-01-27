/**
 * SEO Utility Functions for TradeTheDay
 * Generates schema.org structured data for various page types
 */

const SITE_URL = 'https://tradetheday.com';
const SITE_NAME = 'TradeTheDay';

export interface BrokerSchemaProps {
  name: string;
  url: string;
  description: string;
  logo?: string;
  foundingDate?: string;
  headquarters?: {
    country: string;
    city?: string;
  };
  serviceTypes?: string[];
  regulations?: {
    authority: string;
    licenseNumber: string;
    country: string;
  }[];
  aggregateRating?: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
    ratingCount?: number;
    reviewCount?: number;
  };
  minDeposit?: string;
  tradingInstruments?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewSchemaProps {
  itemReviewed: {
    type: 'FinancialService' | 'Product' | 'Organization';
    name: string;
    url?: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  author?: string;
  datePublished?: string;
  reviewBody?: string;
}

export interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  section?: string;
  keywords?: string[];
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface HowToSchemaProps {
  name: string;
  description: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
  steps: HowToStep[];
}

export interface BreadcrumbItem {
  text?: string;
  name?: string;  // Alias for text
  href?: string;
  url?: string;   // Alias for href
  current?: boolean;
}

export interface OfferSchemaProps {
  name: string;
  description: string;
  url: string;
  validFrom?: string;
  validThrough?: string;
  seller?: {
    name: string;
    url?: string;
  };
  eligibleRegion?: string[];
}

/**
 * Generate FinancialService schema for broker pages
 */
export function generateBrokerSchema(props: BrokerSchemaProps): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": props.name,
    "url": props.url,
    "description": props.description,
  };

  if (props.logo) {
    schema.logo = props.logo;
  }

  if (props.foundingDate) {
    schema.foundingDate = props.foundingDate;
  }

  if (props.headquarters) {
    schema.address = {
      "@type": "PostalAddress",
      "addressCountry": props.headquarters.country,
    };
    if (props.headquarters.city) {
      schema.address.addressLocality = props.headquarters.city;
    }
  }

  if (props.serviceTypes && props.serviceTypes.length > 0) {
    schema.serviceType = props.serviceTypes;
  }

  if (props.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": props.aggregateRating.ratingValue,
      "bestRating": props.aggregateRating.bestRating || 5,
      "worstRating": props.aggregateRating.worstRating || 1,
    };
    if (props.aggregateRating.ratingCount) {
      schema.aggregateRating.ratingCount = props.aggregateRating.ratingCount;
    }
    if (props.aggregateRating.reviewCount) {
      schema.aggregateRating.reviewCount = props.aggregateRating.reviewCount;
    }
  }

  if (props.minDeposit) {
    schema.priceRange = `Min deposit: ${props.minDeposit}`;
  }

  return schema;
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Review schema for broker reviews
 */
export function generateReviewSchema(props: ReviewSchemaProps): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": props.itemReviewed.type,
      "name": props.itemReviewed.name,
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": props.reviewRating.ratingValue,
      "bestRating": props.reviewRating.bestRating || 5,
      "worstRating": props.reviewRating.worstRating || 1,
    },
    "author": {
      "@type": "Organization",
      "name": props.author || SITE_NAME,
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
    }
  };

  if (props.itemReviewed.url) {
    schema.itemReviewed.url = props.itemReviewed.url;
  }

  if (props.datePublished) {
    schema.datePublished = props.datePublished;
  }

  if (props.reviewBody) {
    schema.reviewBody = props.reviewBody;
  }

  return schema;
}

/**
 * Generate Article schema for guides and blog posts
 */
export function generateArticleSchema(props: ArticleSchemaProps): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": props.headline,
    "description": props.description,
    "url": props.url,
    "datePublished": props.datePublished,
    "author": {
      "@type": "Organization",
      "name": props.author || SITE_NAME,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": props.publisher || SITE_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/brand/tradetheday-logo.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": props.url
    }
  };

  if (props.dateModified) {
    schema.dateModified = props.dateModified;
  }

  if (props.image) {
    schema.image = props.image.startsWith('http') ? props.image : `${SITE_URL}${props.image}`;
  }

  if (props.section) {
    schema.articleSection = props.section;
  }

  if (props.keywords && props.keywords.length > 0) {
    schema.keywords = props.keywords.join(', ');
  }

  return schema;
}

/**
 * Generate HowTo schema for step-by-step guides
 */
export function generateHowToSchema(props: HowToSchemaProps): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": props.name,
    "description": props.description,
    "step": props.steps.map((step, index) => {
      const stepSchema: any = {
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
      };

      if (step.image) {
        stepSchema.image = step.image.startsWith('http') ? step.image : `${SITE_URL}${step.image}`;
      }

      if (step.url) {
        stepSchema.url = step.url;
      }

      return stepSchema;
    })
  };

  if (props.image) {
    schema.image = props.image.startsWith('http') ? props.image : `${SITE_URL}${props.image}`;
  }

  if (props.totalTime) {
    schema.totalTime = props.totalTime;
  }

  if (props.estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      "currency": props.estimatedCost.currency,
      "value": props.estimatedCost.value
    };
  }

  return schema;
}

/**
 * Generate BreadcrumbList schema
 * Accepts both text/href and name/url property formats for flexibility
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[], currentUrl?: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => {
      // Support both property name formats (text/href and name/url)
      const itemName = item.text || item.name || '';
      const itemUrl = item.href || item.url || currentUrl || '';
      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": itemName,
        "item": itemUrl.startsWith('http') ? itemUrl : `${SITE_URL}${itemUrl}`
      };
    })
  };
}

/**
 * Generate Offer schema for bonus codes and promotions
 */
export function generateOfferSchema(props: OfferSchemaProps): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "price": "0",
  };

  if (props.validFrom) {
    schema.validFrom = props.validFrom;
  }

  if (props.validThrough) {
    schema.validThrough = props.validThrough;
  }

  if (props.seller) {
    schema.seller = {
      "@type": "Organization",
      "name": props.seller.name,
    };
    if (props.seller.url) {
      schema.seller.url = props.seller.url;
    }
  }

  if (props.eligibleRegion && props.eligibleRegion.length > 0) {
    schema.eligibleRegion = props.eligibleRegion.map(region => ({
      "@type": "Country",
      "name": region
    }));
  }

  return schema;
}

/**
 * Generate ItemList schema for comparison/list pages
 */
export function generateItemListSchema(items: { name: string; url: string; position?: number }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": item.position || index + 1,
      "name": item.name,
      "url": item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

/**
 * Generate WebApplication schema for tools like the broker selector
 */
export function generateWebApplicationSchema(props: {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "applicationCategory": props.applicationCategory || "FinanceApplication",
    "operatingSystem": props.operatingSystem || "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL
    }
  };
}

/**
 * Helper to get current date in ISO format
 */
export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Helper to get current year
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
