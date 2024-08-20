import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';

import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';
import ModalSignin from '@/src/components/dashboard/modals/ModalSignin';
import { LOGOUT, SETTINGS, SIGN_IN } from '@/src/constants/Login';
import { useRouter } from 'next/navigation';

const SignInResponsiveButton = ({
  isUserLoggedIn,
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
  handleClose,
  open,
  handleOpen,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  const goToMyAccount = () => {
    if (user?.userType === 'user') {
      router.push('/user/dashboard');
    } else if (user?.userType === 'agent') {
      router.push('/agent/live-bidding');
    }
  };

  const handleLogout = () => {
    dispatch(setLoggedOut());

    localStorage?.removeItem('token');

    Cookie?.remove('token');
    Cookie?.remove('userType');

    handleCloseUserMenu();
  };

  return (
    <Box sx={{ flexGrow: 0, display: 'flex', gap: 2 }}>
      {isUserLoggedIn === true ? (
        <>
          <Button
            sx={{
              display: {
                xs: 'block',
                sm: 'block',
                lg: 'block',
                xl: 'block',
              },
            }}
            onClick={handleOpenUserMenu}
          >
            <Image
              src={'/images/login.png'}
              width={80}
              height={40}
              alt={'dashboardIcon'}
            />
          </Button>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box
              sx={{
                padding: 2,
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: 600,
                  color: '#000',
                  mt: -2,
                }}
              >
                {user?.userName}
              </Typography>
              <MenuItem
                sx={{
                  width: '120px',
                  padding: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  border: '1px solid #D6D6D6',
                  marginBottom: '5px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '5px',
                  color: '#333333',
                  my: 2,
                }}
                onClick={goToMyAccount}
              >
                {SETTINGS}
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  width: '120px',
                  padding: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  border: '1px solid #D6D6D6',
                  marginBottom: '5px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '5px',
                  color: '#333333',
                }}
              >
                {LOGOUT}
              </MenuItem>
            </Box>
          </Menu>
        </>
      ) : (
        <Button
          variant="primary"
          sx={{
            width: '120px',
            height: '40px',
            display: {
              xs: 'block',
              sm: 'block',
              lg: 'none',
              xl: 'none',
            },
          }}
          onClick={handleOpen}
        >
          <Typography sx={{ color: '#fff' }}>{SIGN_IN}</Typography>
        </Button>
      )}
      <ModalSignin handleClose={handleClose} open={open} />
    </Box>
  );
};

export default SignInResponsiveButton;
