'use client';
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Heading from './Heading';
import Image from 'next/image';
import { Box, Container } from '@mui/material';

function OurHomePartners({ data }) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 3 seconds per slide
    arrows: false, // Hide arrows
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
    <Container sx={{ pt: '90px', pb: '50px', textAlign: 'center' }}>
      <Heading heading={'Our Home Partners'} />
      <Box sx={{ padding: '20px', background: '#f5f6fb' }}>
        <Slider {...sliderSettings}>
          {data?.map((partner) => (
            <Box key={partner?.id} sx={{ padding: '10px' }}>
              <Box
                sx={{
                  background: '#fff',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <a href="/">
                  <Image
                    src={partner?.image}
                    alt={partner?.name}
                    title={partner?.name}
                    width={400}
                    height={100}
                  />
                </a>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default OurHomePartners;
