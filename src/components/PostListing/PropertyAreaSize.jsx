import React, { useState } from 'react';
import { Typography, Box, TextField, Autocomplete } from '@mui/material';
import Image from 'next/image';

import { createPropertySizeState } from '@/utils/propertySizeInfo';

const PropertyAreaSize = ({
  propertySizeInformation,
  propertyBuyingDetails,
  selectCity,
  aeraSizes,
  currency,
}) => {
  const [propertyArea, setPropertyArea] = React.useState({
    area: '',
    unit: '',
  });
  const [propertyAmount, setpropertyAmount] = React.useState({
    amount: '',
    unit: '',
  });

  const [propertyData] = useState(
    createPropertySizeState(
      propertySizeInformation,
      propertyBuyingDetails,
      selectCity
    )
  );

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
  };

  const handleCityChange = (e, index) => {
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
              placeholder={item?.placeholder}
              type="number"
              sx={{
                width: { xs: '100%', md: '500px' },
                '@media (min-width: 960px) and (max-width: 1500px)': {
                  width: '250px',
                },
              }}
              name={item?.label}
              onChange={(e) => handleInputChange(item?.label, e.target.value)}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={item.label == 'area' ? aeraSizes : currency}
              sx={{
                width: { xs: '50%', md: '200px' },
                '@media (min-width: 961px) and (max-width: 1500px)': {
                  width: '150px',
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={item?.dropPlaceholder}
                  InputLabelProps={{
                    sx: { fontSize: { xs: '10px', md: '15px' } },
                  }}
                />
              )}
              onChange={(e) => handleCityChange(e, index)}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};
export default PropertyAreaSize;
