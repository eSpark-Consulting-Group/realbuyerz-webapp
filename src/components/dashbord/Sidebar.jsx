'use client';
import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import SidebarAccordion from './SidebarAccordion';
import { usePathname } from 'next/navigation';
import { Agent_Routes, Client_Routes, User_Routes } from '@/app/constants/sidebar';

const Sidebar = ({ userName }) => {
  const theme = useTheme();
  const pathName = usePathname();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);
  const employee = pathName.includes('/employee/dashboard');

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
      return Agent_Routes;
    } else if (user) {
      return User_Routes;
    } 
    else {
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
          // position: 'relative',
        }}
      >
        {/* <Box
          sx={{
            borderBottom: '1px solid #E7E7E7',
            position: 'relative',
            width: '100%',
          }}
        >
          {isSmallScreen ? (
            <SidebarActiveUser userName={userName} />
          ) : (
            <ProfilePopper button={<SidebarActiveUser userName={userName} />} />
          )}
        </Box> */}

        {/* {employee && (
          <Box
            sx={{
              borderBottom: '1px solid #E7E7E7',
              position: 'relative',
              width: '100%',
            }}
          >
            {isSmallScreen ? (
              <SidebarWorkSpace
                title={WORK_SPACE_TITLE}
                image={WORK_SPACE_ICON}
              />
            ) : (
              <WorkSpacePopper
                button={
                  <SidebarWorkSpace
                    title={WORK_SPACE_TITLE}
                    image={WORK_SPACE_ICON}
                  />
                }
              />
            )}
          </Box>
        )} */}

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
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            bottom: 0,
            backgroundColor: '#068987',
          }}
        >
          {/* <SidebarLogo /> */}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
