'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

function Typewriter({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (currentIndex < text.length) {
      interval = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200);
    } else {
      // Reset typewriter effect
      setCurrentIndex(0);
      setDisplayedText('');
    }

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <Typography
      variant="h1"
      sx={{ color: '#fff', mb: '30px', fontWeight: '600', fontSize: '40px' }}
    >
      {displayedText}|
    </Typography>
  );
}

function CreateAccount() {
  return (
    <Box
      sx={{
        pt: '90px',
        pb: '100px',
        textAlign: 'center',
        backgroundImage: `url('/images/bgs/CreateAccount.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Typewriter text="Live Properties Buying & Selling" />
      <Button
        sx={{
          mx: '15px',
          fontWeight: 600,
          width: '150px',
          height: { xs: 'auto', sm: 'auto', lg: '40px', xl: '40px' },
          color: '#fff',
        }}
        variant="primary"
        onClick={() => handleFilter('sale')}
      >
        <Typography sx={{ color: '#fff' }}>Create Account</Typography>
      </Button>
    </Box>
  );
}

export default CreateAccount;
