import React from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import LocationOnIcon from '@mui/icons-material/LocationOn';

const BidHeader = ({ header }) => {
  return (
    <Box borderBottom={'1px solid #E4E4E4'}>
      <Typography
        variant="h1"
        sx={{ color: '#000', fontSize: '20px', fontWeight: '500', pb: '40px' }}
      >
        Posting Help Required
      </Typography>
      <Link href={`/dashboard/proposals/${header?.id}`}>
        <Typography
          variant="body1"
          sx={{
            color: '#126FAA',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            pb: '10px',
          }}
        >
          {header?.proposalTitle}
        </Typography>
      </Link>
      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: '500',
          pb: '20px',
        }}
      >
        <LocationOnIcon fontSize={'14px'} />
        {header?.propertyData?.propertyLocation?.city}
      </Typography>
    </Box>
  );
};

export default BidHeader;
