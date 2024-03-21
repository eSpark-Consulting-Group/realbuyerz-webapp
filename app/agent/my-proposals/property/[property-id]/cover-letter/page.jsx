'use client';
import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';

import BuyersPlatform from '@/src/components/PostListing/BuyersPlatform';
import AdInformation from '@/src/components/PostListing/AdInformation';
import PropertySize from '@/src/components/PostListing/Propertysize';
import PropertyPurpose from '@/src/components/PostListing/PropertyPurpose';

import { proposalSumitModal } from '@/app/constants/postListing';
import SubmitButton from '@/src/components/PostListing/SaveandSubmit';

import { useDispatch, useSelector } from 'react-redux';

import PreviewModal from '@/src/components/PostListing/preview/PreviewModal';
import PropertyFeatures from '@/src/components/PostListing/PropertyFeature';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProposalModal from '@/src/components/Modal/ProposalModal';
import Link from 'next/link';
import PropertyGallery from '@/src/components/PostListing/PropertGallery';
import { usePathname } from 'next/navigation';
import NotFoundSection from '@/src/components/Global/NotFoundSection';
import { addProposal } from '@/src/redux/slices/proposals/proposalsSlice';
import { currentProposal } from '@/src/redux/slices/currentUser/currentUserSlice';
import { COVER_LETTER } from '@/app/constants/coverLetter';
import { toggleCheckAmenityClear } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';
import { findSpecificPost } from '@/utils/specificPost';
import { updateSelectedAmenities } from '@/utils/updateSelectedAmenities';

const Page = () => {
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const dispatch = useDispatch();

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 2];
  const userPostings = useSelector(
    (state) => state?.postRequestAds?.userPostings
  );
  const specificPost = findSpecificPost(userPostings, id);

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
    dispatch(addProposal(values));
    handleOpenSuccessModal();
    dispatch(
      currentProposal({
        property_id: values?.property_id,
        agent_id: values?.agent_id,
      })
    );
    dispatch(toggleCheckAmenityClear());
    setSelectedAmenities([]);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const randomNumber = generateRandomNumber();

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
    property_id: '',
    agent_id: '',
    status: '',
    title: '',
    location: '',
    proposal_id: '',
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
    other_features: [],
    purpose: 'Sell',
    propertyCategory: 'House',
    propertyType: 'Sell',
    instalmentAvailable: false,
    readyPossession: false,
    images: [],
    videos: [],
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values, action) => {
      values.property_id = Number(id);
      values.proposal_id = randomNumber;
      values.agent_id = current_user_id;
      handleSubmit(values);
      action.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  if (
    isNaN(id) ||
    id === undefined ||
    id === null ||
    id === specificPost?.property_id
  ) {
    return (
      <NotFoundSection
        heading={'Sorry!'}
        message={'Property id invalid, Please add correct id.'}
      />
    );
  }

  return (
    <>
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
                gap: '60px',
                margin: { xs: 0, md: '0 auto', lg: 0 },
              }}
            >
              <Link href={'/user/dashboard'}>agent</Link>
              <BuyersPlatform />
              <AdInformation formik={formik} propertyData={COVER_LETTER} />
              <PropertyPurpose formik={formik} propertyData={COVER_LETTER} />
              <PropertySize formik={formik} />
              <PropertyFeatures
                formik={formik}
                setSelectedAmenities={setSelectedAmenities}
                selectedAmenities={selectedAmenities}
                handleSeletedAmenites={handleSeletedAmenites}
              />
              <PropertyGallery formik={formik} />
              <SubmitButton formik={formik} handleClickOpen={handleClickOpen} />
              <PreviewModal
                open={open}
                onClose={handleClose}
                ads={formik?.values}
              />
            </Box>
          </form>
          <ProposalModal
            buttonLabel={proposalSumitModal?.buttonLabel}
            description={proposalSumitModal?.description}
            title={proposalSumitModal?.title}
            open={isOpen}
            onClose={handleCloseSuccessModal}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Page;
