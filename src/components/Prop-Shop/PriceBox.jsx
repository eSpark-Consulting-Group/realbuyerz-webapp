import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const PriceBox = ({ price, buttonText }) => {
  return (
    <Box
      sx={{
        display: { xs: 'block', sm: 'flex' },
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: 'auto' }, py: { xs: 1.5, sm: 0 } }}>
        <Typography variant="h6" sx={{ color: '#949494' }}>
          {price}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{
            width: { xs: '100%', sm: '161px' },
            height: '41px',
            borderRadius: { xs: '7px', sm: '10px' },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default PriceBox;
