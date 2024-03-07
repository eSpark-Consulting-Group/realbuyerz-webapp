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
  const allProperties = projects.filter(
    (item) => item.agent_id === data?.id
  ).length;
  const forSellCount = projects.filter(
    (item) => item.agent_id === data?.id && item.purpose === 'Sell'
  ).length;
  const forSellHouses = projects.filter(
    (item) =>
      item.agent_id === data?.id &&
      item.purpose === 'Sell' &&
      item.propertyCategory === 'Houses'
  ).length;
  const forSellPlots = projects.filter(
    (item) =>
      item.agent_id === data?.id &&
      item.purpose === 'Sell' &&
      item.propertyCategory === 'Plots'
  ).length;
  const forSellCommercials = projects.filter(
    (item) =>
      item.agent_id === data?.id &&
      item.purpose === 'Sell' &&
      item.propertyCategory === 'Commercials'
  ).length;
  const forRentCount = projects.filter(
    (item) => item.agent_id === data?.id && item.purpose === 'Rent'
  ).length;
  const forRentHouses = projects.filter(
    (item) =>
      item.agent_id === data?.id &&
      item.purpose === 'Rent' &&
      item.propertyCategory === 'Houses'
  ).length;
  const forRentPlots = projects.filter(
    (item) =>
      item.agent_id === data?.id &&
      item.purpose === 'Rent' &&
      item.propertyCategory === 'Plots'
  ).length;
  const forRentCommercials = projects.filter(
    (item) =>
      item.agent_id === data?.id &&
      item.purpose === 'Rent' &&
      item.propertyCategory === 'Commercials'
  ).length;

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
          count={allProperties}
          title={`${data?.first_name} ${data?.last_name}`}
          link={allLink}
        />
        <Box sx={{ pt: 2 }}>
          <PropertyForSale
            data={forSellCount}
            sellCount={data?.counts?.sellCount}
            link={sellLink}
          />
          <PropertyCardSaleBody sellData={sellData} link={sellLink} />
        </Box>
        <Box sx={{ pt: 2 }}>
          <PropertyForRent
            data={forRentCount}
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
