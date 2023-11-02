import React from 'react';
import { Box } from '@mui/system';

import LoginCard from './LoginCard';
import SignupCard from '../Signup/SignupCard';

const RectangleBorderImage = ({isLogin}) => {
    return (
         <Box
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              width: '500px',
              height: '800px',
              backgroundImage: 'url("/images/signup_page/rectangle.svg")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Box
              sx={{
                marginRight: '-80px',
                paddingTop: '40px',
              }}
            >
          {isLogin ? <LoginCard /> : <SignupCard />}
            </Box>
          </Box>
    )
}
export default RectangleBorderImage;