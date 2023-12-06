'use client';
import React from 'react';
import { Box } from '@mui/system';

import LoginCard from './LoginCard';
import SignupCard from '../Signup/SignupCard';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import { useRouter } from 'next/navigation';
import ResendPassword from '../ResetPassword/ResetPassword';
const RectangleBorderImage = ({
  isLogin,
  height,
  showComponent,
  paddingTop,
}) => {
  const router = useRouter();
  let cardComponent;

  switch (showComponent) {
    case 'signup':
      cardComponent = <SignupCard />;
      break;
    case 'signin':
      cardComponent = <LoginCard />;
      break;
    case 'forgetpassword':
      cardComponent = <ForgetPassword />;
      break;
    case 'resetpassword':
      cardComponent = <ResendPassword />;
      break;
    default:
      cardComponent = null;
  }
  return (
    <Box
      component="div"
      sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'flex-end',
        width: '427px',
        height: height,
        backgroundImage: 'url("/images/signup_page/rectangle.svg")',
        backgroundRepeat: 'no-repeat',
        paddingTop: showComponent === 'resetpassword' ? paddingTop : '0px', // Apply paddingTop conditionally
      }}
    >
      <Box
        sx={{
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
        }}
      >
        {cardComponent}
      </Box>
    </Box>
  );
};
export default RectangleBorderImage;
