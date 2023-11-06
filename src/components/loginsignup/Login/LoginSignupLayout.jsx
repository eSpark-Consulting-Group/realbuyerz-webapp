import React from 'react';
import { Grid } from '@mui/material';

import SignupBox from '../Signup/SignupBox';
import LoginSidePage from '../LoginSidePage/LoginSidePage';
import LoginBox from './LoginBox';

const LoginSignupLayout = ({ isLoginPage }) => {
  return (
    <>
      <Grid item xs={12} md={1} />
      <Grid
        item
        xs={12}
        md={10}
        sx={{
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Grid item xs={12} md={6} >
          <LoginSidePage />
        </Grid>
        <Grid item xs={12} md={6} >
          {isLoginPage ? <LoginBox /> : <SignupBox />}
        </Grid>
      </Grid>
      <Grid item xs={12} md={1} />
    </>
  );
};
export default LoginSignupLayout;
