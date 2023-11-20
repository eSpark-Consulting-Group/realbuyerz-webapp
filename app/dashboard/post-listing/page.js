'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyFeatures from '@/src/components/PostListing/PropertyFeature';
import PropertyGallery from '@/src/components/PostListing/PropertGallery';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';
import SubmitButton from '@/src/components/PostListing/SaveandSubmit';

const PostListing = () => {
  return (
    <Grid
      container
      sx={{ paddingTop: '30px', background: '#F4F5F7', paddingBottom: '30px' }}
    >
      <Grid item xs={12} md={12}>
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
          <PropertyPurpose />
          <PropertySize />
          <PropertyFeatures />
          <PropertyGallery />
          <SubmitButton />
        </Box>
      </Grid>
    </Grid>
  );
};
export default PostListing;
