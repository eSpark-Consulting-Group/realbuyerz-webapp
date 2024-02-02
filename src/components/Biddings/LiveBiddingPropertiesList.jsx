import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const LiveBiddingPropertiesList = ({ locationAndPurpose, areaSize }) => {
  return (
    <Box
      sx={{
        width: '100%',
        paddingLeft: '17px',
        // display: 'flex',
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
          {'Status:'}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {locationAndPurpose?.adPurpose}
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
          {'City:'}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {locationAndPurpose?.city}
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
          {'Area:'}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {`${areaSize?.area} ${areaSize?.unit}`}
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
          {'Proposal:'}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {/* {`${areaSize?.area} ${areaSize?.unit}`} */}
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
          {'Connects:'}
        </Typography>
        <Typography variant="body1" sx={{ color: '#333333', fontWeight: 500 }}>
          {/* {locationAndPurpose?.adPurpose} */}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiveBiddingPropertiesList;
