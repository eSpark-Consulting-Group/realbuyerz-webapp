'use client';
import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import LeftSideBar from './BiddingPage/LeftSideBar';
import DesktopDashboardHeader from './DesktopDashboardHeader';
import { HEADER_MENU, MENU_ITEM } from '@/app/constants/LiveBidding';
import MobileResponsiveDashboardHeader from './MobileResponsiveDashboardHeader';

export default function DashboardHeader() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  console.log(anchorElUser);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    const smThreshold = 960;
    const currentWidth = window.innerWidth;

    if (currentWidth < smThreshold) {
      setIsOpen((prevState) => !prevState);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white', borderBottom: '2px solid #E4E4E4' }}
    >
      <Container maxWidth="xxl" sx={{ backgroundColor: 'white', p: 1 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex' },
              alignItems: 'center',
            }}
          >
            <Button
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
                p: 0,
                color: '#000',
              }}
            >
              <MenuIcon
                sx={{
                  cursor: 'pointer',
                }}
              />
            </Button>
            <Box
              sx={{
                display: { xs: 'flex' },
                mx: { xs: 0, md: 0, sm: 0 },
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  display: { xs: 'flex', md: 'none', lg: 'none' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  marginRight: 5,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onClick={toggleDrawer}
              >
                <Image
                  src={'/images/drawer.svg'}
                  width={20}
                  height={20}
                  alt={'icon'}
                  style={{ marginTop: 2 }}
                />
              </Typography>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/dashboard"
                sx={{
                  display: { xs: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src={'/images/logo.png'}
                  width={155}
                  height={37}
                  alt={'icon'}
                  style={{ marginTop: 2 }}
                />
              </Typography>
              <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="bla bla bla"
              >
                <Box
                  sx={{
                    height: '10%',
                  }}
                >
                  <LeftSideBar menuItem={MENU_ITEM} />
                </Box>
              </Drawer>
            </Box>
            <DesktopDashboardHeader
              HEADER_MENU={HEADER_MENU}
              handleOpenUserMenu={handleOpenUserMenu}
            />
            <MobileResponsiveDashboardHeader
              HEADER_MENU={HEADER_MENU}
              handleCloseNavMenu={handleCloseNavMenu}
              anchorElNav={anchorElNav}
              handleOpenUserMenu={handleOpenUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
