import { Box, Typography } from '@mui/material';
import React from 'react';

const PreviewFeatureAndAmenities = ({
  bedrooms,
  bathrooms,
  parking,
  other_features,
  amenities,
  fontSize,
  fontStyle,
  fontWeight,
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
          {bedrooms > 0 && (
            <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {amenities?.bedrooms}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {bedrooms && bedrooms}
              </Typography>
            </Box>
          )}
          {bathrooms > 0 && (
            <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {amenities?.bathrooms}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {bathrooms && bathrooms}
              </Typography>
            </Box>
          )}
          {parking > 0 && (
            <Box sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 500,
                }}
              >
                {amenities?.parking}
              </Typography>
              <Typography
                sx={{
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                  color: '#126FAA',
                }}
              >
                {parking && parking}
              </Typography>
            </Box>
          )}
          {other_features?.length > 0 && (
            <Box sx={{ gap: 0.5, pb: 0.4, mt: 1 }}>
              <Typography sx={{ fontSize: '16px', fontWeight: 500, mb: 1 }}>
                {amenities?.other_features}
              </Typography>
              <Typography
                component={'ul'}
                sx={{ listStyleType: 'initial', ml: 1.7 }}
              >
                {other_features.length > 0 &&
                  other_features?.map((feature, index) => (
                    <Typography
                      component={'li'}
                      key={index}
                      sx={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#126FAA',
                      }}
                    >
                      {feature.text}
                    </Typography>
                  ))}
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </>
  );
};

export default PreviewFeatureAndAmenities;
