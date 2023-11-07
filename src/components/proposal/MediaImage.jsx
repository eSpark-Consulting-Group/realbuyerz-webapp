import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

function MediaImage({ data }) {
  return (
    <Box sx={{ pr: '50px' }}>
      <Image height={400} width={450} src={data?.image} alt="" />
    </Box>
  );
}

export default MediaImage;
