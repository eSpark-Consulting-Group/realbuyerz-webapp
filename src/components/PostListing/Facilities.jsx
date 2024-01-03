'use client';
import React, { useEffect, useState } from 'react';
import { Typography, Box, Checkbox, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_INFORMATION } from '@/app/constants/postListing';
import { useDispatch } from 'react-redux';
import { addAmenities } from '@/src/redux/slices/postlisting/postListingSlice';

const Facilities = ({ facilitiesData, cancel, onSelected, onClose }) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [amenities, setamenities] = useState();
  const [amenitiesTitle, setAmenitiesTitle] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAmenities(amenitiesTitle));
  }, [amenitiesTitle]);

  useEffect(() => {
    setAmenitiesTitle(amenities?.map((item) => item.title));
  }, [amenities]);

  const handleCheckboxChange = (index) => {
    const updatedAmenities = [...selectedAmenities];
    updatedAmenities[index] = !updatedAmenities[index];
    setSelectedAmenities(updatedAmenities);
  };

  const handleSaveButton = () => {
    const selectedItems = facilitiesData.filter(
      (item, index) => selectedAmenities[index]
    );
    onSelected(selectedItems);
    {
      onClose;
    }
    setamenities(selectedItems);
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          width: '100%',
        }}
      >
        {facilitiesData?.map((item, index) => (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
            key={index}
          >
            <Checkbox
              checked={selectedAmenities[index]}
              onChange={() => {
                handleCheckboxChange(index);
              }}
            />
            <Image src={item.image} width={35} height={35} alt="amenities" />
            <Typography
              sx={{
                fontSize: '20px',
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
        }}
      >
        <Button
          style={{
            background: 'white',
            borderRadius: '5px',
            color: '#FB631C',
            border: ' 1px #FB631C solid',
          }}
          onClick={cancel}
        >
          {' '}
          {PROPERTY_INFORMATION.cancel}
        </Button>
        <Button
          style={{
            background: '#FB631C',
            borderRadius: '5px',
            color: 'white',
          }}
          onClick={handleSaveButton}
        >
          {PROPERTY_INFORMATION.save}
        </Button>
      </Box>
    </>
  );
};
export default Facilities;
