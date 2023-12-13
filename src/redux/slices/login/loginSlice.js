import { LOGIN_FORM } from '@/app/constants/Login';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFormData: '',
};
const loginSlice = createSlice({
  name: LOGIN_FORM.loginCard.login,
  initialState,
  reducers: {
    saveLoginData: (state, action) => {
      state.loginFormData = { ...action.payload };
    },
  },
});

export const { saveLoginData } = loginSlice.actions;
export default loginSlice.reducer;
