import React, { useState } from 'react';
import {
  Button,
  Menu,
  Tabs,
  Tab,
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ProjectMenu = ({ field }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const { key } = field || {};
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  console.log(key, 'field');

  const categories = [
    { label: 'All', icon: <HomeIcon /> },
    { label: 'House', icon: <HomeIcon /> },
    { label: 'Flat', icon: <HomeIcon /> },
    { label: 'Upper Portion', icon: <HomeIcon /> },
    { label: 'Lower Portion', icon: <HomeIcon /> },
    { label: 'Farm House', icon: <HomeIcon /> },
    { label: 'Room', icon: <HomeIcon /> },
    { label: 'Penthouse', icon: <HomeIcon /> },
  ];

  const renderMenu = (key) => {
    if (key === 'all') {
      return <AllMenu />;
    } else if (key === 'price') {
      return <PriceMenu />;
    } else if (key === 'size') {
      return <SizeMenu />;
    } else {
      return null;
    }
  };

  const AllMenu = () => (
    <Box sx={{ width: 400, p: 2 }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="House" />
        <Tab label="Plots" />
        <Tab label="Commercial" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={4} key={index}>
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 1,
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  },
                }}
                elevation={3}
              >
                {category.icon}
                <Typography variant="body2" align="center">
                  {category.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
        <Button variant="outlined" color="warning" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="warning">
          Apply
        </Button>
      </Box>
    </Box>
  );
  const PriceMenu = () => (
    <Typography sx={{ py: 1, px: 2 }}>PriceMenu</Typography>
  );
  const SizeMenu = () => (
    <Typography sx={{ py: 1, px: 2 }}>SizeMenu</Typography>
  );

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          width: '100%',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px',
          border: '1px solid #E7E7E7',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: 400,
            textTransform: 'capitalize',
          }}
        >
          {key}
        </Typography>
        {open ? (
          <KeyboardArrowUpIcon
            sx={{
              color: '#666666',
              transition: 'transform 0.3s',
            }}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{
              color: '#666666',
              transition: 'transform 0.3s',
            }}
          />
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {renderMenu(key)}
      </Menu>
    </>
  );
};

export default ProjectMenu;
