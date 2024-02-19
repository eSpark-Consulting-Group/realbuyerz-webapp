'use client';
import ProposalCard from '@/src/components/Proposal/ProposalCard';
import { a11yProps } from '@/src/utils/tabs';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Page = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('All');
  const { userPostings, connectedProposals, draft, trash } = useSelector(
    (state) => state?.postRequestAds
  );

  const tabs = [
    {
      label: 'All',
      prop: a11yProps(0),
    },
    {
      label: 'Active',
      prop: a11yProps(1),
    },
    {
      label: 'Draft',
      prop: a11yProps(2),
    },
    {
      label: 'Trash',
      prop: a11yProps(3),
    },
  ];
  const [filterObject, setfilterObject] = useState({
    purpose: '',
    city: '',
    location: '',
    property_Type: '',
  });

  const getFilteredOutput = (check_Data, filterObject) => {
    const filterPurpose = check_Data?.filter(
      (item) => item?.purpose === filterObject?.purpose
    );
    const filterCity = check_Data?.filter(
      (item) => item?.city === filterObject?.city
    );
    const filterLocation = check_Data?.filter(
      (item) => item?.city === filterObject?.city
    );
    const filterPropertyType = check_Data?.filter(
      (item) => item?.propertyType === filterObject?.property_Type
    );
    const FilterOutput = [
      ...new Map(
        [
          ...filterPurpose,
          ...filterCity,
          ...filterLocation,
          ...filterPropertyType,
        ].map((item) => [item?.adId, item])
      ).values(),
    ];
    if (
      (filterObject?.purpose !== '' && filterObject?.purpose !== undefined) ||
      (filterObject?.city !== '' && filterObject?.city !== undefined) ||
      (filterObject?.location !== '' && filterObject?.location !== undefined) ||
      (filterObject?.property_Type !== '' &&
        filterObject?.property_Type !== undefined)
    ) {
      return FilterOutput;
    } else {
      return check_Data;
    }
  };

  const handleChangeTab = (event, newValue) => {
    let tab = event?.target?.innerText.split(' ');
    if (tab.length > 1) {
      tab = tab.slice(0, -1).join(' ');
    } else {
      tab = tab.join(' ');
    }
    setCurrentTab(tab);
    setValue(newValue);
  };
  const handleChangeSelect = (key, val) => {
    setfilterObject({
      ...filterObject,
      [key]: val,
    });
  };

  const handleReset = () => {
    setfilterObject({
      ...filterObject,
      purpose: '',
      city: '',
      location: '',
      property_Type: '',
    });
  };

  console.log(filterObject, 'filterObject');
  return (
    <>
      <Box sx={{ maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' } }}>
        <Grid
          container
          sx={{
            alignItems: 'flex-end',
          }}
        >
          <Grid item xs={6} md={2.75}>
            <Box sx={{ width: '90%' }}>
              <Typography>Purpose</Typography>
              <Autocomplete
                sx={{
                  marginTop: '20px',
                  background: '#fff',
                }}
                disablePortal
                id="combo-box-demo"
                value={filterObject?.purpose}
                onChange={(e) =>
                  handleChangeSelect('purpose', e.target.innerText)
                }
                options={[
                  {
                    label: 'Sell',
                    value: 'Sell',
                  },
                  {
                    label: 'Rent',
                    value: 'Rent',
                  },
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Select Purpose" />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={2.75}>
            <Box sx={{ width: '90%' }}>
              <Typography>City</Typography>
              <Autocomplete
                sx={{
                  marginTop: '20px',
                  background: '#fff',
                }}
                disablePortal
                id="combo-box-demo"
                value={filterObject?.city}
                onChange={(e) => handleChangeSelect('city', e.target.innerText)}
                options={[
                  {
                    label: 'Karachi',
                    value: 'Karachi',
                  },
                  {
                    label: 'Lahore',
                    value: 'Lahore',
                  },
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Select City" />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={2.75}>
            <Box sx={{ width: '90%' }}>
              <Typography>Location</Typography>
              <Autocomplete
                sx={{
                  marginTop: '20px',
                  background: '#fff',
                }}
                disablePortal
                id="combo-box-demo"
                value={filterObject?.location}
                onChange={(e) =>
                  handleChangeSelect('location', e.target.innerText)
                }
                options={[
                  {
                    label: 'GULSHAN-E-IQBAL',
                    value: 'GULSHAN-E-IQBAL',
                  },
                  {
                    label: 'Liaquatabad',
                    value: 'Liaquatabad',
                  },
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Select Location" />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={2.75}>
            <Box sx={{ width: '90%' }}>
              <Typography>Property Type</Typography>
              <Autocomplete
                sx={{
                  marginTop: '20px',
                  background: '#fff',
                }}
                disablePortal
                id="combo-box-demo"
                value={filterObject?.property_Type}
                onChange={(e) =>
                  handleChangeSelect('property_Type', e.target.innerText)
                }
                options={[
                  {
                    label: 'House',
                    value: 'House',
                  },
                  {
                    label: 'Flat',
                    value: 'Flat',
                  },
                  {
                    label: 'Upper Portion',
                    value: 'Upper Portion',
                  },
                  {
                    label: 'Lower Portion',
                    value: 'Lower Portion',
                  },
                  {
                    label: 'Farm House',
                    value: 'Farm House',
                  },
                  {
                    label: 'Room',
                    value: 'Room',
                  },
                  {
                    label: 'Pent House',
                    value: 'Pent House',
                  },
                  {
                    label: 'Residential Plots',
                    value: 'Residential Plots',
                  },
                  {
                    label: 'Commercial Plots',
                    value: 'Commercial Plots',
                  },
                  {
                    label: 'Agricultural Land',
                    value: 'Agricultural Land',
                  },
                  {
                    label: 'Industrial Land',
                    value: 'Industrial Land',
                  },
                  {
                    label: 'Plot File',
                    value: 'Plot File',
                  },
                  {
                    label: 'Plot Form',
                    value: 'Plot Form',
                  },
                  {
                    label: 'Office',
                    value: 'Office',
                  },
                  {
                    label: 'Shop',
                    value: 'Shop',
                  },
                  {
                    label: 'Ware House',
                    value: 'Ware House',
                  },
                  {
                    label: 'Building',
                    value: 'Building',
                  },
                ]}
                renderInput={(params) => (
                  <TextField {...params} label="Select Type" />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={1}>
            <Button
              onClick={() => handleReset()}
              variant="text"
              sx={{
                color: '#126FAA',
                textDecoration: 'underline',
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: '#fff',
          borderRadius: '10px',
          border: '1px solid #E4E4E4',
          mt: 6,
          mb: 6,
          mx: { xs: 'auto', lg: 0 },
          maxWidth: { lg: '1200px', xl: '1200px', xxl: '1500px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '30px',
          }}
        >
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChangeTab}
            aria-label="basic tabs example"
          >
            {tabs?.map(({ label, prop }, i) => (
              <Tab
                key={i}
                label={`${label}`}
                {...prop}
                disableRipple={true}
                sx={{
                  textTransform: 'math-auto',
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          {currentTab === 'All'
            ? getFilteredOutput(userPostings, filterObject)?.map((_, index) => (
                <ProposalCard key={index} index={index} />
              ))
            : currentTab === 'Active'
              ? getFilteredOutput(connectedProposals, filterObject)?.map(
                  (_, index) => <ProposalCard key={index} index={index} />
                )
              : currentTab === 'Draft'
                ? getFilteredOutput(draft, filterObject)?.map((_, index) => (
                    <ProposalCard key={index} index={index} />
                  ))
                : currentTab === 'Trash'
                  ? getFilteredOutput(trash, filterObject)?.map((_, index) => (
                      <ProposalCard key={index} index={index} />
                    ))
                  : null}
        </Box>
      </Box>
    </>
  );
};

export default Page;
