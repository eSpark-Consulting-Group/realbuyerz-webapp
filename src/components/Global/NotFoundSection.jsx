'use client';
import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { NOT_FOUND } from '@/app/constants/Global';

const NotFoundSection = ({ heading, message, link, goBackTo }) => (
  <Box
    sx={{
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Grid
      container
      xs={12}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '20px',
        background: '#FFF',
      }}
    >
      <Grid item xs={12}>
        <Box sx={{ px: '50px', py: '30px', textAlign: 'center' }}>
          <Box py={'20px'}>
            <Image
              src={'/images/404/4042.gif'}
              height={500}
              width={500}
              alt=""
            />
          </Box>
          <Box pt={'20px'}>
            <Typography
              variant="h1"
              sx={{
                color: '#333',
                fontWeight: '500',
              }}
            >
              {heading || NOT_FOUND?.pageTitle}
            </Typography>
          </Box>
          <Box pb={'20px'}>
            <Typography
              variant="h4"
              sx={{
                color: '#333',
                fontWeight: '400',
              }}
            >
              {message || NOT_FOUND?.errorDescription}
            </Typography>
          </Box>
          <Box>
            <Link href={link || NOT_FOUND?.backButtonLink}>
              <Button
                variant="primary"
                type="button"
                sx={{
                  width: 'auto',
                  height: { xs: '35px', sm: '45px' },
                  textTransform: 'uppercase',
                  borderRadius: '5px',
                  '&:hover': { color: '#fff' },
                }}
              >
                <ArrowBackIosIcon />
                {goBackTo || NOT_FOUND?.backButtonLabel}
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default NotFoundSection;
