import { createSlice } from '@reduxjs/toolkit';

const pricePlan = {};

const initialState = { pricePlan };

// function generateUniqueId(pricePlan) {
//   let newId = (pricePlan.length + 1).toString();
//   while (pricePlan.some((blog) => blog.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const pricePlanSlice = createSlice({
  name: 'pricePlan',
  initialState,
  reducers: {},
});

export default pricePlanSlice.reducer;
