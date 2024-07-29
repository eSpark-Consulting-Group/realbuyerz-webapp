'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FEATURED_HEADINGS } from '@/src/constants/Home';
import Link from 'next/link';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (currentIndex < text.length) {
      interval = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150);
    } else {
      setCurrentIndex(0);
      setDisplayedText('');
    }
    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <Typography
      sx={{
        color: '#fff',
        mb: '30px',
        fontWeight: '600',
        fontSize: { xs: '15px', sm: '20px', md: '24px', lg: '26px' },
      }}
    >
      {displayedText}|
    </Typography>
  );
};

const CreateAccount = () => {
  return (
    <Box
      sx={{
        pt: '90px',
        pb: '100px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/CreateAccount.gif')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Typewriter text={FEATURED_HEADINGS.sliderHeading} />
      <Link href={'/signin'}>
        <Button
          sx={{
            mx: '15px',
            fontWeight: 600,
            width: '150px',
            height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
            color: '#fff',
            '&:hover': {
              backgroundColor: '#fff !important',
              color: '#fb631c !important',
              border: '1px solid #fb631c',
            },
            fontSize: '12px',
          }}
          variant="primary"
        >
          {FEATURED_HEADINGS.createAccount}
        </Button>
      </Link>
    </Box>
  );
};

export default CreateAccount;
