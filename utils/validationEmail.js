import { LOGIN_FORM } from '@/app/constants/Login';

export function validateEmail(
  email,
  setError,
  setisValidEmail,
  handleModalToggle
) {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    setError(LOGIN_FORM.loginForm.validEmail);
    setisValidEmail(false);
  } else {
    setError('');
    setisValidEmail(true);
    handleModalToggle();
  }
}
