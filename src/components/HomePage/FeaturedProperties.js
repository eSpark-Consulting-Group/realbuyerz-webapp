'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Heading from './Heading';

function FeaturedProperties() {

  return (
    <Box sx={{ pt: '90px', textAlign: 'center', backgroundImage: `url("/images/bgs/featured-properties-background.png")` }}>

      <Heading heading={"Browse By Category"} paragraph={"To browse & buy in your areas of interest. Look of properties by category"} />
      <Box sx={{ padding: '20px' }}>

      </Box>
    </Box>
  );
}

export default FeaturedProperties;
