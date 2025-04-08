'use client';
import React from 'react';
import Image from 'next/image';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Container } from '@mui/material';

import Heading from './Heading';

import { homePartnersSliderSetting } from '@/src/utils/sliderSettings';

import { FEATURED_HEADINGS } from '@/src/constants/Home';

const OurHomePartners = ({ data }) => {
  return (
    <Container
      sx={{
        pt: { xs: '40px', sm: '50px', md: '60px', lg: '70px' },
        pb: { xs: '40px', md: '50px' },
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          pb: '30px',
        }}
      >
        <Heading heading={FEATURED_HEADINGS.homePartners} />
      </Box>
      <Box sx={{ padding: '20px', background: '#f5f6fb' }}>
        <Slider {...homePartnersSliderSetting}>
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
                <Image
                  src={partner?.image}
                  alt={partner?.name}
                  title={partner?.name}
                  width={400}
                  height={100}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default OurHomePartners;
