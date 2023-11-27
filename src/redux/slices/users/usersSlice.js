import { createSlice } from '@reduxjs/toolkit';
import USERS_DATA from '@/app/constants/finalConstants/users';
const users = USERS_DATA;

const initialState = { users };

// function generateUniqueId(users) {
//   let newId = (users.length + 1).toString();
//   while (users.some((user) => user.id === newId)) {
//     newId = (parseInt(newId, 10) + 1).toString();
//   }
//   return newId;
// }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const { adduser, updateuser, deleteuser, selectuser } =
  usersSlice.actions;
export default usersSlice.reducer;
