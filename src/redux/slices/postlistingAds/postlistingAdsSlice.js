import { createSlice } from '@reduxjs/toolkit';

const postlistingAdSlice = createSlice({
  name: 'PostlistingAdSlice',
  initialState: {
    agentPostings: [
      {
        property_id: 602,
        user_id: 301,
        status: 'submited',
        other_features: [],
        images: [],
        videos: [],
        title: '456456',
        location: '',
        description: '456456456',
        area: 455,
        amount: 456,
        areaUnit: 'sq.ft',
        amountCurrency: 'CAD',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        purpose: 'Sell',
        proportyCategory: 'House',
        propertyType: 'House',
        instalmentAvailable: false,
        readyPossession: false,
      },
      {
        property_id: 405,
        user_id: 301,
        status: 'submited',
        other_features: [],
        images: [],
        videos: [],
        title: '456456',
        location: '',
        description: '456456456',
        area: 455,
        amount: 456,
        areaUnit: 'sq.ft',
        amountCurrency: 'CAD',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        purpose: 'Sell',
        proportyCategory: 'House',
        propertyType: 'House',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    active: [
      {
        property_id: 602,
        user_id: 301,
        status: 'submited',
        other_features: [],
        images: [],
        videos: [],
        title: '456456',
        location: '',
        description: '456456456',
        area: 455,
        amount: 456,
        areaUnit: 'sq.ft',
        amountCurrency: 'CAD',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        purpose: 'Sell',
        proportyCategory: 'House',
        propertyType: 'House',
        instalmentAvailable: false,
        readyPossession: false,
      },
      {
        property_id: 405,
        user_id: 301,
        status: 'submited',
        other_features: [],
        images: [],
        videos: [],
        title: '456456',
        location: '',
        description: '456456456',
        area: 455,
        amount: 456,
        areaUnit: 'sq.ft',
        amountCurrency: 'CAD',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        purpose: 'Sell',
        proportyCategory: 'House',
        propertyType: 'House',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    draft: [
      {
        property_id: 602,
        user_id: 301,
        status: 'submited',
        other_features: [],
        images: [],
        videos: [],
        title: '456456',
        location: '',
        description: '456456456',
        area: 455,
        amount: 456,
        areaUnit: 'sq.ft',
        amountCurrency: 'CAD',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        purpose: 'Sell',
        proportyCategory: 'House',
        propertyType: 'House',
        instalmentAvailable: false,
        readyPossession: false,
      },
      {
        property_id: 405,
        user_id: 301,
        status: 'submited',
        other_features: [],
        images: [],
        videos: [],
        title: '456456',
        location: '',
        description: '456456456',
        area: 455,
        amount: 456,
        areaUnit: 'sq.ft',
        amountCurrency: 'CAD',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        purpose: 'Sell',
        proportyCategory: 'House',
        propertyType: 'House',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    trash: [],
    save: [],
  },
  reducers: {
    handlePostlistingAd: (state, action) => {
      state.agentPostings.push(action.payload);
    },
    handleSubmitDraft: (state, action) => {
      state?.draft?.push(action.payload);
    },
    handleAgentTrash: (state, action) => {
      const { property_id, currentTab } = action.payload;
      console.log(state, 'state');
      // all
      const postingsIndex = state?.agentPostings?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (postingsIndex !== -1 && currentTab == 'All') {
        const postings_trash = state?.agentPostings?.splice(
          postingsIndex,
          1
        )[0];
        state.trash.push(postings_trash);
      }
      // Active
      const activeIndex = state?.active?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (activeIndex !== -1 && currentTab == 'Active') {
        const active_trash = state?.active?.splice(activeIndex, 1)[0];
        state?.trash?.push(active_trash);
      }
      // Connected proposals
      // const connectedProposalIndex = state?.connectedProposals?.findIndex(
      //   (ad) => ad?.property_id === property_id
      // );
      // if (connectedProposalIndex !== -1 && currentTab == 'ActiveProposal') {
      //   const connectedProposal_trash = state?.connectedProposals?.splice(
      //     connectedProposalIndex,
      //     1
      //   )[0];
      //   state?.trash?.push(connectedProposal_trash);
      // }
      // draft
      const draftIndex = state?.draft?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (draftIndex !== -1 && currentTab == 'Draft') {
        const draft_trash = state?.draft?.splice(draftIndex, 1)[0];
        state?.trash?.push(draft_trash);
      }
    },
    handleSaveRequest: (state, action) => {
      const { property_id } = action.payload;
      const postingsIndex = state?.agentPostings?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      // const foundObject = state?.save?.find((obj) => obj?.user_id === user_id);
      if (postingsIndex !== -1) {
        state?.save?.push('ALi');
      }
    },
  },
});

export const {
  handlePostlistingAd,
  handleSubmitDraft,
  handleAgentTrash,
  handleSaveRequest,
} = postlistingAdSlice.actions;
export default postlistingAdSlice.reducer;
