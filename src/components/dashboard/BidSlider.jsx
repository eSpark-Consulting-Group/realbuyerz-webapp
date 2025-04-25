'use client';
import Image from 'next/image';

import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { bidSliderSetting } from '@/src/utils/sliderSettings';
import { convertToEmbedUrl } from '@/src/utils/property/propertyUtils';

const BidSlider = ({ media, mediaType }) => {
  return (
    <>
      <Swiper {...bidSliderSetting}>
        {media?.map((item, index) => (
          <SwiperSlide key={index}>
            {mediaType === 'images' ? (
              <Box sx={{ px: '10px' }}>
                <Image
                  height={200}
                  width={250}
                  src={item ? item?.url : '/images/PropertyImg.png'}
                  alt={'Images'}
                  className="reponsiveimage"
                />
              </Box>
            ) : mediaType === 'videos' ? (
              <Box sx={{ px: '10px' }}>
                {item?.url ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={convertToEmbedUrl(item?.url)}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video style={{ width: '100%', height: '100%' }} controls>
                    <track
                      src="captions.vtt"
                      kind="captions"
                      label="English"
                      default
                    />
                  </video>
                )}
              </Box>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BidSlider;
