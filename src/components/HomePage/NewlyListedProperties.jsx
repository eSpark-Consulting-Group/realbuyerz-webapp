'use client';
import React from 'react';
import { Box } from '@mui/material';
import Heading from './Heading';

import AgentPropertiesSlider from '../AgentProfile/AgentPropertiesSlider';

function NewlyListedProperties({ data }) {
  return (
    <>
      <Box>
        <Box
          sx={{
            pt: '90px',
            textAlign: 'center',
            backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}>
          <Heading
            heading={'Newly Listed  Properties'}
            paragraph={'Find your dream property from our latest properties '}
          />
          <Box sx={{ pt: '67px', pb: '75px', px: '15%' }}>
            <AgentPropertiesSlider data={data} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NewlyListedProperties;
