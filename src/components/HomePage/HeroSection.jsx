'use client';
import { Bounce } from 'react-awesome-reveal';

import { Box, Typography } from '@mui/material';
import { Button } from '@mui/material';

import HeroSlider from '../sliders/HeroSlider';

import {
  HERO_SECTION_CONTENT,
  HERO_SECTION_IMAGES,
} from '@/app/constants/Constants';

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
            xs: '230px',
            sm: '350px',
            md: '500px',
            lg: '600px',
            xl: '678px',
          },
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
            top: { xs: 80, sm: 110, md: 150, lg: 190, xl: 200 },
          }}
          src={logo}
          component={'img'}
        ></Box>
        <Typography
          sx={{
            zIndex: 2,
            position: 'absolute',
            width: {
              xs: '320px',
              sm: '440px',
              md: '610px',
              lg: '900px',
              xl: '890px',
            },
            top: { xs: 170, sm: 250, md: 340, lg: 420, xl: 430 },
            fontSize: {
              xs: '15px',
              sm: '20px',
              md: '28px',
              lg: '30px',
              xl: '36px',
            },
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: 'white',
            fontWeight: { xs: 900 },
            wordSpacing: '-4px',
            fontFamily: 'inherit',
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
            width: {
              xs: '40px',
              sm: '60px',
              md: 'auto',
              lg: 'auto',
              xl: 'auto',
            },
            zIndex: 2,
            justifyContent: 'space-around',
            display: 'flex',
            position: 'absolute',
            gap: 2,
            top: { xs: 240, sm: 340, md: 460, lg: 530, xl: 560 },
          }}
        >
          <Bounce direction="left" triggerOnce>
            <Button
              sx={{
                width: {
                  xs: '40px',
                  sm: '60px',
                  md: '120px',
                  lg: '120px',
                  xl: '120px',
                },
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
                textAlign: 'start',
              }}
              variant="primary"
            >
              <Typography sx={{ color: '#fff' }}> Buyer</Typography>
            </Button>
          </Bounce>
          <Bounce direction="right" triggerOnce>
            <Button
              sx={{
                width: {
                  xs: '120px',
                  sm: '120px',
                  md: '120px',
                  lg: '120px',
                  xl: '120px',
                },
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 'normal',
                height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
              }}
              variant="primary"
            >
              <Typography sx={{ color: '#fff' }}>Seller</Typography>
            </Button>
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
