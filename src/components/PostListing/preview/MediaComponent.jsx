import { Box, Typography } from '@mui/material';
import React from 'react';
import AdMediaSlider from '../AdMediaSlider';

const MediaComponent = ({ title, values, mediaType }) => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          borderBottom: '1px solid #E4E4E4',
          '@media(min-width:280px) and (max-width:400px)': { px: 0.3 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '20px' },
            fontWeight: 500,
            '@media(min-width:280px) and (max-width:400px)': { pl: 3, mb: 1 },
          }}
        >
          {title}
        </Typography>
        <Box sx={{ pt: 2, width: '100%' }}>
          <AdMediaSlider media={values} mediaType={mediaType} />
        </Box>
      </Box>
    </>
  );
};

export default MediaComponent;
