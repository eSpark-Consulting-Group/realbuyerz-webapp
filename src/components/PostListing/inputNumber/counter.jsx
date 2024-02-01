'use client';
import React, { useEffect, useState } from 'react';
import CustomNumberInput from './customInputNumber';
import { useDispatch } from 'react-redux';
import {
  addBathrooms,
  addBedrooms,
  addParking,
} from '@/src/redux/slices/previewPostListing/postListingSlice';

const Counter = ({ identifier }) => {
  const [number, setNumber] = useState(0);
  const [incrementValue, setIncrementValue] = useState(0);
  const [bedroomValue, setBedroomValue] = useState(0);
  const [bathroomValue, setBathroomValue] = useState(0);
  const [parkingValue, setParkingValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (identifier == 'facility_0') {
      setBedroomValue(Number(number));
    } else if (identifier == 'facility_1') {
      setBathroomValue(Number(number));
    } else if (identifier == 'facility_2') {
      setParkingValue(Number(number));
    }
  });

  useEffect(() => {
    dispatch(addBedrooms(bedroomValue));
  }, [bedroomValue]);

  useEffect(() => {
    dispatch(addBathrooms(bathroomValue));
  }, [bathroomValue]);

  useEffect(() => {
    dispatch(addParking(parkingValue));
  }, [parkingValue]);

  const handleNumberChange = (newValue) => {
    setNumber(newValue);
  };

  const saveIncrement = (value) => {
    setIncrementValue(value);
  };

  return (
    <div>
      <CustomNumberInput
        value={number}
        incrementValue={incrementValue}
        onChange={handleNumberChange}
        onSaveIncrement={saveIncrement}
        identifier={identifier}
      />
    </div>
  );
};
export default Counter;
