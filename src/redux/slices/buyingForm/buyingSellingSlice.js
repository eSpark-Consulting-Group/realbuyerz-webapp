import {
  PROPERTY_INFORMATION,
  postListingEntities,
} from '@/app/constants/postListing';
import { createSlice } from '@reduxjs/toolkit';

const initialState = postListingEntities;

const buyingSellingFormSlice = createSlice({
  name: PROPERTY_INFORMATION.form,
  initialState,
  reducers: {
    //agent Id & Name
    addId: (state, action) => {
      state.id = action.payload;
    },

    //Ad_Infomation
    addInformation: (state, action) => {
      state.adInfomation = { ...action.payload };
    },

    //locationAndPurpose
    addLocationAndPuspose: (state, action) => {
      state.locationAndPurpose.adPurpose = action.payload;
    },
    addPropertyType: (state, action) => {
      state.locationAndPurpose.propertyType = action.payload;
    },
    addpropetySubType: (state, action) => {
      state.locationAndPurpose.propetySubType = action.payload;
    },
    addCity: (state, action) => {
      state.locationAndPurpose.city = action.payload;
    },

    //PropertySizeAndPricing
    addArea: (state, action) => {
      state.propertySizeAndPricing.areaSize = action.payload;
    },
    addamount: (state, action) => {
      state.propertySizeAndPricing.amount = action.payload;
    },
    addInstallment: (state, action) => {
      state.propertySizeAndPricing.installment = action.payload;
    },

    addPossession: (state, action) => {
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
  addId,
  addInformation,
  addLocationAndPuspose,
  addPropertyType,
  addpropetySubType,
  addCity,
  addArea,
  addamount,
  addInstallment,
  addPossession,
  addBedrooms,
  addBathrooms,
  addParking,
  addAmenities,
  UploadImages,
  UploadVideos,
} = buyingSellingFormSlice.actions;
export default buyingSellingFormSlice.reducer;
