'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Box } from '@mui/material';
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination, A11y]);

const ProposalSlider = ({ media, mediaType }) => {
  const swiperSettings = {
    spaceBetween: 20,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperSettings}>
        {media?.map((item, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ pr: '50px' }}>
              {mediaType === 'images' ? (
                <Image height={200} width={250} src={item} alt="" />
              ) : mediaType === 'videos' ? (
                <Image height={200} width={250} src={item} alt="" />
              ) : null}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProposalSlider;
