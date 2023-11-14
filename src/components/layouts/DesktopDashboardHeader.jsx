import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/system';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Button, IconButton, Typography } from '@mui/material';
import {
  LINK_NAME,
  LOGIN_PERSON_NAME,
  MY_LISTING,
  POST_LISTING,
} from '@/app/constants/LiveBidding';

const DesktopDashboardHeader = ({ HEADER_MENU, handleOpenUserMenu }) => {
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
              <Image
                src={item?.searchIcon}
                width={35}
                height={35}
                alt={'icon'}
                style={{ marginRight: 30 }}
              />
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
                onClick={handleOpenUserMenu}
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
              />
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default DesktopDashboardHeader;
