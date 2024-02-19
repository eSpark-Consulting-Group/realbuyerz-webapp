'use client';
import React from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ProjectsFilters from './ProjectsFilters';
import FilterComponent from './FilterComponent';

const data = [
  {
    title: 'Luxury Apartment',
    areaUnit: 'sqft',
    AdType: 2,
    propertyPrice: 150,
    priceUnit: 'USD',
    propertysubType: 'Apartment',
    propertyAdType: 'For Sale',
    propertyType: 'Residential',
  },
  {
    title: 'Spacious Villa',
    areaUnit: 'sqft',
    AdType: 1,
    propertyPrice: 300,
    priceUnit: 'USD',
    propertysubType: 'Villa',
    propertyAdType: 'For Rent',
    propertyType: 'Residential',
  },
  {
    title: 'Commercial Office Space',
    areaUnit: 'sqft',
    AdType: 0,
    propertyPrice: 100,
    priceUnit: 'USD',
    propertysubType: 'Office',
    propertyAdType: 'For Sale',
    propertyType: 'Commercial',
  },
  {
    title: 'Vacant Land',
    areaUnit: 'acres',
    AdType: 1,
    propertyPrice: 50000,
    priceUnit: 'USD',
    propertysubType: 'Land',
    propertyAdType: 'For Sale',
    propertyType: 'Land',
  },
];

const ProjectPage = () => {
  const projects = useSelector((state) => state.postListingAds.agentPostings);
  return (
    <>
      <Box className="min-h-screen" sx={{ py: '80px' }}>
        <FilterComponent data={data} />
        <CategoryLink
          category={`Houses`}
          link={'/projects/category/houses'}
          linkText={'See All'}
        />
        <ProjectsSlider data={projects} category={'houses'} />
        <CategoryLink
          category={`Plots`}
          link={'/projects/category/plots'}
          linkText={'See All'}
        />
        <ProjectsSlider data={projects} category={'plots'} />
        <CategoryLink
          category={`Commercials`}
          link={'/projects/category/commercials'}
          linkText={'See All'}
        />
        <ProjectsSlider data={projects} category={'commercials'} />
      </Box>
    </>
  );
};

export default ProjectPage;
