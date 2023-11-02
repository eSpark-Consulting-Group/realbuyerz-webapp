import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/loginsignup/Login/LoginSignupLayout';

const Signup = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: '100px',
      }}
    >
      <LoginSignupLayout isSignin={true} />
    </Grid>
  );
};
export default Signup;
