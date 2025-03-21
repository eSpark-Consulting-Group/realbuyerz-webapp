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
// import { toggleCheckAmenityClear } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';
import {
  handleSubmitDraft,
  // handleSumitUserAds,
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
import { transformAmenities } from '@/src/utils/amenitiesUtils';

const PostRequest = ({ property_Id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [previousData, setPreviousData] = useState({});
  const [filteredUserProperty, setFilteredUserProperty] = useState(null);

  const [Action, setAction] = useState('');

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.currentUser?.user);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const handleSeletedAmenites = () => {
    if(getAmenities?.length === 0){
      formik?.setFieldValue('amenity', []);
    } else {
      formik?.setFieldValue('amenity', getAmenities.map(am => { return { count: am.count, image: am.image, name: am.name } }));
    }

    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };

  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleSubmit = (values) => {
    const propertyPrice = parseFloat(values.amount);
    if (isNaN(propertyPrice)) {
      console.error('Invalid property price:', values.amount);
      return;
    }

    const updatedData = {
      propertyName: values.title,
      propertyPrice: propertyPrice.toString(),
      propertyArea: values.area,
      propertyDescription: values.description,
      propertyCity: values.city,
      propertySubTypeId: values.propertySubTypeId,
      purpose: values.purpose,
      propertyAddress: values.address,
      amenity: values.amenities,
      longitude: values.longitude,
      latitude: values.latitude,
    };

    if (Action === 'submit') {
      if (property_Id) {
        updatedData.propertyStatus = true;
        updateUserPropertyApi.mutate({ object: updatedData, property_Id });
      } else {
        mutate(updatedData);
      }
    } else if (Action === 'draft') {
      dispatch(handleSubmitDraft(values));
      updatedData.propertyStatus = false;
      mutate(updatedData);
    }
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
    onSuccess: () => {},
    onError: (error) => {
      console.error(
        'Error updating property:',
        error.response || error.message
      );
    },
  });

  // const initialValues = { // Todo Faria pls check why this code is defined here if not used
  //   ...POST_REQUEST_VALUES,
  //   amount: Number(POST_REQUEST_VALUES.amount) || 0,
  // };

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

  const { mutate } = useMutation({
    mutationFn: addPostRequest,
    onSuccess: () => {
      handleOpenSuccessModal();
    },
  });

  const getSingleUserProperty = useMutation({
    mutationFn: fetchUserProperties,
    onSuccess: (data) => {
      const items = data.response.data;
      const { active, trash, draft } = data.response.data;
      const allItems = [...active, ...trash, ...draft];
      const property = allItems.find((item) => item.id === property_Id);
      setFilteredUserProperty(property);
      let singleArr = [];
      Object.keys(items).forEach((val) => {
        if (items[val].length > 0) {
          singleArr = items[val][0];
        }
      });

      const amenitiesArr = transformAmenities(singleArr.amenities);
      formik.setFieldValue('title', singleArr.propertyName);
      formik.setFieldValue('description', singleArr.propertyDescription);
      formik.setFieldValue('amount', singleArr.propertyPrice);
      formik.setFieldValue('area', singleArr.propertyArea);
      formik.setFieldValue('city', singleArr.propertyCity);
      formik.setFieldValue('amenities', amenitiesArr);

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
  formData.append('amenity', JSON.stringify(formik?.values?.amenity));
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
              filteredUserProperty={filteredUserProperty}
            />
            <PropertySize formik={formik} propertyData={POST_REQUEST} />
            <PropertyFeatures
              formik={formik}
              propertyData={POST_REQUEST}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
              handleSeletedAmenites={handleSeletedAmenites}
              getAmenities={getAmenities}
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
