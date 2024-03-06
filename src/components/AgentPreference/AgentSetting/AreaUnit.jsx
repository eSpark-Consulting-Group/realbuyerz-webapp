'use client';
import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const AreaUnit = ({ measure, handleInputChange }) => {
  return (
    <Box>
      {measure?.map((item, index) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '8px',
            gap: '15px',
          }}
          key={index}
        >
          <Typography
            sx={{
              color: 'black',
              fontSize: { sm: '14px', md: '16px', lg: '20px' },
              fontWeight: 400,
            }}
          >
            {item.label}
          </Typography>
          <TextField
            placeholder={item.placeholder}
            name={item.name}
            variant="outlined"
            fontSize={{ sm: '14px', md: '16px', lg: '20px' }}
            fullWidth
            // size={{{sm:'small', md:'medium', lg:''}}}
            onChange={handleInputChange}
            sx={{
              '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              },
              '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                color: '#4A4A4A',
              },
            }}
            inputProps={{
              sx: {
                '&::placeholder': {
                  fontSize: { xs: '15px', md: '18px' },
                },
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
export default AreaUnit;
