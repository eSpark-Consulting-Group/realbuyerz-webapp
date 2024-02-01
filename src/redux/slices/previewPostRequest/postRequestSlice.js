import {
  PROPERTY_INFORMATION,
  postListingEntities,
} from '@/app/constants/postListing';
import { createSlice } from '@reduxjs/toolkit';

const initialState = postListingEntities;

const postRequestSlice = createSlice({
  name: PROPERTY_INFORMATION.form,
  initialState,
  reducers: {
    //agent Id & Name
    handleRequestId: (state, action) => {
      state.id = action.payload;
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
  },
});

export const {
  handleRequestId,
  handleRequestInformation,
  handleRequestLocationAndPuspose,
  handleRequestPropertyType,
  handleRequestPropetySubType,
  handleReuestCity,
  handleRequestArea,
  handleRequestAmount,
  handleRequestInstallment,
  handleRequestPossession,
  addBedrooms,
  addBathrooms,
  addParking,
  addAmenities,
  UploadImages,
  UploadVideos,
} = postRequestSlice.actions;
export default postRequestSlice.reducer;
