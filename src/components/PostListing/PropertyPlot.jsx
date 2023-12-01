import React from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';

const PropertyTypes = ({
  data,
  handlePropetySubType,
  activePropertySubType,
}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        padding: '8px',
        gap: '10px',
        '@media (max-width: 600px)': {
          gridTemplateColumns: '1fr',
        },
      }}
    >
      {data?.map((item, index) => (
        <Button
          sx={{
            borderRadius: '20px',
            border: `1px solid ${
              activePropertySubType === item?.title ? '#126FAA' : '#E7E7E7'
            }`,
            color: activePropertySubType === item?.title ? '#FB631C' : '#666',
            backgroundColor:
              activePropertySubType === item?.title
                ? '#F4F5F7 !important'
                : '#fff',
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
            padding: '5px',
          }}
          key={index}
          onClick={() => {
            handlePropetySubType(item?.title);
          }}
        >
          <Image
            src={
              activePropertySubType == item?.title
                ? item?.activeImage
                : item?.image
            }
            width={33}
            height={31}
            alt="property"
          />
          {item?.title}
        </Button>
      ))}
    </Box>
  );
};

export default PropertyTypes;
