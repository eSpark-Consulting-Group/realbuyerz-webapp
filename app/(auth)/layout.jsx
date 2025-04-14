import { Box } from '@mui/material';

import LoginSidePage from '@/src/components/LoginSignup/LoginSidePage/LoginSidePage';

const InnerPagesLayout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#FAFAFA' }}>
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: '1500px',
          height: '100%',
          minHeight: 'calc(100vh - 70px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 4,
          '@media(max-width: 767px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          sx={{
            width: {
              sm: 'calc(100% - 430px)',
              md: 'calc(100% - 580px)',
              lg: 'calc(100% - 750px)',
            },
            height: '100%',
            display: 'flex',
            borderRadius: '1rem 0 0 1rem',
            overflow: 'hidden',
            alignItems: 'center',
            pt: 3,
            '@media(max-width: 767px)': {
              display: 'none',
            },
          }}
        >
          <LoginSidePage />
        </Box>
        <Box
          sx={{
            mx: 'auto',
            width: { sm: '400px', md: '510px', lg: '650px' },
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            position: 'relative',
            '@media(max-width: 767px)': {
              width: '95%',
              maxWidth: '400px',
              justifyContent: 'center',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default InnerPagesLayout;
