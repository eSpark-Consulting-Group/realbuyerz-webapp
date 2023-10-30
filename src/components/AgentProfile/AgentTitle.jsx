import React from 'react';
import { Typography } from '@mui/material';

const AgentTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: 'primary',
        fontWeight: 600,
        fontSize: '25px',
        fontStyle: 'normal',
      }}
    >
      {title}
    </Typography>
  );
};
export default AgentTitle;
