import { SIDE_NAV_WIDTH } from '@/app/constants/sidebar';
import Sidebar from './Sidebar';
import { Drawer, useMediaQuery } from '@mui/material';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const content = <Sidebar userName={'Check'} />;

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            width: SIDE_NAV_WIDTH,
            overflowX: 'hidden',
            overflowY: 'hidden',
            height: '100%',
            top: 66,
         },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          overflowX: 'hidden',
          overflowY: 'hidden',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
