/**
 * Hreflang Configuration for TradeTheDay.com
 *
 * Implements regional/language targeting for SEO per REGIONAL-STRATEGY.md
 *
 * Regional Structure:
 * - /brokers/avatrade/partner-code/ → Global/US (x-default)
 * - /uk/brokers/avatrade/partner-code/ → UK (en-GB)
 * - /au/brokers/avatrade/partner-code/ → Australia (en-AU)
 * - /au-zh/brokers/avatrade/partner-code/ → Australia Chinese (zh-AU)
 * - /zh/brokers/avatrade/partner-code/ → Global Chinese (zh)
 * - /es/brokers/avatrade/ava-futures/ → Spain (es-ES) - Different product
 */

export interface HreflangLink {
  hreflang: string;
  href: string;
}

export interface RegionalConfig {
  defaultLocale: string;
  baseUrl: string;
  variants: HreflangVariant[];
}

export interface HreflangVariant {
  locale: string;      // e.g., 'en', 'en-GB', 'zh-AU', 'es-ES'
  path: string;        // Full path from root, e.g., '/uk/brokers/avatrade/partner-code'
  isDefault?: boolean; // True for x-default
}

const BASE_URL = 'https://tradetheday.com';

/**
 * Page-specific hreflang configurations
 * Add entries here as regional pages are created
 */
export const hreflangConfigs: Record<string, HreflangVariant[]> = {
  // AvaTrade Partner Code - Money Page (highest priority for regional expansion)
  '/brokers/avatrade/partner-code': [
    { locale: 'en', path: '/brokers/avatrade/partner-code', isDefault: true },
    // Uncomment as regional pages are created:
    // { locale: 'en-GB', path: '/uk/brokers/avatrade/partner-code' },
    // { locale: 'en-AU', path: '/au/brokers/avatrade/partner-code' },
    // { locale: 'zh-AU', path: '/au-zh/brokers/avatrade/partner-code' },
    // { locale: 'zh', path: '/zh/brokers/avatrade/partner-code' },
    // { locale: 'es-ES', path: '/es/brokers/avatrade/ava-futures/' }, // Different product!
  ],

  // UK Partner Code Page
  '/uk/brokers/avatrade/partner-code': [
    { locale: 'en', path: '/brokers/avatrade/partner-code', isDefault: true },
    { locale: 'en-GB', path: '/uk/brokers/avatrade/partner-code' },
    // Add other variants as created
  ],

  // Australia Partner Code Page
  '/au/brokers/avatrade/partner-code': [
    { locale: 'en', path: '/brokers/avatrade/partner-code', isDefault: true },
    { locale: 'en-AU', path: '/au/brokers/avatrade/partner-code' },
    // Add other variants as created
  ],

  // Australia Chinese Partner Code Page
  '/au-zh/brokers/avatrade/partner-code': [
    { locale: 'en', path: '/brokers/avatrade/partner-code', isDefault: true },
    { locale: 'zh-AU', path: '/au-zh/brokers/avatrade/partner-code' },
    // Add other variants as created
  ],

  // Global Chinese Partner Code Page
  '/zh/brokers/avatrade/partner-code': [
    { locale: 'en', path: '/brokers/avatrade/partner-code', isDefault: true },
    { locale: 'zh', path: '/zh/brokers/avatrade/partner-code' },
    // Add other variants as created
  ],

  // Spain Ava Futures Page (different product, compliance requirement)
  '/es/brokers/avatrade/ava-futures/': [
    { locale: 'en', path: '/brokers/avatrade/partner-code', isDefault: true },
    { locale: 'es-ES', path: '/es/brokers/avatrade/ava-futures/' },
    // Add other variants as created
  ],
};

/**
 * Generate hreflang link tags for a given path
 * Returns array of link objects with hreflang and href attributes
 */
export function generateHreflangLinks(currentPath: string): HreflangLink[] {
  // Normalize path (ensure trailing slash)
  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;

  // Get config for this path
  const variants = hreflangConfigs[normalizedPath];

  if (!variants || variants.length === 0) {
    // No regional variants configured - return empty array
    return [];
  }

  const links: HreflangLink[] = [];

  // Add all locale variants
  for (const variant of variants) {
    links.push({
      hreflang: variant.locale,
      href: `${BASE_URL}${variant.path}`
    });

    // Add x-default for the default locale
    if (variant.isDefault) {
      links.push({
        hreflang: 'x-default',
        href: `${BASE_URL}${variant.path}`
      });
    }
  }

  return links;
}

/**
 * Generate HTML link tags for hreflang
 * Can be used directly in HTML head
 */
export function generateHreflangHTML(currentPath: string): string {
  const links = generateHreflangLinks(currentPath);

  if (links.length === 0) return '';

  return links
    .map(link => `<link rel="alternate" hreflang="${link.hreflang}" href="${link.href}" />`)
    .join('\n  ');
}

/**
 * Check if a path has regional variants
 */
export function hasRegionalVariants(currentPath: string): boolean {
  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  const variants = hreflangConfigs[normalizedPath];
  return variants !== undefined && variants.length > 1;
}

/**
 * Get all regional variants for a path
 */
export function getRegionalVariants(currentPath: string): HreflangVariant[] {
  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  return hreflangConfigs[normalizedPath] || [];
}

/**
 * Locale display names for UI
 */
export const localeDisplayNames: Record<string, string> = {
  'en': 'English (Global)',
  'en-GB': 'English (UK)',
  'en-AU': 'English (Australia)',
  'zh': '中文 (Global)',
  'zh-AU': '中文 (Australia)',
  'es-ES': 'Español (España)',
};

/**
 * Currency by locale
 */
export const localeCurrency: Record<string, string> = {
  'en': 'USD',
  'en-GB': 'GBP',
  'en-AU': 'AUD',
  'zh': 'USD',
  'zh-AU': 'AUD',
  'es-ES': 'EUR',
};
