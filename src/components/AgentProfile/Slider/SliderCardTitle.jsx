import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

const SliderCardTitle = ({ title, link }) => {
  return (
    <Link href={`/properties/${link?.id}`}>
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
    </Link>
  );
};

export default SliderCardTitle;
