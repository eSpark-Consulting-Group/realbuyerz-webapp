import React from 'react';
import CustomNumberInput from './customInputNumber';
import { getInitialCounterValue } from '@/utils/draftProperty';

const Counter = ({ formik, name, limit }) => {
  const initialValue = getInitialCounterValue(formik, name);

  const handleIncrement = () => {
    const value = initialValue;
    const one = 1;

    if (typeof value === 'number') {
      if (value < limit) {
        const newIncrementValue = value + one;
        formik.setFieldValue(name, newIncrementValue.toString());
      }
    }
  };

  const handleDecrement = () => {
    const zero = 0;
    if (initialValue > zero) {
      const newDecrementValue = initialValue - zero;
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
