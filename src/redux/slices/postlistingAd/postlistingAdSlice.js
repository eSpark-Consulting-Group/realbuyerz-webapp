import { createSlice } from '@reduxjs/toolkit';

const postlistingAdSlice = createSlice({
  name: 'PostlistingAdSlice',
  initialState: [],
  reducers: {
    handlePostlistingAd: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { handlePostlistingAd } = postlistingAdSlice.actions;
export default postlistingAdSlice.reducer;
