import { PROPERTY_BUYING_DETAIL } from '@/app/constants/postListing';
import { createSlice } from '@reduxjs/toolkit';

const postListing = PROPERTY_BUYING_DETAIL.sellingDetails;
const initialState = { postListing };

// const postListingSlice = createSlice({
//   name: 'properties',
//   initialState,
//   reducers: {
//     propertyReducer: (state = initialState, action) => {
//       switch (action.type) {
//         case SAVE_PROPERTY_DATA:
//           return {
//             ...state,
//             // Assuming your property data is stored in a property field
//             property: action.payload,
//           };
//         // Add other cases for different actions if needed
//         default:
//           return state;
//       }
//     },
//   },
// });

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
