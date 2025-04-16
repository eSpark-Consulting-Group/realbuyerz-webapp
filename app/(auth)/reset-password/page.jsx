import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { getMetadata } from '@/src/components/seo';

import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';
import { GLOBAL_SEO } from '@/src/constants/global/seo';

const pathname = '/reset-password';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const ResetPasswordForm = () => {
  return (
    <RectangleBorderImage
      showComponent={AUTH_COMPONENTS.resetPassword}
      height={LOGIN_FORM.rectangleHeight.loginFormHeight}
    />
  );
};
export default ResetPasswordForm;
