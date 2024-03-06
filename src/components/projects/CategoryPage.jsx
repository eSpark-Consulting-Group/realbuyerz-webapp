'use client';
import React from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import { useSelector } from 'react-redux';
import FilterComponent from './FilterComponent';
import { PROJECTS_DATA } from '@/src/constants/projects';

const CategoryPage = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const NoData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filterData = projects?.filter((item) => item?.proportyCategory === id);
  const filteredData = filterData?.length ? filterData : NoData;

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
  if (!filteredData || filteredData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <FilterComponent data={filteredData} />
      <CategoryLink category={id} />
      <ProjectsCard data={filteredData} />
    </Box>
  );
};

export default CategoryPage;
