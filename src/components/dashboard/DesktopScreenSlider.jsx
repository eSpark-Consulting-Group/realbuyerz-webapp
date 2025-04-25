'use client';
import Image from 'next/image';

import { Button, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperArrow from './SwiperArrow';

const DesktopScreenSlider = ({ imageSlider, handleClose }) => {
  return (
    <Box
      className="modal-slider"
      sx={{ textAlign: 'center', position: 'relative' }}
    >
      <Button
        onClick={handleClose}
        sx={{ position: 'absolute', right: -60, top: 20, cursor: 'pointer' }}
      >
        <Image
          src={'/images/biddings/images/close.png'}
          width={30}
          height={30}
          alt={'close'}
        />
      </Button>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {imageSlider?.map((image, index) => (
          <Box key={index}>
            <SwiperSlide>
              <Image
                src={image?.url}
                width={1000}
                height={1000}
                alt={'slide_image'}
                layout="responsive"
              />
            </SwiperSlide>
          </Box>
        ))}
      </Swiper>

      <SwiperArrow
        className="custom-swiper-button-next"
        direction="next"
        right={-60}
        src="/images/modalNextArrow.svg"
        height={40}
      />

      <SwiperArrow
        className="custom-swiper-button-prev"
        direction="prev"
        left={-60}
        src="/images/modalPrevArrow.svg"
        height={40}
      />
    </Box>
  );
};

export default DesktopScreenSlider;
