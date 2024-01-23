'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';

import PropertyTabs from '@/src/components/Properties/PropertyTabs';
import ProjectsFilters from '@/src/components/projects/ProjectsFilters';
import { PROPERTIES_DATA } from '../constants/finalConstants/Properties';
import ProjectSlider from '@/src/components/projects/ProjectSlider';

const Listing = () => {
  const properties = useSelector((state) => state.properties.properties);
  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
<ProjectsFilters data={properties}/>
    </Box>
  );
};

export default Listing;
