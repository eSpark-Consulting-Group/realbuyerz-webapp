import { PROPERTY_BUYING_DETAIL } from '@/app/constants/postListing';
export const createPropertySizeState = (
  propertySizeInformation,
  propertyBuyingDetails,
  selectCity
) => {
  if (!propertyBuyingDetails) {
    return {};
  }

  const propertySizeAndAmount = {
    sellingData: propertyBuyingDetails,
    propertySize: propertySizeInformation.map((item) => ({
      ...item,
      value: PROPERTY_BUYING_DETAIL.sellingDetails[item.label],
    })),
    selectCityOption: selectCity,
  };
  return { propertySizeAndAmount };
};
