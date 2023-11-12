import React from 'react';
import { Grid, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';

import LiveBiddingTitle from './LiveBiddingTitle';
import LiveBiddingPropertiesList from './LiveBiddingPropertiesList';

import { MAIN_TITLE, VIEW } from '@/app/constants/LiveBidding';

const BiddingDetails = ({ liveBiddingData }) => {
  return (
    <Box className="scrollable">
      <LiveBiddingTitle title={MAIN_TITLE} />
      {liveBiddingData?.liveBidding?.map((item, index) => (
        <Grid container spacing={2} xs={12} key={index}>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              marginLeft: 3,
              backgroundColor: '#EDF7FF',
              border: '1px solid #AAD9FF',
              borderRadius: '16px',
              marginTop: '30px',
              position: 'relative',
              zIndex: 1,
              marginBottom: '20px',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: { sm: '260px', lg: '300px' },
                height: '100%',
                background: '#F6FBFF',
                zIndex: -1,
                marginLeft: '0px',
                borderRadius: '16px 200px 200px 16px',
                display: { xs: 'none', sm: 'block' },
              }}
            ></Box>
            <Grid
              container
              spacing={2}
              sx={{
                padding: 6,
              }}
            >
              <Grid
                item
                lg={7}
                md={4}
                sx={{
                  color: '#333',
                }}
              >
                <Typography variant="h4" sx={{ ml: 0.4 }}>
                  {item?.title}
                </Typography>
                <Typography variant="body1" sx={{ ml: 0.5 }}>
                  {item?.postedTime}
                </Typography>
              </Grid>
              <Grid
                item
                lg={3}
                md={4}
                sx={{
                  textAlign: 'right',
                  alignContent: 'end',
                  color: '#333',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  paddingRight: '40px',
                }}
              >
                <Box>
                  <Typography variant="body1">
                    Est. Range:{' '}
                    <span style={{ fontWeight: 'bold', color: '#333333' }}>
                      {item.estRange}
                    </span>
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2} md={4} sm={12}>
                <Box
                  sx={{
                    paddingLeft: { sm: '0px', md: '80px', lg: '85px' },
                  }}
                >
                  <Button
                    sx={{
                      border: '1px solid #FB631C',
                      borderRadius: '90px',
                      alignItems: 'end',
                      padding: '0px',
                    }}
                  >
                    {VIEW}
                  </Button>
                </Box>
              </Grid>
              <Box
                sx={{
                  color: '#333',
                  paddingRight: '20px',
                  paddingLeft: '20px',
                  paddingTop: '40px',
                  paddingBottom: '20px',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: '500',
                    fontSize: '13.8px',
                    lineHeight: '14.52px',
                    fontFamilly: 'inter',
                    mb: 1,
                  }}
                >
                  {item?.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: '500',
                    fontSize: '13.8px',
                    lineHeight: '14.52px',
                    fontFamilly: 'inter',
                  }}
                >
                  {item?.description}
                </Typography>
              </Box>
              <LiveBiddingPropertiesList list={item.list} />
            </Grid>
            <Box
              sx={{
                position: 'absolute',
                width: { sm: '260px', lg: '300px' },
                height: '100%',
                background: '#F6FBFF',
                zIndex: -1,
                marginLeft: '0px',
                borderRadius: '200px 16px  16px 200px',
                top: '0',
                right: '0px',
                display: { xs: 'none', sm: 'block' },
              }}
            ></Box>
          </Box>
        </Grid>
      ))}
    </Box>
  );
};

export default BiddingDetails;
