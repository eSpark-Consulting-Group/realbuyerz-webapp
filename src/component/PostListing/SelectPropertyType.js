'use client';
import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import { PropertyInformation } from './postlistingConstants';
const SelectProperyType = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: { xs: '10px', md: '0' },
        width: { xs: '80%', md: '600px' },
        // padding: '50px',
        backgroundImage: 'url("/assets/images/realbuyer.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        mx: 'auto',
        '@media (max-width: 600px)': {
          backgroundImage: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '100%', md: '500px' },
          // justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignSelf: 'flex-start',
            alignItems: 'center',
            fontSize: '20px',
            fontFamily: 'Inter',
            fontWeight: 400,
            gap: '8px',
          }}
        >
          <Image
            src={PropertyInformation.propertyType.images}
            width={47}
            height={45}
          />
          <Typography
            sx={{
              color: '#333333',
            }}
          >
            {PropertyInformation.propertyType.text}{' '}
          </Typography>
          <span style={{ color: '#FF0000' }}>*</span>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button sx={{ color: '#FB631C' }}>House</Button>
          <Button sx={{ color: '#666' }}>Plot</Button>
          <Button sx={{ color: '#666' }}>Commercial</Button>
        </Box>
        <hr></hr>
        {/* {PropertyInformation.IconTitle.map((item, index) => (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            sx={{
              borderRadius: '20px',
              border: '1px solid #E7E7E7',
              color: '#666',
              background: '#fff',
            }}
            key={index}
          >
            <Image src={item.image} width={33} height={31} />
            <Typography>{item.title}</Typography>
          </Button>
        </Box>
      ))} */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            padding: '8px',
            gap: '10px',
            '@media (max-width: 600px)': {
              gridTemplateColumns: '1fr', // For small screens, display buttons in a single column
            },
          }}
        >
          {PropertyInformation.IconTitle.map((item, index) => (
            <Button
              sx={{
                borderRadius: '20px',
                border: '1px solid #E7E7E7',
                color: '#666',
                background: '#fff',
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: 'center',
                padding: '5px',
              }}
              key={index}
              disabled={index === activeButtonIndex}
              onClick={() => handleButtonClick(index)}
            >
              <Image src={item.image} width={33} height={31} />
              <Typography>{item.title}</Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SelectProperyType;
