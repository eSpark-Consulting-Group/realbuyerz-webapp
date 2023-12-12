import React from 'react';
import { Box } from '@mui/system';
import Image from 'next/image';

const RealEstateImage = () => {
  return (
    <Box>
      <Image
        src={'/images/signup_page/boximage.svg'}
        width={550}
        height={500}
        alt={'boxImage'}
      />
    </Box>
  );
};
export default RealEstateImage;
