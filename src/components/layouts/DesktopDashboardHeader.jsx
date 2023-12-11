'use client';
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
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  EMAIL,
  LINK_NAME,
  USER_NAME,
  MY_LISTING,
  POST_LISTING,
  SEARCH,
  SIGN_OUT,
  CUSTOM_COLOR,
} from '@/app/constants/DashboardHeader';
import SearchAndNotificationDesktopButton from './SearchAndNotificationDesktopButton ';

const DesktopDashboardHeader = ({
  HEADER_MENU,
  handleOpenSearchMenu,
  anchorElSearch,
  handleCloseSearchMenu,
  handleCloseLoginMenu,
  handleOpenLoginMenu,
  isloggedIn,
}) => {
  const [search, setSearch] = useState();

  const searchInput = (e) => {
    setSearch(e.target.value);
  };
  const handleLogout = () => {
    handleCloseLoginMenu();
  };
  return (
    <Box
      s
      sx={{
        flexGrow: 1,
        justifyContent: 'end',
        gap: 4,
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
      }}
    >
      {HEADER_MENU?.map((item) => {
        return (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Search">
                  <Image
                    onClick={handleOpenSearchMenu}
                    src={item?.searchIcon}
                    width={35}
                    height={35}
                    alt={'icon'}
                    style={{ marginRight: 30, cursor: 'pointer' }}
                  />
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
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
                  onClose={handleCloseSearchMenu}
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
                    />
                    <Link href={`/dashboard/proposals?search=${search}`}>
                      <Button variant="primary" sx={{ mx: 1 }}>
                        {SEARCH}
                      </Button>
                    </Link>
                  </Box>
                </Menu>
              </Box>
              <Image
                src={item?.linkIcon}
                width={20}
                height={20}
                alt={'icon'}
                style={{ marginRight: 8 }}
              />
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  color: '#666666',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  marginRight: '14px',
                }}
              >
                {LINK_NAME}
              </Link>
              <Button
                sx={{
                  color: '#000',
                  border: '1px solid #E7E7E7',
                  mx: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    marginRight: '8px',
                    marginLeft: '8px',
                    p: 0.5,
                  }}
                >
                  <Image
                    src={item?.myListingIcon}
                    width={20}
                    height={20}
                    alt={'icon'}
                  />
                  <Typography mx={1}>{MY_LISTING}</Typography>
                </Box>
              </Button>
              <Button variant={'primary'}>
                <Box
                  sx={{
                    display: 'flex',
                    marginRight: '8px',
                    marginLeft: '8px',
                    p: 0.6,
                    color: '#fff',
                  }}
                >
                  <Image
                    src={item?.PostListingIcon}
                    width={20}
                    height={20}
                    alt={'icon'}
                  />
                  <Typography mx={1}>{POST_LISTING}</Typography>
                </Box>
              </Button>
              <IconButton
                sx={{
                  p: 0,
                  color: '#FF631C',
                  ml: 2,
                }}
              >
                <Badge
                  badgeContent={4}
                  color={CUSTOM_COLOR}
                  sx={{
                    width: 25,
                    height: 25,
                    '& .MuiBadge-badge': {
                      color: 'white',
                      width: 10,
                      height: 20,
                    },
                  }}
                >
                  <NotificationsIcon
                    sx={{ fontSize: 35, color: { CUSTOM_COLOR } }}
                  />
                </Badge>
              </IconButton>
            </Box>
            <SearchAndNotificationDesktopButton
              handleCloseLoginMenu={handleCloseLoginMenu}
              handleOpenLoginMenu={handleOpenLoginMenu}
              USER_NAME={USER_NAME}
              profileIcon={item?.profileIcon}
              handleLogout={handleLogout}
              isloggedIn={isloggedIn}
              SIGN_OUT={SIGN_OUT}
              EMAIL={EMAIL}
            />
          </>
        );
      })}
    </Box>
  );
};

export default DesktopDashboardHeader;
