'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';

import 'react-toastify/dist/ReactToastify.css';

import {
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

import LoginWithGoogle from './LoginWithGoogle';
import FormContainer from './LoginForm';
import Subheading from '../Common/Subheading';
import HeadingBox from '../Common/HeadingBox';

import { userProfile } from '@/src/utils/apis/auth/getProfile';
import { login } from '@/src/utils/apis/auth/login';
import { navigateTo, saveUserInformation } from '@/src/utils/authUtils';

import { setOpenModal } from '@/src/redux/slices/signin/signinSlice';
import { setLoggedIn, setUserProfile } from '@/src/redux/slices/auth/authSlice';

import { AuthSchema } from '../../Schemas/signInValidationSchema';
import { LOGIN_DATA, LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';

const LoginCard = ({ handleClose = () => {}, fromModal = false }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(LOGIN_DATA);
  const [error, _] = useState('Login failed. Please try again.');

  const handleClick = (e) => {
    e.preventDefault();
    router.push(LOGIN_ROUTERS.forgetPassword);
  };
  const handleSignIn = () => {
    handleClose();
    router.push(LOGIN_ROUTERS.signup);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data?.success && data.response?.data?.token) {
        handleClose();
        dispatch(setLoggedIn(saveUserInformation(data.response?.data)));
        setProfile();
        toast.success('Login successful!');

        if (fromModal) {
          dispatch(setOpenModal(false));
        }

        setTimeout(() => {
          navigateTo(data?.response?.data?.user?.role, router);
        }, 500);
      } else {
        toast.error(data?.message || error);
      }
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message || error;
      toast.error(errorMessage);
    },
  });

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
        boxShadow: fromModal
          ? 'none'
          : '-4px -4px 11px 0px #00000026,0px 4px 4px 0px #00000040',
        borderRadius: 2,
        background: '#fff',
      }}
    >
      <form>
        <HeadingBox login>
          <Typography
            sx={{
              color: '#FF631C',
              fontWeight: 600,
              fontSize: { xs: '19px', sm: '21px', md: '25px', lg: '30px' },
            }}
          >
            {LOGIN_FORM.loginCard.welcome}
          </Typography>

          <Subheading text={LOGIN_FORM.loginCard.loginMessage} />

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
                p: 0,
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
        </HeadingBox>
      </form>
    </Box>
  );
};

export default LoginCard;
