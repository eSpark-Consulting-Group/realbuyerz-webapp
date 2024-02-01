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
    handlePostId: (state, action) => {
      state.id = action.payload;
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
    addBedrooms: (state, action) => {
      state.featuresAndAmenities.bedrooms = action.payload;
    },
    addBathrooms: (state, action) => {
      state.featuresAndAmenities.bathrooms = action.payload;
    },
    addParking: (state, action) => {
      state.featuresAndAmenities.parking = action.payload;
    },
    addAmenities: (state, action) => {
      state.featuresAndAmenities.selectedAmenities = action.payload;
    },

    // PropertyImagesandVideos
    UploadImages: (state, action) => {
      state.propertyImagesAndVideos.images = action.payload;
    },
    UploadVideos: (state, action) => {
      state.propertyImagesAndVideos.videos = action.payload;
    },
  },
});

export const {
  handlePostId,
  handlePostInformation,
  handlePostLocationAndPuspose,
  handlePostPropertyType,
  handlePostPropetySubType,
  handlePostCity,
  handlePostArea,
  handlePostAmount,
  handlePostInstallment,
  handlePostPossession,
  addBedrooms,
  addBathrooms,
  addParking,
  addAmenities,
  UploadImages,
  UploadVideos,
} = postListingSlice.actions;
export default postListingSlice.reducer;
