'use client';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function HideUnhideButton() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

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
      {isHidden ? (
        <IconButton onClick={toggleVisibility}>
          <VisibilityOffIcon />
        </IconButton>
      ) : (
        <IconButton onClick={toggleVisibility}>
          <VisibilityIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default HideUnhideButton;
