import { TERM_CONDITIONS } from '@/app/constants/TermCondition';
import { createSlice } from '@reduxjs/toolkit';

const initialState = { TERM_CONDITIONS };
const termsConditionsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {},
});

export default termsConditionsSlice.reducer;
