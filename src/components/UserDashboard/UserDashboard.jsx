'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';

import { LIVE_BIDDING_DATA } from '@/app/constants/LiveBidding';
import { ALL_PROPOSALS, ALL_PROPOSALS_DATA } from '@/app/constants/Dashboard';

import DashboardTitle from './DashboardTitle';
import ViewAllPosting from './ViewAllPosting';
import DashboardProfile from './DashboardProfile';
import PostRequestButton from './PostRequestButton';
import SearchFilterButton from './SearchFilterButton';
import BiddingDetails from '../Biddings/BiddingDetails';

const UserDashboard = () => {
  return (
    <>
      <PostRequestButton />
      <Box
        sx={{
          width: { lg: '95%', xs: '100%' },
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: 'auto',
        }}
      >
        <ViewAllPosting />
        <Divider />
        <Box
          sx={{
            p: { xs: 1, sm: 3 },
          }}
        >
          <BiddingDetails
            liveBiddingData={LIVE_BIDDING_DATA}
            Height={'78.5vh'}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { lg: '95%', xs: '100%' },
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: 'auto',
        }}
      >
        <DashboardTitle
          title={`${ALL_PROPOSALS} (${ALL_PROPOSALS_DATA.length}) `}
        />
        <Divider />
        <SearchFilterButton />
        <DashboardProfile proposalData={ALL_PROPOSALS_DATA} />
      </Box>
    </>
  );
};

export default UserDashboard;
