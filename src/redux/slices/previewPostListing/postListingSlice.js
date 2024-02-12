import {
  PROPERTY_INFORMATION,
  postListingEntities,
} from '@/app/constants/postListing';
import { createSlice } from '@reduxjs/toolkit';

const initialState = postListingEntities;

const postListingSlice = createSlice({
  name: PROPERTY_INFORMATION.form,
  initialState,
  reducers: {
    //agent Id & Name
    handlePostAgentId: (state, action) => {
      state.agentId = action.payload;
    },
    handlePostFormId: (state, action) => {
      state.formId = action.payload;
    },

    //Ad_Infomation
    handlePostInformation: (state, action) => {
      state.adInfomation = { ...action.payload };
    },

    //locationAndPurpose
    handlePostLocationAndPuspose: (state, action) => {
      state.locationAndPurpose.adPurpose = action.payload;
    },
    handlePostPropertyType: (state, action) => {
      state.locationAndPurpose.propertyType = action.payload;
    },
    handlePostPropetySubType: (state, action) => {
      state.locationAndPurpose.propetySubType = action.payload;
    },
    handlePostCity: (state, action) => {
      state.locationAndPurpose.city = action.payload;
    },

    //PropertySizeAndPricing
    handlePostArea: (state, action) => {
      state.propertySizeAndPricing.areaSize = action.payload;
    },
    handlePostAmount: (state, action) => {
      state.propertySizeAndPricing.amount = action.payload;
    },
    handlePostInstallment: (state, action) => {
      state.propertySizeAndPricing.installment = action.payload;
    },

    handlePostPossession: (state, action) => {
      state.propertySizeAndPricing.possession = action.payload;
    },

    // FeaturesAndAmenities
    handlePostBedrooms: (state, action) => {
      state.featuresAndAmenities.bedrooms = action.payload;
    },
    handlePostBathrooms: (state, action) => {
      state.featuresAndAmenities.bathrooms = action.payload;
    },
    handlePostParking: (state, action) => {
      state.featuresAndAmenities.parking = action.payload;
    },
    handlePostAmenities: (state, action) => {
      state.featuresAndAmenities.selectedAmenities = action.payload;
    },

    // PropertyImagesandVideos
    handlePostImages: (state, action) => {
      state.propertyImagesAndVideos.images = action.payload;
    },
    handlePostVideos: (state, action) => {
      state.propertyImagesAndVideos.videos = action.payload;
    },
  },
});

export const {
  handlePostAgentId,
  handlePostFormId,
  handlePostInformation,
  handlePostLocationAndPuspose,
  handlePostPropertyType,
  handlePostPropetySubType,
  handlePostCity,
  handlePostArea,
  handlePostAmount,
  handlePostInstallment,
  handlePostPossession,
  handlePostBedrooms,
  handlePostBathrooms,
  handlePostParking,
  handlePostAmenities,
  handlePostImages,
  handlePostVideos,
} = postListingSlice.actions;
export default postListingSlice.reducer;
