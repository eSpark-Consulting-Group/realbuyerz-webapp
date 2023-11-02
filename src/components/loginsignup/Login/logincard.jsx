import React from 'react';
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useRouter } from 'next/navigation';

import LoginWithGoogle from './LoginWithGoogle';
import FormData from './LoginForm';

const LoginCard = () => {
  const welcome = " Hey! Welcome";
  const forgetPassword = "Forget Password?";
    const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { xs: '90%', md: '450px' },
          height: '530px',
          padding: 8,
          paddingTop: '70px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
          borderRadius: 2,
          background: 'white',
          marginTop: '23px',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '340px' },
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            padding: '5px',
            gap: { xs: '7px', md: '15px' },
          }}
        >
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: { xs: '15px', md: '20px' },
              fontFamily: 'Inter',
            }}
          >
           {welcome}
          </Typography>
          <FormData isLoginForm={true} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              alignItems: 'baseline',
              justifyContent: {
                xs: 'center',
                sm: 'space-between',
                md: 'space-between',
              },
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: '#FF631C',
                fontSize: { xs: '10px', sm: '12px', md: '12px' },
                textDecoration: 'underline',
                marginTop: 2,
              }}
            >
             {forgetPassword}
            </Typography>
            <FormControlLabel
              label="Remember me"
              control={<Checkbox size="small" color="primary" />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                color: '#777777',
                fontSize: { xs: '5px', md: '10px' },
              }}
            />
          </Box>
          <LoginWithGoogle login="Log in"
            sign="Sign up"
            account="Doesn’t have an account yet?"
            googlelogin=" Login with Google"
             onSigninClick={() => router.push('/signup')}
          />
        </Box>
      </Box>
    </>
  );
};
export default LoginCard;
