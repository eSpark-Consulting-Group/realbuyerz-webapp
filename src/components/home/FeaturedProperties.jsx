'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Grid, useMediaQuery } from '@mui/material';

import Heading from './Heading';
import FeatureProjectsBox from './FeatureProjectsBox';

import { featuredPropertiesSliderSetting } from '@/src/utils/sliderSettings';

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

  return (
    <Box
      sx={{
        mt: '50px',
        pt: '5px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box sx={{ px: 1.5 }}>
        <Heading
          heading={FEATURED_HEADINGS.featureProperty}
          paragraph={FEATURED_HEADINGS.latestProject}
        />
      </Box>

      {isSmallScreen ? (
        <Swiper
          {...featuredPropertiesSliderSetting}
          style={{ padding: '22px' }}
        >
          {FeatureProjects?.map((item, index) => (
            <SwiperSlide key={index} style={{ width: '260px' }}>
              <FeatureProjectsBox
                router={router}
                item={item}
                styles={styles}
                setHoveredIndex={setHoveredIndex}
                index={index}
                hoveredIndex={hoveredIndex}
                isDesktop={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box className="full-container-width mx-auto" sx={{ mx: 'auto' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              pt: { xs: '19px', sm: '30px', md: '55px' },
              pb: { xs: '50px', sm: '60px', lg: '68px' },
              justifyContent: 'center',
            }}
            spacing={2}
          >
            {FeatureProjects?.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={3}
                md={4.2}
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