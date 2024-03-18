'use client';
import React from 'react';
import { Box } from '@mui/material';

import Heading from '../global/Heading';
import { FEATURED_HEADINGS } from '@/src/constants/Home';
import PropertySlider from '../AgentProfile/PropertySlider';

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
          <Box
            sx={{
              pt: { xs: '50px', md: '67px' },
              pb: { xs: '45px', sm: '50px', md: '60px', lg: '75px' },
              px: '15%',
            }}
          >
            <PropertySlider data={data} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewlyListedProperties;
