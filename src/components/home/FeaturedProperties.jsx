'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Grid, useMediaQuery } from '@mui/material';

import Heading from './Heading';
import FeatureProjectsBox from './FeatureProjectsBox';

import { FEATURED_HEADINGS } from '@/src/constants/Home';

import styles from '@/src/components/home/slider.module.css';

const FeaturedProperties = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'md')
  );
  const FeatureProjects = useSelector(
    (state) => state.postListingAds.featuredPostings
  );
  const router = useRouter();

  const sliderSettings = {
    slidesPerView: 3,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    modules: [Pagination, Navigation],
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      960: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <Box
      sx={{
        mt: '60px',
        pt: '5px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Heading
        heading={FEATURED_HEADINGS.featureProperty}
        paragraph={FEATURED_HEADINGS.latestProject}
      />
      {isSmallScreen ? (
        <Swiper {...sliderSettings}>
          <Box className="full-container-width mx-auto">
            <Grid
              container
              sx={{
                display: 'flex',
                pt: { xs: '19px', sm: '30px', md: '55px' },
                pb: { xs: '50px', sm: '60px', lg: '68px' },
              }}
              spacing={2}
            >
              {FeatureProjects?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Grid
                    item
                    xs={6}
                    key={index}
                    sx={{
                      my: '30px',
                      mt: {
                        lg: index % 2 === 0 ? '40px' : '0',
                        sm: '10px',
                        md: '10px',
                      },
                      mb: {
                        lg: index % 2 !== 0 ? '40px' : '0',
                        sm: '35px',
                        md: '10px',
                        xs: '35px',
                      },
                    }}
                  >
                    <FeatureProjectsBox
                      router={router}
                      item={item}
                      styles={styles}
                      zIndex={''}
                      setHoveredIndex={setHoveredIndex}
                      index={index}
                      hoveredIndex={hoveredIndex}
                      transform={''}
                      transition={''}
                      isDesktop={false}
                    />
                  </Grid>
                </SwiperSlide>
              ))}
            </Grid>
          </Box>
        </Swiper>
      ) : (
        <Box className="full-container-width mx-auto" sx={{ mx: 'auto' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              pt: { xs: '19px', sm: '30px', md: '55px' },
              pb: { xs: '50px', sm: '60px', lg: '68px' },
            }}
            spacing={2}
          >
            {FeatureProjects?.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                key={index}
                sx={{
                  my: '30px',
                  mt: {
                    lg: index % 2 === 1 ? '40px' : '0',
                    sm: '10px',
                    md: '10px',
                  },
                  mb: {
                    lg: index % 2 === 1 ? '40px' : '0',
                    sm: '10px',
                    md: '10px',
                  },
                }}
              >
                <FeatureProjectsBox
                  router={router}
                  item={item}
                  styles={styles}
                  zIndex={1}
                  setHoveredIndex={setHoveredIndex}
                  index={index}
                  hoveredIndex={hoveredIndex}
                  transform={
                    hoveredIndex === index
                      ? 'translateX(0)'
                      : 'translateX(-100%)'
                  }
                  transition={'transform 0.3s ease-in-out'}
                  isDesktop={true}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default FeaturedProperties;
