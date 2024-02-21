'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import ProposalFilter from '@/src/components/Proposals/ProposalFilter';
import { Box } from '@mui/material';

const Page = () => {
  const proposals = useSelector((state) => state.proposals.proposals);
  console.log('proposals', proposals);
  return (
    <>
      <Box
        sx={{
          width: {
            lg: '1200px',
            '@media (min-width: 1440px) and (max-width: 1568px)': {
              width: '100%',
            },
          },
        }}
      >
        hhhh
        {/* <ProposalFilter data={proposals} /> */}
      </Box>
    </>
  );
};

export default Page;
