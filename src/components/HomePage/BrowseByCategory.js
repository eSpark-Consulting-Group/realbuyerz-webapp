'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Typography } from '@mui/material';
import Heading from './Heading';

const categories = [
  {
    id: 1,
    image: '/images/categories/category1.svg',
    name: 'Category 1',
  },
  {
    id: 2,
    image: '/images/categories/category2.svg',
    name: 'Category 2',
  },
  {
    id: 3,
    image: '/images/categories/category3.svg',
    name: 'Category 3',
  },
  {
    id: 4,
    image: '/images/categories/category4.svg',
    name: 'Category 4',
  },
  {
    id: 5,
    image: '/images/categories/category5.svg',
    name: 'Category 5',
  },
  {
    id: 6,
    image: '/images/categories/category6.svg',
    name: 'Category 6',
  },
  {
    id: 7,
    image: '/images/categories/category7.svg',
    name: 'Category 7',
  },
  {
    id: 8,
    image: '/images/categories/category8.svg',
    name: 'Category 8',
  },
];

function BrowseByCategory() {
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
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <Box key={category.id} sx={{ padding: '25px' }}>
              <Box
                sx={{
                  background: '#fff',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <img src={category.image} alt={category.name} />
                <Typography variant='body1' sx={{ py: '8px' }}>
                  {category.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default BrowseByCategory;
