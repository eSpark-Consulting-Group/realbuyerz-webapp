'use client';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import { Box, Grid } from '@mui/material';

import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import { postRequestValidation } from '@/src/components/Schemas/postRequestValidation';
import FormComponents from '../../FormComponents';

import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { generateRandomNumber } from '@/src/utils/dashboardUtils';
import { transformAmenities } from '@/src/utils/amenitiesUtils';
import {
  addPostRequest,
  fetchUserProperties,
  updateUserProperty,
} from '@/src/utils/userProperties';

import { handleSubmitDraft } from '@/src/redux/slices/userAds/userAdsSlice';

import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';
import {
  POST_REQUEST,
  POST_REQUEST_VALUES,
} from '@/src/constants/user/Dashboard';

const PostRequest = ({ property_Id }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state?.currentUser?.user);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const randomNumber = generateRandomNumber();

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [previousData] = useState({});
  const [filteredUserProperty, setFilteredUserProperty] = useState(null);
  const [Action, setAction] = useState('');

  const getModalData = () =>
    Action === 'draft' ? DRAFT_SUBMIT_MODAL_DATA : SUBMIT_MODAL_DATA;

  const handleSeletedAmenites = () => {
    formik.setFieldValue('amenity', getAmenities?.length ? getAmenities : []);
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };

  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleSubmit = (values) => {
    const propertyPrice = parseFloat(values.amount);
    if (isNaN(propertyPrice)) return;

    const updatedData = {
      propertyName: values.title,
      propertyPrice: propertyPrice.toString(),
      propertyArea: values.area,
      propertyDescription: values.description,
      propertyCity: values.city,
      propertySubTypeId: values.propertySubTypeId,
      purpose: values.purpose,
      propertyAddress: values.address,
      amenity: selectedAmenities,
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

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    onError: (error) => {
      toast.error('Error updating property:', error.response || error.message);
    },
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...POST_REQUEST_VALUES,
      amenities: [],
      address: '',
      propertyCategory: '',
    },
    validationSchema: postRequestValidation,
    onSubmit: (values, action) => {
      const formattedAmenities = values.amenity.map((amen) => ({
        name: amen.name,
        count: amen.count,
        imageUrl: amen.image,
      }));

      const newVal = {
        ...values,
        property_id: randomNumber,
        user_id: currentUser?.id,
        status: Action,
        amenity: formattedAmenities,
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
      const { active, trash, draft } = data.response.data;
      const allItems = [...active, ...trash, ...draft];
      const property = allItems.find((item) => item.id === property_Id);

      if (property) {
        setFilteredUserProperty(property);
        const amenitiesArr = transformAmenities(property.amenity);
        formik.setValues({
          ...formik.values,
          amenities: amenitiesArr.map((a) => a.id),
          amenitiesArray: amenitiesArr,
          address: property.propertyAddress,
          propertyCategory: property.propertyType.typeName,
          title: property.propertyName,
          description: property.propertyDescription,
          amount: property.propertyPrice,
          area: property.propertyArea,
          city: property.propertyCity,
        });
        setSelectedAmenities(amenitiesArr);
      }
    },
  });

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
              propertyData={POST_REQUEST}
              formik={formik}
              setSelectedAmenities={setSelectedAmenities}
              selectedAmenities={selectedAmenities}
              handleSeletedAmenites={handleSeletedAmenites}
              getAmenities={getAmenities}
              handleClickOpen={handleClickOpen}
              isSubmitBtnDisable={isSubmitBtnDisable}
              open={open}
              handleClose={handleClose}
              gallery={false}
              propertyPurposeProps={{
                buyData: POST_REQUEST?.buy,
                filteredUserProperty,
              }}
              buttonProps={{
                setAction,
                handleOpenSuccessModal,
              }}
            />
          </Box>
        </form>

        <ProposalModal
          buttonLabel={getModalData().buttonLabel}
          description={getModalData().description}
          title={getModalData().title}
          open={isOpen}
          onClose={handleCloseSuccessModal}
        />
      </Grid>
    </Grid>
  );
};
export default PostRequest;
