'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';

import { Box, Button } from '@mui/material';

import ModalSignin from '@/src/components/dashboard/modals/ModalSignin';
import Typewriter from './Typewriter';

import { navigateTo } from '@/src/utils/authUtils';
import { removeFromStorage } from '@/src/utils/globalUtils';

import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';

import { FEATURED_HEADINGS } from '@/src/constants/Home';


const CreateAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = Cookie.get('token');
    const userType = Cookie.get('userType');

    if (token && userType) {
      setIsLoggedIn(true);
      setUserRole(userType);
    } else {
      setIsLoggedIn(false);
      removeFromStorage()
      dispatch(setLoggedOut());
    }
  }, []);

  const handleClose = () => setOpen(false);

  const handleButtonClick = () => {
    isLoggedIn ? navigateTo(userRole, router) : setOpen(true);
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
          height: { xs: 'auto', lg: '40px' },
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
