import { Grid } from '@mui/material';

import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { getMetadata } from '@/src/components/seo';

import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';
import { GLOBAL_SEO } from '@/src/constants/global/seo';

const pathname = '/signup';
const filteredData =
  GLOBAL_SEO?.find((item) => item?.path === pathname) || GLOBAL_SEO[0];
export const metadata = getMetadata(filteredData);

const Signup = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent={AUTH_COMPONENTS.signup}
          height={LOGIN_FORM.rectangleHeight.signupFormHeight}
        />
      </Grid>
    </>
  );
};

export default Signup;
