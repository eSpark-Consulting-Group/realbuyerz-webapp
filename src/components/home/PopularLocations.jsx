'use client';
import { useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Heading from './Heading';
import FilteredProposalsDataBox from './FilteredProposalsDataBox';

import { popularLocationSliderSetting } from '@/src/utils/sliderSettings';

import { FEATURED_HEADINGS, FEATURE_BUTTONS } from '@/src/constants/Home';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const PopularLocations = ({ data }) => {
  const [filteredProposalsData, setFilteredProposalsData] = useState(
    data?.filter((item) => item?.type === 'sale')
  );

  const [filterType, setFilterType] = useState('sale');

  const handleFilter = (type) => {
    setFilterType(type);
    if (type === 'sale') {
      setFilteredProposalsData(data?.filter((item) => item?.type === 'sale'));
    } else if (type === 'rent') {
      setFilteredProposalsData(data?.filter((item) => item?.type === 'rent'));
    } else {
      setFilteredProposalsData(data);
    }
  };

  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'lg')
  );
  return (
    <Box
      sx={{
        pt: { xs: '20px', lg: '40px' },
        pb: '30px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/popular-location.svg')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container sx={{ px: '10%', maxWidth: '1213px' }}>
        <Heading heading={FEATURED_HEADINGS.popularLocations} paragraph={''} />
        <Box
          sx={{
            pt: '5px',
            pb: '8px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pt: '14px',
              pb: { xs: '0px', sm: '30px', md: '30px', lg: '58px' },
            }}
          >
            <Button
              sx={{
                mx: '10px',
                fontWeight: 600,
                width: '116px',
                height: '40px',
                color: filterType === 'sale' ? '#fff' : 'primary',
                mb: { xs: '10px' },
              }}
              variant={filterType === 'sale' ? 'primary' : 'outlined'}
              onClick={() => handleFilter('sale')}
            >
              <Typography
                sx={{
                  color: filterType === 'sale' ? '#fff' : 'primary',
                  fontSize: '15px',
                }}
              >
                {FEATURE_BUTTONS.forSale}
              </Typography>
            </Button>
            <Button
              sx={{
                mx: '10px',
                fontWeight: 600,
                width: '116px',
                height: '40px',
                textAlign: 'start',
                color: filterType === 'rent' ? '#fff' : 'primary',
                mb: { xs: '10px' },
              }}
              variant={filterType === 'rent' ? 'primary' : 'outlined'}
              onClick={() => handleFilter('rent')}
            >
              <Typography
                sx={{
                  color: filterType === 'rent' ? '#fff' : 'primary',
                  fontSize: '15px',
                }}
              >
                {' '}
                {FEATURE_BUTTONS.byRent}
              </Typography>
            </Button>
          </Box>
          {isSmallScreen ? (
            <Swiper {...popularLocationSliderSetting}>
              <Box className="full-container-width mx-auto">
                <Grid container sx={{ display: 'flex' }} columnSpacing={2}>
                  {filteredProposalsData?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <Grid item xs={12} sm={6} md={6} lg={4}>
                        <FilteredProposalsDataBox
                          borderRadius={'5px'}
                          item={item}
                        />
                      </Grid>
                    </SwiperSlide>
                  ))}
                </Grid>
              </Box>
            </Swiper>
          ) : (
            <Box className="full-container-width mx-auto">
              <Grid
                container
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                columnSpacing={2}
              >
                {filteredProposalsData?.map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                    <FilteredProposalsDataBox borderRadius={''} item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            pb: '26px',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Button onClick={scrollToTop}>
            <Box
              component={'img'}
              src="/images/bgs/GototheTop.svg"
              sx={{
                width: { xs: '60px', sm: '70px', md: '80px' },
                height: 'auto',
              }}
              alt={'Images'}
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularLocations;
