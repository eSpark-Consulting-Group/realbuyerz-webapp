import { LOGIN_FORM } from '@/app/constants/Login';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFormData: '',
  signupFormData: '',
  loggedInState: false,
};
const loginSlice = createSlice({
  name: LOGIN_FORM.loginCard.login,
  initialState,
  reducers: {
    saveLoginData: (state, action) => {
      state.loginFormData = { ...action.payload };
    },
    saveSignupData: (state, action) => {
      state.signupFormData = { ...action.payload };
    },
    setLoggedIn: (state, action) => {
      state.loggedInState = action.payload;
    },
  },
});

export const { saveLoginData, saveSignupData, setLoggedIn } =
  loginSlice.actions;
export default loginSlice.reducer;
