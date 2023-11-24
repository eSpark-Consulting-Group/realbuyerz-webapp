import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

import { LOGIN_FORM } from '@/app/constants/LoginConstants';
import CheckEmailModal from './emailModal';

const ForgetPassword = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} sx={{ display: 'flex', alignItems: 'center' }}>
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
            background: 'white',
            marginTop: '30px',
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
              //   padding: '5px',
              gap: { xs: '7px', md: '15px' },
            }}
          >
            <Typography
              sx={{
                color: '#FF631C',
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: 600,
              }}
            >
              {LOGIN_FORM.loginForm.passwordForget}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '10px', md: '16px' },
                fontWeight: 400,
              }}
            >
              {LOGIN_FORM.loginForm.enterEmail}
            </Typography>
            <TextField
              label={LOGIN_FORM.loginForm.email}
              name="firstName"
              variant="outlined"
              fullWidth
              // value={formData.firstName}
              // onChange={handleInputChange}
            />
            <Typography
              sx={{
                fontSize: { xs: '10px', md: '14px' },
                fontWeight: 400,
                color: '#FF631C',
              }}
            >
              {LOGIN_FORM.loginForm.validEmail}
            </Typography>
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
            >
              {LOGIN_FORM.loginForm.continue}
            </Button>
            <CheckEmailModal />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgetPassword;
