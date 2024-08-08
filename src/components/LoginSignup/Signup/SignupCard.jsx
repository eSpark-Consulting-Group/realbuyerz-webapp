'use client';
import { Box, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';
import { setLoggedIn } from '@/src/redux/slices/auth/authSlice';
import { loginWithGoogle } from '@/src/utils/apis/auth/loginWithGoogle';
import { signup } from '@/src/utils/apis/auth/signup';
import { signupValidationSchema } from '../../Schemas/signUpValidationSchema';
import FormContainer from '../Login/LoginForm';
import LoginWithGoogle from '../Login/LoginWithGoogle';

const SignupCard = () => {
  const [contactNumber, setContactNumber] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputContactNumber = (e) => {
    const newContactNumber = e.target.value;
    if (newContactNumber.length <= LOGIN_FORM.signupForm.maxLength) {
      setContactNumber(newContactNumber);
      formik.setFieldValue('contactNumber', newContactNumber);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      contactNumber: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      mutate({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        mobileNumber: values.contactNumber,
        role: 'user',
      });
      // dispatch(saveSignupData(values));
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log('Signup response:', data);

      if (data.success) {
        // Success case
        localStorage.setItem('token', data.response.data.token);
        Cookie.set('token', data.response.data.token);
        Cookie.set('userType', data.response.data.user.role);
        const savedUserInfo = {
          email: data.response.data.user.email,
          userName: data.response.data.user.userName,
          userType: data.response.data.user.role,
        };
        dispatch(setLoggedIn(savedUserInfo));

        toast.success('Signup successful!', {
          onClose: () => {
            if (data.response.data.user.role === 'user') {
              router.push('/user/dashboard');
            } else if (data.response.data.user.role === 'agent') {
              router.push('/agent/live-bidding');
            }
          },
        });
      } else {
        // Handle specific error messages
        if (data.message) {
          if (
            data.message.includes('Email') ||
            data.message.includes('Mobile Number')
          ) {
            toast.error(data.message);
          } else {
            toast.error('Signup failed. Please try again.');
          }
        } else {
          toast.error('Signup failed. Please try again.');
        }
      }
    },
    onError: (error) => {
      console.error('Signup error:', error);
      toast.error('An error occurred. Please try again.');
    },
  });

  const { mutate: googleLogin } = useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (data) => {
      console.log('success', data);
      toast.success('Google login successful!');
    },
    onError: (error) => {
      console.log('Error', error);
      toast.error('Google login failed. Please try again.');
    },
  });

  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <>
      <ToastContainer />
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
            handleInputContactNumber={handleInputContactNumber}
            contactNumber={contactNumber}
            formik={formik}
          />
          <LoginWithGoogle
            buttonLabel={LOGIN_FORM.signupForm.signup}
            label={LOGIN_FORM.signupForm.signin}
            accountCreationMessage={LOGIN_FORM.loginCard.label}
            loginButton={LOGIN_FORM.loginCard.googleLogin}
            onSigninClick={() => router.push(LOGIN_ROUTERS.signin)}
            loginClick={formik.handleSubmit}
            handleGoogleLogin={handleGoogleLogin}
            isPending={isPending}
          />
        </Box>
      </Box>
    </>
  );
};

export default SignupCard;
