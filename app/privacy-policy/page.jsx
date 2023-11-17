'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { CARDS } from '../constants/PrivacyPolicy';

import PolicyCard from '@/src/components/PrivacyPolicy/PolicyCard';

import { PAGES_INFO } from '../constants/Constants';

const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        background: '#FFF',
        border: '2px solid #E4E4E4',
        px: '40px',
        py: '60px',
        my: '40px',
        borderRadius: '20px',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: ' #FB631C',
          fontSize: '30px',
          fontWeight: '600',
          textAlign: 'center',
          pb: '60px',
        }}
      >
        {PAGES_INFO?.policyPageTitle}
      </Typography>
      <Grid container sx={{ display: 'flex', gap: '30px' }}>
        {CARDS.map((card, index) => (
          <PolicyCard
            key={index}
            id={card?.id}
            xs={card?.xs}
            lg={card?.lg}
            sm={card?.sm}
            md={card?.md}
            textAlign={card?.textAlign}
            backgroundColor={card?.backgroundColor}
          />
        ))}
      </Grid>
    </Box>
  );
};
export default PrivacyPolicy;
