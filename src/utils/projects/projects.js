export function capitalizeFirstLetter(text) {
  return text.replace(/\b\w/g, (match) => match.toUpperCase());
}

export function findSelectedProject(properties, id) {
  return properties?.find(
    (property) => String(property?.property_id) === String(id)
  );
}

export function filterProjectsByType(projects, capAdsType) {
  return projects?.filter((item) => item?.purpose === capAdsType);
}
export function filterProjectsByTypeCategory(projects, category, adsType) {
  const capCategory = capitalizeFirstLetter(category);
  const capAdsType = capitalizeFirstLetter(adsType);
  return projects?.filter(
    (item) =>
      item?.propertyCategory === capCategory && item?.purpose === capAdsType
  );
}
export function filterProjectsByTypeCategoryCity(
  projects,
  category,
  adsType,
  city
) {
  const capCategory = capitalizeFirstLetter(category);
  const capAdsType = capitalizeFirstLetter(adsType);
  const capCity = capitalizeFirstLetter(city);
  return projects?.filter(
    (item) =>
      item?.propertyCategory === capCategory &&
      item?.purpose === capAdsType &&
      item?.city === capCity
  );
}
export function extractTypeId(pathname) {
  const segments = pathname.split(`/`);
  const adsType = segments[segments.length - 1];
  const capAdsType = capitalizeFirstLetter(adsType);
  return { adsType, capAdsType };
}
export function extractCategoryIdTypeId(pathname) {
  const segments = pathname.split(`/`);
  const category = segments[segments.length - 1];
  const adsType = segments[segments.length - 2];
  return { category, adsType };
}
export function extractCategoryIdTypeIdCityId(pathname) {
  const segments = pathname.split(`/`);
  const city = segments[segments.length - 1];
  const category = segments[segments.length - 2];
  const adsType = segments[segments.length - 3];
  return { city, category, adsType };
}
export function filterProjectsByPurposeCategory(
  projects,
  purpose,
  propertyCategory
) {
  return projects.filter(
    (item) =>
      item?.purpose === purpose &&
      item?.propertyCategory === propertyCategory &&
      item?.status === 'submit'
  ).length;
}
export function filterProjectsByPurposeCategoryCity(
  projects,
  purpose,
  propertyCategory,
  city
) {
  return projects.filter(
    (item) =>
      item?.purpose === purpose &&
      item?.propertyCategory === propertyCategory &&
      item?.city === city &&
      item?.status === 'submit'
  ).length;
}
