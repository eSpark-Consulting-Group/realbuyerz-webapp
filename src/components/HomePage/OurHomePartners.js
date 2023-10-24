'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Typography } from '@mui/material';
import Heading from './Heading';

const partners = [
  {
    id: 1,
    image: '/images/partners/partners1.svg',
    name: 'partners 1',
  },
  {
    id: 2,
    image: '/images/partners/partners2.svg',
    name: 'partners 2',
  },
  {
    id: 3,
    image: '/images/partners/partners3.svg',
    name: 'partners 3',
  },
  {
    id: 4,
    image: '/images/partners/partners4.svg',
    name: 'partners 4',
  },
  {
    id: 5,
    image: '/images/partners/partners5.svg',
    name: 'partners 5',
  },
  {
    id: 6,
    image: '/images/partners/partners6.svg',
    name: 'partners 6',
  },
];
function OurHomePartners() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        pt: '90px',
        textAlign: 'center',
        backgroundImage: `url("/images/bgs/featured-properties-background.png")`,
      }}>
      <Heading heading={'Our Home Partners'} />
      <Box sx={{ padding: '20px' }}>
        <Slider {...sliderSettings}>
          <Box sx={{ padding: '25px' }}>
            {partners.map((partners) => (
              <Box key={partners.id}
                sx={{
                  background: '#fff',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <img src={partners.image} alt={partners.name} />
                <Typography variant='body1' sx={{ py: '8px' }}>
                  {partners.name}
                </Typography>
              </Box>
            ))}{' '}
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}

export default OurHomePartners;
