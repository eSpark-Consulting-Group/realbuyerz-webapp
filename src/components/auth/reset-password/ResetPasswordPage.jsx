import React from 'react';
import { Grid } from '@mui/material';
import RectangleBorderImage from '../RectangleBorderImage';
import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';

const ResetPasswordPage = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent={AUTH_COMPONENTS?.resetPassword}
          height={LOGIN_FORM?.rectangleHeight?.loginFormHeight}
        />
      </Grid>
    </>
  );
};

export default ResetPasswordPage;
