import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Proposals } from '@/app/constants/Proposals';

const ProposalMapLocation = ({ proposal }) => {
  const renderLocationInfo = () => {
    return Object.keys(Proposals.location)
      .slice(1) // Skip the first item
      .map((key) => (
        <Box
          key={key}
          sx={{
            display: 'flex',
            gap: 0.8,
            pb: 0.4,
          }}
        >
          <Typography
            sx={{
              color: '#333',
              fontSize: '14px',
              fontWeight: 600,
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
              fontWeight: 500,
            }}
            variant="body1"
          >
            {proposal?.propertyData?.propertyLocation[key]}
          </Typography>
        </Box>
      ));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{
          color: '#000',
          fontSize: '20px',
          fontWeight: 500,
          mb: 1,
        }}
      >
        {Proposals.location.title}
      </Typography>
      {renderLocationInfo()}
      <Box sx={{ mt: 2 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.341891430968!2d67.115604!3d24.929158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33feab1c28595%3A0xa3b2a5dc2f97a82e!2seSpark%20Consulting%20Group!5e0!3m2!1sen!2s!4v1702632437533!5m2!1sen!2s"
          title="Property Location"
          width="100%"
          height="150"
          allowfullscreen=""
          frameBorder="0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default ProposalMapLocation;
