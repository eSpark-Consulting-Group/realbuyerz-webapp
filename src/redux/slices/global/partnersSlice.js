import { PARTNERS } from '@/app/constants/Home';
import { createSlice } from '@reduxjs/toolkit';

const partners = { PARTNERS };

const initialState = { partners };

// function generateUniqueId(partners) {
//   let newId = (partners.length + 1).toString();
//   while (partners.some((partner) => partner.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {},
});

export default partnersSlice.reducer;
