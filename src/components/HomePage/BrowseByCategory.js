'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Container, Typography } from '@mui/material';

function BrowseByCategory() {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container sx={{ pt: '90px', textAlign: 'center' }}>
      <Typography
        variant='h1'
        sx={{
          color: '#333333',
          fontWeight: '700',
          fontSize: '40px',
          pb: '25px',
        }}>
        Browse By Category
      </Typography>
      <Typography
        variant='primary'
        sx={{
          color: '#fb631c',
          fontWeight: '600',
          fontSize: '18px',
          pb: '20px',
        }}>
        To browse & buy in your areas of interest. Look of properties by
        category
      </Typography>
      <Box sx={{ padding: '20px' }}>
        <Slider {...sliderSettings}>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category2.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category2.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category3.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category4.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category5.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category6.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category7.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            padding: '25px',
          }}>
            <Box
              sx={{
                background: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <img src='/images/categories/category8.svg' alt='Category 2' />
              <Typography variant='body1' sx={{ py: '8px' }}>
                CategoryName
              </Typography>
            </Box>
          </Box>
        </Slider>
      </Box>
    </Container>
  );
}

export default BrowseByCategory;
