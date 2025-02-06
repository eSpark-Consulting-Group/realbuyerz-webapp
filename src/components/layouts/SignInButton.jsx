import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';

import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';
import ModalSignin from '@/src/components/dashboard/modals/ModalSignin';
import {
  LOGOUT,
  SETTINGS,
  SIGN_IN,
  USER_PROFILE_MENU,
} from '@/src/constants/Login';
import { useRouter } from 'next/navigation';

const SignInButton = ({
  isUserLoggedIn,
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  handleClose,
  open,
  handleOpen,
}) => {
  const router = useRouter();

  const dispatch = useDispatch();
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
                xs: 'flex',
              },
              '&:hover': {
                backgroundColor: 'transparent',
              },
              p: 0,
              justifyContent: 'right',
              alignItems: 'center',
            }}
            disableRipple
            onClick={handleOpenUserMenu}
          >
            <Box
              component={'img'}
              src={'/images/user_loged_in.png'}
              alt={'dashboardIcon'}
              sx={{
                width: { xs: '36px', sm: '38px', md: '40px', lg: 'auto' },
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Button>
          <Menu
            sx={{ mt: 4 }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                width: '160px',
              },
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem
              onClick={handleClose}
              disableRipple
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontWeight: 500,
                    color: '#000',
                    fontSize: '15px',
                  }}
                >
                  {user?.userName}
                </Typography>
                {USER_PROFILE_MENU?.map(({ text }, index) => (
                  <Button
                    key={index}
                    disableRipple
                    sx={{
                      width: '100%',
                      borderRadius: '5px',
                      backgroundColor: '#F5F5F5',
                      border: '1px solid #D6D6D6',
                      height: '30px',
                      fontSize: '12px',
                      fontWeight: 400,
                      color: '#333333',
                      mb: 0.5,
                      '&:hover': {
                        border: '1px solid #D6D6D6',
                      },
                    }}
                    onClick={
                      text === 'My Account' ? goToMyAccount : handleLogout
                    }
                  >
                    {text}
                  </Button>
                ))}
              </Box>
            </MenuItem>

            {/* <Box
              sx={{
                p: 1,
                width: '100%',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: 600,
                  color: '#000',
                }}
              >
                {user?.userName}
              </Typography>
              <MenuItem
                sx={{
                  width: '100%',
                  // padding: 0.7,
                  display: 'flex',
                  justifyContent: 'center',
                  alignContent: 'center',
                  textAlign: 'center',
                  border: '1px solid #D6D6D6',
                  // marginBottom: '5px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '5px',
                  color: '#333333',
                  // my: 2,
                }}
                onClick={goToMyAccount}
              >
                {SETTINGS}
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  width: '100%',
                  // padding: 0.7,
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
            </Box> */}
          </Menu>
        </>
      ) : (
        <Button
          variant="primary"
          sx={{
            width: '120px',
            height: '40px',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
          }}
          onClick={handleOpen}
        >
          <Typography sx={{ color: '#fff', fontSize: '12px' }}>
            {SIGN_IN}
          </Typography>
        </Button>
      )}
      <ModalSignin handleClose={handleClose} open={open} />
    </Box>
  );
};

export default SignInButton;
