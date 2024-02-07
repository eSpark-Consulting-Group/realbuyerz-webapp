import { createSlice } from '@reduxjs/toolkit';

const userAdsSlice = createSlice({
  name: 'userAdsSlice',
  initialState: {
    userPostings: [],
  },
  reducers: {
    handleSumitUserAds: (state, action) => {
      state.userPostings.push(action.payload);
    },
    handleSendProposals: (state, action) => {
      const { userIndex } = action.payload;
      if (userIndex !== -1) {
        state.userPostings[userIndex].proposals.push(action.payload);
      }
    },
  },
});

export const { handleSumitUserAds, handleSendProposals } = userAdsSlice.actions;
export default userAdsSlice.reducer;
