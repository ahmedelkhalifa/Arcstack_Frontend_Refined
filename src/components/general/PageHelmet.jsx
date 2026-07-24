import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { SITE_URL, OG_IMAGE as DEFAULT_OG_IMAGE } from "../../config/site";

/**
 * PageHelmet — per-page SEO tags
 *
 * @param {object}  props
 * @param {string}  [props.title]        page <title>
 * @param {string}  [props.description]  meta description
 * @param {string}  [props.canonical]    path e.g. "/about" (SITE_URL is prepended)
 * @param {string}  [props.ogImage]      full URL, defaults to DEFAULT_OG_IMAGE
 * @param {{en: string, tr: string}} [props.alternateSlugs]
 *        Distinct per-language paths, e.g.
 *        { en: "/services/business-websites", tr: "/services/kurumsal-web-siteleri" }.
 *        Omit when EN and TR share a single URL — emitting hreflang for two
 *        languages that resolve to the same URL is meaningless and Google
 *        discards the whole cluster.
 * @param {boolean} [props.noindex]      adds noindex,nofollow (e.g. /thank-you)
 * @param {object}  [props.jsonLd]       structured data, serialised to a JSON-LD script tag
 */
const PageHelmet = ({
  title = "",
  description = "",
  canonical = "/",
  ogImage = "",
  alternateSlugs,
  noindex = false,
  jsonLd,
}) => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const locale = lang === "tr" ? "tr_TR" : "en_US";

  const resolvedTitle = title || "ArcStack";
  const resolvedDescription = description || "";
  const resolvedCanonical = `${SITE_URL}${canonical || "/"}`;
  const resolvedOgImage = ogImage || DEFAULT_OG_IMAGE;

  // hreflang is only emitted when the two languages genuinely live at
  // different URLs (currently just the service detail pages). x-default
  // points at the English URL to match <html lang="en"> on the shell.
  const enHref = alternateSlugs ? `${SITE_URL}${alternateSlugs.en}` : undefined;
  const trHref = alternateSlugs ? `${SITE_URL}${alternateSlugs.tr}` : undefined;

  return (
    <Helmet prioritizeSeoTags>
      {/* Language */}
      <html lang={lang} />

      {/* Primary */}
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {/* A noindex page has no canonical URL to point at — the 404 in
          particular must not nominate the homepage as its canonical. */}
      {!noindex && <link rel="canonical" href={resolvedCanonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* hreflang — only for pages with distinct EN/TR URLs */}
      {enHref && <link rel="alternate" hrefLang="en" href={enHref} />}
      {trHref && <link rel="alternate" hrefLang="tr" href={trHref} />}
      {enHref && <link rel="alternate" hrefLang="x-default" href={enHref} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="ArcStack" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default PageHelmet;
