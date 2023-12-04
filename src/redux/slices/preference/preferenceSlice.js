import { AGENT_PREFERENCES } from '@/app/constants/Preference';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  preference: {
    emailNotification: false,
    newsLetter: false,
    automatedReports: false,
    currency: '',
    areaUnit: '',
  },
};
const preferenceSlice = createSlice({
  name: AGENT_PREFERENCES.preference,
  initialState,
  reducers: {
    savePreferenceData: (state, action) => {
      state.preference = { ...action.payload };
    },
  },
});

export const { savePreferenceData } = preferenceSlice.actions;
export default preferenceSlice.reducer;
