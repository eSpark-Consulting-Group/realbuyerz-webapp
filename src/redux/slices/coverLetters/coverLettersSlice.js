import { COVERLETTERS_DATA } from '@/app/constants/finalConstants/CoverLetters';
import { createSlice } from '@reduxjs/toolkit';

const coverLetters = COVERLETTERS_DATA;

const initialState = { coverLetters };

// function generateUniqueId(coverletters) {
//   let newId = (coverletters.length + 1).toString();
//   while (coverletters.some((bid) => bid.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const coverLettersSlice = createSlice({
  name: 'coverLetters',
  initialState,
  reducers: {},
});

export default coverLettersSlice.reducer;
