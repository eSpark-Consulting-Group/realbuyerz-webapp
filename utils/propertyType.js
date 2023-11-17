import { PROPERTY_BUYING_DETAIL } from '@/app/constants/postListing';

export const createPropertyTypeState = (iconTitle, propertyBuyingDetails) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const propertyTypeInfo = {
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    propertyTypeData: iconTitle.map((item) => ({ ...item, value: '' })),
  };
  return { propertyTypeInfo };
};
