import React from 'react';
import { Grid } from '@mui/material';

import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { LOGIN_FORM } from '@/app/constants/Login';

const Signup = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent="signup"
          height={LOGIN_FORM.rectangleHeight.signupFormHeight}
        />
      </Grid>
    </>
  );
};
export default Signup;
