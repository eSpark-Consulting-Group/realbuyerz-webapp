'use client';
import React, { useState } from 'react';
import CustomNumberInput from './customInputNumber';

const Counter = ({ identifier }) => {
  const [number, setNumber] = useState('0');
  const handleNumberChange = (newValue) => {
    setNumber(newValue);
  };
  const [incrementValue, setIncrementValue] = useState(0);
  const saveIncrement = (value) => {
    setIncrementValue(value);
    console.log(`Increment value saved for ${identifier}:`, value);
  };
  console.log(incrementValue);
  return (
    <div>
      <CustomNumberInput
        value={number}
        onChange={handleNumberChange}
        onSaveIncrement={saveIncrement}
        identifier={identifier}
      />
    </div>
  );
};
export default Counter;
