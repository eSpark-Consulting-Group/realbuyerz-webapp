import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AgentAboutTitle from './AgentAboutTitle';

const AgentAbout = ({ data }) => {
  return (
    <Box
      sx={{
        marginTop: '12px',
      }}
    >
      <AgentAboutTitle title={data?.contactInfo.agentName} />
      <Typography
        variant="body1"
        sx={{
          width: '100%',
          color: '#333',
          fontSize: '16px',
          fontStyle: 'norml',
          fontWeight: 400,
          lineHeight: '25px',
          paddingBottom: '10px',
        }}
      >
        {data?.about.description}
      </Typography>
    </Box>
  );
};

export default AgentAbout;
