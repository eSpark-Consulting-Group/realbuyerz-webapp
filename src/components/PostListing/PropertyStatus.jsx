import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from '../../../app/constants/postlistingConstants';

const PropertyStatus = ({ propertyInformation, propertySell }) => {
  const [propertyData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    purposeData: propertySell.map((item) => ({ ...item, value: '' })),
  });

  const handleButtonClick = (index) => {
    const selectedText = propertySell[index].text;
    setPropertyData((prevData) => {
      const updatedPurposeData = [...prevData.purposeData];
      updatedPurposeData[index].value = selectedText;
      const updatedSellingData = {
        ...prevData.sellingData,
        selectedPurpose: selectedText,
      };
      return {
        ...prevData,
        sellingData: updatedSellingData,
        purposeData: updatedPurposeData,
      };
    });
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '500px' },
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
              alignItems: 'center',
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: 400,
              gap: '8px',
            }}
          >
            <Image
              src={propertyInformation.images}
              width={47}
              height={45}
              alt="purpose"
            />
            <Typography
              sx={{
                color: '#333333',
              }}
            >
              {propertyInformation.text}{' '}
            </Typography>
            <span style={{ color: '#FF0000' }}>*</span>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '10px',
              marginLeft: { xs: '50px', md: '50px' },
            }}
          >
            {propertyData.purposeData.map((item, index) => (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: '20px',
                  border: '1px #E7E7E7 solid',
                  width: { xs: '120px', md: '150px' },
                  height: { xs: '50px', md: '60px' },
                  alignItems: 'center',
                }}
                key={index}
              >
                <Image
                  src={item.images}
                  width={33}
                  height={31}
                  alt="sell-rent"
                />
                <Button onClick={() => handleButtonClick(index)}>
                  {item.text}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default PropertyStatus;
