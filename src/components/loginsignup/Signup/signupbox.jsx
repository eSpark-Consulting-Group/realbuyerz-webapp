'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import RectangleBorderImage from '../Login/RectangleBorderImage';
import SignupCard from './SignupCard';
import { LOGIN_FORM } from '@/app/constants/LoginConstants';

const SignupBox = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'none', md: 'flex-start' },
            width: { xs: '100%', md: '100%' },
          }}
        >
          <RectangleBorderImage
            isLogin={false}
            height={LOGIN_FORM.rectangleHeight.signupFormHeight}
          />
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <SignupCard />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SignupBox;
