import { usePathname } from 'next/navigation';

import { useDispatch } from 'react-redux';

import { Box, Button, CircularProgress, Grid } from '@mui/material';

import HideUnhideButton from './ads-form-components/HideButton';

import {
  handleSubmitDraft,
  handleSumitUserAds,
} from '@/src/redux/slices/userAds/userAdsSlice';
import {
  handlePostlistingAd,
  handleSubmitDraftForAgent,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

const style = {
  borderRadius: '10px',
  border: '1px solid #FB631C',
  height: '45px',
  flexShrink: 0,
  fontWeight: 400,
  fontSize: { xs: '13px', sm: '15px' },
  '@media(min-width: 280px) and (max-width:400px)': {
    width: '100%',
  },
};

const SubmitButton = ({
  handleClickOpen,
  formik,
  setAction,
  propertyData,
  handleOpenSuccessModal,
  isLoading,
  isUpdate,
  action,
  isSubmitBtnDisable,
}) => {
  const pathName = usePathname();

  const dispatch = useDispatch();

  const cover = '/cover-letter';
  const all_posting = '/all-postings';
  const my_properties = '/my-properties';
  const property_management = '/property-management';

  const handleAdAction = (actionType) => {
    if (!pathName?.includes(cover)) {
      setAction(actionType);
    }

    const values = formik?.values;

    if (pathName?.includes(all_posting)) {
      if (actionType === 'draft') {
        dispatch(handleSubmitDraft(values));
      } else if (actionType === 'submit') {
        dispatch(handleSumitUserAds(values));
      }
      handleOpenSuccessModal();
    }

    if (pathName?.includes(my_properties)) {
      if (actionType === 'draft') {
        dispatch(handleSubmitDraftForAgent(values));
      } else if (actionType === 'submit') {
        dispatch(handlePostlistingAd(values));
      }
      handleOpenSuccessModal();
    }

    formik?.handleSubmit();
  };

  const handleDraftSubmit = () => handleAdAction('draft');
  const handleSubmitSubmit = () => handleAdAction('submit');

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            '@media(min-width: 280px) and (max-width:400px)': {
              flexDirection: 'column',
            },
            alignItems: 'center',
            gap: '10px',
            width: '90%',
          }}
        >
          <HideUnhideButton handleClickOpen={handleClickOpen} />

          {pathName?.includes(cover) ? null : (
            <Button
              name="submit"
              value="submit"
              variant="outlined"
              sx={{
                ...style,
                fontSize: { xs: '13px', sm: '15px' },
                width: { xs: '40%', sm: '150px' },
                background: '#FFF !important',
                color: '#FB631C !important',
                '&:hover': {
                  color: '#fff !important',
                  backgroundColor: '#FB631C !important',
                },
                textTransform: 'capitalize',
              }}
              onClick={handleDraftSubmit}
            >
              {isLoading
                ? action == 'draft' && (
                    <CircularProgress size={24} color="inherit" />
                  )
                : propertyData?.saveDraft?.toLowerCase()}
            </Button>
          )}

          <Button
            name="draft"
            disabled={
              (pathName?.includes(property_management) && isLoading) ||
              isSubmitBtnDisable
            }
            value="draft"
            variant="primary"
            sx={{
              ...style,
              width: { xs: '40%', sm: '200px' },
              color: '#fff !important',
              background: '#FB631C',
              '&:hover': {
                color: '#FB631C',
                backgroundColor: '#fff',
              },
            }}
            onClick={handleSubmitSubmit}
          >
            {pathName?.includes(property_management)
              ? isLoading
                ? action == 'submit' && (
                    <CircularProgress size={24} color="inherit" />
                  )
                : isUpdate
                  ? 'Update Ad'
                  : propertyData?.submitAd
              : pathName?.includes(cover)
                ? propertyData?.SubmitProposal
                : propertyData?.submitAd}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SubmitButton;
