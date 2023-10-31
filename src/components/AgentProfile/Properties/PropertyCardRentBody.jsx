import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

const PropertyCardRentBody = ({ data }) => {
  return (
    <Grid container spacing={1} pb={4}>
      {['houses', 'commercials', 'plots'].map((propertyType, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
          <Box
            sx={{
              width: '100%',
              height: 80,
              maxWidth: 'sm',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              borderColor: '#E5E7EB',
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
                {data.propertiesForRent.types[propertyType]}
              </Typography>
              <Typography
                sx={{ fontSize: 'xs', color: '#777777', fontWeight: 'light' }}
              >
                {propertyType}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyCardRentBody;
