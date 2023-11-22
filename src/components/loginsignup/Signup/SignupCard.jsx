'use client';
import React from 'react';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

import LoginWithGoogle from '../Login/LoginWithGoogle';
import { LOGIN_FORM } from '@/app/constants/Login';
import FormContainer from '../Login/LoginForm';

const SignupCard = () => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { xs: '90%', md: '500px' },
          height: { xs: '650px', md: '580px' },
          // paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
          borderRadius: 2,
          background: 'white',
          marginTop: '38px',
          zIndex: 2,
          '@media (max-width: 1286px)': {
            width: '400px',
          },
          '@media (max-width: 400px)': {
            width: '90%',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '70%', md: '386px' },
            height: '562px',
            gap: { xs: '5px', md: '8px' },
            paddingTop: '40px',
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
            {LOGIN_FORM.loginForm.createAccount}
          </Typography>
          <Typography
            sx={{
              color: '#333333',
              fontSize: '16px',
              fontWeight: 400,
              fontFamily: 'Inter',
            }}
          >
            {LOGIN_FORM.loginForm.quickEasy}
          </Typography>
          <FormContainer isLoginForm={false} />
          <LoginWithGoogle
            buttonLabel={LOGIN_FORM.signupForm.signup}
            label={LOGIN_FORM.signupForm.signin}
            accountCreationMessage={LOGIN_FORM.loginForm.label}
            loginButton={LOGIN_FORM.loginForm.googleLogin}
            onSigninClick={() => router.push('/signin')}
          />
        </Box>
      </Box>
    </>
  );
};
export default SignupCard;
