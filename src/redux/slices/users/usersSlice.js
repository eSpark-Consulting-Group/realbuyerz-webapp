import { USERS_DATA } from '@/app/constants/user';
import { createSlice } from '@reduxjs/toolkit';
const userdata = USERS_DATA;
const users = {
  userdata,
};

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
