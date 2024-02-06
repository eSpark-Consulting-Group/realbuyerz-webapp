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
    handleSendPorposals: (state, action) => {
      state.userPostings.proposals.push(action.payload);
    },
  },
});

export const { handleSumitUserAds, handleSendPorposals } = userAdsSlice.actions;
export default userAdsSlice.reducer;
