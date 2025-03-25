'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';

import BiddingProfile from '@/src/components/dashboard/agent/live-bidding/BiddingProfile';
import LiveBiddingTitle from './LiveBiddingTitle';
import PostListingCard from './PostListingCard';

import { MAIN_TITLE } from '@/src/constants/agent/Live_Bidding';
import { fetchProperties } from '@/src/utils/properties';
import { transformApiObject } from '@/src/utils/objectsConversion';
import { setAllUserProperties } from '@/src/redux/slices/properties/propertiesSlice';
import { toast } from 'react-toastify';

const LiveBidding = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state?.auth?.userProfile);

  const [liveBiddingData, setLiveBiddingData] = useState([]);

  useEffect(() => {
    if (userProfile?.id) {
      mutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transformApiArray = (apiArray) => {
    return apiArray.map((apiObj) => transformApiObject(apiObj));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: fetchProperties,
    onSuccess: (data) => {
      const items = data.response.data.items?.filter(
        (item) => item.userId !== userProfile?.id
      );

      setLiveBiddingData(transformApiArray(items));
      dispatch(setAllUserProperties(transformApiArray(items)));
    },
    onError: (error) => {
      // Handle the error
      toast.error(error.response.data.messag)
    },
  });

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
              {!userProfile || isPending ? (
                <Box
                  sx={{
                    height: '200px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CircularProgress size={32} color="inherit" />
                </Box>
              ) : (
                <PostListingCard ads={liveBiddingData} height={'1098px'} />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={2.64} xxl={2}>
            <BiddingProfile />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LiveBidding;
