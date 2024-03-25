import React from 'react';
import CustomNumberInput from './customInputNumber';
import getInitialCounterValue from '@/utils/draftProperty';

const Counter = ({ formik, name, limit }) => {
  const initialValue = getInitialCounterValue(formik, name);

  const handleIncrement = () => {
    const value = initialValue;

    if (typeof value === 'number') {
      if (value < limit) {
        const newIncrementValue = value + 1;
        formik.setFieldValue(name, newIncrementValue.toString());
      }
    }
  };

  const handleDecrement = () => {
    if (initialValue > 0) {
      const newDecrementValue = initialValue - 1;
      formik.setFieldValue(name, newDecrementValue.toString());
    }
  };

  return (
    <div>
      <CustomNumberInput
        limit={limit}
        value={initialValue}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
export default Counter;
