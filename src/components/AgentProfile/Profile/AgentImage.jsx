import React from 'react';
import { Grid } from '@mui/material';

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
      {/* <Image 
      src={image} 
      width={"100%"}
       height={'100%'}
       zIndex: '1'
      /> */}
      <img
        src={image}
        alt="Profile"
        style={{
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />
    </Grid>
  );
};

export default AgentImage;
