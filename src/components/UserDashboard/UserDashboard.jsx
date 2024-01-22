'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';

import { LIVE_BIDDING_DATA } from '@/app/constants/LiveBidding';
// import { ALL_PROPOSALS, ALL_PROPOSALS_DATA } from '@/app/constants/Dashboard';

// import DashboardTitle from './DashboardTitle';
import ViewAllPosting from './ViewAllPosting';
// import DashboardProfile from './DashboardProfile';
import PostRequestButton from './PostRequestButton';
// import SearchFilterButton from './SearchFilterButton';
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
          maxWidth: '1200px',
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
      {/* <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: { xs: 'auto', lg: 0 },
          width: { xs: '100%', lg: '1200px' },
          '@media (min-width: 1440px) and (max-width: 1568px)': {
            width: '100%',
          },
          '@media (min-width: 960px) and (max-width: 1439px)': {
            width: '90%',
          },
        }}
      >
        <DashboardTitle
          title={`${ALL_PROPOSALS} (${ALL_PROPOSALS_DATA.length}) `}
        />
        <Divider />
        <SearchFilterButton />
        <DashboardProfile proposalData={ALL_PROPOSALS_DATA} Height={'67.5vh'} />
      </Box> */}
    </>
  );
};

export default UserDashboard;
