'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  Typography,
  Box,
  Checkbox,
  Button,
  CircularProgress,
} from '@mui/material';

import { fetchAmenities } from '@/src/utils/properties';
import { transformAmenities } from '@/src/utils/amenitiesUtils';

import {
  handleAdaminities,
  toggleCheckAmenityClear,
} from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

const buttonStyle = {
  width: '100px',
  height: '39px',
  borderRadius: '5px',
};

const iconMap = {
  'Swimming Pool': 'swimmingPool.svg',
  Parking: 'parking.svg',
};

const getAmenityIcon = (name) =>
  `/images/add-amenities/${iconMap[name] || 'default-amenity.svg'}`;

const Facilities = ({
  cancel,
  formik,
  setOpen,
  selectedAmenities,
  propertyInformation,
  setSelectedAmenities,
  getAmenities,
}) => {
  const dispatch = useDispatch();

  const [facilitiesData, setFacilitiesData] = useState();

  useEffect(() => {
    mutate();
  }, []);

  useEffect(() => {
    const selectedAmenitiesId = selectedAmenities.map((val) => val?.id);

    formik?.setFieldValue('amenities', selectedAmenitiesId);
    formik?.setFieldValue('amenitiesArray', selectedAmenities);
    formik?.setFieldValue('amenity', transformAmenities(selectedAmenities));
  }, [selectedAmenities]);

  const { mutate, isPending } = useMutation({
    mutationFn: fetchAmenities,
    onSuccess: (data) => {
      const amenities = data.response.data.map((val) => {
        return {
          id: val?.id,
          image: getAmenityIcon(val?.amenetiesName),
          title: val?.amenetiesName,
          name: val?.amenetiesName,
          count: 1,
        };
      });
      setFacilitiesData(amenities);
    },
    onError: (error) => {
      toast.error(error.response.data.messag);
    },
  });

  const handleCheckboxChange = (e, item) => {
    const isChecked = e.target.checked;
    setSelectedAmenities((prev) =>
      isChecked
        ? [...prev, { ...item, label: item.title, text: item.title }]
        : prev.filter((amenity) => amenity.id !== item.id)
    );
  };

  const handleSaveButton = () => {
    if (selectedAmenities.length === 0) {
      dispatch(toggleCheckAmenityClear());
    } else {
      const hasDifference = getAmenities?.some(
        (existing) =>
          !selectedAmenities.some((selected) => selected.id === existing.id)
      );

      if (hasDifference) {
        const includedIds = getAmenities.map((am) => am.id);
        const newItems = selectedAmenities.filter(
          (am) => !includedIds.includes(am.id)
        );
        const keptItems = getAmenities.filter((am) =>
          selectedAmenities.some((sel) => sel.id === am.id)
        );
        const updatedAmenities = [...keptItems, ...newItems];

        formik?.setFieldValue(
          'amenity',
          updatedAmenities.map(({ count, image, name }) => ({
            count,
            image,
            name,
          }))
        );
        dispatch(handleAdaminities(updatedAmenities));
      } else {
        dispatch(handleAdaminities(selectedAmenities));
      }
    }
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          py: 3,
          gridTemplateColumns: {
            xs: !isPending && 'repeat(1, 1fr)',
            sm: !isPending && 'repeat(2, 1fr)',
            md: !isPending && 'repeat(2, 1fr)',
            lg: !isPending && 'repeat(3, 1fr)',
          },
          '@media (min-width: 1200px) and (max-width: 1439px)': {
            gridTemplateColumns: !isPending && 'repeat(3, 1fr)',
          },
          width: '100%',
          height: '550px',
          overflowY: 'auto',
        }}
      >
        {isPending ? (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 3,
              mb: { xs: 1.5, md: 2.5 },
            }}
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          facilitiesData?.map((item, index) => (
            <Box
              sx={{
                mx: 'auto',
                width: { xs: '98%', sm: '87%', md: '75%', lg: '80%' },
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                px: 3,
                gap: 0.2,
                mb: { xs: 1.5, md: 2.5 },
                '@media (min-width: 1200px) and (max-width: 1439px)': {
                  width: '85%',
                },
              }}
              key={index}
            >
              <Checkbox
                sx={{
                  color: '#126FAA',
                  '&.Mui-checked': {
                    color: '#126FAA',
                  },
                }}
                checked={selectedAmenities.some(
                  (amenity) => amenity.id === item.id
                )}
                onChange={(e) => handleCheckboxChange(e, item)}
              />

              <Image
                src={item?.image}
                alt={'amenities'}
                width={30}
                height={30}
                className="amenities-icon"
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
          ))
        )}
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
            ...buttonStyle,
            background: 'white',
            color: '#FB631C',
            border: ' 1px #FB631C solid',
          }}
          onClick={cancel}
        >
          {propertyInformation?.cancel}
        </Button>

        <Button
          style={{
            ...buttonStyle,
            color: 'white',
            background: '#FB631C',
          }}
          onClick={handleSaveButton}
        >
          {propertyInformation?.save}
        </Button>
      </Box>
    </>
  );
};

export default Facilities;
