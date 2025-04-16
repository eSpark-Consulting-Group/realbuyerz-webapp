'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';

import 'react-toastify/dist/ReactToastify.css';

import { Box, Typography } from '@mui/material';

import FormContainer from '../Login/LoginForm';
import LoginWithGoogle from '../Login/LoginWithGoogle';
import Subheading from '../Common/Subheading';
import HeadingBox from '../Common/HeadingBox';

import { userProfile } from '@/src/utils/apis/auth/getProfile';
import { signup } from '@/src/utils/apis/auth/signup';
import { navigateTo, saveUserInformation } from '@/src/utils/authUtils';

import { setLoggedIn, setUserProfile } from '@/src/redux/slices/auth/authSlice';

import { signupValidationSchema } from '../../Schemas/signUpValidationSchema';
import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';

const SignupCard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [contactNumber, setContactNumber] = useState('');
  const [error, _] = useState('Signup failed. Please try again.');

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
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data.success) {
        dispatch(setLoggedIn(saveUserInformation(data?.response?.data)));
        setProfile();

        toast.success('Signup successful!');

        setTimeout(() => {
          navigateTo(data?.response?.data?.user?.role, router);
        }, 500);
      } else {
        if (data.message) {
          if (
            data.message.includes('Email') ||
            data.message.includes('Mobile Number')
          ) {
            toast.error(data.message);
          } else {
            toast.error(error);
          }
        } else {
          toast.error(error);
        }
      }
    },
    onError: () => {
      toast.error('An error occurred. Please try again.');
    },
  });

  const { mutate: setProfile } = useMutation({
    mutationFn: userProfile,
    onSuccess: (data) => {
      dispatch(setUserProfile(data?.response?.data));
    },
  });

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          width: '100%',
          maxWidth: '500px',
          minWidth: { sm: 'auto', md: '100%', lg: '500px' },
          height: '100%',
          minHeight: '650px',
          maxHeight: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '-4px -4px 11px 0px #00000026,0px 4px 4px 0px #00000040',
          borderRadius: 2,
          background: '#fff',
        }}
      >
        <HeadingBox>
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: { xs: '19px', sm: '21px', md: '25px', lg: '30px' },
              fontWeight: 600,
            }}
          >
            {LOGIN_FORM.loginCard.createAccount}
          </Typography>

          <Subheading text={LOGIN_FORM.loginCard.quickEasy} />

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
            isPending={isPending}
            loginClick={formik.handleSubmit}
          />
        </HeadingBox>
      </Box>
    </>
  );
};

export default SignupCard;