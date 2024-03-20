'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';

import { adSumitModal, draftModal } from '@/app/constants/postListing';

import SubmitButton from '@/src/components/PostListing/SaveandSubmit';

import { useSelector } from 'react-redux';

import PreviewModal from '@/src/components/PostListing/preview/PreviewModal';
import PropertyFeatures from '@/src/components/PostListing/PropertyFeature';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProposalModal from '@/src/components/Modal/ProposalModal';
import { POST_REQUEST } from '@/app/constants/postRequest';
import { usePathname } from 'next/navigation';
import PropertyGallery from '@/src/components/PostListing/PropertGallery';

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [Action, setAction] = useState('');
  const agentDrafts = useSelector((state) => state?.postListingAds?.draft);
  const find_ad = agentDrafts?.find((ad) => ad?.property_id == id);

  const [updated, serUpdated] = useState(find_ad || {});

  useEffect(() => {
    serUpdated(find_ad || {});
  }, [find_ad]);

  const currentUser = useSelector((state) => state?.currentUser?.user);
  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = yup.object({
    title: yup.string('Enter title').required('Title is required'),
    description: yup
      .string('Enter description')
      .required('Description is required'),
    purpose: yup.string(''),
    propertyCategory: yup.string(''),
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
    property_id: updated?.property_id || '',
    user_id: currentUser?.id || '',
    status: `${updated?.status || ''}`,
    title: `${updated?.title || ''}`,
    location: `${updated?.location || ''}`,
    description: `${updated?.description || ''}`,
    area: `${updated?.area || ''}`,
    amount: `${updated?.amount || ''}`,
    areaUnit: `${updated?.areaUnit || ''}`,
    amountCurrency: `${updated?.amountCurrency || ''}`,
    city: `${updated?.city || ''}`,
    bedrooms: `${updated?.bedrooms || ''}`,
    connects: `${updated?.connects || ''}`,
    bathrooms: `${updated?.bathrooms || ''}`,
    parking: `${updated?.parking || ''}`,
    purpose: `${updated?.purpose || ''}`,
    propertyCategory: `${updated?.propertyCategory || ''}`,
    propertyType: `${updated?.propertyType || ''}`,
    instalmentAvailable: `${updated?.instalmentAvailable || ''}`,
    readyPossession: `${updated?.readyPossession || ''}`,
    images: updated?.images || [],
    videos: updated?.videos || [],
  };
  console.log(updated, 'updated');
  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values) => {
      values.status = Action;
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
            <BuyersPlatform propertyData={POST_REQUEST} />
            <AdInformation formik={formik} propertyData={POST_REQUEST} />
            <PropertyPurpose
              formik={formik}
              propertyData={POST_REQUEST}
              buyData={POST_REQUEST?.buy}
            />
            <PropertySize formik={formik} />
            <PropertyFeatures formik={formik} />
            <PropertyGallery formik={formik} />
            <SubmitButton
              formik={formik}
              Action={Action}
              updated={updated}
              setAction={setAction}
              handleClickOpen={handleClickOpen}
              handleOpenSuccessModal={handleOpenSuccessModal}
            />
            <PreviewModal
              open={open}
              onClose={handleClose}
              ads={formik?.values}
            />
          </Box>
        </form>
        <ProposalModal
          buttonLabel={`${Action == 'draft' ? draftModal?.buttonLabel : adSumitModal?.buttonLabel}`}
          description={`${Action == 'draft' ? draftModal?.description : adSumitModal?.description}`}
          title={`${Action == 'draft' ? draftModal?.title : adSumitModal?.title}`}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};
export default Page;
