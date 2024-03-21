'use client';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { useFormik } from 'formik';

import BuyersPlatform from '@/src/components/dashboard/BuyersPlatform';
import AdInformation from '@/src/components/dashboard/AdInformation';
import PropertySize from '@/src/components/dashboard/Propertysize';
import PropertyPurpose from '@/src/components/dashboard/PropertyPurpose';
import SubmitButton from '@/src/components/dashboard/SubmitButton';
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import PropertyGallery from '@/src/components/dashboard/PropertGallery';
import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import { postListingValidation } from '@/src/components/Schemas/postListingValidation';
import { findSpecificPost } from '@/utils/dashboardUtils';
import { POST_LISTING } from '@/src/constants/agent/Post_Listing';
import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';

const DraftPropertyForm = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [Action, setAction] = useState('');
  const agentDrafts = useSelector((state) => state?.postListingAds?.draft);
  const find_ad = findSpecificPost(agentDrafts, id);

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
    created_at: new Date(),
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: postListingValidation,
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
            <BuyersPlatform propertyData={POST_LISTING} />
            <AdInformation formik={formik} propertyData={POST_LISTING} />
            <PropertyPurpose
              formik={formik}
              propertyData={POST_LISTING}
              buyData={POST_LISTING?.buy}
            />
            <PropertySize formik={formik} propertyData={POST_LISTING} />
            <PropertyFeatures formik={formik} propertyData={POST_LISTING} />
            <PropertyGallery formik={formik} propertyData={POST_LISTING} />
            <SubmitButton
              formik={formik}
              Action={Action}
              updated={updated}
              propertyData={POST_LISTING}
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
          buttonLabel={`${Action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.buttonLabel : SUBMIT_MODAL_DATA?.buttonLabel}`}
          description={`${Action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.description : SUBMIT_MODAL_DATA?.description}`}
          title={`${Action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.title : SUBMIT_MODAL_DATA?.title}`}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};
export default DraftPropertyForm;
