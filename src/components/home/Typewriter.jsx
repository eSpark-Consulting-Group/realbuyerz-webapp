import { useEffect, useState } from 'react';

import { Typography } from '@mui/material';

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
      setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 2000);
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

export default Typewriter;
