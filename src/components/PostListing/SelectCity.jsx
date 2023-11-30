import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Autocomplete,
  Button,
} from '@mui/material';
import Image from 'next/image';

import { selectCityState } from '@/utils/selectCityOption';
import { savePropertyData } from '@/src/redux/slices/postlisting/postListingSlice';
import { useDispatch } from 'react-redux';

const SelectCityType = ({
  image,
  label,
  propertyBuyingDetails,
  cityOptions,
}) => {
  const [propertyData, setPropertyData] = useState(
    selectCityState(propertyBuyingDetails, cityOptions)
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: savePropertyData,
      payload: propertyData.selectedCity.sellingData,
    });
    console.log(propertyData);
  };
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
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '6px',
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
            gap: '10px',
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
            width: { xs: '100%', sm: '300px', md: '320px' },
            marginLeft: { xs: '30px', md: '50px' },
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select City" />
          )}
          onChange={handleCityChange}
        />
      </Box>
      <Button onClick={handleClick}>Ok</Button>
    </>
  );
};
export default SelectCityType;
