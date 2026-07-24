/**
 * Single source of truth for absolute URLs.
 *
 * The apex domain 308-redirects to www on Vercel, so www IS the canonical
 * host. Every canonical, hreflang, og:url, JSON-LD url and sitemap <loc>
 * must use this value — a canonical that points at a redirect is treated by
 * Google as "Page with redirect" and is never indexed.
 */
export const SITE_URL = "https://www.arcstack.online";

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Build an absolute URL from a site-root-relative path. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
