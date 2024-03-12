import React from 'react';
import { Box, Typography } from '@mui/material';

const PreviewFeatureAndAmenities = ({
  bedrooms,
  bathrooms,
  parking,
  amenities,
  fontSize,
  fontStyle,
  fontWeight,
  getSelectedAmenities,
  formik,
  spacificPost,
}) => {
  let filteredProperties = [];

  if (spacificPost) {
    const {
      clubhouse,
      swimming_pool,
      fitness_center,
      playground,
      servant_area,
      utility_store,
      rooftop_terrace,
      on_site_maintenance,
      washing_area,
      hour_electricity,
      auto_generator,
      complete_boundary_wall,
      walking_trails,
      pet_friendly_facilities,
      security,
      masjid,
      corridor,
      r_o_plant,
      basketball_courts,
      huge_park,
      concierge_services,
      business_centre,
    } = spacificPost;

    filteredProperties = Object.entries({
      clubhouse,
      swimming_pool,
      fitness_center,
      playground,
      servant_area,
      utility_store,
      rooftop_terrace,
      on_site_maintenance,
      washing_area,
      hour_electricity,
      auto_generator,
      complete_boundary_wall,
      walking_trails,
      pet_friendly_facilities,
      security,
      masjid,
      corridor,
      r_o_plant,
      basketball_courts,
      huge_park,
      concierge_services,
      business_centre,
    }).filter(([value]) => typeof value === 'number' && value > 0);
  }
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
          {getSelectedAmenities?.map((item, index) => (
            <>
              <Box key={index} sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
                <Typography
                  sx={{
                    fontSize: fontStyle ? fontStyle : '14px',
                    fontWeight: fontWeight ? fontWeight : 500,
                  }}
                >
                  {item?.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: fontStyle ? fontStyle : '14px',
                    fontWeight: 500,
                    color: '#126FAA',
                  }}
                >
                  {formik?.values[item?.name]}
                </Typography>
              </Box>
            </>
          ))}

          {filteredProperties.map(([key, value], index) => {
            return (
              <Box key={index} sx={{ display: 'flex', gap: 0.5, pb: 0.4 }}>
                <Typography
                  sx={{
                    fontSize: fontStyle ? fontStyle : '14px',
                    fontWeight: fontWeight ? fontWeight : 500,
                  }}
                >
                  {key}:
                </Typography>
                <Typography
                  sx={{
                    fontSize: fontStyle ? fontStyle : '14px',
                    fontWeight: 500,
                    color: '#126FAA',
                  }}
                >
                  {value}
                </Typography>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default PreviewFeatureAndAmenities;
