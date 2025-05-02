'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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

const PopularLocations = ({ data }) => {
  const [filterType, setFilterType] = useState('sale');
  const isSmallScreen = useMediaQuery((theme) =>
    theme.breakpoints.between('xs', 'lg')
  );

  const filteredProposalsData = data?.filter((item) =>
    filterType === 'all' ? true : item?.type === filterType
  );

  const handleFilter = (type) => {
    setFilterType(type);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FilterButton = ({ type, label }) => (
    <Button
      sx={{
        mx: '10px',
        fontWeight: 600,
        width: '116px',
        height: '40px',
        color: filterType === type ? '#fff' : 'primary',
        mb: { xs: '10px' },
      }}
      variant={filterType === type ? 'contained' : 'outlined'}
      onClick={() => handleFilter(type)}
    >
      <Typography
        sx={{
          color: filterType === type ? '#fff' : 'primary',
          fontSize: '15px',
        }}
      >
        {label}
      </Typography>
    </Button>
  );

  const ProposalGrid = ({ small }) => (
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
        <Grid item xs={12} sm={6} md={6} lg={3.2} key={`proposal-${index}`}>
          <FilteredProposalsDataBox item={item} small={small} />
        </Grid>
      ))}
    </Grid>
  );

  const ProposalSlider = () => (
    <Swiper {...popularLocationSliderSetting}>
      <Box className="full-container-width mx-auto">
        <Grid container sx={{ display: 'flex' }} columnSpacing={2}>
          {filteredProposalsData?.map((item, index) => (
            <SwiperSlide
              key={`slide-${index}`}
              style={{ width: '90%', height: '100%', maxWidth: '350px' }}
            >
              <Grid item xs={10} sm={6} md={6} lg={6}>
                <FilteredProposalsDataBox item={item} small />
              </Grid>
            </SwiperSlide>
          ))}
        </Grid>
      </Box>
    </Swiper>
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

        <Box sx={{ pt: '5px', pb: '8px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pt: '14px',
              pb: { xs: '0px', sm: '30px', md: '30px', lg: '58px' },
            }}
          >
            <FilterButton type="sale" label={FEATURE_BUTTONS.forSale} />
            <FilterButton type="rent" label={FEATURE_BUTTONS.byRent} />
          </Box>

          {isSmallScreen ? <ProposalSlider /> : <ProposalGrid small={false} />}
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
              component="img"
              src="/images/bgs/GototheTop.svg"
              sx={{
                width: { xs: '60px', sm: '70px', md: '80px' },
                height: 'auto',
              }}
              alt="Go to top"
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularLocations;
