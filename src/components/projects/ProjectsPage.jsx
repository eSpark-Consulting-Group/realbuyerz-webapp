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
  const [selectedProjects, setSelectedProjects] = useState([]);
  console.log(selectedProjects, 'selectedProjects');
  const [searchText, setSearchText] = useState('');
  const [selectedPropertyAdType, setSelectedPropertyAdType] = useState('');
  const [selectedPropertyTab, setSelectedPropertyTab] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('');
  console.log(selectedProperty, 'selectedProperty');
  const [selectedAreaUnit, setSelectedAreaUnit] = useState('');
  const [selectedPriceUnit, setSelectedPriceUnit] = useState('');
  const [selectedAreaRange, setSelectedAreaRange] = useState(['', '']);
  const [selectedPriceRange, setSelectedPriceRange] = useState(['', '']);

  const { agentPostings: projects } = useSelector(
    (state) => state.postListingAds
  );

  const filteredData = projects?.filter((project) => {
    return (
      (searchText === '' ||
        project?.title?.toLowerCase().includes(searchText?.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          .includes(searchText?.toLowerCase())) &&
      (selectedPropertyAdType === '' ||
        selectedPropertyAdType === 'any' ||
        project?.purpose?.toLowerCase() === selectedPropertyAdType) &&
      (selectedProperty === '' ||
        selectedProperty === ' ' ||
        project?.propertyType?.toLowerCase() === selectedProperty?.value) &&
      (selectedAreaUnit === '' ||
        selectedAreaUnit === 'any' ||
        project?.areaUnit?.toLowerCase() === selectedAreaUnit?.toLowerCase()) &&
      (selectedPriceUnit === '' ||
        selectedPriceUnit === 'any' ||
        project?.amountCurrency?.toLowerCase() ===
          selectedPriceUnit?.toLowerCase()) &&
      (selectedPriceRange[0] === '' ||
        project?.amount >= selectedPriceRange[0]) &&
      (selectedPriceRange[1] === '' ||
        project?.amount <= selectedPriceRange[1]) &&
      (selectedAreaRange[0] === '' || project?.area >= selectedAreaRange[0]) &&
      (selectedAreaRange[1] === '' || project?.area <= selectedAreaRange[1]) &&
      project?.status?.toLowerCase() === 'submit'
    );
  });
  const handleFilter = () => {
    setSelectedProjects(filteredData);
  };

  const handleClearFilter = () => {
    setSelectedPropertyAdType('');
    setSelectedPropertyTab(0);
    setSelectedProperty('');
    setSelectedPriceUnit('');
    setSelectedPriceRange(['', '']);
    setSelectedAreaUnit('');
    setSelectedAreaRange(['', '']);
    setSearchText('');
    setSelectedProjects(projects);
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
        <ProjectsSlider data={selectedProjects} category={link} />
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
      {selectedProjects.length === 0 ? (
        <NotFoundSection heading={'Sorry!'} message={'No Properties Found.'} />
      ) : (
        <>
          {renderProjectCategory('Houses', 'houses', 'See All')}
          {renderProjectCategory('Plots', 'plots', 'See All')}
          {renderProjectCategory('Commercials', 'commercials', 'See All')}
        </>
      )}
    </Box>
  );
};

export default ProjectsPage;
