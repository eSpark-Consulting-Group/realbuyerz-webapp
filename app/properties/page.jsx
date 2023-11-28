'use client';
import React from 'react';
import { Box } from '@mui/system';

import PropertyTabs from '@/src/components/Properties/PropertyTabs';
import { useSelector } from 'react-redux';

// import { PROPERTIES_LISTING } from '../constants/Properties';

const Listing = () => {
  // const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  // const handleAddProperty = () => {
  //   const newProperty = {
  //     id: '3',
  //     title: 'New Property',
  //     // ... other fields
  //   };
  //   dispatch(addProperty(newProperty));
  //   console.log('item Created');
  // };

  // const handleUpdateProperty = () => {
  //   const idToUpdate = '1';
  //   const updatedProperty = {
  //     title: 'Updated Property',
  //     // ... other fields to update
  //   };
  //   dispatch(updateProperty({ id: idToUpdate, updatedProperty }));
  //   console.log('item updated');
  // };

  // const handleDeleteProperty = () => {
  //   const idToDelete = '2';
  //   dispatch(deleteProperty(idToDelete));
  //   console.log('item Deleted');
  // };
  // const handleSelectProperty = (id) => {
  //   dispatch(selectProperty({ id }));
  //   console.log('item Seletced');
  // };

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <PropertyTabs data={properties} />
    </Box>
  );
};

export default Listing;
