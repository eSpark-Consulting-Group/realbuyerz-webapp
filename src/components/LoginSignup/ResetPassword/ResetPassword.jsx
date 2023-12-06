import React from 'react';
import { Box, Typography, Grid, TextField } from '@mui/material';

import { LOGIN_FORM } from '@/app/constants/Login';
import Continue from '../ForgetPassword/Continue';
import PasswordAndConfirmFields from '../Login/PasswordAndConfirmField';

const ResendPassword = ({ handleBackToLogin }) => {
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
        background: 'gray',
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
        <PasswordAndConfirmFields />
        <Continue handleBackToLogin={handleBackToLogin} />
      </Box>
    </Box>
  );
};
export default ResendPassword;
