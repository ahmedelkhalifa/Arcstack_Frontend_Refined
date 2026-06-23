const serviceFiles = import.meta.glob(
  "/src/locales/*/services/*.json"
);

export const getServiceData = async (
  language,
  serviceId
) => {
  const path =
    `/src/locales/${language}/services/${serviceId}.json`;

  const loader = serviceFiles[path];

  if (!loader) {
    throw new Error(
      `Service file not found: ${path}`
    );
  }

  const module = await loader();

  return module.default;
};