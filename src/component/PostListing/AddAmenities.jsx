import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from './postlistingConstants';
import AmenitiesModal from './AmenitiesModal';

const AddAmenities = ({ onSelected }) => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onSelected(selectedItems);
  };
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
        {PROPERTY_INFORMATION.addiotionalFeature}
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
        <Image
          src={'assets/images/add.svg'}
          width={20}
          height={20}
          alt="addition"
        />
        <Button
          sx={{
            color: '#FB631C',
          }}
          onClick={handleClickOpen}
        >
          {PROPERTY_INFORMATION.addAmentiesLabel}
        </Button>
        <AmenitiesModal
          open={open}
          onClose={() => handleClose()} 
          data={PROPERTY_INFORMATION.addAmenities}
          onSelected={setSelectedItems}
        />
      </Box>
    </Box>
  );
};
export default AddAmenities;
