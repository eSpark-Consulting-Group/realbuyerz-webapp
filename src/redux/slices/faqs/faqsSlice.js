import { createSlice } from '@reduxjs/toolkit';

const faqs = {};

const initialState = { faqs };

// function generateUniqueId(faqs) {
//   let newId = (faqs.length + 1).toString();
//   while (faqs.some((blog) => blog.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {},
});

export default faqsSlice.reducer;
