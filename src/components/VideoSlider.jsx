import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const VideoSlider = ({ videos, modalWidth, modalHeight }) => {
  return (
    <Box id="slider" sx={{ position: 'relative' }}>
      <Swiper
        className="mySwiper"
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {videos?.map((video, index) => (
          <Box key={index}>
            <SwiperSlide
              sx={{
                overflow: 'hidden',
              }}
              key={index}
            >
              <Box
                style={{
                  width: `${modalWidth}px`,
                  height: `${modalHeight}px`,
                  borderRadius: '30px',
                }}
              >
                <img
                  src={video}
                  alt="slide_image"
                  layout="responsive"
                  style={{
                    borderRadius: '30px',
                  }}
                />
              </Box>
            </SwiperSlide>
          </Box>
        ))}
        <Box
          className=" custom-swiper-button-next"
          sx={{
            position: 'absolute',
            right: 45,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Image
            src={'/images/modalNextArrow.svg'}
            width={40}
            height={60}
            alt="icon"
          />
        </Box>
        <Box
          className=" custom-swiper-button-prev"
          sx={{
            position: 'absolute',
            left: 45,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Image
            src={'/images/modalPrevArrow.svg'}
            width={40}
            height={60}
            alt="icon"
          />
        </Box>
      </Swiper>
    </Box>
  );
};

export default VideoSlider;
