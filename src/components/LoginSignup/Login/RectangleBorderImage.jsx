'use client';
import React from 'react';
import { Box } from '@mui/system';

import LoginCard from './LoginCard';
import SignupCard from '../Signup/SignupCard';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { AUTH_COMPONENTS } from '@/src/constants/Login';
import ResetPassword from '../ResetPassword/ResetPassword';

const RectangleBorderImage = ({ height, showComponent }) => {
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
      component="div"
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-end' },
        width: { xs: '100%', md: '427px' },
        height: height,
        backgroundImage: 'url("/images/signup_page/rectangle.svg")',
        backgroundRepeat: 'no-repeat',
        padding: '37px',
        '@media (max-width: 960px)': {
          background: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginRight: '-210px',
          '@media (max-width: 1286px)': {
            marginRight: '-110px',
          },
          '@media (max-width: 1103px)': {
            marginRight: '-88px',
          },
          '@media (max-width: 1048px)': {
            marginRight: '-53px',
          },
          '@media (max-width: 600px)': {
            marginRight: '0px',
            justifyContent: 'center',
          },
        }}
      >
        {cardComponent}
      </Box>
    </Box>
  );
};
export default RectangleBorderImage;
