import { Box, useMediaQuery } from '@mui/material';
import DashboardHeader from '../layouts/DashboardHeader';
import ResponsiveNavbar from './AppBar';

export const TopNav = (props) => {
  const { onNavOpen } = props;
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          backgroundColor: '#fff',
          top: 0,
          width: '100%',
          height: { xs: 66, sm: 66 },
          zIndex: 500,
        }}
      >
        <ResponsiveNavbar openSidebar={onNavOpen} />
        {/* <DashboardHeader  openSidebar={onNavOpen} /> */}
      </Box>
    </>
  );
};
