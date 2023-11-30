import { PREFERENCE } from '@/app/constants/Preference';
import { createSlice } from '@reduxjs/toolkit';

const preference = PREFERENCE;
const initialState = { preference };
const preferenceSlice = createSlice({
  name: 'preference',
  initialState,
  reducers: {
    savePreferenceData: (state, action) => {
      state.preference = { ...action.payload };
    },
  },
});

export const { savePreferenceData } = preferenceSlice.actions;
export default preferenceSlice.reducer;
