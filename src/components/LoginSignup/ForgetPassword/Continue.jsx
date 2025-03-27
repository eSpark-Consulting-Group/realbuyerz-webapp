import React from 'react';
import { Box, Button } from '@mui/material';
import Image from 'next/image';

import { LOGIN_FORM } from '@/src/constants/Login';

const Continue = ({
  handleBackToLogin,
  handleContinue,
  checkPasswordMatch,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <Button
          sx={{
            background: '#FB631C',
            width: '100px',
            borderRadius: '5px',
            color: 'white',
            height: '29px',
            '&:hover': {
              background: '#FF631C',
            },
          }}
          onClick={() => {
            handleContinue();
            checkPasswordMatch();
          }}
        >
          {LOGIN_FORM.loginCard.continue}
        </Button>
      </Box>
      <Button
        disableRipple
        sx={{
          fontWeight: '400px',
          fontSize: '14px',
          color: '#126FAA',
          padding: 0,
          textTransform: 'math-auto',
          marginTop: '30px',
          textDecoration: 'underline',
          display: 'flex',
          alignSelf: 'baseline',
          alignItems: 'center',
          '&:hover, &:focus, &:active': {
            textDecoration: 'underline',
            backgroundColor: 'transparent', // ✅ No hover effect
            outline: 'none', // ✅ Remove focus ring
          },
        }}
        onClick={() => {
          handleBackToLogin();
        }}
      >
        <Image
          src="/images/modal/lessthan.svg"
          width={20}
          height={20}
          alt="lessthan"
        />
        {LOGIN_FORM.loginCard.backSignin}
      </Button>
    </>
  );
};
export default Continue;
