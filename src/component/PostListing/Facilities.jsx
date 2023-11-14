import React, { useState } from 'react';
import { Typography, Box, Checkbox, Button } from '@mui/material';
import Image from 'next/image';
import SelectedItemsComponent from './SelectedAmenitiesItem';
import PropertyFeatures from './PropertyFeature';

const Facilities = ({ Data, cancel, onSelected, onClose }) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleCheckboxChange = (index) => {
    const updatedAmenities = [...selectedAmenities];

    // Toggle the selection status of the checkbox at the specified index
    updatedAmenities[index] = !updatedAmenities[index];

    // Update the state with the new array
    setSelectedAmenities(updatedAmenities);
  };

  const handleSaveButton = () => {
    // Filter out the selected amenities
    const selectedItems = Data.filter(
      (item, index) => selectedAmenities[index]
    );
    onSelected(selectedItems); // Pass the selected items to AddAmenities
    // onClose();
    console.log('Selected Amenities:', selectedItems);
  };
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {Data?.map((item, index) => (
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
          Cancel
        </Button>
        <Button
          style={{
            background: '#FB631C',
            borderRadius: '5px',
            color: 'white',
          }}
          onClick={handleSaveButton}
        >
          Save
        </Button>
      </Box>
    </>
  );
};
export default Facilities;
