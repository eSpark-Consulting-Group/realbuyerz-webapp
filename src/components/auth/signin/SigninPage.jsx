import React from 'react';
import { Grid } from '@mui/material';

import RectangleBorderImage from '@/src/components/auth/RectangleBorderImage';
import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';

const SigninPage = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent={AUTH_COMPONENTS.SigninPage}
          height={LOGIN_FORM.rectangleHeight.loginFormHeight}
        />
      </Grid>
    </>
  );
};
export default SigninPage;
