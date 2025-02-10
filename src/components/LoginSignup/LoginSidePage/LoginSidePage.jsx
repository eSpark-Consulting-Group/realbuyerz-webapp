'use client';
import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ALT } from '@/src/constants/Login';
import { LOGIN_FORM } from '@/src/constants/Login';

const LoginSidePage = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: 4,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '700px',
        }}
      >
        <Box
          component={'img'}
          alt={ALT?.BUILDING_IMAGE || ''}
          src={'/images/signup_page/boximage.svg'}
          sx={{
            width: '85%',
            height: 'auto',
            maxWidth: '632px',
            objectFit: 'contain',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
            px: 2,
          }}
        >
          <Typography
            sx={{
              color: '#126FAA',
              fontSize: { xs: '25px', sm: '22px', md: '25px', lg: '35px' },
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {LOGIN_FORM?.loginCard?.connect}
          </Typography>
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },

              fontWeight: 400,
              textAlign: 'center',
            }}
          >
            {LOGIN_FORM?.loginCard?.propertyDealer}
          </Typography>
        </Box>
        <Box
          component={'img'}
          src="/images/signup_page/highbuilding.svg"
          sx={{
            width: '90%',
            height: 'auto',
            maxWidth: '488px',
            objectFit: 'contain',
          }}
          alt={ALT?.BUILDING_IMAGE}
        />
      </Box>
    </Grid>
  );
};
export default LoginSidePage;
