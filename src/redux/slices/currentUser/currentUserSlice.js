import { createSlice } from '@reduxjs/toolkit';

// const user = {
//   id: 301,
//   first_name: 'Arman',
//   last_name: 'Khan',
//   email: 'arman@esparkconsultants.com',
//   mobile_number: '+923192013292',
//   landline_number: 4523100000,
//   whatsapp: '+923192013292',
//   country: 'Pakistan',
//   address: '301/A, Blossom Trade Center',
//   password: '123456',
//   isVerified: false,
//   social_id: '',
//   role: 'agent',
//   profile_image: '/images/profile.png',
//   status: true,
//   visibility: true,
//   created_at: new Date(),
//   updated_at: null,
//   available_connects: 0,
//   property_id: '',
//   proposals: [],
// };

const agent = {
  id: 21,
  first_name: 'Muhammad Ali',
  last_name: 'Mukhtar',
  agency_name: 'KZ Real Estate',
  email: 'ali@esparkconsultants.com',
  mobile_number: '+923192013292',
  landline_number: 4523100000,
  whatsapp: '+923192013292',
  country: 'Pakistan',
  address: '301/A, Blossom Trade Center',
  password: '123456',
  isVerified: false,
  social_id: '',
  role: 'agent',
  profile_image: '/images/profile.png',
  status: true,
  visibility: true,
  created_at: new Date(),
  updated_at: null,
  available_connects: 0,
  property_id: '',
};

const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState: {
    // login user
    user: agent,
  },
  reducers: {
    currentProposal: (state, action) => {
      const { agent_id } = action.payload;
      const foundObject = state?.proposals?.find(
        (obj) => obj?.agent_id === agent_id
      );
      if (foundObject) {
        null;
      } else {
        state?.proposals?.push(action.payload);
      }
    },
    handleAgentDraft: (state, action) => {
      state.draft.push(action.payload);
    },
    handleAgentTrash: (state, action) => {
      const { property_id, currentTab } = action.payload;
      // all
      const postingsIndex = state?.userPostings?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (postingsIndex !== -1 && currentTab == 'All') {
        const postings_trash = state?.userPostings?.splice(postingsIndex, 1)[0];
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
      const connectedProposalIndex = state?.connectedProposals?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (connectedProposalIndex !== -1 && currentTab == 'ActiveProposal') {
        const connectedProposal_trash = state?.connectedProposals?.splice(
          connectedProposalIndex,
          1
        )[0];
        state?.trash?.push(connectedProposal_trash);
      }
      // draft
      const draftIndex = state?.draft?.findIndex(
        (ad) => ad?.property_id === property_id
      );
      if (draftIndex !== -1 && currentTab == 'Draft') {
        const draft_trash = state?.draft?.splice(draftIndex, 1)[0];
        state?.trash?.push(draft_trash);
      }
    },
  },
});

export const {
  handleSaveRequest,
  currentProposal,
  handleAgentDraft,
  handleAgentTrash,
} = currentUserSlice.actions;
export default currentUserSlice.reducer;
