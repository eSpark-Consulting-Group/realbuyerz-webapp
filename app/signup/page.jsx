import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/LoginSignup/Login/LoginSignupLayout';

const Signup = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: '100px',
      }}
    >
      <LoginSignupLayout IsLoginPage={false} />
    </Grid>
  );
};
export default Signup;
