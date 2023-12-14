'use client';
import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Heading from './Heading';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { FEATURED_HEADINGS, FEATURE_BUTTONS } from '@/app/constants/Home';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const PopularLocations = ({ data }) => {
  const [filteredProposalsData, setFilteredProposalsData] = React.useState(
    data?.filter((item) => item.type === 'sale')
  );
  const [filterType, setFilterType] = React.useState('sale');

  const handleFilter = (type) => {
    setFilterType(type);
    if (type === 'sale') {
      setFilteredProposalsData(data?.filter((item) => item.type === 'sale'));
    } else if (type === 'rent') {
      setFilteredProposalsData(data?.filter((item) => item.type === 'rent'));
    } else {
      setFilteredProposalsData(data);
    }
  };
  return (
    <Box
      sx={{
        pt: '90px',
        pb: '30px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/featured-properties-background.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container sx={{ px: '10%' }}>
        <Heading
          heading={FEATURED_HEADINGS.popularLocations}
          paragraph={FEATURED_HEADINGS.browseProperty}
        />
        <Box sx={{ pt: '14px', pb: '8px' }}>
          <Box sx={{ pt: '14px', pb: '58px' }}>
            <Button
              sx={{
                mx: '15px',
                fontWeight: 600,
                width: '116px',
                height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
                color: filterType === 'sale' ? '#fff' : 'primary',
              }}
              variant={filterType === 'sale' ? 'primary' : 'outlined'}
              onClick={() => handleFilter('sale')}
            >
              <Typography
                sx={{ color: filterType === 'sale' ? '#fff' : 'primary' }}
              >
                {FEATURE_BUTTONS.forSale}
              </Typography>
            </Button>
            <Button
              sx={{
                mx: '15px',
                fontWeight: 600,
                width: '116px',
                height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
                textAlign: 'start',
                color: filterType === 'rent' ? '#fff' : 'primary',
              }}
              variant={filterType === 'rent' ? 'primary' : 'outlined'}
              onClick={() => handleFilter('rent')}
            >
              <Typography
                sx={{ color: filterType === 'rent' ? '#fff' : 'primary' }}
              >
                {' '}
                {FEATURE_BUTTONS.byRent}
              </Typography>
            </Button>
          </Box>
          <Grid container sx={{ display: 'flex' }}>
            {filteredProposalsData?.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: '5px',
                    border: '1px solid #cbcbcb',
                    mx: '15px',
                    my: '15px',
                    '&:hover': {
                      boxShadow: '0px 0px 5px 0px rgba(18, 111, 170, 0.70)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      py: '10px',
                      backgroundColor: '#f5f6fb',
                      color: '#333',
                      fontWeight: '600',
                      fontSize: '16px',
                    }}
                  >
                    {item?.title}
                  </Box>
                  <Box
                    sx={{
                      pt: '10px',
                      pb: '16px',
                      px: '50px',
                      textAlign: 'left',
                      fontWeight: '500',
                      fontSize: '14px',
                    }}
                  >
                    {item?.locations?.map((location, index) => (
                      <Box key={index}>
                        <Link href="/">
                          <Typography variant="body1" sx={{}}>
                            {location}
                          </Typography>
                        </Link>
                        <br />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
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
            <Image
              src="/images/bgs/GototheTop.svg"
              width={80}
              height={80}
              alt={''}
            />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularLocations;
