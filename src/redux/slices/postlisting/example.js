import { createSlice } from '@reduxjs/toolkit';

const postListingEntities = {
  Ad_Infomation: '',
  locationAndPurpose: {
    adPurpose: '',
    propertyType: '',
    propetySubType: '',
    city: '',
    location: '',
  },
  PropertySizeAndPricing: {
    areaSize: '',
    amount: '',
    installment: '',
    possession: '',
  },
  FeaturesAndAmenities: {
    bedrooms: '',
    bathrooms: '',
    parking: '',
    selectedAmenities: '',
  },
  PropertyImagesAndVideos: { images: [], videos: [] },
};

const initialState = postListingEntities;

const ExamplePageSlice = createSlice({
  name: 'postListingEntities',
  initialState,
  reducers: {
    //Ad_Infomation
    addInformation: (state, action) => {
      state.Ad_Infomation = { ...action.payload };
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
      state.PropertySizeAndPricing.areaSize = action.payload;
    },
    addamount: (state, action) => {
      state.PropertySizeAndPricing.amount = action.payload;
    },
    addInstallment: (state, action) => {
      state.PropertySizeAndPricing.installment = action.payload;
    },

    addPossession: (state, action) => {
      state.PropertySizeAndPricing.possession = action.payload;
    },

    // FeaturesAndAmenities
    addBedrooms: (state, action) => {
      state.FeaturesAndAmenities.bedrooms = action.payload;
    },
    addBathrooms: (state, action) => {
      state.FeaturesAndAmenities.bathrooms = action.payload;
    },
    addParking: (state, action) => {
      state.FeaturesAndAmenities.parking = action.payload;
    },
    addAmenities: (state, action) => {
      state.FeaturesAndAmenities.selectedAmenities = action.payload;
    },
  },
});

export const {
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
} = ExamplePageSlice.actions;
export default ExamplePageSlice.reducer;
