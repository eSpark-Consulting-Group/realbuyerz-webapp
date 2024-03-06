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
    poposalIdentify: [],
    trash: [],
    save: [],
    proposalsTrash: [],
    adAmenities: [],
    checkedAmenities: [],
  },
  reducers: {
    handleAdaminities: (state, action) => {
      console.log(action.payload, 'new payload')

      state.adAmenities.push(action.payload);
    },
    toggleCheckedAmenity: (state, action) => {
      const { amenity } = action.payload; // Assuming payload contains the entire object
      const index = state.checkedAmenities.findIndex(item => item.text === amenity.text); // Check if object with same text already exists
      if (index === -1) {
        state.checkedAmenities.push(amenity); // Push the entire object
      } else {
        state.checkedAmenities.splice(index, 1); // Remove the object if it already exists
      }
    },
    
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
      const { post, userId } = action.payload;
      const foundObject = state?.save?.find(
        (obj) =>
          obj?.user_id === userId && obj?.property_id === post.property_id
      );
      if (!foundObject) {
        state?.save?.push({ user_id: userId, property_id: post.property_id });
      }
    },

    handleTrashProposal: (state, action) => {
      const { property_id, currentTab } = action.payload;
      // save
      const saveIndex = state?.save?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (saveIndex !== -1 && currentTab == 'Save Request') {
        const postings_trash = state?.save?.splice(saveIndex, 1)[0];
        state.proposalsTrash.push(postings_trash);
      }
      // active
      const active_proposal = state?.activeProposals?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (active_proposal !== -1 && currentTab == 'Active') {
        console.log(active_proposal, 'active_proposal');
        const postings_trash = state?.activeProposals?.splice(
          active_proposal,
          2
        )[0];
        state.proposalsTrash.push(postings_trash);
      }
    },
    handleIndentifier: (state, action) => {
      state?.poposalIdentify?.push(action.payload);
    },
  },
});

export const {
  handlePostlistingAd,
  handleSubmitDraft,
  handleIndentifier,
  handleTrashProposal,
  handleSaveRequest,
  handleAdaminities,
  toggleCheckedAmenity
} = postlistingAdSlice.actions;
export default postlistingAdSlice.reducer;
