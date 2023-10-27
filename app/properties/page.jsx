'use client';
import { Box } from '@mui/system';
import React from 'react';
import PropertyTabs from '../../src/components/Propertylisting/PropertyTabs';

const Listing = () => {
  return (
    <Box className='min-h-screen' sx={{ py: '80px' }}>
      <PropertyTabs />
    </Box>
  );
};

export default Listing;
