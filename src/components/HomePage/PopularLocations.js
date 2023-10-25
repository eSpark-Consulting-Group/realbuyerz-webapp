'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Button, Container, Typography } from '@mui/material';
import Heading from './Heading';

function PopularLocations({ data }) {
  return (
    <Container sx={{ pt: '90px', textAlign: 'center' }}>
      <Heading
        heading={'Popular Locations'}
        paragraph={
          'To browse & buy in your areas of interest. Look of properties by category'
        }
      />
      <Box sx={{ padding: '20px' }}>

        <Button
          sx={{
            mx: '15px',
            fontWeight: 600, width: '116px',
            height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
            textAlign: 'start',
          }}
          variant='primary'>
          <Typography sx={{ color: '#fff' }}> Buyer</Typography>
        </Button>
        <Button
          sx={{
            mx: '15px',
            fontWeight: 600, width: '116px',
            height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
          }}
          variant='outlined'>
          <Typography sx={{ color: 'primary' }}>Seller</Typography>
        </Button>
      </Box>
    </Container >
  );
}

export default PopularLocations;
