import { Box, Typography } from '@mui/material';

const PropertyNameBox = ({ pathName, user, data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width: 600px) and (max-width:1150px)': {
          justifyContent: `${pathName?.includes(user) ? 'center' : 'start'}`,
        },
        alignItems: { xs: 'flex-start', md: 'center' },
        position: 'relative',
        zIndex: 3,
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '15px', sm: '20px' },
          fontWeight: 700,
          lineHheight: '24px',
          maxWidth: { xs: '220px', sm: '330px' },
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          color: '#333',
        }}
      >
        {data?.propertyName || ''}
      </Typography>
    </Box>
  );
};

export default PropertyNameBox;
