import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isPreview }) => ({
  // `vite preview` must not fall back to index.html the way a SPA server does:
  // production serves one prerendered file per route, and the SPA fallback
  // hands every nested route the homepage instead, which looks exactly like a
  // hydration bug. Dev still needs the fallback for client-side routing.
  appType: isPreview ? "mpa" : "spa",
  plugins: [react()],
  ssr: {
    // Bundle these into the SSR output rather than leaving them as bare Node
    // imports — MUI, emotion and react-helmet-async all ship CJS that interops
    // badly when imported from the ESM prerender script.
    noExternal: [/^@mui\//, /^@emotion\//, 'react-helmet-async'],
  },
}))
