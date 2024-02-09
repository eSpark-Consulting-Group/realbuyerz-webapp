'use client';
import React, { useState } from 'react';
import CustomNumberInput from './customInputNumber';

const Counter = ({ formik, name, limit }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    if (value < limit) {
      const newIncrementValue = value + 1;
      setValue(newIncrementValue);
      formik.setFieldValue([name], newIncrementValue);
    }
  };

  const handleDecrement = () => {
    const numericValue = value;
    if (numericValue > 0) {
      const newDecrementValue = numericValue - 1;
      setValue(newDecrementValue);
    }
  };

  return (
    <div>
      <CustomNumberInput
        limit={limit}
        value={value}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
export default Counter;
