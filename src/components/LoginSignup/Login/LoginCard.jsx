'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { ToastContainer, toast } from 'react-toastify';
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

import ForgetPassword from '../ForgetPassword/ForgetPassword';
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

const LoginCard = ({ handleClose = () => {}, fromModal }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showForgetPassword, setshowForgetPassword] = useState(false);
  const [formData, setFormData] = useState(LOGIN_DATA);
  const [error, _] = useState('Login failed. Please try again.');

  const handleClick = () => {
    setshowForgetPassword(true);
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
    <>
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

      <form>
        {!showForgetPassword ? (
          <Box
            sx={{
              width: '100%',
              padding: '60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow:
                '-4px -4px 11px 0px #00000026,0px 4px 4px 0px #00000040',
              borderRadius: 2,
              background: 'white',
              marginTop: '-5px',
              zIndex: 2,
              '@media (max-width: 1286px)': {
                width: '400px',
              },
              '@media (max-width: 500px)': {
                boxShadow: 'none',
              },
            }}
          >
            <HeadingBox login>
              <Typography
                sx={{
                  color: '#FF631C',
                  fontSize: { xs: '15px', md: '20px' },
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
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'baseline',
                  justifyContent: {
                    xs: 'center',
                    sm: 'space-between',
                  },
                }}
              >
                <Button
                  sx={{
                    textAlign: 'center',
                    color: '#FF631C',
                    fontSize: { xs: '10px', sm: '12px' },
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
            </HeadingBox>
          </Box>
        ) : (
          <ForgetPassword setshowForgetPassword={setshowForgetPassword} />
        )}
      </form>
    </>
  );
};

export default LoginCard;
