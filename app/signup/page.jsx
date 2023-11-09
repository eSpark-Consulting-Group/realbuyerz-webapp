import React from 'react';
import { Grid } from '@mui/material';
import SidePage from '@/src/components/loginsignup/LoginSidePage/SidePage';
import SignupBox from '@/src/components/loginsignup/Signup/SignupBox';

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
