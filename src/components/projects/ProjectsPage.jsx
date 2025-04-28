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

const initialFilter = {
  purpose: 'Buy',
  all: { label: 'House', category: 'All' },
  price: { minimum: '', maximum: '' },
  size: '',
  search: '',
};

const CATEGORIES = [
  { label: 'Houses', link: 'houses' },
  { label: 'Plots', link: 'plots' },
  { label: 'Commercials', link: 'commercials' },
];

const ProjectCategorySection = ({ category, link }) => (
  <Box sx={{ py: 1.5 }}>
    <ProjectsCategoryLink
      category={category}
      link={`/projects/category/${link}`}
      linkText="See All >"
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

const ProjectsPage = () => {
  const { fields } = PROJECTS_FILTER_FIELDS;
  const [filterObject, setFilterObject] = useState(initialFilter);

  const hasData = dummay_data && dummay_data.length > 0;

  if (!hasData) {
    return (
      <NotFoundSection
        heading="Sorry!"
        message="No Properties Found."
        link="/"
      />
    );
  }

  return (
    <Box
      className="min-h-screen"
      sx={{ py: { xs: 2, sm: 5, lg: 8 }, px: { xs: 2, sm: 2, md: 3, lg: 0 } }}
    >
      <ProjectsFilterComponent
        fields={fields || []}
        filterObject={filterObject}
        setfilterObject={setFilterObject}
      />
      <Box sx={{ py: { xs: 1, sm: 3, md: 5 } }}>
        {CATEGORIES.map(({ label, link }) => (
          <ProjectCategorySection key={link} category={label} link={link} />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsPage;
