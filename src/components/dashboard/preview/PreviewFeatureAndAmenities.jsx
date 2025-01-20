import React from 'react';
import { Box, Typography } from '@mui/material';
// import { PROPERTY_NAMES } from '@/src/constants/Preview_Data';

const renderDetail = (title, fontStyle, fontWeight, key) => {
  return (
    <Box key={key} sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
      <Typography
        sx={{
          fontSize: fontStyle ? fontStyle : '14px',
          fontWeight: fontWeight ? fontWeight : 500,
        }}
      >
        {title}
      </Typography>
      {/* <Typography
          sx={{
            fontSize: fontStyle ? fontStyle : '14px',
            fontWeight: 500,
            color: '#126FAA',
          }}
        >
          {value && value}
        </Typography> */}
    </Box>
  );
};
const PreviewFeatureAndAmenities = ({
  amenities,
  fontSize,
  fontStyle,
  fontWeight,
  specificPost,
}) => {
  console.log('Amenities from API:', specificPost?.amenity);

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
              fontSize: fontSize || '20px',
              fontWeight: 500,
              mb: 1,
            }}
          >
            {amenities?.title || 'Amenities'}
          </Typography>
          {specificPost?.amenity?.length > 0 ? (
            specificPost.amenity.map((property, index) =>
              renderDetail(
                property?.name || 'No Name',
                fontStyle,
                fontWeight,
                index
              )
            )
          ) : (
            <Typography>No Amenities Available</Typography>
          )}
        </Box>
      )}
    </>
  );
};

export default PreviewFeatureAndAmenities;
