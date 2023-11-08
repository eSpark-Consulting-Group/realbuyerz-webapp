import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';

const LoginCard = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
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
            Hey! Welcome
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
              Forget Password?
            </Typography>
            <FormControlLabel
              label="Remember me"
              control={<Checkbox size="small" color="primary" />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                // marginLeft: '10px',
                color: '#777777',
                fontSize: { xs: '5px', md: '10px' },
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              style={{
                background: '#FB631C',
                width: '100px',
                borderRadius: '5px',
                color: 'white',
                '&:hover': {
                  background: '#FF631C',
                },
              }}
            >
              Log In
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <hr
              style={{
                display: { xs: 'none', md: 'flex' },
                width: '135px',
                border: '1px #A5A5A5 solid',
              }}
            ></hr>
            <Typography
              sx={{
                color: '#909394',
              }}
            >
              {' '}
              Or
            </Typography>
            <hr
              style={{
                display: { xs: 'none', md: 'flex' },
                width: '135px',
                border: '1px #A5A5A5 solid',
              }}
            ></hr>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                width: { xs: '200px', md: '250px' },
                padding: { xs: '8px', md: '10px' },
                fontSize: { xs: '8.3px', sm: '15px', md: '15px' },
                fontWeight: 500,
                gap: '10px',
                color: '#909394',
                borderRadius: 2,
                fontFamily: 'Inter',
                textTransform: 'math-auto',
              }}
            >
              <Image
                src="assets/images/google.svg"
                width={24}
                height={24}
                alt={''}
              />
              Login with Google
            </Button>
          </Box>
          <Box
            sx={{
              textAlign: 'center',
              fontSize: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
            }}
          >
            <Typography
              sx={{
                color: '#333333',
              }}
            >
              Doesn’t have an account yet?{' '}
              <Typography
                style={{
                  color: '#FB631C',
                  fontWeight: 400,
                }}
                onClick={() => router.push('/signup')}
              >
                Sign up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default LoginCard;
