import React from 'react';
import { Typography } from '@mui/material';

import { PROPERTIES_BY } from '@/app/constants/AgentProfile';
import Link from 'next/link';

const AgentTitle = ({ title, link }) => {
  return (
    <Link href={link}>
      <Typography
      variant="h4"
      sx={{
        color: '#000',
        fontSize: { lg: '25px', md: '20px', sm: '18px', xs: '16px' },
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      }}
    >
      {`${PROPERTIES_BY} ${title}`}
    </Typography>
    </Link>
  );
};
export default AgentTitle;
