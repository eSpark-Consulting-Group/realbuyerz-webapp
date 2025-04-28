'use client';
import { useState } from 'react';

import { Box, TextField, Autocomplete } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LabelDisplay from './LabelDisplay';
import DisplayError from './DisplayError';

import { createPropertySizeState } from '@/src/utils/propertySizeInfo';

import { boxStyles } from './styles';

const PropertyAreaSize = ({
  propertySizeInformation,
  propertyBuyingDetails,
  selectCity,
  aeraSizes,
  currency,
  formik,
}) => {
  const [propertyData] = useState(
    createPropertySizeState(
      propertySizeInformation,
      propertyBuyingDetails,
      selectCity
    )
  );

  return (
    <>
      {propertyData?.propertySizeAndAmount?.propertySize?.map((item, index) => (
        <Box
          key={index}
          sx={{
            ...boxStyles('auto', 2),
          }}
        >
          <LabelDisplay
            text={item?.text}
            image={item?.image}
            alt={'areasize'}
            span
            isMobile
          />

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
              <LabelDisplay text={item?.text} span />

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
                  helperText={`In ${item?.text == 'Amount ' ? 'PKR' : 'sq.ft'}`}
                  type="string"
                  sx={{
                    width: { xs: '100%', sm: `calc(100% - ${160}px)` },
                    fontSize: '18px',
                    fontWeight: 400,
                    color: '#969696',
                    '& input[type=number]': {
                      MozAppearance: 'textfield',
                    },
                    '& input[type=number]::-webkit-outer-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '& input[type=number]::-webkit-inner-spin-button': {
                      WebkitAppearance: 'none',
                      margin: 0,
                    },
                    '& fieldset': {
                      border: formik?.errors[item?.label]
                        ? 'solid 1px red'
                        : '1px solid #E7E7E7',
                      borderRadius: '10px',
                    },
                  }}
                  InputProps={{
                    style: {
                      fontSize: { xs: '15px', md: '18px' },
                    },
                  }}
                  name={item?.label}
                  onChange={formik?.handleChange}
                  value={formik?.values[item?.label]}
                  onBlur={formik?.handleBlur}
                  error={
                    formik?.touched[item?.label] &&
                    Boolean(formik?.errors[item?.label])
                  }
                />

                <Autocomplete
                  name={item?.unit}
                  disabled
                  value={item?.text == 'Amount ' ? 'PKR' : 'sq.ft' || null}
                  disablePortal
                  id="combo-box-demo"
                  options={item?.label === 'area' ? aeraSizes : currency}
                  popupIcon={
                    <KeyboardArrowDownIcon sx={{ color: '#777777' }} />
                  }
                  clearIcon={null}
                  sx={{
                    width: { xs: '100%', sm: '160px' },
                    '& .MuiAutocomplete-inputRoot': {
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    },
                    '& fieldset': {
                      border: formik?.errors[item?.label]
                        ? 'solid 1px red'
                        : '1px solid #E7E7E7',
                      borderRadius: '10px',
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={item?.dropPlaceholder}
                      InputLabelProps={{
                        sx: {
                          fontSize: { xs: '14px', md: '15px', lg: '15px' },
                          fontWeight: 400,
                          color: '#969696',
                          mr: 10,
                        },
                      }}
                    />
                  )}
                  onChange={(e, value) => {
                    formik?.handleChange(item?.unit)(value || '');
                  }}
                />
              </Box>

              <DisplayError
                doubleCheck
                formik={formik}
                errorLabel={{ first: item?.label, second: item?.unit }}
                extra={{ position: 'absolute', bottom: '-25px' }}
                errorText="Please enter and select values"
              />
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default PropertyAreaSize;
