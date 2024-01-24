'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';

import { LIVE_BIDDING_DATA } from '@/app/constants/LiveBidding';
import ViewAllPosting from './ViewAllPosting';
import PostRequestButton from './PostRequestButton';
import BiddingDetails from '../Biddings/BiddingDetails';

const UserDashboard = () => {
  return (
    <>
      <PostRequestButton />
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: { xs: 'auto', lg: 0 },
          maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <ViewAllPosting />
        <Divider />
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <BiddingDetails
            liveBiddingData={LIVE_BIDDING_DATA}
            Height={'78.5vh'}
          />
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
