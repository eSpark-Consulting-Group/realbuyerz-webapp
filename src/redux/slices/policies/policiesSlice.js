import { createSlice } from '@reduxjs/toolkit';
import { PRIVACY_POLICY } from '@/app/constants/PrivacyPolicy';

const initialState = { PRIVACY_POLICY };

const policiesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {},
});

export default policiesSlice.reducer;
