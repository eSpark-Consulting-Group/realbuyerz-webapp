import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const AreaUnit = ({ Measure }) => {
  return (
    <Box>
      {Measure.map((item, index) => (
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
            variant="outlined"
            type="number"
            fullWidth
          />
        </Box>
      ))}
    </Box>
  );
};
export default AreaUnit;
