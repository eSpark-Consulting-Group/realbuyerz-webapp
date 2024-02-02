'use client';
import React from 'react';
import { Box } from '@mui/system';
// import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import { PROJECTS_DATA } from '@/src/constants/projects';

const Listing = () => {
  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <CategoryLink category={`Houses`} link={'/'} linkText={'See All'} />
      <ProjectsCard data={PROJECTS_DATA} />
    </Box>
  );
};

export default Listing;
