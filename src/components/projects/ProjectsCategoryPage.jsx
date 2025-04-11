'use client';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import AgentProjectsChiperBack from '../profile/agent-projects/AgentProjectsChiperBack';
import {
  dummay_data,
  PROJECTS_FILTER_FIELDS,
} from '@/src/constants/Projects/projectsFilter';
import SeeAllCard from './SeeAllCard';

const ProjectsCategoryPage = ({ params }) => {
  const { slug } = params || {};
  const { fields } = PROJECTS_FILTER_FIELDS;
  const [filterObject, setfilterObject] = useState({
    purpose: 'Buy',
    all: { label: 'House', category: 'All' },
    price: { minimum: '', maximum: '' },
    size: '',
    search: '',
  });

  const filteredData = dummay_data?.filter((item) => item);

  if (!slug) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property category invalid, Please add correct category.'}
        link="/projects"
        goBackTo={'Go to projects'}
      />
    );
  }

  if (!filteredData || filteredData?.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property Not Found'}
        link="/projects"
        goBackTo={'Go back'}
      />
    );
  }

  const renderProjectCategory = () => (
    <Box sx={{ py: 1.5 }}>
      <ProjectsCategoryLink category={slug} />
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
        <AgentProjectsChiperBack backText={'Back'} backLink={`/projects/`} />
        <ProjectsFilterComponent
          fields={fields || []}
          filterObject={filterObject}
          setfilterObject={setfilterObject}
        />
      </Box>
      <Box sx={{ py: { xs: 1, sm: 3, md: 5 } }}>
        {renderProjectCategory('Houses', 'houses', 'See All >')}
      </Box>
    </Box>
  );
};

export default ProjectsCategoryPage;
