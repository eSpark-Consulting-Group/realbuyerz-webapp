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
import Image from 'next/image';

function HeroSlider({
  spaceBetween,
  effect,
  navigation,
  pagination,
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
        className="hero_slider"
      >
        {SlidesData?.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image layout="fill" objectFit="cover" src={slide.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HeroSlider;
