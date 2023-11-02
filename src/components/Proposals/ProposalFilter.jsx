import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, MenuItem, FormControl, Select } from '@mui/material';
import ProposalTabs from './ProposalTabs';
import { PROPERTIES_LISTING, PROPOSAL_LISTING } from '@/app/constants/Proposals';
import { filterData, getUniqueOptions } from '@/utils/proposalFilter';

const ProposalFilter = () => {
  const [listingType, setListingType] = useState('proposal');
  const [data, setData] = useState(PROPOSAL_LISTING);

  const [purposeOptions, setPurposeOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);

  const [Purpose, setPurpose] = useState('');
  const [City, setCity] = useState('');
  const [Location, setLocation] = useState('');
  const [PropertyType, setPropertyType] = useState('');


  const handleListingTypeChange = (e) => {
    const selectedListValue = e.target.value;
    setListingType(selectedListValue);
    setData(selectedListValue === 'proposal' ? PROPOSAL_LISTING : PROPERTIES_LISTING);
    console.log('selectedListValue', selectedListValue);
  };


  console.log('listingType', listingType);
  console.log(data);

  const [filteredData, setFilteredData] = useState(data);
  useEffect(() => {

    const { purposeOptions, cityOptions, locationOptions, propertyTypeOptions } = getUniqueOptions(data);
    setPurposeOptions(purposeOptions);
    setCityOptions(cityOptions);
    setLocationOptions(locationOptions);
    setPropertyTypeOptions(propertyTypeOptions);
  }, [listingType, data]);

  const handleDropdownChange = (e, setState, dropdownIndex) => {
    const selectedValue = e.target.value;
    setState(selectedValue);

    const filteredData = filterData(data, Purpose, City, Location, PropertyType);
    setFilteredData(filteredData);
  };

  const handleClearButtonClick = () => {
    setPurpose('');
    setCity('');
    setLocation('');
    setPropertyType('');
    setFilteredData(data);
  };

  const dropdowns = [
    {
      label: 'Purpose',
      state: Purpose,
      setState: setPurpose,
      options: purposeOptions,
    },
    {
      label: 'City',
      state: City,
      setState: setCity,
      options: cityOptions,
    },
    {
      label: 'Location',
      state: Location,
      setState: setLocation,
      options: locationOptions,
    },
    {
      label: 'Property Type',
      state: PropertyType,
      setState: setPropertyType,
      options: propertyTypeOptions,
    },
  ];

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        {dropdowns.map((dropdown, index) => (
          <Grid item xs={3} key={index}>
            <Typography variant="subtitle1">{dropdown?.label}</Typography>
            <FormControl fullWidth>
              <Select
                value={dropdown?.state}
                displayEmpty
                onChange={(e) => {
                  handleDropdownChange(e, dropdown?.setState, index);
                }}
                placeholder={`Select ${dropdown?.label}`}
              >
                <MenuItem value="">{`Select ${dropdown?.label}`}</MenuItem>
                {dropdown?.options?.map((option, optionIndex) => (
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
        <Grid item xs={12}>
          <FormControl fullWidth >
            <Select
              value={listingType}
              onChange={handleListingTypeChange}
            >
              <MenuItem value="proposal">Proposal</MenuItem>
              <MenuItem value="properties">Properties</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid >
      <ProposalTabs filteredData={filteredData} />
    </>
  );
};

export default ProposalFilter;
