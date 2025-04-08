import Link from 'next/link';

import { Box, Typography } from '@mui/material';

const FilteredProposalsDataBox = ({ borderRadius, item }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '5px',
        border: '1px solid #cbcbcb',
        maxWidth: '350px',
        maxHeight: { lg: '350px' },
        mx: 'auto',
        my: '15px',
        '&:hover': {
          boxShadow: '0px 0px 5px 0px rgba(18, 111, 170, 0.70)',
        },
      }}
    >
      <Box
        sx={{
          py: '10px',
          backgroundColor: '#f5f6fb',
          color: '#333',
          fontWeight: 600,
          fontSize: '16px',
          borderRadius: borderRadius,
        }}
      >
        {item?.title}
      </Box>
      <Box
        sx={{
          pt: '10px',
          pb: '16px',
          px: { xs: '10px', sm: '15px', md: '50px' },
          textAlign: 'left',
        }}
      >
        {item?.locations?.map((location, index) => (
          <Box key={index}>
            <Link href={location?.link}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
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
