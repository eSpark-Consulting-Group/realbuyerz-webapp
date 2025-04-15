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
const RectangleBorderImage = ({ showComponent }) => {
  const cardComponent = componentMap[showComponent] || null;

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
          // minHeight: '656px',
          borderRadius: '15px',
          border: '5px solid #1176AD',
          py: { xs: 2, sm: 3, md: 3 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            ml: { xs: '6%', sm: '11%', md: '25%', lg: '42%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {cardComponent}
        </Box>
      </Box>
    </Box>
  );
};
export default RectangleBorderImage;
