'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyFeatures from '@/src/components/PostListing/PropertyFeature';
import PropertyGallery from '@/src/components/PostListing/PropertGallery';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';
import SubmitButton from '@/src/components/PostListing/SaveandSubmit';
import { createInformationState } from '@/utils/addInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import { createPropertyStatusState } from '@/utils/propertyStatus';
import { createMediaDataState } from '@/utils/mediaData';
import { addId } from '@/src/redux/slices/buyingForm/buyingSellingSlice';
import PreviewModal from '@/src/components/PostListing/preview/PreviewModal';
import { handlePostlistingAd } from '@/src/redux/slices/postlistingAd/postlistingAdSlice';
import Link from 'next/link';

const Page = () => {
  const [open, setOpen] = useState(false);
  const PostListigSelectedData = useSelector((state) => state);
  const postListingAds = useSelector((state) => state?.buyingSellingForm);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  const [propertyData] = useState(initializePropertyData());

  const dispatch = useDispatch();

  const handleSubmitAd = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    dispatch(handlePostlistingAd(PostListigSelectedData?.buyingSellingForm));
    dispatch(addId(randomNumber));
  };

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Box
          sx={{
            width: { xs: '100%', lg: '1200px' },
            '@media (min-width: 1440px) and (max-width: 1568px)': {
              width: '100%',
            },
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            margin: { xs: 0, md: '0 auto', lg: 0 },
          }}
        >
          <Link href={'/user/dashboard'}>click</Link>
          <BuyersPlatform />
          <AdInformation propertyData={propertyData} />
          <PropertyPurpose propertyData={propertyData} />
          <PropertySize />
          <PropertyFeatures />
          <PropertyGallery />
          <SubmitButton
            handleSubmitAd={handleSubmitAd}
            handleClickOpen={handleClickOpen}
          />
          <PreviewModal
            open={open}
            onClose={handleClose}
            ads={postListingAds}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Page;
