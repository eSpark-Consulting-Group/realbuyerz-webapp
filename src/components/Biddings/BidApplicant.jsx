import React from 'react';
import { Grid, Typography } from '@mui/material';

const BidApplicant = ({ leftSection }) => {
  return (
    <Grid
      item
      xs={2}
      sx={{
        p: '40px 40px 40px 20px',
        justifyContent: 'center',
        borderRight: '1px solid #E4E4E4',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          pb: '10px',
          color: '#333',
          fontSize: '12px',
          fontWeight: '600',
        }}
      >
        {leftSection?.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: '12px',
          fontWeight: '400',
        }}
      >
        {leftSection?.discription}
      </Typography>
    </Grid>
  );
};

export default BidApplicant;
