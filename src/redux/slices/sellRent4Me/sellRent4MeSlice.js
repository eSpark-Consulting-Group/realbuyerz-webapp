import { createSlice } from '@reduxjs/toolkit';

const sellRent4Me = {};

const initialState = { sellRent4Me };

// function generateUniqueId(sellRent4Me) {
//   let newId = (sellRent4Me.length + 1).toString();
//   while (sellRent4Me.some((blog) => blog.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const sellRent4MeSlice = createSlice({
  name: 'sellRent4Me',
  initialState,
  reducers: {},
});

export default sellRent4MeSlice.reducer;
