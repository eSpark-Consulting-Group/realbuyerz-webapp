import { createSlice } from '@reduxjs/toolkit';

const jagah360 = {};

const initialState = { jagah360 };

// function generateUniqueId(jagah360) {
//   let newId = (jagah360.length + 1).toString();
//   while (jagah360.some((blog) => blog.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const jagah360Slice = createSlice({
  name: 'jagah360',
  initialState,
  reducers: {},
});

export default jagah360Slice.reducer;
