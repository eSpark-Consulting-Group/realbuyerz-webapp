import Image from 'next/image';

import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SwiperArrow from './SwiperArrow';

import { mediaSliderSetting } from '@/src/utils/sliderSettings';

const VideoSlider = ({ videosSlider, modalWidth }) => {
  return (
    <Box id="slider" sx={{ position: 'relative' }}>
      <Swiper {...mediaSliderSetting} className="mySwiper">
        {videosSlider?.map((video, index) => (
          <Box key={index}>
            <SwiperSlide
              sx={{
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: `${modalWidth}px`,
                  height: { xs: 'auto', lg: '569px' },
                  borderRadius: '30px',
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
                  </video>
                )}
              </Box>
            </SwiperSlide>
          </Box>
        ))}

        <SwiperArrow
          className="custom-swiper-button-next"
          direction="next"
          right={45}
          src="/images/modalNextArrow.svg"
          height={60}
        />

        <SwiperArrow
          className="custom-swiper-button-prev"
          direction="prev"
          left={45}
          src="/images/modalPrevArrow.svg"
          height={60}
        />
      </Swiper>
    </Box>
  );
};

export default VideoSlider;
