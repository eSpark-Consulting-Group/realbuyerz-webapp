'use client';
import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Heading from './Heading';
import { FEATURED_HEADINGS } from '@/src/constants/Home';

const OurHomePartners = ({ data }) => {
  const [isReversed, setIsReversed] = useState(false);

  const lastIndex = 2;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: false,
    rtl: isReversed,
    afterChange: (current) => {
      if (current === lastIndex) {
        setIsReversed(true);
      }

      if (current === 0) {
        setIsReversed(false);
      }
    },
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container
      sx={{
        pt: { xs: '40px', sm: '50px', md: '60px', lg: '70px' },
        pb: { xs: '40px', md: '50px' },
        textAlign: 'center',
      }}
    >
      <Box sx={{ pb: '30px' }}>
        <Heading heading={FEATURED_HEADINGS.homePartners} />
      </Box>
      <Box
        sx={{
          padding: { xs: '10px', md: '20px' },
          paddingLeft: '0px',
          paddingRight: { xs: '25px', md: '20px' },
          background: '#f5f6fb',
        }}
      >
        <Slider {...sliderSettings}>
          {data?.map((partner, index) => (
            <Box
              key={index}
              sx={{
                width: '90%',
                maxWidth: { xs: '150px', md: '200px' },
                height: { xs: 'auto', md: '100px' },
                mx: 'auto',
              }}
            >
              <Box
                component={'img'}
                src={partner?.image}
                alt={partner?.name}
                title={partner?.name}
                sx={{
                  objectFit: 'contain',
                  width: '90%',
                  height: { xs: 'auto', md: '100px' },
                  maxWidth: { xs: '150px', md: '200px' },
                  mx: 'auto',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default OurHomePartners;
