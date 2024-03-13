import { createSlice } from '@reduxjs/toolkit';

const postlistingAdSlice = createSlice({
  name: 'PostlistingAdSlice',
  initialState: {
    agentPostings: [
      {
        property_id: 592,
        user_id: 21,
        status: 'submit',
        other_features: [],
        images: [
          {
            path: '/images/properties/PropertyCardImageHouse.png',
          },
          {
            path: '/images/properties/PropertyCardImageHouse.png',
          },
        ],
        videos: [
          {
            type: 'video/x-matroska',
            path: '2023-05-12 11-32-28.mkv',
          },
          {
            type: 'video/x-matroska',
            path: '2023-05-12 11-32-56.mkv',
          },
        ],
        title: '5464645',
        location: '',
        description: '64564545654',
        area: 456456,
        amount: 456464564654,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        clubhouse: 0,
        swimming_pool: 0,
        fitness_center: 0,
        playground: 0,
        servant_area: 0,
        utility_store: 0,
        rooftop_terrace: 0,
        on_site_maintenance: 0,
        washing_area: 0,
        hour_electricity: 0,
        auto_generator: 0,
        complete_boundary_wall: 0,
        walking_trails: 0,
        pet_friendly_facilities: 0,
        security: 0,
        masjid: 0,
        corridor: 0,
        r_o_plant: 0,
        basketball_courts: 0,
        huge_park: 0,
        concierge_services: 0,
        business_centre: 0,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'Sell',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    active: [
      {
        property_id: 592,
        user_id: 21,
        status: 'cennected',
        other_features: [],
        images: [
          {
            path: 'bg1.jpg',
          },
          {
            path: 'blur_background.png',
          },
        ],
        videos: [
          {
            type: 'video/x-matroska',
            path: '2023-05-12 11-32-28.mkv',
          },
          {
            type: 'video/x-matroska',
            path: '2023-05-12 11-32-56.mkv',
          },
        ],
        title: '5464645',
        location: '',
        description: '64564545654',
        area: 456456,
        amount: 456464564654,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        clubhouse: 0,
        swimming_pool: 0,
        fitness_center: 0,
        playground: 0,
        servant_area: 0,
        utility_store: 0,
        rooftop_terrace: 0,
        on_site_maintenance: 0,
        washing_area: 0,
        hour_electricity: 0,
        auto_generator: 0,
        complete_boundary_wall: 0,
        walking_trails: 0,
        pet_friendly_facilities: 0,
        security: 0,
        masjid: 0,
        corridor: 0,
        r_o_plant: 0,
        basketball_courts: 0,
        huge_park: 0,
        concierge_services: 0,
        business_centre: 0,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'Sell',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    draft: [
      {
        property_id: 592,
        user_id: 21,
        status: 'draft',
        other_features: [],
        images: [
          {
            path: 'bg1.jpg',
          },
          {
            path: 'blur_background.png',
          },
        ],
        videos: [
          {
            type: 'video/x-matroska',
            path: '2023-05-12 11-32-28.mkv',
          },
          {
            type: 'video/x-matroska',
            path: '2023-05-12 11-32-56.mkv',
          },
        ],
        title: '5464645',
        location: '',
        description: '64564545654',
        area: 456456,
        amount: 456464564654,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Karachi',
        bedrooms: 0,
        connects: '',
        bathrooms: 0,
        parking: 0,
        clubhouse: 0,
        swimming_pool: 0,
        fitness_center: 0,
        playground: 0,
        servant_area: 0,
        utility_store: 0,
        rooftop_terrace: 0,
        on_site_maintenance: 0,
        washing_area: 0,
        hour_electricity: 0,
        auto_generator: 0,
        complete_boundary_wall: 0,
        walking_trails: 0,
        pet_friendly_facilities: 0,
        security: 0,
        masjid: 0,
        corridor: 0,
        r_o_plant: 0,
        basketball_courts: 0,
        huge_park: 0,
        concierge_services: 0,
        business_centre: 0,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'Sell',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    poposalIdentify: [],
    trash: [],
    save: [],
    proposalsTrash: [],
    adAmenities: [],
  },
  reducers: {
    handleAdaminities: (state, action) => {
      state.adAmenities.push(action.payload);
    },
    handlePostlistingAd: (state, action) => {
      const newAd = action.payload;
      const existingAdIndex = state?.agentPostings?.findIndex(
        (ad) => ad?.property_id === newAd?.property_id
      );
      if (existingAdIndex !== -1) {
        state.agentPostings[existingAdIndex] = newAd;
      } else {
        state?.agentPostings?.push(newAd);
      }
    },
    handleSubmitDraftForAgent: (state, action) => {
      const newDraft = action.payload;
      const existingDraftIndex = state?.draft?.findIndex(
        (draft) => draft?.property_id === newDraft?.property_id
      );
      if (existingDraftIndex !== -1) {
        state.draft[existingDraftIndex] = newDraft;
      } else {
        state?.draft?.push(newDraft);
      }
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
  handleSubmitDraftForAgent,
  handleAgentTrash,
  handleIndentifier,
  handleTrashProposal,
  handleSaveRequest,
  handleAdaminities,
} = postlistingAdSlice.actions;
export default postlistingAdSlice.reducer;
