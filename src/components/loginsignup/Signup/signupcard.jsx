'use client';
import React, { useState } from 'react';
import { Typography, Box, TextField, Button, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import LoginWithGoogle from '../Login/LoginWithGoogle';
const SignupCard = () => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const isPasswordMatch = password === confirmPassword;
  console.log(isPasswordMatch, setPassword, setConfirmPassword);
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: { xs: '95%', md: '450px' },
          height: { xs: '650px', md: '618px' },
          padding: 8,
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '-4px -4px 11px rgba(0, 0, 0, 0.15)',
          borderRadius: 2,
          background: 'white',
          marginTop: '11px',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', md: '320px' },
            height: 'auto',
            gap: { xs: '5px', md: '8px' },
          }}
        >
          <Typography
            sx={{
              color: '#FF631C',
              fontSize: '20px',
              fontWeight: 600,
              fontFamily: 'Inter',
            }}
          >
            Create Account
          </Typography>
          <Typography
            sx={{
              color: '#333333',
              fontSize: '16px',
              fontWeight: 400,
              fontFamily: 'Inter',
            }}
          >
            It’s Quick & Easy
          </Typography>
          <form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '7px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '4px',
                }}
              >
                <TextField label="First Name" variant="outlined" fullWidth />
                <TextField label="Last Name" variant="outlined" fullWidth />
              </Box>
              <TextField label="Email Address" variant="outlined" fullWidth />
              <TextField
                label="Contact Number"
                variant="outlined"
                type="number"
                fullWidth
              />
              <TextField
                style={{ width: '100%', color: '#777777' }}
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                select
                label="Applicant"
              >
                <MenuItem key={1} value="test0">
                  None
                </MenuItem>
                <MenuItem key={2} value="test1">
                  Test 1
                </MenuItem>
                <MenuItem key={3} value="test2">
                  Test 2
                </MenuItem>
              </TextField>
              <TextField
                placeholder="Password"
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
                onChange={handlePassword}
              />
              <TextField
                label="Confirm Password"
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
                onChange={handleConfirmPassword}
              />
              {/* {isPasswordMatch ? (
                                <p style={{ color: 'green' }}>Passwords match!</p>
                            ) : (
                                <p style={{ color: 'red' }}>Passwords do not match.</p>
                            )} */}
            </Box>
          </form>
          <LoginWithGoogle
            login=" Sign up"
            sign="Sign in"
            account=" Already have an account?"
            googlelogin=" Login with Google"
            onSigninClick={() => router.push('/signin')}
          />
        </Box>
      </Box>
    </>
  );
};
export default SignupCard;
