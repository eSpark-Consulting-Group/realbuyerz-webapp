import React from 'react';
import { Box, useTheme } from '@mui/material';

import PropertyCardSaleBody from './Properties/PropertyCardSaleBody';
import PropertyCardRentBody from './Properties/PropertyCardRentBody';
import AgentTitle from './AgentTitle';
import PropertyForSale from './Properties/PropertyForSale';
import PropertyForRent from './Properties/PropertyForRent';
import { useRouter } from 'next/navigation';

const AgentProperties = ({ data }) => {
    const router = useRouter();
  const handleView = () => {
    router.push('/properties')
  }
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
        <AgentTitle title={data?.contactInfo.agentName} />
        <Box sx={{ pt: 2 }}>
          <PropertyForSale data={data?.propertyDetails} handleView={handleView} />
          <PropertyCardRentBody data={data?.propertyDetails} />
        </Box>
        <Box sx={{ pt: 2 }}>
          <PropertyForRent data={data?.propertyDetails}  handleView={handleView} />
          <PropertyCardSaleBody data={data?.propertyDetails} />
        </Box>
      </Box>
    </Box>
  );
};

export default AgentProperties;
