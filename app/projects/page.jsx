'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import { projects } from '@/src/constants/projects';
import ProjectsFilters from '@/src/components/projects/ProjectsFilters';
import FilterComponent from '@/src/components/projects/FilterComponent';

const Listing = () => {
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  console.log(projects,'projects');
  return (
    <>
      <Box className="min-h-screen" sx={{ py: '80px' }}>
        <CategoryLink
          category={`Houses`}
          link={'/projects/category/houses'}
          linkText={'See All'}
        />
        <ProjectsSlider data={projects} category={'houses'} />

        <CategoryLink
          category={`Plots`}
          link={'/projects/category/plots'}
          linkText={'See All'}
        />
        <ProjectsSlider data={projects} category={'plots'} />

        <CategoryLink
          category={`Commercials`}
          link={'/projects/category/commercials'}
          linkText={'See All'}
        />
        <ProjectsSlider data={projects} category={'commercials'} />
      </Box>
    </>
  );
};

export default Listing;
