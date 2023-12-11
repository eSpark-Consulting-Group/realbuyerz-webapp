'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, TextField } from '@mui/material';

import CheckEmailModal from './EmailModal';
import { validateEmail } from '@/utils/validationEmail';
import { LOGIN_FORM, LOGIN_ROUTERS } from '@/app/constants/Login';
import { useDispatch } from 'react-redux';
import { updateReceivedEmail } from '@/src/redux/slices/resendEmail/resendEmailSlice';
import Continue from './Continue';

const ForgetPassword = ({ setshowForgetPassword }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(false);
  const handleBackToLogin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };
  const router = useRouter();

  const dispatch = useDispatch();
  const handleModalToggle = () => {
    setOpen(!open);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleValidation = () => {
    validateEmail(email, setError, setisValidEmail, handleModalToggle);
  };
  const handleClick = () => {
    dispatch(updateReceivedEmail(email));
  };
  const handleContinue = () => {
    handleValidation();
  };
  const checkPasswordMatch = () => {};
  return (
    <Box
      sx={{
        width: { xs: '90%', md: '500px' },
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        background: '#fff',
        marginTop: '127px',
        zIndex: 2,
        '@media (max-width: 1286px)': {
          width: '400px',
        },
        '@media (max-width: 400px)': {
          width: '100% ',
        },
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', md: '320px' },
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          gap: { xs: '7px', md: '15px' },
          paddingTop: '10px',
        }}
      >
        <Typography
          sx={{
            color: '#FF631C',
            fontSize: { xs: '18px', md: '30px' },
            fontWeight: 600,
          }}
        >
          {LOGIN_FORM.loginCard.passwordForget}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '12px', md: '16px' },
            fontWeight: 400,
          }}
        >
          {LOGIN_FORM.loginCard.enterEmail}
        </Typography>
        <TextField
          label={LOGIN_FORM.loginCard.email}
          name="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
        {error && (
          <Typography
            sx={{
              fontSize: { xs: '10px', md: '14px' },
              fontWeight: 400,
              color: '#FF631C',
            }}
          >
            {error}
          </Typography>
        )}
        <Continue
          handleBackToLogin={handleBackToLogin}
          handleContinue={handleContinue}
          checkPasswordMatch={checkPasswordMatch}
        />
        {isValidEmail && (
          <CheckEmailModal
            onClose={() => setisValidEmail(false)}
            open={open}
            onCloseModal={handleModalToggle}
            email={email}
            setshowForgetPassword={setshowForgetPassword}
            handleClick={handleClick}
            handleBackToLogin={handleBackToLogin}
          />
        )}
      </Box>
    </Box>
  );
};
export default ForgetPassword;
