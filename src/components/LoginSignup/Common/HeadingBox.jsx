import { Box } from '@mui/material';

const HeadingBox = ({ login = false, children }) => {
  const notLogStyles = {
    maxWidth: { xs: '90%', sm: '85%' },
    px: 2,
    py: 3,
  };

  const logStyles = {
    px: 2,
    maxWidth: { xs: '90%', sm: '85%', lg: '100%' },
  };

  const embedStyles = login ? logStyles : notLogStyles;

  return (
    <Box
      sx={{
        mx: 'auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        gap: '10px',
        padding: '5px',
        ...embedStyles,
      }}
    >
      {children}
    </Box>
  );
};

export default HeadingBox;
