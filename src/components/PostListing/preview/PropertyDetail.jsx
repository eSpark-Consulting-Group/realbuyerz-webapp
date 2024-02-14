import React from 'react';
import { Box, Typography } from '@mui/material';

const PropertyDetail = ({ title, subTitle, description }) => {
  return (
    <>
      <Box
        sx={{
          px: 4,
          pt: 3,
          pb: 5,
          borderBottom: '1px solid #E4E4E4',
          '@media(min-width:280px) and (max-width:400px)': { px: 3 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            pb: '20px',
            color: '#000',
            fontSize: '20px',
            fontWeight: '500',
          }}
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography
            sx={{
              padding: '5px',
              color: '#333',
              fontSize: '15px',
              fontWeight: '600',
            }}
            variant="h3"
          >
            {subTitle}
          </Typography>
        )}
        {description && (
          <Typography
            sx={{
              padding: '5px',
              color: ' #333',
              fontSize: '12px',
              fontWeight: '400',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </>
  );
};
export default PropertyDetail;
