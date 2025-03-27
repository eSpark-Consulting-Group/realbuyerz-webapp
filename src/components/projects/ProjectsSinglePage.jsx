'use client';
import React from 'react';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { findSelectedAgent } from '@/src/utils/projects/agentsProjects';
import { findSelectedProject } from '@/src/utils/projects/projects';
import Sliders from '@/src/components/Properties/Slider/Slider';
import PropertyDetails from '@/src/components/global/PropertyDetail';
import ProfileAgent from '@/src/components/Properties/Profile/ProfileAgent';
import PropertySlider from '@/src/components/AgentProfile/PropertySlider';
import NotFoundSection from '@/src/components/global/NotFoundSection';
import Heading from '@/src/components/global/Heading';

function ProjectsSinglePage() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const properties = useSelector((state) => state.postListingAds.newPostings);
  const agents = useSelector((state) => state.agents);
  const selectedProject = findSelectedProject(properties, id);
  const selectedAgent = findSelectedAgent(agents, selectedProject);
  const selectedProjectinArea = properties?.filter(
    (project) =>
      project?.location == selectedProject?.location &&
      project?.property_id != selectedProject?.property_id &&
      project?.status === 'submit'
  );

  if (isNaN(id) || id === undefined || id === null) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property id invalid, Please add correct id.'}
      />
    );
  }
  if (!selectedProject) {
    return (
      <NotFoundSection
        heading={'Sorry'}
        message={`This property doesnt exist. Please add correct id.`}
      />
    );
  }

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: { xs: 6, lg: 7 },
            flexDirection: { xs: 'column', md: 'row' },
            py: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '90%',
              maxWidth: { md: 'calc(100% - 450px)', lg: 'calc(100% - 470px)' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Sliders propertySlider={selectedProject} />
          </Box>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: { md: '450px', lg: '460px' },
              maxHeight: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { lg: 8 },
            }}
          >
            <ProfileAgent data={selectedProject} agentData={selectedAgent} />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', md: '95%', lg: 'calc(100% - 410px)' },
            mr: { xs: 'auto', lg: 'auto' },
            ml: { xs: 'auto', lg: '0px' },
            pl: { lg: 3 },
            pt: 3,
          }}
        >
          <PropertyDetails propertyDetailsData={selectedProject} />
        </Box>
      </Box>
      <Heading
        heading={`Similar Properties around  ${selectedProject?.location}`}
        textAlign={'center'}
      />
      <Box
        sx={{
          pt: { xs: '35px', md: '67px' },
          pb: { xs: '55px', sm: '55px', md: '60px', lg: '75px' },
          mx: 'auto',
          width: { xs: '82%', sm: '80%' },
          maxWidth: '1320px',
        }}
      >
        <PropertySlider data={selectedProjectinArea} />
      </Box>
    </Box>
  );
}

export default ProjectsSinglePage;
