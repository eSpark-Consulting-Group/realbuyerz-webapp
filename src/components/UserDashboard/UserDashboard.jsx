'use client';
import React from 'react';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';

import { LIVE_BIDDING_DATA } from '@/src/constants/LiveBidding';
import ViewAllPosting from './ViewAllPosting';
import PostRequestButton from './PostRequestButton';
import BiddingDetails from '../Biddings/BiddingDetails';
import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const userAds = useSelector((state) => state?.postRequestAds?.userPostings);
  const userId = useSelector((state) => state?.currentUser?.user?.id);
  const find_user = userAds?.filter((ad) => ad?.user_id === userId);

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
            p: { xs: 2, sm: 6 },
          }}
        >
          <BiddingDetails
            liveBiddingData={LIVE_BIDDING_DATA}
            ads={find_user}
            height={'1098px'}
          />
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
