import { PROPERTY_BUYING_DETAIL } from '@/app/constants/postListing';
import { savePropertyData } from '@/src/redux/slices/postlisting/postListingSlice';

export const createInformationState = (
  propertyInformation,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const adInfoData = {
    sellingData: propertyBuyingDetails,
    addInfo: propertyInformation.map((item) => ({
      ...item,
      value: PROPERTY_BUYING_DETAIL.sellingDetails[item.label],
    })),
  };
  return { adInfoData };
};
export const handleInputChangeUtil = (prevData, name, value) => ({
  ...prevData,
  adInfoData: {
    sellingData: {
      ...prevData.adInfoData.sellingData,
      [name]: value,
    },
    addInfo: prevData.adInfoData.addInfo.map((item) =>
      item.label === name ? { ...item, value } : item
    ),
  },
});

export const handleClickUtil = (dispatch, propertyData) => {
  dispatch({
    type: savePropertyData,
    // payload: propertyData.adInfoData.sellingData,
    payload: {
      ...propertyData?.adInfoData?.sellingData,
      // ...propertyData.propertyStatusData.sellingData,
      ...propertyData?.uploadedMediaData?.sellingData,
    },

    //   // propertyStatusData: propertyData.propertyStatusData.sellingData,
    //   // adInfoData: propertyData.adInfoData.sellingData,
  });
  console.log('tests', propertyData);
};
