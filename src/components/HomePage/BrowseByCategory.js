'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Typography } from '@mui/material';
import Heading from './Heading';



function BrowseByCategory({ data }) {
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
    <Container sx={{ pt: '90px', textAlign: 'center' }}>
      <Heading
        heading={'Browse By Category'}
        paragraph={
          'To browse & buy in your areas of interest. Look of properties by category'
        }
      />
      <Box sx={{ padding: '20px' }}>
        <Box sx={{ display: 'flex' }} >
          {data?.map((category) => (
            <Box key={category?.id} sx={{ padding: '20px', mx: '15px', border: '2px solid #fb631c' }}>
              <a href='#'><Box
                sx={{
                  background: '#fff',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <img src={category?.image} alt={category?.name} />
                <Typography variant='body1' sx={{ py: '8px' }}>
                  {category?.name}
                </Typography>
              </Box></a>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default BrowseByCategory;
