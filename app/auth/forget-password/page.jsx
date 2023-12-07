import React from 'react';
import { Grid } from '@mui/material';

import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { LOGIN_FORM } from '@/app/constants/Login';

const ForgetPasswordForm = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent="forgetpassword"
          height={LOGIN_FORM.rectangleHeight.loginFormHeight}
          paddingTop="-30px"
        />
      </Grid>
    </>
  );
};
export default ForgetPasswordForm;
