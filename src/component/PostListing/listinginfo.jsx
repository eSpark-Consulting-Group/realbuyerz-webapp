import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Typography } from '@mui/material';

import { PropertyInformation } from './postlistingConstants';

const ListingInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {PropertyInformation.property.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '15px',
          }}
          key={index}
        >
          <Image src={item.image} width={40} height={40} />
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '22px' },
              fontFamily: 'Inter',
              fontWeight: 400,
              color: '#909394',
            }}
          >
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
export default ListingInfo;
