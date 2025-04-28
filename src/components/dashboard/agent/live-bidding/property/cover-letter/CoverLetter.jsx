'use client';
import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import { Grid, Box } from '@mui/material';

import { coverLetterValidation } from '@/src/components/Schemas/coverLetterValidation';
import SubmissionModal from '@/src/components/dashboard/modals/ProposalModal';
import FormComponents from '@/src/components/dashboard/FormComponents';

import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { fetchMyProperties, updatePostListing } from '@/src/utils/properties';
import { mapAndCreateFormData } from '@/src/utils/property/propertyUtils';
import { singleProperty } from '@/src/utils/apis/bidding/singleProperty';

import { toggleCheckAmenityClear } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import {
  COVER_LETTER,
  COVER_LETTER_VALUES,
  keyMapping,
} from '@/src/constants/agent/Cover_Letter';
import { PROPOSAL_SUBMIT_MODAL_DATA } from '@/src/constants/Preview_Data';

const CoverLetter = () => {
  const proposals = 'my-proposals';

  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useDispatch();

  const segments = pathname.split('/');
  const id = segments[segments.length - 2];

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [propertyTypeDetails, setPropertyTypeDetails] = useState({});
  const [previousData, setPreviousData] = useState({});

  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const handleSeletedAmenites = () => {
    formik.setFieldValue('amenity', getAmenities?.length ? getAmenities : []);
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };
  
  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const params = {
      page: 1,
      pageSize: 10,
      propertyId: id,
      proposals: true,
    };
    if (id) {
      getSingleProperty.mutate(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
      if (pathname.includes(proposals)) {
        updatePostListingApi.mutate({ formData, property_Id: id });
      } else {
        mutate(formData);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const updatePostListingApi = useMutation({
    mutationFn: updatePostListing,
    onSuccess: () => {
      router.push('/agent/my-proposals');
    },
  });

  // get single property for update
  const getSingleProperty = useMutation({
    mutationFn: fetchMyProperties,
    onSuccess: (data) => {
      const items = data.response.data;
      let singleArr = [];
      Object.keys(items).forEach((val) => {
        if (items[val].length > 0) {
          singleArr = items[val][0];
        }
      });
      setPropertyTypeDetails(singleArr.propertyType);

      formik.setFieldValue('title', singleArr.propertyName);
      formik.setFieldValue('description', singleArr.propertyDescription);
      formik.setFieldValue('amount', singleArr.propertyPrice);
      formik.setFieldValue('area', singleArr.propertyArea);
      formik.setFieldValue('city', singleArr.propertyCity);

      setPreviousData(formik.values);
    },
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const formData = mapAndCreateFormData(
    keyMapping,
    formik.values,
    selectedAmenities,
    {
      userPropertyId: id,
      video: 'https://www.youtube.com/watch?v=EPhMeAWXWCU',
    }
  );

  const isSubmitBtnDisable =
    JSON.stringify(formik.values) == JSON.stringify(previousData);

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
                gap: '40px',
                margin: { xs: 0, md: '0 auto', lg: 0 },
              }}
            >
              <FormComponents
                propertyData={COVER_LETTER}
                formik={formik}
                setSelectedAmenities={setSelectedAmenities}
                selectedAmenities={selectedAmenities}
                handleSeletedAmenites={handleSeletedAmenites}
                getAmenities={getAmenities}
                handleClickOpen={handleClickOpen}
                isSubmitBtnDisable={isSubmitBtnDisable}
                open={open}
                handleClose={handleClose}
                gallery={true}
                buyersProps={{
                  fontSize: '20px',
                }}
                propertyPurposeProps={{
                  propertyTypeDetails,
                }}
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
    </>
  );
};
export default CoverLetter;
