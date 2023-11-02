import React from 'react';
import { Grid } from '@mui/material';

import LoginSignupLayout from '@/src/components/loginsignup/Login/LoginSignupLayout';

const Signin = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: '100px',
      }}
    >
       <LoginSignupLayout isSign={true} />
    </Grid>
  );
};
export default Signin;
