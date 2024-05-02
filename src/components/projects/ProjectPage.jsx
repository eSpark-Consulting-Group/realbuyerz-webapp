'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import FilterComponent from './FilterComponent';

const ProjectPage = () => {
  const projects = useSelector((state) => state.postListingAds.agentPostings);

  // Function to generate category section
  const renderCategorySection = (category, categoryTitle) => (
    <>
      <CategoryLink
        category={categoryTitle}
        link={`/projects/category/${category}`}
        linkText={'See All'}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '15px',
        }}
      >
        <ProjectsSlider data={projects} category={category} />
      </Box>
    </>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <FilterComponent data={projects} />
      {renderCategorySection('houses', 'Houses')}
      {renderCategorySection('plots', 'Plots')}
      {renderCategorySection('commercials', 'Commercials')}
    </Box>
  );
};

export default ProjectPage;
