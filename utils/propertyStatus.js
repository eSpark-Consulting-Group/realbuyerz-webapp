import { PROPERTY_BUYING_DETAIL } from '@/app/constants/postListing';
import { savePropertyData } from '@/src/redux/slices/postlisting/postListingSlice';

export const createPropertyStatusState = (
  propertySell,
  propertyBuyingDetails
) => {
  if (!propertyBuyingDetails) {
    return {};
  }
  const propertyStatusData = {
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    purposeData: propertySell.map((item) => ({ ...item, value: '' })),
  };
  return { propertyStatusData };
};

//
export const handleClick = (dispatch, propertyData) => {
  dispatch({
    type: savePropertyData,
    payload: propertyData.propertyStatusData.sellingData,
  });
  console.log(propertyData);
};
export const handleButtonClickUtil = (index, prevData, setPropertyData) => {
  const selectedText = propertySell[index].text;
  const updatedPurposeData = [...prevData.propertyStatusData.purposeData];
  updatedPurposeData[index].value = selectedText;
  const updatedSellingData = {
    ...prevData.propertyStatusData.sellingData,
    selectedPurpose: selectedText,
  };
  const updatedPropertyData = {
    ...prevData,
    propertyStatusData: {
      sellingData: updatedSellingData,
      purposeData: updatedPurposeData,
    },
  };
  setPropertyData(updatedPropertyData);
};
