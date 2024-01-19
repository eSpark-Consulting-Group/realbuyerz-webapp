'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

import PropertyTabs from '@/src/components/Properties/PropertyTabs';

const Listing = () => {
  const properties = useSelector((state) => state.properties.properties);
  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <PropertyTabs data={properties} />
    </Box>
  );
};

export default Listing;
