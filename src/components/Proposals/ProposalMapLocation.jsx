import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const ProposalMapLocation = ({ location }) => {
  return (
    <Box sx={{ p: 4, pb: 5, borderBottom: '1px solid #E4E4E4' }}>
      <Typography
        sx={{
          color: '#000',
          fontSize: '20px',
          fontWeight: 500,
          mb: 1,
        }}
      >
        {location?.title}
      </Typography>
      <Box
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
          {location?.purpose}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>
      <Box
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
          {location?.propertyType}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>
      <Box
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
          {location?.city}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>
      <Box
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
          {location?.area}
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: 500,
          }}
          variant="body1"
        >
          0
        </Typography>
      </Box>

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
