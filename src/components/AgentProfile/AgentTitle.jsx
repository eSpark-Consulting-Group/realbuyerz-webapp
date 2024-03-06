import React from 'react';
import { Typography } from '@mui/material';

import { PROPERTIES_BY } from '@/app/constants/AgentProfile';

const AgentTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: '#000',
        fontSize: { md: '25px', sm: '18px', xs: '16px' },
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
      }}
    >
      {`${PROPERTIES_BY} ${title}`}
    </Typography>
  );
};
export default AgentTitle;
