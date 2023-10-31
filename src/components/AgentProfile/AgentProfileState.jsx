import React from 'react';
import { Box, useTheme } from '@mui/material';

import PropertyHeader from './PropertyCardHeader';
import PropertyCardBody from './PropertyCardBody';
import AgentTitle from './AgentTitle';

const AgentProfileState = ({ data }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        [theme.breakpoints.up('lg')]: {
          width: '450px',
        },
      }}
    >
      <Box sx={{ pt: 8 }}>
        <AgentTitle title={'Properties By Arman Khan'} />

        {data?.map((items, index) => (
          <Box key={index} sx={{ pt: 2 }}>
            <PropertyHeader title={items.title} view={items.view} />
            <PropertyCardBody items={items} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AgentProfileState;
