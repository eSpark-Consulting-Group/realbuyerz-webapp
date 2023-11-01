import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginWithGoogle from './LoginWithGoogle';

const LoginCard = () => {
  const welcome = " Hey! Welcome";
  const forgetPassword = "Forget Password?";
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
    const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { xs: '90%', md: '450px' },
          height: '530px',
          padding: 8,
          paddingTop: '70px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
          borderRadius: 2,
          background: 'white',
          marginTop: '23px',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '340px' },
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            padding: '5px',
            gap: { xs: '7px', md: '15px' },
          }}
        >
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: { xs: '15px', md: '20px' },
              fontFamily: 'Inter',
            }}
          >
           {welcome}
          </Typography>
          <form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <TextField
                label="Email / Username"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        style={{ color: '#444444' }}
                        onClick={handlePasswordToggle}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              alignItems: 'baseline',
              justifyContent: {
                xs: 'center',
                sm: 'space-between',
                md: 'space-between',
              },
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: '#FF631C',
                fontSize: { xs: '10px', sm: '12px', md: '12px' },
                textDecoration: 'underline',
                marginTop: 2,
              }}
            >
             {forgetPassword}
            </Typography>
            <FormControlLabel
              label="Remember me"
              control={<Checkbox size="small" color="primary" />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                color: '#777777',
                fontSize: { xs: '5px', md: '10px' },
              }}
            />
          </Box>
          <LoginWithGoogle login="Log in"
            sign="Sign up"
            account="Doesn’t have an account yet?"
            googlelogin=" Login with Google"
             onSigninClick={() => router.push('/signup')}
          />
        </Box>
      </Box>
    </>
  );
};
export default LoginCard;
