'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';

import { NOT_FOUND } from '@/src/constants/Global';

const NotFoundSection = ({ message, link, goBackTo }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: `calc(100vh - 64px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
          pb: 3,
          gap: 1,
        }}
      >
        <Box
          component={'img'}
          src={'/images/404/not-found.jpg'}
          alt={'Images'}
          sx={{
            width: '65%',
            maxWidth: { xs: '180px', sm: '200px', md: '230px' },
            height: 'auto',
            objectFit: 'contain',
            mt: -2,
          }}
        />
        <Typography
          sx={{
            mt: -2,
            fontSize: { xs: '15px' },
            textAlign: 'center',
          }}
        >
          {message || NOT_FOUND?.pageTitle}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '17px', sm: '22px' },
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          {message || NOT_FOUND?.errorDescription}
        </Typography>
        <Button
          variant="primary"
          sx={{ mt: 2 }}
          onClick={() => router?.push(`${link || NOT_FOUND?.backButtonLink}`)}
          startIcon={<ArrowBackIosIcon />}
        >
          {goBackTo || NOT_FOUND?.backButtonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundSection;
