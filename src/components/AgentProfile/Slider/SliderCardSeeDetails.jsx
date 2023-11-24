import React from 'react';
import { Grid, Typography } from '@mui/material';

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
        align="center"
        fontSize="0.875rem"
        fontWeight="500"
        fontFamily="Inter"
        fontStyle="normal"
        color="#000000"
      >
        See Details
      </Typography>
    </Grid>
  );
};

export default SliderCardSeeDetails;
