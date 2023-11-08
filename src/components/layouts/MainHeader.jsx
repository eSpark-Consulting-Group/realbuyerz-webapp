'use client';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

import { PAGES } from '@/app/constants/Constants';
import Image from 'next/image';

const settings = ['Login', 'Sign up'];

function MainHeader() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ position: 'sticky', backgroundColor: 'white' }}>
      <Container maxWidth="xxl" sx={{ backgroundColor: 'white', p: 1 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex' },
              alignItems: 'center',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                p: 0,
                color: '#000',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: 'flex' },
                mx: { xs: 'auto', md: 0 },
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src="/images/RealBuyersLogo.svg"
                  alt={''}
                  height={37}
                  width={155}
                />
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'center',
                gap: 4,
                display: { xs: 'none', sm: 'none', md: 'flex' },
              }}
            >
              {PAGES?.map((page, i) => (
                <Typography
                  key={i}
                  href={page?.path}
                  variant="a"
                  component={'a'}
                  sx={{
                    color: '#000',
                    fontFamily: 'Roboto',
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                  }}
                >
                  {page?.menu}
                </Typography>
              ))}
            </Box>
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
              {PAGES?.map((item, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      color: '#1976d2 ',
                      textDecoration: 'none',
                    }}
                    href={item?.path}
                  >
                    {item?.menu}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                variant="primary"
                sx={{
                  width: '120px',
                  height: '40px',
                  display: {
                    xs: 'none',
                    sm: 'block',
                    lg: 'block',
                    xl: 'block',
                  },
                }}
                onClick={handleOpenUserMenu}
              >
                <Typography sx={{ color: '#fff' }}>Sign in</Typography>
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
              {settings?.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainHeader;
