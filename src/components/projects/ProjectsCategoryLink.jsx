import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ProjectsCategoryLink = ({ category, link, linkText }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1350px',
        mx: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: '15px',
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '20px', md: '25px' },
          fontWeight: 500,
          lineHeight: '30px',
          textTransform: 'capitalize',
        }}
      >
        {category}
      </Typography>
      {link && isMobile ? (
        <Link href={link} style={{ display: 'flex', alignItems: 'center' }}>
          <MoreHorizIcon sx={{ color: '#1176AD' }} />
        </Link>
      ) : link && linkText ? (
        <Link href={link}>
          <Typography
            sx={{
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 500,
              lineHeight: '24px',
              color: '#1176AD',
              display: 'inline-flex',
            }}
          >
            {linkText}
          </Typography>
        </Link>
      ) : null}
    </Box>
  );
};

export default ProjectsCategoryLink;
