import { Box, Typography } from '@mui/material';
import React from 'react';

const Avatar = ({ data, minWidth = '40px', height = '40px', mobile }) => {
  function paintBackground() {
    // List of random dark color hex codes
    const darkColors = [
      '#2C3E50',
      '#D13E2E',
      '#800000',
      '#067511',
      '#6E025C',
      '#325BB3',
      '#144516',
      '#7C9E0B',
      '#03A69E',
      '#3091DB',
      // "#363636", "#434343", "#1C1C1C", "#2B2B2B", "#333333",
      // "#222222", "#1A1A1A", "#282828", "#191919", "#1B1B1B"
    ];

    // Generate a random index to select a color from the array
    const randomIndex = Math.floor(Math.random() * darkColors.length);

    // Return the randomly selected color
    return darkColors[randomIndex];
  }
  function renderAvatarName(name) {
    // Split the name into individual components
    const nameComponents = name.split(' ');

    if (nameComponents.length === 3) {
      // First, middle, and last name
      const firstName = nameComponents[0];
      const lastName = nameComponents[2];
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    } else if (nameComponents.length === 2) {
      // First and last name
      const firstName = nameComponents[0];
      const lastName = nameComponents[1];
      return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    } else if (nameComponents.length === 1) {
      // First name only
      const firstName = nameComponents[0];
      return `${firstName[0].toUpperCase()}`;
    } else {
      // Invalid input
      return 'Invalid Name';
    }
  }

  const renderAvatar = (data) => {
    if (data.avatar) {
      return (
        <Box
          component="img"
          src={`/images/${data?.avatar}.svg`}
          sx={{
            width: minWidth,
            height,
            borderRadius: '50%',
            display: { xs: mobile || 'flex', sm: 'flex' },
          }}
          alt="Avatar"
        />
      );
    } else {
      return (
        <Box
          sx={{
            minWidth,
            height,
            borderRadius: '50%',
            background: data?.background,
            color: '#fff',
            display: { xs: mobile || 'flex', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>{renderAvatarName(data?.title)}</Typography>
        </Box>
      );
    }
  };
  return renderAvatar(data);
};

export default Avatar;
