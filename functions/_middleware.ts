/**
 * Cloudflare Pages Middleware
 *
 * Handles:
 * 1. 301 Redirects from redirects.json (managed via GitHub)
 * 2. Spain CNMV compliance (geo-redirect Spanish visitors from CFD content)
 */

import redirectsData from './redirects.json';

// ============================================
// TYPES
// ============================================

interface CFGeo {
  country?: string;
  region?: string;
  city?: string;
}

interface RequestWithCF extends Request {
  cf?: CFGeo;
}

interface RedirectsConfig {
  static: Record<string, string>;
  patterns: Array<{
    match: string;
    redirect: string;
    comment?: string;
  }>;
  geo: Record<string, string>;
  support: Record<string, string>;
}

// ============================================
// REDIRECT CONFIG (from redirects.json)
// ============================================

const config = redirectsData as unknown as RedirectsConfig;

// Compile regex patterns once at startup for performance
const compiledPatterns = config.patterns.map(p => ({
  regex: new RegExp(p.match, 'i'),
  redirect: p.redirect
}));

// ============================================
// SPAIN CNMV COMPLIANCE CONFIG
// ============================================

// Paths that contain CFD broker content - Spanish visitors should be redirected
const CFD_PATHS = [
  '/brokers/',
  '/brokers/avatrade',
  '/brokers/etoro',
  '/brokers/plus500',
  '/brokers/pepperstone',
  '/brokers/ic-markets',
  '/brokers/ig',
  '/brokers/axi',
  '/brokers/admiral-markets',
  '/brokers/saxo',
  '/brokers/city-index',
  '/brokers/go-markets',
  '/brokers/libertex',
  '/brokers/easymarkets',
  '/brokers/vantage',
  '/brokers/titanfx',
  '/brokers/eightcap',
  '/brokers/spread-betting',
  '/bonus-codes/avatrade',
  '/compare/avatrade',
  '/compare/etoro',
  '/compare/plus500',
  '/compare/pepperstone',
  '/compare-forex-brokers',
  '/find-broker',
  '/deals/',
];

// Paths allowed for Spanish visitors (not CFD promotion)
const SPAIN_ALLOWED_PATHS = [
  '/spain/',
  '/exchanges/',
  '/propfirms/',
  '/tools/',
  '/guides/',
  '/glossary/',
  '/trading-platforms/',
  '/trade/',
  '/videos/',
  '/events/',
  '/signals/',
  '/free/',
  '/risk-disclaimer',
  '/advertiser-disclosure',
  '/rating-system',
  '/style-guide',
  '/coming-soon',
  '/404',
];

function isCFDPath(pathname: string): boolean {
  // Check if it's an explicitly allowed path first
  for (const allowed of SPAIN_ALLOWED_PATHS) {
    if (pathname.startsWith(allowed)) {
      return false;
    }
  }
  // Check if it matches a CFD path
  for (const cfdPath of CFD_PATHS) {
    if (pathname.startsWith(cfdPath)) {
      return true;
    }
  }
  return false;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function resolveUrl(target: string, origin: string): string {
  if (target.startsWith('http://') || target.startsWith('https://')) {
    return target;
  }
  const slash = target.startsWith('/') ? '' : '/';
  return origin + slash + target;
}

// ============================================
// MAIN MIDDLEWARE
// ============================================

export async function onRequest(context: {
  request: RequestWithCF;
  next: () => Promise<Response>
}): Promise<Response> {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Skip assets - let them pass through immediately
  if (pathname.startsWith('/_astro/') ||
      pathname.startsWith('/images/') ||
      pathname.startsWith('/fonts/') ||
      pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|xml|txt|json)$/)) {
    return next();
  }

  // Normalize pathname (remove trailing slash except for root)
  let normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  // ----------------------------------------
  // STEP 0: Handle .html extension removal
  // ----------------------------------------
  if (normalizedPath.endsWith('.html')) {
    const cleanPath = normalizedPath.slice(0, -5);
    return Response.redirect(resolveUrl(cleanPath, url.origin), 301);
  }

  // ----------------------------------------
  // STEP 1: Check 301 Redirects
  // ----------------------------------------

  // 1a. Static redirects
  if (config.static[normalizedPath]) {
    return Response.redirect(
      resolveUrl(config.static[normalizedPath], url.origin),
      301
    );
  }

  // 1b. Geo URL redirects (old URLs like /best-forex-brokers-uk)
  if (config.geo[normalizedPath]) {
    return Response.redirect(
      resolveUrl(config.geo[normalizedPath], url.origin),
      301
    );
  }

  // 1c. Support subdomain redirects (cross-domain)
  const supportTarget = config.support[normalizedPath];
  if (supportTarget && typeof supportTarget === 'string' && supportTarget.startsWith('http')) {
    return Response.redirect(supportTarget, 301);
  }

  // 1d. Pattern-based redirects
  for (const pattern of compiledPatterns) {
    const match = normalizedPath.match(pattern.regex);
    if (match) {
      let target = pattern.redirect;

      // Replace capture groups ($1, $2, etc.)
      for (let i = 1; i < match.length; i++) {
        target = target.replace(new RegExp('\\$' + i, 'g'), match[i] || '');
      }

      // Clean up empty segments and trailing slashes
      target = target.replace(/\/+/g, '/').replace(/\/$/, '') || '/';

      return Response.redirect(
        resolveUrl(target, url.origin),
        301
      );
    }
  }

  // ----------------------------------------
  // STEP 2: Spain CNMV Compliance (Geo-redirect)
  // ----------------------------------------

  const country = request.cf?.country;

  // Only redirect Spanish visitors (country code: ES)
  // This preserves LATAM (Mexico, Argentina, etc.) access to CFD content
  if (country === 'ES') {
    if (isCFDPath(pathname)) {
      // Redirect to Spain compliance page
      const spainUrl = new URL('/spain/', url.origin);
      // Preserve original path as query param for analytics
      spainUrl.searchParams.set('from', pathname);
      return Response.redirect(spainUrl.toString(), 302);
    }
  }

  // ----------------------------------------
  // No redirect needed - pass through
  // ----------------------------------------
  return next();
}
