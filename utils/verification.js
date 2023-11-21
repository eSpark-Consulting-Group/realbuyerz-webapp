import { VERIFICATION_CODE } from '@/app/constants/Modal';
import { VERIFICATION_OTP } from '@/app/constants/Modal';

export const verificationState = () => ({
  verified: VERIFICATION_CODE.codeOTP,
  userverfified: VERIFICATION_OTP.otpCode,
});
