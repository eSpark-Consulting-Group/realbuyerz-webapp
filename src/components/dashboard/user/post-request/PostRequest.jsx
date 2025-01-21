'use client';
import { Box, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdInformation from '@/src/components/dashboard/AdInformation';
import BuyersPlatform from '@/src/components/dashboard/BuyersPlatform';
import PropertyPurpose from '@/src/components/dashboard/PropertyPurpose';
import PropertySize from '@/src/components/dashboard/Propertysize';
import SubmitButton from '@/src/components/dashboard/SubmitButton';
import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import PreviewModal from '@/src/components/dashboard/preview/PreviewModal';
import PropertyFeatures from '@/src/components/dashboard/PropertyFeature';
import { toggleCheckAmenityClear } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';
import {
  handleSubmitDraft,
  handleSumitUserAds,
} from '@/src/redux/slices/userAds/userAdsSlice';

import { postRequestValidation } from '@/src/components/Schemas/postRequestValidation';
import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';
import {
  POST_REQUEST,
  POST_REQUEST_VALUES,
} from '@/src/constants/user/Dashboard';

import { generateRandomNumber } from '@/src/utils/dashboardUtils';
import { useMutation } from '@tanstack/react-query';
import {
  addPostRequest,
  fetchUserProperties,
  updateUserProperty,
} from '@/src/utils/userProperties';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { usePathname } from 'next/navigation';
import { transformAmenities } from '@/src/utils/amenitiesUtils';

const PostRequest = () => {
  const router = usePathname();
  const segments = router.split('/');
  const property_Id = segments[segments.length - 1];

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [previousData, setPreviousData] = useState({});

  const [Action, setAction] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.currentUser?.user);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const amenities = transformAmenities(getAmenities);

  const handleSeletedAmenites = () => {
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };

  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleSubmit = (values) => {
    if (Action === 'draft') {
      dispatch(handleSubmitDraft(values));
      obj.propertyStatus = false;
      mutate(obj);
    } else if (Action === 'submit') {
      if (segments.includes('update-request')) {
        obj.propertyStatus = true;
        const object = {};
        formData.forEach((value, key) => (object[key] = value));
        updateUserPropertyApi.mutate({ object, property_Id });
      } else {
        mutate(obj);
      }
      dispatch(handleSumitUserAds(values));
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

  useEffect(() => {
    const params = {
      propertyId: property_Id,
    };
    if (property_Id) {
      getSingleUserProperty.mutate(params);
    }
  }, []);

  const updateUserPropertyApi = useMutation({
    mutationFn: updateUserProperty,
    onSuccess: (data) => {
      console.log(data, 'data');
    },
  });

  const formik = useFormik({
    initialValues: {
      ...POST_REQUEST_VALUES,
      address: '',
    },
    validationSchema: postRequestValidation,
    onSubmit: (values, action) => {
      const newVal = {
        ...values,
        property_id: randomNumber,
        user_id: currentUser?.id,
        status: Action,
      };
      handleSubmit(newVal);
      action.resetForm();
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const obj = {
    propertyName: formik.values.title,
    propertyType: formik.values.propertyCategory,
    propertyDescription: formik.values.description,
    propertyPrice: formik.values.amount,
    propertyArea: formik.values.area,
    purpose: formik.values.purpose,
    propertyAddress: formik?.values.address,
    propertyCity: formik.values.city,
    propertySubTypeId: formik?.values?.propertySubTypeId,
    longitude: formik.values.longitude,
    latitude: formik.values.latitude,
    amenity: formik.values.amenitiesArray,
  };

  const { mutate } = useMutation({
    mutationFn: addPostRequest,
    onSuccess: (data) => {
      console.log(data, 'data');
      handleOpenSuccessModal();
    },
  });

  const getSingleUserProperty = useMutation({
    mutationFn: fetchUserProperties,
    onSuccess: (data) => {
      const items = data.response.data;
      let singleArr = [];
      Object.keys(items).forEach((val) => {
        if (items[val].length > 0) {
          singleArr = items[val][0];
        }
      });
      formik.setFieldValue('title', singleArr.propertyName);
      formik.setFieldValue('description', singleArr.propertyDescription);
      formik.setFieldValue('amount', singleArr.propertyPrice);
      formik.setFieldValue('area', singleArr.propertyArea);
      formik.setFieldValue('city', singleArr.propertyCity);
      formik.setFieldValue('amenity', JSON.stringify(amenities));

      setPreviousData(formik.values);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const formData = new FormData();
  formData.append('propertyName', formik?.values.title);
  formData.append('propertyType', formik?.values.propertyCategory);
  formData.append('propertyDescription', formik?.values.description);
  formData.append('propertyPrice', formik?.values.amount);
  formData.append('propertyArea', formik?.values.area);
  formData.append('purpose', formik?.values.purpose);
  formData.append('propertyAddress', formik?.values.address);
  formData.append('propertyCity', formik?.values.city);
  formData.append('propertySubTypeId', formik?.values.propertySubTypeId);
  formData.append('amenity', JSON.stringify(amenities));
  formData.append('longitude', formik?.values.longitude);
  formData.append('latitude', formik?.values.latitude);

  const isSubmitBtnDisable =
    JSON.stringify(formik.values) == JSON.stringify(previousData);

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <Link href="/agent/live-bidding">agent</Link> */}
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
            <PropertySize formik={formik} propertyData={POST_REQUEST} />
            <PropertyFeatures
              formik={formik}
              propertyData={POST_REQUEST}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
              handleSeletedAmenites={handleSeletedAmenites}
            />
            <SubmitButton
              formik={formik}
              setAction={setAction}
              propertyData={POST_REQUEST}
              isSubmitBtnDisable={isSubmitBtnDisable}
              handleClickOpen={handleClickOpen}
              handleOpenSuccessModal={handleOpenSuccessModal}
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
export default PostRequest;
