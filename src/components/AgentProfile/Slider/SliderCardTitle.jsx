import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SliderCardTitle = ({ title, link }) => {
  const currentPath = usePathname();
  return (
    <Link href={`/properties/${link?.id}`}>
      <Typography
        // variant="body1"
        sx={{
          color: '#FB631C',
          fontWeight: '600',
          fontSize: { xs: '14px', md: '18px' },
          fontStyle: 'normal',
          textAlign: currentPath === '/' ? 'left' : 'center',
        }}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default SliderCardTitle;
