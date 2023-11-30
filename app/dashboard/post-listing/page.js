'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyFeatures from '@/src/components/PostListing/PropertyFeature';
import PropertyGallery from '@/src/components/PostListing/PropertGallery';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';
import SubmitButton from '@/src/components/PostListing/SaveandSubmit';
import { savePropertyData } from '@/src/redux/slices/postlisting/postListingSlice';
import {
  createInformationState,
  createPropertyStatusState,
  handleClickUtil,
  handleInputChangeUtil,
} from '@/utils/addInfo';
import { useDispatch } from 'react-redux';
import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import { handleButtonClickUtil } from '@/utils/propertyStatus';

const PostListing = () => {
  // const [propertyData, setPropertyData] = useState(
  //   createInformationState({
  //     propertyInformation: PROPERTY_INFORMATION.addInfo,
  //     propertyBuyingDetails: PROPERTY_BUYING_DETAIL.sellingDetails,
  //   })
  // );
  // const dispatch = useDispatch();
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setPropertyData((prevData) => handleInputChangeUtil(prevData, name, value));
  // };
  // const handleInputChangeSell = (index) => {
  //   handleButtonClickUtil(index, propertyData, setPropertyData);
  // };

  // const handleClick = () => {
  //   handleClickUtil(dispatch, propertyData);
  //   console.log('data', propertyData);
  // };
  return (
    <Grid
      container
      sx={{ paddingTop: '30px', background: '#F4F5F7', paddingBottom: '30px' }}
    >
      <Grid item xs={12} md={12}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            background: 'white',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            margin: { xs: '0', md: '0 auto' },
          }}
        >
          <BuyersPlatform />
          <AdInformation
          // propertyData={propertyData}
          // handleInputChange={handleInputChange}
          />
          <PropertyPurpose
          // propertyData={propertyData}
          // // handleClick={handleClick}
          // handleInputChangeSell={handleInputChangeSell}
          />
          <PropertySize />
          <PropertyFeatures />
          <PropertyGallery />
          <SubmitButton />
        </Box>
      </Grid>
    </Grid>
  );
};
export default PostListing;
