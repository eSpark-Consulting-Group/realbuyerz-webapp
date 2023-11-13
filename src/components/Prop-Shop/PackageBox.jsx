import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const PackageBox = ({ icon, text, discription }) => {
  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <Box>
        <Image src={icon} alt={'basic-image'} width={40} height={40} />
      </Box>
      <Box>
        <Typography variant="h6">{text}</Typography>
        <Typography variant="p" sx={{ color: '#A5A5A5' }}>
          {discription}
        </Typography>
      </Box>
    </Box>
  );
};

export default PackageBox;
