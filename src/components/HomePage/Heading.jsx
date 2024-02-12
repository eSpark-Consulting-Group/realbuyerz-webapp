import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ heading, paragraph }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: '25px', sm: '25px', md: '30px', lg: '40px' },
          color: '#333333',
          fontWeight: 700,
          pb: paragraph ? '25px' : '0px',
        }}
      >
        {heading ? heading : ''}
      </Typography>
      <Typography
        variant="primary"
        sx={{
          color: '#fb631c',
          fontWeight: 600,
          fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '18px' },
          pb: '20px',
        }}
      >
        {paragraph ? paragraph : ''}
      </Typography>
    </>
  );
};

export default Heading;
