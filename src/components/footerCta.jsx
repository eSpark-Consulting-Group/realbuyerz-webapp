'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

function FooterCta({ data }) {
  return (
    <Box
      sx={{
        background: '#F5F6FB',
        px: '15%',
        py: {
          xs: '40px',
          md: '0px',
        },
      }}>
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
              md: '40px',
            },
          }}>
          <Typography
            variant='body1'
            sx={{
              color: '#666',
              fontSize: '16px',
              fontWeight: '400',
              pr: {
                xs: '0',
                md: '0px',
              },
            }}>
            {data?.description}
          </Typography>
          <Grid container sx={{ display: 'flex', gap: '30px' }}>
            {data?.features.map((feature, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={2.5}
                sx={{ display: 'flex', gap: '10px', py: '15px' }}>
                <img src={feature.icon} height={'30px'} width={'30px'} />
                <Box>
                  <Typography
                    sx={{
                      color: '#1176ad',
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: '400',
                    }}>
                    {feature.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box container sx={{ display: 'flex', pt: '20px', gap: '10px' }}>
            {data.appIcons.map((appicon, index) => (
              <Link
                href={appicon.link}
                key={index}
                item
                xs={3}
                sx={{ display: 'flex', gap: '20px' }}>
                <img
                  src={appicon.icon}
                  style={{ maxWidth: '100%', height: 'auto' }}
                  alt={appicon.title}
                />
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{
            py: {
              xs: '20px',
              md: '0px',
            },
          }}>
          <Box>
            <img src={data.appImage} alt='App' />
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ py: '28px' }}>
        <Grid item xs={12} md={8.5}>
          <Typography variant='body1'>
            {data.paymentMethodsDescription}
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
          }}>
          {data.paymentMethods.map((method, index) => (
            <Box key={index}>
              <img src={method.icon} alt={method.alt} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterCta;
