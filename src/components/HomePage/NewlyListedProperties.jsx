'use client';
import React from 'react';
import { Box } from '@mui/material';

import Heading from './Heading';
import PropertySlider from '../AgentProfile/PropertySlider';
import { FEATURED_HEADINGS } from '@/app/constants/Home';

const NewlyListedProperties = ({ data }) => {
  return (
    <>
      <Box>
        <Box
          sx={{
            pt: '14px',
            textAlign: 'center',
            backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Heading
            heading={FEATURED_HEADINGS.listedProperty}
            paragraph={FEATURED_HEADINGS.latestProject}
          />
          <Box sx={{ pt: '67px', pb: '75px', px: '15%' }}>
            <PropertySlider data={data} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewlyListedProperties;
