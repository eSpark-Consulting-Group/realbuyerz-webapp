import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AgentTitle from './AgentTitle';

const AgentAbout = ({ data }) => {
  return (
    <Box
      sx={{
        marginTop: '40px',
      }}
    >
      <AgentTitle title={'About Arman Khan'} />
      {data?.map((items, index) => {
        return (
          <Typography
            key={index}
            variant="body1"
            sx={{
              width: '100%',
              paddingBottom: '10px',
              paddingTop: '12px',
              color: 'zinc.800',
              lineHeight: '25px',
            }}
          >
            {items.about}
          </Typography>
        );
      })}
    </Box>
  );
};

export default AgentAbout;
