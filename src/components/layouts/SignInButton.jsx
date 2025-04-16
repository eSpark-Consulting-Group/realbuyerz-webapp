import React from 'react';
import { Box } from '@mui/system';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';

import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';
import ModalSignin from '@/src/components/dashboard/modals/ModalSignin';
import { SIGN_IN, USER_PROFILE_MENU } from '@/src/constants/Login';
import { useRouter } from 'next/navigation';
import BasicModal from '../global/BasicModal';
import Cookies from 'js-cookie';

const SignInButton = ({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  handleClose,
  open,
  handleOpen,
}) => {
  const router = useRouter();
  const [isOpenLogoutModal, setIsOpenLogoutModal] = React.useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const goToMyAccount = () => {
    if (user?.userType === 'user') {
      router.push('/user/dashboard');
    } else if (user?.userType === 'agent') {
      router.push('/agent/live-bidding');
    }
  };

  const handleClickLogout = () => {
    handleOpenLogoutModal();
    handleCloseUserMenu();
  };

  const handleOpenLogoutModal = () => setIsOpenLogoutModal(true);
  const handleCloseLogoutModal = () => setIsOpenLogoutModal(false);

  const handleLogout = () => {
    dispatch(setLoggedOut());
    localStorage?.removeItem('token');
    Cookie?.remove('token');
    Cookie?.remove('userType');
    setIsOpenLogoutModal(false);
  };

  const isToken = Cookies?.get('token');

  return (
    <>
      <Box
        sx={{ flexGrow: 0, display: 'flex', gap: 2, justifyContent: 'center' }}
      >
        {isToken ? (
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
                        text === 'My Account'
                          ? goToMyAccount
                          : handleClickLogout
                      }
                    >
                      {text}
                    </Button>
                  ))}
                </Box>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            variant="primary"
            sx={{
              ml: 'auto',
              width: { xs: '80px', sm: '110px', md: '120px' },
              height: { xs: '30px', sm: '35px', md: '40px' },
              display: {
                xs: 'flex',
              },
            }}
            onClick={handleOpen}
          >
            <Typography sx={{ color: '#fff', fontSize: '12px' }}>
              {SIGN_IN}
            </Typography>
          </Button>
        )}
      </Box>
      <ModalSignin handleClose={handleClose} open={open} />
      <BasicModal
        open={isOpenLogoutModal}
        close={handleCloseLogoutModal}
        maxHeight={'160px'}
        body={
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            <Typography sx={{ fontSize: '18px', textAlign: 'center' }}>
              Are you sure you want to log out?
            </Typography>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
              }}
            >
              <Button
                variant="contained"
                sx={{ width: '48%' }}
                onClick={handleCloseLogoutModal}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ width: '48%' }}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </Box>
          </Box>
        }
      />
    </>
  );
};

export default SignInButton;
