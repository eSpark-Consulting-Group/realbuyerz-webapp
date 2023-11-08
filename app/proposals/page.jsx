'use client';
import React from 'react';
import { Box } from '@mui/system';
import ProposalFilter from '@/src/components/Proposals/ProposalFilter';

const Listing = () => {
  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <ProposalFilter />
    </Box>
  );
};

export default Listing;
