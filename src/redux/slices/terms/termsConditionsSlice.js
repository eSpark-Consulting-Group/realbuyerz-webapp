import { createSlice } from '@reduxjs/toolkit';

const terms = {};

const initialState = {terms};
const termsSlice = createSlice({
  name: 'terms',
  initialState,
  reducers: {},
});

export default termsSlice.reducer;
