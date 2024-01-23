'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import {
  LIVE_BIDDING_DATA,
  MAIN_TITLE,
  PROFILE_INFO,
} from '@/app/constants/LiveBidding';
import { useSelector } from 'react-redux';
import BiddingDetails from '@/src/components/Biddings/BiddingDetails';
import LiveBiddingTitle from '@/src/components/Biddings/LiveBiddingTitle';
import BiddingProfile from '@/src/components/Biddings/BiddingProfile';

const Page = () => {
  const biddings = useSelector((state) => state.biddings.biddings);
  console.log(biddings, 'biddings');

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={8.5} lg={9.2} xl={10}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <LiveBiddingTitle title={MAIN_TITLE} />
              <BiddingDetails
                liveBiddingData={LIVE_BIDDING_DATA}
                Height={'100vh'}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3.5} lg={2.8} xl={2}>
            <BiddingProfile profileInfo={PROFILE_INFO} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
