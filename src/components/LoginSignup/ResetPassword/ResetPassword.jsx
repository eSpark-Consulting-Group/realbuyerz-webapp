import React from 'react';
import { Box, Typography } from '@mui/material';

import { LOGIN_FORM, LOGIN_FORM_DATA } from '@/app/constants/Login';
import Continue from '../ForgetPassword/Continue';
import PasswordAndConfirmFields from '../Login/PasswordAndConfirmField';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ResendPassword = ({ handleBackToLogin }) => {
  const [formData, setFormData] = useState(LOGIN_FORM_DATA?.passwordFields);
  const handleFieldToggle = (fieldName) => {
    setFormData({
      ...formData,
      [fieldName]: !formData[fieldName],
    });
  };
  const passwordsMatch = formData.password === formData.confirmPassword;
  const checkPasswordMatch = () => {
    if (passwordsMatch) {
      alert('Password match');
    } else {
      alert('Password donot match');
    }
  };
  const router = useRouter();
  const BackToSignin = () => {
    router.push('/auth/signin');
  };
  const handleValidation = () => {};
  const handleContinue = () => {
    router.push('/auth/signin');
  };
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
        // marginTop: '127px',

        // paddingTop: '40px',
        //  marginTop: '127px',
        margin: 'auto',
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
          gap: { xs: '7px', md: '15px' },
          paddingTop: '40px',
        }}
      >
        <Typography
          sx={{
            color: '#FF631C',
            fontSize: { xs: '20px', md: '30px' },
            fontWeight: 600,
          }}
        >
          {LOGIN_FORM.resetPasswordCard.resetPassword}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: 400,
          }}
        >
          {LOGIN_FORM.resetPasswordCard.createNewPassword}
        </Typography>
        <PasswordAndConfirmFields
          handleFieldToggle={handleFieldToggle}
          formData={formData}
          setFormData={setFormData}
          passwordsMatch={passwordsMatch}
        />
        <Continue
          checkPasswordMatch={checkPasswordMatch}
          handleBackToLogin={BackToSignin}
          // handleValidation={handleValidation}
          handleContinue={handleContinue}
        />
      </Box>
    </Box>
  );
};
export default ResendPassword;
