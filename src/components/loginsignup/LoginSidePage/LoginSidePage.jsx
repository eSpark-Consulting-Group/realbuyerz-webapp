'use client';
import React from 'react';
import { Grid } from '@mui/material';

import RealEstateImage from './RealEstateImage';
import PropertyBuilding from './BuildingImage';
import LoginPageText from './LoginPageText';

const LoginSidePage = () => {
  return (
    <Grid>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'white',
          gap: '60px',
          padding: '10px',
        }}
      >
        <RealEstateImage />
        <LoginPageText />
        <PropertyBuilding />
      </Grid>
    </Grid>
  );
};
export default LoginSidePage;
