import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://arcstack.online";
const DEFAULT_OG_IMAGE = "https://arcstack.online/og-image.png";

/**
 * PageHelmet — per-page SEO tags
 *
 * Props:
 *  title         string   — page <title>
 *  description   string   — meta description
 *  canonical     string   — path e.g. "/about" (SITE_URL is prepended)
 *  ogImage       string   — full URL, defaults to DEFAULT_OG_IMAGE
 *  alternateSlugs object  — { en: "/services/business-websites", tr: "/services/kurumsal-web-siteleri" }
 *                           omit when EN and TR share the same path
 *  noindex       bool     — adds noindex,nofollow (e.g. /thank-you)
 *  jsonLd        object   — structured data object, serialised to JSON-LD script tag
 */
const PageHelmet = ({
  title,
  description,
  canonical,
  ogImage,
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

  // hreflang: if alternate slugs differ per language use them,
  // otherwise both languages point to the same canonical path
  const enHref = alternateSlugs
    ? `${SITE_URL}${alternateSlugs.en}`
    : resolvedCanonical;
  const trHref = alternateSlugs
    ? `${SITE_URL}${alternateSlugs.tr}`
    : resolvedCanonical;

  return (
    <Helmet prioritizeSeoTags>
      {/* Language */}
      <html lang={lang} />

      {/* Primary */}
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={resolvedCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* hreflang — bilingual SEO */}
      <link rel="alternate" hrefLang="en" href={enHref} />
      <link rel="alternate" hrefLang="tr" href={trHref} />
      <link rel="alternate" hrefLang="x-default" href={enHref} />

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
