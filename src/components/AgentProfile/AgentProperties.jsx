import React from 'react';
import { Box, useTheme } from '@mui/material';

import PropertyCardSaleBody from './Properties/PropertyCardSaleBody';
import PropertyCardRentBody from './Properties/PropertyCardRentBody';
import AgentTitle from './AgentTitle';
import PropertyForSale from './Properties/PropertyForSale';
import PropertyForRent from './Properties/PropertyForRent';
import { useSelector } from 'react-redux';

const AgentProperties = ({ data, allLink, sellLink, rentLink }) => {
  const theme = useTheme();
  const projects = useSelector((state) => state.postListingAds.agentPostings);

  function filterProjects(projects, agentId, purpose, propertyCategory) {
    return projects.filter(
      (item) =>
        item.agent_id === agentId &&
        item.purpose === purpose &&
        item.status === 'submited'
    ).length;
  }
  function filterProjectsWith(projects, agentId, purpose, propertyCategory) {
    return projects.filter(
      (item) =>
        item.agent_id === agentId &&
        item.purpose === purpose &&
        item.propertyCategory === propertyCategory &&
        item.status === 'submited'
    ).length;
  }
  const allProperties = projects.filter(
    (item) => item.agent_id === data?.id
  ).length;
  const forSellCount = filterProjects(projects, data?.id, 'Sell');
  const forSellHouses = filterProjectsWith(
    projects,
    data?.id,
    'Sell',
    'Houses'
  );
  const forSellPlots = filterProjectsWith(projects, data?.id, 'Sell', 'Plots');
  const forSellCommercials = filterProjectsWith(
    projects,
    data?.id,
    'Sell',
    'Commercials'
  );
  const forRentCount = filterProjects(projects, data?.id, 'Rent');
  const forRentHouses = filterProjectsWith(
    projects,
    data?.id,
    'Rent',
    'Houses'
  );
  const forRentPlots = filterProjectsWith(projects, data?.id, 'Rent', 'Plots');
  const forRentCommercials = filterProjectsWith(
    projects,
    data?.id,
    'Rent',
    'Commercials'
  );

  const sellData = [forSellHouses, forSellPlots, forSellCommercials];
  const rentData = [forRentHouses, forRentPlots, forRentCommercials];
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
        <AgentTitle
          count={allProperties || ''}
          title={`${data?.first_name} ${data?.last_name}`}
          link={allLink}
        />
        <Box sx={{ pt: 2 }}>
          <PropertyForSale
            data={forSellCount || 'No'}
            sellCount={data?.counts?.sellCount}
            link={sellLink}
          />
          <PropertyCardSaleBody sellData={sellData} link={sellLink} />
        </Box>
        <Box sx={{ pt: 2 }}>
          <PropertyForRent
            data={forRentCount || 'No'}
            rentCount={data?.counts?.rentCount}
            link={rentLink}
          />
          <PropertyCardRentBody rentData={rentData} link={rentLink} />
        </Box>
      </Box>
    </Box>
  );
};

export default AgentProperties;
