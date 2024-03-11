'use client';
import React, { useState } from 'react';
import {
  Typography,
  Box,
  Checkbox,
  Button,
  FormControlLabel,
} from '@mui/material';

import { PROPERTY_INFORMATION } from '@/src/constants/postListing';
import { useDispatch } from 'react-redux';
import { handleAdaminities } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

const Facilities = ({ facilitiesData, cancel, formik }) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e, image, text, name) => {
    const limit = 20;
    if (e.target.checked) {
      setSelectedAmenities((prevSelected) => [
        ...prevSelected,
        { text: text, image: image, limit: limit, name: name },
      ]);
      dispatch(
        handleAdaminities({
          text: text,
          image: image,
          limit: limit,
          name: name,
        })
      );
    } else {
      setSelectedAmenities((prevSelected) =>
        prevSelected.filter((item) => item !== text)
      );
    }
    formik.setFieldValue('other_features', selectedAmenities);
  };

  const handleSaveButton = () => {
    cancel();
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          py: 3,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          '@media (min-width: 1200px) and (max-width: 1439px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
          width: '100%',
          height: '550px',
          overflowY: 'auto',
        }}
      >
        {facilitiesData?.map((item, index) => (
          <Box
            sx={{
              mx: 'auto',
              width: { xs: '98%', sm: '87%', md: '75%', lg: '80%' },
              '@media (min-width: 1200px) and (max-width: 1439px)': {
                width: '85%',
              },
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              px: 3,
              gap: 0.2,
              mb: { xs: 1.5, md: 2.5 },
            }}
            key={index}
          >
            <FormControlLabel
              sx={{ width: '23px' }}
              control={
                <Checkbox
                  sx={{ color: '#126FAA' }}
                  onChange={(e) => {
                    handleCheckboxChange(
                      e,
                      item?.image,
                      item?.title,
                      item?.name
                    );
                  }}
                />
              }
            />
            <Box
              component={'img'}
              src={item?.image}
              sx={{ width: { xs: 25, md: 30 }, height: { xs: 25, md: 30 } }}
              alt={'amenities'}
            />
            <Typography
              sx={{
                ml: 1.8,
                fontSize: { xs: '15px', sm: '17px', lg: '20px' },
                fontWeight: 400,
                color: '#333',
              }}
            >
              {item?.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '93px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          borderTop: '1px solid #E4E4E4',
          gap: '10px',
          pr: { xs: 0, sm: 7 },
        }}
      >
        <Button
          style={{
            width: '100px',
            height: '39px',
            background: 'white',
            borderRadius: '5px',
            color: '#FB631C',
            border: ' 1px #FB631C solid',
          }}
          onClick={cancel}
        >
          {' '}
          {PROPERTY_INFORMATION?.cancel}
        </Button>
        <Button
          style={{
            width: '100px',
            height: '39px',
            background: '#FB631C',
            borderRadius: '5px',
            color: 'white',
          }}
          onClick={handleSaveButton}
        >
          {PROPERTY_INFORMATION?.save}
        </Button>
      </Box>
    </>
  );
};
export default Facilities;
