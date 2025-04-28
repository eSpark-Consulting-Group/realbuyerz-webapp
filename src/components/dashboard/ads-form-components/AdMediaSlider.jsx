'use client';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { convertToEmbedUrl } from '@/src/utils/property/propertyUtils';
import { adMediaSliderSetting } from '@/src/utils/sliderSettings';

const AdMediaSlider = ({ media, mediaType, form }) => {

  return (
    <>
      <Swiper {...adMediaSliderSetting}>
        {mediaType == 'images' &&
          media?.map((image, i) => (
            <SwiperSlide key={i}>
              <Box
                component={'img'}
                src={
                  form
                    ? URL?.createObjectURL(image)
                    : image
                      ? image?.url
                      : '/images/PropertyImg.png'
                }
                alt={`Uploaded ${i}`}
                quality={'100'}
                sx={{
                  minWidth: '300px',
                  minHeight: '200px',
                  maxWidth: '300px',
                  maxHeight: '200px',
                  width: 'auto',
                  height: 'auto',
                  '@media(min-width:350px) and (max-width:450px)': {
                    mx: 'auto',
                  },
                  '@media(min-width:280px) and (max-width:349px)': {
                    maxWidth: '100%',
                    minWidth: '100%',
                    minHeight: '160px',
                    maxHeight: '160px',
                    mx: 'auto',
                  },
                }}
              />
            </SwiperSlide>
          ))}

        {mediaType == 'videos' &&
          media?.map((video, i) => (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  width: '300px',
                  height: '200px',
                  '@media(min-width:280px) and (max-width:450px)': {
                    maxWidth: '100%',
                    minWidth: '100%',
                    minHeight: '200px',
                    mx: 'auto',
                  },
                }}
              >
                {video?.url ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={convertToEmbedUrl(video?.url)}
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
                    <source src={video && video?.url} />
                  </video>
                )}
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default AdMediaSlider;
