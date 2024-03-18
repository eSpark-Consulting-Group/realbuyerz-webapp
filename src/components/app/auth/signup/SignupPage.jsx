import React from 'react';
import { Grid } from '@mui/material';
import RectangleBorderImage from '../RectangleBorderImage';
import { AUTH_COMPONENTS, LOGIN_FORM } from '@/src/constants/Login';

const SignupPage = () => {
  return (
    <>
      <Grid container>
        <RectangleBorderImage
          showComponent={AUTH_COMPONENTS?.Page}
          height={LOGIN_FORM?.rectangleHeight?.PageFormHeight}
        />
      </Grid>
    </>
  );
};

export default SignupPage;
