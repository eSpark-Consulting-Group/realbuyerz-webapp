'use client';
import React, { useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { LOGIN_FORM } from '@/app/constants/Login';
import LoginCard from '../Login/LoginCard';
import ForgetPassword from './ForgetPassword';
import { updateReceivedEmail } from '@/utils/email';

const CheckEmailModal = ({ open, onClose, email, resendButton }) => {
  const [showSignin, setshowSignin] = useState(false);
  const [showForgetPassword, setshowForgetPassword] = useState(false);
  const handleBackToLogin = () => {
    setshowSignin(true);
    setshowForgetPassword(false);
  };
  return (
    <>
      {!showSignin ? (
        <Modal
          open={open}
          onClose={onClose}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '50%', md: '500px' },
              margin: 'auto',
              height: ' 400px',
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: { xs: '90%', sm: '80%', md: '360px' },
                height: '270px',
                '@media (max-width: 600px) and (min-width: 390px)': {
                  width: '60% ',
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
                <Typography
                  sx={{
                    fontWeight: '400px',
                    fontSize: '24px',
                  }}
                >
                  {LOGIN_FORM.loginCard.checkEmail}{' '}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '400px',
                    fontSize: '14px',
                  }}
                >
                  {LOGIN_FORM.loginCard.resetPassword}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: '400px',
                    fontSize: '12px',
                  }}
                >
                  {email}
                </Typography>
                <Button
                  style={{
                    background: '#FF631C',
                    color: 'white',
                    fontWeight: '500px',
                    fontSize: '14px',
                    width: '98px',
                    height: '29px',
                    borderRadius: '5px',
                    marginTop: '15px',
                  }}
                  onClick={() => {
                    resendButton();
                    updateReceivedEmail(email);
                  }}
                >
                  {LOGIN_FORM.loginCard.resend}
                </Button>
                <Button
                  sx={{
                    fontWeight: '400px',
                    fontSize: '12px',
                    color: '#126FAA',
                    padding: 0,
                    marginTop: '15px',
                  }}
                  onClick={() => {
                    handleBackToLogin();
                  }}
                >
                  {LOGIN_FORM.loginCard.backSignin}
                </Button>
                {showForgetPassword && (
                  <ForgetPassword BackToLogin={handleBackToLogin} />
                )}
              </Box>
            </Box>
          </Box>
        </Modal>
      ) : (
        <>
          <LoginCard />
        </>
      )}
    </>
  );
};
export default CheckEmailModal;
