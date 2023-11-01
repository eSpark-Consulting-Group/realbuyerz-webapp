import { Typography } from '@mui/material';
import React from 'react';

const AgentAboutTitle = ({ title }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: 'primary',
        fontWeight: 500,
        fontSize: '25px',
        fontStyle: 'normal',
      }}
    >
      {`About ${title}`}
    </Typography>
  );
};

export default AgentAboutTitle;
