'use client';
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Heading from './Heading';

function FeaturedProperties({ data }) {
  return (
    <Box
      sx={{
        pt: '90px',
        textAlign: 'center',
        backgroundImage: `url("/images/bgs/featured-properties-background.png")`,
      }}
    >
      <Heading
        heading={'Featured Properties'}
        paragraph={'Find your dream projects from our latest projects'}
      />
      <Grid container sx={{ display: 'flex', pt: '69px', pb: '48px' }}>
        {data?.map((item, index) => (
          <Grid item xs={3} key={index}>
            <Box
              sx={{
                borderRadius: '5px',
                border: '1px solid #cbcbcb',
                height: '350px',
                mx: '25px',
                backgroundImage: `url('${item.bgImage}')`,
                // backgroundImage: `url("${item.ima}")`,
              }}
            >
              {/* <img src={item.image} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} /> */}
              <Box p={2} sx={{ background: '#fff', mr: '20%', mt: '20vh' }}>
                <p>{item.propertyName}</p>
                <p>{item.location}</p>
                <p>Starting from: ${item.price}</p>
                <Grid container>
                  <Grid item sx={4}>

                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeaturedProperties;
