'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal, Button, Box, Typography, Alert } from '@mui/material';
import Image from 'next/image';
import { LOGIN_FORM, LOGIN_ROUTERS } from '@/src/constants/Login';

const CheckEmailModal = ({ open, onClose, email, handleClick }) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push(LOGIN_ROUTERS.signin);
  };
  const [isToastOpen, setIsToastOpen] = useState(false);
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
              margin: 'auto',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2.5,
              gap: { xs: 2, sm: 3, md: 4, lg: 5 },
            }}
          >
            <Box
              component={'img'}
              src="/images/signup_page/mailbox.svg"
              alt="mailbox"
              sx={{
                width: '50px',
                height: 'auto',
                mt: -11,
              }}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: { xs: '20px', sm: '22px', md: '24px' },
                }}
              >
                {LOGIN_FORM.loginCard.checkEmail}{' '}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontWeight: '400px',
                    fontSize: { xs: '13px', md: '14px' },
                  }}
                >
                  {LOGIN_FORM.loginCard.resetPassword} {email}
                </Typography>
                {/* <Typography
                  sx={{
                    fontWeight: '400px',
                    fontSize: '12px',
                  }}
                >
                  {email}
                </Typography> */}
              </Box>
              <Button
                style={{
                  background: '#FF631C',
                  color: 'white',
                  fontWeight: '500px',
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
              <Button
                sx={{
                  fontWeight: '400px',
                  fontSize: '14px',
                  color: '#126FAA',
                  padding: 0,
                  textTransform: 'math-auto',
                  marginTop: '50px',
                  textDecoration: 'underline',
                }}
                onClick={() => {
                  handleLogin();
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
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default CheckEmailModal;
