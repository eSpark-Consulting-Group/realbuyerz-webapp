import React from 'react';
import { Typography } from '@mui/material';

function Heading({ heading, paragraph }) {
  return (
    <>
      <Typography
        variant='h1'
        sx={{
          color: '#333333',
          fontWeight: '700',
          fontSize: '40px',
          pb: '25px',
        }}>
        {heading ? heading : ''}
      </Typography>
      <Typography
        variant='primary'
        sx={{
          color: '#fb631c',
          fontWeight: '600',
          fontSize: '18px',
          pb: '20px',
        }}>
        {paragraph ? paragraph : ''}
      </Typography>
    </>
  );
}

export default Heading;
