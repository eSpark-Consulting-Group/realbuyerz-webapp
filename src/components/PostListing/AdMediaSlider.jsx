'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Box, Pagination } from '@mui/material';
import { A11y, Navigation } from 'swiper/modules';

const AdMediaSlider = ({ media, mediaType }) => {
  const swiperSettings = {
    // loop: true,
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
      1920: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      960: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      700: {
        slidesPerView: 2,
      },
      280: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperSettings}>
        {mediaType == 'images' &&
          media?.images?.map((image, i) => (
            <SwiperSlide key={i}>
              <Box
                component={'img'}
                src={URL?.createObjectURL(image)}
                alt={`Uploaded ${i}`}
                quality={'100'}
                sx={{
                  minWidth: '200px',
                  minHeight: '160px',
                  maxWidth: '240px',
                  maxHeight: '200px',
                  width: 'auto',
                  height: 'auto',
                  '@media(min-width:280px) and (max-width:400px)': {
                    mx: 'auto',
                  },
                }}
              />
            </SwiperSlide>
          ))}
        {mediaType == 'videos' &&
          media?.videos?.map((video, i) => (
            <SwiperSlide key={i}>
              <video
                style={{ width: '300px', height: '200px' }}
                key={i}
                controls
              >
                <track
                  src="captions.vtt"
                  kind="captions"
                  label="English"
                  default
                />
                <source src={URL.createObjectURL(video)} />
              </video>
              {/* <Box
              component={'img'}
              src={URL?.createObjectURL(video)}
              alt={`Uploaded ${i}`}
              quality={'100'}
              sx={{ minWidth: '200px', minHeight: '160px', maxWidth: '240px', maxHeight: '200px', width: 'auto', height: 'auto', '@media(min-width:280px) and (max-width:400px)': { mx: 'auto' }, }}
            /> */}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default AdMediaSlider;
