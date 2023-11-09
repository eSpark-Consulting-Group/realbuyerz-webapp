'use client';
import React from 'react';
import { Box, Typography, TextField, Button, Switch } from '@mui/material';

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
              fontSize: '20px',
              fontFamily: 'Inter',
              fontWeight: 400,
            }}
          >
            {item.label}
          </Typography>
          <TextField
            placeholder={item.placeholder}
            name={item.name}
            variant="outlined"
            type="number"
            fullWidth
            onChange={handleInputChange}
            sx={{
              '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
export default AreaUnit;
