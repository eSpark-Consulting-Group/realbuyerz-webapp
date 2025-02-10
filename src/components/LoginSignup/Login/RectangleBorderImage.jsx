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

  console.log(cardComponent);

  return (
    <Box
      sx={{
        width: '91%',
        height: 'auto',
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
          maxWidth: '427px',
          height: '100%',
          borderRadius: '15px',
          border: '5px solid #1176AD',
          py: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '-4px -4px 11px 0px #00000026,0px 4px 4px 0px #00000040',
            borderRadius: 2,
            background: 'white',
            ml: { xs: '6%', sm: '11%', md: '15%', lg: '30%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '98%',
              maxWidth: '500px',
              height: '650px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Children
          </Box>
          {/* {cardComponent} */}
        </Box>
      </Box>
    </Box>
  );
};
export default RectangleBorderImage;
