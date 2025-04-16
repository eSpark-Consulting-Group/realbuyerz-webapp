'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

const Slider = ({ propertySlider }) => {
  return (
    <Swiper
      effect={'fade'}
      navigation={true}
      modules={[EffectFade, Navigation]}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '15px',
      }}
    >
      {propertySlider?.images.slice(1).map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            component={'img'}
            src={item}
            // src={
            //   'https://www.bankrate.com/2022/04/14092711/what-is-tangible-personal-property.jpg'
            // }
            alt={`Slide ${index + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '20px',
              maxHeight: { xs: 'auto', md: '550px' },
              // minHeight: { xs: 'auto', md: '550px' },
              objectPosition: 'center',
              overflowX: 'auto',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Slider;
