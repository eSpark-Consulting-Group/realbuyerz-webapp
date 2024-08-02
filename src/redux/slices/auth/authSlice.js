import { LOGIN_FORM } from '@/src/constants/Login';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedInState: false,
  user: null,
};
const authSlice = createSlice({
  name: LOGIN_FORM.auth,
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedInState = true;
      state.user = action.payload;
    },
    setLoggedOut: (state) => {
      state.loggedInState = false;
      state.user = null;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;
