import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

import LiveBiddingPropertiesList from './LiveBiddingPropertiesList';
import {
  ESTIMATE_RANGE,
  LOAD_MORE,
  SHOW_LESS,
  VIEW,
  VIEW_PROPSALS,
} from '@/app/constants/LiveBidding';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BiddingDetails = ({ Height, Agent_Ads }) => {
  console.log(Agent_Ads, 'agentAdPostingsx');
  const [showAllItems, setShowAllItems] = useState(false);
  const path = usePathname();

  const handleShowMoreClick = () => {
    setShowAllItems(true);
  };
  const handleShowLessClick = () => {
    setShowAllItems(false);
  };

  return (
    <Box className="scrollable" sx={{ height: Height }}>
      <>
        {Agent_Ads?.slice(0, showAllItems ? Agent_Ads.length : 3)?.map(
          (item, index) => (
            <Grid container xs={12} key={index}>
              <Box
                sx={{
                  width: '100%',
                  height: 'auto',
                  backgroundColor: '#EDF7FF',
                  border: '1px solid #AAD9FF',
                  borderRadius: '16px',
                  position: 'relative',
                  mb: 2.8,
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    height: '100%',
                    background: '#F6FBFF',
                    zIndex: -1,
                    left: 0,
                    width: { sm: '240px', md: '280px', lg: '319px' },
                    borderRadius: '40px 500px 500px 40px',
                    '@media (min-width:280px) and (max-width: 800px)': {
                      width: '100%',
                      height: '170px',
                      borderRadius: '40px 40px 100% 100%',
                    },
                  }}
                ></Box>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    padding: { xs: 4, sm: 6 },
                    '@media(min-width: 280px) and (max-width: 445px)': {
                      textAlign: 'center',
                    },
                  }}
                >
                  <Grid
                    item
                    md={8}
                    lg={6.5}
                    xl={`${path.includes('/user') ? 9 : 6.5}`}
                    sx={{
                      color: '#333',
                      textWrap: 'wrap',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        ml: 0.4,
                        fontSize: { xs: '21px' },
                      }}
                    >
                      {console.log(item, 'adInfomation')}
                      {item?.adInfomation?.title}
                    </Typography>
                    <Typography variant="body1" sx={{ ml: 0.5, mt: 1 }}>
                      {'Posted 39 minutes ago'}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    md={`${path.includes('/user') ? 3 : 4}`}
                    lg={`${path.includes('/user') ? 4 : 2.5}`}
                    xl={2}
                    sx={{
                      color: '#333',
                      fontSize: '15px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: 'normal',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: {
                          xs: 'start',
                          md: `${path.includes('/user') ? 'end' : 'start'}`,
                        },
                        '@media(min-width: 280px) and (max-width: 445px)': {
                          justifyContent: 'center',
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontSize: '14px', fontWeight: 600 }}
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
                        {`${item?.propertySizeAndPricing?.amount?.amount}`}
                      </Typography>
                    </Box>
                  </Grid>
                  {path.includes('/agent') ? (
                    <Grid item xs={12} sm={12} md={12} lg={3}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: {
                            sm: 'start',
                            lg: 'end',
                          },
                          '@media(min-width: 280px) and (max-width: 445px)': {
                            justifyContent: 'center',
                          },
                          pt: 0.5,
                          pr: 2,
                        }}
                      >
                        <Link href={`live-bidding/${item?.id}`}>
                          <Typography
                            sx={{
                              color: '#FB631C',
                              width: '86px',
                              height: '25px',
                              display: 'flex',
                              justifyContent: 'center',
                              border: '1px solid #FB631C',
                              backgroundColor: '#fff',
                              borderRadius: '15px',
                              alignItems: 'center',
                              fontSize: '12px',
                              fontWeight: 500,
                            }}
                          >
                            {VIEW}
                          </Typography>
                        </Link>
                      </Box>
                    </Grid>
                  ) : null}
                  <Box
                    sx={{
                      color: '#333',
                      px: '20px',
                      paddingTop: '40px',
                      paddingBottom: '20px',
                      '@media(min-width: 280px) and (max-width: 445px)': {
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
                      {item?.adInfomation?.description}
                    </Typography>
                  </Box>
                  <LiveBiddingPropertiesList
                    locationAndPurpose={item?.locationAndPurpose}
                    areaSize={item?.propertySizeAndPricing?.areaSize}
                  />
                  {path?.includes('/user') ? (
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: {
                            xs: 'start',
                            sm: 'flex-start',
                            md: 'flex-end',
                          },
                          '@media(min-width: 280px) and (max-width: 445px)': {
                            justifyContent: 'center',
                          },
                          px: { sm: '0px', md: '0px', lg: 6 },
                          pt: { xs: 2, sm: 0 },
                        }}
                      >
                        <Link href={`dashboard/${item?.id}`}>
                          <Typography
                            sx={{
                              width: '200px',
                              height: '42px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '50px',
                              border: '1px solid #D5E1D5',
                              background: '#FB631C',
                              color: '#FFF',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: 500,
                              lineHeight: 'normal',
                            }}
                          >
                            {VIEW_PROPSALS}
                          </Typography>
                        </Link>
                      </Box>
                    </Grid>
                  ) : null}
                </Grid>
                <Box
                  sx={{
                    position: 'absolute',
                    height: '100%',
                    background: '#F6FBFF',
                    zIndex: -1,
                    top: 0,
                    right: 0,
                    width: { sm: '240px', md: '280px', lg: '319px' },
                    borderRadius: '500px 40px 40px 500px',
                    '@media (min-width:280px) and (max-width: 800px)': {
                      top: 'auto',
                      bottom: 0,
                      width: '100%',
                      height: '170px',
                      borderRadius: '100% 100% 30px 30px',
                    },
                  }}
                ></Box>
              </Box>
            </Grid>
          )
        )}
        {!showAllItems ? (
          <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Button
              onClick={handleShowMoreClick}
              sx={{
                margin: 'auto',
                color: '#1176AD',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24.2px',
              }}
            >
              {LOAD_MORE}
            </Button>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Button
              onClick={handleShowLessClick}
              sx={{
                margin: 'auto',
                color: '#1176AD',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '24.2px',
              }}
            >
              {SHOW_LESS}
            </Button>
          </Box>
        )}
      </>
    </Box>
  );
};

export default BiddingDetails;
