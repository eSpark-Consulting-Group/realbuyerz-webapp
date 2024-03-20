'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import FilterComponent from './FilterComponent';

const ProjectPage = () => {
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  return (
    <>
      <Box className="min-h-screen" sx={{ py: '80px' }}>
        <FilterComponent data={projects} />
        <CategoryLink
          category={`Houses`}
          link={'/projects/category/houses'}
          linkText={'See All'}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '15px',
          }}
        >
          <ProjectsSlider data={projects} category={'houses'} />
        </Box>

        <CategoryLink
          category={`Plots`}
          link={'/projects/category/plots'}
          linkText={'See All'}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '15px',
          }}
        >
          <ProjectsSlider data={projects} category={'plots'} />
        </Box>
        <CategoryLink
          category={`Commercials`}
          link={'/projects/category/commercials'}
          linkText={'See All'}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '15px',
          }}
        >
          <ProjectsSlider data={projects} category={'commercials'} />
        </Box>
      </Box>
    </>
  );
};

export default ProjectPage;
