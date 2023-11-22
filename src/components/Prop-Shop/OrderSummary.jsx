import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const OrderSummary = ({ title, Total, buttonText, item, totalPrice }) => {
  console.log(item, 'item');
  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        px: { xs: 4.5, sm: 4.5, md: 3.5, lg: 3 },
      }}
    >
      <Box sx={{ borderBottom: '2px solid #E4E4E4', p: 3 }}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box
        sx={{
          borderBottom: '2px solid #E4E4E4',
          py: 3,
          display: { xs: 'block', sm: 'flex', md: 'block', lg: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '18px', md: '16px', lg: '20px' },
              mb: { xs: 1, sm: 0, md: 1, lg: 0 },
            }}
          >
            {item?.text} ({item?.quantity + 'x'})
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: '#333', fontWeight: 400 }}>
            Rs: {item?.price * item?.quantity}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          pb: 3,
          pt: 2.5,
          display: { xs: 'block', sm: 'flex', md: 'block', lg: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '20px', sm: '22px' },
              mb: { xs: 1, sm: 0, md: 1, lg: 0 },
            }}
          >
            {Total}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: '#126FAA' }}>
            {totalPrice}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', pb: 3, pt: 1 }}>
        <Button
          sx={{
            width: '100%',
            height: '60px',
            borderRadius: '10px',
          }}
          variant="outlined"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
