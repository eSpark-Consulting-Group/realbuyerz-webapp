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

const TypeAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const agentid = segments[segments.length - 3];
  const adsType = segments[segments.length - 1];
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const agents = useSelector((state) => state.loginAgents);
  const currentAgent = agents?.filter(({ id }) => `${id}` === agentid)[0] || {};
  const filterData = projects?.filter(
    (item) => item?.agentid === agentid && item?.adsType === adsType
  );
  const filteredData = filterData?.length ? filterData : PROJECTS_DATA;
  // Validate id
  if (!agentid) {
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
        backLink={`/profile/${currentAgent?.id}/projects`}
        chipperText={`${currentAgent?.firstName} ${currentAgent?.lastName}'s Properties for ${adsType}`}
        chipperLink={`/projects`}
      />
      <CategoryLink
        category={`Houses`}
        link={`/profile/${currentAgent?.id}/projects/${adsType}/houses`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'houses'} />
      <CategoryLink
        category={`Plots`}
        link={`/profile/${currentAgent?.id}/projects/${adsType}/plots`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'plots'} />
      <CategoryLink
        category={`Commercials`}
        link={`/profile/${currentAgent?.id}/projects/${adsType}/commercials`}
        linkText={'See All'}
      />
      <ProjectsSlider data={projects} category={'commercials'} />
    </Box>
  );
};

export default TypeAgentPage;
