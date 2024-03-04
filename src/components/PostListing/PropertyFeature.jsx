import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import { PROPERTY_INFORMATION } from '@/app/constants/postListing';
import PostTitle from './PostTitle';
import PropertyFacilities from './PropertyFacilities';

import AddAmenities from './AddAmenities';

const PropertyFeatures = ({ formik }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (items) => {
    setSelectedItems(items);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px #E4E4E4 solid',
            borderRadius: '10px',
            height: 'auto',
            width: '100%',
            backgroundColor: 'white',
          }}
        >
          <PostTitle
            text={PROPERTY_INFORMATION?.postTitles?.featureamenities}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                mx: 'auto',
                width: 'auto',
                height: '100%',
                gap: 4.5,
                p: 6,
                alignItems: { xs: 'center', sm: 'start' },
                justifyContent: { xs: 'center' },
                flexDirection: 'column',
              }}
            >
              <PropertyFacilities
                propertyInformation={PROPERTY_INFORMATION?.feature}
                formik={formik}
              />
              <AddAmenities
                formik={formik}
                onSelected={handleSelectedItems}
                selectedItems={selectedItems}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyFeatures;
