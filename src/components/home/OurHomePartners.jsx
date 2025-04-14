'use client';
import { useState } from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Container } from '@mui/material';

import Heading from './Heading';

import { homePartnersSliderSetting } from '@/src/utils/sliderSettings';

import { FEATURED_HEADINGS } from '@/src/constants/Home';

const OurHomePartners = ({ data }) => {
  const [isReversed, setIsReversed] = useState(false);

  const lastIndex = 2;

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
          background: '#f5f6fb',
        }}
      >
        <Slider
          {...homePartnersSliderSetting(isReversed, setIsReversed, lastIndex)}
        >
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
