'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import { LIVE_BIDDING_DATA, MAIN_TITLE, PROFILE_INFO } from '@/app/constants/LiveBidding';
import { useSelector } from 'react-redux';
import BiddingDetails from '@/src/components/Biddings/BiddingDetails';
import LiveBiddingTitle from '@/src/components/Biddings/LiveBiddingTitle';
import BiddingProfile from '@/src/components/Biddings/BiddingProfile';

const page = () => {
  const biddings = useSelector((state) => state.biddings.biddings);
  console.log(biddings, 'biddings');

  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={8.5} lg={9}>
        <LiveBiddingTitle title={MAIN_TITLE} />
          <BiddingDetails liveBiddingData={LIVE_BIDDING_DATA} Height={'100vh'} />  
        </Grid>
        <Grid item xs={12} md={3.5} lg={3} >
            <BiddingProfile profileInfo={PROFILE_INFO} />
        </Grid>
        </Grid>
        </Box>
    </>
  );
};

export default page;
