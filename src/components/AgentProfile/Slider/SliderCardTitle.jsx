import React from 'react';
import { Typography } from '@mui/material';

const SliderCardTitle = ({ title }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: '#FB631C',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
      }}
    >
      {title}
    </Typography>
  );
};

export default SliderCardTitle;
