'use client';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { setOpenModal } from '@/src/redux/slices/signin/signinSlice';
import { PAGES } from '@/src/constants/Constants';
import SignInButton from './SignInButton';

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

  const isUserLoggedIn = useSelector((state) => state?.auth?.loggedInState);
  const currentPath = usePathname();

  return (
    <AppBar
      sx={{
        position: 'sticky',
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '0.5px solid #E4E4E4',
        maxHeight: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ backgroundColor: '', p: { xs: 1.5, sm: 2, md: 4 } }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: { sm: 1 },
              display: { xs: 'flex' },
              alignItems: 'center',
              width: { xs: '100%' },
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex' },
                alignItems: 'center',
                gap: { xs: 1.5, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  flexGrow: { xs: 2, md: 0 },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  disableRipple
                  sx={{
                    p: 0,
                    height: 'auto',
                    display: { xs: 'block', sm: 'block', md: 'none' },
                    color: '#000',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <Box
                    component={'img'}
                    src={'/images/drawer.svg'}
                    alt={'dashboardIcon'}
                    sx={{
                      width: { xs: '20px', sm: '20px' },
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </IconButton>
              </Box>
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
                <Box
                  component={'img'}
                  src="/images/RealBuyersLogo.svg"
                  alt={'Images'}
                  sx={{ width: { xs: '125px', sm: '135px', md: '155px' } }}
                  height={37}
                  width={125}
                />
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: { md: 1 },
                justifyContent: 'center',
                gap: 4,
                display: { xs: 'none', sm: 'none', md: 'flex' },
              }}
            >
              {PAGES?.map((page, i) => (
                <Link key={i} href={page?.path}>
                  <Typography
                    sx={{
                      color: currentPath === page?.path ? '#FB631C' : '#000',
                      fontSize: { xs: 'auto', md: '13px', lg: '15px' },
                      fontStyle: 'normal',
                      fontWeight: 600,
                      lineHeight: 'normal',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      marginRight: '10px',
                      position: 'relative',
                      '&::after': {
                        content: "''",
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: -26,
                        borderBottom: `4px solid ${currentPath === page.path ? '#FB631C' : 'transparent'}`,
                        borderRadius: '5px',
                      },
                    }}
                  >
                    {page?.menu}
                  </Typography>
                </Link>
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
                mt: 3,
                display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
                color: '#000',
              }}
            >
              {PAGES?.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{
                    paddingY: 2,
                  }}
                >
                  <>
                    <Link
                      style={{
                        color: '#1976d2',
                        textDecoration: 'none',
                      }}
                      href={item?.path}
                    >
                      <Typography
                        sx={{
                          color:
                            currentPath === item?.path ? '#FB631C' : '#000',
                          fontSize: '12px',
                          fontStyle: 'normal',
                          fontWeight: 600,
                          lineHeight: 'normal',
                          cursor: 'pointer',
                          textAlign: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {item?.menu}
                      </Typography>
                    </Link>
                  </>
                </MenuItem>
              ))}
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
