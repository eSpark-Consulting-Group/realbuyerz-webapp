import React from 'react';

import { Box, Grid, Typography } from '@mui/material';

const PropertyCardSaleBody = ({ data }) => {
  return (
    <Grid container spacing={1} pb={4}>
      {['Houses', 'Commercials', 'Plots'].map((propertyType, index) => (
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
                  color: '#126FAA',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  textAlign: 'center',
                }}
              >
                {data?.propertiesForSale.types[propertyType]}
              </Typography>
              <Typography
                sx={{
                  color: '#777',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
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

export default PropertyCardSaleBody;
