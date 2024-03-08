'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ChiperBack from './ChiperBack';
import { usePathname } from 'next/navigation';
import NotFoundSection from '../../Global/NotFoundSection';
import { Typography } from '@mui/material';
// Other imports...

const ProjectAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 2];
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const agents = useSelector((state) => state.agents);
  const currentAgent = agents?.find(({ id }) => `${id}` === agentId);
  const filterData = projects?.filter((item) => item?.user_id === agentId);

  if (!agentId || !currentAgent) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Invalid agent ID. Please provide a valid ID.'}
      />
    );
  }

  if (!filterData || filterData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No projects found for this agent.'}
      />
    );
  }

  const renderProjects = (category, type) => (
    <>
      <Box>
        <Typography variant="h3" px={'24px'}>
          {`Properties for ${type}`}
        </Typography>
      </Box>
      <CategoryLink
        category={category}
        link={`/profile/${agentId}/projects/${type}/${category.toLowerCase()}`}
        linkText={'See All'}
      />
      <ProjectsSlider data={filterData} category={category.toLowerCase()} />
    </>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <ChiperBack
        backText={'Back'}
        backLink={`/profile/${currentAgent?.id}`}
        chipperText={`${currentAgent?.firstName} ${currentAgent?.lastName}'s Properties`}
        chipperLink={`/projects`}
      />
      {renderProjects('Houses', 'Sale')}
      {renderProjects('Plots', 'Sale')}
      {renderProjects('Commercials', 'Sale')}
      {renderProjects('Houses', 'Rent')}
      {renderProjects('Plots', 'Rent')}
      {renderProjects('Commercials', 'Rent')}
    </Box>
  );
};

export default ProjectAgentPage;
