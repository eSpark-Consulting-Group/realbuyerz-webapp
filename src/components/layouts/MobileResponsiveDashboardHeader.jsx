import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, Menu, Typography } from '@mui/material';

import {
  LINK_NAME,
  LOGIN_PERSON_NAME,
  MY_LISTING,
  POST_LISTING,
} from '@/app/constants/LiveBidding';
import MyListingResponsiveButton from './MyListingResponsiveButton';
import PostListingResponsiveButton from './PostListingResponsiveButton';

const MobileResponsiveDashboardHeader = ({
  HEADER_MENU,
  handleCloseNavMenu,
  anchorElNav,
  handleOpenUserMenu,
}) => {
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
        display: { sm: 'block', md: 'block' },
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
            lg: 'none',
          },
          flexDirection: 'column',
        }}
      >
        {HEADER_MENU?.map((item) => {
          return (
            <>
              <Box sx={{ p: 2 }}>
                <Image
                  src={item?.searchIcon}
                  width={35}
                  height={35}
                  alt="icon"
                  style={{ marginRight: 30, marginBottom: 8 }}
                />
                <Image
                  src={item?.linkIcon}
                  width={20}
                  height={20}
                  alt="icon"
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
                <MyListingResponsiveButton
                  icon={item?.myListingIcon}
                  buttonName={MY_LISTING}
                />
                <PostListingResponsiveButton
                  icon={item?.PostListingIcon}
                  buttonName={POST_LISTING}
                />
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    color: '#FF631C',
                    my: 2,
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
              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid #E7E7E7',
                  borderRadius: '390px',
                  alignItems: 'center',
                  mx: 1,
                }}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    color: 'black',
                    alignItems: 'center',
                    mx: 4,
                  }}
                >
                  {LOGIN_PERSON_NAME}
                </Typography>
                <Image
                  src={item?.profileIcon}
                  width={40}
                  height={40}
                  alt={'icon'}
                />
              </Box>
            </>
          );
        })}
      </Box>
    </Menu>
  );
};

export default MobileResponsiveDashboardHeader;
