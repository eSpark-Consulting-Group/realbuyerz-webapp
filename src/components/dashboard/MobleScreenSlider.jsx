import Image from 'next/image';

import { Button, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperArrow from './SwiperArrow';

import { mediaSliderSetting } from '@/src/utils/sliderSettings';

const MobleScreenSlider = ({ imageSlider, modalWidth, handleClose }) => {
  return (
    <Box id="slider" sx={{ position: 'relative' }}>
      <Swiper {...mediaSliderSetting} className="mySwiper">
        {imageSlider?.map((image, index) => (
          <Box key={index}>
            <SwiperSlide
              sx={{
                overflow: 'hidden',
              }}
            >
              <Box
                style={{
                  width: `${modalWidth}px`,
                  height: 'auto',
                  padding: '40px',
                }}
              >
                <Image
                  src={image?.url}
                  width={1000}
                  height={1000}
                  alt={'slide_image'}
                  layout="responsive"
                />
              </Box>
            </SwiperSlide>
          </Box>
        ))}

        <SwiperArrow
          className="custom-swiper-button-next"
          direction="next"
          right={{ xs: 5, sm: '10%' }}
          src="/images/modalNextArrow.svg"
          height={30}
          width={30}
        />

        <SwiperArrow
          className="custom-swiper-button-prev"
          direction="prev"
          left={{ xs: 5, sm: '10%' }}
          src="/images/modalPrevArrow.svg"
          width={30}
          height={30}
        />

        <Box
          sx={{
            position: 'absolute',
            right: { xs: -10, sm: '8%' },
            top: 38,
            zIndex: 1,
            cursor: 'pointer',
          }}
        >
          <Button
            onClick={handleClose}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Image
              src={'/images/biddings/images/close.png'}
              width={30}
              height={30}
              alt={'close'}
            />
          </Button>
        </Box>
      </Swiper>
    </Box>
  );
};

export default MobleScreenSlider;
