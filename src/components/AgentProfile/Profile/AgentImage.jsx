import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

const AgentImage = ({ image }) => {
  return (
    <Grid
      sx={{
        width: '180px',
        height: '160px',
        margin: { xs: 'auto', md: 'auto' },
        pt: { xs: 1, sm: 0 },
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src={image} alt={'image'} width={400} height={400} />
    </Grid>
  );
};

export default AgentImage;
