'use client';
import { HERO_SECTION_CONTENT } from '@/src/constants/Constants';
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from './Heading';

const BrowseByCategory = ({ data }) => {
  const [, setHovered] = useState(Array(data.length).fill(false));

  const handleItemHover = (index, isHovered) => {
    setHovered((prevHoveredItems) => {
      const updatedHoveredItems = [...prevHoveredItems];
      updatedHoveredItems[index] = isHovered;
      return updatedHoveredItems;
    });
  };

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
      320: {
        slidesPerView: 2,
      },
      460: {
        slidesPerView: 3,
      },
      620: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      960: {
        slidesPerView: 6,
      },
      1180: {
        slidesPerView: 7,
      },
      1400: {
        slidesPerView: 8,
      },
    },
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
          <Swiper {...sliderSettings}>
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
                    <Box className="border top" />
                    <Box className="border bottom" />
                    <Box className="border left" />
                    <Box className="border right" />
                    <Box
                      sx={{
                        background: '#fff',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '150px',
                        margin: 'auto',
                        gap: '10px',
                      }}
                    >
                      <Image
                        src={category?.image}
                        alt={category?.name}
                        width={30}
                        height={30}
                        style={{ objectFit: 'contain' }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#838383',
                          fontSize: '12px',
                          fontWeight: 400,
                          px: '5px',
                        }}
                      >
                        {category?.name}
                      </Typography>
                    </Box>
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
                  <Box className="border top" />
                  <Box className="border bottom" />
                  <Box className="border left" />
                  <Box className="border right" />
                  <Box
                    sx={{
                      background: '#fff',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      maxWidth: '150px',
                      margin: 'auto',
                      gap: '10px',
                    }}
                  >
                    <Image
                      src={category?.image}
                      alt={category?.name}
                      width={30}
                      height={30}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#838383',
                        fontSize: '10px',
                        fontWeight: 400,
                        px: { lg: '20px' },
                      }}
                    >
                      {category?.name}
                    </Typography>
                  </Box>
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
