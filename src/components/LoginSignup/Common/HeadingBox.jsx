import { Box } from '@mui/material';

const HeadingBox = ({ login = false, children }) => {
  return (
    <Box
      sx={{
        width: { xs: login ? '100%' : '90%', md: '320px' },
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        padding: login ? '5px' : '10px',
        gap: { xs: '7px', md: '15px' },
      }}
    >
      {children}
    </Box>
  );
};

export default HeadingBox
