/**
 * Build-time prerender + sitemap generation.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server bundle).
 * For every route it renders real HTML into dist/, so crawlers get the page
 * content, title, description and canonical without executing any JavaScript.
 *
 * Any route that fails to render fails the build — shipping a half-prerendered
 * site would silently 404 real pages, which is worse than not deploying.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Set before the SSR bundle is dynamically imported below. Vite deliberately
// leaves `process.env.NODE_ENV` as a runtime lookup in SSR builds, so without
// this MUI and emotion render in development mode and emit debug class names
// (`css-c43qg5-MuiContainer-root` instead of `css-1smd0pm`). Those never match
// the production client bundle, so React throws the prerendered markup away
// and re-renders everything on the client — losing the entire benefit.
process.env.NODE_ENV = "production";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const ssrEntry = path.join(rootDir, ".ssr", "entry-server.js");

const SITE_URL = "https://www.arcstack.online";
const SEO_BLOCK = /<!--seo-->[\s\S]*?<!--\/seo-->/;

const { render, getRoutes, NOINDEX_ROUTES } = await import(
  pathToFileURL(ssrEntry).href
);

const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

if (!SEO_BLOCK.test(template)) {
  throw new Error(
    "index.html is missing the <!--seo--> ... <!--/seo--> markers; " +
      "the prerender has nowhere to inject per-page tags.",
  );
}

/**
 * Turn a route path into the file it is written to inside dist/.
 *
 * Flat `<route>.html` rather than `<route>/index.html`: that is the layout
 * Vercel's `cleanUrls` resolves (`/about` -> `about.html`), and the one
 * `vite preview` finds via its .html extension fallback, so local preview
 * behaves the same as production.
 */
function outputFileFor(routePath) {
  if (routePath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, `${routePath.replace(/^\//, "")}.html`);
}

function buildPage({ html, headTags, styleTags, lang }) {
  return template
    .replace(/<html lang="[^"]*"/, `<html lang="${lang}"`)
    .replace(SEO_BLOCK, `${headTags}\n    ${styleTags}`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

const routes = getRoutes();
const allPaths = [...routes.map((r) => r.path), ...NOINDEX_ROUTES];

const failures = [];

for (const routePath of allPaths) {
  try {
    const rendered = await render(routePath);

    if (!rendered.html || rendered.html.length < 500) {
      throw new Error(
        `rendered only ${rendered.html.length} chars — the page is probably empty`,
      );
    }

    // Emotion appends a readable label (css-<hash>-MuiContainer-root) only in
    // development. Seeing one means NODE_ENV did not take effect and every
    // class name will differ from the client bundle's.
    if (/css-[a-z0-9]+-Mui/.test(rendered.html)) {
      throw new Error(
        "rendered with development-mode emotion class names — hydration would " +
          "mismatch on every element",
      );
    }

    const file = outputFileFor(routePath);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, buildPage(rendered), "utf8");

    console.log(
      `  ✓ ${routePath.padEnd(36)} ${String(rendered.html.length).padStart(7)} chars  [${rendered.lang}]`,
    );
  } catch (error) {
    failures.push({ routePath, error });
    console.error(`  ✗ ${routePath} — ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(
    `\nPrerender failed for ${failures.length} route(s). Not writing a sitemap.`,
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// sitemap.xml
// ---------------------------------------------------------------------------

/**
 * hreflang is only emitted for the service pages, which are the only ones with
 * genuinely distinct EN/TR URLs. Declaring two languages for a single URL (as
 * the old hand-written sitemap did for /, /about, /work and /contact) makes
 * Google discard the annotations entirely.
 */
const SERVICE_PAIRS = [
  ["business-websites", "kurumsal-web-siteleri"],
  ["e-commerce-websites", "e-ticaret-siteleri"],
  ["business-systems", "is-yonetim-sistemleri"],
  ["custom-software", "ozel-yazilim-cozumleri"],
];

function alternatesFor(routePath) {
  const slug = routePath.replace("/services/", "");
  const pair = SERVICE_PAIRS.find(([en, tr]) => en === slug || tr === slug);
  if (!routePath.startsWith("/services/") || !pair) return "";

  const [en, tr] = pair;
  const enUrl = `${SITE_URL}/services/${en}`;
  const trUrl = `${SITE_URL}/services/${tr}`;

  // x-default points at English to match <html lang="en"> on the shell.
  return [
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>`,
    `    <xhtml:link rel="alternate" hreflang="tr" href="${trUrl}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>`,
  ].join("\n");
}

const lastmod = new Date().toISOString().slice(0, 10);

const urlEntries = routes
  .map(({ path: routePath, changefreq, priority }) => {
    const alternates = alternatesFor(routePath);
    return [
      "  <url>",
      `    <loc>${SITE_URL}${routePath}</loc>`,
      alternates,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n");
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

console.log(
  `\nPrerendered ${allPaths.length} routes; sitemap.xml lists ${routes.length} indexable URLs.`,
);
