import React, { useState } from 'react';

import { Typography, Box, Switch, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from './postlistingConstants';

const PropertInstallment = ({ PropertyInstallmentInfo }) => {
  const [propertyData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    toggleData: PropertyInstallmentInfo,
  });
  const handleInputChangeToggle = (name, checked) => {
    setPropertyData((prevData) => {
      const updatedToggleData = prevData.toggleData.map((item) => {
        if (item.label === name) {
          return {
            ...item,
            value: checked,
          };
        }
        return item;
      });
      const updatedsellingData = {
        ...prevData.sellingData,
        [name]: checked,
      };
      return {
        ...prevData,
        toggleData: updatedToggleData,
        sellingData: updatedsellingData,
      };
    });
  };
  const handleClickBtn = () => {
    console.log('frominstallmentcomponent', propertyData);
  };
  return (
    <>
      {propertyData.toggleData?.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '8px',
          }}
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
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
              <Image src={item.image} width={45} height={45} />
              <Typography
                sx={{
                  color: '#333333',
                }}
              >
                {item.title}{' '}
              </Typography>
              <span style={{ color: '#FF0000' }}>*</span>
            </Box>

            <Switch
              value={item.value}
              onChange={(event) =>
                handleInputChangeToggle(item.label, event.target.checked)
              }
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '10px',
            }}
          >
            <Typography
              sx={{
                color: '#333333',
                width: { xs: '100%', md: '650px' },
                marginLeft: { xs: '20px', md: '50px' },
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
      <Button onClick={handleClickBtn}>Toggle</Button>
    </>
  );
};
export default PropertInstallment;
