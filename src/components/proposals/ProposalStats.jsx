import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Proposals } from '@/app/constants/Proposals';

const ProposalStats = ({ stats }) => {
  const renderStatsInfo = () => {
    return Object.keys(stats).map((key) => (
      <Box key={key} sx={{ display: 'flex', gap: '5px' }}>
        <Typography
          sx={{
            color: '#333',
            fontSize: '14px',
            fontWeight: '700',
          }}
          variant="body1"
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}:
        </Typography>
        <Typography
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontWeight: '500',
          }}
          variant="body1"
        >
          {stats[key]}
        </Typography>
      </Box>
    ));
  };

  return (
    <Box sx={{ padding: '5px' }}>
      <Typography sx={{ fontSize: '18px', fontWeight: 500 }}>
        {Proposals.stats.title}
      </Typography>
      {renderStatsInfo()}
    </Box>
  );
};

export default ProposalStats;
