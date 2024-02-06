import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { Proposals } from '@/app/constants/Proposals';

const BidMapLocation = ({ location }) => {
  console.log(location, 'location');
  const renderLocationInfo = () => {
    return Object.keys(Proposals.location)
      .slice(1) // Skip the first item
      .map((key) => (
        <Box key={key} sx={{ display: 'flex', gap: '5px' }}>
          <Typography
            sx={{
              color: '#333',
              fontSize: '14px',
              fontWeight: '700',
            }}
            variant="body1"
          >
            {Proposals.location[key]}
          </Typography>
          <Typography
            key={key}
            sx={{
              color: '#126FAA',
              fontSize: '14px',
              fontWeight: '500',
            }}
            variant="body1"
          >
            {location[key]}
          </Typography>
        </Box>
      ));
  };

  return (
    <Box sx={{ padding: '5px', pt: '25px', pb: '35px' }}>
      <Typography
        sx={{
          color: '#000',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        {Proposals.location.title}
      </Typography>
      {renderLocationInfo()}
      <br></br>
      <iframe
        title="Property Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.013300667556!2d67.11563618312421!3d24.929177436335465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3366ddcdc4253%3A0x6c0e3a1a85e57629!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1549819379349&z=15"
        width="100%"
        height="200"
        frameBorder="0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default BidMapLocation;
