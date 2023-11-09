import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Button, IconButton, Menu, Typography } from '@mui/material';

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
                  Go to Rb.com
                </Link>
                <Button
                  sx={{
                    display: 'block',
                    color: '#000',
                    border: '1px solid #E7E7E7',
                    // mx: 2,
                    my: 2,
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
                    <Typography mx={1}>My Listing</Typography>
                  </Box>
                </Button>
                <Button variant={'primary'} sx={{ display: 'block' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      marginRight: '8px',
                      marginLeft: '8px',
                      p: 0.6,
                    }}
                  >
                    <Image
                      src={item?.PostListingIcon}
                      width={20}
                      height={20}
                      alt={'icon'}
                    />
                    <Typography mx={1}>Post Listing</Typography>
                  </Box>
                </Button>
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
                  Arman Espark
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
