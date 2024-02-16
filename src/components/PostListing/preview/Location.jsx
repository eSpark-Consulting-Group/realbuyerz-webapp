import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Location = ({ city, purpose, propertyType, location, locationKeys }) => {
  return (
    locationKeys?.title && (
      <Box
        sx={{
          p: 4,
          pb: 5,
          borderBottom: '1px solid #E4E4E4',
          '@media(min-width:280px) and (max-width:400px)': { px: 3 },
        }}
      >
        <Typography
          sx={{
            color: '#000',
            fontSize: '20px',
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
                fontSize: '14px',
                fontWeight: 600,
              }}
              variant="body1"
            >
              {locationKeys?.purpose}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {purpose}
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
                fontSize: '14px',
                fontWeight: 600,
              }}
              variant="body1"
            >
              {locationKeys?.propertyType}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {propertyType}
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
                fontSize: '14px',
                fontWeight: 600,
              }}
              variant="body1"
            >
              {locationKeys?.city}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {city}
            </Typography>
          </Box>
        )}
        {location && (
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
                  fontSize: '14px',
                  fontWeight: 600,
                }}
                variant="body1"
              >
                {locationKeys?.location}
              </Typography>
              <Typography
                sx={{
                  color: '#126FAA',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
                variant="body1"
              >
                {location}
              </Typography>
            </Box>
            {location && (
              <Box sx={{ mt: 2 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.013300667556!2d67.11563618312421!3d24.929177436335465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3366ddcdc4253%3A0x6c0e3a1a85e57629!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1549819379349&z=15"
                  title="Property locationKeys"
                  width="100%"
                  height="150"
                  allowfullscreen=""
                  frameBorder="0"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            )}
          </>
        )}
      </Box>
    )
  );
};

export default Location;
