import { createSlice } from '@reduxjs/toolkit';

const postlistingAdSlice = createSlice({
  name: 'PostlistingAdSlice',
  initialState: {
    agentPostings: [
      {
        property_id: 1,
        user_id: 21,
        status: 'submit',
        images: [],
        videos: [],
        title: 'My First Ad',
        location: 'gulshan',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        area: 650,
        amount: 70000,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Lahore',
        bedrooms: 2,
        connects: '',
        bathrooms: 2,
        parking: 1,
        clubhouse: 1,
        swimming_pool: 1,
        fitness_center: 1,
        playground: 1,
        servant_area: 1,
        utility_store: 1,
        rooftop_terrace: 1,
        on_site_maintenance: 1,
        washing_area: 1,
        hour_electricity: 1,
        auto_generator: 1,
        complete_boundary_wall: 1,
        walking_trails: 1,
        pet_friendly_facilities: 1,
        security: 1,
        masjid: 1,
        corridor: 1,
        r_o_plant: 1,
        basketball_courts: 1,
        huge_park: 1,
        concierge_services: 1,
        business_centre: 1,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'Sell',
        instalmentAvailable: false,
        readyPossession: false,
      },
      {
        property_id: 2,
        user_id: 21,
        status: 'submit',
        images: [],
        videos: [],
        title: 'My Second Ad',
        location: 'gulistan-e-johar',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        area: 450,
        amount: 50000,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Karachi',
        bedrooms: 2,
        connects: '',
        bathrooms: 2,
        parking: 1,
        clubhouse: 1,
        swimming_pool: 1,
        fitness_center: 1,
        playground: 1,
        servant_area: 1,
        utility_store: 1,
        rooftop_terrace: 1,
        on_site_maintenance: 1,
        washing_area: 1,
        hour_electricity: 1,
        auto_generator: 1,
        complete_boundary_wall: 1,
        walking_trails: 1,
        pet_friendly_facilities: 1,
        security: 1,
        masjid: 1,
        corridor: 1,
        r_o_plant: 1,
        basketball_courts: 1,
        huge_park: 1,
        concierge_services: 1,
        business_centre: 1,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'Sell',
        instalmentAvailable: false,
        readyPossession: false,
      },
      {
        property_id: 3,
        user_id: 21,
        status: 'submit',
        images: [],
        videos: [],
        title: 'My Third Ad',
        location: 'liaquatabad',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        area: 450,
        amount: 50000,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Karachi',
        bedrooms: 2,
        connects: '',
        bathrooms: 2,
        parking: 1,
        clubhouse: 1,
        swimming_pool: 1,
        fitness_center: 1,
        playground: 1,
        servant_area: 1,
        utility_store: 1,
        rooftop_terrace: 1,
        on_site_maintenance: 1,
        washing_area: 1,
        hour_electricity: 1,
        auto_generator: 1,
        complete_boundary_wall: 1,
        walking_trails: 1,
        pet_friendly_facilities: 1,
        security: 1,
        masjid: 1,
        corridor: 1,
        r_o_plant: 1,
        basketball_courts: 1,
        huge_park: 1,
        concierge_services: 1,
        business_centre: 1,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'Sell',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    active: [
      {
        property_id: 1,
        user_id: 21,
        status: 'connected',
        images: [],
        videos: [],
        title: 'My First Ad',
        location: 'gulshan',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        area: 650,
        amount: 70000,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Lahore',
        bedrooms: 2,
        connects: '',
        bathrooms: 2,
        parking: 1,
        clubhouse: 1,
        swimming_pool: 1,
        fitness_center: 1,
        playground: 1,
        servant_area: 1,
        utility_store: 1,
        rooftop_terrace: 1,
        on_site_maintenance: 1,
        washing_area: 1,
        hour_electricity: 1,
        auto_generator: 1,
        complete_boundary_wall: 1,
        walking_trails: 1,
        pet_friendly_facilities: 1,
        security: 1,
        masjid: 1,
        corridor: 1,
        r_o_plant: 1,
        basketball_courts: 1,
        huge_park: 1,
        concierge_services: 1,
        business_centre: 1,
        purpose: 'Sell',
        propertyCategory: 'House',
        propertyType: 'Sell',
        instalmentAvailable: false,
        readyPossession: false,
      },
    ],
    draft: [
      {
        property_id: 1,
        user_id: 21,
        status: 'draft',
        images: [],
        videos: [],
        title: 'My First Ad',
        location: 'gulshan',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        area: 650,
        amount: 70000,
        areaUnit: 'sq.m',
        amountCurrency: 'SAR',
        city: 'Lahore',
        bedrooms: 2,
        connects: '',
        bathrooms: 2,
        parking: 1,
        clubhouse: 1,
        swimming_pool: 1,
        fitness_center: 1,
        playground: 1,
        servant_area: 1,
        utility_store: 1,
        rooftop_terrace: 1,
        on_site_maintenance: 1,
        washing_area: 1,
        hour_electricity: 1,
        auto_generator: 1,
        complete_boundary_wall: 1,
        walking_trails: 1,
        pet_friendly_facilities: 1,
        security: 1,
        masjid: 1,
        corridor: 1,
        r_o_plant: 1,
        basketball_courts: 1,
        huge_park: 1,
        concierge_services: 1,
        business_centre: 1,
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
    addAmenities: [],
    checkedAmenities: [],
  },
  reducers: {
    handleAdaminities: (state, action) => {
      state.addAmenities = action.payload;
    },
    toggleCheckAmenityClear: (state) => {
      state.addAmenities = [];
      state.checkedAmenities = [];
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
  toggleCheckAmenityClear,
} = postlistingAdSlice.actions;
export default postlistingAdSlice.reducer;
