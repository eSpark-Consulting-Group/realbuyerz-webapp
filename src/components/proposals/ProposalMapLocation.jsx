import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Proposals } from '@/app/constants/Proposals';

const ProposalMapLocation = ({ location }) => {
  const renderLocationInfo = () => {
    return Object.keys(Proposals.location)
      .slice(1) // Skip the first item
      .map((key) => (
        <Box key={key} sx={{ display: 'flex', gap: '5px' }}>
          <Typography
            sx={{
              color: '#333',
              fontSize: '14px',
              fontWeight: '700',
            }}
            variant="body1"
          >
            {Proposals.location[key]}
          </Typography>
          <Typography
            key={key}
            sx={{
              color: '#126FAA',
              fontSize: '14px',
              fontWeight: '500',
            }}
            variant="body1"
          >
            {location[key]}
          </Typography>
        </Box>
      ));
  };

  return (
    <Box sx={{ padding: '5px' }}>
      <Typography
        sx={{
          color: '#000',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        {Proposals.location.title}
      </Typography>
      {renderLocationInfo()}
      <iframe
        title="Property Location"
        src={location.geoLocation}
        width="100%"
        height="150"
        frameBorder="0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default ProposalMapLocation;
