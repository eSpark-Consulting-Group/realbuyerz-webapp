import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/slice';
import PakageCartSlice from './slices/settings/PakageCartSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    PakageCart: PakageCartSlice,
  },
});
