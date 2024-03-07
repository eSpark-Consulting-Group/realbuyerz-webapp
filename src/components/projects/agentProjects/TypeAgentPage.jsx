'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ChiperBack from './ChiperBack';
import { usePathname } from 'next/navigation';
import NotFoundSection from '../../Global/NotFoundSection';
import { PROJECTS_DATA } from '@/src/constants/projects';

// Other imports...

const TypeAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 3];
  const adsType = segments[segments.length - 1];
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const agents = useSelector((state) => state.agents);
  const currentAgent = agents?.find(({ id }) => `${id}` === agentId);
  const filterData = projects?.filter(
    (item) => item?.agentid === agentId && item?.adsType === adsType
  );
  const filteredData = filterData?.length ? filterData : PROJECTS_DATA;

  // Validate agentId
  if (!agentId || !currentAgent) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Invalid agent ID. Please provide a valid ID.'}
      />
    );
  }

  // Check if filterData is empty
  if (!filteredData || filteredData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'No projects found for this agent and type.'}
      />
    );
  }

  const renderProjects = (category) => (
    <>
      <CategoryLink
        category={category}
        link={`/profile/${currentAgent?.id}/projects/${adsType}/${category.toLowerCase()}`}
        linkText={'See All'}
      />
      <ProjectsSlider data={filteredData} category={category.toLowerCase()} />
    </>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <ChiperBack
        backText={'Back'}
        backLink={`/profile/${currentAgent?.id}/projects`}
        chipperText={`${currentAgent?.firstName} ${currentAgent?.lastName}'s Properties for ${adsType}`}
        chipperLink={`/projects`}
      />
      {renderProjects('Houses')}
      {renderProjects('Plots')}
      {renderProjects('Commercials')}
    </Box>
  );
};

export default TypeAgentPage;
