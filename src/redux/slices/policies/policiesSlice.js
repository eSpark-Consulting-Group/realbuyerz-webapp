import { createSlice } from '@reduxjs/toolkit';

const policies = {};

const initialState = { policies };


const policiesSlice = createSlice({
  name: 'policies',
  initialState,
  reducers: {},
});

export default policiesSlice.reducer;
