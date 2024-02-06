import { createSlice } from '@reduxjs/toolkit';

const userAdsSlice = createSlice({
  name: 'userAdsSlice',
  initialState: {
    userPostings: [
      {
        id: 1,
        usertId: "",
        formId: 1,
        proposals: [],
        adInfomation: {
          title: "Test",
          description: "test"
        },
        locationAndPurpose: {
          adPurpose: "Rent",
          propertyType: "House",
          propetySubType: "House",
          city: "Karachi",
          location: "",
        },
        propertySizeAndPricing: {
          areaSize: { area: '200', unit: 'sq.yd' },
          amount: { amount: '15000000', unit: 'PKR' },
          installment: true,
          possession: true,
        },
        featureAndAmenities: {
          bedrooms: 0,
          bathrooms: 0,
          parking: 0,
          selectedAmenities: "",
        }

      }
    ],
  },
  reducers: {
    handleSumitUserAds: (state, action) => {
      state.userPostings.push(action.payload);
    },
  },
});

export const { handleSumitUserAds } = userAdsSlice.actions;
export default userAdsSlice.reducer;
