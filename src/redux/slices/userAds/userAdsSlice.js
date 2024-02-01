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
  },
});

export const { handleSumitUserAds } = userAdsSlice.actions;
export default userAdsSlice.reducer;
