import { createSlice } from '@reduxjs/toolkit';
import { USERS_DATA } from '@/src/constants/user'; 

const initialState = {
  userdata: USERS_DATA,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    savePreferenceData: (state, action) => {
      const { emailNotification, areaUnit, currencyUnit } = action.payload;
      state.userdata.emailNotification = emailNotification;
      state.userdata.areaUnit = areaUnit;
      state.userdata.currencyUnit = currencyUnit;
    },
    addUser: (state, action) => {
      state.userdata.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, data } = action.payload;
      const index = state.userdata.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.userdata[index] = { ...state.userdata[index], ...data };
      }
    },
    deleteUser: (state, action) => {
      state.userdata = state.userdata.filter(
        (user) => user.id !== action.payload
      );
    },
  },
});

export const { savePreferenceData, addUser, updateUser, deleteUser } =
  usersSlice.actions;

export default usersSlice.reducer;
