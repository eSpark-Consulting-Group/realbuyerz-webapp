import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import CheckEmailModal from './EmailModal';
import { validateEmail } from '@/utils/validationEmail';
import { LOGIN_FORM } from '@/app/constants/Login';
import { useDispatch } from 'react-redux';
import { updateReceivedEmail } from '@/src/redux/slices/resendEmail/resendEmailSlice';

const ForgetPassword = ({ BackToLogin, setshowForgetPassword }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(false);
  const dispatch = useDispatch();
  const handleModalToggle = () => {
    setOpen(!open);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleValidation = () => {
    validateEmail(email, setError, setisValidEmail, handleModalToggle);
  };
  const handleClick = () => {
    dispatch(updateReceivedEmail(email));
    console.log('email', email);
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
              {LOGIN_FORM.loginCard.passwordForget}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 400,
              }}
            >
              {LOGIN_FORM.loginCard.enterEmail}
            </Typography>
            <TextField
              label={LOGIN_FORM.loginCard.email}
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
              onClick={() => {
                handleValidation(), { BackToLogin };
              }}
            >
              {LOGIN_FORM.loginCard.continue}
            </Button>
            {isValidEmail && (
              <CheckEmailModal
                onClose={() => setisValidEmail(false)}
                open={open}
                onCloseModal={handleModalToggle}
                email={email}
                setshowForgetPassword={setshowForgetPassword}
                handleClick={handleClick}
              />
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ForgetPassword;
