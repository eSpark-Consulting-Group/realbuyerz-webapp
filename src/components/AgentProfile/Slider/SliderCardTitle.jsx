import React from 'react';
import { Typography } from '@mui/material';

const SliderCardTitle = ({ title }) => {
  return (
    <Typography
      variant="body1"
      sx={{
        color: '#FB631C',
        fontWeight: '600',

        fontSize: '18px',
        fontStyle: 'normal',
      }}
    >
      {title}
    </Typography>
  );
};

export default SliderCardTitle;
