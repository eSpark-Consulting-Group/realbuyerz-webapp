import React from 'react';
import CustomNumberInput from './customInputNumber';
import { getInitialCounterValue } from '@/src/utils/draftProperty';
import { INCREMENT_DECREMENT } from '@/src/constants/Preview_Data';
import { useDispatch } from 'react-redux';
import { handleAdaminities } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

const Counter = ({ formik, item, getAmenities, index }) => {
  const { name, limit } = item;
  const dispatch = useDispatch();
  const { ZERO, ONE } = INCREMENT_DECREMENT;
  const initialValue = getInitialCounterValue(getAmenities[index], name);

  const handleIncrement = (itemName) => {
    const value = initialValue;

    if (typeof value === 'number') {
      if (value < limit) {
        const newIncrementValue = value + ONE;
        const updateFormAmenity = formik?.values?.amenity?.map((val) => {
          if (val.name === itemName) {
            return { ...val, count: newIncrementValue };
          }

          return { ...val };
        });
        const updateAmenity = getAmenities?.map((val) => {
          if (val.name === itemName) {
            return { ...val, count: newIncrementValue };
          }

          return { ...val };
        });

        formik?.setFieldValue('amenity', updateFormAmenity);
        dispatch(handleAdaminities(updateAmenity));

        formik?.setFieldValue(name, newIncrementValue.toString());
      }
    }
  };

  const handleDecrement = (itemName) => {
    if (initialValue > ZERO) {
      const newDecrementValue = initialValue - ONE;
      const updateFormAmenity = formik?.values?.amenity.map((val) => {
        if (val.name === itemName) {
          return { ...val, count: newDecrementValue };
        }

        return { ...val };
      });
      const updateAmenity = getAmenities?.map((val) => {
        if (val.name === itemName) {
          return { ...val, count: newDecrementValue };
        }

        return { ...val };
      });

      formik?.setFieldValue('amenity', updateFormAmenity);
      dispatch(handleAdaminities(updateAmenity));

      formik?.setFieldValue(name, newDecrementValue.toString());
    }
  };

  return (
    <div>
      <CustomNumberInput
        limit={limit}
        value={initialValue}
        handleIncrement={() => handleIncrement(name)}
        handleDecrement={() => handleDecrement(name)}
      />
    </div>
  );
};
export default Counter;
