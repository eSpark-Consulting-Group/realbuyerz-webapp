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
  name: USERS_DATA.users,
  initialState,
  reducers: {
    savePreferenceData: (state, action) => {
      const {
        emailNotification,
        newsLetters,
        autoReport,
        areaUnit,
        currencyUnit,
      } = action.payload;
      state.users.userdata.emailNotification = emailNotification;
      state.users.userdata.newsLetters = newsLetters;
      state.users.userdata.autoReport = autoReport;
      state.users.userdata.areaUnit = areaUnit;
      state.users.userdata.currencyUnit = currencyUnit;
    },
  },
});

export const {
  adduser,
  updateuser,
  deleteuser,
  selectuser,
  savePreferenceData,
} = usersSlice.actions;
export default usersSlice.reducer;
