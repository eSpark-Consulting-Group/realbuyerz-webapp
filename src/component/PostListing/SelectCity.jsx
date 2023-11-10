import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Autocomplete,
  Button,
} from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from './postlistingConstants';
import { PROPERTY_BUYING_DETAIL } from './postlistingConstants';

const SelectCityType = ({ image, label }) => {
  const [propertData, setPropertyData] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
    selectCity: PROPERTY_INFORMATION.selectCityOptions,
  });
  const handleCityChange = (event, value) => {
    setPropertyData((prevData) => ({
      ...prevData,
      sellingData: {
        ...prevData.sellingData,
        selectCityOptions: value ? value.label : '',
      },
    }));
  };

  const handleClick = () => {
    console.log('fromselectcity', propertData);
  };
  return (
    <>
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
        <Image src={image} width={47} height={45} />
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
        options={propertData.selectCity}
        sx={{ width: { xs: '50%', md: '300px' } }}
        renderInput={(params) => <TextField {...params} label="Select City" />}
        onChange={handleCityChange}
      />

      <Button onClick={handleClick}>Ok</Button>
    </>
  );
};
export default SelectCityType;
