'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import NotFoundSection from '../global/NotFoundSection';

const ProjectsPage = () => {
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
        <Box sx={{ pb: '100px' }}>
          <ProjectsFilterComponent data={projects} />
        </Box>
        <Box>
          <ProjectsCategoryLink
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
          <ProjectsCategoryLink
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
          <ProjectsCategoryLink
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

export default ProjectsPage;
