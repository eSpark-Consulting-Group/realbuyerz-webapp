import { PROPERTY_BUYING_DETAIL } from '@/app/constants/postListing';

export const incrementCounterState = (propertyBuyingDetails) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  return PROPERTY_BUYING_DETAIL.sellingDetails.incrementBtn[identifier];
};
