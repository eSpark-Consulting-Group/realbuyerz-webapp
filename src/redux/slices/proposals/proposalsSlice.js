import { PROPOSALS_DATA } from '@/app/constants/finalConstants/Proposals';
import { createSlice } from '@reduxjs/toolkit';

const proposals = PROPOSALS_DATA;

const initialState = { proposals };

const proposalsSlice = createSlice({
  name: 'proposals',
  initialState,
  reducers: {
    addProposal: (state, action) => {
      state.proposals.push(action.payload);
    },

    updateProposal: (state, action) => {
      const { id, updatedProposal } = action.payload;
      const index = state.proposals.findIndex((property) => property.id === id);
      if (index !== -1) {
        state.proposals[index] = {
          ...state.proposals[index],
          ...updatedProposal,
        };
      }
    },

    deleteProposal: (state, action) => {
      const id = action.payload;
      state.proposals = state.proposals.filter(
        (property) => property.id !== id
      );
    },

    selectProposal: (state, action) => {
      const { id } = action.payload;
      state.selectedProposal =
        state.proposals.find((property) => property.id === id) || null;
    },
  },
});

export const { addProposal, updateProposal, deleteProposal, selectProposal } =
  proposalsSlice.actions;
export default proposalsSlice.reducer;
