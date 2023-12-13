import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

const SliderCardTitle = ({ title }) => {
  return (
    <Link href={`/properties/${title?.id}`}>
      <Typography
        variant="body1"
        sx={{
          color: '#FB631C',
          fontWeight: '600',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
        }}
      >
        {title?.name}
      </Typography>
    </Link>
  );
};

export default SliderCardTitle;
