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
        <CategoryLink
          category={`Houses`}
          link={'/projects/category/houses'}
          linkText={'See All'}
        />
        <ProjectsSlider data={PROJECTS_DATA} category={'houses'} />

        <CategoryLink
          category={`Plots`}
          link={'/projects/category/plots'}
          linkText={'See All'}
        />
        <ProjectsSlider data={PROJECTS_DATA} category={'plots'} />

        <CategoryLink
          category={`Commercials`}
          link={'/projects/category/commercials'}
          linkText={'See All'}
        />
        <ProjectsSlider data={PROJECTS_DATA} category={'commercials'} />
      </Box>
    </>
  );
};

export default Listing;
