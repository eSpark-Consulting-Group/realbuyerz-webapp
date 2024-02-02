import {
  PROPERTY_INFORMATION,
  postRequestEntities,
} from '@/app/constants/postListing';
import { createSlice } from '@reduxjs/toolkit';

const initialState = postRequestEntities;

const postRequestSlice = createSlice({
  name: PROPERTY_INFORMATION.form,
  initialState,
  reducers: {
    //agent Id & formId
    handleRequestAgentId: (state, action) => {
      state.usertId = action.payload;
    },

    handleRequestFormId: (state, action) => {
      state.formId = action.payload;
    },

    //Ad_Infomation
    handleRequestInformation: (state, action) => {
      state.adInfomation = { ...action.payload };
    },

    //locationAndPurpose
    handleRequestLocationAndPuspose: (state, action) => {
      state.locationAndPurpose.adPurpose = action.payload;
    },
    handleRequestPropertyType: (state, action) => {
      state.locationAndPurpose.propertyType = action.payload;
    },
    handleRequestPropetySubType: (state, action) => {
      state.locationAndPurpose.propetySubType = action.payload;
    },
    handleReuestCity: (state, action) => {
      state.locationAndPurpose.city = action.payload;
    },

    //PropertySizeAndPricing
    handleRequestArea: (state, action) => {
      state.propertySizeAndPricing.areaSize = action.payload;
    },
    handleRequestAmount: (state, action) => {
      state.propertySizeAndPricing.amount = action.payload;
    },
    handleRequestInstallment: (state, action) => {
      state.propertySizeAndPricing.installment = action.payload;
    },

    handleRequestPossession: (state, action) => {
      state.propertySizeAndPricing.possession = action.payload;
    },

    // FeaturesAndAmenities
    handleRequestBedrooms: (state, action) => {
      state.featuresAndAmenities.bedrooms = action.payload;
    },
    handleRequestBathrooms: (state, action) => {
      state.featuresAndAmenities.bathrooms = action.payload;
    },
    handleRequestParking: (state, action) => {
      state.featuresAndAmenities.parking = action.payload;
    },
    handleRequestAmenities: (state, action) => {
      state.featuresAndAmenities.selectedAmenities = action.payload;
    },
  },
});

export const {
  handleRequestAgentId,
  handleRequestFormId,
  handleRequestInformation,
  handleRequestLocationAndPuspose,
  handleRequestPropertyType,
  handleRequestPropetySubType,
  handleReuestCity,
  handleRequestArea,
  handleRequestAmount,
  handleRequestInstallment,
  handleRequestPossession,
  handleRequestBedrooms,
  handleRequestBathrooms,
  handleRequestParking,
  handleRequestAmenities,
  UploadImages,
  UploadVideos,
} = postRequestSlice.actions;
export default postRequestSlice.reducer;
