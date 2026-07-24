import createCache from "@emotion/cache";

/**
 * Shared emotion cache. The prerender uses it to extract critical CSS and the
 * client uses an identical one so it adopts those <style> tags instead of
 * re-inserting every rule on hydration.
 */
export default function createEmotionCache() {
  return createCache({ key: "css", prepend: true });
}
