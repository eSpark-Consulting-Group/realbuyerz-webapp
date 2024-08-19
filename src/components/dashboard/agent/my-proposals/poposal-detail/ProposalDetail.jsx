'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Button, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { usePathname } from 'next/navigation';

import BackToDashboard from '@/src/components/dashboard/BackToDashboard';
import PropertyDetail from '@/src/components/dashboard/preview/PropertyDetail';
import Location from '@/src/components/dashboard/preview/Location';
import PreviewAmountAndFeature from '@/src/components/dashboard/preview/PreviewAmountAndFeature';
import PreviewFeatureAndAmenities from '@/src/components/dashboard/preview/PreviewFeatureAndAmenities';
import UserProfileImage from '@/src/components/dashboard/UserProfileImage';
import BidMedia from '@/src/components/dashboard/BidMedia';
import Amount from '@/src/components/dashboard/preview/Amount';
import LiveBiddingPropertiesList from '@/src/components/dashboard/LiveBiddingPropertiesList';

import {
  PREVIEW_DATA,
  PROPOSAL_PAGE,
  VIEWPROPOSAL,
} from '@/src/constants/Preview_Data';

import { PROPOSAL } from '@/src/constants/agent/Proposal';
import {
  ESTIMATE_RANGE,
  POST_LISTINGAD_CARD,
} from '@/src/constants/user/Dashboard';

import { viewAgentProposal } from '@/src/utils/apis/bidding/viewAgentProposal';
import { useMutation } from '@tanstack/react-query';
import { transformApiObject } from '@/src/utils/objectsConversion';
import { formatDistanceToNow } from 'date-fns';

const ProposalDetail = () => {
  const { image, back_Proposal_Button } = PROPOSAL_PAGE;
  const { areaAndAmount, location, amenities, images, videos } = PREVIEW_DATA;

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const [userPropertyDetail, setUserPropertyDetail] = useState({});
  const [agentPropertyDetail, setAgentPropertyDetail] = useState({});
  const [showMoreContent, setShowMoreContent] = useState(false);

  const handleClick = () => {
    setShowMoreContent(!showMoreContent);
  };

  useEffect(() => {
    if (id) {
      mutate(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const { mutate, isPending } = useMutation({
    mutationFn: viewAgentProposal,
    onSuccess: (data) => {
      const item = data.response.data[0];

      setUserPropertyDetail(transformApiObject(item.userProperty));
      setAgentPropertyDetail(transformApiObject(item.agentProperty));

      // console.log(item);
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} md={12} lg={9.2} xl={9.2}>
          <Box sx={{ pb: 3 }}>
            <BackToDashboard
              buttonLabel={back_Proposal_Button?.text}
              link={back_Proposal_Button?.link}
            />
          </Box>
          <Box
            sx={{
              background: '#fff',
              borderRadius: '10px',
              mt: '16px',
              border: '1px solid #E4E4E4',
            }}
          >
            {isPending ? (
              <Box
                sx={{
                  height: '300px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <CircularProgress size={32} color="inherit" />
              </Box>
            ) : (
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexDirection: { xs: 'column', md: 'column' },
                      p: 4,
                      pb: 5,
                      borderBottom: '1px solid #E4E4E4',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '30px',
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      {VIEWPROPOSAL?.userRequest || ''}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: '15px', md: '20px' },
                        fontWeight: 700,
                        textAlign: 'center',
                        mt: 3,
                        color: '#333333',
                        '@media (min-width: 280px) and (max-width: 350px)': {
                          textAlign: 'center',
                          fontSize: '10px',
                        },
                      }}
                    >
                      {userPropertyDetail?.title || ''}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        '@media (min-width: 280px) and (max-width: 800px)': {
                          flexDirection: 'column',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                        }}
                      >
                        <UserProfileImage
                          width={60}
                          height={60}
                          badgeWidth={'7px'}
                          badgeHeigth={'7px'}
                          padding={0.3}
                          right={2}
                          image={userPropertyDetail?.profile_image || image}
                          isActive={userPropertyDetail?.status || false}
                          notActive={false}
                        />
                        <Box
                          sx={{
                            marginLeft: '10px',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '15px',
                              fontWeight: 500,
                              color: '#126FAA',
                              ml: 0.5,
                            }}
                          >
                            {`${userPropertyDetail?.first_name || ''} ${userPropertyDetail?.last_name || ''}`}
                          </Typography>
                          <Typography
                            sx={{
                              color: '#757474',
                              fontSize: '15px',
                              fontWeight: 500,
                            }}
                          >
                            <LocationOnIcon
                              sx={{ fontSize: 28, color: '#757474' }}
                            />
                            {`${userPropertyDetail?.city || ''} ${userPropertyDetail?.country || ''}`}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ ml: { xs: 0, md: 0.5 } }}
                          >
                            {userPropertyDetail?.created_at &&
                              formatDistanceToNow(
                                new Date(userPropertyDetail?.created_at),
                                {
                                  addSuffix: true,
                                }
                              )}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    {userPropertyDetail && (
                      <Grid container>
                        <Grid container spacing={2}>
                          <Box
                            sx={{
                              color: '#333',
                              px: { xs: '20px', md: '20px' },
                              paddingTop: '40px',
                              paddingBottom: '20px',
                              '@media(min-width: 280px) and (max-width: 445px)':
                                {
                                  pr: '10px',
                                },
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: '500',
                                fontSize: '13.8px',
                                lineHeight: '20.52px',
                                mb: 1,
                              }}
                            >
                              {userPropertyDetail?.description}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              width: '100%',
                              '@media (min-width: 280px) and (max-width: 500px)':
                                {
                                  flexDirection: 'column',
                                },
                            }}
                          >
                            <LiveBiddingPropertiesList
                              city={userPropertyDetail?.city}
                              status={userPropertyDetail?.purpose}
                              location={userPropertyDetail?.location}
                              noConnects={false}
                              cardKeys={POST_LISTINGAD_CARD}
                              justifyContent={'flex-start'}
                            />
                            <Box
                              sx={{
                                display: 'flex',
                                width: '20%',
                                '@media (min-width: 280px) and (max-width: 760px)':
                                  {
                                    width: '80%',
                                  },
                                '@media (min-width: 280px) and (max-width: 500px)':
                                  {
                                    pl: '20px',
                                  },
                              }}
                            >
                              <Typography
                                variant="body1"
                                sx={{
                                  fontSize: '14px',
                                  fontWeight: 600,
                                  mt: '3px',
                                }}
                              >
                                {ESTIMATE_RANGE}
                              </Typography>
                              <Typography
                                sx={{
                                  ml: 1,
                                  fontWeight: 700,
                                  color: '#333333',
                                  fontSize: '20px',
                                }}
                                component={'span'}
                              >
                                {`${userPropertyDetail?.amount}`}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    )}
                    <Box>
                      <Button
                        sx={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#FB631C',
                          textTransform: 'math-auto',
                        }}
                        onClick={handleClick}
                      >
                        {showMoreContent
                          ? VIEWPROPOSAL?.viewLessDetails
                          : VIEWPROPOSAL?.viewMoreDetails}
                      </Button>
                    </Box>
                  </Box>
                  {showMoreContent && (
                    <>
                      <Location
                        city={userPropertyDetail?.city}
                        locationKeys={location}
                        purpose={userPropertyDetail?.purpose}
                        propertyType={userPropertyDetail?.propertyType}
                        propertyCategory={userPropertyDetail?.propertyCategory}
                        location={userPropertyDetail?.location}
                        width={'70%'}
                      />
                      <Amount amount={userPropertyDetail?.amount} />
                      <PreviewFeatureAndAmenities
                        amenities={amenities}
                        specificPost={userPropertyDetail}
                      />
                    </>
                  )}
                </Box>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRight: '1px solid #E4E4E4',
                    pt: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '30px',
                      fontWeight: 600,
                      textAlign: 'center',
                      mt: 4,
                    }}
                  >
                    {VIEWPROPOSAL?.proposalDetails}
                  </Typography>
                  <PropertyDetail
                    heading={PROPOSAL?.propertyDetails}
                    subTitle={agentPropertyDetail?.title}
                    description={agentPropertyDetail?.description}
                    mb={'-15px'}
                  />
                  <Location
                    city={agentPropertyDetail?.city}
                    locationKeys={location}
                    purpose={agentPropertyDetail?.purpose}
                    propertyType={agentPropertyDetail?.propertyType}
                    propertyCategory={agentPropertyDetail?.propertyCategory}
                    location={agentPropertyDetail?.location}
                    width={'70%'}
                  />
                  <PreviewAmountAndFeature
                    area={agentPropertyDetail?.area}
                    amount={agentPropertyDetail?.amount}
                    areaUnit={agentPropertyDetail?.areaUnit}
                    areaAndAmount={areaAndAmount}
                    amountCurrency={agentPropertyDetail?.amountCurrency}
                    instalmentAvailable={
                      agentPropertyDetail?.instalmentAvailable
                    }
                    readyPossession={agentPropertyDetail?.readyPossession}
                  />

                  <BidMedia
                    title={images?.title}
                    media={agentPropertyDetail?.images}
                    mediaType={images?.type}
                  />
                  <BidMedia
                    title={videos?.title}
                    media={agentPropertyDetail?.videos}
                    mediaType={videos?.type}
                  />
                </Box>
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProposalDetail;
