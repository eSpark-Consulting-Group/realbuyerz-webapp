import React, { useState } from 'react';
import { InputAdornment, IconButton, Box, Input } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from '@/app/constants/postListing';
import { incrementCounterState } from '@/utils/counterIncrement';

const CustomNumberInput = ({
  value,
  onChange,
  onSaveIncrement,
  identifier,
}) => {
  const [incrementValue, setIncrementValue] = useState(incrementCounterState);
  const handleInputChange = (inputValue) => {
    const sanitizedValue = inputValue.replace(/[^0-9+-]/g, '');
    const formattedValue = sanitizedValue.replace(/([+-])+/g, '$1');
    onChange(formattedValue);
  };
  const handleIncrement = () => {
    const numericValue = parseFloat(value) || 0;
    const newIncrementValue = numericValue + 1;
    PROPERTY_BUYING_DETAIL.sellingDetails.incrementBtn[identifier] =
      newIncrementValue;
    onSaveIncrement(newIncrementValue, identifier);
    setIncrementValue(newIncrementValue);

    onChange(newIncrementValue.toString());
    console.log('Increment value:', numericValue);
  };
  const handleDecrement = () => {
    const numericValue = parseFloat(value) || 0;
    const newIncrementValue = incrementValue - 1;
    setIncrementValue(newIncrementValue);

    onChange((numericValue - 1).toString());
  };
  return (
    <>
      <Box
        sx={{
          width: '140px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '6px',
          borderRadius: '10px',
          background: '#EFEEEF',
          border: '1px solid black',
          height: '55px',
        }}
      >
        <Input
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          startAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{
                  width: '50px',
                }}
              >
                <Image
                  src={'/images/listing-page/increment.svg'}
                  width={30}
                  height={22}
                  alt="increment"
                  onClick={handleIncrement}
                />
              </IconButton>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="start">
              <IconButton
                sx={{
                  width: '50px',
                }}
              >
                <Image
                  src={'/images/listing-page/minus.svg'}
                  width={30}
                  height={22}
                  alt="decrement"
                  onClick={handleDecrement}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </>
  );
};
export default CustomNumberInput;
