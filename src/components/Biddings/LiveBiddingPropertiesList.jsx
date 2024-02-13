import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const LiveBiddingPropertiesList = ({
  city,
  status,
  location,
  proposal,
  connects,
  cardKeys,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        paddingLeft: '17px',
        '@media(min-width: 280px) and (max-width: 445px)': {
          justifyContent: 'center',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
        >
          {cardKeys?.status}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {status}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
        >
          {cardKeys?.city}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {city}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
        >
          {cardKeys?.area}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {location}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
        >
          {cardKeys?.proposal}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {proposal}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          '@media(min-width: 280px) and (max-width: 445px)': {
            justifyContent: 'center',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
        >
          {cardKeys?.connects}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {connects}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiveBiddingPropertiesList;
