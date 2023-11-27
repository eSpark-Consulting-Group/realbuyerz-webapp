import { VERIFICATION_OTP } from '@/app/constants/Modal';

const isLengthValid = (code) => {
  return Object.values(code).join('').length === VERIFICATION_OTP.length;
};

export { isLengthValid };
