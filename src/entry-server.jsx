import React, { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { AppRoutes } from "./App.jsx";
import theme from "./themes/theme.jsx";
import createEmotionCache from "./createEmotionCache";
import { initI18n, resolveInitialLanguage } from "./i18n";
import { slugMap } from "./data/slugMap";
import { getWorkProjects } from "./data/workProjects";

import "./index.css";

/**
 * Every URL the site can serve, derived from the same data the app renders
 * from — so a new project or service can never be missing from the build
 * output or the sitemap.
 *
 * @returns {{path: string, changefreq: string, priority: string}[]}
 */
export function getRoutes() {
  const identity = (/** @type {string} */ key) => key;
  const workSlugs = getWorkProjects(identity).map((project) => project.slug);
  const serviceSlugs = Object.keys(slugMap);

  return [
    { path: "/", changefreq: "monthly", priority: "1.0" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    ...serviceSlugs.map((slug) => ({
      path: `/services/${slug}`,
      changefreq: "monthly",
      priority: "0.8",
    })),
    { path: "/work", changefreq: "weekly", priority: "0.9" },
    ...workSlugs.map((slug) => ({
      path: `/work/${slug}`,
      changefreq: "monthly",
      priority: "0.6",
    })),
    { path: "/about", changefreq: "monthly", priority: "0.7" },
    { path: "/contact", changefreq: "monthly", priority: "0.8" },
  ];
}

/** Routes that are built but deliberately kept out of the sitemap. */
export const NOINDEX_ROUTES = ["/thank-you", "/404"];

/**
 * Render one route to static HTML.
 *
 * @param {string} url site-root-relative path
 * @returns {Promise<{html: string, headTags: string, styleTags: string, lang: string}>}
 */
export async function render(url) {
  const lang = resolveInitialLanguage(url);
  await initI18n(lang);

  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

  /** @type {{helmet?: any}} */
  const helmetContext = {};

  // This tree must mirror main.jsx exactly, including StrictMode: React's
  // useId derives ids from a component's position in the tree, so an extra or
  // missing wrapper shifts every generated id and breaks hydration.
  const html = renderToString(
    <StrictMode>
      <CacheProvider value={cache}>
        <HelmetProvider context={helmetContext}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StaticRouter location={url}>
              <AppRoutes />
            </StaticRouter>
          </ThemeProvider>
        </HelmetProvider>
      </CacheProvider>
    </StrictMode>,
  );

  const { helmet } = helmetContext;

  // PageHelmet sets `prioritizeSeoTags`, which moves title, description,
  // canonical, hreflang and the og:* tags into a separate `priority` bucket.
  // Leaving it out silently drops exactly the tags this whole exercise is
  // about, so it is asserted rather than optional-chained away.
  if (!helmet?.priority) {
    throw new Error(
      `Helmet produced no priority tags for ${url} — the SEO head would be empty.`,
    );
  }

  const headTags = [
    helmet.title.toString(),
    helmet.priority.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ]
    .filter((tag) => tag && tag.trim())
    .join("\n    ");

  return {
    html,
    headTags,
    styleTags: constructStyleTagsFromChunks(extractCriticalToChunks(html)),
    lang,
  };
}
