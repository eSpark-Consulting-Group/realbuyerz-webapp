'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box, Button } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';
import { createInformationState } from '@/utils/addInfo';

import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
} from '@/app/constants/postListing';
import { createPropertyStatusState } from '@/utils/propertyStatus';
import { createMediaDataState } from '@/utils/mediaData';
import SubmitButton from '@/src/components/PostListing/SaveandSubmit';

import { useDispatch, useSelector } from 'react-redux';
import { handleRequestFormId } from '@/src/redux/slices/previewPostRequest/postRequestSlice';
import { handleSumitUserAds } from '@/src/redux/slices/userAds/userAdsSlice';
import PreviewModal from '@/src/components/PostListing/preview/PreviewModal';
import PropertyFeatures from '@/src/components/PostListing/PropertyFeature';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Page = () => {
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

  const [propertyData, setPropertyData] = useState(initializePropertyData());
  const [open, setOpen] = useState(false);
  const { postRequest } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('propertyData', setPropertyData);
  }, [propertyData]);

  const handleSubmitAd = () => {
    const formId = Math.floor(Math.random() * 100) + 1;
    dispatch(handleRequestFormId(formId));
    // dispatch(handleRequestAgentId(formId));
    dispatch(handleSumitUserAds(postRequest));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const validationSchema = yup.object({
    title: yup
      .string('Enter title')
      .required('Title is required'),
    description: yup
      .string('Enter description')
      .required('Description is required'),
    purpose: yup
      .string(''),
    proportyCategory: yup
      .string(''),
    propertyType: yup
      .string(''),
    city: yup
      .string('Enter city')
      .required('City is required'),
    area: yup
      .string('Enter area')
      .required('Area is required'),
    areaUnit: yup
      .string('Enter area unit')
      .required('Area unit is required'),
    amount: yup
      .string('Enter amount')
      .required('Amount is required'),
    amountCurrency: yup
      .string('Enter amount currency')
      .required('Amount currency is required'),
      installmentAvailable: yup
      .boolean(),
    readyPossession: yup
      .boolean(),
      featuresAndAmenities: yup.mixed(),

  });
  const formik = useFormik({
    initialValues: {
      purpose:'Sell',
      proportyCategory:'House',
      propertyType:'Sell',
      instalmentAvailable:false,
      readyPossession:false,
    },
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log({values})
    },
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
            margin: { xs: 0, md: '0 auto', lg: 0 },
          }}
        >
          <BuyersPlatform />
          <AdInformation formik={formik} propertyData={propertyData} />
          <PropertyPurpose formik={formik} propertyData={propertyData} />
          <PropertySize formik={formik} />
          <PropertyFeatures formik={formik} />
          <SubmitButton
            handleSubmitAd={handleSubmitAd}
            handleClickOpen={handleClickOpen}
          />
          <PreviewModal open={open} onClose={handleClose} ads={postRequest} />
        </Box>
        {/* <Button variant='contained' type='submit'>Submit</Button> */}
        </form>
      </Grid>
    </Grid>
  );
};
export default Page;
