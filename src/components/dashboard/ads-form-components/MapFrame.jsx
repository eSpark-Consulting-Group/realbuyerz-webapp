import React from 'react';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { MapProvider } from '../../MapProvider';
const MapFrame = ({ width, height }) => {
  const Map = dynamic(() => import('../../Map'), { ssr: false });
  return (
    <Box sx={{ padding: '5px' }}>
      <div>
        <MapProvider>
        <Map containerStyle={{ width: '100%', height: '103px' }} />
        </MapProvider>
      </div>
    </Box>
  );
};
export default MapFrame;
