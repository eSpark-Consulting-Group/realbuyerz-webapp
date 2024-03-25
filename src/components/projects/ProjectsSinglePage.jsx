'use client';
import React from 'react';

import { Box, Grid } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import Sliders from '@/src/components/Properties/Slider/Slider';
import PropertyDetails from '@/src/components/global/PropertyDetail';
import ProfileAgent from '@/src/components/Properties/Profile/ProfileAgent';
import PropertySlider from '@/src/components/AgentProfile/PropertySlider';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import Heading from '@/src/components/global/Heading';

function ProjectsSinglePage() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  console.log(id, 'id');
  const properties = useSelector((state) => state.postListingAds.agentPostings);
  const selectedProject = properties?.filter(
    (property) => String(property?.property_id) === String(id)
  )[0];
  console.log(selectedProject, 'selectedProject');
  const agents = useSelector((state) => state.agents);
  const selectedAgent = agents?.filter(
    (agent) => agent?.id === selectedProject?.user_id
  )[0];
  console.log(selectedAgent, 'selectedAgent');
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
    <>
      <Grid
        container
        sx={{ paddingTop: '40px', display: 'flex', justifyContent: 'center' }}
      >
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          <Sliders propertySlider={selectedProject} />
          <PropertyDetails propertyDetailsData={selectedProject} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProfileAgent data={selectedProject} agentData={selectedAgent} />
        </Grid>
        <Grid item xs={12} sx={{ pb: '30px' }}>
          <Box py={3}>
            <Heading
              heading={`Similar Properties around  ${selectedProject?.location}`}
              textAlign={'center'}
            />
          </Box>
          <PropertySlider propertyData={properties} />
        </Grid>
      </Grid>
    </>
  );
}

export default ProjectsSinglePage;
