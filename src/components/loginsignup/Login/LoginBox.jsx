'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import RectangleBorderImage from './RectangleBorderImage';
import LoginCard from './LoginCard';
import { LOGIN_FORM } from '@/app/constants/LoginConstants';

const LoginBox = () => {
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
            isLogin={true}
            height={LOGIN_FORM.rectangleHeight.loginFormHeight}
          />
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <LoginCard />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoginBox;
