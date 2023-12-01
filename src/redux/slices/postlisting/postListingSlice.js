import { PROPERTY_BUYING_NEW } from '@/app/constants/postListing';
import { createSlice } from '@reduxjs/toolkit';

const postListing = PROPERTY_BUYING_NEW;

const initialState = { postListing };
const postListingSlice = createSlice({
  name: 'postlisting',
  initialState,
  reducers: {
    savePropertyData: (state, action) => {
      state.postListing = { ...action.payload };
    },
  },
});

export const { savePropertyData } = postListingSlice.actions;
export default postListingSlice.reducer;
