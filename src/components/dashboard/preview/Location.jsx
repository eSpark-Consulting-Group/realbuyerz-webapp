import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MapProvider } from '../../MapProvider';
import Map from '../../Map';

const Location = ({
  city,
  purpose,
  propertyType,
  location,
  locationKeys,
  width,
  widthBox,
  p,
  pb,
  pt,
  px,
  fontSize,
  fontStyle,
  fontWeight,
}) => {
  return (
    locationKeys?.title && (
      <Box
        sx={{
          p: p ? p : 4,
          pb: pb ? pb : 5,
          px: px ? px : 'none',
          pt: pt ? pt : 'none',
          borderBottom: '1px solid #E4E4E4',
          width: widthBox ? widthBox : '100%',
        }}
      >
        <Typography
          sx={{
            color: '#000',
            fontSize: fontSize ? fontSize : '20px',
            fontWeight: 500,
            mb: 1,
          }}
        >
          {locationKeys?.title}
        </Typography>
        {purpose && (
          <Box
            sx={{
              display: 'flex',
              gap: 0.8,
              pb: 0.4,
            }}
          >
            <Typography
              sx={{
                color: '#333',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.purpose.charAt(0).toUpperCase() +
                locationKeys?.purpose.slice(1)}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {purpose.charAt(0).toUpperCase() + purpose?.slice(1)}
            </Typography>
          </Box>
        )}
        {propertyType && (
          <Box
            sx={{
              display: 'flex',
              gap: 0.8,
              pb: 0.4,
            }}
          >
            <Typography
              sx={{
                color: '#333',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.propertyType.charAt(0).toUpperCase() +
                locationKeys?.propertyType.slice(1)}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : { xs: '12px', md: '14px' },
                mt: { xs: '4px', md: '0px' },
                fontWeight: 500,
              }}
              variant="body1"
            >
              {propertyType?.subTypeName?.charAt(0).toUpperCase() +
                propertyType?.subTypeName?.slice(1)}
            </Typography>
          </Box>
        )}
        {city && (
          <Box
            sx={{
              display: 'flex',
              gap: 0.8,
              pb: 0.4,
            }}
          >
            <Typography
              sx={{
                color: '#333',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.city.charAt(0).toUpperCase() +
                locationKeys?.city?.slice(1)}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {city.charAt(0).toUpperCase() + city?.slice(1)}
            </Typography>
          </Box>
        )}
        {locationKeys && (
          <>
            <Box
              sx={{
                display: 'flex',
                gap: 0.8,
                pb: 0.4,
              }}
            >
              <Typography
                sx={{
                  color: '#333',
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: fontWeight ? fontWeight : 600,
                }}
                variant="body1"
              >
                {locationKeys?.location?.charAt(0).toUpperCase() +
                  locationKeys?.location.slice(1)}
              </Typography>
              <Typography
                sx={{
                  color: '#126FAA',
                  fontSize: fontStyle ? fontStyle : '14px',
                  fontWeight: 500,
                }}
                variant="body1"
              >
                {location}
              </Typography>
            </Box>
            {locationKeys && (
              <Box
                sx={{
                  mt: 2,
                  width: { xs: width ? width : '100%', xl: '522px' },
                }}
              >
                <MapProvider>
                  <Map containerStyle={{ width: '100%', height: '103px' }} />
                </MapProvider>
              </Box>
            )}
          </>
        )}
      </Box>
    )
  );
};

export default Location;
