import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Autocomplete,
  Button,
} from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from './postlistingConstants';
import { PROPERTY_INFORMATION } from './postlistingConstants';

const AreaSize = ({ PropertySizeInformation }) => {
  const [propertyData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    propertySize: PropertySizeInformation.map((item) => ({
      ...item,
      value: PROPERTY_BUYING_DETAIL.sellingDetails[item.label],
    })),
    selectCity: PROPERTY_INFORMATION.selectCityOptions,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevData) => ({
      ...prevData,
      sellingData: {
        ...prevData.sellingData,
        [name]: value,
      },
      propertySize: prevData.propertySize.map((item) =>
        item.label === name ? { ...item, value } : item
      ),
    }));
  };
  const handleCityChange = (value) => {
    setPropertyData((prevData) => ({
      ...prevData,
      sellingData: {
        ...prevData.sellingData,
        selectCityOptions: value ? value.label : '',
      },
    }));
  };
  const handleClickBtn = () => {
    console.log('fromareacomponent', propertyData);
  };
  return (
    <>
      {propertyData.propertySize?.map((item, index) => (
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
              }}
              name={item.label}
              onChange={handleInputChange}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={propertyData.selectCity}
              sx={{ width: { xs: '50%', md: '300px' } }}
              renderInput={(params) => (
                <TextField {...params} label="Select City" />
              )}
              onChange={handleCityChange}
            />
            {/* <Button onClick={handleClick}>Ok</Button> */}

            {/* <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={PROPERTY_INFORMATION.selectCityOptions}
              sx={{ width: 200 }}
              renderInput={(params) => (
                <TextField {...params} label="Select City" />
              )}
            /> */}
          </Box>
        </Box>
      ))}
      <Button onClick={handleClickBtn}>OK</Button>
    </>
  );
};
export default AreaSize;
