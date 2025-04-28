import { Box, Typography } from '@mui/material';

const DescriptionBox = ({ description }) => {
  return (
    <Box
      sx={{
        color: '#333',
        px: '20px',
        paddingTop: '40px',
        paddingBottom: '20px',
        '@media(min-width: 280px) and (max-width: 445px)': {
          pr: '10px',
        },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontWeight: '500',
          fontSize: '13.8px',
          lineHeight: '20.52px',
          maxWidth: 'auto',
          letterSpacing: '0em',
          textAlign: 'left',
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
          mb: 1,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default DescriptionBox;
