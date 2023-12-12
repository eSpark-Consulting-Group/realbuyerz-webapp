import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const LinearProgressBar = ({ position, hovered }) => {
  const positions = {
    top: { top: 0, left: 0, width: '100%', height: '2%' },
    bottom: { bottom: 0, left: 0, width: '100%', height: '2px' },
    left: { top: 0, left: 0, height: '100%', width: '2px' },
    right: { top: 0, right: 0, height: '100%', width: '2px' },
  };

  return (
    <LinearProgress
      className="linearProgress"
      sx={{
        position: 'absolute',
        color: '#fb631c',
        opacity: hovered ? 2 : 0,
        ...positions[position],
      }}
    />
  );
};

export default LinearProgressBar;
