import React, { useState } from 'react';
import { Typography, Box, Button, Chip } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import AmenitiesModal from './AmenitiesModal';

const AddAmenities = ({
  onSelected,
  formik,
  setSelectedAmenities,
  selectedAmenities,
  propertyInformation,
  handleSeletedAmenites,
}) => {
  const [open, setOpen] = useState(false);

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
        alignItems: { xs: 'center', sm: 'center' },
      }}
    >
      {/* Display Selected Amenities */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '100%',
        }}
      >
        {selectedAmenities.map((amenity, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '8px 12px',
              borderRadius: '8px',
            }}
          >
            {/* Left Side - Icon & Label */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                }}
              >
                <img
                  src={amenity.image}
                  alt={amenity.label}
                  style={{ width: 24, height: 24 }}
                />{' '}
              </Box>
              <Typography
                sx={{ fontSize: '16px', fontWeight: 500, color: '#333333' }}
              >
                <Typography>{amenity.label || amenity.name}</Typography>
              </Typography>
            </Box>

            {/* Right Side - Counter */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                borderRadius: '5px',
                padding: '4px 8px',
                backgroundColor: '#EFEEEF',
              }}
            >
              <Button
                sx={{
                  minWidth: '21px',
                  height: '22px',
                  padding: 0,
                  backgroundColor: '#F8F6F8',
                  borderRadius: '2px',
                  boxShadow: ' 0px 0px 2px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => {
                  const updatedAmenities = [...selectedAmenities];
                  updatedAmenities[index].count =
                    (updatedAmenities[index].count || 1) + 1;
                  setSelectedAmenities(updatedAmenities);
                }}
              >
                <span style={{ color: '#4F4F4F' }}> +</span>
              </Button>
              <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                {amenity.count || 1}
              </Typography>
              <Button
                sx={{
                  minWidth: '21px',
                  height: '22px',
                  padding: 0,
                  backgroundColor: '#F8F6F8',
                  borderRadius: '2px',
                  boxShadow: ' 0px 0px 2px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => {
                  const updatedAmenities = [...selectedAmenities];
                  if (updatedAmenities[index].count > 1) {
                    updatedAmenities[index].count -= 1;
                  } else {
                    updatedAmenities.splice(index, 1);
                  }
                  setSelectedAmenities(updatedAmenities);
                }}
              >
                <span style={{ color: '#4F4F4F' }}> - </span>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Typography
        sx={{
          textAlign: { xs: 'center', sm: 'start' },
          color: '#666666',
          fontSize: { xs: '14px', md: '18px' },
          fontWeight: 400,
          mb: 1,
        }}
      >
        {propertyInformation?.addiotionalFeature}
      </Typography>

      <Button
        sx={{
          width: '165px',
          height: '45px',
          fontSize: '14px',
          lineHeight: '18.15px',
        }}
        onClick={handleClickOpen}
        variant="outlined"
        startIcon={<AddCircleIcon sx={{ fontSize: '24px !important' }} />}
      >
        {propertyInformation?.addAmentiesLabel}
      </Button>

      <AmenitiesModal
        open={open}
        setOpen={setOpen}
        formik={formik}
        onClose={handleClose}
        data={propertyInformation?.addAmenities}
        propertyInformation={propertyInformation}
        onSelected={setSelectedAmenities}
        setSelectedAmenities={setSelectedAmenities}
        selectedAmenities={selectedAmenities}
        handleSeletedAmenites={handleSeletedAmenites}
      />
    </Box>
  );
};

export default AddAmenities;
