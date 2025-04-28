'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import { Grid, Box } from '@mui/material';

import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import FormComponents from '../../../FormComponents';

import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { mapAndCreateFormData } from '@/src/utils/property/propertyUtils';
import { generateRandomNumber } from '@/src/utils/dashboardUtils';
import { transformAmenities } from '@/src/utils/amenitiesUtils';
import {
  addPostListing,
  fetchMyProperties,
  updatePostListing,
} from '@/src/utils/properties';

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
import { keyMapping } from '@/src/constants/agent/Cover_Letter';

const PostListing = ({ property_Id }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const current_user_id = useSelector((state) => state?.currentUser?.user?.id);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const randomNumber = generateRandomNumber();

  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [propertyTypeDetails] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [previousData, setPreviousData] = useState({});
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [filteredUserProperty, setFilteredUserProperty] = useState(null);

    const getModalData = () =>
      action === 'draft' ? DRAFT_SUBMIT_MODAL_DATA : SUBMIT_MODAL_DATA;

  const handleSeletedAmenites = () => {
    formik.setFieldValue('amenity', getAmenities?.length ? getAmenities : []);
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };

  const handleOpenSuccessModal = () => setIsOpen(true);

  const handleCloseSuccessModal = () => {
    setIsOpen(false);
    router.push('/agent/property-management/my-properties');
  };

  const handleSubmit = (values) => {
    if (action === 'draft') {
      dispatch(handleSubmitDraftForAgent(values));
      formData.append('propertyStatus', false);
      mutate(formData);
    } else {
      if (property_Id) {
        updatePostListingApi.mutate({ formData, property_Id });
      } else {
        mutate(formData);
      }
      dispatch(handlePostlistingAd(values));
    }
    dispatch(toggleCheckAmenityClear());
    setSelectedAmenities([]);
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate, isPending } = useMutation({
    mutationFn: addPostListing,
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.error);
      }
      handleOpenSuccessModal();
    },
    onError: (error) => {
      toast.error(error.response.data.message);
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
      if (!data.success) {
        return toast.error(data.error);
      }
      handleOpenSuccessModal();
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
      if (updatePostListingApi.data?.success) {
        action.resetForm();
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  // get single property for update
  const getSingleProperty = useMutation({
    mutationFn: fetchMyProperties,
    onSuccess: (data) => {
      const items = data.response.data;
      const allItems = [...items.active, ...items.trash, ...items.draft];
      const property = allItems.find((item) => item.id === property_Id);

      setFilteredUserProperty(property);

      let singleArr = {};
      Object.keys(items).forEach((val) => {
        if (items[val].length > 0) singleArr = items[val][0];
      });

      const propertyAmenities = singleArr.amenity || [];

      formik.setFieldValue('title', singleArr.propertyName);
      formik.setFieldValue('description', singleArr.propertyDescription);
      formik.setFieldValue('amount', singleArr.propertyPrice);
      formik.setFieldValue('area', singleArr.propertyArea);
      formik.setFieldValue('city', singleArr.propertyCity);
      formik.setFieldValue('propertyCategory', singleArr.propertyType);
      formik.setFieldValue('amenity', JSON.stringify(propertyAmenities));
      formik.setFieldValue('address', singleArr.propertyAddress);

      const propertyImages = singleArr.PropertyData?.[0]?.url || '';
      formik.setFieldValue('images', propertyImages ? [propertyImages] : []);

      setPreviousData(formik.values);
    },
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  useEffect(() => {
    if (filteredUserProperty) {
      setSelectedAmenities(transformAmenities(getAmenities));
      formik.setFieldValue('amenity', JSON.stringify(transformAmenities(getAmenities)));
    }
  }, [filteredUserProperty, getAmenities]);

  const formData = mapAndCreateFormData(
    keyMapping,
    formik.values,
    selectedAmenities,
    {
      video: 'https://www.youtube.com/watch?v=EPhMeAWXWCU',
    }
  );

  const isLoading = updatePostListingApi.isPending || isPending;
  const isSubmitBtnDisable =
    JSON.stringify(formik.values) == JSON.stringify(previousData);

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
            <FormComponents
              propertyData={POST_LISTING}
              formik={formik}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
              handleSeletedAmenites={handleSeletedAmenites}
              getAmenities={getAmenities}
              handleClickOpen={handleClickOpen}
              open={open}
              handleClose={handleClose}
              gallery={true}
              propertyPurposeProps={{
                propertyTypeDetails,
                filteredUserProperty,
              }}
              buttonProps={{
                action,
                setAction,
                handleOpenSuccessModal,
                isLoading,
                isUpdate: property_Id,
                isSubmitBtnDisable,
              }}
            />
          </Box>
        </form>

        <ProposalModal
          buttonLabel={getModalData()?.buttonLabel}
          description={getModalData()?.description}
          title={getModalData()?.title}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};

export default PostListing;