import { VERIFIED_CODE } from '@/app/constants/Modal';
import { createSlice } from '@reduxjs/toolkit';

const verification = VERIFIED_CODE;
const initialState = { verification };
const verificationSlice = createSlice({
  name: 'verification',
  initialState,
  reducers: {
    saveVerificationCode: (state, action) => {
      state.verification = { ...action.payload };
    },
  },
});

export const { saveVerificationCode } = verificationSlice.actions;
export default verificationSlice.reducer;
