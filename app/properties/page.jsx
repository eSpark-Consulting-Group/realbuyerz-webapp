'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';

import PropertyTabs from '@/src/components/Properties/PropertyTabs';

import { PROPERTIES_LISTING } from '../constants/Properties';
import {
  deleteProperty,
  updateProperty,
} from '@/src/redux/slices/propertiesSlice';

const Listing = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  console.log(properties);

  const handleAddProperty = () => {
    const newProperty = {
      id: '3',
      title: 'New Property',
      // ... other fields
    };
    dispatch(addProperty(newProperty));
    console.log('item Created');
  };

  const handleUpdateProperty = () => {
    const idToUpdate = '1';
    const updatedProperty = {
      title: 'Updated Property',
      // ... other fields to update
    };
    dispatch(updateProperty({ id: idToUpdate, updatedProperty }));
    console.log('item updated');
  };

  const handleDeleteProperty = () => {
    const idToDelete = '2';
    dispatch(deleteProperty(idToDelete));
    console.log('item Deleted');
  };
  const handleSelectProperty = (id) => {
    dispatch(selectProperty({ id }));
    console.log('item Seletced');
  };

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <button onClick={handleAddProperty}>Add Property</button>
      <button onClick={handleUpdateProperty}>Update Property</button>
      <button onClick={handleDeleteProperty}>Delete Property</button>
      <button onClick={handleSelectProperty}>Select Single Property</button>
      <PropertyTabs data={PROPERTIES_LISTING} />
    </Box>
  );
};

export default Listing;
