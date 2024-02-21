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
import { Typography } from '@mui/material';

const ProjectAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const agentId = segments[segments.length - 2];
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const agents = useSelector((state) => state.loginAgents);
  const currentAgent = agents?.filter(({ id }) => `${id}` === agentId)[0] || {};
  const filterData = projects?.filter((item) => item?.agentId === agentId);
  const filteredData = filterData?.length ? filterData : PROJECTS_DATA;
  // Validate id
  if (!agentId) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }
  // Check if filterData is empty
  if (!filteredData || filteredData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <ChiperBack
        backText={'Back'}
        backLink={`/profile/${currentAgent?.id}`}
        chipperText={`${currentAgent?.firstName} ${currentAgent?.lastName}'s Properties`}
        chipperLink={`/projects`}
      />
      <Box>
        <Typography variant="h3" px={'24px'}>
          {'Properties for Sale'}
        </Typography>
      </Box>
      <CategoryLink
        category={`Houses`}
        link={`/profile/${agentId}/projects/sale/houses`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'houses'} />
      <CategoryLink
        category={`Plots`}
        link={`/profile/${agentId}/projects/sale/plots`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'plots'} />
      <CategoryLink
        category={`Commercials`}
        link={`/profile/${agentId}/projects/sale/commercials`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'commercials'} />
      <Box>
        <Typography variant="h3" px={'24px'}>
          {'Properties for Rent'}
        </Typography>
      </Box>
      <CategoryLink
        category={`Houses`}
        link={`/profile/${agentId}/projects/rent/houses`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'houses'} />
      <CategoryLink
        category={`Plots`}
        link={`/profile/${agentId}/projects/rent/plots`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'plots'} />
      <CategoryLink
        category={`Commercials`}
        link={`/profile/${agentId}/projects/rent/commercials`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'commercials'} />
    </Box>
  );
};

export default ProjectAgentPage;
