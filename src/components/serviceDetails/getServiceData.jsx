/**
 * Service copy, loaded eagerly.
 *
 * These files used to be loaded with a dynamic import inside an effect, which
 * meant the service pages rendered a "Loading..." screen on the first pass —
 * so that is all the prerender (and any crawler that does not execute the
 * async chunk) ever saw. All eight files together are ~36KB of JSON, so
 * bundling them is cheaper than losing the content.
 */
const serviceFiles = /** @type {Record<string, {default: any}>} */ (
  import.meta.glob("/src/locales/*/services/*.json", { eager: true })
);

/**
 * @param {string} language  "en" | "tr"
 * @param {number|string} serviceId
 * @returns {any|null} the service copy, or null when the combination is unknown
 */
export const getServiceData = (language, serviceId) => {
  const module = serviceFiles[`/src/locales/${language}/services/${serviceId}.json`];
  return module ? module.default : null;
};
