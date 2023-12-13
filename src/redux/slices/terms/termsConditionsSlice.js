import { TERM_CONDITIONS } from '@/app/constants/TermCondition';
import { createSlice } from '@reduxjs/toolkit';

const terms = TERM_CONDITIONS;

const initialState = { terms };
const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {},
});

export default termsSlice.reducer;
