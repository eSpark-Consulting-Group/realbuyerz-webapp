import React from 'react';
import { Grid } from '@mui/material';
import SidePage from '@/src/components/loginsignup/LoginSidePage/SidePage';
import SignupBox from '@/src/components/loginsignup/Signup/SignupBox';

const Signup = () => {
  return (
    <Grid
      container
      sx={{
        paddingTop: '90px',
      }}
    >
      <Grid item xs={12} md={1}></Grid>
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
        <Grid item xs={12} md={6} sx={{}}>
          <SidePage />
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <SignupBox />
        </Grid>
      </Grid>
      <Grid item xs={12} md={1}></Grid>
    </Grid>
  );
};
export default Signup;
