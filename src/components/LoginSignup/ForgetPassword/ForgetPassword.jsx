'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';

import { Box, Typography, TextField } from '@mui/material';

import CheckEmailModal from './EmailModal';
import Continue from '@/src/components/LoginSignup/ForgetPassword/Continue';
import SemiBoldTypography from '../Common/SemiBoldTypography';
import NormalTypography from '../Common/NormalTypography';
import HeadingBox from '../Common/HeadingBox';

import { validateEmail } from '@/src/utils/validationEmail';
import { forgetPassword } from '@/src/utils/apis/auth/forgetPassword';

import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';

const ForgetPassword = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(false);

  const handleBackToLogin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };

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
      <HeadingBox>
        <SemiBoldTypography text={LOGIN_FORM.loginCard.passwordForget} />

        <NormalTypography text={LOGIN_FORM.loginCard.enterEmail} />

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
      </HeadingBox>
    </Box>
  );
};
export default ForgetPassword;