import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n, {
  initI18n,
  resolveInitialLanguage,
  getStoredLanguage,
} from "./i18n";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import theme from "./themes/theme.jsx";
import { HelmetProvider } from "react-helmet-async";
import createEmotionCache from "./createEmotionCache";

// The language the prerendered HTML was built with. This must match exactly,
// or hydration mismatches and React throws away the prerendered markup.
const prerenderedLanguage = resolveInitialLanguage(window.location.pathname);
initI18n(prerenderedLanguage);

// A returning visitor may have picked the other language. Applying it before
// the first render would contradict the prerendered HTML, so in that case we
// skip hydration and do a clean client render instead.
const storedLanguage = getStoredLanguage();
const languageDiffers =
  storedLanguage !== null && storedLanguage !== prerenderedLanguage;

if (languageDiffers) {
  i18n.changeLanguage(storedLanguage);
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root container #root is missing from index.html");
}
const container = rootElement;

const app = (
  <StrictMode>
    <CacheProvider value={createEmotionCache()}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </HelmetProvider>
    </CacheProvider>
  </StrictMode>
);

if (container.hasChildNodes() && !languageDiffers) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = "";
  createRoot(container).render(app);
}
