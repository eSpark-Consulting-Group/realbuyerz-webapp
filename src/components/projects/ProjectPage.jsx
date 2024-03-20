'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import FilterComponent from './FilterComponent';
import NotFoundSection from '../Global/NotFoundSection';

const ProjectPage = () => {
  const projects = useSelector((state) => state.postListingAds.agentPostings);

  // Check if projects exist
  if (!projects || projects.length === 0) {
    return (
      <NotFoundSection heading={'Sorry!'} message={'No Properties Found.'} />
    );
  }

  return (
    <>
      <Box className="min-h-screen" sx={{ py: '80px' }}>
        <FilterComponent data={projects} />
        <Box>
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
        </Box>
        <Box>
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
        </Box>
        <Box>
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
      </Box>
    </>
  );
};

export default ProjectPage;
