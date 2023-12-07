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
        <AgentTitle title={data[0]?.userName} />
        <Box sx={{ pt: 2 }}>
          <PropertyForSale sellCount={data[0]?.counts?.sellCount} />
          <PropertyCardRentBody rentData={data[0]?.counts} />
        </Box>
        <Box sx={{ pt: 2 }}>
          <PropertyForRent rentCount={data[0]?.counts?.rentCount} />
          <PropertyCardSaleBody sellData={data[0]?.counts} />
        </Box>
      </Box>
    </Box>
  );
};

export default AgentProperties;
