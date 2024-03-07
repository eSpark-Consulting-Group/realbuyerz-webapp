import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AmenitiesModal from './AmenitiesModal';
import { PROPERTY_INFORMATION } from '@/app/constants/postListing';

const AddAmenities = ({ onSelected, formik }) => {
  const [open, setOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onSelected(selectedAmenities);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: { xs: 'center', sm: 'baseline' },
      }}
    >
      <Typography
        sx={{
          textAlign: { xs: 'center', sm: 'start' },
          color: '#666666',
          fontSize: { xs: '14px', md: '18px' },
          fontWeight: 400,
          mb: 1,
        }}
      >
        {PROPERTY_INFORMATION?.addiotionalFeature}
      </Typography>
      <Button
        sx={{
          width: '160px',
          height: '45px',
          fontSize: '14px',
        }}
        onClick={handleClickOpen}
        variant="outlined"
        startIcon={<AddCircleIcon />}
      >
        {PROPERTY_INFORMATION?.addAmentiesLabel}
      </Button>
      <AmenitiesModal
        open={open}
        setOpen={setOpen}
        formik={formik}
        onClose={() => handleClose()}
        data={PROPERTY_INFORMATION?.addAmenities}
        onSelected={setSelectedAmenities}
      />
    </Box>
  );
};
export default AddAmenities;
