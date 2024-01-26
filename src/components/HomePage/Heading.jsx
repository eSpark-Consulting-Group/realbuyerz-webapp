import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ heading, paragraph }) => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          color: '#333333',
          fontWeight: '700',
          pb: '25px',
        }}
      >
        {heading ? heading : ''}
      </Typography>
      <Typography
        variant="primary"
        sx={{
          color: '#fb631c',
          fontWeight: '600',
          fontSize: {xs:'14px',sm:'14px',md:'16px',lg:'18px'},
          pb: '20px',
        }}
      >
        {paragraph ? paragraph : ''}
      </Typography>
    </>
  );
};

export default Heading;
