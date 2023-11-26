import React from 'react';
import { Grid, Typography } from '@mui/material';
import { SEE_DETAILS } from '@/app/constants/AgentProfile';

const SliderCardSeeDetails = () => {
  return (
    <Grid
      item
      bgcolor="#FAFAFA"
      xs={12}
      sx={{
        color: '#909394',
        fontSize: '14px',
        fontWeight: '300',
        padding: 1.8,
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: '#000',
          display: 'flex',
          justifyContent: 'center',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
      >
        {SEE_DETAILS}
      </Typography>
    </Grid>
  );
};

export default SliderCardSeeDetails;
