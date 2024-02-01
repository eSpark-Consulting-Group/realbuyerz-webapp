import { createSlice } from '@reduxjs/toolkit';

const postlistingAdSlice = createSlice({
  name: 'PostlistingAdSlice',
  initialState: {
    agentPostings: [],
  },
  reducers: {
    handlePostlistingAd: (state, action) => {
      state.agentPostings.push(action.payload);
    },
  },
});

export const { handlePostlistingAd } = postlistingAdSlice.actions;
export default postlistingAdSlice.reducer;
