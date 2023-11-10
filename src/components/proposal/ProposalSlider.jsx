import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Box } from '@mui/material'; // Add this import
import Image from 'next/image';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
      1224: {
        slidesPerView: 2,
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
    <Swiper {...swiperSettings}>
      {media?.map((item, index) => (
        <SwiperSlide key={index}>
          <Box sx={{ pr: '50px' }}>
            {media === 'Proposal.images' ? (
              <Image height={400} width={450} src={item} alt="" />
            ) : (
              <video width={450} height={400} controls>
                <source src={item} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProposalSlider;
