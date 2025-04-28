'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import { Grid, Box } from '@mui/material';

import FormComponents from '@/src/components/dashboard/FormComponents';
import ProposalModal from '@/src/components/dashboard/modals/ProposalModal';
import { postListingValidation } from '@/src/components/Schemas/postListingValidation';

import { findSpecificPost } from '@/src/utils/dashboardUtils';
import { updateSelectedAmenities } from '@/src/utils/updateSelectedAmenities';
import { getAgentInitialFormValues } from '@/src/utils/draftFormikInitialState';

import {
  DRAFT_SUBMIT_MODAL_DATA,
  SUBMIT_MODAL_DATA,
} from '@/src/constants/Preview_Data';
import { POST_LISTING } from '@/src/constants/agent/Post_Listing';
import { fetchMyProperties } from '@/src/utils/properties';
import { useMutation } from '@tanstack/react-query';

const DraftPropertyForm = ({ property_Id }) => {

  const pathname = usePathname();
  const segments = pathname.split('/');
  const id = segments[segments.length - 1];

  const agentDrafts = useSelector((state) => state?.postListingAds?.draft);
  const currentUser = useSelector((state) => state?.currentUser?.user);
  const getAmenities = useSelector(
    (state) => state?.postListingAds?.addAmenities
  );

  const find_ad = findSpecificPost(agentDrafts, id);

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [Action, setAction] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [updated, setUpdated] = useState(null);
  const [filteredUserProperty, setFilteredUserProperty] = useState(null);

  const getModalData = () =>
    Action === 'draft' ? DRAFT_SUBMIT_MODAL_DATA : SUBMIT_MODAL_DATA;

  useEffect(() => {
    setUpdated(find_ad || {});
  }, [find_ad]);

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

  const handleSeletedAmenites = () => {
    updateSelectedAmenities(getAmenities, setSelectedAmenities);
  };

  const handleOpenSuccessModal = () => setIsOpen(true);
  const handleCloseSuccessModal = () => setIsOpen(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialFormValues = getAgentInitialFormValues(updated, currentUser);

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
                buyData: POST_LISTING?.buy,
                filteredUserProperty
              }}
              buttonProps={{
                action: Action,
                isUpdate: updated,
                setAction,
                handleOpenSuccessModal,
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
export default DraftPropertyForm;
