// SwiperSlider.js
import React from 'react';
import { Container, Grid } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Navigation } from 'swiper/modules';

const SwiperSlider = () => {
  const swiperParams = {
    slidesPerView: 3, // Number of slides on lg screens
    spaceBetween: 20, // Adjust the space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 2, // Number of slides on md screens
      },
      600: {
        slidesPerView: 1, // Number of slides on sm screens
      },
    },
  };

  return (
      <Swiper {...swiperParams}>
        <SwiperSlide>
          <Grid container justifyContent="center">
            {` Your content for the first slide `}
            <Grid item>
              {` Your content for the first slide `}
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container justifyContent="center">
            {` Your content for the second slide `}
            <Grid item>
              {` Your content for the second slide `}
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container justifyContent="center">
            {` Your content for the third slide `}
            <Grid item>
              {` Your content for the third slide `}
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>
  );
};

export default SwiperSlider;
