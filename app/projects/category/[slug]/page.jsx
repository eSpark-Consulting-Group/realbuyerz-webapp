'use client';
// Import necessary modules and components
import React from 'react';
import { Box } from '@mui/system';
// import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import CategoryLink from '@/src/components/projects/CategoryLink';
import ProjectsCard from '@/src/components/projects/ProjectsCard';
import { PROJECTS_DATA } from '@/src/constants/projects';
// import { usePathname } from 'next/navigation';

const Listing = () => {
  // const pathname = usePathname();
  // const segments = pathname.split('/');
  // const id = segments[segments.length - 1];

  // const users = useSelector((state) => state?.agents?.agents?.agentData);

  // // Get proposals from Redux state
  // const proposals = useSelector((state) => state.proposals.proposals);

  // // Filter projects based on postType (last item in lowercase)
  // const filteredProjects = PROJECTS_DATA.filter(
  //   (project) => project.postType.toLowerCase().replace(' ', '-') === lastPathnameItem
  // );

  return (
    <Box className="min-h-screen" sx={{ py: '80px' }}>
      {/* Display category link */}
      {/* <CategoryLink category={lastPathnameItem.toUpperCase()} link={'/'} linkText={'See All'} /> */}

      <CategoryLink category={`Houses`} link={'/'} linkText={'See All'} />
      {/* Display filtered projects */}
      <ProjectsCard data={PROJECTS_DATA} />
    </Box>
  );
};

export default Listing;
