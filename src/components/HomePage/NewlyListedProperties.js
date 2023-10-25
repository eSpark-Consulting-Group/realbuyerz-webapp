'use client';
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Heading from './Heading';
import AgentPropertiesSlider from '../AgentProfile/AgentPropertiesSlider';
import { SliderCardData } from '@/app/constents/AgentProfileConstant';

function NewlyListedProperties() {

  return (
    <Box sx={{ pt: '90px', textAlign: 'center', backgroundImage: `url('/images/bgs/featured-properties-background.png')` }}>

      <Heading heading={'Newly Listed  Properties'} paragraph={'Find your dream property from our latest properties '} />
      <Box sx={{ pt: '67px', pb: '75px', px: '15%' }}>
        <AgentPropertiesSlider data={SliderCardData} />
      </Box>
    </Box>
  );
}

export default NewlyListedProperties;
