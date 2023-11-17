export const createMediaDataState = (
  propertyInformation,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const uploadedMediaData = {
    sellingData: propertyBuyingDetails,
    mediaData: propertyInformation.map((item) => ({ ...item, value: '' })),
  };
  return { uploadedMediaData };
};
