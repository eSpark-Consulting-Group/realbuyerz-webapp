import React, { useState } from 'react';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
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

import Image from 'next/image';
import Link from 'next/link';
import { Badge, Button, IconButton, Menu, TextField, Tooltip } from '@mui/material';
import SearchAndNotificationDesktopButton from '../layouts/SearchAndNotificationDesktopButton ';
import { setLoggedOut } from '@/src/redux/slices/auth/authSlice';

export default function ResponsiveNavbar({ openSidebar }) {
  const router = useRouter()
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

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
    
    return (
    <Box
      sx={{
        flexGrow: 1,
         height: 'auto',
        display: 'flex',
      }}
    >
      <AppBar sx={{position:'fixed', backgroundColor: '#fff', borderBottom: '2px solid #E4E4E4', boxShadow: 'none'}}>
        <Toolbar>
         <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Box
            sx={{
              width: 'auto',
              display: 'flex',
              gap: 3,
              alignItems: 'center',
            }}
          >
            <Box component={'div'} onClick={openSidebar}>
                <Image
                  src={'/images/drawer.svg'}
                  width={20}
                  height={20}
                  alt={'icon'}
               />
            </Box>
            <Box>
              <Link href={'/'}>
               <Image
                  src={'/images/logo.png'}
                  width={155}
                  height={37}
                  alt={'icon'}
                  style={{ marginTop: 2, marginLeft: 2 }}
                />                 
              </Link>                
            </Box>
         </Box>
            <Box sx={{width:'auto',  display: { xs: 'none', md:'flex'}, gap: 3}}>
             <Box sx={{ display: {xs: 'none', md :'flex'}, flexGrow: 0 }}>
                <Tooltip title="Search">
                  <Image
                    onClick={handleOpenSearchMenu}
                    src={'/images/Live-bidding-icons/headerSearchIcon.svg'}
                    width={41}
                    height={43}
                    alt={'icon'}
                    style={{ cursor: 'pointer' }}
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
                    {/* <Link href={`/dashboard/proposals?search=${search}`}> */}
                      <Button variant="primary" sx={{ mx: 1 }}>
                        {SEARCH}
                      </Button>
                    {/* </Link> */}
                  </Box>
                </Menu>
             </Box>
             <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
              <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 1.5}}>
               <Image
                src={'/images/Live-bidding-icons/headerGotopageIcon.svg'}
                width={20}
                height={20}
                alt={'icon'}
              />
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  color: '#666666',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  marginRight: '14px',
                  fontWeight: 500,
                }}
              >
                {LINK_NAME}
            </Link>
            </Box>
            <IconButton
                sx={{
                  p: 0,
                  color: '#FF631C',
               }}
              >
                <Badge
                  badgeContent={4}
                  color={CUSTOM_COLOR}
                  sx={{
                    '& .MuiBadge-badge': {
                      color: 'white',
                      backgroundColor: '#1176AD',
                      width: 10,
                      fontSize: '10px',
                      height: 15,
                    },
                  }}
                >
                  <NotificationsIcon
                    sx={{ fontSize: 30, color: { CUSTOM_COLOR } }}
                  />
                </Badge>
            </IconButton>
            <Box sx={{display: 'flex'}}>
             <SearchAndNotificationDesktopButton
              handleCloseLoginMenu={handleCloseLoginMenu}
              handleOpenLoginMenu={handleOpenLoginMenu}
              userName={USER_NAME}
              profileIcon={'/images/Live-bidding-icons/headerProfileIcon.svg'}
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
