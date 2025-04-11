'use client';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import {
  dummay_data,
  PROJECTS_FILTER_FIELDS,
} from '@/src/constants/Projects/projectsFilter';

const ProjectsPage = () => {
  const { fields } = PROJECTS_FILTER_FIELDS;
  const filteredData = dummay_data?.filter((item) => item);
  const [filterObject, setfilterObject] = useState({
    purpose: 'Buy',
    all: { label: 'House', category: 'All' },
    price: { minimum: '', maximum: '' },
    size: '',
    search: '',
  });

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
    <Box
      className="min-h-screen"
      sx={{ py: { xs: 2, sm: 5, lg: 8 }, px: { xs: 2, sm: 2, md: 3, lg: 0 } }}
    >
      <Box>
        <ProjectsFilterComponent
          fields={fields || []}
          filterObject={filterObject}
          setfilterObject={setfilterObject}
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
