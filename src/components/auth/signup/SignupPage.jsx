import React from 'react';
import { Grid } from '@mui/material';

import RectangleBorderImage from '@/src/components/auth/RectangleBorderImage';
import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';

const SignupPage = () => {
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
export default SignupPage;
