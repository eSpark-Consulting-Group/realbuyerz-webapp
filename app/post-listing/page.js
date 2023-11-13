'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/component/PostListing/BuyersPlatform';
import AdInformation from '@/src/component/PostListing/AdInformation';
import PropertySize from '@/src/component/PostListing/Propertysize';
import PropertyFeatures from '@/src/component/PostListing/PropertyFeature';
import PropertyGallery from '@/src/component/PostListing/PropertGallery';
import SubmitButton from '@/src/component/PostListing/SaveandSubmit';
import Purpose from '@/src/component/PostListing/Purpose';

const PostListing = () => {
  const handleClick = () => {
    console.log('mainpropertyData', propertyData);
  };
  return (
    <Grid
      container
      sx={{ paddingTop: '30px', background: '#F4F5F7', paddingBottom: '30px' }}
    >
      <Grid item xs={12} md={1}></Grid>
      <Grid item xs={12} md={10}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            background: 'white',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            margin: { xs: '0', md: '0 auto' },
          }}
        >
          <BuyersPlatform />
          <AdInformation />
          <Purpose />
          <PropertySize />
          <PropertyFeatures />
          <PropertyGallery />
          <SubmitButton handleClickButton={handleClick} />
        </Box>
      </Grid>
      <Grid item xs={12} md={1}></Grid>
    </Grid>
  );
};
export default PostListing;
