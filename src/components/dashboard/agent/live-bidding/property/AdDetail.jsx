'use client';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import RightSection from '@/src/components/dashboard/user/dashboard/RightSection';
import BiddingProfile from '@/src/components/dashboard/agent/live-bidding/BiddingProfile';
import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import PreviewFeatureAndAmenities from '@/src/components/dashboard/preview/PreviewFeatureAndAmenities';

import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';

import { PREVIEW_DATA } from '@/src/constants/Preview_Data';
import { CLIENT_REQUIRMENT } from '@/src/constants/agent/Live_Bidding';
import { transformApiObject } from '@/src/utils/objectsConversion';
import { useMutation } from '@tanstack/react-query';
import { fetchProperties } from '@/src/utils/properties';
import { setAllUserProperties } from '@/src/redux/slices/properties/propertiesSlice';

const AdDetail = () => {
  const { location, areaAndAmount, amenities } = PREVIEW_DATA;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const dispatch = useDispatch();
  const userProperties = useSelector(
    (state) => state?.properties?.userProperties
  );

  const transformApiArray = (apiArray) => {
    return apiArray.map((apiObj) => transformApiObject(apiObj));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: fetchProperties,
    onSuccess: (data) => {
      const items = data.response.data.items;

      dispatch(setAllUserProperties(transformApiArray(items)));
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  const [userPropertyData, setUserPropertyData] = useState({});

  useEffect(() => {
    if (!userProperties?.length) {
      mutate();
    }

    if (userProperties.length) {
      const item = userProperties.find((item) => item.property_id === id);

      setUserPropertyData(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProperties?.length]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={12} lg={12} xl={9.34}>
          <Box
            sx={{
              background: '#fff',
              borderRadius: '10px',
              mt: '16px',
              border: '1px solid #E4E4E4',
              height: '100%',
            }}
          >
            <Grid
              container
              sx={{
                height: '100%',
              }}
            >
              <Grid item xs={12} md={8.5} xl={9.5}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRight: userProperties.length
                      ? '1px solid #E4E4E4'
                      : 'none',
                    pt: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {CLIENT_REQUIRMENT?.title}
                  </Typography>
                  {isPending ? (
                    <Box
                      sx={{
                        height: 'calc(100% - 50px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <CircularProgress size={32} color="inherit" />
                    </Box>
                  ) : (
                    <>
                      <PropertyDetail
                        subTitle={userPropertyData?.title}
                        fontStyle={'16px'}
                        description={userPropertyData?.description}
                      />
                      <Location
                        city={userPropertyData?.city}
                        locationKeys={location}
                        purpose={userPropertyData?.purpose}
                        propertyType={userPropertyData?.propertyType}
                        propertyCategory={userPropertyData?.propertyCategory}
                        location={userPropertyData?.location}
                        width={'70%'}
                      />
                      <PreviewAmountAndFeature
                        area={userPropertyData?.area}
                        amount={userPropertyData?.amount}
                        areaUnit={userPropertyData?.areaUnit}
                        areaAndAmount={areaAndAmount}
                        amountCurrency={userPropertyData?.amountCurrency}
                        instalmentAvailable={
                          userPropertyData?.instalmentAvailable
                        }
                        readyPossession={userPropertyData?.readyPossession}
                      />
                      <PreviewFeatureAndAmenities
                        amenities={amenities}
                        specificPost={userPropertyData}
                      />
                    </>
                  )}
                </Box>
              </Grid>
              {'property_id' in userPropertyData && (
                <Grid item xs={12} md={3.5} xl={2.5}>
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderBottom: '1px solid #E4E4E4',
                      px: { xs: 4, md: 3 },
                      pb: 0.8,
                      pt: 7,
                    }}
                  >
                    <RightSection
                      // proposals={sendProposals}
                      specificPost={userPropertyData}
                      postId={userPropertyData?.property_id}
                      rightSectionKeys={CLIENT_REQUIRMENT}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={2.64}>
          <BiddingProfile />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdDetail;
