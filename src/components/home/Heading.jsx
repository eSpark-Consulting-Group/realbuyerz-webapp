import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ heading, paragraph, textAlign }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: '25px', sm: '30px', md: '35px', lg: '40px' },
          color: '#333333',
          fontWeight: 700,
          pb: paragraph ? '25px' : '0px',
          textAlign: textAlign,
        }}
      >
        {heading ? heading : ''}
      </Typography>

      <Typography
        variant="primary"
        sx={{
          color: '#fb631c',
          fontWeight: 600,
          fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
          pb: '20px',
        }}
      >
        {paragraph ? paragraph : ''}
      </Typography>
    </>
  );
};

export default Heading;
