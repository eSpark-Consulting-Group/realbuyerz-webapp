import React from 'react';
import { Grid } from '@mui/material';

import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { LOGIN_FORM } from '@/app/constants/Login';

const Signin = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent="resetpassword"
          height={LOGIN_FORM.rectangleHeight.loginFormHeight}
          paddingTop={16}
        />
      </Grid>
    </>
  );
};
export default Signin;
