'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import ModalSignin from '@/src/components/dashboard/modals/ModalSignin';
import { FEATURED_HEADINGS } from '@/src/constants/Home';
import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';
import { useDispatch } from 'react-redux';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (currentIndex < text.length) {
      interval = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150);
    } else {
      setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <Typography
      sx={{
        color: '#fff',
        mb: '30px',
        fontWeight: '600',
        fontSize: { xs: '15px', sm: '20px', md: '24px', lg: '26px' },
      }}
    >
      {displayedText}|
    </Typography>
  );
};

const CreateAccount = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookie.get('token');
    const userType = Cookie.get('userType');

    if (token && userType) {
      setIsLoggedIn(true);
      setUserRole(userType);
      console.log('User is logged in with role:', userType);
    } else {
      setIsLoggedIn(false);
      localStorage?.removeItem('token');
  
      Cookie?.remove('token');
      Cookie?.remove('userType');
      dispatch(setLoggedOut());
      console.log('User is not logged in');
    }
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleButtonClick = () => {
    if (isLoggedIn) {
      if (userRole === 'user') {
        router.push('/user/dashboard');
      } else if (userRole === 'agent') {
        router.push('/agent/live-bidding');
      } else {
        router.push('/404');
      }
    } else {
      handleOpen();
    }
  };

  return (
    <Box
      sx={{
        pt: '90px',
        pb: '100px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/CreateAccount.gif')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Typewriter text={FEATURED_HEADINGS.sliderHeading} />

      <Button
        onClick={handleButtonClick}
        sx={{
          mx: '15px',
          fontWeight: 600,
          width: '150px',
          height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
          color: '#fff',
          '&:hover': {
            backgroundColor: '#fff !important',
            color: '#fb631c !important',
            border: '1px solid #fb631c',
          },
          fontSize: '12px',
        }}
        variant="primary"
      >
        {isLoggedIn
          ? FEATURED_HEADINGS.myAccount
          : FEATURED_HEADINGS.createAccount}
      </Button>

      <ModalSignin open={open} handleClose={handleClose} />
    </Box>
  );
};

export default CreateAccount;
