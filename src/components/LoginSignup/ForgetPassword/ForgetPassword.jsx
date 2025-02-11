'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Box, Typography, TextField } from '@mui/material';

import CheckEmailModal from './EmailModal';
import { validateEmail } from '@/src/utils/validationEmail';
import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';
import Continue from '@/src/components/LoginSignup/ForgetPassword/Continue';
import { forgetPassword } from '@/src/utils/apis/auth/forgetPassword';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(false);
  const handleBackToLogin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };
  const router = useRouter();

  const { mutate: getResetPasswordLink } = useMutation({
    mutationFn: forgetPassword,
    onSuccess: () => {
      setOpen(true);
    },
  });

  const handleModalToggle = () => {
    setOpen(!open);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleValidation = () => {
    if (validateEmail(email)) {
      setError(null);
      setisValidEmail(true);
      return true;
    } else {
      setError('Please enter a valid email address');
      setisValidEmail(false);
      return false;
    }
  };

  // const handleClick = () => {
  //   dispatch(updateReceivedEmail(email));
  // };

  const handleContinue = () => {
    if (handleValidation()) {
      console.log('email', email);
      getResetPasswordLink({ to: email });
    }
  };

  const resendEmail = () => {
    console.log('resend email');
    getResetPasswordLink({ to: email });
  };

  const checkPasswordMatch = () => {};
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '500px',
        minWidth: { sm: 'auto', md: '100%', lg: '500px' },
        height: '100%',
        minHeight: '400px',
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
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: { xs: '90%', sm: '85%', lg: '85%' },
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          padding: '5px',
          gap: { xs: '10px', md: '10px' },
          px: 2,
          py: 3,
        }}
      >
        <Typography
          sx={{
            color: '#FF631C',
            fontSize: { xs: '19px', sm: '21px', md: '25px', lg: '30px' },
            fontWeight: 600,
          }}
        >
          {LOGIN_FORM.loginCard.passwordForget}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '13px', sm: '14px', md: '16px' },
            fontWeight: 400,
            color: '#333333',
          }}
        >
          {LOGIN_FORM.loginCard.enterEmail}
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          name={LOGIN_FORM.email}
          value={email}
          type="email"
          onChange={handleEmailChange}
          placeholder={LOGIN_FORM.loginCard.email}
          inputProps={{
            style: {
              height: `10px`,
              borderRadius: '5px',
              border: '1px solid #E4E4E4',
              background: '#fff',
              fontSize: '15px',
              fontWeight: 400,
            },
          }}
          sx={{
            '& fieldset': { border: 'none' },
            gap: 1,
            textAlign: 'left',
            '& input::placeholder': {
              color: '#000',
              opacity: 1,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '.MuiFormHelperText-contained': {
              marginLeft: 0.5,
            },
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 1000px white inset !important',
              WebkitTextFillColor: '#000 !important',
              transition: 'background-color 5000s ease-in-out 0s !important',
            },
            '& .MuiOutlinedInput-root': {
              height: '40px',
              borderRadius: '10px',
            },
          }}
        />

        {error && (
          <Typography
            sx={{
              fontSize: { xs: '12px' },
              fontWeight: 400,
              color: '#d32f2f',
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
            handleClick={resendEmail}
            handleBackToLogin={handleBackToLogin}
          />
        )}
      </Box>
    </Box>
  );
};
export default ForgetPassword;
