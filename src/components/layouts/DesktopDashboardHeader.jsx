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
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  EMAIL,
  LINK_NAME,
  LOGIN_PERSON_NAME,
  MY_LISTING,
  POST_LISTING,
  SEARCH,
  SING_OUT,
} from '@/app/constants/DashboardHeader';

const DesktopDashboardHeader = ({
  HEADER_MENU,
  handleOpenSearchMenu,
  anchorElSearch,
  handleCloseSearchMenu,
  handleCloseLoginMenu,
  handleOpenLoginMenu,
  islogedIn,
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
                  color="customColor"
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
                    sx={{ fontSize: 35, color: 'customColor' }}
                  />
                </Badge>
              </IconButton>
            </Box>
            <Box
              sx={{
                display: 'flex',
                border: '1px solid #E7E7E7',
                borderRadius: '390px',
                alignItems: 'center',
                mx: 1,
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
                onClick={handleOpenLoginMenu}
              />
              <Menu
                sx={{ mt: '65px' }}
                id="menu-appbar"
                anchorEl={islogedIn}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(islogedIn)}
                onClose={handleCloseLoginMenu}
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
                    onClick={handleLogout}
                    sx={{
                      background: '#FFF5F0',
                      borderRadius: '10px',
                      padding: '13px 67px 13px 68px',
                      '&:hover': {
                        color: '#FFF5F0 !important',
                        backgroundColor: '#FFF5F0',
                      },
                    }}
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
  );
};

export default DesktopDashboardHeader;
