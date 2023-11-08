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
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { pages } from "@/app/constents/constents";
import { Button, SvgIcon } from "@mui/material";
import CustomIcon from "./BiddingPage/CustomIcon";
import { HEADER_MENU } from "@/app/constents/Live-bidding/constents";
import Image from "next/image";
import { border } from "@mui/system";

const settings = ["Login", "Sign up"];

export default function DashboardHeader() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleNavMenu = (path) => {
    // nevigate...
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xxl" sx={{ backgroundColor: "white", p: 1 }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex" },
              alignItems: "center",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
              sx={{
                display: { xs: "block", md: "none", lg: "none" },
                p: 0,
                color: "#000",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "flex" },
                mx: { xs: "auto", md: 0 },
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  display: { xs: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  marginRight: 5,
                  // color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <img src="/images/drawer.png" alt="" />
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
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
              </Typography>
            </Box>
            <Box
              s
              sx={{
                flexGrow: 1,
                justifyContent: "end",
                gap: 4,
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              }}
            >
              {HEADER_MENU.map((item) => {
                return (
                  <>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Image
                        src={item.searchIcon}
                        width={35}
                        height={35}
                        style={{ marginRight: 30 }}
                      />
                      <Image
                        src={item.linkIcon}
                        width={20}
                        height={20}
                        style={{ marginRight: 8 }}
                      />
                      <Link
                        href="/"
                        style={{
                          display: "inline-block",
                          color: "#666666",
                          textDecoration: "none",
                          borderRadius: "4px",
                          marginRight: "14px",
                        }}
                      >
                        Go to Rb.com
                      </Link>
                      <Button
                        sx={{
                          color: "#000",
                          border: "1px solid #E7E7E7",
                          mx: 2,
                        }}
                      >
                        <Box sx={{display: 'flex', marginRight:'8px', marginLeft: '8px' , p:.5}} >
                          <Image
                            src={item.myListingIcon}
                            width={20}
                            height={20}
                          />
                          <Typography mx={1}>
                            My Listing
                          </Typography>
                        </Box>
                      </Button>
                      <Button variant={"primary"}>
                      <Box sx={{display: 'flex', marginRight:'8px', marginLeft: '8px' , p:.6}} >
                          <Image
                            src={item.PostListingIcon}
                            width={20}
                            height={20}
                          />
                          <Typography mx={1}>
                          Post Listing
                          </Typography>
                        </Box>
                      </Button>
                      <IconButton
                        onClick={handleOpenUserMenu}
                        sx={{
                          p: 0,
                          color: "#FF631C",
                          ml: 2,
                        }}
                      >
                        <Badge
                          badgeContent={4}
                          color="customColor"
                          sx={{
                            width: 25,
                            height: 25,
                            "& .MuiBadge-badge": {
                              color: "white",
                              width: 10,
                              height: 20,
                            },
                          }}
                        >
                          <NotificationsIcon
                            sx={{ fontSize: 35, color: "customColor" }}
                          />
                        </Badge>
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        border: "1px solid #E7E7E7",
                        borderRadius: "390px",
                        alignItems: "center",
                        mx: 1,
                        // px:1
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          color: "black",
                          alignItems: "center",
                          mx: 2,
                        }}
                      >
                        Arman Espark
                      </Typography>
                      <Image src={item.profileIcon} width={40} height={40} />
                      {/* {item.profileIcon} */}
                    </Box>
                  </>
                );
              })}
            </Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { sm: "block", md: "block" },
                color: "#000",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "end",
                  gap: 4,
                  display: { xs: "block", sm: "block", md: "none", lg: "none" },
                }}
              >
                {HEADER_MENU.map((item) => {
                  return (
                    <>
                     <Box sx={{p: 2}}>
                      <Image
                        src={item.searchIcon}
                        width={35}
                        height={35}
                        style={{ marginRight: 30 }}
                      />
                      <Image
                        src={item.linkIcon}
                        width={20}
                        height={20}
                        style={{ marginRight: 8 }}
                      />
                      <Link
                        href="/"
                        style={{
                          display: "inline-block",
                          color: "#666666",
                          textDecoration: "none",
                          borderRadius: "4px",
                          marginRight: "14px",
                        }}
                      >
                        Go to Rb.com
                      </Link>
                      <Button
                        sx={{
                          color: "#000",
                          border: "1px solid #E7E7E7",
                          mx: 2,
                        }}
                      >
                        <Box sx={{display: 'flex', marginRight:'8px', marginLeft: '8px' , p:.5}} >
                          <Image
                            src={item.myListingIcon}
                            width={20}
                            height={20}
                          />
                          <Typography mx={1}>
                            My Listing
                          </Typography>
                        </Box>
                      </Button>
                      <Button variant={"primary"}>
                      <Box sx={{display: 'flex', marginRight:'8px', marginLeft: '8px' , p:.6}} >
                          <Image
                            src={item.PostListingIcon}
                            width={20}
                            height={20}
                          />
                          <Typography mx={1}>
                          Post Listing
                          </Typography>
                        </Box>
                      </Button>
                      <IconButton
                        onClick={handleOpenUserMenu}
                        sx={{
                          p: 0,
                          color: "#FF631C",
                          ml: 2,
                        }}
                      >
                        <Badge
                          badgeContent={4}
                          color="customColor"
                          sx={{
                            width: 25,
                            height: 25,
                            "& .MuiBadge-badge": {
                              color: "white",
                              width: 10,
                              height: 20,
                            },
                          }}
                        >
                          <NotificationsIcon
                            sx={{ fontSize: 35, color: "customColor" }}
                          />
                        </Badge>
                      </IconButton>
                    </Box>
                      <Box
                        sx={{
                          display: "flex",
                          border: "1px solid #E7E7E7",
                          borderRadius: "390px",
                          alignItems: "center",
                          mx: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            display: "flex",
                            color: "black",
                            alignItems: "center",
                            mx: 2,
                          }}
                        >
                          Arman Espark
                        </Typography>
                        <Image src={item.profileIcon} width={40} height={40} />
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
