'use client';
import React, { useState } from 'react';
import { Modal, Button, Box, Typography } from '@mui/material';
import Image from 'next/image';

import { LOGIN_FORM } from '@/app/constants/LoginConstants';

const CheckEmailModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>

      <Modal
        open={open}
        onClose={handleClose}
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
            display: 'flex',
            background: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '360px',
              height: '250px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '70px',
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
                justifyContent: 'flex-start',
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
                {LOGIN_FORM.loginForm.checkEmail}{' '}
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: '14px',
                }}
              >
                {LOGIN_FORM.loginForm.resetPassword}
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: '12px',
                }}
              >
                {LOGIN_FORM.loginForm.dummyEmail}
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
                }}
              >
                {LOGIN_FORM.loginForm.resend}
              </Button>
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: '12px',
                }}
              >
                {LOGIN_FORM.loginForm.needHelp}
                <span
                  style={{
                    fontWeight: '400px',
                    fontSize: '12px',
                    color: '#126FAA',
                  }}
                >
                  {LOGIN_FORM.loginForm.contactSupport}
                </span>
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400px',
                  fontSize: '12px',
                  color: '#126FAA',
                }}
              >
                {LOGIN_FORM.loginForm.backSignin}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CheckEmailModal;
