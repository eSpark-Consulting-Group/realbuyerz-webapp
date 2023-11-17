import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { PROPERTY_INFORMATION } from '@/app/constants/postListing';
import PostTitle from './PostTitle';
import PropertyFacilities from './PropertyFacilities';
import AddAmenities from './AddAmenities';
import SelectedAmenitiesItems from './SelectedAmenitiesItem';

const PropertyFeatures = () => {
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
            height: { xs: '800px', md: '650px' },
            width: '90%',
          }}
        >
          <PostTitle text={PROPERTY_INFORMATION.postTitles.featureamenities} />
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
                gap: { xs: '10px', md: '30px' },
                width: { xs: '100%', md: '700px' },
                padding: { xs: '50px', md: '40px' },
                flexDirection: 'column',
              }}
            >
              <PropertyFacilities
                propertyInformation={PROPERTY_INFORMATION.feature}
              />
              <AddAmenities onSelected={handleSelectedItems} />
              {selectedItems.length > 0 && (
                <Box
                  sx={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6">Selected Amenities:</Typography>
                  <SelectedAmenitiesItems selectedItems={selectedItems} />
                </Box>
              )}{' '}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PropertyFeatures;
