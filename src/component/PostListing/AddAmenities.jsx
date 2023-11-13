import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

const AddAmenities = () => {
  const addiotionalFeature =
    'Add additional features e.g. Rooftop terrace, 24/7 security, Walking trails, Washing area etc';
  const addAmenties = 'Add Amenities';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'baseline' },
      }}
    >
      <Typography
        sx={{
          color: '#666666',
          fontSize: { xs: '14px', md: '18px' },
          fontFamily: 'Inter',
          fontWeight: 400,
        }}
      >
        {addiotionalFeature}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '150px',
          height: '45px',
          borderRadius: '5px',
          border: '1px #FB631C solid',
          padding: '10px',
        }}
      >
        <Image src={'assets/images/add.svg'} width={20} height={20} alt="addition" />
        <Button
          sx={{
            color: '#FB631C',
          }}
        >
          {addAmenties}
        </Button>
      </Box>
    </Box>
  );
};
export default AddAmenities;
