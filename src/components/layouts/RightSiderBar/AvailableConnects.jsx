import React from 'react';
import { Grid, Typography } from '@mui/material';

const AvailableConnects = ({ profileInfo }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant={'body2'}
          sx={{
            padding: '20px 0px 20px 31px',
            color: '#FB631C',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
          }}
        >
          {profileInfo.availableConnects} Available Connects
        </Typography>
      </Grid>
    </>
  );
};

export default AvailableConnects;
