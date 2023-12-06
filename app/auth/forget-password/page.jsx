import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/LoginSignup/Login/LoginSignupLayout';
import InnerPagesLayout from '../layout';
import RectangleBorderImage from '@/src/components/LoginSignup/Login/RectangleBorderImage';
import { LOGIN_FORM } from '@/app/constants/Login';

const ForgetPasswordForm = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent="forgetpassword"
          height={LOGIN_FORM.rectangleHeight.loginFormHeight}
        />
      </Grid>
    </>
  );
};
export default ForgetPasswordForm;
