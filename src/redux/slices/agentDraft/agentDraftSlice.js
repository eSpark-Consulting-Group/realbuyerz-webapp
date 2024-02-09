import { createSlice } from '@reduxjs/toolkit';

const agentDraftSlice = createSlice({
  name: 'agentDraft',
  initialState: {
    drafts: [],
  },
  reducers: {
    handleAgentDraft: (state, action) => {
      state.drafts.push(action.payload);
    },
  },
});

export const { handleAgentDraft } = agentDraftSlice.actions;
export default agentDraftSlice.reducer;
