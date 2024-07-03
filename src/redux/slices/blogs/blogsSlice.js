import { createSlice } from '@reduxjs/toolkit';

const blogs = {};

const initialState = { blogs };

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
});

export default blogsSlice.reducer;
