import { Typography, Box } from '@mui/material';

import { MapProvider } from '../../MapProvider';
import StaticMap from '../../StaticMap';

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
  longitude,
  latitude,
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
          <CommonBox
            fontStyle={fontStyle ? fontStyle : '14px'}
            fontWeight={fontWeight ? fontWeight : 600}
            text1={locationKeys?.purpose}
            text2={purpose}
          />
        )}

        {propertyType && (
          <CommonBox
            fontStyle={fontStyle ? fontStyle : { xs: '12px', md: '14px' }}
            fontWeight={fontWeight ? fontWeight : 600}
            text1={locationKeys?.propertyType}
            text2={propertyType}
            extra={{ mt: { xs: '4px', md: '0px' } }}
          />
        )}

        {city && (
          <CommonBox
            fontStyle={fontStyle ? fontStyle : '14px'}
            fontWeight={fontWeight ? fontWeight : 600}
            text1={locationKeys?.city}
            text2={city}
          />
        )}

        {locationKeys && (
          <>
            <CommonBox
              fontStyle={fontStyle ? fontStyle : '14px'}
              fontWeight={fontWeight ? fontWeight : 600}
              text1={locationKeys?.location}
              text2={location}
            />

            {locationKeys && (
              <Box
                sx={{
                  mt: 2,
                  width: { xs: width ? width : '100%', xl: '522px' },
                }}
              >
                <MapProvider>
                  <StaticMap
                    containerStyle={{ width: '100%', height: '103px' }}
                    location={{
                      lat: parseFloat(latitude),
                      lng: parseFloat(longitude),
                    }}
                  />
                </MapProvider>
              </Box>
            )}
          </>
        )}
      </Box>
    )
  );
};

const CommonBox = ({ fontStyle, fontWeight, text1, text2, extra = {} }) => {
  return (
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
          fontSize: fontStyle,
          fontWeight: fontWeight,
        }}
        variant="body1"
      >
        {text1.charAt(0).toUpperCase() + text1.slice(1)}
      </Typography>

      <Typography
        sx={{
          color: '#126FAA',
          fontSize: fontStyle,
          fontWeight: 500,
          ...extra,
        }}
        variant="body1"
      >
        {text2 ? text2?.charAt(0).toUpperCase() + text2?.slice(1) : ''}
      </Typography>
    </Box>
  );
};

export default Location;
