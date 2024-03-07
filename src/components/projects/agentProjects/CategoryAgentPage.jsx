'use client';
import React from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import { useSelector } from 'react-redux';
import ChiperBack from './ChiperBack';
import { PROJECTS_DATA } from '@/src/constants/projects';

const CategoryAgentPage = () => {
  const pathname = usePathname();
  const segments = pathname.split(`/`);
  const id = segments[segments.length - 1];
  const agentid = segments[segments.length - 4];
  const category = segments[segments.length - 1];
  const adsType = segments[segments.length - 2];
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  const agents = useSelector((state) => state.agents);
  const currentAgent = agents?.filter(({ id }) => `${id}` === agentid)[0] || {};
  const filterData = projects?.filter(
    (item) => item?.propertyCategory === id && item?.agentid === agentid
  );
  const filteredData = filterData?.length ? filterData : PROJECTS_DATA;

  function capitalizeFirstLetter(text) {
    return text.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  // Validate id
  if (!id) {
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
        backLink={`/profile/${currentAgent?.id}/projects/${adsType}`}
        chipperText={`${currentAgent?.firstName} ${currentAgent?.lastName}'s ${capitalizeFirstLetter(category)} for ${capitalizeFirstLetter(adsType)}`}
        chipperLink={`/projects`}
      />
      <CategoryLink category={id} />
      <ProjectsCard data={filteredData} />
    </Box>
  );
};

export default CategoryAgentPage;
