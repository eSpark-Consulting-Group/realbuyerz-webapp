import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

const Location = ({
  city,
  purpose,
  propertyType,
  location,
  locationKeys,
  width,
  widthBox,
  className,
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
function DynamicTabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedChip, setSelectedChip] = useState(null);
  console.log(selectedTab, tabs);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedChip(null);
  };
  console.log(handleTabChange);
  const handleChipClick = (chip) => {
    setSelectedChip(selectedChip === chip ? null : chip);
  };

  const Location = ({
    city,
    purpose,
    propertyType,
    location,
    locationKeys,
    width,
    widthBox,
    className,
    p,
    pb,
    pt,
    px,
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
              fontSize: '20px',
              fontWeight: 500,
              mb: 1,
            }}
          >
<<<<<<< HEAD
            <Typography
              sx={{
                color: '#333',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.purpose}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : '14px',
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
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.propertyType}
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
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: fontWeight ? fontWeight : 600,
              }}
              variant="body1"
            >
              {locationKeys?.city}
            </Typography>
            <Typography
              sx={{
                color: '#126FAA',
                fontSize: fontStyle ? fontStyle : '14px',
                fontWeight: 500,
              }}
              variant="body1"
            >
              {city}
            </Typography>
          </Box>
        )}
        {locationKeys && (
          <>
=======
            {locationKeys?.title}
          </Typography>
          {purpose && (
>>>>>>> parent of 086704d (Revert "Merge pull request #126 from eSpark-Consultants/dev-hasni-new")
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
                {locationKeys?.purpose}
              </Typography>
              <Typography
                sx={{
                  color: '#126FAA',
                  fontSize: fontStyle ? fontStyle : '14px',
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
                  fontSize: { xs: '12px', md: '14px' },
                  mt: { xs: '4px', md: '0px' },
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
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                  onClick={() => handleChipClick(location)} // Fixed usage of location instead of chip
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
              {locationKeys && (
                <Box sx={{ mt: 2 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.013300667556!2d67.11563618312421!3d24.929177436335465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3366ddcdc4253%3A0x6c0e3a1a85e57629!2sNED%20University%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1549819379349&z=15"
                    title="Property locationKeys"
                    width={width ? width : '100%'}
                    height="150"
                    allowfullscreen=""
                    frameBorder="0"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={className}
                  ></iframe>
                </Box>
              )}
            </>
          )}
        </Box>
      )
    );
  };
  console.log(Location);
  function TabPanel(props) {
    const { children, value, index } = props;

    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <div>{children}</div>}
      </div>
    );
  }
  console.log(TabPanel);

  return null; // You need to return something from the component
}

export default DynamicTabs;
