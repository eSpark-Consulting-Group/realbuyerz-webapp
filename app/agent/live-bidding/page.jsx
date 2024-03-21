'use client';
import React from 'react';
import { Grid, Box } from '@mui/material';

import { MAIN_TITLE, PROFILE_INFO } from '@/app/constants/LiveBidding';

import BiddingDetails from '@/src/components/Biddings/BiddingDetails';
import LiveBiddingTitle from '@/src/components/Biddings/LiveBiddingTitle';
import BiddingProfile from '@/src/components/Biddings/BiddingProfile';
import { useSelector } from 'react-redux';

const Page = () => {
  const userAds = useSelector((state) => state?.postRequestAds?.userPostings);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={12} lg={12} xl={9.34} xxl={10}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                mt: { lg: '10px' },
                px: { xs: '4.89px' },
              }}
            >
              <LiveBiddingTitle title={MAIN_TITLE} />
              <BiddingDetails ads={userAds} height={'1098px'} />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={2.64} xxl={2}>
            <BiddingProfile profileInfo={PROFILE_INFO} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Page;
