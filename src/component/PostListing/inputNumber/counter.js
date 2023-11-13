'use client';
import React, { useState } from 'react';
import CustomNumberInput from './customInputNumber';

const Counter = () => {
  const [number, setNumber] = useState('0');
  const handleNumberChange = (newValue) => {
    setNumber(newValue);
  };
  const [incrementValue, setIncrementValue] = useState(0);
  const saveIncrement = (value) => {
    setIncrementValue(value);
    console.log('Increment value saved:', value);
  };
  return (
    <div>
      <CustomNumberInput
        value={number}
        onChange={handleNumberChange}
        onSaveIncrement={saveIncrement}
      />
    </div>
  );
};
export default Counter;
