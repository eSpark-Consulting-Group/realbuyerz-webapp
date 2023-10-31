import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

const PropertyCardBody = ({ items }) => {
  return (
    <Grid container spacing={1} pb={4}>
      {['1', '2', '3']?.map((number) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={number}>
          <Box
            sx={{
              width: '100%',
              height: 80,
              maxWidth: 'sm',
              borderColor: '#777777',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              borderWidth: 1,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 'lg',
                  fontWeight: 'bold',
                  color: '#126FAA',
                  textAlign: 'center',
                }}
              >
                {items[`PropertyNumber${number}`]}
              </Typography>
              <Typography
                sx={{ fontSize: 'xs', color: '#777777', fontWeight: 'light' }}
              >
                {items[`PropertieName${number}`]}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyCardBody;
