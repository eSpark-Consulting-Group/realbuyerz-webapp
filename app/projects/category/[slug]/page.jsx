'use client';
import React from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import { PROJECTS_DATA } from '@/src/constants/projects';
import NotFoundSection from '@/src/components/Global/NotFoundSection';

const Listing = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const filterData = PROJECTS_DATA?.filter((item) => item?.category === id);
  // Validate id
  if (!id) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }
  // Check if filterData is empty
  if (!filterData || filterData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <CategoryLink category={id} />
      <ProjectsCard data={filterData} />
    </Box>
  );
};

export default Listing;
