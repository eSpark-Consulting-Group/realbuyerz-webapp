import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/slice';
import PakageCartSlice from './slices/settings/PakageCartSlice';
import propertiesSlice from './slices/properties/propertiesSlice';
import postListingSlice from './slices/postlisting/postListingSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    PakageCart: PakageCartSlice,
    properties: propertiesSlice,
    postListing: postListingSlice,
  },
});
