import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const PropertyTypes = ({ data }) => {
  const [activePropertyType, setActivePropertyType] = useState(null);

  const handlePropertyType = (item) => {
    // Set the clicked item's typeName as the active property type
    setActivePropertyType((prev) =>
      prev === item?.typeName ? null : item?.typeName
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'start' },
        gap: 2,
        py: 2,
      }}
    >
      {data?.length > 0 ? (
        data.map((item, index) => (
          <Box
            key={index}
            sx={{
              borderRadius: '20px',
              border: `1px solid ${
                activePropertyType === item?.typeName ? '#F4F5F7' : '#E7E7E7'
              }`,
              color: activePropertyType === item?.typeName ? '#FB631C' : '#666',
              backgroundColor:
                activePropertyType === item?.typeName ? '#F4F5F7' : '#fff',
              display: 'flex',
              flexDirection: 'row',
              width: { xs: '80%', sm: '220px', md: '230px', lg: '250px' },
              justifyContent: 'center',
              height: { xs: '50px', md: '55px' },
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={() => handlePropertyType(item)}
          >
            <Box
              component="img"
              sx={{
                width: { xs: 25, sm: 33 },
                height: { xs: 25, sm: 33 },
              }}
              src={
                activePropertyType === item?.typeName
                  ? item?.activeImage || '/images/listing-page/housesell.svg'
                  : item?.image || '/images/listing-page/house.svg'
              }
              alt={item?.typeName || 'property'}
            />
            <Typography
              sx={{
                fontSize: { xs: '15px', md: '18px', lg: '20px' },
                color: 'inherit',
                fontWeight:
                  activePropertyType === item?.typeName ? 'normal' : 'normal',
              }}
            >
              {item?.typeName || 'Unnamed'}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography>No data available</Typography>
      )}
    </Box>
  );
};

export default PropertyTypes;
