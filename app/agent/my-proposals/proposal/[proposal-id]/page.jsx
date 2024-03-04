'use client';
import { Box, Typography, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BackToDashboard from '@/src/components/UserDashboard/BackToDashboard';
import { ProposalsPage } from '@/app/constants/postRequest';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import PropertyDetail from '@/src/components/PostListing/preview/PropertyDetail';
import { previewData } from '@/app/constants/postListing';
import Location from '@/src/components/PostListing/preview/Location';
import PreviewAmountAndFeature from '@/src/components/PostListing/preview/PreviewAmountAndFeature';
import PreviewFeatureAndAmenities from '@/src/components/PostListing/preview/PreviewFeatureAndAmenities';
import UserProfileImage from '@/src/components/UserDashboard/UserProfileImage';
import { postListingAdCard } from '@/app/constants/postListing';

import NotFoundSection from '@/src/components/Global/NotFoundSection';
import BidMedia from '@/src/components/Biddings/BidMedia';
import { PROPOSAL } from '@/app/constants/Proposals';
import Amount from '@/src/components/PostListing/preview/Amount';
import LiveBiddingPropertiesList from '@/src/components/Biddings/LiveBiddingPropertiesList';
import { ESTIMATE_RANGE } from '@/app/constants/LiveBidding';
import { VIEWPROPOSAL } from '@/app/constants/ViewProposal';

const Page = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const { image, back_Proposal_Button } = ProposalsPage;
  const { areaAndAmount, location, amenities, images, videos } = previewData;
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const specificPost = userPostings.find((item) => id == item?.adId);
  const loginAgents = useSelector((state) => state?.loginAgents);
  const findAgent = loginAgents?.find(
    (agent) => agent?.id == specificPost?.agentId
  );
  const ads = useSelector((state) => state?.postRequestAds?.userPostings);
  const handleClick = () => {
    setShowMoreContent(!showMoreContent);
  };
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
          {specificPost ? (
            <Box
              sx={{
                background: '#fff',
                borderRadius: '10px',
                mt: '16px',
                border: '1px solid #E4E4E4',
              }}
            >
              <Grid container>
                <Grid item xs={12} md={12} lg={12} xl={12}>
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
                        p: '15px',
                        mt: '10px',
                      }}
                    >
                      {VIEWPROPOSAL?.userRequest}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2.5,
                        flexDirection: { xs: 'column', md: 'column' },
                        p: 4,
                        pb: 5,
                        borderBottom: '1px solid #E4E4E4',
                      }}
                    >
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
                            image={findAgent?.profileImage || image}
                            isActive={
                              findAgent?.status == 'Active' ? true : false
                            }
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
                              {/* {`${findAgent?.firstName || ''} ${findAgent?.lastName || ''}`} */}
                              John Doe
                            </Typography>

                            <Typography>
                              <LocationOnIcon
                                sx={{ fontSize: 28, color: '#757474' }}
                              />
                              {/* {`${findAgent?.city || ''} ${findAgent?.country || ''}`}{' '} */}
                              Lahore,Pakistan - 3:16pm local time
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ ml: { xs: 0, md: 0.5 } }}
                            >
                              {'Posted 39 minutes ago'}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: '15px', md: '20px' },
                            color: '#333333',
                            fontWeight: 700,
                            marginLeft: { xs: '0px', md: '65px' },
                            marginRight: { xs: '10px', md: '0px' },

                            '@media (min-width: 400px) and (max-width: 900px)':
                              {
                                mt: '12px',
                              },
                            '@media (min-width: 280px) and (max-width: 800px)':
                              {
                                marginLeft: '65px',
                              },
                            '@media (min-width: 280px) and (max-width: 350px)':
                              {
                                textAlign: 'center',
                                fontSize: '10px',
                              },
                          }}
                        >
                          {VIEWPROPOSAL?.apartment}
                        </Typography>
                      </Box>
                      {ads
                        .filter((item, index) => index === 0)
                        .map((item, index) => (
                          <Grid container xs={12} key={index}>
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
                                  {item?.description}
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
                                  city={item?.city}
                                  status={item?.purpose}
                                  location={'Gulshan-iqbal'}
                                  noConnects={false}
                                  cardKeys={postListingAdCard}
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
                                    {`${item?.amount}`}
                                  </Typography>
                                </Box>
                              </Box>
                            </Grid>
                          </Grid>
                        ))}
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
                          city={specificPost?.city}
                          locationKeys={location}
                          purpose={specificPost?.purpose}
                          propertyType={specificPost?.propertyType}
                          proportyCategory={specificPost?.proportyCategory}
                          location={specificPost?.location}
                          width={'70%'}
                        />
                        <Amount />
                        <PreviewFeatureAndAmenities
                          amenities={amenities}
                          bedrooms={specificPost?.bedrooms}
                          bathrooms={specificPost?.bathrooms}
                        />
                      </>
                    )}
                    <Typography
                      sx={{
                        fontSize: '30px',
                        fontWeight: 600,
                        textAlign: 'center',
                        mt: '55px',
                      }}
                    >
                      {VIEWPROPOSAL?.proposalDetails}
                    </Typography>
                    <PropertyDetail
                      heading={PROPOSAL?.propertyDetails}
                      subTitle={specificPost?.title}
                      description={specificPost?.description}
                      mb={'-15px'}
                    />
                    <Location
                      city={specificPost?.city}
                      locationKeys={location}
                      purpose={specificPost?.purpose}
                      propertyType={specificPost?.propertyType}
                      proportyCategory={specificPost?.proportyCategory}
                      location={specificPost?.location}
                      width={'70%'}
                    />
                    <PreviewAmountAndFeature
                      area={specificPost?.area}
                      amount={specificPost?.amount}
                      areaUnit={specificPost?.areaUnit}
                      areaAndAmount={areaAndAmount}
                      amountCurrency={specificPost?.amountCurrency}
                      instalmentAvailable={specificPost?.instalmentAvailable}
                      readyPossession={specificPost?.readyPossession}
                    />

                    <BidMedia
                      title={images?.title}
                      media={specificPost?.proposals[0]?.images}
                      mediaType={images?.type}
                    />
                    <BidMedia
                      title={videos?.title}
                      media={specificPost?.proposals[0]?.videos}
                      mediaType={videos?.type}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ) : (
            <NotFoundSection
              heading={VIEWPROPOSAL?.sorry}
              message={VIEWPROPOSAL?.message}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
