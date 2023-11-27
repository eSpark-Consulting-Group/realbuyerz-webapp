'use client';
import React from 'react';
import { Box } from '@mui/system';

import PropertyTabs from '@/src/components/Properties/PropertyTabs';

import { PROPERTIES_LISTING } from '../constants/Properties';

const Listing = () => {
  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <PropertyTabs data={PROPERTIES_LISTING} />
    </Box>
  );
};

export default Listing;
