'use client';
import React from 'react';

import { Typography, Box} from '@mui/material';
import { useRouter } from 'next/navigation';

import LoginWithGoogle from '../Login/LoginWithGoogle';
import FormData from '../Login/LoginForm';

const SignupCard = () => {
    const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { xs: '95%', md: '450px' },
          height: { xs: '650px', md: '618px' },
          padding: 8,
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
          borderRadius: 2,
          background: 'white',
          marginTop: '-20px',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', md: '320px' },
            height: 'auto',
            gap: { xs: '5px', md: '8px' },
          }}
        >
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: '20px',
              fontWeight: 600,
              fontFamily: 'Inter',
            }}
          >
            Create Account
          </Typography>
          <Typography
            sx={{
              color: '#333333',
              fontSize: '16px',
              fontWeight: 400,
              fontFamily: 'Inter',
            }}
          >
            It’s Quick & Easy
          </Typography>
          <FormData isLoginForm={false} />
          <LoginWithGoogle
            login=" Sign up"
            sign="Sign in"
            account=" Already have an account?"
            googlelogin=" Login with Google"
            onSigninClick={() => router.push('/signin')}
          />
        </Box>
      </Box>
    </>
  );
};
export default SignupCard;
