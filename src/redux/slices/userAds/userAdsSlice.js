import { createSlice } from '@reduxjs/toolkit';

const userAdsSlice = createSlice({
  name: 'userAdsSlice',
  initialState: {
    userPostings: [
      {
        adId: 237,
        userId: '',
        proposals: [],
        posted_Time: '5:52 PM',
        other_features: [],
        title: 'NEED 4 BEDROOM APARTMENT',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Karachi',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        proportyCategory: 'House',
        propertyType: 'Rent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
      {
        adId: 135,
        userId: '',
        proposals: [
          {
            adId: 135,
            agentId: '15',
            proposalId: 125,
            title: 'done ',
            location: '',
            description: 'hai',
            area: 120,
            amount: 120,
            areaUnit: 'sq.ft',
            amountCurrency: 'GBP',
            city: 'Karachi',
            bedrooms: 0,
            connects: '',
            bathrooms: 0,
            parking: 0,
            other_features: [],
            purpose: 'Rent',
            proportyCategory: 'House',
            propertyType: 'Rent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
          {
            adId: 135,
            agentId: '15',
            proposalId: 200,
            title: 'done ',
            location: '',
            description:
              'We are planning to buy a new home in the month of dec, is someone knows about it please let me know but make sure its in the society with parking area and security like something',
            area: 120,
            amount: 120,
            areaUnit: 'sq.ft',
            amountCurrency: 'GBP',
            city: 'Karachi',
            bedrooms: 0,
            connects: '',
            bathrooms: 0,
            parking: 0,
            other_features: [],
            purpose: 'Rent',
            proportyCategory: 'House',
            propertyType: 'Rent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
        ],
        posted_Time: '5:52 PM',
        other_features: [],
        title: 'NEED 4 BEDROOM APARTMENT',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Karachi',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        proportyCategory: 'House',
        propertyType: 'Rent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
    ],
  },
  reducers: {
    handleSumitUserAds: (state, action) => {
      state.userPostings.push(action.payload);
    },
    handleSendProposals: (state, action) => {
      const { adId } = action.payload;
      const adIndex = state.userPostings.findIndex((ad) => ad.adId === adId);
      if (adIndex !== -1) {
        state.userPostings[adIndex].proposals.push(action.payload);
      }
    },
  },
});

export const { handleSumitUserAds, handleSendProposals } = userAdsSlice.actions;
export default userAdsSlice.reducer;
