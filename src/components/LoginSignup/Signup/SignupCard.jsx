'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Typography, Box } from '@mui/material';

import { saveSignupData } from '@/src/redux/slices/login/loginSlice';

import {
  LOGIN_FORM,
  LOGIN_FORM_DATA,
  LOGIN_ROUTERS,
} from '@/app/constants/Login';
import LoginWithGoogle from '../Login/LoginWithGoogle';
import FormContainer from '../Login/LoginForm';

const SignupCard = () => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.initialFormData);
  const [contactNumber, setContactNumber] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputContactNumber = (e) => {
    const newContactNumber = e.target.value;

    if (newContactNumber.length <= LOGIN_FORM.signupForm.maxLength) {
      setContactNumber(newContactNumber);
      setFormData({
        ...formData,
        [e.target.name]: newContactNumber,
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
    const fieldName = LOGIN_FORM.signupForm.userType;
    setFormData({
      ...formData,
      [fieldName]: newValue ? [newValue.value] : [],
    });
  };
  const loginClick = () => {
    if (
      formData[LOGIN_FORM.password] !== formData[LOGIN_FORM.confirmPassword]
    ) {
      alert('Password and Confirm Password do not match');
    }
    dispatch(saveSignupData(formData));
  };
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
            contactNumber={contactNumber}
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
              router.push(LOGIN_ROUTERS.signin);
            }}
            loginClick={loginClick}
          />
        </Box>
      </Box>
    </>
  );
};
export default SignupCard;
