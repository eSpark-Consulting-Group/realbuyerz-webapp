'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';
import { createInformationState } from '@/utils/addInfo';

import {
  PROPERTY_BUYING_DETAIL,
  PROPERTY_INFORMATION,
  adSumitModal,
  draftModal,
} from '@/app/constants/postListing';
import { createPropertyStatusState } from '@/utils/propertyStatus';
import { createMediaDataState } from '@/utils/mediaData';
import SubmitButton from '@/src/components/PostListing/SaveandSubmit';

import { useDispatch, useSelector } from 'react-redux';

import PreviewModal from '@/src/components/PostListing/preview/PreviewModal';
import PropertyFeatures from '@/src/components/PostListing/PropertyFeature';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProposalModal from '@/src/components/Modal/ProposalModal';
import Link from 'next/link';
import PropertyGallery from '@/src/components/PostListing/PropertGallery';
import {
  handlePostlistingAd,
  handleSubmitDraft,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

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

  const [propertyData] = useState(initializePropertyData());
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState('');
  const dispatch = useDispatch();
  const current_user_id = useSelector((state) => state?.currentUser?.user?.id);
  console.log(current_user_id, 'currentUser');
  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleSubmit = (values) => {
    if (action === 'draft') {
      dispatch(handleSubmitDraft(values));
      handleOpenSuccessModal();
    } else if (action === 'submit') {
      dispatch(handlePostlistingAd(values));
      handleOpenSuccessModal();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }

  const randomNumber = generateRandomNumber();

  const validationSchema = yup.object({
    title: yup.string('Enter title').required('Title is required'),
    description: yup
      .string('Enter description')
      .required('Description is required'),
    purpose: yup.string(''),
    proportyCategory: yup.string(''),
    propertyType: yup.string(''),
    city: yup.string('Enter city').required('City is required'),
    area: yup.string('Enter area').required('Area is required'),
    areaUnit: yup.string('Enter area unit').required('Area unit is required'),
    amount: yup.string('Enter amount').required('Amount is required'),
    amountCurrency: yup
      .string('Enter amount currency')
      .required('Amount currency is required'),
    installmentAvailable: yup.boolean(),
    readyPossession: yup.boolean(),
    featuresAndAmenities: yup.mixed(),
    images: yup.array().min(1, 'Image is required'),
    videos: yup.array().min(1, 'Video is required'),
  });

  const initialFormValues = {
    property_id: '',
    user_id: '',
    status: '',
    other_features: [],
    images: [],
    videos: [],
    title: '',
    location: '',
    description: '',
    area: '',
    amount: '',
    areaUnit: '',
    amountCurrency: '',
    city: '',
    bedrooms: 0,
    connects: '',
    bathrooms: 0,
    parking: 0,
    clubhouse: 0,
    swimming_pool: 0,
    fitness_center: 0,
    playground: 0,
    servant_area: 0,
    utility_store: 0,
    rooftop_terrace: 0,
    on_site_maintenance: 0,
    washing_area: 0,
    hour_electricity: 0,
    auto_generator: 0,
    complete_boundary_wall: 0,
    walking_trails: 0,
    pet_friendly_facilities: 0,
    security: 0,
    masjid: 0,
    corridor: 0,
    r_o_plant: 0,
    basketball_courts: 0,
    huge_park: 0,
    concierge_services: 0,
    business_centre: 0,
    purpose: 'Sell',
    proportyCategory: 'House',
    propertyType: 'Sell',
    instalmentAvailable: false,
    readyPossession: false,
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values, action) => {
      values.property_id = randomNumber;
      values.user_id = current_user_id;
      values.status = 'submited';
      handleSubmit(values);
      action.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <form onSubmit={formik?.handleSubmit}>
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
            <Link href={'/agent/live-bidding'}>agent</Link>
            <BuyersPlatform />
            <AdInformation formik={formik} propertyData={propertyData} />
            <PropertyPurpose formik={formik} propertyData={propertyData} />
            <PropertySize formik={formik} />
            <PropertyFeatures formik={formik} />
            <PropertyGallery formik={formik} />
            <SubmitButton
              formik={formik}
              setAction={setAction}
              handleClickOpen={handleClickOpen}
            />
            <PreviewModal
              open={open}
              onClose={handleClose}
              ads={formik?.values}
            />
          </Box>
        </form>
        <ProposalModal
          buttonLabel={`${action == 'draft' ? draftModal?.buttonLabel : adSumitModal?.buttonLabel}`}
          description={`${action == 'draft' ? draftModal?.description : adSumitModal?.description}`}
          title={`${action == 'draft' ? draftModal?.title : adSumitModal?.title}`}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};
export default Page;
