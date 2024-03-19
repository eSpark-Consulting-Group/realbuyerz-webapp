import { createSlice } from '@reduxjs/toolkit';
import { PRIVACY_POLICY } from '@/src/constants/privacy-policy/PrivacyPolicy';

const initialState = { PRIVACY_POLICY };

const policiesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {},
});

export default policiesSlice.reducer;
