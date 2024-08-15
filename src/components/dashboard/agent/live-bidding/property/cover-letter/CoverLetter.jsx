'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { usePathname } from 'next/navigation';

import BuyersPlatform from '@/src/components/dashboard/BuyersPlatform';
import AdInformation from '@/src/components/dashboard/AdInformation';
import PropertySize from '@/src/components/dashboard/Propertysize';
import PropertyPurpose from '@/src/components/dashboard/PropertyPurpose';

import SubmitButton from '@/src/components/dashboard/SubmitButton';
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import PropertyGallery from '@/src/components/dashboard/PropertGallery';

import { toggleCheckAmenityClear } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import {
  COVER_LETTER,
  COVER_LETTER_VALUES,
} from '@/src/constants/agent/Cover_Letter';
import { coverLetterValidation } from '@/src/components/Schemas/coverLetterValidation';
import { PROPOSAL_SUBMIT_MODAL_DATA } from '@/src/constants/Preview_Data';
import SubmissionModal from '@/src/components/dashboard/modals/ProposalModal';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { useMutation } from '@tanstack/react-query';
import { singleProperty } from '@/src/utils/apis/bidding/singleProperty';

const CoverLetter = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const segments = pathname.split('/');
  const id = segments[segments.length - 2];

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const handleSeletedAmenites = () => {
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };
  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { mutate } = useMutation({
    mutationFn: singleProperty,
    onSuccess: () => {
      handleOpenSuccessModal();
      dispatch(toggleCheckAmenityClear());
      setSelectedAmenities([]);

      formik.resetForm();
    },
  });

  const formik = useFormik({
    initialValues: COVER_LETTER_VALUES,
    validationSchema: coverLetterValidation,
    onSubmit: () => {
      mutate(formData);
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const formData = new FormData();
  formData.append('propertyName', formik?.values.title);
  formData.append('userPropertyId', id);
  formData.append('propertyType', formik?.values.propertyCategory);
  formData.append('propertyDescription', formik?.values.description);
  formData.append('image', formik?.values.images[0]);
  formData.append('propertyPrice', formik?.values.amount);
  formData.append('propertyArea', formik?.values.area);
  formData.append('purpose', formik?.values.purpose);
  formData.append('propertyAddress', 'abc abc');
  formData.append('propertyCity', formik?.values.city);
  formData.append('propertySubTypeId', formik?.values.propertySubTypeId);
  formData.append('amenities', formik?.values.amenities);
  formData.append('longitude', '123.345');
  formData.append('latitude', '989.000');
  formData.append('video', 'https://www.youtube.com/watch?v=EPhMeAWXWCU');

  return (
    <>
      {/* {checkIdValidity(id, specificPost) ? (
        <>
          <NotFoundSection />
        </>
      ) : ( */}
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
              <BuyersPlatform propertyData={COVER_LETTER} fontSize={'20px'} />
              <AdInformation formik={formik} propertyData={COVER_LETTER} />
              <PropertyPurpose formik={formik} propertyData={COVER_LETTER} />
              <PropertySize formik={formik} propertyData={COVER_LETTER} />
              <PropertyFeatures
                formik={formik}
                propertyData={COVER_LETTER}
                setSelectedAmenities={setSelectedAmenities}
                selectedAmenities={selectedAmenities}
                handleSeletedAmenites={handleSeletedAmenites}
              />
              <PropertyGallery formik={formik} propertyData={COVER_LETTER} />
              <SubmitButton
                formik={formik}
                propertyData={COVER_LETTER}
                handleClickOpen={handleClickOpen}
              />
              <PreviewModal
                open={open}
                onClose={handleClose}
                ads={formik?.values}
                formik={formik}
              />
            </Box>
          </form>
          <SubmissionModal
            buttonLabel={PROPOSAL_SUBMIT_MODAL_DATA?.buttonLabel}
            description={PROPOSAL_SUBMIT_MODAL_DATA?.description}
            title={PROPOSAL_SUBMIT_MODAL_DATA?.title}
            open={isOpen}
            onClose={handleCloseSuccessModal}
          />
        </Grid>
      </Grid>
      {/* )} */}
    </>
  );
};
export default CoverLetter;
