'use client';
import React from 'react';
import { Box } from '@mui/system';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import { dummay_data } from '@/src/constants/Projects/projectsFilter';
import AgentProjectsChiperBack from './AgentProjectsChiperBack';
import SeeAllCard from '../../projects/SeeAllCard';

const AgentProjectsTypePage = ({ params }) => {
  const { id, projects, type } = params || {};

  const filteredData = dummay_data?.filter((item) => item);

  if (!id && type) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property category invalid, Please add correct category.'}
        link={`/profile/${id}/${projects}/`}
        goBackTo={'Go to projects'}
      />
    );
  }

  if (!filteredData || filteredData?.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property Not Found'}
        link={`/profile/${id}/${projects}/`}
        goBackTo={'Go back'}
      />
    );
  }

  const renderProjectCategory = () => (
    <Box sx={{ py: 1.5 }}>
      <ProjectsCategoryLink category={type} />
      <Box
        sx={{
          width: '100%',
          maxWidth: '1350px',
          mx: 'auto',
          display: 'flex',
          py: 0.5,
        }}
      >
        <SeeAllCard data={filteredData} />
      </Box>
    </Box>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '20px' }}>
      <Box>
        <AgentProjectsChiperBack
          backText={'Back'}
          backLink={`/profile/${id}/${projects}/`}
        />
      </Box>
      <Box sx={{ py: { xs: 1, sm: 3, md: 5 } }}>
        {renderProjectCategory('Houses', 'houses', 'See All >')}
      </Box>
    </Box>
  );
};

export default AgentProjectsTypePage;
