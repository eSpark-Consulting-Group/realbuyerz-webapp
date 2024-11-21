import React from 'react';
import { Container, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ProjectsCategoryLink = ({ category, link, linkText }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'space-between', py: '15px' }}
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
        <Link href={link}>
          <MoreHorizIcon />
        </Link>
      ) : link && linkText ? (
        <Link href={link}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '24px',
              color: '#1176AD',
            }}
          >
            {linkText}
          </Typography>
        </Link>
      ) : null}
    </Container>
  );
};

export default ProjectsCategoryLink;
