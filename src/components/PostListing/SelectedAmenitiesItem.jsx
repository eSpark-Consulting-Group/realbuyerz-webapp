import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import Image from 'next/image';

import { PROPERTY_BUYING_DETAIL } from '../../../app/constants/postlistingConstants';

const SelectedItemsComponent = ({ selectedItems }) => {
  const [selectedAmenities, setSelectedAmenities] = useState({
    sellingData: PROPERTY_BUYING_DETAIL.sellingDetails,
  });

  const handleSaveAmenities = () => {
    const updatedSellingDetails = { ...selectedAmenities.sellingData };
    const selectedTitles = selectedItems.map((item) => item.title);
    updatedSellingDetails.selectedAmenities = selectedTitles;
    setSelectedAmenities({
      sellingDetails: updatedSellingDetails,
    });
    console.log('list', selectedAmenities);
  };
  return (
    <div>
      <ul
        style={{
          display: 'flex',
        }}
      >
        {selectedItems?.map((item, index) => (
          <li
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '10px',
              gap: '5px',
            }}
            key={index}
          >
            <Image src={item.image} width={30} height={30} alt="amenities" />
            <Typography>{item.title}</Typography>
          </li>
        ))}
      </ul>
      <Button onClick={handleSaveAmenities}>Ok</Button>
    </div>
  );
};

export default SelectedItemsComponent;
