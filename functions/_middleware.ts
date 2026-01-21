/**
 * Cloudflare Pages Middleware
 * Handles geo-based redirects for CNMV compliance (Spain CFD restrictions)
 *
 * Spanish visitors accessing CFD broker content are redirected to /spain/
 * which offers compliant alternatives (futures, crypto exchanges, etc.)
 */

interface CFGeo {
  country?: string;
  region?: string;
  city?: string;
}

interface RequestWithCF extends Request {
  cf?: CFGeo;
}

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

// Paths that are allowed for Spanish visitors (not CFD promotion)
const ALLOWED_PATHS = [
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
  for (const allowed of ALLOWED_PATHS) {
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

export async function onRequest(context: { request: RequestWithCF; next: () => Promise<Response> }): Promise<Response> {
  const { request, next } = context;
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Get country from Cloudflare's geo data
  const country = request.cf?.country;

  // Only redirect Spanish visitors (country code: ES)
  // This preserves LATAM (Mexico, Argentina, etc.) access to CFD content
  if (country === 'ES') {
    // Check if they're accessing CFD broker content
    if (isCFDPath(pathname)) {
      // Redirect to Spain compliance page
      const spainUrl = new URL('/spain/', url.origin);

      // Preserve original path as query param for analytics/debugging
      spainUrl.searchParams.set('from', pathname);

      return Response.redirect(spainUrl.toString(), 302);
    }
  }

  // All other requests pass through normally
  return next();
}
