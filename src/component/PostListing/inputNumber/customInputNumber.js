import React from 'react';
import { InputAdornment, IconButton, Box, Input } from '@mui/material';

import Image from 'next/image';

const CustomNumberInput = ({ value, onChange }) => {
  const handleInputChange = (inputValue) => {
    const sanitizedValue = inputValue.replace(/[^0-9+-]/g, '');
    const formattedValue = sanitizedValue.replace(/([+-])+/g, '$1');
    onChange(formattedValue);
  };
  const handleIncrement = () => {
    const numericValue = parseFloat(value) || 0;
    onChange((numericValue + 1).toString());
  };
  const handleDecrement = () => {
    const numericValue = parseFloat(value) || 0;
    onChange((numericValue - 1).toString());
  };
  return (
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
                src={'assets/images/increment.svg'}
                width={30}
                height={22}
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
                src={'assets/images/minus.svg'}
                width={30}
                height={22}
                onClick={handleDecrement}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>

    // </Box>
  );
};

export default CustomNumberInput;
