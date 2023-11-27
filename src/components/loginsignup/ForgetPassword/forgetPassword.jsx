import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

import { LOGIN_FORM } from '@/app/constants/LoginConstants';
import CheckEmailModal from './emailModal';

const ForgetPassword = ({BackToLogin}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(false);
  const [resentEmails, setResentEmail] = useState([]);
  const handleModalToggle = () => {
    setOpen(!open);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleResent = () => {
    setResentEmail((PreEmails) => [...PreEmails, email]);
  }
  console.log("email",resentEmails)
  const validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError(LOGIN_FORM.loginForm.validEmail);
      setisValidEmail(false);
    } else {
      setError('');
      setisValidEmail(true);
      handleModalToggle();
    }
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
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
            }}
          >
            <Typography
              sx={{
                color: '#FF631C',
                fontSize: { xs: '20px', md: '30px' },
                fontWeight: 600,
              }}
            >
              {LOGIN_FORM.loginForm.passwordForget}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 400,
              }}
            >
              {LOGIN_FORM.loginForm.enterEmail}
            </Typography>
            <TextField
              label={LOGIN_FORM.loginForm.email}
              name="email"
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
            <Button
              style={{
                display: 'flex',
                alignSelf: 'center',
                background: '#FB631C',
                width: '100px',
                borderRadius: '5px',
                color: 'white',
                '&:hover': {
                  background: '#FF631C',
                },
              }}
              onClick={() => { validateEmail(), { BackToLogin } }}
            >
              {LOGIN_FORM.loginForm.continue}
            </Button>

            {isValidEmail && (
              <CheckEmailModal
                onClose={() => setisValidEmail(false)}
                open={open}
                onCloseModal={handleModalToggle}
                email={email}
                resendButton={handleResent}
                resentEmail={resentEmails}
              />
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
