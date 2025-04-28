import { Box } from '@mui/material';

const ProposalCardContainer = ({ justify, children }) => {
  return (
    <Box
      className="scrollbar-container"
      sx={{
        mr: { xs: 0.8, sm: 2, md: 'auto' },
        ml: { xs: 0.8, sm: 2, md: 'auto' },
        pt: { xs: 2.5, sm: 3, md: 5 },
        pb: { xs: 2, sm: 2, md: 3 },
        px: { xs: 0, sm: 0, md: 3 },
        maxHeight: '950px',
        width: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mx: 'auto',
          '@media (max-width: 755px)': {
            justifyContent: justify(1),
          },
          justifyContent: {
            sm: justify(2),
          },
          alignItems: 'center',
          flexDirection: { sm: 'row', md: 'column' },
          gap: { xs: 1.5, sm: 2.5, md: 3.5 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ProposalCardContainer;
