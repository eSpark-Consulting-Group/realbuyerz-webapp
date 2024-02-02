'use client';
import React from 'react';
import { Box } from '@mui/system';
// import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import { PROJECTS_DATA } from '@/src/constants/projects';
// import FilterComponent from '@/src/components/projects/FilterComponent';
// import ProjectsFilters from '@/src/components/projects/ProjectsFilters';

const Listing = () => {
  // const proposals = useSelector((state) => state.proposals.proposals);
  return (
    <>
      <Box className="min-h-screen" sx={{ py: '80px' }}>
        <CategoryLink category={`Houses`} link={'/'} linkText={'See All'} />
        <ProjectsSlider data={PROJECTS_DATA} />

        <CategoryLink category={`Plots`} link={'/'} linkText={'See All'} />
        <ProjectsSlider data={PROJECTS_DATA} />

        <CategoryLink
          category={`Commercials`}
          link={'/'}
          linkText={'See All'}
        />
        <ProjectsSlider data={PROJECTS_DATA} />
      </Box>
    </>
  );
};

export default Listing;
