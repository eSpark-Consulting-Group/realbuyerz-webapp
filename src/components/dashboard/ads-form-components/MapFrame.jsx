import React from 'react';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { MapProvider } from '../../MapProvider';
import Map from '../../Map';
  // const Map = dynamic(() => import('../../Map'), { ssr: false });
const MapFrame = ({ formik }) => {
  return (
    <Box sx={{ padding: '5px' }}>
      <div>
        <MapProvider>
          <Map
            containerStyle={{ width: '100%', height: '103px' }}
            formik={formik}
          />
        </MapProvider>
      </div>
    </Box>
  );
};
export default MapFrame;
