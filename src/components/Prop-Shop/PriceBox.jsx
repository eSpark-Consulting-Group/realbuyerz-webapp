import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const PriceBox = ({ price, buttonText }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: '#949494' }}>
          {price}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{ width: '161px', height: '41px', borderRadius: '10px' }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default PriceBox;
