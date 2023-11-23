'use client';
import React, { useState } from 'react';
import { Diversity1 } from '@mui/icons-material';

const YourComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Diversity1
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      sx={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        transition: 'width 2s',
        '&:hover': {
          width: 300,
        },
      }}
    ></Diversity1>
  );
};

export default YourComponent;
