import React, { useState } from 'react';
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { useRouter } from 'next/navigation';

import LoginWithGoogle from './LoginWithGoogle';
import FormContainer from './loginCard';
import { LOGIN_FORM } from '@/app/constants/Login';
import ForgetPassword from '../ForgetPassword/forgetPassword';

const LoginCard = () => {
  const [showForgetPassword, setshowForgetPassword] = useState(false);
  const handleClick = () => {
    setshowForgetPassword(true);
  };
  const handleClickTwo = () => {
    setshowForgetPassword(false);
  };
  const router = useRouter();
  return (
    <>
      {!showForgetPassword ? (
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
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: { xs: '15px', md: '30px' },
              fontFamily: 'Inter',
            }}
          >
            {LOGIN_FORM.loginCard.welcome}
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '12px', md: '15px' }, fontFamily: 'Inter' }}
          >
            {LOGIN_FORM.loginCard.verifiedBuyers}
          </Typography>
          <FormContainer isloginCard={true} />
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
            {/* <Typography
              sx={{
                color: '#FF631C',
                fontSize: { xs: '15px', md: '20px' },
              }}
            >
              {LOGIN_FORM.loginCard.forgetPassword}
            </Typography>
            <FormControlLabel
              label={LOGIN_FORM.loginCard.rememberMe}
              control={<Checkbox size="small" color="primary" />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                color: '#777777',
                fontSize: { xs: '5px', md: '12px' },
              }}
            /> */}
              <Button
                sx={{
                  textAlign: 'center',
                  color: '#FF631C',
                  fontSize: { xs: '10px', sm: '12px', md: '12px' },
                  textDecoration: 'underline',
                  marginTop: 2,
                }}
                onClick={handleClick}
              >
                {LOGIN_FORM.loginCard.forgetPassword}
              </Button>
              <FormControlLabel
                label={LOGIN_FORM.loginCard.rememberMe}
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
              buttonLabel={LOGIN_FORM.loginCard.login}
              label={LOGIN_FORM.signupForm.signin}
              accountCreationMessage={LOGIN_FORM.signupForm.label}
              loginButton={LOGIN_FORM.loginCard.googleLogin}
              onSigninClick={() => router.push('/signup')}
            />
          </Box>
      ) : (
        <ForgetPassword setShowForgetPassword={handleClickTwo} />
      )}
    </>
  );
};

export default LoginCard;
