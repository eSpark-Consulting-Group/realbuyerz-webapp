import React, { useState } from 'react';
import { InputAdornment, IconButton, Box, Input } from '@mui/material';
import Image from 'next/image';

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
    onSaveIncrement(newIncrementValue, identifier);
    setIncrementValue(newIncrementValue);
    onChange(newIncrementValue.toString());
    // dispatch({
    //   type: savePropertyData,
    //   payload: newIncrementValue,
    // });
    // dispatch(addAmenitiess( newIncrementValue))
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
          width: '110px',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '6px',
          p: 0,
          borderRadius: '5px',
          background: '#EFEEEF',
          height: '35px',
        }}
      >
        <Input
          sx={{
            p: 0,
            fontSize: '15px',
            fontWeight: 500,
            '&:before': {
              borderBottom: 'none',
            },
            '&:after': {
              borderBottom: 'none',
            },
          }}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          startAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{
                  width: '35px',
                  pl: 0,
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
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
                  width: '35px',
                  pr: 0,
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
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
