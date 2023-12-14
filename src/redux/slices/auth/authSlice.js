import { LOGIN_FORM } from '@/app/constants/Login';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFormData: '',
  signupFormData: '',
  resetFormData: '',
  loggedInState: false,
};
const authSlice = createSlice({
  name: LOGIN_FORM.auth,
  initialState,
  reducers: {
    saveLoginData: (state, action) => {
      state.loginFormData = { ...action.payload };
    },
    saveSignupData: (state, action) => {
      state.signupFormData = { ...action.payload };
    },
    saveResetData: (state, action) => {
      state.resetFormData = { ...action.payload };
    },
    setLoggedIn: (state, action) => {
      state.loggedInState = action.payload;
    },
  },
});

export const { saveLoginData, saveSignupData, saveResetData, setLoggedIn } =
  authSlice.actions;
export default authSlice.reducer;
