'use client';
import React from 'react';
import CustomNumberInput from './customInputNumber';

const Counter = ({ formik, name, limit }) => {
  const handleIncrement = () => {
    if (formik.values[name] < limit) {
      const newIncrementValue = formik.values[name] + 1;
      formik.setFieldValue([name], newIncrementValue);
    }
  };

  const handleDecrement = () => {
    if (formik.values[name] > 0) {
      const newDecrementValue = formik.values[name] - 1;
      formik.setFieldValue([name], newDecrementValue);
    }
  };

  return (
    <div>
      <CustomNumberInput
        limit={limit}
        value={formik?.values[name]}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
export default Counter;
