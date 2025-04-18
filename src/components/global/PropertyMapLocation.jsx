import React from 'react';
import { Typography, Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { MapProvider } from '../MapProvider';

const Map = dynamic(() => import('../Map'), { ssr: false });

const InfoRow = ({ label, value }) => (
  <Box display="flex" gap={1} py={1}>
    <Typography sx={{ fontSize: 16, fontWeight: 400 }}>{label}:</Typography>
    <Typography sx={{ fontSize: 16, fontWeight: 500 }}>{value}</Typography>
  </Box>
);

const PropertyMapLocation = ({
  locationpurpose,
  propertyType,
  city,
  location,
}) => {
  return (
    <Box sx={{ padding: '5px' }}>
      <Typography sx={{ fontSize: 18, fontWeight: 500, color: '#333', py: 1 }}>
        Location & Purpose
      </Typography>

      <InfoRow label="Purpose" value={locationpurpose} />
      <InfoRow label="Property Type" value={propertyType} />
      <InfoRow label="Location" value={location} />
      <InfoRow label="City" value={city} />

      <Box mt={2}>
        <MapProvider>
          <Map containerStyle={{ width: '100%', height: '200px' }} />
        </MapProvider>
      </Box>
    </Box>
  );
};

export default PropertyMapLocation;
