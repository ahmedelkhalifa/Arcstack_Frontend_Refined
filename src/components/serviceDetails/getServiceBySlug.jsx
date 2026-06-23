export const getServiceBySlug = (
  services,
  slug
) => {
  return services.find(
    service => service.slug === slug
  );
};