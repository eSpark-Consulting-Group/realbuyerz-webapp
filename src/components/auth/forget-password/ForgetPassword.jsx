'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { Box, Typography, TextField } from '@mui/material';
import CheckEmailModal from '../EmailModal';
import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';
import Continue from '@/src/components/auth/Continue';
import { forgetPassword } from '@/src/utils/apis/auth/forgetPassword';
import { validateEmail } from '@/src/utils/validationEmail';

const ForgetPassword = ({ setshowForgetPassword }) => {
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
      getResetPasswordLink({ to: email });
    }
  };

  const resendEmail = () => {
    getResetPasswordLink({ to: email });
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
          width: { xs: '90%', md: '360px' },
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          gap: { xs: '7px', md: '15px' },
          paddingTop: '10px',
          '@media (min-width: 280px) and (max-width: 1290px)': {
            padding: '20px',
          },
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
          name={LOGIN_FORM.email}
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
            handleClick={resendEmail}
            handleBackToLogin={handleBackToLogin}
          />
        )}
      </Box>
    </Box>
  );
};
export default ForgetPassword;
