import { createSlice } from '@reduxjs/toolkit';

const careers = {};

const initialState = { careers };

// function generateUniqueId(careers) {
//   let newId = (careers.length + 1).toString();
//   while (careers.some((blog) => blog.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const careersSlice = createSlice({
  name: 'careers',
  initialState,
  reducers: {},
});

export default careersSlice.reducer;
