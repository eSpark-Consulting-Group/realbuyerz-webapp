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

import { createInformationState, handleInputChangeUtil } from '@/utils/addInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import {
  createPropertyStatusState,
  handleButtonClickUtil,
} from '@/utils/propertyStatus';
import { createMediaDataState } from '@/utils/mediaData';
import {
  UploadImages,
  UploadVideos,
} from '@/src/redux/slices/postlisting/postListingSlice';

const PostListing = ({ propertySell }) => {
  const PostListigSelectedData = useSelector((state) => state?.ExamplePage);

  const initializePropertyData = () => {
    const informationState = createInformationState(
      PROPERTY_INFORMATION.addInfo,
      PROPERTY_BUYING_DETAIL.sellingDetails
    );
    const propertyStatusState = createPropertyStatusState({
      propertySell: PROPERTY_INFORMATION.sell,
      propertyBuyingDetails: PROPERTY_BUYING_DETAIL.sellingDetails,
    });
    const uploadMediaData = createMediaDataState({
      propertyInformation: PROPERTY_INFORMATION.uploadButton,
      propertyBuyingDetails: PROPERTY_BUYING_DETAIL.sellingDetails,
    });
    return {
      ...informationState,
      ...propertyStatusState,
      ...uploadMediaData,
    };
  };
  const hehe = initializePropertyData();
  console.log('ttt', hehe);
  const [propertyData, setPropertyData] = useState(initializePropertyData());
  useEffect(() => {
    console.log('heh', propertyData);
  }, [propertyData]);

  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPropertyData((prevData) => handleInputChangeUtil(prevData, name, value));
  };

  const handleInputChangeSell = (index) => {
    handleButtonClickUtil(index, propertyData, setPropertyData, propertySell);
  };
  const handleFileChange = async (event, index) => {
    const files = event.target.files[0];
    const newImage = files?.name;
    const newVideo = URL.createObjectURL(files);
    if (index == 0 && files?.type?.startsWith('image/')) {
      dispatch(UploadImages(newImage));
    } else if (index == 1 && files?.type?.startsWith('video/')) {
      dispatch(UploadVideos(newVideo));
    }
  };
  const handleSubmitAd = () => {
    console.log(
      PostListigSelectedData,
      'PostListigSelectedData on click SubmitAd'
    );
  };
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
            propertyData={propertyData}
            handleInputChange={handleInputChange}
          />
          <PropertyPurpose
            propertyData={propertyData}
            handleInputChangeSell={handleInputChangeSell}
          />
          <PropertySize />
          <PropertyFeatures />
          <PropertyGallery
            handleFileChange={handleFileChange}
            propertyData={propertyData}
          />
          <SubmitButton handleSubmitAd={handleSubmitAd} />
        </Box>
      </Grid>
    </Grid>
  );
};
export default PostListing;
