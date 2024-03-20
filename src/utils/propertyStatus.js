import { PROPERTY_BUYING_DETAIL } from '@/src/constants/postListing';

export const createPropertyStatusState = ({
  propertySell,
  propertyBuyingDetails,
}) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const propertyStatusData = {
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    purposeData: propertySell.map((item) => ({ ...item, value: '' })),
  };
  return { propertyStatusData };
};
