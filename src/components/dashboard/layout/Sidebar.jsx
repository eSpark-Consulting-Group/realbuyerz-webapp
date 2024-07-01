'use client';
import React from 'react';
import { Box } from '@mui/material';

import SidebarAccordion from './SidebarAccordion';
import { usePathname } from 'next/navigation';
import { AGENT_ROUTES, USER_ROUTES } from '@/src/constants/sidebar';

const Sidebar = () => {
  const pathName = usePathname();
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const accordionStyles = {
    paddingTop: windowHeight < 300 ? 0 : '15%',
    paddingBottom: windowHeight < 300 ? 0 : '15%',
  };

  const renderLinks = () => {
    const agent = pathName.includes('/agent');
    const user = pathName.includes('/user');

    if (agent) {
      return AGENT_ROUTES;
    } else if (user) {
      return USER_ROUTES;
    } else {
      null;
    }
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          backgroundColor: '#fff',
        }}
      >
        <Box
          id={'accrodion'}
          component={'div'}
          sx={{
            px: '12px',
            top: 0,
            height: '100%',
            ...accordionStyles,
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          <SidebarAccordion sidebarLinks={renderLinks()} />
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
