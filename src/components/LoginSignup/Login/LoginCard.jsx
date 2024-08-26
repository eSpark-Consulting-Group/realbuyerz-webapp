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

import ForgetPassword from '../ForgetPassword/ForgetPassword';
import LoginWithGoogle from './LoginWithGoogle';
import FormContainer from './LoginForm';
import { LOGIN_DATA, LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';
import { setOpenModal } from '@/src/redux/slices/signin/signinSlice';
import { setLoggedIn, setUserProfile } from '@/src/redux/slices/auth/authSlice';
import { login } from '@/src/utils/apis/auth/login';
import { useFormik } from 'formik';
import { AuthSchema } from '../../Schemas/signInValidationSchema';
import { userProfile } from '@/src/utils/apis/auth/getProfile';

const LoginCard = ({ handleClose, fromModal }) => {
  const [showForgetPassword, setshowForgetPassword] = useState(false);
  const [formData, setFormData] = useState(LOGIN_DATA);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleClick = () => {
    setshowForgetPassword(true);
    router.push(LOGIN_ROUTERS.forgetPassword);
  };
  const handleSignIn = () => {
    handleClose(); // Close the modal
    router.push(LOGIN_ROUTERS.signup);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
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

      if (fromModal) {
        dispatch(setOpenModal(false));
        return;
      }

      if (data.response.data.user.role === 'user') {
        router.push('/user/dashboard');
      } else if (data.response.data.user.role === 'agent') {
        router.push('/agent/live-bidding');
      }
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
    <form>
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
              formik={formik}
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
        </Box>
      ) : (
        <ForgetPassword setshowForgetPassword={setshowForgetPassword} />
      )}
    </form>
  );
};
export default LoginCard;
