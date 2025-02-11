'use client';
import React from 'react';
import { Box } from '@mui/system';

import LoginCard from './LoginCard';
import SignupCard from '../Signup/SignupCard';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { AUTH_COMPONENTS } from '@/src/constants/Login';
import ResetPassword from '../ResetPassword/ResetPassword';

const RectangleBorderImage = ({ showComponent }) => {
  let cardComponent;
  switch (showComponent) {
    case AUTH_COMPONENTS.signup:
      cardComponent = <SignupCard />;
      break;
    case AUTH_COMPONENTS.signin:
      cardComponent = <LoginCard />;
      break;
    case AUTH_COMPONENTS.forgetPassword:
      cardComponent = <ForgetPassword />;
      break;
    case AUTH_COMPONENTS.resetPassword:
      cardComponent = <ResetPassword />;
      break;
    default:
      cardComponent = null;
  }

  return (
    <Box
      sx={{
        width: '91%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '@media(max-width: 767px)': {
          justifyContent: 'center',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: { md: '400px', lg: '427px' },
          height: '100%',
          borderRadius: '15px',
          border: '5px solid #1176AD',
          py: { xs: 2, sm: 3, md: 3 },
          // ml: { xs: -'6%', sm: -'11%', md: -'15%', lg: '-30%' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: 2,
            background: 'white',
            ml: { xs: '6%', sm: '11%', md: '25%', lg: '42%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {cardComponent}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default RectangleBorderImage;
