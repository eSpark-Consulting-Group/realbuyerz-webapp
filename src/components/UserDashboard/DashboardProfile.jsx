import { Button, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

const DashboardProfile = ({ DASHBOARD_DATA }) => {
  return (
    <>
      {DASHBOARD_DATA.map((item, index) => (
        <>
          <Box
            key={index}
            sx={{
              padding: '44px 54px 44px 54px',
            }}
          >
            <Grid container>
              <Grid item lg={2} sx={{ position: 'relative' }}>
                <Image
                  src={'/images/Profile.png'}
                  width={156}
                  height={159}
                  alt="profile"
                />

                <Box
                  sx={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 112,
                    right: 11,
                    p: 0.5,
                  }}
                >
                  <Box
                    sx={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#18DD00',
                      alignContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item lg={10} sx={{ pl: 2 }}>
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box
                      sx={
                        {
                          // py: 1
                        }
                      }
                    >
                      <Typography
                        sx={{
                          color: '#126FAA',
                          fontFamily: 'Inter',
                          fontSize: '18px',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: 'normal',
                          py: 0.3,
                        }}
                      >
                        {item?.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#757474',
                          fontFamily: 'Inter',
                          fontSize: '15px',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: 'normal',
                        }}
                      >
                        {item?.location}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#000',
                          fontFamily: 'Inter',
                          fontSize: '15px',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: 'normal',
                          py: 0.3,
                        }}
                      >
                        {item?.amount}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      //   alignItems: 'center',
                    }}
                  >
                    <Button
                      variant="primary"
                      sx={{
                        width: '200px',
                        height: '42px',
                        borderRadius: '50px',
                        border: '1px solid #FB631C',
                      }}
                    >
                      View
                    </Button>
                  </Grid>
                  <Box
                    sx={{
                      mt: 1.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#000',
                        //   fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: '18.15px',
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Divider />
        </>
      ))}
    </>
  );
};

export default DashboardProfile;
