import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';

import { useDispatch, useSelector } from 'react-redux';
import { setOpenModal } from '@/src/redux/slices/signin/signinSlice';
import { PAGES } from '@/app/constants/Constants';
import SignInButton from './SignInButton';
import SignInResponsiveButton from './SignInResponsiveButton';

const MainHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleOpen = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    dispatch(setOpenModal(newOpenState));
  };

  const isUserLoggedIn = useSelector((state) => state?.login?.loggedInState);

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
                display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
                color: '#000',
              }}
            >
              {PAGES?.map((item, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <>
                    <Link
                      style={{
                        color: '#1976d2',
                        textDecoration: 'none',
                      }}
                      href={item?.path}
                    >
                      {item?.menu}
                    </Link>
                  </>
                </MenuItem>
              ))}
              <MenuItem
                sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}
              >
                <SignInResponsiveButton
                  isUserLoggedIn={isUserLoggedIn}
                  handleOpenUserMenu={handleOpenUserMenu}
                  anchorElUser={anchorElUser}
                  handleCloseUserMenu={handleCloseUserMenu}
                  handleClose={toggleOpen}
                  open={open}
                  handleOpen={toggleOpen}
                />
              </MenuItem>
            </Menu>
          </Box>
          <SignInButton
            isUserLoggedIn={isUserLoggedIn}
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            handleClose={toggleOpen}
            open={open}
            handleOpen={toggleOpen}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainHeader;
