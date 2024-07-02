'use client';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsSlider from '@/src/components/projects/ProjectsSlider';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import NotFoundSection from '@/src/components/global/NotFoundSection';

const ProjectsPage = () => {
  const globalUnits = useSelector((state) => state.globalUnits);
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyAdType, setSelectedPropertyAdType] = useState('');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState(
    globalUnits?.AREA_UNITS[0].value
  );
  const [selectedAreaRange, setSelectedAreaRange] = useState(['0', '5000']);
  const [selectedPriceUnit, setSelectedPriceUnit] = useState(
    globalUnits?.CURRENCY_UNITS[0].value
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState(['0', '5000']);
  const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');

  const { agentPostings: projects } = useSelector(
    (state) => state.postListingAds
  );

  const handleFilter = () => {
    const filteredData = projects?.filter((project) => {
      return (
        (searchText === '' ||
          project?.title?.includes(searchText) ||
          project?.description?.includes(searchText)) &&
        (selectedPropertyAdType === '' ||
          project?.purpose === selectedPropertyAdType) &&
        (selectedProperty === '' ||
          project?.propertyType === selectedProperty) &&
        (selectedPropertyTab === 0 ||
          project?.propertyCategory === selectedPropertyTab) &&
        (selectedAreaUnit === '' || project?.areaUnit === selectedAreaUnit) &&
        (selectedPriceUnit === '' ||
          project?.amountCurrency === selectedPriceUnit) &&
        project?.amount >= selectedPriceRange[0] &&
        project?.amount <= selectedPriceRange[1] &&
        project?.area >= selectedAreaRange[0] &&
        project?.area <= selectedAreaRange[1] &&
        project?.status === 'submit'
      );
    });
    console.log(filteredData, 'filtered');
  };

  const handleClearFilter = () => {
    setSelectedPropertyAdType('');
    setSelectedPropertyTab(0);
    setSelectedProperty('');
    setSelectedPriceUnit(globalUnits?.CURRENCY_UNITS[0]?.value || '');
    setSelectedPriceRange([0, 5000]);
    setSelectedAreaUnit(globalUnits?.AREA_UNITS[0]?.value || '');
    setSelectedAreaRange([0, 5000]);
    setSearchText('');
  };

  if (!projects || projects.length === 0) {
    return (
      <NotFoundSection heading={'Sorry!'} message={'No Properties Found.'} />
    );
  }

  const renderProjectCategory = (category, link, linkText) => (
    <Box>
      <ProjectsCategoryLink
        category={category}
        link={`/projects/category/${link}`}
        linkText={linkText}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '15px',
        }}
      >
        <ProjectsSlider data={projects} category={link} />
      </Box>
    </Box>
  );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      <Box sx={{ pb: '100px' }}>
        <ProjectsFilterComponent
          searchText={searchText}
          selectedAreaRange={selectedAreaRange}
          selectedAreaUnit={selectedAreaUnit}
          selectedPriceRange={selectedPriceRange}
          selectedPriceUnit={selectedPriceUnit}
          selectedProperty={selectedProperty}
          selectedPropertyAdType={selectedPropertyAdType}
          selectedPropertyTab={selectedPropertyTab}
          setSearchText={setSearchText}
          setSelectedAreaRange={setSelectedAreaRange}
          setSelectedAreaUnit={setSelectedAreaUnit}
          setSelectedPriceRange={setSelectedPriceRange}
          setSelectedPriceUnit={setSelectedPriceUnit}
          setSelectedProperty={setSelectedProperty}
          setSelectedPropertyAdType={setSelectedPropertyAdType}
          setSelectedPropertyTab={setSelectedPropertyTab}
          handleClearFilter={handleClearFilter}
          handleFilter={handleFilter}
          globalUnits={globalUnits}
        />
      </Box>
      {renderProjectCategory('Houses', 'houses', 'See All')}
      {renderProjectCategory('Plots', 'plots', 'See All')}
      {renderProjectCategory('Commercials', 'commercials', 'See All')}
    </Box>
  );
};

export default ProjectsPage;
