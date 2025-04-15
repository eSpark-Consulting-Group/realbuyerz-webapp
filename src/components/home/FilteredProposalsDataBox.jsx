import Link from 'next/link';

import { Box, Typography } from '@mui/material';

const FilteredProposalsDataBox = ({ item, small }) => {
  const smallScreen = {
    height: '100%',
    maxHeight: { xs: '340px' },
  };

  const desktopScreen = {
    maxHeight: { lg: '350px' },
  };

  const smallScreenLocationBox = {
    maxHeight: '255px',
    my: 2,
  };

  const desktopScreenLocationBox = {
    maxHeight: 'calc(100% - 45px)',
  };

  const smallScreenLocationTitle = {
    fontSize: {
      xs: '12px',
      sm: '13px',
      md: '14px',
    },
  };

  const desktopScreenLocationTitle = {
    fontSize: '14px',
  };

  const embedStyle = small ? smallScreen : desktopScreen;
  const embedLocationBoxStyle = small
    ? smallScreenLocationBox
    : desktopScreenLocationBox;
  const embedLocationBoxTitleStyle = small
    ? smallScreenLocationTitle
    : desktopScreenLocationTitle;

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '5px',
        border: '1px solid #cbcbcb',
        maxWidth: '350px',
        mx: 'auto',
        my: '15px',
        '&:hover': {
          boxShadow: '0px 0px 5px 0px rgba(18, 111, 170, 0.70)',
        },
        ...embedStyle,
      }}
    >
      <Box
        sx={{
          py: '10px',
          backgroundColor: '#f5f6fb',
          color: '#333',
          fontWeight: 600,
          fontSize: '16px',
          borderRadius: small ? '5px' : '',
        }}
      >
        {item?.title}
      </Box>

      <Box
        sx={{
          pt: '10px',
          pb: '16px',
          px: { xs: '10px', sm: '15px', md: '50px' },
          textAlign: 'center',
          overflowY: 'auto',
          ...embedLocationBoxStyle,

          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ececef',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#ececef',
          },
        }}
      >
        {item?.locations?.map((location, index) => (
          <Box key={index}>
            <Link href={location?.link || '#'}>
              <Typography
                variant="body1"
                sx={{
                  ...embedLocationBoxTitleStyle,
                  py: { xs: '5px', sm: '6px', lg: '5px' },
                  lineHeight: '16.94px',
                  fontWeight: 500,
                  color: '#666666',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {location?.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilteredProposalsDataBox;
