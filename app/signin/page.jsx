import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/loginsignup/Login/LoginSignupLayout';

const Signin = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <LoginSignupLayout IsLoginPage={true} />
    </Grid>
  );
};
export default Signin;
