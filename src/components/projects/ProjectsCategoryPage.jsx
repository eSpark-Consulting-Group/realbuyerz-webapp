'use client';
import React from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import { useSelector } from 'react-redux';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import AgentProjectsChiperBack from '../profile/agent-projects/AgentProjectsChiperBack';
import {
  dummay_data,
  PROJECTS_FILTER_FIELDS,
} from '@/src/constants/Projects/projectsFilter';
import ProjectsSlider from './ProjectsSlider';

const ProjectsCategoryPage = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const category = id.charAt(0).toUpperCase() + id.slice(1);
  const { fields } = PROJECTS_FILTER_FIELDS;
  console.log(category, 'category');
  const filteredData = [];

  if (!id) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
        link="/projects"
      />
    );
  }
  if (!filteredData || filteredData.length === 0) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
        link="/projects"
      />
    );
  }

  const renderProjectCategory = (category, link, linkText) => (
    <Box sx={{ py: 1.5 }}>
      <ProjectsCategoryLink
        category={category}
        link={`/projects/category/${link}`}
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
        <ProjectsSlider data={dummay_data} category={link} />
      </Box>
    </Box>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '20px' }}>
      <Box>
        <AgentProjectsChiperBack backText={'Back'} backLink={`/projects/`} />
        <ProjectsFilterComponent fields={fields || []} />
      </Box>
      <Box sx={{ py: { xs: 1, sm: 3, md: 5 } }}>
        {renderProjectCategory('Houses', 'houses', 'See All >')}
      </Box>
    </Box>
  );
};

export default ProjectsCategoryPage;
