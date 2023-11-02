import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Button,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

import ProposalTabs from './ProposalTabs';

import { PROPOSAL_LISTING } from '@/app/constants/Proposals';

const ProposalFilter = () => {
  const [purposeOptions, setPurposeOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);

  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [dropdown4, setDropdown4] = useState('');

  const [filteredData, setFilteredData] = useState(PROPOSAL_LISTING);

  useEffect(() => {
    const uniquePurposeOptions = Array.from(
      new Set(PROPOSAL_LISTING.map((item) => item.purpose))
    );
    const uniqueCityOptions = Array.from(
      new Set(PROPOSAL_LISTING.map((item) => item.city))
    );
    const uniqueLocationOptions = Array.from(
      new Set(PROPOSAL_LISTING.map((item) => item.location))
    );
    const uniquePropertyTypeOptions = Array.from(
      new Set(PROPOSAL_LISTING.map((item) => item.propertyType))
    );

    setPurposeOptions(uniquePurposeOptions);
    setCityOptions(uniqueCityOptions);
    setLocationOptions(uniqueLocationOptions);
    setPropertyTypeOptions(uniquePropertyTypeOptions);
  }, []);

  const handleDropdownChange = (e, setState) => {
    setState(e.target.value);
    handleFilterChange(e.target.value);
  };

  const handleFilterChange = (value) => {
    console.log('dropdown1', dropdown1);
    const filteredData = PROPOSAL_LISTING.filter(
      (item) =>
        (dropdown1 === '' ||
          item.purpose.toLowerCase() === dropdown1.toLowerCase()) &&
        (dropdown2 === '' ||
          item.city.toLowerCase() === dropdown2.toLowerCase()) &&
        (dropdown3 === '' ||
          item.location.toLowerCase() === dropdown3.toLowerCase()) &&
        (dropdown4 === '' ||
          item.propertyType.toLowerCase() === dropdown4.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const handleClearButtonClick = () => {
    setDropdown1('');
    setDropdown2('');
    setDropdown3('');
    setDropdown4('');

    setFilteredData(PROPOSAL_LISTING);
  };

  const dropdowns = [
    {
      label: 'Purpose',
      state: dropdown1,
      setState: setDropdown1,
      options: purposeOptions,
    },
    {
      label: 'City',
      state: dropdown2,
      setState: setDropdown2,
      options: cityOptions,
    },
    {
      label: 'Location',
      state: dropdown3,
      setState: setDropdown3,
      options: locationOptions,
    },
    {
      label: 'Property Type',
      state: dropdown4,
      setState: setDropdown4,
      options: propertyTypeOptions,
    },
  ];

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        {dropdowns.map((dropdown, index) => (
          <Grid item xs={3} key={index}>
            <Typography variant="subtitle1">{dropdown.label}</Typography>
            <FormControl fullWidth>
              <Select
                value={dropdown.state}
                onChange={(e) => {
                  handleDropdownChange(e, dropdown.setState);
                }}
                placeholder={`Select ${dropdown.label}`}
              >
                <MenuItem value="">{`Select ${dropdown.label}`}</MenuItem>
                {dropdown.options.map((option, optionIndex) => (
                  <MenuItem key={optionIndex} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={handleClearButtonClick}>Clear</Button>
        </Grid>
      </Grid>
      <ProposalTabs filteredData={filteredData} />
    </>
  );
};

export default ProposalFilter;
