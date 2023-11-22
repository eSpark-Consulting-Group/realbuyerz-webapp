import React, { useState } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';
import Image from 'next/image';

import { createPropertySizeState } from '@/utils/propertySizeInfo';

const PropertyAreaSize = ({
  propertySizeInformation,
  propertyBuyingDetails,
  selectCity,
}) => {
  const [propertyData, setPropertyData] = useState(
    createPropertySizeState(
      propertySizeInformation,
      propertyBuyingDetails,
      selectCity
    )
  );
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevData) => ({
      ...prevData,
      propertySizeAndAmount: {
        sellingData: {
          ...prevData.propertySizeAndAmount.sellingData,
          [name]: value,
        },
        propertySize: prevData.propertySizeAndAmount.propertySize.map((item) =>
          item.label === name ? { ...item, value } : item
        ),
        selectCityOption: prevData.propertySizeAndAmount.selectCityOption,
      },
    }));
  };

  const handleCityChange = (event, value) => {
    setPropertyData((prevData) => ({
      ...prevData,
      propertySizeAndAmount: {
        ...prevData.propertySizeAndAmount,
        sellingData: {
          ...prevData.propertySizeAndAmount.sellingData,
          selectCityOptions: value ? value.label : '',
        },
        selectCityOption: prevData.propertySizeAndAmount.selectCityOption.map(
          (city) => ({
            ...city,
            value: city.label === (value ? value.label : '') ? value.label : '',
          })
        ),
      },
    }));
  };
  return (
    <>
      {propertyData.propertySizeAndAmount.propertySize?.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            padding: '5px',
          }}
          key={index}
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
            <Image src={item.image} width={45} height={45} alt="areasize" />
            <Typography
              sx={{
                color: '#333333',
              }}
            >
              {item.text}{' '}
            </Typography>
            <span style={{ color: '#FF0000' }}>*</span>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              gap: '10px',
              marginLeft: '50px',
            }}
          >
            <TextField
              placeholder={item.placeholder}
              sx={{
                width: { xs: '100%', md: '500px' },
                '@media (min-width: 960px) and (max-width: 1500px)': {
                  width: '250px',
                },
              }}
              name={item.label}
              onChange={handleInputChange}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={propertyData?.propertySizeAndAmount?.selectCityOption}
              sx={{
                width: { xs: '50%', md: '200px' },
                '@media (min-width: 961px) and (max-width: 1500px)': {
                  width: '150px',
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select City"
                  InputLabelProps={{
                    sx: { fontSize: { xs: '10px', md: '15px' } },
                  }}
                />
              )}
              onChange={handleCityChange}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};
export default PropertyAreaSize;
