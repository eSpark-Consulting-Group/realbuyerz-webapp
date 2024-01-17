import { Box, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { SIDE_NAV_WIDTH } from '@/app/constants/sidebar';
import DashboardHeader from '../layouts/DashboardHeader';


export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  return (
    <>
      <Box
        component="header"
        sx={{
          // backdropFilter: 'blur(6px)',
          // backgroundColor: () => alpha('#068987', 0.8),
          position: 'sticky',
          // left: {
          //   // lg: `${SIDE_NAV_WIDTH}px`,
          // },
          top: 0,
          width: {
            lg: '100%',
          },
          height: '60px',
          zIndex: 500,
        }}
      >
        {/* {lgUp && <TopNavNavbar />}
        {!lgUp && (
          <ResponsiveNavbar
            userName={Active_User_Data?.userName}
            openSidebar={onNavOpen}
          />
        )} */}
        <DashboardHeader />
      </Box>
    </>
  );
};
