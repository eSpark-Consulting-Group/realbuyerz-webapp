import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/LoginSignup/Login/LoginSignupLayout';

const Signin = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <LoginSignupLayout isLoginPage={true} />
    </Grid>
  );
};
export default Signin;
