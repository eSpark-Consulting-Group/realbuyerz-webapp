'use client';
import { Box } from '@mui/system';

import LoginCard from './LoginCard';
import SignupCard from '../Signup/SignupCard';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import ResetPassword from '../ResetPassword/ResetPassword';

import { AUTH_COMPONENTS } from '@/src/constants/Login';

const componentMap = {
  [AUTH_COMPONENTS.signup]: <SignupCard />,
  [AUTH_COMPONENTS.signin]: <LoginCard />,
  [AUTH_COMPONENTS.forgetPassword]: <ForgetPassword />,
  [AUTH_COMPONENTS.resetPassword]: <ResetPassword />,
};
const RectangleBorderImage = ({ height, showComponent }) => {
  const cardComponent = componentMap[showComponent] || null;

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
