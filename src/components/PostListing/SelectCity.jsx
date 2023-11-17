import React, { useState } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';
import Image from 'next/image';

import { selectCityState } from '@/utils/selectCityOption';

const SelectCityType = ({
  image,
  label,
  propertyBuyingDetails,
  cityOptions,
}) => {
  const [propertyData, setPropertyData] = useState(
    selectCityState(propertyBuyingDetails, cityOptions)
  );
  const handleCityChange = (event, value) => {
    setPropertyData((prevData) => ({
      ...prevData,
      selectedCity: {
        sellingData: {
          ...prevData.selectedCity.sellingData,
          selectCityOptions: value ? value.label : '',
        },
        selectCityOption: prevData.selectedCity.selectCityOption.map(
          (city) => ({
            ...city,
            value: city.label === (value ? value.label : '') ? value.label : '',
          })
        ),
      },
    }));
  };
  console.log('qq', propertyData);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: {
            xs: '100%',
            md: '500px',
          },
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
            <Image src={image} width={47} height={45} alt="city" />
            <Typography
              sx={{
                color: '#333333',
              }}
            >
              {label}{' '}
            </Typography>
            <span style={{ color: '#FF0000' }}>*</span>
          </Box>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={propertyData.selectedCity.selectCityOption}
            sx={{
              width: { xs: '100%', sm: '300px', md: '350px' },
              marginLeft: { xs: '60px', md: '50px' },
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select City" />
            )}
            onChange={handleCityChange}
          />
        </Box>
      </Box>
    </>
  );
};
export default SelectCityType;
