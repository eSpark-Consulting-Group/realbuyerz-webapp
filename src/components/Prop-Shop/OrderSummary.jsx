import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { ProceedPayment } from '@/src/redux/slices/settings/PakageCartSlice';

const OrderSummary = ({
  title,
  Total,
  buttonText,
  cart,
  totalPrice,
  connects,
  dollarRate,
}) => {
  const OrderSummaryPayLoad = { ...cart, ...connects };
  const dispatch = useDispatch();
  const HandleProceedToPayment = () => {
    dispatch(ProceedPayment(OrderSummaryPayLoad));
  };

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
      {cart?.text && (
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
              {cart?.text}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: '#333', fontWeight: 400, fontSize: '18px' }}
            >
              Rs: {cart?.price}
            </Typography>
          </Box>
        </Box>
      )}

      {connects?.your_new_connects_balance_will_be > 0 ? (
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
              {'connects '} ({connects?.new_connects})
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: '#333', fontWeight: 400 }}>
              {'Rs:'}
              {Math.round(connects?.your_account_will_be_charged * dollarRate)}
            </Typography>
          </Box>
        </Box>
      ) : null}

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
            Rs.{totalPrice}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '100%', pb: 3, pt: 1 }}>
        <Button
          onClick={HandleProceedToPayment}
          sx={{
            width: '100%',
            height: '60px',
            borderRadius: '10px',
          }}
          variant="primary"
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
