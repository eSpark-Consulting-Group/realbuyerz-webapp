'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Box, Button, Typography } from '@mui/material';
import { Bounce } from 'react-awesome-reveal';

import { HERO_SECTION_BUTTONS } from '@/src/constants/Constants';

import '../../../app/globals.css';

const HeroSlider = ({
  spaceBetween,
  effect,
  navigation,
  pagination,
  delay,
  SlidesData,
  logo,
  enhancedSwingingIntoPlace,
  heading,
}) => {
  const router = useRouter();
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        effect={effect}
        navigation={navigation}
        pagination={{
          clickable: pagination,
        }}
        autoplay={{ delay: delay }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="hero_slider"
      >
        {SlidesData?.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                minHeight: {
                  xs: '378px',
                  sm: '478px',
                  md: '578px',
                  lg: '670px',
                },
                maxHeight: '678px',
                backgroundImage: `url(${slide?.image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: {
                    xs: 'rgba(0, 0, 0, 0.3)',
                    md: 'rgba(0, 0, 0, 0.2)',
                  },
                  zIndex: 1,
                }}
              />

              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                style={{
                  zIndex: 2,
                  width: '100%',
                  height: '100%',
                  mx: 'auto',
                }}
                className="heroslider-logo"
              />

              <Typography
                sx={{
                  pt: '10px',
                  fontSize: {
                    xs: '20px',
                    sm: '25px',
                    md: '28px',
                    lg: '35px',
                    xl: '40px',
                  },
                  color: '#FB631C',
                  fontWeight: 700,
                  textAlign: 'center',
                  animation: `${enhancedSwingingIntoPlace} 1s ease-out forwards`,
                  width: { xs: '280px', sm: '85%' },
                  maxWidth: '900px',
                  mx: 'auto',
                  zIndex: 2,
                  textShadow: {
                    xs: `
                      -0.6px -0.6px 0 white,
                      0.6px -0.6px 0 white,
                      -0.6px 0.6px 0 white,
                      0.6px 0.6px 0 white
                    `,
                    sm: `
                      -1px -1px 0 white,
                      1px -1px 0 white,
                      -1px 1px 0 white,
                      1px 1px 0 white
                    `,
                  },
                }}
                variant="h2"
                component={'h2'}
                data-aos="fade-right"
              >
                {heading}
              </Typography>

              <Box
                sx={{
                  width: 'auto',
                  zIndex: 2,
                  justifyContent: 'space-around',
                  display: 'flex',
                  gap: 2,
                  mt: 3,
                  mb: 5,
                }}
              >
                {HERO_SECTION_BUTTONS?.map((btn, btnIndex) => (
                  <Bounce key={btnIndex} direction={btn?.direction} triggerOnce>
                    <Button
                      onClick={() => router?.push(`${btn?.link || '#'}`)}
                      sx={{
                        width: {
                          xs: '100px',
                          sm: '120px',
                          md: '120px',
                          lg: '120px',
                          xl: '120px',
                        },
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: 'normal',
                        height: {
                          xs: '31px',
                          sm: '35px',
                          lg: '40px',
                          xl: '40px',
                        },
                        textAlign: 'start',
                        animation: `${enhancedSwingingIntoPlace} 1s ease-out forwards`,
                        '&:hover': {
                          background: '#fff !important',
                          border: '1px solid #FB631C',
                          color: '#FB631C ',
                        },
                      }}
                      variant="primary"
                    >
                      {btn?.title || ''}
                    </Button>
                  </Bounce>
                ))}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroSlider;
