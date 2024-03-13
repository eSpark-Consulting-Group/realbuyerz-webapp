import React from 'react';
import { Box, Typography } from '@mui/material';
import { propertyNames } from '@/app/constants/postListing';

const renderDetail = (
  title,
  value,
  amenities,
  fontSize,
  fontStyle,
  fontWeight
) => {
  if (value > 0) {
    return (
      <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
        <Typography
          sx={{
            fontSize: fontStyle ? fontStyle : '14px',
            fontWeight: fontWeight ? fontWeight : 500,
          }}
        >
          {amenities?.[title]}
        </Typography>
        <Typography
          sx={{
            fontSize: fontStyle ? fontStyle : '14px',
            fontWeight: 500,
            color: '#126FAA',
          }}
        >
          {value && value}
        </Typography>
      </Box>
    );
  }
  return null;
};
const PreviewFeatureAndAmenities = ({
  amenities,
  fontSize,
  fontStyle,
  fontWeight,
  formik,
  spacificPost,
}) => {
  return (
    <>
      {amenities?.title && (
        <Box
          sx={{
            p: 5,
            borderBottom: '1px solid #E4E4E4',
            '@media(min-width:280px) and (max-width:400px)': { px: 3 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: fontSize ? fontSize : '20px' },
              fontWeight: 500,
              mb: 1,
            }}
          >
            {amenities?.title}
          </Typography>
          {propertyNames.map((propertyName) =>
            renderDetail(
              propertyName,
              spacificPost?.[propertyName],
              amenities,
              fontSize,
              fontStyle,
              fontWeight,
            )
          )}
        </Box>
      )}
    </>
  );
};

export default PreviewFeatureAndAmenities;
