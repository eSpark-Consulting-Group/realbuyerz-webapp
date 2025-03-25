import React from 'react';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { MapProvider } from '../../MapProvider';
const Map = dynamic(() => import('../../Map'), { ssr: false });
const MapFrame = ({ formik, filteredUserProperty }) => {
  return (
    <Box
      sx={{
        padding: '5px',
        border:
          formik?.errors['longitude'] || formik?.errors['latitude']
            ? '1px solid red'
            : 'none',
        borderRadius:
          formik?.errors['longitude'] || formik?.errors['latitude']
            ? '8px'
            : '0px',
      }}
    >
      <div>
        <MapProvider>
          <Map
            containerStyle={{ width: '100%', height: '103px' }}
            formik={formik}
            filteredUserProperty={filteredUserProperty}
          />
        </MapProvider>
      </div>
    </Box>
  );
};
export default MapFrame;
