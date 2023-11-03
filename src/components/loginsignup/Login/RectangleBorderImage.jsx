import React from 'react';
import { Box } from '@mui/system';

import LoginCard from './LoginCard';
import SignupCard from '../Signup/SignupCard';

const RectangleBorderImage = ({ isLogin, height }) => {
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
        {isLogin ? <LoginCard /> : <SignupCard />}
      </Box>
    </Box>
  );
};
export default RectangleBorderImage;
