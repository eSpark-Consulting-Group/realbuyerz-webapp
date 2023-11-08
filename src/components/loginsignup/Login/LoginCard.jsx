import React from 'react';
import { Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import { useRouter } from 'next/navigation';

import LoginWithGoogle from './LoginWithGoogle';
import FormContainer from './LoginForm';
import { LOGIN_FORM } from '@/app/constants/LoginConstants';

const LoginCard = () => {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { xs: '90%', md: '500px' },
          height: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
          borderRadius: 2,
          background: 'white',
          marginTop: '30px',
          zIndex: 2,
          '@media (max-width: 1286px)': {
            width: '400px',
          },
          '@media (max-width: 400px)': {
            width: '90% ',
          },
        }}
      >
        <Box
          sx={{
            width: { xs: '70%', md: '320px' },
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
            {LOGIN_FORM.loginForm.welcome}
          </Typography>
          <FormContainer isLoginForm={true} />
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
              {LOGIN_FORM.loginForm.forgetPassword}
            </Typography>
            <FormControlLabel
              label={LOGIN_FORM.loginForm.rememberMe}
              control={<Checkbox size="small" color="primary" />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                color: '#777777',
                fontSize: { xs: '5px', md: '10px' },
              }}
            />
          </Box>
          <LoginWithGoogle
            buttonLabel={LOGIN_FORM.loginForm.login}
            label={LOGIN_FORM.signupForm.signin}
            accountCreationMessage={LOGIN_FORM.signupForm.label}
            loginButton={LOGIN_FORM.loginForm.googleLogin}
            onSigninClick={() => router.push('/signup')}
          />
        </Box>
      </Box>
    </>
  );
};
export default LoginCard;
