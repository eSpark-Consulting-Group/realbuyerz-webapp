import { Box, Typography } from '@mui/material';

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
    </Box>
  );
};
const PreviewFeatureAndAmenities = ({
  amenitiesArray = [],
  fontSize,
  fontStyle,
  fontWeight,
}) => {
  return (
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
        Amenities
      </Typography>

      {amenitiesArray.length > 0 ? (
        amenitiesArray.map((amenity, index) =>
          renderDetail(amenity?.name || 'No Name', fontStyle, fontWeight, index)
        )
      ) : (
        <Typography>No Amenities Available</Typography>
      )}
    </Box>
  );
};

export default PreviewFeatureAndAmenities;
