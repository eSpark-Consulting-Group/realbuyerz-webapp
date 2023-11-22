import React, { useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import Image from 'next/image';

import { createInformationState } from '@/utils/addInfo';

const PropertyInformation = ({ propertyDetails, propertyBuyingDetails }) => {
  const [propertyData, setPropertyData] = useState(
    createInformationState(propertyDetails, propertyBuyingDetails)
  );
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevData) => ({
      ...prevData,
      adInfoData: {
        sellingData: {
          ...prevData.adInfoData.sellingData,
          [name]: value,
        },
        addInfo: prevData.adInfoData.addInfo.map((item) =>
          item.label === name ? { ...item, value } : item
        ),
      },
    }));
  };
  const specialIndex = 1;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '60px',
        width: '65%',
      }}
    >
      {propertyData.adInfoData.addInfo.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              alignSelf: 'flex-start',
              justifyContent: 'center',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: 400,
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Image src={item.image} width={45} height={45} alt="title" />
            <Typography
              sx={{
                color: '#333333',
              }}
            >
              {item.text}
            </Typography>
            <span style={{ color: '#FF0000' }}>*</span>
          </Box>
          <TextField
            placeholder={item.placeholder}
            sx={{
              marginLeft: { xs: '10px', sm: '40px', md: '50px' },
              width: { xs: '90%', md: '600px' },
              '@media (min-width: 960px) and (max-width: 1300px)': {
                width: '300px',
              },
              '& textarea': {
                minHeight: index === specialIndex ? '192px' : '0',
              },
            }}
            name={item.label}
            onChange={handleInputChange}
            multiline
          />
        </Box>
      ))}
    </Box>
  );
};
export default PropertyInformation;
