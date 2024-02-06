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


const PropertiesFilter = ({data}) => {
    const [listingType, setListingType] = useState('proposals');
    const [selectedData, setSelectedData] = useState(data);
  
    const [purposeOptions, setPurposeOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [locationOptions, setLocationOptions] = useState([]);
    const [propertyTypeOptions, setPropertyTypeOptions] = useState([]);
  
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
      const [filteredProposalsData, setFilteredProposalsData] =
      useState(selectedData);
    useEffect(() => {
      const {
        purposeOptions,
        cityOptions,
        locationOptions,
        propertyTypeOptions,
      } = getUniqueFilteredOptions(selectedData);
      setPurposeOptions(purposeOptions);
      setCityOptions(cityOptions);
      setLocationOptions(locationOptions);
      setPropertyTypeOptions(propertyTypeOptions);
    }, [listingType, selectedData]);
  
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
      <Box fullWidth sx={{ display: 'flex', gap: '10px', pb: '30px' }}>
        <Box width={'95%'} xs={12}>
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
                    sx={{ background: '#fff' }}
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
      {/* <ProposalTabs filteredProposalsData={filteredProposalsData} /> */}
      <PropertiesTabs filteredProposalsData={filteredProposalsData} />
            
    </>
  )
}

export default PropertiesFilter
