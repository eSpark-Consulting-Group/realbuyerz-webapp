'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';

import { useDispatch } from 'react-redux';
import { handleReuestCity } from '@/src/redux/slices/previewPostRequest/postRequestSlice';
import { handlePostCity } from '@/src/redux/slices/previewPostListing/postListingSlice';

const SelectCityType = ({ image, label, cityOptions, formik }) => {
  const [city, setCity] = useState();
  const dispatch = useDispatch();
  const options = cityOptions?.map((opt) => opt?.label);

  const handleCityChange = (event) => {
    const val = event.target.innerText;
    formik.setFieldValue('city',val)
    setCity(val);
  };

  useEffect(() => {
    dispatch(handleReuestCity(city));
    dispatch(handlePostCity(city));
  }, [city]);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'start' },
          justifyContent: { xs: 'center', md: 'center' },
          gap: 2,
          pb: { xs: 2, sm: 2 },
        }}
      >
        <Box sx={{ width: { xs: '90%', sm: '45px' }, pl: '0 !important' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              gap: 1.5,
            }}
          >
            <Box
              component={'img'}
              sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
              src={image}
              alt="city"
            />
            <Typography
              sx={{
                fontSize: { xs: '17px', sm: '20px' },
                fontWeight: 400,
                color: '#333333',
                display: { xs: 'flex', sm: 'none' },
              }}
            >
              {label}
              <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: { xs: '90%', sm: '80%', md: '80%', lg: '70%' } }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position:'relative',
              gap: 1,
              mt: 0.8,
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '17px', sm: '20px' },
                fontWeight: 400,
                color: '#333333',
                mb: 2,
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              {label}
              <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
            </Typography>
            <Autocomplete
              name={'city'}
              value={formik.city}
              // onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.city && Boolean(formik.errors.city)}
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{
                '& .MuiAutocomplete-inputRoot': {
                  borderRadius: '10px',
                  border: `1px solid ${formik.errors.city ? 'red' :'#E7E7E7'}`,
                },
                width: { xs: '100%', sm: '94%', md: '100%', lg: '400px' },
              }}
              renderInput={(params) => (
                <TextField {...params} label="Select City" />
              )}
              onChange={handleCityChange}
            />
            {formik.errors['city'] && <Typography sx={{
                  position:'absolute',
                  bottom:'-25px',
                  color:'red'
                }}>{formik.errors['city']}</Typography>}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SelectCityType;
