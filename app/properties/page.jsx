'use client';
import React from 'react';
import { Box } from '@mui/system';
import PropertyTabs from '@/src/components/Properties/PropertyTabs';

const Listing = () => {
  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <PropertyTabs />
    </Box>
  );
};

export default Listing;
