'use client';
import React from 'react';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

function HideUnhideButton({ handleClickOpen }) {
  return (
    <Box
      sx={{
        width: { xs: '200px', md: '45px' },
        height: '45px',
        borderRadius: '5px',
        border: '1px solid #FB631C',
        background: '#FFF',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <IconButton onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>
    </Box>
  );
}
export default HideUnhideButton;
