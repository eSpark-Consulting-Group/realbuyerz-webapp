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
    <Box sx={{
      display: "flex",
      width: { xs: '100%', md: '500px' },
      height: { xs: "500px", md: "300px" },
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: { xs: '10px', md: '0' },
          width: '500px',
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
            justifyContent: "flex-start"
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
            {PropertyInformation.IconTitle.map((item, index) => (
              <Button
                sx={{

                  borderRadius: '20px',
                  border: '1px solid #E7E7E7',
                  color: '#666',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: { xs: 'row', md: 'row' },
                  alignItems: 'center',
                  justifyContent: "center",
                  gap: "9px",
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
    </Box>
  );
};

export default SelectProperyType;
