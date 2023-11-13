'use client';
import React from 'react';
import { Box } from '@mui/system';
import ProposalFilter from '@/src/components/proposals/ProposalFilter';

const Listing = () => {
  return (
    <>
      <Box sx={{ background: '#ffffff', borderRadius: '10px', p: '50px' }}>
        <ProposalFilter />
      </Box>
    </>
  );
};

export default Listing;
