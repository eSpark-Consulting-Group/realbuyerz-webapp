import React from 'react';
import { Grid } from '@mui/material';

import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';

const Page = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent={AUTH_COMPONENTS?.forgetPassword}
          height={LOGIN_FORM?.rectangleHeight?.loginFormHeight}
          paddingTop={LOGIN_FORM?.paddingTop}
        />
      </Grid>
    </>
  );
};
export default Page;
