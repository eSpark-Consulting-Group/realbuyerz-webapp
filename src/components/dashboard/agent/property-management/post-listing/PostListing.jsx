'use client';
import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import BuyersPlatform from '@/src/components/dashboard/BuyersPlatform';
import AdInformation from '@/src/components/dashboard/AdInformation';
import PropertySize from '@/src/components/dashboard/Propertysize';
import PropertyPurpose from '@/src/components/dashboard/PropertyPurpose';
import SubmitButton from '@/src/components/dashboard/SubmitButton';
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
// import Link from 'next/link';
import PropertyGallery from '@/src/components/dashboard/PropertGallery';
import {
  handlePostlistingAd,
  toggleCheckAmenityClear,
  handleSubmitDraftForAgent,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import { postListingValidation } from '@/src/components/Schemas/postListingValidation';
import {
  POST_LISTING,
  POST_LISTING_VALUES,
} from '@/src/constants/agent/Post_Listing';
import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { generateRandomNumber } from '@/src/utils/dashboardUtils';
import { useMutation } from '@tanstack/react-query';
import {
  addPostListing,
  fetchMyProperties,
  updatePostListing,
} from '@/src/utils/properties';
import { usePathname } from 'next/navigation';

const PostListing = () => {
  const router = usePathname();
  const property_Id = router.split('/')[4];
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState('');
  const [propertyTypeDetails, setPropertyTypeDetails] = useState({});
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const dispatch = useDispatch();
  const current_user_id = useSelector((state) => state?.currentUser?.user?.id);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const handleSeletedAmenites = () => {
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };
  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleSubmit = (values) => {
    if (action === 'draft') {
      dispatch(handleSubmitDraftForAgent(values));
      handleOpenSuccessModal();
    } else if (action === 'submit') {
      if (property_Id) {
        updatePostListingApi.mutate({ formData, property_Id });
      } else {
        mutate(formData);
      }
      dispatch(handlePostlistingAd(values));
      handleOpenSuccessModal();
    }
    dispatch(toggleCheckAmenityClear());
    setSelectedAmenities([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const randomNumber = generateRandomNumber();

  const { mutate } = useMutation({
    mutationFn: addPostListing,
    onSuccess: (data) => {
      console.log(data, 'data');
    },
  });

  useEffect(() => {
    const params = {
      page: 1,
      pageSize: 10,
      propertyId: property_Id,
    };
    if (property_Id) {
      getSingleProperty.mutate(params);
    }
  }, []);

  const updatePostListingApi = useMutation({
    mutationFn: updatePostListing,
    onSuccess: (data) => {
      console.log(data, 'data');
    },
  });

  const formik = useFormik({
    initialValues: POST_LISTING_VALUES,
    validationSchema: postListingValidation,
    onSubmit: (values, action) => {
      values.property_id = randomNumber;
      values.user_id = current_user_id;
      values.status = 'submited';
      handleSubmit(values);
      console.log(values, 'values');
      action.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  // get single property for update
  const getSingleProperty = useMutation({
    mutationFn: fetchMyProperties,
    onSuccess: (data) => {
      const items = data.response.data.items[0];
      setPropertyTypeDetails(items.propertyType);

      formik.setFieldValue('title', items.propertyName);
      formik.setFieldValue('description', items.propertyDescription);
      formik.setFieldValue('amount', items.propertyPrice);
      formik.setFieldValue('area', items.propertyArea);
      formik.setFieldValue('city', items.propertyCity);
    },
    onError: (error) => {
      // Handle the error
      console.error(error);
    },
  });

  const formData = new FormData();
  formData.append('propertyName', formik?.values.title);
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
              propertyTypeDetails={propertyTypeDetails}
            />
            <PropertySize formik={formik} propertyData={POST_LISTING} />
            <PropertyFeatures
              formik={formik}
              propertyData={POST_LISTING}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
              handleSeletedAmenites={handleSeletedAmenites}
            />
            <PropertyGallery formik={formik} propertyData={POST_LISTING} />
            <SubmitButton
              formik={formik}
              propertyData={POST_LISTING}
              setAction={setAction}
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
        <ProposalModal
          buttonLabel={`${action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.buttonLabel : SUBMIT_MODAL_DATA?.buttonLabel}`}
          description={`${action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.description : SUBMIT_MODAL_DATA?.description}`}
          title={`${action == 'draft' ? DRAFT_SUBMIT_MODAL_DATA?.title : SUBMIT_MODAL_DATA?.title}`}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};
export default PostListing;
