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
            title: 'What is Lorem Ipsum?',
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
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
            propertyType: 'Pent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
          {
            adId: 237,
            agentId: 20,
            proposalId: 540,
            status: '',
            title: 'done ',
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
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
            propertyType: 'Pent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
        ],
        posted_Time: '5:52 PM',
        other_features: [],
        title: 'One',
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
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
      {
        adId: 445,
        userId: '',
        proposals: [
          {
            adId: 135,
            agentId: 15,
            proposalId: 125,
            status: '',
            title: 'done ',
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
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
            agentId: 20,
            proposalId: 200,
            status: '',
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
        title: 'Two',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Lahore',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Rent',
        proportyCategory: 'House',
        propertyType: 'Pent House',
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
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            area: 120,
            amount: 120,
            areaUnit: 'sq.ft',
            amountCurrency: 'GBP',
            city: 'Lahore',
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
            agentId: 20,
            proposalId: 200,
            status: '',
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
        title: 'Three',
        location: '',
        description:
          'We are planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something. Planning to buy a new home in the month of dec, if someone knows about it please let me know but make sure its in the society with parking area  and security like something,,,',
        area: 10,
        amount: 10,
        areaUnit: 'sq.ft',
        amountCurrency: 'GBP',
        city: 'Lahore',
        bedrooms: 1,
        connects: '',
        bathrooms: 1,
        parking: 1,
        purpose: 'Sell',
        proportyCategory: 'House',
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
    ],
    draft: [
      {
        adId: 703,
        userId: '',
        proposals: [
          {
            adId: 237,
            agentId: 10,
            proposalId: 340,
            status: '',
            title: 'What is Lorem Ipsum?',
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
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
            propertyType: 'Pent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
          {
            adId: 237,
            agentId: 20,
            proposalId: 540,
            status: '',
            title: 'done ',
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
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
            propertyType: 'Pent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
        ],
        posted_Time: '5:52 PM',
        other_features: [],
        title: 'Ali',
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
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
      {
        adId: 705,
        userId: '',
        proposals: [
          {
            adId: 237,
            agentId: 10,
            proposalId: 340,
            status: '',
            title: 'What is Lorem Ipsum?',
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
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
            propertyType: 'Pent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
          {
            adId: 237,
            agentId: 20,
            proposalId: 540,
            status: '',
            title: 'done ',
            location: '',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
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
            propertyType: 'Pent House',
            instalmentAvailable: true,
            readyPossession: true,
            images: [],
            videos: [],
          },
        ],
        posted_Time: '5:52 PM',
        other_features: [],
        title: 'Ahmed',
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
        propertyType: 'Pent House',
        instalmentAvailable: true,
        readyPossession: true,
      },
    ],
    trash: [],
    rejectedProposals: [],
    connectedProposals: [],
  },
  reducers: {
    handleSumitUserAds: (state, action) => {
      state?.userPostings?.push(action.payload);
    },
    handleSendProposals: (state, action) => {
      const { adId } = action.payload;
      const adIndex = state?.userPostings?.findIndex((ad) => ad?.adId === adId);
      if (adIndex !== -1) {
        state?.userPostings[adIndex]?.proposals?.push(action.payload);
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
    handleSubmitDraft: (state, action) => {
      state?.draft?.push(action.payload);
    },
    handleSubmitTrash: (state, action) => {
      const { adId, currentTab } = action.payload;
      // all
      const postingsIndex = state?.userPostings?.findIndex(
        (ad) => ad?.adId === adId
      );
      if (postingsIndex !== -1 && currentTab == 'All') {
        const postings_trash = state?.userPostings?.splice(postingsIndex, 1)[0];
        state.trash.push(postings_trash);
      }
      // Active
      const activeIndex = state?.connectedProposals?.findIndex(
        (ad) => ad?.adId === adId
      );
      if (activeIndex !== -1 && currentTab == 'Active') {
        const active_trash = state?.connectedProposals?.splice(
          activeIndex,
          1
        )[0];
        state?.trash?.push(active_trash);
      }
      // draft
      const draftIndex = state?.draft?.findIndex((ad) => ad?.adId === adId);
      if (draftIndex !== -1 && currentTab == 'Draft') {
        const draft_trash = state?.draft?.splice(draftIndex, 1)[0];
        state?.trash?.push(draft_trash);
      }
    },
  },
});

export const {
  handleSumitUserAds,
  handleSendProposals,
  handleRejectProposal,
  handleConnectProposal,
  handleSubmitDraft,
  handleSubmitTrash,
} = userAdsSlice.actions;
export default userAdsSlice.reducer;
