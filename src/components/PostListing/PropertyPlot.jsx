import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';

const PropertyTypes = ({ handleButtonClick, data }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  const handleActiveButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
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
            border: '1px solid #E7E7E7',
            color: '#666',
            background: '#fff',
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
            padding: '5px',
          }}
          key={index}
          disabled={index === activeButtonIndex}
          onClick={() => {
            handleActiveButtonClick(index);
            handleButtonClick(index);
          }}
        >
          <Image src={item.image} width={33} height={31} alt="property" />
          {item.title}
        </Button>
      ))}
    </Box>
  );
};

export default PropertyTypes;
