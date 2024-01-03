'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';
import Image from 'next/image';

import { useDispatch } from 'react-redux';
import { addCity } from '@/src/redux/slices/buyingForm/buyingSellingSlice';

const SelectCityType = ({ image, label, cityOptions }) => {
  const [city, setCity] = useState();
  const dispatch = useDispatch();
  const options = cityOptions?.map((opt) => opt?.label);

  const handleCityChange = (event) => {
    const val = event.target.innerText;
    setCity(val);
  };

  useEffect(() => {
    dispatch(addCity(city));
  }, [city]);

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
          options={options}
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
    </>
  );
};
export default SelectCityType;
