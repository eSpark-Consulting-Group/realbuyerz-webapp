'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Box, Pagination } from '@mui/material';
import Image from 'next/image';
import { A11y, Navigation } from 'swiper/modules';

const BidSlider = ({ media, mediaType }) => {
  const swiperSettings = {
    // spaceBetween: 20,
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
    module: [Navigation, Pagination, A11y],
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
      280: {
        slidesPerView: 1,
      },
    },
  };
  console.log('mediaType', mediaType);
  return (
    <>
      <Swiper {...swiperSettings}>
        {media?.map((item, index) => (
          <SwiperSlide key={index}>
            {mediaType === 'images' ? (
              <Box sx={{ px: '10px' }}>
                <Image
                  height={200}
                  width={250}
                  src={item}
                  alt=""
                  className="reponsiveimage"
                />
              </Box>
            ) : mediaType === 'videos' ? (
              <Box sx={{ px: '10px' }}>
                {' '}
                <Image
                  height={200}
                  width={250}
                  src={item}
                  alt=""
                  className="reponsiveimage"
                />
              </Box>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BidSlider;
