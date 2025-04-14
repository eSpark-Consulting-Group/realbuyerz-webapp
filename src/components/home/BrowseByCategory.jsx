'use client';
import { useState } from 'react';

import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Container, Grid, useMediaQuery } from '@mui/material';

import Heading from './Heading';
import CategoryBox from './CategoryBox';

import { browseByCategorySliderSetting } from '@/src/utils/sliderSettings';

import { HERO_SECTION_CONTENT } from '@/src/constants/Constants';

const BrowseByCategory = ({ data }) => {
  const [, setHovered] = useState(Array(data.length).fill(false));

  const handleItemHover = (index, isHovered) => {
    setHovered((prevHoveredItems) => {
      const updatedHoveredItems = [...prevHoveredItems];
      updatedHoveredItems[index] = isHovered;
      return updatedHoveredItems;
    });
  };

  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'lg')
  );

  return (
    <Container
      sx={{
        pt: { xs: '40px', sm: '50px', md: '55px', lg: '90px' },
        textAlign: 'center',
      }}
    >
      <Heading
        heading={HERO_SECTION_CONTENT.browseCategory}
        paragraph={HERO_SECTION_CONTENT.propertiesCategory}
      />
      <Box
        sx={{
          background: '#F5F6FB',
          my: '20px',
          maxWidth: '1185px',
          mx: 'auto',
        }}
      >
        {isSmallScreen ? (
          <Swiper {...browseByCategorySliderSetting}>
            {data?.map((category, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={`/category/${category?.id}`}
                  passHref
                  className="browseSwiperSlider"
                >
                  <Grid
                    container
                    justifyContent="center"
                    className="container"
                    sx={{
                      width: '90%',
                      height: '130px',
                      maxWidth: { xs: 'auto', md: '150px' },
                      my: '15px',
                      background: '#FFF',
                      border: '2px solid #fff',
                      position: 'relative',
                      display: 'flex',
                      '@media (min-width: 1340px) and (max-width: 1920px)': {
                        p: '5px',
                      },
                    }}
                    onMouseEnter={() => handleItemHover(index, true)}
                    onMouseLeave={() => handleItemHover(index, false)}
                  >
                    <CategoryBox
                      category={category}
                      px={'5px'}
                      fontSize={'12px'}
                    />
                  </Grid>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              px: '25px',
              py: '7px',
            }}
          >
            {data?.map((category, index) => (
              <Link
                href={`/category/${category?.id}`}
                passHref
                key={category?.id}
              >
                <Grid
                  item
                  className="container"
                  sx={{
                    width: '117px',
                    height: '99px',
                    maxWidth: '117px',
                    my: '15px',
                    background: '#FFF',
                    position: 'relative',
                    display: 'flex',
                    '@media (min-width: 1340px) and (max-width: 1920px)': {
                      p: '5px',
                    },
                  }}
                  onMouseEnter={() => handleItemHover(index, true)}
                  onMouseLeave={() => handleItemHover(index, false)}
                >
                  <CategoryBox
                    category={category}
                    px={{ lg: '20px' }}
                    fontSize={'10px'}
                  />
                </Grid>
              </Link>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default BrowseByCategory;
