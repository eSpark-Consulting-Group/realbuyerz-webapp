'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { createPropertySizeState } from '@/utils/propertySizeInfo';
import { useDispatch } from 'react-redux';
import {
  handlePostAmount,
  handlePostArea,
} from '@/src/redux/slices/previewPostListing/postListingSlice';
import {
  handleRequestAmount,
  handleRequestArea,
} from '@/src/redux/slices/previewPostRequest/postRequestSlice';

const PropertyAreaSize = ({
  propertySizeInformation,
  propertyBuyingDetails,
  selectCity,
  aeraSizes,
  currency,
  formik,
}) => {
  const [propertyArea, setPropertyArea] = useState({
    area: '',
    unit: '',
  });
  const [propertyAmount, setpropertyAmount] = useState({
    amount: '',
    unit: '',
  });
  const dispatch = useDispatch();

  const [propertyData] = useState(
    createPropertySizeState(
      propertySizeInformation,
      propertyBuyingDetails,
      selectCity
    )
  );

  useEffect(() => {
    dispatch(handlePostArea(propertyArea));
    dispatch(handleRequestArea(propertyArea));
  }, [propertyArea]);

  useEffect(() => {
    dispatch(handleRequestAmount(propertyAmount));
    dispatch(handlePostAmount(propertyAmount));
  }, [propertyAmount]);

  const handleInputChange = (key, val) => {
    if (key == 'area') {
      setPropertyArea({
        ...propertyArea,
        [key]: val,
      });
    } else {
      setpropertyAmount({
        ...propertyAmount,
        [key]: val,
      });
    }
    formik.setFieldValue(key, val);
  };

  const handleCityChange = (e, index, name) => {
    const val = e.target.innerText;
    if (index == 0) {
      setPropertyArea({
        ...propertyArea,
        unit: val,
      });
    } else {
      setpropertyAmount({
        ...propertyAmount,
        unit: val,
      });
    }
    formik.setFieldValue(name, val);
  };
  return (
    <>
      {propertyData?.propertySizeAndAmount?.propertySize?.map((item, index) => (
        <Box
          key={index}
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
          <Box
            sx={{
              width: { xs: '90%', sm: '45px' },
              pl: '0 !important',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Box
                component={'img'}
                src={item.image}
                sx={{ width: { xs: 37, sm: 47 }, height: { xs: 35, sm: 45 } }}
                alt="areasize"
              />
              <Typography
                sx={{
                  fontSize: { xs: '17px', sm: '20px' },
                  fontWeight: 400,
                  color: '#333333',
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
                position: 'relative',
                gap: 2,
                mt: 0.8,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '17px', sm: '20px' },
                  fontWeight: 400,
                  color: '#333333',
                  display: { xs: 'none', sm: 'flex' },
                }}
              >
                {item.text}
                <span style={{ marginLeft: '5px', color: '#FF0000' }}>*</span>
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                  gap: '10px',
                }}
              >
                <TextField
                  placeholder={item?.placeholder}
                  type="number"
                  sx={{
                    width: { xs: '100%', sm: `calc(100% - ${160}px)` },
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#969696',
                    '& input[type=number]': {
                      '-moz-appearance': 'textfield',
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      '-webkit-appearance': 'none',
                      margin: 0,
                    },
                    '& fieldset': {
                      border: formik.errors[item?.label] && `solid 1px red`,
                    },
                  }}
                  InputProps={{
                    style: {
                      border: '1px solid #E7E7E7',
                      borderRadius: '10px',
                    },
                  }}
                  name={item?.label}
                  onChange={(e) =>
                    handleInputChange(item?.label, e.target.value)
                  }
                  value={formik[item?.label]}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[item?.label] &&
                    Boolean(formik.errors[item?.label])
                  }
                />
                <Autocomplete
                  name={item?.unit}
                  disablePortal
                  id="combo-box-demo"
                  options={item.label == 'area' ? aeraSizes : currency}
                  popupIcon={
                    <KeyboardArrowDownIcon sx={{ color: '#777777' }} />
                  }
                  sx={{
                    width: { xs: '100%', sm: '160px' },
                    '& .MuiAutocomplete-inputRoot': {
                      border: `1px solid ${formik.errors[item?.unit] ? 'red' : 'none'}`,
                      borderRadius: '10px',
                    },
                    '& .css-1v0wyq6-MuiButtonBase-root-MuiIconButton-root-MuiAutocomplete-clearIndicator':
                      {
                        color: '#777777',
                        display: 'inline-flex',
                        visibility: 'visible',
                        '&:hover': {
                          color: '#777777',
                        },
                      },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={item?.dropPlaceholder}
                      InputLabelProps={{
                        sx: {
                          fontSize: { xs: '14px', md: '16px', lg: '18px' },
                          fontWeight: 400,
                          color: '#969696',
                          mr: 10,
                        },
                      }}
                    />
                  )}
                  onChange={(e) => handleCityChange(e, index, item?.unit)}
                />
              </Box>
              {(formik.errors[item?.label] || formik.errors[item?.unit]) && (
                <Typography
                  sx={{
                    position: 'absolute',
                    bottom: '-25px',
                    color: 'red',
                  }}
                >
                  {'Please enter and select values'}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default PropertyAreaSize;
