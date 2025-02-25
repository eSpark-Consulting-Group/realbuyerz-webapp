'use client';
import React from 'react';
import { Box } from '@mui/material';

import Heading from './Heading';
import PropertySlider from '../AgentProfile/PropertySlider';
import { FEATURED_HEADINGS } from '@/src/constants/Home';
import { useSelector } from 'react-redux';

const NewlyListedProperties = () => {
  const NewProjects = useSelector((state) => state.postListingAds.newPostings);
  return (
    <Box
      sx={{
        pt: '14px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ width: '100%', px: 2 }}>
        <Heading
          heading={FEATURED_HEADINGS.listedProperty}
          paragraph={FEATURED_HEADINGS.latestProject}
        />
      </Box>
      <Box
        sx={{
          pt: { xs: '35px', md: '67px' },
          pb: { xs: '45px', sm: '50px', md: '60px', lg: '75px' },
          mx: 'auto',
          width: { xs: '82%', sm: '80%' },
          maxWidth: '1320px',
        }}
      >
        <PropertySlider data={NewProjects} />
      </Box>
    </Box>
  );
};

export default NewlyListedProperties;
