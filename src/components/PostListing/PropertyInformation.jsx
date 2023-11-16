import React, { useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from '../../../app/constants/postlistingConstants';

const PropertyInformation = ({ propertyInformation }) => {
  const [propertyData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    addInfo: propertyInformation.map((item) => ({
      ...item,
      value: PROPERTY_BUYING_DETAIL.sellingDetails[item.label],
    })),
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevData) => ({
      ...prevData,
      sellingData: {
        ...prevData.sellingData,
        [name]: value,
      },
      addInfo: prevData.addInfo.map((item) =>
        item.label === name ? { ...item, value } : item
      ),
    }));
  };
  console.log('property', propertyData);
  const specialIndex = 1;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '40px',
        width: '700px',
      }}
    >
      {propertyData.addInfo.map((item, index) => (
        <Box
          sx={{
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
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
              marginLeft: { xs: '0px', md: '50px' },
              width: { xs: '90%', md: '600px' },
              '@media (min-width: 961px) and (max-width: 1200px)': {
                width: '300px',
              },
              '& placeholder': {
                paddingRight: '10px',
              },
              '& textarea': {
                padding: index === specialIndex ? '30px' : 'auto',
                marginLeft: index === specialIndex ? '-27px' : 0,
                marginTop: index === specialIndex ? '10px' : 0,
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
