'use client';
import React from 'react';
import CustomNumberInput from './customInputNumber';
import { useDispatch } from 'react-redux';
import {
  addBathrooms,
  addBedrooms,
  addParking,
} from '@/src/redux/slices/buyingForm/buyingSellingSlice';

const Counter = ({ identifier }) => {
  const [number, setNumber] = React.useState(0);
  const [incrementValue, setIncrementValue] = React.useState(0);
  const [bedroomValue, setBedroomValue] = React.useState(0);
  const [bathroomValue, setBathroomValue] = React.useState(0);
  const [parkingValue, setParkingValue] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (identifier == 'facility_0') {
      setBedroomValue(Number(number));
    } else if (identifier == 'facility_1') {
      setBathroomValue(Number(number));
    } else if (identifier == 'facility_2') {
      setParkingValue(Number(number));
    }
  });

  React.useEffect(() => {
    dispatch(addBedrooms(bedroomValue));
  }, [bedroomValue]);

  React.useEffect(() => {
    dispatch(addBathrooms(bathroomValue));
  }, [bathroomValue]);

  React.useEffect(() => {
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
