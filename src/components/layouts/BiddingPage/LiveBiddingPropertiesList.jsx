import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const LiveBiddingPropertiesList = ({ list }) => {
  return (
    <Box sx={{ paddingLeft: '17px' }}>
      {list?.map((item, index) => (
        <div key={index}>
          {Object.keys(item).map((key) => (
            <Box key={key} sx={{ display: 'flex' }}>
              <Typography
                variant="body1"
                sx={{ fontWeight: 'bold', mx: 0.5, color: '#333333' }}
              >
                {key}:
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: '#333333', fontWeight: 500 }}
              >
                {item[key]}
              </Typography>
            </Box>
          ))}
        </div>
      ))}
    </Box>
  );
};

export default LiveBiddingPropertiesList;
