'use client';
import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from '../../../app/constants/postlistingConstants';

const SelectProperyType = ({ image, label, iconTitle }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  const handleActiveButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
  const [propertyData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    propertyTypeData: iconTitle.map((item) => ({ ...item, value: '' })),
  });
  const handleButtonClick = (index) => {
    const selectedText = iconTitle[index].title;

    setPropertyData((prevData) => {
      const updatedPurposeData = [...prevData.propertyTypeData];
      updatedPurposeData[index].value = selectedText;
      const updatedSellingData = {
        ...prevData.sellingData,
        SelectPropertyType: {
          ...prevData.sellingData.SelectPropertyType,
          Home: {
            ...prevData.sellingData.SelectPropertyType.Home,
            [iconTitle[index].label]: selectedText,
          },
        },
      };
      if (selectedText === 'Rent House') {
        updatedSellingData.SelectedPurpose = {
          ...prevData.sellingData.SelectedPurpose,
          rentBtn: selectedText,
        };
      }
      return {
        ...prevData,
        sellingData: updatedSellingData,
        propertyTypeData: updatedPurposeData,
      };
    });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        width: { xs: '100%', md: '500px' },
        height: { xs: '500px', md: '300px' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
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
          <Image src={image} width={47} height={45} alt="properttype" />
          <Typography
            sx={{
              color: '#333333',
            }}
          >
            {label}{' '}
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
          {propertyData.propertyTypeData.map((item, index) => (
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
      </Box>
    </Box>
  );
};

export default SelectProperyType;
