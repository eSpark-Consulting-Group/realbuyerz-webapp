import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';

import {
  LINK_NAME,
  LOGIN_PERSON_NAME,
  MY_LISTING,
  POST_LISTING,
  EMAIL,
  SEARCH,
  SING_OUT,
} from '@/app/constants/DashboardHeader';
import MyListingResponsiveButton from './MyListingResponsiveButton';
import PostListingResponsiveButton from './PostListingResponsiveButton';

const MobileResponsiveDashboardHeader = ({
  HEADER_MENU,
  handleCloseNavMenu,
  anchorElNav,
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  islogedInMobile,
  handleOpenMobileLoginMenu,
  handleCloseMobileLoginMenu,
}) => {
  const [search, setSearch] = useState();
  const searchInput = (e) => {
    setSearch(e.target.value);
  };
  const handleLogout = () => {
    handleCloseMobileLoginMenu();
  };
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      sx={{
        display: { sm: 'block', md: 'block', lg: 'none' },
        color: '#000',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'end',
          gap: 4,
          display: {
            xs: 'block',
            sm: 'block',
            md: 'block',
            lg: 'block',
          },
          flexDirection: 'column',
          width: '198px ',
        }}
      >
        {HEADER_MENU?.map((item) => {
          return (
            <>
              <Box sx={{ p: 2 }}>
                <Box sx={{ flexGrow: 0 }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Image
                      onClick={handleOpenUserMenu}
                      src={item?.searchIcon}
                      width={35}
                      height={35}
                      alt={'icon'}
                      style={{ marginRight: 30, cursor: 'pointer' }}
                    />
                    <IconButton
                      sx={{
                        p: 0,
                        color: '#FF631C',
                        my: 2,
                        mr: '16px',
                      }}
                    >
                      <Badge
                        badgeContent={4}
                        color="customColor"
                        sx={{
                          width: 25,
                          height: 25,
                          display: 'block',
                          '& .MuiBadge-badge': {
                            color: 'white',
                            width: 10,
                            height: 20,
                          },
                        }}
                      >
                        <NotificationsIcon
                          sx={{ fontSize: 35, color: 'customColor' }}
                        />
                      </Badge>
                    </IconButton>
                  </Box>
                  <Menu
                    sx={{ mt: '50px' }}
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
                      <TextField
                        id="outlined-search"
                        label="Search"
                        type="search"
                        size="small"
                        onChange={(e) => searchInput(e)}
                        sx={{ my: { xs: 1, sm: 0 } }}
                      />
                      <Link href={`/dashboard/proposals?search=${search}`}>
                        <Button
                          variant="primary"
                          sx={{ mx: 1, my: { xs: 1, sm: 0 } }}
                        >
                          {SEARCH}
                        </Button>
                      </Link>
                    </Box>
                  </Menu>
                </Box>
                <Box sx={{ display: 'flex', mt: 2 }}>
                  <Link href="/">
                    <Image
                      src={item?.linkIcon}
                      width={20}
                      height={20}
                      alt="icon"
                      style={{ marginRight: 10 }}
                    />
                  </Link>
                  <Link href="/">{LINK_NAME}</Link>
                </Box>
                <MyListingResponsiveButton
                  icon={item?.myListingIcon}
                  buttonName={MY_LISTING}
                />
                <PostListingResponsiveButton
                  icon={item?.PostListingIcon}
                  buttonName={POST_LISTING}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid #E7E7E7',
                  borderRadius: '390px',
                  alignItems: 'center',
                  mx: 2.1,
                  cursor: 'pointer',
                }}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    color: 'black',
                    alignItems: 'center',
                    mx: 2,
                  }}
                >
                  {LOGIN_PERSON_NAME}
                </Typography>
                <Image
                  src={item?.profileIcon}
                  width={41}
                  height={41}
                  alt={'icon'}
                  onClick={handleOpenMobileLoginMenu}
                />
                <Menu
                  sx={{ mt: '52px' }}
                  id="menu-appbar"
                  anchorEl={islogedInMobile}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(islogedInMobile)}
                  onClose={handleCloseMobileLoginMenu}
                >
                  <Box sx={{ padding: 1, gap: 1 }}>
                    <MenuItem
                      sx={{
                        background: '#F5F5F5',
                        borderRadius: '10px',
                        gap: 1,
                        marginBottom: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignContent: 'center',
                          '&:hover': {
                            color: '#FFF5F0 !important',
                          },
                          borderRadius: '10px',
                          background: '#F5F5F5',
                        }}
                      >
                        <Image
                          src={'/images/profileIcon.png'}
                          width={50}
                          height={50}
                          alt={'icon'}
                        />
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              mx: 1,
                              color: '#000',
                              fontSize: '15px',
                              fontStyle: 'normal',
                              fontWeight: 500,
                              lineHeight: 'normal',
                            }}
                          >
                            {LOGIN_PERSON_NAME}
                          </Typography>
                          <Typography
                            sx={{
                              mx: 1,
                              color: '#808080',
                              fontSize: '12px',
                              fontStyle: 'normal',
                              fontWeight: 400,
                              lineHeight: 'normal',
                            }}
                          >
                            {EMAIL}
                          </Typography>
                        </Box>
                      </Box>
                    </MenuItem>
                    <MenuItem
                      sx={{
                        background: '#FFF5F0',
                        borderRadius: '10px',
                        padding: '13px 67px 13px 68px',
                        '&:hover': {
                          color: '#FFF5F0 !important',
                          backgroundColor: '#FFF5F0',
                        },
                      }}
                      onClick={handleLogout}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignContent: 'center',
                          textAlign: 'center',
                          borderRadius: '10px',
                          background: '#FFF5F0',
                        }}
                      >
                        <Image
                          src={'/images/Signout.png'}
                          width={15}
                          height={5}
                          alt="Signout"
                        />

                        <Typography
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mx: 1,
                            color: '#F00',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                          }}
                        >
                          {SING_OUT}
                        </Typography>
                      </Box>
                    </MenuItem>
                  </Box>
                </Menu>
              </Box>
            </>
          );
        })}
      </Box>
    </Menu>
  );
};

export default MobileResponsiveDashboardHeader;
