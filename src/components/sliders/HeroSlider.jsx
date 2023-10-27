'use client';
import React from 'react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../../../app/globals.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

function HeroSlider({
  spaceBetween,
  effect,
  navigation,
  pagination,
  autoplay,
  delay,
  SlidesData,
}) {
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        effect={effect}
        navigation={navigation}
        pagination={{
          clickable: pagination,
        }}
        autoplay={{ delay: delay }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className='hero_slider'>
        {SlidesData?.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroSlider;
