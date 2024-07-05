'use client';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { usePathname } from 'next/navigation';
import ProjectsCategoryLink from '@/src/components/projects/ProjectsCategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import { useSelector } from 'react-redux';
import ProjectsFilterComponent from './ProjectsFilterComponent';
import AgentProjectsChiperBack from '../profile/agent-projects/AgentProjectsChiperBack';

const ProjectsCategoryPage = () => {
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

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const projects = useSelector((state) => state.postListingAds.agentPostings);

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

  if (!id) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Proposal category invalid, Please add correct id.'}
      />
    );
  }
  // if (!filteredData || filteredData.length === 0) {
  //   return (
  //     <NotFoundSection
  //       heading={'Sorry!'}
  //       message={'Proposal category invalid, Please add correct id.'}
  //     />
  //   );
  // }

  return (
    <Box className="min-h-screen" sx={{ py: '20px' }}>
      <Box sx={{ pb: '80px' }}>
        <AgentProjectsChiperBack backText={'Back'} backLink={`/projects/`} />
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
      <ProjectsCategoryLink category={id} />
      {selectedProjects && selectedProjects.length > 0 ? (
        <ProjectsCard data={selectedProjects} />
      ) : (
        <NotFoundSection
          heading={'Sorry!'}
          message={'Proposal category invalid, Please add correct id.'}
        />
      )}
    </Box>
  );
};

export default ProjectsCategoryPage;
