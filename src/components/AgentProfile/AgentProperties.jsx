import React from 'react';
import { Box, useTheme } from '@mui/material';

import PropertyCardSaleBody from './Properties/PropertyCardSaleBody';
import PropertyCardRentBody from './Properties/PropertyCardRentBody';
import AgentTitle from './AgentTitle';
import PropertyForSale from './Properties/PropertyForSale';
import PropertyForRent from './Properties/PropertyForRent';

const AgentProperties = ({ data }) => {
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
        <AgentTitle title={data?.userName} />
        <Box sx={{ pt: 2 }}>
          <PropertyForSale sellCount={data?.counts?.sellCount} />
          <PropertyCardRentBody rentData={data?.counts?.rentCount} />
        </Box>
        <Box sx={{ pt: 2 }}>
          <PropertyForRent rentCount={data?.counts?.rentCount} />
          <PropertyCardSaleBody sellData={data?.counts?.sellCount} />
        </Box>
      </Box>
    </Box>
  );
};

export default AgentProperties;
