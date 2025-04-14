'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { Modal, Button, Box, Typography, Alert } from '@mui/material';

import BackToSignin from '../Common/BackToSignin';

import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';

const CheckEmailModal = ({ open, onClose, email, handleClick }) => {
  const router = useRouter();

  const [isToastOpen, setIsToastOpen] = useState(false);

  const handleLogin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };

  const handleToast = () => {
    setIsToastOpen(true);

    setTimeout(() => {
      setIsToastOpen(false);
    }, 5000);
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            width: '90%',
            maxWidth: { xs: '380px', md: '400px', lg: '500px' },
            maxHeight: { xs: '300px', lg: '400px' },
            margin: 'auto',
            height: ' 90%',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            overflow: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'transparent transparent',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: { xs: '80px', md: '70px' },
              marginBottom: '116px',
            }}
          >
            <Image
              src="/images/signup_page/mailbox.svg"
              width={50}
              height={50}
              alt="mailbox"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '270px',
              gap: '10px',
            }}
          >
            <Typography sx={{ fontSize: '24px' }}>
              {LOGIN_FORM.loginCard.checkEmail}{' '}
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {LOGIN_FORM.loginCard.resetPassword}
            </Typography>
            <Typography sx={{ fontSize: '12px' }}>{email}</Typography>
            <Button
              style={{
                background: '#FF631C',
                color: 'white',
                fontWeight: 500,
                fontSize: '14px',
                width: '98px',
                height: '29px',
                borderRadius: '5px',
                marginTop: '25px',
              }}
              onClick={() => {
                handleClick();
                handleToast();
              }}
            >
              {LOGIN_FORM.loginCard.resend}
            </Button>
            {isToastOpen && (
              <Alert variant="filled" severity="success">
                {LOGIN_FORM.loginCard.emailSent}
              </Alert>
            )}
            <BackToSignin
              text={LOGIN_FORM.loginCard.backSignin}
              handleBackToLogin={handleLogin}
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default CheckEmailModal;
