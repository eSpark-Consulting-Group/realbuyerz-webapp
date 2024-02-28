import { createSlice } from '@reduxjs/toolkit';

const userAdsSlice = createSlice({
  name: 'userAdsSlice',
  initialState: {
    userPostings: [
      {
        adId: 237,
        userId: '',
        proposals: [
          {
            adId: 237,
            agentId: 10,
            proposalId: 340,
            status: '',
            title: 'done ',
            location: 'Gulshan',
            description:
              'We are planning to buy a new home in the month of dec, is someone knows about it please let me know but make sure its in the society with parking area and security like something.',
            area: 120,
            amount: 120,
            areaUnit: 'sq.ft',
            amountCurrency: 'GBP',
            city: 'Karachi',
            bedrooms: 0,
            connects: '2',
            bathrooms: 0,
            parking: 0,
            other_features: [],
            purpose: 'Rent',
            proportyCategory: 'House',
            propertyType: 'Rent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [
              '/images/biddings/images/Image1.png',
              '/images/biddings/images/Image2.png',
              '/images/biddings/images/Image3.png',
              '/images/biddings/images/Image4.png',
              '/images/biddings/images/Image5.png',
              '/images/biddings/images/Image6.png',
            ],
            videos: [
              '/images/biddings/videos/biddingVideo1.png',
              '/images/biddings/videos/biddingVideo2.png',
              '/images/biddings/videos/biddingVideo3.png',
              '/images/biddings/videos/biddingVideo4.png',
              '/images/biddings/videos/biddingVideo5.png',
              '/images/biddings/videos/biddingVideo6.png',
            ],
          },
          {
            adId: 237,
            agentId: 20,
            proposalId: 540,
            status: '',
            title: 'done ',
            location: 'Johar',
            description:
              'We are planning to buy a new home in the month of dec, is someone knows about it please let me know but make sure its in the society with parking area and security like something',
            area: 120,
            amount: 120,
            areaUnit: 'sq.ft',
            amountCurrency: 'GBP',
            city: 'Karachi',
            bedrooms: 0,
            connects: '8',
            bathrooms: 0,
            parking: 0,
            other_features: [],
            purpose: 'Rent',
            proportyCategory: 'House',
            propertyType: 'Rent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [
              '/images/biddings/images/Image1.png',
              '/images/biddings/images/Image2.png',
              '/images/biddings/images/Image3.png',
              '/images/biddings/images/Image4.png',
              '/images/biddings/images/Image5.png',
              '/images/biddings/images/Image6.png',
            ],
            videos: [
              '/images/biddings/videos/biddingVideo1.png',
              '/images/biddings/videos/biddingVideo2.png',
              '/images/biddings/videos/biddingVideo3.png',
              '/images/biddings/videos/biddingVideo4.png',
              '/images/biddings/videos/biddingVideo5.png',
              '/images/biddings/videos/biddingVideo6.png',
            ],
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
      {
        adId: 135,
        userId: '',
        proposals: [
          {
            adId: 135,
            agentId: 15,
            proposalId: 125,
            status: '',
            title: 'done ',
            location: 'Johar',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            area: 120,
            amount: 120,
            areaUnit: 'sq.ft',
            amountCurrency: 'GBP',
            city: 'Karachi',
            bedrooms: 0,
            connects: '9',
            bathrooms: 0,
            parking: 0,
            other_features: [],
            purpose: 'Rent',
            proportyCategory: 'House',
            propertyType: 'Rent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [
              '/images/biddings/images/Image1.png',
              '/images/biddings/images/Image2.png',
              '/images/biddings/images/Image3.png',
              '/images/biddings/images/Image4.png',
              '/images/biddings/images/Image5.png',
              '/images/biddings/images/Image6.png',
            ],
            videos: [
              '/images/biddings/videos/biddingVideo1.png',
              '/images/biddings/videos/biddingVideo2.png',
              '/images/biddings/videos/biddingVideo3.png',
              '/images/biddings/videos/biddingVideo4.png',
              '/images/biddings/videos/biddingVideo5.png',
              '/images/biddings/videos/biddingVideo6.png',
            ],
          },
          {
            adId: 135,
            agentId: 20,
            proposalId: 200,
            status: '',
            title: 'done ',
            location: 'DHA',
            description:
              'We are planning to buy a new home in the month of dec, is someone knows about it please let me know but make sure its in the society with parking area and security like something',
            area: 120,
            amount: 120,
            areaUnit: 'sq.ft',
            amountCurrency: 'GBP',
            city: 'Karachi',
            bedrooms: 0,
            connects: '7',
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
        location: 'Gulshan',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something.',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Karachi',
        bedrooms: 1,
        connects: '6',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        proportyCategory: 'House',
        propertyType: 'Rent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
    ],
    rejectedProposals: [],
    connectedProposals: [],
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
    handleRejectProposal: (state, action) => {
      const { adId, proposalId } = action.payload;
      const adIndex = state?.userPostings?.findIndex(
        (ad) => ad?.adId === adId && adId
      );
      const proposalIndex = state?.userPostings[adIndex]?.proposals?.findIndex(
        (proposal) => proposal?.proposalId === proposalId
      );
      if (adIndex !== -1) {
        if (proposalIndex !== -1) {
          const rejectedProposal =
            state?.userPostings[adIndex]?.proposals[proposalIndex];
          rejectedProposal.status = 'rejected';
          state?.rejectedProposals?.push(rejectedProposal);
          state?.userPostings[adIndex]?.proposals?.splice(proposalIndex, 1);
        }
      }
    },
    handleConnectProposal: (state, action) => {
      const { adId, proposalId } = action.payload;
      const adIndex = state?.userPostings?.findIndex(
        (ad) => ad?.adId === adId && adId
      );
      const proposalIndex = state?.userPostings[adIndex]?.proposals?.findIndex(
        (proposal) => proposal?.proposalId === proposalId
      );
      if (adIndex !== -1) {
        if (proposalIndex !== -1) {
          const connectedProposals =
            state?.userPostings[adIndex]?.proposals[proposalIndex];
          const alreadyConnected = state?.connectedProposals?.some(
            (proposal) => proposal?.proposalId === proposalId
          );
          if (!alreadyConnected) {
            connectedProposals.status = 'active';
            state?.connectedProposals?.push(connectedProposals);
          }
        }
      }
    },
  },
});

export const {
  handleSumitUserAds,
  handleSendProposals,
  handleRejectProposal,
  handleConnectProposal,
} = userAdsSlice.actions;
export default userAdsSlice.reducer;
