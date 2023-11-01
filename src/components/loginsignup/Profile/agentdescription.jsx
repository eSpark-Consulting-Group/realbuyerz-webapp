import React from 'react';
import { Typography } from '@mui/material';

const AgentDescription = ({ description }) => {
  return (
    <Typography
      variant="primary"
      sx={{
        width: '100%',
        fontSize: 16,
        fontWeight: 400,
        textAlign: 'start',
      }}
    >
      {description}
    </Typography>
  );
};
export default AgentDescription;
