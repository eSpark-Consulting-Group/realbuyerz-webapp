'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';

import { addInformation } from '@/src/redux/slices/buyingForm/buyingSellingSlice';

const PropertyInformation = ({ propertyData }) => {
  const [adInformation, setAdInformation] = useState({});
  const dispatch = useDispatch();
  const handleChange = (key, val) => {
    setAdInformation({
      ...adInformation,
      [key]: val,
    });
  };

  useEffect(() => {
    dispatch(addInformation(adInformation));
  }, [adInformation]);

  const specialIndex = 1;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: { xs: 1, sm: 2 },
        }}
      >
        {propertyData?.adInfoData?.addInfo.map((item, index) => (
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'start' },
              justifyContent: { xs: 'center', md: 'center' },
              gap: 2,
              pb: { xs: 1, sm: 2 },
            }}
            key={index}
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
                  src={item?.image}
                  sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
                  alt="purpose"
                />
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: { xs: '18px', sm: '20px' },
                    fontWeight: 400,
                    display: { xs: 'flex', sm: 'none' },
                  }}
                >
                  {item?.text}
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
                  gap: 2,
                  mt: 0.8,
                  mb: 1,
                }}
              >
                <Typography
                  sx={{
                    color: '#333333',
                    fontSize: { xs: '18px', sm: '20px' },
                    fontWeight: 400,
                    display: { xs: 'none', sm: 'flex' },
                    mb: 2,
                  }}
                >
                  {item?.text}
                  <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
                </Typography>
                <TextField
                  placeholder={item?.placeholder}
                  sx={{
                    mb: 3,
                    width: { xs: '100%', lg: '745px' },
                    '& textarea': {
                      minHeight: index === specialIndex ? '192px' : '0',
                    },
                  }}
                  name={item?.label}
                  onChange={(e) => handleChange(item?.label, e.target.value)}
                  multiline
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default PropertyInformation;
