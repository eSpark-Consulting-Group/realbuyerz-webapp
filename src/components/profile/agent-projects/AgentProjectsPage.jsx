'use client';
import React from 'react';
import { Box } from '@mui/system';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import { dummay_data } from '@/src/constants/Projects/projectsFilter';
import AgentProjectsChiperBack from './AgentProjectsChiperBack';

const ProjectsPage = ({ params }) => {
  const { id, projects } = params || {};
  const purpose = projects?.split('-')[1];
  const filteredData = dummay_data?.filter((item) => item);

  if (!filteredData || filteredData?.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No Properties Found.'}
        link={'/'}
      />
    );
  }

  const renderProjectCategory = (category, link, linkText) => (
    <Box sx={{ py: 1.5 }}>
      <ProjectsCategoryLink
        category={category}
        link={`${projects}/${link}`}
        linkText={linkText}
      />

      <Box
        sx={{
          width: '100%',
          maxWidth: '1350px',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
          py: 0.5,
        }}
      >
        <ProjectsSlider data={dummay_data} category={purpose} />
      </Box>
    </Box>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '20px' }}>
      <Box>
        <AgentProjectsChiperBack
          backText={'Back'}
          backLink={`/profile/${id}`}
        />
      </Box>
      <Box sx={{ py: { xs: 1, sm: 3, md: 5 } }}>
        {renderProjectCategory('Houses', 'houses', 'See All >')}
        {renderProjectCategory('Plots', 'plots', 'See All >')}
        {renderProjectCategory('Commercials', 'commercials', 'See All >')}
      </Box>
    </Box>
  );
};

export default ProjectsPage;
