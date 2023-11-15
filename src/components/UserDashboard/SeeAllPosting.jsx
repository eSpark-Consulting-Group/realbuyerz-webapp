import { Typography } from '@mui/material';
import React from 'react';

const SeeAllPosting = ({ title }) => {
  return (
    <Typography
      sx={{
        font: 'Inter',
        Weight: 500,
        fontSize: '20px',
        lineHeight: '24.2px',
        color: '#126FAA',
        padding: 4,
        mr: 2,
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
      }}
    >
      {title}
    </Typography>
  );
};

export default SeeAllPosting;
