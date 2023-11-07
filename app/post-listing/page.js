'use client'
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/component/PostListing/BuyersPlatform';
import AdInformation from '@/src/component/PostListing/AdInformation';
import PropertySize from '@/src/component/PostListing/Propertysize';
import PropertyFeatures from '@/src/component/PostListing/PropertyFeature';
import PropertyGallery from '@/src/component/PostListing/PropertMediaGallery';
import SubmitButton from '@/src/component/PostListing/SaveandSubmit';
import Purpose from '@/src/component/PostListing/Purpose';
import { PROPERTY_BUYING_DETAIL } from '@/src/component/PostListing/postlistingConstants';

const PostListing = () => {
  const [propertyData, setPropertyData] = useState(PROPERTY_BUYING_DETAIL.sellingDetails)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };
  const handleClick = () => {
    console.log("propertyData", propertyData)
  }
  return (
    <Grid container sx={{ paddingTop: '30px', background: '#F4F5F7' }}>
      <Grid item xs={12} md={1} >
      </Grid>
      <Grid item xs={12} md={10}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            background: "white",
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            margin: { xs: '0', md: '0 auto' },
          }}
        >
          <BuyersPlatform />
          <AdInformation inputChange={handleInputChange} />
          <Purpose />
          <PropertySize />
          <PropertyFeatures />
          <PropertyGallery />
          <SubmitButton handleClickButton={handleClick} />
        </Box>
      </Grid>
      <Grid item xs={12} md={1}>
      </Grid>
    </Grid>
  );
};
export default PostListing;
