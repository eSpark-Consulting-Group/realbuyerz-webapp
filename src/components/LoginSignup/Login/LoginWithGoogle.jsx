import React from 'react';
import { Typography, Box, Button, CircularProgress } from '@mui/material';
import Image from 'next/image';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setLoggedIn, setUserProfile } from '@/src/redux/slices/auth/authSlice';
import { userProfile } from '@/src/utils/apis/auth/getProfile';

const LoginWithGoogle = ({
  buttonLabel,
  loginButton,
  label,
  accountCreationMessage,
  onSigninClick,
  loginClick,
  isPending,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSuccessfulLogin = (data) => {
    if (data.success) {
      const { token } = data.response.data;
      localStorage.setItem('token', token.token);
      Cookie.set('token', token.token);
      Cookie.set('userType', token.user.role);

      const savedUserInfo = {
        email: token.user.email,
        userName: token.user.userName,
        userType: token.user.role,
      };

      dispatch(setLoggedIn(savedUserInfo));
      setProfile();

      toast.success('Signup successful!', {
        onClose: () => {
          if (token.user.role === 'user') {
            router.push('/user/dashboard');
          } else if (token.user.role === 'agent') {
            router.push('/agent/live-bidding');
          }
        },
      });
    } else {
      toast.error('Signup failed. Please try again.');
    }
  };

  const handleGoogleLogin = async (response) => {
    try {
      const decoded = jwtDecode(response.credential);

      const user = {
        firstName: decoded.given_name || '',
        lastName: decoded.family_name || '',
        email: decoded.email,
        profileImage: decoded.picture || '',
        role: 'user',
        socialId: decoded.sub,
      };

      const signupResponse = await fetch('http://52.55.77.181/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const signupData = await signupResponse.json();

      if (signupData.success) {
        handleSuccessfulLogin(signupData);
      } else {
        console.error('Signup failed:', signupData.message);
        toast.error(signupData.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during Google login:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const { mutate: setProfile } = useMutation({
    mutationFn: userProfile,
    onSuccess: (data) => {
      dispatch(setUserProfile(data?.response?.data));
    },
  });

  return (
    <GoogleOAuthProvider clientId="522940203862-u31jekta8qgudqdbf2sdlengvbp0425k.apps.googleusercontent.com">
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Button
          sx={{
            background: isPending ? '#e0e0e0' : '#FB631C',
            width: '100px',
            borderRadius: '5px',
            color: 'white',
            '&:hover': {
              background: '#FF631C',
            },
          }}
          onClick={loginClick}
          disabled={isPending}
        >
          {isPending ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            buttonLabel
          )}
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
        />
        <Typography sx={{ color: '#909394' }}>Or</Typography>
        <hr
          style={{
            display: { xs: 'none', md: 'flex' },
            width: '135px',
            border: '1px #A5A5A5 solid',
          }}
        />
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={(error) => {
            console.error('Google Login Failure:', error);
            // Display user-friendly error message
          }}
          render={({ onClick, disabled }) => (
            <Button
              sx={{
                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                width: { xs: '200px', md: '250px' },
                padding: { xs: '8px', md: '10px' },
                fontSize: { xs: '12px', sm: '15px', md: '14px' },
                fontWeight: 500,
                gap: '12px',
                color: '#909394',
                borderRadius: 2,
                textTransform: 'none',
              }}
              onClick={onClick}
              disabled={disabled}
            >
              <Image
                src="/images/signup_page/google.svg"
                width={24}
                height={24}
                alt={'google'}
              />
              {loginButton}
            </Button>
          )}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 400,
          gap: '5px',
        }}
      >
        <Typography
          sx={{ color: '#333333', fontSize: { xs: '13px', md: '16px' } }}
        >
          {accountCreationMessage}
        </Typography>
        <Typography
          sx={{
            color: '#FB631C',
            fontWeight: 400,
            fontSize: '16px',
            cursor: 'pointer',
            position: 'relative',
            textDecoration: 'none',
          }}
          onClick={onSigninClick}
        >
          {label}
          <span
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '1px',
              backgroundColor: '#FB631C',
            }}
          />
        </Typography>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default LoginWithGoogle;
