import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import Link from 'next/link';
import {
  CONSTANTS,
  LISTING_TYPE,
  PROPERTIES_LISTING,
  PROPOSAL_LISTING,
} from '@/app/constants/Proposals';
import ProposalTabs from '../Proposals/ProposalTabs';
import { filterData, getUniqueFilteredOptions } from '@/utils/proposalFilter';
import PropertiesTabs from './PropertiesTabs';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PropertiesFilter = ({ data }) => {
  const [listingType, setListingType] = useState('proposals');
  const [selectedData, setSelectedData] = useState(data || []);

  const [purposeOptions, setPurposeOptions] = useState(['Buy', 'Rent', 'Sell']);
  const [cityOptions, setCityOptions] = useState(['Karachi', 'Islamabad', 'Lahore']);
  const [locationOptions, setLocationOptions] = useState(['Gulshan-e-iqbal', 'Gulshan-e-johar', 'Liaqatabad']);
  const [propertyTypeOptions, setPropertyTypeOptions] = useState(['House', 'Plot', 'Commercial']);


  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  const handleClearButtonClick = () => {
    setSelectedPurpose('');
    setSelectedCity('');
    setSelectedLocation('');
    setSelectedPropertyType('');
    setFilteredProposalsData(selectedData);
  };

  const [filteredProposalsData, setFilteredProposalsData] = useState(selectedData);

    useEffect(() => {
    const {
      purposeOptions,
      cityOptions,
      locationOptions,
      propertyTypeOptions,
    } = getUniqueFilteredOptions(selectedData);
    // setPurposeOptions(purposeOptions);
    // setCityOptions(cityOptions);
    // setLocationOptions(locationOptions);
    // setPropertyTypeOptions(propertyTypeOptions);
  }, [selectedData]);

  const handleDropdownChange = (e, setState) => {
    const selectedValue = e.target.value;
    setState(selectedValue);

    const filteredProposalsData = filterData(
      selectedData,
      selectedPurpose,
      selectedCity,
      selectedLocation,
      selectedPropertyType
    );
    setFilteredProposalsData(filteredProposalsData);
  };
  const dropdowns = [
    {
      label: 'Purpose',
      state: selectedPurpose,
      setState: setSelectedPurpose,
      options: purposeOptions,
    },
    {
      label: 'City',
      state: selectedCity,
      setState: setSelectedCity,
      options: cityOptions,
    },
    {
      label: 'Location',
      state: selectedLocation,
      setState: setSelectedLocation,
      options: locationOptions,
    },
    {
      label: 'Property Type',
      state: selectedPropertyType,
      setState: setSelectedPropertyType,
      options: propertyTypeOptions,
    },
  ];

  return (
    <>
      <Box fullWidth sx={{ display: 'flex', gap: '10px', pb: '13px' }}>
        <Box sx={{
          width: { xs: '1160px', lg: '1160px' },
          maxWidth: '1145px'
        }} xs={12}>
          <Grid container columnSpacing={5} alignItems="center">
            {dropdowns.map((dropdown, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Typography variant="subtitle1"
                  sx={{ fontSize: '15px ', lineHeight: '18.15px', fontWeight: 400, color: '#333333', pb: '10px' }}
                >{dropdown?.label}</Typography>
                <FormControl fullWidth>
                  <Select
                    value={dropdown?.state}
                    displayEmpty
                    onChange={(e) => {
                      handleDropdownChange(e, dropdown?.setState, index);
                    }}
                    IconComponent={dropdown?.state ? KeyboardArrowUpIcon : KeyboardArrowDownIcon}
                    sx={{
                      height: '42px',
                      border: '1px solid #E7E7E7', background: '#fff', fontSize: '15px ', lineHeight: '18.15px', fontWeight: 400, color: '#969696 ',
                      '& .MuiSelect-icon': {
                        color: '#969696',
                        fontSize: '24px',
                        fontWeight: 600
                      },
                      '& .css-1f6u0wk-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': {
                        minHeight: 0
                      }
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
          </Grid>
        </Box>
        <Box
          width={'auto'}
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            verticalAlign: 'center',
          }}
        >
          <Link
            href={CONSTANTS?.resetButton?.link}
            onClick={handleClearButtonClick}
          >
            <Typography
              sx={{
                textDecoration: 'underline',
                color: '#126FAA',
                marginBottom: '15px',
              }}
            >
              {CONSTANTS?.resetButton?.text}
            </Typography>
          </Link>
        </Box>
      </Box>
      <PropertiesTabs filteredProposalsData={filteredProposalsData} />
            
    </>
  )
}

export default PropertiesFilter
