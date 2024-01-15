import { PROPOSALS_DATA } from '@/app/constants/finalConstants/Proposals';
import { createSlice } from '@reduxjs/toolkit';

const proposals = PROPOSALS_DATA;

const initialState = { proposals };

function generateUniqueId(proposals) {
  let newId = (proposals.length + 1).toString();
  while (proposals.some((property) => property.id === newId)) {
    newId = (parseInt(newId, 10) + 1).toString();
  }
  return newId;
}

const proposalsSlice = createSlice({
  name: 'proposals',
  initialState,
  reducers: {
    addProposal: (state, action) => {
      const newProposal = {
        ...action.payload,
        id: generateUniqueId(state.proposals),
      };
      state.proposals.push(newProposal);
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
