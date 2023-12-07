'use client';
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

import LoginWithGoogle from '../Login/LoginWithGoogle';
import { LOGIN_FORM, LOGIN_FORM_DATA } from '@/app/constants/Login';
import FormContainer from '../Login/LoginForm';
import { useDispatch } from 'react-redux';
import { saveLoginData } from '@/src/redux/slices/login/loginSlice';

const SignupCard = () => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.initialFormData);
  const dispatch = useDispatch();
  const handleInputContactNumber = (event) => {
    const contactNumber = event.target.value;
    if (contactNumber.length <= 11) {
      setFormData({
        ...formData,
        [event.target.name]: contactNumber,
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleAutoCompleteInputChange = (event, newValue) => {
    const fieldName = 'usertype';
    setFormData({
      ...formData,
      [fieldName]: newValue ? [newValue.value] : [],
    });
  };
  const loginClick = () => {
    dispatch(saveLoginData(formData));
  };
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { xs: '90%', md: '500px' },
          height: { xs: '650px', md: '580px' },
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
            }}
          >
            {LOGIN_FORM.loginCard.createAccount}
          </Typography>
          <Typography
            sx={{
              color: '#333333',
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            {LOGIN_FORM.loginCard.quickEasy}
          </Typography>
          <FormContainer
            isLoginForm={false}
            formData={formData}
            handleInputContactNumber={handleInputContactNumber}
            handleInputChange={handleInputChange}
            handleAutoCompleteInputChange={handleAutoCompleteInputChange}
          />
          <LoginWithGoogle
            buttonLabel={LOGIN_FORM.signupForm.signup}
            label={LOGIN_FORM.signupForm.signin}
            accountCreationMessage={LOGIN_FORM.loginCard.label}
            loginButton={LOGIN_FORM.loginCard.googleLogin}
            onSigninClick={() => {
              router.push('/auth/signin');
            }}
            loginClick={loginClick}
          />
        </Box>
      </Box>
    </>
  );
};
export default SignupCard;
