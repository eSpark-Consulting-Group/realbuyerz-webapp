<<<<<<< HEAD
"use client";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { pages } from "@/app/constents/Constants";

const settings = ["Login", "Sign up"];

export default function MainHeader() {
=======
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
>>>>>>> epic/issue/1
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

<<<<<<< HEAD
  const handleNavMenu = (path) => {
    // nevigate...
  };
=======
>>>>>>> epic/issue/1
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
<<<<<<< HEAD
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xxl" sx={{ backgroundColor: "white", p: 1 }}>
=======
    <AppBar sx={{ position: 'sticky', backgroundColor: 'white' }}>
      <Container maxWidth="xxl" sx={{ backgroundColor: 'white', p: 1 }}>
>>>>>>> epic/issue/1
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
<<<<<<< HEAD
              display: { xs: "flex" },
              alignItems: "center",
=======
              display: { xs: 'flex' },
              alignItems: 'center',
>>>>>>> epic/issue/1
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
<<<<<<< HEAD
              // color="inherit"
              sx={{ display: { xs: "block", md: "none" }, p: 0, color: "#000" }}
=======
              sx={{
                display: { xs: 'block', md: 'none' },
                p: 0,
                color: '#000',
              }}
>>>>>>> epic/issue/1
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
<<<<<<< HEAD
                display: { xs: "flex" },
                mx: { xs: "auto", md: 0 },
                alignItems: "center",
=======
                display: { xs: 'flex' },
                mx: { xs: 'auto', md: 0 },
                alignItems: 'center',
>>>>>>> epic/issue/1
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
<<<<<<< HEAD
                href="/dashboard"
                sx={{
                  display: { xs: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  // color: "inherit",
                  textDecoration: "none",
                }}
              >
                <img src="/images/LOGO.png" alt="" />
=======
                href="/"
                sx={{
                  display: { xs: 'flex' },
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                <Image
                  src="/images/RealBuyers-Logo.svg"
                  alt={''}
                  height={37}
                  width={155}
                />
>>>>>>> epic/issue/1
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
<<<<<<< HEAD
                justifyContent: "center",
                gap: 4,
                display: { xs: "none", sm: "none", md: "flex" },
              }}
            >
              {pages?.map((page, i) => (
                <Link
                  key={i}
                  href={page?.path}
                  // sx={{
                  //   color: "#000",
                  //   fontFamily: "Roboto",
                  //   fontSize: "15px",
                  //   fontStyle: "normal",
                  //   fontWeight: 500,
                  //   lineHeight: "normal",
                  // }}
                >
                  {page?.menu}
                </Link>
=======
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
>>>>>>> epic/issue/1
              ))}
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
<<<<<<< HEAD
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
=======
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
>>>>>>> epic/issue/1
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
<<<<<<< HEAD
                display: { sm: "block", md: "block" },
                color: "#000",
              }}
            >
              {pages?.map((item, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      color: "#1976d2 ",
                      textDecoration: "none",
                    }}
                    href={item?.path}
                    // sx={{ textDecoration: "none" }}
=======
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
>>>>>>> epic/issue/1
                  >
                    {item?.menu}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
<<<<<<< HEAD
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  color: "#FF631C",
                }}
              >
                <PersonIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
=======
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
>>>>>>> epic/issue/1
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
<<<<<<< HEAD
              {settings.map((setting) => (
=======
              {settings?.map((setting) => (
>>>>>>> epic/issue/1
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
<<<<<<< HEAD
=======

export default MainHeader;
>>>>>>> epic/issue/1
