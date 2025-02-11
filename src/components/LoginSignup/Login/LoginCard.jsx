'use client';
import React, { useState } from 'react';
import Cookie from 'js-cookie';
import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import LoginWithGoogle from './LoginWithGoogle';
import FormContainer from './LoginForm';
import { LOGIN_DATA, LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';
import { setOpenModal } from '@/src/redux/slices/signin/signinSlice';
import { setLoggedIn, setUserProfile } from '@/src/redux/slices/auth/authSlice';
import { login } from '@/src/utils/apis/auth/login';
import { useFormik } from 'formik';
import { AuthSchema } from '../../Schemas/signInValidationSchema';
import { userProfile } from '@/src/utils/apis/auth/getProfile';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginCard = ({ handleClose = () => {}, fromModal }) => {
  const [formData, setFormData] = useState(LOGIN_DATA);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(LOGIN_ROUTERS.forgetPassword);
  };
  const handleSignIn = () => {
    handleClose(); // Close the modal
    router.push(LOGIN_ROUTERS.signup);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data?.success && data.response?.data?.token) {
        localStorage.setItem('token', data.response.data.token);
        Cookie.set('token', data.response.data.token);
        Cookie.set('userType', data.response.data.user.role);

        const savedUserInfo = {
          email: data.response.data.user.email,
          userName: data.response.data.user.userName,
          userType: data.response.data.user.role,
        };

        dispatch(setLoggedIn(savedUserInfo));
        setProfile();

        toast.success('Login successful!');

        if (fromModal) {
          dispatch(setOpenModal(false));
          if (data.response.data.user.role === 'user') {
            router.push('/user/dashboard');
          } else if (data.response.data.user.role === 'agent') {
            router.push('/agent/live-bidding');
          }
        } else {
          if (data.response.data.user.role === 'user') {
            router.push('/user/dashboard');
          } else if (data.response.data.user.role === 'agent') {
            router.push('/agent/live-bidding');
          }
        }
      } else {
        toast.error(data?.message || 'Login failed. Please try again.');
      }
    },
    onError: (error) => {
      console.log('Error Response:', error);

      const errorMessage =
        error?.response?.data?.message || 'Login failed. Please try again.';

      toast.error(errorMessage);
    },
  });
  // const loginClick = () => {
  //   mutate({ email: formData.email, password: formData.password });
  //   dispatch(saveLoginData(formData));
  //   dispatch(setOpenModal(false));
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: AuthSchema,
    onSubmit: (values) => {
      mutate(values);
      // dispatch(saveLoginData(values));
      // dispatch(setOpenModal(false));
    },
  });

  const { mutate: setProfile } = useMutation({
    mutationFn: userProfile,
    onSuccess: (data) => {
      dispatch(setUserProfile(data?.response?.data));
    },
  });

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '500px',
        minWidth: { sm: 'auto', md: '100%', lg: '500px' },
        height: '100%',
        minHeight: '600px',
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
      <form>
        <Box
          sx={{
            mx: 'auto',
            width: '100%',
            maxWidth: { xs: '90%', sm: '85%', lg: '100%' },
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            padding: '5px',
            gap: { xs: '10px', md: '10px' },
            px: 2,
          }}
        >
          <Typography
            sx={{
              color: '#FF631C',
              fontWeight: 600,
              fontSize: { xs: '19px', sm: '21px', md: '25px', lg: '30px' },
            }}
          >
            {LOGIN_FORM.loginCard.welcome}
          </Typography>
          <Typography
            sx={{
              color: ' #333333',
              fontSize: { xs: '13px', sm: '14px', md: '16px' },
            }}
          >
            {LOGIN_FORM.loginCard.loginMessage}
          </Typography>
          <FormContainer
            isLoginForm={true}
            formData={formData}
            handleInputChange={handleInputChange}
            formik={formik}
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              alignItems: 'baseline',
              justifyContent: {
                xs: 'center',
                sm: 'space-between',
              },
            }}
          >
            <Button
              disableRipple
              sx={{
                textAlign: 'center',
                color: '#FF631C',
                fontSize: { xs: '12px' },
                '&:hover, &:focus, &:active': {
                  backgroundColor: 'transparent',
                  outline: 'none',
                },
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
                fontSize: { xs: '12px' },
                mr: '-10px',
                pl: { xs: '10px', sm: 0 },
                '&:hover, &:focus, &:active': {
                  backgroundColor: 'transparent',
                  outline: 'none',
                },
              }}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  rememberCheck: e.target.checked,
                }))
              }
            />
          </Box>
          <LoginWithGoogle
            buttonLabel={LOGIN_FORM.loginCard.login}
            label={LOGIN_FORM.signupForm.signup}
            accountCreationMessage={LOGIN_FORM.signupForm.label}
            loginButton={LOGIN_FORM.loginCard.googleLogin}
            onSigninClick={handleSignIn}
            handleClose={handleClose}
            loginClick={formik.handleSubmit}
            isPending={isPending}
          />
        </Box>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
};

export default LoginCard;
