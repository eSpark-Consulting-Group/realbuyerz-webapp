'use client';
import React, { useEffect, useState } from 'react';
import CustomNumberInput from './customInputNumber';
import { useDispatch } from 'react-redux';
import {
  handlePostBathrooms,
  handlePostBedrooms,
  handlePostParking,
} from '@/src/redux/slices/previewPostListing/postListingSlice';
import {
  handleRequestBathrooms,
  handleRequestBedrooms,
  handleRequestParking,
} from '@/src/redux/slices/previewPostRequest/postRequestSlice';

const Counter = ({ identifier,formik, name }) => {
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
    dispatch(handleRequestBedrooms(bedroomValue));
    dispatch(handlePostBedrooms(bedroomValue));
  }, [bedroomValue]);

  useEffect(() => {
    dispatch(handleRequestBathrooms(bathroomValue));
    dispatch(handlePostBathrooms(bathroomValue));
  }, [bathroomValue]);

  useEffect(() => {
    dispatch(handleRequestParking(parkingValue));
    dispatch(handlePostParking(parkingValue));
  }, [parkingValue]);

  const handleNumberChange = (newValue) => {
    console.log({newValue,name})
    setNumber(newValue);
    formik.setFieldValue('featuresAndAmenities',{
      ...formik.values.featuresAndAmenities,
      [name]:newValue
    })
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
