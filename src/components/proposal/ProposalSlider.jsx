import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import MediaImage from './MediaImage';
import MediaVideo from './MediaVideo';
import SwiperCore from 'swiper';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProposalSlider = ({ media, sldierType }) => {
  const swiperSettings = {
    spaceBetween: 20,
    slidesPerView: 3, // Show 3 slides at a time
    loop: true, // Enable infinite loop
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
    <>
      <Swiper {...swiperSettings}>
        {media?.map((image, index) => (
          <SwiperSlide key={index}>
            {sldierType == 'image' ? (
              <MediaImage data={image} />
            ) : (
              <MediaVideo data={image} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProposalSlider;
