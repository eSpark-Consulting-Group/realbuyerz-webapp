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
              sx={{ display: { xs: "block", md: "none" }, p: 0, color: "#000" }}
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
                href="/dashboard"
                sx={{
                  display: { xs: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  marginRight: 5,
                  // color: "inherit",
                  textDecoration: "none",
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
            {/* <Box
              sx={{
                flexGrow: 1,
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
              ))}
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
              {pages?.map((item, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Link
                    style={{
                      color: "#1976d2 ",
                      textDecoration: "none",
                    }}
                    href={item?.path}
                    // sx={{ textDecoration: "none" }}
                  >
                    {item?.menu}
                  </Link>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              {/* <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  color: "#FF631C",
                }}
              >
                <PersonIcon sx={{ fontSize: 40 }} />
              </IconButton> */}
            </Tooltip>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                {/* <IconButton > */}
                <svg
                  width="41"
                  height="43"
                  viewBox="0 0 41 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                >
                  <path
                    d="M30.0002 31.0002L25.6572 26.6572M25.6572 26.6572C26.4001 25.9143 26.9894 25.0324 27.3914 24.0618C27.7935 23.0911 28.0004 22.0508 28.0004 21.0002C28.0004 19.9496 27.7935 18.9093 27.3914 17.9387C26.9894 16.968 26.4001 16.0861 25.6572 15.3432C24.9143 14.6003 24.0324 14.011 23.0618 13.609C22.0911 13.2069 21.0508 13 20.0002 13C18.9496 13 17.9093 13.2069 16.9387 13.609C15.968 14.011 15.0861 14.6003 14.3432 15.3432C12.8429 16.8435 12 18.8784 12 21.0002C12 23.122 12.8429 25.1569 14.3432 26.6572C15.8435 28.1575 17.8784 29.0004 20.0002 29.0004C22.122 29.0004 24.1569 28.1575 25.6572 26.6572Z"
                    stroke="#777777"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="40"
                    height="42"
                    rx="4.5"
                    stroke="#E7E7E7"
                  />
                </svg>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                >
                  <path
                    d="M12 10L21 1M21 1H15.656M21 1V6.344"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 11C21 15.714 21 18.071 19.535 19.535C18.072 21 15.714 21 11 21C6.286 21 3.929 21 2.464 19.535C1 18.072 1 15.714 1 11C1 6.286 1 3.929 2.464 2.464C3.93 1 6.286 1 11 1"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <Link
                  href="/dash"
                  style={{
                    display: "inline-block",

                    color: "#666666",
                    textDecoration: "none",
                    borderRadius: "4px", //
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
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2"
                  >
                    <path
                      d="M21.972 16.1629L21.4978 14.1269C21.4674 13.9971 21.4132 13.8753 21.3385 13.7689C21.2637 13.6625 21.1699 13.5736 21.0627 13.5076C20.9549 13.4406 20.836 13.3977 20.7128 13.3812C20.5896 13.3648 20.4647 13.3752 20.3452 13.4119L14.7816 15.1183L11.0001 13.3853L15.7851 12.0524C16.1117 11.7355 16.3484 11.3238 16.4671 10.8656L16.0919 9.39844L6.11115 10.7274H0V18.7012H6.11115L11.5562 19.9823C11.8522 20.0116 12.1503 20.004 12.4447 19.9598L21.3181 17.3629C21.5509 17.2952 21.75 17.1311 21.873 16.9058C21.9337 16.7949 21.9737 16.6721 21.9907 16.5444C22.0077 16.4167 22.0013 16.2879 21.972 16.1629ZM3.66669 17.3723H1.22223V12.0564H3.66669V17.3723ZM12.127 18.6773C12.0719 18.6929 12.0152 18.7009 11.9583 18.7012C11.911 18.7014 11.8639 18.6961 11.8177 18.6853L6.11115 17.3231V12.083L15.0689 10.8763L8.5556 13.3853L14.3257 16.3516L14.7132 16.5204L15.1141 16.3968L20.3892 14.7794L20.7119 16.1642L12.127 18.6773Z"
                      fill="#777777"
                    />
                    <path
                      d="M13.1364 8.64661L19.4699 8.69978L19.5034 3.98716L16.5712 0.747457L13.1697 3.95266L13.1364 8.64661Z"
                      stroke="#777777"
                    />
                  </svg>
                  &nbsp;My Listings
                </Button>
                <Button
                  style={{
                    color: "#FFF",
                    backgroundColor: "#FF631C",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2221_10440)">
                      <path
                        d="M13.9139 16.5H16.9445V13.2H18.9649V16.5H21.9955V18.7H18.9649V22H16.9445V18.7H13.9139V16.5ZM7.85268 4.95C9.26696 4.95 10.3782 6.16 10.3782 7.7C10.3782 9.24 9.26696 10.45 7.85268 10.45C6.43839 10.45 5.32717 9.24 5.32717 7.7C5.32717 6.16 6.43839 4.95 7.85268 4.95ZM7.85268 0C11.7925 0 14.9241 3.41 14.9241 7.7C14.9241 13.42 7.85268 22 7.85268 22C7.85268 22 0.78125 13.42 0.78125 7.7C0.78125 3.41 3.91288 0 7.85268 0ZM7.85268 2.2C5.02411 2.2 2.80166 4.62 2.80166 7.7C2.80166 8.8 2.80166 11 7.85268 18.37C12.9037 11 12.9037 8.8 12.9037 7.7C12.9037 4.62 10.6813 2.2 7.85268 2.2Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2221_10440">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  &nbsp; Post Listing
                </Button>

                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 0,
                    color: "#FF631C",
                    mx: 2,
                  }}
                >
                  <Badge
                    badgeContent={4}
                    color="primary"
                    sx={{ width: 30, height: 30 }}
                  >
                    <NotificationsIcon sx={{ fontSize: 40 }} />
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
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2"
                  sx={{ mx: 2 }}
                >
                  <rect width="42" height="43" rx="21" fill="#E7E7E7" />
                  <path
                    d="M21 22.2614C22.1935 22.2614 23.3381 21.798 24.182 20.9733C25.0259 20.1486 25.5 19.03 25.5 17.8636C25.5 16.6973 25.0259 15.5787 24.182 14.754C23.3381 13.9292 22.1935 13.4659 21 13.4659C19.8065 13.4659 18.6619 13.9292 17.818 14.754C16.9741 15.5787 16.5 16.6973 16.5 17.8636C16.5 19.03 16.9741 20.1486 17.818 20.9733C18.6619 21.798 19.8065 22.2614 21 22.2614ZM21 23.7273C19.4087 23.7273 17.8826 23.1095 16.7574 22.0099C15.6321 20.9102 15 19.4188 15 17.8636C15 16.3085 15.6321 14.8171 16.7574 13.7174C17.8826 12.6178 19.4087 12 21 12C22.5913 12 24.1174 12.6178 25.2426 13.7174C26.3679 14.8171 27 16.3085 27 17.8636C27 19.4188 26.3679 20.9102 25.2426 22.0099C24.1174 23.1095 22.5913 23.7273 21 23.7273ZM28.5 31.0568V28.858C28.5 28.2748 28.2629 27.7155 27.841 27.3031C27.419 26.8908 26.8467 26.6591 26.25 26.6591H15.75C15.1533 26.6591 14.581 26.8908 14.159 27.3031C13.7371 27.7155 13.5 28.2748 13.5 28.858V31.0568C13.5 31.2512 13.421 31.4376 13.2803 31.5751C13.1397 31.7126 12.9489 31.7898 12.75 31.7898C12.5511 31.7898 12.3603 31.7126 12.2197 31.5751C12.079 31.4376 12 31.2512 12 31.0568V28.858C12 27.886 12.3951 26.9538 13.0983 26.2666C13.8016 25.5793 14.7554 25.1932 15.75 25.1932H26.25C27.2446 25.1932 28.1984 25.5793 28.9017 26.2666C29.6049 26.9538 30 27.886 30 28.858V31.0568C30 31.2512 29.921 31.4376 29.7803 31.5751C29.6397 31.7126 29.4489 31.7898 29.25 31.7898C29.0511 31.7898 28.8603 31.7126 28.7197 31.5751C28.579 31.4376 28.5 31.2512 28.5 31.0568Z"
                    fill="#969696"
                  />
                </svg>
              </Box>
            </Box>

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
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
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
