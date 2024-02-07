import {
  PROPERTY_INFORMATION,
  coverLetterEntities,
} from '@/app/constants/postListing';
import { createSlice } from '@reduxjs/toolkit';

const initialState = coverLetterEntities;

const coverLetterSlice = createSlice({
  name: PROPERTY_INFORMATION.form,
  initialState,
  reducers: {
    //agent Id & Name
    handleCoverAgentId: (state, action) => {
      state.agentId = action.payload;
    },
    handleCoverProposalId: (state, action) => {
      state.proposalId = action.payload;
    },
    handleCoverAdId: (state, action) => {
      state.adId = Number(action.payload);
    },
    handleCoverUserIndex: (state, action) => {
      state.userIndex = action.payload;
    },

    //Ad_Infomation
    handleCoverInformation: (state, action) => {
      state.adInfomation = { ...action.payload };
    },

    //locationAndPurpose
    handleCoverLocationAndPuspose: (state, action) => {
      state.locationAndPurpose.adPurpose = action.payload;
    },
    handleCoverPropertyType: (state, action) => {
      state.locationAndPurpose.propertyType = action.payload;
    },
    handleCoverPropetySubType: (state, action) => {
      state.locationAndPurpose.propetySubType = action.payload;
    },
    handleCoverCity: (state, action) => {
      state.locationAndPurpose.city = action.payload;
    },

    //PropertySizeAndPricing
    handleCoverArea: (state, action) => {
      state.propertySizeAndPricing.areaSize = action.payload;
    },
    handleCoverAmount: (state, action) => {
      state.propertySizeAndPricing.amount = action.payload;
    },
    handleCoverInstallment: (state, action) => {
      state.propertySizeAndPricing.installment = action.payload;
    },

    handleCoverPossession: (state, action) => {
      state.propertySizeAndPricing.possession = action.payload;
    },

    // FeaturesAndAmenities
    handleCoverBedrooms: (state, action) => {
      state.featuresAndAmenities.bedrooms = action.payload;
    },
    handleCoverBathrooms: (state, action) => {
      state.featuresAndAmenities.bathrooms = action.payload;
    },
    handleCoverParking: (state, action) => {
      state.featuresAndAmenities.parking = action.payload;
    },
    handleCoverAmenities: (state, action) => {
      state.featuresAndAmenities.selectedAmenities = action.payload;
    },

    // PropertyImagesandVideos
    handleCoverImages: (state, action) => {
      state.propertyImagesAndVideos.images = action.payload;
    },
    handleCoverVideos: (state, action) => {
      state.propertyImagesAndVideos.videos = action.payload;
    },
  },
});

export const {
  handleCoverAgentId,
  handleCoverAdId,
  handleCoverProposalId,
  handleCoverUserIndex,
  handleCoverInformation,
  handleCoverLocationAndPuspose,
  handleCoverPropertyType,
  handleCoverPropetySubType,
  handleCoverCity,
  handleCoverArea,
  handleCoverAmount,
  handleCoverInstallment,
  handleCoverPossession,
  handleCoverBedrooms,
  handleCoverBathrooms,
  handleCoverParking,
  handleCoverAmenities,
  handleCoverImages,
  handleCoverVideos,
} = coverLetterSlice.actions;
export default coverLetterSlice.reducer;
