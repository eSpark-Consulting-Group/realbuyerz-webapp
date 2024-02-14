import { createSlice } from '@reduxjs/toolkit';

const favoriteAdsSlice = createSlice({
  name: 'favoriteAds',
  initialState: [],
  reducers: {
    //save ads
    handleSaveAds: (state, action) => {
      const { formId } = action.payload;
      const foundObject = state.find((obj) => obj.formId === formId);
      if (foundObject) {
        null;
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { handleSaveAds } = favoriteAdsSlice.actions;
export default favoriteAdsSlice.reducer;
