import { LOGIN_FORM } from '@/app/constants/Login';
import { createSlice } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from 'cookies-next';

const initialState = {
  loginFormData: '',
  signupFormData: '',
  resetFormData: '',
  loggedInState: false,
  logOut: false,
  role: '',
};
const authSlice = createSlice({
  name: LOGIN_FORM.auth,
  initialState,
  reducers: {
    saveLoginData: (state, action) => {
      const authDetails = action.payload;
      state.loginFormData = { ...action.payload };
      if (authDetails.email === 'user' && authDetails.password === '12345') {
        state.role === 'user';
        setCookie('role', 'user');
        setCookie('logged', true);
      }
      if (authDetails.email === 'agent' && authDetails.password === '12345') {
        state.role === 'agent';
        setCookie('role', 'agent');
        setCookie('logged', true);
      }
    },
    saveSignupData: (state, action) => {
      state.signupFormData = { ...action.payload };
    },
    saveResetData: (state, action) => {
      state.resetFormData = { ...action.payload };
    },
    setLoggedIn: (state, action) => {
      state.loggedInState = action.payload;
      deleteCookie('logged');
      deleteCookie('role');
    },
    setLogOut: (state, action) => {
      state.loggedInState = action.payload;
    },
  },
});

export const {
  saveLoginData,
  saveSignupData,
  saveResetData,
  setLoggedIn,
  setLogOut,
} = authSlice.actions;
export default authSlice.reducer;
