import { useDispatch } from 'react-redux';

import CustomNumberInput from './customInputNumber';

import { getInitialCounterValue } from '@/src/utils/draftProperty';

import { handleAdaminities } from '@/src/redux/slices/postlistingAds/postlistingAdsSlice';

import { INCREMENT_DECREMENT } from '@/src/constants/Preview_Data';

const Counter = ({
  formik,
  item,
  getAmenities,
  index,
  setSelectedAmenities,
}) => {
  const { name, limit } = item;

  const dispatch = useDispatch();

  const { ZERO, ONE } = INCREMENT_DECREMENT;

  const initialValue = getInitialCounterValue(getAmenities[index], name);

  const handleIncrement = (itemName) => {
    const value = initialValue;

    if (typeof value === 'number') {
      // if (value < limit) {
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
      formik?.setFieldValue(name, newIncrementValue.toString());

      dispatch(handleAdaminities(updateAmenity));
      setSelectedAmenities(updateAmenity)

      // }
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
      formik?.setFieldValue(name, newDecrementValue.toString());

      dispatch(handleAdaminities(updateAmenity));
      setSelectedAmenities(updateAmenity);
    }

    if (getAmenities[index].count === 1) {
      const filterOut = getAmenities.filter((amen) => amen.name !== name);

      formik?.setFieldValue('amenity', filterOut);

      dispatch(handleAdaminities(filterOut));
      setSelectedAmenities(filterOut);
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
