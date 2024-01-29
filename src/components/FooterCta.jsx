'use client';
import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const FooterCta = ({ data }) => {
  return (
    <Box
      sx={{
        background: '#F5F6FB',
        px: '15%',
        py: {
          xs: '20px', // Adjust padding for xs screen
          sm: '40px', // Adjust padding for sm screen
          md: '40px',
        },
        margin: 'auto', // Center the container
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          sx={{
            justifyContent: 'center',
            alignSelf: 'center',
            py: {
              xs: '20px',
              sm: '40px', // Adjust padding for sm screen
              md: '40px',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontSize: '16px',
              fontWeight: '400',
              pr: {
                xs: '0',
                md: '0px',
              },
            }}
          >
            {data?.description}
          </Typography>
          <Grid container sx={{ display: 'flex', gap: '30px' }}>
            {data?.features?.map((feature, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={2.5}
                sx={{ display: 'flex', gap: '10px', py: '15px' }}
              >
                <Image src={feature.icon} height={30} width={30} alt={''} />
                <Box>
                  <Typography
                    sx={{
                      color: '#1176ad',
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Bounce direction="left" triggerOnce duration={200}>
            <Box container sx={{ display: 'flex', pt: '20px', gap: '10px' }}>
              {data?.appIcons?.map((appicon, index) => (
                <Link
                  href={appicon.link}
                  key={index}
                  item
                  xs={3}
                  sx={{ display: 'flex', gap: '20px' }}
                >
                  <Image
                    src={appicon.icon}
                    alt={appicon.title}
                    width={145}
                    height={40}
                  />
                </Link>
              ))}
            </Box>
          </Bounce>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{
            py: {
              xs: '20px',
              sm: '40px', // Adjust padding for sm screen
              md: '0px',
            },
          }}
        >
          <Bounce direction="right" triggerOnce duration={300}>
            <Box>
              <Image src={data.appImage} alt="App" width={350} height={400} />
            </Box>
          </Bounce>
        </Grid>
      </Grid>
      <Grid container sx={{ py: '28px' }}>
        <Grid item xs={12} md={8.5}>
          <Typography variant="body1">
            {data?.paymentMethodsDescription}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3.5}
          sx={{
            display: 'flex',
            gap: '20px',
            py: {
              xs: '10px',
              md: '0px',
            },
          }}
        >
          {data?.paymentMethods?.map((method, index) => (
            <Box key={index}>
              <Image src={method.icon} alt={method.alt} width={35} height={7} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterCta;
