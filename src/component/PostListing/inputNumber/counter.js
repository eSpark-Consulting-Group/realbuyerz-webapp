'use client';
import React, { useState } from 'react';
import CustomNumberInput from './customInputNumber';

const Counter = () => {
  const [number, setNumber] = useState('0');
  const handleNumberChange = (newValue) => {
    setNumber(newValue);
  };
  return (
    <div>
      <CustomNumberInput value={number} onChange={handleNumberChange} />
    </div>
  );
};

export default Counter;
