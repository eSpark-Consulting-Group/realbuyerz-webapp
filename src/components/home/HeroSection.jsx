'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { Bounce } from 'react-awesome-reveal';
import { keyframes } from '@mui/system';
import HeroSlider from './HeroSlider';
import {
  HERO_SECTION_CONTENT,
  HERO_SECTION_IMAGES,
} from '@/src/constants/Constants';

const enhancedSwingingIntoPlace = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(30%);
  }
  70% {
    transform: translateX(-20%);
  }
  85% {
    transform: translateX(10%);
  }
  95% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
`;

const HeroSection = () => {
  const { heading, logo } = HERO_SECTION_CONTENT;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          height: {
            xs: '250px',
            sm: '350px',
            md: '500px',
            lg: '600px',
            xl: '678px',
          },
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            width: {
              xs: '100px',
              sm: '150px',
              md: '200px',
              lg: '239px',
              xl: '239px',
            },
            height: {
              xs: '100px',
              sm: '150px',
              md: '200px',
              lg: '239px',
              xl: '239px',
            },
            top: { xs: 60, sm: 100, md: 90, lg: 190, xl: 90 },
          }}
          src={logo}
          component={'img'}
        />
        <Typography
          sx={{
            px: { xs: '20px', sm: '0px' },
            '@media (min-width: 400px) and (max-width: 599px)': {
              px: '15%',
            },
            pt: '10px',
            zIndex: 2,
            position: 'absolute',
            width: {
              xs: '90%',
              sm: '440px',
              md: '610px',
              lg: '900px',
              xl: '890px',
            },
            top: { xs: 130, sm: 210, md: 270, lg: 370, xl: 300 },
            fontSize: {
              xs: '15px',
              sm: '20px',
              md: '28px',
              lg: '35px',
              xl: '40px',
            },
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
            fontWeight: 900,
            textAlign: 'center',
            animation: `${enhancedSwingingIntoPlace} 1s ease-out forwards`,
          }}
          variant="h2"
          component={'h2'}
          color={'primary'}
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
            position: 'absolute',
            gap: 2,
            top: { xs: 190, sm: 270, md: 395, lg: 460, xl: 460 },
          }}
        >
          <Bounce direction="left" triggerOnce>
            <Link href="/signup/">
              <Button
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
                  height: { xs: '31px', sm: '35px', lg: '40px', xl: '40px' },
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
                {HERO_SECTION_CONTENT.buyer}
              </Button>
            </Link>
          </Bounce>
          <Bounce direction="right" triggerOnce>
            <Link href="/signup/">
              <Button
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
                  height: { xs: '31px', sm: '35px', lg: '40px', xl: '40px' },
                  background: '#FB631C',
                  animation: `${enhancedSwingingIntoPlace} 1s ease-out forwards`,
                  '&:hover': {
                    background: '#fff !important',
                    border: '1px solid #FB631C',
                    color: '#FB631C ',
                  },
                }}
                variant="primary"
              >
                {HERO_SECTION_CONTENT.seller}
              </Button>
            </Link>
          </Bounce>
        </Box>
        <HeroSlider
          effect={'fade'}
          pagination={true}
          delay={1500}
          SlidesData={HERO_SECTION_IMAGES}
        />
      </Box>
    </>
  );
};

export default HeroSection;
