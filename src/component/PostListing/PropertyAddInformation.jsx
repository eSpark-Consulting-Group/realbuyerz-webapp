import React, { useState } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from './postlistingConstants';

const PropertyAddInformation = ({
  PropertyInformation,
  inputChange,
  handleClickButton,
}) => {
  const [propertyData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    addInfo: PropertyInformation.map((item) => ({
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
  const handleClickBtn = () => {
    console.log('fromaddcomponnet', propertyData);
  };
  console.log('property', propertyData);
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
            key={index}
          >
            <Image src={item.image} width={45} height={45} />
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
              width: { xs: '100%', md: '600px' },
              '& placholder': {
                textOverflow: 'ellipsis',
                whiteSpace: { xs: 'nowrap', md: 'normal' },
                overflow: 'hidden',
              },
            }}
            name={item.label}
            onChange={handleInputChange}
            multiline
          />
        </Box>
      ))}
      <Button onClick={handleClickBtn}>OK</Button>
    </Box>
  );
};
export default PropertyAddInformation;
