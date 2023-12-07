'use client';
import React, { useState } from 'react';
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { useRouter } from 'next/navigation';

import ForgetPassword from '../ForgetPassword/ForgetPassword';
import LoginWithGoogle from './LoginWithGoogle';
import FormContainer from './LoginForm';
import { LOGIN_FORM, LOGIN_FORM_DATA } from '@/app/constants/Login';
import { useDispatch } from 'react-redux';
import { saveLoginData } from '@/src/redux/slices/login/loginSlice';

const LoginCard = () => {
  const [showForgetPassword, setshowForgetPassword] = useState(false);
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.initialFormData);
  const router = useRouter();

  const dispatch = useDispatch();
  const handleClick = () => {
    setshowForgetPassword(true);
    router.push('/forget-password');
  };
  const loginClick = () => {
    dispatch(saveLoginData(formData));
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      {!showForgetPassword ? (
        <Box
          sx={{
            width: { xs: '80%', md: '500px' },
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
              }}
            >
              {LOGIN_FORM.loginCard.welcome}
            </Typography>
            <FormContainer
              isLoginForm={true}
              formData={formData}
              handleInputChange={handleInputChange}
            />
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
              label={LOGIN_FORM.signupForm.signup}
              accountCreationMessage={LOGIN_FORM.signupForm.label}
              loginButton={LOGIN_FORM.loginCard.googleLogin}
              onSigninClick={() => router.push('/signup')}
              loginClick={loginClick}
            />
          </Box>
        </Box>
      ) : (
        <ForgetPassword setshowForgetPassword={setshowForgetPassword} />
      )}
    </>
  );
};
export default LoginCard;
