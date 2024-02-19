import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NotificationsIcon from '@mui/icons-material/Notifications';

import {
  EMAIL,
  LINK_NAME,
  USER_NAME,
  SEARCH,
  SIGN_OUT,
  CUSTOM_COLOR,
  GotoPageIcon,
  ProfileIcon,
  SearchIcon,
} from '@/app/constants/DashboardHeader';

import Image from 'next/image';
import Link from 'next/link';
import {
  Badge,
  Button,
  IconButton,
  Menu,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import SearchAndNotificationDesktopButton from '../layouts/SearchAndNotificationDesktopButton ';
import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';

export default function ResponsiveNavbar({ openSidebar }) {
  const router = useRouter();
  const [search, setSearch] = useState();
  const [anchorElSearch, setAnchorElSearch] = useState(null);
  const [isloggedIn, setisloggedIn] = useState(null);
  const dispatch = useDispatch();

  const handleOpenSearchMenu = (event) => {
    setAnchorElSearch(event.currentTarget);
  };

  const handleCloseSearchMenu = () => {
    setAnchorElSearch(null);
  };

  const searchInput = (e) => {
    setSearch(e.target.value);
  };

  const handleOpenLoginMenu = (event) => {
    setisloggedIn(event.currentTarget);
  };
  const handleCloseLoginMenu = () => {
    setisloggedIn(null);
  };

  const handleLogout = () => {
    Cookie.remove('token');
    Cookie.remove('userType');
    dispatch(setLoggedOut());
    router.push('/signin');
    handleCloseLoginMenu();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
      }}
    >
      <AppBar
        sx={{
          position: 'fixed',
          backgroundColor: '#fff',
          borderBottom: '2px solid #E4E4E4',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <Box
            sx={{
              width: '100%',
              height: 66,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: { xs: '53%', md: 'auto' },
                display: 'flex',
                gap: 2,
                alignItems: 'center',
              }}
            >
              <Box
                sx={{ width: 'auto' }}
                component={'div'}
                onClick={openSidebar}
              >
                <Image
                  src={'/images/drawer.svg'}
                  width={20}
                  height={20}
                  alt={'icon'}
                />
              </Box>

              <Box sx={{ width: { xs: 'auto', sm: '100%' } }}>
                <Link href={'/'}>
                  <Image
                    src={'/images/logo.png'}
                    width={155}
                    height={37}
                    alt={'icon'}
                  />
                </Link>
              </Box>
            </Box>
            <Box sx={{ width: 'auto', display: { xs: 'flex' } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <Tooltip title="Search">
                  <Box
                    component={'img'}
                    onClick={handleOpenSearchMenu}
                    src={SearchIcon}
                    alt={'icon'}
                    sx={{
                      width: { xs: '30px', sm: '41px' },
                      height: { xs: '30px', sm: '43px' },
                      display: { xs: 'flex', md: 'flex' },
                      mr: { xs: 0.5, sm: 1.5, md: 2.5 },
                      cursor: 'pointer',
                    }}
                  />
                </Tooltip>
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Link
                    href="/"
                    style={{
                      display: 'flex',
                    }}
                  >
                    <Image
                      src={GotoPageIcon}
                      width={20}
                      height={20}
                      alt={'icon'}
                      style={{
                        mr: { xs: 0.5, sm: 1.5, md: 2.5 },
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#666666',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        mx: '14px',
                        fontWeight: 500,
                      }}
                    >
                      {LINK_NAME}
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <IconButton
                    sx={{
                      p: 0,
                      mr: { xs: 0.5, sm: 1.5, md: 2.5 },
                      color: '#FF631C',
                      position: 'relative',
                    }}
                  >
                    <Badge
                      badgeContent={1}
                      color={CUSTOM_COLOR}
                      sx={{
                        '& .MuiBadge-badge': {
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          color: 'white',
                          backgroundColor: '#1176AD',
                          maxWidth: { xs: 7, sm: 7 },
                          fontSize: { xs: '8px', sm: '10px' },
                          height: { xs: 12, sm: 13 },
                          minWidth: { xs: 8, sm: 13 },
                        },
                      }}
                    >
                      <NotificationsIcon
                        sx={{
                          fontSize: { xs: 28, sm: 35 },
                          color: { CUSTOM_COLOR },
                        }}
                      />
                    </Badge>
                  </IconButton>
                </Box>

                <Menu
                  sx={{ mt: '52px' }}
                  id="menu-appbar"
                  anchorEl={anchorElSearch}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElSearch)}
                  onMouseLeave={handleCloseSearchMenu}
                  onClose={handleCloseSearchMenu}
                >
                  <Box
                    sx={{
                      padding: 2,
                      display: 'flex',
                    }}
                  >
                    <TextField
                      id="outlined-search"
                      label="Search"
                      type="search"
                      size="small"
                      onChange={(e) => searchInput(e)}
                    />
                    <Link href={`/agent/my-proposals?search=${search}`}>
                      <Button variant="primary" sx={{ mx: 1 }}>
                        {SEARCH}
                      </Button>
                    </Link>
                  </Box>
                </Menu>

                <Box
                  component={'img'}
                  sx={{
                    width: { xs: '32px', sm: '42px' },
                    height: { xs: '32px', sm: '42px' },
                    display: { xs: 'flex', md: 'none' },
                    alignSelf: 'end',
                  }}
                  src={ProfileIcon}
                  width={38}
                  height={38}
                  alt={'icon'}
                  onClick={handleOpenLoginMenu}
                />

                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <SearchAndNotificationDesktopButton
                    handleCloseLoginMenu={handleCloseLoginMenu}
                    handleOpenLoginMenu={handleOpenLoginMenu}
                    userName={USER_NAME}
                    profileIcon={ProfileIcon}
                    handleLogout={handleLogout}
                    isloggedIn={isloggedIn}
                    signOut={SIGN_OUT}
                    email={EMAIL}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
